"use strict";
// Copyright (C) 2019 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use size file except in compliance with the License.
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
exports.AggregationPanel = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const duration_1 = require("./widgets/duration");
const thread_state_1 = require("./sql_utils/thread_state");
class AggregationPanel {
    trace;
    constructor({ attrs }) {
        this.trace = attrs.trace;
    }
    view({ attrs }) {
        return (0, mithril_1.default)('.details-panel', (0, mithril_1.default)('.details-panel-heading.aggregation', attrs.data.barChart !== undefined &&
            this.renderBarChart(attrs.data.barChart), this.showTimeRange(), (0, mithril_1.default)('table', (0, mithril_1.default)('tr', attrs.data.columns.map((col) => this.formatColumnHeading(col, attrs.model))), (0, mithril_1.default)('tr.sum', attrs.data.columnSums.map((sum) => {
            const sumClass = sum === '' ? 'td' : 'td.sum-data';
            return (0, mithril_1.default)(sumClass, sum);
        })))), (0, mithril_1.default)('.details-table.aggregation', (0, mithril_1.default)('table', this.getRows(attrs.data))));
    }
    formatColumnHeading(col, model) {
        const pref = model.getSortingPrefs();
        let sortIcon = '';
        if (pref && pref.column === col.columnId) {
            sortIcon =
                pref.direction === 'DESC' ? 'arrow_drop_down' : 'arrow_drop_up';
        }
        return (0, mithril_1.default)('th', {
            onclick: () => {
                model.toggleSortingColumn(col.columnId);
            },
        }, col.title, (0, mithril_1.default)('i.material-icons', sortIcon));
    }
    getRows(data) {
        if (data.columns.length === 0)
            return;
        const rows = [];
        for (let i = 0; i < data.columns[0].data.length; i++) {
            const row = [];
            for (let j = 0; j < data.columns.length; j++) {
                row.push((0, mithril_1.default)('td', this.getFormattedData(data, i, j)));
            }
            rows.push((0, mithril_1.default)('tr', row));
        }
        return rows;
    }
    getFormattedData(data, rowIndex, columnIndex) {
        switch (data.columns[columnIndex].kind) {
            case 'STRING':
                return data.strings[data.columns[columnIndex].data[rowIndex]];
            case 'TIMESTAMP_NS':
                return `${data.columns[columnIndex].data[rowIndex] / 1000000}`;
            case 'STATE': {
                const concatState = data.strings[data.columns[columnIndex].data[rowIndex]];
                const split = concatState.split(',');
                const ioWait = split[1] === 'NULL' ? undefined : !!Number.parseInt(split[1], 10);
                return (0, thread_state_1.translateState)(split[0], ioWait);
            }
            case 'NUMBER':
            default:
                return data.columns[columnIndex].data[rowIndex];
        }
    }
    showTimeRange() {
        const selection = this.trace.selection.selection;
        if (selection.kind !== 'area')
            return undefined;
        const duration = selection.end - selection.start;
        return (0, mithril_1.default)('.time-range', 'Selected range: ', (0, mithril_1.default)(duration_1.DurationWidget, { dur: duration }));
    }
    renderBarChart(data) {
        const totalTime = data.reduce((sum, item) => sum + item.timeInStateMs, 0);
        return (0, mithril_1.default)('.states', data.map((d) => {
            const width = (d.timeInStateMs / totalTime) * 100;
            return (0, mithril_1.default)('.state', {
                style: {
                    background: d.color.base.cssString,
                    color: d.color.textBase.cssString,
                    width: `${width}%`,
                },
            }, `${d.name}: ${d.timeInStateMs} ms`);
        }));
    }
}
exports.AggregationPanel = AggregationPanel;
//# sourceMappingURL=aggregation_panel.js.map