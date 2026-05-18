"use strict";
// Copyright (C) 2025 The Android Open Source Project
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
exports.WattsonAggregationPanel = void 0;
exports.createWattsonAggregationToTabAdaptor = createWattsonAggregationToTabAdaptor;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const aggregation_adapter_1 = require("../../components/aggregation_adapter");
const aggregation_panel_1 = require("../../components/aggregation_panel");
const thread_state_1 = require("../../components/sql_utils/thread_state");
const segmented_buttons_1 = require("../../widgets/segmented_buttons");
function createWattsonAggregationToTabAdaptor(trace, aggregator, tabPriorityOverride) {
    return (0, aggregation_adapter_1.createBaseAggregationToTabAdaptor)(trace, aggregator, WattsonAggregationPanel, tabPriorityOverride);
}
class WattsonAggregationPanel extends aggregation_panel_1.AggregationPanel {
    scaleNumericData = false;
    view({ attrs }) {
        return (0, mithril_1.default)('.details-panel', (0, mithril_1.default)('.details-panel-heading.aggregation', (0, mithril_1.default)(segmented_buttons_1.SegmentedButtons, {
            options: [{ label: 'µW' }, { label: 'mW' }],
            selectedOption: this.scaleNumericData ? 0 : 1,
            onOptionSelected: (index) => {
                this.scaleNumericData = index === 0;
            },
            title: 'Select power units',
        }), this.showTimeRange(), (0, mithril_1.default)('table', (0, mithril_1.default)('tr', attrs.data.columns.map((col) => this.formatColumnHeading(col, attrs.model))), (0, mithril_1.default)('tr.sum', attrs.data.columnSums.map((sum) => {
            let sumClass;
            let displaySum;
            if (sum === '') {
                sumClass = 'td';
                displaySum = String(sum);
            }
            else {
                sumClass = 'td.sum-data';
                displaySum = String(this.scaleNumericData ? parseFloat(sum) * 1000 : sum);
            }
            return (0, mithril_1.default)(sumClass, displaySum);
        })))), (0, mithril_1.default)('.details-table.aggregation', (0, mithril_1.default)('table', this.getRows(attrs.data))));
    }
    formatColumnHeading(col, model) {
        const pref = model.getSortingPrefs();
        let sortIcon = '';
        if (pref && pref.column === col.columnId) {
            sortIcon =
                pref.direction === 'DESC' ? 'arrow_drop_down' : 'arrow_drop_up';
        }
        // Replace title units if necessary (i.e. swap µW/mW)
        let displayTitle = col.title;
        if (this.scaleNumericData) {
            displayTitle = displayTitle.replace('estimated mW', 'estimated µW');
        }
        return (0, mithril_1.default)('th', {
            onclick: () => {
                model.toggleSortingColumn(col.columnId);
            },
        }, displayTitle, (0, mithril_1.default)('i.material-icons', sortIcon));
    }
    getFormattedData(data, rowIndex, columnIndex) {
        const column = data.columns[columnIndex];
        const value = column.data[rowIndex];
        switch (column.kind) {
            case 'STRING':
                return data.strings?.[value] ?? value;
            case 'TIMESTAMP_NS':
                return `${Number(value) / 1000000}`;
            case 'STATE': {
                const concatState = data.strings?.[value];
                if (typeof concatState !== 'string')
                    return value;
                const split = concatState.split(',');
                const ioWait = split[1] === 'NULL' ? undefined : !!Number.parseInt(split[1], 10);
                return (0, thread_state_1.translateState)(split[0], ioWait);
            }
            case 'NUMBER':
            default:
                if (typeof value === 'number') {
                    return this.scaleNumericData && column.title.includes('estimated mW')
                        ? value * 1000
                        : value;
                }
                return value;
        }
    }
}
exports.WattsonAggregationPanel = WattsonAggregationPanel;
//# sourceMappingURL=aggregation_panel.js.map