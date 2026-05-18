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
const aggregation_adapter_1 = require("../../components/aggregation_adapter");
const power_counter_selection_aggregator_1 = require("./power_counter_selection_aggregator");
/**
 * This plugin adds the aggregations for power rail counter tracks.
 */
class default_1 {
    static id = 'dev.perfetto.PowerAggregations';
    async onTraceLoad(ctx) {
        ctx.selection.registerAreaSelectionTab((0, aggregation_adapter_1.createAggregationToTabAdaptor)(ctx, new power_counter_selection_aggregator_1.PowerCounterSelectionAggregator(), 200));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map