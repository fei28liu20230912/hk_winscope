import comAndroidAvfvmcputimeline from '../plugins/com.android.AvfVmCpuTimeline';
import comAndroidGpuworkperiod from '../plugins/com.android.GpuWorkPeriod';
import comAndroidInputevents from '../plugins/com.android.InputEvents';
import comAndroidTrustyteecputimeline from '../plugins/com.android.TrustyTeeCpuTimeline';
import comExampleCommands from '../plugins/com.example.Commands';
import comExampleSettings from '../plugins/com.example.Settings';
import comExampleSkeleton from '../plugins/com.example.Skeleton';
import comExampleState from '../plugins/com.example.State';
import comExampleTabs from '../plugins/com.example.Tabs';
import comExampleTracks from '../plugins/com.example.Tracks';
import comGooglePixelcpmtrace from '../plugins/com.google.PixelCpmTrace';
import comGooglePixelmemory from '../plugins/com.google.PixelMemory';
import comGoogleAndroidGooglecamera from '../plugins/com.google.android.GoogleCamera';
import devPerfettoAndroidbinderviz from '../plugins/dev.perfetto.AndroidBinderViz';
import devPerfettoAndroidclientserver from '../plugins/dev.perfetto.AndroidClientServer';
import devPerfettoAndroidcountertracks from '../plugins/dev.perfetto.AndroidCounterTracks';
import devPerfettoAndroidcujs from '../plugins/dev.perfetto.AndroidCujs';
import devPerfettoAndroiddesktopmode from '../plugins/dev.perfetto.AndroidDesktopMode';
import devPerfettoAndroiddmabuf from '../plugins/dev.perfetto.AndroidDmabuf';
import devPerfettoAndroidlog from '../plugins/dev.perfetto.AndroidLog';
import devPerfettoAndroidlongbatterytracing from '../plugins/dev.perfetto.AndroidLongBatteryTracing';
import devPerfettoAndroidnetwork from '../plugins/dev.perfetto.AndroidNetwork';
import devPerfettoAndroidperf from '../plugins/dev.perfetto.AndroidPerf';
import devPerfettoAndroidperftracecounters from '../plugins/dev.perfetto.AndroidPerfTraceCounters';
import devPerfettoAndroidstartup from '../plugins/dev.perfetto.AndroidStartup';
import devPerfettoBookmarkletapi from '../plugins/dev.perfetto.BookmarkletApi';
import devPerfettoChaos from '../plugins/dev.perfetto.Chaos';
import devPerfettoCpufreq from '../plugins/dev.perfetto.CpuFreq';
import devPerfettoCpuprofile from '../plugins/dev.perfetto.CpuProfile';
import devPerfettoCpuidletimeinstate from '../plugins/dev.perfetto.CpuidleTimeInState';
import devPerfettoCriticalpath from '../plugins/dev.perfetto.CriticalPath';
import devPerfettoDebug from '../plugins/dev.perfetto.Debug';
import devPerfettoDeeplinkquerystring from '../plugins/dev.perfetto.DeeplinkQuerystring';
import devPerfettoEntitystateresidency from '../plugins/dev.perfetto.EntityStateResidency';
import devPerfettoExplorepage from '../plugins/dev.perfetto.ExplorePage';
import devPerfettoFrames from '../plugins/dev.perfetto.Frames';
import devPerfettoFtrace from '../plugins/dev.perfetto.Ftrace';
import devPerfettoGpubyprocess from '../plugins/dev.perfetto.GpuByProcess';
import devPerfettoGpufreq from '../plugins/dev.perfetto.GpuFreq';
import devPerfettoHeapprofile from '../plugins/dev.perfetto.HeapProfile';
import devPerfettoInsightspage from '../plugins/dev.perfetto.InsightsPage';
import devPerfettoInstrumentssamplesprofile from '../plugins/dev.perfetto.InstrumentsSamplesProfile';
import devPerfettoIo from '../plugins/dev.perfetto.Io';
import devPerfettoLargescreensperf from '../plugins/dev.perfetto.LargeScreensPerf';
import devPerfettoLinuxperf from '../plugins/dev.perfetto.LinuxPerf';
import devPerfettoMetricspage from '../plugins/dev.perfetto.MetricsPage';
import devPerfettoPinandroidperfmetrics from '../plugins/dev.perfetto.PinAndroidPerfMetrics';
import devPerfettoPinsysuitracks from '../plugins/dev.perfetto.PinSysUITracks';
import devPerfettoPoweraggregations from '../plugins/dev.perfetto.PowerAggregations';
import devPerfettoProcesssummary from '../plugins/dev.perfetto.ProcessSummary';
import devPerfettoProcessthreadgroups from '../plugins/dev.perfetto.ProcessThreadGroups';
import devPerfettoQuerylog from '../plugins/dev.perfetto.QueryLog';
import devPerfettoQuerypage from '../plugins/dev.perfetto.QueryPage';
import devPerfettoRecordtracev2 from '../plugins/dev.perfetto.RecordTraceV2';
import devPerfettoRestorepinnedtracks from '../plugins/dev.perfetto.RestorePinnedTracks';
import devPerfettoSched from '../plugins/dev.perfetto.Sched';
import devPerfettoSchedsummary from '../plugins/dev.perfetto.SchedSummary';
import devPerfettoScreenshots from '../plugins/dev.perfetto.Screenshots';
import devPerfettoSqlmodules from '../plugins/dev.perfetto.SqlModules';
import devPerfettoStandardgroups from '../plugins/dev.perfetto.StandardGroups';
import devPerfettoSysuiworkspace from '../plugins/dev.perfetto.SysUIWorkspace';
import devPerfettoThread from '../plugins/dev.perfetto.Thread';
import devPerfettoTimelinesync from '../plugins/dev.perfetto.TimelineSync';
import devPerfettoTraceinfopage from '../plugins/dev.perfetto.TraceInfoPage';
import devPerfettoTracemetadata from '../plugins/dev.perfetto.TraceMetadata';
import devPerfettoTraceprocessortrack from '../plugins/dev.perfetto.TraceProcessorTrack';
import devPerfettoTrackevent from '../plugins/dev.perfetto.TrackEvent';
import devPerfettoVizpage from '../plugins/dev.perfetto.VizPage';
import devPerfettoWidgetspage from '../plugins/dev.perfetto.WidgetsPage';
import orgChromiumChromecriticaluserinteractions from '../plugins/org.chromium.ChromeCriticalUserInteractions';
import orgChromiumChromenavigation from '../plugins/org.chromium.ChromeNavigation';
import orgChromiumChromescrolljank from '../plugins/org.chromium.ChromeScrollJank';
import orgChromiumChrometasks from '../plugins/org.chromium.ChromeTasks';
import orgChromiumOpentablecommands from '../plugins/org.chromium.OpenTableCommands';
import orgKernelLinuxkernelsubsystems from '../plugins/org.kernel.LinuxKernelSubsystems';
import orgKernelSuspendresumelatency from '../plugins/org.kernel.SuspendResumeLatency';
import orgKernelWattson from '../plugins/org.kernel.Wattson';

