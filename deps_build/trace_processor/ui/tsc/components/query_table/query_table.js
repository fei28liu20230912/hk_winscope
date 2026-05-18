"use strict";
// Copyright (C) 2020 The Android Open Source Project
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
exports.QueryTable = void 0;
exports.isSliceish = isSliceish;
exports.getSliceId = getSliceId;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const clipboard_1 = require("../../base/clipboard");
const button_1 = require("../../widgets/button");
const callout_1 = require("../../widgets/callout");
const details_shell_1 = require("../../widgets/details_shell");
const router_1 = require("../../core/router");
const app_impl_1 = require("../../core/app_impl");
const menu_1 = require("../../widgets/menu");
const semantic_icons_1 = require("../../base/semantic_icons");
const data_grid_1 = require("../widgets/data_grid/data_grid");
const in_memory_data_source_1 = require("../widgets/data_grid/in_memory_data_source");
const anchor_1 = require("../../widgets/anchor");
function isIntegral(x) {
    return (typeof x === 'bigint' || (typeof x === 'number' && Number.isInteger(x)));
}
function hasTs(row) {
    return 'ts' in row && isIntegral(row.ts);
}
function hasDur(row) {
    return 'dur' in row && isIntegral(row.dur);
}
function hasTrackId(row) {
    return 'track_id' in row && isIntegral(row.track_id);
}
function hasSliceId(row) {
    return 'slice_id' in row && isIntegral(row.slice_id);
}
function isSliceish(row) {
    return hasTs(row) && hasDur(row) && hasTrackId(row);
}
// Attempts to extract a slice ID from a row, or undefined if none can be found
function getSliceId(row) {
    if (hasSliceId(row)) {
        return Number(row.slice_id);
    }
    return undefined;
}
class QueryTable {
    trace;
    dataSource;
    constructor({ attrs }) {
        this.trace = attrs.trace;
        if (attrs.resp) {
            this.dataSource = new in_memory_data_source_1.InMemoryDataSource(attrs.resp.rows);
        }
    }
    onbeforeupdate(vnode, old) {
        if (vnode.attrs.resp !== old.attrs.resp) {
            if (vnode.attrs.resp) {
                this.dataSource = new in_memory_data_source_1.InMemoryDataSource(vnode.attrs.resp.rows);
            }
            else {
                this.dataSource = undefined;
            }
        }
    }
    view({ attrs }) {
        const { resp, query, contextButtons = [], fillParent } = attrs;
        return (0, mithril_1.default)(details_shell_1.DetailsShell, {
            title: this.renderTitle(resp),
            description: query,
            buttons: this.renderButtons(query, contextButtons, resp),
            fillParent,
        }, resp && this.dataSource && this.renderTableContent(resp, this.dataSource));
    }
    renderTitle(resp) {
        if (!resp) {
            return 'Query - running';
        }
        const result = resp.error ? 'error' : `${resp.rows.length} rows`;
        if (app_impl_1.AppImpl.instance.testingMode) {
            // Omit the duration in tests, they cause screenshot diff failures.
            return `Query result (${result})`;
        }
        return `Query result (${result}) - ${resp.durationMs.toLocaleString()}ms`;
    }
    renderButtons(query, contextButtons, resp) {
        return [
            contextButtons,
            (0, mithril_1.default)(menu_1.PopupMenu, {
                trigger: (0, mithril_1.default)(button_1.Button, {
                    label: 'Copy',
                    rightIcon: semantic_icons_1.Icons.ContextMenu,
                }),
            }, (0, mithril_1.default)(menu_1.MenuItem, {
                label: 'Query',
                onclick: () => (0, clipboard_1.copyToClipboard)(query),
            }), resp &&
                resp.error === undefined && [
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Result (.tsv)',
                    onclick: () => queryResponseAsTsvToClipboard(resp),
                }),
                (0, mithril_1.default)(menu_1.MenuItem, {
                    label: 'Result (.md)',
                    onclick: () => queryResponseAsMarkdownToClipboard(resp),
                }),
            ]),
        ];
    }
    renderTableContent(resp, dataSource) {
        return (0, mithril_1.default)('.pf-query-panel', resp.statementWithOutputCount > 1 &&
            (0, mithril_1.default)('.pf-query-warning', (0, mithril_1.default)(callout_1.Callout, { icon: 'warning' }, `${resp.statementWithOutputCount} out of ${resp.statementCount} `, 'statements returned a result. ', 'Only the results for the last statement are displayed.')), this.renderContent(resp, dataSource));
    }
    renderContent(resp, dataSource) {
        if (resp.error) {
            return (0, mithril_1.default)('.query-error', `SQL error: ${resp.error}`);
        }
        const onViewerPage = router_1.Router.parseUrl(window.location.href).page === '/viewer';
        return (0, mithril_1.default)(data_grid_1.DataGrid, {
            // If filters are defined by no onFilterChanged handler, the grid operates
            // in filter read only mode.
            filters: [],
            columns: resp.columns.map((c) => ({ name: c })),
            dataSource,
            cellRenderer: (value, name, row) => {
                const sliceId = getSliceId(row);
                const cell = (0, data_grid_1.renderCell)(value, name);
                if (name === 'id' &&
                    sliceId !== undefined &&
                    onViewerPage &&
                    isSliceish(row)) {
                    return (0, mithril_1.default)(anchor_1.Anchor, {
                        title: 'Go to slice',
                        icon: semantic_icons_1.Icons.UpdateSelection,
                        onclick: () => this.goToSlice(sliceId, false),
                        ondblclick: () => this.goToSlice(sliceId, true),
                    }, cell);
                }
                else {
                    return cell;
                }
            },
        });
    }
    goToSlice(sliceId, switchToCurrentSelectionTab) {
        this.trace.selection.selectSqlEvent('slice', sliceId, {
            switchToCurrentSelectionTab,
            scrollToSelection: true,
        });
    }
}
exports.QueryTable = QueryTable;
async function queryResponseAsTsvToClipboard(resp) {
    const lines = [];
    lines.push(resp.columns);
    for (const row of resp.rows) {
        const line = [];
        for (const col of resp.columns) {
            const value = row[col];
            line.push(value === null ? 'NULL' : `${value}`);
        }
        lines.push(line);
    }
    await (0, clipboard_1.copyToClipboard)(lines.map((line) => line.join('\t')).join('\n'));
}
async function queryResponseAsMarkdownToClipboard(resp) {
    // Convert all values to strings.
    // rows = [header, separators, ...body]
    const rows = [];
    rows.push(resp.columns);
    rows.push(resp.columns.map((_) => '---'));
    for (const responseRow of resp.rows) {
        rows.push(resp.columns.map((responseCol) => {
            const value = responseRow[responseCol];
            return value === null ? 'NULL' : `${value}`;
        }));
    }
    // Find the maximum width of each column.
    const maxWidths = Array(resp.columns.length).fill(0);
    for (const row of rows) {
        for (let i = 0; i < resp.columns.length; i++) {
            if (row[i].length > maxWidths[i]) {
                maxWidths[i] = row[i].length;
            }
        }
    }
    const text = rows
        .map((row, rowIndex) => {
        // Pad each column to the maximum width with hyphens (separator row) or
        // spaces (all other rows).
        const expansionChar = rowIndex === 1 ? '-' : ' ';
        const line = row.map((str, colIndex) => str + expansionChar.repeat(maxWidths[colIndex] - str.length));
        return `| ${line.join(' | ')} |`;
    })
        .join('\n');
    await (0, clipboard_1.copyToClipboard)(text);
}
//# sourceMappingURL=query_table.js.map