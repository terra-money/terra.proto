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

const baseEpochTracker: object = {
  epochIdentifier: "",
  epochNumber: Long.UZERO,
  nextEpochStartTime: Long.UZERO,
  duration: Long.UZERO,
};

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
    const message = { ...baseEpochTracker } as EpochTracker;
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
    const message = { ...baseEpochTracker } as EpochTracker;
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = String(object.epochIdentifier);
    } else {
      message.epochIdentifier = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null) {
      message.nextEpochStartTime = Long.fromString(object.nextEpochStartTime);
    } else {
      message.nextEpochStartTime = Long.UZERO;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Long.fromString(object.duration);
    } else {
      message.duration = Long.UZERO;
    }
    return message;
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

  fromPartial(object: DeepPartial<EpochTracker>): EpochTracker {
    const message = { ...baseEpochTracker } as EpochTracker;
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = object.epochIdentifier;
    } else {
      message.epochIdentifier = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null) {
      message.nextEpochStartTime = object.nextEpochStartTime as Long;
    } else {
      message.nextEpochStartTime = Long.UZERO;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration as Long;
    } else {
      message.duration = Long.UZERO;
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
