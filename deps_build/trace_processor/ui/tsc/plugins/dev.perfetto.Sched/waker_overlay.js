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
exports.WakerOverlay = void 0;
const tslib_1 = require("tslib");
const async_limiter_1 = require("../../base/async_limiter");
const canvas_utils_1 = require("../../base/canvas_utils");
const time_1 = require("../../base/time");
const vertical_line_helper_1 = require("../../base/vertical_line_helper");
const core_types_1 = require("../../components/sql_utils/core_types");
const sched_1 = require("../../components/sql_utils/sched");
const common_1 = require("./common");
const MARGIN = 3;
const DIAMOND_SIZE = 8;
const ARROW_HEIGHT = 12;
class WakerOverlay {
    limiter = new async_limiter_1.AsyncLimiter();
    trace;
    wakeupCache = new WeakMap();
    cachedSelection;
    constructor(trace) {
        this.trace = trace;
    }
    render(canvasCtx, timescale, size, renderedTracks) {
        const selection = this.trace.selection.selection;
        // Get out if selection is not a CPU slice.
        if (!this.cpuSliceTrackSelected(selection)) {
            this.cachedSelection = undefined;
            return;
        }
        // Compare the current selection with the cached one to determine if it has
        // changed and we need to start loading new wakeup info.
        if (this.cachedSelection !== selection) {
            this.cachedSelection = selection;
            this.limiter.schedule(async () => {
                const wakeupInfo = await this.loadWakeupInfo(selection);
                if (!wakeupInfo)
                    return;
                this.wakeupCache.set(selection, wakeupInfo);
            });
        }
        // Check if we have the wakeup info cached, get out if not.
        const wakeup = this.wakeupCache.get(selection);
        if (!wakeup || !wakeup.wakeupTs) {
            return;
        }
        // Draw the vertical line at the wakeup timestamp
        this.drawWakeupLine(canvasCtx, timescale, size.height, wakeup.wakeupTs);
        // Draw the marker on the waker CPU track
        if (wakeup.wakerCpu !== undefined) {
            this.drawWakerMarker(canvasCtx, timescale, renderedTracks, wakeup.wakeupTs, wakeup.wakerCpu);
        }
        this.drawLatencyArrow(canvasCtx, timescale, renderedTracks, wakeup.wakeupTs, selection.trackUri, selection.ts);
    }
    cpuSliceTrackSelected(selection) {
        return (selection.kind === 'track_event' &&
            selection.trackUri.startsWith(common_1.CPU_SLICE_URI_PREFIX));
    }
    async loadWakeupInfo(selection) {
        const sched = await (0, sched_1.getSched)(this.trace.engine, (0, core_types_1.asSchedSqlId)(selection.eventId));
        if (!sched)
            return undefined;
        const cache = await (0, sched_1.getSchedWakeupInfo)(this.trace.engine, sched);
        return cache;
    }
    drawWakeupLine(canvasCtx, timescale, height, wakeupTs) {
        (0, vertical_line_helper_1.drawVerticalLineAtTime)(canvasCtx, timescale, wakeupTs, height, `black`);
    }
    drawWakerMarker(canvasCtx, timescale, renderedTracks, wakeupTs, wakerCpu) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const wakerCpuTrackUri = (0, common_1.uriForSchedTrack)(wakerCpu);
            const wakerTrack = renderedTracks.find((track) => wakerCpuTrackUri === track.node.uri);
            if (!wakerTrack)
                return;
            const bounds = wakerTrack.verticalBounds;
            const trackHeight = bounds.bottom - bounds.top;
            const rectHeight = trackHeight - 2 * MARGIN;
            const wakeupPosPx = Math.floor(timescale.timeToPx(wakeupTs));
            const _ = tslib_1.__addDisposableResource(env_1, (0, canvas_utils_1.canvasSave)(canvasCtx), false);
            canvasCtx.translate(0, bounds.top);
            canvasCtx.beginPath();
            const yCenter = MARGIN + rectHeight / 2;
            canvasCtx.moveTo(wakeupPosPx, yCenter + DIAMOND_SIZE);
            canvasCtx.fillStyle = 'black';
            canvasCtx.lineTo(wakeupPosPx + DIAMOND_SIZE * 0.75, yCenter);
            canvasCtx.lineTo(wakeupPosPx, yCenter - DIAMOND_SIZE);
            canvasCtx.lineTo(wakeupPosPx - DIAMOND_SIZE * 0.75, yCenter);
            canvasCtx.fill();
            canvasCtx.closePath();
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            tslib_1.__disposeResources(env_1);
        }
    }
    drawLatencyArrow(canvasCtx, timescale, renderedTracks, wakeupTs, wakedTrackUri, wakedSliceTs) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const wakedTrack = renderedTracks.find((track) => wakedTrackUri === track.node.uri);
            if (!wakedTrack)
                return;
            const bounds = wakedTrack.verticalBounds;
            const trackHeight = bounds.bottom - bounds.top;
            const rectHeight = trackHeight - 2 * MARGIN;
            const wakeupPosPx = timescale.timeToPx(wakeupTs);
            const wakedSliceStartPx = timescale.timeToPx(wakedSliceTs);
            const latencyWidthPx = wakedSliceStartPx - wakeupPosPx;
            const _ = tslib_1.__addDisposableResource(env_2, (0, canvas_utils_1.canvasSave)(canvasCtx), false);
            canvasCtx.translate(0, bounds.top);
            // Draw the double-headed arrow
            (0, canvas_utils_1.drawDoubleHeadedArrow)(canvasCtx, wakeupPosPx, MARGIN + rectHeight, latencyWidthPx, latencyWidthPx >= 20);
            // Draw latency text if space permits
            const latency = wakedSliceTs - wakeupTs;
            const displayText = time_1.Duration.humanise(latency);
            const measured = canvasCtx.measureText(displayText);
            if (latencyWidthPx >= measured.width + 2) {
                const textX = wakeupPosPx + latencyWidthPx / 2;
                const textY = MARGIN + rectHeight - 1;
                const textBgY = MARGIN + rectHeight - ARROW_HEIGHT;
                // Semi-transparent background for text
                canvasCtx.fillStyle = 'rgba(255,255,255,0.7)';
                canvasCtx.fillRect(textX - measured.width / 2 - 1, textBgY, measured.width + 2, ARROW_HEIGHT - 1);
                // Latency text
                canvasCtx.textBaseline = 'bottom';
                canvasCtx.fillStyle = 'black';
                canvasCtx.textAlign = 'center';
                canvasCtx.fillText(displayText, textX, textY);
            }
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            tslib_1.__disposeResources(env_2);
        }
    }
}
exports.WakerOverlay = WakerOverlay;
//# sourceMappingURL=waker_overlay.js.map