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
exports.SlicesSourceNode = void 0;
exports.slicesSourceNodeColumns = slicesSourceNodeColumns;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const query_node_1 = require("../../query_node");
const column_controller_1 = require("../column_controller");
const protos_1 = tslib_1.__importDefault(require("../../../../protos"));
const text_input_1 = require("../../../../widgets/text_input");
const sql_modules_impl_1 = require("../../../dev.perfetto.SqlModules/sql_modules_impl");
const operation_component_1 = require("../operations/operation_component");
class SlicesSourceNode {
    type = query_node_1.NodeType.kSimpleSlices;
    prevNode = undefined;
    nextNode;
    finished = true;
    sourceCols;
    finalCols;
    state;
    constructor(attrs) {
        this.state = attrs;
        this.sourceCols = slicesSourceNodeColumns(true);
        this.finalCols = (0, query_node_1.createFinalColumns)(this);
    }
    getStateCopy() {
        const newState = {
            slice_name: this.state.slice_name?.slice(),
            thread_name: this.state.thread_name?.slice(),
            process_name: this.state.process_name?.slice(),
            track_name: this.state.track_name?.slice(),
            sourceCols: (0, column_controller_1.newColumnControllerRows)(this.sourceCols),
            groupByColumns: (0, column_controller_1.newColumnControllerRows)(this.state.groupByColumns),
            filters: this.state.filters.map((f) => ({ ...f })),
            aggregations: this.state.aggregations.map((a) => ({ ...a })),
        };
        return newState;
    }
    validate() {
        return true;
    }
    getTitle() {
        return `Simple slices`;
    }
    getStructuredQuery() {
        if (!this.validate())
            return;
        const sq = new protos_1.default.PerfettoSqlStructuredQuery();
        sq.id = `simple_slices_source`;
        const ss = new protos_1.default.PerfettoSqlStructuredQuery.SimpleSlices();
        if (this.state.slice_name)
            ss.sliceNameGlob = this.state.slice_name;
        if (this.state.thread_name)
            ss.threadNameGlob = this.state.thread_name;
        if (this.state.process_name)
            ss.processNameGlob = this.state.process_name;
        if (this.state.track_name)
            ss.trackNameGlob = this.state.track_name;
        sq.simpleSlices = ss;
        const filtersProto = (0, operation_component_1.createFiltersProto)(this.state.filters);
        if (filtersProto)
            sq.filters = filtersProto;
        const groupByProto = (0, operation_component_1.createGroupByProto)(this.state.groupByColumns, this.state.aggregations);
        if (groupByProto)
            sq.groupBy = groupByProto;
        const selectedColumns = (0, query_node_1.createSelectColumnsProto)(this);
        if (selectedColumns)
            sq.selectColumns = selectedColumns;
        return sq;
    }
    getDetails() {
        return (0, mithril_1.default)('', (0, mithril_1.default)('', 'Slice name glob ', (0, mithril_1.default)(text_input_1.TextInput, {
            id: 'slice_name_glob',
            type: 'string',
            oninput: (e) => {
                if (!e.target)
                    return;
                this.state.slice_name = e.target.value.trim();
            },
        })), (0, mithril_1.default)('', 'Thread name glob ', (0, mithril_1.default)(text_input_1.TextInput, {
            id: 'thread_name_glob',
            type: 'string',
            oninput: (e) => {
                if (!e.target)
                    return;
                this.state.thread_name = e.target.value.trim();
            },
        })), (0, mithril_1.default)('', 'Process name glob ', (0, mithril_1.default)(text_input_1.TextInput, {
            id: 'process_name_glob',
            type: 'string',
            oninput: (e) => {
                if (!e.target)
                    return;
                this.state.process_name = e.target.value.trim();
            },
        })), (0, mithril_1.default)('', 'Track name glob ', (0, mithril_1.default)(text_input_1.TextInput, {
            id: 'track_name_glob',
            type: 'string',
            oninput: (e) => {
                if (!e.target)
                    return;
                this.state.track_name = e.target.value.trim();
            },
        })));
    }
}
exports.SlicesSourceNode = SlicesSourceNode;
function slicesSourceNodeColumns(checked) {
    const cols = [
        {
            name: 'id',
            type: {
                name: 'ID(slice.id)',
                shortName: 'id',
                tableAndColumn: new sql_modules_impl_1.TableAndColumnImpl('string', 'id'),
            },
        },
        {
            name: 'ts',
            type: {
                name: 'TIMESTAMP',
                shortName: 'TIMESTAMP',
            },
        },
        {
            name: 'dur',
            type: {
                name: 'DURATION',
                shortName: 'DURATION',
            },
        },
        {
            name: 'slice_name',
            type: {
                name: 'STRING',
                shortName: 'STRING',
            },
        },
        {
            name: 'thread_name',
            type: {
                name: 'STRING',
                shortName: 'STRING',
            },
        },
        {
            name: 'process_name',
            type: {
                name: 'STRING',
                shortName: 'STRING',
            },
        },
        {
            name: 'track_name',
            type: {
                name: 'STRING',
                shortName: 'STRING',
            },
        },
    ];
    return cols.map((c) => (0, column_controller_1.columnControllerRowFromSqlColumn)(c, checked));
}
//# sourceMappingURL=slices_source.js.map