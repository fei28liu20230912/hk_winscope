"use strict";
// Copyright (C) 2025 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTrackEvents = searchTrackEvents;
const time_1 = require("../base/time");
const utils_1 = require("../base/utils");
const dataset_1 = require("../trace_processor/dataset");
const query_result_1 = require("../trace_processor/query_result");
const query_utils_1 = require("../trace_processor/query_utils");
// Searches for a given searchTerm within all tracks that have a name column.
async function searchTrackEvents(engine, tracks, searchTerm) {
    const trackGroups = buildTrackGroups(tracks);
    // TODO(stevegolton): We currently only search names and ids, but in the
    // future we will allow custom search facets to be defined by plugins.
    const names = await searchNames(trackGroups, searchTerm, engine);
    const ids = await searchIds(trackGroups, searchTerm, engine);
    const results = names.concat(ids);
    // Remove duplicates
    const uniqueResults = new Map();
    for (const result of results) {
        const key = `${result.id}-${result.ts}`;
        if (!uniqueResults.has(key)) {
            uniqueResults.set(key, result);
        }
    }
    // Sort the results by timestamp
    const sortedResults = Array.from(uniqueResults.values()).sort((a, b) => Number(a.ts - b.ts));
    return sortedResults;
}
function buildTrackGroups(tracks) {
    const trackGroups = new Map();
    for (const track of tracks) {
        const dataset = track.track.getDataset?.();
        if (dataset) {
            const src = dataset.src;
            const trackGroup = (0, utils_1.getOrCreate)(trackGroups, src, () => ({
                src,
                schema: {},
                nonPartitioned: [],
                partitioned: new Map(),
            }));
            addTrackToTrackGroup(trackGroup, track, dataset);
        }
    }
    return trackGroups;
}
function addTrackToTrackGroup(trackGroup, track, dataset) {
    const filter = dataset.filter;
    const schema = dataset.schema;
    // Combine schemas from all datasets in the group.
    for (const [col, type] of Object.entries(schema)) {
        // TODO(stevegolton): This is a bit of a hack as the data types could
        // conflict. In the future we will probably switch to a centralized
        // datasource approach which tracks will point to that has its own schema.
        trackGroup.schema[col] = type;
    }
    if (filter === undefined) {
        trackGroup.nonPartitioned.push(track);
    }
    else {
        const partitions = (0, utils_1.getOrCreate)(trackGroup.partitioned, filter.col, () => new Map());
        const addTrackToPartition = (value) => {
            const key = normalizeMapKey(value);
            const partition = (0, utils_1.getOrCreate)(partitions, key, () => []);
            partition.push(track);
        };
        if ('eq' in filter) {
            addTrackToPartition(filter.eq);
        }
        else {
            for (const value of filter.in) {
                addTrackToPartition(value);
            }
        }
    }
}
// Normalizes values used as keys in the partition map.
// This is necessary because SQL queries might return integer values as BigInts
// (e.g., for LONG types), while filter definitions might use standard numbers.
// This ensures consistent key types (BigInt for integers, others as-is)
// for reliable lookups in the JavaScript Map.
function normalizeMapKey(value) {
    if (typeof value === 'number' && Number.isInteger(value)) {
        return BigInt(value);
    }
    else {
        return value;
    }
}
async function searchNames(trackGroups, searchTerm, engine) {
    let searchResults = [];
    // Process each track group
    for (const trackGroup of trackGroups.values()) {
        // Only search track groups that implement the required schema
        // The schema check ensures 'id', 'ts', and 'name' columns exist.
        const groupDataset = new dataset_1.SourceDataset({
            src: trackGroup.src,
            schema: trackGroup.schema,
        });
        if (groupDataset.implements({ id: query_result_1.NUM, ts: query_result_1.LONG, name: query_result_1.STR_NULL })) {
            const results = await searchTrackGroup(trackGroup, `name GLOB ${(0, query_utils_1.escapeSearchQuery)(searchTerm)}`, engine);
            searchResults = searchResults.concat(results);
        }
    }
    return searchResults;
}
async function searchIds(trackGroups, searchTerm, engine) {
    // Check if the search term is can be parsed as an int.
    const id = Number(searchTerm);
    // Note: Number.isInteger also returns false for NaN.
    if (!Number.isInteger(id)) {
        return [];
    }
    let searchResults = [];
    // Process each track group
    for (const trackGroup of trackGroups.values()) {
        // Only search track groups that implement the required schema
        // The schema check ensures 'id', 'ts' columns exist.
        const groupDataset = new dataset_1.SourceDataset({
            src: trackGroup.src,
            schema: trackGroup.schema,
        });
        if (groupDataset.implements({ id: query_result_1.NUM, ts: query_result_1.LONG })) {
            const results = await searchTrackGroup(trackGroup, `id = ${id}`, engine);
            searchResults = searchResults.concat(results);
        }
    }
    return searchResults;
}
async function searchTrackGroup(trackGroup, condition, engine) {
    const results = [];
    const partitionCols = Array.from(trackGroup.partitioned.keys());
    const partitionColSchema = Object.fromEntries(partitionCols.map((key) => [key, query_result_1.UNKNOWN]));
    // Ensure required columns plus any partition columns are selected.
    const schema = { id: query_result_1.NUM, ts: query_result_1.LONG, ...partitionColSchema };
    const selectCols = ['id', 'ts', ...partitionCols];
    // Build and execute search query
    const query = `
    SELECT
      ${selectCols.join(', ')}
    FROM (${trackGroup.src})
    WHERE ${condition}
  `;
    const result = await engine.query(query);
    // Process query results
    for (const iter = result.iter(schema); iter.valid(); iter.next()) {
        const id = iter.id;
        const ts = time_1.Time.fromRaw(iter.ts);
        // Add results for matching partitioned tracks
        for (const colName of partitionCols) {
            const partitionValue = iter.get(colName);
            const tracks = trackGroup.partitioned.get(colName)?.get(partitionValue);
            if (tracks) {
                for (const track of tracks) {
                    results.push({ id, ts, track });
                }
            }
        }
        // Add results for non-partitioned tracks (they match any row from the
        // source)
        for (const track of trackGroup.nonPartitioned) {
            results.push({ id, ts, track });
        }
    }
    return results;
}
//# sourceMappingURL=dataset_search.js.map