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
exports.QueryNodeExplorer = void 0;
exports.queryToRun = queryToRun;
exports.analyzeNode = analyzeNode;
exports.isAQuery = isAQuery;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const async_limiter_1 = require("../../../base/async_limiter");
const clipboard_1 = require("../../../base/clipboard");
const button_1 = require("../../../widgets/button");
const icon_1 = require("../../../widgets/icon");
const semantic_icons_1 = require("../../../base/semantic_icons");
const operation_component_1 = require("./operations/operation_component");
const menu_1 = require("../../../widgets/menu");
var SelectedView;
(function (SelectedView) {
    SelectedView[SelectedView["kModify"] = 0] = "kModify";
    SelectedView[SelectedView["kSql"] = 1] = "kSql";
    SelectedView[SelectedView["kProto"] = 2] = "kProto";
})(SelectedView || (SelectedView = {}));
class QueryNodeExplorer {
    tableAsyncLimiter = new async_limiter_1.AsyncLimiter();
    selectedView = 0;
    prevSqString;
    curSqString;
    currentQuery;
    view({ attrs }) {
        const renderModeMenu = () => {
            return (0, mithril_1.default)(menu_1.PopupMenu, {
                trigger: (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.ContextMenuAlt,
                }),
            }, [
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Modify',
                    onclick: () => {
                        this.selectedView = SelectedView.kModify;
                    },
                }),
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Show SQL',
                    onclick: () => {
                        this.selectedView = SelectedView.kSql;
                    },
                }),
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Show proto',
                    onclick: () => {
                        this.selectedView = SelectedView.kProto;
                    },
                }),
            ]);
        };
        const getAndRunQuery = () => {
            const sq = attrs.node.getStructuredQuery();
            if (sq === undefined)
                return;
            this.curSqString = JSON.stringify(sq.toJSON(), null, 2);
            if (this.curSqString !== this.prevSqString) {
                this.tableAsyncLimiter.schedule(async () => {
                    this.currentQuery = await analyzeNode(attrs.node, attrs.trace.engine);
                    if (!isAQuery(this.currentQuery)) {
                        return;
                    }
                    attrs.onQueryAnalyzed(this.currentQuery);
                    this.prevSqString = this.curSqString;
                });
            }
        };
        getAndRunQuery();
        const sql = isAQuery(this.currentQuery)
            ? queryToRun(this.currentQuery)
            : '';
        const textproto = isAQuery(this.currentQuery)
            ? this.currentQuery.textproto
            : '';
        return [
            (0, mithril_1.default)('.pf-node-explorer', (0, mithril_1.default)('.pf-node-explorer__title-row', !attrs.node.validate() &&
                (0, mithril_1.default)(icon_1.Icon, {
                    icon: semantic_icons_1.Icons.Warning,
                    filled: true,
                    title: 'Invalid node',
                }), (0, mithril_1.default)('.title', attrs.node.getTitle()), (0, mithril_1.default)('span.spacer'), // Added spacer to push menu to the right
            renderModeMenu()), (0, mithril_1.default)('article', attrs.node.getDetails(), this.selectedView === SelectedView.kSql &&
                (0, mithril_1.default)('.code-snippet', (0, mithril_1.default)(button_1.Button, {
                    title: 'Copy to clipboard',
                    onclick: () => (0, clipboard_1.copyToClipboard)(sql),
                    icon: semantic_icons_1.Icons.Copy,
                }), (0, mithril_1.default)('code', sql)), this.selectedView === SelectedView.kModify &&
                (0, mithril_1.default)(operation_component_1.Operator, {
                    filter: {
                        sourceCols: attrs.node.state.sourceCols,
                        filters: attrs.node.state.filters,
                    },
                    groupby: {
                        groupByColumns: attrs.node.state.groupByColumns,
                        aggregations: attrs.node.state.aggregations,
                    },
                }), this.selectedView === SelectedView.kProto &&
                (0, mithril_1.default)('.code-snippet', (0, mithril_1.default)(button_1.Button, {
                    title: 'Copy to clipboard',
                    onclick: () => (0, clipboard_1.copyToClipboard)(textproto),
                    icon: semantic_icons_1.Icons.Copy,
                }), (0, mithril_1.default)('code', textproto)))),
        ];
    }
}
exports.QueryNodeExplorer = QueryNodeExplorer;
function getStructuredQueries(finalNode) {
    if (finalNode.finalCols === undefined) {
        return;
    }
    const revStructuredQueries = [];
    let curNode = finalNode;
    while (curNode) {
        const curSq = curNode.getStructuredQuery();
        if (curSq === undefined) {
            return;
        }
        revStructuredQueries.push(curSq);
        if (curNode.prevNode && !curNode.prevNode.validate()) {
            return;
        }
        curNode = curNode.prevNode;
    }
    return revStructuredQueries.reverse();
}
function queryToRun(sql) {
    if (sql === undefined)
        return 'N/A';
    const includes = sql.modules.map((c) => `INCLUDE PERFETTO MODULE ${c};\n`);
    return includes + sql.sql;
}
async function analyzeNode(node, engine) {
    const structuredQueries = getStructuredQueries(node);
    if (structuredQueries === undefined)
        return;
    const res = await engine.analyzeStructuredQuery(structuredQueries);
    if (res.error)
        return Error(res.error);
    if (res.results.length === 0)
        return Error('No structured query results');
    if (res.results.length !== structuredQueries.length) {
        return Error(`Wrong structured query results. Asked for ${structuredQueries.length}, received ${res.results.length}`);
    }
    const lastRes = res.results[res.results.length - 1];
    if (lastRes.sql === null || lastRes.sql === undefined) {
        return;
    }
    if (!lastRes.textproto) {
        return Error('No textproto in structured query results');
    }
    const sql = {
        sql: lastRes.sql,
        textproto: lastRes.textproto ?? '',
        modules: lastRes.modules ?? [],
        preambles: lastRes.preambles ?? [],
    };
    return sql;
}
function isAQuery(maybeQuery) {
    return (maybeQuery !== undefined &&
        !(maybeQuery instanceof Error) &&
        maybeQuery.sql !== undefined);
}
//# sourceMappingURL=query_node_explorer.js.map