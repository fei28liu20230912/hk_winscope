"use strict";
// Copyright (C) 2024 The Android Open Source Project
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
exports.Minimap = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const disposable_stack_1 = require("../../base/disposable_stack");
const dom_utils_1 = require("../../base/dom_utils");
const geom_1 = require("../../base/geom");
const high_precision_time_span_1 = require("../../base/high_precision_time_span");
const logging_1 = require("../../base/logging");
const time_1 = require("../../base/time");
const time_scale_1 = require("../../base/time_scale");
const zoned_interaction_handler_1 = require("../../base/zoned_interaction_handler");
const colorizer_1 = require("../../components/colorizer");
const timeline_1 = require("../../public/timeline");
const virtual_overlay_canvas_1 = require("../../widgets/virtual_overlay_canvas");
const css_constants_1 = require("../css_constants");
const gridline_helper_1 = require("./gridline_helper");
const HANDLE_SIZE_PX = 5;
class Minimap {
    trash = new disposable_stack_1.DisposableStack();
    interactions;
    view({ attrs }) {
        return (0, mithril_1.default)(virtual_overlay_canvas_1.VirtualOverlayCanvas, {
            onMount: (redrawCanvas) => attrs.trace.raf.addCanvasRedrawCallback(redrawCanvas),
            disableCanvasRedrawOnMithrilUpdates: true,
            className: attrs.className,
            onCanvasRedraw: ({ ctx, virtualCanvasSize }) => {
                this.renderCanvas(attrs.trace, ctx, virtualCanvasSize);
            },
        }, (0, mithril_1.default)('.pf-overview-timeline'));
    }
    oncreate({ dom }) {
        this.interactions = new zoned_interaction_handler_1.ZonedInteractionHandler((0, dom_utils_1.toHTMLElement)(dom));
        this.trash.use(this.interactions);
    }
    onremove(_) {
        this.trash.dispose();
    }
    renderCanvas(trace, ctx, size) {
        if (size.width <= 0)
            return;
        const traceTime = trace.traceInfo;
        const pxBounds = { left: 0, right: size.width };
        const hpTraceTime = high_precision_time_span_1.HighPrecisionTimeSpan.fromTime(traceTime.start, traceTime.end);
        const timescale = new time_scale_1.TimeScale(hpTraceTime, pxBounds);
        const headerHeight = 20;
        const tracksHeight = size.height - headerHeight;
        const traceContext = new time_1.TimeSpan(trace.traceInfo.start, trace.traceInfo.end);
        if (size.width > 0 && traceContext.duration > 0n) {
            const maxMajorTicks = (0, gridline_helper_1.getMaxMajorTicks)(size.width);
            const offset = trace.timeline.timestampOffset();
            const tickGen = (0, gridline_helper_1.generateTicks)(traceContext, maxMajorTicks, offset);
            // Draw time labels
            ctx.font = '10px Roboto Condensed';
            ctx.fillStyle = '#999';
            for (const { type, time } of tickGen) {
                const xPos = Math.floor(timescale.timeToPx(time));
                if (xPos <= 0)
                    continue;
                if (xPos > size.width)
                    break;
                if (type === gridline_helper_1.TickType.MAJOR) {
                    ctx.fillRect(xPos - 1, 0, 1, headerHeight - 5);
                    const domainTime = trace.timeline.toDomainTime(time);
                    renderTimestamp(trace, ctx, domainTime, xPos + 5, 18, gridline_helper_1.MIN_PX_PER_STEP);
                }
                else if (type == gridline_helper_1.TickType.MEDIUM) {
                    ctx.fillRect(xPos - 1, 0, 1, 8);
                }
                else if (type == gridline_helper_1.TickType.MINOR) {
                    ctx.fillRect(xPos - 1, 0, 1, 5);
                }
            }
        }
        // Render the minimap data
        const rows = trace.minimap.getLoad();
        if (rows) {
            const numTracks = rows.length;
            const trackHeight = (tracksHeight - 1) / numTracks;
            let y = 0;
            for (const row of rows) {
                for (const cell of row) {
                    const x = Math.floor(timescale.timeToPx(cell.ts));
                    const width = Math.ceil(timescale.durationToPx(cell.dur));
                    const yOff = Math.floor(headerHeight + y * trackHeight);
                    const lightness = Math.ceil((1 - cell.load * 0.7) * 100);
                    const color = (0, colorizer_1.colorForCpu)(y).setHSL({ s: 50, l: lightness });
                    ctx.fillStyle = color.cssString;
                    ctx.fillRect(x, yOff, width, Math.ceil(trackHeight));
                }
                y++;
            }
        }
        // Draw bottom border.
        ctx.fillStyle = '#dadada';
        ctx.fillRect(0, size.height - 1, size.width, 1);
        // Draw semi-opaque rects that occlude the non-visible time range.
        const { left, right } = timescale.hpTimeSpanToPxSpan(trace.timeline.visibleWindow);
        const vizStartPx = Math.floor(left);
        const vizEndPx = Math.ceil(right);
        ctx.fillStyle = css_constants_1.OVERVIEW_TIMELINE_NON_VISIBLE_COLOR;
        ctx.fillRect(0, headerHeight, vizStartPx, tracksHeight);
        ctx.fillRect(vizEndPx, headerHeight, size.width - vizEndPx, tracksHeight);
        // Draw brushes.
        ctx.fillStyle = '#999';
        ctx.fillRect(vizStartPx - 1, headerHeight, 1, tracksHeight);
        ctx.fillRect(vizEndPx, headerHeight, 1, tracksHeight);
        const hbarWidth = HANDLE_SIZE_PX;
        const hbarHeight = tracksHeight * 0.4;
        // Draw handlebar
        ctx.fillRect(vizStartPx - Math.floor(hbarWidth / 2) - 1, headerHeight, hbarWidth, hbarHeight);
        ctx.fillRect(vizEndPx - Math.floor(hbarWidth / 2), headerHeight, hbarWidth, hbarHeight);
        (0, logging_1.assertExists)(this.interactions).update([
            {
                id: 'left-handle',
                area: geom_1.Rect2D.fromPointAndSize({
                    x: vizStartPx - Math.floor(hbarWidth / 2) - 1,
                    y: 0,
                    width: hbarWidth,
                    height: size.height,
                }),
                cursor: 'col-resize',
                drag: {
                    cursorWhileDragging: 'col-resize',
                    onDrag: (event) => {
                        const delta = timescale.pxToDuration(event.deltaSinceLastEvent.x);
                        trace.timeline.moveStart(delta);
                    },
                },
            },
            {
                id: 'right-handle',
                area: geom_1.Rect2D.fromPointAndSize({
                    x: vizEndPx - Math.floor(hbarWidth / 2) - 1,
                    y: 0,
                    width: hbarWidth,
                    height: size.height,
                }),
                cursor: 'col-resize',
                drag: {
                    cursorWhileDragging: 'col-resize',
                    onDrag: (event) => {
                        const delta = timescale.pxToDuration(event.deltaSinceLastEvent.x);
                        trace.timeline.moveEnd(delta);
                    },
                },
            },
            {
                id: 'drag',
                area: new geom_1.Rect2D({
                    left: vizStartPx,
                    right: vizEndPx,
                    top: 0,
                    bottom: size.height,
                }),
                cursor: 'grab',
                drag: {
                    cursorWhileDragging: 'grabbing',
                    onDrag: (event) => {
                        const delta = timescale.pxToDuration(event.deltaSinceLastEvent.x);
                        trace.timeline.panVisibleWindow(delta);
                    },
                },
            },
            {
                id: 'select',
                area: new geom_1.Rect2D({
                    left: 0,
                    right: size.width,
                    top: 0,
                    bottom: size.height,
                }),
                cursor: 'text',
                drag: {
                    cursorWhileDragging: 'text',
                    onDrag: (event) => {
                        const span = timescale.pxSpanToHpTimeSpan(geom_1.Rect2D.fromPoints(event.dragStart, event.dragCurrent));
                        trace.timeline.updateVisibleTimeHP(span);
                    },
                },
            },
        ]);
    }
}
exports.Minimap = Minimap;
// Print a timestamp in the configured time format
function renderTimestamp(trace, ctx, time, x, y, minWidth) {
    const fmt = trace.timeline.timestampFormat;
    switch (fmt) {
        case timeline_1.TimestampFormat.UTC:
        case timeline_1.TimestampFormat.TraceTz:
        case timeline_1.TimestampFormat.Timecode:
            renderTimecode(ctx, time, x, y, minWidth);
            break;
        case timeline_1.TimestampFormat.TraceNs:
            ctx.fillText(time.toString(), x, y, minWidth);
            break;
        case timeline_1.TimestampFormat.TraceNsLocale:
            ctx.fillText(time.toLocaleString(), x, y, minWidth);
            break;
        case timeline_1.TimestampFormat.Seconds:
            ctx.fillText(time_1.Time.formatSeconds(time), x, y, minWidth);
            break;
        case timeline_1.TimestampFormat.Milliseconds:
            ctx.fillText(time_1.Time.formatMilliseconds(time), x, y, minWidth);
            break;
        case timeline_1.TimestampFormat.Microseconds:
            ctx.fillText(time_1.Time.formatMicroseconds(time), x, y, minWidth);
            break;
        default:
            (0, logging_1.assertUnreachable)(fmt);
    }
}
// Print a timecode over 2 lines with this formatting:
// DdHH:MM:SS
// mmm uuu nnn
function renderTimecode(ctx, time, x, y, minWidth) {
    const timecode = time_1.Time.toTimecode(time);
    const { dhhmmss } = timecode;
    ctx.fillText(dhhmmss, x, y, minWidth);
}
//# sourceMappingURL=minimap.js.map