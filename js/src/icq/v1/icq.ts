/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "icq.v1";

/** Params defines the set of on-chain interchain query parameters. */
export interface Params {
  /** host_enabled enables or disables the host submodule. */
  hostEnabled: boolean;
  /** allow_queries defines a list of query paths allowed to be queried on a host chain. */
  allowQueries: string[];
}

const baseParams: object = { hostEnabled: false, allowQueries: "" };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostEnabled === true) {
      writer.uint32(16).bool(message.hostEnabled);
    }
    for (const v of message.allowQueries) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.allowQueries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.hostEnabled = reader.bool();
          break;
        case 3:
          message.allowQueries.push(reader.string());
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
    message.allowQueries = [];
    if (object.hostEnabled !== undefined && object.hostEnabled !== null) {
      message.hostEnabled = Boolean(object.hostEnabled);
    } else {
      message.hostEnabled = false;
    }
    if (object.allowQueries !== undefined && object.allowQueries !== null) {
      for (const e of object.allowQueries) {
        message.allowQueries.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.hostEnabled !== undefined && (obj.hostEnabled = message.hostEnabled);
    if (message.allowQueries) {
      obj.allowQueries = message.allowQueries.map((e) => e);
    } else {
      obj.allowQueries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.allowQueries = [];
    if (object.hostEnabled !== undefined && object.hostEnabled !== null) {
      message.hostEnabled = object.hostEnabled;
    } else {
      message.hostEnabled = false;
    }
    if (object.allowQueries !== undefined && object.allowQueries !== null) {
      for (const e of object.allowQueries) {
        message.allowQueries.push(e);
      }
    }
    return message;
  },
};

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
