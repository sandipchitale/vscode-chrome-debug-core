/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import 'reflect-metadata';

// TODO: Add all necesary types so we can use inversifyjs to create our components
const TYPES = {
    ISession: Symbol.for('ISession'),
    CDTPClient: Symbol.for('chromeConnection.api'),
    IDOMInstrumentationBreakpoints: Symbol.for('IDOMInstrumentationBreakpoints'),
    IEventsToClientReporter: Symbol.for('IEventsToClientReporter'),
    IDebuggeeExecutionControl: Symbol.for('IDebuggeeExecutionControl'),
    IPauseOnExceptions: Symbol.for('IPauseOnExceptions'),
    IBreakpointFeaturesSupport: Symbol.for('IBreakpointFeaturesSupport'),
    IAsyncDebuggingConfiguration: Symbol.for('IAsyncDebuggingConfiguration'),
    IStackTracePresentationLogicProvider: Symbol.for('IStackTracePresentationLogicProvider'),
    IScriptSources: Symbol.for('IScriptSources'),
    ICDTPDebuggeeExecutionEventsProvider: Symbol.for('ICDTPDebuggeeExecutionEventsProvider'),
    IDebuggeeSteppingController: Symbol.for('IDebuggeeSteppingController'),
    IDebuggeeLauncher: Symbol.for('IDebuggeeLauncher'),
    ChromeDebugLogic: Symbol.for('ChromeDebugLogic'),
    SourcesLogic: Symbol.for('SourcesLogic'),
    CDTPScriptsRegistry: Symbol.for('CDTPScriptsRegistry'),
    ClientToInternal: Symbol.for('ClientToInternal'),
    InternalToClient: Symbol.for('InternalToClient'),
    StackTracesLogic: Symbol.for('StackTracesLogic'),
    BreakpointsLogic: Symbol.for('BreakpointsLogic'),
    PauseOnExceptionOrRejection: Symbol.for('PauseOnExceptionOrRejection'),
    Stepping: Symbol.for('Stepping'),
    DotScriptCommand: Symbol.for('DotScriptCommand'),
    DeleteMeScriptsRegistry: Symbol.for('DeleteMeScriptsRegistry'),
    BaseSourceMapTransformer: Symbol.for('BaseSourceMapTransformer'),
    BasePathTransformer: Symbol.for('BasePathTransformer'),
    SyncStepping: Symbol.for('SyncStepping'),
    AsyncStepping: Symbol.for('AsyncStepping'),
    ConnectedCDAConfiguration: Symbol.for('ConnectedCDAConfiguration'),
    ExceptionThrownEventProvider: Symbol.for('ExceptionThrownEventProvider'),
    ExecutionContextEventsProvider: Symbol.for('ExecutionContextEventsProvider'),
    IInspectDebuggeeState: Symbol.for('IInspectDebuggeeState'),
    IUpdateDebuggeeState: Symbol.for('IUpdateDebuggeeState'),
    LineColTransformer: Symbol.for('LineColTransformer'),
    ChromeConnection: Symbol.for('ChromeConnection'),
    IDebuggeeVersionProvider: Symbol.for('IDebuggeeVersionProvider'),
    IBrowserNavigation: Symbol.for('IBrowserNavigation'),
    IPausedOverlay: Symbol.for('IPausedOverlay'),
    INetworkCacheConfiguration: Symbol.for('INetworkCacheConfiguration'),
    ISupportedDomains: Symbol.for('ISupportedDomains'),
    IDebuggeeRunner: Symbol.for('IDebuggeeRunner'),
    ICDTPRuntime: Symbol.for('ICDTPRuntime'),
    IScriptParsedProvider: Symbol.for('IScriptParsedProvider'),
    ITargetBreakpoints: Symbol.for('ITargetBreakpoints'),
    IConsoleEventsProvider: Symbol.for('IConsoleEventsProvider'),
    ILogEventsProvider: Symbol.for('ILogEventsProvider'),
    IBlackboxPatternsConfigurer: Symbol.for('IBlackboxPatternsConfigurer'),
    IDomainsEnabler: Symbol.for('IDomainsEnabler'),
    ILogger: Symbol.for('ILogger'),
    ICommandHandlerDeclarer: Symbol.for('ICommandHandlerDeclarer'),
    IDebuggeePausedHandler: Symbol.for('IDebuggeePausedHandler'),
};

export { TYPES };
