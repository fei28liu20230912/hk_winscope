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
exports.PowerCounterSelectionAggregator = void 0;
const time_1 = require("../../base/time");
const track_kinds_1 = require("../../public/track_kinds");
const query_result_1 = require("../../trace_processor/query_result");
class PowerCounterSelectionAggregator {
    id = 'power_counter_aggregation';
    // This just describes which counters we match, we don't actually use the
    // resulting datasets, but it's a useful too to show what we actually match.
    trackKind = track_kinds_1.COUNTER_TRACK_KIND;
    schema = {
        id: query_result_1.NUM,
        ts: query_result_1.LONG,
        value: query_result_1.NUM,
    };
    async createAggregateView(engine, area) {
        const trackIds = [];
        for (const trackInfo of area.tracks) {
            if (trackInfo?.tags?.kind === track_kinds_1.COUNTER_TRACK_KIND &&
                trackInfo?.tags?.type === 'power_rails') {
                trackInfo.tags?.trackIds && trackIds.push(...trackInfo.tags.trackIds);
            }
        }
        if (trackIds.length === 0)
            return false;
        const duration = area.end - area.start;
        const durationSec = time_1.Duration.toSeconds(duration);
        const query = `CREATE OR REPLACE PERFETTO TABLE ${this.id} AS
      WITH  aggregated AS (
        SELECT track_id,
          COUNT(1) AS count,
          value_at_max_ts(-ts, value) AS first,
          value_at_max_ts(ts, value) AS last
        FROM counter
        WHERE counter.track_id in (${trackIds})
          AND ts BETWEEN ${area.start} AND ${area.end}
        GROUP BY track_id
      )
      SELECT
        name,
        count,
        last - first AS delta_value,
        ROUND((last - first)/${durationSec}, 2) AS rate
      FROM aggregated JOIN counter_track ON
        track_id = counter_track.id
      GROUP BY track_id`;
        await engine.query(query);
        return true;
    }
    getColumnDefinitions() {
        return [
            {
                title: 'Rail Name',
                kind: 'STRING',
                columnConstructor: Uint16Array,
                columnId: 'name',
            },
            {
                title: 'Delta energy (uJ)',
                kind: 'NUMBER',
                columnConstructor: Float64Array,
                columnId: 'delta_value',
            },
            {
                title: 'Avg Power (uW)',
                kind: 'Number',
                columnConstructor: Float64Array,
                columnId: 'rate',
            },
            {
                title: 'Sample Count',
                kind: 'Number',
                columnConstructor: Float64Array,
                columnId: 'count',
                sum: true,
            },
        ];
    }
    getTabName() {
        return 'Power Counters';
    }
    getDefaultSorting() {
        return { column: 'name', direction: 'DESC' };
    }
}
exports.PowerCounterSelectionAggregator = PowerCounterSelectionAggregator;
//# sourceMappingURL=power_counter_selection_aggregator.js.map