export default [
  comAndroidAvfvmcputimeline,
  comAndroidGpuworkperiod,
  comAndroidInputevents,
  comAndroidTrustyteecputimeline,
  comExampleCommands,
  comExampleSettings,
  comExampleSkeleton,
  comExampleState,
  comExampleTabs,
  comExampleTracks,
  comGooglePixelcpmtrace,
  comGooglePixelmemory,
  comGoogleAndroidGooglecamera,
  devPerfettoAndroidbinderviz,
  devPerfettoAndroidclientserver,
  devPerfettoAndroidcountertracks,
  devPerfettoAndroidcujs,
  devPerfettoAndroiddesktopmode,
  devPerfettoAndroiddmabuf,
  devPerfettoAndroidlog,
  devPerfettoAndroidlongbatterytracing,
  devPerfettoAndroidnetwork,
  devPerfettoAndroidperf,
  devPerfettoAndroidperftracecounters,
  devPerfettoAndroidstartup,
  devPerfettoBookmarkletapi,
  devPerfettoChaos,
  devPerfettoCpufreq,
  devPerfettoCpuprofile,
  devPerfettoCpuidletimeinstate,
  devPerfettoCriticalpath,
  devPerfettoDebug,
  devPerfettoDeeplinkquerystring,
  devPerfettoEntitystateresidency,
  devPerfettoExplorepage,
  devPerfettoFrames,
  devPerfettoFtrace,
  devPerfettoGpubyprocess,
  devPerfettoGpufreq,
  devPerfettoHeapprofile,
  devPerfettoInsightspage,
  devPerfettoInstrumentssamplesprofile,
  devPerfettoIo,
  devPerfettoLargescreensperf,
  devPerfettoLinuxperf,
  devPerfettoMetricspage,
  devPerfettoPinandroidperfmetrics,
  devPerfettoPinsysuitracks,
  devPerfettoPoweraggregations,
  devPerfettoProcesssummary,
  devPerfettoProcessthreadgroups,
  devPerfettoQuerylog,
  devPerfettoQuerypage,
  devPerfettoRecordtracev2,
  devPerfettoRestorepinnedtracks,
  devPerfettoSched,
  devPerfettoSchedsummary,
  devPerfettoScreenshots,
  devPerfettoSqlmodules,
  devPerfettoStandardgroups,
  devPerfettoSysuiworkspace,
  devPerfettoThread,
  devPerfettoTimelinesync,
  devPerfettoTraceinfopage,
  devPerfettoTracemetadata,
  devPerfettoTraceprocessortrack,
  devPerfettoTrackevent,
  devPerfettoVizpage,
  devPerfettoWidgetspage,
  orgChromiumChromecriticaluserinteractions,
  orgChromiumChromenavigation,
  orgChromiumChromescrolljank,
  orgChromiumChrometasks,
  orgChromiumOpentablecommands,
  orgKernelLinuxkernelsubsystems,
  orgKernelSuspendresumelatency,
  orgKernelWattson,
];
