"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLDataSource = void 0;
const async_limiter_1 = require("../../../base/async_limiter");
const query_result_1 = require("../../../trace_processor/query_result");
const queries_1 = require("../../query_table/queries");
class SQLDataSource {
    engine;
    baseQuery;
    limiter = new async_limiter_1.AsyncLimiter();
    // Previous query (for diffing)
    oldQuery = '';
    // Query state
    cachedResult = {
        totalRows: 0,
        rows: [],
        rowOffset: 0,
    };
    constructor(engine, query) {
        this.engine = engine;
        this.baseQuery = query;
    }
    /**
     * Getter for the current rows result
     */
    get rows() {
        return this.cachedResult;
    }
    /**
     * Notify of parameter changes and trigger data update
     */
    notifyUpdate(sortBy, filters, offset, limit) {
        const query = this.buildQuery(filters, sortBy, limit, offset);
        if (query !== this.oldQuery) {
            this.oldQuery = query;
            this.limiter.schedule(async () => {
                try {
                    const result = await this.executeQueries(filters, sortBy, limit, offset);
                    if (result) {
                        this.cachedResult = result;
                    }
                }
                catch (error) {
                    console.error('Error executing query:', error);
                }
            });
        }
    }
    /**
     * Builds a complete SQL query with filtering, sorting, and pagination
     */
    buildQuery(filters, sortBy, limit, offset) {
        // Wrap the base query as a subquery
        let query = `WITH base_data AS (${this.baseQuery})`;
        // Start the main query
        query += `\nSELECT * FROM base_data`;
        // Add WHERE clause if there are filters
        if (filters.length > 0) {
            const whereConditions = filters
                .map((filter) => {
                switch (filter.op) {
                    case '=':
                        return `${filter.column} = ${this.sqlValue(filter.value)}`;
                    case '!=':
                        return `${filter.column} != ${this.sqlValue(filter.value)}`;
                    case '<':
                        return `${filter.column} < ${this.sqlValue(filter.value)}`;
                    case '<=':
                        return `${filter.column} <= ${this.sqlValue(filter.value)}`;
                    case '>':
                        return `${filter.column} > ${this.sqlValue(filter.value)}`;
                    case '>=':
                        return `${filter.column} >= ${this.sqlValue(filter.value)}`;
                    case 'glob':
                        return `${filter.column} GLOB ${this.sqlValue(filter.value)}`;
                    case 'is null':
                        return `${filter.column} IS NULL`;
                    case 'is not null':
                        return `${filter.column} IS NOT NULL`;
                    default:
                        return '1=1'; // Default to true if unknown operator
                }
            })
                .join(' AND ');
            query += `\nWHERE ${whereConditions}`;
        }
        // Add ORDER BY clause for sorting
        if (sortBy.direction !== 'unsorted') {
            const { column, direction } = sortBy;
            query += `\nORDER BY ${column} ${direction.toUpperCase()}`;
        }
        // Add pagination with LIMIT and OFFSET
        query += `\nLIMIT ${limit} OFFSET ${offset}`;
        return query;
    }
    /**
     * Builds a count query to get the total number of rows (for pagination)
     */
    buildCountQuery(filters) {
        // Wrap the base query as a subquery
        let query = `WITH base_data AS (${this.baseQuery})`;
        // Start the count query
        query += `\nSELECT COUNT(*) as total_count FROM base_data`;
        // Add WHERE clause if there are filters
        if (filters.length > 0) {
            const whereConditions = filters
                .map((filter) => {
                switch (filter.op) {
                    case '=':
                    case '!=':
                    case '<':
                    case '<=':
                    case '>':
                    case '>=':
                        return `${filter.column} ${filter.op} ${this.sqlValue(filter.value)}`;
                    case 'glob':
                        return `${filter.column} GLOB ${this.sqlValue(filter.value)}`;
                    case 'is null':
                        return `${filter.column} IS NULL`;
                    case 'is not null':
                        return `${filter.column} IS NOT NULL`;
                    default:
                        return '1=1'; // Default to true if unknown operator
                }
            })
                .join(' AND ');
            query += `\nWHERE ${whereConditions}`;
        }
        return query;
    }
    /**
     * Converts a JavaScript value to a SQL string representation
     */
    sqlValue(value) {
        if (typeof value === 'string') {
            // Escape single quotes in strings
            return `'${value.replace(/'/g, "''")}'`;
        }
        else if (typeof value === 'number' || typeof value === 'bigint') {
            return value.toString();
        }
        else if (typeof value === 'boolean') {
            return value ? '1' : '0';
        }
        else {
            // For other types, convert to string
            return `'${String(value)}'`;
        }
    }
    async executeQueries(filters, sortBy, limit, offset) {
        const countQuery = this.buildCountQuery(filters);
        const countResult = await this.engine.query(countQuery);
        const firstRow = countResult.maybeFirstRow({ total_count: query_result_1.NUM });
        if (!firstRow) {
            return undefined;
        }
        const totalRows = firstRow.total_count;
        // Build the data query
        const dataQuery = this.buildQuery(filters, sortBy, limit, offset);
        const dataResult = await (0, queries_1.runQueryForQueryTable)(dataQuery, this.engine);
        if (dataResult.error) {
            console.error('Error executing data query:', dataResult.error);
            return undefined;
        }
        return {
            totalRows,
            rows: dataResult.rows,
            rowOffset: offset,
        };
    }
}
exports.SQLDataSource = SQLDataSource;
//# sourceMappingURL=sql_data_source.js.map