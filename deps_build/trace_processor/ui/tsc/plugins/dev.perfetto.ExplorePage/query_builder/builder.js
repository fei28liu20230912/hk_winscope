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
exports.QueryBuilder = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const query_node_explorer_1 = require("./query_node_explorer");
const query_canvas_1 = require("./query_canvas");
const node_data_viewer_1 = require("./node_data_viewer");
class QueryBuilder {
    query;
    queryExecuted = false;
    tablePosition = 'right';
    view({ attrs }) {
        const { trace, rootNodes, onNodeSelected, selectedNode, renderNodeActionsMenuItems, addSourcePopupMenu, } = attrs;
        console.log('Table position:', this.tablePosition);
        const canvasStyle = {
            gridColumn: 1,
            gridRow: 1,
            overflow: 'auto',
        };
        const explorerStyle = {
            gridColumn: 2,
            gridRow: 1,
            overflow: 'auto',
        };
        const viewerStyle = {
            gridColumn: 2,
            gridRow: 2,
            overflow: 'auto',
        };
        switch (this.tablePosition) {
            case 'left':
                viewerStyle.gridColumn = 1;
                explorerStyle.gridRow = '1/span 2';
                break;
            case 'right':
                viewerStyle.gridColumn = 2;
                canvasStyle.gridRow = '1/ span 2';
                break;
            case 'bottom':
                viewerStyle.gridColumn = '1/span 2';
                break;
        }
        return (0, mithril_1.default)('.query-builder-layout', {
            style: {
                display: 'grid',
                gridTemplateColumns: '50% 50%',
                gridTemplateRows: '50% 50%',
                gap: '10px',
                height: '100%',
            },
        }, (0, mithril_1.default)('', { style: canvasStyle }, (0, mithril_1.default)(query_canvas_1.QueryCanvas, {
            rootNodes,
            selectedNode,
            onNodeSelected,
            renderNodeActionsMenuItems,
            addSourcePopupMenu,
        })), attrs.selectedNode &&
            (0, mithril_1.default)('', { style: explorerStyle }, (0, mithril_1.default)(query_node_explorer_1.QueryNodeExplorer, {
                trace,
                node: attrs.selectedNode,
                onQueryAnalyzed: (query) => {
                    this.query = query;
                    this.queryExecuted = false;
                },
            })), attrs.selectedNode &&
            (0, mithril_1.default)('', { style: viewerStyle }, (0, mithril_1.default)(node_data_viewer_1.NodeDataViewer, {
                trace,
                query: this.query,
                executeQuery: !this.queryExecuted,
                onQueryExecuted: () => {
                    this.queryExecuted = true;
                },
                onPositionChange: (pos) => {
                    this.tablePosition = pos;
                },
            })));
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=builder.js.map