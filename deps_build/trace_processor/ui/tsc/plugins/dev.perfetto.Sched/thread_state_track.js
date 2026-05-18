"use strict";
// Copyright (C) 2023 The Android Open Source Project
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
exports.createThreadStateTrack = createThreadStateTrack;
const dataset_slice_track_1 = require("../../components/tracks/dataset_slice_track");
const dataset_1 = require("../../trace_processor/dataset");
const query_result_1 = require("../../trace_processor/query_result");
const common_1 = require("./common");
const thread_state_details_panel_1 = require("./thread_state_details_panel");
function createThreadStateTrack(trace, uri, utid) {
    return new dataset_slice_track_1.DatasetSliceTrack({
        trace,
        uri,
        dataset: new dataset_1.SourceDataset({
            schema: {
                id: query_result_1.NUM,
                ts: query_result_1.LONG,
                dur: query_result_1.LONG,
                layer: query_result_1.NUM,
                cpu: query_result_1.NUM_NULL,
                state: query_result_1.STR,
                io_wait: query_result_1.NUM_NULL,
                utid: query_result_1.NUM,
                name: query_result_1.STR,
                depth: query_result_1.NUM,
            },
            src: `
        SELECT
          id,
          ts,
          dur,
          cpu,
          state,
          io_wait,
          utid,
          sched_state_io_to_human_readable_string(state, io_wait) AS name,
          -- Move sleeping and idle slices to the back layer, others on top
          CASE
            WHEN state IN ('S', 'I') THEN 0
            ELSE 1
          END AS layer,
          0 AS depth
        FROM thread_state
      `,
            filter: {
                col: 'utid',
                eq: utid,
            },
        }),
        // Make thread slice tracks a little shorter in height.
        sliceLayout: {
            sliceHeight: 12,
            titleSizePx: 10,
        },
        colorizer: (row) => (0, common_1.colorForThreadState)(row.name),
        detailsPanel: (row) => new thread_state_details_panel_1.ThreadStateDetailsPanel(trace, row.id),
        rootTableName: 'thread_state',
    });
}
//# sourceMappingURL=thread_state_track.js.map