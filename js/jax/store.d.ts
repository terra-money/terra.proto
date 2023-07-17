import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "terramoney.jax.jax";
export interface Store {
    value: string;
}
export declare const Store: {
    encode(message: Store, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Store;
    fromJSON(object: any): Store;
    toJSON(message: Store): unknown;
    fromPartial(object: DeepPartial<Store>): Store;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
