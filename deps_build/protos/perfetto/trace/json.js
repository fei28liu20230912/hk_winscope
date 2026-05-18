/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots.perfetto_trace || ($protobuf.roots.perfetto_trace = new $protobuf.Root()))
.addJSON({
  perfetto: {
    nested: {
      protos: {
        nested: {
          Trace: {
            edition: "proto2",
            fields: {
              packet: {
                rule: "repeated",
                type: "TracePacket",
                id: 1
              }
            }
          },
          TracePacket: {
            edition: "proto2",
            oneofs: {
              data: {
                oneof: [
                  "processTree",
                  "processStats",
                  "inodeFileMap",
                  "chromeEvents",
                  "clockSnapshot",
                  "sysStats",
                  "trackEvent",
                  "traceUuid",
                  "traceConfig",
                  "ftraceStats",
                  "traceStats",
                  "profilePacket",
                  "streamingAllocation",
                  "streamingFree",
                  "battery",
                  "powerRails",
                  "androidLog",
                  "systemInfo",
                  "trigger",
                  "chromeTrigger",
                  "packagesList",
                  "chromeBenchmarkMetadata",
                  "perfettoMetatrace",
                  "chromeMetadata",
                  "gpuCounterEvent",
                  "gpuRenderStageEvent",
                  "streamingProfilePacket",
                  "heapGraph",
                  "graphicsFrameEvent",
                  "vulkanMemoryEvent",
                  "gpuLog",
                  "vulkanApiEvent",
                  "perfSample",
                  "cpuInfo",
                  "smapsPacket",
                  "serviceEvent",
                  "initialDisplayState",
                  "gpuMemTotalEvent",
                  "memoryTrackerSnapshot",
                  "frameTimelineEvent",
                  "androidEnergyEstimationBreakdown",
                  "uiState",
                  "androidCameraFrameEvent",
                  "androidCameraSessionStats",
                  "translationTable",
                  "androidGameInterventionList",
                  "statsdAtom",
                  "androidSystemProperty",
                  "entityStateResidency",
                  "moduleSymbols",
                  "deobfuscationMapping",
                  "trackDescriptor",
                  "processDescriptor",
                  "threadDescriptor",
                  "ftraceEvents",
                  "synchronizationMarker",
                  "compressedPackets",
                  "extensionDescriptor",
                  "networkPacket",
                  "networkPacketBundle",
                  "trackEventRangeOfInterest",
                  "surfaceflingerLayersSnapshot",
                  "surfaceflingerTransactions",
                  "shellTransition",
                  "shellHandlerMappings",
                  "protologMessage",
                  "protologViewerConfig",
                  "winscopeExtensions",
                  "etwEvents",
                  "v8JsCode",
                  "v8InternalCode",
                  "v8WasmCode",
                  "v8RegExpCode",
                  "v8CodeMove",
                  "remoteClockSync",
                  "pixelModemEvents",
                  "pixelModemTokenDatabase",
                  "cloneSnapshotTrigger",
                  "bluetoothTraceEvent",
                  "kernelWakelockData",
                  "appWakelockBundle",
                  "genericKernelTaskStateEvent",
                  "forTesting"
                ]
              },
              optionalTrustedUid: {
                oneof: [
                  "trustedUid"
                ]
              },
              optionalTrustedPacketSequenceId: {
                oneof: [
                  "trustedPacketSequenceId"
                ]
              }
            },
            fields: {
              timestamp: {
                type: "uint64",
                id: 8
              },
              timestampClockId: {
                type: "uint32",
                id: 58
              },
              processTree: {
                type: "ProcessTree",
                id: 2
              },
              processStats: {
                type: "ProcessStats",
                id: 9
              },
              inodeFileMap: {
                type: "InodeFileMap",
                id: 4
              },
              chromeEvents: {
                type: "ChromeEventBundle",
                id: 5
              },
              clockSnapshot: {
                type: "ClockSnapshot",
                id: 6
              },
              sysStats: {
                type: "SysStats",
                id: 7
              },
              trackEvent: {
                type: "TrackEvent",
                id: 11
              },
              traceUuid: {
                type: "TraceUuid",
                id: 89
              },
              traceConfig: {
                type: "TraceConfig",
                id: 33
              },
              ftraceStats: {
                type: "FtraceStats",
                id: 34
              },
              traceStats: {
                type: "TraceStats",
                id: 35
              },
              profilePacket: {
                type: "ProfilePacket",
                id: 37
              },
              streamingAllocation: {
                type: "StreamingAllocation",
                id: 74
              },
              streamingFree: {
                type: "StreamingFree",
                id: 75
              },
              battery: {
                type: "BatteryCounters",
                id: 38
              },
              powerRails: {
                type: "PowerRails",
                id: 40
              },
              androidLog: {
                type: "AndroidLogPacket",
                id: 39
              },
              systemInfo: {
                type: "SystemInfo",
                id: 45
              },
              trigger: {
                type: "Trigger",
                id: 46
              },
              chromeTrigger: {
                type: "ChromeTrigger",
                id: 109
              },
              packagesList: {
                type: "PackagesList",
                id: 47
              },
              chromeBenchmarkMetadata: {
                type: "ChromeBenchmarkMetadata",
                id: 48
              },
              perfettoMetatrace: {
                type: "PerfettoMetatrace",
                id: 49
              },
              chromeMetadata: {
                type: "ChromeMetadataPacket",
                id: 51
              },
              gpuCounterEvent: {
                type: "GpuCounterEvent",
                id: 52
              },
              gpuRenderStageEvent: {
                type: "GpuRenderStageEvent",
                id: 53
              },
              streamingProfilePacket: {
                type: "StreamingProfilePacket",
                id: 54
              },
              heapGraph: {
                type: "HeapGraph",
                id: 56
              },
              graphicsFrameEvent: {
                type: "GraphicsFrameEvent",
                id: 57
              },
              vulkanMemoryEvent: {
                type: "VulkanMemoryEvent",
                id: 62
              },
              gpuLog: {
                type: "GpuLog",
                id: 63
              },
              vulkanApiEvent: {
                type: "VulkanApiEvent",
                id: 65
              },
              perfSample: {
                type: "PerfSample",
                id: 66
              },
              cpuInfo: {
                type: "CpuInfo",
                id: 67
              },
              smapsPacket: {
                type: "SmapsPacket",
                id: 68
              },
              serviceEvent: {
                type: "TracingServiceEvent",
                id: 69
              },
              initialDisplayState: {
                type: "InitialDisplayState",
                id: 70
              },
              gpuMemTotalEvent: {
                type: "GpuMemTotalEvent",
                id: 71
              },
              memoryTrackerSnapshot: {
                type: "MemoryTrackerSnapshot",
                id: 73
              },
              frameTimelineEvent: {
                type: "FrameTimelineEvent",
                id: 76
              },
              androidEnergyEstimationBreakdown: {
                type: "AndroidEnergyEstimationBreakdown",
                id: 77
              },
              uiState: {
                type: "UiState",
                id: 78
              },
              androidCameraFrameEvent: {
                type: "AndroidCameraFrameEvent",
                id: 80
              },
              androidCameraSessionStats: {
                type: "AndroidCameraSessionStats",
                id: 81
              },
              translationTable: {
                type: "TranslationTable",
                id: 82
              },
              androidGameInterventionList: {
                type: "AndroidGameInterventionList",
                id: 83
              },
              statsdAtom: {
                type: "StatsdAtom",
                id: 84
              },
              androidSystemProperty: {
                type: "AndroidSystemProperty",
                id: 86
              },
              entityStateResidency: {
                type: "EntityStateResidency",
                id: 91
              },
              moduleSymbols: {
                type: "ModuleSymbols",
                id: 61
              },
              deobfuscationMapping: {
                type: "DeobfuscationMapping",
                id: 64
              },
              trackDescriptor: {
                type: "TrackDescriptor",
                id: 60
              },
              processDescriptor: {
                type: "ProcessDescriptor",
                id: 43
              },
              threadDescriptor: {
                type: "ThreadDescriptor",
                id: 44
              },
              ftraceEvents: {
                type: "FtraceEventBundle",
                id: 1
              },
              synchronizationMarker: {
                type: "bytes",
                id: 36
              },
              compressedPackets: {
                type: "bytes",
                id: 50
              },
              extensionDescriptor: {
                type: "ExtensionDescriptor",
                id: 72
              },
              networkPacket: {
                type: "NetworkPacketEvent",
                id: 88
              },
              networkPacketBundle: {
                type: "NetworkPacketBundle",
                id: 92
              },
              trackEventRangeOfInterest: {
                type: "TrackEventRangeOfInterest",
                id: 90
              },
              surfaceflingerLayersSnapshot: {
                type: "LayersSnapshotProto",
                id: 93
              },
              surfaceflingerTransactions: {
                type: "TransactionTraceEntry",
                id: 94
              },
              shellTransition: {
                type: "ShellTransition",
                id: 96
              },
              shellHandlerMappings: {
                type: "ShellHandlerMappings",
                id: 97
              },
              protologMessage: {
                type: "ProtoLogMessage",
                id: 104
              },
              protologViewerConfig: {
                type: "ProtoLogViewerConfig",
                id: 105
              },
              winscopeExtensions: {
                type: "WinscopeExtensions",
                id: 112
              },
              etwEvents: {
                type: "EtwTraceEventBundle",
                id: 95
              },
              v8JsCode: {
                type: "V8JsCode",
                id: 99
              },
              v8InternalCode: {
                type: "V8InternalCode",
                id: 100
              },
              v8WasmCode: {
                type: "V8WasmCode",
                id: 101
              },
              v8RegExpCode: {
                type: "V8RegExpCode",
                id: 102
              },
              v8CodeMove: {
                type: "V8CodeMove",
                id: 103
              },
              remoteClockSync: {
                type: "RemoteClockSync",
                id: 107
              },
              pixelModemEvents: {
                type: "PixelModemEvents",
                id: 110
              },
              pixelModemTokenDatabase: {
                type: "PixelModemTokenDatabase",
                id: 111
              },
              cloneSnapshotTrigger: {
                type: "Trigger",
                id: 113
              },
              bluetoothTraceEvent: {
                type: "BluetoothTraceEvent",
                id: 114
              },
              kernelWakelockData: {
                type: "KernelWakelockData",
                id: 115
              },
              appWakelockBundle: {
                type: "AppWakelockBundle",
                id: 116
              },
              genericKernelTaskStateEvent: {
                type: "GenericKernelTaskStateEvent",
                id: 117
              },
              forTesting: {
                type: "TestEvent",
                id: 900
              },
              trustedUid: {
                type: "int32",
                id: 3
              },
              trustedPacketSequenceId: {
                type: "uint32",
                id: 10
              },
              trustedPid: {
                type: "int32",
                id: 79
              },
              internedData: {
                type: "InternedData",
                id: 12
              },
              sequenceFlags: {
                type: "uint32",
                id: 13
              },
              incrementalStateCleared: {
                type: "bool",
                id: 41
              },
              tracePacketDefaults: {
                type: "TracePacketDefaults",
                id: 59
              },
              previousPacketDropped: {
                type: "bool",
                id: 42
              },
              firstPacketOnSequence: {
                type: "bool",
                id: 87
              },
              machineId: {
                type: "uint32",
                id: 98
              }
            },
            reserved: [
              [
                106,
                106
              ],
              [
                55,
                55
              ]
            ],
            nested: {
              SequenceFlags: {
                values: {
                  SEQ_UNSPECIFIED: 0,
                  SEQ_INCREMENTAL_STATE_CLEARED: 1,
                  SEQ_NEEDS_INCREMENTAL_STATE: 2
                }
              }
            }
          },
          Utsname: {
            edition: "proto2",
            fields: {
              sysname: {
                type: "string",
                id: 1
              },
              version: {
                type: "string",
                id: 2
              },
              release: {
                type: "string",
                id: 3
              },
              machine: {
                type: "string",
                id: 4
              }
            }
          },
          SystemInfo: {
            edition: "proto2",
            fields: {
              utsname: {
                type: "Utsname",
                id: 1
              },
              androidBuildFingerprint: {
                type: "string",
                id: 2
              },
              androidDeviceManufacturer: {
                type: "string",
                id: 14
              },
              androidSocModel: {
                type: "string",
                id: 9
              },
              androidGuestSocModel: {
                type: "string",
                id: 13
              },
              androidHardwareRevision: {
                type: "string",
                id: 10
              },
              androidStorageModel: {
                type: "string",
                id: 11
              },
              androidRamModel: {
                type: "string",
                id: 12
              },
              androidSerialConsole: {
                type: "string",
                id: 15
              },
              tracingServiceVersion: {
                type: "string",
                id: 4
              },
              androidSdkVersion: {
                type: "uint64",
                id: 5
              },
              pageSize: {
                type: "uint32",
                id: 6
              },
              numCpus: {
                type: "uint32",
                id: 8
              },
              timezoneOffMins: {
                type: "int32",
                id: 7
              },
              hz: {
                type: "int64",
                id: 3
              }
            }
          },
          TraceStats: {
            edition: "proto2",
            fields: {
              bufferStats: {
                rule: "repeated",
                type: "BufferStats",
                id: 1
              },
              chunkPayloadHistogramDef: {
                rule: "repeated",
                type: "int64",
                id: 17
              },
              writerStats: {
                rule: "repeated",
                type: "WriterStats",
                id: 18
              },
              producersConnected: {
                type: "uint32",
                id: 2
              },
              producersSeen: {
                type: "uint64",
                id: 3
              },
              dataSourcesRegistered: {
                type: "uint32",
                id: 4
              },
              dataSourcesSeen: {
                type: "uint64",
                id: 5
              },
              tracingSessions: {
                type: "uint32",
                id: 6
              },
              totalBuffers: {
                type: "uint32",
                id: 7
              },
              chunksDiscarded: {
                type: "uint64",
                id: 8
              },
              patchesDiscarded: {
                type: "uint64",
                id: 9
              },
              invalidPackets: {
                type: "uint64",
                id: 10
              },
              filterStats: {
                type: "FilterStats",
                id: 11
              },
              flushesRequested: {
                type: "uint64",
                id: 12
              },
              flushesSucceeded: {
                type: "uint64",
                id: 13
              },
              flushesFailed: {
                type: "uint64",
                id: 14
              },
              finalFlushOutcome: {
                type: "FinalFlushOutcome",
                id: 15
              }
            },
            nested: {
              BufferStats: {
                fields: {
                  bufferSize: {
                    type: "uint64",
                    id: 12
                  },
                  bytesWritten: {
                    type: "uint64",
                    id: 1
                  },
                  bytesOverwritten: {
                    type: "uint64",
                    id: 13
                  },
                  bytesRead: {
                    type: "uint64",
                    id: 14
                  },
                  paddingBytesWritten: {
                    type: "uint64",
                    id: 15
                  },
                  paddingBytesCleared: {
                    type: "uint64",
                    id: 16
                  },
                  chunksWritten: {
                    type: "uint64",
                    id: 2
                  },
                  chunksRewritten: {
                    type: "uint64",
                    id: 10
                  },
                  chunksOverwritten: {
                    type: "uint64",
                    id: 3
                  },
                  chunksDiscarded: {
                    type: "uint64",
                    id: 18
                  },
                  chunksRead: {
                    type: "uint64",
                    id: 17
                  },
                  chunksCommittedOutOfOrder: {
                    type: "uint64",
                    id: 11
                  },
                  writeWrapCount: {
                    type: "uint64",
                    id: 4
                  },
                  patchesSucceeded: {
                    type: "uint64",
                    id: 5
                  },
                  patchesFailed: {
                    type: "uint64",
                    id: 6
                  },
                  readaheadsSucceeded: {
                    type: "uint64",
                    id: 7
                  },
                  readaheadsFailed: {
                    type: "uint64",
                    id: 8
                  },
                  abiViolations: {
                    type: "uint64",
                    id: 9
                  },
                  traceWriterPacketLoss: {
                    type: "uint64",
                    id: 19
                  }
                }
              },
              WriterStats: {
                fields: {
                  sequenceId: {
                    type: "uint64",
                    id: 1
                  },
                  buffer: {
                    type: "uint32",
                    id: 4
                  },
                  chunkPayloadHistogramCounts: {
                    rule: "repeated",
                    type: "uint64",
                    id: 2,
                    options: {
                      packed: true
                    }
                  },
                  chunkPayloadHistogramSum: {
                    rule: "repeated",
                    type: "int64",
                    id: 3,
                    options: {
                      packed: true
                    }
                  }
                }
              },
              FilterStats: {
                fields: {
                  inputPackets: {
                    type: "uint64",
                    id: 1
                  },
                  inputBytes: {
                    type: "uint64",
                    id: 2
                  },
                  outputBytes: {
                    type: "uint64",
                    id: 3
                  },
                  errors: {
                    type: "uint64",
                    id: 4
                  },
                  timeTakenNs: {
                    type: "uint64",
                    id: 5
                  },
                  bytesDiscardedPerBuffer: {
                    rule: "repeated",
                    type: "uint64",
                    id: 20
                  }
                }
              },
              FinalFlushOutcome: {
                values: {
                  FINAL_FLUSH_UNSPECIFIED: 0,
                  FINAL_FLUSH_SUCCEEDED: 1,
                  FINAL_FLUSH_FAILED: 2
                }
              }
            }
          },
          TraceConfig: {
            edition: "proto2",
            fields: {
              buffers: {
                rule: "repeated",
                type: "BufferConfig",
                id: 1
              },
              dataSources: {
                rule: "repeated",
                type: "DataSource",
                id: 2
              },
              builtinDataSources: {
                type: "BuiltinDataSource",
                id: 20
              },
              durationMs: {
                type: "uint32",
                id: 3
              },
              preferSuspendClockForDuration: {
                type: "bool",
                id: 36
              },
              enableExtraGuardrails: {
                type: "bool",
                id: 4
              },
              lockdownMode: {
                type: "LockdownModeOperation",
                id: 5
              },
              producers: {
                rule: "repeated",
                type: "ProducerConfig",
                id: 6
              },
              statsdMetadata: {
                type: "StatsdMetadata",
                id: 7
              },
              writeIntoFile: {
                type: "bool",
                id: 8
              },
              outputPath: {
                type: "string",
                id: 29
              },
              fileWritePeriodMs: {
                type: "uint32",
                id: 9
              },
              maxFileSizeBytes: {
                type: "uint64",
                id: 10
              },
              guardrailOverrides: {
                type: "GuardrailOverrides",
                id: 11
              },
              deferredStart: {
                type: "bool",
                id: 12
              },
              flushPeriodMs: {
                type: "uint32",
                id: 13
              },
              flushTimeoutMs: {
                type: "uint32",
                id: 14
              },
              dataSourceStopTimeoutMs: {
                type: "uint32",
                id: 23
              },
              notifyTraceur: {
                type: "bool",
                id: 16
              },
              bugreportScore: {
                type: "int32",
                id: 30
              },
              bugreportFilename: {
                type: "string",
                id: 38
              },
              triggerConfig: {
                type: "TriggerConfig",
                id: 17
              },
              activateTriggers: {
                rule: "repeated",
                type: "string",
                id: 18
              },
              incrementalStateConfig: {
                type: "IncrementalStateConfig",
                id: 21
              },
              allowUserBuildTracing: {
                type: "bool",
                id: 19,
                options: {
                  deprecated: true
                }
              },
              uniqueSessionName: {
                type: "string",
                id: 22
              },
              compressionType: {
                type: "CompressionType",
                id: 24
              },
              incidentReportConfig: {
                type: "IncidentReportConfig",
                id: 25
              },
              statsdLogging: {
                type: "StatsdLogging",
                id: 31
              },
              traceUuidMsb: {
                type: "int64",
                id: 27,
                options: {
                  deprecated: true
                }
              },
              traceUuidLsb: {
                type: "int64",
                id: 28,
                options: {
                  deprecated: true
                }
              },
              traceFilter: {
                type: "TraceFilter",
                id: 33
              },
              androidReportConfig: {
                type: "AndroidReportConfig",
                id: 34
              },
              cmdTraceStartDelay: {
                type: "CmdTraceStartDelay",
                id: 35
              },
              sessionSemaphores: {
                rule: "repeated",
                type: "SessionSemaphore",
                id: 39
              }
            },
            reserved: [
              [
                15,
                15
              ],
              [
                37,
                37
              ],
              [
                26,
                26
              ],
              [
                32,
                32
              ]
            ],
            nested: {
              BufferConfig: {
                fields: {
                  sizeKb: {
                    type: "uint32",
                    id: 1
                  },
                  fillPolicy: {
                    type: "FillPolicy",
                    id: 4
                  },
                  transferOnClone: {
                    type: "bool",
                    id: 5
                  },
                  clearBeforeClone: {
                    type: "bool",
                    id: 6
                  }
                },
                reserved: [
                  [
                    2,
                    2
                  ],
                  [
                    3,
                    3
                  ]
                ],
                nested: {
                  FillPolicy: {
                    values: {
                      UNSPECIFIED: 0,
                      RING_BUFFER: 1,
                      DISCARD: 2
                    }
                  }
                }
              },
              DataSource: {
                fields: {
                  config: {
                    type: "protos.DataSourceConfig",
                    id: 1
                  },
                  producerNameFilter: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  },
                  producerNameRegexFilter: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  }
                }
              },
              BuiltinDataSource: {
                fields: {
                  disableClockSnapshotting: {
                    type: "bool",
                    id: 1
                  },
                  disableTraceConfig: {
                    type: "bool",
                    id: 2
                  },
                  disableSystemInfo: {
                    type: "bool",
                    id: 3
                  },
                  disableServiceEvents: {
                    type: "bool",
                    id: 4
                  },
                  primaryTraceClock: {
                    type: "BuiltinClock",
                    id: 5
                  },
                  snapshotIntervalMs: {
                    type: "uint32",
                    id: 6
                  },
                  preferSuspendClockForSnapshot: {
                    type: "bool",
                    id: 7
                  },
                  disableChunkUsageHistograms: {
                    type: "bool",
                    id: 8
                  }
                }
              },
              LockdownModeOperation: {
                values: {
                  LOCKDOWN_UNCHANGED: 0,
                  LOCKDOWN_CLEAR: 1,
                  LOCKDOWN_SET: 2
                }
              },
              ProducerConfig: {
                fields: {
                  producerName: {
                    type: "string",
                    id: 1
                  },
                  shmSizeKb: {
                    type: "uint32",
                    id: 2
                  },
                  pageSizeKb: {
                    type: "uint32",
                    id: 3
                  }
                }
              },
              StatsdMetadata: {
                fields: {
                  triggeringAlertId: {
                    type: "int64",
                    id: 1
                  },
                  triggeringConfigUid: {
                    type: "int32",
                    id: 2
                  },
                  triggeringConfigId: {
                    type: "int64",
                    id: 3
                  },
                  triggeringSubscriptionId: {
                    type: "int64",
                    id: 4
                  }
                }
              },
              GuardrailOverrides: {
                fields: {
                  maxUploadPerDayBytes: {
                    type: "uint64",
                    id: 1,
                    options: {
                      deprecated: true
                    }
                  },
                  maxTracingBufferSizeKb: {
                    type: "uint32",
                    id: 2
                  }
                }
              },
              TriggerConfig: {
                fields: {
                  triggerMode: {
                    type: "TriggerMode",
                    id: 1
                  },
                  useCloneSnapshotIfAvailable: {
                    type: "bool",
                    id: 5
                  },
                  triggers: {
                    rule: "repeated",
                    type: "Trigger",
                    id: 2
                  },
                  triggerTimeoutMs: {
                    type: "uint32",
                    id: 3
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ],
                nested: {
                  TriggerMode: {
                    values: {
                      UNSPECIFIED: 0,
                      START_TRACING: 1,
                      STOP_TRACING: 2,
                      CLONE_SNAPSHOT: 4
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  Trigger: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      producerNameRegex: {
                        type: "string",
                        id: 2
                      },
                      stopDelayMs: {
                        type: "uint32",
                        id: 3
                      },
                      maxPer_24H: {
                        type: "uint32",
                        id: 4
                      },
                      skipProbability: {
                        type: "double",
                        id: 5
                      }
                    }
                  }
                }
              },
              IncrementalStateConfig: {
                fields: {
                  clearPeriodMs: {
                    type: "uint32",
                    id: 1
                  }
                }
              },
              CompressionType: {
                values: {
                  COMPRESSION_TYPE_UNSPECIFIED: 0,
                  COMPRESSION_TYPE_DEFLATE: 1
                }
              },
              IncidentReportConfig: {
                fields: {
                  destinationPackage: {
                    type: "string",
                    id: 1
                  },
                  destinationClass: {
                    type: "string",
                    id: 2
                  },
                  privacyLevel: {
                    type: "int32",
                    id: 3
                  },
                  skipIncidentd: {
                    type: "bool",
                    id: 5
                  },
                  skipDropbox: {
                    type: "bool",
                    id: 4,
                    options: {
                      deprecated: true
                    }
                  }
                }
              },
              StatsdLogging: {
                values: {
                  STATSD_LOGGING_UNSPECIFIED: 0,
                  STATSD_LOGGING_ENABLED: 1,
                  STATSD_LOGGING_DISABLED: 2
                }
              },
              TraceFilter: {
                fields: {
                  bytecode: {
                    type: "bytes",
                    id: 1
                  },
                  bytecodeV2: {
                    type: "bytes",
                    id: 2
                  },
                  stringFilterChain: {
                    type: "StringFilterChain",
                    id: 3
                  }
                },
                nested: {
                  StringFilterPolicy: {
                    values: {
                      SFP_UNSPECIFIED: 0,
                      SFP_MATCH_REDACT_GROUPS: 1,
                      SFP_ATRACE_MATCH_REDACT_GROUPS: 2,
                      SFP_MATCH_BREAK: 3,
                      SFP_ATRACE_MATCH_BREAK: 4,
                      SFP_ATRACE_REPEATED_SEARCH_REDACT_GROUPS: 5
                    }
                  },
                  StringFilterRule: {
                    fields: {
                      policy: {
                        type: "StringFilterPolicy",
                        id: 1
                      },
                      regexPattern: {
                        type: "string",
                        id: 2
                      },
                      atracePayloadStartsWith: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  StringFilterChain: {
                    fields: {
                      rules: {
                        rule: "repeated",
                        type: "StringFilterRule",
                        id: 1
                      }
                    }
                  }
                }
              },
              AndroidReportConfig: {
                fields: {
                  reporterServicePackage: {
                    type: "string",
                    id: 1
                  },
                  reporterServiceClass: {
                    type: "string",
                    id: 2
                  },
                  skipReport: {
                    type: "bool",
                    id: 3
                  },
                  usePipeInFrameworkForTesting: {
                    type: "bool",
                    id: 4
                  }
                }
              },
              CmdTraceStartDelay: {
                fields: {
                  minDelayMs: {
                    type: "uint32",
                    id: 1
                  },
                  maxDelayMs: {
                    type: "uint32",
                    id: 2
                  }
                }
              },
              SessionSemaphore: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  maxOtherSessionCount: {
                    type: "uint64",
                    id: 2
                  }
                }
              }
            }
          },
          BuiltinClock: {
            edition: "proto2",
            values: {
              BUILTIN_CLOCK_UNKNOWN: 0,
              BUILTIN_CLOCK_REALTIME: 1,
              BUILTIN_CLOCK_REALTIME_COARSE: 2,
              BUILTIN_CLOCK_MONOTONIC: 3,
              BUILTIN_CLOCK_MONOTONIC_COARSE: 4,
              BUILTIN_CLOCK_MONOTONIC_RAW: 5,
              BUILTIN_CLOCK_BOOTTIME: 6,
              BUILTIN_CLOCK_TSC: 9,
              BUILTIN_CLOCK_PERF: 10,
              BUILTIN_CLOCK_MAX_ID: 63
            },
            reserved: [
              [
                7,
                7
              ],
              [
                8,
                8
              ]
            ]
          },
          DataSourceConfig: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              targetBuffer: {
                type: "uint32",
                id: 2
              },
              traceDurationMs: {
                type: "uint32",
                id: 3
              },
              preferSuspendClockForDuration: {
                type: "bool",
                id: 122
              },
              stopTimeoutMs: {
                type: "uint32",
                id: 7
              },
              enableExtraGuardrails: {
                type: "bool",
                id: 6
              },
              sessionInitiator: {
                type: "SessionInitiator",
                id: 8
              },
              tracingSessionId: {
                type: "uint64",
                id: 4
              },
              bufferExhaustedPolicy: {
                type: "BufferExhaustedPolicy",
                id: 9
              },
              ftraceConfig: {
                type: "FtraceConfig",
                id: 100,
                options: {
                  lazy: true
                }
              },
              inodeFileConfig: {
                type: "InodeFileConfig",
                id: 102,
                options: {
                  lazy: true
                }
              },
              processStatsConfig: {
                type: "ProcessStatsConfig",
                id: 103,
                options: {
                  lazy: true
                }
              },
              sysStatsConfig: {
                type: "SysStatsConfig",
                id: 104,
                options: {
                  lazy: true
                }
              },
              heapprofdConfig: {
                type: "HeapprofdConfig",
                id: 105,
                options: {
                  lazy: true
                }
              },
              javaHprofConfig: {
                type: "JavaHprofConfig",
                id: 110,
                options: {
                  lazy: true
                }
              },
              androidPowerConfig: {
                type: "AndroidPowerConfig",
                id: 106,
                options: {
                  lazy: true
                }
              },
              androidLogConfig: {
                type: "AndroidLogConfig",
                id: 107,
                options: {
                  lazy: true
                }
              },
              gpuCounterConfig: {
                type: "GpuCounterConfig",
                id: 108,
                options: {
                  lazy: true
                }
              },
              androidGameInterventionListConfig: {
                type: "AndroidGameInterventionListConfig",
                id: 116,
                options: {
                  lazy: true
                }
              },
              packagesListConfig: {
                type: "PackagesListConfig",
                id: 109,
                options: {
                  lazy: true
                }
              },
              perfEventConfig: {
                type: "PerfEventConfig",
                id: 111,
                options: {
                  lazy: true
                }
              },
              vulkanMemoryConfig: {
                type: "VulkanMemoryConfig",
                id: 112,
                options: {
                  lazy: true
                }
              },
              trackEventConfig: {
                type: "TrackEventConfig",
                id: 113,
                options: {
                  lazy: true
                }
              },
              androidPolledStateConfig: {
                type: "AndroidPolledStateConfig",
                id: 114,
                options: {
                  lazy: true
                }
              },
              androidSystemPropertyConfig: {
                type: "AndroidSystemPropertyConfig",
                id: 118,
                options: {
                  lazy: true
                }
              },
              statsdTracingConfig: {
                type: "StatsdTracingConfig",
                id: 117,
                options: {
                  lazy: true
                }
              },
              systemInfoConfig: {
                type: "SystemInfoConfig",
                id: 119
              },
              frozenFtraceConfig: {
                type: "FrozenFtraceConfig",
                id: 136,
                options: {
                  lazy: true
                }
              },
              chromeConfig: {
                type: "ChromeConfig",
                id: 101
              },
              v8Config: {
                type: "V8Config",
                id: 127,
                options: {
                  lazy: true
                }
              },
              interceptorConfig: {
                type: "InterceptorConfig",
                id: 115
              },
              networkPacketTraceConfig: {
                type: "NetworkPacketTraceConfig",
                id: 120,
                options: {
                  lazy: true
                }
              },
              surfaceflingerLayersConfig: {
                type: "SurfaceFlingerLayersConfig",
                id: 121,
                options: {
                  lazy: true
                }
              },
              surfaceflingerTransactionsConfig: {
                type: "SurfaceFlingerTransactionsConfig",
                id: 123,
                options: {
                  lazy: true
                }
              },
              androidSdkSyspropGuardConfig: {
                type: "AndroidSdkSyspropGuardConfig",
                id: 124,
                options: {
                  lazy: true
                }
              },
              etwConfig: {
                type: "EtwConfig",
                id: 125,
                options: {
                  lazy: true
                }
              },
              protologConfig: {
                type: "ProtoLogConfig",
                id: 126,
                options: {
                  lazy: true
                }
              },
              androidInputEventConfig: {
                type: "AndroidInputEventConfig",
                id: 128,
                options: {
                  lazy: true
                }
              },
              pixelModemConfig: {
                type: "PixelModemConfig",
                id: 129,
                options: {
                  lazy: true
                }
              },
              windowmanagerConfig: {
                type: "WindowManagerConfig",
                id: 130,
                options: {
                  lazy: true
                }
              },
              chromiumSystemMetrics: {
                type: "ChromiumSystemMetricsConfig",
                id: 131,
                options: {
                  lazy: true
                }
              },
              kernelWakelocksConfig: {
                type: "KernelWakelocksConfig",
                id: 132,
                options: {
                  lazy: true
                }
              },
              gpuRenderstagesConfig: {
                type: "GpuRenderStagesConfig",
                id: 133,
                options: {
                  lazy: true
                }
              },
              chromiumHistogramSamples: {
                type: "ChromiumHistogramSamplesConfig",
                id: 134,
                options: {
                  lazy: true
                }
              },
              appWakelocksConfig: {
                type: "AppWakelocksConfig",
                id: 135,
                options: {
                  lazy: true
                }
              },
              legacyConfig: {
                type: "string",
                id: 1000
              },
              forTesting: {
                type: "TestConfig",
                id: 1001
              }
            },
            reserved: [
              [
                268435455,
                268435455
              ]
            ],
            nested: {
              SessionInitiator: {
                values: {
                  SESSION_INITIATOR_UNSPECIFIED: 0,
                  SESSION_INITIATOR_TRUSTED_SYSTEM: 1
                }
              },
              BufferExhaustedPolicy: {
                values: {
                  BUFFER_EXHAUSTED_UNSPECIFIED: 0,
                  BUFFER_EXHAUSTED_DROP: 1,
                  BUFFER_EXHAUSTED_STALL_THEN_ABORT: 2,
                  BUFFER_EXHAUSTED_STALL_THEN_DROP: 3
                }
              }
            }
          },
          AndroidGameInterventionListConfig: {
            edition: "proto2",
            fields: {
              packageNameFilter: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          },
          AndroidInputEventConfig: {
            edition: "proto2",
            fields: {
              mode: {
                type: "TraceMode",
                id: 1
              },
              rules: {
                rule: "repeated",
                type: "TraceRule",
                id: 2
              },
              traceDispatcherInputEvents: {
                type: "bool",
                id: 3
              },
              traceDispatcherWindowDispatch: {
                type: "bool",
                id: 4
              }
            },
            nested: {
              TraceMode: {
                values: {
                  TRACE_MODE_TRACE_ALL: 0,
                  TRACE_MODE_USE_RULES: 1
                }
              },
              TraceLevel: {
                values: {
                  TRACE_LEVEL_NONE: 0,
                  TRACE_LEVEL_REDACTED: 1,
                  TRACE_LEVEL_COMPLETE: 2
                }
              },
              TraceRule: {
                fields: {
                  traceLevel: {
                    type: "TraceLevel",
                    id: 1
                  },
                  matchAllPackages: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  },
                  matchAnyPackages: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  matchSecure: {
                    type: "bool",
                    id: 4
                  },
                  matchImeConnectionActive: {
                    type: "bool",
                    id: 5
                  }
                }
              }
            }
          },
          AndroidLogConfig: {
            edition: "proto2",
            fields: {
              logIds: {
                rule: "repeated",
                type: "AndroidLogId",
                id: 1
              },
              minPrio: {
                type: "AndroidLogPriority",
                id: 3
              },
              filterTags: {
                rule: "repeated",
                type: "string",
                id: 4
              }
            },
            reserved: [
              [
                2,
                2
              ]
            ]
          },
          AndroidLogId: {
            edition: "proto2",
            values: {
              LID_DEFAULT: 0,
              LID_RADIO: 1,
              LID_EVENTS: 2,
              LID_SYSTEM: 3,
              LID_CRASH: 4,
              LID_STATS: 5,
              LID_SECURITY: 6,
              LID_KERNEL: 7
            }
          },
          AndroidLogPriority: {
            edition: "proto2",
            values: {
              PRIO_UNSPECIFIED: 0,
              PRIO_UNUSED: 1,
              PRIO_VERBOSE: 2,
              PRIO_DEBUG: 3,
              PRIO_INFO: 4,
              PRIO_WARN: 5,
              PRIO_ERROR: 6,
              PRIO_FATAL: 7
            }
          },
          AndroidPolledStateConfig: {
            edition: "proto2",
            fields: {
              pollMs: {
                type: "uint32",
                id: 1
              }
            }
          },
          AndroidSystemPropertyConfig: {
            edition: "proto2",
            fields: {
              pollMs: {
                type: "uint32",
                id: 1
              },
              propertyName: {
                rule: "repeated",
                type: "string",
                id: 2
              }
            }
          },
          AndroidSdkSyspropGuardConfig: {
            edition: "proto2",
            fields: {
              surfaceflingerSkiaTrackEvents: {
                type: "bool",
                id: 1
              },
              hwuiSkiaTrackEvents: {
                type: "bool",
                id: 2
              },
              hwuiPackageNameFilter: {
                rule: "repeated",
                type: "string",
                id: 3
              }
            }
          },
          AppWakelocksConfig: {
            edition: "proto2",
            fields: {
              writeDelayMs: {
                type: "int32",
                id: 1
              },
              filterDurationBelowMs: {
                type: "int32",
                id: 2
              },
              dropOwnerPid: {
                type: "bool",
                id: 3
              }
            }
          },
          KernelWakelocksConfig: {
            edition: "proto2",
            fields: {
              pollMs: {
                type: "uint32",
                id: 1
              }
            }
          },
          NetworkPacketTraceConfig: {
            edition: "proto2",
            fields: {
              pollMs: {
                type: "uint32",
                id: 1
              },
              aggregationThreshold: {
                type: "uint32",
                id: 2
              },
              internLimit: {
                type: "uint32",
                id: 3
              },
              dropLocalPort: {
                type: "bool",
                id: 4
              },
              dropRemotePort: {
                type: "bool",
                id: 5
              },
              dropTcpFlags: {
                type: "bool",
                id: 6
              }
            }
          },
          PackagesListConfig: {
            edition: "proto2",
            fields: {
              packageNameFilter: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          },
          PixelModemConfig: {
            edition: "proto2",
            fields: {
              eventGroup: {
                type: "EventGroup",
                id: 1
              },
              pigweedHashAllowList: {
                rule: "repeated",
                type: "int64",
                id: 2
              },
              pigweedHashDenyList: {
                rule: "repeated",
                type: "int64",
                id: 3
              }
            },
            nested: {
              EventGroup: {
                values: {
                  EVENT_GROUP_UNKNOWN: 0,
                  EVENT_GROUP_LOW_BANDWIDTH: 1,
                  EVENT_GROUP_HIGH_AND_LOW_BANDWIDTH: 2
                }
              }
            }
          },
          ProtoLogConfig: {
            edition: "proto2",
            fields: {
              groupOverrides: {
                rule: "repeated",
                type: "ProtoLogGroup",
                id: 1
              },
              tracingMode: {
                type: "TracingMode",
                id: 2
              },
              defaultLogFromLevel: {
                type: "ProtoLogLevel",
                id: 3
              }
            },
            nested: {
              TracingMode: {
                values: {
                  DEFAULT: 0,
                  ENABLE_ALL: 1
                }
              }
            }
          },
          ProtoLogGroup: {
            edition: "proto2",
            fields: {
              groupName: {
                type: "string",
                id: 1
              },
              logFrom: {
                type: "ProtoLogLevel",
                id: 2
              },
              collectStacktrace: {
                type: "bool",
                id: 3
              }
            }
          },
          ProtoLogLevel: {
            edition: "proto2",
            values: {
              PROTOLOG_LEVEL_UNDEFINED: 0,
              PROTOLOG_LEVEL_DEBUG: 1,
              PROTOLOG_LEVEL_VERBOSE: 2,
              PROTOLOG_LEVEL_INFO: 3,
              PROTOLOG_LEVEL_WARN: 4,
              PROTOLOG_LEVEL_ERROR: 5,
              PROTOLOG_LEVEL_WTF: 6
            }
          },
          SurfaceFlingerLayersConfig: {
            edition: "proto2",
            fields: {
              mode: {
                type: "Mode",
                id: 1
              },
              traceFlags: {
                rule: "repeated",
                type: "TraceFlag",
                id: 2
              }
            },
            nested: {
              Mode: {
                values: {
                  MODE_UNSPECIFIED: 0,
                  MODE_ACTIVE: 1,
                  MODE_GENERATED: 2,
                  MODE_DUMP: 3,
                  MODE_GENERATED_BUGREPORT_ONLY: 4
                }
              },
              TraceFlag: {
                values: {
                  TRACE_FLAG_UNSPECIFIED: 0,
                  TRACE_FLAG_INPUT: 2,
                  TRACE_FLAG_COMPOSITION: 4,
                  TRACE_FLAG_EXTRA: 8,
                  TRACE_FLAG_HWC: 16,
                  TRACE_FLAG_BUFFERS: 32,
                  TRACE_FLAG_VIRTUAL_DISPLAYS: 64,
                  TRACE_FLAG_ALL: 14
                }
              }
            }
          },
          SurfaceFlingerTransactionsConfig: {
            edition: "proto2",
            fields: {
              mode: {
                type: "Mode",
                id: 1
              }
            },
            nested: {
              Mode: {
                values: {
                  MODE_UNSPECIFIED: 0,
                  MODE_CONTINUOUS: 1,
                  MODE_ACTIVE: 2
                }
              }
            }
          },
          WindowManagerConfig: {
            edition: "proto2",
            fields: {
              logFrequency: {
                type: "LogFrequency",
                id: 1
              },
              logLevel: {
                type: "LogLevel",
                id: 2
              }
            },
            nested: {
              LogFrequency: {
                values: {
                  LOG_FREQUENCY_UNSPECIFIED: 0,
                  LOG_FREQUENCY_FRAME: 1,
                  LOG_FREQUENCY_TRANSACTION: 2,
                  LOG_FREQUENCY_SINGLE_DUMP: 3
                }
              },
              LogLevel: {
                values: {
                  LOG_LEVEL_UNSPECIFIED: 0,
                  LOG_LEVEL_VERBOSE: 1,
                  LOG_LEVEL_DEBUG: 2,
                  LOG_LEVEL_CRITICAL: 3
                }
              }
            }
          },
          ChromeConfig: {
            edition: "proto2",
            fields: {
              traceConfig: {
                type: "string",
                id: 1
              },
              privacyFilteringEnabled: {
                type: "bool",
                id: 2
              },
              convertToLegacyJson: {
                type: "bool",
                id: 3
              },
              clientPriority: {
                type: "ClientPriority",
                id: 4
              },
              jsonAgentLabelFilter: {
                type: "string",
                id: 5
              },
              eventPackageNameFilterEnabled: {
                type: "bool",
                id: 6
              }
            },
            nested: {
              ClientPriority: {
                values: {
                  UNKNOWN: 0,
                  BACKGROUND: 1,
                  USER_INITIATED: 2
                }
              }
            }
          },
          V8Config: {
            edition: "proto2",
            fields: {
              logScriptSources: {
                type: "bool",
                id: 1
              },
              logInstructions: {
                type: "bool",
                id: 2
              }
            }
          },
          EtwConfig: {
            edition: "proto2",
            fields: {
              kernelFlags: {
                rule: "repeated",
                type: "KernelFlag",
                id: 1
              }
            },
            nested: {
              KernelFlag: {
                values: {
                  CSWITCH: 0,
                  DISPATCHER: 1
                }
              }
            }
          },
          ChromiumSystemMetricsConfig: {
            edition: "proto2",
            fields: {
              samplingIntervalMs: {
                type: "uint32",
                id: 1
              }
            }
          },
          FtraceConfig: {
            edition: "proto2",
            fields: {
              ftraceEvents: {
                rule: "repeated",
                type: "string",
                id: 1
              },
              kprobeEvents: {
                rule: "repeated",
                type: "KprobeEvent",
                id: 30
              },
              atraceCategories: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              atraceApps: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              atraceCategoriesPreferSdk: {
                rule: "repeated",
                type: "string",
                id: 28
              },
              bufferSizeKb: {
                type: "uint32",
                id: 10
              },
              drainPeriodMs: {
                type: "uint32",
                id: 11
              },
              drainBufferPercent: {
                type: "uint32",
                id: 29
              },
              compactSched: {
                type: "CompactSchedConfig",
                id: 12
              },
              printFilter: {
                type: "PrintFilter",
                id: 22
              },
              symbolizeKsyms: {
                type: "bool",
                id: 13
              },
              ksymsMemPolicy: {
                type: "KsymsMemPolicy",
                id: 17
              },
              initializeKsymsSynchronouslyForTesting: {
                type: "bool",
                id: 14,
                options: {
                  deprecated: true
                }
              },
              throttleRssStat: {
                type: "bool",
                id: 15
              },
              denserGenericEventEncoding: {
                type: "bool",
                id: 32
              },
              disableGenericEvents: {
                type: "bool",
                id: 16
              },
              syscallEvents: {
                rule: "repeated",
                type: "string",
                id: 18
              },
              enableFunctionGraph: {
                type: "bool",
                id: 19
              },
              functionFilters: {
                rule: "repeated",
                type: "string",
                id: 20
              },
              functionGraphRoots: {
                rule: "repeated",
                type: "string",
                id: 21
              },
              preserveFtraceBuffer: {
                type: "bool",
                id: 23
              },
              useMonotonicRawClock: {
                type: "bool",
                id: 24
              },
              instanceName: {
                type: "string",
                id: 25
              },
              bufferSizeLowerBound: {
                type: "bool",
                id: 27
              },
              debugFtraceAbi: {
                type: "bool",
                id: 31
              },
              functionGraphMaxDepth: {
                type: "uint32",
                id: 33
              }
            },
            reserved: [
              [
                26,
                26
              ]
            ],
            nested: {
              KprobeEvent: {
                fields: {
                  probe: {
                    type: "string",
                    id: 1
                  },
                  type: {
                    type: "KprobeType",
                    id: 2
                  }
                },
                nested: {
                  KprobeType: {
                    values: {
                      KPROBE_TYPE_UNKNOWN: 0,
                      KPROBE_TYPE_KPROBE: 1,
                      KPROBE_TYPE_KRETPROBE: 2,
                      KPROBE_TYPE_BOTH: 3
                    }
                  }
                }
              },
              CompactSchedConfig: {
                fields: {
                  enabled: {
                    type: "bool",
                    id: 1
                  }
                }
              },
              PrintFilter: {
                fields: {
                  rules: {
                    rule: "repeated",
                    type: "Rule",
                    id: 1
                  }
                },
                nested: {
                  Rule: {
                    oneofs: {
                      match: {
                        oneof: [
                          "prefix",
                          "atraceMsg"
                        ]
                      }
                    },
                    fields: {
                      prefix: {
                        type: "string",
                        id: 1
                      },
                      atraceMsg: {
                        type: "AtraceMessage",
                        id: 3
                      },
                      allow: {
                        type: "bool",
                        id: 2
                      }
                    },
                    nested: {
                      AtraceMessage: {
                        fields: {
                          type: {
                            type: "string",
                            id: 1
                          },
                          prefix: {
                            type: "string",
                            id: 2
                          }
                        }
                      }
                    }
                  }
                }
              },
              KsymsMemPolicy: {
                values: {
                  KSYMS_UNSPECIFIED: 0,
                  KSYMS_CLEANUP_ON_STOP: 1,
                  KSYMS_RETAIN: 2
                }
              }
            }
          },
          FrozenFtraceConfig: {
            edition: "proto2",
            fields: {
              instanceName: {
                type: "string",
                id: 1
              }
            }
          },
          GpuCounterConfig: {
            edition: "proto2",
            fields: {
              counterPeriodNs: {
                type: "uint64",
                id: 1
              },
              counterIds: {
                rule: "repeated",
                type: "uint32",
                id: 2
              },
              instrumentedSampling: {
                type: "bool",
                id: 3
              },
              fixGpuClock: {
                type: "bool",
                id: 4
              }
            }
          },
          VulkanMemoryConfig: {
            edition: "proto2",
            fields: {
              trackDriverMemoryUsage: {
                type: "bool",
                id: 1
              },
              trackDeviceMemoryUsage: {
                type: "bool",
                id: 2
              }
            }
          },
          GpuRenderStagesConfig: {
            edition: "proto2",
            fields: {
              fullLoadstore: {
                type: "bool",
                id: 1
              },
              lowOverhead: {
                type: "bool",
                id: 2
              },
              traceMetrics: {
                rule: "repeated",
                type: "string",
                id: 3
              }
            }
          },
          InodeFileConfig: {
            edition: "proto2",
            fields: {
              scanIntervalMs: {
                type: "uint32",
                id: 1
              },
              scanDelayMs: {
                type: "uint32",
                id: 2
              },
              scanBatchSize: {
                type: "uint32",
                id: 3
              },
              doNotScan: {
                type: "bool",
                id: 4
              },
              scanMountPoints: {
                rule: "repeated",
                type: "string",
                id: 5
              },
              mountPointMapping: {
                rule: "repeated",
                type: "MountPointMappingEntry",
                id: 6
              }
            },
            nested: {
              MountPointMappingEntry: {
                fields: {
                  mountpoint: {
                    type: "string",
                    id: 1
                  },
                  scanRoots: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          InterceptorConfig: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              consoleConfig: {
                type: "ConsoleConfig",
                id: 100
              }
            }
          },
          ConsoleConfig: {
            edition: "proto2",
            fields: {
              output: {
                type: "Output",
                id: 1
              },
              enableColors: {
                type: "bool",
                id: 2
              }
            },
            nested: {
              Output: {
                values: {
                  OUTPUT_UNSPECIFIED: 0,
                  OUTPUT_STDOUT: 1,
                  OUTPUT_STDERR: 2
                }
              }
            }
          },
          AndroidPowerConfig: {
            edition: "proto2",
            fields: {
              batteryPollMs: {
                type: "uint32",
                id: 1
              },
              batteryCounters: {
                rule: "repeated",
                type: "BatteryCounters",
                id: 2
              },
              collectPowerRails: {
                type: "bool",
                id: 3
              },
              collectEnergyEstimationBreakdown: {
                type: "bool",
                id: 4
              },
              collectEntityStateResidency: {
                type: "bool",
                id: 5
              }
            },
            nested: {
              BatteryCounters: {
                values: {
                  BATTERY_COUNTER_UNSPECIFIED: 0,
                  BATTERY_COUNTER_CHARGE: 1,
                  BATTERY_COUNTER_CAPACITY_PERCENT: 2,
                  BATTERY_COUNTER_CURRENT: 3,
                  BATTERY_COUNTER_CURRENT_AVG: 4,
                  BATTERY_COUNTER_VOLTAGE: 5
                }
              }
            }
          },
          StatsdTracingConfig: {
            edition: "proto2",
            fields: {
              pushAtomId: {
                rule: "repeated",
                type: "AtomId",
                id: 1
              },
              rawPushAtomId: {
                rule: "repeated",
                type: "int32",
                id: 2
              },
              pullConfig: {
                rule: "repeated",
                type: "StatsdPullAtomConfig",
                id: 3
              }
            }
          },
          StatsdPullAtomConfig: {
            edition: "proto2",
            fields: {
              pullAtomId: {
                rule: "repeated",
                type: "AtomId",
                id: 1
              },
              rawPullAtomId: {
                rule: "repeated",
                type: "int32",
                id: 2
              },
              pullFrequencyMs: {
                type: "int32",
                id: 3
              },
              packages: {
                rule: "repeated",
                type: "string",
                id: 4
              }
            }
          },
          AtomId: {
            edition: "proto2",
            values: {
              ATOM_UNSPECIFIED: 0,
              ATOM_BLE_SCAN_STATE_CHANGED: 2,
              ATOM_PROCESS_STATE_CHANGED: 3,
              ATOM_BLE_SCAN_RESULT_RECEIVED: 4,
              ATOM_SENSOR_STATE_CHANGED: 5,
              ATOM_GPS_SCAN_STATE_CHANGED: 6,
              ATOM_SYNC_STATE_CHANGED: 7,
              ATOM_SCHEDULED_JOB_STATE_CHANGED: 8,
              ATOM_SCREEN_BRIGHTNESS_CHANGED: 9,
              ATOM_WAKELOCK_STATE_CHANGED: 10,
              ATOM_LONG_PARTIAL_WAKELOCK_STATE_CHANGED: 11,
              ATOM_MOBILE_RADIO_POWER_STATE_CHANGED: 12,
              ATOM_WIFI_RADIO_POWER_STATE_CHANGED: 13,
              ATOM_ACTIVITY_MANAGER_SLEEP_STATE_CHANGED: 14,
              ATOM_MEMORY_FACTOR_STATE_CHANGED: 15,
              ATOM_EXCESSIVE_CPU_USAGE_REPORTED: 16,
              ATOM_CACHED_KILL_REPORTED: 17,
              ATOM_PROCESS_MEMORY_STAT_REPORTED: 18,
              ATOM_LAUNCHER_EVENT: 19,
              ATOM_BATTERY_SAVER_MODE_STATE_CHANGED: 20,
              ATOM_DEVICE_IDLE_MODE_STATE_CHANGED: 21,
              ATOM_DEVICE_IDLING_MODE_STATE_CHANGED: 22,
              ATOM_AUDIO_STATE_CHANGED: 23,
              ATOM_MEDIA_CODEC_STATE_CHANGED: 24,
              ATOM_CAMERA_STATE_CHANGED: 25,
              ATOM_FLASHLIGHT_STATE_CHANGED: 26,
              ATOM_UID_PROCESS_STATE_CHANGED: 27,
              ATOM_PROCESS_LIFE_CYCLE_STATE_CHANGED: 28,
              ATOM_SCREEN_STATE_CHANGED: 29,
              ATOM_BATTERY_LEVEL_CHANGED: 30,
              ATOM_CHARGING_STATE_CHANGED: 31,
              ATOM_PLUGGED_STATE_CHANGED: 32,
              ATOM_INTERACTIVE_STATE_CHANGED: 33,
              ATOM_TOUCH_EVENT_REPORTED: 34,
              ATOM_WAKEUP_ALARM_OCCURRED: 35,
              ATOM_KERNEL_WAKEUP_REPORTED: 36,
              ATOM_WIFI_LOCK_STATE_CHANGED: 37,
              ATOM_WIFI_SIGNAL_STRENGTH_CHANGED: 38,
              ATOM_WIFI_SCAN_STATE_CHANGED: 39,
              ATOM_PHONE_SIGNAL_STRENGTH_CHANGED: 40,
              ATOM_SETTING_CHANGED: 41,
              ATOM_ACTIVITY_FOREGROUND_STATE_CHANGED: 42,
              ATOM_ISOLATED_UID_CHANGED: 43,
              ATOM_PACKET_WAKEUP_OCCURRED: 44,
              ATOM_WALL_CLOCK_TIME_SHIFTED: 45,
              ATOM_ANOMALY_DETECTED: 46,
              ATOM_APP_BREADCRUMB_REPORTED: 47,
              ATOM_APP_START_OCCURRED: 48,
              ATOM_APP_START_CANCELED: 49,
              ATOM_APP_START_FULLY_DRAWN: 50,
              ATOM_LMK_KILL_OCCURRED: 51,
              ATOM_PICTURE_IN_PICTURE_STATE_CHANGED: 52,
              ATOM_WIFI_MULTICAST_LOCK_STATE_CHANGED: 53,
              ATOM_APP_START_MEMORY_STATE_CAPTURED: 55,
              ATOM_SHUTDOWN_SEQUENCE_REPORTED: 56,
              ATOM_BOOT_SEQUENCE_REPORTED: 57,
              ATOM_OVERLAY_STATE_CHANGED: 59,
              ATOM_FOREGROUND_SERVICE_STATE_CHANGED: 60,
              ATOM_CALL_STATE_CHANGED: 61,
              ATOM_KEYGUARD_STATE_CHANGED: 62,
              ATOM_KEYGUARD_BOUNCER_STATE_CHANGED: 63,
              ATOM_KEYGUARD_BOUNCER_PASSWORD_ENTERED: 64,
              ATOM_APP_DIED: 65,
              ATOM_RESOURCE_CONFIGURATION_CHANGED: 66,
              ATOM_BLUETOOTH_ENABLED_STATE_CHANGED: 67,
              ATOM_BLUETOOTH_CONNECTION_STATE_CHANGED: 68,
              ATOM_GPS_SIGNAL_QUALITY_CHANGED: 69,
              ATOM_USB_CONNECTOR_STATE_CHANGED: 70,
              ATOM_SPEAKER_IMPEDANCE_REPORTED: 71,
              ATOM_HARDWARE_FAILED: 72,
              ATOM_PHYSICAL_DROP_DETECTED: 73,
              ATOM_CHARGE_CYCLES_REPORTED: 74,
              ATOM_MOBILE_CONNECTION_STATE_CHANGED: 75,
              ATOM_MOBILE_RADIO_TECHNOLOGY_CHANGED: 76,
              ATOM_USB_DEVICE_ATTACHED: 77,
              ATOM_APP_CRASH_OCCURRED: 78,
              ATOM_ANR_OCCURRED: 79,
              ATOM_WTF_OCCURRED: 80,
              ATOM_LOW_MEM_REPORTED: 81,
              ATOM_GENERIC_ATOM: 82,
              ATOM_VIBRATOR_STATE_CHANGED: 84,
              ATOM_DEFERRED_JOB_STATS_REPORTED: 85,
              ATOM_THERMAL_THROTTLING: 86,
              ATOM_BIOMETRIC_ACQUIRED: 87,
              ATOM_BIOMETRIC_AUTHENTICATED: 88,
              ATOM_BIOMETRIC_ERROR_OCCURRED: 89,
              ATOM_UI_EVENT_REPORTED: 90,
              ATOM_BATTERY_HEALTH_SNAPSHOT: 91,
              ATOM_SLOW_IO: 92,
              ATOM_BATTERY_CAUSED_SHUTDOWN: 93,
              ATOM_PHONE_SERVICE_STATE_CHANGED: 94,
              ATOM_PHONE_STATE_CHANGED: 95,
              ATOM_USER_RESTRICTION_CHANGED: 96,
              ATOM_SETTINGS_UI_CHANGED: 97,
              ATOM_CONNECTIVITY_STATE_CHANGED: 98,
              ATOM_SERVICE_STATE_CHANGED: 99,
              ATOM_SERVICE_LAUNCH_REPORTED: 100,
              ATOM_FLAG_FLIP_UPDATE_OCCURRED: 101,
              ATOM_BINARY_PUSH_STATE_CHANGED: 102,
              ATOM_DEVICE_POLICY_EVENT: 103,
              ATOM_DOCS_UI_FILE_OP_CANCELED: 104,
              ATOM_DOCS_UI_FILE_OP_COPY_MOVE_MODE_REPORTED: 105,
              ATOM_DOCS_UI_FILE_OP_FAILURE: 106,
              ATOM_DOCS_UI_PROVIDER_FILE_OP: 107,
              ATOM_DOCS_UI_INVALID_SCOPED_ACCESS_REQUEST: 108,
              ATOM_DOCS_UI_LAUNCH_REPORTED: 109,
              ATOM_DOCS_UI_ROOT_VISITED: 110,
              ATOM_DOCS_UI_STARTUP_MS: 111,
              ATOM_DOCS_UI_USER_ACTION_REPORTED: 112,
              ATOM_WIFI_ENABLED_STATE_CHANGED: 113,
              ATOM_WIFI_RUNNING_STATE_CHANGED: 114,
              ATOM_APP_COMPACTED: 115,
              ATOM_NETWORK_DNS_EVENT_REPORTED: 116,
              ATOM_DOCS_UI_PICKER_LAUNCHED_FROM_REPORTED: 117,
              ATOM_DOCS_UI_PICK_RESULT_REPORTED: 118,
              ATOM_DOCS_UI_SEARCH_MODE_REPORTED: 119,
              ATOM_DOCS_UI_SEARCH_TYPE_REPORTED: 120,
              ATOM_DATA_STALL_EVENT: 121,
              ATOM_RESCUE_PARTY_RESET_REPORTED: 122,
              ATOM_SIGNED_CONFIG_REPORTED: 123,
              ATOM_GNSS_NI_EVENT_REPORTED: 124,
              ATOM_BLUETOOTH_LINK_LAYER_CONNECTION_EVENT: 125,
              ATOM_BLUETOOTH_ACL_CONNECTION_STATE_CHANGED: 126,
              ATOM_BLUETOOTH_SCO_CONNECTION_STATE_CHANGED: 127,
              ATOM_APP_DOWNGRADED: 128,
              ATOM_APP_OPTIMIZED_AFTER_DOWNGRADED: 129,
              ATOM_LOW_STORAGE_STATE_CHANGED: 130,
              ATOM_GNSS_NFW_NOTIFICATION_REPORTED: 131,
              ATOM_GNSS_CONFIGURATION_REPORTED: 132,
              ATOM_USB_PORT_OVERHEAT_EVENT_REPORTED: 133,
              ATOM_NFC_ERROR_OCCURRED: 134,
              ATOM_NFC_STATE_CHANGED: 135,
              ATOM_NFC_BEAM_OCCURRED: 136,
              ATOM_NFC_CARDEMULATION_OCCURRED: 137,
              ATOM_NFC_TAG_OCCURRED: 138,
              ATOM_NFC_HCE_TRANSACTION_OCCURRED: 139,
              ATOM_SE_STATE_CHANGED: 140,
              ATOM_SE_OMAPI_REPORTED: 141,
              ATOM_BROADCAST_DISPATCH_LATENCY_REPORTED: 142,
              ATOM_ATTENTION_MANAGER_SERVICE_RESULT_REPORTED: 143,
              ATOM_ADB_CONNECTION_CHANGED: 144,
              ATOM_SPEECH_DSP_STAT_REPORTED: 145,
              ATOM_USB_CONTAMINANT_REPORTED: 146,
              ATOM_WATCHDOG_ROLLBACK_OCCURRED: 147,
              ATOM_BIOMETRIC_SYSTEM_HEALTH_ISSUE_DETECTED: 148,
              ATOM_BUBBLE_UI_CHANGED: 149,
              ATOM_SCHEDULED_JOB_CONSTRAINT_CHANGED: 150,
              ATOM_BLUETOOTH_ACTIVE_DEVICE_CHANGED: 151,
              ATOM_BLUETOOTH_A2DP_PLAYBACK_STATE_CHANGED: 152,
              ATOM_BLUETOOTH_A2DP_CODEC_CONFIG_CHANGED: 153,
              ATOM_BLUETOOTH_A2DP_CODEC_CAPABILITY_CHANGED: 154,
              ATOM_BLUETOOTH_A2DP_AUDIO_UNDERRUN_REPORTED: 155,
              ATOM_BLUETOOTH_A2DP_AUDIO_OVERRUN_REPORTED: 156,
              ATOM_BLUETOOTH_DEVICE_RSSI_REPORTED: 157,
              ATOM_BLUETOOTH_DEVICE_FAILED_CONTACT_COUNTER_REPORTED: 158,
              ATOM_BLUETOOTH_DEVICE_TX_POWER_LEVEL_REPORTED: 159,
              ATOM_BLUETOOTH_HCI_TIMEOUT_REPORTED: 160,
              ATOM_BLUETOOTH_QUALITY_REPORT_REPORTED: 161,
              ATOM_BLUETOOTH_DEVICE_INFO_REPORTED: 162,
              ATOM_BLUETOOTH_REMOTE_VERSION_INFO_REPORTED: 163,
              ATOM_BLUETOOTH_SDP_ATTRIBUTE_REPORTED: 164,
              ATOM_BLUETOOTH_BOND_STATE_CHANGED: 165,
              ATOM_BLUETOOTH_CLASSIC_PAIRING_EVENT_REPORTED: 166,
              ATOM_BLUETOOTH_SMP_PAIRING_EVENT_REPORTED: 167,
              ATOM_SCREEN_TIMEOUT_EXTENSION_REPORTED: 168,
              ATOM_PROCESS_START_TIME: 169,
              ATOM_PERMISSION_GRANT_REQUEST_RESULT_REPORTED: 170,
              ATOM_BLUETOOTH_SOCKET_CONNECTION_STATE_CHANGED: 171,
              ATOM_DEVICE_IDENTIFIER_ACCESS_DENIED: 172,
              ATOM_BUBBLE_DEVELOPER_ERROR_REPORTED: 173,
              ATOM_ASSIST_GESTURE_STAGE_REPORTED: 174,
              ATOM_ASSIST_GESTURE_FEEDBACK_REPORTED: 175,
              ATOM_ASSIST_GESTURE_PROGRESS_REPORTED: 176,
              ATOM_TOUCH_GESTURE_CLASSIFIED: 177,
              ATOM_HIDDEN_API_USED: 178,
              ATOM_STYLE_UI_CHANGED: 179,
              ATOM_PRIVACY_INDICATORS_INTERACTED: 180,
              ATOM_APP_INSTALL_ON_EXTERNAL_STORAGE_REPORTED: 181,
              ATOM_NETWORK_STACK_REPORTED: 182,
              ATOM_APP_MOVED_STORAGE_REPORTED: 183,
              ATOM_BIOMETRIC_ENROLLED: 184,
              ATOM_SYSTEM_SERVER_WATCHDOG_OCCURRED: 185,
              ATOM_TOMB_STONE_OCCURRED: 186,
              ATOM_BLUETOOTH_CLASS_OF_DEVICE_REPORTED: 187,
              ATOM_INTELLIGENCE_EVENT_REPORTED: 188,
              ATOM_THERMAL_THROTTLING_SEVERITY_STATE_CHANGED: 189,
              ATOM_ROLE_REQUEST_RESULT_REPORTED: 190,
              ATOM_MEDIAMETRICS_AUDIOPOLICY_REPORTED: 191,
              ATOM_MEDIAMETRICS_AUDIORECORD_REPORTED: 192,
              ATOM_MEDIAMETRICS_AUDIOTHREAD_REPORTED: 193,
              ATOM_MEDIAMETRICS_AUDIOTRACK_REPORTED: 194,
              ATOM_MEDIAMETRICS_CODEC_REPORTED: 195,
              ATOM_MEDIAMETRICS_DRM_WIDEVINE_REPORTED: 196,
              ATOM_MEDIAMETRICS_EXTRACTOR_REPORTED: 197,
              ATOM_MEDIAMETRICS_MEDIADRM_REPORTED: 198,
              ATOM_MEDIAMETRICS_NUPLAYER_REPORTED: 199,
              ATOM_MEDIAMETRICS_RECORDER_REPORTED: 200,
              ATOM_MEDIAMETRICS_DRMMANAGER_REPORTED: 201,
              ATOM_CAR_POWER_STATE_CHANGED: 203,
              ATOM_GARAGE_MODE_INFO: 204,
              ATOM_TEST_ATOM_REPORTED: 205,
              ATOM_CONTENT_CAPTURE_CALLER_MISMATCH_REPORTED: 206,
              ATOM_CONTENT_CAPTURE_SERVICE_EVENTS: 207,
              ATOM_CONTENT_CAPTURE_SESSION_EVENTS: 208,
              ATOM_CONTENT_CAPTURE_FLUSHED: 209,
              ATOM_LOCATION_MANAGER_API_USAGE_REPORTED: 210,
              ATOM_REVIEW_PERMISSIONS_FRAGMENT_RESULT_REPORTED: 211,
              ATOM_RUNTIME_PERMISSIONS_UPGRADE_RESULT: 212,
              ATOM_GRANT_PERMISSIONS_ACTIVITY_BUTTON_ACTIONS: 213,
              ATOM_LOCATION_ACCESS_CHECK_NOTIFICATION_ACTION: 214,
              ATOM_APP_PERMISSION_FRAGMENT_ACTION_REPORTED: 215,
              ATOM_APP_PERMISSION_FRAGMENT_VIEWED: 216,
              ATOM_APP_PERMISSIONS_FRAGMENT_VIEWED: 217,
              ATOM_PERMISSION_APPS_FRAGMENT_VIEWED: 218,
              ATOM_TEXT_SELECTION_EVENT: 219,
              ATOM_TEXT_LINKIFY_EVENT: 220,
              ATOM_CONVERSATION_ACTIONS_EVENT: 221,
              ATOM_LANGUAGE_DETECTION_EVENT: 222,
              ATOM_EXCLUSION_RECT_STATE_CHANGED: 223,
              ATOM_BACK_GESTURE_REPORTED_REPORTED: 224,
              ATOM_UPDATE_ENGINE_UPDATE_ATTEMPT_REPORTED: 225,
              ATOM_UPDATE_ENGINE_SUCCESSFUL_UPDATE_REPORTED: 226,
              ATOM_CAMERA_ACTION_EVENT: 227,
              ATOM_APP_COMPATIBILITY_CHANGE_REPORTED: 228,
              ATOM_PERFETTO_UPLOADED: 229,
              ATOM_VMS_CLIENT_CONNECTION_STATE_CHANGED: 230,
              ATOM_MEDIA_PROVIDER_SCAN_OCCURRED: 233,
              ATOM_MEDIA_CONTENT_DELETED: 234,
              ATOM_MEDIA_PROVIDER_PERMISSION_REQUESTED: 235,
              ATOM_MEDIA_PROVIDER_SCHEMA_CHANGED: 236,
              ATOM_MEDIA_PROVIDER_IDLE_MAINTENANCE_FINISHED: 237,
              ATOM_REBOOT_ESCROW_RECOVERY_REPORTED: 238,
              ATOM_BOOT_TIME_EVENT_DURATION_REPORTED: 239,
              ATOM_BOOT_TIME_EVENT_ELAPSED_TIME_REPORTED: 240,
              ATOM_BOOT_TIME_EVENT_UTC_TIME_REPORTED: 241,
              ATOM_BOOT_TIME_EVENT_ERROR_CODE_REPORTED: 242,
              ATOM_USERSPACE_REBOOT_REPORTED: 243,
              ATOM_NOTIFICATION_REPORTED: 244,
              ATOM_NOTIFICATION_PANEL_REPORTED: 245,
              ATOM_NOTIFICATION_CHANNEL_MODIFIED: 246,
              ATOM_INTEGRITY_CHECK_RESULT_REPORTED: 247,
              ATOM_INTEGRITY_RULES_PUSHED: 248,
              ATOM_CB_MESSAGE_REPORTED: 249,
              ATOM_CB_MESSAGE_ERROR: 250,
              ATOM_WIFI_HEALTH_STAT_REPORTED: 251,
              ATOM_WIFI_FAILURE_STAT_REPORTED: 252,
              ATOM_WIFI_CONNECTION_RESULT_REPORTED: 253,
              ATOM_APP_FREEZE_CHANGED: 254,
              ATOM_SNAPSHOT_MERGE_REPORTED: 255,
              ATOM_FOREGROUND_SERVICE_APP_OP_SESSION_ENDED: 256,
              ATOM_DISPLAY_JANK_REPORTED: 257,
              ATOM_APP_STANDBY_BUCKET_CHANGED: 258,
              ATOM_SHARESHEET_STARTED: 259,
              ATOM_RANKING_SELECTED: 260,
              ATOM_TVSETTINGS_UI_INTERACTED: 261,
              ATOM_LAUNCHER_SNAPSHOT: 262,
              ATOM_PACKAGE_INSTALLER_V2_REPORTED: 263,
              ATOM_USER_LIFECYCLE_JOURNEY_REPORTED: 264,
              ATOM_USER_LIFECYCLE_EVENT_OCCURRED: 265,
              ATOM_ACCESSIBILITY_SHORTCUT_REPORTED: 266,
              ATOM_ACCESSIBILITY_SERVICE_REPORTED: 267,
              ATOM_DOCS_UI_DRAG_AND_DROP_REPORTED: 268,
              ATOM_APP_USAGE_EVENT_OCCURRED: 269,
              ATOM_AUTO_REVOKE_NOTIFICATION_CLICKED: 270,
              ATOM_AUTO_REVOKE_FRAGMENT_APP_VIEWED: 271,
              ATOM_AUTO_REVOKED_APP_INTERACTION: 272,
              ATOM_APP_PERMISSION_GROUPS_FRAGMENT_AUTO_REVOKE_ACTION: 273,
              ATOM_EVS_USAGE_STATS_REPORTED: 274,
              ATOM_AUDIO_POWER_USAGE_DATA_REPORTED: 275,
              ATOM_TV_TUNER_STATE_CHANGED: 276,
              ATOM_MEDIAOUTPUT_OP_SWITCH_REPORTED: 277,
              ATOM_CB_MESSAGE_FILTERED: 278,
              ATOM_TV_TUNER_DVR_STATUS: 279,
              ATOM_TV_CAS_SESSION_OPEN_STATUS: 280,
              ATOM_ASSISTANT_INVOCATION_REPORTED: 281,
              ATOM_DISPLAY_WAKE_REPORTED: 282,
              ATOM_CAR_USER_HAL_MODIFY_USER_REQUEST_REPORTED: 283,
              ATOM_CAR_USER_HAL_MODIFY_USER_RESPONSE_REPORTED: 284,
              ATOM_CAR_USER_HAL_POST_SWITCH_RESPONSE_REPORTED: 285,
              ATOM_CAR_USER_HAL_INITIAL_USER_INFO_REQUEST_REPORTED: 286,
              ATOM_CAR_USER_HAL_INITIAL_USER_INFO_RESPONSE_REPORTED: 287,
              ATOM_CAR_USER_HAL_USER_ASSOCIATION_REQUEST_REPORTED: 288,
              ATOM_CAR_USER_HAL_SET_USER_ASSOCIATION_RESPONSE_REPORTED: 289,
              ATOM_NETWORK_IP_PROVISIONING_REPORTED: 290,
              ATOM_NETWORK_DHCP_RENEW_REPORTED: 291,
              ATOM_NETWORK_VALIDATION_REPORTED: 292,
              ATOM_NETWORK_STACK_QUIRK_REPORTED: 293,
              ATOM_MEDIAMETRICS_AUDIORECORDDEVICEUSAGE_REPORTED: 294,
              ATOM_MEDIAMETRICS_AUDIOTHREADDEVICEUSAGE_REPORTED: 295,
              ATOM_MEDIAMETRICS_AUDIOTRACKDEVICEUSAGE_REPORTED: 296,
              ATOM_MEDIAMETRICS_AUDIODEVICECONNECTION_REPORTED: 297,
              ATOM_BLOB_COMMITTED: 298,
              ATOM_BLOB_LEASED: 299,
              ATOM_BLOB_OPENED: 300,
              ATOM_CONTACTS_PROVIDER_STATUS_REPORTED: 301,
              ATOM_KEYSTORE_KEY_EVENT_REPORTED: 302,
              ATOM_NETWORK_TETHERING_REPORTED: 303,
              ATOM_IME_TOUCH_REPORTED: 304,
              ATOM_UI_INTERACTION_FRAME_INFO_REPORTED: 305,
              ATOM_UI_ACTION_LATENCY_REPORTED: 306,
              ATOM_WIFI_DISCONNECT_REPORTED: 307,
              ATOM_WIFI_CONNECTION_STATE_CHANGED: 308,
              ATOM_HDMI_CEC_ACTIVE_SOURCE_CHANGED: 309,
              ATOM_HDMI_CEC_MESSAGE_REPORTED: 310,
              ATOM_AIRPLANE_MODE: 311,
              ATOM_MODEM_RESTART: 312,
              ATOM_CARRIER_ID_MISMATCH_REPORTED: 313,
              ATOM_CARRIER_ID_TABLE_UPDATED: 314,
              ATOM_DATA_STALL_RECOVERY_REPORTED: 315,
              ATOM_MEDIAMETRICS_MEDIAPARSER_REPORTED: 316,
              ATOM_TLS_HANDSHAKE_REPORTED: 317,
              ATOM_TEXT_CLASSIFIER_API_USAGE_REPORTED: 318,
              ATOM_CAR_WATCHDOG_KILL_STATS_REPORTED: 319,
              ATOM_MEDIAMETRICS_PLAYBACK_REPORTED: 320,
              ATOM_MEDIA_NETWORK_INFO_CHANGED: 321,
              ATOM_MEDIA_PLAYBACK_STATE_CHANGED: 322,
              ATOM_MEDIA_PLAYBACK_ERROR_REPORTED: 323,
              ATOM_MEDIA_PLAYBACK_TRACK_CHANGED: 324,
              ATOM_WIFI_SCAN_REPORTED: 325,
              ATOM_WIFI_PNO_SCAN_REPORTED: 326,
              ATOM_TIF_TUNE_CHANGED: 327,
              ATOM_AUTO_ROTATE_REPORTED: 328,
              ATOM_PERFETTO_TRIGGER: 329,
              ATOM_TRANSCODING_DATA: 330,
              ATOM_IMS_SERVICE_ENTITLEMENT_UPDATED: 331,
              ATOM_DEVICE_ROTATED: 333,
              ATOM_SIM_SPECIFIC_SETTINGS_RESTORED: 334,
              ATOM_TEXT_CLASSIFIER_DOWNLOAD_REPORTED: 335,
              ATOM_PIN_STORAGE_EVENT: 336,
              ATOM_FACE_DOWN_REPORTED: 337,
              ATOM_BLUETOOTH_HAL_CRASH_REASON_REPORTED: 338,
              ATOM_REBOOT_ESCROW_PREPARATION_REPORTED: 339,
              ATOM_REBOOT_ESCROW_LSKF_CAPTURE_REPORTED: 340,
              ATOM_REBOOT_ESCROW_REBOOT_REPORTED: 341,
              ATOM_BINDER_LATENCY_REPORTED: 342,
              ATOM_MEDIAMETRICS_AAUDIOSTREAM_REPORTED: 343,
              ATOM_MEDIA_TRANSCODING_SESSION_ENDED: 344,
              ATOM_MAGNIFICATION_USAGE_REPORTED: 345,
              ATOM_MAGNIFICATION_MODE_WITH_IME_ON_REPORTED: 346,
              ATOM_APP_SEARCH_CALL_STATS_REPORTED: 347,
              ATOM_APP_SEARCH_PUT_DOCUMENT_STATS_REPORTED: 348,
              ATOM_DEVICE_CONTROL_CHANGED: 349,
              ATOM_DEVICE_STATE_CHANGED: 350,
              ATOM_INPUTDEVICE_REGISTERED: 351,
              ATOM_SMARTSPACE_CARD_REPORTED: 352,
              ATOM_AUTH_PROMPT_AUTHENTICATE_INVOKED: 353,
              ATOM_AUTH_MANAGER_CAN_AUTHENTICATE_INVOKED: 354,
              ATOM_AUTH_ENROLL_ACTION_INVOKED: 355,
              ATOM_AUTH_DEPRECATED_API_USED: 356,
              ATOM_UNATTENDED_REBOOT_OCCURRED: 357,
              ATOM_LONG_REBOOT_BLOCKING_REPORTED: 358,
              ATOM_LOCATION_TIME_ZONE_PROVIDER_STATE_CHANGED: 359,
              ATOM_FDTRACK_EVENT_OCCURRED: 364,
              ATOM_TIMEOUT_AUTO_EXTENDED_REPORTED: 365,
              ATOM_ALARM_BATCH_DELIVERED: 367,
              ATOM_ALARM_SCHEDULED: 368,
              ATOM_CAR_WATCHDOG_IO_OVERUSE_STATS_REPORTED: 369,
              ATOM_USER_LEVEL_HIBERNATION_STATE_CHANGED: 370,
              ATOM_APP_SEARCH_INITIALIZE_STATS_REPORTED: 371,
              ATOM_APP_SEARCH_QUERY_STATS_REPORTED: 372,
              ATOM_APP_PROCESS_DIED: 373,
              ATOM_NETWORK_IP_REACHABILITY_MONITOR_REPORTED: 374,
              ATOM_SLOW_INPUT_EVENT_REPORTED: 375,
              ATOM_ANR_OCCURRED_PROCESSING_STARTED: 376,
              ATOM_APP_SEARCH_REMOVE_STATS_REPORTED: 377,
              ATOM_MEDIA_CODEC_REPORTED: 378,
              ATOM_PERMISSION_USAGE_FRAGMENT_INTERACTION: 379,
              ATOM_PERMISSION_DETAILS_INTERACTION: 380,
              ATOM_PRIVACY_SENSOR_TOGGLE_INTERACTION: 381,
              ATOM_PRIVACY_TOGGLE_DIALOG_INTERACTION: 382,
              ATOM_APP_SEARCH_OPTIMIZE_STATS_REPORTED: 383,
              ATOM_NON_A11Y_TOOL_SERVICE_WARNING_REPORT: 384,
              ATOM_APP_COMPAT_STATE_CHANGED: 386,
              ATOM_SIZE_COMPAT_RESTART_BUTTON_EVENT_REPORTED: 387,
              ATOM_SPLITSCREEN_UI_CHANGED: 388,
              ATOM_NETWORK_DNS_HANDSHAKE_REPORTED: 389,
              ATOM_BLUETOOTH_CODE_PATH_COUNTER: 390,
              ATOM_BLUETOOTH_LE_BATCH_SCAN_REPORT_DELAY: 392,
              ATOM_ACCESSIBILITY_FLOATING_MENU_UI_CHANGED: 393,
              ATOM_NEURALNETWORKS_COMPILATION_COMPLETED: 394,
              ATOM_NEURALNETWORKS_EXECUTION_COMPLETED: 395,
              ATOM_NEURALNETWORKS_COMPILATION_FAILED: 396,
              ATOM_NEURALNETWORKS_EXECUTION_FAILED: 397,
              ATOM_CONTEXT_HUB_BOOTED: 398,
              ATOM_CONTEXT_HUB_RESTARTED: 399,
              ATOM_CONTEXT_HUB_LOADED_NANOAPP_SNAPSHOT_REPORTED: 400,
              ATOM_CHRE_CODE_DOWNLOAD_TRANSACTED: 401,
              ATOM_UWB_SESSION_INITED: 402,
              ATOM_UWB_SESSION_CLOSED: 403,
              ATOM_UWB_FIRST_RANGING_RECEIVED: 404,
              ATOM_UWB_RANGING_MEASUREMENT_RECEIVED: 405,
              ATOM_TEXT_CLASSIFIER_DOWNLOAD_WORK_SCHEDULED: 406,
              ATOM_TEXT_CLASSIFIER_DOWNLOAD_WORK_COMPLETED: 407,
              ATOM_CLIPBOARD_CLEARED: 408,
              ATOM_VM_CREATION_REQUESTED: 409,
              ATOM_NEARBY_DEVICE_SCAN_STATE_CHANGED: 410,
              ATOM_APPLICATION_LOCALES_CHANGED: 412,
              ATOM_MEDIAMETRICS_AUDIOTRACKSTATUS_REPORTED: 413,
              ATOM_FOLD_STATE_DURATION_REPORTED: 414,
              ATOM_LOCATION_TIME_ZONE_PROVIDER_CONTROLLER_STATE_CHANGED: 415,
              ATOM_DISPLAY_HBM_STATE_CHANGED: 416,
              ATOM_DISPLAY_HBM_BRIGHTNESS_CHANGED: 417,
              ATOM_PERSISTENT_URI_PERMISSIONS_FLUSHED: 418,
              ATOM_EARLY_BOOT_COMP_OS_ARTIFACTS_CHECK_REPORTED: 419,
              ATOM_VBMETA_DIGEST_REPORTED: 420,
              ATOM_APEX_INFO_GATHERED: 421,
              ATOM_PVM_INFO_GATHERED: 422,
              ATOM_WEAR_SETTINGS_UI_INTERACTED: 423,
              ATOM_TRACING_SERVICE_REPORT_EVENT: 424,
              ATOM_MEDIAMETRICS_AUDIORECORDSTATUS_REPORTED: 425,
              ATOM_LAUNCHER_LATENCY: 426,
              ATOM_DROPBOX_ENTRY_DROPPED: 427,
              ATOM_WIFI_P2P_CONNECTION_REPORTED: 428,
              ATOM_GAME_STATE_CHANGED: 429,
              ATOM_HOTWORD_DETECTOR_CREATE_REQUESTED: 430,
              ATOM_HOTWORD_DETECTION_SERVICE_INIT_RESULT_REPORTED: 431,
              ATOM_HOTWORD_DETECTION_SERVICE_RESTARTED: 432,
              ATOM_HOTWORD_DETECTOR_KEYPHRASE_TRIGGERED: 433,
              ATOM_HOTWORD_DETECTOR_EVENTS: 434,
              ATOM_BOOT_COMPLETED_BROADCAST_COMPLETION_LATENCY_REPORTED: 437,
              ATOM_CONTACTS_INDEXER_UPDATE_STATS_REPORTED: 440,
              ATOM_APP_BACKGROUND_RESTRICTIONS_INFO: 441,
              ATOM_MMS_SMS_PROVIDER_GET_THREAD_ID_FAILED: 442,
              ATOM_MMS_SMS_DATABASE_HELPER_ON_UPGRADE_FAILED: 443,
              ATOM_PERMISSION_REMINDER_NOTIFICATION_INTERACTED: 444,
              ATOM_RECENT_PERMISSION_DECISIONS_INTERACTED: 445,
              ATOM_GNSS_PSDS_DOWNLOAD_REPORTED: 446,
              ATOM_LE_AUDIO_CONNECTION_SESSION_REPORTED: 447,
              ATOM_LE_AUDIO_BROADCAST_SESSION_REPORTED: 448,
              ATOM_DREAM_UI_EVENT_REPORTED: 449,
              ATOM_TASK_MANAGER_EVENT_REPORTED: 450,
              ATOM_CDM_ASSOCIATION_ACTION: 451,
              ATOM_MAGNIFICATION_TRIPLE_TAP_AND_HOLD_ACTIVATED_SESSION_REPORTED: 452,
              ATOM_MAGNIFICATION_FOLLOW_TYPING_FOCUS_ACTIVATED_SESSION_REPORTED: 453,
              ATOM_ACCESSIBILITY_TEXT_READING_OPTIONS_CHANGED: 454,
              ATOM_WIFI_SETUP_FAILURE_CRASH_REPORTED: 455,
              ATOM_UWB_DEVICE_ERROR_REPORTED: 456,
              ATOM_ISOLATED_COMPILATION_SCHEDULED: 457,
              ATOM_ISOLATED_COMPILATION_ENDED: 458,
              ATOM_ONS_OPPORTUNISTIC_ESIM_PROVISIONING_COMPLETE: 459,
              ATOM_SYSTEM_SERVER_PRE_WATCHDOG_OCCURRED: 460,
              ATOM_TELEPHONY_ANOMALY_DETECTED: 461,
              ATOM_LETTERBOX_POSITION_CHANGED: 462,
              ATOM_REMOTE_KEY_PROVISIONING_ATTEMPT: 463,
              ATOM_REMOTE_KEY_PROVISIONING_NETWORK_INFO: 464,
              ATOM_REMOTE_KEY_PROVISIONING_TIMING: 465,
              ATOM_MEDIAOUTPUT_OP_INTERACTION_REPORT: 466,
              ATOM_SYNC_EXEMPTION_OCCURRED: 468,
              ATOM_AUTOFILL_PRESENTATION_EVENT_REPORTED: 469,
              ATOM_DOCK_STATE_CHANGED: 470,
              ATOM_SAFETY_SOURCE_STATE_COLLECTED: 471,
              ATOM_SAFETY_CENTER_SYSTEM_EVENT_REPORTED: 472,
              ATOM_SAFETY_CENTER_INTERACTION_REPORTED: 473,
              ATOM_SETTINGS_PROVIDER_SETTING_CHANGED: 474,
              ATOM_BROADCAST_DELIVERY_EVENT_REPORTED: 475,
              ATOM_SERVICE_REQUEST_EVENT_REPORTED: 476,
              ATOM_PROVIDER_ACQUISITION_EVENT_REPORTED: 477,
              ATOM_BLUETOOTH_DEVICE_NAME_REPORTED: 478,
              ATOM_CB_CONFIG_UPDATED: 479,
              ATOM_CB_MODULE_ERROR_REPORTED: 480,
              ATOM_CB_SERVICE_FEATURE_CHANGED: 481,
              ATOM_CB_RECEIVER_FEATURE_CHANGED: 482,
              ATOM_PRIVACY_SIGNAL_NOTIFICATION_INTERACTION: 484,
              ATOM_PRIVACY_SIGNAL_ISSUE_CARD_INTERACTION: 485,
              ATOM_PRIVACY_SIGNALS_JOB_FAILURE: 486,
              ATOM_VIBRATION_REPORTED: 487,
              ATOM_UWB_RANGING_START: 489,
              ATOM_APP_COMPACTED_V2: 491,
              ATOM_DISPLAY_BRIGHTNESS_CHANGED: 494,
              ATOM_ACTIVITY_ACTION_BLOCKED: 495,
              ATOM_NETWORK_DNS_SERVER_SUPPORT_REPORTED: 504,
              ATOM_VM_BOOTED: 505,
              ATOM_VM_EXITED: 506,
              ATOM_AMBIENT_BRIGHTNESS_STATS_REPORTED: 507,
              ATOM_MEDIAMETRICS_SPATIALIZERCAPABILITIES_REPORTED: 508,
              ATOM_MEDIAMETRICS_SPATIALIZERDEVICEENABLED_REPORTED: 509,
              ATOM_MEDIAMETRICS_HEADTRACKERDEVICEENABLED_REPORTED: 510,
              ATOM_MEDIAMETRICS_HEADTRACKERDEVICESUPPORTED_REPORTED: 511,
              ATOM_HEARING_AID_INFO_REPORTED: 513,
              ATOM_DEVICE_WIDE_JOB_CONSTRAINT_CHANGED: 514,
              ATOM_AMBIENT_MODE_CHANGED: 515,
              ATOM_ANR_LATENCY_REPORTED: 516,
              ATOM_RESOURCE_API_INFO: 517,
              ATOM_SYSTEM_DEFAULT_NETWORK_CHANGED: 518,
              ATOM_IWLAN_SETUP_DATA_CALL_RESULT_REPORTED: 519,
              ATOM_IWLAN_PDN_DISCONNECTED_REASON_REPORTED: 520,
              ATOM_AIRPLANE_MODE_SESSION_REPORTED: 521,
              ATOM_VM_CPU_STATUS_REPORTED: 522,
              ATOM_VM_MEM_STATUS_REPORTED: 523,
              ATOM_PACKAGE_INSTALLATION_SESSION_REPORTED: 524,
              ATOM_DEFAULT_NETWORK_REMATCH_INFO: 525,
              ATOM_NETWORK_SELECTION_PERFORMANCE: 526,
              ATOM_NETWORK_NSD_REPORTED: 527,
              ATOM_BLUETOOTH_DISCONNECTION_REASON_REPORTED: 529,
              ATOM_BLUETOOTH_LOCAL_VERSIONS_REPORTED: 530,
              ATOM_BLUETOOTH_REMOTE_SUPPORTED_FEATURES_REPORTED: 531,
              ATOM_BLUETOOTH_LOCAL_SUPPORTED_FEATURES_REPORTED: 532,
              ATOM_BLUETOOTH_GATT_APP_INFO: 533,
              ATOM_BRIGHTNESS_CONFIGURATION_UPDATED: 534,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_LAUNCHED: 538,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_FINISHED: 539,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_CONNECTION_REPORTED: 540,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_DEVICE_SCAN_TRIGGERED: 541,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_FIRST_DEVICE_SCAN_LATENCY: 542,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_CONNECT_DEVICE_LATENCY: 543,
              ATOM_PACKAGE_MANAGER_SNAPSHOT_REPORTED: 544,
              ATOM_PACKAGE_MANAGER_APPS_FILTER_CACHE_BUILD_REPORTED: 545,
              ATOM_PACKAGE_MANAGER_APPS_FILTER_CACHE_UPDATE_REPORTED: 546,
              ATOM_LAUNCHER_IMPRESSION_EVENT: 547,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_ALL_DEVICES_SCAN_LATENCY: 549,
              ATOM_WS_WATCH_FACE_EDITED: 551,
              ATOM_WS_WATCH_FACE_FAVORITE_ACTION_REPORTED: 552,
              ATOM_WS_WATCH_FACE_SET_ACTION_REPORTED: 553,
              ATOM_PACKAGE_UNINSTALLATION_REPORTED: 554,
              ATOM_GAME_MODE_CHANGED: 555,
              ATOM_GAME_MODE_CONFIGURATION_CHANGED: 556,
              ATOM_BEDTIME_MODE_STATE_CHANGED: 557,
              ATOM_NETWORK_SLICE_SESSION_ENDED: 558,
              ATOM_NETWORK_SLICE_DAILY_DATA_USAGE_REPORTED: 559,
              ATOM_NFC_TAG_TYPE_OCCURRED: 560,
              ATOM_NFC_AID_CONFLICT_OCCURRED: 561,
              ATOM_NFC_READER_CONFLICT_OCCURRED: 562,
              ATOM_WS_TILE_LIST_CHANGED: 563,
              ATOM_GET_TYPE_ACCESSED_WITHOUT_PERMISSION: 564,
              ATOM_MOBILE_BUNDLED_APP_INFO_GATHERED: 566,
              ATOM_WS_WATCH_FACE_COMPLICATION_SET_CHANGED: 567,
              ATOM_MEDIA_DRM_CREATED: 568,
              ATOM_MEDIA_DRM_ERRORED: 569,
              ATOM_MEDIA_DRM_SESSION_OPENED: 570,
              ATOM_MEDIA_DRM_SESSION_CLOSED: 571,
              ATOM_USER_SELECTED_RESOLUTION: 572,
              ATOM_UNSAFE_INTENT_EVENT_REPORTED: 573,
              ATOM_PERFORMANCE_HINT_SESSION_REPORTED: 574,
              ATOM_MEDIAMETRICS_MIDI_DEVICE_CLOSE_REPORTED: 576,
              ATOM_BIOMETRIC_TOUCH_REPORTED: 577,
              ATOM_HOTWORD_AUDIO_EGRESS_EVENT_REPORTED: 578,
              ATOM_LOCATION_ENABLED_STATE_CHANGED: 580,
              ATOM_IME_REQUEST_FINISHED: 581,
              ATOM_USB_COMPLIANCE_WARNINGS_REPORTED: 582,
              ATOM_APP_SUPPORTED_LOCALES_CHANGED: 583,
              ATOM_MEDIA_PROVIDER_VOLUME_RECOVERY_REPORTED: 586,
              ATOM_BIOMETRIC_PROPERTIES_COLLECTED: 587,
              ATOM_KERNEL_WAKEUP_ATTRIBUTED: 588,
              ATOM_SCREEN_STATE_CHANGED_V2: 589,
              ATOM_WS_BACKUP_ACTION_REPORTED: 590,
              ATOM_WS_RESTORE_ACTION_REPORTED: 591,
              ATOM_DEVICE_LOG_ACCESS_EVENT_REPORTED: 592,
              ATOM_MEDIA_SESSION_UPDATED: 594,
              ATOM_WEAR_OOBE_STATE_CHANGED: 595,
              ATOM_WS_NOTIFICATION_UPDATED: 596,
              ATOM_NETWORK_VALIDATION_FAILURE_STATS_DAILY_REPORTED: 601,
              ATOM_WS_COMPLICATION_TAPPED: 602,
              ATOM_WS_NOTIFICATION_BLOCKING: 780,
              ATOM_WS_NOTIFICATION_BRIDGEMODE_UPDATED: 822,
              ATOM_WS_NOTIFICATION_DISMISSAL_ACTIONED: 823,
              ATOM_WS_NOTIFICATION_ACTIONED: 824,
              ATOM_WS_NOTIFICATION_LATENCY: 880,
              ATOM_WIFI_BYTES_TRANSFER: 10000,
              ATOM_WIFI_BYTES_TRANSFER_BY_FG_BG: 10001,
              ATOM_MOBILE_BYTES_TRANSFER: 10002,
              ATOM_MOBILE_BYTES_TRANSFER_BY_FG_BG: 10003,
              ATOM_BLUETOOTH_BYTES_TRANSFER: 10006,
              ATOM_KERNEL_WAKELOCK: 10004,
              ATOM_SUBSYSTEM_SLEEP_STATE: 10005,
              ATOM_CPU_TIME_PER_UID: 10009,
              ATOM_CPU_TIME_PER_UID_FREQ: 10010,
              ATOM_WIFI_ACTIVITY_INFO: 10011,
              ATOM_MODEM_ACTIVITY_INFO: 10012,
              ATOM_BLUETOOTH_ACTIVITY_INFO: 10007,
              ATOM_PROCESS_MEMORY_STATE: 10013,
              ATOM_SYSTEM_ELAPSED_REALTIME: 10014,
              ATOM_SYSTEM_UPTIME: 10015,
              ATOM_CPU_ACTIVE_TIME: 10016,
              ATOM_CPU_CLUSTER_TIME: 10017,
              ATOM_DISK_SPACE: 10018,
              ATOM_REMAINING_BATTERY_CAPACITY: 10019,
              ATOM_FULL_BATTERY_CAPACITY: 10020,
              ATOM_TEMPERATURE: 10021,
              ATOM_BINDER_CALLS: 10022,
              ATOM_BINDER_CALLS_EXCEPTIONS: 10023,
              ATOM_LOOPER_STATS: 10024,
              ATOM_DISK_STATS: 10025,
              ATOM_DIRECTORY_USAGE: 10026,
              ATOM_APP_SIZE: 10027,
              ATOM_CATEGORY_SIZE: 10028,
              ATOM_PROC_STATS: 10029,
              ATOM_BATTERY_VOLTAGE: 10030,
              ATOM_NUM_FINGERPRINTS_ENROLLED: 10031,
              ATOM_DISK_IO: 10032,
              ATOM_POWER_PROFILE: 10033,
              ATOM_PROC_STATS_PKG_PROC: 10034,
              ATOM_PROCESS_CPU_TIME: 10035,
              ATOM_CPU_TIME_PER_THREAD_FREQ: 10037,
              ATOM_ON_DEVICE_POWER_MEASUREMENT: 10038,
              ATOM_DEVICE_CALCULATED_POWER_USE: 10039,
              ATOM_PROCESS_MEMORY_HIGH_WATER_MARK: 10042,
              ATOM_BATTERY_LEVEL: 10043,
              ATOM_BUILD_INFORMATION: 10044,
              ATOM_BATTERY_CYCLE_COUNT: 10045,
              ATOM_DEBUG_ELAPSED_CLOCK: 10046,
              ATOM_DEBUG_FAILING_ELAPSED_CLOCK: 10047,
              ATOM_NUM_FACES_ENROLLED: 10048,
              ATOM_ROLE_HOLDER: 10049,
              ATOM_DANGEROUS_PERMISSION_STATE: 10050,
              ATOM_TRAIN_INFO: 10051,
              ATOM_TIME_ZONE_DATA_INFO: 10052,
              ATOM_EXTERNAL_STORAGE_INFO: 10053,
              ATOM_GPU_STATS_GLOBAL_INFO: 10054,
              ATOM_GPU_STATS_APP_INFO: 10055,
              ATOM_SYSTEM_ION_HEAP_SIZE: 10056,
              ATOM_APPS_ON_EXTERNAL_STORAGE_INFO: 10057,
              ATOM_FACE_SETTINGS: 10058,
              ATOM_COOLING_DEVICE: 10059,
              ATOM_APP_OPS: 10060,
              ATOM_PROCESS_SYSTEM_ION_HEAP_SIZE: 10061,
              ATOM_SURFACEFLINGER_STATS_GLOBAL_INFO: 10062,
              ATOM_SURFACEFLINGER_STATS_LAYER_INFO: 10063,
              ATOM_PROCESS_MEMORY_SNAPSHOT: 10064,
              ATOM_VMS_CLIENT_STATS: 10065,
              ATOM_NOTIFICATION_REMOTE_VIEWS: 10066,
              ATOM_DANGEROUS_PERMISSION_STATE_SAMPLED: 10067,
              ATOM_GRAPHICS_STATS: 10068,
              ATOM_RUNTIME_APP_OP_ACCESS: 10069,
              ATOM_ION_HEAP_SIZE: 10070,
              ATOM_PACKAGE_NOTIFICATION_PREFERENCES: 10071,
              ATOM_PACKAGE_NOTIFICATION_CHANNEL_PREFERENCES: 10072,
              ATOM_PACKAGE_NOTIFICATION_CHANNEL_GROUP_PREFERENCES: 10073,
              ATOM_GNSS_STATS: 10074,
              ATOM_ATTRIBUTED_APP_OPS: 10075,
              ATOM_VOICE_CALL_SESSION: 10076,
              ATOM_VOICE_CALL_RAT_USAGE: 10077,
              ATOM_SIM_SLOT_STATE: 10078,
              ATOM_SUPPORTED_RADIO_ACCESS_FAMILY: 10079,
              ATOM_SETTING_SNAPSHOT: 10080,
              ATOM_BLOB_INFO: 10081,
              ATOM_DATA_USAGE_BYTES_TRANSFER: 10082,
              ATOM_BYTES_TRANSFER_BY_TAG_AND_METERED: 10083,
              ATOM_DND_MODE_RULE: 10084,
              ATOM_GENERAL_EXTERNAL_STORAGE_ACCESS_STATS: 10085,
              ATOM_INCOMING_SMS: 10086,
              ATOM_OUTGOING_SMS: 10087,
              ATOM_CARRIER_ID_TABLE_VERSION: 10088,
              ATOM_DATA_CALL_SESSION: 10089,
              ATOM_CELLULAR_SERVICE_STATE: 10090,
              ATOM_CELLULAR_DATA_SERVICE_SWITCH: 10091,
              ATOM_SYSTEM_MEMORY: 10092,
              ATOM_IMS_REGISTRATION_TERMINATION: 10093,
              ATOM_IMS_REGISTRATION_STATS: 10094,
              ATOM_CPU_TIME_PER_CLUSTER_FREQ: 10095,
              ATOM_CPU_CYCLES_PER_UID_CLUSTER: 10096,
              ATOM_DEVICE_ROTATED_DATA: 10097,
              ATOM_CPU_CYCLES_PER_THREAD_GROUP_CLUSTER: 10098,
              ATOM_MEDIA_DRM_ACTIVITY_INFO: 10099,
              ATOM_OEM_MANAGED_BYTES_TRANSFER: 10100,
              ATOM_GNSS_POWER_STATS: 10101,
              ATOM_TIME_ZONE_DETECTOR_STATE: 10102,
              ATOM_KEYSTORE2_STORAGE_STATS: 10103,
              ATOM_RKP_POOL_STATS: 10104,
              ATOM_PROCESS_DMABUF_MEMORY: 10105,
              ATOM_PENDING_ALARM_INFO: 10106,
              ATOM_USER_LEVEL_HIBERNATED_APPS: 10107,
              ATOM_LAUNCHER_LAYOUT_SNAPSHOT: 10108,
              ATOM_GLOBAL_HIBERNATED_APPS: 10109,
              ATOM_INPUT_EVENT_LATENCY_SKETCH: 10110,
              ATOM_BATTERY_USAGE_STATS_BEFORE_RESET: 10111,
              ATOM_BATTERY_USAGE_STATS_SINCE_RESET: 10112,
              ATOM_BATTERY_USAGE_STATS_SINCE_RESET_USING_POWER_PROFILE_MODEL: 10113,
              ATOM_INSTALLED_INCREMENTAL_PACKAGE: 10114,
              ATOM_TELEPHONY_NETWORK_REQUESTS: 10115,
              ATOM_APP_SEARCH_STORAGE_INFO: 10116,
              ATOM_VMSTAT: 10117,
              ATOM_KEYSTORE2_KEY_CREATION_WITH_GENERAL_INFO: 10118,
              ATOM_KEYSTORE2_KEY_CREATION_WITH_AUTH_INFO: 10119,
              ATOM_KEYSTORE2_KEY_CREATION_WITH_PURPOSE_AND_MODES_INFO: 10120,
              ATOM_KEYSTORE2_ATOM_WITH_OVERFLOW: 10121,
              ATOM_KEYSTORE2_KEY_OPERATION_WITH_PURPOSE_AND_MODES_INFO: 10122,
              ATOM_KEYSTORE2_KEY_OPERATION_WITH_GENERAL_INFO: 10123,
              ATOM_RKP_ERROR_STATS: 10124,
              ATOM_KEYSTORE2_CRASH_STATS: 10125,
              ATOM_VENDOR_APEX_INFO: 10126,
              ATOM_ACCESSIBILITY_SHORTCUT_STATS: 10127,
              ATOM_ACCESSIBILITY_FLOATING_MENU_STATS: 10128,
              ATOM_DATA_USAGE_BYTES_TRANSFER_V2: 10129,
              ATOM_MEDIA_CAPABILITIES: 10130,
              ATOM_CAR_WATCHDOG_SYSTEM_IO_USAGE_SUMMARY: 10131,
              ATOM_CAR_WATCHDOG_UID_IO_USAGE_SUMMARY: 10132,
              ATOM_IMS_REGISTRATION_FEATURE_TAG_STATS: 10133,
              ATOM_RCS_CLIENT_PROVISIONING_STATS: 10134,
              ATOM_RCS_ACS_PROVISIONING_STATS: 10135,
              ATOM_SIP_DELEGATE_STATS: 10136,
              ATOM_SIP_TRANSPORT_FEATURE_TAG_STATS: 10137,
              ATOM_SIP_MESSAGE_RESPONSE: 10138,
              ATOM_SIP_TRANSPORT_SESSION: 10139,
              ATOM_IMS_DEDICATED_BEARER_LISTENER_EVENT: 10140,
              ATOM_IMS_DEDICATED_BEARER_EVENT: 10141,
              ATOM_IMS_REGISTRATION_SERVICE_DESC_STATS: 10142,
              ATOM_UCE_EVENT_STATS: 10143,
              ATOM_PRESENCE_NOTIFY_EVENT: 10144,
              ATOM_GBA_EVENT: 10145,
              ATOM_PER_SIM_STATUS: 10146,
              ATOM_GPU_WORK_PER_UID: 10147,
              ATOM_PERSISTENT_URI_PERMISSIONS_AMOUNT_PER_PACKAGE: 10148,
              ATOM_SIGNED_PARTITION_INFO: 10149,
              ATOM_PINNED_FILE_SIZES_PER_PACKAGE: 10150,
              ATOM_PENDING_INTENTS_PER_PACKAGE: 10151,
              ATOM_USER_INFO: 10152,
              ATOM_TELEPHONY_NETWORK_REQUESTS_V2: 10153,
              ATOM_DEVICE_TELEPHONY_PROPERTIES: 10154,
              ATOM_REMOTE_KEY_PROVISIONING_ERROR_COUNTS: 10155,
              ATOM_SAFETY_STATE: 10156,
              ATOM_INCOMING_MMS: 10157,
              ATOM_OUTGOING_MMS: 10158,
              ATOM_MULTI_USER_INFO: 10160,
              ATOM_NETWORK_BPF_MAP_INFO: 10161,
              ATOM_OUTGOING_SHORT_CODE_SMS: 10162,
              ATOM_CONNECTIVITY_STATE_SAMPLE: 10163,
              ATOM_NETWORK_SELECTION_REMATCH_REASONS_INFO: 10164,
              ATOM_GAME_MODE_INFO: 10165,
              ATOM_GAME_MODE_CONFIGURATION: 10166,
              ATOM_GAME_MODE_LISTENER: 10167,
              ATOM_NETWORK_SLICE_REQUEST_COUNT: 10168,
              ATOM_WS_TILE_SNAPSHOT: 10169,
              ATOM_WS_ACTIVE_WATCH_FACE_COMPLICATION_SET_SNAPSHOT: 10170,
              ATOM_PROCESS_STATE: 10171,
              ATOM_PROCESS_ASSOCIATION: 10172,
              ATOM_ADPF_SYSTEM_COMPONENT_INFO: 10173,
              ATOM_NOTIFICATION_MEMORY_USE: 10174,
              ATOM_HDR_CAPABILITIES: 10175,
              ATOM_WS_FAVOURITE_WATCH_FACE_LIST_SNAPSHOT: 10176,
              ATOM_ACCESSIBILITY_CHECK_RESULT_REPORTED: 910,
              ATOM_ADAPTIVE_AUTH_UNLOCK_AFTER_LOCK_REPORTED: 820,
              ATOM_THERMAL_STATUS_CALLED: 772,
              ATOM_THERMAL_HEADROOM_CALLED: 773,
              ATOM_THERMAL_HEADROOM_THRESHOLDS_CALLED: 774,
              ATOM_ADPF_HINT_SESSION_TID_CLEANUP: 839,
              ATOM_THERMAL_HEADROOM_THRESHOLDS: 10201,
              ATOM_ADPF_SESSION_SNAPSHOT: 10218,
              ATOM_JSSCRIPTENGINE_LATENCY_REPORTED: 483,
              ATOM_AD_SERVICES_API_CALLED: 435,
              ATOM_AD_SERVICES_MESUREMENT_REPORTS_UPLOADED: 436,
              ATOM_MOBILE_DATA_DOWNLOAD_FILE_GROUP_STATUS_REPORTED: 490,
              ATOM_MOBILE_DATA_DOWNLOAD_DOWNLOAD_RESULT_REPORTED: 502,
              ATOM_AD_SERVICES_SETTINGS_USAGE_REPORTED: 493,
              ATOM_BACKGROUND_FETCH_PROCESS_REPORTED: 496,
              ATOM_UPDATE_CUSTOM_AUDIENCE_PROCESS_REPORTED: 497,
              ATOM_RUN_AD_BIDDING_PROCESS_REPORTED: 498,
              ATOM_RUN_AD_SCORING_PROCESS_REPORTED: 499,
              ATOM_RUN_AD_SELECTION_PROCESS_REPORTED: 500,
              ATOM_RUN_AD_BIDDING_PER_CA_PROCESS_REPORTED: 501,
              ATOM_MOBILE_DATA_DOWNLOAD_FILE_GROUP_STORAGE_STATS_REPORTED: 503,
              ATOM_AD_SERVICES_MEASUREMENT_REGISTRATIONS: 512,
              ATOM_AD_SERVICES_GET_TOPICS_REPORTED: 535,
              ATOM_AD_SERVICES_EPOCH_COMPUTATION_GET_TOP_TOPICS_REPORTED: 536,
              ATOM_AD_SERVICES_EPOCH_COMPUTATION_CLASSIFIER_REPORTED: 537,
              ATOM_AD_SERVICES_BACK_COMPAT_GET_TOPICS_REPORTED: 598,
              ATOM_AD_SERVICES_BACK_COMPAT_EPOCH_COMPUTATION_CLASSIFIER_REPORTED: 599,
              ATOM_AD_SERVICES_MEASUREMENT_DEBUG_KEYS: 640,
              ATOM_AD_SERVICES_ERROR_REPORTED: 662,
              ATOM_AD_SERVICES_BACKGROUND_JOBS_EXECUTION_REPORTED: 663,
              ATOM_AD_SERVICES_MEASUREMENT_DELAYED_SOURCE_REGISTRATION: 673,
              ATOM_AD_SERVICES_MEASUREMENT_ATTRIBUTION: 674,
              ATOM_AD_SERVICES_MEASUREMENT_JOBS: 675,
              ATOM_AD_SERVICES_MEASUREMENT_WIPEOUT: 676,
              ATOM_AD_SERVICES_MEASUREMENT_AD_ID_MATCH_FOR_DEBUG_KEYS: 695,
              ATOM_AD_SERVICES_ENROLLMENT_DATA_STORED: 697,
              ATOM_AD_SERVICES_ENROLLMENT_FILE_DOWNLOADED: 698,
              ATOM_AD_SERVICES_ENROLLMENT_MATCHED: 699,
              ATOM_AD_SERVICES_CONSENT_MIGRATED: 702,
              ATOM_AD_SERVICES_ENROLLMENT_FAILED: 714,
              ATOM_AD_SERVICES_MEASUREMENT_CLICK_VERIFICATION: 756,
              ATOM_AD_SERVICES_ENCRYPTION_KEY_FETCHED: 765,
              ATOM_AD_SERVICES_ENCRYPTION_KEY_DB_TRANSACTION_ENDED: 766,
              ATOM_DESTINATION_REGISTERED_BEACONS: 767,
              ATOM_REPORT_INTERACTION_API_CALLED: 768,
              ATOM_INTERACTION_REPORTING_TABLE_CLEARED: 769,
              ATOM_APP_MANIFEST_CONFIG_HELPER_CALLED: 788,
              ATOM_AD_FILTERING_PROCESS_JOIN_CA_REPORTED: 793,
              ATOM_AD_FILTERING_PROCESS_AD_SELECTION_REPORTED: 794,
              ATOM_AD_COUNTER_HISTOGRAM_UPDATER_REPORTED: 795,
              ATOM_SIGNATURE_VERIFICATION: 807,
              ATOM_K_ANON_IMMEDIATE_SIGN_JOIN_STATUS_REPORTED: 808,
              ATOM_K_ANON_BACKGROUND_JOB_STATUS_REPORTED: 809,
              ATOM_K_ANON_INITIALIZE_STATUS_REPORTED: 810,
              ATOM_K_ANON_SIGN_STATUS_REPORTED: 811,
              ATOM_K_ANON_JOIN_STATUS_REPORTED: 812,
              ATOM_K_ANON_KEY_ATTESTATION_STATUS_REPORTED: 813,
              ATOM_GET_AD_SELECTION_DATA_API_CALLED: 814,
              ATOM_GET_AD_SELECTION_DATA_BUYER_INPUT_GENERATED: 815,
              ATOM_BACKGROUND_JOB_SCHEDULING_REPORTED: 834,
              ATOM_TOPICS_ENCRYPTION_EPOCH_COMPUTATION_REPORTED: 840,
              ATOM_TOPICS_ENCRYPTION_GET_TOPICS_REPORTED: 841,
              ATOM_ADSERVICES_SHELL_COMMAND_CALLED: 842,
              ATOM_UPDATE_SIGNALS_API_CALLED: 843,
              ATOM_ENCODING_JOB_RUN: 844,
              ATOM_ENCODING_JS_FETCH: 845,
              ATOM_ENCODING_JS_EXECUTION: 846,
              ATOM_PERSIST_AD_SELECTION_RESULT_CALLED: 847,
              ATOM_SERVER_AUCTION_KEY_FETCH_CALLED: 848,
              ATOM_SERVER_AUCTION_BACKGROUND_KEY_FETCH_ENABLED: 849,
              ATOM_AD_SERVICES_MEASUREMENT_PROCESS_ODP_REGISTRATION: 864,
              ATOM_AD_SERVICES_MEASUREMENT_NOTIFY_REGISTRATION_TO_ODP: 865,
              ATOM_SELECT_ADS_FROM_OUTCOMES_API_CALLED: 876,
              ATOM_REPORT_IMPRESSION_API_CALLED: 877,
              ATOM_AD_SERVICES_ENROLLMENT_TRANSACTION_STATS: 885,
              ATOM_AD_SERVICES_COBALT_LOGGER_EVENT_REPORTED: 902,
              ATOM_AD_SERVICES_COBALT_PERIODIC_JOB_EVENT_REPORTED: 903,
              ATOM_UPDATE_SIGNALS_PROCESS_REPORTED: 905,
              ATOM_TOPICS_SCHEDULE_EPOCH_JOB_SETTING_REPORTED: 930,
              ATOM_AI_WALLPAPERS_BUTTON_PRESSED: 706,
              ATOM_AI_WALLPAPERS_TEMPLATE_SELECTED: 707,
              ATOM_AI_WALLPAPERS_TERM_SELECTED: 708,
              ATOM_AI_WALLPAPERS_WALLPAPER_SET: 709,
              ATOM_AI_WALLPAPERS_SESSION_SUMMARY: 710,
              ATOM_APEX_INSTALLATION_REQUESTED: 732,
              ATOM_APEX_INSTALLATION_STAGED: 733,
              ATOM_APEX_INSTALLATION_ENDED: 734,
              ATOM_APP_SEARCH_SET_SCHEMA_STATS_REPORTED: 385,
              ATOM_APP_SEARCH_SCHEMA_MIGRATION_STATS_REPORTED: 579,
              ATOM_APP_SEARCH_USAGE_SEARCH_INTENT_STATS_REPORTED: 825,
              ATOM_APP_SEARCH_USAGE_SEARCH_INTENT_RAW_QUERY_STATS_REPORTED: 826,
              ATOM_APP_SEARCH_APPS_INDEXER_STATS_REPORTED: 909,
              ATOM_ART_DATUM_REPORTED: 332,
              ATOM_ART_DEVICE_DATUM_REPORTED: 550,
              ATOM_ART_DATUM_DELTA_REPORTED: 565,
              ATOM_ART_DEX2OAT_REPORTED: 929,
              ATOM_ART_DEVICE_STATUS: 10205,
              ATOM_BACKGROUND_DEXOPT_JOB_ENDED: 467,
              ATOM_PREREBOOT_DEXOPT_JOB_ENDED: 883,
              ATOM_ODREFRESH_REPORTED: 366,
              ATOM_ODSIGN_REPORTED: 548,
              ATOM_AUTOFILL_UI_EVENT_REPORTED: 603,
              ATOM_AUTOFILL_FILL_REQUEST_REPORTED: 604,
              ATOM_AUTOFILL_FILL_RESPONSE_REPORTED: 605,
              ATOM_AUTOFILL_SAVE_EVENT_REPORTED: 606,
              ATOM_AUTOFILL_SESSION_COMMITTED: 607,
              ATOM_AUTOFILL_FIELD_CLASSIFICATION_EVENT_REPORTED: 659,
              ATOM_CAR_RECENTS_EVENT_REPORTED: 770,
              ATOM_CAR_CALM_MODE_EVENT_REPORTED: 797,
              ATOM_CAR_WAKEUP_FROM_SUSPEND_REPORTED: 852,
              ATOM_PLUGIN_INITIALIZED: 655,
              ATOM_BLUETOOTH_HASHED_DEVICE_NAME_REPORTED: 613,
              ATOM_BLUETOOTH_L2CAP_COC_CLIENT_CONNECTION: 614,
              ATOM_BLUETOOTH_L2CAP_COC_SERVER_CONNECTION: 615,
              ATOM_BLUETOOTH_LE_SESSION_CONNECTED: 656,
              ATOM_RESTRICTED_BLUETOOTH_DEVICE_NAME_REPORTED: 666,
              ATOM_BLUETOOTH_PROFILE_CONNECTION_ATTEMPTED: 696,
              ATOM_BLUETOOTH_CONTENT_PROFILE_ERROR_REPORTED: 781,
              ATOM_BLUETOOTH_RFCOMM_CONNECTION_ATTEMPTED: 782,
              ATOM_REMOTE_DEVICE_INFORMATION_WITH_METRIC_ID: 862,
              ATOM_LE_APP_SCAN_STATE_CHANGED: 870,
              ATOM_LE_RADIO_SCAN_STOPPED: 871,
              ATOM_LE_SCAN_RESULT_RECEIVED: 872,
              ATOM_LE_SCAN_ABUSED: 873,
              ATOM_LE_ADV_STATE_CHANGED: 874,
              ATOM_LE_ADV_ERROR_REPORTED: 875,
              ATOM_A2DP_SESSION_REPORTED: 904,
              ATOM_BLUETOOTH_CROSS_LAYER_EVENT_REPORTED: 916,
              ATOM_BROADCAST_AUDIO_SESSION_REPORTED: 927,
              ATOM_BROADCAST_AUDIO_SYNC_REPORTED: 928,
              ATOM_BLUETOOTH_RFCOMM_CONNECTION_REPORTED_AT_CLOSE: 982,
              ATOM_BLUETOOTH_LE_CONNECTION: 988,
              ATOM_BROADCAST_SENT: 922,
              ATOM_CAMERA_FEATURE_COMBINATION_QUERY_EVENT: 900,
              ATOM_CERTIFICATE_TRANSPARENCY_LOG_LIST_STATE_CHANGED: 934,
              ATOM_CERTIFICATE_TRANSPARENCY_LOG_LIST_UPDATE_FAILED: 972,
              ATOM_DAILY_KEEPALIVE_INFO_REPORTED: 650,
              ATOM_NETWORK_REQUEST_STATE_CHANGED: 779,
              ATOM_TETHERING_ACTIVE_SESSIONS_REPORTED: 925,
              ATOM_NETWORK_STATS_RECORDER_FILE_OPERATED: 783,
              ATOM_CORE_NETWORKING_TERRIBLE_ERROR_OCCURRED: 979,
              ATOM_APF_SESSION_INFO_REPORTED: 777,
              ATOM_IP_CLIENT_RA_INFO_REPORTED: 778,
              ATOM_VPN_CONNECTION_STATE_CHANGED: 850,
              ATOM_VPN_CONNECTION_REPORTED: 851,
              ATOM_CPU_POLICY: 10199,
              ATOM_CREDENTIAL_MANAGER_API_CALLED: 585,
              ATOM_CREDENTIAL_MANAGER_INIT_PHASE_REPORTED: 651,
              ATOM_CREDENTIAL_MANAGER_CANDIDATE_PHASE_REPORTED: 652,
              ATOM_CREDENTIAL_MANAGER_FINAL_PHASE_REPORTED: 653,
              ATOM_CREDENTIAL_MANAGER_TOTAL_REPORTED: 667,
              ATOM_CREDENTIAL_MANAGER_FINALNOUID_REPORTED: 668,
              ATOM_CREDENTIAL_MANAGER_GET_REPORTED: 669,
              ATOM_CREDENTIAL_MANAGER_AUTH_CLICK_REPORTED: 670,
              ATOM_CREDENTIAL_MANAGER_APIV2_CALLED: 671,
              ATOM_CRONET_ENGINE_CREATED: 703,
              ATOM_CRONET_TRAFFIC_REPORTED: 704,
              ATOM_CRONET_ENGINE_BUILDER_INITIALIZED: 762,
              ATOM_CRONET_HTTP_FLAGS_INITIALIZED: 763,
              ATOM_CRONET_INITIALIZED: 764,
              ATOM_DESKTOP_MODE_UI_CHANGED: 818,
              ATOM_DESKTOP_MODE_SESSION_TASK_UPDATE: 819,
              ATOM_DESKTOP_MODE_TASK_SIZE_UPDATED: 935,
              ATOM_DEVICE_LOCK_CHECK_IN_REQUEST_REPORTED: 726,
              ATOM_DEVICE_LOCK_PROVISIONING_COMPLETE_REPORTED: 727,
              ATOM_DEVICE_LOCK_KIOSK_APP_REQUEST_REPORTED: 728,
              ATOM_DEVICE_LOCK_CHECK_IN_RETRY_REPORTED: 789,
              ATOM_DEVICE_LOCK_PROVISION_FAILURE_REPORTED: 790,
              ATOM_DEVICE_LOCK_LOCK_UNLOCK_DEVICE_FAILURE_REPORTED: 791,
              ATOM_DEVICE_POLICY_MANAGEMENT_MODE: 10216,
              ATOM_DEVICE_POLICY_STATE: 10217,
              ATOM_DISPLAY_MODE_DIRECTOR_VOTE_CHANGED: 792,
              ATOM_EXTERNAL_DISPLAY_STATE_CHANGED: 806,
              ATOM_DND_STATE_CHANGED: 657,
              ATOM_DREAM_SETTING_CHANGED: 705,
              ATOM_DREAM_SETTING_SNAPSHOT: 10192,
              ATOM_EXPRESS_EVENT_REPORTED: 528,
              ATOM_EXPRESS_HISTOGRAM_SAMPLE_REPORTED: 593,
              ATOM_EXPRESS_UID_EVENT_REPORTED: 644,
              ATOM_EXPRESS_UID_HISTOGRAM_SAMPLE_REPORTED: 658,
              ATOM_FEDERATED_COMPUTE_API_CALLED: 712,
              ATOM_FEDERATED_COMPUTE_TRAINING_EVENT_REPORTED: 771,
              ATOM_EXAMPLE_ITERATOR_NEXT_LATENCY_REPORTED: 838,
              ATOM_FULL_SCREEN_INTENT_LAUNCHED: 631,
              ATOM_BAL_ALLOWED: 632,
              ATOM_IN_TASK_ACTIVITY_STARTED: 685,
              ATOM_DEVICE_ORIENTATION_CHANGED: 906,
              ATOM_CACHED_APPS_HIGH_WATERMARK: 10189,
              ATOM_STYLUS_PREDICTION_METRICS_REPORTED: 718,
              ATOM_USER_RISK_EVENT_REPORTED: 725,
              ATOM_MEDIA_PROJECTION_STATE_CHANGED: 729,
              ATOM_MEDIA_PROJECTION_TARGET_CHANGED: 730,
              ATOM_EXCESSIVE_BINDER_PROXY_COUNT_REPORTED: 853,
              ATOM_PROXY_BYTES_TRANSFER_BY_FG_BG: 10200,
              ATOM_MOBILE_BYTES_TRANSFER_BY_PROC_STATE: 10204,
              ATOM_BIOMETRIC_FRR_NOTIFICATION: 817,
              ATOM_SENSITIVE_CONTENT_MEDIA_PROJECTION_SESSION: 830,
              ATOM_SENSITIVE_NOTIFICATION_APP_PROTECTION_SESSION: 831,
              ATOM_SENSITIVE_NOTIFICATION_APP_PROTECTION_APPLIED: 832,
              ATOM_SENSITIVE_NOTIFICATION_REDACTION: 833,
              ATOM_SENSITIVE_CONTENT_APP_PROTECTION: 835,
              ATOM_APP_RESTRICTION_STATE_CHANGED: 866,
              ATOM_BATTERY_USAGE_STATS_PER_UID: 10209,
              ATOM_POSTGC_MEMORY_SNAPSHOT: 924,
              ATOM_POWER_SAVE_TEMP_ALLOWLIST_CHANGED: 926,
              ATOM_APP_OP_ACCESS_TRACKED: 931,
              ATOM_CONTENT_OR_FILE_URI_EVENT_REPORTED: 933,
              ATOM_APPLICATION_GRAMMATICAL_INFLECTION_CHANGED: 584,
              ATOM_SYSTEM_GRAMMATICAL_INFLECTION_CHANGED: 816,
              ATOM_BATTERY_HEALTH: 10220,
              ATOM_HDMI_EARC_STATUS_REPORTED: 701,
              ATOM_HDMI_SOUNDBAR_MODE_STATUS_REPORTED: 724,
              ATOM_HEALTH_CONNECT_API_CALLED: 616,
              ATOM_HEALTH_CONNECT_USAGE_STATS: 617,
              ATOM_HEALTH_CONNECT_STORAGE_STATS: 618,
              ATOM_HEALTH_CONNECT_API_INVOKED: 643,
              ATOM_EXERCISE_ROUTE_API_CALLED: 654,
              ATOM_HEALTH_CONNECT_EXPORT_INVOKED: 907,
              ATOM_HEALTH_CONNECT_IMPORT_INVOKED: 918,
              ATOM_HEALTH_CONNECT_EXPORT_IMPORT_STATS_REPORTED: 919,
              ATOM_HEALTH_CONNECT_UI_IMPRESSION: 623,
              ATOM_HEALTH_CONNECT_UI_INTERACTION: 624,
              ATOM_HEALTH_CONNECT_APP_OPENED_REPORTED: 625,
              ATOM_HOTWORD_EGRESS_SIZE_ATOM_REPORTED: 761,
              ATOM_IKE_SESSION_TERMINATED: 678,
              ATOM_IKE_LIVENESS_CHECK_SESSION_VALIDATED: 760,
              ATOM_NEGOTIATED_SECURITY_ASSOCIATION: 821,
              ATOM_KEYBOARD_CONFIGURED: 682,
              ATOM_KEYBOARD_SYSTEMS_EVENT_REPORTED: 683,
              ATOM_INPUTDEVICE_USAGE_REPORTED: 686,
              ATOM_INPUT_EVENT_LATENCY_REPORTED: 932,
              ATOM_TOUCHPAD_USAGE: 10191,
              ATOM_KERNEL_OOM_KILL_OCCURRED: 754,
              ATOM_EMERGENCY_STATE_CHANGED: 633,
              ATOM_CHRE_SIGNIFICANT_MOTION_STATE_CHANGED: 868,
              ATOM_POPULATION_DENSITY_PROVIDER_LOADING_REPORTED: 1002,
              ATOM_DENSITY_BASED_COARSE_LOCATIONS_USAGE_REPORTED: 1003,
              ATOM_DENSITY_BASED_COARSE_LOCATIONS_PROVIDER_QUERY_REPORTED: 1004,
              ATOM_MEDIA_CODEC_RECLAIM_REQUEST_COMPLETED: 600,
              ATOM_MEDIA_CODEC_STARTED: 641,
              ATOM_MEDIA_CODEC_STOPPED: 642,
              ATOM_MEDIA_CODEC_RENDERED: 684,
              ATOM_MEDIA_EDITING_ENDED_REPORTED: 798,
              ATOM_MTE_STATE: 10181,
              ATOM_MICROXR_DEVICE_BOOT_COMPLETE_REPORTED: 901,
              ATOM_NFC_OBSERVE_MODE_STATE_CHANGED: 855,
              ATOM_NFC_FIELD_CHANGED: 856,
              ATOM_NFC_POLLING_LOOP_NOTIFICATION_REPORTED: 857,
              ATOM_NFC_PROPRIETARY_CAPABILITIES_REPORTED: 858,
              ATOM_ONDEVICEPERSONALIZATION_API_CALLED: 711,
              ATOM_COMPONENT_STATE_CHANGED_REPORTED: 863,
              ATOM_PDF_LOAD_REPORTED: 859,
              ATOM_PDF_API_USAGE_REPORTED: 860,
              ATOM_PDF_SEARCH_REPORTED: 861,
              ATOM_PRESSURE_STALL_INFORMATION: 10229,
              ATOM_PERMISSION_RATIONALE_DIALOG_VIEWED: 645,
              ATOM_PERMISSION_RATIONALE_DIALOG_ACTION_REPORTED: 646,
              ATOM_APP_DATA_SHARING_UPDATES_NOTIFICATION_INTERACTION: 647,
              ATOM_APP_DATA_SHARING_UPDATES_FRAGMENT_VIEWED: 648,
              ATOM_APP_DATA_SHARING_UPDATES_FRAGMENT_ACTION_REPORTED: 649,
              ATOM_ENHANCED_CONFIRMATION_DIALOG_RESULT_REPORTED: 827,
              ATOM_ENHANCED_CONFIRMATION_RESTRICTION_CLEARED: 828,
              ATOM_PHOTOPICKER_SESSION_INFO_REPORTED: 886,
              ATOM_PHOTOPICKER_API_INFO_REPORTED: 887,
              ATOM_PHOTOPICKER_UI_EVENT_LOGGED: 888,
              ATOM_PHOTOPICKER_MEDIA_ITEM_STATUS_REPORTED: 889,
              ATOM_PHOTOPICKER_PREVIEW_INFO_LOGGED: 890,
              ATOM_PHOTOPICKER_MENU_INTERACTION_LOGGED: 891,
              ATOM_PHOTOPICKER_BANNER_INTERACTION_LOGGED: 892,
              ATOM_PHOTOPICKER_MEDIA_LIBRARY_INFO_LOGGED: 893,
              ATOM_PHOTOPICKER_PAGE_INFO_LOGGED: 894,
              ATOM_PHOTOPICKER_MEDIA_GRID_SYNC_INFO_REPORTED: 895,
              ATOM_PHOTOPICKER_ALBUM_SYNC_INFO_REPORTED: 896,
              ATOM_PHOTOPICKER_SEARCH_INFO_REPORTED: 897,
              ATOM_SEARCH_DATA_EXTRACTION_DETAILS_REPORTED: 898,
              ATOM_EMBEDDED_PHOTOPICKER_INFO_REPORTED: 899,
              ATOM_ATOM_9999: 9999,
              ATOM_ATOM_99999: 99999,
              ATOM_SCREEN_OFF_REPORTED: 776,
              ATOM_SCREEN_TIMEOUT_OVERRIDE_REPORTED: 836,
              ATOM_SCREEN_INTERACTIVE_SESSION_REPORTED: 837,
              ATOM_SCREEN_DIM_REPORTED: 867,
              ATOM_MEDIA_PROVIDER_DATABASE_ROLLBACK_REPORTED: 784,
              ATOM_BACKUP_SETUP_STATUS_REPORTED: 785,
              ATOM_RANGING_SESSION_CONFIGURED: 993,
              ATOM_RANGING_SESSION_STARTED: 994,
              ATOM_RANGING_SESSION_CLOSED: 995,
              ATOM_RANGING_TECHNOLOGY_STARTED: 996,
              ATOM_RANGING_TECHNOLOGY_STOPPED: 997,
              ATOM_RKPD_POOL_STATS: 664,
              ATOM_RKPD_CLIENT_OPERATION: 665,
              ATOM_SANDBOX_API_CALLED: 488,
              ATOM_SANDBOX_ACTIVITY_EVENT_OCCURRED: 735,
              ATOM_SDK_SANDBOX_RESTRICTED_ACCESS_IN_SESSION: 796,
              ATOM_SANDBOX_SDK_STORAGE: 10159,
              ATOM_SELINUX_AUDIT_LOG: 799,
              ATOM_SETTINGS_SPA_REPORTED: 622,
              ATOM_TEST_EXTENSION_ATOM_REPORTED: 660,
              ATOM_TEST_RESTRICTED_ATOM_REPORTED: 672,
              ATOM_STATS_SOCKET_LOSS_REPORTED: 752,
              ATOM_LOCKSCREEN_SHORTCUT_SELECTED: 611,
              ATOM_LOCKSCREEN_SHORTCUT_TRIGGERED: 612,
              ATOM_LAUNCHER_IMPRESSION_EVENT_V2: 716,
              ATOM_DISPLAY_SWITCH_LATENCY_TRACKED: 753,
              ATOM_NOTIFICATION_LISTENER_SERVICE: 829,
              ATOM_NAV_HANDLE_TOUCH_POINTS: 869,
              ATOM_COMMUNAL_HUB_WIDGET_EVENT_REPORTED: 908,
              ATOM_COMMUNAL_HUB_SNAPSHOT: 10226,
              ATOM_EMERGENCY_NUMBER_DIALED: 637,
              ATOM_CALL_STATS: 10221,
              ATOM_CALL_AUDIO_ROUTE_STATS: 10222,
              ATOM_TELECOM_API_STATS: 10223,
              ATOM_TELECOM_ERROR_STATS: 10224,
              ATOM_CELLULAR_RADIO_POWER_STATE_CHANGED: 713,
              ATOM_EMERGENCY_NUMBERS_INFO: 10180,
              ATOM_DATA_NETWORK_VALIDATION: 10207,
              ATOM_DATA_RAT_STATE_CHANGED: 854,
              ATOM_CONNECTED_CHANNEL_CHANGED: 882,
              ATOM_IWLAN_UNDERLYING_NETWORK_VALIDATION_RESULT_REPORTED: 923,
              ATOM_QUALIFIED_RAT_LIST_CHANGED: 634,
              ATOM_QNS_IMS_CALL_DROP_STATS: 635,
              ATOM_QNS_FALLBACK_RESTRICTION_CHANGED: 636,
              ATOM_QNS_RAT_PREFERENCE_MISMATCH_INFO: 10177,
              ATOM_QNS_HANDOVER_TIME_MILLIS: 10178,
              ATOM_QNS_HANDOVER_PINGPONG: 10179,
              ATOM_SATELLITE_CONTROLLER: 10182,
              ATOM_SATELLITE_SESSION: 10183,
              ATOM_SATELLITE_INCOMING_DATAGRAM: 10184,
              ATOM_SATELLITE_OUTGOING_DATAGRAM: 10185,
              ATOM_SATELLITE_PROVISION: 10186,
              ATOM_SATELLITE_SOS_MESSAGE_RECOMMENDER: 10187,
              ATOM_CARRIER_ROAMING_SATELLITE_SESSION: 10211,
              ATOM_CARRIER_ROAMING_SATELLITE_CONTROLLER_STATS: 10212,
              ATOM_CONTROLLER_STATS_PER_PACKAGE: 10213,
              ATOM_SATELLITE_ENTITLEMENT: 10214,
              ATOM_SATELLITE_CONFIG_UPDATER: 10215,
              ATOM_SATELLITE_ACCESS_CONTROLLER: 10219,
              ATOM_CELLULAR_IDENTIFIER_DISCLOSED: 800,
              ATOM_THREADNETWORK_TELEMETRY_DATA_REPORTED: 738,
              ATOM_THREADNETWORK_TOPO_ENTRY_REPEATED: 739,
              ATOM_THREADNETWORK_DEVICE_INFO_REPORTED: 740,
              ATOM_BOOT_INTEGRITY_INFO_REPORTED: 775,
              ATOM_TV_LOW_POWER_STANDBY_POLICY: 679,
              ATOM_EXTERNAL_TV_INPUT_EVENT: 717,
              ATOM_TEST_UPROBESTATS_ATOM_REPORTED: 915,
              ATOM_UWB_ACTIVITY_INFO: 10188,
              ATOM_MEDIATOR_UPDATED: 721,
              ATOM_SYSPROXY_BLUETOOTH_BYTES_TRANSFER: 10196,
              ATOM_SYSPROXY_CONNECTION_UPDATED: 786,
              ATOM_WEAR_COMPANION_CONNECTION_STATE: 921,
              ATOM_MEDIA_ACTION_REPORTED: 608,
              ATOM_MEDIA_CONTROLS_LAUNCHED: 609,
              ATOM_MEDIA_SESSION_STATE_CHANGED: 677,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_DEVICE_SCAN_API_LATENCY: 757,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_SASS_DEVICE_UNAVAILABLE: 758,
              ATOM_WEAR_MEDIA_OUTPUT_SWITCHER_FASTPAIR_API_TIMEOUT: 759,
              ATOM_WEAR_MODE_STATE_CHANGED: 715,
              ATOM_RENDERER_INITIALIZED: 736,
              ATOM_SCHEMA_VERSION_RECEIVED: 737,
              ATOM_LAYOUT_INSPECTED: 741,
              ATOM_LAYOUT_EXPRESSION_INSPECTED: 742,
              ATOM_LAYOUT_ANIMATIONS_INSPECTED: 743,
              ATOM_MATERIAL_COMPONENTS_INSPECTED: 744,
              ATOM_TILE_REQUESTED: 745,
              ATOM_STATE_RESPONSE_RECEIVED: 746,
              ATOM_TILE_RESPONSE_RECEIVED: 747,
              ATOM_INFLATION_FINISHED: 748,
              ATOM_INFLATION_FAILED: 749,
              ATOM_IGNORED_INFLATION_FAILURES_REPORTED: 750,
              ATOM_DRAWABLE_RENDERED: 751,
              ATOM_WEAR_TIME_SYNC_REQUESTED: 911,
              ATOM_WEAR_TIME_UPDATE_STARTED: 912,
              ATOM_WEAR_TIME_SYNC_ATTEMPT_COMPLETED: 913,
              ATOM_WEAR_TIME_CHANGED: 914,
              ATOM_WEAR_ADAPTIVE_SUSPEND_STATS_REPORTED: 619,
              ATOM_WEAR_POWER_ANOMALY_SERVICE_OPERATIONAL_STATS_REPORTED: 620,
              ATOM_WEAR_POWER_ANOMALY_SERVICE_EVENT_STATS_REPORTED: 621,
              ATOM_WS_WEAR_TIME_SESSION: 610,
              ATOM_WS_INCOMING_CALL_ACTION_REPORTED: 626,
              ATOM_WS_CALL_DISCONNECTION_REPORTED: 627,
              ATOM_WS_CALL_DURATION_REPORTED: 628,
              ATOM_WS_CALL_USER_EXPERIENCE_LATENCY_REPORTED: 629,
              ATOM_WS_CALL_INTERACTION_REPORTED: 630,
              ATOM_WS_ON_BODY_STATE_CHANGED: 787,
              ATOM_WS_WATCH_FACE_RESTRICTED_COMPLICATIONS_IMPACTED: 802,
              ATOM_WS_WATCH_FACE_DEFAULT_RESTRICTED_COMPLICATIONS_REMOVED: 803,
              ATOM_WS_COMPLICATIONS_IMPACTED_NOTIFICATION_EVENT_REPORTED: 804,
              ATOM_WS_REMOTE_EVENT_USAGE_REPORTED: 920,
              ATOM_WS_BUGREPORT_REQUESTED: 936,
              ATOM_WS_BUGREPORT_TRIGGERED: 937,
              ATOM_WS_BUGREPORT_FINISHED: 938,
              ATOM_WS_BUGREPORT_RESULT_RECEIVED: 939,
              ATOM_WS_STANDALONE_MODE_SNAPSHOT: 10197,
              ATOM_WS_FAVORITE_WATCH_FACE_SNAPSHOT: 10206,
              ATOM_WS_PHOTOS_WATCH_FACE_FEATURE_SNAPSHOT: 10225,
              ATOM_WS_WATCH_FACE_CUSTOMIZATION_SNAPSHOT: 10227,
              ATOM_WEAR_POWER_MENU_OPENED: 731,
              ATOM_WEAR_ASSISTANT_OPENED: 755,
              ATOM_FIRST_OVERLAY_STATE_CHANGED: 917,
              ATOM_WIFI_AWARE_NDP_REPORTED: 638,
              ATOM_WIFI_AWARE_ATTACH_REPORTED: 639,
              ATOM_WIFI_SELF_RECOVERY_TRIGGERED: 661,
              ATOM_SOFT_AP_STARTED: 680,
              ATOM_SOFT_AP_STOPPED: 681,
              ATOM_WIFI_LOCK_RELEASED: 687,
              ATOM_WIFI_LOCK_DEACTIVATED: 688,
              ATOM_WIFI_CONFIG_SAVED: 689,
              ATOM_WIFI_AWARE_RESOURCE_USING_CHANGED: 690,
              ATOM_WIFI_AWARE_HAL_API_CALLED: 691,
              ATOM_WIFI_LOCAL_ONLY_REQUEST_RECEIVED: 692,
              ATOM_WIFI_LOCAL_ONLY_REQUEST_SCAN_TRIGGERED: 693,
              ATOM_WIFI_THREAD_TASK_EXECUTED: 694,
              ATOM_WIFI_STATE_CHANGED: 700,
              ATOM_PNO_SCAN_STARTED: 719,
              ATOM_PNO_SCAN_STOPPED: 720,
              ATOM_WIFI_IS_UNUSABLE_REPORTED: 722,
              ATOM_WIFI_AP_CAPABILITIES_REPORTED: 723,
              ATOM_SOFT_AP_STATE_CHANGED: 805,
              ATOM_SCORER_PREDICTION_RESULT_REPORTED: 884,
              ATOM_WIFI_AWARE_CAPABILITIES: 10190,
              ATOM_WIFI_MODULE_INFO: 10193,
              ATOM_WIFI_SETTING_INFO: 10194,
              ATOM_WIFI_COMPLEX_SETTING_INFO: 10195,
              ATOM_WIFI_CONFIGURED_NETWORK_INFO: 10198
            }
          },
          ProcessStatsConfig: {
            edition: "proto2",
            fields: {
              quirks: {
                rule: "repeated",
                type: "Quirks",
                id: 1
              },
              scanAllProcessesOnStart: {
                type: "bool",
                id: 2
              },
              recordThreadNames: {
                type: "bool",
                id: 3
              },
              procStatsPollMs: {
                type: "uint32",
                id: 4
              },
              procStatsCacheTtlMs: {
                type: "uint32",
                id: 6
              },
              resolveProcessFds: {
                type: "bool",
                id: 9
              },
              scanSmapsRollup: {
                type: "bool",
                id: 10
              },
              recordProcessAge: {
                type: "bool",
                id: 11
              },
              recordProcessRuntime: {
                type: "bool",
                id: 12
              }
            },
            reserved: [
              [
                7,
                7
              ],
              [
                8,
                8
              ]
            ],
            nested: {
              Quirks: {
                valuesOptions: {
                  DISABLE_INITIAL_DUMP: {
                    deprecated: true
                  }
                },
                values: {
                  QUIRKS_UNSPECIFIED: 0,
                  DISABLE_INITIAL_DUMP: 1,
                  DISABLE_ON_DEMAND: 2
                }
              }
            }
          },
          HeapprofdConfig: {
            edition: "proto2",
            fields: {
              samplingIntervalBytes: {
                type: "uint64",
                id: 1
              },
              adaptiveSamplingShmemThreshold: {
                type: "uint64",
                id: 24
              },
              adaptiveSamplingMaxSamplingIntervalBytes: {
                type: "uint64",
                id: 25
              },
              processCmdline: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              pid: {
                rule: "repeated",
                type: "uint64",
                id: 4
              },
              targetInstalledBy: {
                rule: "repeated",
                type: "string",
                id: 26
              },
              heaps: {
                rule: "repeated",
                type: "string",
                id: 20
              },
              excludeHeaps: {
                rule: "repeated",
                type: "string",
                id: 27
              },
              streamAllocations: {
                type: "bool",
                id: 23
              },
              heapSamplingIntervals: {
                rule: "repeated",
                type: "uint64",
                id: 22
              },
              allHeaps: {
                type: "bool",
                id: 21
              },
              all: {
                type: "bool",
                id: 5
              },
              minAnonymousMemoryKb: {
                type: "uint32",
                id: 15
              },
              maxHeapprofdMemoryKb: {
                type: "uint32",
                id: 16
              },
              maxHeapprofdCpuSecs: {
                type: "uint64",
                id: 17
              },
              skipSymbolPrefix: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              continuousDumpConfig: {
                type: "ContinuousDumpConfig",
                id: 6
              },
              shmemSizeBytes: {
                type: "uint64",
                id: 8
              },
              blockClient: {
                type: "bool",
                id: 9
              },
              blockClientTimeoutUs: {
                type: "uint32",
                id: 14
              },
              noStartup: {
                type: "bool",
                id: 10
              },
              noRunning: {
                type: "bool",
                id: 11
              },
              dumpAtMax: {
                type: "bool",
                id: 13
              },
              disableForkTeardown: {
                type: "bool",
                id: 18
              },
              disableVforkDetection: {
                type: "bool",
                id: 19
              }
            },
            reserved: [
              [
                12,
                12
              ]
            ],
            nested: {
              ContinuousDumpConfig: {
                fields: {
                  dumpPhaseMs: {
                    type: "uint32",
                    id: 5
                  },
                  dumpIntervalMs: {
                    type: "uint32",
                    id: 6
                  }
                }
              }
            }
          },
          JavaHprofConfig: {
            edition: "proto2",
            fields: {
              processCmdline: {
                rule: "repeated",
                type: "string",
                id: 1
              },
              pid: {
                rule: "repeated",
                type: "uint64",
                id: 2
              },
              targetInstalledBy: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              continuousDumpConfig: {
                type: "ContinuousDumpConfig",
                id: 3
              },
              minAnonymousMemoryKb: {
                type: "uint32",
                id: 4
              },
              dumpSmaps: {
                type: "bool",
                id: 5
              },
              ignoredTypes: {
                rule: "repeated",
                type: "string",
                id: 6
              }
            },
            nested: {
              ContinuousDumpConfig: {
                fields: {
                  dumpPhaseMs: {
                    type: "uint32",
                    id: 1
                  },
                  dumpIntervalMs: {
                    type: "uint32",
                    id: 2
                  },
                  scanPidsOnlyOnStart: {
                    type: "bool",
                    id: 3
                  }
                }
              }
            }
          },
          PerfEventConfig: {
            edition: "proto2",
            fields: {
              timebase: {
                type: "PerfEvents.Timebase",
                id: 15
              },
              followers: {
                rule: "repeated",
                type: "FollowerEvent",
                id: 19
              },
              callstackSampling: {
                type: "CallstackSampling",
                id: 16
              },
              targetCpu: {
                rule: "repeated",
                type: "uint32",
                id: 20
              },
              ringBufferReadPeriodMs: {
                type: "uint32",
                id: 8
              },
              ringBufferPages: {
                type: "uint32",
                id: 3
              },
              maxEnqueuedFootprintKb: {
                type: "uint64",
                id: 17
              },
              maxDaemonMemoryKb: {
                type: "uint32",
                id: 13
              },
              remoteDescriptorTimeoutMs: {
                type: "uint32",
                id: 9
              },
              unwindStateClearPeriodMs: {
                type: "uint32",
                id: 10
              },
              targetInstalledBy: {
                rule: "repeated",
                type: "string",
                id: 18
              },
              allCpus: {
                type: "bool",
                id: 1
              },
              samplingFrequency: {
                type: "uint32",
                id: 2
              },
              kernelFrames: {
                type: "bool",
                id: 12
              },
              targetPid: {
                rule: "repeated",
                type: "int32",
                id: 4
              },
              targetCmdline: {
                rule: "repeated",
                type: "string",
                id: 5
              },
              excludePid: {
                rule: "repeated",
                type: "int32",
                id: 6
              },
              excludeCmdline: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              additionalCmdlineCount: {
                type: "uint32",
                id: 11
              }
            },
            reserved: [
              [
                14,
                14
              ]
            ],
            nested: {
              CallstackSampling: {
                fields: {
                  scope: {
                    type: "Scope",
                    id: 1
                  },
                  kernelFrames: {
                    type: "bool",
                    id: 2
                  },
                  userFrames: {
                    type: "UnwindMode",
                    id: 3
                  }
                }
              },
              Scope: {
                fields: {
                  targetPid: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  targetCmdline: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  },
                  excludePid: {
                    rule: "repeated",
                    type: "int32",
                    id: 3
                  },
                  excludeCmdline: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                  },
                  additionalCmdlineCount: {
                    type: "uint32",
                    id: 5
                  },
                  processShardCount: {
                    type: "uint32",
                    id: 6
                  }
                }
              },
              UnwindMode: {
                values: {
                  UNWIND_UNKNOWN: 0,
                  UNWIND_SKIP: 1,
                  UNWIND_DWARF: 2,
                  UNWIND_FRAME_POINTER: 3
                }
              }
            }
          },
          PerfEvents: {
            edition: "proto2",
            fields: {},
            nested: {
              Timebase: {
                oneofs: {
                  interval: {
                    oneof: [
                      "frequency",
                      "period",
                      "pollPeriodMs"
                    ]
                  },
                  event: {
                    oneof: [
                      "counter",
                      "tracepoint",
                      "rawEvent"
                    ]
                  }
                },
                fields: {
                  frequency: {
                    type: "uint64",
                    id: 2
                  },
                  period: {
                    type: "uint64",
                    id: 1
                  },
                  pollPeriodMs: {
                    type: "uint32",
                    id: 6
                  },
                  counter: {
                    type: "Counter",
                    id: 4
                  },
                  tracepoint: {
                    type: "Tracepoint",
                    id: 3
                  },
                  rawEvent: {
                    type: "RawEvent",
                    id: 5
                  },
                  timestampClock: {
                    type: "PerfClock",
                    id: 11
                  },
                  name: {
                    type: "string",
                    id: 10
                  }
                }
              },
              Counter: {
                values: {
                  UNKNOWN_COUNTER: 0,
                  SW_CPU_CLOCK: 1,
                  SW_PAGE_FAULTS: 2,
                  SW_TASK_CLOCK: 3,
                  SW_CONTEXT_SWITCHES: 4,
                  SW_CPU_MIGRATIONS: 5,
                  SW_PAGE_FAULTS_MIN: 6,
                  SW_PAGE_FAULTS_MAJ: 7,
                  SW_ALIGNMENT_FAULTS: 8,
                  SW_EMULATION_FAULTS: 9,
                  SW_DUMMY: 20,
                  HW_CPU_CYCLES: 10,
                  HW_INSTRUCTIONS: 11,
                  HW_CACHE_REFERENCES: 12,
                  HW_CACHE_MISSES: 13,
                  HW_BRANCH_INSTRUCTIONS: 14,
                  HW_BRANCH_MISSES: 15,
                  HW_BUS_CYCLES: 16,
                  HW_STALLED_CYCLES_FRONTEND: 17,
                  HW_STALLED_CYCLES_BACKEND: 18,
                  HW_REF_CPU_CYCLES: 19
                }
              },
              Tracepoint: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  filter: {
                    type: "string",
                    id: 2
                  }
                }
              },
              RawEvent: {
                fields: {
                  type: {
                    type: "uint32",
                    id: 1
                  },
                  config: {
                    type: "uint64",
                    id: 2
                  },
                  config1: {
                    type: "uint64",
                    id: 3
                  },
                  config2: {
                    type: "uint64",
                    id: 4
                  }
                }
              },
              PerfClock: {
                values: {
                  UNKNOWN_PERF_CLOCK: 0,
                  PERF_CLOCK_REALTIME: 1,
                  PERF_CLOCK_MONOTONIC: 2,
                  PERF_CLOCK_MONOTONIC_RAW: 3,
                  PERF_CLOCK_BOOTTIME: 4
                }
              }
            }
          },
          FollowerEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "counter",
                  "tracepoint",
                  "rawEvent"
                ]
              }
            },
            fields: {
              counter: {
                type: "PerfEvents.Counter",
                id: 1
              },
              tracepoint: {
                type: "PerfEvents.Tracepoint",
                id: 2
              },
              rawEvent: {
                type: "PerfEvents.RawEvent",
                id: 3
              },
              name: {
                type: "string",
                id: 4
              }
            }
          },
          SysStatsConfig: {
            edition: "proto2",
            fields: {
              meminfoPeriodMs: {
                type: "uint32",
                id: 1
              },
              meminfoCounters: {
                rule: "repeated",
                type: "MeminfoCounters",
                id: 2
              },
              vmstatPeriodMs: {
                type: "uint32",
                id: 3
              },
              vmstatCounters: {
                rule: "repeated",
                type: "VmstatCounters",
                id: 4
              },
              statPeriodMs: {
                type: "uint32",
                id: 5
              },
              statCounters: {
                rule: "repeated",
                type: "StatCounters",
                id: 6
              },
              devfreqPeriodMs: {
                type: "uint32",
                id: 7
              },
              cpufreqPeriodMs: {
                type: "uint32",
                id: 8
              },
              buddyinfoPeriodMs: {
                type: "uint32",
                id: 9
              },
              diskstatPeriodMs: {
                type: "uint32",
                id: 10
              },
              psiPeriodMs: {
                type: "uint32",
                id: 11
              },
              thermalPeriodMs: {
                type: "uint32",
                id: 12
              },
              cpuidlePeriodMs: {
                type: "uint32",
                id: 13
              },
              gpufreqPeriodMs: {
                type: "uint32",
                id: 14
              }
            },
            nested: {
              StatCounters: {
                values: {
                  STAT_UNSPECIFIED: 0,
                  STAT_CPU_TIMES: 1,
                  STAT_IRQ_COUNTS: 2,
                  STAT_SOFTIRQ_COUNTS: 3,
                  STAT_FORK_COUNT: 4
                }
              }
            }
          },
          MeminfoCounters: {
            edition: "proto2",
            values: {
              MEMINFO_UNSPECIFIED: 0,
              MEMINFO_MEM_TOTAL: 1,
              MEMINFO_MEM_FREE: 2,
              MEMINFO_MEM_AVAILABLE: 3,
              MEMINFO_BUFFERS: 4,
              MEMINFO_CACHED: 5,
              MEMINFO_SWAP_CACHED: 6,
              MEMINFO_ACTIVE: 7,
              MEMINFO_INACTIVE: 8,
              MEMINFO_ACTIVE_ANON: 9,
              MEMINFO_INACTIVE_ANON: 10,
              MEMINFO_ACTIVE_FILE: 11,
              MEMINFO_INACTIVE_FILE: 12,
              MEMINFO_UNEVICTABLE: 13,
              MEMINFO_MLOCKED: 14,
              MEMINFO_SWAP_TOTAL: 15,
              MEMINFO_SWAP_FREE: 16,
              MEMINFO_DIRTY: 17,
              MEMINFO_WRITEBACK: 18,
              MEMINFO_ANON_PAGES: 19,
              MEMINFO_MAPPED: 20,
              MEMINFO_SHMEM: 21,
              MEMINFO_SLAB: 22,
              MEMINFO_SLAB_RECLAIMABLE: 23,
              MEMINFO_SLAB_UNRECLAIMABLE: 24,
              MEMINFO_KERNEL_STACK: 25,
              MEMINFO_PAGE_TABLES: 26,
              MEMINFO_COMMIT_LIMIT: 27,
              MEMINFO_COMMITED_AS: 28,
              MEMINFO_VMALLOC_TOTAL: 29,
              MEMINFO_VMALLOC_USED: 30,
              MEMINFO_VMALLOC_CHUNK: 31,
              MEMINFO_CMA_TOTAL: 32,
              MEMINFO_CMA_FREE: 33,
              MEMINFO_GPU: 34,
              MEMINFO_ZRAM: 35,
              MEMINFO_MISC: 36,
              MEMINFO_ION_HEAP: 37,
              MEMINFO_ION_HEAP_POOL: 38
            }
          },
          VmstatCounters: {
            edition: "proto2",
            values: {
              VMSTAT_UNSPECIFIED: 0,
              VMSTAT_NR_FREE_PAGES: 1,
              VMSTAT_NR_ALLOC_BATCH: 2,
              VMSTAT_NR_INACTIVE_ANON: 3,
              VMSTAT_NR_ACTIVE_ANON: 4,
              VMSTAT_NR_INACTIVE_FILE: 5,
              VMSTAT_NR_ACTIVE_FILE: 6,
              VMSTAT_NR_UNEVICTABLE: 7,
              VMSTAT_NR_MLOCK: 8,
              VMSTAT_NR_ANON_PAGES: 9,
              VMSTAT_NR_MAPPED: 10,
              VMSTAT_NR_FILE_PAGES: 11,
              VMSTAT_NR_DIRTY: 12,
              VMSTAT_NR_WRITEBACK: 13,
              VMSTAT_NR_SLAB_RECLAIMABLE: 14,
              VMSTAT_NR_SLAB_UNRECLAIMABLE: 15,
              VMSTAT_NR_PAGE_TABLE_PAGES: 16,
              VMSTAT_NR_KERNEL_STACK: 17,
              VMSTAT_NR_OVERHEAD: 18,
              VMSTAT_NR_UNSTABLE: 19,
              VMSTAT_NR_BOUNCE: 20,
              VMSTAT_NR_VMSCAN_WRITE: 21,
              VMSTAT_NR_VMSCAN_IMMEDIATE_RECLAIM: 22,
              VMSTAT_NR_WRITEBACK_TEMP: 23,
              VMSTAT_NR_ISOLATED_ANON: 24,
              VMSTAT_NR_ISOLATED_FILE: 25,
              VMSTAT_NR_SHMEM: 26,
              VMSTAT_NR_DIRTIED: 27,
              VMSTAT_NR_WRITTEN: 28,
              VMSTAT_NR_PAGES_SCANNED: 29,
              VMSTAT_WORKINGSET_REFAULT: 30,
              VMSTAT_WORKINGSET_ACTIVATE: 31,
              VMSTAT_WORKINGSET_NODERECLAIM: 32,
              VMSTAT_NR_ANON_TRANSPARENT_HUGEPAGES: 33,
              VMSTAT_NR_FREE_CMA: 34,
              VMSTAT_NR_SWAPCACHE: 35,
              VMSTAT_NR_DIRTY_THRESHOLD: 36,
              VMSTAT_NR_DIRTY_BACKGROUND_THRESHOLD: 37,
              VMSTAT_PGPGIN: 38,
              VMSTAT_PGPGOUT: 39,
              VMSTAT_PGPGOUTCLEAN: 40,
              VMSTAT_PSWPIN: 41,
              VMSTAT_PSWPOUT: 42,
              VMSTAT_PGALLOC_DMA: 43,
              VMSTAT_PGALLOC_NORMAL: 44,
              VMSTAT_PGALLOC_MOVABLE: 45,
              VMSTAT_PGFREE: 46,
              VMSTAT_PGACTIVATE: 47,
              VMSTAT_PGDEACTIVATE: 48,
              VMSTAT_PGFAULT: 49,
              VMSTAT_PGMAJFAULT: 50,
              VMSTAT_PGREFILL_DMA: 51,
              VMSTAT_PGREFILL_NORMAL: 52,
              VMSTAT_PGREFILL_MOVABLE: 53,
              VMSTAT_PGSTEAL_KSWAPD_DMA: 54,
              VMSTAT_PGSTEAL_KSWAPD_NORMAL: 55,
              VMSTAT_PGSTEAL_KSWAPD_MOVABLE: 56,
              VMSTAT_PGSTEAL_DIRECT_DMA: 57,
              VMSTAT_PGSTEAL_DIRECT_NORMAL: 58,
              VMSTAT_PGSTEAL_DIRECT_MOVABLE: 59,
              VMSTAT_PGSCAN_KSWAPD_DMA: 60,
              VMSTAT_PGSCAN_KSWAPD_NORMAL: 61,
              VMSTAT_PGSCAN_KSWAPD_MOVABLE: 62,
              VMSTAT_PGSCAN_DIRECT_DMA: 63,
              VMSTAT_PGSCAN_DIRECT_NORMAL: 64,
              VMSTAT_PGSCAN_DIRECT_MOVABLE: 65,
              VMSTAT_PGSCAN_DIRECT_THROTTLE: 66,
              VMSTAT_PGINODESTEAL: 67,
              VMSTAT_SLABS_SCANNED: 68,
              VMSTAT_KSWAPD_INODESTEAL: 69,
              VMSTAT_KSWAPD_LOW_WMARK_HIT_QUICKLY: 70,
              VMSTAT_KSWAPD_HIGH_WMARK_HIT_QUICKLY: 71,
              VMSTAT_PAGEOUTRUN: 72,
              VMSTAT_ALLOCSTALL: 73,
              VMSTAT_PGROTATED: 74,
              VMSTAT_DROP_PAGECACHE: 75,
              VMSTAT_DROP_SLAB: 76,
              VMSTAT_PGMIGRATE_SUCCESS: 77,
              VMSTAT_PGMIGRATE_FAIL: 78,
              VMSTAT_COMPACT_MIGRATE_SCANNED: 79,
              VMSTAT_COMPACT_FREE_SCANNED: 80,
              VMSTAT_COMPACT_ISOLATED: 81,
              VMSTAT_COMPACT_STALL: 82,
              VMSTAT_COMPACT_FAIL: 83,
              VMSTAT_COMPACT_SUCCESS: 84,
              VMSTAT_COMPACT_DAEMON_WAKE: 85,
              VMSTAT_UNEVICTABLE_PGS_CULLED: 86,
              VMSTAT_UNEVICTABLE_PGS_SCANNED: 87,
              VMSTAT_UNEVICTABLE_PGS_RESCUED: 88,
              VMSTAT_UNEVICTABLE_PGS_MLOCKED: 89,
              VMSTAT_UNEVICTABLE_PGS_MUNLOCKED: 90,
              VMSTAT_UNEVICTABLE_PGS_CLEARED: 91,
              VMSTAT_UNEVICTABLE_PGS_STRANDED: 92,
              VMSTAT_NR_ZSPAGES: 93,
              VMSTAT_NR_ION_HEAP: 94,
              VMSTAT_NR_GPU_HEAP: 95,
              VMSTAT_ALLOCSTALL_DMA: 96,
              VMSTAT_ALLOCSTALL_MOVABLE: 97,
              VMSTAT_ALLOCSTALL_NORMAL: 98,
              VMSTAT_COMPACT_DAEMON_FREE_SCANNED: 99,
              VMSTAT_COMPACT_DAEMON_MIGRATE_SCANNED: 100,
              VMSTAT_NR_FASTRPC: 101,
              VMSTAT_NR_INDIRECTLY_RECLAIMABLE: 102,
              VMSTAT_NR_ION_HEAP_POOL: 103,
              VMSTAT_NR_KERNEL_MISC_RECLAIMABLE: 104,
              VMSTAT_NR_SHADOW_CALL_STACK_BYTES: 105,
              VMSTAT_NR_SHMEM_HUGEPAGES: 106,
              VMSTAT_NR_SHMEM_PMDMAPPED: 107,
              VMSTAT_NR_UNRECLAIMABLE_PAGES: 108,
              VMSTAT_NR_ZONE_ACTIVE_ANON: 109,
              VMSTAT_NR_ZONE_ACTIVE_FILE: 110,
              VMSTAT_NR_ZONE_INACTIVE_ANON: 111,
              VMSTAT_NR_ZONE_INACTIVE_FILE: 112,
              VMSTAT_NR_ZONE_UNEVICTABLE: 113,
              VMSTAT_NR_ZONE_WRITE_PENDING: 114,
              VMSTAT_OOM_KILL: 115,
              VMSTAT_PGLAZYFREE: 116,
              VMSTAT_PGLAZYFREED: 117,
              VMSTAT_PGREFILL: 118,
              VMSTAT_PGSCAN_DIRECT: 119,
              VMSTAT_PGSCAN_KSWAPD: 120,
              VMSTAT_PGSKIP_DMA: 121,
              VMSTAT_PGSKIP_MOVABLE: 122,
              VMSTAT_PGSKIP_NORMAL: 123,
              VMSTAT_PGSTEAL_DIRECT: 124,
              VMSTAT_PGSTEAL_KSWAPD: 125,
              VMSTAT_SWAP_RA: 126,
              VMSTAT_SWAP_RA_HIT: 127,
              VMSTAT_WORKINGSET_RESTORE: 128,
              VMSTAT_ALLOCSTALL_DEVICE: 129,
              VMSTAT_ALLOCSTALL_DMA32: 130,
              VMSTAT_BALLOON_DEFLATE: 131,
              VMSTAT_BALLOON_INFLATE: 132,
              VMSTAT_BALLOON_MIGRATE: 133,
              VMSTAT_CMA_ALLOC_FAIL: 134,
              VMSTAT_CMA_ALLOC_SUCCESS: 135,
              VMSTAT_NR_FILE_HUGEPAGES: 136,
              VMSTAT_NR_FILE_PMDMAPPED: 137,
              VMSTAT_NR_FOLL_PIN_ACQUIRED: 138,
              VMSTAT_NR_FOLL_PIN_RELEASED: 139,
              VMSTAT_NR_SEC_PAGE_TABLE_PAGES: 140,
              VMSTAT_NR_SHADOW_CALL_STACK: 141,
              VMSTAT_NR_SWAPCACHED: 142,
              VMSTAT_NR_THROTTLED_WRITTEN: 143,
              VMSTAT_PGALLOC_DEVICE: 144,
              VMSTAT_PGALLOC_DMA32: 145,
              VMSTAT_PGDEMOTE_DIRECT: 146,
              VMSTAT_PGDEMOTE_KSWAPD: 147,
              VMSTAT_PGREUSE: 148,
              VMSTAT_PGSCAN_ANON: 149,
              VMSTAT_PGSCAN_FILE: 150,
              VMSTAT_PGSKIP_DEVICE: 151,
              VMSTAT_PGSKIP_DMA32: 152,
              VMSTAT_PGSTEAL_ANON: 153,
              VMSTAT_PGSTEAL_FILE: 154,
              VMSTAT_THP_COLLAPSE_ALLOC: 155,
              VMSTAT_THP_COLLAPSE_ALLOC_FAILED: 156,
              VMSTAT_THP_DEFERRED_SPLIT_PAGE: 157,
              VMSTAT_THP_FAULT_ALLOC: 158,
              VMSTAT_THP_FAULT_FALLBACK: 159,
              VMSTAT_THP_FAULT_FALLBACK_CHARGE: 160,
              VMSTAT_THP_FILE_ALLOC: 161,
              VMSTAT_THP_FILE_FALLBACK: 162,
              VMSTAT_THP_FILE_FALLBACK_CHARGE: 163,
              VMSTAT_THP_FILE_MAPPED: 164,
              VMSTAT_THP_MIGRATION_FAIL: 165,
              VMSTAT_THP_MIGRATION_SPLIT: 166,
              VMSTAT_THP_MIGRATION_SUCCESS: 167,
              VMSTAT_THP_SCAN_EXCEED_NONE_PTE: 168,
              VMSTAT_THP_SCAN_EXCEED_SHARE_PTE: 169,
              VMSTAT_THP_SCAN_EXCEED_SWAP_PTE: 170,
              VMSTAT_THP_SPLIT_PAGE: 171,
              VMSTAT_THP_SPLIT_PAGE_FAILED: 172,
              VMSTAT_THP_SPLIT_PMD: 173,
              VMSTAT_THP_SWPOUT: 174,
              VMSTAT_THP_SWPOUT_FALLBACK: 175,
              VMSTAT_THP_ZERO_PAGE_ALLOC: 176,
              VMSTAT_THP_ZERO_PAGE_ALLOC_FAILED: 177,
              VMSTAT_VMA_LOCK_ABORT: 178,
              VMSTAT_VMA_LOCK_MISS: 179,
              VMSTAT_VMA_LOCK_RETRY: 180,
              VMSTAT_VMA_LOCK_SUCCESS: 181,
              VMSTAT_WORKINGSET_ACTIVATE_ANON: 182,
              VMSTAT_WORKINGSET_ACTIVATE_FILE: 183,
              VMSTAT_WORKINGSET_NODES: 184,
              VMSTAT_WORKINGSET_REFAULT_ANON: 185,
              VMSTAT_WORKINGSET_REFAULT_FILE: 186,
              VMSTAT_WORKINGSET_RESTORE_ANON: 187,
              VMSTAT_WORKINGSET_RESTORE_FILE: 188
            }
          },
          TestConfig: {
            edition: "proto2",
            fields: {
              messageCount: {
                type: "uint32",
                id: 1
              },
              maxMessagesPerSecond: {
                type: "uint32",
                id: 2
              },
              seed: {
                type: "uint32",
                id: 3
              },
              messageSize: {
                type: "uint32",
                id: 4
              },
              sendBatchOnRegister: {
                type: "bool",
                id: 5
              },
              dummyFields: {
                type: "DummyFields",
                id: 6
              }
            },
            nested: {
              DummyFields: {
                fields: {
                  fieldUint32: {
                    type: "uint32",
                    id: 1
                  },
                  fieldInt32: {
                    type: "int32",
                    id: 2
                  },
                  fieldUint64: {
                    type: "uint64",
                    id: 3
                  },
                  fieldInt64: {
                    type: "int64",
                    id: 4
                  },
                  fieldFixed64: {
                    type: "fixed64",
                    id: 5
                  },
                  fieldSfixed64: {
                    type: "sfixed64",
                    id: 6
                  },
                  fieldFixed32: {
                    type: "fixed32",
                    id: 7
                  },
                  fieldSfixed32: {
                    type: "sfixed32",
                    id: 8
                  },
                  fieldDouble: {
                    type: "double",
                    id: 9
                  },
                  fieldFloat: {
                    type: "float",
                    id: 10
                  },
                  fieldSint64: {
                    type: "sint64",
                    id: 11
                  },
                  fieldSint32: {
                    type: "sint32",
                    id: 12
                  },
                  fieldString: {
                    type: "string",
                    id: 13
                  },
                  fieldBytes: {
                    type: "bytes",
                    id: 14
                  }
                }
              }
            }
          },
          TrackEventConfig: {
            edition: "proto2",
            fields: {
              disabledCategories: {
                rule: "repeated",
                type: "string",
                id: 1
              },
              enabledCategories: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              disabledTags: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              enabledTags: {
                rule: "repeated",
                type: "string",
                id: 4
              },
              disableIncrementalTimestamps: {
                type: "bool",
                id: 5
              },
              timestampUnitMultiplier: {
                type: "uint64",
                id: 6
              },
              filterDebugAnnotations: {
                type: "bool",
                id: 7
              },
              enableThreadTimeSampling: {
                type: "bool",
                id: 8
              },
              filterDynamicEventNames: {
                type: "bool",
                id: 9
              }
            }
          },
          SystemInfoConfig: {
            edition: "proto2",
            fields: {}
          },
          ChromiumHistogramSamplesConfig: {
            edition: "proto2",
            fields: {
              histograms: {
                rule: "repeated",
                type: "HistogramSample",
                id: 1
              },
              filterHistogramNames: {
                type: "bool",
                id: 2
              }
            },
            nested: {
              HistogramSample: {
                fields: {
                  histogramName: {
                    type: "string",
                    id: 1
                  },
                  minValue: {
                    type: "int64",
                    id: 2
                  },
                  maxValue: {
                    type: "int64",
                    id: 3
                  }
                }
              }
            }
          },
          ExtensionDescriptor: {
            edition: "proto2",
            fields: {
              extensionSet: {
                type: "FileDescriptorSet",
                id: 1
              }
            }
          },
          FileDescriptorSet: {
            edition: "proto2",
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            }
          },
          FileDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              }
            },
            reserved: [
              [
                6,
                6
              ],
              [
                8,
                8
              ],
              [
                9,
                9
              ],
              [
                12,
                12
              ]
            ]
          },
          DescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              }
            },
            reserved: [
              [
                5,
                5
              ],
              [
                7,
                7
              ]
            ],
            nested: {
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          UninterpretedOption: {
            edition: "proto2",
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          FieldOptions: {
            edition: "proto2",
            fields: {
              packed: {
                type: "bool",
                id: 2
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            }
          },
          FieldDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              options: {
                type: "FieldOptions",
                id: 8
              },
              oneofIndex: {
                type: "int32",
                id: 9
              }
            },
            reserved: [
              [
                10,
                10
              ]
            ],
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REQUIRED: 2,
                  LABEL_REPEATED: 3
                }
              }
            }
          },
          OneofDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 5
              }
            },
            reserved: [
              [
                3,
                3
              ],
              [
                4,
                4
              ]
            ]
          },
          EnumValueDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              }
            },
            reserved: [
              [
                3,
                3
              ]
            ]
          },
          OneofOptions: {
            edition: "proto2",
            fields: {},
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                999,
                999
              ]
            ]
          },
          AndroidGameInterventionList: {
            edition: "proto2",
            fields: {
              gamePackages: {
                rule: "repeated",
                type: "GamePackageInfo",
                id: 1
              },
              parseError: {
                type: "bool",
                id: 2
              },
              readError: {
                type: "bool",
                id: 3
              }
            },
            nested: {
              GameModeInfo: {
                fields: {
                  mode: {
                    type: "uint32",
                    id: 1
                  },
                  useAngle: {
                    type: "bool",
                    id: 2
                  },
                  resolutionDownscale: {
                    type: "float",
                    id: 3
                  },
                  fps: {
                    type: "float",
                    id: 4
                  }
                }
              },
              GamePackageInfo: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  uid: {
                    type: "uint64",
                    id: 2
                  },
                  currentMode: {
                    type: "uint32",
                    id: 3
                  },
                  gameModeInfo: {
                    rule: "repeated",
                    type: "GameModeInfo",
                    id: 4
                  }
                }
              }
            }
          },
          AndroidLogPacket: {
            edition: "proto2",
            fields: {
              events: {
                rule: "repeated",
                type: "LogEvent",
                id: 1
              },
              stats: {
                type: "Stats",
                id: 2
              }
            },
            nested: {
              LogEvent: {
                fields: {
                  logId: {
                    type: "AndroidLogId",
                    id: 1
                  },
                  pid: {
                    type: "int32",
                    id: 2
                  },
                  tid: {
                    type: "int32",
                    id: 3
                  },
                  uid: {
                    type: "int32",
                    id: 4
                  },
                  timestamp: {
                    type: "uint64",
                    id: 5
                  },
                  tag: {
                    type: "string",
                    id: 6
                  },
                  prio: {
                    type: "AndroidLogPriority",
                    id: 7
                  },
                  message: {
                    type: "string",
                    id: 8
                  },
                  args: {
                    rule: "repeated",
                    type: "Arg",
                    id: 9
                  }
                },
                nested: {
                  Arg: {
                    oneofs: {
                      value: {
                        oneof: [
                          "intValue",
                          "floatValue",
                          "stringValue"
                        ]
                      }
                    },
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      intValue: {
                        type: "int64",
                        id: 2
                      },
                      floatValue: {
                        type: "float",
                        id: 3
                      },
                      stringValue: {
                        type: "string",
                        id: 4
                      }
                    }
                  }
                }
              },
              Stats: {
                fields: {
                  numTotal: {
                    type: "uint64",
                    id: 1
                  },
                  numFailed: {
                    type: "uint64",
                    id: 2
                  },
                  numSkipped: {
                    type: "uint64",
                    id: 3
                  }
                }
              }
            }
          },
          AndroidSystemProperty: {
            edition: "proto2",
            fields: {
              values: {
                rule: "repeated",
                type: "PropertyValue",
                id: 1
              }
            },
            nested: {
              PropertyValue: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          AppWakelockInfo: {
            edition: "proto2",
            fields: {
              iid: {
                type: "int32",
                id: 1
              },
              tag: {
                type: "string",
                id: 2
              },
              flags: {
                type: "int32",
                id: 3
              },
              ownerPid: {
                type: "int32",
                id: 4
              },
              ownerUid: {
                type: "int32",
                id: 5
              },
              workUid: {
                type: "int32",
                id: 6
              }
            }
          },
          AppWakelockBundle: {
            edition: "proto2",
            fields: {
              internId: {
                rule: "repeated",
                type: "uint32",
                id: 1,
                options: {
                  packed: true
                }
              },
              encodedTs: {
                rule: "repeated",
                type: "uint64",
                id: 2,
                options: {
                  packed: true
                }
              },
              info: {
                type: "AppWakelockInfo",
                id: 3
              },
              acquired: {
                type: "bool",
                id: 4
              }
            }
          },
          BluetoothTracePacketType: {
            edition: "proto2",
            values: {
              HCI_CMD: 1,
              HCI_EVT: 2,
              HCI_ACL_RX: 3,
              HCI_ACL_TX: 4,
              HCI_SCO_RX: 5,
              HCI_SCO_TX: 6,
              HCI_ISO_RX: 7,
              HCI_ISO_TX: 8
            }
          },
          BluetoothTraceEvent: {
            edition: "proto2",
            fields: {
              packetType: {
                type: "BluetoothTracePacketType",
                id: 1
              },
              count: {
                type: "uint32",
                id: 2
              },
              length: {
                type: "uint32",
                id: 3
              },
              duration: {
                type: "uint32",
                id: 4
              },
              opCode: {
                type: "uint32",
                id: 5
              },
              eventCode: {
                type: "uint32",
                id: 6
              },
              subeventCode: {
                type: "uint32",
                id: 7
              },
              connectionHandle: {
                type: "uint32",
                id: 8
              }
            }
          },
          AndroidCameraFrameEvent: {
            edition: "proto2",
            fields: {
              sessionId: {
                type: "uint64",
                id: 1
              },
              cameraId: {
                type: "uint32",
                id: 2
              },
              frameNumber: {
                type: "int64",
                id: 3
              },
              requestId: {
                type: "int64",
                id: 4
              },
              requestReceivedNs: {
                type: "int64",
                id: 5
              },
              requestProcessingStartedNs: {
                type: "int64",
                id: 6
              },
              startOfExposureNs: {
                type: "int64",
                id: 7
              },
              startOfFrameNs: {
                type: "int64",
                id: 8
              },
              responsesAllSentNs: {
                type: "int64",
                id: 9
              },
              captureResultStatus: {
                type: "CaptureResultStatus",
                id: 10
              },
              skippedSensorFrames: {
                type: "int32",
                id: 11
              },
              captureIntent: {
                type: "int32",
                id: 12
              },
              numStreams: {
                type: "int32",
                id: 13
              },
              nodeProcessingDetails: {
                rule: "repeated",
                type: "CameraNodeProcessingDetails",
                id: 14
              },
              vendorDataVersion: {
                type: "int32",
                id: 15
              },
              vendorData: {
                type: "bytes",
                id: 16
              }
            },
            nested: {
              CaptureResultStatus: {
                values: {
                  STATUS_UNSPECIFIED: 0,
                  STATUS_OK: 1,
                  STATUS_EARLY_METADATA_ERROR: 2,
                  STATUS_FINAL_METADATA_ERROR: 3,
                  STATUS_BUFFER_ERROR: 4,
                  STATUS_FLUSH_ERROR: 5
                }
              },
              CameraNodeProcessingDetails: {
                fields: {
                  nodeId: {
                    type: "int64",
                    id: 1
                  },
                  startProcessingNs: {
                    type: "int64",
                    id: 2
                  },
                  endProcessingNs: {
                    type: "int64",
                    id: 3
                  },
                  schedulingLatencyNs: {
                    type: "int64",
                    id: 4
                  }
                }
              }
            }
          },
          AndroidCameraSessionStats: {
            edition: "proto2",
            fields: {
              sessionId: {
                type: "uint64",
                id: 1
              },
              graph: {
                type: "CameraGraph",
                id: 2
              }
            },
            nested: {
              CameraGraph: {
                fields: {
                  nodes: {
                    rule: "repeated",
                    type: "CameraNode",
                    id: 1
                  },
                  edges: {
                    rule: "repeated",
                    type: "CameraEdge",
                    id: 2
                  }
                },
                nested: {
                  CameraNode: {
                    fields: {
                      nodeId: {
                        type: "int64",
                        id: 1
                      },
                      inputIds: {
                        rule: "repeated",
                        type: "int64",
                        id: 2
                      },
                      outputIds: {
                        rule: "repeated",
                        type: "int64",
                        id: 3
                      },
                      vendorDataVersion: {
                        type: "int32",
                        id: 4
                      },
                      vendorData: {
                        type: "bytes",
                        id: 5
                      }
                    }
                  },
                  CameraEdge: {
                    fields: {
                      outputNodeId: {
                        type: "int64",
                        id: 1
                      },
                      outputId: {
                        type: "int64",
                        id: 2
                      },
                      inputNodeId: {
                        type: "int64",
                        id: 3
                      },
                      inputId: {
                        type: "int64",
                        id: 4
                      },
                      vendorDataVersion: {
                        type: "int32",
                        id: 5
                      },
                      vendorData: {
                        type: "bytes",
                        id: 6
                      }
                    }
                  }
                }
              }
            }
          },
          FrameTimelineEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "expectedDisplayFrameStart",
                  "actualDisplayFrameStart",
                  "expectedSurfaceFrameStart",
                  "actualSurfaceFrameStart",
                  "frameEnd"
                ]
              }
            },
            fields: {
              expectedDisplayFrameStart: {
                type: "ExpectedDisplayFrameStart",
                id: 1
              },
              actualDisplayFrameStart: {
                type: "ActualDisplayFrameStart",
                id: 2
              },
              expectedSurfaceFrameStart: {
                type: "ExpectedSurfaceFrameStart",
                id: 3
              },
              actualSurfaceFrameStart: {
                type: "ActualSurfaceFrameStart",
                id: 4
              },
              frameEnd: {
                type: "FrameEnd",
                id: 5
              }
            },
            nested: {
              JankType: {
                values: {
                  JANK_UNSPECIFIED: 0,
                  JANK_NONE: 1,
                  JANK_SF_SCHEDULING: 2,
                  JANK_PREDICTION_ERROR: 4,
                  JANK_DISPLAY_HAL: 8,
                  JANK_SF_CPU_DEADLINE_MISSED: 16,
                  JANK_SF_GPU_DEADLINE_MISSED: 32,
                  JANK_APP_DEADLINE_MISSED: 64,
                  JANK_BUFFER_STUFFING: 128,
                  JANK_UNKNOWN: 256,
                  JANK_SF_STUFFING: 512,
                  JANK_DROPPED: 1024
                }
              },
              JankSeverityType: {
                values: {
                  SEVERITY_UNKNOWN: 0,
                  SEVERITY_NONE: 1,
                  SEVERITY_PARTIAL: 2,
                  SEVERITY_FULL: 3
                }
              },
              PresentType: {
                values: {
                  PRESENT_UNSPECIFIED: 0,
                  PRESENT_ON_TIME: 1,
                  PRESENT_LATE: 2,
                  PRESENT_EARLY: 3,
                  PRESENT_DROPPED: 4,
                  PRESENT_UNKNOWN: 5
                }
              },
              PredictionType: {
                values: {
                  PREDICTION_UNSPECIFIED: 0,
                  PREDICTION_VALID: 1,
                  PREDICTION_EXPIRED: 2,
                  PREDICTION_UNKNOWN: 3
                }
              },
              ExpectedSurfaceFrameStart: {
                fields: {
                  cookie: {
                    type: "int64",
                    id: 1
                  },
                  token: {
                    type: "int64",
                    id: 2
                  },
                  displayFrameToken: {
                    type: "int64",
                    id: 3
                  },
                  pid: {
                    type: "int32",
                    id: 4
                  },
                  layerName: {
                    type: "string",
                    id: 5
                  }
                }
              },
              ActualSurfaceFrameStart: {
                fields: {
                  cookie: {
                    type: "int64",
                    id: 1
                  },
                  token: {
                    type: "int64",
                    id: 2
                  },
                  displayFrameToken: {
                    type: "int64",
                    id: 3
                  },
                  pid: {
                    type: "int32",
                    id: 4
                  },
                  layerName: {
                    type: "string",
                    id: 5
                  },
                  presentType: {
                    type: "PresentType",
                    id: 6
                  },
                  onTimeFinish: {
                    type: "bool",
                    id: 7
                  },
                  gpuComposition: {
                    type: "bool",
                    id: 8
                  },
                  jankType: {
                    type: "int32",
                    id: 9
                  },
                  predictionType: {
                    type: "PredictionType",
                    id: 10
                  },
                  isBuffer: {
                    type: "bool",
                    id: 11
                  },
                  jankSeverityType: {
                    type: "JankSeverityType",
                    id: 12
                  }
                }
              },
              ExpectedDisplayFrameStart: {
                fields: {
                  cookie: {
                    type: "int64",
                    id: 1
                  },
                  token: {
                    type: "int64",
                    id: 2
                  },
                  pid: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              ActualDisplayFrameStart: {
                fields: {
                  cookie: {
                    type: "int64",
                    id: 1
                  },
                  token: {
                    type: "int64",
                    id: 2
                  },
                  pid: {
                    type: "int32",
                    id: 3
                  },
                  presentType: {
                    type: "PresentType",
                    id: 4
                  },
                  onTimeFinish: {
                    type: "bool",
                    id: 5
                  },
                  gpuComposition: {
                    type: "bool",
                    id: 6
                  },
                  jankType: {
                    type: "int32",
                    id: 7
                  },
                  predictionType: {
                    type: "PredictionType",
                    id: 8
                  },
                  jankSeverityType: {
                    type: "JankSeverityType",
                    id: 9
                  }
                }
              },
              FrameEnd: {
                fields: {
                  cookie: {
                    type: "int64",
                    id: 1
                  }
                }
              }
            }
          },
          GpuMemTotalEvent: {
            edition: "proto2",
            fields: {
              gpuId: {
                type: "uint32",
                id: 1
              },
              pid: {
                type: "uint32",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          GraphicsFrameEvent: {
            edition: "proto2",
            fields: {
              bufferEvent: {
                type: "BufferEvent",
                id: 1
              }
            },
            nested: {
              BufferEventType: {
                values: {
                  UNSPECIFIED: 0,
                  DEQUEUE: 1,
                  QUEUE: 2,
                  POST: 3,
                  ACQUIRE_FENCE: 4,
                  LATCH: 5,
                  HWC_COMPOSITION_QUEUED: 6,
                  FALLBACK_COMPOSITION: 7,
                  PRESENT_FENCE: 8,
                  RELEASE_FENCE: 9,
                  MODIFY: 10,
                  DETACH: 11,
                  ATTACH: 12,
                  CANCEL: 13
                }
              },
              BufferEvent: {
                fields: {
                  frameNumber: {
                    type: "uint32",
                    id: 1
                  },
                  type: {
                    type: "BufferEventType",
                    id: 2
                  },
                  layerName: {
                    type: "string",
                    id: 3
                  },
                  durationNs: {
                    type: "uint64",
                    id: 4
                  },
                  bufferId: {
                    type: "uint32",
                    id: 5
                  }
                }
              }
            }
          },
          InitialDisplayState: {
            edition: "proto2",
            fields: {
              displayState: {
                type: "int32",
                id: 1
              },
              brightness: {
                type: "double",
                id: 2
              }
            }
          },
          KernelWakelockData: {
            edition: "proto2",
            fields: {
              wakelock: {
                rule: "repeated",
                type: "Wakelock",
                id: 1
              },
              wakelockId: {
                rule: "repeated",
                type: "uint32",
                id: 2,
                options: {
                  packed: true
                }
              },
              timeHeldMillis: {
                rule: "repeated",
                type: "uint64",
                id: 3,
                options: {
                  packed: true
                }
              },
              errorFlags: {
                type: "uint64",
                id: 4
              }
            },
            nested: {
              Wakelock: {
                fields: {
                  wakelockId: {
                    type: "uint32",
                    id: 1
                  },
                  wakelockName: {
                    type: "string",
                    id: 2
                  },
                  wakelockType: {
                    type: "Type",
                    id: 3
                  }
                },
                nested: {
                  Type: {
                    values: {
                      WAKELOCK_TYPE_UNKNOWN: 0,
                      WAKELOCK_TYPE_KERNEL: 1,
                      WAKELOCK_TYPE_NATIVE: 2
                    }
                  }
                }
              }
            }
          },
          TrafficDirection: {
            edition: "proto2",
            values: {
              DIR_UNSPECIFIED: 0,
              DIR_INGRESS: 1,
              DIR_EGRESS: 2
            }
          },
          NetworkPacketEvent: {
            edition: "proto2",
            fields: {
              direction: {
                type: "TrafficDirection",
                id: 1
              },
              "interface": {
                type: "string",
                id: 2
              },
              length: {
                type: "uint32",
                id: 3
              },
              uid: {
                type: "uint32",
                id: 4
              },
              tag: {
                type: "uint32",
                id: 5
              },
              ipProto: {
                type: "uint32",
                id: 6
              },
              tcpFlags: {
                type: "uint32",
                id: 7
              },
              localPort: {
                type: "uint32",
                id: 8
              },
              remotePort: {
                type: "uint32",
                id: 9
              },
              icmpType: {
                type: "uint32",
                id: 10
              },
              icmpCode: {
                type: "uint32",
                id: 11
              }
            }
          },
          NetworkPacketBundle: {
            edition: "proto2",
            oneofs: {
              packetContext: {
                oneof: [
                  "iid",
                  "ctx"
                ]
              }
            },
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              ctx: {
                type: "NetworkPacketEvent",
                id: 2
              },
              packetTimestamps: {
                rule: "repeated",
                type: "uint64",
                id: 3,
                options: {
                  packed: true
                }
              },
              packetLengths: {
                rule: "repeated",
                type: "uint32",
                id: 4,
                options: {
                  packed: true
                }
              },
              totalPackets: {
                type: "uint32",
                id: 5
              },
              totalDuration: {
                type: "uint64",
                id: 6
              },
              totalLength: {
                type: "uint64",
                id: 7
              }
            }
          },
          NetworkPacketContext: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              ctx: {
                type: "NetworkPacketEvent",
                id: 2
              }
            }
          },
          PackagesList: {
            edition: "proto2",
            fields: {
              packages: {
                rule: "repeated",
                type: "PackageInfo",
                id: 1
              },
              parseError: {
                type: "bool",
                id: 2
              },
              readError: {
                type: "bool",
                id: 3
              }
            },
            nested: {
              PackageInfo: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  uid: {
                    type: "uint64",
                    id: 2
                  },
                  debuggable: {
                    type: "bool",
                    id: 3
                  },
                  profileableFromShell: {
                    type: "bool",
                    id: 4
                  },
                  versionCode: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          },
          PixelModemEvents: {
            edition: "proto2",
            fields: {
              events: {
                rule: "repeated",
                type: "bytes",
                id: 1
              },
              eventTimeNanos: {
                rule: "repeated",
                type: "uint64",
                id: 2
              }
            }
          },
          PixelModemTokenDatabase: {
            edition: "proto2",
            fields: {
              database: {
                type: "bytes",
                id: 1
              }
            }
          },
          ProtoLogMessage: {
            edition: "proto2",
            fields: {
              messageId: {
                type: "fixed64",
                id: 1
              },
              strParamIids: {
                rule: "repeated",
                type: "uint32",
                id: 2
              },
              sint64Params: {
                rule: "repeated",
                type: "sint64",
                id: 3
              },
              doubleParams: {
                rule: "repeated",
                type: "double",
                id: 4
              },
              booleanParams: {
                rule: "repeated",
                type: "int32",
                id: 5
              },
              stacktraceIid: {
                type: "uint32",
                id: 6
              }
            }
          },
          ProtoLogViewerConfig: {
            edition: "proto2",
            fields: {
              messages: {
                rule: "repeated",
                type: "MessageData",
                id: 1
              },
              groups: {
                rule: "repeated",
                type: "Group",
                id: 2
              }
            },
            nested: {
              MessageData: {
                fields: {
                  messageId: {
                    type: "fixed64",
                    id: 1
                  },
                  message: {
                    type: "string",
                    id: 2
                  },
                  level: {
                    type: "ProtoLogLevel",
                    id: 3
                  },
                  groupId: {
                    type: "uint32",
                    id: 4
                  },
                  location: {
                    type: "string",
                    id: 5
                  }
                }
              },
              Group: {
                fields: {
                  id: {
                    type: "uint32",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  tag: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          ShellTransition: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              createTimeNs: {
                type: "int64",
                id: 2
              },
              sendTimeNs: {
                type: "int64",
                id: 3
              },
              dispatchTimeNs: {
                type: "int64",
                id: 4
              },
              mergeTimeNs: {
                type: "int64",
                id: 5
              },
              mergeRequestTimeNs: {
                type: "int64",
                id: 6
              },
              shellAbortTimeNs: {
                type: "int64",
                id: 7
              },
              wmAbortTimeNs: {
                type: "int64",
                id: 8
              },
              finishTimeNs: {
                type: "int64",
                id: 9
              },
              startTransactionId: {
                type: "uint64",
                id: 10
              },
              finishTransactionId: {
                type: "uint64",
                id: 11
              },
              handler: {
                type: "int32",
                id: 12
              },
              type: {
                type: "int32",
                id: 13
              },
              targets: {
                rule: "repeated",
                type: "Target",
                id: 14
              },
              mergeTarget: {
                type: "int32",
                id: 15
              },
              flags: {
                type: "int32",
                id: 16
              },
              startingWindowRemoveTimeNs: {
                type: "int64",
                id: 17
              }
            },
            nested: {
              Target: {
                fields: {
                  mode: {
                    type: "int32",
                    id: 1
                  },
                  layerId: {
                    type: "int32",
                    id: 2
                  },
                  windowId: {
                    type: "int32",
                    id: 3
                  },
                  flags: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          },
          ShellHandlerMappings: {
            edition: "proto2",
            fields: {
              mapping: {
                rule: "repeated",
                type: "ShellHandlerMapping",
                id: 1
              }
            }
          },
          ShellHandlerMapping: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          LayersTraceFileProto: {
            edition: "proto2",
            fields: {
              magicNumber: {
                type: "fixed64",
                id: 1
              },
              entry: {
                rule: "repeated",
                type: "LayersSnapshotProto",
                id: 2
              },
              realToElapsedTimeOffsetNanos: {
                type: "fixed64",
                id: 3
              }
            },
            nested: {
              MagicNumber: {
                values: {
                  INVALID: 0,
                  MAGIC_NUMBER_L: 1414682956,
                  MAGIC_NUMBER_H: 1162035538
                }
              }
            }
          },
          LayersSnapshotProto: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "sfixed64",
                id: 1
              },
              where: {
                type: "string",
                id: 2
              },
              layers: {
                type: "LayersProto",
                id: 3
              },
              hwcBlob: {
                type: "string",
                id: 4
              },
              excludesCompositionState: {
                type: "bool",
                id: 5
              },
              missedEntries: {
                type: "uint32",
                id: 6
              },
              displays: {
                rule: "repeated",
                type: "DisplayProto",
                id: 7
              },
              vsyncId: {
                type: "int64",
                id: 8
              }
            }
          },
          LayersProto: {
            edition: "proto2",
            fields: {
              layers: {
                rule: "repeated",
                type: "LayerProto",
                id: 1
              }
            }
          },
          DisplayProto: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              layerStack: {
                type: "uint32",
                id: 3
              },
              size: {
                type: "SizeProto",
                id: 4
              },
              layerStackSpaceRect: {
                type: "RectProto",
                id: 5
              },
              transform: {
                type: "TransformProto",
                id: 6
              },
              isVirtual: {
                type: "bool",
                id: 7
              },
              dpiX: {
                type: "double",
                id: 8
              },
              dpiY: {
                type: "double",
                id: 9
              }
            }
          },
          HwcCompositionType: {
            edition: "proto2",
            values: {
              HWC_TYPE_UNSPECIFIED: 0,
              HWC_TYPE_CLIENT: 1,
              HWC_TYPE_DEVICE: 2,
              HWC_TYPE_SOLID_COLOR: 3,
              HWC_TYPE_CURSOR: 4,
              HWC_TYPE_SIDEBAND: 5,
              HWC_TYPE_DISPLAY_DECORATION: 6
            }
          },
          LayerProto: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              children: {
                rule: "repeated",
                type: "int32",
                id: 3,
                options: {
                  packed: true
                }
              },
              relatives: {
                rule: "repeated",
                type: "int32",
                id: 4,
                options: {
                  packed: true
                }
              },
              type: {
                type: "string",
                id: 5
              },
              transparentRegion: {
                type: "RegionProto",
                id: 6
              },
              visibleRegion: {
                type: "RegionProto",
                id: 7
              },
              damageRegion: {
                type: "RegionProto",
                id: 8
              },
              layerStack: {
                type: "uint32",
                id: 9
              },
              z: {
                type: "int32",
                id: 10
              },
              position: {
                type: "PositionProto",
                id: 11
              },
              requestedPosition: {
                type: "PositionProto",
                id: 12
              },
              size: {
                type: "SizeProto",
                id: 13
              },
              crop: {
                type: "RectProto",
                id: 14
              },
              finalCrop: {
                type: "RectProto",
                id: 15,
                options: {
                  deprecated: true
                }
              },
              isOpaque: {
                type: "bool",
                id: 16
              },
              invalidate: {
                type: "bool",
                id: 17
              },
              dataspace: {
                type: "string",
                id: 18
              },
              pixelFormat: {
                type: "string",
                id: 19
              },
              color: {
                type: "ColorProto",
                id: 20
              },
              requestedColor: {
                type: "ColorProto",
                id: 21
              },
              flags: {
                type: "uint32",
                id: 22
              },
              transform: {
                type: "TransformProto",
                id: 23
              },
              requestedTransform: {
                type: "TransformProto",
                id: 24
              },
              parent: {
                type: "int32",
                id: 25
              },
              zOrderRelativeOf: {
                type: "int32",
                id: 26
              },
              activeBuffer: {
                type: "ActiveBufferProto",
                id: 27
              },
              queuedFrames: {
                type: "int32",
                id: 28
              },
              refreshPending: {
                type: "bool",
                id: 29
              },
              hwcFrame: {
                type: "RectProto",
                id: 30
              },
              hwcCrop: {
                type: "FloatRectProto",
                id: 31
              },
              hwcTransform: {
                type: "int32",
                id: 32
              },
              windowType: {
                type: "int32",
                id: 33,
                options: {
                  deprecated: true
                }
              },
              appId: {
                type: "int32",
                id: 34,
                options: {
                  deprecated: true
                }
              },
              hwcCompositionType: {
                type: "HwcCompositionType",
                id: 35
              },
              isProtected: {
                type: "bool",
                id: 36
              },
              currFrame: {
                type: "uint64",
                id: 37
              },
              barrierLayer: {
                rule: "repeated",
                type: "BarrierLayerProto",
                id: 38
              },
              bufferTransform: {
                type: "TransformProto",
                id: 39
              },
              effectiveScalingMode: {
                type: "int32",
                id: 40
              },
              cornerRadius: {
                type: "float",
                id: 41
              },
              metadata: {
                keyType: "int32",
                type: "string",
                id: 42
              },
              effectiveTransform: {
                type: "TransformProto",
                id: 43
              },
              sourceBounds: {
                type: "FloatRectProto",
                id: 44
              },
              bounds: {
                type: "FloatRectProto",
                id: 45
              },
              screenBounds: {
                type: "FloatRectProto",
                id: 46
              },
              inputWindowInfo: {
                type: "InputWindowInfoProto",
                id: 47
              },
              cornerRadiusCrop: {
                type: "FloatRectProto",
                id: 48
              },
              shadowRadius: {
                type: "float",
                id: 49
              },
              colorTransform: {
                type: "ColorTransformProto",
                id: 50
              },
              isRelativeOf: {
                type: "bool",
                id: 51
              },
              backgroundBlurRadius: {
                type: "int32",
                id: 52
              },
              ownerUid: {
                type: "uint32",
                id: 53
              },
              blurRegions: {
                rule: "repeated",
                type: "BlurRegion",
                id: 54
              },
              isTrustedOverlay: {
                type: "bool",
                id: 55
              },
              requestedCornerRadius: {
                type: "float",
                id: 56
              },
              destinationFrame: {
                type: "RectProto",
                id: 57
              },
              originalId: {
                type: "uint32",
                id: 58
              },
              trustedOverlay: {
                type: "TrustedOverlay",
                id: 59
              },
              backgroundBlurScale: {
                type: "float",
                id: 60
              }
            }
          },
          PositionProto: {
            edition: "proto2",
            fields: {
              x: {
                type: "float",
                id: 1
              },
              y: {
                type: "float",
                id: 2
              }
            }
          },
          FloatRectProto: {
            edition: "proto2",
            fields: {
              left: {
                type: "float",
                id: 1
              },
              top: {
                type: "float",
                id: 2
              },
              right: {
                type: "float",
                id: 3
              },
              bottom: {
                type: "float",
                id: 4
              }
            }
          },
          ActiveBufferProto: {
            edition: "proto2",
            fields: {
              width: {
                type: "uint32",
                id: 1
              },
              height: {
                type: "uint32",
                id: 2
              },
              stride: {
                type: "uint32",
                id: 3
              },
              format: {
                type: "int32",
                id: 4
              },
              usage: {
                type: "uint64",
                id: 5
              }
            }
          },
          BarrierLayerProto: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              frameNumber: {
                type: "uint64",
                id: 2
              }
            }
          },
          RegionProto: {
            edition: "proto2",
            fields: {
              rect: {
                rule: "repeated",
                type: "RectProto",
                id: 2
              }
            },
            reserved: [
              [
                1,
                1
              ]
            ]
          },
          SizeProto: {
            edition: "proto2",
            fields: {
              w: {
                type: "int32",
                id: 1
              },
              h: {
                type: "int32",
                id: 2
              }
            }
          },
          TransformProto: {
            edition: "proto2",
            fields: {
              dsdx: {
                type: "float",
                id: 1
              },
              dtdx: {
                type: "float",
                id: 2
              },
              dsdy: {
                type: "float",
                id: 3
              },
              dtdy: {
                type: "float",
                id: 4
              },
              type: {
                type: "int32",
                id: 5
              }
            }
          },
          ColorProto: {
            edition: "proto2",
            fields: {
              r: {
                type: "float",
                id: 1
              },
              g: {
                type: "float",
                id: 2
              },
              b: {
                type: "float",
                id: 3
              },
              a: {
                type: "float",
                id: 4
              }
            }
          },
          InputWindowInfoProto: {
            edition: "proto2",
            fields: {
              layoutParamsFlags: {
                type: "uint32",
                id: 1
              },
              layoutParamsType: {
                type: "int32",
                id: 2
              },
              frame: {
                type: "RectProto",
                id: 3
              },
              touchableRegion: {
                type: "RegionProto",
                id: 4
              },
              surfaceInset: {
                type: "int32",
                id: 5
              },
              visible: {
                type: "bool",
                id: 6
              },
              canReceiveKeys: {
                type: "bool",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              focusable: {
                type: "bool",
                id: 8
              },
              hasWallpaper: {
                type: "bool",
                id: 9
              },
              globalScaleFactor: {
                type: "float",
                id: 10
              },
              windowXScale: {
                type: "float",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              windowYScale: {
                type: "float",
                id: 12,
                options: {
                  deprecated: true
                }
              },
              cropLayerId: {
                type: "int32",
                id: 13
              },
              replaceTouchableRegionWithCrop: {
                type: "bool",
                id: 14
              },
              touchableRegionCrop: {
                type: "RectProto",
                id: 15
              },
              transform: {
                type: "TransformProto",
                id: 16
              },
              inputConfig: {
                type: "uint32",
                id: 17
              }
            }
          },
          BlurRegion: {
            edition: "proto2",
            fields: {
              blurRadius: {
                type: "uint32",
                id: 1
              },
              cornerRadiusTl: {
                type: "uint32",
                id: 2
              },
              cornerRadiusTr: {
                type: "uint32",
                id: 3
              },
              cornerRadiusBl: {
                type: "uint32",
                id: 4
              },
              cornerRadiusBr: {
                type: "float",
                id: 5
              },
              alpha: {
                type: "float",
                id: 6
              },
              left: {
                type: "int32",
                id: 7
              },
              top: {
                type: "int32",
                id: 8
              },
              right: {
                type: "int32",
                id: 9
              },
              bottom: {
                type: "int32",
                id: 10
              }
            }
          },
          ColorTransformProto: {
            edition: "proto2",
            fields: {
              val: {
                rule: "repeated",
                type: "float",
                id: 1,
                options: {
                  packed: true
                }
              }
            }
          },
          TrustedOverlay: {
            edition: "proto2",
            values: {
              UNSET: 0,
              DISABLED: 1,
              ENABLED: 2
            }
          },
          RectProto: {
            edition: "proto2",
            fields: {
              left: {
                type: "int32",
                id: 1
              },
              top: {
                type: "int32",
                id: 2
              },
              right: {
                type: "int32",
                id: 3
              },
              bottom: {
                type: "int32",
                id: 4
              }
            }
          },
          TransactionTraceFile: {
            edition: "proto2",
            fields: {
              magicNumber: {
                type: "fixed64",
                id: 1
              },
              entry: {
                rule: "repeated",
                type: "TransactionTraceEntry",
                id: 2
              },
              realToElapsedTimeOffsetNanos: {
                type: "fixed64",
                id: 3
              },
              version: {
                type: "uint32",
                id: 4
              }
            },
            nested: {
              MagicNumber: {
                values: {
                  INVALID: 0,
                  MAGIC_NUMBER_L: 1415073364,
                  MAGIC_NUMBER_H: 1162035538
                }
              }
            }
          },
          TransactionTraceEntry: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "int64",
                id: 1
              },
              vsyncId: {
                type: "int64",
                id: 2
              },
              transactions: {
                rule: "repeated",
                type: "TransactionState",
                id: 3
              },
              addedLayers: {
                rule: "repeated",
                type: "LayerCreationArgs",
                id: 4
              },
              destroyedLayers: {
                rule: "repeated",
                type: "uint32",
                id: 5
              },
              addedDisplays: {
                rule: "repeated",
                type: "DisplayState",
                id: 6
              },
              removedDisplays: {
                rule: "repeated",
                type: "int32",
                id: 7
              },
              destroyedLayerHandles: {
                rule: "repeated",
                type: "uint32",
                id: 8
              },
              displaysChanged: {
                type: "bool",
                id: 9
              },
              displays: {
                rule: "repeated",
                type: "DisplayInfo",
                id: 10
              }
            }
          },
          DisplayInfo: {
            edition: "proto2",
            fields: {
              layerStack: {
                type: "uint32",
                id: 1
              },
              displayId: {
                type: "int32",
                id: 2
              },
              logicalWidth: {
                type: "int32",
                id: 3
              },
              logicalHeight: {
                type: "int32",
                id: 4
              },
              transformInverse: {
                type: "Transform",
                id: 5
              },
              transform: {
                type: "Transform",
                id: 6
              },
              receivesInput: {
                type: "bool",
                id: 7
              },
              isSecure: {
                type: "bool",
                id: 8
              },
              isPrimary: {
                type: "bool",
                id: 9
              },
              isVirtual: {
                type: "bool",
                id: 10
              },
              rotationFlags: {
                type: "int32",
                id: 11
              },
              transformHint: {
                type: "int32",
                id: 12
              }
            }
          },
          LayerCreationArgs: {
            edition: "proto2",
            fields: {
              layerId: {
                type: "uint32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              parentId: {
                type: "uint32",
                id: 4
              },
              mirrorFromId: {
                type: "uint32",
                id: 5
              },
              addToRoot: {
                type: "bool",
                id: 6
              },
              layerStackToMirror: {
                type: "uint32",
                id: 7
              }
            }
          },
          Transform: {
            edition: "proto2",
            fields: {
              dsdx: {
                type: "float",
                id: 1
              },
              dtdx: {
                type: "float",
                id: 2
              },
              dtdy: {
                type: "float",
                id: 3
              },
              dsdy: {
                type: "float",
                id: 4
              },
              tx: {
                type: "float",
                id: 5
              },
              ty: {
                type: "float",
                id: 6
              }
            }
          },
          TransactionState: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              uid: {
                type: "int32",
                id: 2
              },
              vsyncId: {
                type: "int64",
                id: 3
              },
              inputEventId: {
                type: "int32",
                id: 4
              },
              postTime: {
                type: "int64",
                id: 5
              },
              transactionId: {
                type: "uint64",
                id: 6
              },
              layerChanges: {
                rule: "repeated",
                type: "LayerState",
                id: 7
              },
              displayChanges: {
                rule: "repeated",
                type: "DisplayState",
                id: 8
              },
              mergedTransactionIds: {
                rule: "repeated",
                type: "uint64",
                id: 9
              }
            }
          },
          LayerState: {
            edition: "proto2",
            fields: {
              layerId: {
                type: "uint32",
                id: 1
              },
              what: {
                type: "uint64",
                id: 2
              },
              x: {
                type: "float",
                id: 3
              },
              y: {
                type: "float",
                id: 4
              },
              z: {
                type: "int32",
                id: 5
              },
              w: {
                type: "uint32",
                id: 6
              },
              h: {
                type: "uint32",
                id: 7
              },
              layerStack: {
                type: "uint32",
                id: 8
              },
              flags: {
                type: "uint32",
                id: 9
              },
              mask: {
                type: "uint32",
                id: 10
              },
              matrix: {
                type: "Matrix22",
                id: 11
              },
              cornerRadius: {
                type: "float",
                id: 12
              },
              backgroundBlurRadius: {
                type: "uint32",
                id: 13
              },
              parentId: {
                type: "uint32",
                id: 14
              },
              relativeParentId: {
                type: "uint32",
                id: 15
              },
              alpha: {
                type: "float",
                id: 16
              },
              color: {
                type: "Color3",
                id: 17
              },
              transparentRegion: {
                type: "RegionProto",
                id: 18
              },
              transform: {
                type: "uint32",
                id: 19
              },
              transformToDisplayInverse: {
                type: "bool",
                id: 20
              },
              crop: {
                type: "RectProto",
                id: 21
              },
              bufferData: {
                type: "BufferData",
                id: 22
              },
              api: {
                type: "int32",
                id: 23
              },
              hasSidebandStream: {
                type: "bool",
                id: 24
              },
              colorTransform: {
                type: "ColorTransformProto",
                id: 25
              },
              blurRegions: {
                rule: "repeated",
                type: "BlurRegion",
                id: 26
              },
              windowInfoHandle: {
                type: "WindowInfo",
                id: 27
              },
              bgColorAlpha: {
                type: "float",
                id: 28
              },
              bgColorDataspace: {
                type: "int32",
                id: 29
              },
              colorSpaceAgnostic: {
                type: "bool",
                id: 30
              },
              shadowRadius: {
                type: "float",
                id: 31
              },
              frameRateSelectionPriority: {
                type: "int32",
                id: 32
              },
              frameRate: {
                type: "float",
                id: 33
              },
              frameRateCompatibility: {
                type: "int32",
                id: 34
              },
              changeFrameRateStrategy: {
                type: "int32",
                id: 35
              },
              fixedTransformHint: {
                type: "uint32",
                id: 36
              },
              frameNumber: {
                type: "uint64",
                id: 37
              },
              autoRefresh: {
                type: "bool",
                id: 38
              },
              isTrustedOverlay: {
                type: "bool",
                id: 39
              },
              bufferCrop: {
                type: "RectProto",
                id: 40
              },
              destinationFrame: {
                type: "RectProto",
                id: 41
              },
              dropInputMode: {
                type: "DropInputMode",
                id: 42
              },
              trustedOverlay: {
                type: "TrustedOverlay",
                id: 43
              },
              backgroundBlurScale: {
                type: "float",
                id: 44
              }
            },
            nested: {
              ChangesLsb: {
                values: {
                  eChangesLsbNone: 0,
                  ePositionChanged: 1,
                  eLayerChanged: 2,
                  eAlphaChanged: 8,
                  eMatrixChanged: 16,
                  eTransparentRegionChanged: 32,
                  eFlagsChanged: 64,
                  eLayerStackChanged: 128,
                  eReleaseBufferListenerChanged: 1024,
                  eShadowRadiusChanged: 2048,
                  eBufferCropChanged: 8192,
                  eRelativeLayerChanged: 16384,
                  eReparent: 32768,
                  eColorChanged: 65536,
                  eBufferTransformChanged: 262144,
                  eTransformToDisplayInverseChanged: 524288,
                  eCropChanged: 1048576,
                  eBufferChanged: 2097152,
                  eAcquireFenceChanged: 4194304,
                  eDataspaceChanged: 8388608,
                  eHdrMetadataChanged: 16777216,
                  eSurfaceDamageRegionChanged: 33554432,
                  eApiChanged: 67108864,
                  eSidebandStreamChanged: 134217728,
                  eColorTransformChanged: 268435456,
                  eHasListenerCallbacksChanged: 536870912,
                  eInputInfoChanged: 1073741824,
                  eCornerRadiusChanged: -2147483648
                }
              },
              ChangesMsb: {
                values: {
                  eChangesMsbNone: 0,
                  eDestinationFrameChanged: 1,
                  eCachedBufferChanged: 2,
                  eBackgroundColorChanged: 4,
                  eMetadataChanged: 8,
                  eColorSpaceAgnosticChanged: 16,
                  eFrameRateSelectionPriority: 32,
                  eFrameRateChanged: 64,
                  eBackgroundBlurRadiusChanged: 128,
                  eProducerDisconnect: 256,
                  eFixedTransformHintChanged: 512,
                  eFrameNumberChanged: 1024,
                  eBlurRegionsChanged: 2048,
                  eAutoRefreshChanged: 4096,
                  eStretchChanged: 8192,
                  eTrustedOverlayChanged: 16384,
                  eDropInputModeChanged: 32768
                }
              },
              Flags: {
                values: {
                  eFlagsNone: 0,
                  eLayerHidden: 1,
                  eLayerOpaque: 2,
                  eLayerSkipScreenshot: 64,
                  eLayerSecure: 128,
                  eEnableBackpressure: 256,
                  eLayerIsDisplayDecoration: 512
                }
              },
              Matrix22: {
                fields: {
                  dsdx: {
                    type: "float",
                    id: 1
                  },
                  dtdx: {
                    type: "float",
                    id: 2
                  },
                  dtdy: {
                    type: "float",
                    id: 3
                  },
                  dsdy: {
                    type: "float",
                    id: 4
                  }
                }
              },
              Color3: {
                fields: {
                  r: {
                    type: "float",
                    id: 1
                  },
                  g: {
                    type: "float",
                    id: 2
                  },
                  b: {
                    type: "float",
                    id: 3
                  }
                }
              },
              BufferData: {
                fields: {
                  bufferId: {
                    type: "uint64",
                    id: 1
                  },
                  width: {
                    type: "uint32",
                    id: 2
                  },
                  height: {
                    type: "uint32",
                    id: 3
                  },
                  frameNumber: {
                    type: "uint64",
                    id: 4
                  },
                  flags: {
                    type: "uint32",
                    id: 5
                  },
                  cachedBufferId: {
                    type: "uint64",
                    id: 6
                  },
                  pixelFormat: {
                    type: "PixelFormat",
                    id: 7
                  },
                  usage: {
                    type: "uint64",
                    id: 8
                  }
                },
                nested: {
                  BufferDataChange: {
                    values: {
                      BufferDataChangeNone: 0,
                      fenceChanged: 1,
                      frameNumberChanged: 2,
                      cachedBufferChanged: 4
                    }
                  },
                  PixelFormat: {
                    values: {
                      PIXEL_FORMAT_UNKNOWN: 0,
                      PIXEL_FORMAT_CUSTOM: -4,
                      PIXEL_FORMAT_TRANSLUCENT: -3,
                      PIXEL_FORMAT_TRANSPARENT: -2,
                      PIXEL_FORMAT_OPAQUE: -1,
                      PIXEL_FORMAT_RGBA_8888: 1,
                      PIXEL_FORMAT_RGBX_8888: 2,
                      PIXEL_FORMAT_RGB_888: 3,
                      PIXEL_FORMAT_RGB_565: 4,
                      PIXEL_FORMAT_BGRA_8888: 5,
                      PIXEL_FORMAT_RGBA_5551: 6,
                      PIXEL_FORMAT_RGBA_4444: 7,
                      PIXEL_FORMAT_RGBA_FP16: 22,
                      PIXEL_FORMAT_RGBA_1010102: 43,
                      PIXEL_FORMAT_R_8: 56
                    }
                  }
                }
              },
              WindowInfo: {
                fields: {
                  layoutParamsFlags: {
                    type: "uint32",
                    id: 1
                  },
                  layoutParamsType: {
                    type: "int32",
                    id: 2
                  },
                  touchableRegion: {
                    type: "RegionProto",
                    id: 3
                  },
                  surfaceInset: {
                    type: "int32",
                    id: 4
                  },
                  focusable: {
                    type: "bool",
                    id: 5
                  },
                  hasWallpaper: {
                    type: "bool",
                    id: 6
                  },
                  globalScaleFactor: {
                    type: "float",
                    id: 7
                  },
                  cropLayerId: {
                    type: "uint32",
                    id: 8
                  },
                  replaceTouchableRegionWithCrop: {
                    type: "bool",
                    id: 9
                  },
                  touchableRegionCrop: {
                    type: "RectProto",
                    id: 10
                  },
                  transform: {
                    type: "Transform",
                    id: 11
                  },
                  inputConfig: {
                    type: "uint32",
                    id: 12
                  }
                }
              },
              DropInputMode: {
                values: {
                  NONE: 0,
                  ALL: 1,
                  OBSCURED: 2
                }
              }
            }
          },
          DisplayState: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              what: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              layerStack: {
                type: "uint32",
                id: 4
              },
              orientation: {
                type: "uint32",
                id: 5
              },
              layerStackSpaceRect: {
                type: "RectProto",
                id: 6
              },
              orientedDisplaySpaceRect: {
                type: "RectProto",
                id: 7
              },
              width: {
                type: "uint32",
                id: 8
              },
              height: {
                type: "uint32",
                id: 9
              }
            },
            nested: {
              Changes: {
                values: {
                  eChangesNone: 0,
                  eSurfaceChanged: 1,
                  eLayerStackChanged: 2,
                  eDisplayProjectionChanged: 4,
                  eDisplaySizeChanged: 8,
                  eFlagsChanged: 16
                }
              }
            }
          },
          WinscopeExtensions: {
            edition: "proto2",
            fields: {},
            extensions: [
              [
                1,
                6
              ]
            ]
          },
          ChromeBenchmarkMetadata: {
            edition: "proto2",
            fields: {
              benchmarkStartTimeUs: {
                type: "int64",
                id: 1
              },
              storyRunTimeUs: {
                type: "int64",
                id: 2
              },
              benchmarkName: {
                type: "string",
                id: 3
              },
              benchmarkDescription: {
                type: "string",
                id: 4
              },
              label: {
                type: "string",
                id: 5
              },
              storyName: {
                type: "string",
                id: 6
              },
              storyTags: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              storyRunIndex: {
                type: "int32",
                id: 8
              },
              hadFailures: {
                type: "bool",
                id: 9
              }
            }
          },
          ChromeMetadataPacket: {
            edition: "proto2",
            fields: {
              backgroundTracingMetadata: {
                type: "BackgroundTracingMetadata",
                id: 1
              },
              chromeVersionCode: {
                type: "int32",
                id: 2
              },
              enabledCategories: {
                type: "string",
                id: 3
              },
              fieldTrialHashes: {
                rule: "repeated",
                type: "FinchHash",
                id: 4
              }
            },
            nested: {
              FinchHash: {
                fields: {
                  name: {
                    type: "uint32",
                    id: 1
                  },
                  group: {
                    type: "uint32",
                    id: 2
                  }
                }
              }
            }
          },
          BackgroundTracingMetadata: {
            edition: "proto2",
            fields: {
              triggeredRule: {
                type: "TriggerRule",
                id: 1
              },
              activeRules: {
                rule: "repeated",
                type: "TriggerRule",
                id: 2
              },
              scenarioNameHash: {
                type: "fixed32",
                id: 3
              }
            },
            nested: {
              TriggerRule: {
                fields: {
                  triggerType: {
                    type: "TriggerType",
                    id: 1
                  },
                  histogramRule: {
                    type: "HistogramRule",
                    id: 2
                  },
                  namedRule: {
                    type: "NamedRule",
                    id: 3
                  },
                  nameHash: {
                    type: "fixed32",
                    id: 4
                  }
                },
                nested: {
                  TriggerType: {
                    values: {
                      TRIGGER_UNSPECIFIED: 0,
                      MONITOR_AND_DUMP_WHEN_SPECIFIC_HISTOGRAM_AND_VALUE: 1,
                      MONITOR_AND_DUMP_WHEN_TRIGGER_NAMED: 2
                    }
                  },
                  HistogramRule: {
                    fields: {
                      histogramNameHash: {
                        type: "fixed64",
                        id: 1
                      },
                      histogramMinTrigger: {
                        type: "int64",
                        id: 2
                      },
                      histogramMaxTrigger: {
                        type: "int64",
                        id: 3
                      }
                    }
                  },
                  NamedRule: {
                    fields: {
                      eventType: {
                        type: "EventType",
                        id: 1
                      },
                      contentTriggerNameHash: {
                        type: "fixed64",
                        id: 2
                      }
                    },
                    nested: {
                      EventType: {
                        values: {
                          UNSPECIFIED: 0,
                          SESSION_RESTORE: 1,
                          NAVIGATION: 2,
                          STARTUP: 3,
                          REACHED_CODE: 4,
                          CONTENT_TRIGGER: 5,
                          TEST_RULE: 1000
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ChromeTracedValue: {
            edition: "proto2",
            fields: {
              nestedType: {
                type: "NestedType",
                id: 1
              },
              dictKeys: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              dictValues: {
                rule: "repeated",
                type: "ChromeTracedValue",
                id: 3
              },
              arrayValues: {
                rule: "repeated",
                type: "ChromeTracedValue",
                id: 4
              },
              intValue: {
                type: "int32",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              boolValue: {
                type: "bool",
                id: 7
              },
              stringValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NestedType: {
                values: {
                  DICT: 0,
                  ARRAY: 1
                }
              }
            }
          },
          ChromeStringTableEntry: {
            edition: "proto2",
            fields: {
              value: {
                type: "string",
                id: 1
              },
              index: {
                type: "int32",
                id: 2
              }
            }
          },
          ChromeTraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              timestamp: {
                type: "int64",
                id: 2
              },
              phase: {
                type: "int32",
                id: 3
              },
              threadId: {
                type: "int32",
                id: 4
              },
              duration: {
                type: "int64",
                id: 5
              },
              threadDuration: {
                type: "int64",
                id: 6
              },
              scope: {
                type: "string",
                id: 7
              },
              id: {
                type: "uint64",
                id: 8
              },
              flags: {
                type: "uint32",
                id: 9
              },
              categoryGroupName: {
                type: "string",
                id: 10
              },
              processId: {
                type: "int32",
                id: 11
              },
              threadTimestamp: {
                type: "int64",
                id: 12
              },
              bindId: {
                type: "uint64",
                id: 13
              },
              args: {
                rule: "repeated",
                type: "Arg",
                id: 14
              },
              nameIndex: {
                type: "uint32",
                id: 15
              },
              categoryGroupNameIndex: {
                type: "uint32",
                id: 16
              }
            },
            nested: {
              Arg: {
                oneofs: {
                  value: {
                    oneof: [
                      "boolValue",
                      "uintValue",
                      "intValue",
                      "doubleValue",
                      "stringValue",
                      "pointerValue",
                      "jsonValue",
                      "tracedValue"
                    ]
                  }
                },
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  boolValue: {
                    type: "bool",
                    id: 2
                  },
                  uintValue: {
                    type: "uint64",
                    id: 3
                  },
                  intValue: {
                    type: "int64",
                    id: 4
                  },
                  doubleValue: {
                    type: "double",
                    id: 5
                  },
                  stringValue: {
                    type: "string",
                    id: 6
                  },
                  pointerValue: {
                    type: "uint64",
                    id: 7
                  },
                  jsonValue: {
                    type: "string",
                    id: 8
                  },
                  tracedValue: {
                    type: "ChromeTracedValue",
                    id: 10
                  },
                  nameIndex: {
                    type: "uint32",
                    id: 9
                  }
                }
              }
            }
          },
          ChromeMetadata: {
            edition: "proto2",
            oneofs: {
              value: {
                oneof: [
                  "stringValue",
                  "boolValue",
                  "intValue",
                  "jsonValue"
                ]
              }
            },
            fields: {
              name: {
                type: "string",
                id: 1
              },
              stringValue: {
                type: "string",
                id: 2
              },
              boolValue: {
                type: "bool",
                id: 3
              },
              intValue: {
                type: "int64",
                id: 4
              },
              jsonValue: {
                type: "string",
                id: 5
              }
            }
          },
          ChromeLegacyJsonTrace: {
            edition: "proto2",
            fields: {
              type: {
                type: "TraceType",
                id: 1
              },
              data: {
                type: "string",
                id: 2
              }
            },
            nested: {
              TraceType: {
                values: {
                  USER_TRACE: 0,
                  SYSTEM_TRACE: 1
                }
              }
            }
          },
          ChromeEventBundle: {
            edition: "proto2",
            fields: {
              traceEvents: {
                rule: "repeated",
                type: "ChromeTraceEvent",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              metadata: {
                rule: "repeated",
                type: "ChromeMetadata",
                id: 2
              },
              legacyFtraceOutput: {
                rule: "repeated",
                type: "string",
                id: 4
              },
              legacyJsonTrace: {
                rule: "repeated",
                type: "ChromeLegacyJsonTrace",
                id: 5
              },
              stringTable: {
                rule: "repeated",
                type: "ChromeStringTableEntry",
                id: 3,
                options: {
                  deprecated: true
                }
              }
            }
          },
          ChromeTrigger: {
            edition: "proto2",
            fields: {
              triggerName: {
                type: "string",
                id: 1
              },
              triggerNameHash: {
                type: "fixed32",
                id: 2
              },
              flowId: {
                type: "fixed64",
                id: 3
              }
            }
          },
          V8String: {
            edition: "proto2",
            oneofs: {
              encodedString: {
                oneof: [
                  "latin1",
                  "utf16Le",
                  "utf16Be"
                ]
              }
            },
            fields: {
              latin1: {
                type: "bytes",
                id: 1
              },
              utf16Le: {
                type: "bytes",
                id: 2
              },
              utf16Be: {
                type: "bytes",
                id: 3
              }
            }
          },
          InternedV8String: {
            edition: "proto2",
            oneofs: {
              encodedString: {
                oneof: [
                  "latin1",
                  "utf16Le",
                  "utf16Be"
                ]
              }
            },
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              latin1: {
                type: "bytes",
                id: 2
              },
              utf16Le: {
                type: "bytes",
                id: 3
              },
              utf16Be: {
                type: "bytes",
                id: 4
              }
            }
          },
          InternedV8JsScript: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              scriptId: {
                type: "int32",
                id: 2
              },
              type: {
                type: "Type",
                id: 3
              },
              name: {
                type: "V8String",
                id: 4
              },
              source: {
                type: "V8String",
                id: 5
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_UNKNOWN: 0,
                  TYPE_NORMAL: 1,
                  TYPE_EVAL: 2,
                  TYPE_MODULE: 3,
                  TYPE_NATIVE: 4,
                  TYPE_EXTENSION: 5,
                  TYPE_INSPECTOR: 6
                }
              }
            }
          },
          InternedV8WasmScript: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              scriptId: {
                type: "int32",
                id: 2
              },
              url: {
                type: "string",
                id: 3
              },
              wireBytes: {
                type: "bytes",
                id: 4
              }
            }
          },
          InternedV8JsFunction: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              v8JsFunctionNameIid: {
                type: "uint64",
                id: 2
              },
              v8JsScriptIid: {
                type: "uint64",
                id: 3
              },
              isToplevel: {
                type: "bool",
                id: 4
              },
              kind: {
                type: "Kind",
                id: 5
              },
              byteOffset: {
                type: "uint32",
                id: 6
              },
              line: {
                type: "uint32",
                id: 7
              },
              column: {
                type: "uint32",
                id: 8
              }
            },
            nested: {
              Kind: {
                values: {
                  KIND_UNKNOWN: 0,
                  KIND_NORMAL_FUNCTION: 1,
                  KIND_MODULE: 2,
                  KIND_ASYNC_MODULE: 3,
                  KIND_BASE_CONSTRUCTOR: 4,
                  KIND_DEFAULT_BASE_CONSTRUCTOR: 5,
                  KIND_DEFAULT_DERIVED_CONSTRUCTOR: 6,
                  KIND_DERIVED_CONSTRUCTOR: 7,
                  KIND_GETTER_FUNCTION: 8,
                  KIND_STATIC_GETTER_FUNCTION: 9,
                  KIND_SETTER_FUNCTION: 10,
                  KIND_STATIC_SETTER_FUNCTION: 11,
                  KIND_ARROW_FUNCTION: 12,
                  KIND_ASYNC_ARROW_FUNCTION: 13,
                  KIND_ASYNC_FUNCTION: 14,
                  KIND_ASYNC_CONCISE_METHOD: 15,
                  KIND_STATIC_ASYNC_CONCISE_METHOD: 16,
                  KIND_ASYNC_CONCISE_GENERATOR_METHOD: 17,
                  KIND_STATIC_ASYNC_CONCISE_GENERATOR_METHOD: 18,
                  KIND_ASYNC_GENERATOR_FUNCTION: 19,
                  KIND_GENERATOR_FUNCTION: 20,
                  KIND_CONCISE_GENERATOR_METHOD: 21,
                  KIND_STATIC_CONCISE_GENERATOR_METHOD: 22,
                  KIND_CONCISE_METHOD: 23,
                  KIND_STATIC_CONCISE_METHOD: 24,
                  KIND_CLASS_MEMBERS_INITIALIZER_FUNCTION: 25,
                  KIND_CLASS_STATIC_INITIALIZER_FUNCTION: 26,
                  KIND_INVALID: 27
                }
              }
            }
          },
          InternedV8Isolate: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              pid: {
                type: "uint32",
                id: 2
              },
              isolateId: {
                type: "int32",
                id: 3
              },
              codeRange: {
                type: "CodeRange",
                id: 4
              },
              embeddedBlobCodeStartAddress: {
                type: "uint64",
                id: 5
              },
              embeddedBlobCodeSize: {
                type: "uint64",
                id: 6
              }
            },
            nested: {
              CodeRange: {
                fields: {
                  baseAddress: {
                    type: "uint64",
                    id: 1
                  },
                  size: {
                    type: "uint64",
                    id: 2
                  },
                  embeddedBlobCodeCopyStartAddress: {
                    type: "uint64",
                    id: 3
                  },
                  isProcessWide: {
                    type: "bool",
                    id: 4
                  }
                }
              }
            }
          },
          V8JsCode: {
            edition: "proto2",
            oneofs: {
              instructions: {
                oneof: [
                  "machineCode",
                  "bytecode"
                ]
              }
            },
            fields: {
              v8IsolateIid: {
                type: "uint64",
                id: 1
              },
              tid: {
                type: "uint32",
                id: 2
              },
              v8JsFunctionIid: {
                type: "uint64",
                id: 3
              },
              tier: {
                type: "Tier",
                id: 4
              },
              instructionStart: {
                type: "uint64",
                id: 5
              },
              instructionSizeBytes: {
                type: "uint64",
                id: 6
              },
              machineCode: {
                type: "bytes",
                id: 7
              },
              bytecode: {
                type: "bytes",
                id: 8
              }
            },
            nested: {
              Tier: {
                values: {
                  TIER_UNKNOWN: 0,
                  TIER_IGNITION: 1,
                  TIER_SPARKPLUG: 2,
                  TIER_MAGLEV: 3,
                  TIER_TURBOSHAFT: 4,
                  TIER_TURBOFAN: 5
                }
              }
            }
          },
          V8InternalCode: {
            edition: "proto2",
            fields: {
              v8IsolateIid: {
                type: "uint64",
                id: 1
              },
              tid: {
                type: "uint32",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              },
              type: {
                type: "Type",
                id: 4
              },
              builtinId: {
                type: "int32",
                id: 5
              },
              instructionStart: {
                type: "uint64",
                id: 6
              },
              instructionSizeBytes: {
                type: "uint64",
                id: 7
              },
              machineCode: {
                type: "bytes",
                id: 8
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_UNKNOWN: 0,
                  TYPE_BYTECODE_HANDLER: 1,
                  TYPE_FOR_TESTING: 2,
                  TYPE_BUILTIN: 3,
                  TYPE_WASM_FUNCTION: 4,
                  TYPE_WASM_TO_CAPI_FUNCTION: 5,
                  TYPE_WASM_TO_JS_FUNCTION: 6,
                  TYPE_JS_TO_WASM_FUNCTION: 7,
                  TYPE_JS_TO_JS_FUNCTION: 8,
                  TYPE_C_WASM_ENTRY: 9
                }
              }
            }
          },
          V8WasmCode: {
            edition: "proto2",
            fields: {
              v8IsolateIid: {
                type: "uint64",
                id: 1
              },
              tid: {
                type: "uint32",
                id: 2
              },
              v8WasmScriptIid: {
                type: "uint64",
                id: 3
              },
              functionName: {
                type: "string",
                id: 4
              },
              tier: {
                type: "Tier",
                id: 5
              },
              codeOffsetInModule: {
                type: "int32",
                id: 6
              },
              instructionStart: {
                type: "uint64",
                id: 7
              },
              instructionSizeBytes: {
                type: "uint64",
                id: 8
              },
              machineCode: {
                type: "bytes",
                id: 9
              }
            },
            nested: {
              Tier: {
                values: {
                  TIER_UNKNOWN: 0,
                  TIER_LIFTOFF: 1,
                  TIER_TURBOFAN: 2
                }
              }
            }
          },
          V8RegExpCode: {
            edition: "proto2",
            fields: {
              v8IsolateIid: {
                type: "uint64",
                id: 1
              },
              tid: {
                type: "uint32",
                id: 2
              },
              pattern: {
                type: "V8String",
                id: 3
              },
              instructionStart: {
                type: "uint64",
                id: 4
              },
              instructionSizeBytes: {
                type: "uint64",
                id: 5
              },
              machineCode: {
                type: "bytes",
                id: 6
              }
            }
          },
          V8CodeMove: {
            edition: "proto2",
            oneofs: {
              toInstructions: {
                oneof: [
                  "toMachineCode",
                  "toBytecode"
                ]
              }
            },
            fields: {
              isolateIid: {
                type: "uint64",
                id: 1
              },
              tid: {
                type: "uint32",
                id: 2
              },
              fromInstructionStartAddress: {
                type: "uint64",
                id: 3
              },
              toInstructionStartAddress: {
                type: "uint64",
                id: 4
              },
              instructionSizeBytes: {
                type: "uint64",
                id: 5
              },
              toMachineCode: {
                type: "bytes",
                id: 6
              },
              toBytecode: {
                type: "bytes",
                id: 7
              }
            }
          },
          V8CodeDefaults: {
            edition: "proto2",
            fields: {
              tid: {
                type: "uint32",
                id: 1
              }
            }
          },
          ClockSnapshot: {
            edition: "proto2",
            fields: {
              clocks: {
                rule: "repeated",
                type: "Clock",
                id: 1
              },
              primaryTraceClock: {
                type: "BuiltinClock",
                id: 2
              }
            },
            nested: {
              Clock: {
                fields: {
                  clockId: {
                    type: "uint32",
                    id: 1
                  },
                  timestamp: {
                    type: "uint64",
                    id: 2
                  },
                  isIncremental: {
                    type: "bool",
                    id: 3
                  },
                  unitMultiplierNs: {
                    type: "uint64",
                    id: 4
                  }
                },
                nested: {
                  BuiltinClocks: {
                    values: {
                      UNKNOWN: 0,
                      REALTIME: 1,
                      REALTIME_COARSE: 2,
                      MONOTONIC: 3,
                      MONOTONIC_COARSE: 4,
                      MONOTONIC_RAW: 5,
                      BOOTTIME: 6,
                      BUILTIN_CLOCK_MAX_ID: 63
                    },
                    reserved: [
                      [
                        7,
                        7
                      ],
                      [
                        8,
                        8
                      ]
                    ]
                  }
                }
              }
            }
          },
          EtwTraceEventBundle: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              event: {
                rule: "repeated",
                type: "EtwTraceEvent",
                id: 2
              }
            }
          },
          EtwTraceEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "cSwitch",
                  "readyThread"
                ]
              }
            },
            fields: {
              timestamp: {
                type: "uint64",
                id: 1
              },
              cpu: {
                type: "uint32",
                id: 4
              },
              cSwitch: {
                type: "CSwitchEtwEvent",
                id: 2
              },
              readyThread: {
                type: "ReadyThreadEtwEvent",
                id: 3
              }
            }
          },
          CSwitchEtwEvent: {
            edition: "proto2",
            oneofs: {
              oldThreadWaitReasonEnumOrInt: {
                oneof: [
                  "oldThreadWaitReason",
                  "oldThreadWaitReasonInt"
                ]
              },
              oldThreadWaitModeEnumOrInt: {
                oneof: [
                  "oldThreadWaitMode",
                  "oldThreadWaitModeInt"
                ]
              },
              oldThreadStateEnumOrInt: {
                oneof: [
                  "oldThreadState",
                  "oldThreadStateInt"
                ]
              }
            },
            fields: {
              newThreadId: {
                type: "uint32",
                id: 1
              },
              oldThreadId: {
                type: "uint32",
                id: 2
              },
              newThreadPriority: {
                type: "sint32",
                id: 3
              },
              oldThreadPriority: {
                type: "sint32",
                id: 4
              },
              previousCState: {
                type: "uint32",
                id: 5
              },
              oldThreadWaitReason: {
                type: "OldThreadWaitReason",
                id: 6
              },
              oldThreadWaitReasonInt: {
                type: "int32",
                id: 11
              },
              oldThreadWaitMode: {
                type: "OldThreadWaitMode",
                id: 7
              },
              oldThreadWaitModeInt: {
                type: "int32",
                id: 12
              },
              oldThreadState: {
                type: "OldThreadState",
                id: 8
              },
              oldThreadStateInt: {
                type: "sint32",
                id: 13
              },
              oldThreadWaitIdealProcessor: {
                type: "sint32",
                id: 9
              },
              newThreadWaitTime: {
                type: "uint32",
                id: 10
              }
            },
            nested: {
              OldThreadWaitReason: {
                values: {
                  EXECUTIVE: 0,
                  FREE_PAGE: 1,
                  PAGE_IN: 2,
                  POOL_ALLOCATION: 3,
                  DELAY_EXECUTION: 4,
                  SUSPEND: 5,
                  USER_REQUEST: 6,
                  WR_EXECUTIVE: 7,
                  WR_FREE_PAGE: 8,
                  WR_PAGE_IN: 9,
                  WR_POOL_ALLOCATION: 10,
                  WR_DELAY_EXECUTION: 11,
                  WR_SUSPENDED: 12,
                  WR_USER_REQUEST: 13,
                  WR_EVENT_PAIR: 14,
                  WR_QUEUE: 15,
                  WR_LPC_RECEIVER: 16,
                  WR_LPC_REPLY: 17,
                  WR_VIRTUAL_MEMORY: 18,
                  WR_PAGE_OUT: 19,
                  WR_RENDEZ_VOUS: 20,
                  WR_KEYED_EVENT: 21,
                  WR_TERMINATED: 22,
                  WR_PROCESS_IN_SWAP: 23,
                  WR_CPU_RATE_CONTROL: 24,
                  WR_CALLOUT_STACK: 25,
                  WR_KERNEL: 26,
                  WR_RESOURCE: 27,
                  WR_PUSH_LOCK: 28,
                  WR_MUTEX: 29,
                  WR_QUANTUM_END: 30,
                  WR_DISPATCH_INT: 31,
                  WR_PREEMPTED: 32,
                  WR_YIELD_EXECUTION: 33,
                  WR_FAST_MUTEX: 34,
                  WR_GUARD_MUTEX: 35,
                  WR_RUNDOWN: 36,
                  MAXIMUM_WAIT_REASON: 37
                }
              },
              OldThreadWaitMode: {
                values: {
                  KERNEL_MODE: 0,
                  USER_MODE: 1
                }
              },
              OldThreadState: {
                values: {
                  INITIALIZED: 0,
                  READY: 1,
                  RUNNING: 2,
                  STANDBY: 3,
                  TERMINATED: 4,
                  WAITING: 5,
                  TRANSITION: 6,
                  DEFERRED_READY: 7
                }
              }
            }
          },
          ReadyThreadEtwEvent: {
            edition: "proto2",
            oneofs: {
              adjustReasonEnumOrInt: {
                oneof: [
                  "adjustReason",
                  "adjustReasonInt"
                ]
              },
              flagEnumOrInt: {
                oneof: [
                  "flag",
                  "flagInt"
                ]
              }
            },
            fields: {
              tThreadId: {
                type: "uint32",
                id: 1
              },
              adjustReason: {
                type: "AdjustReason",
                id: 2
              },
              adjustReasonInt: {
                type: "int32",
                id: 5
              },
              adjustIncrement: {
                type: "sint32",
                id: 3
              },
              flag: {
                type: "TraceFlag",
                id: 4
              },
              flagInt: {
                type: "TraceFlag",
                id: 6
              }
            },
            nested: {
              AdjustReason: {
                values: {
                  IGNORE_THE_INCREMENT: 0,
                  APPLY_INCREMENT: 1,
                  APPLY_INCREMENT_BOOST: 2
                }
              },
              TraceFlag: {
                values: {
                  TRACE_FLAG_UNSPECIFIED: 0,
                  THREAD_READIED: 1,
                  KERNEL_STACK_SWAPPED_OUT: 2,
                  PROCESS_ADDRESS_SWAPPED_OUT: 4
                }
              }
            }
          },
          InodeFileMap: {
            edition: "proto2",
            fields: {
              blockDeviceId: {
                type: "uint64",
                id: 1
              },
              mountPoints: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              entries: {
                rule: "repeated",
                type: "Entry",
                id: 3
              }
            },
            nested: {
              Entry: {
                fields: {
                  inodeNumber: {
                    type: "uint64",
                    id: 1
                  },
                  paths: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  },
                  type: {
                    type: "Type",
                    id: 3
                  }
                },
                nested: {
                  Type: {
                    values: {
                      UNKNOWN: 0,
                      FILE: 1,
                      DIRECTORY: 2
                    }
                  }
                }
              }
            }
          },
          FtraceEventBundle: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              event: {
                rule: "repeated",
                type: "FtraceEvent",
                id: 2
              },
              lostEvents: {
                type: "bool",
                id: 3
              },
              compactSched: {
                type: "CompactSched",
                id: 4
              },
              ftraceClock: {
                type: "FtraceClock",
                id: 5
              },
              ftraceTimestamp: {
                type: "int64",
                id: 6
              },
              bootTimestamp: {
                type: "int64",
                id: 7
              },
              error: {
                rule: "repeated",
                type: "FtraceError",
                id: 8
              },
              lastReadEventTimestamp: {
                type: "uint64",
                id: 9
              },
              previousBundleEndTimestamp: {
                type: "uint64",
                id: 10
              },
              genericEventDescriptors: {
                rule: "repeated",
                type: "GenericEventDescriptor",
                id: 11
              },
              brokenAbiTracePage: {
                type: "bytes",
                id: 512
              }
            },
            nested: {
              CompactSched: {
                fields: {
                  internTable: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                  },
                  switchTimestamp: {
                    rule: "repeated",
                    type: "uint64",
                    id: 1,
                    options: {
                      packed: true
                    }
                  },
                  switchPrevState: {
                    rule: "repeated",
                    type: "int64",
                    id: 2,
                    options: {
                      packed: true
                    }
                  },
                  switchNextPid: {
                    rule: "repeated",
                    type: "int32",
                    id: 3,
                    options: {
                      packed: true
                    }
                  },
                  switchNextPrio: {
                    rule: "repeated",
                    type: "int32",
                    id: 4,
                    options: {
                      packed: true
                    }
                  },
                  switchNextCommIndex: {
                    rule: "repeated",
                    type: "uint32",
                    id: 6,
                    options: {
                      packed: true
                    }
                  },
                  wakingTimestamp: {
                    rule: "repeated",
                    type: "uint64",
                    id: 7,
                    options: {
                      packed: true
                    }
                  },
                  wakingPid: {
                    rule: "repeated",
                    type: "int32",
                    id: 8,
                    options: {
                      packed: true
                    }
                  },
                  wakingTargetCpu: {
                    rule: "repeated",
                    type: "int32",
                    id: 9,
                    options: {
                      packed: true
                    }
                  },
                  wakingPrio: {
                    rule: "repeated",
                    type: "int32",
                    id: 10,
                    options: {
                      packed: true
                    }
                  },
                  wakingCommIndex: {
                    rule: "repeated",
                    type: "uint32",
                    id: 11,
                    options: {
                      packed: true
                    }
                  },
                  wakingCommonFlags: {
                    rule: "repeated",
                    type: "uint32",
                    id: 12,
                    options: {
                      packed: true
                    }
                  }
                }
              },
              FtraceError: {
                fields: {
                  timestamp: {
                    type: "uint64",
                    id: 1
                  },
                  status: {
                    type: "FtraceParseStatus",
                    id: 2
                  }
                }
              },
              GenericEventDescriptor: {
                fields: {
                  fieldId: {
                    type: "int32",
                    id: 1
                  },
                  eventDescriptor: {
                    type: "bytes",
                    id: 2
                  }
                }
              }
            }
          },
          FtraceClock: {
            edition: "proto2",
            values: {
              FTRACE_CLOCK_UNSPECIFIED: 0,
              FTRACE_CLOCK_UNKNOWN: 1,
              FTRACE_CLOCK_GLOBAL: 2,
              FTRACE_CLOCK_LOCAL: 3,
              FTRACE_CLOCK_MONO_RAW: 4
            }
          },
          FtraceEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "print",
                  "schedSwitch",
                  "cpuFrequency",
                  "cpuFrequencyLimits",
                  "cpuIdle",
                  "clockEnable",
                  "clockDisable",
                  "clockSetRate",
                  "schedWakeup",
                  "schedBlockedReason",
                  "schedCpuHotplug",
                  "schedWaking",
                  "ipiEntry",
                  "ipiExit",
                  "ipiRaise",
                  "softirqEntry",
                  "softirqExit",
                  "softirqRaise",
                  "i2cRead",
                  "i2cWrite",
                  "i2cResult",
                  "i2cReply",
                  "smbusRead",
                  "smbusWrite",
                  "smbusResult",
                  "smbusReply",
                  "lowmemoryKill",
                  "irqHandlerEntry",
                  "irqHandlerExit",
                  "syncPt",
                  "syncTimeline",
                  "syncWait",
                  "ext4DaWriteBegin",
                  "ext4DaWriteEnd",
                  "ext4SyncFileEnter",
                  "ext4SyncFileExit",
                  "blockRqIssue",
                  "mmVmscanDirectReclaimBegin",
                  "mmVmscanDirectReclaimEnd",
                  "mmVmscanKswapdWake",
                  "mmVmscanKswapdSleep",
                  "binderTransaction",
                  "binderTransactionReceived",
                  "binderSetPriority",
                  "binderLock",
                  "binderLocked",
                  "binderUnlock",
                  "workqueueActivateWork",
                  "workqueueExecuteEnd",
                  "workqueueExecuteStart",
                  "workqueueQueueWork",
                  "regulatorDisable",
                  "regulatorDisableComplete",
                  "regulatorEnable",
                  "regulatorEnableComplete",
                  "regulatorEnableDelay",
                  "regulatorSetVoltage",
                  "regulatorSetVoltageComplete",
                  "cgroupAttachTask",
                  "cgroupMkdir",
                  "cgroupRemount",
                  "cgroupRmdir",
                  "cgroupTransferTasks",
                  "cgroupDestroyRoot",
                  "cgroupRelease",
                  "cgroupRename",
                  "cgroupSetupRoot",
                  "mdpCmdKickoff",
                  "mdpCommit",
                  "mdpPerfSetOt",
                  "mdpSsppChange",
                  "tracingMarkWrite",
                  "mdpCmdPingpongDone",
                  "mdpCompareBw",
                  "mdpPerfSetPanicLuts",
                  "mdpSsppSet",
                  "mdpCmdReadptrDone",
                  "mdpMisrCrc",
                  "mdpPerfSetQosLuts",
                  "mdpTraceCounter",
                  "mdpCmdReleaseBw",
                  "mdpMixerUpdate",
                  "mdpPerfSetWmLevels",
                  "mdpVideoUnderrunDone",
                  "mdpCmdWaitPingpong",
                  "mdpPerfPrefillCalc",
                  "mdpPerfUpdateBus",
                  "rotatorBwAoAsContext",
                  "mmFilemapAddToPageCache",
                  "mmFilemapDeleteFromPageCache",
                  "mmCompactionBegin",
                  "mmCompactionDeferCompaction",
                  "mmCompactionDeferred",
                  "mmCompactionDeferReset",
                  "mmCompactionEnd",
                  "mmCompactionFinished",
                  "mmCompactionIsolateFreepages",
                  "mmCompactionIsolateMigratepages",
                  "mmCompactionKcompactdSleep",
                  "mmCompactionKcompactdWake",
                  "mmCompactionMigratepages",
                  "mmCompactionSuitable",
                  "mmCompactionTryToCompactPages",
                  "mmCompactionWakeupKcompactd",
                  "suspendResume",
                  "schedWakeupNew",
                  "blockBioBackmerge",
                  "blockBioBounce",
                  "blockBioComplete",
                  "blockBioFrontmerge",
                  "blockBioQueue",
                  "blockBioRemap",
                  "blockDirtyBuffer",
                  "blockGetrq",
                  "blockPlug",
                  "blockRqAbort",
                  "blockRqComplete",
                  "blockRqInsert",
                  "blockRqRemap",
                  "blockRqRequeue",
                  "blockSleeprq",
                  "blockSplit",
                  "blockTouchBuffer",
                  "blockUnplug",
                  "ext4AllocDaBlocks",
                  "ext4AllocateBlocks",
                  "ext4AllocateInode",
                  "ext4BeginOrderedTruncate",
                  "ext4CollapseRange",
                  "ext4DaReleaseSpace",
                  "ext4DaReserveSpace",
                  "ext4DaUpdateReserveSpace",
                  "ext4DaWritePages",
                  "ext4DaWritePagesExtent",
                  "ext4Direct_IOEnter",
                  "ext4Direct_IOExit",
                  "ext4DiscardBlocks",
                  "ext4DiscardPreallocations",
                  "ext4DropInode",
                  "ext4EsCacheExtent",
                  "ext4EsFindDelayedExtentRangeEnter",
                  "ext4EsFindDelayedExtentRangeExit",
                  "ext4EsInsertExtent",
                  "ext4EsLookupExtentEnter",
                  "ext4EsLookupExtentExit",
                  "ext4EsRemoveExtent",
                  "ext4EsShrink",
                  "ext4EsShrinkCount",
                  "ext4EsShrinkScanEnter",
                  "ext4EsShrinkScanExit",
                  "ext4EvictInode",
                  "ext4ExtConvertToInitializedEnter",
                  "ext4ExtConvertToInitializedFastpath",
                  "ext4ExtHandleUnwrittenExtents",
                  "ext4ExtInCache",
                  "ext4ExtLoadExtent",
                  "ext4ExtMapBlocksEnter",
                  "ext4ExtMapBlocksExit",
                  "ext4ExtPutInCache",
                  "ext4ExtRemoveSpace",
                  "ext4ExtRemoveSpaceDone",
                  "ext4ExtRmIdx",
                  "ext4ExtRmLeaf",
                  "ext4ExtShowExtent",
                  "ext4FallocateEnter",
                  "ext4FallocateExit",
                  "ext4FindDelallocRange",
                  "ext4Forget",
                  "ext4FreeBlocks",
                  "ext4FreeInode",
                  "ext4GetImpliedClusterAllocExit",
                  "ext4GetReservedClusterAlloc",
                  "ext4IndMapBlocksEnter",
                  "ext4IndMapBlocksExit",
                  "ext4InsertRange",
                  "ext4Invalidatepage",
                  "ext4JournalStart",
                  "ext4JournalStartReserved",
                  "ext4JournalledInvalidatepage",
                  "ext4JournalledWriteEnd",
                  "ext4LoadInode",
                  "ext4LoadInodeBitmap",
                  "ext4MarkInodeDirty",
                  "ext4MbBitmapLoad",
                  "ext4MbBuddyBitmapLoad",
                  "ext4MbDiscardPreallocations",
                  "ext4MbNewGroupPa",
                  "ext4MbNewInodePa",
                  "ext4MbReleaseGroupPa",
                  "ext4MbReleaseInodePa",
                  "ext4MballocAlloc",
                  "ext4MballocDiscard",
                  "ext4MballocFree",
                  "ext4MballocPrealloc",
                  "ext4OtherInodeUpdateTime",
                  "ext4PunchHole",
                  "ext4ReadBlockBitmapLoad",
                  "ext4Readpage",
                  "ext4Releasepage",
                  "ext4RemoveBlocks",
                  "ext4RequestBlocks",
                  "ext4RequestInode",
                  "ext4SyncFs",
                  "ext4TrimAllFree",
                  "ext4TrimExtent",
                  "ext4TruncateEnter",
                  "ext4TruncateExit",
                  "ext4UnlinkEnter",
                  "ext4UnlinkExit",
                  "ext4WriteBegin",
                  "ext4WriteEnd",
                  "ext4Writepage",
                  "ext4Writepages",
                  "ext4WritepagesResult",
                  "ext4ZeroRange",
                  "taskNewtask",
                  "taskRename",
                  "schedProcessExec",
                  "schedProcessExit",
                  "schedProcessFork",
                  "schedProcessFree",
                  "schedProcessHang",
                  "schedProcessWait",
                  "f2fsDoSubmitBio",
                  "f2fsEvictInode",
                  "f2fsFallocate",
                  "f2fsGetDataBlock",
                  "f2fsGetVictim",
                  "f2fsIget",
                  "f2fsIgetExit",
                  "f2fsNewInode",
                  "f2fsReadpage",
                  "f2fsReserveNewBlock",
                  "f2fsSetPageDirty",
                  "f2fsSubmitWritePage",
                  "f2fsSyncFileEnter",
                  "f2fsSyncFileExit",
                  "f2fsSyncFs",
                  "f2fsTruncate",
                  "f2fsTruncateBlocksEnter",
                  "f2fsTruncateBlocksExit",
                  "f2fsTruncateDataBlocksRange",
                  "f2fsTruncateInodeBlocksEnter",
                  "f2fsTruncateInodeBlocksExit",
                  "f2fsTruncateNode",
                  "f2fsTruncateNodesEnter",
                  "f2fsTruncateNodesExit",
                  "f2fsTruncatePartialNodes",
                  "f2fsUnlinkEnter",
                  "f2fsUnlinkExit",
                  "f2fsVmPageMkwrite",
                  "f2fsWriteBegin",
                  "f2fsWriteCheckpoint",
                  "f2fsWriteEnd",
                  "allocPagesIommuEnd",
                  "allocPagesIommuFail",
                  "allocPagesIommuStart",
                  "allocPagesSysEnd",
                  "allocPagesSysFail",
                  "allocPagesSysStart",
                  "dmaAllocContiguousRetry",
                  "iommuMapRange",
                  "iommuSecPtblMapRangeEnd",
                  "iommuSecPtblMapRangeStart",
                  "ionAllocBufferEnd",
                  "ionAllocBufferFail",
                  "ionAllocBufferFallback",
                  "ionAllocBufferStart",
                  "ionCpAllocRetry",
                  "ionCpSecureBufferEnd",
                  "ionCpSecureBufferStart",
                  "ionPrefetching",
                  "ionSecureCmaAddToPoolEnd",
                  "ionSecureCmaAddToPoolStart",
                  "ionSecureCmaAllocateEnd",
                  "ionSecureCmaAllocateStart",
                  "ionSecureCmaShrinkPoolEnd",
                  "ionSecureCmaShrinkPoolStart",
                  "kfree",
                  "kmalloc",
                  "kmallocNode",
                  "kmemCacheAlloc",
                  "kmemCacheAllocNode",
                  "kmemCacheFree",
                  "migratePagesEnd",
                  "migratePagesStart",
                  "migrateRetry",
                  "mmPageAlloc",
                  "mmPageAllocExtfrag",
                  "mmPageAllocZoneLocked",
                  "mmPageFree",
                  "mmPageFreeBatched",
                  "mmPagePcpuDrain",
                  "rssStat",
                  "ionHeapShrink",
                  "ionHeapGrow",
                  "fenceInit",
                  "fenceDestroy",
                  "fenceEnableSignal",
                  "fenceSignaled",
                  "clkEnable",
                  "clkDisable",
                  "clkSetRate",
                  "binderTransactionAllocBuf",
                  "signalDeliver",
                  "signalGenerate",
                  "oomScoreAdjUpdate",
                  "generic",
                  "mmEventRecord",
                  "sysEnter",
                  "sysExit",
                  "zero",
                  "gpuFrequency",
                  "sdeTracingMarkWrite",
                  "markVictim",
                  "ionStat",
                  "ionBufferCreate",
                  "ionBufferDestroy",
                  "scmCallStart",
                  "scmCallEnd",
                  "gpuMemTotal",
                  "thermalTemperature",
                  "cdevUpdate",
                  "cpuhpExit",
                  "cpuhpMultiEnter",
                  "cpuhpEnter",
                  "cpuhpLatency",
                  "fastrpcDmaStat",
                  "dpuTracingMarkWrite",
                  "g2dTracingMarkWrite",
                  "maliTracingMarkWrite",
                  "dmaHeapStat",
                  "cpuhpPause",
                  "schedPiSetprio",
                  "sdeSdeEvtlog",
                  "sdeSdePerfCalcCrtc",
                  "sdeSdePerfCrtcUpdate",
                  "sdeSdePerfSetQosLuts",
                  "sdeSdePerfUpdateBus",
                  "rssStatThrottled",
                  "netifReceiveSkb",
                  "netDevXmit",
                  "inetSockSetState",
                  "tcpRetransmitSkb",
                  "crosEcSensorhubData",
                  "napiGroReceiveEntry",
                  "napiGroReceiveExit",
                  "kfreeSkb",
                  "kvmAccessFault",
                  "kvmAckIrq",
                  "kvmAgeHva",
                  "kvmAgePage",
                  "kvmArmClearDebug",
                  "kvmArmSetDreg32",
                  "kvmArmSetRegset",
                  "kvmArmSetupDebug",
                  "kvmEntry",
                  "kvmExit",
                  "kvmFpu",
                  "kvmGetTimerMap",
                  "kvmGuestFault",
                  "kvmHandleSysReg",
                  "kvmHvcArm64",
                  "kvmIrqLine",
                  "kvmMmio",
                  "kvmMmioEmulate",
                  "kvmSetGuestDebug",
                  "kvmSetIrq",
                  "kvmSetSpteHva",
                  "kvmSetWayFlush",
                  "kvmSysAccess",
                  "kvmTestAgeHva",
                  "kvmTimerEmulate",
                  "kvmTimerHrtimerExpire",
                  "kvmTimerRestoreState",
                  "kvmTimerSaveState",
                  "kvmTimerUpdateIrq",
                  "kvmToggleCache",
                  "kvmUnmapHvaRange",
                  "kvmUserspaceExit",
                  "kvmVcpuWakeup",
                  "kvmWfxArm64",
                  "trapReg",
                  "vgicUpdateIrqPending",
                  "wakeupSourceActivate",
                  "wakeupSourceDeactivate",
                  "ufshcdCommand",
                  "ufshcdClkGating",
                  "console",
                  "drmVblankEvent",
                  "drmVblankEventDelivered",
                  "drmSchedJob",
                  "drmRunJob",
                  "drmSchedProcessJob",
                  "dmaFenceInit",
                  "dmaFenceEmit",
                  "dmaFenceSignaled",
                  "dmaFenceWaitStart",
                  "dmaFenceWaitEnd",
                  "f2fsIostat",
                  "f2fsIostatLatency",
                  "schedCpuUtilCfs",
                  "v4l2Qbuf",
                  "v4l2Dqbuf",
                  "vb2V4l2BufQueue",
                  "vb2V4l2BufDone",
                  "vb2V4l2Qbuf",
                  "vb2V4l2Dqbuf",
                  "dsiCmdFifoStatus",
                  "dsiRx",
                  "dsiTx",
                  "androidFsDatareadEnd",
                  "androidFsDatareadStart",
                  "androidFsDatawriteEnd",
                  "androidFsDatawriteStart",
                  "androidFsFsyncEnd",
                  "androidFsFsyncStart",
                  "funcgraphEntry",
                  "funcgraphExit",
                  "virtioVideoCmd",
                  "virtioVideoCmdDone",
                  "virtioVideoResourceQueue",
                  "virtioVideoResourceQueueDone",
                  "mmShrinkSlabStart",
                  "mmShrinkSlabEnd",
                  "trustySmc",
                  "trustySmcDone",
                  "trustyStdCall32",
                  "trustyStdCall32Done",
                  "trustyShareMemory",
                  "trustyShareMemoryDone",
                  "trustyReclaimMemory",
                  "trustyReclaimMemoryDone",
                  "trustyIrq",
                  "trustyIpcHandleEvent",
                  "trustyIpcConnect",
                  "trustyIpcConnectEnd",
                  "trustyIpcWrite",
                  "trustyIpcPoll",
                  "trustyIpcRead",
                  "trustyIpcReadEnd",
                  "trustyIpcRx",
                  "trustyEnqueueNop",
                  "cmaAllocStart",
                  "cmaAllocInfo",
                  "lwisTracingMarkWrite",
                  "virtioGpuCmdQueue",
                  "virtioGpuCmdResponse",
                  "maliMali_KCPU_CQS_SET",
                  "maliMali_KCPU_CQS_WAIT_START",
                  "maliMali_KCPU_CQS_WAIT_END",
                  "maliMali_KCPU_FENCE_SIGNAL",
                  "maliMali_KCPU_FENCE_WAIT_START",
                  "maliMali_KCPU_FENCE_WAIT_END",
                  "hypEnter",
                  "hypExit",
                  "hostHcall",
                  "hostSmc",
                  "hostMemAbort",
                  "suspendResumeMinimal",
                  "maliMali_CSF_INTERRUPT_START",
                  "maliMali_CSF_INTERRUPT_END",
                  "samsungTracingMarkWrite",
                  "binderCommand",
                  "binderReturn",
                  "schedSwitchWithCtrs",
                  "gpuWorkPeriod",
                  "rpmStatus",
                  "panelWriteGeneric",
                  "schedMigrateTask",
                  "dpuDsiCmdFifoStatus",
                  "dpuDsiRx",
                  "dpuDsiTx",
                  "f2fsBackgroundGc",
                  "f2fsGcBegin",
                  "f2fsGcEnd",
                  "fastrpcDmaFree",
                  "fastrpcDmaAlloc",
                  "fastrpcDmaUnmap",
                  "fastrpcDmaMap",
                  "googleIccEvent",
                  "googleIrmEvent",
                  "devicePmCallbackStart",
                  "devicePmCallbackEnd",
                  "thermalExynosAcpmBulk",
                  "thermalExynosAcpmHighOverhead",
                  "dcvshFreq",
                  "kgslGpuFrequency",
                  "maliMali_PM_MCU_HCTL_CORES_DOWN_SCALE_NOTIFY_PEND",
                  "maliMali_PM_MCU_HCTL_CORES_NOTIFY_PEND",
                  "maliMali_PM_MCU_HCTL_CORE_INACTIVE_PEND",
                  "maliMali_PM_MCU_HCTL_MCU_ON_RECHECK",
                  "maliMali_PM_MCU_HCTL_SHADERS_CORE_OFF_PEND",
                  "maliMali_PM_MCU_HCTL_SHADERS_PEND_OFF",
                  "maliMali_PM_MCU_HCTL_SHADERS_PEND_ON",
                  "maliMali_PM_MCU_HCTL_SHADERS_READY_OFF",
                  "maliMali_PM_MCU_IN_SLEEP",
                  "maliMali_PM_MCU_OFF",
                  "maliMali_PM_MCU_ON",
                  "maliMali_PM_MCU_ON_CORE_ATTR_UPDATE_PEND",
                  "maliMali_PM_MCU_ON_GLB_REINIT_PEND",
                  "maliMali_PM_MCU_ON_HALT",
                  "maliMali_PM_MCU_ON_HWCNT_DISABLE",
                  "maliMali_PM_MCU_ON_HWCNT_ENABLE",
                  "maliMali_PM_MCU_ON_PEND_HALT",
                  "maliMali_PM_MCU_ON_PEND_SLEEP",
                  "maliMali_PM_MCU_ON_SLEEP_INITIATE",
                  "maliMali_PM_MCU_PEND_OFF",
                  "maliMali_PM_MCU_PEND_ON_RELOAD",
                  "maliMali_PM_MCU_POWER_DOWN",
                  "maliMali_PM_MCU_RESET_WAIT",
                  "bclIrqTrigger",
                  "kgslAdrenoCmdbatchQueued",
                  "kgslAdrenoCmdbatchSubmitted",
                  "kgslAdrenoCmdbatchSync",
                  "kgslAdrenoCmdbatchRetired",
                  "pixelMmKswapdWake",
                  "pixelMmKswapdDone",
                  "schedWakeupTaskAttr",
                  "devfreqFrequency",
                  "kprobeEvent",
                  "paramSetValueCpm",
                  "doSysOpen",
                  "openExec",
                  "blockIoStart",
                  "blockIoDone",
                  "maliGpuPowerState",
                  "dpuDispDpuUnderrun",
                  "dpuDispVblankIrqEnable",
                  "hrtimerStart",
                  "hrtimerCancel",
                  "hrtimerExpireEntry",
                  "hrtimerExpireExit",
                  "timerStart",
                  "timerCancel",
                  "timerExpireEntry",
                  "timerExpireExit",
                  "localTimerEntry",
                  "localTimerExit"
                ]
              }
            },
            fields: {
              timestamp: {
                type: "uint64",
                id: 1
              },
              pid: {
                type: "uint32",
                id: 2
              },
              commonFlags: {
                type: "uint32",
                id: 5
              },
              print: {
                type: "PrintFtraceEvent",
                id: 3
              },
              schedSwitch: {
                type: "SchedSwitchFtraceEvent",
                id: 4
              },
              cpuFrequency: {
                type: "CpuFrequencyFtraceEvent",
                id: 11
              },
              cpuFrequencyLimits: {
                type: "CpuFrequencyLimitsFtraceEvent",
                id: 12
              },
              cpuIdle: {
                type: "CpuIdleFtraceEvent",
                id: 13
              },
              clockEnable: {
                type: "ClockEnableFtraceEvent",
                id: 14
              },
              clockDisable: {
                type: "ClockDisableFtraceEvent",
                id: 15
              },
              clockSetRate: {
                type: "ClockSetRateFtraceEvent",
                id: 16
              },
              schedWakeup: {
                type: "SchedWakeupFtraceEvent",
                id: 17
              },
              schedBlockedReason: {
                type: "SchedBlockedReasonFtraceEvent",
                id: 18
              },
              schedCpuHotplug: {
                type: "SchedCpuHotplugFtraceEvent",
                id: 19
              },
              schedWaking: {
                type: "SchedWakingFtraceEvent",
                id: 20
              },
              ipiEntry: {
                type: "IpiEntryFtraceEvent",
                id: 21
              },
              ipiExit: {
                type: "IpiExitFtraceEvent",
                id: 22
              },
              ipiRaise: {
                type: "IpiRaiseFtraceEvent",
                id: 23
              },
              softirqEntry: {
                type: "SoftirqEntryFtraceEvent",
                id: 24
              },
              softirqExit: {
                type: "SoftirqExitFtraceEvent",
                id: 25
              },
              softirqRaise: {
                type: "SoftirqRaiseFtraceEvent",
                id: 26
              },
              i2cRead: {
                type: "I2cReadFtraceEvent",
                id: 27
              },
              i2cWrite: {
                type: "I2cWriteFtraceEvent",
                id: 28
              },
              i2cResult: {
                type: "I2cResultFtraceEvent",
                id: 29
              },
              i2cReply: {
                type: "I2cReplyFtraceEvent",
                id: 30
              },
              smbusRead: {
                type: "SmbusReadFtraceEvent",
                id: 31
              },
              smbusWrite: {
                type: "SmbusWriteFtraceEvent",
                id: 32
              },
              smbusResult: {
                type: "SmbusResultFtraceEvent",
                id: 33
              },
              smbusReply: {
                type: "SmbusReplyFtraceEvent",
                id: 34
              },
              lowmemoryKill: {
                type: "LowmemoryKillFtraceEvent",
                id: 35
              },
              irqHandlerEntry: {
                type: "IrqHandlerEntryFtraceEvent",
                id: 36
              },
              irqHandlerExit: {
                type: "IrqHandlerExitFtraceEvent",
                id: 37
              },
              syncPt: {
                type: "SyncPtFtraceEvent",
                id: 38
              },
              syncTimeline: {
                type: "SyncTimelineFtraceEvent",
                id: 39
              },
              syncWait: {
                type: "SyncWaitFtraceEvent",
                id: 40
              },
              ext4DaWriteBegin: {
                type: "Ext4DaWriteBeginFtraceEvent",
                id: 41
              },
              ext4DaWriteEnd: {
                type: "Ext4DaWriteEndFtraceEvent",
                id: 42
              },
              ext4SyncFileEnter: {
                type: "Ext4SyncFileEnterFtraceEvent",
                id: 43
              },
              ext4SyncFileExit: {
                type: "Ext4SyncFileExitFtraceEvent",
                id: 44
              },
              blockRqIssue: {
                type: "BlockRqIssueFtraceEvent",
                id: 45
              },
              mmVmscanDirectReclaimBegin: {
                type: "MmVmscanDirectReclaimBeginFtraceEvent",
                id: 46
              },
              mmVmscanDirectReclaimEnd: {
                type: "MmVmscanDirectReclaimEndFtraceEvent",
                id: 47
              },
              mmVmscanKswapdWake: {
                type: "MmVmscanKswapdWakeFtraceEvent",
                id: 48
              },
              mmVmscanKswapdSleep: {
                type: "MmVmscanKswapdSleepFtraceEvent",
                id: 49
              },
              binderTransaction: {
                type: "BinderTransactionFtraceEvent",
                id: 50
              },
              binderTransactionReceived: {
                type: "BinderTransactionReceivedFtraceEvent",
                id: 51
              },
              binderSetPriority: {
                type: "BinderSetPriorityFtraceEvent",
                id: 52
              },
              binderLock: {
                type: "BinderLockFtraceEvent",
                id: 53
              },
              binderLocked: {
                type: "BinderLockedFtraceEvent",
                id: 54
              },
              binderUnlock: {
                type: "BinderUnlockFtraceEvent",
                id: 55
              },
              workqueueActivateWork: {
                type: "WorkqueueActivateWorkFtraceEvent",
                id: 56
              },
              workqueueExecuteEnd: {
                type: "WorkqueueExecuteEndFtraceEvent",
                id: 57
              },
              workqueueExecuteStart: {
                type: "WorkqueueExecuteStartFtraceEvent",
                id: 58
              },
              workqueueQueueWork: {
                type: "WorkqueueQueueWorkFtraceEvent",
                id: 59
              },
              regulatorDisable: {
                type: "RegulatorDisableFtraceEvent",
                id: 60
              },
              regulatorDisableComplete: {
                type: "RegulatorDisableCompleteFtraceEvent",
                id: 61
              },
              regulatorEnable: {
                type: "RegulatorEnableFtraceEvent",
                id: 62
              },
              regulatorEnableComplete: {
                type: "RegulatorEnableCompleteFtraceEvent",
                id: 63
              },
              regulatorEnableDelay: {
                type: "RegulatorEnableDelayFtraceEvent",
                id: 64
              },
              regulatorSetVoltage: {
                type: "RegulatorSetVoltageFtraceEvent",
                id: 65
              },
              regulatorSetVoltageComplete: {
                type: "RegulatorSetVoltageCompleteFtraceEvent",
                id: 66
              },
              cgroupAttachTask: {
                type: "CgroupAttachTaskFtraceEvent",
                id: 67
              },
              cgroupMkdir: {
                type: "CgroupMkdirFtraceEvent",
                id: 68
              },
              cgroupRemount: {
                type: "CgroupRemountFtraceEvent",
                id: 69
              },
              cgroupRmdir: {
                type: "CgroupRmdirFtraceEvent",
                id: 70
              },
              cgroupTransferTasks: {
                type: "CgroupTransferTasksFtraceEvent",
                id: 71
              },
              cgroupDestroyRoot: {
                type: "CgroupDestroyRootFtraceEvent",
                id: 72
              },
              cgroupRelease: {
                type: "CgroupReleaseFtraceEvent",
                id: 73
              },
              cgroupRename: {
                type: "CgroupRenameFtraceEvent",
                id: 74
              },
              cgroupSetupRoot: {
                type: "CgroupSetupRootFtraceEvent",
                id: 75
              },
              mdpCmdKickoff: {
                type: "MdpCmdKickoffFtraceEvent",
                id: 76
              },
              mdpCommit: {
                type: "MdpCommitFtraceEvent",
                id: 77
              },
              mdpPerfSetOt: {
                type: "MdpPerfSetOtFtraceEvent",
                id: 78
              },
              mdpSsppChange: {
                type: "MdpSsppChangeFtraceEvent",
                id: 79
              },
              tracingMarkWrite: {
                type: "TracingMarkWriteFtraceEvent",
                id: 80
              },
              mdpCmdPingpongDone: {
                type: "MdpCmdPingpongDoneFtraceEvent",
                id: 81
              },
              mdpCompareBw: {
                type: "MdpCompareBwFtraceEvent",
                id: 82
              },
              mdpPerfSetPanicLuts: {
                type: "MdpPerfSetPanicLutsFtraceEvent",
                id: 83
              },
              mdpSsppSet: {
                type: "MdpSsppSetFtraceEvent",
                id: 84
              },
              mdpCmdReadptrDone: {
                type: "MdpCmdReadptrDoneFtraceEvent",
                id: 85
              },
              mdpMisrCrc: {
                type: "MdpMisrCrcFtraceEvent",
                id: 86
              },
              mdpPerfSetQosLuts: {
                type: "MdpPerfSetQosLutsFtraceEvent",
                id: 87
              },
              mdpTraceCounter: {
                type: "MdpTraceCounterFtraceEvent",
                id: 88
              },
              mdpCmdReleaseBw: {
                type: "MdpCmdReleaseBwFtraceEvent",
                id: 89
              },
              mdpMixerUpdate: {
                type: "MdpMixerUpdateFtraceEvent",
                id: 90
              },
              mdpPerfSetWmLevels: {
                type: "MdpPerfSetWmLevelsFtraceEvent",
                id: 91
              },
              mdpVideoUnderrunDone: {
                type: "MdpVideoUnderrunDoneFtraceEvent",
                id: 92
              },
              mdpCmdWaitPingpong: {
                type: "MdpCmdWaitPingpongFtraceEvent",
                id: 93
              },
              mdpPerfPrefillCalc: {
                type: "MdpPerfPrefillCalcFtraceEvent",
                id: 94
              },
              mdpPerfUpdateBus: {
                type: "MdpPerfUpdateBusFtraceEvent",
                id: 95
              },
              rotatorBwAoAsContext: {
                type: "RotatorBwAoAsContextFtraceEvent",
                id: 96
              },
              mmFilemapAddToPageCache: {
                type: "MmFilemapAddToPageCacheFtraceEvent",
                id: 97
              },
              mmFilemapDeleteFromPageCache: {
                type: "MmFilemapDeleteFromPageCacheFtraceEvent",
                id: 98
              },
              mmCompactionBegin: {
                type: "MmCompactionBeginFtraceEvent",
                id: 99
              },
              mmCompactionDeferCompaction: {
                type: "MmCompactionDeferCompactionFtraceEvent",
                id: 100
              },
              mmCompactionDeferred: {
                type: "MmCompactionDeferredFtraceEvent",
                id: 101
              },
              mmCompactionDeferReset: {
                type: "MmCompactionDeferResetFtraceEvent",
                id: 102
              },
              mmCompactionEnd: {
                type: "MmCompactionEndFtraceEvent",
                id: 103
              },
              mmCompactionFinished: {
                type: "MmCompactionFinishedFtraceEvent",
                id: 104
              },
              mmCompactionIsolateFreepages: {
                type: "MmCompactionIsolateFreepagesFtraceEvent",
                id: 105
              },
              mmCompactionIsolateMigratepages: {
                type: "MmCompactionIsolateMigratepagesFtraceEvent",
                id: 106
              },
              mmCompactionKcompactdSleep: {
                type: "MmCompactionKcompactdSleepFtraceEvent",
                id: 107
              },
              mmCompactionKcompactdWake: {
                type: "MmCompactionKcompactdWakeFtraceEvent",
                id: 108
              },
              mmCompactionMigratepages: {
                type: "MmCompactionMigratepagesFtraceEvent",
                id: 109
              },
              mmCompactionSuitable: {
                type: "MmCompactionSuitableFtraceEvent",
                id: 110
              },
              mmCompactionTryToCompactPages: {
                type: "MmCompactionTryToCompactPagesFtraceEvent",
                id: 111
              },
              mmCompactionWakeupKcompactd: {
                type: "MmCompactionWakeupKcompactdFtraceEvent",
                id: 112
              },
              suspendResume: {
                type: "SuspendResumeFtraceEvent",
                id: 113
              },
              schedWakeupNew: {
                type: "SchedWakeupNewFtraceEvent",
                id: 114
              },
              blockBioBackmerge: {
                type: "BlockBioBackmergeFtraceEvent",
                id: 115
              },
              blockBioBounce: {
                type: "BlockBioBounceFtraceEvent",
                id: 116
              },
              blockBioComplete: {
                type: "BlockBioCompleteFtraceEvent",
                id: 117
              },
              blockBioFrontmerge: {
                type: "BlockBioFrontmergeFtraceEvent",
                id: 118
              },
              blockBioQueue: {
                type: "BlockBioQueueFtraceEvent",
                id: 119
              },
              blockBioRemap: {
                type: "BlockBioRemapFtraceEvent",
                id: 120
              },
              blockDirtyBuffer: {
                type: "BlockDirtyBufferFtraceEvent",
                id: 121
              },
              blockGetrq: {
                type: "BlockGetrqFtraceEvent",
                id: 122
              },
              blockPlug: {
                type: "BlockPlugFtraceEvent",
                id: 123
              },
              blockRqAbort: {
                type: "BlockRqAbortFtraceEvent",
                id: 124
              },
              blockRqComplete: {
                type: "BlockRqCompleteFtraceEvent",
                id: 125
              },
              blockRqInsert: {
                type: "BlockRqInsertFtraceEvent",
                id: 126
              },
              blockRqRemap: {
                type: "BlockRqRemapFtraceEvent",
                id: 128
              },
              blockRqRequeue: {
                type: "BlockRqRequeueFtraceEvent",
                id: 129
              },
              blockSleeprq: {
                type: "BlockSleeprqFtraceEvent",
                id: 130
              },
              blockSplit: {
                type: "BlockSplitFtraceEvent",
                id: 131
              },
              blockTouchBuffer: {
                type: "BlockTouchBufferFtraceEvent",
                id: 132
              },
              blockUnplug: {
                type: "BlockUnplugFtraceEvent",
                id: 133
              },
              ext4AllocDaBlocks: {
                type: "Ext4AllocDaBlocksFtraceEvent",
                id: 134
              },
              ext4AllocateBlocks: {
                type: "Ext4AllocateBlocksFtraceEvent",
                id: 135
              },
              ext4AllocateInode: {
                type: "Ext4AllocateInodeFtraceEvent",
                id: 136
              },
              ext4BeginOrderedTruncate: {
                type: "Ext4BeginOrderedTruncateFtraceEvent",
                id: 137
              },
              ext4CollapseRange: {
                type: "Ext4CollapseRangeFtraceEvent",
                id: 138
              },
              ext4DaReleaseSpace: {
                type: "Ext4DaReleaseSpaceFtraceEvent",
                id: 139
              },
              ext4DaReserveSpace: {
                type: "Ext4DaReserveSpaceFtraceEvent",
                id: 140
              },
              ext4DaUpdateReserveSpace: {
                type: "Ext4DaUpdateReserveSpaceFtraceEvent",
                id: 141
              },
              ext4DaWritePages: {
                type: "Ext4DaWritePagesFtraceEvent",
                id: 142
              },
              ext4DaWritePagesExtent: {
                type: "Ext4DaWritePagesExtentFtraceEvent",
                id: 143
              },
              ext4Direct_IOEnter: {
                type: "Ext4DirectIOEnterFtraceEvent",
                id: 144
              },
              ext4Direct_IOExit: {
                type: "Ext4DirectIOExitFtraceEvent",
                id: 145
              },
              ext4DiscardBlocks: {
                type: "Ext4DiscardBlocksFtraceEvent",
                id: 146
              },
              ext4DiscardPreallocations: {
                type: "Ext4DiscardPreallocationsFtraceEvent",
                id: 147
              },
              ext4DropInode: {
                type: "Ext4DropInodeFtraceEvent",
                id: 148
              },
              ext4EsCacheExtent: {
                type: "Ext4EsCacheExtentFtraceEvent",
                id: 149
              },
              ext4EsFindDelayedExtentRangeEnter: {
                type: "Ext4EsFindDelayedExtentRangeEnterFtraceEvent",
                id: 150
              },
              ext4EsFindDelayedExtentRangeExit: {
                type: "Ext4EsFindDelayedExtentRangeExitFtraceEvent",
                id: 151
              },
              ext4EsInsertExtent: {
                type: "Ext4EsInsertExtentFtraceEvent",
                id: 152
              },
              ext4EsLookupExtentEnter: {
                type: "Ext4EsLookupExtentEnterFtraceEvent",
                id: 153
              },
              ext4EsLookupExtentExit: {
                type: "Ext4EsLookupExtentExitFtraceEvent",
                id: 154
              },
              ext4EsRemoveExtent: {
                type: "Ext4EsRemoveExtentFtraceEvent",
                id: 155
              },
              ext4EsShrink: {
                type: "Ext4EsShrinkFtraceEvent",
                id: 156
              },
              ext4EsShrinkCount: {
                type: "Ext4EsShrinkCountFtraceEvent",
                id: 157
              },
              ext4EsShrinkScanEnter: {
                type: "Ext4EsShrinkScanEnterFtraceEvent",
                id: 158
              },
              ext4EsShrinkScanExit: {
                type: "Ext4EsShrinkScanExitFtraceEvent",
                id: 159
              },
              ext4EvictInode: {
                type: "Ext4EvictInodeFtraceEvent",
                id: 160
              },
              ext4ExtConvertToInitializedEnter: {
                type: "Ext4ExtConvertToInitializedEnterFtraceEvent",
                id: 161
              },
              ext4ExtConvertToInitializedFastpath: {
                type: "Ext4ExtConvertToInitializedFastpathFtraceEvent",
                id: 162
              },
              ext4ExtHandleUnwrittenExtents: {
                type: "Ext4ExtHandleUnwrittenExtentsFtraceEvent",
                id: 163
              },
              ext4ExtInCache: {
                type: "Ext4ExtInCacheFtraceEvent",
                id: 164
              },
              ext4ExtLoadExtent: {
                type: "Ext4ExtLoadExtentFtraceEvent",
                id: 165
              },
              ext4ExtMapBlocksEnter: {
                type: "Ext4ExtMapBlocksEnterFtraceEvent",
                id: 166
              },
              ext4ExtMapBlocksExit: {
                type: "Ext4ExtMapBlocksExitFtraceEvent",
                id: 167
              },
              ext4ExtPutInCache: {
                type: "Ext4ExtPutInCacheFtraceEvent",
                id: 168
              },
              ext4ExtRemoveSpace: {
                type: "Ext4ExtRemoveSpaceFtraceEvent",
                id: 169
              },
              ext4ExtRemoveSpaceDone: {
                type: "Ext4ExtRemoveSpaceDoneFtraceEvent",
                id: 170
              },
              ext4ExtRmIdx: {
                type: "Ext4ExtRmIdxFtraceEvent",
                id: 171
              },
              ext4ExtRmLeaf: {
                type: "Ext4ExtRmLeafFtraceEvent",
                id: 172
              },
              ext4ExtShowExtent: {
                type: "Ext4ExtShowExtentFtraceEvent",
                id: 173
              },
              ext4FallocateEnter: {
                type: "Ext4FallocateEnterFtraceEvent",
                id: 174
              },
              ext4FallocateExit: {
                type: "Ext4FallocateExitFtraceEvent",
                id: 175
              },
              ext4FindDelallocRange: {
                type: "Ext4FindDelallocRangeFtraceEvent",
                id: 176
              },
              ext4Forget: {
                type: "Ext4ForgetFtraceEvent",
                id: 177
              },
              ext4FreeBlocks: {
                type: "Ext4FreeBlocksFtraceEvent",
                id: 178
              },
              ext4FreeInode: {
                type: "Ext4FreeInodeFtraceEvent",
                id: 179
              },
              ext4GetImpliedClusterAllocExit: {
                type: "Ext4GetImpliedClusterAllocExitFtraceEvent",
                id: 180
              },
              ext4GetReservedClusterAlloc: {
                type: "Ext4GetReservedClusterAllocFtraceEvent",
                id: 181
              },
              ext4IndMapBlocksEnter: {
                type: "Ext4IndMapBlocksEnterFtraceEvent",
                id: 182
              },
              ext4IndMapBlocksExit: {
                type: "Ext4IndMapBlocksExitFtraceEvent",
                id: 183
              },
              ext4InsertRange: {
                type: "Ext4InsertRangeFtraceEvent",
                id: 184
              },
              ext4Invalidatepage: {
                type: "Ext4InvalidatepageFtraceEvent",
                id: 185
              },
              ext4JournalStart: {
                type: "Ext4JournalStartFtraceEvent",
                id: 186
              },
              ext4JournalStartReserved: {
                type: "Ext4JournalStartReservedFtraceEvent",
                id: 187
              },
              ext4JournalledInvalidatepage: {
                type: "Ext4JournalledInvalidatepageFtraceEvent",
                id: 188
              },
              ext4JournalledWriteEnd: {
                type: "Ext4JournalledWriteEndFtraceEvent",
                id: 189
              },
              ext4LoadInode: {
                type: "Ext4LoadInodeFtraceEvent",
                id: 190
              },
              ext4LoadInodeBitmap: {
                type: "Ext4LoadInodeBitmapFtraceEvent",
                id: 191
              },
              ext4MarkInodeDirty: {
                type: "Ext4MarkInodeDirtyFtraceEvent",
                id: 192
              },
              ext4MbBitmapLoad: {
                type: "Ext4MbBitmapLoadFtraceEvent",
                id: 193
              },
              ext4MbBuddyBitmapLoad: {
                type: "Ext4MbBuddyBitmapLoadFtraceEvent",
                id: 194
              },
              ext4MbDiscardPreallocations: {
                type: "Ext4MbDiscardPreallocationsFtraceEvent",
                id: 195
              },
              ext4MbNewGroupPa: {
                type: "Ext4MbNewGroupPaFtraceEvent",
                id: 196
              },
              ext4MbNewInodePa: {
                type: "Ext4MbNewInodePaFtraceEvent",
                id: 197
              },
              ext4MbReleaseGroupPa: {
                type: "Ext4MbReleaseGroupPaFtraceEvent",
                id: 198
              },
              ext4MbReleaseInodePa: {
                type: "Ext4MbReleaseInodePaFtraceEvent",
                id: 199
              },
              ext4MballocAlloc: {
                type: "Ext4MballocAllocFtraceEvent",
                id: 200
              },
              ext4MballocDiscard: {
                type: "Ext4MballocDiscardFtraceEvent",
                id: 201
              },
              ext4MballocFree: {
                type: "Ext4MballocFreeFtraceEvent",
                id: 202
              },
              ext4MballocPrealloc: {
                type: "Ext4MballocPreallocFtraceEvent",
                id: 203
              },
              ext4OtherInodeUpdateTime: {
                type: "Ext4OtherInodeUpdateTimeFtraceEvent",
                id: 204
              },
              ext4PunchHole: {
                type: "Ext4PunchHoleFtraceEvent",
                id: 205
              },
              ext4ReadBlockBitmapLoad: {
                type: "Ext4ReadBlockBitmapLoadFtraceEvent",
                id: 206
              },
              ext4Readpage: {
                type: "Ext4ReadpageFtraceEvent",
                id: 207
              },
              ext4Releasepage: {
                type: "Ext4ReleasepageFtraceEvent",
                id: 208
              },
              ext4RemoveBlocks: {
                type: "Ext4RemoveBlocksFtraceEvent",
                id: 209
              },
              ext4RequestBlocks: {
                type: "Ext4RequestBlocksFtraceEvent",
                id: 210
              },
              ext4RequestInode: {
                type: "Ext4RequestInodeFtraceEvent",
                id: 211
              },
              ext4SyncFs: {
                type: "Ext4SyncFsFtraceEvent",
                id: 212
              },
              ext4TrimAllFree: {
                type: "Ext4TrimAllFreeFtraceEvent",
                id: 213
              },
              ext4TrimExtent: {
                type: "Ext4TrimExtentFtraceEvent",
                id: 214
              },
              ext4TruncateEnter: {
                type: "Ext4TruncateEnterFtraceEvent",
                id: 215
              },
              ext4TruncateExit: {
                type: "Ext4TruncateExitFtraceEvent",
                id: 216
              },
              ext4UnlinkEnter: {
                type: "Ext4UnlinkEnterFtraceEvent",
                id: 217
              },
              ext4UnlinkExit: {
                type: "Ext4UnlinkExitFtraceEvent",
                id: 218
              },
              ext4WriteBegin: {
                type: "Ext4WriteBeginFtraceEvent",
                id: 219
              },
              ext4WriteEnd: {
                type: "Ext4WriteEndFtraceEvent",
                id: 230
              },
              ext4Writepage: {
                type: "Ext4WritepageFtraceEvent",
                id: 231
              },
              ext4Writepages: {
                type: "Ext4WritepagesFtraceEvent",
                id: 232
              },
              ext4WritepagesResult: {
                type: "Ext4WritepagesResultFtraceEvent",
                id: 233
              },
              ext4ZeroRange: {
                type: "Ext4ZeroRangeFtraceEvent",
                id: 234
              },
              taskNewtask: {
                type: "TaskNewtaskFtraceEvent",
                id: 235
              },
              taskRename: {
                type: "TaskRenameFtraceEvent",
                id: 236
              },
              schedProcessExec: {
                type: "SchedProcessExecFtraceEvent",
                id: 237
              },
              schedProcessExit: {
                type: "SchedProcessExitFtraceEvent",
                id: 238
              },
              schedProcessFork: {
                type: "SchedProcessForkFtraceEvent",
                id: 239
              },
              schedProcessFree: {
                type: "SchedProcessFreeFtraceEvent",
                id: 240
              },
              schedProcessHang: {
                type: "SchedProcessHangFtraceEvent",
                id: 241
              },
              schedProcessWait: {
                type: "SchedProcessWaitFtraceEvent",
                id: 242
              },
              f2fsDoSubmitBio: {
                type: "F2fsDoSubmitBioFtraceEvent",
                id: 243
              },
              f2fsEvictInode: {
                type: "F2fsEvictInodeFtraceEvent",
                id: 244
              },
              f2fsFallocate: {
                type: "F2fsFallocateFtraceEvent",
                id: 245
              },
              f2fsGetDataBlock: {
                type: "F2fsGetDataBlockFtraceEvent",
                id: 246
              },
              f2fsGetVictim: {
                type: "F2fsGetVictimFtraceEvent",
                id: 247
              },
              f2fsIget: {
                type: "F2fsIgetFtraceEvent",
                id: 248
              },
              f2fsIgetExit: {
                type: "F2fsIgetExitFtraceEvent",
                id: 249
              },
              f2fsNewInode: {
                type: "F2fsNewInodeFtraceEvent",
                id: 250
              },
              f2fsReadpage: {
                type: "F2fsReadpageFtraceEvent",
                id: 251
              },
              f2fsReserveNewBlock: {
                type: "F2fsReserveNewBlockFtraceEvent",
                id: 252
              },
              f2fsSetPageDirty: {
                type: "F2fsSetPageDirtyFtraceEvent",
                id: 253
              },
              f2fsSubmitWritePage: {
                type: "F2fsSubmitWritePageFtraceEvent",
                id: 254
              },
              f2fsSyncFileEnter: {
                type: "F2fsSyncFileEnterFtraceEvent",
                id: 255
              },
              f2fsSyncFileExit: {
                type: "F2fsSyncFileExitFtraceEvent",
                id: 256
              },
              f2fsSyncFs: {
                type: "F2fsSyncFsFtraceEvent",
                id: 257
              },
              f2fsTruncate: {
                type: "F2fsTruncateFtraceEvent",
                id: 258
              },
              f2fsTruncateBlocksEnter: {
                type: "F2fsTruncateBlocksEnterFtraceEvent",
                id: 259
              },
              f2fsTruncateBlocksExit: {
                type: "F2fsTruncateBlocksExitFtraceEvent",
                id: 260
              },
              f2fsTruncateDataBlocksRange: {
                type: "F2fsTruncateDataBlocksRangeFtraceEvent",
                id: 261
              },
              f2fsTruncateInodeBlocksEnter: {
                type: "F2fsTruncateInodeBlocksEnterFtraceEvent",
                id: 262
              },
              f2fsTruncateInodeBlocksExit: {
                type: "F2fsTruncateInodeBlocksExitFtraceEvent",
                id: 263
              },
              f2fsTruncateNode: {
                type: "F2fsTruncateNodeFtraceEvent",
                id: 264
              },
              f2fsTruncateNodesEnter: {
                type: "F2fsTruncateNodesEnterFtraceEvent",
                id: 265
              },
              f2fsTruncateNodesExit: {
                type: "F2fsTruncateNodesExitFtraceEvent",
                id: 266
              },
              f2fsTruncatePartialNodes: {
                type: "F2fsTruncatePartialNodesFtraceEvent",
                id: 267
              },
              f2fsUnlinkEnter: {
                type: "F2fsUnlinkEnterFtraceEvent",
                id: 268
              },
              f2fsUnlinkExit: {
                type: "F2fsUnlinkExitFtraceEvent",
                id: 269
              },
              f2fsVmPageMkwrite: {
                type: "F2fsVmPageMkwriteFtraceEvent",
                id: 270
              },
              f2fsWriteBegin: {
                type: "F2fsWriteBeginFtraceEvent",
                id: 271
              },
              f2fsWriteCheckpoint: {
                type: "F2fsWriteCheckpointFtraceEvent",
                id: 272
              },
              f2fsWriteEnd: {
                type: "F2fsWriteEndFtraceEvent",
                id: 273
              },
              allocPagesIommuEnd: {
                type: "AllocPagesIommuEndFtraceEvent",
                id: 274
              },
              allocPagesIommuFail: {
                type: "AllocPagesIommuFailFtraceEvent",
                id: 275
              },
              allocPagesIommuStart: {
                type: "AllocPagesIommuStartFtraceEvent",
                id: 276
              },
              allocPagesSysEnd: {
                type: "AllocPagesSysEndFtraceEvent",
                id: 277
              },
              allocPagesSysFail: {
                type: "AllocPagesSysFailFtraceEvent",
                id: 278
              },
              allocPagesSysStart: {
                type: "AllocPagesSysStartFtraceEvent",
                id: 279
              },
              dmaAllocContiguousRetry: {
                type: "DmaAllocContiguousRetryFtraceEvent",
                id: 280
              },
              iommuMapRange: {
                type: "IommuMapRangeFtraceEvent",
                id: 281
              },
              iommuSecPtblMapRangeEnd: {
                type: "IommuSecPtblMapRangeEndFtraceEvent",
                id: 282
              },
              iommuSecPtblMapRangeStart: {
                type: "IommuSecPtblMapRangeStartFtraceEvent",
                id: 283
              },
              ionAllocBufferEnd: {
                type: "IonAllocBufferEndFtraceEvent",
                id: 284
              },
              ionAllocBufferFail: {
                type: "IonAllocBufferFailFtraceEvent",
                id: 285
              },
              ionAllocBufferFallback: {
                type: "IonAllocBufferFallbackFtraceEvent",
                id: 286
              },
              ionAllocBufferStart: {
                type: "IonAllocBufferStartFtraceEvent",
                id: 287
              },
              ionCpAllocRetry: {
                type: "IonCpAllocRetryFtraceEvent",
                id: 288
              },
              ionCpSecureBufferEnd: {
                type: "IonCpSecureBufferEndFtraceEvent",
                id: 289
              },
              ionCpSecureBufferStart: {
                type: "IonCpSecureBufferStartFtraceEvent",
                id: 290
              },
              ionPrefetching: {
                type: "IonPrefetchingFtraceEvent",
                id: 291
              },
              ionSecureCmaAddToPoolEnd: {
                type: "IonSecureCmaAddToPoolEndFtraceEvent",
                id: 292
              },
              ionSecureCmaAddToPoolStart: {
                type: "IonSecureCmaAddToPoolStartFtraceEvent",
                id: 293
              },
              ionSecureCmaAllocateEnd: {
                type: "IonSecureCmaAllocateEndFtraceEvent",
                id: 294
              },
              ionSecureCmaAllocateStart: {
                type: "IonSecureCmaAllocateStartFtraceEvent",
                id: 295
              },
              ionSecureCmaShrinkPoolEnd: {
                type: "IonSecureCmaShrinkPoolEndFtraceEvent",
                id: 296
              },
              ionSecureCmaShrinkPoolStart: {
                type: "IonSecureCmaShrinkPoolStartFtraceEvent",
                id: 297
              },
              kfree: {
                type: "KfreeFtraceEvent",
                id: 298
              },
              kmalloc: {
                type: "KmallocFtraceEvent",
                id: 299
              },
              kmallocNode: {
                type: "KmallocNodeFtraceEvent",
                id: 300
              },
              kmemCacheAlloc: {
                type: "KmemCacheAllocFtraceEvent",
                id: 301
              },
              kmemCacheAllocNode: {
                type: "KmemCacheAllocNodeFtraceEvent",
                id: 302
              },
              kmemCacheFree: {
                type: "KmemCacheFreeFtraceEvent",
                id: 303
              },
              migratePagesEnd: {
                type: "MigratePagesEndFtraceEvent",
                id: 304
              },
              migratePagesStart: {
                type: "MigratePagesStartFtraceEvent",
                id: 305
              },
              migrateRetry: {
                type: "MigrateRetryFtraceEvent",
                id: 306
              },
              mmPageAlloc: {
                type: "MmPageAllocFtraceEvent",
                id: 307
              },
              mmPageAllocExtfrag: {
                type: "MmPageAllocExtfragFtraceEvent",
                id: 308
              },
              mmPageAllocZoneLocked: {
                type: "MmPageAllocZoneLockedFtraceEvent",
                id: 309
              },
              mmPageFree: {
                type: "MmPageFreeFtraceEvent",
                id: 310
              },
              mmPageFreeBatched: {
                type: "MmPageFreeBatchedFtraceEvent",
                id: 311
              },
              mmPagePcpuDrain: {
                type: "MmPagePcpuDrainFtraceEvent",
                id: 312
              },
              rssStat: {
                type: "RssStatFtraceEvent",
                id: 313
              },
              ionHeapShrink: {
                type: "IonHeapShrinkFtraceEvent",
                id: 314
              },
              ionHeapGrow: {
                type: "IonHeapGrowFtraceEvent",
                id: 315
              },
              fenceInit: {
                type: "FenceInitFtraceEvent",
                id: 316
              },
              fenceDestroy: {
                type: "FenceDestroyFtraceEvent",
                id: 317
              },
              fenceEnableSignal: {
                type: "FenceEnableSignalFtraceEvent",
                id: 318
              },
              fenceSignaled: {
                type: "FenceSignaledFtraceEvent",
                id: 319
              },
              clkEnable: {
                type: "ClkEnableFtraceEvent",
                id: 320
              },
              clkDisable: {
                type: "ClkDisableFtraceEvent",
                id: 321
              },
              clkSetRate: {
                type: "ClkSetRateFtraceEvent",
                id: 322
              },
              binderTransactionAllocBuf: {
                type: "BinderTransactionAllocBufFtraceEvent",
                id: 323
              },
              signalDeliver: {
                type: "SignalDeliverFtraceEvent",
                id: 324
              },
              signalGenerate: {
                type: "SignalGenerateFtraceEvent",
                id: 325
              },
              oomScoreAdjUpdate: {
                type: "OomScoreAdjUpdateFtraceEvent",
                id: 326
              },
              generic: {
                type: "GenericFtraceEvent",
                id: 327
              },
              mmEventRecord: {
                type: "MmEventRecordFtraceEvent",
                id: 328
              },
              sysEnter: {
                type: "SysEnterFtraceEvent",
                id: 329
              },
              sysExit: {
                type: "SysExitFtraceEvent",
                id: 330
              },
              zero: {
                type: "ZeroFtraceEvent",
                id: 331
              },
              gpuFrequency: {
                type: "GpuFrequencyFtraceEvent",
                id: 332
              },
              sdeTracingMarkWrite: {
                type: "SdeTracingMarkWriteFtraceEvent",
                id: 333
              },
              markVictim: {
                type: "MarkVictimFtraceEvent",
                id: 334
              },
              ionStat: {
                type: "IonStatFtraceEvent",
                id: 335
              },
              ionBufferCreate: {
                type: "IonBufferCreateFtraceEvent",
                id: 336
              },
              ionBufferDestroy: {
                type: "IonBufferDestroyFtraceEvent",
                id: 337
              },
              scmCallStart: {
                type: "ScmCallStartFtraceEvent",
                id: 338
              },
              scmCallEnd: {
                type: "ScmCallEndFtraceEvent",
                id: 339
              },
              gpuMemTotal: {
                type: "GpuMemTotalFtraceEvent",
                id: 340
              },
              thermalTemperature: {
                type: "ThermalTemperatureFtraceEvent",
                id: 341
              },
              cdevUpdate: {
                type: "CdevUpdateFtraceEvent",
                id: 342
              },
              cpuhpExit: {
                type: "CpuhpExitFtraceEvent",
                id: 343
              },
              cpuhpMultiEnter: {
                type: "CpuhpMultiEnterFtraceEvent",
                id: 344
              },
              cpuhpEnter: {
                type: "CpuhpEnterFtraceEvent",
                id: 345
              },
              cpuhpLatency: {
                type: "CpuhpLatencyFtraceEvent",
                id: 346
              },
              fastrpcDmaStat: {
                type: "FastrpcDmaStatFtraceEvent",
                id: 347
              },
              dpuTracingMarkWrite: {
                type: "DpuTracingMarkWriteFtraceEvent",
                id: 348
              },
              g2dTracingMarkWrite: {
                type: "G2dTracingMarkWriteFtraceEvent",
                id: 349
              },
              maliTracingMarkWrite: {
                type: "MaliTracingMarkWriteFtraceEvent",
                id: 350
              },
              dmaHeapStat: {
                type: "DmaHeapStatFtraceEvent",
                id: 351
              },
              cpuhpPause: {
                type: "CpuhpPauseFtraceEvent",
                id: 352
              },
              schedPiSetprio: {
                type: "SchedPiSetprioFtraceEvent",
                id: 353
              },
              sdeSdeEvtlog: {
                type: "SdeSdeEvtlogFtraceEvent",
                id: 354
              },
              sdeSdePerfCalcCrtc: {
                type: "SdeSdePerfCalcCrtcFtraceEvent",
                id: 355
              },
              sdeSdePerfCrtcUpdate: {
                type: "SdeSdePerfCrtcUpdateFtraceEvent",
                id: 356
              },
              sdeSdePerfSetQosLuts: {
                type: "SdeSdePerfSetQosLutsFtraceEvent",
                id: 357
              },
              sdeSdePerfUpdateBus: {
                type: "SdeSdePerfUpdateBusFtraceEvent",
                id: 358
              },
              rssStatThrottled: {
                type: "RssStatThrottledFtraceEvent",
                id: 359
              },
              netifReceiveSkb: {
                type: "NetifReceiveSkbFtraceEvent",
                id: 360
              },
              netDevXmit: {
                type: "NetDevXmitFtraceEvent",
                id: 361
              },
              inetSockSetState: {
                type: "InetSockSetStateFtraceEvent",
                id: 362
              },
              tcpRetransmitSkb: {
                type: "TcpRetransmitSkbFtraceEvent",
                id: 363
              },
              crosEcSensorhubData: {
                type: "CrosEcSensorhubDataFtraceEvent",
                id: 364
              },
              napiGroReceiveEntry: {
                type: "NapiGroReceiveEntryFtraceEvent",
                id: 365
              },
              napiGroReceiveExit: {
                type: "NapiGroReceiveExitFtraceEvent",
                id: 366
              },
              kfreeSkb: {
                type: "KfreeSkbFtraceEvent",
                id: 367
              },
              kvmAccessFault: {
                type: "KvmAccessFaultFtraceEvent",
                id: 368
              },
              kvmAckIrq: {
                type: "KvmAckIrqFtraceEvent",
                id: 369
              },
              kvmAgeHva: {
                type: "KvmAgeHvaFtraceEvent",
                id: 370
              },
              kvmAgePage: {
                type: "KvmAgePageFtraceEvent",
                id: 371
              },
              kvmArmClearDebug: {
                type: "KvmArmClearDebugFtraceEvent",
                id: 372
              },
              kvmArmSetDreg32: {
                type: "KvmArmSetDreg32FtraceEvent",
                id: 373
              },
              kvmArmSetRegset: {
                type: "KvmArmSetRegsetFtraceEvent",
                id: 374
              },
              kvmArmSetupDebug: {
                type: "KvmArmSetupDebugFtraceEvent",
                id: 375
              },
              kvmEntry: {
                type: "KvmEntryFtraceEvent",
                id: 376
              },
              kvmExit: {
                type: "KvmExitFtraceEvent",
                id: 377
              },
              kvmFpu: {
                type: "KvmFpuFtraceEvent",
                id: 378
              },
              kvmGetTimerMap: {
                type: "KvmGetTimerMapFtraceEvent",
                id: 379
              },
              kvmGuestFault: {
                type: "KvmGuestFaultFtraceEvent",
                id: 380
              },
              kvmHandleSysReg: {
                type: "KvmHandleSysRegFtraceEvent",
                id: 381
              },
              kvmHvcArm64: {
                type: "KvmHvcArm64FtraceEvent",
                id: 382
              },
              kvmIrqLine: {
                type: "KvmIrqLineFtraceEvent",
                id: 383
              },
              kvmMmio: {
                type: "KvmMmioFtraceEvent",
                id: 384
              },
              kvmMmioEmulate: {
                type: "KvmMmioEmulateFtraceEvent",
                id: 385
              },
              kvmSetGuestDebug: {
                type: "KvmSetGuestDebugFtraceEvent",
                id: 386
              },
              kvmSetIrq: {
                type: "KvmSetIrqFtraceEvent",
                id: 387
              },
              kvmSetSpteHva: {
                type: "KvmSetSpteHvaFtraceEvent",
                id: 388
              },
              kvmSetWayFlush: {
                type: "KvmSetWayFlushFtraceEvent",
                id: 389
              },
              kvmSysAccess: {
                type: "KvmSysAccessFtraceEvent",
                id: 390
              },
              kvmTestAgeHva: {
                type: "KvmTestAgeHvaFtraceEvent",
                id: 391
              },
              kvmTimerEmulate: {
                type: "KvmTimerEmulateFtraceEvent",
                id: 392
              },
              kvmTimerHrtimerExpire: {
                type: "KvmTimerHrtimerExpireFtraceEvent",
                id: 393
              },
              kvmTimerRestoreState: {
                type: "KvmTimerRestoreStateFtraceEvent",
                id: 394
              },
              kvmTimerSaveState: {
                type: "KvmTimerSaveStateFtraceEvent",
                id: 395
              },
              kvmTimerUpdateIrq: {
                type: "KvmTimerUpdateIrqFtraceEvent",
                id: 396
              },
              kvmToggleCache: {
                type: "KvmToggleCacheFtraceEvent",
                id: 397
              },
              kvmUnmapHvaRange: {
                type: "KvmUnmapHvaRangeFtraceEvent",
                id: 398
              },
              kvmUserspaceExit: {
                type: "KvmUserspaceExitFtraceEvent",
                id: 399
              },
              kvmVcpuWakeup: {
                type: "KvmVcpuWakeupFtraceEvent",
                id: 400
              },
              kvmWfxArm64: {
                type: "KvmWfxArm64FtraceEvent",
                id: 401
              },
              trapReg: {
                type: "TrapRegFtraceEvent",
                id: 402
              },
              vgicUpdateIrqPending: {
                type: "VgicUpdateIrqPendingFtraceEvent",
                id: 403
              },
              wakeupSourceActivate: {
                type: "WakeupSourceActivateFtraceEvent",
                id: 404
              },
              wakeupSourceDeactivate: {
                type: "WakeupSourceDeactivateFtraceEvent",
                id: 405
              },
              ufshcdCommand: {
                type: "UfshcdCommandFtraceEvent",
                id: 406
              },
              ufshcdClkGating: {
                type: "UfshcdClkGatingFtraceEvent",
                id: 407
              },
              console: {
                type: "ConsoleFtraceEvent",
                id: 408
              },
              drmVblankEvent: {
                type: "DrmVblankEventFtraceEvent",
                id: 409
              },
              drmVblankEventDelivered: {
                type: "DrmVblankEventDeliveredFtraceEvent",
                id: 410
              },
              drmSchedJob: {
                type: "DrmSchedJobFtraceEvent",
                id: 411
              },
              drmRunJob: {
                type: "DrmRunJobFtraceEvent",
                id: 412
              },
              drmSchedProcessJob: {
                type: "DrmSchedProcessJobFtraceEvent",
                id: 413
              },
              dmaFenceInit: {
                type: "DmaFenceInitFtraceEvent",
                id: 414
              },
              dmaFenceEmit: {
                type: "DmaFenceEmitFtraceEvent",
                id: 415
              },
              dmaFenceSignaled: {
                type: "DmaFenceSignaledFtraceEvent",
                id: 416
              },
              dmaFenceWaitStart: {
                type: "DmaFenceWaitStartFtraceEvent",
                id: 417
              },
              dmaFenceWaitEnd: {
                type: "DmaFenceWaitEndFtraceEvent",
                id: 418
              },
              f2fsIostat: {
                type: "F2fsIostatFtraceEvent",
                id: 419
              },
              f2fsIostatLatency: {
                type: "F2fsIostatLatencyFtraceEvent",
                id: 420
              },
              schedCpuUtilCfs: {
                type: "SchedCpuUtilCfsFtraceEvent",
                id: 421
              },
              v4l2Qbuf: {
                type: "V4l2QbufFtraceEvent",
                id: 422
              },
              v4l2Dqbuf: {
                type: "V4l2DqbufFtraceEvent",
                id: 423
              },
              vb2V4l2BufQueue: {
                type: "Vb2V4l2BufQueueFtraceEvent",
                id: 424
              },
              vb2V4l2BufDone: {
                type: "Vb2V4l2BufDoneFtraceEvent",
                id: 425
              },
              vb2V4l2Qbuf: {
                type: "Vb2V4l2QbufFtraceEvent",
                id: 426
              },
              vb2V4l2Dqbuf: {
                type: "Vb2V4l2DqbufFtraceEvent",
                id: 427
              },
              dsiCmdFifoStatus: {
                type: "DsiCmdFifoStatusFtraceEvent",
                id: 428
              },
              dsiRx: {
                type: "DsiRxFtraceEvent",
                id: 429
              },
              dsiTx: {
                type: "DsiTxFtraceEvent",
                id: 430
              },
              androidFsDatareadEnd: {
                type: "AndroidFsDatareadEndFtraceEvent",
                id: 431
              },
              androidFsDatareadStart: {
                type: "AndroidFsDatareadStartFtraceEvent",
                id: 432
              },
              androidFsDatawriteEnd: {
                type: "AndroidFsDatawriteEndFtraceEvent",
                id: 433
              },
              androidFsDatawriteStart: {
                type: "AndroidFsDatawriteStartFtraceEvent",
                id: 434
              },
              androidFsFsyncEnd: {
                type: "AndroidFsFsyncEndFtraceEvent",
                id: 435
              },
              androidFsFsyncStart: {
                type: "AndroidFsFsyncStartFtraceEvent",
                id: 436
              },
              funcgraphEntry: {
                type: "FuncgraphEntryFtraceEvent",
                id: 437
              },
              funcgraphExit: {
                type: "FuncgraphExitFtraceEvent",
                id: 438
              },
              virtioVideoCmd: {
                type: "VirtioVideoCmdFtraceEvent",
                id: 439
              },
              virtioVideoCmdDone: {
                type: "VirtioVideoCmdDoneFtraceEvent",
                id: 440
              },
              virtioVideoResourceQueue: {
                type: "VirtioVideoResourceQueueFtraceEvent",
                id: 441
              },
              virtioVideoResourceQueueDone: {
                type: "VirtioVideoResourceQueueDoneFtraceEvent",
                id: 442
              },
              mmShrinkSlabStart: {
                type: "MmShrinkSlabStartFtraceEvent",
                id: 443
              },
              mmShrinkSlabEnd: {
                type: "MmShrinkSlabEndFtraceEvent",
                id: 444
              },
              trustySmc: {
                type: "TrustySmcFtraceEvent",
                id: 445
              },
              trustySmcDone: {
                type: "TrustySmcDoneFtraceEvent",
                id: 446
              },
              trustyStdCall32: {
                type: "TrustyStdCall32FtraceEvent",
                id: 447
              },
              trustyStdCall32Done: {
                type: "TrustyStdCall32DoneFtraceEvent",
                id: 448
              },
              trustyShareMemory: {
                type: "TrustyShareMemoryFtraceEvent",
                id: 449
              },
              trustyShareMemoryDone: {
                type: "TrustyShareMemoryDoneFtraceEvent",
                id: 450
              },
              trustyReclaimMemory: {
                type: "TrustyReclaimMemoryFtraceEvent",
                id: 451
              },
              trustyReclaimMemoryDone: {
                type: "TrustyReclaimMemoryDoneFtraceEvent",
                id: 452
              },
              trustyIrq: {
                type: "TrustyIrqFtraceEvent",
                id: 453
              },
              trustyIpcHandleEvent: {
                type: "TrustyIpcHandleEventFtraceEvent",
                id: 454
              },
              trustyIpcConnect: {
                type: "TrustyIpcConnectFtraceEvent",
                id: 455
              },
              trustyIpcConnectEnd: {
                type: "TrustyIpcConnectEndFtraceEvent",
                id: 456
              },
              trustyIpcWrite: {
                type: "TrustyIpcWriteFtraceEvent",
                id: 457
              },
              trustyIpcPoll: {
                type: "TrustyIpcPollFtraceEvent",
                id: 458
              },
              trustyIpcRead: {
                type: "TrustyIpcReadFtraceEvent",
                id: 460
              },
              trustyIpcReadEnd: {
                type: "TrustyIpcReadEndFtraceEvent",
                id: 461
              },
              trustyIpcRx: {
                type: "TrustyIpcRxFtraceEvent",
                id: 462
              },
              trustyEnqueueNop: {
                type: "TrustyEnqueueNopFtraceEvent",
                id: 464
              },
              cmaAllocStart: {
                type: "CmaAllocStartFtraceEvent",
                id: 465
              },
              cmaAllocInfo: {
                type: "CmaAllocInfoFtraceEvent",
                id: 466
              },
              lwisTracingMarkWrite: {
                type: "LwisTracingMarkWriteFtraceEvent",
                id: 467
              },
              virtioGpuCmdQueue: {
                type: "VirtioGpuCmdQueueFtraceEvent",
                id: 468
              },
              virtioGpuCmdResponse: {
                type: "VirtioGpuCmdResponseFtraceEvent",
                id: 469
              },
              maliMali_KCPU_CQS_SET: {
                type: "MaliMaliKCPUCQSSETFtraceEvent",
                id: 470
              },
              maliMali_KCPU_CQS_WAIT_START: {
                type: "MaliMaliKCPUCQSWAITSTARTFtraceEvent",
                id: 471
              },
              maliMali_KCPU_CQS_WAIT_END: {
                type: "MaliMaliKCPUCQSWAITENDFtraceEvent",
                id: 472
              },
              maliMali_KCPU_FENCE_SIGNAL: {
                type: "MaliMaliKCPUFENCESIGNALFtraceEvent",
                id: 473
              },
              maliMali_KCPU_FENCE_WAIT_START: {
                type: "MaliMaliKCPUFENCEWAITSTARTFtraceEvent",
                id: 474
              },
              maliMali_KCPU_FENCE_WAIT_END: {
                type: "MaliMaliKCPUFENCEWAITENDFtraceEvent",
                id: 475
              },
              hypEnter: {
                type: "HypEnterFtraceEvent",
                id: 476
              },
              hypExit: {
                type: "HypExitFtraceEvent",
                id: 477
              },
              hostHcall: {
                type: "HostHcallFtraceEvent",
                id: 478
              },
              hostSmc: {
                type: "HostSmcFtraceEvent",
                id: 479
              },
              hostMemAbort: {
                type: "HostMemAbortFtraceEvent",
                id: 480
              },
              suspendResumeMinimal: {
                type: "SuspendResumeMinimalFtraceEvent",
                id: 481
              },
              maliMali_CSF_INTERRUPT_START: {
                type: "MaliMaliCSFINTERRUPTSTARTFtraceEvent",
                id: 482
              },
              maliMali_CSF_INTERRUPT_END: {
                type: "MaliMaliCSFINTERRUPTENDFtraceEvent",
                id: 483
              },
              samsungTracingMarkWrite: {
                type: "SamsungTracingMarkWriteFtraceEvent",
                id: 484
              },
              binderCommand: {
                type: "BinderCommandFtraceEvent",
                id: 485
              },
              binderReturn: {
                type: "BinderReturnFtraceEvent",
                id: 486
              },
              schedSwitchWithCtrs: {
                type: "SchedSwitchWithCtrsFtraceEvent",
                id: 487
              },
              gpuWorkPeriod: {
                type: "GpuWorkPeriodFtraceEvent",
                id: 488
              },
              rpmStatus: {
                type: "RpmStatusFtraceEvent",
                id: 489
              },
              panelWriteGeneric: {
                type: "PanelWriteGenericFtraceEvent",
                id: 490
              },
              schedMigrateTask: {
                type: "SchedMigrateTaskFtraceEvent",
                id: 491
              },
              dpuDsiCmdFifoStatus: {
                type: "DpuDsiCmdFifoStatusFtraceEvent",
                id: 492
              },
              dpuDsiRx: {
                type: "DpuDsiRxFtraceEvent",
                id: 493
              },
              dpuDsiTx: {
                type: "DpuDsiTxFtraceEvent",
                id: 494
              },
              f2fsBackgroundGc: {
                type: "F2fsBackgroundGcFtraceEvent",
                id: 495
              },
              f2fsGcBegin: {
                type: "F2fsGcBeginFtraceEvent",
                id: 496
              },
              f2fsGcEnd: {
                type: "F2fsGcEndFtraceEvent",
                id: 497
              },
              fastrpcDmaFree: {
                type: "FastrpcDmaFreeFtraceEvent",
                id: 498
              },
              fastrpcDmaAlloc: {
                type: "FastrpcDmaAllocFtraceEvent",
                id: 499
              },
              fastrpcDmaUnmap: {
                type: "FastrpcDmaUnmapFtraceEvent",
                id: 500
              },
              fastrpcDmaMap: {
                type: "FastrpcDmaMapFtraceEvent",
                id: 501
              },
              googleIccEvent: {
                type: "GoogleIccEventFtraceEvent",
                id: 502
              },
              googleIrmEvent: {
                type: "GoogleIrmEventFtraceEvent",
                id: 503
              },
              devicePmCallbackStart: {
                type: "DevicePmCallbackStartFtraceEvent",
                id: 504
              },
              devicePmCallbackEnd: {
                type: "DevicePmCallbackEndFtraceEvent",
                id: 505
              },
              thermalExynosAcpmBulk: {
                type: "ThermalExynosAcpmBulkFtraceEvent",
                id: 506
              },
              thermalExynosAcpmHighOverhead: {
                type: "ThermalExynosAcpmHighOverheadFtraceEvent",
                id: 507
              },
              dcvshFreq: {
                type: "DcvshFreqFtraceEvent",
                id: 508
              },
              kgslGpuFrequency: {
                type: "KgslGpuFrequencyFtraceEvent",
                id: 509
              },
              maliMali_PM_MCU_HCTL_CORES_DOWN_SCALE_NOTIFY_PEND: {
                type: "MaliMaliPMMCUHCTLCORESDOWNSCALENOTIFYPENDFtraceEvent",
                id: 510
              },
              maliMali_PM_MCU_HCTL_CORES_NOTIFY_PEND: {
                type: "MaliMaliPMMCUHCTLCORESNOTIFYPENDFtraceEvent",
                id: 511
              },
              maliMali_PM_MCU_HCTL_CORE_INACTIVE_PEND: {
                type: "MaliMaliPMMCUHCTLCOREINACTIVEPENDFtraceEvent",
                id: 512
              },
              maliMali_PM_MCU_HCTL_MCU_ON_RECHECK: {
                type: "MaliMaliPMMCUHCTLMCUONRECHECKFtraceEvent",
                id: 513
              },
              maliMali_PM_MCU_HCTL_SHADERS_CORE_OFF_PEND: {
                type: "MaliMaliPMMCUHCTLSHADERSCOREOFFPENDFtraceEvent",
                id: 514
              },
              maliMali_PM_MCU_HCTL_SHADERS_PEND_OFF: {
                type: "MaliMaliPMMCUHCTLSHADERSPENDOFFFtraceEvent",
                id: 515
              },
              maliMali_PM_MCU_HCTL_SHADERS_PEND_ON: {
                type: "MaliMaliPMMCUHCTLSHADERSPENDONFtraceEvent",
                id: 516
              },
              maliMali_PM_MCU_HCTL_SHADERS_READY_OFF: {
                type: "MaliMaliPMMCUHCTLSHADERSREADYOFFFtraceEvent",
                id: 517
              },
              maliMali_PM_MCU_IN_SLEEP: {
                type: "MaliMaliPMMCUINSLEEPFtraceEvent",
                id: 518
              },
              maliMali_PM_MCU_OFF: {
                type: "MaliMaliPMMCUOFFFtraceEvent",
                id: 519
              },
              maliMali_PM_MCU_ON: {
                type: "MaliMaliPMMCUONFtraceEvent",
                id: 520
              },
              maliMali_PM_MCU_ON_CORE_ATTR_UPDATE_PEND: {
                type: "MaliMaliPMMCUONCOREATTRUPDATEPENDFtraceEvent",
                id: 521
              },
              maliMali_PM_MCU_ON_GLB_REINIT_PEND: {
                type: "MaliMaliPMMCUONGLBREINITPENDFtraceEvent",
                id: 522
              },
              maliMali_PM_MCU_ON_HALT: {
                type: "MaliMaliPMMCUONHALTFtraceEvent",
                id: 523
              },
              maliMali_PM_MCU_ON_HWCNT_DISABLE: {
                type: "MaliMaliPMMCUONHWCNTDISABLEFtraceEvent",
                id: 524
              },
              maliMali_PM_MCU_ON_HWCNT_ENABLE: {
                type: "MaliMaliPMMCUONHWCNTENABLEFtraceEvent",
                id: 525
              },
              maliMali_PM_MCU_ON_PEND_HALT: {
                type: "MaliMaliPMMCUONPENDHALTFtraceEvent",
                id: 526
              },
              maliMali_PM_MCU_ON_PEND_SLEEP: {
                type: "MaliMaliPMMCUONPENDSLEEPFtraceEvent",
                id: 527
              },
              maliMali_PM_MCU_ON_SLEEP_INITIATE: {
                type: "MaliMaliPMMCUONSLEEPINITIATEFtraceEvent",
                id: 528
              },
              maliMali_PM_MCU_PEND_OFF: {
                type: "MaliMaliPMMCUPENDOFFFtraceEvent",
                id: 529
              },
              maliMali_PM_MCU_PEND_ON_RELOAD: {
                type: "MaliMaliPMMCUPENDONRELOADFtraceEvent",
                id: 530
              },
              maliMali_PM_MCU_POWER_DOWN: {
                type: "MaliMaliPMMCUPOWERDOWNFtraceEvent",
                id: 531
              },
              maliMali_PM_MCU_RESET_WAIT: {
                type: "MaliMaliPMMCURESETWAITFtraceEvent",
                id: 532
              },
              bclIrqTrigger: {
                type: "BclIrqTriggerFtraceEvent",
                id: 533
              },
              kgslAdrenoCmdbatchQueued: {
                type: "KgslAdrenoCmdbatchQueuedFtraceEvent",
                id: 534
              },
              kgslAdrenoCmdbatchSubmitted: {
                type: "KgslAdrenoCmdbatchSubmittedFtraceEvent",
                id: 535
              },
              kgslAdrenoCmdbatchSync: {
                type: "KgslAdrenoCmdbatchSyncFtraceEvent",
                id: 536
              },
              kgslAdrenoCmdbatchRetired: {
                type: "KgslAdrenoCmdbatchRetiredFtraceEvent",
                id: 537
              },
              pixelMmKswapdWake: {
                type: "PixelMmKswapdWakeFtraceEvent",
                id: 538
              },
              pixelMmKswapdDone: {
                type: "PixelMmKswapdDoneFtraceEvent",
                id: 539
              },
              schedWakeupTaskAttr: {
                type: "SchedWakeupTaskAttrFtraceEvent",
                id: 540
              },
              devfreqFrequency: {
                type: "DevfreqFrequencyFtraceEvent",
                id: 541
              },
              kprobeEvent: {
                type: "KprobeEvent",
                id: 542
              },
              paramSetValueCpm: {
                type: "ParamSetValueCpmFtraceEvent",
                id: 543
              },
              doSysOpen: {
                type: "DoSysOpenFtraceEvent",
                id: 544
              },
              openExec: {
                type: "OpenExecFtraceEvent",
                id: 545
              },
              blockIoStart: {
                type: "BlockIoStartFtraceEvent",
                id: 546
              },
              blockIoDone: {
                type: "BlockIoDoneFtraceEvent",
                id: 547
              },
              maliGpuPowerState: {
                type: "MaliGpuPowerStateFtraceEvent",
                id: 548
              },
              dpuDispDpuUnderrun: {
                type: "DpuDispDpuUnderrunFtraceEvent",
                id: 549
              },
              dpuDispVblankIrqEnable: {
                type: "DpuDispVblankIrqEnableFtraceEvent",
                id: 550
              },
              hrtimerStart: {
                type: "HrtimerStartFtraceEvent",
                id: 551
              },
              hrtimerCancel: {
                type: "HrtimerCancelFtraceEvent",
                id: 552
              },
              hrtimerExpireEntry: {
                type: "HrtimerExpireEntryFtraceEvent",
                id: 553
              },
              hrtimerExpireExit: {
                type: "HrtimerExpireExitFtraceEvent",
                id: 554
              },
              timerStart: {
                type: "TimerStartFtraceEvent",
                id: 555
              },
              timerCancel: {
                type: "TimerCancelFtraceEvent",
                id: 556
              },
              timerExpireEntry: {
                type: "TimerExpireEntryFtraceEvent",
                id: 557
              },
              timerExpireExit: {
                type: "TimerExpireExitFtraceEvent",
                id: 558
              },
              localTimerEntry: {
                type: "LocalTimerEntryFtraceEvent",
                id: 559
              },
              localTimerExit: {
                type: "LocalTimerExitFtraceEvent",
                id: 560
              }
            },
            reserved: [
              [
                65536,
                131072
              ]
            ]
          },
          AndroidFsDatareadEndFtraceEvent: {
            edition: "proto2",
            fields: {
              bytes: {
                type: "int32",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              }
            }
          },
          AndroidFsDatareadStartFtraceEvent: {
            edition: "proto2",
            fields: {
              bytes: {
                type: "int32",
                id: 1
              },
              cmdline: {
                type: "string",
                id: 2
              },
              iSize: {
                type: "int64",
                id: 3
              },
              ino: {
                type: "uint64",
                id: 4
              },
              offset: {
                type: "int64",
                id: 5
              },
              pathbuf: {
                type: "string",
                id: 6
              },
              pid: {
                type: "int32",
                id: 7
              }
            }
          },
          AndroidFsDatawriteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              bytes: {
                type: "int32",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              }
            }
          },
          AndroidFsDatawriteStartFtraceEvent: {
            edition: "proto2",
            fields: {
              bytes: {
                type: "int32",
                id: 1
              },
              cmdline: {
                type: "string",
                id: 2
              },
              iSize: {
                type: "int64",
                id: 3
              },
              ino: {
                type: "uint64",
                id: 4
              },
              offset: {
                type: "int64",
                id: 5
              },
              pathbuf: {
                type: "string",
                id: 6
              },
              pid: {
                type: "int32",
                id: 7
              }
            }
          },
          AndroidFsFsyncEndFtraceEvent: {
            edition: "proto2",
            fields: {
              bytes: {
                type: "int32",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              }
            }
          },
          AndroidFsFsyncStartFtraceEvent: {
            edition: "proto2",
            fields: {
              cmdline: {
                type: "string",
                id: 1
              },
              iSize: {
                type: "int64",
                id: 2
              },
              ino: {
                type: "uint64",
                id: 3
              },
              pathbuf: {
                type: "string",
                id: 4
              },
              pid: {
                type: "int32",
                id: 5
              }
            }
          },
          BclIrqTriggerFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              throttle: {
                type: "int32",
                id: 2
              },
              cpu0Limit: {
                type: "int32",
                id: 3
              },
              cpu1Limit: {
                type: "int32",
                id: 4
              },
              cpu2Limit: {
                type: "int32",
                id: 5
              },
              tpuLimit: {
                type: "int32",
                id: 6
              },
              gpuLimit: {
                type: "int32",
                id: 7
              },
              voltage: {
                type: "int32",
                id: 8
              },
              capacity: {
                type: "int32",
                id: 9
              }
            }
          },
          BinderTransactionFtraceEvent: {
            edition: "proto2",
            fields: {
              debugId: {
                type: "int32",
                id: 1
              },
              targetNode: {
                type: "int32",
                id: 2
              },
              toProc: {
                type: "int32",
                id: 3
              },
              toThread: {
                type: "int32",
                id: 4
              },
              reply: {
                type: "int32",
                id: 5
              },
              code: {
                type: "uint32",
                id: 6
              },
              flags: {
                type: "uint32",
                id: 7
              }
            }
          },
          BinderTransactionReceivedFtraceEvent: {
            edition: "proto2",
            fields: {
              debugId: {
                type: "int32",
                id: 1
              }
            }
          },
          BinderSetPriorityFtraceEvent: {
            edition: "proto2",
            fields: {
              proc: {
                type: "int32",
                id: 1
              },
              thread: {
                type: "int32",
                id: 2
              },
              oldPrio: {
                type: "uint32",
                id: 3
              },
              newPrio: {
                type: "uint32",
                id: 4
              },
              desiredPrio: {
                type: "uint32",
                id: 5
              }
            }
          },
          BinderLockFtraceEvent: {
            edition: "proto2",
            fields: {
              tag: {
                type: "string",
                id: 1
              }
            }
          },
          BinderLockedFtraceEvent: {
            edition: "proto2",
            fields: {
              tag: {
                type: "string",
                id: 1
              }
            }
          },
          BinderUnlockFtraceEvent: {
            edition: "proto2",
            fields: {
              tag: {
                type: "string",
                id: 1
              }
            }
          },
          BinderTransactionAllocBufFtraceEvent: {
            edition: "proto2",
            fields: {
              dataSize: {
                type: "uint64",
                id: 1
              },
              debugId: {
                type: "int32",
                id: 2
              },
              offsetsSize: {
                type: "uint64",
                id: 3
              },
              extraBuffersSize: {
                type: "uint64",
                id: 4
              }
            }
          },
          BinderCommandFtraceEvent: {
            edition: "proto2",
            fields: {
              cmd: {
                type: "uint32",
                id: 1
              }
            }
          },
          BinderReturnFtraceEvent: {
            edition: "proto2",
            fields: {
              cmd: {
                type: "uint32",
                id: 1
              }
            }
          },
          BlockRqIssueFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              bytes: {
                type: "uint32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              },
              comm: {
                type: "string",
                id: 6
              },
              cmd: {
                type: "string",
                id: 7
              }
            }
          },
          BlockBioBackmergeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockBioBounceFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockBioCompleteFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              error: {
                type: "int32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              }
            }
          },
          BlockBioFrontmergeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockBioQueueFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockBioRemapFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              oldDev: {
                type: "uint64",
                id: 4
              },
              oldSector: {
                type: "uint64",
                id: 5
              },
              rwbs: {
                type: "string",
                id: 6
              }
            }
          },
          BlockDirtyBufferFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          BlockGetrqFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockPlugFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              }
            }
          },
          BlockRqAbortFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              errors: {
                type: "int32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              },
              cmd: {
                type: "string",
                id: 6
              }
            }
          },
          BlockRqCompleteFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              errors: {
                type: "int32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              },
              cmd: {
                type: "string",
                id: 6
              },
              error: {
                type: "int32",
                id: 7
              }
            }
          },
          BlockRqInsertFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              bytes: {
                type: "uint32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              },
              comm: {
                type: "string",
                id: 6
              },
              cmd: {
                type: "string",
                id: 7
              }
            }
          },
          BlockRqRemapFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              oldDev: {
                type: "uint64",
                id: 4
              },
              oldSector: {
                type: "uint64",
                id: 5
              },
              nrBios: {
                type: "uint32",
                id: 6
              },
              rwbs: {
                type: "string",
                id: 7
              }
            }
          },
          BlockRqRequeueFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              errors: {
                type: "int32",
                id: 4
              },
              rwbs: {
                type: "string",
                id: 5
              },
              cmd: {
                type: "string",
                id: 6
              }
            }
          },
          BlockSleeprqFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockSplitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              newSector: {
                type: "uint64",
                id: 3
              },
              rwbs: {
                type: "string",
                id: 4
              },
              comm: {
                type: "string",
                id: 5
              }
            }
          },
          BlockTouchBufferFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          BlockUnplugFtraceEvent: {
            edition: "proto2",
            fields: {
              nrRq: {
                type: "int32",
                id: 1
              },
              comm: {
                type: "string",
                id: 2
              }
            }
          },
          BlockIoStartFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              bytes: {
                type: "uint32",
                id: 4
              },
              ioprio: {
                type: "uint32",
                id: 5
              },
              rwbs: {
                type: "string",
                id: 6
              },
              comm: {
                type: "string",
                id: 7
              },
              cmd: {
                type: "string",
                id: 8
              }
            }
          },
          BlockIoDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sector: {
                type: "uint64",
                id: 2
              },
              nrSector: {
                type: "uint32",
                id: 3
              },
              bytes: {
                type: "uint32",
                id: 4
              },
              ioprio: {
                type: "uint32",
                id: 5
              },
              rwbs: {
                type: "string",
                id: 6
              },
              comm: {
                type: "string",
                id: 7
              },
              cmd: {
                type: "string",
                id: 8
              }
            }
          },
          CgroupAttachTaskFtraceEvent: {
            edition: "proto2",
            fields: {
              dstRoot: {
                type: "int32",
                id: 1
              },
              dstId: {
                type: "int32",
                id: 2
              },
              pid: {
                type: "int32",
                id: 3
              },
              comm: {
                type: "string",
                id: 4
              },
              cname: {
                type: "string",
                id: 5
              },
              dstLevel: {
                type: "int32",
                id: 6
              },
              dstPath: {
                type: "string",
                id: 7
              }
            }
          },
          CgroupMkdirFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              id: {
                type: "int32",
                id: 2
              },
              cname: {
                type: "string",
                id: 3
              },
              level: {
                type: "int32",
                id: 4
              },
              path: {
                type: "string",
                id: 5
              }
            }
          },
          CgroupRemountFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              ssMask: {
                type: "uint32",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              }
            }
          },
          CgroupRmdirFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              id: {
                type: "int32",
                id: 2
              },
              cname: {
                type: "string",
                id: 3
              },
              level: {
                type: "int32",
                id: 4
              },
              path: {
                type: "string",
                id: 5
              }
            }
          },
          CgroupTransferTasksFtraceEvent: {
            edition: "proto2",
            fields: {
              dstRoot: {
                type: "int32",
                id: 1
              },
              dstId: {
                type: "int32",
                id: 2
              },
              pid: {
                type: "int32",
                id: 3
              },
              comm: {
                type: "string",
                id: 4
              },
              cname: {
                type: "string",
                id: 5
              },
              dstLevel: {
                type: "int32",
                id: 6
              },
              dstPath: {
                type: "string",
                id: 7
              }
            }
          },
          CgroupDestroyRootFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              ssMask: {
                type: "uint32",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              }
            }
          },
          CgroupReleaseFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              id: {
                type: "int32",
                id: 2
              },
              cname: {
                type: "string",
                id: 3
              },
              level: {
                type: "int32",
                id: 4
              },
              path: {
                type: "string",
                id: 5
              }
            }
          },
          CgroupRenameFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              id: {
                type: "int32",
                id: 2
              },
              cname: {
                type: "string",
                id: 3
              },
              level: {
                type: "int32",
                id: 4
              },
              path: {
                type: "string",
                id: 5
              }
            }
          },
          CgroupSetupRootFtraceEvent: {
            edition: "proto2",
            fields: {
              root: {
                type: "int32",
                id: 1
              },
              ssMask: {
                type: "uint32",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              }
            }
          },
          ClkEnableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          ClkDisableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          ClkSetRateFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              rate: {
                type: "uint64",
                id: 2
              }
            }
          },
          CmaAllocStartFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint32",
                id: 1
              },
              count: {
                type: "uint32",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              }
            }
          },
          CmaAllocInfoFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint32",
                id: 1
              },
              count: {
                type: "uint32",
                id: 2
              },
              errIso: {
                type: "uint32",
                id: 3
              },
              errMig: {
                type: "uint32",
                id: 4
              },
              errTest: {
                type: "uint32",
                id: 5
              },
              name: {
                type: "string",
                id: 6
              },
              nrMapped: {
                type: "uint64",
                id: 7
              },
              nrMigrated: {
                type: "uint64",
                id: 8
              },
              nrReclaimed: {
                type: "uint64",
                id: 9
              },
              pfn: {
                type: "uint64",
                id: 10
              }
            }
          },
          MmCompactionBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              zoneStart: {
                type: "uint64",
                id: 1
              },
              migratePfn: {
                type: "uint64",
                id: 2
              },
              freePfn: {
                type: "uint64",
                id: 3
              },
              zoneEnd: {
                type: "uint64",
                id: 4
              },
              sync: {
                type: "uint32",
                id: 5
              }
            }
          },
          MmCompactionDeferCompactionFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              idx: {
                type: "uint32",
                id: 2
              },
              order: {
                type: "int32",
                id: 3
              },
              considered: {
                type: "uint32",
                id: 4
              },
              deferShift: {
                type: "uint32",
                id: 5
              },
              orderFailed: {
                type: "int32",
                id: 6
              }
            }
          },
          MmCompactionDeferredFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              idx: {
                type: "uint32",
                id: 2
              },
              order: {
                type: "int32",
                id: 3
              },
              considered: {
                type: "uint32",
                id: 4
              },
              deferShift: {
                type: "uint32",
                id: 5
              },
              orderFailed: {
                type: "int32",
                id: 6
              }
            }
          },
          MmCompactionDeferResetFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              idx: {
                type: "uint32",
                id: 2
              },
              order: {
                type: "int32",
                id: 3
              },
              considered: {
                type: "uint32",
                id: 4
              },
              deferShift: {
                type: "uint32",
                id: 5
              },
              orderFailed: {
                type: "int32",
                id: 6
              }
            }
          },
          MmCompactionEndFtraceEvent: {
            edition: "proto2",
            fields: {
              zoneStart: {
                type: "uint64",
                id: 1
              },
              migratePfn: {
                type: "uint64",
                id: 2
              },
              freePfn: {
                type: "uint64",
                id: 3
              },
              zoneEnd: {
                type: "uint64",
                id: 4
              },
              sync: {
                type: "uint32",
                id: 5
              },
              status: {
                type: "int32",
                id: 6
              }
            }
          },
          MmCompactionFinishedFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              idx: {
                type: "uint32",
                id: 2
              },
              order: {
                type: "int32",
                id: 3
              },
              ret: {
                type: "int32",
                id: 4
              }
            }
          },
          MmCompactionIsolateFreepagesFtraceEvent: {
            edition: "proto2",
            fields: {
              startPfn: {
                type: "uint64",
                id: 1
              },
              endPfn: {
                type: "uint64",
                id: 2
              },
              nrScanned: {
                type: "uint64",
                id: 3
              },
              nrTaken: {
                type: "uint64",
                id: 4
              }
            }
          },
          MmCompactionIsolateMigratepagesFtraceEvent: {
            edition: "proto2",
            fields: {
              startPfn: {
                type: "uint64",
                id: 1
              },
              endPfn: {
                type: "uint64",
                id: 2
              },
              nrScanned: {
                type: "uint64",
                id: 3
              },
              nrTaken: {
                type: "uint64",
                id: 4
              }
            }
          },
          MmCompactionKcompactdSleepFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              }
            }
          },
          MmCompactionKcompactdWakeFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              order: {
                type: "int32",
                id: 2
              },
              classzoneIdx: {
                type: "uint32",
                id: 3
              },
              highestZoneidx: {
                type: "uint32",
                id: 4
              }
            }
          },
          MmCompactionMigratepagesFtraceEvent: {
            edition: "proto2",
            fields: {
              nrMigrated: {
                type: "uint64",
                id: 1
              },
              nrFailed: {
                type: "uint64",
                id: 2
              }
            }
          },
          MmCompactionSuitableFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              idx: {
                type: "uint32",
                id: 2
              },
              order: {
                type: "int32",
                id: 3
              },
              ret: {
                type: "int32",
                id: 4
              }
            }
          },
          MmCompactionTryToCompactPagesFtraceEvent: {
            edition: "proto2",
            fields: {
              order: {
                type: "int32",
                id: 1
              },
              gfpMask: {
                type: "uint32",
                id: 2
              },
              mode: {
                type: "uint32",
                id: 3
              },
              prio: {
                type: "int32",
                id: 4
              }
            }
          },
          MmCompactionWakeupKcompactdFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              order: {
                type: "int32",
                id: 2
              },
              classzoneIdx: {
                type: "uint32",
                id: 3
              },
              highestZoneidx: {
                type: "uint32",
                id: 4
              }
            }
          },
          ParamSetValueCpmFtraceEvent: {
            edition: "proto2",
            fields: {
              body: {
                type: "string",
                id: 1
              },
              value: {
                type: "uint32",
                id: 2
              },
              timestamp: {
                type: "int64",
                id: 3
              }
            }
          },
          CpuhpExitFtraceEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              idx: {
                type: "int32",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              },
              state: {
                type: "int32",
                id: 4
              }
            }
          },
          CpuhpMultiEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              fun: {
                type: "uint64",
                id: 2
              },
              idx: {
                type: "int32",
                id: 3
              },
              target: {
                type: "int32",
                id: 4
              }
            }
          },
          CpuhpEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              fun: {
                type: "uint64",
                id: 2
              },
              idx: {
                type: "int32",
                id: 3
              },
              target: {
                type: "int32",
                id: 4
              }
            }
          },
          CpuhpLatencyFtraceEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              ret: {
                type: "int32",
                id: 2
              },
              state: {
                type: "uint32",
                id: 3
              },
              time: {
                type: "uint64",
                id: 4
              }
            }
          },
          CpuhpPauseFtraceEvent: {
            edition: "proto2",
            fields: {
              activeCpus: {
                type: "uint32",
                id: 1
              },
              cpus: {
                type: "uint32",
                id: 2
              },
              pause: {
                type: "uint32",
                id: 3
              },
              time: {
                type: "uint32",
                id: 4
              }
            }
          },
          CrosEcSensorhubDataFtraceEvent: {
            edition: "proto2",
            fields: {
              currentTime: {
                type: "int64",
                id: 1
              },
              currentTimestamp: {
                type: "int64",
                id: 2
              },
              delta: {
                type: "int64",
                id: 3
              },
              ecFifoTimestamp: {
                type: "uint32",
                id: 4
              },
              ecSensorNum: {
                type: "uint32",
                id: 5
              },
              fifoTimestamp: {
                type: "int64",
                id: 6
              }
            }
          },
          DcvshFreqFtraceEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint64",
                id: 1
              },
              freq: {
                type: "uint64",
                id: 2
              }
            }
          },
          DevfreqFrequencyFtraceEvent: {
            edition: "proto2",
            fields: {
              devName: {
                type: "string",
                id: 1
              },
              freq: {
                type: "uint64",
                id: 2
              },
              prevFreq: {
                type: "uint64",
                id: 3
              },
              busyTime: {
                type: "uint64",
                id: 4
              },
              totalTime: {
                type: "uint64",
                id: 5
              }
            }
          },
          DmaFenceInitFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          DmaFenceEmitFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          DmaFenceSignaledFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          DmaFenceWaitStartFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          DmaFenceWaitEndFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          DmaHeapStatFtraceEvent: {
            edition: "proto2",
            fields: {
              inode: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "int64",
                id: 2
              },
              totalAllocated: {
                type: "uint64",
                id: 3
              }
            }
          },
          DpuTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              traceName: {
                type: "string",
                id: 2
              },
              traceBegin: {
                type: "uint32",
                id: 3
              },
              name: {
                type: "string",
                id: 4
              },
              type: {
                type: "uint32",
                id: 5
              },
              value: {
                type: "int32",
                id: 6
              }
            }
          },
          DpuDsiCmdFifoStatusFtraceEvent: {
            edition: "proto2",
            fields: {
              header: {
                type: "uint32",
                id: 1
              },
              payload: {
                type: "uint32",
                id: 2
              }
            }
          },
          DpuDsiRxFtraceEvent: {
            edition: "proto2",
            fields: {
              cmd: {
                type: "uint32",
                id: 1
              },
              rxBuf: {
                type: "uint32",
                id: 2
              }
            }
          },
          DpuDsiTxFtraceEvent: {
            edition: "proto2",
            fields: {
              type: {
                type: "uint32",
                id: 1
              },
              txBuf: {
                type: "uint32",
                id: 2
              },
              last: {
                type: "uint32",
                id: 3
              },
              delayMs: {
                type: "uint32",
                id: 4
              }
            }
          },
          DpuDispDpuUnderrunFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              framesPending: {
                type: "int32",
                id: 2
              },
              vsyncCount: {
                type: "int32",
                id: 3
              }
            }
          },
          DpuDispVblankIrqEnableFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              outputId: {
                type: "int32",
                id: 2
              },
              enable: {
                type: "int32",
                id: 3
              }
            }
          },
          DrmVblankEventFtraceEvent: {
            edition: "proto2",
            fields: {
              crtc: {
                type: "int32",
                id: 1
              },
              highPrec: {
                type: "uint32",
                id: 2
              },
              seq: {
                type: "uint32",
                id: 3
              },
              time: {
                type: "int64",
                id: 4
              }
            }
          },
          DrmVblankEventDeliveredFtraceEvent: {
            edition: "proto2",
            fields: {
              crtc: {
                type: "int32",
                id: 1
              },
              file: {
                type: "uint64",
                id: 2
              },
              seq: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4DaWriteBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4DaWriteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              copied: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4SyncFileEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              parent: {
                type: "uint64",
                id: 3
              },
              datasync: {
                type: "int32",
                id: 4
              }
            }
          },
          Ext4SyncFileExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4AllocDaBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              dataBlocks: {
                type: "uint32",
                id: 3
              },
              metaBlocks: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4AllocateBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              block: {
                type: "uint64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              logical: {
                type: "uint32",
                id: 5
              },
              lleft: {
                type: "uint32",
                id: 6
              },
              lright: {
                type: "uint32",
                id: 7
              },
              goal: {
                type: "uint64",
                id: 8
              },
              pleft: {
                type: "uint64",
                id: 9
              },
              pright: {
                type: "uint64",
                id: 10
              },
              flags: {
                type: "uint32",
                id: 11
              }
            }
          },
          Ext4AllocateInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              dir: {
                type: "uint64",
                id: 3
              },
              mode: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4BeginOrderedTruncateFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              newSize: {
                type: "int64",
                id: 3
              }
            }
          },
          Ext4CollapseRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              }
            }
          },
          Ext4DaReleaseSpaceFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              iBlocks: {
                type: "uint64",
                id: 3
              },
              freedBlocks: {
                type: "int32",
                id: 4
              },
              reservedDataBlocks: {
                type: "int32",
                id: 5
              },
              reservedMetaBlocks: {
                type: "int32",
                id: 6
              },
              allocatedMetaBlocks: {
                type: "int32",
                id: 7
              },
              mode: {
                type: "uint32",
                id: 8
              }
            }
          },
          Ext4DaReserveSpaceFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              iBlocks: {
                type: "uint64",
                id: 3
              },
              reservedDataBlocks: {
                type: "int32",
                id: 4
              },
              reservedMetaBlocks: {
                type: "int32",
                id: 5
              },
              mode: {
                type: "uint32",
                id: 6
              },
              mdNeeded: {
                type: "int32",
                id: 7
              }
            }
          },
          Ext4DaUpdateReserveSpaceFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              iBlocks: {
                type: "uint64",
                id: 3
              },
              usedBlocks: {
                type: "int32",
                id: 4
              },
              reservedDataBlocks: {
                type: "int32",
                id: 5
              },
              reservedMetaBlocks: {
                type: "int32",
                id: 6
              },
              allocatedMetaBlocks: {
                type: "int32",
                id: 7
              },
              quotaClaim: {
                type: "int32",
                id: 8
              },
              mode: {
                type: "uint32",
                id: 9
              }
            }
          },
          Ext4DaWritePagesFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              firstPage: {
                type: "uint64",
                id: 3
              },
              nrToWrite: {
                type: "int64",
                id: 4
              },
              syncMode: {
                type: "int32",
                id: 5
              },
              bBlocknr: {
                type: "uint64",
                id: 6
              },
              bSize: {
                type: "uint32",
                id: 7
              },
              bState: {
                type: "uint32",
                id: 8
              },
              ioDone: {
                type: "int32",
                id: 9
              },
              pagesWritten: {
                type: "int32",
                id: 10
              }
            }
          },
          Ext4DaWritePagesExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4DirectIOEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              },
              rw: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4DirectIOExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              },
              rw: {
                type: "int32",
                id: 5
              },
              ret: {
                type: "int32",
                id: 6
              }
            }
          },
          Ext4DiscardBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              blk: {
                type: "uint64",
                id: 2
              },
              count: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4DiscardPreallocationsFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              len: {
                type: "uint32",
                id: 3
              },
              needed: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4DropInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              drop: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4EsCacheExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              pblk: {
                type: "uint64",
                id: 5
              },
              status: {
                type: "uint32",
                id: 6
              }
            }
          },
          Ext4EsFindDelayedExtentRangeEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4EsFindDelayedExtentRangeExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              pblk: {
                type: "uint64",
                id: 5
              },
              status: {
                type: "uint64",
                id: 6
              }
            }
          },
          Ext4EsInsertExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              pblk: {
                type: "uint64",
                id: 5
              },
              status: {
                type: "uint64",
                id: 6
              }
            }
          },
          Ext4EsLookupExtentEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4EsLookupExtentExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              pblk: {
                type: "uint64",
                id: 5
              },
              status: {
                type: "uint64",
                id: 6
              },
              found: {
                type: "int32",
                id: 7
              }
            }
          },
          Ext4EsRemoveExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              }
            }
          },
          Ext4EsShrinkFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              nrShrunk: {
                type: "int32",
                id: 2
              },
              scanTime: {
                type: "uint64",
                id: 3
              },
              nrSkipped: {
                type: "int32",
                id: 4
              },
              retried: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4EsShrinkCountFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              nrToScan: {
                type: "int32",
                id: 2
              },
              cacheCnt: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4EsShrinkScanEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              nrToScan: {
                type: "int32",
                id: 2
              },
              cacheCnt: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4EsShrinkScanExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              nrShrunk: {
                type: "int32",
                id: 2
              },
              cacheCnt: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4EvictInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nlink: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4ExtConvertToInitializedEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              mLblk: {
                type: "uint32",
                id: 3
              },
              mLen: {
                type: "uint32",
                id: 4
              },
              uLblk: {
                type: "uint32",
                id: 5
              },
              uLen: {
                type: "uint32",
                id: 6
              },
              uPblk: {
                type: "uint64",
                id: 7
              }
            }
          },
          Ext4ExtConvertToInitializedFastpathFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              mLblk: {
                type: "uint32",
                id: 3
              },
              mLen: {
                type: "uint32",
                id: 4
              },
              uLblk: {
                type: "uint32",
                id: 5
              },
              uLen: {
                type: "uint32",
                id: 6
              },
              uPblk: {
                type: "uint64",
                id: 7
              },
              iLblk: {
                type: "uint32",
                id: 8
              },
              iLen: {
                type: "uint32",
                id: 9
              },
              iPblk: {
                type: "uint64",
                id: 10
              }
            }
          },
          Ext4ExtHandleUnwrittenExtentsFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              flags: {
                type: "int32",
                id: 3
              },
              lblk: {
                type: "uint32",
                id: 4
              },
              pblk: {
                type: "uint64",
                id: 5
              },
              len: {
                type: "uint32",
                id: 6
              },
              allocated: {
                type: "uint32",
                id: 7
              },
              newblk: {
                type: "uint64",
                id: 8
              }
            }
          },
          Ext4ExtInCacheFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              ret: {
                type: "int32",
                id: 4
              }
            }
          },
          Ext4ExtLoadExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pblk: {
                type: "uint64",
                id: 3
              },
              lblk: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4ExtMapBlocksEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4ExtMapBlocksExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              pblk: {
                type: "uint64",
                id: 4
              },
              lblk: {
                type: "uint32",
                id: 5
              },
              len: {
                type: "uint32",
                id: 6
              },
              mflags: {
                type: "uint32",
                id: 7
              },
              ret: {
                type: "int32",
                id: 8
              }
            }
          },
          Ext4ExtPutInCacheFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              start: {
                type: "uint64",
                id: 5
              }
            }
          },
          Ext4ExtRemoveSpaceFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              start: {
                type: "uint32",
                id: 3
              },
              end: {
                type: "uint32",
                id: 4
              },
              depth: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4ExtRemoveSpaceDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              start: {
                type: "uint32",
                id: 3
              },
              end: {
                type: "uint32",
                id: 4
              },
              depth: {
                type: "int32",
                id: 5
              },
              partial: {
                type: "int64",
                id: 6
              },
              ehEntries: {
                type: "uint32",
                id: 7
              },
              pcLblk: {
                type: "uint32",
                id: 8
              },
              pcPclu: {
                type: "uint64",
                id: 9
              },
              pcState: {
                type: "int32",
                id: 10
              }
            }
          },
          Ext4ExtRmIdxFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pblk: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4ExtRmLeafFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              partial: {
                type: "int64",
                id: 3
              },
              start: {
                type: "uint32",
                id: 4
              },
              eeLblk: {
                type: "uint32",
                id: 5
              },
              eePblk: {
                type: "uint64",
                id: 6
              },
              eeLen: {
                type: "int32",
                id: 7
              },
              pcLblk: {
                type: "uint32",
                id: 8
              },
              pcPclu: {
                type: "uint64",
                id: 9
              },
              pcState: {
                type: "int32",
                id: 10
              }
            }
          },
          Ext4ExtShowExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pblk: {
                type: "uint64",
                id: 3
              },
              lblk: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4FallocateEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              },
              mode: {
                type: "int32",
                id: 5
              },
              pos: {
                type: "int64",
                id: 6
              }
            }
          },
          Ext4FallocateExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              blocks: {
                type: "uint32",
                id: 4
              },
              ret: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4FindDelallocRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              from: {
                type: "uint32",
                id: 3
              },
              to: {
                type: "uint32",
                id: 4
              },
              reverse: {
                type: "int32",
                id: 5
              },
              found: {
                type: "int32",
                id: 6
              },
              foundBlk: {
                type: "uint32",
                id: 7
              }
            }
          },
          Ext4ForgetFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              block: {
                type: "uint64",
                id: 3
              },
              isMetadata: {
                type: "int32",
                id: 4
              },
              mode: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4FreeBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              block: {
                type: "uint64",
                id: 3
              },
              count: {
                type: "uint64",
                id: 4
              },
              flags: {
                type: "int32",
                id: 5
              },
              mode: {
                type: "uint32",
                id: 6
              }
            }
          },
          Ext4FreeInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              uid: {
                type: "uint32",
                id: 3
              },
              gid: {
                type: "uint32",
                id: 4
              },
              blocks: {
                type: "uint64",
                id: 5
              },
              mode: {
                type: "uint32",
                id: 6
              }
            }
          },
          Ext4GetImpliedClusterAllocExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              pblk: {
                type: "uint64",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              },
              ret: {
                type: "int32",
                id: 6
              }
            }
          },
          Ext4GetReservedClusterAllocFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4IndMapBlocksEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              lblk: {
                type: "uint32",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4IndMapBlocksExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              pblk: {
                type: "uint64",
                id: 4
              },
              lblk: {
                type: "uint32",
                id: 5
              },
              len: {
                type: "uint32",
                id: 6
              },
              mflags: {
                type: "uint32",
                id: 7
              },
              ret: {
                type: "int32",
                id: 8
              }
            }
          },
          Ext4InsertRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              }
            }
          },
          Ext4InvalidatepageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              },
              offset: {
                type: "uint64",
                id: 4
              },
              length: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4JournalStartFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ip: {
                type: "uint64",
                id: 2
              },
              blocks: {
                type: "int32",
                id: 3
              },
              rsvBlocks: {
                type: "int32",
                id: 4
              },
              nblocks: {
                type: "int32",
                id: 5
              },
              revokeCreds: {
                type: "int32",
                id: 6
              }
            }
          },
          Ext4JournalStartReservedFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ip: {
                type: "uint64",
                id: 2
              },
              blocks: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4JournalledInvalidatepageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              },
              offset: {
                type: "uint64",
                id: 4
              },
              length: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4JournalledWriteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              copied: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4LoadInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              }
            }
          },
          Ext4LoadInodeBitmapFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              group: {
                type: "uint32",
                id: 2
              }
            }
          },
          Ext4MarkInodeDirtyFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ip: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4MbBitmapLoadFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              group: {
                type: "uint32",
                id: 2
              }
            }
          },
          Ext4MbBuddyBitmapLoadFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              group: {
                type: "uint32",
                id: 2
              }
            }
          },
          Ext4MbDiscardPreallocationsFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              needed: {
                type: "int32",
                id: 2
              }
            }
          },
          Ext4MbNewGroupPaFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              paPstart: {
                type: "uint64",
                id: 3
              },
              paLstart: {
                type: "uint64",
                id: 4
              },
              paLen: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4MbNewInodePaFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              paPstart: {
                type: "uint64",
                id: 3
              },
              paLstart: {
                type: "uint64",
                id: 4
              },
              paLen: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4MbReleaseGroupPaFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              paPstart: {
                type: "uint64",
                id: 2
              },
              paLen: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4MbReleaseInodePaFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              block: {
                type: "uint64",
                id: 3
              },
              count: {
                type: "uint32",
                id: 4
              }
            }
          },
          Ext4MballocAllocFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              origLogical: {
                type: "uint32",
                id: 3
              },
              origStart: {
                type: "int32",
                id: 4
              },
              origGroup: {
                type: "uint32",
                id: 5
              },
              origLen: {
                type: "int32",
                id: 6
              },
              goalLogical: {
                type: "uint32",
                id: 7
              },
              goalStart: {
                type: "int32",
                id: 8
              },
              goalGroup: {
                type: "uint32",
                id: 9
              },
              goalLen: {
                type: "int32",
                id: 10
              },
              resultLogical: {
                type: "uint32",
                id: 11
              },
              resultStart: {
                type: "int32",
                id: 12
              },
              resultGroup: {
                type: "uint32",
                id: 13
              },
              resultLen: {
                type: "int32",
                id: 14
              },
              found: {
                type: "uint32",
                id: 15
              },
              groups: {
                type: "uint32",
                id: 16
              },
              buddy: {
                type: "uint32",
                id: 17
              },
              flags: {
                type: "uint32",
                id: 18
              },
              tail: {
                type: "uint32",
                id: 19
              },
              cr: {
                type: "uint32",
                id: 20
              }
            }
          },
          Ext4MballocDiscardFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              resultStart: {
                type: "int32",
                id: 3
              },
              resultGroup: {
                type: "uint32",
                id: 4
              },
              resultLen: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4MballocFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              resultStart: {
                type: "int32",
                id: 3
              },
              resultGroup: {
                type: "uint32",
                id: 4
              },
              resultLen: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4MballocPreallocFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              origLogical: {
                type: "uint32",
                id: 3
              },
              origStart: {
                type: "int32",
                id: 4
              },
              origGroup: {
                type: "uint32",
                id: 5
              },
              origLen: {
                type: "int32",
                id: 6
              },
              resultLogical: {
                type: "uint32",
                id: 7
              },
              resultStart: {
                type: "int32",
                id: 8
              },
              resultGroup: {
                type: "uint32",
                id: 9
              },
              resultLen: {
                type: "int32",
                id: 10
              }
            }
          },
          Ext4OtherInodeUpdateTimeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              origIno: {
                type: "uint64",
                id: 3
              },
              uid: {
                type: "uint32",
                id: 4
              },
              gid: {
                type: "uint32",
                id: 5
              },
              mode: {
                type: "uint32",
                id: 6
              }
            }
          },
          Ext4PunchHoleFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              },
              mode: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4ReadBlockBitmapLoadFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              group: {
                type: "uint32",
                id: 2
              },
              prefetch: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4ReadpageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4ReleasepageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4RemoveBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              from: {
                type: "uint32",
                id: 3
              },
              to: {
                type: "uint32",
                id: 4
              },
              partial: {
                type: "int64",
                id: 5
              },
              eePblk: {
                type: "uint64",
                id: 6
              },
              eeLblk: {
                type: "uint32",
                id: 7
              },
              eeLen: {
                type: "uint32",
                id: 8
              },
              pcLblk: {
                type: "uint32",
                id: 9
              },
              pcPclu: {
                type: "uint64",
                id: 10
              },
              pcState: {
                type: "int32",
                id: 11
              }
            }
          },
          Ext4RequestBlocksFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              len: {
                type: "uint32",
                id: 3
              },
              logical: {
                type: "uint32",
                id: 4
              },
              lleft: {
                type: "uint32",
                id: 5
              },
              lright: {
                type: "uint32",
                id: 6
              },
              goal: {
                type: "uint64",
                id: 7
              },
              pleft: {
                type: "uint64",
                id: 8
              },
              pright: {
                type: "uint64",
                id: 9
              },
              flags: {
                type: "uint32",
                id: 10
              }
            }
          },
          Ext4RequestInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              dir: {
                type: "uint64",
                id: 2
              },
              mode: {
                type: "uint32",
                id: 3
              }
            }
          },
          Ext4SyncFsFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              wait: {
                type: "int32",
                id: 2
              }
            }
          },
          Ext4TrimAllFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              devMajor: {
                type: "int32",
                id: 1
              },
              devMinor: {
                type: "int32",
                id: 2
              },
              group: {
                type: "uint32",
                id: 3
              },
              start: {
                type: "int32",
                id: 4
              },
              len: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4TrimExtentFtraceEvent: {
            edition: "proto2",
            fields: {
              devMajor: {
                type: "int32",
                id: 1
              },
              devMinor: {
                type: "int32",
                id: 2
              },
              group: {
                type: "uint32",
                id: 3
              },
              start: {
                type: "int32",
                id: 4
              },
              len: {
                type: "int32",
                id: 5
              }
            }
          },
          Ext4TruncateEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              blocks: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4TruncateExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              blocks: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4UnlinkEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              parent: {
                type: "uint64",
                id: 3
              },
              size: {
                type: "int64",
                id: 4
              }
            }
          },
          Ext4UnlinkExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          Ext4WriteBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4WriteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              copied: {
                type: "uint32",
                id: 5
              }
            }
          },
          Ext4WritepageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              }
            }
          },
          Ext4WritepagesFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nrToWrite: {
                type: "int64",
                id: 3
              },
              pagesSkipped: {
                type: "int64",
                id: 4
              },
              rangeStart: {
                type: "int64",
                id: 5
              },
              rangeEnd: {
                type: "int64",
                id: 6
              },
              writebackIndex: {
                type: "uint64",
                id: 7
              },
              syncMode: {
                type: "int32",
                id: 8
              },
              forKupdate: {
                type: "uint32",
                id: 9
              },
              rangeCyclic: {
                type: "uint32",
                id: 10
              }
            }
          },
          Ext4WritepagesResultFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              },
              pagesWritten: {
                type: "int32",
                id: 4
              },
              pagesSkipped: {
                type: "int64",
                id: 5
              },
              writebackIndex: {
                type: "uint64",
                id: 6
              },
              syncMode: {
                type: "int32",
                id: 7
              }
            }
          },
          Ext4ZeroRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              offset: {
                type: "int64",
                id: 3
              },
              len: {
                type: "int64",
                id: 4
              },
              mode: {
                type: "int32",
                id: 5
              }
            }
          },
          F2fsDoSubmitBioFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              btype: {
                type: "int32",
                id: 2
              },
              sync: {
                type: "uint32",
                id: 3
              },
              sector: {
                type: "uint64",
                id: 4
              },
              size: {
                type: "uint32",
                id: 5
              }
            }
          },
          F2fsEvictInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pino: {
                type: "uint64",
                id: 3
              },
              mode: {
                type: "uint32",
                id: 4
              },
              size: {
                type: "int64",
                id: 5
              },
              nlink: {
                type: "uint32",
                id: 6
              },
              blocks: {
                type: "uint64",
                id: 7
              },
              advise: {
                type: "uint32",
                id: 8
              }
            }
          },
          F2fsFallocateFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              mode: {
                type: "int32",
                id: 3
              },
              offset: {
                type: "int64",
                id: 4
              },
              len: {
                type: "int64",
                id: 5
              },
              size: {
                type: "int64",
                id: 6
              },
              blocks: {
                type: "uint64",
                id: 7
              },
              ret: {
                type: "int32",
                id: 8
              }
            }
          },
          F2fsGetDataBlockFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              iblock: {
                type: "uint64",
                id: 3
              },
              bhStart: {
                type: "uint64",
                id: 4
              },
              bhSize: {
                type: "uint64",
                id: 5
              },
              ret: {
                type: "int32",
                id: 6
              }
            }
          },
          F2fsGetVictimFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              type: {
                type: "int32",
                id: 2
              },
              gcType: {
                type: "int32",
                id: 3
              },
              allocMode: {
                type: "int32",
                id: 4
              },
              gcMode: {
                type: "int32",
                id: 5
              },
              victim: {
                type: "uint32",
                id: 6
              },
              ofsUnit: {
                type: "uint32",
                id: 7
              },
              preVictim: {
                type: "uint32",
                id: 8
              },
              prefree: {
                type: "uint32",
                id: 9
              },
              free: {
                type: "uint32",
                id: 10
              },
              cost: {
                type: "uint32",
                id: 11
              }
            }
          },
          F2fsIgetFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pino: {
                type: "uint64",
                id: 3
              },
              mode: {
                type: "uint32",
                id: 4
              },
              size: {
                type: "int64",
                id: 5
              },
              nlink: {
                type: "uint32",
                id: 6
              },
              blocks: {
                type: "uint64",
                id: 7
              },
              advise: {
                type: "uint32",
                id: 8
              }
            }
          },
          F2fsIgetExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsNewInodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsReadpageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              },
              blkaddr: {
                type: "uint64",
                id: 4
              },
              type: {
                type: "int32",
                id: 5
              },
              dir: {
                type: "int32",
                id: 6
              },
              dirty: {
                type: "int32",
                id: 7
              },
              uptodate: {
                type: "int32",
                id: 8
              }
            }
          },
          F2fsReserveNewBlockFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              nid: {
                type: "uint32",
                id: 2
              },
              ofsInNode: {
                type: "uint32",
                id: 3
              }
            }
          },
          F2fsSetPageDirtyFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              type: {
                type: "int32",
                id: 3
              },
              dir: {
                type: "int32",
                id: 4
              },
              index: {
                type: "uint64",
                id: 5
              },
              dirty: {
                type: "int32",
                id: 6
              },
              uptodate: {
                type: "int32",
                id: 7
              }
            }
          },
          F2fsSubmitWritePageFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              type: {
                type: "int32",
                id: 3
              },
              index: {
                type: "uint64",
                id: 4
              },
              block: {
                type: "uint32",
                id: 5
              }
            }
          },
          F2fsSyncFileEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pino: {
                type: "uint64",
                id: 3
              },
              mode: {
                type: "uint32",
                id: 4
              },
              size: {
                type: "int64",
                id: 5
              },
              nlink: {
                type: "uint32",
                id: 6
              },
              blocks: {
                type: "uint64",
                id: 7
              },
              advise: {
                type: "uint32",
                id: 8
              }
            }
          },
          F2fsSyncFileExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              needCp: {
                type: "uint32",
                id: 3
              },
              datasync: {
                type: "int32",
                id: 4
              },
              ret: {
                type: "int32",
                id: 5
              },
              cpReason: {
                type: "int32",
                id: 6
              }
            }
          },
          F2fsSyncFsFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              dirty: {
                type: "int32",
                id: 2
              },
              wait: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsTruncateFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pino: {
                type: "uint64",
                id: 3
              },
              mode: {
                type: "uint32",
                id: 4
              },
              size: {
                type: "int64",
                id: 5
              },
              nlink: {
                type: "uint32",
                id: 6
              },
              blocks: {
                type: "uint64",
                id: 7
              },
              advise: {
                type: "uint32",
                id: 8
              }
            }
          },
          F2fsTruncateBlocksEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "int64",
                id: 3
              },
              blocks: {
                type: "uint64",
                id: 4
              },
              from: {
                type: "uint64",
                id: 5
              }
            }
          },
          F2fsTruncateBlocksExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsTruncateDataBlocksRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nid: {
                type: "uint32",
                id: 3
              },
              ofs: {
                type: "uint32",
                id: 4
              },
              free: {
                type: "int32",
                id: 5
              }
            }
          },
          F2fsTruncateInodeBlocksEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "int64",
                id: 3
              },
              blocks: {
                type: "uint64",
                id: 4
              },
              from: {
                type: "uint64",
                id: 5
              }
            }
          },
          F2fsTruncateInodeBlocksExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsTruncateNodeFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nid: {
                type: "uint32",
                id: 3
              },
              blkAddr: {
                type: "uint32",
                id: 4
              }
            }
          },
          F2fsTruncateNodesEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nid: {
                type: "uint32",
                id: 3
              },
              blkAddr: {
                type: "uint32",
                id: 4
              }
            }
          },
          F2fsTruncateNodesExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsTruncatePartialNodesFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              nid: {
                type: "uint32",
                id: 3
              },
              depth: {
                type: "int32",
                id: 4
              },
              err: {
                type: "int32",
                id: 5
              }
            }
          },
          F2fsUnlinkEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "int64",
                id: 3
              },
              blocks: {
                type: "uint64",
                id: 4
              },
              name: {
                type: "string",
                id: 5
              }
            }
          },
          F2fsUnlinkExitFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          F2fsVmPageMkwriteFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              type: {
                type: "int32",
                id: 3
              },
              dir: {
                type: "int32",
                id: 4
              },
              index: {
                type: "uint64",
                id: 5
              },
              dirty: {
                type: "int32",
                id: 6
              },
              uptodate: {
                type: "int32",
                id: 7
              }
            }
          },
          F2fsWriteBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              }
            }
          },
          F2fsWriteCheckpointFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              isUmount: {
                type: "uint32",
                id: 2
              },
              msg: {
                type: "string",
                id: 3
              },
              reason: {
                type: "int32",
                id: 4
              }
            }
          },
          F2fsWriteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ino: {
                type: "uint64",
                id: 2
              },
              pos: {
                type: "int64",
                id: 3
              },
              len: {
                type: "uint32",
                id: 4
              },
              copied: {
                type: "uint32",
                id: 5
              }
            }
          },
          F2fsIostatFtraceEvent: {
            edition: "proto2",
            fields: {
              appBio: {
                type: "uint64",
                id: 1
              },
              appBrio: {
                type: "uint64",
                id: 2
              },
              appDio: {
                type: "uint64",
                id: 3
              },
              appDrio: {
                type: "uint64",
                id: 4
              },
              appMio: {
                type: "uint64",
                id: 5
              },
              appMrio: {
                type: "uint64",
                id: 6
              },
              appRio: {
                type: "uint64",
                id: 7
              },
              appWio: {
                type: "uint64",
                id: 8
              },
              dev: {
                type: "uint64",
                id: 9
              },
              fsCdrio: {
                type: "uint64",
                id: 10
              },
              fsCpDio: {
                type: "uint64",
                id: 11
              },
              fsCpMio: {
                type: "uint64",
                id: 12
              },
              fsCpNio: {
                type: "uint64",
                id: 13
              },
              fsDio: {
                type: "uint64",
                id: 14
              },
              fsDiscard: {
                type: "uint64",
                id: 15
              },
              fsDrio: {
                type: "uint64",
                id: 16
              },
              fsGcDio: {
                type: "uint64",
                id: 17
              },
              fsGcNio: {
                type: "uint64",
                id: 18
              },
              fsGdrio: {
                type: "uint64",
                id: 19
              },
              fsMio: {
                type: "uint64",
                id: 20
              },
              fsMrio: {
                type: "uint64",
                id: 21
              },
              fsNio: {
                type: "uint64",
                id: 22
              },
              fsNrio: {
                type: "uint64",
                id: 23
              }
            }
          },
          F2fsIostatLatencyFtraceEvent: {
            edition: "proto2",
            fields: {
              dRdAvg: {
                type: "uint32",
                id: 1
              },
              dRdCnt: {
                type: "uint32",
                id: 2
              },
              dRdPeak: {
                type: "uint32",
                id: 3
              },
              dWrAsAvg: {
                type: "uint32",
                id: 4
              },
              dWrAsCnt: {
                type: "uint32",
                id: 5
              },
              dWrAsPeak: {
                type: "uint32",
                id: 6
              },
              dWrSAvg: {
                type: "uint32",
                id: 7
              },
              dWrSCnt: {
                type: "uint32",
                id: 8
              },
              dWrSPeak: {
                type: "uint32",
                id: 9
              },
              dev: {
                type: "uint64",
                id: 10
              },
              mRdAvg: {
                type: "uint32",
                id: 11
              },
              mRdCnt: {
                type: "uint32",
                id: 12
              },
              mRdPeak: {
                type: "uint32",
                id: 13
              },
              mWrAsAvg: {
                type: "uint32",
                id: 14
              },
              mWrAsCnt: {
                type: "uint32",
                id: 15
              },
              mWrAsPeak: {
                type: "uint32",
                id: 16
              },
              mWrSAvg: {
                type: "uint32",
                id: 17
              },
              mWrSCnt: {
                type: "uint32",
                id: 18
              },
              mWrSPeak: {
                type: "uint32",
                id: 19
              },
              nRdAvg: {
                type: "uint32",
                id: 20
              },
              nRdCnt: {
                type: "uint32",
                id: 21
              },
              nRdPeak: {
                type: "uint32",
                id: 22
              },
              nWrAsAvg: {
                type: "uint32",
                id: 23
              },
              nWrAsCnt: {
                type: "uint32",
                id: 24
              },
              nWrAsPeak: {
                type: "uint32",
                id: 25
              },
              nWrSAvg: {
                type: "uint32",
                id: 26
              },
              nWrSCnt: {
                type: "uint32",
                id: 27
              },
              nWrSPeak: {
                type: "uint32",
                id: 28
              }
            }
          },
          F2fsBackgroundGcFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              waitMs: {
                type: "uint32",
                id: 2
              },
              prefree: {
                type: "uint32",
                id: 3
              },
              free: {
                type: "uint32",
                id: 4
              }
            }
          },
          F2fsGcBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              sync: {
                type: "uint32",
                id: 2
              },
              background: {
                type: "uint32",
                id: 3
              },
              dirtyNodes: {
                type: "int64",
                id: 4
              },
              dirtyDents: {
                type: "int64",
                id: 5
              },
              dirtyImeta: {
                type: "int64",
                id: 6
              },
              freeSec: {
                type: "uint32",
                id: 7
              },
              freeSeg: {
                type: "uint32",
                id: 8
              },
              reservedSeg: {
                type: "int32",
                id: 9
              },
              prefreeSeg: {
                type: "uint32",
                id: 10
              },
              gcType: {
                type: "int32",
                id: 11
              },
              noBgGc: {
                type: "uint32",
                id: 12
              },
              nrFreeSecs: {
                type: "uint32",
                id: 13
              }
            }
          },
          F2fsGcEndFtraceEvent: {
            edition: "proto2",
            fields: {
              dev: {
                type: "uint64",
                id: 1
              },
              ret: {
                type: "int32",
                id: 2
              },
              segFreed: {
                type: "int32",
                id: 3
              },
              secFreed: {
                type: "int32",
                id: 4
              },
              dirtyNodes: {
                type: "int64",
                id: 5
              },
              dirtyDents: {
                type: "int64",
                id: 6
              },
              dirtyImeta: {
                type: "int64",
                id: 7
              },
              freeSec: {
                type: "uint32",
                id: 8
              },
              freeSeg: {
                type: "uint32",
                id: 9
              },
              reservedSeg: {
                type: "int32",
                id: 10
              },
              prefreeSeg: {
                type: "uint32",
                id: 11
              }
            }
          },
          FastrpcDmaStatFtraceEvent: {
            edition: "proto2",
            fields: {
              cid: {
                type: "int32",
                id: 1
              },
              len: {
                type: "int64",
                id: 2
              },
              totalAllocated: {
                type: "uint64",
                id: 3
              }
            }
          },
          FastrpcDmaFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              cid: {
                type: "int32",
                id: 1
              },
              phys: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          FastrpcDmaAllocFtraceEvent: {
            edition: "proto2",
            fields: {
              cid: {
                type: "int32",
                id: 1
              },
              phys: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              },
              attr: {
                type: "uint64",
                id: 4
              },
              mflags: {
                type: "int32",
                id: 5
              }
            }
          },
          FastrpcDmaUnmapFtraceEvent: {
            edition: "proto2",
            fields: {
              cid: {
                type: "int32",
                id: 1
              },
              phys: {
                type: "uint64",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          FastrpcDmaMapFtraceEvent: {
            edition: "proto2",
            fields: {
              cid: {
                type: "int32",
                id: 1
              },
              fd: {
                type: "int32",
                id: 2
              },
              phys: {
                type: "uint64",
                id: 3
              },
              size: {
                type: "uint64",
                id: 4
              },
              len: {
                type: "uint64",
                id: 5
              },
              attr: {
                type: "uint32",
                id: 6
              },
              mflags: {
                type: "int32",
                id: 7
              }
            }
          },
          FenceInitFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          FenceDestroyFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          FenceEnableSignalFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          FenceSignaledFtraceEvent: {
            edition: "proto2",
            fields: {
              context: {
                type: "uint32",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              seqno: {
                type: "uint32",
                id: 3
              },
              timeline: {
                type: "string",
                id: 4
              }
            }
          },
          MmFilemapAddToPageCacheFtraceEvent: {
            edition: "proto2",
            fields: {
              pfn: {
                type: "uint64",
                id: 1
              },
              iIno: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              },
              sDev: {
                type: "uint64",
                id: 4
              },
              page: {
                type: "uint64",
                id: 5
              }
            }
          },
          MmFilemapDeleteFromPageCacheFtraceEvent: {
            edition: "proto2",
            fields: {
              pfn: {
                type: "uint64",
                id: 1
              },
              iIno: {
                type: "uint64",
                id: 2
              },
              index: {
                type: "uint64",
                id: 3
              },
              sDev: {
                type: "uint64",
                id: 4
              },
              page: {
                type: "uint64",
                id: 5
              }
            }
          },
          DoSysOpenFtraceEvent: {
            edition: "proto2",
            fields: {
              filename: {
                type: "string",
                id: 1
              },
              flags: {
                type: "int32",
                id: 2
              },
              mode: {
                type: "int32",
                id: 3
              }
            }
          },
          OpenExecFtraceEvent: {
            edition: "proto2",
            fields: {
              filename: {
                type: "string",
                id: 1
              }
            }
          },
          PrintFtraceEvent: {
            edition: "proto2",
            fields: {
              ip: {
                type: "uint64",
                id: 1
              },
              buf: {
                type: "string",
                id: 2
              }
            }
          },
          FuncgraphEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              depth: {
                type: "int32",
                id: 1
              },
              func: {
                type: "uint64",
                id: 2
              }
            }
          },
          FuncgraphExitFtraceEvent: {
            edition: "proto2",
            fields: {
              calltime: {
                type: "uint64",
                id: 1
              },
              depth: {
                type: "int32",
                id: 2
              },
              func: {
                type: "uint64",
                id: 3
              },
              overrun: {
                type: "uint64",
                id: 4
              },
              rettime: {
                type: "uint64",
                id: 5
              }
            }
          },
          G2dTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 4
              },
              type: {
                type: "uint32",
                id: 5
              },
              value: {
                type: "int32",
                id: 6
              }
            }
          },
          GoogleIccEventFtraceEvent: {
            edition: "proto2",
            fields: {
              event: {
                type: "string",
                id: 1
              },
              timestamp: {
                type: "uint64",
                id: 2
              }
            }
          },
          GoogleIrmEventFtraceEvent: {
            edition: "proto2",
            fields: {
              event: {
                type: "string",
                id: 1
              },
              timestamp: {
                type: "uint64",
                id: 2
              }
            }
          },
          GpuMemTotalFtraceEvent: {
            edition: "proto2",
            fields: {
              gpuId: {
                type: "uint32",
                id: 1
              },
              pid: {
                type: "uint32",
                id: 2
              },
              size: {
                type: "uint64",
                id: 3
              }
            }
          },
          DrmSchedJobFtraceEvent: {
            edition: "proto2",
            fields: {
              entity: {
                type: "uint64",
                id: 1
              },
              fence: {
                type: "uint64",
                id: 2
              },
              hwJobCount: {
                type: "int32",
                id: 3
              },
              id: {
                type: "uint64",
                id: 4
              },
              jobCount: {
                type: "uint32",
                id: 5
              },
              name: {
                type: "string",
                id: 6
              }
            }
          },
          DrmRunJobFtraceEvent: {
            edition: "proto2",
            fields: {
              entity: {
                type: "uint64",
                id: 1
              },
              fence: {
                type: "uint64",
                id: 2
              },
              hwJobCount: {
                type: "int32",
                id: 3
              },
              id: {
                type: "uint64",
                id: 4
              },
              jobCount: {
                type: "uint32",
                id: 5
              },
              name: {
                type: "string",
                id: 6
              }
            }
          },
          DrmSchedProcessJobFtraceEvent: {
            edition: "proto2",
            fields: {
              fence: {
                type: "uint64",
                id: 1
              }
            }
          },
          HypEnterFtraceEvent: {
            edition: "proto2",
            fields: {}
          },
          HypExitFtraceEvent: {
            edition: "proto2",
            fields: {}
          },
          HostHcallFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              invalid: {
                type: "uint32",
                id: 2
              }
            }
          },
          HostSmcFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint64",
                id: 1
              },
              forwarded: {
                type: "uint32",
                id: 2
              }
            }
          },
          HostMemAbortFtraceEvent: {
            edition: "proto2",
            fields: {
              esr: {
                type: "uint64",
                id: 1
              },
              addr: {
                type: "uint64",
                id: 2
              }
            }
          },
          I2cReadFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              msgNr: {
                type: "uint32",
                id: 2
              },
              addr: {
                type: "uint32",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              }
            }
          },
          I2cWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              msgNr: {
                type: "uint32",
                id: 2
              },
              addr: {
                type: "uint32",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              },
              buf: {
                type: "uint32",
                id: 6
              }
            }
          },
          I2cResultFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              nrMsgs: {
                type: "uint32",
                id: 2
              },
              ret: {
                type: "int32",
                id: 3
              }
            }
          },
          I2cReplyFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              msgNr: {
                type: "uint32",
                id: 2
              },
              addr: {
                type: "uint32",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              },
              buf: {
                type: "uint32",
                id: 6
              }
            }
          },
          SmbusReadFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              addr: {
                type: "uint32",
                id: 3
              },
              command: {
                type: "uint32",
                id: 4
              },
              protocol: {
                type: "uint32",
                id: 5
              }
            }
          },
          SmbusWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              addr: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              command: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              },
              protocol: {
                type: "uint32",
                id: 6
              }
            }
          },
          SmbusResultFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              addr: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              readWrite: {
                type: "uint32",
                id: 4
              },
              command: {
                type: "uint32",
                id: 5
              },
              res: {
                type: "int32",
                id: 6
              },
              protocol: {
                type: "uint32",
                id: 7
              }
            }
          },
          SmbusReplyFtraceEvent: {
            edition: "proto2",
            fields: {
              adapterNr: {
                type: "int32",
                id: 1
              },
              addr: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              command: {
                type: "uint32",
                id: 4
              },
              len: {
                type: "uint32",
                id: 5
              },
              protocol: {
                type: "uint32",
                id: 6
              }
            }
          },
          IonStatFtraceEvent: {
            edition: "proto2",
            fields: {
              bufferId: {
                type: "uint32",
                id: 1
              },
              len: {
                type: "int64",
                id: 2
              },
              totalAllocated: {
                type: "uint64",
                id: 3
              }
            }
          },
          IpiEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              reason: {
                type: "string",
                id: 1
              }
            }
          },
          IpiExitFtraceEvent: {
            edition: "proto2",
            fields: {
              reason: {
                type: "string",
                id: 1
              }
            }
          },
          IpiRaiseFtraceEvent: {
            edition: "proto2",
            fields: {
              targetCpus: {
                type: "uint32",
                id: 1
              },
              reason: {
                type: "string",
                id: 2
              }
            }
          },
          SoftirqEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              vec: {
                type: "uint32",
                id: 1
              }
            }
          },
          SoftirqExitFtraceEvent: {
            edition: "proto2",
            fields: {
              vec: {
                type: "uint32",
                id: 1
              }
            }
          },
          SoftirqRaiseFtraceEvent: {
            edition: "proto2",
            fields: {
              vec: {
                type: "uint32",
                id: 1
              }
            }
          },
          IrqHandlerEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              irq: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              handler: {
                type: "uint32",
                id: 3
              }
            }
          },
          IrqHandlerExitFtraceEvent: {
            edition: "proto2",
            fields: {
              irq: {
                type: "int32",
                id: 1
              },
              ret: {
                type: "int32",
                id: 2
              }
            }
          },
          LocalTimerEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              vector: {
                type: "int32",
                id: 1
              }
            }
          },
          LocalTimerExitFtraceEvent: {
            edition: "proto2",
            fields: {
              vector: {
                type: "int32",
                id: 1
              }
            }
          },
          KgslGpuFrequencyFtraceEvent: {
            edition: "proto2",
            fields: {
              gpuFreq: {
                type: "uint32",
                id: 1
              },
              gpuId: {
                type: "uint32",
                id: 2
              }
            }
          },
          KgslAdrenoCmdbatchQueuedFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              timestamp: {
                type: "uint32",
                id: 2
              },
              queued: {
                type: "uint32",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              prio: {
                type: "uint32",
                id: 5
              }
            }
          },
          KgslAdrenoCmdbatchSubmittedFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              timestamp: {
                type: "uint32",
                id: 2
              },
              inflight: {
                type: "int64",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              ticks: {
                type: "uint64",
                id: 5
              },
              secs: {
                type: "uint64",
                id: 6
              },
              usecs: {
                type: "uint64",
                id: 7
              },
              prio: {
                type: "int32",
                id: 8
              },
              rbId: {
                type: "int32",
                id: 9
              },
              rptr: {
                type: "uint32",
                id: 10
              },
              wptr: {
                type: "uint32",
                id: 11
              },
              qInflight: {
                type: "int32",
                id: 12
              },
              dispatchQueue: {
                type: "int32",
                id: 13
              }
            }
          },
          KgslAdrenoCmdbatchSyncFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              timestamp: {
                type: "uint32",
                id: 2
              },
              ticks: {
                type: "uint64",
                id: 3
              },
              prio: {
                type: "int32",
                id: 4
              }
            }
          },
          KgslAdrenoCmdbatchRetiredFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              timestamp: {
                type: "uint32",
                id: 2
              },
              inflight: {
                type: "int64",
                id: 3
              },
              recovery: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              },
              start: {
                type: "uint64",
                id: 6
              },
              retire: {
                type: "uint64",
                id: 7
              },
              prio: {
                type: "int32",
                id: 8
              },
              rbId: {
                type: "int32",
                id: 9
              },
              rptr: {
                type: "uint32",
                id: 10
              },
              wptr: {
                type: "uint32",
                id: 11
              },
              qInflight: {
                type: "int32",
                id: 12
              },
              faultRecovery: {
                type: "uint64",
                id: 13
              },
              dispatchQueue: {
                type: "uint32",
                id: 14
              },
              submittedToRb: {
                type: "uint64",
                id: 15
              },
              retiredOnGmu: {
                type: "uint64",
                id: 16
              },
              active: {
                type: "uint64",
                id: 17
              }
            }
          },
          AllocPagesIommuEndFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          AllocPagesIommuFailFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          AllocPagesIommuStartFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          AllocPagesSysEndFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          AllocPagesSysFailFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          AllocPagesSysStartFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              }
            }
          },
          DmaAllocContiguousRetryFtraceEvent: {
            edition: "proto2",
            fields: {
              tries: {
                type: "int32",
                id: 1
              }
            }
          },
          IommuMapRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              chunkSize: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              pa: {
                type: "uint64",
                id: 3
              },
              va: {
                type: "uint64",
                id: 4
              }
            }
          },
          IommuSecPtblMapRangeEndFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint64",
                id: 1
              },
              num: {
                type: "int32",
                id: 2
              },
              pa: {
                type: "uint32",
                id: 3
              },
              secId: {
                type: "int32",
                id: 4
              },
              va: {
                type: "uint64",
                id: 5
              }
            }
          },
          IommuSecPtblMapRangeStartFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint64",
                id: 1
              },
              num: {
                type: "int32",
                id: 2
              },
              pa: {
                type: "uint32",
                id: 3
              },
              secId: {
                type: "int32",
                id: 4
              },
              va: {
                type: "uint64",
                id: 5
              }
            }
          },
          IonAllocBufferEndFtraceEvent: {
            edition: "proto2",
            fields: {
              clientName: {
                type: "string",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              },
              mask: {
                type: "uint32",
                id: 5
              }
            }
          },
          IonAllocBufferFailFtraceEvent: {
            edition: "proto2",
            fields: {
              clientName: {
                type: "string",
                id: 1
              },
              error: {
                type: "int64",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              heapName: {
                type: "string",
                id: 4
              },
              len: {
                type: "uint64",
                id: 5
              },
              mask: {
                type: "uint32",
                id: 6
              }
            }
          },
          IonAllocBufferFallbackFtraceEvent: {
            edition: "proto2",
            fields: {
              clientName: {
                type: "string",
                id: 1
              },
              error: {
                type: "int64",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              heapName: {
                type: "string",
                id: 4
              },
              len: {
                type: "uint64",
                id: 5
              },
              mask: {
                type: "uint32",
                id: 6
              }
            }
          },
          IonAllocBufferStartFtraceEvent: {
            edition: "proto2",
            fields: {
              clientName: {
                type: "string",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              },
              mask: {
                type: "uint32",
                id: 5
              }
            }
          },
          IonCpAllocRetryFtraceEvent: {
            edition: "proto2",
            fields: {
              tries: {
                type: "int32",
                id: 1
              }
            }
          },
          IonCpSecureBufferEndFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint64",
                id: 1
              },
              flags: {
                type: "uint64",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              }
            }
          },
          IonCpSecureBufferStartFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint64",
                id: 1
              },
              flags: {
                type: "uint64",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              }
            }
          },
          IonPrefetchingFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint64",
                id: 1
              }
            }
          },
          IonSecureCmaAddToPoolEndFtraceEvent: {
            edition: "proto2",
            fields: {
              isPrefetch: {
                type: "uint32",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              poolTotal: {
                type: "int32",
                id: 3
              }
            }
          },
          IonSecureCmaAddToPoolStartFtraceEvent: {
            edition: "proto2",
            fields: {
              isPrefetch: {
                type: "uint32",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              poolTotal: {
                type: "int32",
                id: 3
              }
            }
          },
          IonSecureCmaAllocateEndFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint64",
                id: 1
              },
              flags: {
                type: "uint64",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              }
            }
          },
          IonSecureCmaAllocateStartFtraceEvent: {
            edition: "proto2",
            fields: {
              align: {
                type: "uint64",
                id: 1
              },
              flags: {
                type: "uint64",
                id: 2
              },
              heapName: {
                type: "string",
                id: 3
              },
              len: {
                type: "uint64",
                id: 4
              }
            }
          },
          IonSecureCmaShrinkPoolEndFtraceEvent: {
            edition: "proto2",
            fields: {
              drainedSize: {
                type: "uint64",
                id: 1
              },
              skippedSize: {
                type: "uint64",
                id: 2
              }
            }
          },
          IonSecureCmaShrinkPoolStartFtraceEvent: {
            edition: "proto2",
            fields: {
              drainedSize: {
                type: "uint64",
                id: 1
              },
              skippedSize: {
                type: "uint64",
                id: 2
              }
            }
          },
          KfreeFtraceEvent: {
            edition: "proto2",
            fields: {
              callSite: {
                type: "uint64",
                id: 1
              },
              ptr: {
                type: "uint64",
                id: 2
              }
            }
          },
          KmallocFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesAlloc: {
                type: "uint64",
                id: 1
              },
              bytesReq: {
                type: "uint64",
                id: 2
              },
              callSite: {
                type: "uint64",
                id: 3
              },
              gfpFlags: {
                type: "uint32",
                id: 4
              },
              ptr: {
                type: "uint64",
                id: 5
              }
            }
          },
          KmallocNodeFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesAlloc: {
                type: "uint64",
                id: 1
              },
              bytesReq: {
                type: "uint64",
                id: 2
              },
              callSite: {
                type: "uint64",
                id: 3
              },
              gfpFlags: {
                type: "uint32",
                id: 4
              },
              node: {
                type: "int32",
                id: 5
              },
              ptr: {
                type: "uint64",
                id: 6
              }
            }
          },
          KmemCacheAllocFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesAlloc: {
                type: "uint64",
                id: 1
              },
              bytesReq: {
                type: "uint64",
                id: 2
              },
              callSite: {
                type: "uint64",
                id: 3
              },
              gfpFlags: {
                type: "uint32",
                id: 4
              },
              ptr: {
                type: "uint64",
                id: 5
              }
            }
          },
          KmemCacheAllocNodeFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesAlloc: {
                type: "uint64",
                id: 1
              },
              bytesReq: {
                type: "uint64",
                id: 2
              },
              callSite: {
                type: "uint64",
                id: 3
              },
              gfpFlags: {
                type: "uint32",
                id: 4
              },
              node: {
                type: "int32",
                id: 5
              },
              ptr: {
                type: "uint64",
                id: 6
              }
            }
          },
          KmemCacheFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              callSite: {
                type: "uint64",
                id: 1
              },
              ptr: {
                type: "uint64",
                id: 2
              }
            }
          },
          MigratePagesEndFtraceEvent: {
            edition: "proto2",
            fields: {
              mode: {
                type: "int32",
                id: 1
              }
            }
          },
          MigratePagesStartFtraceEvent: {
            edition: "proto2",
            fields: {
              mode: {
                type: "int32",
                id: 1
              }
            }
          },
          MigrateRetryFtraceEvent: {
            edition: "proto2",
            fields: {
              tries: {
                type: "int32",
                id: 1
              }
            }
          },
          MmPageAllocFtraceEvent: {
            edition: "proto2",
            fields: {
              gfpFlags: {
                type: "uint32",
                id: 1
              },
              migratetype: {
                type: "int32",
                id: 2
              },
              order: {
                type: "uint32",
                id: 3
              },
              page: {
                type: "uint64",
                id: 4
              },
              pfn: {
                type: "uint64",
                id: 5
              }
            }
          },
          MmPageAllocExtfragFtraceEvent: {
            edition: "proto2",
            fields: {
              allocMigratetype: {
                type: "int32",
                id: 1
              },
              allocOrder: {
                type: "int32",
                id: 2
              },
              fallbackMigratetype: {
                type: "int32",
                id: 3
              },
              fallbackOrder: {
                type: "int32",
                id: 4
              },
              page: {
                type: "uint64",
                id: 5
              },
              changeOwnership: {
                type: "int32",
                id: 6
              },
              pfn: {
                type: "uint64",
                id: 7
              }
            }
          },
          MmPageAllocZoneLockedFtraceEvent: {
            edition: "proto2",
            fields: {
              migratetype: {
                type: "int32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              },
              page: {
                type: "uint64",
                id: 3
              },
              pfn: {
                type: "uint64",
                id: 4
              }
            }
          },
          MmPageFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              order: {
                type: "uint32",
                id: 1
              },
              page: {
                type: "uint64",
                id: 2
              },
              pfn: {
                type: "uint64",
                id: 3
              }
            }
          },
          MmPageFreeBatchedFtraceEvent: {
            edition: "proto2",
            fields: {
              cold: {
                type: "int32",
                id: 1
              },
              page: {
                type: "uint64",
                id: 2
              },
              pfn: {
                type: "uint64",
                id: 3
              }
            }
          },
          MmPagePcpuDrainFtraceEvent: {
            edition: "proto2",
            fields: {
              migratetype: {
                type: "int32",
                id: 1
              },
              order: {
                type: "uint32",
                id: 2
              },
              page: {
                type: "uint64",
                id: 3
              },
              pfn: {
                type: "uint64",
                id: 4
              }
            }
          },
          RssStatFtraceEvent: {
            edition: "proto2",
            fields: {
              member: {
                type: "int32",
                id: 1
              },
              size: {
                type: "int64",
                id: 2
              },
              curr: {
                type: "uint32",
                id: 3
              },
              mmId: {
                type: "uint32",
                id: 4
              }
            }
          },
          IonHeapShrinkFtraceEvent: {
            edition: "proto2",
            fields: {
              heapName: {
                type: "string",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              totalAllocated: {
                type: "int64",
                id: 3
              }
            }
          },
          IonHeapGrowFtraceEvent: {
            edition: "proto2",
            fields: {
              heapName: {
                type: "string",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              totalAllocated: {
                type: "int64",
                id: 3
              }
            }
          },
          IonBufferCreateFtraceEvent: {
            edition: "proto2",
            fields: {
              addr: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              }
            }
          },
          IonBufferDestroyFtraceEvent: {
            edition: "proto2",
            fields: {
              addr: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmAccessFaultFtraceEvent: {
            edition: "proto2",
            fields: {
              ipa: {
                type: "uint64",
                id: 1
              }
            }
          },
          KvmAckIrqFtraceEvent: {
            edition: "proto2",
            fields: {
              irqchip: {
                type: "uint32",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              }
            }
          },
          KvmAgeHvaFtraceEvent: {
            edition: "proto2",
            fields: {
              end: {
                type: "uint64",
                id: 1
              },
              start: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmAgePageFtraceEvent: {
            edition: "proto2",
            fields: {
              gfn: {
                type: "uint64",
                id: 1
              },
              hva: {
                type: "uint64",
                id: 2
              },
              level: {
                type: "uint32",
                id: 3
              },
              referenced: {
                type: "uint32",
                id: 4
              }
            }
          },
          KvmArmClearDebugFtraceEvent: {
            edition: "proto2",
            fields: {
              guestDebug: {
                type: "uint32",
                id: 1
              }
            }
          },
          KvmArmSetDreg32FtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                type: "uint32",
                id: 2
              }
            }
          },
          KvmArmSetRegsetFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          KvmArmSetupDebugFtraceEvent: {
            edition: "proto2",
            fields: {
              guestDebug: {
                type: "uint32",
                id: 1
              },
              vcpu: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              vcpuPc: {
                type: "uint64",
                id: 1
              }
            }
          },
          KvmExitFtraceEvent: {
            edition: "proto2",
            fields: {
              esrEc: {
                type: "uint32",
                id: 1
              },
              ret: {
                type: "int32",
                id: 2
              },
              vcpuPc: {
                type: "uint64",
                id: 3
              }
            }
          },
          KvmFpuFtraceEvent: {
            edition: "proto2",
            fields: {
              load: {
                type: "uint32",
                id: 1
              }
            }
          },
          KvmGetTimerMapFtraceEvent: {
            edition: "proto2",
            fields: {
              directPtimer: {
                type: "int32",
                id: 1
              },
              directVtimer: {
                type: "int32",
                id: 2
              },
              emulPtimer: {
                type: "int32",
                id: 3
              },
              vcpuId: {
                type: "uint64",
                id: 4
              }
            }
          },
          KvmGuestFaultFtraceEvent: {
            edition: "proto2",
            fields: {
              hsr: {
                type: "uint64",
                id: 1
              },
              hxfar: {
                type: "uint64",
                id: 2
              },
              ipa: {
                type: "uint64",
                id: 3
              },
              vcpuPc: {
                type: "uint64",
                id: 4
              }
            }
          },
          KvmHandleSysRegFtraceEvent: {
            edition: "proto2",
            fields: {
              hsr: {
                type: "uint64",
                id: 1
              }
            }
          },
          KvmHvcArm64FtraceEvent: {
            edition: "proto2",
            fields: {
              imm: {
                type: "uint64",
                id: 1
              },
              r0: {
                type: "uint64",
                id: 2
              },
              vcpuPc: {
                type: "uint64",
                id: 3
              }
            }
          },
          KvmIrqLineFtraceEvent: {
            edition: "proto2",
            fields: {
              irqNum: {
                type: "int32",
                id: 1
              },
              level: {
                type: "int32",
                id: 2
              },
              type: {
                type: "uint32",
                id: 3
              },
              vcpuIdx: {
                type: "int32",
                id: 4
              }
            }
          },
          KvmMmioFtraceEvent: {
            edition: "proto2",
            fields: {
              gpa: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "uint32",
                id: 2
              },
              type: {
                type: "uint32",
                id: 3
              },
              val: {
                type: "uint64",
                id: 4
              }
            }
          },
          KvmMmioEmulateFtraceEvent: {
            edition: "proto2",
            fields: {
              cpsr: {
                type: "uint64",
                id: 1
              },
              instr: {
                type: "uint64",
                id: 2
              },
              vcpuPc: {
                type: "uint64",
                id: 3
              }
            }
          },
          KvmSetGuestDebugFtraceEvent: {
            edition: "proto2",
            fields: {
              guestDebug: {
                type: "uint32",
                id: 1
              },
              vcpu: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmSetIrqFtraceEvent: {
            edition: "proto2",
            fields: {
              gsi: {
                type: "uint32",
                id: 1
              },
              irqSourceId: {
                type: "int32",
                id: 2
              },
              level: {
                type: "int32",
                id: 3
              }
            }
          },
          KvmSetSpteHvaFtraceEvent: {
            edition: "proto2",
            fields: {
              hva: {
                type: "uint64",
                id: 1
              }
            }
          },
          KvmSetWayFlushFtraceEvent: {
            edition: "proto2",
            fields: {
              cache: {
                type: "uint32",
                id: 1
              },
              vcpuPc: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmSysAccessFtraceEvent: {
            edition: "proto2",
            fields: {
              CRm: {
                type: "uint32",
                id: 1
              },
              CRn: {
                type: "uint32",
                id: 2
              },
              Op0: {
                type: "uint32",
                id: 3
              },
              Op1: {
                type: "uint32",
                id: 4
              },
              Op2: {
                type: "uint32",
                id: 5
              },
              isWrite: {
                type: "uint32",
                id: 6
              },
              name: {
                type: "string",
                id: 7
              },
              vcpuPc: {
                type: "uint64",
                id: 8
              }
            }
          },
          KvmTestAgeHvaFtraceEvent: {
            edition: "proto2",
            fields: {
              hva: {
                type: "uint64",
                id: 1
              }
            }
          },
          KvmTimerEmulateFtraceEvent: {
            edition: "proto2",
            fields: {
              shouldFire: {
                type: "uint32",
                id: 1
              },
              timerIdx: {
                type: "int32",
                id: 2
              }
            }
          },
          KvmTimerHrtimerExpireFtraceEvent: {
            edition: "proto2",
            fields: {
              timerIdx: {
                type: "int32",
                id: 1
              }
            }
          },
          KvmTimerRestoreStateFtraceEvent: {
            edition: "proto2",
            fields: {
              ctl: {
                type: "uint64",
                id: 1
              },
              cval: {
                type: "uint64",
                id: 2
              },
              timerIdx: {
                type: "int32",
                id: 3
              }
            }
          },
          KvmTimerSaveStateFtraceEvent: {
            edition: "proto2",
            fields: {
              ctl: {
                type: "uint64",
                id: 1
              },
              cval: {
                type: "uint64",
                id: 2
              },
              timerIdx: {
                type: "int32",
                id: 3
              }
            }
          },
          KvmTimerUpdateIrqFtraceEvent: {
            edition: "proto2",
            fields: {
              irq: {
                type: "uint32",
                id: 1
              },
              level: {
                type: "int32",
                id: 2
              },
              vcpuId: {
                type: "uint64",
                id: 3
              }
            }
          },
          KvmToggleCacheFtraceEvent: {
            edition: "proto2",
            fields: {
              now: {
                type: "uint32",
                id: 1
              },
              vcpuPc: {
                type: "uint64",
                id: 2
              },
              was: {
                type: "uint32",
                id: 3
              }
            }
          },
          KvmUnmapHvaRangeFtraceEvent: {
            edition: "proto2",
            fields: {
              end: {
                type: "uint64",
                id: 1
              },
              start: {
                type: "uint64",
                id: 2
              }
            }
          },
          KvmUserspaceExitFtraceEvent: {
            edition: "proto2",
            fields: {
              reason: {
                type: "uint32",
                id: 1
              }
            }
          },
          KvmVcpuWakeupFtraceEvent: {
            edition: "proto2",
            fields: {
              ns: {
                type: "uint64",
                id: 1
              },
              valid: {
                type: "uint32",
                id: 2
              },
              waited: {
                type: "uint32",
                id: 3
              }
            }
          },
          KvmWfxArm64FtraceEvent: {
            edition: "proto2",
            fields: {
              isWfe: {
                type: "uint32",
                id: 1
              },
              vcpuPc: {
                type: "uint64",
                id: 2
              }
            }
          },
          TrapRegFtraceEvent: {
            edition: "proto2",
            fields: {
              fn: {
                type: "string",
                id: 1
              },
              isWrite: {
                type: "uint32",
                id: 2
              },
              reg: {
                type: "int32",
                id: 3
              },
              writeValue: {
                type: "uint64",
                id: 4
              }
            }
          },
          VgicUpdateIrqPendingFtraceEvent: {
            edition: "proto2",
            fields: {
              irq: {
                type: "uint32",
                id: 1
              },
              level: {
                type: "uint32",
                id: 2
              },
              vcpuId: {
                type: "uint64",
                id: 3
              }
            }
          },
          LowmemoryKillFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              pagecacheSize: {
                type: "int64",
                id: 3
              },
              pagecacheLimit: {
                type: "int64",
                id: 4
              },
              free: {
                type: "int64",
                id: 5
              }
            }
          },
          LwisTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              lwisName: {
                type: "string",
                id: 1
              },
              type: {
                type: "uint32",
                id: 2
              },
              pid: {
                type: "int32",
                id: 3
              },
              funcName: {
                type: "string",
                id: 4
              },
              value: {
                type: "int64",
                id: 5
              }
            }
          },
          MaliTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              type: {
                type: "uint32",
                id: 3
              },
              value: {
                type: "int32",
                id: 4
              }
            }
          },
          MaliMaliKCPUCQSSETFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              infoVal1: {
                type: "uint64",
                id: 2
              },
              infoVal2: {
                type: "uint64",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              kctxTgid: {
                type: "int32",
                id: 5
              }
            }
          },
          MaliMaliKCPUCQSWAITSTARTFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              infoVal1: {
                type: "uint64",
                id: 2
              },
              infoVal2: {
                type: "uint64",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              kctxTgid: {
                type: "int32",
                id: 5
              }
            }
          },
          MaliMaliKCPUCQSWAITENDFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              infoVal1: {
                type: "uint64",
                id: 2
              },
              infoVal2: {
                type: "uint64",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              kctxTgid: {
                type: "int32",
                id: 5
              }
            }
          },
          MaliMaliKCPUFENCESIGNALFtraceEvent: {
            edition: "proto2",
            fields: {
              infoVal1: {
                type: "uint64",
                id: 1
              },
              infoVal2: {
                type: "uint64",
                id: 2
              },
              kctxTgid: {
                type: "int32",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              id: {
                type: "uint32",
                id: 5
              }
            }
          },
          MaliMaliKCPUFENCEWAITSTARTFtraceEvent: {
            edition: "proto2",
            fields: {
              infoVal1: {
                type: "uint64",
                id: 1
              },
              infoVal2: {
                type: "uint64",
                id: 2
              },
              kctxTgid: {
                type: "int32",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              id: {
                type: "uint32",
                id: 5
              }
            }
          },
          MaliMaliKCPUFENCEWAITENDFtraceEvent: {
            edition: "proto2",
            fields: {
              infoVal1: {
                type: "uint64",
                id: 1
              },
              infoVal2: {
                type: "uint64",
                id: 2
              },
              kctxTgid: {
                type: "int32",
                id: 3
              },
              kctxId: {
                type: "uint32",
                id: 4
              },
              id: {
                type: "uint32",
                id: 5
              }
            }
          },
          MaliMaliCSFINTERRUPTSTARTFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliCSFINTERRUPTENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLCORESDOWNSCALENOTIFYPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLCORESNOTIFYPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLCOREINACTIVEPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLMCUONRECHECKFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLSHADERSCOREOFFPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLSHADERSPENDOFFFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLSHADERSPENDONFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUHCTLSHADERSREADYOFFFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUINSLEEPFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUOFFFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONCOREATTRUPDATEPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONGLBREINITPENDFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONHALTFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONHWCNTDISABLEFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONHWCNTENABLEFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONPENDHALTFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONPENDSLEEPFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUONSLEEPINITIATEFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUPENDOFFFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUPENDONRELOADFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCUPOWERDOWNFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliMaliPMMCURESETWAITFtraceEvent: {
            edition: "proto2",
            fields: {
              kctxTgid: {
                type: "int32",
                id: 1
              },
              kctxId: {
                type: "uint32",
                id: 2
              },
              infoVal: {
                type: "uint64",
                id: 3
              }
            }
          },
          MaliGpuPowerStateFtraceEvent: {
            edition: "proto2",
            fields: {
              changeNs: {
                type: "uint64",
                id: 1
              },
              fromState: {
                type: "int32",
                id: 2
              },
              toState: {
                type: "int32",
                id: 3
              }
            }
          },
          MdpCmdKickoffFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              },
              kickoffCnt: {
                type: "int32",
                id: 2
              }
            }
          },
          MdpCommitFtraceEvent: {
            edition: "proto2",
            fields: {
              num: {
                type: "uint32",
                id: 1
              },
              playCnt: {
                type: "uint32",
                id: 2
              },
              clkRate: {
                type: "uint32",
                id: 3
              },
              bandwidth: {
                type: "uint64",
                id: 4
              }
            }
          },
          MdpPerfSetOtFtraceEvent: {
            edition: "proto2",
            fields: {
              pnum: {
                type: "uint32",
                id: 1
              },
              xinId: {
                type: "uint32",
                id: 2
              },
              rdLim: {
                type: "uint32",
                id: 3
              },
              isVbifRt: {
                type: "uint32",
                id: 4
              }
            }
          },
          MdpSsppChangeFtraceEvent: {
            edition: "proto2",
            fields: {
              num: {
                type: "uint32",
                id: 1
              },
              playCnt: {
                type: "uint32",
                id: 2
              },
              mixer: {
                type: "uint32",
                id: 3
              },
              stage: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              },
              format: {
                type: "uint32",
                id: 6
              },
              imgW: {
                type: "uint32",
                id: 7
              },
              imgH: {
                type: "uint32",
                id: 8
              },
              srcX: {
                type: "uint32",
                id: 9
              },
              srcY: {
                type: "uint32",
                id: 10
              },
              srcW: {
                type: "uint32",
                id: 11
              },
              srcH: {
                type: "uint32",
                id: 12
              },
              dstX: {
                type: "uint32",
                id: 13
              },
              dstY: {
                type: "uint32",
                id: 14
              },
              dstW: {
                type: "uint32",
                id: 15
              },
              dstH: {
                type: "uint32",
                id: 16
              }
            }
          },
          TracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              traceName: {
                type: "string",
                id: 2
              },
              traceBegin: {
                type: "uint32",
                id: 3
              }
            }
          },
          MdpCmdPingpongDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              },
              intfNum: {
                type: "uint32",
                id: 2
              },
              ppNum: {
                type: "uint32",
                id: 3
              },
              koffCnt: {
                type: "int32",
                id: 4
              }
            }
          },
          MdpCompareBwFtraceEvent: {
            edition: "proto2",
            fields: {
              newAb: {
                type: "uint64",
                id: 1
              },
              newIb: {
                type: "uint64",
                id: 2
              },
              newWb: {
                type: "uint64",
                id: 3
              },
              oldAb: {
                type: "uint64",
                id: 4
              },
              oldIb: {
                type: "uint64",
                id: 5
              },
              oldWb: {
                type: "uint64",
                id: 6
              },
              paramsChanged: {
                type: "uint32",
                id: 7
              },
              updateBw: {
                type: "uint32",
                id: 8
              }
            }
          },
          MdpPerfSetPanicLutsFtraceEvent: {
            edition: "proto2",
            fields: {
              pnum: {
                type: "uint32",
                id: 1
              },
              fmt: {
                type: "uint32",
                id: 2
              },
              mode: {
                type: "uint32",
                id: 3
              },
              panicLut: {
                type: "uint32",
                id: 4
              },
              robustLut: {
                type: "uint32",
                id: 5
              }
            }
          },
          MdpSsppSetFtraceEvent: {
            edition: "proto2",
            fields: {
              num: {
                type: "uint32",
                id: 1
              },
              playCnt: {
                type: "uint32",
                id: 2
              },
              mixer: {
                type: "uint32",
                id: 3
              },
              stage: {
                type: "uint32",
                id: 4
              },
              flags: {
                type: "uint32",
                id: 5
              },
              format: {
                type: "uint32",
                id: 6
              },
              imgW: {
                type: "uint32",
                id: 7
              },
              imgH: {
                type: "uint32",
                id: 8
              },
              srcX: {
                type: "uint32",
                id: 9
              },
              srcY: {
                type: "uint32",
                id: 10
              },
              srcW: {
                type: "uint32",
                id: 11
              },
              srcH: {
                type: "uint32",
                id: 12
              },
              dstX: {
                type: "uint32",
                id: 13
              },
              dstY: {
                type: "uint32",
                id: 14
              },
              dstW: {
                type: "uint32",
                id: 15
              },
              dstH: {
                type: "uint32",
                id: 16
              }
            }
          },
          MdpCmdReadptrDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              },
              koffCnt: {
                type: "int32",
                id: 2
              }
            }
          },
          MdpMisrCrcFtraceEvent: {
            edition: "proto2",
            fields: {
              blockId: {
                type: "uint32",
                id: 1
              },
              vsyncCnt: {
                type: "uint32",
                id: 2
              },
              crc: {
                type: "uint32",
                id: 3
              }
            }
          },
          MdpPerfSetQosLutsFtraceEvent: {
            edition: "proto2",
            fields: {
              pnum: {
                type: "uint32",
                id: 1
              },
              fmt: {
                type: "uint32",
                id: 2
              },
              intf: {
                type: "uint32",
                id: 3
              },
              rot: {
                type: "uint32",
                id: 4
              },
              fl: {
                type: "uint32",
                id: 5
              },
              lut: {
                type: "uint32",
                id: 6
              },
              linear: {
                type: "uint32",
                id: 7
              }
            }
          },
          MdpTraceCounterFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              counterName: {
                type: "string",
                id: 2
              },
              value: {
                type: "int32",
                id: 3
              }
            }
          },
          MdpCmdReleaseBwFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              }
            }
          },
          MdpMixerUpdateFtraceEvent: {
            edition: "proto2",
            fields: {
              mixerNum: {
                type: "uint32",
                id: 1
              }
            }
          },
          MdpPerfSetWmLevelsFtraceEvent: {
            edition: "proto2",
            fields: {
              pnum: {
                type: "uint32",
                id: 1
              },
              useSpace: {
                type: "uint32",
                id: 2
              },
              priorityBytes: {
                type: "uint32",
                id: 3
              },
              wm0: {
                type: "uint32",
                id: 4
              },
              wm1: {
                type: "uint32",
                id: 5
              },
              wm2: {
                type: "uint32",
                id: 6
              },
              mbCnt: {
                type: "uint32",
                id: 7
              },
              mbSize: {
                type: "uint32",
                id: 8
              }
            }
          },
          MdpVideoUnderrunDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              },
              underrunCnt: {
                type: "uint32",
                id: 2
              }
            }
          },
          MdpCmdWaitPingpongFtraceEvent: {
            edition: "proto2",
            fields: {
              ctlNum: {
                type: "uint32",
                id: 1
              },
              kickoffCnt: {
                type: "int32",
                id: 2
              }
            }
          },
          MdpPerfPrefillCalcFtraceEvent: {
            edition: "proto2",
            fields: {
              pnum: {
                type: "uint32",
                id: 1
              },
              latencyBuf: {
                type: "uint32",
                id: 2
              },
              ot: {
                type: "uint32",
                id: 3
              },
              yBuf: {
                type: "uint32",
                id: 4
              },
              yScaler: {
                type: "uint32",
                id: 5
              },
              ppLines: {
                type: "uint32",
                id: 6
              },
              ppBytes: {
                type: "uint32",
                id: 7
              },
              postSc: {
                type: "uint32",
                id: 8
              },
              fbcBytes: {
                type: "uint32",
                id: 9
              },
              prefillBytes: {
                type: "uint32",
                id: 10
              }
            }
          },
          MdpPerfUpdateBusFtraceEvent: {
            edition: "proto2",
            fields: {
              client: {
                type: "int32",
                id: 1
              },
              abQuota: {
                type: "uint64",
                id: 2
              },
              ibQuota: {
                type: "uint64",
                id: 3
              }
            }
          },
          RotatorBwAoAsContextFtraceEvent: {
            edition: "proto2",
            fields: {
              state: {
                type: "uint32",
                id: 1
              }
            }
          },
          MmEventRecordFtraceEvent: {
            edition: "proto2",
            fields: {
              avgLat: {
                type: "uint32",
                id: 1
              },
              count: {
                type: "uint32",
                id: 2
              },
              maxLat: {
                type: "uint32",
                id: 3
              },
              type: {
                type: "uint32",
                id: 4
              }
            }
          },
          NetifReceiveSkbFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              skbaddr: {
                type: "uint64",
                id: 3
              }
            }
          },
          NetDevXmitFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              rc: {
                type: "int32",
                id: 3
              },
              skbaddr: {
                type: "uint64",
                id: 4
              }
            }
          },
          NapiGroReceiveEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              dataLen: {
                type: "uint32",
                id: 1
              },
              gsoSize: {
                type: "uint32",
                id: 2
              },
              gsoType: {
                type: "uint32",
                id: 3
              },
              hash: {
                type: "uint32",
                id: 4
              },
              ipSummed: {
                type: "uint32",
                id: 5
              },
              l4Hash: {
                type: "uint32",
                id: 6
              },
              len: {
                type: "uint32",
                id: 7
              },
              macHeader: {
                type: "int32",
                id: 8
              },
              macHeaderValid: {
                type: "uint32",
                id: 9
              },
              name: {
                type: "string",
                id: 10
              },
              napiId: {
                type: "uint32",
                id: 11
              },
              nrFrags: {
                type: "uint32",
                id: 12
              },
              protocol: {
                type: "uint32",
                id: 13
              },
              queueMapping: {
                type: "uint32",
                id: 14
              },
              skbaddr: {
                type: "uint64",
                id: 15
              },
              truesize: {
                type: "uint32",
                id: 16
              },
              vlanProto: {
                type: "uint32",
                id: 17
              },
              vlanTagged: {
                type: "uint32",
                id: 18
              },
              vlanTci: {
                type: "uint32",
                id: 19
              }
            }
          },
          NapiGroReceiveExitFtraceEvent: {
            edition: "proto2",
            fields: {
              ret: {
                type: "int32",
                id: 1
              }
            }
          },
          OomScoreAdjUpdateFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              oomScoreAdj: {
                type: "int32",
                id: 2
              },
              pid: {
                type: "int32",
                id: 3
              }
            }
          },
          MarkVictimFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              }
            }
          },
          DsiCmdFifoStatusFtraceEvent: {
            edition: "proto2",
            fields: {
              header: {
                type: "uint32",
                id: 1
              },
              payload: {
                type: "uint32",
                id: 2
              }
            }
          },
          DsiRxFtraceEvent: {
            edition: "proto2",
            fields: {
              cmd: {
                type: "uint32",
                id: 1
              },
              rxBuf: {
                type: "uint32",
                id: 2
              }
            }
          },
          DsiTxFtraceEvent: {
            edition: "proto2",
            fields: {
              last: {
                type: "uint32",
                id: 1
              },
              txBuf: {
                type: "uint32",
                id: 2
              },
              type: {
                type: "uint32",
                id: 3
              }
            }
          },
          PanelWriteGenericFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              traceName: {
                type: "string",
                id: 2
              },
              traceBegin: {
                type: "uint32",
                id: 3
              },
              name: {
                type: "string",
                id: 4
              },
              type: {
                type: "uint32",
                id: 5
              },
              value: {
                type: "int32",
                id: 6
              }
            }
          },
          SchedSwitchWithCtrsFtraceEvent: {
            edition: "proto2",
            fields: {
              oldPid: {
                type: "int32",
                id: 1
              },
              newPid: {
                type: "int32",
                id: 2
              },
              cctr: {
                type: "uint64",
                id: 3
              },
              ctr0: {
                type: "uint64",
                id: 4
              },
              ctr1: {
                type: "uint64",
                id: 5
              },
              ctr2: {
                type: "uint64",
                id: 6
              },
              ctr3: {
                type: "uint64",
                id: 7
              },
              lctr0: {
                type: "uint32",
                id: 8
              },
              lctr1: {
                type: "uint32",
                id: 9
              },
              ctr4: {
                type: "uint64",
                id: 10
              },
              ctr5: {
                type: "uint64",
                id: 11
              },
              prevComm: {
                type: "string",
                id: 12
              },
              prevPid: {
                type: "int32",
                id: 13
              },
              cyc: {
                type: "uint32",
                id: 14
              },
              inst: {
                type: "uint32",
                id: 15
              },
              stallbm: {
                type: "uint32",
                id: 16
              },
              l3dm: {
                type: "uint32",
                id: 17
              },
              nextPid: {
                type: "int32",
                id: 18
              },
              nextComm: {
                type: "string",
                id: 19
              },
              prevState: {
                type: "int64",
                id: 20
              },
              amu0: {
                type: "uint64",
                id: 21
              },
              amu1: {
                type: "uint64",
                id: 22
              },
              amu2: {
                type: "uint64",
                id: 23
              }
            }
          },
          PixelMmKswapdWakeFtraceEvent: {
            edition: "proto2",
            fields: {
              whatever: {
                type: "int32",
                id: 1
              }
            }
          },
          PixelMmKswapdDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              deltaNrScanned: {
                type: "uint64",
                id: 1
              },
              deltaNrReclaimed: {
                type: "uint64",
                id: 2
              }
            }
          },
          CpuFrequencyFtraceEvent: {
            edition: "proto2",
            fields: {
              state: {
                type: "uint32",
                id: 1
              },
              cpuId: {
                type: "uint32",
                id: 2
              }
            }
          },
          CpuFrequencyLimitsFtraceEvent: {
            edition: "proto2",
            fields: {
              minFreq: {
                type: "uint32",
                id: 1
              },
              maxFreq: {
                type: "uint32",
                id: 2
              },
              cpuId: {
                type: "uint32",
                id: 3
              }
            }
          },
          CpuIdleFtraceEvent: {
            edition: "proto2",
            fields: {
              state: {
                type: "uint32",
                id: 1
              },
              cpuId: {
                type: "uint32",
                id: 2
              }
            }
          },
          ClockEnableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              state: {
                type: "uint64",
                id: 2
              },
              cpuId: {
                type: "uint64",
                id: 3
              }
            }
          },
          ClockDisableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              state: {
                type: "uint64",
                id: 2
              },
              cpuId: {
                type: "uint64",
                id: 3
              }
            }
          },
          ClockSetRateFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              state: {
                type: "uint64",
                id: 2
              },
              cpuId: {
                type: "uint64",
                id: 3
              }
            }
          },
          SuspendResumeFtraceEvent: {
            edition: "proto2",
            fields: {
              action: {
                type: "string",
                id: 1
              },
              val: {
                type: "int32",
                id: 2
              },
              start: {
                type: "uint32",
                id: 3
              }
            }
          },
          GpuFrequencyFtraceEvent: {
            edition: "proto2",
            fields: {
              gpuId: {
                type: "uint32",
                id: 1
              },
              state: {
                type: "uint32",
                id: 2
              }
            }
          },
          WakeupSourceActivateFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              state: {
                type: "uint64",
                id: 2
              }
            }
          },
          WakeupSourceDeactivateFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              state: {
                type: "uint64",
                id: 2
              }
            }
          },
          GpuWorkPeriodFtraceEvent: {
            edition: "proto2",
            fields: {
              gpuId: {
                type: "uint32",
                id: 1
              },
              uid: {
                type: "uint32",
                id: 2
              },
              startTimeNs: {
                type: "uint64",
                id: 3
              },
              endTimeNs: {
                type: "uint64",
                id: 4
              },
              totalActiveDurationNs: {
                type: "uint64",
                id: 5
              }
            }
          },
          DevicePmCallbackStartFtraceEvent: {
            edition: "proto2",
            fields: {
              device: {
                type: "string",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              parent: {
                type: "string",
                id: 3
              },
              pmOps: {
                type: "string",
                id: 4
              },
              event: {
                type: "int32",
                id: 5
              }
            }
          },
          DevicePmCallbackEndFtraceEvent: {
            edition: "proto2",
            fields: {
              device: {
                type: "string",
                id: 1
              },
              driver: {
                type: "string",
                id: 2
              },
              error: {
                type: "int32",
                id: 3
              }
            }
          },
          ConsoleFtraceEvent: {
            edition: "proto2",
            fields: {
              msg: {
                type: "string",
                id: 1
              }
            }
          },
          SysEnterFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int64",
                id: 1
              },
              args: {
                rule: "repeated",
                type: "uint64",
                id: 2
              }
            }
          },
          SysExitFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int64",
                id: 1
              },
              ret: {
                type: "int64",
                id: 2
              }
            }
          },
          RegulatorDisableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          RegulatorDisableCompleteFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          RegulatorEnableFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          RegulatorEnableCompleteFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          RegulatorEnableDelayFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          RegulatorSetVoltageFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              min: {
                type: "int32",
                id: 2
              },
              max: {
                type: "int32",
                id: 3
              }
            }
          },
          RegulatorSetVoltageCompleteFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              val: {
                type: "uint32",
                id: 2
              }
            }
          },
          RpmStatusFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              status: {
                type: "int32",
                id: 2
              }
            }
          },
          SamsungTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              traceName: {
                type: "string",
                id: 2
              },
              traceBegin: {
                type: "uint32",
                id: 3
              },
              traceType: {
                type: "uint32",
                id: 4
              },
              value: {
                type: "int32",
                id: 5
              }
            }
          },
          SchedSwitchFtraceEvent: {
            edition: "proto2",
            fields: {
              prevComm: {
                type: "string",
                id: 1
              },
              prevPid: {
                type: "int32",
                id: 2
              },
              prevPrio: {
                type: "int32",
                id: 3
              },
              prevState: {
                type: "int64",
                id: 4
              },
              nextComm: {
                type: "string",
                id: 5
              },
              nextPid: {
                type: "int32",
                id: 6
              },
              nextPrio: {
                type: "int32",
                id: 7
              }
            }
          },
          SchedWakeupFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              },
              success: {
                type: "int32",
                id: 4
              },
              targetCpu: {
                type: "int32",
                id: 5
              }
            }
          },
          SchedBlockedReasonFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              caller: {
                type: "uint64",
                id: 2
              },
              ioWait: {
                type: "uint32",
                id: 3
              }
            }
          },
          SchedCpuHotplugFtraceEvent: {
            edition: "proto2",
            fields: {
              affectedCpu: {
                type: "int32",
                id: 1
              },
              error: {
                type: "int32",
                id: 2
              },
              status: {
                type: "int32",
                id: 3
              }
            }
          },
          SchedWakingFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              },
              success: {
                type: "int32",
                id: 4
              },
              targetCpu: {
                type: "int32",
                id: 5
              }
            }
          },
          SchedWakeupNewFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              },
              success: {
                type: "int32",
                id: 4
              },
              targetCpu: {
                type: "int32",
                id: 5
              }
            }
          },
          SchedProcessExecFtraceEvent: {
            edition: "proto2",
            fields: {
              filename: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              oldPid: {
                type: "int32",
                id: 3
              }
            }
          },
          SchedProcessExitFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              tgid: {
                type: "int32",
                id: 3
              },
              prio: {
                type: "int32",
                id: 4
              }
            }
          },
          SchedProcessForkFtraceEvent: {
            edition: "proto2",
            fields: {
              parentComm: {
                type: "string",
                id: 1
              },
              parentPid: {
                type: "int32",
                id: 2
              },
              childComm: {
                type: "string",
                id: 3
              },
              childPid: {
                type: "int32",
                id: 4
              }
            }
          },
          SchedProcessFreeFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              }
            }
          },
          SchedProcessHangFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              }
            }
          },
          SchedProcessWaitFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              }
            }
          },
          SchedPiSetprioFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              newprio: {
                type: "int32",
                id: 2
              },
              oldprio: {
                type: "int32",
                id: 3
              },
              pid: {
                type: "int32",
                id: 4
              }
            }
          },
          SchedCpuUtilCfsFtraceEvent: {
            edition: "proto2",
            fields: {
              active: {
                type: "int32",
                id: 1
              },
              capacity: {
                type: "uint64",
                id: 2
              },
              capacityOrig: {
                type: "uint64",
                id: 3
              },
              cpu: {
                type: "uint32",
                id: 4
              },
              cpuImportance: {
                type: "uint64",
                id: 5
              },
              cpuUtil: {
                type: "uint64",
                id: 6
              },
              exitLat: {
                type: "uint32",
                id: 7
              },
              groupCapacity: {
                type: "uint64",
                id: 8
              },
              grpOverutilized: {
                type: "uint32",
                id: 9
              },
              idleCpu: {
                type: "uint32",
                id: 10
              },
              nrRunning: {
                type: "uint32",
                id: 11
              },
              spareCap: {
                type: "int64",
                id: 12
              },
              taskFits: {
                type: "uint32",
                id: 13
              },
              wakeGroupUtil: {
                type: "uint64",
                id: 14
              },
              wakeUtil: {
                type: "uint64",
                id: 15
              }
            }
          },
          SchedMigrateTaskFtraceEvent: {
            edition: "proto2",
            fields: {
              comm: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              prio: {
                type: "int32",
                id: 3
              },
              origCpu: {
                type: "int32",
                id: 4
              },
              destCpu: {
                type: "int32",
                id: 5
              },
              running: {
                type: "int32",
                id: 6
              },
              load: {
                type: "uint32",
                id: 7
              }
            }
          },
          SchedWakeupTaskAttrFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              cpuAffinity: {
                type: "uint64",
                id: 2
              },
              taskUtil: {
                type: "uint64",
                id: 3
              },
              uclampMin: {
                type: "uint64",
                id: 4
              },
              vruntime: {
                type: "uint64",
                id: 5
              }
            }
          },
          ScmCallStartFtraceEvent: {
            edition: "proto2",
            fields: {
              arginfo: {
                type: "uint32",
                id: 1
              },
              x0: {
                type: "uint64",
                id: 2
              },
              x5: {
                type: "uint64",
                id: 3
              }
            }
          },
          ScmCallEndFtraceEvent: {
            edition: "proto2",
            fields: {}
          },
          SdeTracingMarkWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              traceName: {
                type: "string",
                id: 2
              },
              traceType: {
                type: "uint32",
                id: 3
              },
              value: {
                type: "int32",
                id: 4
              },
              traceBegin: {
                type: "uint32",
                id: 5
              }
            }
          },
          SdeSdeEvtlogFtraceEvent: {
            edition: "proto2",
            fields: {
              evtlogTag: {
                type: "string",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              tagId: {
                type: "uint32",
                id: 3
              }
            }
          },
          SdeSdePerfCalcCrtcFtraceEvent: {
            edition: "proto2",
            fields: {
              bwCtlEbi: {
                type: "uint64",
                id: 1
              },
              bwCtlLlcc: {
                type: "uint64",
                id: 2
              },
              bwCtlMnoc: {
                type: "uint64",
                id: 3
              },
              coreClkRate: {
                type: "uint32",
                id: 4
              },
              crtc: {
                type: "uint32",
                id: 5
              },
              ibEbi: {
                type: "uint64",
                id: 6
              },
              ibLlcc: {
                type: "uint64",
                id: 7
              },
              ibMnoc: {
                type: "uint64",
                id: 8
              }
            }
          },
          SdeSdePerfCrtcUpdateFtraceEvent: {
            edition: "proto2",
            fields: {
              bwCtlEbi: {
                type: "uint64",
                id: 1
              },
              bwCtlLlcc: {
                type: "uint64",
                id: 2
              },
              bwCtlMnoc: {
                type: "uint64",
                id: 3
              },
              coreClkRate: {
                type: "uint32",
                id: 4
              },
              crtc: {
                type: "uint32",
                id: 5
              },
              params: {
                type: "int32",
                id: 6
              },
              perPipeIbEbi: {
                type: "uint64",
                id: 7
              },
              perPipeIbLlcc: {
                type: "uint64",
                id: 8
              },
              perPipeIbMnoc: {
                type: "uint64",
                id: 9
              },
              stopReq: {
                type: "uint32",
                id: 10
              },
              updateBus: {
                type: "uint32",
                id: 11
              },
              updateClk: {
                type: "uint32",
                id: 12
              }
            }
          },
          SdeSdePerfSetQosLutsFtraceEvent: {
            edition: "proto2",
            fields: {
              fl: {
                type: "uint32",
                id: 1
              },
              fmt: {
                type: "uint32",
                id: 2
              },
              lut: {
                type: "uint64",
                id: 3
              },
              lutUsage: {
                type: "uint32",
                id: 4
              },
              pnum: {
                type: "uint32",
                id: 5
              },
              rt: {
                type: "uint32",
                id: 6
              }
            }
          },
          SdeSdePerfUpdateBusFtraceEvent: {
            edition: "proto2",
            fields: {
              abQuota: {
                type: "uint64",
                id: 1
              },
              busId: {
                type: "uint32",
                id: 2
              },
              client: {
                type: "int32",
                id: 3
              },
              ibQuota: {
                type: "uint64",
                id: 4
              }
            }
          },
          SignalDeliverFtraceEvent: {
            edition: "proto2",
            fields: {
              code: {
                type: "int32",
                id: 1
              },
              saFlags: {
                type: "uint64",
                id: 2
              },
              sig: {
                type: "int32",
                id: 3
              }
            }
          },
          SignalGenerateFtraceEvent: {
            edition: "proto2",
            fields: {
              code: {
                type: "int32",
                id: 1
              },
              comm: {
                type: "string",
                id: 2
              },
              group: {
                type: "int32",
                id: 3
              },
              pid: {
                type: "int32",
                id: 4
              },
              result: {
                type: "int32",
                id: 5
              },
              sig: {
                type: "int32",
                id: 6
              }
            }
          },
          KfreeSkbFtraceEvent: {
            edition: "proto2",
            fields: {
              location: {
                type: "uint64",
                id: 1
              },
              protocol: {
                type: "uint32",
                id: 2
              },
              skbaddr: {
                type: "uint64",
                id: 3
              }
            }
          },
          InetSockSetStateFtraceEvent: {
            edition: "proto2",
            fields: {
              daddr: {
                type: "uint32",
                id: 1
              },
              dport: {
                type: "uint32",
                id: 2
              },
              family: {
                type: "uint32",
                id: 3
              },
              newstate: {
                type: "int32",
                id: 4
              },
              oldstate: {
                type: "int32",
                id: 5
              },
              protocol: {
                type: "uint32",
                id: 6
              },
              saddr: {
                type: "uint32",
                id: 7
              },
              skaddr: {
                type: "uint64",
                id: 8
              },
              sport: {
                type: "uint32",
                id: 9
              }
            }
          },
          SyncPtFtraceEvent: {
            edition: "proto2",
            fields: {
              timeline: {
                type: "string",
                id: 1
              },
              value: {
                type: "string",
                id: 2
              }
            }
          },
          SyncTimelineFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                type: "string",
                id: 2
              }
            }
          },
          SyncWaitFtraceEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              status: {
                type: "int32",
                id: 2
              },
              begin: {
                type: "uint32",
                id: 3
              }
            }
          },
          RssStatThrottledFtraceEvent: {
            edition: "proto2",
            fields: {
              curr: {
                type: "uint32",
                id: 1
              },
              member: {
                type: "int32",
                id: 2
              },
              mmId: {
                type: "uint32",
                id: 3
              },
              size: {
                type: "int64",
                id: 4
              }
            }
          },
          SuspendResumeMinimalFtraceEvent: {
            edition: "proto2",
            fields: {
              start: {
                type: "uint32",
                id: 1
              }
            }
          },
          ZeroFtraceEvent: {
            edition: "proto2",
            fields: {
              flag: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              pid: {
                type: "int32",
                id: 3
              },
              value: {
                type: "int64",
                id: 4
              }
            }
          },
          TaskNewtaskFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              comm: {
                type: "string",
                id: 2
              },
              cloneFlags: {
                type: "uint64",
                id: 3
              },
              oomScoreAdj: {
                type: "int32",
                id: 4
              }
            }
          },
          TaskRenameFtraceEvent: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              oldcomm: {
                type: "string",
                id: 2
              },
              newcomm: {
                type: "string",
                id: 3
              },
              oomScoreAdj: {
                type: "int32",
                id: 4
              }
            }
          },
          TcpRetransmitSkbFtraceEvent: {
            edition: "proto2",
            fields: {
              daddr: {
                type: "uint32",
                id: 1
              },
              dport: {
                type: "uint32",
                id: 2
              },
              saddr: {
                type: "uint32",
                id: 3
              },
              skaddr: {
                type: "uint64",
                id: 4
              },
              skbaddr: {
                type: "uint64",
                id: 5
              },
              sport: {
                type: "uint32",
                id: 6
              },
              state: {
                type: "int32",
                id: 7
              }
            }
          },
          ThermalTemperatureFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              temp: {
                type: "int32",
                id: 2
              },
              tempPrev: {
                type: "int32",
                id: 3
              },
              thermalZone: {
                type: "string",
                id: 4
              }
            }
          },
          CdevUpdateFtraceEvent: {
            edition: "proto2",
            fields: {
              target: {
                type: "uint64",
                id: 1
              },
              type: {
                type: "string",
                id: 2
              }
            }
          },
          ThermalExynosAcpmBulkFtraceEvent: {
            edition: "proto2",
            fields: {
              tzId: {
                type: "uint32",
                id: 1
              },
              currentTemp: {
                type: "uint32",
                id: 2
              },
              ctrlTemp: {
                type: "uint32",
                id: 3
              },
              cdevState: {
                type: "uint32",
                id: 4
              },
              pidEtP: {
                type: "int32",
                id: 5
              },
              pidPowerRange: {
                type: "int32",
                id: 6
              },
              pidP: {
                type: "int32",
                id: 7
              },
              pidI: {
                type: "int32",
                id: 8
              },
              kP: {
                type: "int32",
                id: 9
              },
              kI: {
                type: "int32",
                id: 10
              },
              timestamp: {
                type: "uint64",
                id: 11
              }
            }
          },
          ThermalExynosAcpmHighOverheadFtraceEvent: {
            edition: "proto2",
            fields: {
              tzId: {
                type: "int32",
                id: 1
              },
              currentTemp: {
                type: "uint32",
                id: 2
              },
              ctrlTemp: {
                type: "uint32",
                id: 3
              },
              cdevState: {
                type: "uint32",
                id: 4
              },
              pidEtP: {
                type: "int32",
                id: 5
              },
              kP: {
                type: "int32",
                id: 6
              },
              kI: {
                type: "int32",
                id: 7
              }
            }
          },
          HrtimerStartFtraceEvent: {
            edition: "proto2",
            fields: {
              hrtimer: {
                type: "uint64",
                id: 1
              },
              "function": {
                type: "uint64",
                id: 2
              },
              expires: {
                type: "int64",
                id: 3
              },
              softexpires: {
                type: "int64",
                id: 4
              },
              mode: {
                type: "uint32",
                id: 5
              }
            }
          },
          HrtimerCancelFtraceEvent: {
            edition: "proto2",
            fields: {
              hrtimer: {
                type: "uint64",
                id: 1
              }
            }
          },
          HrtimerExpireEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              hrtimer: {
                type: "uint64",
                id: 1
              },
              now: {
                type: "int64",
                id: 2
              },
              "function": {
                type: "uint64",
                id: 3
              }
            }
          },
          HrtimerExpireExitFtraceEvent: {
            edition: "proto2",
            fields: {
              hrtimer: {
                type: "uint64",
                id: 1
              }
            }
          },
          TimerStartFtraceEvent: {
            edition: "proto2",
            fields: {
              timer: {
                type: "uint64",
                id: 1
              },
              "function": {
                type: "uint64",
                id: 2
              },
              expires: {
                type: "uint64",
                id: 3
              },
              now: {
                type: "uint64",
                id: 4
              },
              deferrable: {
                type: "uint32",
                id: 5
              },
              flags: {
                type: "uint32",
                id: 6
              },
              bucketExpiry: {
                type: "uint64",
                id: 7
              }
            }
          },
          TimerCancelFtraceEvent: {
            edition: "proto2",
            fields: {
              timer: {
                type: "uint64",
                id: 1
              }
            }
          },
          TimerExpireEntryFtraceEvent: {
            edition: "proto2",
            fields: {
              timer: {
                type: "uint64",
                id: 1
              },
              now: {
                type: "uint64",
                id: 2
              },
              "function": {
                type: "uint64",
                id: 3
              },
              baseclk: {
                type: "uint64",
                id: 4
              }
            }
          },
          TimerExpireExitFtraceEvent: {
            edition: "proto2",
            fields: {
              timer: {
                type: "uint64",
                id: 1
              }
            }
          },
          TrustySmcFtraceEvent: {
            edition: "proto2",
            fields: {
              r0: {
                type: "uint64",
                id: 1
              },
              r1: {
                type: "uint64",
                id: 2
              },
              r2: {
                type: "uint64",
                id: 3
              },
              r3: {
                type: "uint64",
                id: 4
              }
            }
          },
          TrustySmcDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              ret: {
                type: "uint64",
                id: 1
              }
            }
          },
          TrustyStdCall32FtraceEvent: {
            edition: "proto2",
            fields: {
              r0: {
                type: "uint64",
                id: 1
              },
              r1: {
                type: "uint64",
                id: 2
              },
              r2: {
                type: "uint64",
                id: 3
              },
              r3: {
                type: "uint64",
                id: 4
              }
            }
          },
          TrustyStdCall32DoneFtraceEvent: {
            edition: "proto2",
            fields: {
              ret: {
                type: "int64",
                id: 1
              }
            }
          },
          TrustyShareMemoryFtraceEvent: {
            edition: "proto2",
            fields: {
              len: {
                type: "uint64",
                id: 1
              },
              lend: {
                type: "uint32",
                id: 2
              },
              nents: {
                type: "uint32",
                id: 3
              }
            }
          },
          TrustyShareMemoryDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              handle: {
                type: "uint64",
                id: 1
              },
              len: {
                type: "uint64",
                id: 2
              },
              lend: {
                type: "uint32",
                id: 3
              },
              nents: {
                type: "uint32",
                id: 4
              },
              ret: {
                type: "int32",
                id: 5
              }
            }
          },
          TrustyReclaimMemoryFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint64",
                id: 1
              }
            }
          },
          TrustyReclaimMemoryDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint64",
                id: 1
              },
              ret: {
                type: "int32",
                id: 2
              }
            }
          },
          TrustyIrqFtraceEvent: {
            edition: "proto2",
            fields: {
              irq: {
                type: "int32",
                id: 1
              }
            }
          },
          TrustyIpcHandleEventFtraceEvent: {
            edition: "proto2",
            fields: {
              chan: {
                type: "uint32",
                id: 1
              },
              eventId: {
                type: "uint32",
                id: 2
              },
              srvName: {
                type: "string",
                id: 3
              }
            }
          },
          TrustyIpcConnectFtraceEvent: {
            edition: "proto2",
            fields: {
              chan: {
                type: "uint32",
                id: 1
              },
              port: {
                type: "string",
                id: 2
              },
              state: {
                type: "int32",
                id: 3
              }
            }
          },
          TrustyIpcConnectEndFtraceEvent: {
            edition: "proto2",
            fields: {
              chan: {
                type: "uint32",
                id: 1
              },
              err: {
                type: "int32",
                id: 2
              },
              state: {
                type: "int32",
                id: 3
              }
            }
          },
          TrustyIpcWriteFtraceEvent: {
            edition: "proto2",
            fields: {
              bufId: {
                type: "uint64",
                id: 1
              },
              chan: {
                type: "uint32",
                id: 2
              },
              kindShm: {
                type: "int32",
                id: 3
              },
              lenOrErr: {
                type: "int32",
                id: 4
              },
              shmCnt: {
                type: "uint64",
                id: 5
              },
              srvName: {
                type: "string",
                id: 6
              }
            }
          },
          TrustyIpcPollFtraceEvent: {
            edition: "proto2",
            fields: {
              chan: {
                type: "uint32",
                id: 1
              },
              pollMask: {
                type: "uint32",
                id: 2
              },
              srvName: {
                type: "string",
                id: 3
              }
            }
          },
          TrustyIpcReadFtraceEvent: {
            edition: "proto2",
            fields: {
              chan: {
                type: "uint32",
                id: 1
              },
              srvName: {
                type: "string",
                id: 2
              }
            }
          },
          TrustyIpcReadEndFtraceEvent: {
            edition: "proto2",
            fields: {
              bufId: {
                type: "uint64",
                id: 1
              },
              chan: {
                type: "uint32",
                id: 2
              },
              lenOrErr: {
                type: "int32",
                id: 3
              },
              shmCnt: {
                type: "uint64",
                id: 4
              },
              srvName: {
                type: "string",
                id: 5
              }
            }
          },
          TrustyIpcRxFtraceEvent: {
            edition: "proto2",
            fields: {
              bufId: {
                type: "uint64",
                id: 1
              },
              chan: {
                type: "uint32",
                id: 2
              },
              srvName: {
                type: "string",
                id: 3
              }
            }
          },
          TrustyEnqueueNopFtraceEvent: {
            edition: "proto2",
            fields: {
              arg1: {
                type: "uint32",
                id: 1
              },
              arg2: {
                type: "uint32",
                id: 2
              },
              arg3: {
                type: "uint32",
                id: 3
              }
            }
          },
          UfshcdCommandFtraceEvent: {
            edition: "proto2",
            fields: {
              devName: {
                type: "string",
                id: 1
              },
              doorbell: {
                type: "uint32",
                id: 2
              },
              intr: {
                type: "uint32",
                id: 3
              },
              lba: {
                type: "uint64",
                id: 4
              },
              opcode: {
                type: "uint32",
                id: 5
              },
              str: {
                type: "string",
                id: 6
              },
              tag: {
                type: "uint32",
                id: 7
              },
              transferLen: {
                type: "int32",
                id: 8
              },
              groupId: {
                type: "uint32",
                id: 9
              },
              strT: {
                type: "uint32",
                id: 10
              }
            }
          },
          UfshcdClkGatingFtraceEvent: {
            edition: "proto2",
            fields: {
              devName: {
                type: "string",
                id: 1
              },
              state: {
                type: "int32",
                id: 2
              }
            }
          },
          V4l2QbufFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesused: {
                type: "uint32",
                id: 1
              },
              field: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              index: {
                type: "uint32",
                id: 4
              },
              minor: {
                type: "int32",
                id: 5
              },
              sequence: {
                type: "uint32",
                id: 6
              },
              timecodeFlags: {
                type: "uint32",
                id: 7
              },
              timecodeFrames: {
                type: "uint32",
                id: 8
              },
              timecodeHours: {
                type: "uint32",
                id: 9
              },
              timecodeMinutes: {
                type: "uint32",
                id: 10
              },
              timecodeSeconds: {
                type: "uint32",
                id: 11
              },
              timecodeType: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 14
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 15
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 16
              },
              timestamp: {
                type: "int64",
                id: 17
              },
              type: {
                type: "uint32",
                id: 18
              }
            }
          },
          V4l2DqbufFtraceEvent: {
            edition: "proto2",
            fields: {
              bytesused: {
                type: "uint32",
                id: 1
              },
              field: {
                type: "uint32",
                id: 2
              },
              flags: {
                type: "uint32",
                id: 3
              },
              index: {
                type: "uint32",
                id: 4
              },
              minor: {
                type: "int32",
                id: 5
              },
              sequence: {
                type: "uint32",
                id: 6
              },
              timecodeFlags: {
                type: "uint32",
                id: 7
              },
              timecodeFrames: {
                type: "uint32",
                id: 8
              },
              timecodeHours: {
                type: "uint32",
                id: 9
              },
              timecodeMinutes: {
                type: "uint32",
                id: 10
              },
              timecodeSeconds: {
                type: "uint32",
                id: 11
              },
              timecodeType: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 14
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 15
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 16
              },
              timestamp: {
                type: "int64",
                id: 17
              },
              type: {
                type: "uint32",
                id: 18
              }
            }
          },
          Vb2V4l2BufQueueFtraceEvent: {
            edition: "proto2",
            fields: {
              field: {
                type: "uint32",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              minor: {
                type: "int32",
                id: 3
              },
              sequence: {
                type: "uint32",
                id: 4
              },
              timecodeFlags: {
                type: "uint32",
                id: 5
              },
              timecodeFrames: {
                type: "uint32",
                id: 6
              },
              timecodeHours: {
                type: "uint32",
                id: 7
              },
              timecodeMinutes: {
                type: "uint32",
                id: 8
              },
              timecodeSeconds: {
                type: "uint32",
                id: 9
              },
              timecodeType: {
                type: "uint32",
                id: 10
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 11
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 14
              },
              timestamp: {
                type: "int64",
                id: 15
              }
            }
          },
          Vb2V4l2BufDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              field: {
                type: "uint32",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              minor: {
                type: "int32",
                id: 3
              },
              sequence: {
                type: "uint32",
                id: 4
              },
              timecodeFlags: {
                type: "uint32",
                id: 5
              },
              timecodeFrames: {
                type: "uint32",
                id: 6
              },
              timecodeHours: {
                type: "uint32",
                id: 7
              },
              timecodeMinutes: {
                type: "uint32",
                id: 8
              },
              timecodeSeconds: {
                type: "uint32",
                id: 9
              },
              timecodeType: {
                type: "uint32",
                id: 10
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 11
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 14
              },
              timestamp: {
                type: "int64",
                id: 15
              }
            }
          },
          Vb2V4l2QbufFtraceEvent: {
            edition: "proto2",
            fields: {
              field: {
                type: "uint32",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              minor: {
                type: "int32",
                id: 3
              },
              sequence: {
                type: "uint32",
                id: 4
              },
              timecodeFlags: {
                type: "uint32",
                id: 5
              },
              timecodeFrames: {
                type: "uint32",
                id: 6
              },
              timecodeHours: {
                type: "uint32",
                id: 7
              },
              timecodeMinutes: {
                type: "uint32",
                id: 8
              },
              timecodeSeconds: {
                type: "uint32",
                id: 9
              },
              timecodeType: {
                type: "uint32",
                id: 10
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 11
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 14
              },
              timestamp: {
                type: "int64",
                id: 15
              }
            }
          },
          Vb2V4l2DqbufFtraceEvent: {
            edition: "proto2",
            fields: {
              field: {
                type: "uint32",
                id: 1
              },
              flags: {
                type: "uint32",
                id: 2
              },
              minor: {
                type: "int32",
                id: 3
              },
              sequence: {
                type: "uint32",
                id: 4
              },
              timecodeFlags: {
                type: "uint32",
                id: 5
              },
              timecodeFrames: {
                type: "uint32",
                id: 6
              },
              timecodeHours: {
                type: "uint32",
                id: 7
              },
              timecodeMinutes: {
                type: "uint32",
                id: 8
              },
              timecodeSeconds: {
                type: "uint32",
                id: 9
              },
              timecodeType: {
                type: "uint32",
                id: 10
              },
              timecodeUserbits0: {
                type: "uint32",
                id: 11
              },
              timecodeUserbits1: {
                type: "uint32",
                id: 12
              },
              timecodeUserbits2: {
                type: "uint32",
                id: 13
              },
              timecodeUserbits3: {
                type: "uint32",
                id: 14
              },
              timestamp: {
                type: "int64",
                id: 15
              }
            }
          },
          VirtioGpuCmdQueueFtraceEvent: {
            edition: "proto2",
            fields: {
              ctxId: {
                type: "uint32",
                id: 1
              },
              dev: {
                type: "int32",
                id: 2
              },
              fenceId: {
                type: "uint64",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              name: {
                type: "string",
                id: 5
              },
              numFree: {
                type: "uint32",
                id: 6
              },
              seqno: {
                type: "uint32",
                id: 7
              },
              type: {
                type: "uint32",
                id: 8
              },
              vq: {
                type: "uint32",
                id: 9
              }
            }
          },
          VirtioGpuCmdResponseFtraceEvent: {
            edition: "proto2",
            fields: {
              ctxId: {
                type: "uint32",
                id: 1
              },
              dev: {
                type: "int32",
                id: 2
              },
              fenceId: {
                type: "uint64",
                id: 3
              },
              flags: {
                type: "uint32",
                id: 4
              },
              name: {
                type: "string",
                id: 5
              },
              numFree: {
                type: "uint32",
                id: 6
              },
              seqno: {
                type: "uint32",
                id: 7
              },
              type: {
                type: "uint32",
                id: 8
              },
              vq: {
                type: "uint32",
                id: 9
              }
            }
          },
          VirtioVideoCmdFtraceEvent: {
            edition: "proto2",
            fields: {
              streamId: {
                type: "uint32",
                id: 1
              },
              type: {
                type: "uint32",
                id: 2
              }
            }
          },
          VirtioVideoCmdDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              streamId: {
                type: "uint32",
                id: 1
              },
              type: {
                type: "uint32",
                id: 2
              }
            }
          },
          VirtioVideoResourceQueueFtraceEvent: {
            edition: "proto2",
            fields: {
              dataSize0: {
                type: "uint32",
                id: 1
              },
              dataSize1: {
                type: "uint32",
                id: 2
              },
              dataSize2: {
                type: "uint32",
                id: 3
              },
              dataSize3: {
                type: "uint32",
                id: 4
              },
              queueType: {
                type: "uint32",
                id: 5
              },
              resourceId: {
                type: "int32",
                id: 6
              },
              streamId: {
                type: "int32",
                id: 7
              },
              timestamp: {
                type: "uint64",
                id: 8
              }
            }
          },
          VirtioVideoResourceQueueDoneFtraceEvent: {
            edition: "proto2",
            fields: {
              dataSize0: {
                type: "uint32",
                id: 1
              },
              dataSize1: {
                type: "uint32",
                id: 2
              },
              dataSize2: {
                type: "uint32",
                id: 3
              },
              dataSize3: {
                type: "uint32",
                id: 4
              },
              queueType: {
                type: "uint32",
                id: 5
              },
              resourceId: {
                type: "int32",
                id: 6
              },
              streamId: {
                type: "int32",
                id: 7
              },
              timestamp: {
                type: "uint64",
                id: 8
              }
            }
          },
          MmVmscanDirectReclaimBeginFtraceEvent: {
            edition: "proto2",
            fields: {
              order: {
                type: "int32",
                id: 1
              },
              mayWritepage: {
                type: "int32",
                id: 2
              },
              gfpFlags: {
                type: "uint32",
                id: 3
              }
            }
          },
          MmVmscanDirectReclaimEndFtraceEvent: {
            edition: "proto2",
            fields: {
              nrReclaimed: {
                type: "uint64",
                id: 1
              }
            }
          },
          MmVmscanKswapdWakeFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              },
              order: {
                type: "int32",
                id: 2
              },
              zid: {
                type: "int32",
                id: 3
              }
            }
          },
          MmVmscanKswapdSleepFtraceEvent: {
            edition: "proto2",
            fields: {
              nid: {
                type: "int32",
                id: 1
              }
            }
          },
          MmShrinkSlabStartFtraceEvent: {
            edition: "proto2",
            fields: {
              cacheItems: {
                type: "uint64",
                id: 1
              },
              delta: {
                type: "uint64",
                id: 2
              },
              gfpFlags: {
                type: "uint32",
                id: 3
              },
              lruPgs: {
                type: "uint64",
                id: 4
              },
              nrObjectsToShrink: {
                type: "int64",
                id: 5
              },
              pgsScanned: {
                type: "uint64",
                id: 6
              },
              shr: {
                type: "uint64",
                id: 7
              },
              shrink: {
                type: "uint64",
                id: 8
              },
              totalScan: {
                type: "uint64",
                id: 9
              },
              nid: {
                type: "int32",
                id: 10
              },
              priority: {
                type: "int32",
                id: 11
              }
            }
          },
          MmShrinkSlabEndFtraceEvent: {
            edition: "proto2",
            fields: {
              newScan: {
                type: "int64",
                id: 1
              },
              retval: {
                type: "int32",
                id: 2
              },
              shr: {
                type: "uint64",
                id: 3
              },
              shrink: {
                type: "uint64",
                id: 4
              },
              totalScan: {
                type: "int64",
                id: 5
              },
              unusedScan: {
                type: "int64",
                id: 6
              },
              nid: {
                type: "int32",
                id: 7
              }
            }
          },
          WorkqueueActivateWorkFtraceEvent: {
            edition: "proto2",
            fields: {
              work: {
                type: "uint64",
                id: 1
              }
            }
          },
          WorkqueueExecuteEndFtraceEvent: {
            edition: "proto2",
            fields: {
              work: {
                type: "uint64",
                id: 1
              },
              "function": {
                type: "uint64",
                id: 2
              }
            }
          },
          WorkqueueExecuteStartFtraceEvent: {
            edition: "proto2",
            fields: {
              work: {
                type: "uint64",
                id: 1
              },
              "function": {
                type: "uint64",
                id: 2
              }
            }
          },
          WorkqueueQueueWorkFtraceEvent: {
            edition: "proto2",
            fields: {
              work: {
                type: "uint64",
                id: 1
              },
              "function": {
                type: "uint64",
                id: 2
              },
              workqueue: {
                type: "uint64",
                id: 3
              },
              reqCpu: {
                type: "uint32",
                id: 4
              },
              cpu: {
                type: "uint32",
                id: 5
              }
            }
          },
          GenericFtraceEvent: {
            edition: "proto2",
            fields: {
              eventName: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "Field",
                id: 2
              }
            },
            nested: {
              Field: {
                oneofs: {
                  value: {
                    oneof: [
                      "strValue",
                      "intValue",
                      "uintValue"
                    ]
                  }
                },
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  strValue: {
                    type: "string",
                    id: 3
                  },
                  intValue: {
                    type: "int64",
                    id: 4
                  },
                  uintValue: {
                    type: "uint64",
                    id: 5
                  }
                }
              }
            }
          },
          KprobeEvent: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              type: {
                type: "KprobeType",
                id: 2
              }
            },
            nested: {
              KprobeType: {
                values: {
                  KPROBE_TYPE_UNKNOWN: 0,
                  KPROBE_TYPE_BEGIN: 1,
                  KPROBE_TYPE_END: 2,
                  KPROBE_TYPE_INSTANT: 3
                }
              }
            }
          },
          FtraceCpuStats: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "uint64",
                id: 1
              },
              entries: {
                type: "uint64",
                id: 2
              },
              overrun: {
                type: "uint64",
                id: 3
              },
              commitOverrun: {
                type: "uint64",
                id: 4
              },
              bytesRead: {
                type: "uint64",
                id: 5
              },
              oldestEventTs: {
                type: "double",
                id: 6
              },
              nowTs: {
                type: "double",
                id: 7
              },
              droppedEvents: {
                type: "uint64",
                id: 8
              },
              readEvents: {
                type: "uint64",
                id: 9
              }
            }
          },
          FtraceKprobeStats: {
            edition: "proto2",
            fields: {
              hits: {
                type: "int64",
                id: 1
              },
              misses: {
                type: "int64",
                id: 2
              }
            }
          },
          FtraceStats: {
            edition: "proto2",
            fields: {
              phase: {
                type: "Phase",
                id: 1
              },
              cpuStats: {
                rule: "repeated",
                type: "FtraceCpuStats",
                id: 2
              },
              kernelSymbolsParsed: {
                type: "uint32",
                id: 3
              },
              kernelSymbolsMemKb: {
                type: "uint32",
                id: 4
              },
              atraceErrors: {
                type: "string",
                id: 5
              },
              unknownFtraceEvents: {
                rule: "repeated",
                type: "string",
                id: 6
              },
              failedFtraceEvents: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              preserveFtraceBuffer: {
                type: "bool",
                id: 8
              },
              ftraceParseErrors: {
                rule: "repeated",
                type: "FtraceParseStatus",
                id: 9
              },
              kprobeStats: {
                type: "FtraceKprobeStats",
                id: 10
              }
            },
            nested: {
              Phase: {
                values: {
                  UNSPECIFIED: 0,
                  START_OF_TRACE: 1,
                  END_OF_TRACE: 2
                }
              }
            }
          },
          FtraceParseStatus: {
            edition: "proto2",
            values: {
              FTRACE_STATUS_UNSPECIFIED: 0,
              FTRACE_STATUS_OK: 1,
              FTRACE_STATUS_UNEXPECTED_READ_ERROR: 2,
              FTRACE_STATUS_PARTIAL_PAGE_READ: 3,
              FTRACE_STATUS_ABI_INVALID_PAGE_HEADER: 4,
              FTRACE_STATUS_ABI_SHORT_EVENT_HEADER: 5,
              FTRACE_STATUS_ABI_NULL_PADDING: 6,
              FTRACE_STATUS_ABI_SHORT_PADDING_LENGTH: 7,
              FTRACE_STATUS_ABI_INVALID_PADDING_LENGTH: 8,
              FTRACE_STATUS_ABI_SHORT_TIME_EXTEND: 9,
              FTRACE_STATUS_ABI_SHORT_TIME_STAMP: 10,
              FTRACE_STATUS_ABI_SHORT_DATA_LENGTH: 11,
              FTRACE_STATUS_ABI_ZERO_DATA_LENGTH: 12,
              FTRACE_STATUS_ABI_INVALID_DATA_LENGTH: 13,
              FTRACE_STATUS_ABI_SHORT_EVENT_ID: 14,
              FTRACE_STATUS_ABI_END_OVERFLOW: 15,
              FTRACE_STATUS_SHORT_COMPACT_EVENT: 16,
              FTRACE_STATUS_INVALID_EVENT: 17
            }
          },
          GenericKernelTaskStateEvent: {
            edition: "proto2",
            fields: {
              cpu: {
                type: "int32",
                id: 1
              },
              comm: {
                type: "string",
                id: 2
              },
              tid: {
                type: "int32",
                id: 3
              },
              state: {
                type: "TaskStateEnum",
                id: 4
              },
              prio: {
                type: "int32",
                id: 5
              }
            },
            nested: {
              TaskStateEnum: {
                values: {
                  TASK_STATE_UNKNOWN: 0,
                  TASK_STATE_CREATED: 1,
                  TASK_STATE_RUNNABLE: 2,
                  TASK_STATE_RUNNING: 3,
                  TASK_STATE_INTERRUPTIBLE_SLEEP: 4,
                  TASK_STATE_UNINTERRUPTIBLE_SLEEP: 5,
                  TASK_STATE_STOPPED: 6,
                  TASK_STATE_DEAD: 7,
                  TASK_STATE_DESTROYED: 8
                }
              }
            }
          },
          GpuCounterEvent: {
            edition: "proto2",
            fields: {
              counterDescriptor: {
                type: "GpuCounterDescriptor",
                id: 1
              },
              counters: {
                rule: "repeated",
                type: "GpuCounter",
                id: 2
              },
              gpuId: {
                type: "int32",
                id: 3
              }
            },
            nested: {
              GpuCounter: {
                oneofs: {
                  value: {
                    oneof: [
                      "intValue",
                      "doubleValue"
                    ]
                  }
                },
                fields: {
                  counterId: {
                    type: "uint32",
                    id: 1
                  },
                  intValue: {
                    type: "int64",
                    id: 2
                  },
                  doubleValue: {
                    type: "double",
                    id: 3
                  }
                }
              }
            }
          },
          GpuCounterDescriptor: {
            edition: "proto2",
            fields: {
              specs: {
                rule: "repeated",
                type: "GpuCounterSpec",
                id: 1
              },
              blocks: {
                rule: "repeated",
                type: "GpuCounterBlock",
                id: 2
              },
              minSamplingPeriodNs: {
                type: "uint64",
                id: 3
              },
              maxSamplingPeriodNs: {
                type: "uint64",
                id: 4
              },
              supportsInstrumentedSampling: {
                type: "bool",
                id: 5
              }
            },
            nested: {
              GpuCounterGroup: {
                values: {
                  UNCLASSIFIED: 0,
                  SYSTEM: 1,
                  VERTICES: 2,
                  FRAGMENTS: 3,
                  PRIMITIVES: 4,
                  MEMORY: 5,
                  COMPUTE: 6
                }
              },
              GpuCounterSpec: {
                oneofs: {
                  peakValue: {
                    oneof: [
                      "intPeakValue",
                      "doublePeakValue"
                    ]
                  }
                },
                fields: {
                  counterId: {
                    type: "uint32",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  description: {
                    type: "string",
                    id: 3
                  },
                  intPeakValue: {
                    type: "int64",
                    id: 5
                  },
                  doublePeakValue: {
                    type: "double",
                    id: 6
                  },
                  numeratorUnits: {
                    rule: "repeated",
                    type: "MeasureUnit",
                    id: 7
                  },
                  denominatorUnits: {
                    rule: "repeated",
                    type: "MeasureUnit",
                    id: 8
                  },
                  selectByDefault: {
                    type: "bool",
                    id: 9
                  },
                  groups: {
                    rule: "repeated",
                    type: "GpuCounterGroup",
                    id: 10
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ]
              },
              GpuCounterBlock: {
                fields: {
                  blockId: {
                    type: "uint32",
                    id: 1
                  },
                  blockCapacity: {
                    type: "uint32",
                    id: 2
                  },
                  name: {
                    type: "string",
                    id: 3
                  },
                  description: {
                    type: "string",
                    id: 4
                  },
                  counterIds: {
                    rule: "repeated",
                    type: "uint32",
                    id: 5
                  }
                }
              },
              MeasureUnit: {
                values: {
                  NONE: 0,
                  BIT: 1,
                  KILOBIT: 2,
                  MEGABIT: 3,
                  GIGABIT: 4,
                  TERABIT: 5,
                  PETABIT: 6,
                  BYTE: 7,
                  KILOBYTE: 8,
                  MEGABYTE: 9,
                  GIGABYTE: 10,
                  TERABYTE: 11,
                  PETABYTE: 12,
                  HERTZ: 13,
                  KILOHERTZ: 14,
                  MEGAHERTZ: 15,
                  GIGAHERTZ: 16,
                  TERAHERTZ: 17,
                  PETAHERTZ: 18,
                  NANOSECOND: 19,
                  MICROSECOND: 20,
                  MILLISECOND: 21,
                  SECOND: 22,
                  MINUTE: 23,
                  HOUR: 24,
                  VERTEX: 25,
                  PIXEL: 26,
                  TRIANGLE: 27,
                  PRIMITIVE: 38,
                  FRAGMENT: 39,
                  MILLIWATT: 28,
                  WATT: 29,
                  KILOWATT: 30,
                  JOULE: 31,
                  VOLT: 32,
                  AMPERE: 33,
                  CELSIUS: 34,
                  FAHRENHEIT: 35,
                  KELVIN: 36,
                  PERCENT: 37,
                  INSTRUCTION: 40
                }
              }
            }
          },
          GpuLog: {
            edition: "proto2",
            fields: {
              severity: {
                type: "Severity",
                id: 1
              },
              tag: {
                type: "string",
                id: 2
              },
              logMessage: {
                type: "string",
                id: 3
              }
            },
            nested: {
              Severity: {
                values: {
                  LOG_SEVERITY_UNSPECIFIED: 0,
                  LOG_SEVERITY_VERBOSE: 1,
                  LOG_SEVERITY_DEBUG: 2,
                  LOG_SEVERITY_INFO: 3,
                  LOG_SEVERITY_WARNING: 4,
                  LOG_SEVERITY_ERROR: 5
                }
              }
            }
          },
          GpuRenderStageEvent: {
            edition: "proto2",
            fields: {
              eventId: {
                type: "uint64",
                id: 1
              },
              duration: {
                type: "uint64",
                id: 2
              },
              hwQueueIid: {
                type: "uint64",
                id: 13
              },
              stageIid: {
                type: "uint64",
                id: 14
              },
              gpuId: {
                type: "int32",
                id: 11
              },
              context: {
                type: "uint64",
                id: 5
              },
              renderTargetHandle: {
                type: "uint64",
                id: 8
              },
              submissionId: {
                type: "uint32",
                id: 10
              },
              extraData: {
                rule: "repeated",
                type: "ExtraData",
                id: 6
              },
              renderPassHandle: {
                type: "uint64",
                id: 9
              },
              renderSubpassIndexMask: {
                rule: "repeated",
                type: "uint64",
                id: 15
              },
              commandBufferHandle: {
                type: "uint64",
                id: 12
              },
              specifications: {
                type: "Specifications",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              hwQueueId: {
                type: "int32",
                id: 3,
                options: {
                  deprecated: true
                }
              },
              stageId: {
                type: "int32",
                id: 4,
                options: {
                  deprecated: true
                }
              }
            },
            extensions: [
              [
                100,
                100
              ]
            ],
            nested: {
              ExtraData: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Specifications: {
                fields: {
                  contextSpec: {
                    type: "ContextSpec",
                    id: 1
                  },
                  hwQueue: {
                    rule: "repeated",
                    type: "Description",
                    id: 2
                  },
                  stage: {
                    rule: "repeated",
                    type: "Description",
                    id: 3
                  }
                },
                nested: {
                  ContextSpec: {
                    fields: {
                      context: {
                        type: "uint64",
                        id: 1
                      },
                      pid: {
                        type: "int32",
                        id: 2
                      }
                    }
                  },
                  Description: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      description: {
                        type: "string",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          },
          InternedGraphicsContext: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              pid: {
                type: "int32",
                id: 2
              },
              api: {
                type: "Api",
                id: 3
              }
            },
            nested: {
              Api: {
                values: {
                  UNDEFINED: 0,
                  OPEN_GL: 1,
                  VULKAN: 2,
                  OPEN_CL: 3
                }
              }
            }
          },
          InternedGpuRenderStageSpecification: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              description: {
                type: "string",
                id: 3
              },
              category: {
                type: "RenderStageCategory",
                id: 4
              }
            },
            nested: {
              RenderStageCategory: {
                values: {
                  OTHER: 0,
                  GRAPHICS: 1,
                  COMPUTE: 2
                }
              }
            }
          },
          VulkanMemoryEventAnnotation: {
            edition: "proto2",
            oneofs: {
              value: {
                oneof: [
                  "intValue",
                  "doubleValue",
                  "stringIid"
                ]
              }
            },
            fields: {
              keyIid: {
                type: "uint64",
                id: 1
              },
              intValue: {
                type: "int64",
                id: 2
              },
              doubleValue: {
                type: "double",
                id: 3
              },
              stringIid: {
                type: "uint64",
                id: 4
              }
            }
          },
          VulkanMemoryEvent: {
            edition: "proto2",
            fields: {
              source: {
                type: "Source",
                id: 1
              },
              operation: {
                type: "Operation",
                id: 2
              },
              timestamp: {
                type: "int64",
                id: 3
              },
              pid: {
                type: "uint32",
                id: 4
              },
              memoryAddress: {
                type: "fixed64",
                id: 5
              },
              memorySize: {
                type: "uint64",
                id: 6
              },
              callerIid: {
                type: "uint64",
                id: 7
              },
              allocationScope: {
                type: "AllocationScope",
                id: 8
              },
              annotations: {
                rule: "repeated",
                type: "VulkanMemoryEventAnnotation",
                id: 9
              },
              device: {
                type: "fixed64",
                id: 16
              },
              deviceMemory: {
                type: "fixed64",
                id: 17
              },
              memoryType: {
                type: "uint32",
                id: 18
              },
              heap: {
                type: "uint32",
                id: 19
              },
              objectHandle: {
                type: "fixed64",
                id: 20
              }
            },
            nested: {
              Source: {
                values: {
                  SOURCE_UNSPECIFIED: 0,
                  SOURCE_DRIVER: 1,
                  SOURCE_DEVICE: 2,
                  SOURCE_DEVICE_MEMORY: 3,
                  SOURCE_BUFFER: 4,
                  SOURCE_IMAGE: 5
                }
              },
              Operation: {
                values: {
                  OP_UNSPECIFIED: 0,
                  OP_CREATE: 1,
                  OP_DESTROY: 2,
                  OP_BIND: 3,
                  OP_DESTROY_BOUND: 4,
                  OP_ANNOTATIONS: 5
                }
              },
              AllocationScope: {
                values: {
                  SCOPE_UNSPECIFIED: 0,
                  SCOPE_COMMAND: 1,
                  SCOPE_OBJECT: 2,
                  SCOPE_CACHE: 3,
                  SCOPE_DEVICE: 4,
                  SCOPE_INSTANCE: 5
                }
              }
            }
          },
          VulkanApiEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "vkDebugUtilsObjectName",
                  "vkQueueSubmit"
                ]
              }
            },
            fields: {
              vkDebugUtilsObjectName: {
                type: "VkDebugUtilsObjectName",
                id: 1
              },
              vkQueueSubmit: {
                type: "VkQueueSubmit",
                id: 2
              }
            },
            nested: {
              VkDebugUtilsObjectName: {
                fields: {
                  pid: {
                    type: "uint32",
                    id: 1
                  },
                  vkDevice: {
                    type: "uint64",
                    id: 2
                  },
                  objectType: {
                    type: "int32",
                    id: 3
                  },
                  object: {
                    type: "uint64",
                    id: 4
                  },
                  objectName: {
                    type: "string",
                    id: 5
                  }
                }
              },
              VkQueueSubmit: {
                fields: {
                  durationNs: {
                    type: "uint64",
                    id: 1
                  },
                  pid: {
                    type: "uint32",
                    id: 2
                  },
                  tid: {
                    type: "uint32",
                    id: 3
                  },
                  vkQueue: {
                    type: "uint64",
                    id: 4
                  },
                  vkCommandBuffers: {
                    rule: "repeated",
                    type: "uint64",
                    id: 5
                  },
                  submissionId: {
                    type: "uint32",
                    id: 6
                  }
                }
              }
            }
          },
          InternedData: {
            edition: "proto2",
            fields: {
              eventCategories: {
                rule: "repeated",
                type: "EventCategory",
                id: 1
              },
              eventNames: {
                rule: "repeated",
                type: "EventName",
                id: 2
              },
              debugAnnotationNames: {
                rule: "repeated",
                type: "DebugAnnotationName",
                id: 3
              },
              debugAnnotationValueTypeNames: {
                rule: "repeated",
                type: "DebugAnnotationValueTypeName",
                id: 27
              },
              sourceLocations: {
                rule: "repeated",
                type: "SourceLocation",
                id: 4
              },
              unsymbolizedSourceLocations: {
                rule: "repeated",
                type: "UnsymbolizedSourceLocation",
                id: 28
              },
              logMessageBody: {
                rule: "repeated",
                type: "LogMessageBody",
                id: 20
              },
              histogramNames: {
                rule: "repeated",
                type: "HistogramName",
                id: 25
              },
              buildIds: {
                rule: "repeated",
                type: "InternedString",
                id: 16
              },
              mappingPaths: {
                rule: "repeated",
                type: "InternedString",
                id: 17
              },
              sourcePaths: {
                rule: "repeated",
                type: "InternedString",
                id: 18
              },
              functionNames: {
                rule: "repeated",
                type: "InternedString",
                id: 5
              },
              mappings: {
                rule: "repeated",
                type: "Mapping",
                id: 19
              },
              frames: {
                rule: "repeated",
                type: "Frame",
                id: 6
              },
              callstacks: {
                rule: "repeated",
                type: "Callstack",
                id: 7
              },
              vulkanMemoryKeys: {
                rule: "repeated",
                type: "InternedString",
                id: 22
              },
              graphicsContexts: {
                rule: "repeated",
                type: "InternedGraphicsContext",
                id: 23
              },
              gpuSpecifications: {
                rule: "repeated",
                type: "InternedGpuRenderStageSpecification",
                id: 24
              },
              kernelSymbols: {
                rule: "repeated",
                type: "InternedString",
                id: 26
              },
              debugAnnotationStringValues: {
                rule: "repeated",
                type: "InternedString",
                id: 29
              },
              packetContext: {
                rule: "repeated",
                type: "NetworkPacketContext",
                id: 30
              },
              v8JsFunctionName: {
                rule: "repeated",
                type: "InternedV8String",
                id: 31
              },
              v8JsFunction: {
                rule: "repeated",
                type: "InternedV8JsFunction",
                id: 32
              },
              v8JsScript: {
                rule: "repeated",
                type: "InternedV8JsScript",
                id: 33
              },
              v8WasmScript: {
                rule: "repeated",
                type: "InternedV8WasmScript",
                id: 34
              },
              v8Isolate: {
                rule: "repeated",
                type: "InternedV8Isolate",
                id: 35
              },
              protologStringArgs: {
                rule: "repeated",
                type: "InternedString",
                id: 36
              },
              protologStacktrace: {
                rule: "repeated",
                type: "InternedString",
                id: 37
              },
              viewcapturePackageName: {
                rule: "repeated",
                type: "InternedString",
                id: 38
              },
              viewcaptureWindowName: {
                rule: "repeated",
                type: "InternedString",
                id: 39
              },
              viewcaptureViewId: {
                rule: "repeated",
                type: "InternedString",
                id: 40
              },
              viewcaptureClassName: {
                rule: "repeated",
                type: "InternedString",
                id: 41
              },
              appWakelockInfo: {
                rule: "repeated",
                type: "AppWakelockInfo",
                id: 42
              },
              correlationIdStr: {
                rule: "repeated",
                type: "InternedString",
                id: 43
              }
            },
            reserved: [
              [
                21,
                21
              ]
            ]
          },
          HistogramName: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          ChromeHistogramSample: {
            edition: "proto2",
            fields: {
              nameHash: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              sample: {
                type: "int64",
                id: 3
              },
              nameIid: {
                type: "uint64",
                id: 4
              }
            }
          },
          DebugAnnotation: {
            edition: "proto2",
            oneofs: {
              nameField: {
                oneof: [
                  "nameIid",
                  "name"
                ]
              },
              value: {
                oneof: [
                  "boolValue",
                  "uintValue",
                  "intValue",
                  "doubleValue",
                  "pointerValue",
                  "nestedValue",
                  "legacyJsonValue",
                  "stringValue",
                  "stringValueIid"
                ]
              },
              protoTypeDescriptor: {
                oneof: [
                  "protoTypeName",
                  "protoTypeNameIid"
                ]
              }
            },
            fields: {
              nameIid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 10
              },
              boolValue: {
                type: "bool",
                id: 2
              },
              uintValue: {
                type: "uint64",
                id: 3
              },
              intValue: {
                type: "int64",
                id: 4
              },
              doubleValue: {
                type: "double",
                id: 5
              },
              pointerValue: {
                type: "uint64",
                id: 7
              },
              nestedValue: {
                type: "NestedValue",
                id: 8
              },
              legacyJsonValue: {
                type: "string",
                id: 9
              },
              stringValue: {
                type: "string",
                id: 6
              },
              stringValueIid: {
                type: "uint64",
                id: 17
              },
              protoTypeName: {
                type: "string",
                id: 16
              },
              protoTypeNameIid: {
                type: "uint64",
                id: 13
              },
              protoValue: {
                type: "bytes",
                id: 14
              },
              dictEntries: {
                rule: "repeated",
                type: "DebugAnnotation",
                id: 11
              },
              arrayValues: {
                rule: "repeated",
                type: "DebugAnnotation",
                id: 12
              }
            },
            nested: {
              NestedValue: {
                fields: {
                  nestedType: {
                    type: "NestedType",
                    id: 1
                  },
                  dictKeys: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  },
                  dictValues: {
                    rule: "repeated",
                    type: "NestedValue",
                    id: 3
                  },
                  arrayValues: {
                    rule: "repeated",
                    type: "NestedValue",
                    id: 4
                  },
                  intValue: {
                    type: "int64",
                    id: 5
                  },
                  doubleValue: {
                    type: "double",
                    id: 6
                  },
                  boolValue: {
                    type: "bool",
                    id: 7
                  },
                  stringValue: {
                    type: "string",
                    id: 8
                  }
                },
                nested: {
                  NestedType: {
                    values: {
                      UNSPECIFIED: 0,
                      DICT: 1,
                      ARRAY: 2
                    }
                  }
                }
              }
            }
          },
          DebugAnnotationName: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          DebugAnnotationValueTypeName: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          LogMessage: {
            edition: "proto2",
            fields: {
              sourceLocationIid: {
                type: "uint64",
                id: 1
              },
              bodyIid: {
                type: "uint64",
                id: 2
              },
              prio: {
                type: "Priority",
                id: 3
              }
            },
            nested: {
              Priority: {
                values: {
                  PRIO_UNSPECIFIED: 0,
                  PRIO_UNUSED: 1,
                  PRIO_VERBOSE: 2,
                  PRIO_DEBUG: 3,
                  PRIO_INFO: 4,
                  PRIO_WARN: 5,
                  PRIO_ERROR: 6,
                  PRIO_FATAL: 7
                }
              }
            }
          },
          LogMessageBody: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              body: {
                type: "string",
                id: 2
              }
            }
          },
          TrackEvent: {
            edition: "proto2",
            oneofs: {
              nameField: {
                oneof: [
                  "nameIid",
                  "name"
                ]
              },
              counterValueField: {
                oneof: [
                  "counterValue",
                  "doubleCounterValue"
                ]
              },
              correlationIdField: {
                oneof: [
                  "correlationId",
                  "correlationIdStr",
                  "correlationIdStrIid"
                ]
              },
              sourceLocationField: {
                oneof: [
                  "sourceLocation",
                  "sourceLocationIid"
                ]
              },
              timestamp: {
                oneof: [
                  "timestampDeltaUs",
                  "timestampAbsoluteUs"
                ]
              },
              threadTime: {
                oneof: [
                  "threadTimeDeltaUs",
                  "threadTimeAbsoluteUs"
                ]
              },
              threadInstructionCount: {
                oneof: [
                  "threadInstructionCountDelta",
                  "threadInstructionCountAbsolute"
                ]
              }
            },
            fields: {
              categoryIids: {
                rule: "repeated",
                type: "uint64",
                id: 3
              },
              categories: {
                rule: "repeated",
                type: "string",
                id: 22
              },
              nameIid: {
                type: "uint64",
                id: 10
              },
              name: {
                type: "string",
                id: 23
              },
              type: {
                type: "Type",
                id: 9
              },
              trackUuid: {
                type: "uint64",
                id: 11
              },
              counterValue: {
                type: "int64",
                id: 30
              },
              doubleCounterValue: {
                type: "double",
                id: 44
              },
              extraCounterTrackUuids: {
                rule: "repeated",
                type: "uint64",
                id: 31
              },
              extraCounterValues: {
                rule: "repeated",
                type: "int64",
                id: 12
              },
              extraDoubleCounterTrackUuids: {
                rule: "repeated",
                type: "uint64",
                id: 45
              },
              extraDoubleCounterValues: {
                rule: "repeated",
                type: "double",
                id: 46
              },
              flowIdsOld: {
                rule: "repeated",
                type: "uint64",
                id: 36,
                options: {
                  deprecated: true
                }
              },
              flowIds: {
                rule: "repeated",
                type: "fixed64",
                id: 47
              },
              terminatingFlowIdsOld: {
                rule: "repeated",
                type: "uint64",
                id: 42,
                options: {
                  deprecated: true
                }
              },
              terminatingFlowIds: {
                rule: "repeated",
                type: "fixed64",
                id: 48
              },
              correlationId: {
                type: "uint64",
                id: 52
              },
              correlationIdStr: {
                type: "string",
                id: 53
              },
              correlationIdStrIid: {
                type: "uint64",
                id: 54
              },
              debugAnnotations: {
                rule: "repeated",
                type: "DebugAnnotation",
                id: 4
              },
              taskExecution: {
                type: "TaskExecution",
                id: 5
              },
              logMessage: {
                type: "LogMessage",
                id: 21
              },
              ccSchedulerState: {
                type: "ChromeCompositorSchedulerState",
                id: 24
              },
              chromeUserEvent: {
                type: "ChromeUserEvent",
                id: 25
              },
              chromeKeyedService: {
                type: "ChromeKeyedService",
                id: 26
              },
              chromeLegacyIpc: {
                type: "ChromeLegacyIpc",
                id: 27
              },
              chromeHistogramSample: {
                type: "ChromeHistogramSample",
                id: 28
              },
              chromeLatencyInfo: {
                type: "ChromeLatencyInfo",
                id: 29
              },
              chromeFrameReporter: {
                type: "ChromeFrameReporter",
                id: 32,
                options: {
                  deprecated: true
                }
              },
              chromeApplicationStateInfo: {
                type: "ChromeApplicationStateInfo",
                id: 39
              },
              chromeRendererSchedulerState: {
                type: "ChromeRendererSchedulerState",
                id: 40
              },
              chromeWindowHandleEventInfo: {
                type: "ChromeWindowHandleEventInfo",
                id: 41
              },
              chromeContentSettingsEventInfo: {
                type: "ChromeContentSettingsEventInfo",
                id: 43
              },
              chromeActiveProcesses: {
                type: "ChromeActiveProcesses",
                id: 49
              },
              screenshot: {
                type: "Screenshot",
                id: 50
              },
              sourceLocation: {
                type: "SourceLocation",
                id: 33
              },
              sourceLocationIid: {
                type: "uint64",
                id: 34
              },
              chromeMessagePump: {
                type: "ChromeMessagePump",
                id: 35
              },
              chromeMojoEventInfo: {
                type: "ChromeMojoEventInfo",
                id: 38
              },
              timestampDeltaUs: {
                type: "int64",
                id: 1
              },
              timestampAbsoluteUs: {
                type: "int64",
                id: 16
              },
              threadTimeDeltaUs: {
                type: "int64",
                id: 2
              },
              threadTimeAbsoluteUs: {
                type: "int64",
                id: 17
              },
              threadInstructionCountDelta: {
                type: "int64",
                id: 8
              },
              threadInstructionCountAbsolute: {
                type: "int64",
                id: 20
              },
              legacyEvent: {
                type: "LegacyEvent",
                id: 6
              }
            },
            extensions: [
              [
                1000,
                1999
              ],
              [
                2000,
                2000
              ],
              [
                2001,
                2999
              ],
              [
                3000,
                9899
              ],
              [
                9900,
                10000
              ]
            ],
            reserved: [
              [
                51,
                51
              ]
            ],
            nested: {
              Type: {
                values: {
                  TYPE_UNSPECIFIED: 0,
                  TYPE_SLICE_BEGIN: 1,
                  TYPE_SLICE_END: 2,
                  TYPE_INSTANT: 3,
                  TYPE_COUNTER: 4
                }
              },
              LegacyEvent: {
                oneofs: {
                  id: {
                    oneof: [
                      "unscopedId",
                      "localId",
                      "globalId"
                    ]
                  }
                },
                fields: {
                  nameIid: {
                    type: "uint64",
                    id: 1
                  },
                  phase: {
                    type: "int32",
                    id: 2
                  },
                  durationUs: {
                    type: "int64",
                    id: 3
                  },
                  threadDurationUs: {
                    type: "int64",
                    id: 4
                  },
                  threadInstructionDelta: {
                    type: "int64",
                    id: 15
                  },
                  unscopedId: {
                    type: "uint64",
                    id: 6
                  },
                  localId: {
                    type: "uint64",
                    id: 10
                  },
                  globalId: {
                    type: "uint64",
                    id: 11
                  },
                  idScope: {
                    type: "string",
                    id: 7
                  },
                  useAsyncTts: {
                    type: "bool",
                    id: 9
                  },
                  bindId: {
                    type: "uint64",
                    id: 8
                  },
                  bindToEnclosing: {
                    type: "bool",
                    id: 12
                  },
                  flowDirection: {
                    type: "FlowDirection",
                    id: 13
                  },
                  instantEventScope: {
                    type: "InstantEventScope",
                    id: 14
                  },
                  pidOverride: {
                    type: "int32",
                    id: 18
                  },
                  tidOverride: {
                    type: "int32",
                    id: 19
                  }
                },
                reserved: [
                  [
                    5,
                    5
                  ]
                ],
                nested: {
                  FlowDirection: {
                    values: {
                      FLOW_UNSPECIFIED: 0,
                      FLOW_IN: 1,
                      FLOW_OUT: 2,
                      FLOW_INOUT: 3
                    }
                  },
                  InstantEventScope: {
                    values: {
                      SCOPE_UNSPECIFIED: 0,
                      SCOPE_GLOBAL: 1,
                      SCOPE_PROCESS: 2,
                      SCOPE_THREAD: 3
                    }
                  }
                }
              }
            }
          },
          TrackEventDefaults: {
            edition: "proto2",
            fields: {
              trackUuid: {
                type: "uint64",
                id: 11
              },
              extraCounterTrackUuids: {
                rule: "repeated",
                type: "uint64",
                id: 31
              },
              extraDoubleCounterTrackUuids: {
                rule: "repeated",
                type: "uint64",
                id: 45
              }
            }
          },
          EventCategory: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          EventName: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          TaskExecution: {
            edition: "proto2",
            fields: {
              postedFromIid: {
                type: "uint64",
                id: 1
              }
            }
          },
          ChromeActiveProcesses: {
            edition: "proto2",
            fields: {
              pid: {
                rule: "repeated",
                type: "int32",
                id: 1
              }
            }
          },
          ChromeApplicationStateInfo: {
            edition: "proto2",
            fields: {
              applicationState: {
                type: "ChromeApplicationState",
                id: 1
              }
            },
            nested: {
              ChromeApplicationState: {
                values: {
                  APPLICATION_STATE_UNKNOWN: 0,
                  APPLICATION_STATE_HAS_RUNNING_ACTIVITIES: 1,
                  APPLICATION_STATE_HAS_PAUSED_ACTIVITIES: 2,
                  APPLICATION_STATE_HAS_STOPPED_ACTIVITIES: 3,
                  APPLICATION_STATE_HAS_DESTROYED_ACTIVITIES: 4
                }
              }
            }
          },
          ChromeCompositorSchedulerAction: {
            edition: "proto2",
            values: {
              CC_SCHEDULER_ACTION_UNSPECIFIED: 0,
              CC_SCHEDULER_ACTION_NONE: 1,
              CC_SCHEDULER_ACTION_SEND_BEGIN_MAIN_FRAME: 2,
              CC_SCHEDULER_ACTION_COMMIT: 3,
              CC_SCHEDULER_ACTION_ACTIVATE_SYNC_TREE: 4,
              CC_SCHEDULER_ACTION_DRAW_IF_POSSIBLE: 5,
              CC_SCHEDULER_ACTION_DRAW_FORCED: 6,
              CC_SCHEDULER_ACTION_DRAW_ABORT: 7,
              CC_SCHEDULER_ACTION_BEGIN_LAYER_TREE_FRAME_SINK_CREATION: 8,
              CC_SCHEDULER_ACTION_PREPARE_TILES: 9,
              CC_SCHEDULER_ACTION_INVALIDATE_LAYER_TREE_FRAME_SINK: 10,
              CC_SCHEDULER_ACTION_PERFORM_IMPL_SIDE_INVALIDATION: 11,
              CC_SCHEDULER_ACTION_NOTIFY_BEGIN_MAIN_FRAME_NOT_EXPECTED_UNTIL: 12,
              CC_SCHEDULER_ACTION_NOTIFY_BEGIN_MAIN_FRAME_NOT_EXPECTED_SOON: 13
            }
          },
          ChromeCompositorSchedulerState: {
            edition: "proto2",
            fields: {
              stateMachine: {
                type: "ChromeCompositorStateMachine",
                id: 1
              },
              observingBeginFrameSource: {
                type: "bool",
                id: 2
              },
              beginImplFrameDeadlineTask: {
                type: "bool",
                id: 3
              },
              pendingBeginFrameTask: {
                type: "bool",
                id: 4
              },
              skippedLastFrameMissedExceededDeadline: {
                type: "bool",
                id: 5
              },
              insideAction: {
                type: "ChromeCompositorSchedulerAction",
                id: 7
              },
              deadlineMode: {
                type: "BeginImplFrameDeadlineMode",
                id: 8
              },
              deadlineUs: {
                type: "int64",
                id: 9
              },
              deadlineScheduledAtUs: {
                type: "int64",
                id: 10
              },
              nowUs: {
                type: "int64",
                id: 11
              },
              nowToDeadlineDeltaUs: {
                type: "int64",
                id: 12
              },
              nowToDeadlineScheduledAtDeltaUs: {
                type: "int64",
                id: 13
              },
              beginImplFrameArgs: {
                type: "BeginImplFrameArgs",
                id: 14
              },
              beginFrameObserverState: {
                type: "BeginFrameObserverState",
                id: 15
              },
              beginFrameSourceState: {
                type: "BeginFrameSourceState",
                id: 16
              },
              compositorTimingHistory: {
                type: "CompositorTimingHistory",
                id: 17
              }
            },
            reserved: [
              [
                6,
                6
              ]
            ],
            nested: {
              BeginImplFrameDeadlineMode: {
                values: {
                  DEADLINE_MODE_UNSPECIFIED: 0,
                  DEADLINE_MODE_NONE: 1,
                  DEADLINE_MODE_IMMEDIATE: 2,
                  DEADLINE_MODE_REGULAR: 3,
                  DEADLINE_MODE_LATE: 4,
                  DEADLINE_MODE_BLOCKED: 5
                }
              }
            }
          },
          ChromeCompositorStateMachine: {
            edition: "proto2",
            fields: {
              majorState: {
                type: "MajorState",
                id: 1
              },
              minorState: {
                type: "MinorState",
                id: 2
              }
            },
            nested: {
              MajorState: {
                fields: {
                  nextAction: {
                    type: "ChromeCompositorSchedulerAction",
                    id: 1
                  },
                  beginImplFrameState: {
                    type: "BeginImplFrameState",
                    id: 2
                  },
                  beginMainFrameState: {
                    type: "BeginMainFrameState",
                    id: 3
                  },
                  layerTreeFrameSinkState: {
                    type: "LayerTreeFrameSinkState",
                    id: 4
                  },
                  forcedRedrawState: {
                    type: "ForcedRedrawOnTimeoutState",
                    id: 5
                  }
                },
                nested: {
                  BeginImplFrameState: {
                    values: {
                      BEGIN_IMPL_FRAME_UNSPECIFIED: 0,
                      BEGIN_IMPL_FRAME_IDLE: 1,
                      BEGIN_IMPL_FRAME_INSIDE_BEGIN_FRAME: 2,
                      BEGIN_IMPL_FRAME_INSIDE_DEADLINE: 3
                    }
                  },
                  BeginMainFrameState: {
                    values: {
                      BEGIN_MAIN_FRAME_UNSPECIFIED: 0,
                      BEGIN_MAIN_FRAME_IDLE: 1,
                      BEGIN_MAIN_FRAME_SENT: 2,
                      BEGIN_MAIN_FRAME_READY_TO_COMMIT: 3
                    }
                  },
                  LayerTreeFrameSinkState: {
                    values: {
                      LAYER_TREE_FRAME_UNSPECIFIED: 0,
                      LAYER_TREE_FRAME_NONE: 1,
                      LAYER_TREE_FRAME_ACTIVE: 2,
                      LAYER_TREE_FRAME_CREATING: 3,
                      LAYER_TREE_FRAME_WAITING_FOR_FIRST_COMMIT: 4,
                      LAYER_TREE_FRAME_WAITING_FOR_FIRST_ACTIVATION: 5
                    }
                  },
                  ForcedRedrawOnTimeoutState: {
                    values: {
                      FORCED_REDRAW_UNSPECIFIED: 0,
                      FORCED_REDRAW_IDLE: 1,
                      FORCED_REDRAW_WAITING_FOR_COMMIT: 2,
                      FORCED_REDRAW_WAITING_FOR_ACTIVATION: 3,
                      FORCED_REDRAW_WAITING_FOR_DRAW: 4
                    }
                  }
                }
              },
              MinorState: {
                fields: {
                  commitCount: {
                    type: "int32",
                    id: 1
                  },
                  currentFrameNumber: {
                    type: "int32",
                    id: 2
                  },
                  lastFrameNumberSubmitPerformed: {
                    type: "int32",
                    id: 3
                  },
                  lastFrameNumberDrawPerformed: {
                    type: "int32",
                    id: 4
                  },
                  lastFrameNumberBeginMainFrameSent: {
                    type: "int32",
                    id: 5
                  },
                  didDraw: {
                    type: "bool",
                    id: 6
                  },
                  didSendBeginMainFrameForCurrentFrame: {
                    type: "bool",
                    id: 7
                  },
                  didNotifyBeginMainFrameNotExpectedUntil: {
                    type: "bool",
                    id: 8
                  },
                  didNotifyBeginMainFrameNotExpectedSoon: {
                    type: "bool",
                    id: 9
                  },
                  wantsBeginMainFrameNotExpected: {
                    type: "bool",
                    id: 10
                  },
                  didCommitDuringFrame: {
                    type: "bool",
                    id: 11
                  },
                  didInvalidateLayerTreeFrameSink: {
                    type: "bool",
                    id: 12
                  },
                  didPerformImplSideInvalidaion: {
                    type: "bool",
                    id: 13
                  },
                  didPrepareTiles: {
                    type: "bool",
                    id: 14
                  },
                  consecutiveCheckerboardAnimations: {
                    type: "int32",
                    id: 15
                  },
                  pendingSubmitFrames: {
                    type: "int32",
                    id: 16
                  },
                  submitFramesWithCurrentLayerTreeFrameSink: {
                    type: "int32",
                    id: 17
                  },
                  needsRedraw: {
                    type: "bool",
                    id: 18
                  },
                  needsPrepareTiles: {
                    type: "bool",
                    id: 19
                  },
                  needsBeginMainFrame: {
                    type: "bool",
                    id: 20
                  },
                  needsOneBeginImplFrame: {
                    type: "bool",
                    id: 21
                  },
                  visible: {
                    type: "bool",
                    id: 22
                  },
                  beginFrameSourcePaused: {
                    type: "bool",
                    id: 23
                  },
                  canDraw: {
                    type: "bool",
                    id: 24
                  },
                  resourcelessDraw: {
                    type: "bool",
                    id: 25
                  },
                  hasPendingTree: {
                    type: "bool",
                    id: 26
                  },
                  pendingTreeIsReadyForActivation: {
                    type: "bool",
                    id: 27
                  },
                  activeTreeNeedsFirstDraw: {
                    type: "bool",
                    id: 28
                  },
                  activeTreeIsReadyToDraw: {
                    type: "bool",
                    id: 29
                  },
                  didCreateAndInitializeFirstLayerTreeFrameSink: {
                    type: "bool",
                    id: 30
                  },
                  treePriority: {
                    type: "TreePriority",
                    id: 31
                  },
                  scrollHandlerState: {
                    type: "ScrollHandlerState",
                    id: 32
                  },
                  criticalBeginMainFrameToActivateIsFast: {
                    type: "bool",
                    id: 33
                  },
                  mainThreadMissedLastDeadline: {
                    type: "bool",
                    id: 34
                  },
                  videoNeedsBeginFrames: {
                    type: "bool",
                    id: 36
                  },
                  deferBeginMainFrame: {
                    type: "bool",
                    id: 37
                  },
                  lastCommitHadNoUpdates: {
                    type: "bool",
                    id: 38
                  },
                  didDrawInLastFrame: {
                    type: "bool",
                    id: 39
                  },
                  didSubmitInLastFrame: {
                    type: "bool",
                    id: 40
                  },
                  needsImplSideInvalidation: {
                    type: "bool",
                    id: 41
                  },
                  currentPendingTreeIsImplSide: {
                    type: "bool",
                    id: 42
                  },
                  previousPendingTreeWasImplSide: {
                    type: "bool",
                    id: 43
                  },
                  processingAnimationWorkletsForActiveTree: {
                    type: "bool",
                    id: 44
                  },
                  processingAnimationWorkletsForPendingTree: {
                    type: "bool",
                    id: 45
                  },
                  processingPaintWorkletsForPendingTree: {
                    type: "bool",
                    id: 46
                  }
                },
                reserved: [
                  [
                    35,
                    35
                  ]
                ],
                nested: {
                  TreePriority: {
                    values: {
                      TREE_PRIORITY_UNSPECIFIED: 0,
                      TREE_PRIORITY_SAME_PRIORITY_FOR_BOTH_TREES: 1,
                      TREE_PRIORITY_SMOOTHNESS_TAKES_PRIORITY: 2,
                      TREE_PRIORITY_NEW_CONTENT_TAKES_PRIORITY: 3
                    }
                  },
                  ScrollHandlerState: {
                    values: {
                      SCROLL_HANDLER_UNSPECIFIED: 0,
                      SCROLL_AFFECTS_SCROLL_HANDLER: 1,
                      SCROLL_DOES_NOT_AFFECT_SCROLL_HANDLER: 2
                    }
                  }
                }
              }
            }
          },
          BeginFrameArgs: {
            edition: "proto2",
            oneofs: {
              createdFrom: {
                oneof: [
                  "sourceLocationIid",
                  "sourceLocation"
                ]
              }
            },
            fields: {
              type: {
                type: "BeginFrameArgsType",
                id: 1
              },
              sourceId: {
                type: "uint64",
                id: 2
              },
              sequenceNumber: {
                type: "uint64",
                id: 3
              },
              frameTimeUs: {
                type: "int64",
                id: 4
              },
              deadlineUs: {
                type: "int64",
                id: 5
              },
              intervalDeltaUs: {
                type: "int64",
                id: 6
              },
              onCriticalPath: {
                type: "bool",
                id: 7
              },
              animateOnly: {
                type: "bool",
                id: 8
              },
              sourceLocationIid: {
                type: "uint64",
                id: 9
              },
              sourceLocation: {
                type: "SourceLocation",
                id: 10
              },
              framesThrottledSinceLast: {
                type: "int64",
                id: 12
              }
            },
            nested: {
              BeginFrameArgsType: {
                values: {
                  BEGIN_FRAME_ARGS_TYPE_UNSPECIFIED: 0,
                  BEGIN_FRAME_ARGS_TYPE_INVALID: 1,
                  BEGIN_FRAME_ARGS_TYPE_NORMAL: 2,
                  BEGIN_FRAME_ARGS_TYPE_MISSED: 3
                }
              }
            }
          },
          BeginImplFrameArgs: {
            edition: "proto2",
            oneofs: {
              args: {
                oneof: [
                  "currentArgs",
                  "lastArgs"
                ]
              }
            },
            fields: {
              updatedAtUs: {
                type: "int64",
                id: 1
              },
              finishedAtUs: {
                type: "int64",
                id: 2
              },
              state: {
                type: "State",
                id: 3
              },
              currentArgs: {
                type: "BeginFrameArgs",
                id: 4
              },
              lastArgs: {
                type: "BeginFrameArgs",
                id: 5
              },
              timestampsInUs: {
                type: "TimestampsInUs",
                id: 6
              }
            },
            nested: {
              State: {
                values: {
                  BEGIN_FRAME_FINISHED: 0,
                  BEGIN_FRAME_USING: 1
                }
              },
              TimestampsInUs: {
                fields: {
                  intervalDelta: {
                    type: "int64",
                    id: 1
                  },
                  nowToDeadlineDelta: {
                    type: "int64",
                    id: 2
                  },
                  frameTimeToNowDelta: {
                    type: "int64",
                    id: 3
                  },
                  frameTimeToDeadlineDelta: {
                    type: "int64",
                    id: 4
                  },
                  now: {
                    type: "int64",
                    id: 5
                  },
                  frameTime: {
                    type: "int64",
                    id: 6
                  },
                  deadline: {
                    type: "int64",
                    id: 7
                  }
                }
              }
            }
          },
          BeginFrameObserverState: {
            edition: "proto2",
            fields: {
              droppedBeginFrameArgs: {
                type: "int64",
                id: 1
              },
              lastBeginFrameArgs: {
                type: "BeginFrameArgs",
                id: 2
              }
            }
          },
          BeginFrameSourceState: {
            edition: "proto2",
            fields: {
              sourceId: {
                type: "uint32",
                id: 1
              },
              paused: {
                type: "bool",
                id: 2
              },
              numObservers: {
                type: "uint32",
                id: 3
              },
              lastBeginFrameArgs: {
                type: "BeginFrameArgs",
                id: 4
              }
            }
          },
          CompositorTimingHistory: {
            edition: "proto2",
            fields: {
              beginMainFrameQueueCriticalEstimateDeltaUs: {
                type: "int64",
                id: 1
              },
              beginMainFrameQueueNotCriticalEstimateDeltaUs: {
                type: "int64",
                id: 2
              },
              beginMainFrameStartToReadyToCommitEstimateDeltaUs: {
                type: "int64",
                id: 3
              },
              commitToReadyToActivateEstimateDeltaUs: {
                type: "int64",
                id: 4
              },
              prepareTilesEstimateDeltaUs: {
                type: "int64",
                id: 5
              },
              activateEstimateDeltaUs: {
                type: "int64",
                id: 6
              },
              drawEstimateDeltaUs: {
                type: "int64",
                id: 7
              }
            }
          },
          UnsymbolizedSourceLocation: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              mappingId: {
                type: "uint64",
                id: 2
              },
              relPc: {
                type: "uint64",
                id: 3
              }
            }
          },
          SourceLocation: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              fileName: {
                type: "string",
                id: 2
              },
              functionName: {
                type: "string",
                id: 3
              },
              lineNumber: {
                type: "uint32",
                id: 4
              }
            }
          },
          ChromeContentSettingsEventInfo: {
            edition: "proto2",
            fields: {
              numberOfExceptions: {
                type: "uint32",
                id: 1
              }
            }
          },
          ChromeFrameReporter: {
            edition: "proto2",
            options: {
              deprecated: true
            },
            fields: {
              state: {
                type: "State",
                id: 1
              },
              reason: {
                type: "FrameDropReason",
                id: 2
              },
              frameSource: {
                type: "uint64",
                id: 3
              },
              frameSequence: {
                type: "uint64",
                id: 4
              },
              affectsSmoothness: {
                type: "bool",
                id: 5
              },
              scrollState: {
                type: "ScrollState",
                id: 6
              },
              hasMainAnimation: {
                type: "bool",
                id: 7
              },
              hasCompositorAnimation: {
                type: "bool",
                id: 8
              },
              hasSmoothInputMain: {
                type: "bool",
                id: 9
              },
              hasMissingContent: {
                type: "bool",
                id: 10
              },
              layerTreeHostId: {
                type: "uint64",
                id: 11
              },
              hasHighLatency: {
                type: "bool",
                id: 12
              },
              frameType: {
                type: "FrameType",
                id: 13
              },
              highLatencyContributionStage: {
                rule: "repeated",
                type: "string",
                id: 14
              },
              checkerboardedNeedsRaster: {
                type: "bool",
                id: 15
              },
              checkerboardedNeedsRecord: {
                type: "bool",
                id: 16
              },
              surfaceFrameTraceId: {
                type: "int64",
                id: 17
              },
              displayTraceId: {
                type: "int64",
                id: 18
              }
            },
            nested: {
              State: {
                values: {
                  STATE_NO_UPDATE_DESIRED: 0,
                  STATE_PRESENTED_ALL: 1,
                  STATE_PRESENTED_PARTIAL: 2,
                  STATE_DROPPED: 3
                }
              },
              FrameDropReason: {
                values: {
                  REASON_UNSPECIFIED: 0,
                  REASON_DISPLAY_COMPOSITOR: 1,
                  REASON_MAIN_THREAD: 2,
                  REASON_CLIENT_COMPOSITOR: 3
                }
              },
              ScrollState: {
                values: {
                  SCROLL_NONE: 0,
                  SCROLL_MAIN_THREAD: 1,
                  SCROLL_COMPOSITOR_THREAD: 2,
                  SCROLL_RASTER: 3,
                  SCROLL_UNKNOWN: 4
                }
              },
              FrameType: {
                values: {
                  FORKED: 0,
                  BACKFILL: 1
                }
              }
            }
          },
          ChromeKeyedService: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          ChromeLatencyInfo: {
            edition: "proto2",
            fields: {
              traceId: {
                type: "int64",
                id: 1
              },
              step: {
                type: "Step",
                id: 2
              },
              frameTreeNodeId: {
                type: "int32",
                id: 3
              },
              componentInfo: {
                rule: "repeated",
                type: "ComponentInfo",
                id: 4
              },
              isCoalesced: {
                type: "bool",
                id: 5
              },
              gestureScrollId: {
                type: "int64",
                id: 6
              },
              touchId: {
                type: "int64",
                id: 7
              },
              inputType: {
                type: "InputType",
                id: 8
              }
            },
            nested: {
              Step: {
                values: {
                  STEP_UNSPECIFIED: 0,
                  STEP_SEND_INPUT_EVENT_UI: 3,
                  STEP_HANDLE_INPUT_EVENT_IMPL: 5,
                  STEP_DID_HANDLE_INPUT_AND_OVERSCROLL: 8,
                  STEP_HANDLE_INPUT_EVENT_MAIN: 4,
                  STEP_MAIN_THREAD_SCROLL_UPDATE: 2,
                  STEP_HANDLE_INPUT_EVENT_MAIN_COMMIT: 1,
                  STEP_HANDLED_INPUT_EVENT_MAIN_OR_IMPL: 9,
                  STEP_HANDLED_INPUT_EVENT_IMPL: 10,
                  STEP_SWAP_BUFFERS: 6,
                  STEP_DRAW_AND_SWAP: 7,
                  STEP_FINISHED_SWAP_BUFFERS: 11
                }
              },
              LatencyComponentType: {
                values: {
                  COMPONENT_UNSPECIFIED: 0,
                  COMPONENT_INPUT_EVENT_LATENCY_BEGIN_RWH: 1,
                  COMPONENT_INPUT_EVENT_LATENCY_SCROLL_UPDATE_ORIGINAL: 2,
                  COMPONENT_INPUT_EVENT_LATENCY_FIRST_SCROLL_UPDATE_ORIGINAL: 3,
                  COMPONENT_INPUT_EVENT_LATENCY_ORIGINAL: 4,
                  COMPONENT_INPUT_EVENT_LATENCY_UI: 5,
                  COMPONENT_INPUT_EVENT_LATENCY_RENDERER_MAIN: 6,
                  COMPONENT_INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN: 7,
                  COMPONENT_INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_IMPL: 8,
                  COMPONENT_INPUT_EVENT_LATENCY_SCROLL_UPDATE_LAST_EVENT: 9,
                  COMPONENT_INPUT_EVENT_LATENCY_ACK_RWH: 10,
                  COMPONENT_INPUT_EVENT_LATENCY_RENDERER_SWAP: 11,
                  COMPONENT_DISPLAY_COMPOSITOR_RECEIVED_FRAME: 12,
                  COMPONENT_INPUT_EVENT_GPU_SWAP_BUFFER: 13,
                  COMPONENT_INPUT_EVENT_LATENCY_FRAME_SWAP: 14
                }
              },
              ComponentInfo: {
                fields: {
                  componentType: {
                    type: "LatencyComponentType",
                    id: 1
                  },
                  timeUs: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              InputType: {
                values: {
                  UNSPECIFIED_OR_OTHER: 0,
                  TOUCH_MOVED: 1,
                  GESTURE_SCROLL_BEGIN: 2,
                  GESTURE_SCROLL_UPDATE: 3,
                  GESTURE_SCROLL_END: 4,
                  GESTURE_TAP: 5,
                  GESTURE_TAP_CANCEL: 6
                }
              }
            }
          },
          ChromeLegacyIpc: {
            edition: "proto2",
            fields: {
              messageClass: {
                type: "MessageClass",
                id: 1
              },
              messageLine: {
                type: "uint32",
                id: 2
              }
            },
            nested: {
              MessageClass: {
                values: {
                  CLASS_UNSPECIFIED: 0,
                  CLASS_AUTOMATION: 1,
                  CLASS_FRAME: 2,
                  CLASS_PAGE: 3,
                  CLASS_VIEW: 4,
                  CLASS_WIDGET: 5,
                  CLASS_INPUT: 6,
                  CLASS_TEST: 7,
                  CLASS_WORKER: 8,
                  CLASS_NACL: 9,
                  CLASS_GPU_CHANNEL: 10,
                  CLASS_MEDIA: 11,
                  CLASS_PPAPI: 12,
                  CLASS_CHROME: 13,
                  CLASS_DRAG: 14,
                  CLASS_PRINT: 15,
                  CLASS_EXTENSION: 16,
                  CLASS_TEXT_INPUT_CLIENT: 17,
                  CLASS_BLINK_TEST: 18,
                  CLASS_ACCESSIBILITY: 19,
                  CLASS_PRERENDER: 20,
                  CLASS_CHROMOTING: 21,
                  CLASS_BROWSER_PLUGIN: 22,
                  CLASS_ANDROID_WEB_VIEW: 23,
                  CLASS_NACL_HOST: 24,
                  CLASS_ENCRYPTED_MEDIA: 25,
                  CLASS_CAST: 26,
                  CLASS_GIN_JAVA_BRIDGE: 27,
                  CLASS_CHROME_UTILITY_PRINTING: 28,
                  CLASS_OZONE_GPU: 29,
                  CLASS_WEB_TEST: 30,
                  CLASS_NETWORK_HINTS: 31,
                  CLASS_EXTENSIONS_GUEST_VIEW: 32,
                  CLASS_GUEST_VIEW: 33,
                  CLASS_MEDIA_PLAYER_DELEGATE: 34,
                  CLASS_EXTENSION_WORKER: 35,
                  CLASS_SUBRESOURCE_FILTER: 36,
                  CLASS_UNFREEZABLE_FRAME: 37
                }
              }
            }
          },
          ChromeMessagePump: {
            edition: "proto2",
            fields: {
              sentMessagesInQueue: {
                type: "bool",
                id: 1
              },
              ioHandlerLocationIid: {
                type: "uint64",
                id: 2
              }
            }
          },
          ChromeMojoEventInfo: {
            edition: "proto2",
            fields: {
              watcherNotifyInterfaceTag: {
                type: "string",
                id: 1
              },
              ipcHash: {
                type: "uint32",
                id: 2
              },
              mojoInterfaceTag: {
                type: "string",
                id: 3
              },
              mojoInterfaceMethodIid: {
                type: "uint64",
                id: 4
              },
              isReply: {
                type: "bool",
                id: 5
              },
              payloadSize: {
                type: "uint64",
                id: 6
              },
              dataNumBytes: {
                type: "uint64",
                id: 7
              }
            }
          },
          ChromeRAILMode: {
            edition: "proto2",
            values: {
              RAIL_MODE_NONE: 0,
              RAIL_MODE_RESPONSE: 1,
              RAIL_MODE_ANIMATION: 2,
              RAIL_MODE_IDLE: 3,
              RAIL_MODE_LOAD: 4
            }
          },
          ChromeRendererSchedulerState: {
            edition: "proto2",
            fields: {
              railMode: {
                type: "ChromeRAILMode",
                id: 1
              },
              isBackgrounded: {
                type: "bool",
                id: 2
              },
              isHidden: {
                type: "bool",
                id: 3
              }
            }
          },
          ChromeUserEvent: {
            edition: "proto2",
            fields: {
              action: {
                type: "string",
                id: 1
              },
              actionHash: {
                type: "uint64",
                id: 2
              }
            }
          },
          ChromeWindowHandleEventInfo: {
            edition: "proto2",
            fields: {
              dpi: {
                type: "uint32",
                id: 1
              },
              messageId: {
                type: "uint32",
                id: 2
              },
              hwndPtr: {
                type: "fixed64",
                id: 3
              }
            }
          },
          Screenshot: {
            edition: "proto2",
            fields: {
              jpgImage: {
                type: "bytes",
                id: 1
              }
            }
          },
          InternedString: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              str: {
                type: "bytes",
                id: 2
              }
            }
          },
          Line: {
            edition: "proto2",
            fields: {
              functionName: {
                type: "string",
                id: 1
              },
              sourceFileName: {
                type: "string",
                id: 2
              },
              lineNumber: {
                type: "uint32",
                id: 3
              }
            }
          },
          AddressSymbols: {
            edition: "proto2",
            fields: {
              address: {
                type: "uint64",
                id: 1
              },
              lines: {
                rule: "repeated",
                type: "Line",
                id: 2
              }
            }
          },
          ModuleSymbols: {
            edition: "proto2",
            fields: {
              path: {
                type: "string",
                id: 1
              },
              buildId: {
                type: "string",
                id: 2
              },
              addressSymbols: {
                rule: "repeated",
                type: "AddressSymbols",
                id: 3
              }
            }
          },
          Mapping: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              buildId: {
                type: "uint64",
                id: 2
              },
              exactOffset: {
                type: "uint64",
                id: 8
              },
              startOffset: {
                type: "uint64",
                id: 3
              },
              start: {
                type: "uint64",
                id: 4
              },
              end: {
                type: "uint64",
                id: 5
              },
              loadBias: {
                type: "uint64",
                id: 6
              },
              pathStringIds: {
                rule: "repeated",
                type: "uint64",
                id: 7
              }
            }
          },
          Frame: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              functionNameId: {
                type: "uint64",
                id: 2
              },
              mappingId: {
                type: "uint64",
                id: 3
              },
              relPc: {
                type: "uint64",
                id: 4
              }
            }
          },
          Callstack: {
            edition: "proto2",
            fields: {
              iid: {
                type: "uint64",
                id: 1
              },
              frameIds: {
                rule: "repeated",
                type: "uint64",
                id: 2
              }
            }
          },
          MemoryTrackerSnapshot: {
            edition: "proto2",
            fields: {
              globalDumpId: {
                type: "uint64",
                id: 1
              },
              levelOfDetail: {
                type: "LevelOfDetail",
                id: 2
              },
              processMemoryDumps: {
                rule: "repeated",
                type: "ProcessSnapshot",
                id: 3
              }
            },
            nested: {
              ProcessSnapshot: {
                fields: {
                  pid: {
                    type: "int32",
                    id: 1
                  },
                  allocatorDumps: {
                    rule: "repeated",
                    type: "MemoryNode",
                    id: 2
                  },
                  memoryEdges: {
                    rule: "repeated",
                    type: "MemoryEdge",
                    id: 3
                  }
                },
                nested: {
                  MemoryNode: {
                    fields: {
                      id: {
                        type: "uint64",
                        id: 1
                      },
                      absoluteName: {
                        type: "string",
                        id: 2
                      },
                      weak: {
                        type: "bool",
                        id: 3
                      },
                      sizeBytes: {
                        type: "uint64",
                        id: 4
                      },
                      entries: {
                        rule: "repeated",
                        type: "MemoryNodeEntry",
                        id: 5
                      }
                    },
                    nested: {
                      MemoryNodeEntry: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          units: {
                            type: "Units",
                            id: 2
                          },
                          valueUint64: {
                            type: "uint64",
                            id: 3
                          },
                          valueString: {
                            type: "string",
                            id: 4
                          }
                        },
                        nested: {
                          Units: {
                            values: {
                              UNSPECIFIED: 0,
                              BYTES: 1,
                              COUNT: 2
                            }
                          }
                        }
                      }
                    }
                  },
                  MemoryEdge: {
                    fields: {
                      sourceId: {
                        type: "uint64",
                        id: 1
                      },
                      targetId: {
                        type: "uint64",
                        id: 2
                      },
                      importance: {
                        type: "uint32",
                        id: 3
                      },
                      overridable: {
                        type: "bool",
                        id: 4
                      }
                    }
                  }
                }
              },
              LevelOfDetail: {
                values: {
                  DETAIL_FULL: 0,
                  DETAIL_LIGHT: 1,
                  DETAIL_BACKGROUND: 2
                }
              }
            }
          },
          PerfettoMetatrace: {
            edition: "proto2",
            oneofs: {
              recordType: {
                oneof: [
                  "eventId",
                  "counterId",
                  "eventName",
                  "eventNameIid",
                  "counterName"
                ]
              }
            },
            fields: {
              eventId: {
                type: "uint32",
                id: 1
              },
              counterId: {
                type: "uint32",
                id: 2
              },
              eventName: {
                type: "string",
                id: 8
              },
              eventNameIid: {
                type: "uint64",
                id: 11
              },
              counterName: {
                type: "string",
                id: 9
              },
              eventDurationNs: {
                type: "uint64",
                id: 3
              },
              counterValue: {
                type: "int32",
                id: 4
              },
              threadId: {
                type: "uint32",
                id: 5
              },
              hasOverruns: {
                type: "bool",
                id: 6
              },
              args: {
                rule: "repeated",
                type: "Arg",
                id: 7
              },
              internedStrings: {
                rule: "repeated",
                type: "InternedString",
                id: 10
              }
            },
            nested: {
              Arg: {
                oneofs: {
                  keyOrInternedKey: {
                    oneof: [
                      "key",
                      "keyIid"
                    ]
                  },
                  valueOrInternedValue: {
                    oneof: [
                      "value",
                      "valueIid"
                    ]
                  }
                },
                fields: {
                  key: {
                    type: "string",
                    id: 1
                  },
                  keyIid: {
                    type: "uint64",
                    id: 3
                  },
                  value: {
                    type: "string",
                    id: 2
                  },
                  valueIid: {
                    type: "uint64",
                    id: 4
                  }
                }
              },
              InternedString: {
                fields: {
                  iid: {
                    type: "uint64",
                    id: 1
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          TracingServiceEvent: {
            edition: "proto2",
            oneofs: {
              eventType: {
                oneof: [
                  "tracingStarted",
                  "allDataSourcesStarted",
                  "flushStarted",
                  "allDataSourcesFlushed",
                  "readTracingBuffersCompleted",
                  "tracingDisabled",
                  "seizedForBugreport",
                  "slowStartingDataSources",
                  "lastFlushSlowDataSources",
                  "cloneStarted",
                  "bufferCloned"
                ]
              }
            },
            fields: {
              tracingStarted: {
                type: "bool",
                id: 2
              },
              allDataSourcesStarted: {
                type: "bool",
                id: 1
              },
              flushStarted: {
                type: "bool",
                id: 9
              },
              allDataSourcesFlushed: {
                type: "bool",
                id: 3
              },
              readTracingBuffersCompleted: {
                type: "bool",
                id: 4
              },
              tracingDisabled: {
                type: "bool",
                id: 5
              },
              seizedForBugreport: {
                type: "bool",
                id: 6
              },
              slowStartingDataSources: {
                type: "DataSources",
                id: 7
              },
              lastFlushSlowDataSources: {
                type: "DataSources",
                id: 8
              },
              cloneStarted: {
                type: "bool",
                id: 10
              },
              bufferCloned: {
                type: "uint32",
                id: 11
              }
            },
            nested: {
              DataSources: {
                fields: {
                  dataSource: {
                    rule: "repeated",
                    type: "DataSource",
                    id: 1
                  }
                },
                nested: {
                  DataSource: {
                    fields: {
                      producerName: {
                        type: "string",
                        id: 1
                      },
                      dataSourceName: {
                        type: "string",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          },
          AndroidEnergyEstimationBreakdown: {
            edition: "proto2",
            fields: {
              energyConsumerDescriptor: {
                type: "AndroidEnergyConsumerDescriptor",
                id: 1
              },
              energyConsumerId: {
                type: "int32",
                id: 2
              },
              energyUws: {
                type: "int64",
                id: 3
              },
              perUidBreakdown: {
                rule: "repeated",
                type: "EnergyUidBreakdown",
                id: 4
              }
            },
            nested: {
              EnergyUidBreakdown: {
                fields: {
                  uid: {
                    type: "int32",
                    id: 1
                  },
                  energyUws: {
                    type: "int64",
                    id: 2
                  }
                }
              }
            }
          },
          AndroidEnergyConsumer: {
            edition: "proto2",
            fields: {
              energyConsumerId: {
                type: "int32",
                id: 1
              },
              ordinal: {
                type: "int32",
                id: 2
              },
              type: {
                type: "string",
                id: 3
              },
              name: {
                type: "string",
                id: 4
              }
            }
          },
          AndroidEnergyConsumerDescriptor: {
            edition: "proto2",
            fields: {
              energyConsumers: {
                rule: "repeated",
                type: "AndroidEnergyConsumer",
                id: 1
              }
            }
          },
          EntityStateResidency: {
            edition: "proto2",
            fields: {
              powerEntityState: {
                rule: "repeated",
                type: "PowerEntityState",
                id: 1
              },
              residency: {
                rule: "repeated",
                type: "StateResidency",
                id: 2
              }
            },
            nested: {
              PowerEntityState: {
                fields: {
                  entityIndex: {
                    type: "int32",
                    id: 1
                  },
                  stateIndex: {
                    type: "int32",
                    id: 2
                  },
                  entityName: {
                    type: "string",
                    id: 3
                  },
                  stateName: {
                    type: "string",
                    id: 4
                  }
                }
              },
              StateResidency: {
                fields: {
                  entityIndex: {
                    type: "int32",
                    id: 1
                  },
                  stateIndex: {
                    type: "int32",
                    id: 2
                  },
                  totalTimeInStateMs: {
                    type: "uint64",
                    id: 3
                  },
                  totalStateEntryCount: {
                    type: "uint64",
                    id: 4
                  },
                  lastEntryTimestampMs: {
                    type: "uint64",
                    id: 5
                  }
                }
              }
            }
          },
          BatteryCounters: {
            edition: "proto2",
            fields: {
              chargeCounterUah: {
                type: "int64",
                id: 1
              },
              capacityPercent: {
                type: "float",
                id: 2
              },
              currentUa: {
                type: "int64",
                id: 3
              },
              currentAvgUa: {
                type: "int64",
                id: 4
              },
              name: {
                type: "string",
                id: 5
              },
              energyCounterUwh: {
                type: "int64",
                id: 6
              },
              voltageUv: {
                type: "int64",
                id: 7
              }
            }
          },
          PowerRails: {
            edition: "proto2",
            fields: {
              railDescriptor: {
                rule: "repeated",
                type: "RailDescriptor",
                id: 1
              },
              energyData: {
                rule: "repeated",
                type: "EnergyData",
                id: 2
              }
            },
            nested: {
              RailDescriptor: {
                fields: {
                  index: {
                    type: "uint32",
                    id: 1
                  },
                  railName: {
                    type: "string",
                    id: 2
                  },
                  subsysName: {
                    type: "string",
                    id: 3
                  },
                  samplingRate: {
                    type: "uint32",
                    id: 4
                  }
                }
              },
              EnergyData: {
                fields: {
                  index: {
                    type: "uint32",
                    id: 1
                  },
                  timestampMs: {
                    type: "uint64",
                    id: 2
                  },
                  energy: {
                    type: "uint64",
                    id: 3
                  }
                }
              }
            }
          },
          Atom: {
            edition: "proto2",
            fields: {}
          },
          StatsdAtom: {
            edition: "proto2",
            fields: {
              atom: {
                rule: "repeated",
                type: "Atom",
                id: 1
              },
              timestampNanos: {
                rule: "repeated",
                type: "int64",
                id: 2
              }
            }
          },
          ObfuscatedMember: {
            edition: "proto2",
            fields: {
              obfuscatedName: {
                type: "string",
                id: 1
              },
              deobfuscatedName: {
                type: "string",
                id: 2
              }
            }
          },
          ObfuscatedClass: {
            edition: "proto2",
            fields: {
              obfuscatedName: {
                type: "string",
                id: 1
              },
              deobfuscatedName: {
                type: "string",
                id: 2
              },
              obfuscatedMembers: {
                rule: "repeated",
                type: "ObfuscatedMember",
                id: 3
              },
              obfuscatedMethods: {
                rule: "repeated",
                type: "ObfuscatedMember",
                id: 4
              }
            }
          },
          DeobfuscationMapping: {
            edition: "proto2",
            fields: {
              packageName: {
                type: "string",
                id: 1
              },
              versionCode: {
                type: "int64",
                id: 2
              },
              obfuscatedClasses: {
                rule: "repeated",
                type: "ObfuscatedClass",
                id: 3
              }
            }
          },
          HeapGraphRoot: {
            edition: "proto2",
            fields: {
              objectIds: {
                rule: "repeated",
                type: "uint64",
                id: 1,
                options: {
                  packed: true
                }
              },
              rootType: {
                type: "Type",
                id: 2
              }
            },
            nested: {
              Type: {
                values: {
                  ROOT_UNKNOWN: 0,
                  ROOT_JNI_GLOBAL: 1,
                  ROOT_JNI_LOCAL: 2,
                  ROOT_JAVA_FRAME: 3,
                  ROOT_NATIVE_STACK: 4,
                  ROOT_STICKY_CLASS: 5,
                  ROOT_THREAD_BLOCK: 6,
                  ROOT_MONITOR_USED: 7,
                  ROOT_THREAD_OBJECT: 8,
                  ROOT_INTERNED_STRING: 9,
                  ROOT_FINALIZING: 10,
                  ROOT_DEBUGGER: 11,
                  ROOT_REFERENCE_CLEANUP: 12,
                  ROOT_VM_INTERNAL: 13,
                  ROOT_JNI_MONITOR: 14
                }
              }
            }
          },
          HeapGraphType: {
            edition: "proto2",
            fields: {
              id: {
                type: "uint64",
                id: 1
              },
              locationId: {
                type: "uint64",
                id: 2
              },
              className: {
                type: "string",
                id: 3
              },
              objectSize: {
                type: "uint64",
                id: 4
              },
              superclassId: {
                type: "uint64",
                id: 5
              },
              referenceFieldId: {
                rule: "repeated",
                type: "uint64",
                id: 6,
                options: {
                  packed: true
                }
              },
              kind: {
                type: "Kind",
                id: 7
              },
              classloaderId: {
                type: "uint64",
                id: 8
              }
            },
            nested: {
              Kind: {
                values: {
                  KIND_UNKNOWN: 0,
                  KIND_NORMAL: 1,
                  KIND_NOREFERENCES: 2,
                  KIND_STRING: 3,
                  KIND_ARRAY: 4,
                  KIND_CLASS: 5,
                  KIND_CLASSLOADER: 6,
                  KIND_DEXCACHE: 7,
                  KIND_SOFT_REFERENCE: 8,
                  KIND_WEAK_REFERENCE: 9,
                  KIND_FINALIZER_REFERENCE: 10,
                  KIND_PHANTOM_REFERENCE: 11
                }
              }
            }
          },
          HeapGraphObject: {
            edition: "proto2",
            oneofs: {
              identifier: {
                oneof: [
                  "id",
                  "idDelta"
                ]
              }
            },
            fields: {
              id: {
                type: "uint64",
                id: 1
              },
              idDelta: {
                type: "uint64",
                id: 7
              },
              typeId: {
                type: "uint64",
                id: 2
              },
              selfSize: {
                type: "uint64",
                id: 3
              },
              referenceFieldIdBase: {
                type: "uint64",
                id: 6
              },
              referenceFieldId: {
                rule: "repeated",
                type: "uint64",
                id: 4,
                options: {
                  packed: true
                }
              },
              referenceObjectId: {
                rule: "repeated",
                type: "uint64",
                id: 5,
                options: {
                  packed: true
                }
              },
              nativeAllocationRegistrySizeField: {
                type: "int64",
                id: 8
              },
              heapTypeDelta: {
                type: "HeapType",
                id: 9
              }
            },
            nested: {
              HeapType: {
                values: {
                  HEAP_TYPE_UNKNOWN: 0,
                  HEAP_TYPE_APP: 1,
                  HEAP_TYPE_ZYGOTE: 2,
                  HEAP_TYPE_BOOT_IMAGE: 3
                }
              }
            }
          },
          HeapGraph: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              objects: {
                rule: "repeated",
                type: "HeapGraphObject",
                id: 2
              },
              roots: {
                rule: "repeated",
                type: "HeapGraphRoot",
                id: 7
              },
              types: {
                rule: "repeated",
                type: "HeapGraphType",
                id: 9
              },
              fieldNames: {
                rule: "repeated",
                type: "InternedString",
                id: 4
              },
              locationNames: {
                rule: "repeated",
                type: "InternedString",
                id: 8
              },
              continued: {
                type: "bool",
                id: 5
              },
              index: {
                type: "uint64",
                id: 6
              }
            },
            reserved: [
              [
                3,
                3
              ]
            ]
          },
          ProfilePacket: {
            edition: "proto2",
            fields: {
              strings: {
                rule: "repeated",
                type: "InternedString",
                id: 1
              },
              mappings: {
                rule: "repeated",
                type: "Mapping",
                id: 4
              },
              frames: {
                rule: "repeated",
                type: "Frame",
                id: 2
              },
              callstacks: {
                rule: "repeated",
                type: "Callstack",
                id: 3
              },
              processDumps: {
                rule: "repeated",
                type: "ProcessHeapSamples",
                id: 5
              },
              continued: {
                type: "bool",
                id: 6
              },
              index: {
                type: "uint64",
                id: 7
              }
            },
            nested: {
              HeapSample: {
                fields: {
                  callstackId: {
                    type: "uint64",
                    id: 1
                  },
                  selfAllocated: {
                    type: "uint64",
                    id: 2
                  },
                  selfFreed: {
                    type: "uint64",
                    id: 3
                  },
                  selfMax: {
                    type: "uint64",
                    id: 8
                  },
                  selfMaxCount: {
                    type: "uint64",
                    id: 9
                  },
                  timestamp: {
                    type: "uint64",
                    id: 4
                  },
                  allocCount: {
                    type: "uint64",
                    id: 5
                  },
                  freeCount: {
                    type: "uint64",
                    id: 6
                  }
                },
                reserved: [
                  [
                    7,
                    7
                  ]
                ]
              },
              Histogram: {
                fields: {
                  buckets: {
                    rule: "repeated",
                    type: "Bucket",
                    id: 1
                  }
                },
                nested: {
                  Bucket: {
                    fields: {
                      upperLimit: {
                        type: "uint64",
                        id: 1
                      },
                      maxBucket: {
                        type: "bool",
                        id: 2
                      },
                      count: {
                        type: "uint64",
                        id: 3
                      }
                    }
                  }
                }
              },
              ProcessStats: {
                fields: {
                  unwindingErrors: {
                    type: "uint64",
                    id: 1
                  },
                  heapSamples: {
                    type: "uint64",
                    id: 2
                  },
                  mapReparses: {
                    type: "uint64",
                    id: 3
                  },
                  unwindingTimeUs: {
                    type: "Histogram",
                    id: 4
                  },
                  totalUnwindingTimeUs: {
                    type: "uint64",
                    id: 5
                  },
                  clientSpinlockBlockedUs: {
                    type: "uint64",
                    id: 6
                  }
                }
              },
              ProcessHeapSamples: {
                fields: {
                  pid: {
                    type: "uint64",
                    id: 1
                  },
                  fromStartup: {
                    type: "bool",
                    id: 3
                  },
                  rejectedConcurrent: {
                    type: "bool",
                    id: 4
                  },
                  disconnected: {
                    type: "bool",
                    id: 6
                  },
                  bufferOverran: {
                    type: "bool",
                    id: 7
                  },
                  clientError: {
                    type: "ClientError",
                    id: 14
                  },
                  bufferCorrupted: {
                    type: "bool",
                    id: 8
                  },
                  hitGuardrail: {
                    type: "bool",
                    id: 10
                  },
                  heapName: {
                    type: "string",
                    id: 11
                  },
                  samplingIntervalBytes: {
                    type: "uint64",
                    id: 12
                  },
                  origSamplingIntervalBytes: {
                    type: "uint64",
                    id: 13
                  },
                  timestamp: {
                    type: "uint64",
                    id: 9
                  },
                  stats: {
                    type: "ProcessStats",
                    id: 5
                  },
                  samples: {
                    rule: "repeated",
                    type: "HeapSample",
                    id: 2
                  }
                },
                nested: {
                  ClientError: {
                    values: {
                      CLIENT_ERROR_NONE: 0,
                      CLIENT_ERROR_HIT_TIMEOUT: 1,
                      CLIENT_ERROR_INVALID_STACK_BOUNDS: 2
                    }
                  }
                }
              }
            }
          },
          StreamingAllocation: {
            edition: "proto2",
            fields: {
              address: {
                rule: "repeated",
                type: "uint64",
                id: 1
              },
              size: {
                rule: "repeated",
                type: "uint64",
                id: 2
              },
              sampleSize: {
                rule: "repeated",
                type: "uint64",
                id: 3
              },
              clockMonotonicCoarseTimestamp: {
                rule: "repeated",
                type: "uint64",
                id: 4
              },
              heapId: {
                rule: "repeated",
                type: "uint32",
                id: 5
              },
              sequenceNumber: {
                rule: "repeated",
                type: "uint64",
                id: 6
              }
            }
          },
          StreamingFree: {
            edition: "proto2",
            fields: {
              address: {
                rule: "repeated",
                type: "uint64",
                id: 1
              },
              heapId: {
                rule: "repeated",
                type: "uint32",
                id: 2
              },
              sequenceNumber: {
                rule: "repeated",
                type: "uint64",
                id: 3
              }
            }
          },
          StreamingProfilePacket: {
            edition: "proto2",
            fields: {
              callstackIid: {
                rule: "repeated",
                type: "uint64",
                id: 1
              },
              timestampDeltaUs: {
                rule: "repeated",
                type: "int64",
                id: 2
              },
              processPriority: {
                type: "int32",
                id: 3
              }
            }
          },
          Profiling: {
            edition: "proto2",
            fields: {},
            nested: {
              CpuMode: {
                values: {
                  MODE_UNKNOWN: 0,
                  MODE_KERNEL: 1,
                  MODE_USER: 2,
                  MODE_HYPERVISOR: 3,
                  MODE_GUEST_KERNEL: 4,
                  MODE_GUEST_USER: 5
                }
              },
              StackUnwindError: {
                values: {
                  UNWIND_ERROR_UNKNOWN: 0,
                  UNWIND_ERROR_NONE: 1,
                  UNWIND_ERROR_MEMORY_INVALID: 2,
                  UNWIND_ERROR_UNWIND_INFO: 3,
                  UNWIND_ERROR_UNSUPPORTED: 4,
                  UNWIND_ERROR_INVALID_MAP: 5,
                  UNWIND_ERROR_MAX_FRAMES_EXCEEDED: 6,
                  UNWIND_ERROR_REPEATED_FRAME: 7,
                  UNWIND_ERROR_INVALID_ELF: 8,
                  UNWIND_ERROR_SYSTEM_CALL: 9,
                  UNWIND_ERROR_THREAD_TIMEOUT: 10,
                  UNWIND_ERROR_THREAD_DOES_NOT_EXIST: 11,
                  UNWIND_ERROR_BAD_ARCH: 12,
                  UNWIND_ERROR_MAPS_PARSE: 13,
                  UNWIND_ERROR_INVALID_PARAMETER: 14,
                  UNWIND_ERROR_PTRACE_CALL: 15
                }
              }
            }
          },
          PerfSample: {
            edition: "proto2",
            oneofs: {
              optionalUnwindError: {
                oneof: [
                  "unwindError"
                ]
              },
              optionalSampleSkippedReason: {
                oneof: [
                  "sampleSkippedReason"
                ]
              }
            },
            fields: {
              cpu: {
                type: "uint32",
                id: 1
              },
              pid: {
                type: "uint32",
                id: 2
              },
              tid: {
                type: "uint32",
                id: 3
              },
              cpuMode: {
                type: "Profiling.CpuMode",
                id: 5
              },
              timebaseCount: {
                type: "uint64",
                id: 6
              },
              followerCounts: {
                rule: "repeated",
                type: "uint64",
                id: 7
              },
              callstackIid: {
                type: "uint64",
                id: 4
              },
              unwindError: {
                type: "Profiling.StackUnwindError",
                id: 16
              },
              kernelRecordsLost: {
                type: "uint64",
                id: 17
              },
              sampleSkippedReason: {
                type: "SampleSkipReason",
                id: 18
              },
              producerEvent: {
                type: "ProducerEvent",
                id: 19
              }
            },
            nested: {
              SampleSkipReason: {
                values: {
                  PROFILER_SKIP_UNKNOWN: 0,
                  PROFILER_SKIP_READ_STAGE: 1,
                  PROFILER_SKIP_UNWIND_STAGE: 2,
                  PROFILER_SKIP_UNWIND_ENQUEUE: 3,
                  PROFILER_SKIP_NOT_IN_SCOPE: 4
                }
              },
              ProducerEvent: {
                oneofs: {
                  optionalSourceStopReason: {
                    oneof: [
                      "sourceStopReason"
                    ]
                  }
                },
                fields: {
                  sourceStopReason: {
                    type: "DataSourceStopReason",
                    id: 1
                  }
                },
                nested: {
                  DataSourceStopReason: {
                    values: {
                      PROFILER_STOP_UNKNOWN: 0,
                      PROFILER_STOP_GUARDRAIL: 1
                    }
                  }
                }
              }
            }
          },
          PerfSampleDefaults: {
            edition: "proto2",
            fields: {
              timebase: {
                type: "PerfEvents.Timebase",
                id: 1
              },
              followers: {
                rule: "repeated",
                type: "FollowerEvent",
                id: 4
              },
              processShardCount: {
                type: "uint32",
                id: 2
              },
              chosenProcessShard: {
                type: "uint32",
                id: 3
              }
            }
          },
          SmapsEntry: {
            edition: "proto2",
            fields: {
              path: {
                type: "string",
                id: 1
              },
              sizeKb: {
                type: "uint64",
                id: 2
              },
              privateDirtyKb: {
                type: "uint64",
                id: 3
              },
              swapKb: {
                type: "uint64",
                id: 4
              },
              fileName: {
                type: "string",
                id: 5
              },
              startAddress: {
                type: "uint64",
                id: 6
              },
              moduleTimestamp: {
                type: "uint64",
                id: 7
              },
              moduleDebugid: {
                type: "string",
                id: 8
              },
              moduleDebugPath: {
                type: "string",
                id: 9
              },
              protectionFlags: {
                type: "uint32",
                id: 10
              },
              privateCleanResidentKb: {
                type: "uint64",
                id: 11
              },
              sharedDirtyResidentKb: {
                type: "uint64",
                id: 12
              },
              sharedCleanResidentKb: {
                type: "uint64",
                id: 13
              },
              lockedKb: {
                type: "uint64",
                id: 14
              },
              proportionalResidentKb: {
                type: "uint64",
                id: 15
              }
            }
          },
          SmapsPacket: {
            edition: "proto2",
            fields: {
              pid: {
                type: "uint32",
                id: 1
              },
              entries: {
                rule: "repeated",
                type: "SmapsEntry",
                id: 2
              }
            }
          },
          ProcessStats: {
            edition: "proto2",
            fields: {
              processes: {
                rule: "repeated",
                type: "Process",
                id: 1
              },
              collectionEndTimestamp: {
                type: "uint64",
                id: 2
              }
            },
            nested: {
              Thread: {
                fields: {
                  tid: {
                    type: "int32",
                    id: 1
                  }
                },
                reserved: [
                  [
                    2,
                    2
                  ],
                  [
                    3,
                    3
                  ],
                  [
                    4,
                    4
                  ]
                ]
              },
              FDInfo: {
                fields: {
                  fd: {
                    type: "uint64",
                    id: 1
                  },
                  path: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Process: {
                fields: {
                  pid: {
                    type: "int32",
                    id: 1
                  },
                  threads: {
                    rule: "repeated",
                    type: "Thread",
                    id: 11
                  },
                  vmSizeKb: {
                    type: "uint64",
                    id: 2
                  },
                  vmRssKb: {
                    type: "uint64",
                    id: 3
                  },
                  rssAnonKb: {
                    type: "uint64",
                    id: 4
                  },
                  rssFileKb: {
                    type: "uint64",
                    id: 5
                  },
                  rssShmemKb: {
                    type: "uint64",
                    id: 6
                  },
                  vmSwapKb: {
                    type: "uint64",
                    id: 7
                  },
                  vmLockedKb: {
                    type: "uint64",
                    id: 8
                  },
                  vmHwmKb: {
                    type: "uint64",
                    id: 9
                  },
                  oomScoreAdj: {
                    type: "int64",
                    id: 10
                  },
                  isPeakRssResettable: {
                    type: "bool",
                    id: 12
                  },
                  chromePrivateFootprintKb: {
                    type: "uint32",
                    id: 13
                  },
                  chromePeakResidentSetKb: {
                    type: "uint32",
                    id: 14
                  },
                  fds: {
                    rule: "repeated",
                    type: "FDInfo",
                    id: 15
                  },
                  smrRssKb: {
                    type: "uint64",
                    id: 16
                  },
                  smrPssKb: {
                    type: "uint64",
                    id: 17
                  },
                  smrPssAnonKb: {
                    type: "uint64",
                    id: 18
                  },
                  smrPssFileKb: {
                    type: "uint64",
                    id: 19
                  },
                  smrPssShmemKb: {
                    type: "uint64",
                    id: 20
                  },
                  smrSwapPssKb: {
                    type: "uint64",
                    id: 23
                  },
                  runtimeUserMode: {
                    type: "uint64",
                    id: 21
                  },
                  runtimeKernelMode: {
                    type: "uint64",
                    id: 22
                  }
                }
              }
            }
          },
          ProcessTree: {
            edition: "proto2",
            fields: {
              processes: {
                rule: "repeated",
                type: "Process",
                id: 1
              },
              threads: {
                rule: "repeated",
                type: "Thread",
                id: 2
              },
              collectionEndTimestamp: {
                type: "uint64",
                id: 3
              }
            },
            nested: {
              Thread: {
                fields: {
                  tid: {
                    type: "int32",
                    id: 1
                  },
                  tgid: {
                    type: "int32",
                    id: 3
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  nstid: {
                    rule: "repeated",
                    type: "int32",
                    id: 4
                  }
                }
              },
              Process: {
                fields: {
                  pid: {
                    type: "int32",
                    id: 1
                  },
                  ppid: {
                    type: "int32",
                    id: 2
                  },
                  cmdline: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  cmdlineIsComm: {
                    type: "bool",
                    id: 9
                  },
                  uid: {
                    type: "int32",
                    id: 5
                  },
                  nspid: {
                    rule: "repeated",
                    type: "int32",
                    id: 6
                  },
                  processStartFromBoot: {
                    type: "uint64",
                    id: 7
                  },
                  isKthread: {
                    type: "bool",
                    id: 8
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ]
              }
            }
          },
          RemoteClockSync: {
            edition: "proto2",
            fields: {
              syncedClocks: {
                rule: "repeated",
                type: "SyncedClocks",
                id: 1
              }
            },
            nested: {
              SyncedClocks: {
                fields: {
                  clientClocks: {
                    type: "ClockSnapshot",
                    id: 2
                  },
                  hostClocks: {
                    type: "ClockSnapshot",
                    id: 3
                  }
                }
              }
            }
          },
          SysStats: {
            edition: "proto2",
            fields: {
              meminfo: {
                rule: "repeated",
                type: "MeminfoValue",
                id: 1
              },
              vmstat: {
                rule: "repeated",
                type: "VmstatValue",
                id: 2
              },
              cpuStat: {
                rule: "repeated",
                type: "CpuTimes",
                id: 3
              },
              numForks: {
                type: "uint64",
                id: 4
              },
              numIrqTotal: {
                type: "uint64",
                id: 5
              },
              numIrq: {
                rule: "repeated",
                type: "InterruptCount",
                id: 6
              },
              numSoftirqTotal: {
                type: "uint64",
                id: 7
              },
              numSoftirq: {
                rule: "repeated",
                type: "InterruptCount",
                id: 8
              },
              collectionEndTimestamp: {
                type: "uint64",
                id: 9
              },
              devfreq: {
                rule: "repeated",
                type: "DevfreqValue",
                id: 10
              },
              cpufreqKhz: {
                rule: "repeated",
                type: "uint32",
                id: 11
              },
              buddyInfo: {
                rule: "repeated",
                type: "BuddyInfo",
                id: 12
              },
              diskStat: {
                rule: "repeated",
                type: "DiskStat",
                id: 13
              },
              psi: {
                rule: "repeated",
                type: "PsiSample",
                id: 14
              },
              thermalZone: {
                rule: "repeated",
                type: "ThermalZone",
                id: 15
              },
              cpuidleState: {
                rule: "repeated",
                type: "CpuIdleState",
                id: 16
              },
              gpufreqMhz: {
                rule: "repeated",
                type: "uint64",
                id: 17
              }
            },
            nested: {
              MeminfoValue: {
                fields: {
                  key: {
                    type: "MeminfoCounters",
                    id: 1
                  },
                  value: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              VmstatValue: {
                fields: {
                  key: {
                    type: "VmstatCounters",
                    id: 1
                  },
                  value: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              CpuTimes: {
                fields: {
                  cpuId: {
                    type: "uint32",
                    id: 1
                  },
                  userNs: {
                    type: "uint64",
                    id: 2
                  },
                  userNiceNs: {
                    type: "uint64",
                    id: 3
                  },
                  systemModeNs: {
                    type: "uint64",
                    id: 4
                  },
                  idleNs: {
                    type: "uint64",
                    id: 5
                  },
                  ioWaitNs: {
                    type: "uint64",
                    id: 6
                  },
                  irqNs: {
                    type: "uint64",
                    id: 7
                  },
                  softirqNs: {
                    type: "uint64",
                    id: 8
                  },
                  stealNs: {
                    type: "uint64",
                    id: 9
                  }
                }
              },
              InterruptCount: {
                fields: {
                  irq: {
                    type: "int32",
                    id: 1
                  },
                  count: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              DevfreqValue: {
                fields: {
                  key: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              BuddyInfo: {
                fields: {
                  node: {
                    type: "string",
                    id: 1
                  },
                  zone: {
                    type: "string",
                    id: 2
                  },
                  orderPages: {
                    rule: "repeated",
                    type: "uint32",
                    id: 3
                  }
                }
              },
              DiskStat: {
                fields: {
                  deviceName: {
                    type: "string",
                    id: 1
                  },
                  readSectors: {
                    type: "uint64",
                    id: 2
                  },
                  readTimeMs: {
                    type: "uint64",
                    id: 3
                  },
                  writeSectors: {
                    type: "uint64",
                    id: 4
                  },
                  writeTimeMs: {
                    type: "uint64",
                    id: 5
                  },
                  discardSectors: {
                    type: "uint64",
                    id: 6
                  },
                  discardTimeMs: {
                    type: "uint64",
                    id: 7
                  },
                  flushCount: {
                    type: "uint64",
                    id: 8
                  },
                  flushTimeMs: {
                    type: "uint64",
                    id: 9
                  }
                }
              },
              PsiSample: {
                fields: {
                  resource: {
                    type: "PsiResource",
                    id: 1
                  },
                  totalNs: {
                    type: "uint64",
                    id: 2
                  }
                },
                nested: {
                  PsiResource: {
                    values: {
                      PSI_RESOURCE_UNSPECIFIED: 0,
                      PSI_RESOURCE_CPU_SOME: 1,
                      PSI_RESOURCE_CPU_FULL: 2,
                      PSI_RESOURCE_IO_SOME: 3,
                      PSI_RESOURCE_IO_FULL: 4,
                      PSI_RESOURCE_MEMORY_SOME: 5,
                      PSI_RESOURCE_MEMORY_FULL: 6
                    }
                  }
                }
              },
              ThermalZone: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  temp: {
                    type: "uint64",
                    id: 2
                  },
                  type: {
                    type: "string",
                    id: 3
                  }
                }
              },
              CpuIdleStateEntry: {
                fields: {
                  state: {
                    type: "string",
                    id: 1
                  },
                  durationUs: {
                    type: "uint64",
                    id: 2
                  }
                }
              },
              CpuIdleState: {
                fields: {
                  cpuId: {
                    type: "uint32",
                    id: 1
                  },
                  cpuidleStateEntry: {
                    rule: "repeated",
                    type: "CpuIdleStateEntry",
                    id: 2
                  }
                }
              }
            }
          },
          CpuInfo: {
            edition: "proto2",
            fields: {
              cpus: {
                rule: "repeated",
                type: "Cpu",
                id: 1
              }
            },
            nested: {
              ArmCpuIdentifier: {
                fields: {
                  implementer: {
                    type: "uint32",
                    id: 1
                  },
                  architecture: {
                    type: "uint32",
                    id: 2
                  },
                  variant: {
                    type: "uint32",
                    id: 3
                  },
                  part: {
                    type: "uint32",
                    id: 4
                  },
                  revision: {
                    type: "uint32",
                    id: 5
                  }
                }
              },
              Cpu: {
                oneofs: {
                  identifier: {
                    oneof: [
                      "armIdentifier"
                    ]
                  }
                },
                fields: {
                  processor: {
                    type: "string",
                    id: 1
                  },
                  frequencies: {
                    rule: "repeated",
                    type: "uint32",
                    id: 2
                  },
                  capacity: {
                    type: "uint32",
                    id: 3
                  },
                  armIdentifier: {
                    type: "ArmCpuIdentifier",
                    id: 4
                  },
                  features: {
                    type: "uint64",
                    id: 5
                  }
                }
              }
            }
          },
          TracePacketDefaults: {
            edition: "proto2",
            fields: {
              timestampClockId: {
                type: "uint32",
                id: 58
              },
              trackEventDefaults: {
                type: "TrackEventDefaults",
                id: 11
              },
              perfSampleDefaults: {
                type: "PerfSampleDefaults",
                id: 12
              },
              v8CodeDefaults: {
                type: "V8CodeDefaults",
                id: 99
              }
            }
          },
          ProcessDescriptor: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              cmdline: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              processName: {
                type: "string",
                id: 6
              },
              processPriority: {
                type: "int32",
                id: 5
              },
              startTimestampNs: {
                type: "int64",
                id: 7
              },
              chromeProcessType: {
                type: "ChromeProcessType",
                id: 4
              },
              legacySortIndex: {
                type: "int32",
                id: 3
              },
              processLabels: {
                rule: "repeated",
                type: "string",
                id: 8
              }
            },
            nested: {
              ChromeProcessType: {
                values: {
                  PROCESS_UNSPECIFIED: 0,
                  PROCESS_BROWSER: 1,
                  PROCESS_RENDERER: 2,
                  PROCESS_UTILITY: 3,
                  PROCESS_ZYGOTE: 4,
                  PROCESS_SANDBOX_HELPER: 5,
                  PROCESS_GPU: 6,
                  PROCESS_PPAPI_PLUGIN: 7,
                  PROCESS_PPAPI_BROKER: 8
                }
              }
            }
          },
          TrackEventRangeOfInterest: {
            edition: "proto2",
            fields: {
              startUs: {
                type: "int64",
                id: 1
              }
            }
          },
          ThreadDescriptor: {
            edition: "proto2",
            fields: {
              pid: {
                type: "int32",
                id: 1
              },
              tid: {
                type: "int32",
                id: 2
              },
              threadName: {
                type: "string",
                id: 5
              },
              chromeThreadType: {
                type: "ChromeThreadType",
                id: 4
              },
              referenceTimestampUs: {
                type: "int64",
                id: 6
              },
              referenceThreadTimeUs: {
                type: "int64",
                id: 7
              },
              referenceThreadInstructionCount: {
                type: "int64",
                id: 8
              },
              legacySortIndex: {
                type: "int32",
                id: 3
              }
            },
            nested: {
              ChromeThreadType: {
                values: {
                  CHROME_THREAD_UNSPECIFIED: 0,
                  CHROME_THREAD_MAIN: 1,
                  CHROME_THREAD_IO: 2,
                  CHROME_THREAD_POOL_BG_WORKER: 3,
                  CHROME_THREAD_POOL_FG_WORKER: 4,
                  CHROME_THREAD_POOL_FB_BLOCKING: 5,
                  CHROME_THREAD_POOL_BG_BLOCKING: 6,
                  CHROME_THREAD_POOL_SERVICE: 7,
                  CHROME_THREAD_COMPOSITOR: 8,
                  CHROME_THREAD_VIZ_COMPOSITOR: 9,
                  CHROME_THREAD_COMPOSITOR_WORKER: 10,
                  CHROME_THREAD_SERVICE_WORKER: 11,
                  CHROME_THREAD_MEMORY_INFRA: 50,
                  CHROME_THREAD_SAMPLING_PROFILER: 51
                }
              }
            }
          },
          TrackDescriptor: {
            edition: "proto2",
            oneofs: {
              staticOrDynamicName: {
                oneof: [
                  "name",
                  "staticName",
                  "atraceName"
                ]
              }
            },
            fields: {
              uuid: {
                type: "uint64",
                id: 1
              },
              parentUuid: {
                type: "uint64",
                id: 5
              },
              name: {
                type: "string",
                id: 2
              },
              staticName: {
                type: "string",
                id: 10
              },
              atraceName: {
                type: "string",
                id: 13
              },
              process: {
                type: "ProcessDescriptor",
                id: 3
              },
              chromeProcess: {
                type: "ChromeProcessDescriptor",
                id: 6
              },
              thread: {
                type: "ThreadDescriptor",
                id: 4
              },
              chromeThread: {
                type: "ChromeThreadDescriptor",
                id: 7
              },
              counter: {
                type: "CounterDescriptor",
                id: 8
              },
              disallowMergingWithSystemTracks: {
                type: "bool",
                id: 9
              },
              childOrdering: {
                type: "ChildTracksOrdering",
                id: 11
              },
              siblingOrderRank: {
                type: "int32",
                id: 12
              }
            },
            nested: {
              ChildTracksOrdering: {
                values: {
                  UNKNOWN: 0,
                  LEXICOGRAPHIC: 1,
                  CHRONOLOGICAL: 2,
                  EXPLICIT: 3
                }
              }
            }
          },
          ChromeProcessDescriptor: {
            edition: "proto2",
            fields: {
              processType: {
                type: "ProcessType",
                id: 1
              },
              processPriority: {
                type: "int32",
                id: 2
              },
              legacySortIndex: {
                type: "int32",
                id: 3
              },
              hostAppPackageName: {
                type: "string",
                id: 4
              },
              crashTraceId: {
                type: "uint64",
                id: 5
              }
            },
            nested: {
              ProcessType: {
                values: {
                  PROCESS_UNSPECIFIED: 0,
                  PROCESS_BROWSER: 1,
                  PROCESS_RENDERER: 2,
                  PROCESS_UTILITY: 3,
                  PROCESS_ZYGOTE: 4,
                  PROCESS_SANDBOX_HELPER: 5,
                  PROCESS_GPU: 6,
                  PROCESS_PPAPI_PLUGIN: 7,
                  PROCESS_PPAPI_BROKER: 8,
                  PROCESS_SERVICE_NETWORK: 9,
                  PROCESS_SERVICE_TRACING: 10,
                  PROCESS_SERVICE_STORAGE: 11,
                  PROCESS_SERVICE_AUDIO: 12,
                  PROCESS_SERVICE_DATA_DECODER: 13,
                  PROCESS_SERVICE_UTIL_WIN: 14,
                  PROCESS_SERVICE_PROXY_RESOLVER: 15,
                  PROCESS_SERVICE_CDM: 16,
                  PROCESS_SERVICE_VIDEO_CAPTURE: 17,
                  PROCESS_SERVICE_UNZIPPER: 18,
                  PROCESS_SERVICE_MIRRORING: 19,
                  PROCESS_SERVICE_FILEPATCHER: 20,
                  PROCESS_SERVICE_TTS: 21,
                  PROCESS_SERVICE_PRINTING: 22,
                  PROCESS_SERVICE_QUARANTINE: 23,
                  PROCESS_SERVICE_CROS_LOCALSEARCH: 24,
                  PROCESS_SERVICE_CROS_ASSISTANT_AUDIO_DECODER: 25,
                  PROCESS_SERVICE_FILEUTIL: 26,
                  PROCESS_SERVICE_PRINTCOMPOSITOR: 27,
                  PROCESS_SERVICE_PAINTPREVIEW: 28,
                  PROCESS_SERVICE_SPEECHRECOGNITION: 29,
                  PROCESS_SERVICE_XRDEVICE: 30,
                  PROCESS_SERVICE_READICON: 31,
                  PROCESS_SERVICE_LANGUAGEDETECTION: 32,
                  PROCESS_SERVICE_SHARING: 33,
                  PROCESS_SERVICE_MEDIAPARSER: 34,
                  PROCESS_SERVICE_QRCODEGENERATOR: 35,
                  PROCESS_SERVICE_PROFILEIMPORT: 36,
                  PROCESS_SERVICE_IME: 37,
                  PROCESS_SERVICE_RECORDING: 38,
                  PROCESS_SERVICE_SHAPEDETECTION: 39,
                  PROCESS_RENDERER_EXTENSION: 40,
                  PROCESS_SERVICE_MEDIA_FOUNDATION: 41
                }
              }
            }
          },
          ChromeThreadDescriptor: {
            edition: "proto2",
            fields: {
              threadType: {
                type: "ThreadType",
                id: 1
              },
              legacySortIndex: {
                type: "int32",
                id: 2
              }
            },
            nested: {
              ThreadType: {
                values: {
                  THREAD_UNSPECIFIED: 0,
                  THREAD_MAIN: 1,
                  THREAD_IO: 2,
                  THREAD_POOL_BG_WORKER: 3,
                  THREAD_POOL_FG_WORKER: 4,
                  THREAD_POOL_FG_BLOCKING: 5,
                  THREAD_POOL_BG_BLOCKING: 6,
                  THREAD_POOL_SERVICE: 7,
                  THREAD_COMPOSITOR: 8,
                  THREAD_VIZ_COMPOSITOR: 9,
                  THREAD_COMPOSITOR_WORKER: 10,
                  THREAD_SERVICE_WORKER: 11,
                  THREAD_NETWORK_SERVICE: 12,
                  THREAD_CHILD_IO: 13,
                  THREAD_BROWSER_IO: 14,
                  THREAD_BROWSER_MAIN: 15,
                  THREAD_RENDERER_MAIN: 16,
                  THREAD_UTILITY_MAIN: 17,
                  THREAD_GPU_MAIN: 18,
                  THREAD_CACHE_BLOCKFILE: 19,
                  THREAD_MEDIA: 20,
                  THREAD_AUDIO_OUTPUTDEVICE: 21,
                  THREAD_AUDIO_INPUTDEVICE: 22,
                  THREAD_GPU_MEMORY: 23,
                  THREAD_GPU_VSYNC: 24,
                  THREAD_DXA_VIDEODECODER: 25,
                  THREAD_BROWSER_WATCHDOG: 26,
                  THREAD_WEBRTC_NETWORK: 27,
                  THREAD_WINDOW_OWNER: 28,
                  THREAD_WEBRTC_SIGNALING: 29,
                  THREAD_WEBRTC_WORKER: 30,
                  THREAD_PPAPI_MAIN: 31,
                  THREAD_GPU_WATCHDOG: 32,
                  THREAD_SWAPPER: 33,
                  THREAD_GAMEPAD_POLLING: 34,
                  THREAD_WEBCRYPTO: 35,
                  THREAD_DATABASE: 36,
                  THREAD_PROXYRESOLVER: 37,
                  THREAD_DEVTOOLSADB: 38,
                  THREAD_NETWORKCONFIGWATCHER: 39,
                  THREAD_WASAPI_RENDER: 40,
                  THREAD_LOADER_LOCK_SAMPLER: 41,
                  THREAD_MEMORY_INFRA: 50,
                  THREAD_SAMPLING_PROFILER: 51,
                  THREAD_COMPOSITOR_GPU: 52
                }
              }
            }
          },
          CounterDescriptor: {
            edition: "proto2",
            fields: {
              type: {
                type: "BuiltinCounterType",
                id: 1
              },
              categories: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              unit: {
                type: "Unit",
                id: 3
              },
              unitName: {
                type: "string",
                id: 6
              },
              unitMultiplier: {
                type: "int64",
                id: 4
              },
              isIncremental: {
                type: "bool",
                id: 5
              }
            },
            nested: {
              BuiltinCounterType: {
                values: {
                  COUNTER_UNSPECIFIED: 0,
                  COUNTER_THREAD_TIME_NS: 1,
                  COUNTER_THREAD_INSTRUCTION_COUNT: 2
                }
              },
              Unit: {
                values: {
                  UNIT_UNSPECIFIED: 0,
                  UNIT_TIME_NS: 1,
                  UNIT_COUNT: 2,
                  UNIT_SIZE_BYTES: 3
                }
              }
            }
          },
          TranslationTable: {
            edition: "proto2",
            oneofs: {
              table: {
                oneof: [
                  "chromeHistogram",
                  "chromeUserEvent",
                  "chromePerformanceMark",
                  "sliceName",
                  "processTrackName",
                  "chromeStudy"
                ]
              }
            },
            fields: {
              chromeHistogram: {
                type: "ChromeHistorgramTranslationTable",
                id: 1
              },
              chromeUserEvent: {
                type: "ChromeUserEventTranslationTable",
                id: 2
              },
              chromePerformanceMark: {
                type: "ChromePerformanceMarkTranslationTable",
                id: 3
              },
              sliceName: {
                type: "SliceNameTranslationTable",
                id: 4
              },
              processTrackName: {
                type: "ProcessTrackNameTranslationTable",
                id: 5
              },
              chromeStudy: {
                type: "ChromeStudyTranslationTable",
                id: 6
              }
            }
          },
          ChromeHistorgramTranslationTable: {
            edition: "proto2",
            fields: {
              hashToName: {
                keyType: "uint64",
                type: "string",
                id: 1
              }
            }
          },
          ChromeUserEventTranslationTable: {
            edition: "proto2",
            fields: {
              actionHashToName: {
                keyType: "uint64",
                type: "string",
                id: 1
              }
            }
          },
          ChromePerformanceMarkTranslationTable: {
            edition: "proto2",
            fields: {
              siteHashToName: {
                keyType: "uint32",
                type: "string",
                id: 1
              },
              markHashToName: {
                keyType: "uint32",
                type: "string",
                id: 2
              }
            }
          },
          SliceNameTranslationTable: {
            edition: "proto2",
            fields: {
              rawToDeobfuscatedName: {
                keyType: "string",
                type: "string",
                id: 1
              }
            }
          },
          ProcessTrackNameTranslationTable: {
            edition: "proto2",
            fields: {
              rawToDeobfuscatedName: {
                keyType: "string",
                type: "string",
                id: 1
              }
            }
          },
          ChromeStudyTranslationTable: {
            edition: "proto2",
            fields: {
              hashToName: {
                keyType: "uint64",
                type: "string",
                id: 1
              }
            }
          },
          TraceUuid: {
            edition: "proto2",
            fields: {
              msb: {
                type: "int64",
                id: 1
              },
              lsb: {
                type: "int64",
                id: 2
              }
            }
          },
          Trigger: {
            edition: "proto2",
            fields: {
              triggerName: {
                type: "string",
                id: 1
              },
              producerName: {
                type: "string",
                id: 2
              },
              trustedProducerUid: {
                type: "int32",
                id: 3
              },
              stopDelayMs: {
                type: "uint64",
                id: 4
              }
            }
          },
          TestEvent: {
            edition: "proto2",
            fields: {
              str: {
                type: "string",
                id: 1
              },
              seqValue: {
                type: "uint32",
                id: 2
              },
              counter: {
                type: "uint64",
                id: 3
              },
              isLast: {
                type: "bool",
                id: 4
              },
              payload: {
                type: "TestPayload",
                id: 5
              }
            },
            nested: {
              TestPayload: {
                fields: {
                  str: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                  },
                  nested: {
                    rule: "repeated",
                    type: "TestPayload",
                    id: 2
                  },
                  singleString: {
                    type: "string",
                    id: 4
                  },
                  singleInt: {
                    type: "int32",
                    id: 5
                  },
                  repeatedInts: {
                    rule: "repeated",
                    type: "int32",
                    id: 6
                  },
                  remainingNestingDepth: {
                    type: "uint32",
                    id: 3
                  },
                  debugAnnotations: {
                    rule: "repeated",
                    type: "DebugAnnotation",
                    id: 7
                  }
                }
              }
            }
          },
          UiState: {
            edition: "proto2",
            fields: {
              timelineStartTs: {
                type: "int64",
                id: 1
              },
              timelineEndTs: {
                type: "int64",
                id: 2
              },
              highlightProcess: {
                type: "HighlightProcess",
                id: 3
              }
            },
            nested: {
              HighlightProcess: {
                oneofs: {
                  selector: {
                    oneof: [
                      "pid",
                      "cmdline"
                    ]
                  }
                },
                fields: {
                  pid: {
                    type: "uint32",
                    id: 1
                  },
                  cmdline: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          WinscopeExtensionsImpl: {
            edition: "proto2",
            fields: {},
            nested: {
              inputmethodClients: {
                type: "InputMethodClientsTraceProto",
                id: 1,
                extend: "WinscopeExtensions"
              },
              inputmethodService: {
                type: "InputMethodServiceTraceProto",
                id: 2,
                extend: "WinscopeExtensions"
              },
              inputmethodManagerService: {
                type: "InputMethodManagerServiceTraceProto",
                id: 3,
                extend: "WinscopeExtensions"
              },
              viewcapture: {
                type: "ViewCapture",
                id: 4,
                extend: "WinscopeExtensions"
              },
              androidInputEvent: {
                type: "AndroidInputEvent",
                id: 5,
                extend: "WinscopeExtensions"
              },
              windowmanager: {
                type: "WindowManagerTraceEntry",
                id: 6,
                extend: "WinscopeExtensions"
              }
            }
          },
          AndroidMotionEvent: {
            edition: "proto2",
            fields: {
              eventId: {
                type: "fixed32",
                id: 1
              },
              eventTimeNanos: {
                type: "int64",
                id: 2
              },
              source: {
                type: "uint32",
                id: 3,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.InputDevice.Source"
                }
              },
              action: {
                type: "int32",
                id: 4,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.MotionEvent.ActionMasked"
                }
              },
              deviceId: {
                type: "int32",
                id: 5
              },
              displayId: {
                type: "sint32",
                id: 6
              },
              classification: {
                type: "int32",
                id: 7,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.MotionEvent.Classification"
                }
              },
              flags: {
                type: "uint32",
                id: 8,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.MotionEvent.Flag"
                }
              },
              pointer: {
                rule: "repeated",
                type: "Pointer",
                id: 9
              },
              originalEventId: {
                rule: "repeated",
                type: "fixed32",
                id: 16,
                options: {
                  packed: true
                }
              },
              downTimeNanos: {
                type: "int64",
                id: 17
              },
              cursorPositionX: {
                type: "float",
                id: 18
              },
              cursorPositionY: {
                type: "float",
                id: 19
              },
              actionButton: {
                type: "int32",
                id: 20,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.MotionEvent.Button"
                }
              },
              buttonState: {
                type: "uint32",
                id: 21,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.MotionEvent.Button"
                }
              },
              metaState: {
                type: "uint32",
                id: 22,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.KeyEvent.MetaState"
                }
              },
              policyFlags: {
                type: "uint32",
                id: 23
              },
              precisionX: {
                type: "float",
                id: 24
              },
              precisionY: {
                type: "float",
                id: 25
              }
            },
            nested: {
              Pointer: {
                fields: {
                  axisValue: {
                    rule: "repeated",
                    type: "AxisValue",
                    id: 1
                  },
                  pointerId: {
                    type: "int32",
                    id: 2
                  },
                  toolType: {
                    type: "int32",
                    id: 3,
                    options: {
                      "(.perfetto.protos.typedef)": "android.view.MotionEvent.ToolType"
                    }
                  }
                },
                nested: {
                  AxisValue: {
                    fields: {
                      axis: {
                        type: "int32",
                        id: 1,
                        options: {
                          "(.perfetto.protos.typedef)": "android.view.MotionEvent.Axis"
                        }
                      },
                      value: {
                        type: "float",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          },
          AndroidKeyEvent: {
            edition: "proto2",
            fields: {
              eventId: {
                type: "fixed32",
                id: 1
              },
              eventTimeNanos: {
                type: "int64",
                id: 2
              },
              downTimeNanos: {
                type: "int64",
                id: 3
              },
              source: {
                type: "uint32",
                id: 4,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.InputDevice.Source"
                }
              },
              action: {
                type: "int32",
                id: 5,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.KeyEvent.Action"
                }
              },
              deviceId: {
                type: "int32",
                id: 6
              },
              displayId: {
                type: "sint32",
                id: 7
              },
              keyCode: {
                type: "int32",
                id: 8,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.KeyEvent.KeyCode"
                }
              },
              scanCode: {
                type: "uint32",
                id: 9
              },
              metaState: {
                type: "uint32",
                id: 10,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.KeyEvent.MetaState"
                }
              },
              repeatCount: {
                type: "int32",
                id: 11
              },
              flags: {
                type: "uint32",
                id: 12,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.KeyEvent.Flag"
                }
              },
              policyFlags: {
                type: "uint32",
                id: 13
              }
            }
          },
          AndroidWindowInputDispatchEvent: {
            edition: "proto2",
            fields: {
              eventId: {
                type: "fixed32",
                id: 1
              },
              vsyncId: {
                type: "int64",
                id: 2
              },
              windowId: {
                type: "int32",
                id: 3
              },
              dispatchedPointer: {
                rule: "repeated",
                type: "DispatchedPointer",
                id: 4
              },
              resolvedFlags: {
                type: "uint32",
                id: 5
              }
            },
            nested: {
              DispatchedPointer: {
                fields: {
                  pointerId: {
                    type: "int32",
                    id: 1
                  },
                  xInDisplay: {
                    type: "float",
                    id: 2
                  },
                  yInDisplay: {
                    type: "float",
                    id: 3
                  },
                  axisValueInWindow: {
                    rule: "repeated",
                    type: "AndroidMotionEvent.Pointer.AxisValue",
                    id: 4
                  }
                }
              }
            }
          },
          AndroidInputEvent: {
            edition: "proto2",
            oneofs: {
              event: {
                oneof: [
                  "dispatcherMotionEvent",
                  "dispatcherMotionEventRedacted",
                  "dispatcherKeyEvent",
                  "dispatcherKeyEventRedacted",
                  "dispatcherWindowDispatchEvent",
                  "dispatcherWindowDispatchEventRedacted"
                ]
              }
            },
            fields: {
              dispatcherMotionEvent: {
                type: "AndroidMotionEvent",
                id: 1
              },
              dispatcherMotionEventRedacted: {
                type: "AndroidMotionEvent",
                id: 2
              },
              dispatcherKeyEvent: {
                type: "AndroidKeyEvent",
                id: 3
              },
              dispatcherKeyEventRedacted: {
                type: "AndroidKeyEvent",
                id: 4
              },
              dispatcherWindowDispatchEvent: {
                type: "AndroidWindowInputDispatchEvent",
                id: 5
              },
              dispatcherWindowDispatchEventRedacted: {
                type: "AndroidWindowInputDispatchEvent",
                id: 6
              }
            }
          },
          typedef: {
            edition: "proto2",
            type: "string",
            id: 60001,
            extend: "google.protobuf.FieldOptions"
          },
          InputMethodClientsTraceProto: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "fixed64",
                id: 1
              },
              where: {
                type: "string",
                id: 2
              },
              client: {
                type: "ClientSideProto",
                id: 3
              }
            },
            nested: {
              ClientSideProto: {
                fields: {
                  displayId: {
                    type: "int32",
                    id: 1
                  },
                  inputMethodManager: {
                    type: "InputMethodManagerProto",
                    id: 2
                  },
                  viewRootImpl: {
                    type: "ViewRootImplProto",
                    id: 3
                  },
                  insetsController: {
                    type: "InsetsControllerProto",
                    id: 4
                  },
                  imeInsetsSourceConsumer: {
                    type: "ImeInsetsSourceConsumerProto",
                    id: 5
                  },
                  editorInfo: {
                    type: "EditorInfoProto",
                    id: 6
                  },
                  imeFocusController: {
                    type: "ImeFocusControllerProto",
                    id: 7
                  },
                  inputConnection: {
                    type: "InputConnectionProto",
                    id: 8
                  },
                  inputConnectionCall: {
                    type: "InputConnectionCallProto",
                    id: 9
                  }
                }
              }
            }
          },
          InputMethodServiceTraceProto: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "fixed64",
                id: 1
              },
              where: {
                type: "string",
                id: 2
              },
              inputMethodService: {
                type: "InputMethodServiceProto",
                id: 3
              }
            }
          },
          InputMethodManagerServiceTraceProto: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "fixed64",
                id: 1
              },
              where: {
                type: "string",
                id: 2
              },
              inputMethodManagerService: {
                type: "InputMethodManagerServiceProto",
                id: 3
              }
            }
          },
          InputMethodServiceProto: {
            edition: "proto2",
            fields: {
              softInputWindow: {
                type: "SoftInputWindowProto",
                id: 1
              },
              viewsCreated: {
                type: "bool",
                id: 2
              },
              decorViewVisible: {
                type: "bool",
                id: 3
              },
              decorViewWasVisible: {
                type: "bool",
                id: 4
              },
              windowVisible: {
                type: "bool",
                id: 5
              },
              inShowWindow: {
                type: "bool",
                id: 6
              },
              configuration: {
                type: "string",
                id: 7
              },
              token: {
                type: "string",
                id: 8
              },
              inputBinding: {
                type: "string",
                id: 9
              },
              inputStarted: {
                type: "bool",
                id: 10
              },
              inputViewStarted: {
                type: "bool",
                id: 11
              },
              candidatesViewStarted: {
                type: "bool",
                id: 12
              },
              inputEditorInfo: {
                type: "EditorInfoProto",
                id: 13
              },
              showInputRequested: {
                type: "bool",
                id: 14
              },
              lastShowInputRequested: {
                type: "bool",
                id: 15
              },
              showInputFlags: {
                type: "int32",
                id: 18
              },
              candidatesVisibility: {
                type: "int32",
                id: 19
              },
              fullscreenApplied: {
                type: "bool",
                id: 20
              },
              isFullscreen: {
                type: "bool",
                id: 21
              },
              extractViewHidden: {
                type: "bool",
                id: 22
              },
              extractedToken: {
                type: "int32",
                id: 23
              },
              isInputViewShown: {
                type: "bool",
                id: 24
              },
              statusIcon: {
                type: "int32",
                id: 25
              },
              lastComputedInsets: {
                type: "InsetsProto",
                id: 26
              },
              settingsObserver: {
                type: "string",
                id: 27
              },
              inputConnectionCall: {
                type: "InputConnectionCallProto",
                id: 28
              }
            },
            reserved: [
              [
                16,
                16
              ],
              [
                17,
                17
              ]
            ],
            nested: {
              InsetsProto: {
                fields: {
                  contentTopInsets: {
                    type: "int32",
                    id: 1
                  },
                  visibleTopInsets: {
                    type: "int32",
                    id: 2
                  },
                  touchableInsets: {
                    type: "int32",
                    id: 3
                  },
                  touchableRegion: {
                    type: "string",
                    id: 4
                  }
                }
              }
            }
          },
          SoftInputWindowProto: {
            edition: "proto2",
            fields: {
              windowState: {
                type: "int32",
                id: 6
              }
            },
            reserved: [
              [
                1,
                1
              ],
              [
                2,
                2
              ],
              [
                3,
                3
              ],
              [
                4,
                4
              ],
              [
                5,
                5
              ]
            ]
          },
          EditorInfoProto: {
            edition: "proto2",
            fields: {
              inputType: {
                type: "int32",
                id: 1
              },
              imeOptions: {
                type: "int32",
                id: 2
              },
              privateImeOptions: {
                type: "string",
                id: 3
              },
              packageName: {
                type: "string",
                id: 4
              },
              fieldId: {
                type: "int32",
                id: 5
              },
              targetInputMethodUserId: {
                type: "int32",
                id: 6
              }
            }
          },
          InputConnectionProto: {
            edition: "proto2",
            fields: {
              selectedTextStart: {
                type: "int32",
                id: 3
              },
              selectedTextEnd: {
                type: "int32",
                id: 4
              },
              cursorCapsMode: {
                type: "int32",
                id: 5
              }
            },
            reserved: [
              [
                1,
                1
              ],
              [
                2,
                2
              ]
            ]
          },
          InputConnectionCallProto: {
            edition: "proto2",
            oneofs: {
              methodCall: {
                oneof: [
                  "getTextBeforeCursor",
                  "getTextAfterCursor",
                  "getSelectedText",
                  "getSurroundingText",
                  "getCursorCapsMode",
                  "getExtractedText"
                ]
              }
            },
            fields: {
              getTextBeforeCursor: {
                type: "GetTextBeforeCursor",
                id: 1
              },
              getTextAfterCursor: {
                type: "GetTextAfterCursor",
                id: 2
              },
              getSelectedText: {
                type: "GetSelectedText",
                id: 3
              },
              getSurroundingText: {
                type: "GetSurroundingText",
                id: 4
              },
              getCursorCapsMode: {
                type: "GetCursorCapsMode",
                id: 5
              },
              getExtractedText: {
                type: "GetExtractedText",
                id: 6
              }
            },
            nested: {
              GetTextBeforeCursor: {
                fields: {
                  length: {
                    type: "int32",
                    id: 1
                  },
                  flags: {
                    type: "int32",
                    id: 2
                  }
                },
                reserved: [
                  [
                    3,
                    3
                  ]
                ]
              },
              GetTextAfterCursor: {
                fields: {
                  length: {
                    type: "int32",
                    id: 1
                  },
                  flags: {
                    type: "int32",
                    id: 2
                  }
                },
                reserved: [
                  [
                    3,
                    3
                  ]
                ]
              },
              GetSelectedText: {
                fields: {
                  flags: {
                    type: "int32",
                    id: 1
                  }
                },
                reserved: [
                  [
                    2,
                    2
                  ]
                ]
              },
              GetSurroundingText: {
                fields: {
                  beforeLength: {
                    type: "int32",
                    id: 1
                  },
                  afterLength: {
                    type: "int32",
                    id: 2
                  },
                  flags: {
                    type: "int32",
                    id: 3
                  },
                  result: {
                    type: "SurroundingText",
                    id: 4
                  }
                },
                nested: {
                  SurroundingText: {
                    fields: {
                      selectionStart: {
                        type: "int32",
                        id: 2
                      },
                      selectionEnd: {
                        type: "int32",
                        id: 3
                      },
                      offset: {
                        type: "int32",
                        id: 4
                      }
                    },
                    reserved: [
                      [
                        1,
                        1
                      ]
                    ]
                  }
                }
              },
              GetCursorCapsMode: {
                fields: {
                  reqModes: {
                    type: "int32",
                    id: 1
                  },
                  result: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              GetExtractedText: {
                fields: {
                  request: {
                    type: "ExtractedTextRequest",
                    id: 1
                  },
                  flags: {
                    type: "int32",
                    id: 2
                  }
                },
                reserved: [
                  [
                    3,
                    3
                  ]
                ],
                nested: {
                  ExtractedTextRequest: {
                    fields: {
                      token: {
                        type: "int32",
                        id: 1
                      },
                      flags: {
                        type: "int32",
                        id: 2
                      },
                      hintMaxLines: {
                        type: "int32",
                        id: 3
                      },
                      hintMaxChars: {
                        type: "int32",
                        id: 4
                      }
                    }
                  }
                }
              }
            }
          },
          InputMethodManagerServiceProto: {
            edition: "proto2",
            fields: {
              curMethodId: {
                type: "string",
                id: 1
              },
              curSeq: {
                type: "int32",
                id: 2
              },
              curClient: {
                type: "string",
                id: 3
              },
              curFocusedWindowName: {
                type: "string",
                id: 4
              },
              lastImeTargetWindowName: {
                type: "string",
                id: 5
              },
              curFocusedWindowSoftInputMode: {
                type: "string",
                id: 6
              },
              curAttribute: {
                type: "EditorInfoProto",
                id: 7
              },
              curId: {
                type: "string",
                id: 8
              },
              showExplicitlyRequested: {
                type: "bool",
                id: 10
              },
              showForced: {
                type: "bool",
                id: 11
              },
              inputShown: {
                type: "bool",
                id: 12
              },
              inFullscreenMode: {
                type: "bool",
                id: 13
              },
              curToken: {
                type: "string",
                id: 14
              },
              curTokenDisplayId: {
                type: "int32",
                id: 15
              },
              systemReady: {
                type: "bool",
                id: 16
              },
              lastSwitchUserId: {
                type: "int32",
                id: 17
              },
              haveConnection: {
                type: "bool",
                id: 18
              },
              boundToMethod: {
                type: "bool",
                id: 19
              },
              isInteractive: {
                type: "bool",
                id: 20
              },
              backDisposition: {
                type: "int32",
                id: 21
              },
              imeWindowVisibility: {
                type: "int32",
                id: 22
              },
              showImeWithHardKeyboard: {
                type: "bool",
                id: 23
              },
              accessibilityRequestingNoSoftKeyboard: {
                type: "bool",
                id: 24
              }
            },
            reserved: [
              [
                9,
                9
              ]
            ]
          },
          InputMethodManagerProto: {
            edition: "proto2",
            fields: {
              curId: {
                type: "string",
                id: 1
              },
              fullscreenMode: {
                type: "bool",
                id: 2
              },
              displayId: {
                type: "int32",
                id: 3
              },
              active: {
                type: "bool",
                id: 4
              },
              servedConnecting: {
                type: "bool",
                id: 5
              },
              servedView: {
                type: "string",
                id: 6
              },
              nextServedView: {
                type: "string",
                id: 7
              }
            }
          },
          ViewRootImplProto: {
            edition: "proto2",
            fields: {
              view: {
                type: "string",
                id: 1
              },
              displayId: {
                type: "int32",
                id: 2
              },
              appVisible: {
                type: "bool",
                id: 3
              },
              width: {
                type: "int32",
                id: 4
              },
              height: {
                type: "int32",
                id: 5
              },
              isAnimating: {
                type: "bool",
                id: 6
              },
              visibleRect: {
                type: "RectProto",
                id: 7
              },
              isDrawing: {
                type: "bool",
                id: 8
              },
              added: {
                type: "bool",
                id: 9
              },
              winFrame: {
                type: "RectProto",
                id: 10
              },
              pendingDisplayCutout: {
                type: "DisplayCutoutProto",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              lastWindowInsets: {
                type: "string",
                id: 12
              },
              softInputMode: {
                type: "string",
                id: 13
              },
              scrollY: {
                type: "int32",
                id: 14
              },
              curScrollY: {
                type: "int32",
                id: 15
              },
              removed: {
                type: "bool",
                id: 16
              },
              windowAttributes: {
                type: "WindowLayoutParamsProto",
                id: 17
              }
            }
          },
          DisplayCutoutProto: {
            edition: "proto2",
            fields: {
              insets: {
                type: "RectProto",
                id: 1
              },
              boundLeft: {
                type: "RectProto",
                id: 3
              },
              boundTop: {
                type: "RectProto",
                id: 4
              },
              boundRight: {
                type: "RectProto",
                id: 5
              },
              boundBottom: {
                type: "RectProto",
                id: 6
              },
              waterfallInsets: {
                type: "RectProto",
                id: 7
              },
              sideOverrides: {
                rule: "repeated",
                type: "int32",
                id: 8
              }
            },
            reserved: [
              [
                2,
                2
              ]
            ]
          },
          WindowLayoutParamsProto: {
            edition: "proto2",
            fields: {
              type: {
                type: "int32",
                id: 1,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.WindowType"
                }
              },
              x: {
                type: "int32",
                id: 2
              },
              y: {
                type: "int32",
                id: 3
              },
              width: {
                type: "int32",
                id: 4
              },
              height: {
                type: "int32",
                id: 5
              },
              horizontalMargin: {
                type: "float",
                id: 6
              },
              verticalMargin: {
                type: "float",
                id: 7
              },
              gravity: {
                type: "int32",
                id: 8,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.Gravity.GravityFlags"
                }
              },
              softInputMode: {
                type: "int32",
                id: 9,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.SoftInputModeFlags"
                }
              },
              format: {
                type: "PixelFormatProto.Format",
                id: 10
              },
              windowAnimations: {
                type: "int32",
                id: 11
              },
              alpha: {
                type: "float",
                id: 12
              },
              screenBrightness: {
                type: "float",
                id: 13
              },
              buttonBrightness: {
                type: "float",
                id: 14
              },
              rotationAnimation: {
                type: "RotationAnimation",
                id: 15
              },
              preferredRefreshRate: {
                type: "float",
                id: 16
              },
              preferredDisplayModeId: {
                type: "int32",
                id: 17
              },
              hasSystemUiListeners: {
                type: "bool",
                id: 18
              },
              inputFeatureFlags: {
                type: "uint32",
                id: 19,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.InputFeatureFlags"
                }
              },
              userActivityTimeout: {
                type: "int64",
                id: 20
              },
              colorMode: {
                type: "ViewDisplayProto.ColorMode",
                id: 23
              },
              flags: {
                type: "uint32",
                id: 24,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.Flags"
                }
              },
              privateFlags: {
                type: "uint32",
                id: 26,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.PrivateFlags"
                }
              },
              systemUiVisibilityFlags: {
                type: "uint32",
                id: 27,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.SystemUiVisibilityFlags"
                }
              },
              subtreeSystemUiVisibilityFlags: {
                type: "uint32",
                id: 28,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowManager.LayoutParams.SystemUiVisibilityFlags"
                }
              },
              appearance: {
                type: "uint32",
                id: 29,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowInsetsController.Appearance"
                }
              },
              behavior: {
                type: "uint32",
                id: 30,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowInsetsController.Behavior"
                }
              },
              fitInsetsTypes: {
                type: "uint32",
                id: 31,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowInsets.Type.InsetsType"
                }
              },
              fitInsetsSides: {
                type: "uint32",
                id: 32,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.WindowInsets.Side.InsetsSide"
                }
              },
              fitIgnoreVisibility: {
                type: "bool",
                id: 33
              }
            },
            nested: {
              RotationAnimation: {
                values: {
                  ROTATION_ANIMATION_UNSPECIFIED: -1,
                  ROTATION_ANIMATION_CROSSFADE: 1,
                  ROTATION_ANIMATION_JUMPCUT: 2,
                  ROTATION_ANIMATION_SEAMLESS: 3
                }
              }
            }
          },
          PixelFormatProto: {
            edition: "proto2",
            fields: {},
            nested: {
              Format: {
                values: {
                  UNKNOWN: 0,
                  TRANSLUCENT: -3,
                  TRANSPARENT: -2,
                  OPAQUE: -1,
                  RGBA_8888: 1,
                  RGBX_8888: 2,
                  RGB_888: 3,
                  RGB_565: 4,
                  RGBA_F16: 22,
                  RGBA_1010102: 43
                }
              }
            }
          },
          ViewDisplayProto: {
            edition: "proto2",
            fields: {},
            nested: {
              ColorMode: {
                values: {
                  COLOR_MODE_INVALID: -1,
                  COLOR_MODE_DEFAULT: 0,
                  COLOR_MODE_BT601_625: 1,
                  COLOR_MODE_BT601_625_UNADJUSTED: 2,
                  COLOR_MODE_BT601_525: 3,
                  COLOR_MODE_BT601_525_UNADJUSTED: 4,
                  COLOR_MODE_BT709: 5,
                  COLOR_MODE_DCI_P3: 6,
                  COLOR_MODE_SRGB: 7,
                  COLOR_MODE_ADOBE_RGB: 8,
                  COLOR_MODE_DISPLAY_P3: 9
                }
              }
            }
          },
          InsetsControllerProto: {
            edition: "proto2",
            fields: {
              state: {
                type: "InsetsStateProto",
                id: 1
              },
              control: {
                rule: "repeated",
                type: "InsetsAnimationControlImplProto",
                id: 2
              }
            }
          },
          InsetsStateProto: {
            edition: "proto2",
            fields: {
              sources: {
                rule: "repeated",
                type: "InsetsSourceProto",
                id: 1
              },
              displayFrame: {
                type: "RectProto",
                id: 2
              },
              displayCutout: {
                type: "DisplayCutoutProto",
                id: 3
              }
            }
          },
          InsetsSourceProto: {
            edition: "proto2",
            fields: {
              type: {
                type: "string",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              frame: {
                type: "RectProto",
                id: 2
              },
              visibleFrame: {
                type: "RectProto",
                id: 3
              },
              visible: {
                type: "bool",
                id: 4
              },
              typeNumber: {
                type: "int32",
                id: 5
              },
              attachedInsets: {
                type: "InsetsProto",
                id: 6
              }
            }
          },
          InsetsProto: {
            edition: "proto2",
            fields: {
              left: {
                type: "int32",
                id: 1
              },
              top: {
                type: "int32",
                id: 2
              },
              right: {
                type: "int32",
                id: 3
              },
              bottom: {
                type: "int32",
                id: 4
              }
            }
          },
          InsetsAnimationControlImplProto: {
            edition: "proto2",
            fields: {
              isCancelled: {
                type: "bool",
                id: 1
              },
              isFinished: {
                type: "bool",
                id: 2
              },
              tmpMatrix: {
                type: "string",
                id: 3
              },
              pendingInsets: {
                type: "string",
                id: 4
              },
              pendingFraction: {
                type: "float",
                id: 5
              },
              shownOnFinish: {
                type: "bool",
                id: 6
              },
              currentAlpha: {
                type: "float",
                id: 7
              },
              pendingAlpha: {
                type: "float",
                id: 8
              }
            }
          },
          ImeInsetsSourceConsumerProto: {
            edition: "proto2",
            fields: {
              insetsSourceConsumer: {
                type: "InsetsSourceConsumerProto",
                id: 1
              },
              isRequestedVisibleAwaitingControl: {
                type: "bool",
                id: 3
              },
              isHideAnimationRunning: {
                type: "bool",
                id: 4,
                options: {
                  deprecated: true
                }
              },
              isShowRequestedDuringHideAnimation: {
                type: "bool",
                id: 5,
                options: {
                  deprecated: true
                }
              },
              hasPendingRequest: {
                type: "bool",
                id: 6
              }
            },
            reserved: [
              [
                2,
                2
              ]
            ]
          },
          InsetsSourceConsumerProto: {
            edition: "proto2",
            fields: {
              internalInsetsType: {
                type: "string",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              hasWindowFocus: {
                type: "bool",
                id: 2
              },
              isRequestedVisible: {
                type: "bool",
                id: 3
              },
              sourceControl: {
                type: "InsetsSourceControlProto",
                id: 4
              },
              pendingFrame: {
                type: "RectProto",
                id: 5
              },
              pendingVisibleFrame: {
                type: "RectProto",
                id: 6
              },
              animationState: {
                type: "int32",
                id: 7
              },
              typeNumber: {
                type: "int32",
                id: 8
              }
            }
          },
          InsetsSourceControlProto: {
            edition: "proto2",
            fields: {
              type: {
                type: "string",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              position: {
                type: "PointProto",
                id: 2
              },
              leash: {
                type: "SurfaceControlProto",
                id: 3
              },
              typeNumber: {
                type: "int32",
                id: 4
              }
            }
          },
          PointProto: {
            edition: "proto2",
            fields: {
              x: {
                type: "int32",
                id: 1
              },
              y: {
                type: "int32",
                id: 2
              }
            }
          },
          SurfaceControlProto: {
            edition: "proto2",
            fields: {
              hashCode: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              layerId: {
                type: "int32",
                id: 3
              }
            }
          },
          ImeFocusControllerProto: {
            edition: "proto2",
            fields: {
              hasImeFocus: {
                type: "bool",
                id: 1
              },
              servedView: {
                type: "string",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              nextServedView: {
                type: "string",
                id: 3,
                options: {
                  deprecated: true
                }
              }
            }
          },
          ViewCapture: {
            edition: "proto2",
            fields: {
              packageNameIid: {
                type: "int32",
                id: 1
              },
              windowNameIid: {
                type: "int32",
                id: 2
              },
              views: {
                rule: "repeated",
                type: "View",
                id: 3
              }
            },
            nested: {
              View: {
                fields: {
                  id: {
                    type: "int32",
                    id: 1
                  },
                  parentId: {
                    type: "int32",
                    id: 2
                  },
                  hashcode: {
                    type: "int32",
                    id: 3
                  },
                  viewIdIid: {
                    type: "int32",
                    id: 4
                  },
                  classNameIid: {
                    type: "int32",
                    id: 5
                  },
                  left: {
                    type: "int32",
                    id: 6
                  },
                  top: {
                    type: "int32",
                    id: 7
                  },
                  width: {
                    type: "int32",
                    id: 8
                  },
                  height: {
                    type: "int32",
                    id: 9
                  },
                  scrollX: {
                    type: "int32",
                    id: 10
                  },
                  scrollY: {
                    type: "int32",
                    id: 11
                  },
                  translationX: {
                    type: "float",
                    id: 12
                  },
                  translationY: {
                    type: "float",
                    id: 13
                  },
                  scaleX: {
                    type: "float",
                    id: 14
                  },
                  scaleY: {
                    type: "float",
                    id: 15
                  },
                  alpha: {
                    type: "float",
                    id: 16
                  },
                  willNotDraw: {
                    type: "bool",
                    id: 17
                  },
                  clipChildren: {
                    type: "bool",
                    id: 18
                  },
                  visibility: {
                    type: "int32",
                    id: 19
                  },
                  elevation: {
                    type: "float",
                    id: 20
                  }
                }
              }
            }
          },
          WindowManagerTraceFileProto: {
            edition: "proto2",
            fields: {
              magicNumber: {
                type: "fixed64",
                id: 1
              },
              entry: {
                rule: "repeated",
                type: "WindowManagerTraceEntry",
                id: 2
              },
              realToElapsedTimeOffsetNanos: {
                type: "fixed64",
                id: 3
              }
            },
            nested: {
              MagicNumber: {
                values: {
                  INVALID: 0,
                  MAGIC_NUMBER_L: 1414416727,
                  MAGIC_NUMBER_H: 1162035538
                }
              }
            }
          },
          WindowManagerTraceEntry: {
            edition: "proto2",
            fields: {
              elapsedRealtimeNanos: {
                type: "fixed64",
                id: 1
              },
              where: {
                type: "string",
                id: 2
              },
              windowManagerService: {
                type: "WindowManagerServiceDumpProto",
                id: 3
              }
            }
          },
          WindowManagerServiceDumpProto: {
            edition: "proto2",
            fields: {
              policy: {
                type: "WindowManagerPolicyProto",
                id: 1
              },
              rootWindowContainer: {
                type: "RootWindowContainerProto",
                id: 2
              },
              focusedWindow: {
                type: "IdentifierProto",
                id: 3
              },
              focusedApp: {
                type: "string",
                id: 4
              },
              inputMethodWindow: {
                type: "IdentifierProto",
                id: 5
              },
              displayFrozen: {
                type: "bool",
                id: 6
              },
              rotation: {
                type: "int32",
                id: 7,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.Surface.Rotation",
                  deprecated: true
                }
              },
              lastOrientation: {
                type: "int32",
                id: 8,
                options: {
                  "(.perfetto.protos.typedef)": "android.content.pm.ActivityInfo.ScreenOrientation",
                  deprecated: true
                }
              },
              focusedDisplayId: {
                type: "int32",
                id: 9
              },
              hardKeyboardAvailable: {
                type: "bool",
                id: 10
              },
              windowFramesValid: {
                type: "bool",
                id: 11
              },
              backNavigation: {
                type: "BackNavigationProto",
                id: 12
              }
            }
          },
          RootWindowContainerProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1
              },
              displays: {
                rule: "repeated",
                type: "DisplayContentProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              windows: {
                rule: "repeated",
                type: "WindowStateProto",
                id: 4,
                options: {
                  deprecated: true
                }
              },
              keyguardController: {
                type: "KeyguardControllerProto",
                id: 5
              },
              isHomeRecentsComponent: {
                type: "bool",
                id: 6
              },
              pendingActivities: {
                rule: "repeated",
                type: "IdentifierProto",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              defaultMinSizeResizableTask: {
                type: "int32",
                id: 8,
                options: {
                  deprecated: true
                }
              }
            },
            reserved: [
              [
                3,
                3
              ]
            ]
          },
          BarControllerProto: {
            edition: "proto2",
            fields: {
              state: {
                type: "StatusBarManagerProto.WindowState",
                id: 1
              },
              transientState: {
                type: "StatusBarManagerProto.TransientWindowState",
                id: 2
              }
            }
          },
          WindowOrientationListenerProto: {
            edition: "proto2",
            fields: {
              enabled: {
                type: "bool",
                id: 1
              },
              rotation: {
                type: "SurfaceProto.Rotation",
                id: 2
              }
            }
          },
          KeyguardServiceDelegateProto: {
            edition: "proto2",
            fields: {
              showing: {
                type: "bool",
                id: 1
              },
              occluded: {
                type: "bool",
                id: 2
              },
              secure: {
                type: "bool",
                id: 3
              },
              screenState: {
                type: "ScreenState",
                id: 4
              },
              interactiveState: {
                type: "InteractiveState",
                id: 5
              }
            },
            nested: {
              ScreenState: {
                values: {
                  SCREEN_STATE_OFF: 0,
                  SCREEN_STATE_TURNING_ON: 1,
                  SCREEN_STATE_ON: 2,
                  SCREEN_STATE_TURNING_OFF: 3
                }
              },
              InteractiveState: {
                values: {
                  INTERACTIVE_STATE_SLEEP: 0,
                  INTERACTIVE_STATE_WAKING: 1,
                  INTERACTIVE_STATE_AWAKE: 2,
                  INTERACTIVE_STATE_GOING_TO_SLEEP: 3
                }
              }
            }
          },
          KeyguardControllerProto: {
            edition: "proto2",
            fields: {
              keyguardShowing: {
                type: "bool",
                id: 1
              },
              keyguardOccludedStates: {
                rule: "repeated",
                type: "KeyguardOccludedProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              aodShowing: {
                type: "bool",
                id: 3
              },
              keyguardPerDisplay: {
                rule: "repeated",
                type: "KeyguardPerDisplayProto",
                id: 4
              },
              keyguardGoingAway: {
                type: "bool",
                id: 5
              }
            }
          },
          KeyguardOccludedProto: {
            edition: "proto2",
            fields: {
              displayId: {
                type: "int32",
                id: 1
              },
              keyguardOccluded: {
                type: "bool",
                id: 2
              }
            }
          },
          KeyguardPerDisplayProto: {
            edition: "proto2",
            fields: {
              displayId: {
                type: "int32",
                id: 1
              },
              keyguardShowing: {
                type: "bool",
                id: 2
              },
              aodShowing: {
                type: "bool",
                id: 3
              },
              keyguardOccluded: {
                type: "bool",
                id: 4
              },
              keyguardGoingAway: {
                type: "bool",
                id: 5
              }
            }
          },
          WindowManagerPolicyProto: {
            edition: "proto2",
            fields: {
              lastSystemUiFlags: {
                type: "int32",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              rotationMode: {
                type: "UserRotationMode",
                id: 2
              },
              rotation: {
                type: "SurfaceProto.Rotation",
                id: 3
              },
              orientation: {
                type: "ActivityInfoProto.ScreenOrientation",
                id: 4
              },
              screenOnFully: {
                type: "bool",
                id: 5
              },
              keyguardDrawComplete: {
                type: "bool",
                id: 6
              },
              windowManagerDrawComplete: {
                type: "bool",
                id: 7
              },
              focusedAppToken: {
                type: "string",
                id: 8,
                options: {
                  deprecated: true
                }
              },
              focusedWindow: {
                type: "IdentifierProto",
                id: 9,
                options: {
                  deprecated: true
                }
              },
              topFullscreenOpaqueWindow: {
                type: "IdentifierProto",
                id: 10,
                options: {
                  deprecated: true
                }
              },
              topFullscreenOpaqueOrDimmingWindow: {
                type: "IdentifierProto",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              keyguardOccluded: {
                type: "bool",
                id: 12
              },
              keyguardOccludedChanged: {
                type: "bool",
                id: 13
              },
              keyguardOccludedPending: {
                type: "bool",
                id: 14
              },
              forceStatusBar: {
                type: "bool",
                id: 15,
                options: {
                  deprecated: true
                }
              },
              forceStatusBarFromKeyguard: {
                type: "bool",
                id: 16,
                options: {
                  deprecated: true
                }
              },
              statusBar: {
                type: "BarControllerProto",
                id: 17,
                options: {
                  deprecated: true
                }
              },
              navigationBar: {
                type: "BarControllerProto",
                id: 18,
                options: {
                  deprecated: true
                }
              },
              orientationListener: {
                type: "WindowOrientationListenerProto",
                id: 19,
                options: {
                  deprecated: true
                }
              },
              keyguardDelegate: {
                type: "KeyguardServiceDelegateProto",
                id: 20
              }
            },
            nested: {
              UserRotationMode: {
                values: {
                  USER_ROTATION_FREE: 0,
                  USER_ROTATION_LOCKED: 1
                }
              }
            }
          },
          AppTransitionProto: {
            edition: "proto2",
            fields: {
              appTransitionState: {
                type: "AppState",
                id: 1
              },
              lastUsedAppTransition: {
                type: "TransitionTypeEnum",
                id: 2
              }
            },
            nested: {
              AppState: {
                valuesOptions: {
                  APP_STATE_TIMEOUT: {
                    deprecated: true
                  }
                },
                values: {
                  APP_STATE_IDLE: 0,
                  APP_STATE_READY: 1,
                  APP_STATE_RUNNING: 2,
                  APP_STATE_TIMEOUT: 3
                }
              }
            }
          },
          DisplayContentProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              id: {
                type: "int32",
                id: 2
              },
              dockedTaskDividerController: {
                type: "DockedTaskDividerControllerProto",
                id: 4,
                options: {
                  deprecated: true
                }
              },
              pinnedTaskController: {
                type: "PinnedTaskControllerProto",
                id: 5,
                options: {
                  deprecated: true
                }
              },
              aboveAppWindows: {
                rule: "repeated",
                type: "WindowTokenProto",
                id: 6,
                options: {
                  deprecated: true
                }
              },
              belowAppWindows: {
                rule: "repeated",
                type: "WindowTokenProto",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              imeWindows: {
                rule: "repeated",
                type: "WindowTokenProto",
                id: 8,
                options: {
                  deprecated: true
                }
              },
              dpi: {
                type: "int32",
                id: 9
              },
              displayInfo: {
                type: "DisplayInfoProto",
                id: 10
              },
              rotation: {
                type: "int32",
                id: 11,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.Surface.Rotation",
                  deprecated: true
                }
              },
              screenRotationAnimation: {
                type: "ScreenRotationAnimationProto",
                id: 12
              },
              displayFrames: {
                type: "DisplayFramesProto",
                id: 13
              },
              surfaceSize: {
                type: "int32",
                id: 14,
                options: {
                  deprecated: true
                }
              },
              focusedApp: {
                type: "string",
                id: 15
              },
              appTransition: {
                type: "AppTransitionProto",
                id: 16
              },
              openingApps: {
                rule: "repeated",
                type: "IdentifierProto",
                id: 17
              },
              closingApps: {
                rule: "repeated",
                type: "IdentifierProto",
                id: 18
              },
              changingApps: {
                rule: "repeated",
                type: "IdentifierProto",
                id: 19
              },
              overlayWindows: {
                rule: "repeated",
                type: "WindowTokenProto",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              rootDisplayArea: {
                type: "DisplayAreaProto",
                id: 21
              },
              singleTaskInstance: {
                type: "bool",
                id: 22,
                options: {
                  deprecated: true
                }
              },
              focusedRootTaskId: {
                type: "int32",
                id: 23
              },
              resumedActivity: {
                type: "IdentifierProto",
                id: 24
              },
              tasks: {
                rule: "repeated",
                type: "TaskProto",
                id: 25,
                options: {
                  deprecated: true
                }
              },
              displayReady: {
                type: "bool",
                id: 26
              },
              inputMethodTarget: {
                type: "WindowStateProto",
                id: 27,
                options: {
                  deprecated: true
                }
              },
              inputMethodInputTarget: {
                type: "WindowStateProto",
                id: 28,
                options: {
                  deprecated: true
                }
              },
              inputMethodControlTarget: {
                type: "WindowStateProto",
                id: 29,
                options: {
                  deprecated: true
                }
              },
              currentFocus: {
                type: "WindowStateProto",
                id: 30,
                options: {
                  deprecated: true
                }
              },
              imeInsetsSourceProvider: {
                type: "ImeInsetsSourceProviderProto",
                id: 31
              },
              canShowIme: {
                type: "bool",
                id: 32,
                options: {
                  deprecated: true
                }
              },
              displayRotation: {
                type: "DisplayRotationProto",
                id: 33
              },
              imePolicy: {
                type: "int32",
                id: 34
              },
              insetsSourceProviders: {
                rule: "repeated",
                type: "InsetsSourceProviderProto",
                id: 35
              },
              isSleeping: {
                type: "bool",
                id: 36
              },
              sleepTokens: {
                rule: "repeated",
                type: "string",
                id: 37
              },
              keepClearAreas: {
                rule: "repeated",
                type: "RectProto",
                id: 38
              },
              minSizeOfResizeableTaskDp: {
                type: "int32",
                id: 39
              },
              inputMethodLayeringTargetIdentifier: {
                type: "IdentifierProto",
                id: 40
              },
              inputMethodInputTargetIdentifier: {
                type: "IdentifierProto",
                id: 41
              },
              inputMethodControlTargetIdentifier: {
                type: "IdentifierProto",
                id: 42
              },
              currentFocusIdentifier: {
                type: "IdentifierProto",
                id: 43
              },
              remoteInsetsControlTarget: {
                type: "RemoteInsetsControlTargetProto",
                id: 44
              }
            },
            reserved: [
              [
                3,
                3
              ]
            ]
          },
          DisplayAreaProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1
              },
              name: {
                type: "string",
                id: 2,
                options: {
                  "(.perfetto.protos.privacy).dest": "DEST_EXPLICIT"
                }
              },
              children: {
                rule: "repeated",
                type: "DisplayAreaChildProto",
                id: 3,
                options: {
                  deprecated: true
                }
              },
              isTaskDisplayArea: {
                type: "bool",
                id: 4
              },
              isRootDisplayArea: {
                type: "bool",
                id: 5
              },
              featureId: {
                type: "int32",
                id: 6
              },
              isOrganized: {
                type: "bool",
                id: 7
              },
              isIgnoringOrientationRequest: {
                type: "bool",
                id: 8
              }
            }
          },
          DisplayAreaChildProto: {
            edition: "proto2",
            fields: {
              displayArea: {
                type: "DisplayAreaProto",
                id: 1
              },
              window: {
                type: "WindowTokenProto",
                id: 2
              },
              unknown: {
                rule: "repeated",
                type: "string",
                id: 3
              }
            }
          },
          DisplayFramesProto: {
            edition: "proto2",
            fields: {
              stableBounds: {
                type: "RectProto",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              dock: {
                type: "RectProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              current: {
                type: "RectProto",
                id: 3,
                options: {
                  deprecated: true
                }
              }
            }
          },
          DisplayRotationProto: {
            edition: "proto2",
            fields: {
              rotation: {
                type: "int32",
                id: 1,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.Surface.Rotation"
                }
              },
              frozenToUserRotation: {
                type: "bool",
                id: 2
              },
              userRotation: {
                type: "int32",
                id: 3,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.Surface.Rotation"
                }
              },
              fixedToUserRotationMode: {
                type: "int32",
                id: 4
              },
              lastOrientation: {
                type: "int32",
                id: 5,
                options: {
                  "(.perfetto.protos.typedef)": "android.content.pm.ActivityInfo.ScreenOrientation"
                }
              },
              isFixedToUserRotation: {
                type: "bool",
                id: 6
              }
            }
          },
          DockedTaskDividerControllerProto: {
            edition: "proto2",
            fields: {
              minimizedDock: {
                type: "bool",
                id: 1,
                options: {
                  deprecated: true
                }
              }
            }
          },
          PinnedTaskControllerProto: {
            edition: "proto2",
            fields: {
              defaultBounds: {
                type: "RectProto",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              movementBounds: {
                type: "RectProto",
                id: 2,
                options: {
                  deprecated: true
                }
              }
            }
          },
          TaskProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              id: {
                type: "int32",
                id: 2
              },
              fillsParent: {
                type: "bool",
                id: 4
              },
              bounds: {
                type: "RectProto",
                id: 5
              },
              displayedBounds: {
                type: "RectProto",
                id: 6,
                options: {
                  deprecated: true
                }
              },
              deferRemoval: {
                type: "bool",
                id: 7
              },
              surfaceWidth: {
                type: "int32",
                id: 8
              },
              surfaceHeight: {
                type: "int32",
                id: 9
              },
              tasks: {
                rule: "repeated",
                type: "TaskProto",
                id: 10,
                options: {
                  deprecated: true
                }
              },
              activities: {
                rule: "repeated",
                type: "ActivityRecordProto",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              resumedActivity: {
                type: "IdentifierProto",
                id: 12
              },
              realActivity: {
                type: "string",
                id: 13
              },
              origActivity: {
                type: "string",
                id: 14
              },
              displayId: {
                type: "int32",
                id: 15,
                options: {
                  deprecated: true
                }
              },
              rootTaskId: {
                type: "int32",
                id: 16
              },
              activityType: {
                type: "int32",
                id: 17,
                options: {
                  "(.perfetto.protos.typedef)": "android.app.WindowConfiguration.ActivityType",
                  deprecated: true
                }
              },
              resizeMode: {
                type: "int32",
                id: 18,
                options: {
                  "(.perfetto.protos.typedef)": "android.appwidget.AppWidgetProviderInfo.ResizeModeFlags"
                }
              },
              minWidth: {
                type: "int32",
                id: 19,
                options: {
                  deprecated: true
                }
              },
              minHeight: {
                type: "int32",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              adjustedBounds: {
                type: "RectProto",
                id: 21
              },
              lastNonFullscreenBounds: {
                type: "RectProto",
                id: 22
              },
              adjustedForIme: {
                type: "bool",
                id: 23
              },
              adjustImeAmount: {
                type: "float",
                id: 24
              },
              adjustDividerAmount: {
                type: "float",
                id: 25
              },
              animatingBounds: {
                type: "bool",
                id: 26,
                options: {
                  deprecated: true
                }
              },
              minimizeAmount: {
                type: "float",
                id: 27
              },
              createdByOrganizer: {
                type: "bool",
                id: 28
              },
              affinity: {
                type: "string",
                id: 29
              },
              hasChildPipActivity: {
                type: "bool",
                id: 30
              },
              taskFragment: {
                type: "TaskFragmentProto",
                id: 31
              }
            },
            reserved: [
              [
                3,
                3
              ]
            ]
          },
          TaskFragmentProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1
              },
              displayId: {
                type: "int32",
                id: 2
              },
              activityType: {
                type: "int32",
                id: 3,
                options: {
                  "(.perfetto.protos.typedef)": "android.app.WindowConfiguration.ActivityType"
                }
              },
              minWidth: {
                type: "int32",
                id: 4
              },
              minHeight: {
                type: "int32",
                id: 5
              }
            }
          },
          ActivityRecordProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1,
                options: {
                  "(.perfetto.protos.privacy).dest": "DEST_EXPLICIT"
                }
              },
              windowToken: {
                type: "WindowTokenProto",
                id: 2
              },
              lastSurfaceShowing: {
                type: "bool",
                id: 3
              },
              isWaitingForTransitionStart: {
                type: "bool",
                id: 4
              },
              isAnimating: {
                type: "bool",
                id: 5
              },
              thumbnail: {
                type: "WindowContainerThumbnailProto",
                id: 6
              },
              fillsParent: {
                type: "bool",
                id: 7
              },
              appStopped: {
                type: "bool",
                id: 8
              },
              visibleRequested: {
                type: "bool",
                id: 9
              },
              clientVisible: {
                type: "bool",
                id: 10
              },
              deferHidingClient: {
                type: "bool",
                id: 11
              },
              reportedDrawn: {
                type: "bool",
                id: 12
              },
              reportedVisible: {
                type: "bool",
                id: 13
              },
              numInterestingWindows: {
                type: "int32",
                id: 14
              },
              numDrawnWindows: {
                type: "int32",
                id: 15
              },
              allDrawn: {
                type: "bool",
                id: 16
              },
              lastAllDrawn: {
                type: "bool",
                id: 17
              },
              startingWindow: {
                type: "IdentifierProto",
                id: 19
              },
              startingDisplayed: {
                type: "bool",
                id: 20
              },
              startingMoved: {
                type: "bool",
                id: 201
              },
              visibleSetFromTransferredStartingWindow: {
                type: "bool",
                id: 22
              },
              frozenBounds: {
                rule: "repeated",
                type: "RectProto",
                id: 23,
                options: {
                  deprecated: true
                }
              },
              visible: {
                type: "bool",
                id: 24
              },
              identifier: {
                type: "IdentifierProto",
                id: 26,
                options: {
                  deprecated: true
                }
              },
              state: {
                type: "string",
                id: 27,
                options: {
                  "(.perfetto.protos.privacy).dest": "DEST_EXPLICIT"
                }
              },
              frontOfTask: {
                type: "bool",
                id: 28
              },
              procId: {
                type: "int32",
                id: 29
              },
              translucent: {
                type: "bool",
                id: 30
              },
              pipAutoEnterEnabled: {
                type: "bool",
                id: 31
              },
              inSizeCompatMode: {
                type: "bool",
                id: 32
              },
              minAspectRatio: {
                type: "float",
                id: 33
              },
              providesMaxBounds: {
                type: "bool",
                id: 34
              },
              enableRecentsScreenshot: {
                type: "bool",
                id: 35
              },
              lastDropInputMode: {
                type: "int32",
                id: 36
              },
              overrideOrientation: {
                type: "int32",
                id: 37,
                options: {
                  "(.perfetto.protos.typedef)": "android.content.pm.ActivityInfo.ScreenOrientation"
                }
              },
              shouldSendCompatFakeFocus: {
                type: "bool",
                id: 38
              },
              shouldForceRotateForCameraCompat: {
                type: "bool",
                id: 39
              },
              shouldRefreshActivityForCameraCompat: {
                type: "bool",
                id: 40
              },
              shouldRefreshActivityViaPauseForCameraCompat: {
                type: "bool",
                id: 41
              },
              shouldOverrideMinAspectRatio: {
                type: "bool",
                id: 42
              },
              shouldIgnoreOrientationRequestLoop: {
                type: "bool",
                id: 43
              },
              shouldOverrideForceResizeApp: {
                type: "bool",
                id: 44
              },
              shouldEnableUserAspectRatioSettings: {
                type: "bool",
                id: 45
              },
              isUserFullscreenOverrideEnabled: {
                type: "bool",
                id: 46
              },
              requestOpenInBrowserEducationTimestamp: {
                type: "int64",
                id: 47
              },
              shouldAllowSimulateRequestedOrientationForCameraCompat: {
                type: "bool",
                id: 48
              }
            },
            reserved: [
              [
                18,
                18
              ],
              [
                25,
                25
              ]
            ]
          },
          WindowTokenProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1
              },
              hashCode: {
                type: "int32",
                id: 2
              },
              windows: {
                rule: "repeated",
                type: "WindowStateProto",
                id: 3,
                options: {
                  deprecated: true
                }
              },
              waitingToShow: {
                type: "bool",
                id: 5,
                options: {
                  deprecated: true
                }
              },
              paused: {
                type: "bool",
                id: 6
              }
            }
          },
          WindowStateProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 1
              },
              identifier: {
                type: "IdentifierProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              displayId: {
                type: "int32",
                id: 3
              },
              stackId: {
                type: "int32",
                id: 4
              },
              attributes: {
                type: "WindowLayoutParamsProto",
                id: 5
              },
              givenContentInsets: {
                type: "RectProto",
                id: 6
              },
              frame: {
                type: "RectProto",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              containingFrame: {
                type: "RectProto",
                id: 8,
                options: {
                  deprecated: true
                }
              },
              parentFrame: {
                type: "RectProto",
                id: 9,
                options: {
                  deprecated: true
                }
              },
              contentFrame: {
                type: "RectProto",
                id: 10,
                options: {
                  deprecated: true
                }
              },
              contentInsets: {
                type: "RectProto",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              surfaceInsets: {
                type: "RectProto",
                id: 12
              },
              animator: {
                type: "WindowStateAnimatorProto",
                id: 13
              },
              animatingExit: {
                type: "bool",
                id: 14
              },
              childWindows: {
                rule: "repeated",
                type: "WindowStateProto",
                id: 15,
                options: {
                  deprecated: true
                }
              },
              surfacePosition: {
                type: "RectProto",
                id: 16
              },
              requestedWidth: {
                type: "int32",
                id: 18
              },
              requestedHeight: {
                type: "int32",
                id: 19
              },
              viewVisibility: {
                type: "int32",
                id: 20,
                options: {
                  "(.perfetto.protos.typedef)": "android.view.View.Visibility"
                }
              },
              systemUiVisibility: {
                type: "int32",
                id: 21,
                options: {
                  deprecated: true
                }
              },
              hasSurface: {
                type: "bool",
                id: 22
              },
              isReadyForDisplay: {
                type: "bool",
                id: 23
              },
              displayFrame: {
                type: "RectProto",
                id: 24,
                options: {
                  deprecated: true
                }
              },
              overscanFrame: {
                type: "RectProto",
                id: 25,
                options: {
                  deprecated: true
                }
              },
              visibleFrame: {
                type: "RectProto",
                id: 26,
                options: {
                  deprecated: true
                }
              },
              decorFrame: {
                type: "RectProto",
                id: 27,
                options: {
                  deprecated: true
                }
              },
              outsetFrame: {
                type: "RectProto",
                id: 28,
                options: {
                  deprecated: true
                }
              },
              overscanInsets: {
                type: "RectProto",
                id: 29,
                options: {
                  deprecated: true
                }
              },
              visibleInsets: {
                type: "RectProto",
                id: 30,
                options: {
                  deprecated: true
                }
              },
              stableInsets: {
                type: "RectProto",
                id: 31,
                options: {
                  deprecated: true
                }
              },
              outsets: {
                type: "RectProto",
                id: 32,
                options: {
                  deprecated: true
                }
              },
              cutout: {
                type: "DisplayCutoutProto",
                id: 33,
                options: {
                  deprecated: true
                }
              },
              removeOnExit: {
                type: "bool",
                id: 34
              },
              destroying: {
                type: "bool",
                id: 35
              },
              removed: {
                type: "bool",
                id: 36
              },
              isOnScreen: {
                type: "bool",
                id: 37
              },
              isVisible: {
                type: "bool",
                id: 38
              },
              pendingSeamlessRotation: {
                type: "bool",
                id: 39
              },
              finishedSeamlessRotationFrame: {
                type: "int64",
                id: 40,
                options: {
                  deprecated: true
                }
              },
              windowFrames: {
                type: "WindowFramesProto",
                id: 41
              },
              forceSeamlessRotation: {
                type: "bool",
                id: 42
              },
              hasCompatScale: {
                type: "bool",
                id: 43
              },
              globalScale: {
                type: "float",
                id: 44
              },
              keepClearAreas: {
                rule: "repeated",
                type: "RectProto",
                id: 45
              },
              unrestrictedKeepClearAreas: {
                rule: "repeated",
                type: "RectProto",
                id: 46
              },
              mergedLocalInsetsSources: {
                rule: "repeated",
                type: "InsetsSourceProto",
                id: 47
              },
              requestedVisibleTypes: {
                type: "int32",
                id: 48
              },
              dimBounds: {
                type: "RectProto",
                id: 49
              },
              bufferSeqId: {
                type: "int32",
                id: 50
              },
              syncSeqId: {
                type: "int32",
                id: 51
              }
            }
          },
          RemoteInsetsControlTargetProto: {
            edition: "proto2",
            fields: {
              identifier: {
                type: "IdentifierProto",
                id: 1
              },
              requestedVisibleTypes: {
                type: "int32",
                id: 2
              },
              animatingTypes: {
                type: "int32",
                id: 3
              }
            }
          },
          IdentifierProto: {
            edition: "proto2",
            fields: {
              hashCode: {
                type: "int32",
                id: 1
              },
              userId: {
                type: "int32",
                id: 2
              },
              title: {
                type: "string",
                id: 3,
                options: {
                  "(.perfetto.protos.privacy).dest": "DEST_EXPLICIT"
                }
              }
            }
          },
          WindowStateAnimatorProto: {
            edition: "proto2",
            fields: {
              lastClipRect: {
                type: "RectProto",
                id: 1
              },
              surface: {
                type: "WindowSurfaceControllerProto",
                id: 2
              },
              drawState: {
                type: "DrawState",
                id: 3
              },
              systemDecorRect: {
                type: "RectProto",
                id: 4
              }
            },
            nested: {
              DrawState: {
                values: {
                  NO_SURFACE: 0,
                  DRAW_PENDING: 1,
                  COMMIT_DRAW_PENDING: 2,
                  READY_TO_SHOW: 3,
                  HAS_DRAWN: 4
                }
              }
            }
          },
          WindowSurfaceControllerProto: {
            edition: "proto2",
            fields: {
              shown: {
                type: "bool",
                id: 1
              },
              layer: {
                type: "int32",
                id: 2
              }
            }
          },
          ScreenRotationAnimationProto: {
            edition: "proto2",
            fields: {
              started: {
                type: "bool",
                id: 1
              },
              animationRunning: {
                type: "bool",
                id: 2
              }
            }
          },
          WindowContainerProto: {
            edition: "proto2",
            fields: {
              configurationContainer: {
                type: "ConfigurationContainerProto",
                id: 1
              },
              orientation: {
                type: "int32",
                id: 2,
                options: {
                  "(.perfetto.protos.typedef)": "android.content.pm.ActivityInfo.ScreenOrientation"
                }
              },
              visible: {
                type: "bool",
                id: 3
              },
              surfaceAnimator: {
                type: "SurfaceAnimatorProto",
                id: 4
              },
              children: {
                rule: "repeated",
                type: "WindowContainerChildProto",
                id: 5
              },
              identifier: {
                type: "IdentifierProto",
                id: 6
              },
              surfaceControl: {
                type: "SurfaceControlProto",
                id: 7
              }
            }
          },
          WindowContainerChildProto: {
            edition: "proto2",
            fields: {
              windowContainer: {
                type: "WindowContainerProto",
                id: 2
              },
              displayContent: {
                type: "DisplayContentProto",
                id: 3
              },
              displayArea: {
                type: "DisplayAreaProto",
                id: 4
              },
              task: {
                type: "TaskProto",
                id: 5
              },
              activity: {
                type: "ActivityRecordProto",
                id: 6
              },
              windowToken: {
                type: "WindowTokenProto",
                id: 7
              },
              window: {
                type: "WindowStateProto",
                id: 8
              },
              taskFragment: {
                type: "TaskFragmentProto",
                id: 9
              }
            }
          },
          ConfigurationContainerProto: {
            edition: "proto2",
            fields: {
              overrideConfiguration: {
                type: "ConfigurationProto",
                id: 1
              },
              fullConfiguration: {
                type: "ConfigurationProto",
                id: 2
              },
              mergedOverrideConfiguration: {
                type: "ConfigurationProto",
                id: 3
              }
            }
          },
          WindowFramesProto: {
            edition: "proto2",
            fields: {
              containingFrame: {
                type: "RectProto",
                id: 1,
                options: {
                  deprecated: true
                }
              },
              contentFrame: {
                type: "RectProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              decorFrame: {
                type: "RectProto",
                id: 3,
                options: {
                  deprecated: true
                }
              },
              displayFrame: {
                type: "RectProto",
                id: 4
              },
              frame: {
                type: "RectProto",
                id: 5
              },
              outsetFrame: {
                type: "RectProto",
                id: 6
              },
              overscanFrame: {
                type: "RectProto",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              parentFrame: {
                type: "RectProto",
                id: 8
              },
              visibleFrame: {
                type: "RectProto",
                id: 9,
                options: {
                  deprecated: true
                }
              },
              cutout: {
                type: "DisplayCutoutProto",
                id: 10,
                options: {
                  deprecated: true
                }
              },
              contentInsets: {
                type: "RectProto",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              overscanInsets: {
                type: "RectProto",
                id: 12,
                options: {
                  deprecated: true
                }
              },
              visibleInsets: {
                type: "RectProto",
                id: 13,
                options: {
                  deprecated: true
                }
              },
              stableInsets: {
                type: "RectProto",
                id: 14,
                options: {
                  deprecated: true
                }
              },
              outsets: {
                type: "RectProto",
                id: 15
              },
              compatFrame: {
                type: "RectProto",
                id: 16
              }
            }
          },
          InsetsSourceProviderProto: {
            edition: "proto2",
            fields: {
              source: {
                type: "InsetsSourceProto",
                id: 1
              },
              frame: {
                type: "RectProto",
                id: 2
              },
              fakeControl: {
                type: "InsetsSourceControlProto",
                id: 3
              },
              control: {
                type: "InsetsSourceControlProto",
                id: 4
              },
              controlTarget: {
                type: "WindowStateProto",
                id: 5,
                options: {
                  deprecated: true
                }
              },
              pendingControlTarget: {
                type: "WindowStateProto",
                id: 6,
                options: {
                  deprecated: true
                }
              },
              fakeControlTarget: {
                type: "WindowStateProto",
                id: 7,
                options: {
                  deprecated: true
                }
              },
              capturedLeash: {
                type: "SurfaceControlProto",
                id: 8
              },
              imeOverriddenFrame: {
                type: "RectProto",
                id: 9,
                options: {
                  deprecated: true
                }
              },
              isLeashReadyForDispatching: {
                type: "bool",
                id: 10
              },
              clientVisible: {
                type: "bool",
                id: 11
              },
              serverVisible: {
                type: "bool",
                id: 12
              },
              seamlessRotating: {
                type: "bool",
                id: 13
              },
              finishSeamlessRotateFrameNumber: {
                type: "int64",
                id: 14
              },
              controllable: {
                type: "bool",
                id: 15
              },
              sourceWindowState: {
                type: "WindowStateProto",
                id: 16,
                options: {
                  deprecated: true
                }
              },
              controlTargetIdentifier: {
                type: "IdentifierProto",
                id: 17
              },
              pendingControlTargetIdentifier: {
                type: "IdentifierProto",
                id: 18
              },
              fakeControlTargetIdentifier: {
                type: "IdentifierProto",
                id: 19
              },
              sourceWindowStateIdentifier: {
                type: "IdentifierProto",
                id: 20
              }
            }
          },
          ImeInsetsSourceProviderProto: {
            edition: "proto2",
            fields: {
              insetsSourceProvider: {
                type: "InsetsSourceProviderProto",
                id: 1
              },
              imeTargetFromIme: {
                type: "WindowStateProto",
                id: 2,
                options: {
                  deprecated: true
                }
              },
              isImeLayoutDrawn: {
                type: "bool",
                id: 3,
                options: {
                  deprecated: true
                }
              },
              imeTargetFromImeIdentifier: {
                type: "IdentifierProto",
                id: 4
              }
            }
          },
          BackNavigationProto: {
            edition: "proto2",
            fields: {
              animationInProgress: {
                type: "bool",
                id: 1
              },
              lastBackType: {
                type: "int32",
                id: 2
              },
              showWallpaper: {
                type: "bool",
                id: 3
              },
              mainOpenActivity: {
                type: "string",
                id: 4
              },
              animationRunning: {
                type: "bool",
                id: 5
              }
            }
          },
          StatusBarManagerProto: {
            edition: "proto2",
            fields: {},
            nested: {
              WindowState: {
                values: {
                  WINDOW_STATE_SHOWING: 0,
                  WINDOW_STATE_HIDING: 1,
                  WINDOW_STATE_HIDDEN: 2
                }
              },
              TransientWindowState: {
                values: {
                  TRANSIENT_BAR_NONE: 0,
                  TRANSIENT_BAR_SHOW_REQUESTED: 1,
                  TRANSIENT_BAR_SHOWING: 2,
                  TRANSIENT_BAR_HIDING: 3
                }
              }
            }
          },
          ActivityInfoProto: {
            edition: "proto2",
            fields: {},
            nested: {
              ScreenOrientation: {
                values: {
                  SCREEN_ORIENTATION_UNSET: -2,
                  SCREEN_ORIENTATION_UNSPECIFIED: -1,
                  SCREEN_ORIENTATION_LANDSCAPE: 0,
                  SCREEN_ORIENTATION_PORTRAIT: 1,
                  SCREEN_ORIENTATION_USER: 2,
                  SCREEN_ORIENTATION_BEHIND: 3,
                  SCREEN_ORIENTATION_SENSOR: 4,
                  SCREEN_ORIENTATION_NOSENSOR: 5,
                  SCREEN_ORIENTATION_SENSOR_LANDSCAPE: 6,
                  SCREEN_ORIENTATION_SENSOR_PORTRAIT: 7,
                  SCREEN_ORIENTATION_REVERSE_LANDSCAPE: 8,
                  SCREEN_ORIENTATION_REVERSE_PORTRAIT: 9,
                  SCREEN_ORIENTATION_FULL_SENSOR: 10,
                  SCREEN_ORIENTATION_USER_LANDSCAPE: 11,
                  SCREEN_ORIENTATION_USER_PORTRAIT: 12,
                  SCREEN_ORIENTATION_FULL_USER: 13,
                  SCREEN_ORIENTATION_LOCKED: 14
                }
              }
            }
          },
          ConfigurationProto: {
            edition: "proto2",
            fields: {
              fontScale: {
                type: "float",
                id: 1
              },
              mcc: {
                type: "uint32",
                id: 2
              },
              mnc: {
                type: "uint32",
                id: 3,
                options: {
                  "(.perfetto.protos.privacy).dest": "DEST_EXPLICIT"
                }
              },
              locales: {
                rule: "repeated",
                type: "LocaleProto",
                id: 4,
                options: {
                  deprecated: true
                }
              },
              screenLayout: {
                type: "uint32",
                id: 5
              },
              colorMode: {
                type: "uint32",
                id: 6
              },
              touchscreen: {
                type: "uint32",
                id: 7
              },
              keyboard: {
                type: "uint32",
                id: 8
              },
              keyboardHidden: {
                type: "uint32",
                id: 9
              },
              hardKeyboardHidden: {
                type: "uint32",
                id: 10
              },
              navigation: {
                type: "uint32",
                id: 11
              },
              navigationHidden: {
                type: "uint32",
                id: 12
              },
              orientation: {
                type: "uint32",
                id: 13
              },
              uiMode: {
                type: "uint32",
                id: 14
              },
              screenWidthDp: {
                type: "uint32",
                id: 15
              },
              screenHeightDp: {
                type: "uint32",
                id: 16
              },
              smallestScreenWidthDp: {
                type: "uint32",
                id: 17
              },
              densityDpi: {
                type: "uint32",
                id: 18
              },
              windowConfiguration: {
                type: "WindowConfigurationProto",
                id: 19
              },
              localeList: {
                type: "string",
                id: 20
              },
              fontWeightAdjustment: {
                type: "uint32",
                id: 21
              },
              grammaticalGender: {
                type: "uint32",
                id: 22
              }
            }
          },
          ResourcesConfigurationProto: {
            edition: "proto2",
            fields: {
              configuration: {
                type: "ConfigurationProto",
                id: 1
              },
              sdkVersion: {
                type: "uint32",
                id: 2
              },
              screenWidthPx: {
                type: "uint32",
                id: 3
              },
              screenHeightPx: {
                type: "uint32",
                id: 4
              }
            }
          },
          DeviceConfigurationProto: {
            edition: "proto2",
            fields: {
              stableScreenWidthPx: {
                type: "uint32",
                id: 1
              },
              stableScreenHeightPx: {
                type: "uint32",
                id: 2
              },
              stableDensityDpi: {
                type: "uint32",
                id: 3
              },
              totalRam: {
                type: "uint64",
                id: 4
              },
              lowRam: {
                type: "bool",
                id: 5
              },
              maxCores: {
                type: "uint32",
                id: 6
              },
              hasSecureScreenLock: {
                type: "bool",
                id: 7
              },
              openglVersion: {
                type: "uint32",
                id: 8
              },
              openglExtensions: {
                rule: "repeated",
                type: "string",
                id: 9
              },
              sharedLibraries: {
                rule: "repeated",
                type: "string",
                id: 10
              },
              features: {
                rule: "repeated",
                type: "string",
                id: 11
              },
              cpuArchitectures: {
                rule: "repeated",
                type: "string",
                id: 12
              }
            }
          },
          GlobalConfigurationProto: {
            edition: "proto2",
            fields: {
              resources: {
                type: "ResourcesConfigurationProto",
                id: 1
              },
              device: {
                type: "DeviceConfigurationProto",
                id: 2
              }
            }
          },
          WindowConfigurationProto: {
            edition: "proto2",
            fields: {
              appBounds: {
                type: "RectProto",
                id: 1
              },
              windowingMode: {
                type: "int32",
                id: 2,
                options: {
                  "(.perfetto.protos.typedef)": "android.app.WindowConfiguration.WindowingMode"
                }
              },
              activityType: {
                type: "int32",
                id: 3,
                options: {
                  "(.perfetto.protos.typedef)": "android.app.WindowConfiguration.ActivityType"
                }
              },
              bounds: {
                type: "RectProto",
                id: 4
              },
              maxBounds: {
                type: "RectProto",
                id: 5
              }
            }
          },
          LocaleProto: {
            edition: "proto2",
            options: {
              deprecated: true
            },
            fields: {
              language: {
                type: "string",
                id: 1
              },
              country: {
                type: "string",
                id: 2
              },
              variant: {
                type: "string",
                id: 3
              },
              script: {
                type: "string",
                id: 4
              }
            }
          },
          Destination: {
            edition: "proto2",
            values: {
              DEST_LOCAL: 0,
              DEST_EXPLICIT: 100,
              DEST_AUTOMATIC: 200,
              DEST_UNSET: 255
            }
          },
          PrivacyFlags: {
            edition: "proto2",
            fields: {
              dest: {
                type: "Destination",
                id: 1,
                options: {
                  "default": "DEST_UNSET"
                }
              },
              patterns: {
                rule: "repeated",
                type: "string",
                id: 2
              }
            }
          },
          privacy: {
            edition: "proto2",
            type: "PrivacyFlags",
            id: 102672883,
            extend: "google.protobuf.FieldOptions"
          },
          msgPrivacy: {
            edition: "proto2",
            type: "PrivacyFlags",
            id: 102672883,
            extend: "google.protobuf.MessageOptions"
          },
          WindowContainerThumbnailProto: {
            edition: "proto2",
            fields: {
              width: {
                type: "int32",
                id: 1
              },
              height: {
                type: "int32",
                id: 2
              },
              surfaceAnimator: {
                type: "SurfaceAnimatorProto",
                id: 3
              }
            }
          },
          SurfaceAnimatorProto: {
            edition: "proto2",
            fields: {
              leash: {
                type: "SurfaceControlProto",
                id: 1
              },
              animationStartDelayed: {
                type: "bool",
                id: 2
              },
              animationAdapter: {
                type: "AnimationAdapterProto",
                id: 3
              }
            }
          },
          AnimationAdapterProto: {
            edition: "proto2",
            fields: {
              local: {
                type: "LocalAnimationAdapterProto",
                id: 1
              },
              remote: {
                type: "RemoteAnimationAdapterWrapperProto",
                id: 2
              }
            }
          },
          RemoteAnimationAdapterWrapperProto: {
            edition: "proto2",
            fields: {
              target: {
                type: "RemoteAnimationTargetProto",
                id: 1
              }
            }
          },
          LocalAnimationAdapterProto: {
            edition: "proto2",
            fields: {
              animationSpec: {
                type: "AnimationSpecProto",
                id: 1
              }
            }
          },
          AnimationSpecProto: {
            edition: "proto2",
            fields: {
              window: {
                type: "WindowAnimationSpecProto",
                id: 1
              },
              move: {
                type: "MoveAnimationSpecProto",
                id: 2
              },
              alpha: {
                type: "AlphaAnimationSpecProto",
                id: 3
              },
              rotate: {
                type: "RotationAnimationSpecProto",
                id: 4
              }
            }
          },
          WindowAnimationSpecProto: {
            edition: "proto2",
            fields: {
              animation: {
                type: "string",
                id: 1
              }
            }
          },
          MoveAnimationSpecProto: {
            edition: "proto2",
            fields: {
              from: {
                type: "PointProto",
                id: 1
              },
              to: {
                type: "PointProto",
                id: 2
              },
              durationMs: {
                type: "int64",
                id: 3
              }
            }
          },
          AlphaAnimationSpecProto: {
            edition: "proto2",
            fields: {
              from: {
                type: "float",
                id: 1
              },
              to: {
                type: "float",
                id: 2
              },
              durationMs: {
                type: "int64",
                id: 3
              }
            }
          },
          RotationAnimationSpecProto: {
            edition: "proto2",
            fields: {
              startLuma: {
                type: "float",
                id: 1
              },
              endLuma: {
                type: "float",
                id: 2
              },
              durationMs: {
                type: "int64",
                id: 3
              }
            }
          },
          RemoteAnimationTargetProto: {
            edition: "proto2",
            fields: {
              taskId: {
                type: "int32",
                id: 1
              },
              mode: {
                type: "int32",
                id: 2
              },
              leash: {
                type: "SurfaceControlProto",
                id: 3
              },
              isTranslucent: {
                type: "bool",
                id: 4
              },
              clipRect: {
                type: "RectProto",
                id: 5
              },
              contentInsets: {
                type: "RectProto",
                id: 6
              },
              prefixOrderIndex: {
                type: "int32",
                id: 7
              },
              position: {
                type: "PointProto",
                id: 8
              },
              sourceContainerBounds: {
                type: "RectProto",
                id: 9
              },
              windowConfiguration: {
                type: "WindowConfigurationProto",
                id: 10
              },
              startLeash: {
                type: "SurfaceControlProto",
                id: 11
              },
              startBounds: {
                type: "RectProto",
                id: 12
              },
              localBounds: {
                type: "RectProto",
                id: 13
              },
              screenSpaceBounds: {
                type: "RectProto",
                id: 14
              }
            }
          },
          DisplayInfoProto: {
            edition: "proto2",
            fields: {
              logicalWidth: {
                type: "int32",
                id: 1
              },
              logicalHeight: {
                type: "int32",
                id: 2
              },
              appWidth: {
                type: "int32",
                id: 3
              },
              appHeight: {
                type: "int32",
                id: 4
              },
              name: {
                type: "string",
                id: 5
              },
              flags: {
                type: "int32",
                id: 6
              },
              cutout: {
                type: "DisplayCutoutProto",
                id: 7
              },
              type: {
                type: "int32",
                id: 8
              }
            }
          },
          SurfaceProto: {
            edition: "proto2",
            fields: {},
            nested: {
              Rotation: {
                values: {
                  ROTATION_0: 0,
                  ROTATION_90: 1,
                  ROTATION_180: 2,
                  ROTATION_270: 3
                }
              }
            }
          },
          DisplayStateEnum: {
            edition: "proto2",
            values: {
              DISPLAY_STATE_UNKNOWN: 0,
              DISPLAY_STATE_OFF: 1,
              DISPLAY_STATE_ON: 2,
              DISPLAY_STATE_DOZE: 3,
              DISPLAY_STATE_DOZE_SUSPEND: 4,
              DISPLAY_STATE_VR: 5,
              DISPLAY_STATE_ON_SUSPEND: 6
            }
          },
          DisplayStateReason: {
            edition: "proto2",
            values: {
              DISPLAY_STATE_REASON_UNKNOWN: 0,
              DISPLAY_STATE_REASON_DEFAULT_POLICY: 1,
              DISPLAY_STATE_REASON_DRAW_WAKE_LOCK: 2,
              DISPLAY_STATE_REASON_OFFLOAD: 3,
              DISPLAY_STATE_REASON_TILT: 4,
              DISPLAY_STATE_REASON_DREAM_MANAGER: 5,
              DISPLAY_STATE_REASON_KEY: 6,
              DISPLAY_STATE_REASON_MOTION: 7
            }
          },
          TransitionTypeEnum: {
            edition: "proto2",
            valuesOptions: {
              TRANSIT_DOCK_TASK_FROM_RECENTS: {
                deprecated: true
              }
            },
            values: {
              TRANSIT_NONE: 0,
              TRANSIT_UNSET: -1,
              TRANSIT_ACTIVITY_OPEN: 6,
              TRANSIT_ACTIVITY_CLOSE: 7,
              TRANSIT_TASK_OPEN: 8,
              TRANSIT_TASK_CLOSE: 9,
              TRANSIT_TASK_TO_FRONT: 10,
              TRANSIT_TASK_TO_BACK: 11,
              TRANSIT_WALLPAPER_CLOSE: 12,
              TRANSIT_WALLPAPER_OPEN: 13,
              TRANSIT_WALLPAPER_INTRA_OPEN: 14,
              TRANSIT_WALLPAPER_INTRA_CLOSE: 15,
              TRANSIT_TASK_OPEN_BEHIND: 16,
              TRANSIT_TASK_IN_PLACE: 17,
              TRANSIT_ACTIVITY_RELAUNCH: 18,
              TRANSIT_DOCK_TASK_FROM_RECENTS: 19,
              TRANSIT_KEYGUARD_GOING_AWAY: 20,
              TRANSIT_KEYGUARD_GOING_AWAY_ON_WALLPAPER: 21,
              TRANSIT_KEYGUARD_OCCLUDE: 22,
              TRANSIT_KEYGUARD_UNOCCLUDE: 23,
              TRANSIT_TRANSLUCENT_ACTIVITY_OPEN: 24,
              TRANSIT_TRANSLUCENT_ACTIVITY_CLOSE: 25,
              TRANSIT_CRASHING_ACTIVITY_CLOSE: 26
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        options: {
          go_package: "google.golang.org/protobuf/types/descriptorpb",
          java_package: "com.google.protobuf",
          java_outer_classname: "DescriptorProtos",
          csharp_namespace: "Google.Protobuf.Reflection",
          objc_class_prefix: "GPB",
          cc_enable_arenas: true,
          optimize_for: "SPEED"
        },
        nested: {
          FileDescriptorSet: {
            edition: "proto2",
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            },
            extensions: [
              [
                536000000,
                536000000
              ]
            ]
          },
          Edition: {
            edition: "proto2",
            values: {
              EDITION_UNKNOWN: 0,
              EDITION_LEGACY: 900,
              EDITION_PROTO2: 998,
              EDITION_PROTO3: 999,
              EDITION_2023: 1000,
              EDITION_2024: 1001,
              EDITION_1_TEST_ONLY: 1,
              EDITION_2_TEST_ONLY: 2,
              EDITION_99997_TEST_ONLY: 99997,
              EDITION_99998_TEST_ONLY: 99998,
              EDITION_99999_TEST_ONLY: 99999,
              EDITION_MAX: 2147483647
            }
          },
          FileDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11
              },
              optionDependency: {
                rule: "repeated",
                type: "string",
                id: 15
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              service: {
                rule: "repeated",
                type: "ServiceDescriptorProto",
                id: 6
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              },
              options: {
                type: "FileOptions",
                id: 8
              },
              sourceCodeInfo: {
                type: "SourceCodeInfo",
                id: 9
              },
              syntax: {
                type: "string",
                id: 12
              },
              edition: {
                type: "Edition",
                id: 14
              }
            }
          },
          DescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              extensionRange: {
                rule: "repeated",
                type: "ExtensionRange",
                id: 5
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              options: {
                type: "MessageOptions",
                id: 7
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              },
              visibility: {
                type: "SymbolVisibility",
                id: 11
              }
            },
            nested: {
              ExtensionRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  },
                  options: {
                    type: "ExtensionRangeOptions",
                    id: 3
                  }
                }
              },
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          ExtensionRangeOptions: {
            edition: "proto2",
            fields: {
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              },
              declaration: {
                rule: "repeated",
                type: "Declaration",
                id: 2,
                options: {
                  retention: "RETENTION_SOURCE"
                }
              },
              features: {
                type: "FeatureSet",
                id: 50
              },
              verification: {
                type: "VerificationState",
                id: 3,
                options: {
                  "default": "UNVERIFIED",
                  retention: "RETENTION_SOURCE"
                }
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            nested: {
              Declaration: {
                fields: {
                  number: {
                    type: "int32",
                    id: 1
                  },
                  fullName: {
                    type: "string",
                    id: 2
                  },
                  type: {
                    type: "string",
                    id: 3
                  },
                  reserved: {
                    type: "bool",
                    id: 5
                  },
                  repeated: {
                    type: "bool",
                    id: 6
                  }
                },
                reserved: [
                  [
                    4,
                    4
                  ]
                ]
              },
              VerificationState: {
                values: {
                  DECLARATION: 0,
                  UNVERIFIED: 1
                }
              }
            }
          },
          FieldDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              oneofIndex: {
                type: "int32",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              options: {
                type: "FieldOptions",
                id: 8
              },
              proto3Optional: {
                type: "bool",
                id: 17
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REPEATED: 3,
                  LABEL_REQUIRED: 2
                }
              }
            }
          },
          OneofDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              options: {
                type: "EnumOptions",
                id: 3
              },
              reservedRange: {
                rule: "repeated",
                type: "EnumReservedRange",
                id: 4
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 5
              },
              visibility: {
                type: "SymbolVisibility",
                id: 6
              }
            },
            nested: {
              EnumReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          EnumValueDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                type: "EnumValueOptions",
                id: 3
              }
            }
          },
          ServiceDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              method: {
                rule: "repeated",
                type: "MethodDescriptorProto",
                id: 2
              },
              options: {
                type: "ServiceOptions",
                id: 3
              }
            }
          },
          MethodDescriptorProto: {
            edition: "proto2",
            fields: {
              name: {
                type: "string",
                id: 1
              },
              inputType: {
                type: "string",
                id: 2
              },
              outputType: {
                type: "string",
                id: 3
              },
              options: {
                type: "MethodOptions",
                id: 4
              },
              clientStreaming: {
                type: "bool",
                id: 5
              },
              serverStreaming: {
                type: "bool",
                id: 6
              }
            }
          },
          FileOptions: {
            edition: "proto2",
            fields: {
              javaPackage: {
                type: "string",
                id: 1
              },
              javaOuterClassname: {
                type: "string",
                id: 8
              },
              javaMultipleFiles: {
                type: "bool",
                id: 10
              },
              javaGenerateEqualsAndHash: {
                type: "bool",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              javaStringCheckUtf8: {
                type: "bool",
                id: 27
              },
              optimizeFor: {
                type: "OptimizeMode",
                id: 9,
                options: {
                  "default": "SPEED"
                }
              },
              goPackage: {
                type: "string",
                id: 11
              },
              ccGenericServices: {
                type: "bool",
                id: 16
              },
              javaGenericServices: {
                type: "bool",
                id: 17
              },
              pyGenericServices: {
                type: "bool",
                id: 18
              },
              deprecated: {
                type: "bool",
                id: 23
              },
              ccEnableArenas: {
                type: "bool",
                id: 31,
                options: {
                  "default": true
                }
              },
              objcClassPrefix: {
                type: "string",
                id: 36
              },
              csharpNamespace: {
                type: "string",
                id: 37
              },
              swiftPrefix: {
                type: "string",
                id: 39
              },
              phpClassPrefix: {
                type: "string",
                id: 40
              },
              phpNamespace: {
                type: "string",
                id: 41
              },
              phpMetadataNamespace: {
                type: "string",
                id: 44
              },
              rubyPackage: {
                type: "string",
                id: 45
              },
              features: {
                type: "FeatureSet",
                id: 50
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                42,
                42
              ],
              [
                38,
                38
              ],
              "php_generic_services"
            ],
            nested: {
              OptimizeMode: {
                values: {
                  SPEED: 1,
                  CODE_SIZE: 2,
                  LITE_RUNTIME: 3
                }
              }
            }
          },
          MessageOptions: {
            edition: "proto2",
            fields: {
              messageSetWireFormat: {
                type: "bool",
                id: 1
              },
              noStandardDescriptorAccessor: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              mapEntry: {
                type: "bool",
                id: 7
              },
              deprecatedLegacyJsonFieldConflicts: {
                type: "bool",
                id: 11,
                options: {
                  deprecated: true
                }
              },
              features: {
                type: "FeatureSet",
                id: 12
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ],
              [
                5,
                5
              ],
              [
                6,
                6
              ],
              [
                8,
                8
              ],
              [
                9,
                9
              ]
            ]
          },
          FieldOptions: {
            edition: "proto2",
            fields: {
              ctype: {
                type: "CType",
                id: 1,
                options: {
                  "default": "STRING"
                }
              },
              packed: {
                type: "bool",
                id: 2
              },
              jstype: {
                type: "JSType",
                id: 6,
                options: {
                  "default": "JS_NORMAL"
                }
              },
              lazy: {
                type: "bool",
                id: 5
              },
              unverifiedLazy: {
                type: "bool",
                id: 15
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              weak: {
                type: "bool",
                id: 10,
                options: {
                  deprecated: true
                }
              },
              debugRedact: {
                type: "bool",
                id: 16
              },
              retention: {
                type: "OptionRetention",
                id: 17
              },
              targets: {
                rule: "repeated",
                type: "OptionTargetType",
                id: 19
              },
              editionDefaults: {
                rule: "repeated",
                type: "EditionDefault",
                id: 20
              },
              features: {
                type: "FeatureSet",
                id: 21
              },
              featureSupport: {
                type: "FeatureSupport",
                id: 22
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ],
              [
                18,
                18
              ]
            ],
            nested: {
              CType: {
                values: {
                  STRING: 0,
                  CORD: 1,
                  STRING_PIECE: 2
                }
              },
              JSType: {
                values: {
                  JS_NORMAL: 0,
                  JS_STRING: 1,
                  JS_NUMBER: 2
                }
              },
              OptionRetention: {
                values: {
                  RETENTION_UNKNOWN: 0,
                  RETENTION_RUNTIME: 1,
                  RETENTION_SOURCE: 2
                }
              },
              OptionTargetType: {
                values: {
                  TARGET_TYPE_UNKNOWN: 0,
                  TARGET_TYPE_FILE: 1,
                  TARGET_TYPE_EXTENSION_RANGE: 2,
                  TARGET_TYPE_MESSAGE: 3,
                  TARGET_TYPE_FIELD: 4,
                  TARGET_TYPE_ONEOF: 5,
                  TARGET_TYPE_ENUM: 6,
                  TARGET_TYPE_ENUM_ENTRY: 7,
                  TARGET_TYPE_SERVICE: 8,
                  TARGET_TYPE_METHOD: 9
                }
              },
              EditionDefault: {
                fields: {
                  edition: {
                    type: "Edition",
                    id: 3
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              },
              FeatureSupport: {
                fields: {
                  editionIntroduced: {
                    type: "Edition",
                    id: 1
                  },
                  editionDeprecated: {
                    type: "Edition",
                    id: 2
                  },
                  deprecationWarning: {
                    type: "string",
                    id: 3
                  },
                  editionRemoved: {
                    type: "Edition",
                    id: 4
                  }
                }
              }
            }
          },
          OneofOptions: {
            edition: "proto2",
            fields: {
              features: {
                type: "FeatureSet",
                id: 1
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumOptions: {
            edition: "proto2",
            fields: {
              allowAlias: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              deprecatedLegacyJsonFieldConflicts: {
                type: "bool",
                id: 6,
                options: {
                  deprecated: true
                }
              },
              features: {
                type: "FeatureSet",
                id: 7
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                5,
                5
              ]
            ]
          },
          EnumValueOptions: {
            edition: "proto2",
            fields: {
              deprecated: {
                type: "bool",
                id: 1
              },
              features: {
                type: "FeatureSet",
                id: 2
              },
              debugRedact: {
                type: "bool",
                id: 3
              },
              featureSupport: {
                type: "FieldOptions.FeatureSupport",
                id: 4
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          ServiceOptions: {
            edition: "proto2",
            fields: {
              features: {
                type: "FeatureSet",
                id: 34
              },
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          MethodOptions: {
            edition: "proto2",
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              idempotencyLevel: {
                type: "IdempotencyLevel",
                id: 34,
                options: {
                  "default": "IDEMPOTENCY_UNKNOWN"
                }
              },
              features: {
                type: "FeatureSet",
                id: 35
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            nested: {
              IdempotencyLevel: {
                values: {
                  IDEMPOTENCY_UNKNOWN: 0,
                  NO_SIDE_EFFECTS: 1,
                  IDEMPOTENT: 2
                }
              }
            }
          },
          UninterpretedOption: {
            edition: "proto2",
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    rule: "required",
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          FeatureSet: {
            edition: "proto2",
            fields: {
              fieldPresence: {
                type: "FieldPresence",
                id: 1,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_2023",
                  "edition_defaults.value": "EXPLICIT"
                }
              },
              enumType: {
                type: "EnumType",
                id: 2,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_PROTO3",
                  "edition_defaults.value": "OPEN"
                }
              },
              repeatedFieldEncoding: {
                type: "RepeatedFieldEncoding",
                id: 3,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_PROTO3",
                  "edition_defaults.value": "PACKED"
                }
              },
              utf8Validation: {
                type: "Utf8Validation",
                id: 4,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_PROTO3",
                  "edition_defaults.value": "VERIFY"
                }
              },
              messageEncoding: {
                type: "MessageEncoding",
                id: 5,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_LEGACY",
                  "edition_defaults.value": "LENGTH_PREFIXED"
                }
              },
              jsonFormat: {
                type: "JsonFormat",
                id: 6,
                options: {
                  retention: "RETENTION_RUNTIME",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2023",
                  "edition_defaults.edition": "EDITION_PROTO3",
                  "edition_defaults.value": "ALLOW"
                }
              },
              enforceNamingStyle: {
                type: "EnforceNamingStyle",
                id: 7,
                options: {
                  retention: "RETENTION_SOURCE",
                  targets: "TARGET_TYPE_METHOD",
                  "feature_support.edition_introduced": "EDITION_2024",
                  "edition_defaults.edition": "EDITION_2024",
                  "edition_defaults.value": "STYLE2024"
                }
              },
              defaultSymbolVisibility: {
                type: "VisibilityFeature.DefaultSymbolVisibility",
                id: 8,
                options: {
                  retention: "RETENTION_SOURCE",
                  targets: "TARGET_TYPE_FILE",
                  "feature_support.edition_introduced": "EDITION_2024",
                  "edition_defaults.edition": "EDITION_2024",
                  "edition_defaults.value": "EXPORT_TOP_LEVEL"
                }
              }
            },
            extensions: [
              [
                1000,
                9994
              ],
              [
                9995,
                9999
              ],
              [
                10000,
                10000
              ]
            ],
            reserved: [
              [
                999,
                999
              ]
            ],
            nested: {
              FieldPresence: {
                values: {
                  FIELD_PRESENCE_UNKNOWN: 0,
                  EXPLICIT: 1,
                  IMPLICIT: 2,
                  LEGACY_REQUIRED: 3
                }
              },
              EnumType: {
                values: {
                  ENUM_TYPE_UNKNOWN: 0,
                  OPEN: 1,
                  CLOSED: 2
                }
              },
              RepeatedFieldEncoding: {
                values: {
                  REPEATED_FIELD_ENCODING_UNKNOWN: 0,
                  PACKED: 1,
                  EXPANDED: 2
                }
              },
              Utf8Validation: {
                values: {
                  UTF8_VALIDATION_UNKNOWN: 0,
                  VERIFY: 2,
                  NONE: 3
                }
              },
              MessageEncoding: {
                values: {
                  MESSAGE_ENCODING_UNKNOWN: 0,
                  LENGTH_PREFIXED: 1,
                  DELIMITED: 2
                }
              },
              JsonFormat: {
                values: {
                  JSON_FORMAT_UNKNOWN: 0,
                  ALLOW: 1,
                  LEGACY_BEST_EFFORT: 2
                }
              },
              EnforceNamingStyle: {
                values: {
                  ENFORCE_NAMING_STYLE_UNKNOWN: 0,
                  STYLE2024: 1,
                  STYLE_LEGACY: 2
                }
              },
              VisibilityFeature: {
                fields: {},
                reserved: [
                  [
                    1,
                    536870911
                  ]
                ],
                nested: {
                  DefaultSymbolVisibility: {
                    values: {
                      DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0,
                      EXPORT_ALL: 1,
                      EXPORT_TOP_LEVEL: 2,
                      LOCAL_ALL: 3,
                      STRICT: 4
                    }
                  }
                }
              }
            }
          },
          FeatureSetDefaults: {
            edition: "proto2",
            fields: {
              defaults: {
                rule: "repeated",
                type: "FeatureSetEditionDefault",
                id: 1
              },
              minimumEdition: {
                type: "Edition",
                id: 4
              },
              maximumEdition: {
                type: "Edition",
                id: 5
              }
            },
            nested: {
              FeatureSetEditionDefault: {
                fields: {
                  edition: {
                    type: "Edition",
                    id: 3
                  },
                  overridableFeatures: {
                    type: "FeatureSet",
                    id: 4
                  },
                  fixedFeatures: {
                    type: "FeatureSet",
                    id: 5
                  }
                },
                reserved: [
                  [
                    1,
                    1
                  ],
                  [
                    2,
                    2
                  ],
                  "features"
                ]
              }
            }
          },
          SourceCodeInfo: {
            edition: "proto2",
            fields: {
              location: {
                rule: "repeated",
                type: "Location",
                id: 1
              }
            },
            extensions: [
              [
                536000000,
                536000000
              ]
            ],
            nested: {
              Location: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1,
                    options: {
                      packed: true
                    }
                  },
                  span: {
                    rule: "repeated",
                    type: "int32",
                    id: 2,
                    options: {
                      packed: true
                    }
                  },
                  leadingComments: {
                    type: "string",
                    id: 3
                  },
                  trailingComments: {
                    type: "string",
                    id: 4
                  },
                  leadingDetachedComments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          GeneratedCodeInfo: {
            edition: "proto2",
            fields: {
              annotation: {
                rule: "repeated",
                type: "Annotation",
                id: 1
              }
            },
            nested: {
              Annotation: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1,
                    options: {
                      packed: true
                    }
                  },
                  sourceFile: {
                    type: "string",
                    id: 2
                  },
                  begin: {
                    type: "int32",
                    id: 3
                  },
                  end: {
                    type: "int32",
                    id: 4
                  },
                  semantic: {
                    type: "Semantic",
                    id: 5
                  }
                },
                nested: {
                  Semantic: {
                    values: {
                      NONE: 0,
                      SET: 1,
                      ALIAS: 2
                    }
                  }
                }
              }
            }
          },
          SymbolVisibility: {
            edition: "proto2",
            values: {
              VISIBILITY_UNSET: 0,
              VISIBILITY_LOCAL: 1,
              VISIBILITY_EXPORT: 2
            }
          }
        }
      }
    }
  }
});

export { $root as default };
