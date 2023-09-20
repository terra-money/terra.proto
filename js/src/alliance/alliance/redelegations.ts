/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

/** Used internally to keep track of redelegations */
export interface QueuedRedelegation {
  entries: Redelegation[];
}

export interface Redelegation {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance?: Coin;
}

/** Used on QueryServer */
export interface RedelegationEntry {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance?: Coin;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime?: Date;
}

const baseQueuedRedelegation: object = {};

export const QueuedRedelegation = {
  encode(message: QueuedRedelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      Redelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedRedelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueuedRedelegation } as QueuedRedelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Redelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedRedelegation {
    const message = { ...baseQueuedRedelegation } as QueuedRedelegation;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Redelegation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueuedRedelegation): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? Redelegation.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueuedRedelegation>): QueuedRedelegation {
    const message = { ...baseQueuedRedelegation } as QueuedRedelegation;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Redelegation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRedelegation: object = { delegatorAddress: "", srcValidatorAddress: "", dstValidatorAddress: "" };

export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegation } as Redelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.srcValidatorAddress = reader.string();
          break;
        case 3:
          message.dstValidatorAddress = reader.string();
          break;
        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.srcValidatorAddress !== undefined && object.srcValidatorAddress !== null) {
      message.srcValidatorAddress = String(object.srcValidatorAddress);
    } else {
      message.srcValidatorAddress = "";
    }
    if (object.dstValidatorAddress !== undefined && object.dstValidatorAddress !== null) {
      message.dstValidatorAddress = String(object.dstValidatorAddress);
    } else {
      message.dstValidatorAddress = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.srcValidatorAddress !== undefined && object.srcValidatorAddress !== null) {
      message.srcValidatorAddress = object.srcValidatorAddress;
    } else {
      message.srcValidatorAddress = "";
    }
    if (object.dstValidatorAddress !== undefined && object.dstValidatorAddress !== null) {
      message.dstValidatorAddress = object.dstValidatorAddress;
    } else {
      message.dstValidatorAddress = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
};

const baseRedelegationEntry: object = {
  delegatorAddress: "",
  srcValidatorAddress: "",
  dstValidatorAddress: "",
};

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.srcValidatorAddress = reader.string();
          break;
        case 3:
          message.dstValidatorAddress = reader.string();
          break;
        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.srcValidatorAddress !== undefined && object.srcValidatorAddress !== null) {
      message.srcValidatorAddress = String(object.srcValidatorAddress);
    } else {
      message.srcValidatorAddress = "";
    }
    if (object.dstValidatorAddress !== undefined && object.dstValidatorAddress !== null) {
      message.dstValidatorAddress = String(object.dstValidatorAddress);
    } else {
      message.dstValidatorAddress = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime);
    } else {
      message.completionTime = undefined;
    }
    return message;
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.srcValidatorAddress !== undefined && object.srcValidatorAddress !== null) {
      message.srcValidatorAddress = object.srcValidatorAddress;
    } else {
      message.srcValidatorAddress = "";
    }
    if (object.dstValidatorAddress !== undefined && object.dstValidatorAddress !== null) {
      message.dstValidatorAddress = object.dstValidatorAddress;
    } else {
      message.dstValidatorAddress = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime;
    } else {
      message.completionTime = undefined;
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
