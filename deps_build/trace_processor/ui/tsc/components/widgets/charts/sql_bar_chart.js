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
exports.SqlBarChart = exports.SqlBarChartState = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const filters_1 = require("../sql/table/filters");
const sql_column_1 = require("../sql/table/sql_column");
const query_builder_1 = require("../sql/table/query_builder");
const query_result_1 = require("../../../trace_processor/query_result");
const spinner_1 = require("../../../widgets/spinner");
const vega_view_1 = require("../vega_view");
const json_utils_1 = require("../../../base/json_utils");
const popup_1 = require("../../../widgets/popup");
const raf_scheduler_1 = require("../../../core/raf_scheduler");
const button_1 = require("../../../widgets/button");
const async_limiter_1 = require("../../../base/async_limiter");
const logging_1 = require("../../../base/logging");
class SqlBarChartState {
    args;
    data;
    limiter = new async_limiter_1.AsyncLimiter();
    constructor(args) {
        this.args = args;
        this.reload();
        args.filters.addObserver(() => this.reload());
    }
    reload() {
        this.limiter.schedule(async () => {
            this.data = undefined;
            const query = (0, query_builder_1.buildSqlQuery)({
                table: this.args.sqlSource,
                filters: this.args.filters.get(),
                columns: {
                    value: this.args.column,
                    count: new sql_column_1.SqlExpression(() => 'count()', []),
                },
                groupBy: [this.args.column],
            });
            const result = await this.args.trace.engine.query(query);
            const rawData = [];
            for (let it = result.iter({ count: query_result_1.NUM }); it.valid(); it.next()) {
                rawData.push({
                    value: it.get('value'),
                    count: it.count,
                    // Add a unique row id to identify the row in the chart.
                    rowId: `${rawData.length}`,
                });
            }
            // Sort by count in descending order. We want to sort the data ourselves
            // instead of relying on vega-lite to be able to show only top N rows (coming in the near future).
            rawData.sort((a, b) => b.count - a.count);
            // Map rowIds back to value and count.
            const rowIdToValue = new Map();
            for (const d of rawData) {
                rowIdToValue.set(d.rowId, { value: d.value, count: d.count });
            }
            this.data = {
                raw: rawData,
                rowIdToValue,
            };
        });
    }
    getData() {
        return this.data;
    }
}
exports.SqlBarChartState = SqlBarChartState;
class SqlBarChart {
    lastClickCoordinates;
    selection = [];
    view({ attrs }) {
        const data = attrs.state.getData();
        if (data === undefined)
            return (0, mithril_1.default)(spinner_1.Spinner);
        return (0, mithril_1.default)('figure.pf-chart', (0, mithril_1.default)(vega_view_1.VegaView, {
            spec: (0, json_utils_1.stringifyJsonWithBigints)(this.getVegaSpec(attrs, data)),
            data: {},
            // Listen to 'click' event to determine the position of the popup.
            eventHandlers: [
                {
                    name: 'click',
                    handler: ({ view, event, item }) => {
                        const e = event;
                        const i = item;
                        const [_, originY] = view.origin();
                        this.lastClickCoordinates = {
                            x: e.offsetX,
                            // Show the popup to the bottom of the selected row.
                            y: originY + (i?.bounds?.y2 ?? 0),
                        };
                        raf_scheduler_1.raf.scheduleFullRedraw();
                    },
                },
            ],
            // Listen to 'point' signal to monitor changes to the selection.
            signalHandlers: [
                {
                    name: vega_view_1.VegaLiteSelectionTypes.POINT,
                    handler: ({ value }) => {
                        (this.selection =
                            value.rowId === undefined ? [] : [...value.rowId]),
                            raf_scheduler_1.raf.scheduleFullRedraw();
                    },
                },
            ],
            // We rely on listening to signals from vega view to synchronise the selection
            // state between JS and vega, so we need to clear it when the vega view is destroyed.
            onViewDestroyed: () => {
                this.selection = [];
            },
        }), (0, mithril_1.default)(popup_1.Popup, {
            trigger: (0, mithril_1.default)('', {
                style: {
                    left: this.lastClickCoordinates?.x + 'px',
                    top: this.lastClickCoordinates?.y + 'px',
                    width: '0px',
                    height: '0px',
                    position: 'absolute',
                },
            }),
            position: popup_1.PopupPosition.Bottom,
            isOpen: this.selection.length > 0,
            offset: 5,
        }, this.renderPopup(attrs, data)));
    }
    // Show a popup with information about each value and allow adding filters.
    renderPopup(attrs, data) {
        const selectedCount = this.selection
            .map((rowId) => data.rowIdToValue.get(rowId)?.count ?? 0)
            .reduce((a, b) => a + b, 0);
        const total = data.raw.map((d) => d.count).reduce((a, b) => a + b, 0);
        return (0, mithril_1.default)('.pf-chart-popup', this.selection.length === 1 &&
            (0, mithril_1.default)('.pf-chart-popup__tooltip-bold-text', `${data.rowIdToValue.get(this.selection[0])?.value}`), this.selection.length > 1 &&
            (0, mithril_1.default)('.pf-chart-popup__tooltip-bold-text', `${this.selection.length} items: ${this.selection.map((rowId) => data.rowIdToValue.get(rowId)?.value).join(', ')}`), (0, mithril_1.default)('.pf-chart-popup__tooltip-text-line', `Value: ${selectedCount} (${((selectedCount / total) * 100).toFixed(2)}%)`), (0, mithril_1.default)(button_1.ButtonBar, (0, mithril_1.default)(button_1.Button, {
            label: `Add filter: ${this.selection.length === 1 ? 'equals' : 'is one of'}`,
            onclick: () => {
                attrs.state.args.filters.addFilter(filters_1.StandardFilters.valueIsOneOf(attrs.state.args.column, this.selection.map((rowId) => (0, logging_1.assertDefined)(data.rowIdToValue.get(rowId)?.value))));
            },
        }), (0, mithril_1.default)(button_1.Button, {
            label: `Add filter: not equals`,
            onclick: () => {
                attrs.state.args.filters.addFilters(this.selection.map((rowId) => filters_1.StandardFilters.valueNotEquals(attrs.state.args.column, (0, logging_1.assertDefined)(data.rowIdToValue.get(rowId)?.value))));
            },
        })));
    }
    getVegaSpec(attrs, data) {
        return {
            $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
            width: 'container',
            mark: 'bar',
            data: {
                values: data.raw,
            },
            params: [
                {
                    name: vega_view_1.VegaLiteSelectionTypes.POINT,
                    select: {
                        type: vega_view_1.VegaLiteSelectionTypes.POINT,
                        fields: ['value', 'rowId'],
                    },
                },
            ],
            encoding: {
                y: {
                    field: 'value',
                    title: (0, sql_column_1.sqlColumnId)(attrs.state.args.column),
                    sort: null,
                    axis: {
                        labelLimit: 500,
                    },
                },
                x: {
                    field: 'count',
                    type: 'quantitative',
                    title: 'Count',
                    axis: {
                        orient: 'top',
                    },
                },
                color: {
                    condition: {
                        param: vega_view_1.VegaLiteSelectionTypes.POINT,
                        value: 'red',
                        empty: false,
                    },
                },
            },
            config: {
                axisY: {
                    titleLineHeight: 15,
                    titleBaseline: 'line-bottom',
                    titleAngle: 0,
                    titleAnchor: 'start',
                    titleAlign: 'left',
                },
            },
            view: {
                strokeWidth: 0,
            },
        };
    }
}
exports.SqlBarChart = SqlBarChart;
//# sourceMappingURL=sql_bar_chart.js.map