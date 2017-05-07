// Type definitions for cross-spawn 5.1.0
// Project: https://github.com/IndigoUnited/node-cross-spawn
// Definitions by: virtyaluk <https://github.com/virtyaluk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as cp from "child_process";

declare function spawn(command: string, args?: string[], options?: cp.SpawnOptions): cp.ChildProcess;
declare namespace spawn {
    function sync(command: string): cp.SpawnSyncReturns<Buffer>;
    function sync(command: string, options?: cp.SpawnSyncOptionsWithStringEncoding): cp.SpawnSyncReturns<string>;
    function sync(command: string, options?: cp.SpawnSyncOptionsWithBufferEncoding): cp.SpawnSyncReturns<Buffer>;
    function sync(command: string, options?: cp.SpawnSyncOptions): cp.SpawnSyncReturns<Buffer>;
    function sync(command: string, args?: string[], options?: cp.SpawnSyncOptionsWithStringEncoding): cp.SpawnSyncReturns<string>;
    function sync(command: string, args?: string[], options?: cp.SpawnSyncOptionsWithBufferEncoding): cp.SpawnSyncReturns<Buffer>;
    function sync(command: string, args?: string[], options?: cp.SpawnSyncOptions): cp.SpawnSyncReturns<Buffer>;
}

export = spawn;
