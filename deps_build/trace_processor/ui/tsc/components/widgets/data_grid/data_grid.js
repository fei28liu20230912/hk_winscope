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
exports.DataGrid = void 0;
exports.renderCell = renderCell;
exports.isNumeric = isNumeric;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const button_1 = require("../../../widgets/button");
const download_utils_1 = require("../../../base/download_utils");
const anchor_1 = require("../../../widgets/anchor");
const menu_1 = require("../../../widgets/menu");
const chip_1 = require("../../../widgets/chip");
const icon_1 = require("../../../widgets/icon");
const semantic_icons_1 = require("../../../base/semantic_icons");
const DEFAULT_ROWS_PER_PAGE = 50;
class DataGrid {
    // Internal state
    currentPage = 0;
    internalSortBy = { direction: 'unsorted' };
    internalFilters = [];
    view({ attrs }) {
        const { columns, dataSource, sortBy: externalSorting, filters: externalFilters, onSortByChange, onFilterChange, cellRenderer, maxRowsPerPage = DEFAULT_ROWS_PER_PAGE, showFiltersInToolbar = true, } = attrs;
        // If filters are passed in from outside but no onFilterChange handler
        // specified, then there is no way to edit the filters so we hide the
        // options to specify filters.
        const areFiltersControlled = externalFilters !== undefined;
        const filters = areFiltersControlled
            ? externalFilters
            : this.internalFilters;
        // If filters are not controlled, they are always editable because the
        // filter state is stored internally so we don't need a callback to modify
        // the filters. If the filters are controlled and we have a callback then
        // filters are similarly editable, however if we don't have a callback then
        // filters cannot be changed so we consider them readonly.
        const filtersAreEditable = !areFiltersControlled || onFilterChange !== undefined;
        const isSortingControlled = externalSorting !== undefined;
        const sortBy = isSortingControlled ? externalSorting : this.internalSortBy;
        const sortingIsEditable = !isSortingControlled || onSortByChange !== undefined;
        const currentPage = this.currentPage;
        this.updateDataSource(dataSource, sortBy, filters, currentPage, maxRowsPerPage);
        const rowData = dataSource.rows;
        const totalRows = rowData.totalRows;
        // Calculate total pages based on totalRows and rowsPerPage
        const totalPages = Math.max(1, Math.ceil(totalRows / maxRowsPerPage));
        // Ensure current page doesn't exceed total pages
        if (this.currentPage >= totalPages && totalPages > 0) {
            this.currentPage = Math.max(0, totalPages - 1);
        }
        const addFilter = filtersAreEditable
            ? (filter) => this.addFilter(filters, filter, onFilterChange)
            : undefined;
        const updateSorting = sortingIsEditable
            ? (sortBy) => {
                this.internalSortBy = sortBy;
                onSortByChange?.(sortBy);
            }
            : undefined;
        return (0, mithril_1.default)('.pf-data-grid', this.renderTableToolbar(totalPages, totalRows, filters, sortBy, onSortByChange, onFilterChange, maxRowsPerPage, showFiltersInToolbar), (0, mithril_1.default)('table', this.renderTableHeader(columns, sortBy, updateSorting, addFilter), this.renderTableBody(columns, rowData, filtersAreEditable, filters, onFilterChange, cellRenderer, maxRowsPerPage)));
    }
    updateDataSource(dataSource, sortBy, filters, currentPage, maxRowsPerPage) {
        const offset = currentPage * maxRowsPerPage;
        const limit = maxRowsPerPage;
        dataSource.notifyUpdate(sortBy, filters, offset, limit);
    }
    renderTableToolbar(totalPages, totalRows, filters, sortBy, onSortByChange, onFiltersChange, maxRowsPerPage, showFilters) {
        return (0, mithril_1.default)('.pf-data-grid__toolbar', [
            (0, mithril_1.default)(button_1.Button, {
                icon: semantic_icons_1.Icons.ResetState,
                label: 'Reset',
                disabled: filters.length === 0 && sortBy.direction === 'unsorted',
                title: 'Reset filters and sorting',
                onclick: () => {
                    const newSortBy = { direction: 'unsorted' };
                    this.internalSortBy = newSortBy;
                    onSortByChange?.(newSortBy);
                    const newFilters = [];
                    this.internalFilters = newFilters;
                    onFiltersChange?.(newFilters);
                },
            }),
            (0, mithril_1.default)('.pf-data-grid__toolbar-filters', showFilters &&
                filters.map((filter) => (0, mithril_1.default)(chip_1.Chip, {
                    className: 'pf-data-grid__filter-chip',
                    title: 'Remove filter',
                    label: this.formatFilter(filter),
                    onclick: () => {
                        const newFilters = filters.filter((f) => f !== filter);
                        this.internalFilters = newFilters;
                        onFiltersChange?.(newFilters);
                    },
                }))),
            (0, mithril_1.default)('.pf-data-grid__toolbar-pagination', [
                (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.FirstPage,
                    disabled: this.currentPage === 0,
                    onclick: () => {
                        if (this.currentPage !== 0) {
                            this.currentPage = 0;
                        }
                    },
                }),
                (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.PrevPage,
                    disabled: this.currentPage === 0,
                    onclick: () => {
                        if (this.currentPage > 0) {
                            this.currentPage -= 1;
                        }
                    },
                }),
                (0, mithril_1.default)('span.pf-data-grid__toolbar-page', this.renderPageInfo(this.currentPage, maxRowsPerPage, totalRows)),
                (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.NextPage,
                    disabled: this.currentPage >= totalPages - 1,
                    onclick: () => {
                        if (this.currentPage < totalPages - 1) {
                            this.currentPage += 1;
                        }
                    },
                }),
                (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.LastPage,
                    disabled: this.currentPage >= totalPages - 1,
                    onclick: () => {
                        if (this.currentPage < totalPages - 1) {
                            this.currentPage = Math.max(0, totalPages - 1);
                        }
                    },
                }),
            ]),
        ]);
    }
    formatFilter(filter) {
        if ('value' in filter) {
            return `${filter.column} ${filter.op} ${filter.value}`;
        }
        else {
            return `${filter.column} ${filter.op}`;
        }
    }
    renderPageInfo(currentPage, maxRowsPerPage, totalRows) {
        const startRow = Math.min(currentPage * maxRowsPerPage + 1, totalRows);
        const endRow = Math.min((currentPage + 1) * maxRowsPerPage, totalRows);
        const startRowStr = startRow.toLocaleString();
        const endRowStr = endRow.toLocaleString();
        const totalRowsStr = totalRows.toLocaleString();
        return `${startRowStr}-${endRowStr} of ${totalRowsStr}`;
    }
    renderTableHeader(columns, currentSortBy, updateSorting, addFilter) {
        return (0, mithril_1.default)('thead', (0, mithril_1.default)('tr', columns.map((column) => {
            // Determine if this column is currently sorted
            const isCurrentSortColumn = currentSortBy.direction !== 'unsorted' &&
                currentSortBy.column === column.name;
            const currentDirection = isCurrentSortColumn
                ? currentSortBy.direction
                : undefined;
            return (0, mithril_1.default)('th', (0, mithril_1.default)('.pf-data-grid__cell', (0, mithril_1.default)('span', column.name, isCurrentSortColumn
                ? currentDirection === 'asc'
                    ? (0, mithril_1.default)(icon_1.Icon, { icon: semantic_icons_1.Icons.SortAsc })
                    : (0, mithril_1.default)(icon_1.Icon, { icon: semantic_icons_1.Icons.SortDesc })
                : undefined), (updateSorting || addFilter) &&
                (0, mithril_1.default)(menu_1.PopupMenu, {
                    trigger: (0, mithril_1.default)(button_1.Button, {
                        className: 'pf-data-grid__cell-button',
                        icon: semantic_icons_1.Icons.ContextMenuAlt,
                        compact: true,
                    }),
                }, updateSorting && [
                    (!isCurrentSortColumn || currentDirection === 'desc') &&
                        (0, mithril_1.default)(menu_1.MenuItem, {
                            label: 'Sort Ascending',
                            icon: semantic_icons_1.Icons.SortAsc,
                            onclick: () => {
                                updateSorting?.({
                                    column: column.name,
                                    direction: 'asc',
                                });
                            },
                        }),
                    (!isCurrentSortColumn || currentDirection === 'asc') &&
                        (0, mithril_1.default)(menu_1.MenuItem, {
                            label: 'Sort Descending',
                            icon: semantic_icons_1.Icons.SortDesc,
                            onclick: () => {
                                updateSorting?.({
                                    column: column.name,
                                    direction: 'desc',
                                });
                            },
                        }),
                    isCurrentSortColumn &&
                        (0, mithril_1.default)(menu_1.MenuItem, {
                            label: 'Clear Sort',
                            icon: semantic_icons_1.Icons.Remove,
                            onclick: () => {
                                updateSorting?.({
                                    direction: 'unsorted',
                                });
                            },
                        }),
                ], addFilter && updateSorting && (0, mithril_1.default)(menu_1.MenuDivider), addFilter && [
                    (0, mithril_1.default)(menu_1.MenuItem, {
                        label: 'Filter out nulls',
                        onclick: () => {
                            addFilter({ column: column.name, op: 'is not null' });
                        },
                    }),
                    (0, mithril_1.default)(menu_1.MenuItem, {
                        label: 'Only show nulls',
                        onclick: () => {
                            addFilter({ column: column.name, op: 'is null' });
                        },
                    }),
                ])));
        })));
    }
    renderTableBody(columns, rowData, enableFilters, filters, onFilterChange, cellRenderer, maxRowsPerPage) {
        const { rows, totalRows, rowOffset } = rowData;
        // Create array for all potential rows on the current page
        const startIndex = this.currentPage * maxRowsPerPage;
        const endIndex = Math.min(startIndex + maxRowsPerPage, totalRows);
        const displayRowCount = Math.max(0, endIndex - startIndex);
        // Generate array of indices for rows that should be displayed
        const indices = Array.from({ length: displayRowCount }, (_, i) => startIndex + i);
        return (0, mithril_1.default)('tbody', indices.map((rowIndex) => {
            // Calculate the relative index within the available rows array
            const relativeIndex = rowIndex - rowOffset;
            // Check if this index is valid for the available rows
            const row = relativeIndex >= 0 && relativeIndex < rows.length
                ? rows[relativeIndex]
                : undefined;
            if (row) {
                // Return a populated row if data is available
                return (0, mithril_1.default)('tr', columns.map((column) => {
                    const value = row[column.name];
                    return (0, mithril_1.default)('td', (0, mithril_1.default)('.pf-data-grid__cell', cellRenderer
                        ? cellRenderer(value, column.name, row)
                        : renderCell(value, column.name), enableFilters &&
                        (0, mithril_1.default)(menu_1.PopupMenu, {
                            trigger: (0, mithril_1.default)(button_1.Button, {
                                className: 'pf-data-grid__cell-button',
                                icon: semantic_icons_1.Icons.ContextMenuAlt,
                                compact: true,
                            }),
                        }, value !== null && [
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter equal to this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '=',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter not equal to this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '!=',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                        ], isNumeric(value) && [
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter greater than this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '>',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter greater than or equal to this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '>=',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter less than this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '<',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter less than or equal to this',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: '<=',
                                        value: value,
                                    }, onFilterChange);
                                },
                            }),
                        ], value === null && [
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Filter out nulls',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: 'is not null',
                                    }, onFilterChange);
                                },
                            }),
                            (0, mithril_1.default)(menu_1.MenuItem, {
                                label: 'Only show nulls',
                                onclick: () => {
                                    this.addFilter(filters, {
                                        column: column.name,
                                        op: 'is null',
                                    }, onFilterChange);
                                },
                            }),
                        ])));
                }));
            }
            else {
                // Return an empty placeholder row if data is not available
                return (0, mithril_1.default)('tr', columns.map(() => (0, mithril_1.default)('td', (0, mithril_1.default)('.pf-data-grid__cell--loading', ''))));
            }
        }));
    }
    addFilter(filters, newFilter, onFilterChange) {
        const newFilters = [...filters, newFilter];
        this.internalFilters = newFilters;
        this.currentPage = 0;
        onFilterChange?.(newFilters);
    }
}
exports.DataGrid = DataGrid;
function renderCell(value, columnName) {
    if (value instanceof Uint8Array) {
        return (0, mithril_1.default)(anchor_1.Anchor, {
            onclick: () => (0, download_utils_1.downloadData)(`${columnName}.blob`, value),
        }, `Blob (${value.length} bytes)`);
    }
    else if (typeof value === 'number' || typeof value === 'bigint') {
        return (0, mithril_1.default)('span.pf-data-grid__cell--number', `${value}`);
    }
    else if (value === null) {
        return (0, mithril_1.default)('span.pf-data-grid__cell--null', 'null');
    }
    else {
        return (0, mithril_1.default)('span', `${value}`);
    }
}
// Check if the value is numeric (number or bigint)
function isNumeric(value) {
    return typeof value === 'number' || typeof value === 'bigint';
}
//# sourceMappingURL=data_grid.js.map