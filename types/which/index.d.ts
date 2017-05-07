// Type definitions for which 1.2.14
// Project: https://github.com/isaacs/node-which
// Definitions by: vvakame <https://github.com/vvakame>, virtyaluk <https://github.com/virtyaluk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare interface Options {
    colon?: string;
    path?: string;
    pathExt?: string;
    all?: boolean;
}
declare function which(cmd: string, opt?: Options | ((err: Error, path: string) => void), cb?: (err: Error, path: string) => void): void;
declare namespace which {
    function sync(cmd: string, opt?: Options): string;
}

export = which;
