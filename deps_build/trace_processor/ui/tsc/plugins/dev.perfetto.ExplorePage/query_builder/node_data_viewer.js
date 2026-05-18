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
exports.NodeDataViewer = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const text_paragraph_1 = require("../../../widgets/text_paragraph");
const query_table_1 = require("../../../components/query_table/query_table");
const queries_1 = require("../../../components/query_table/queries");
const async_limiter_1 = require("../../../base/async_limiter");
const query_node_explorer_1 = require("./query_node_explorer");
const menu_1 = require("../../../widgets/menu");
const button_1 = require("../../../widgets/button");
const semantic_icons_1 = require("../../../base/semantic_icons");
class NodeDataViewer {
    tableAsyncLimiter = new async_limiter_1.AsyncLimiter();
    queryResult;
    view({ attrs }) {
        const runQuery = () => {
            this.tableAsyncLimiter.schedule(async () => {
                if (attrs.query === undefined ||
                    attrs.query instanceof Error ||
                    !attrs.executeQuery) {
                    return;
                }
                this.queryResult = await (0, queries_1.runQueryForQueryTable)((0, query_node_explorer_1.queryToRun)(attrs.query), attrs.trace.engine);
                attrs.onQueryExecuted();
            });
        };
        if (attrs.query === undefined) {
            return (0, mithril_1.default)(text_paragraph_1.TextParagraph, { text: `No data to display}` });
        }
        if (attrs.query instanceof Error) {
            return (0, mithril_1.default)(text_paragraph_1.TextParagraph, { text: `Error: ${attrs.query.message}` });
        }
        if (this.queryResult === undefined) {
            runQuery();
            return (0, mithril_1.default)(text_paragraph_1.TextParagraph, { text: `No data to display` });
        }
        if (this.queryResult.error !== undefined) {
            return (0, mithril_1.default)(text_paragraph_1.TextParagraph, { text: `Error: ${this.queryResult.error}` });
        }
        runQuery();
        return [
            (0, mithril_1.default)('.pf-node-data-viewer', (0, mithril_1.default)('.pf-node-data-viewer__title-row', (0, mithril_1.default)('.title', 'Query data'), (0, mithril_1.default)('span.spacer'), // Added spacer to push menu to the right
            (0, mithril_1.default)(menu_1.PopupMenu, {
                trigger: (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.ContextMenuAlt,
                }),
            }, [
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Left',
                    onclick: () => {
                        attrs.onPositionChange('left');
                    },
                }),
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Right',
                    onclick: () => {
                        attrs.onPositionChange('right');
                    },
                }),
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Bottom',
                    onclick: () => {
                        attrs.onPositionChange('bottom');
                    },
                }),
            ])), (0, mithril_1.default)('article', (0, mithril_1.default)(query_table_1.QueryTable, {
                trace: attrs.trace,
                query: (0, query_node_explorer_1.queryToRun)(attrs.query),
                resp: this.queryResult,
                fillParent: false,
            }))),
        ];
    }
}
exports.NodeDataViewer = NodeDataViewer;
//# sourceMappingURL=node_data_viewer.js.map