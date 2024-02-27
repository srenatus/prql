/* tslint:disable */
/* eslint-disable */
/**
* @param {string} prql_query
* @param {CompileOptions | undefined} [options]
* @returns {string | undefined}
*/
export function compile(prql_query: string, options?: CompileOptions): string | undefined;
/**
* @param {string} prql_query
* @returns {string | undefined}
*/
export function prql_to_pl(prql_query: string): string | undefined;
/**
* @param {string} pl_json
* @returns {string | undefined}
*/
export function pl_to_rq(pl_json: string): string | undefined;
/**
* @param {string} rq_json
* @returns {string | undefined}
*/
export function rq_to_sql(rq_json: string): string | undefined;
/**
* @returns {any[]}
*/
export function get_targets(): any[];
/**
* Compilation options for SQL backend of the compiler.
*/
export class CompileOptions {
  free(): void;
/**
*/
  constructor();
/**
* Pass generated SQL string trough a formatter that splits it
* into multiple lines and prettifies indentation and spacing.
*
* Defaults to true.
*/
  format: boolean;
/**
* Emits the compiler signature as a comment after generated SQL
*
* Defaults to true.
*/
  signature_comment: boolean;
/**
* Target to compile to (e.g. sql.postgres)
*
* Defaults to `sql.any`, which uses `target` argument from the query header to determine
* the SQL dialect.
*/
  target: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly compile: (a: number, b: number, c: number, d: number) => void;
  readonly prql_to_pl: (a: number, b: number, c: number) => void;
  readonly pl_to_rq: (a: number, b: number, c: number) => void;
  readonly rq_to_sql: (a: number, b: number, c: number) => void;
  readonly __wbg_compileoptions_free: (a: number) => void;
  readonly __wbg_get_compileoptions_format: (a: number) => number;
  readonly __wbg_set_compileoptions_format: (a: number, b: number) => void;
  readonly __wbg_get_compileoptions_signature_comment: (a: number) => number;
  readonly __wbg_set_compileoptions_signature_comment: (a: number, b: number) => void;
  readonly get_targets: (a: number) => void;
  readonly compileoptions_new: () => number;
  readonly compileoptions_target: (a: number, b: number) => void;
  readonly compileoptions_set_target: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
