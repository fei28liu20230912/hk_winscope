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
const tslib_1 = require("tslib");
const workspace_1 = require("../../public/workspace");
const track_kinds_1 = require("../../public/track_kinds");
const aggregation_adapter_1 = require("../../components/aggregation_adapter");
const query_result_1 = require("../../trace_processor/query_result");
const dev_perfetto_StandardGroups_1 = tslib_1.__importDefault(require("../dev.perfetto.StandardGroups"));
const entity_state_residency_selection_aggregator_1 = require("./entity_state_residency_selection_aggregator");
const query_counter_track_1 = require("../../components/tracks/query_counter_track");
/**
 * This plugin handles the aggregations for entity state residency counter tracks.
 */
class default_1 {
    static id = 'dev.perfetto.EntityStateResidency';
    static dependencies = [dev_perfetto_StandardGroups_1.default];
    async onTraceLoad(ctx) {
        ctx.selection.registerAreaSelectionTab((0, aggregation_adapter_1.createAggregationToTabAdaptor)(ctx, new entity_state_residency_selection_aggregator_1.EntityStateResidencySelectionAggregator(), 200));
        const result = await ctx.engine.query(`
          INCLUDE PERFETTO MODULE android.entity_state_residency;
          SELECT
            entity_name AS entity,
            state_name AS state,
            track_id AS trackId
          FROM android_entity_state_residency
          GROUP BY
            entity_name, state_name, track_id
          ORDER BY
            entity_name, state_name
        `);
        let entityResidencyGroup;
        let currentGroup;
        const it = result.iter({ entity: query_result_1.STR, state: query_result_1.STR, trackId: query_result_1.NUM });
        for (; it.valid(); it.next()) {
            if (!entityResidencyGroup) {
                const powerGroup = ctx.plugins
                    .getPlugin(dev_perfetto_StandardGroups_1.default)
                    .getOrCreateStandardGroup(ctx.workspace, 'POWER');
                entityResidencyGroup = new workspace_1.TrackNode({ title: 'Entity Residency' });
                powerGroup.addChildInOrder(entityResidencyGroup);
            }
            // Create a track group for the current entity if it does not already
            // exist.
            if (currentGroup?.title !== it.entity) {
                currentGroup = new workspace_1.TrackNode({ title: it.entity, isSummary: true });
                entityResidencyGroup.addChildInOrder(currentGroup);
            }
            // Create and register a track for the state residency.
            const uri = `/entity_state_residency_${it.entity}_${it.state}`;
            const name = it.state;
            const track = await (0, query_counter_track_1.createQueryCounterTrack)({
                trace: ctx,
                uri,
                data: {
                    sqlSource: `
              SELECT
                ts,
                state_time_since_boot / 1e9 AS value
              FROM android_entity_state_residency
              WHERE track_id = ${it.trackId}
            `,
                    columns: ['ts', 'value'],
                },
                columns: { ts: 'ts', value: 'value' },
                options: {
                    yMode: 'rate',
                    yRangeSharingKey: `entity_state_residency_${it.entity}`,
                    unit: 's',
                },
            });
            ctx.tracks.registerTrack({
                uri,
                title: name,
                tags: {
                    kind: track_kinds_1.COUNTER_TRACK_KIND,
                    trackIds: [it.trackId],
                    type: 'entity_state',
                },
                track,
            });
            currentGroup.addChildInOrder(new workspace_1.TrackNode({ uri, title: name }));
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map