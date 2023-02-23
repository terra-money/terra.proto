/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "stride.claim";

/** Params defines the claim module's parameters. */
export interface Params {
  airdrops: Airdrop[];
}

export interface Airdrop {
  airdropIdentifier: string;
  /** seconds */
  airdropStartTime?: Date;
  /** seconds */
  airdropDuration?: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** airdrop distribution account */
  distributorAddress: string;
  /** ustrd tokens claimed so far in the current period */
  claimedSoFar: Long;
}

const baseParams: object = {};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.airdrops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
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
    message.airdrops = [];
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => (e ? Airdrop.toJSON(e) : undefined));
    } else {
      obj.airdrops = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.airdrops = [];
    if (object.airdrops !== undefined && object.airdrops !== null) {
      for (const e of object.airdrops) {
        message.airdrops.push(Airdrop.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAirdrop: object = {
  airdropIdentifier: "",
  claimDenom: "",
  distributorAddress: "",
  claimedSoFar: Long.ZERO,
};

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.airdropDuration !== undefined) {
      Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(42).string(message.distributorAddress);
    }
    if (!message.claimedSoFar.isZero()) {
      writer.uint32(48).int64(message.claimedSoFar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAirdrop } as Airdrop;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.airdropDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimDenom = reader.string();
          break;
        case 5:
          message.distributorAddress = reader.string();
          break;
        case 6:
          message.claimedSoFar = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Airdrop {
    const message = { ...baseAirdrop } as Airdrop;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    if (object.airdropStartTime !== undefined && object.airdropStartTime !== null) {
      message.airdropStartTime = fromJsonTimestamp(object.airdropStartTime);
    } else {
      message.airdropStartTime = undefined;
    }
    if (object.airdropDuration !== undefined && object.airdropDuration !== null) {
      message.airdropDuration = Duration.fromJSON(object.airdropDuration);
    } else {
      message.airdropDuration = undefined;
    }
    if (object.claimDenom !== undefined && object.claimDenom !== null) {
      message.claimDenom = String(object.claimDenom);
    } else {
      message.claimDenom = "";
    }
    if (object.distributorAddress !== undefined && object.distributorAddress !== null) {
      message.distributorAddress = String(object.distributorAddress);
    } else {
      message.distributorAddress = "";
    }
    if (object.claimedSoFar !== undefined && object.claimedSoFar !== null) {
      message.claimedSoFar = Long.fromString(object.claimedSoFar);
    } else {
      message.claimedSoFar = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Airdrop): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.airdropDuration !== undefined &&
      (obj.airdropDuration = message.airdropDuration ? Duration.toJSON(message.airdropDuration) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    message.distributorAddress !== undefined && (obj.distributorAddress = message.distributorAddress);
    message.claimedSoFar !== undefined && (obj.claimedSoFar = (message.claimedSoFar || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Airdrop>): Airdrop {
    const message = { ...baseAirdrop } as Airdrop;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    if (object.airdropStartTime !== undefined && object.airdropStartTime !== null) {
      message.airdropStartTime = object.airdropStartTime;
    } else {
      message.airdropStartTime = undefined;
    }
    if (object.airdropDuration !== undefined && object.airdropDuration !== null) {
      message.airdropDuration = Duration.fromPartial(object.airdropDuration);
    } else {
      message.airdropDuration = undefined;
    }
    if (object.claimDenom !== undefined && object.claimDenom !== null) {
      message.claimDenom = object.claimDenom;
    } else {
      message.claimDenom = "";
    }
    if (object.distributorAddress !== undefined && object.distributorAddress !== null) {
      message.distributorAddress = object.distributorAddress;
    } else {
      message.distributorAddress = "";
    }
    if (object.claimedSoFar !== undefined && object.claimedSoFar !== null) {
      message.claimedSoFar = object.claimedSoFar as Long;
    } else {
      message.claimedSoFar = Long.ZERO;
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
