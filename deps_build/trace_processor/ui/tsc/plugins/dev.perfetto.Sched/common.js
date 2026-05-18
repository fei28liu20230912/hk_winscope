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
exports.CPU_SLICE_URI_PREFIX = void 0;
exports.uriForSchedTrack = uriForSchedTrack;
exports.colorForThreadState = colorForThreadState;
const color_1 = require("../../base/color");
const colorizer_1 = require("../../components/colorizer");
exports.CPU_SLICE_URI_PREFIX = '/sched_cpu';
// Helper function moved here as it's only used by the overlay.
function uriForSchedTrack(cpu) {
    return `${exports.CPU_SLICE_URI_PREFIX}${cpu}`;
}
const DESAT_RED = (0, colorizer_1.makeColorScheme)(new color_1.HSLColor([3, 30, 49]));
const DARK_GREEN = (0, colorizer_1.makeColorScheme)(new color_1.HSLColor([120, 44, 34]));
const LIME_GREEN = (0, colorizer_1.makeColorScheme)(new color_1.HSLColor([75, 55, 47]));
const TRANSLUCENT_GRAY = {
    base: new color_1.HSLColor([0, 1, 50], 0),
    variant: new color_1.HSLColor([0, 1, 50], 0.2),
    disabled: colorizer_1.GRAY_COLOR,
    // Make the text invisible
    textBase: new color_1.HSLColor([0, 0, 0], 0),
    textVariant: new color_1.HSLColor([0, 0, 0], 0),
    textDisabled: new color_1.HSLColor([0, 0, 0], 0),
};
const ORANGE = (0, colorizer_1.makeColorScheme)(new color_1.HSLColor([36, 100, 50]));
const INDIGO = (0, colorizer_1.makeColorScheme)(new color_1.HSLColor([231, 48, 48]));
function colorForThreadState(state) {
    if (state === 'Running') {
        return DARK_GREEN;
    }
    else if (state.startsWith('Runnable')) {
        return LIME_GREEN;
    }
    else if (state.includes('Uninterruptible Sleep')) {
        if (state.includes('non-IO')) {
            return DESAT_RED;
        }
        return ORANGE;
    }
    else if (state.includes('Dead')) {
        return colorizer_1.GRAY;
    }
    else if (state.includes('Sleeping') || state.includes('Idle')) {
        return TRANSLUCENT_GRAY;
    }
    return INDIGO;
}
//# sourceMappingURL=common.js.map