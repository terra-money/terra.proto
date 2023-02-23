/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.stakeibc";

export interface EpochTracker {
  epochIdentifier: string;
  epochNumber: Long;
  nextEpochStartTime: Long;
  duration: Long;
}

function createBaseEpochTracker(): EpochTracker {
  return { epochIdentifier: "", epochNumber: Long.UZERO, nextEpochStartTime: Long.UZERO, duration: Long.UZERO };
}

export const EpochTracker = {
  encode(message: EpochTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (!message.nextEpochStartTime.isZero()) {
      writer.uint32(24).uint64(message.nextEpochStartTime);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        case 2:
          message.epochNumber = reader.uint64() as Long;
          break;
        case 3:
          message.nextEpochStartTime = reader.uint64() as Long;
          break;
        case 4:
          message.duration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochTracker {
    return {
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
      nextEpochStartTime: isSet(object.nextEpochStartTime) ? Long.fromValue(object.nextEpochStartTime) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
    };
  },

  toJSON(message: EpochTracker): unknown {
    const obj: any = {};
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    message.nextEpochStartTime !== undefined &&
      (obj.nextEpochStartTime = (message.nextEpochStartTime || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<EpochTracker>, I>>(base?: I): EpochTracker {
    return EpochTracker.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EpochTracker>, I>>(object: I): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = (object.epochNumber !== undefined && object.epochNumber !== null)
      ? Long.fromValue(object.epochNumber)
      : Long.UZERO;
    message.nextEpochStartTime = (object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null)
      ? Long.fromValue(object.nextEpochStartTime)
      : Long.UZERO;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.UZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
