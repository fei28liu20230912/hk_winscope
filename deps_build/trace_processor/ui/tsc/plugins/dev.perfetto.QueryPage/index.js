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
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const queries_1 = require("../../components/query_table/queries");
const query_table_1 = require("../../components/query_table/query_table");
const editor_1 = require("../../widgets/editor");
const query_page_1 = require("./query_page");
class QueryPagePlugin {
    static id = 'dev.perfetto.QueryPage';
    static flag;
    static onActivate(app) {
        QueryPagePlugin.flag = app.featureFlags.register({
            id: 'dev.perfetto.QueryPage',
            name: 'Enable mini query page tab',
            defaultValue: false,
            description: 'Enables a tab version of the query page that allows query tab - like functionality in the tab drawer',
        });
    }
    async onTraceLoad(trace) {
        trace.pages.registerPage({
            route: '/query',
            render: () => (0, mithril_1.default)(query_page_1.QueryPage, { trace }),
        });
        trace.sidebar.addMenuItem({
            section: 'current_trace',
            text: 'Query (SQL)',
            href: '#!/query',
            icon: 'database',
            sortOrder: 1,
        });
        if (QueryPagePlugin.flag.get()) {
            trace.tabs.registerTab({
                uri: 'dev.perfetto.QueryPage',
                isEphemeral: false,
                content: {
                    render() {
                        return (0, mithril_1.default)(QueryPageMini, { trace });
                    },
                    getTitle() {
                        return 'QueryPage Mini';
                    },
                },
            });
        }
    }
}
exports.default = QueryPagePlugin;
class QueryPageMini {
    executedQuery;
    queryResult;
    view({ attrs }) {
        return (0, mithril_1.default)('.pf-query-page-mini', (0, mithril_1.default)(editor_1.Editor, {
            language: 'perfetto-sql',
            onExecute: async (query) => {
                this.executedQuery = query;
                const result = await (0, queries_1.runQueryForQueryTable)(query, attrs.trace.engine);
                this.queryResult = result;
            },
        }), this.executedQuery === undefined
            ? null
            : (0, mithril_1.default)(query_table_1.QueryTable, {
                trace: attrs.trace,
                query: this.executedQuery,
                resp: this.queryResult,
                fillParent: false,
            }));
    }
}
//# sourceMappingURL=index.js.map