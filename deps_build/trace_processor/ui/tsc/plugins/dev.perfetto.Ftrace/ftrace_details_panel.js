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
exports.FtraceEventDetailsPanel = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const logging_1 = require("../../base/logging");
const time_1 = require("../../base/time");
const slice_args_1 = require("../../components/details/slice_args");
const core_types_1 = require("../../components/sql_utils/core_types");
const timestamp_1 = require("../../components/widgets/timestamp");
const query_result_1 = require("../../trace_processor/query_result");
const details_shell_1 = require("../../widgets/details_shell");
const grid_layout_1 = require("../../widgets/grid_layout");
const section_1 = require("../../widgets/section");
const tree_1 = require("../../widgets/tree");
class FtraceEventDetailsPanel {
    trace;
    row;
    args;
    constructor(trace, row) {
        this.trace = trace;
        this.row = row;
    }
    async load() {
        await this.loadArgs();
    }
    render() {
        return (0, mithril_1.default)(details_shell_1.DetailsShell, {
            title: `Ftrace Event`,
            description: this.row.name,
        }, (0, mithril_1.default)(grid_layout_1.GridLayout, (0, mithril_1.default)(grid_layout_1.GridLayoutColumn, (0, mithril_1.default)(section_1.Section, { title: 'Details' }, (0, mithril_1.default)(tree_1.Tree, (0, mithril_1.default)(tree_1.TreeNode, {
            left: 'ID',
            right: this.row.id,
        }), (0, mithril_1.default)(tree_1.TreeNode, {
            left: 'Name',
            right: this.row.name,
        }), (0, mithril_1.default)(tree_1.TreeNode, {
            left: 'Timestamp',
            right: (0, mithril_1.default)(timestamp_1.Timestamp, { ts: time_1.Time.fromRaw(this.row.ts) }),
        }), (0, mithril_1.default)(tree_1.TreeNode, {
            left: 'CPU',
            right: this.row.cpu,
        })))), (0, mithril_1.default)(grid_layout_1.GridLayoutColumn, (0, mithril_1.default)(section_1.Section, { title: 'Arguments' }, (0, mithril_1.default)(tree_1.Tree, this.args && (0, slice_args_1.renderArguments)(this.trace, this.args))))));
    }
    async loadArgs() {
        const queryRes = await this.trace.engine.query(`
      SELECT
        args.id as id,
        flat_key as flatKey,
        key,
        int_value as intValue,
        string_value as stringValue,
        real_value as realValue,
        value_type as valueType,
        display_value as displayValue
      FROM ftrace_event
      JOIN args USING(arg_set_id)
      WHERE ftrace_event.id = ${this.row.id}
    `);
        const it = queryRes.iter({
            id: query_result_1.NUM,
            flatKey: query_result_1.STR,
            key: query_result_1.STR,
            intValue: query_result_1.LONG_NULL,
            stringValue: query_result_1.STR_NULL,
            realValue: query_result_1.NUM_NULL,
            valueType: query_result_1.STR,
            displayValue: query_result_1.STR_NULL,
        });
        const args = [];
        for (; it.valid(); it.next()) {
            const value = parseArgValue(it);
            args.push({
                id: (0, core_types_1.asArgId)(it.id),
                flatKey: it.flatKey,
                key: it.key,
                value,
                displayValue: it.displayValue ?? 'NULL',
            });
        }
        this.args = args;
    }
}
exports.FtraceEventDetailsPanel = FtraceEventDetailsPanel;
function parseArgValue(it) {
    const valueType = it.valueType;
    switch (valueType) {
        case 'int':
        case 'uint':
            return it.intValue;
        case 'pointer':
            return it.intValue === null ? null : `0x${it.intValue.toString(16)}`;
        case 'string':
            return it.stringValue;
        case 'bool':
            return Boolean(it.intValue);
        case 'real':
            return it.realValue;
        case 'null':
            return null;
        default:
            (0, logging_1.assertUnreachable)(valueType);
    }
}
//# sourceMappingURL=ftrace_details_panel.js.map