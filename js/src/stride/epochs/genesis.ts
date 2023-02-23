/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "stride.epochs";

export interface EpochInfo {
  identifier: string;
  startTime?: Date;
  duration?: Duration;
  currentEpoch: Long;
  currentEpochStartTime?: Date;
  epochCountingStarted: boolean;
  currentEpochStartHeight: Long;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
}

const baseEpochInfo: object = {
  identifier: "",
  currentEpoch: Long.ZERO,
  epochCountingStarted: false,
  currentEpochStartHeight: Long.ZERO,
};

export const EpochInfo = {
  encode(message: EpochInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (!message.currentEpochStartHeight.isZero()) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochInfo } as EpochInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64() as Long;
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 7:
          message.currentEpochStartHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochInfo {
    const message = { ...baseEpochInfo } as EpochInfo;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = Long.fromString(object.currentEpoch);
    } else {
      message.currentEpoch = Long.ZERO;
    }
    if (object.currentEpochStartTime !== undefined && object.currentEpochStartTime !== null) {
      message.currentEpochStartTime = fromJsonTimestamp(object.currentEpochStartTime);
    } else {
      message.currentEpochStartTime = undefined;
    }
    if (object.epochCountingStarted !== undefined && object.epochCountingStarted !== null) {
      message.epochCountingStarted = Boolean(object.epochCountingStarted);
    } else {
      message.epochCountingStarted = false;
    }
    if (object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null) {
      message.currentEpochStartHeight = Long.fromString(object.currentEpochStartHeight);
    } else {
      message.currentEpochStartHeight = Long.ZERO;
    }
    return message;
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    message.currentEpochStartTime !== undefined &&
      (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
    message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
    message.currentEpochStartHeight !== undefined &&
      (obj.currentEpochStartHeight = (message.currentEpochStartHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EpochInfo>): EpochInfo {
    const message = { ...baseEpochInfo } as EpochInfo;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = object.currentEpoch as Long;
    } else {
      message.currentEpoch = Long.ZERO;
    }
    if (object.currentEpochStartTime !== undefined && object.currentEpochStartTime !== null) {
      message.currentEpochStartTime = object.currentEpochStartTime;
    } else {
      message.currentEpochStartTime = undefined;
    }
    if (object.epochCountingStarted !== undefined && object.epochCountingStarted !== null) {
      message.epochCountingStarted = object.epochCountingStarted;
    } else {
      message.epochCountingStarted = false;
    }
    if (object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null) {
      message.currentEpochStartHeight = object.currentEpochStartHeight as Long;
    } else {
      message.currentEpochStartHeight = Long.ZERO;
    }
    return message;
  },
};

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.epochs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.epochs = [];
    if (object.epochs !== undefined && object.epochs !== null) {
      for (const e of object.epochs) {
        message.epochs.push(EpochInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => (e ? EpochInfo.toJSON(e) : undefined));
    } else {
      obj.epochs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.epochs = [];
    if (object.epochs !== undefined && object.epochs !== null) {
      for (const e of object.epochs) {
        message.epochs.push(EpochInfo.fromPartial(e));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
