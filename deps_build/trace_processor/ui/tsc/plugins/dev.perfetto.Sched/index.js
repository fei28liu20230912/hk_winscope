"use strict";
// Copyright (C) 2021 The Android Open Source Project
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
const track_kinds_1 = require("../../public/track_kinds");
const utils_1 = require("../../public/utils");
const query_result_1 = require("../../trace_processor/query_result");
const thread_state_track_1 = require("./thread_state_track");
const array_utils_1 = require("../../base/array_utils");
const workspace_1 = require("../../public/workspace");
const thread_state_selection_aggregator_1 = require("./thread_state_selection_aggregator");
const dev_perfetto_ProcessThreadGroups_1 = tslib_1.__importDefault(require("../dev.perfetto.ProcessThreadGroups"));
const aggregation_adapter_1 = require("../../components/aggregation_adapter");
const track_kinds_2 = require("../../public/track_kinds");
const dev_perfetto_Thread_1 = tslib_1.__importDefault(require("../dev.perfetto.Thread"));
const cpu_slice_by_process_selection_aggregator_1 = require("./cpu_slice_by_process_selection_aggregator");
const cpu_slice_selection_aggregator_1 = require("./cpu_slice_selection_aggregator");
const common_1 = require("./common");
const cpu_slice_track_1 = require("./cpu_slice_track");
const waker_overlay_1 = require("./waker_overlay");
const time_1 = require("../../base/time");
const sql_utils_1 = require("../../trace_processor/sql_utils");
function uriForThreadStateTrack(upid, utid) {
    return `${(0, utils_1.getThreadUriPrefix)(upid, utid)}_state`;
}
class default_1 {
    static id = 'dev.perfetto.Sched';
    static dependencies = [dev_perfetto_ProcessThreadGroups_1.default, dev_perfetto_Thread_1.default];
    async onTraceLoad(ctx) {
        await this.addCpuSliceTracks(ctx);
        await this.addThreadStateTracks(ctx);
        await this.addMinimapProvider(ctx);
    }
    async addCpuSliceTracks(ctx) {
        ctx.selection.registerAreaSelectionTab((0, aggregation_adapter_1.createAggregationToTabAdaptor)(ctx, new cpu_slice_selection_aggregator_1.CpuSliceSelectionAggregator()));
        ctx.selection.registerAreaSelectionTab((0, aggregation_adapter_1.createAggregationToTabAdaptor)(ctx, new cpu_slice_by_process_selection_aggregator_1.CpuSliceByProcessSelectionAggregator()));
        // ctx.traceInfo.cpus contains all cpus seen from all events. Filter the set
        // if it's seen in sched slices.
        const queryRes = await ctx.engine.query(`select distinct ucpu from sched order by ucpu;`);
        const ucpus = new Set();
        for (const it = queryRes.iter({ ucpu: query_result_1.NUM }); it.valid(); it.next()) {
            ucpus.add(it.ucpu);
        }
        const cpus = ctx.traceInfo.cpus.filter((cpu) => ucpus.has(cpu.ucpu));
        const cpuToClusterType = await this.getAndroidCpuClusterTypes(ctx.engine);
        for (const cpu of cpus) {
            const uri = (0, common_1.uriForSchedTrack)(cpu.ucpu);
            const size = cpuToClusterType.get(cpu.cpu);
            const sizeStr = size === undefined ? `` : ` (${size})`;
            const name = `Cpu ${cpu.cpu}${sizeStr}${cpu.maybeMachineLabel()}`;
            const threads = ctx.plugins.getPlugin(dev_perfetto_Thread_1.default).getThreadMap();
            ctx.tracks.registerTrack({
                uri,
                title: name,
                tags: {
                    kind: track_kinds_2.CPU_SLICE_TRACK_KIND,
                    cpu: cpu.ucpu,
                },
                track: new cpu_slice_track_1.CpuSliceTrack(ctx, uri, cpu, threads),
            });
            const trackNode = new workspace_1.TrackNode({ uri, title: name, sortOrder: -50 });
            ctx.workspace.addChildInOrder(trackNode);
        }
        ctx.tracks.registerOverlay(new waker_overlay_1.WakerOverlay(ctx));
    }
    async getAndroidCpuClusterTypes(engine) {
        const cpuToClusterType = new Map();
        await engine.query(`
        include perfetto module android.cpu.cluster_type;
      `);
        const result = await engine.query(`
        select cpu, cluster_type as clusterType
        from android_cpu_cluster_mapping
      `);
        const it = result.iter({
            cpu: query_result_1.NUM,
            clusterType: query_result_1.STR_NULL,
        });
        for (; it.valid(); it.next()) {
            const clusterType = it.clusterType;
            if (clusterType !== null) {
                cpuToClusterType.set(it.cpu, clusterType);
            }
        }
        return cpuToClusterType;
    }
    async getCpus(engine) {
        const result = await engine.query(`
      SELECT DISTINCT
        ucpu
      FROM sched
    `);
        const it = result.iter({ ucpu: query_result_1.NUM });
        const cpus = [];
        for (; it.valid(); it.next()) {
            cpus.push(it.ucpu);
        }
        return cpus;
    }
    async addThreadStateTracks(ctx) {
        const { engine } = ctx;
        ctx.selection.registerAreaSelectionTab((0, aggregation_adapter_1.createAggregationToTabAdaptor)(ctx, new thread_state_selection_aggregator_1.ThreadStateSelectionAggregator()));
        const result = await engine.query(`
      include perfetto module viz.threads;
      include perfetto module viz.summary.threads;
      include perfetto module sched.states;

      select
        utid,
        t.upid,
        tid,
        t.name as threadName,
        is_main_thread as isMainThread,
        is_kernel_thread as isKernelThread
      from _threads_with_kernel_flag t
      join _sched_summary using (utid)
    `);
        const it = result.iter({
            utid: query_result_1.NUM,
            upid: query_result_1.NUM_NULL,
            tid: query_result_1.NUM_NULL,
            threadName: query_result_1.STR_NULL,
            isMainThread: query_result_1.NUM_NULL,
            isKernelThread: query_result_1.NUM,
        });
        for (; it.valid(); it.next()) {
            const { utid, upid, tid, threadName, isMainThread, isKernelThread } = it;
            const title = (0, utils_1.getTrackName)({
                utid,
                tid,
                threadName,
                kind: track_kinds_1.THREAD_STATE_TRACK_KIND,
            });
            const uri = uriForThreadStateTrack(upid, utid);
            ctx.tracks.registerTrack({
                uri,
                title,
                tags: {
                    kind: track_kinds_1.THREAD_STATE_TRACK_KIND,
                    utid,
                    upid: upid ?? undefined,
                    ...(isKernelThread === 1 && { kernelThread: true }),
                },
                chips: (0, array_utils_1.removeFalsyValues)([
                    isKernelThread === 0 && isMainThread === 1 && 'main thread',
                ]),
                track: (0, thread_state_track_1.createThreadStateTrack)(ctx, uri, utid),
            });
            const group = ctx.plugins
                .getPlugin(dev_perfetto_ProcessThreadGroups_1.default)
                .getGroupForThread(utid);
            const track = new workspace_1.TrackNode({ uri, title, sortOrder: 10 });
            group?.addChildInOrder(track);
        }
    }
    async addMinimapProvider(trace) {
        const hasSched = await this.hasSched(trace.engine);
        if (!hasSched) {
            return;
        }
        trace.minimap.registerContentProvider({
            priority: 2, // Higher priority than the default slices minimap
            getData: async (_, resolution) => {
                const start = trace.traceInfo.start;
                const end = trace.traceInfo.end;
                const cpus = await this.getCpus(trace.engine);
                const rows = [];
                const intervals = [];
                for (let i = start; i < end; i += resolution) {
                    intervals.push(i);
                }
                const values = intervals
                    .map((ts, index) => `(${index}, ${ts}, ${resolution})`)
                    .join();
                const intervalsTableName = '__minimap_sched_intervals';
                await trace.engine.query(`
          CREATE TABLE ${intervalsTableName} (
            id INTEGER PRIMARY KEY,
            ts INTEGER,
            dur INTEGER
          );

          INSERT INTO ${intervalsTableName} (id, ts, dur)
          values ${values}
        `);
                for (const cpu of cpus) {
                    const env_1 = { stack: [], error: void 0, hasError: false };
                    try {
                        // TODO(stevegolton): Obtain source data from the track's datasets
                        // instead of repeating it here?
                        const schedTableName = '__sched_per_cpu';
                        const _schedTable = tslib_1.__addDisposableResource(env_1, await (0, sql_utils_1.createPerfettoTable)(trace.engine, schedTableName, `
              SELECT
                *
              FROM sched
              WHERE
                dur > 0 AND
                ucpu = ${cpu} AND
                NOT utid IN (SELECT utid FROM thread WHERE is_idle)
            `), true);
                        const entireQuery = `
            SELECT
              id_1 AS bucketId,
              CAST(SUM(ii.dur) AS FLOAT)/${resolution} AS load,
              intervals.ts AS ts,
              intervals.dur AS dur
            FROM _interval_intersect!((${schedTableName}, ${intervalsTableName}), ()) ii
            JOIN ${intervalsTableName} intervals ON (id_1 = intervals.id)
            GROUP BY id_1;
          `;
                        const results = await trace.engine.query(entireQuery);
                        const iter = results.iter({
                            load: query_result_1.NUM,
                            ts: query_result_1.LONG,
                            dur: query_result_1.LONG,
                        });
                        const loads = [];
                        for (; iter.valid(); iter.next()) {
                            loads.push({
                                load: iter.load,
                                ts: time_1.Time.fromRaw(iter.ts),
                                dur: iter.dur,
                            });
                        }
                        rows.push(loads);
                    }
                    catch (e_1) {
                        env_1.error = e_1;
                        env_1.hasError = true;
                    }
                    finally {
                        const result_1 = tslib_1.__disposeResources(env_1);
                        if (result_1)
                            await result_1;
                    }
                }
                return rows;
            },
        });
    }
    async hasSched(engine) {
        const result = await engine.query(`SELECT ts FROM sched LIMIT 1`);
        return result.numRows() > 0;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map