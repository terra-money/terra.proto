/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.market.v1beta1";

/** Params defines the parameters for the market module. */
export interface Params {
  basePool: Uint8Array;
  poolRecoveryPeriod: Long;
  minStabilitySpread: Uint8Array;
}

const baseParams: object = { poolRecoveryPeriod: Long.UZERO };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basePool.length !== 0) {
      writer.uint32(10).bytes(message.basePool);
    }
    if (!message.poolRecoveryPeriod.isZero()) {
      writer.uint32(16).uint64(message.poolRecoveryPeriod);
    }
    if (message.minStabilitySpread.length !== 0) {
      writer.uint32(26).bytes(message.minStabilitySpread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.basePool = new Uint8Array();
    message.minStabilitySpread = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basePool = reader.bytes();
          break;
        case 2:
          message.poolRecoveryPeriod = reader.uint64() as Long;
          break;
        case 3:
          message.minStabilitySpread = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.basePool = new Uint8Array();
    message.minStabilitySpread = new Uint8Array();
    if (object.basePool !== undefined && object.basePool !== null) {
      message.basePool = bytesFromBase64(object.basePool);
    }
    if (object.poolRecoveryPeriod !== undefined && object.poolRecoveryPeriod !== null) {
      message.poolRecoveryPeriod = Long.fromString(object.poolRecoveryPeriod);
    } else {
      message.poolRecoveryPeriod = Long.UZERO;
    }
    if (object.minStabilitySpread !== undefined && object.minStabilitySpread !== null) {
      message.minStabilitySpread = bytesFromBase64(object.minStabilitySpread);
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.basePool !== undefined &&
      (obj.basePool = base64FromBytes(message.basePool !== undefined ? message.basePool : new Uint8Array()));
    message.poolRecoveryPeriod !== undefined &&
      (obj.poolRecoveryPeriod = (message.poolRecoveryPeriod || Long.UZERO).toString());
    message.minStabilitySpread !== undefined &&
      (obj.minStabilitySpread = base64FromBytes(
        message.minStabilitySpread !== undefined ? message.minStabilitySpread : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.basePool !== undefined && object.basePool !== null) {
      message.basePool = object.basePool;
    } else {
      message.basePool = new Uint8Array();
    }
    if (object.poolRecoveryPeriod !== undefined && object.poolRecoveryPeriod !== null) {
      message.poolRecoveryPeriod = object.poolRecoveryPeriod as Long;
    } else {
      message.poolRecoveryPeriod = Long.UZERO;
    }
    if (object.minStabilitySpread !== undefined && object.minStabilitySpread !== null) {
      message.minStabilitySpread = object.minStabilitySpread;
    } else {
      message.minStabilitySpread = new Uint8Array();
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
