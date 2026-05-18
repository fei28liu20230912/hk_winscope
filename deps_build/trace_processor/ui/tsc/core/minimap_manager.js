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
exports.MinimapManagerImpl = void 0;
const high_precision_time_span_1 = require("../base/high_precision_time_span");
const resolution_1 = require("../frontend/viewer_page/resolution");
class MinimapManagerImpl {
    contentProviders = [];
    rows;
    getLoad() {
        return this.rows;
    }
    registerContentProvider(x) {
        this.contentProviders.push(x);
        // Sort the highest priority content provider first.
        this.contentProviders.sort((a, b) => b.priority - a.priority);
    }
    getContentProvider() {
        return this.contentProviders[0];
    }
    async load(start, end) {
        const provider = this.getContentProvider();
        if (!provider) {
            return;
        }
        // Find the trace bounds and split it up into a resolution
        const timeSpan = high_precision_time_span_1.HighPrecisionTimeSpan.fromTime(start, end);
        const resolution = (0, resolution_1.calculateResolution)(timeSpan, 100);
        if (!resolution.ok) {
            return;
        }
        this.rows = await provider.getData(timeSpan, resolution.value);
    }
}
exports.MinimapManagerImpl = MinimapManagerImpl;
//# sourceMappingURL=minimap_manager.js.map