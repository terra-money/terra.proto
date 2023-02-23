/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.ratelimit";

export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}

export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;
    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}

export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";
    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";
    default:
      return "UNKNOWN";
  }
}

export interface Path {
  denom: string;
  channelId: string;
}

export interface Quota {
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
}

export interface Flow {
  inflow: string;
  outflow: string;
  channelValue: string;
}

export interface RateLimit {
  path?: Path;
  quota?: Quota;
  flow?: Flow;
}

const basePath: object = { denom: "", channelId: "" };

export const Path = {
  encode(message: Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Path {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePath } as Path;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Path {
    const message = { ...basePath } as Path;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    return message;
  },

  toJSON(message: Path): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<Path>): Path {
    const message = { ...basePath } as Path;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    return message;
  },
};

const baseQuota: object = { maxPercentSend: "", maxPercentRecv: "", durationHours: Long.UZERO };

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuota } as Quota;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPercentSend = reader.string();
          break;
        case 2:
          message.maxPercentRecv = reader.string();
          break;
        case 3:
          message.durationHours = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quota {
    const message = { ...baseQuota } as Quota;
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = String(object.maxPercentSend);
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = String(object.maxPercentRecv);
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = Long.fromString(object.durationHours);
    } else {
      message.durationHours = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    message.maxPercentSend !== undefined && (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined && (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = (message.durationHours || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = { ...baseQuota } as Quota;
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = object.maxPercentSend;
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = object.maxPercentRecv;
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = object.durationHours as Long;
    } else {
      message.durationHours = Long.UZERO;
    }
    return message;
  },
};

const baseFlow: object = { inflow: "", outflow: "", channelValue: "" };

export const Flow = {
  encode(message: Flow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }
    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }
    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFlow } as Flow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflow = reader.string();
          break;
        case 2:
          message.outflow = reader.string();
          break;
        case 3:
          message.channelValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Flow {
    const message = { ...baseFlow } as Flow;
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = String(object.inflow);
    } else {
      message.inflow = "";
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = String(object.outflow);
    } else {
      message.outflow = "";
    }
    if (object.channelValue !== undefined && object.channelValue !== null) {
      message.channelValue = String(object.channelValue);
    } else {
      message.channelValue = "";
    }
    return message;
  },

  toJSON(message: Flow): unknown {
    const obj: any = {};
    message.inflow !== undefined && (obj.inflow = message.inflow);
    message.outflow !== undefined && (obj.outflow = message.outflow);
    message.channelValue !== undefined && (obj.channelValue = message.channelValue);
    return obj;
  },

  fromPartial(object: DeepPartial<Flow>): Flow {
    const message = { ...baseFlow } as Flow;
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = object.inflow;
    } else {
      message.inflow = "";
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = object.outflow;
    } else {
      message.outflow = "";
    }
    if (object.channelValue !== undefined && object.channelValue !== null) {
      message.channelValue = object.channelValue;
    } else {
      message.channelValue = "";
    }
    return message;
  },
};

const baseRateLimit: object = {};

export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRateLimit } as RateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = Path.decode(reader, reader.uint32());
          break;
        case 2:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 3:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RateLimit {
    const message = { ...baseRateLimit } as RateLimit;
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromJSON(object.path);
    } else {
      message.path = undefined;
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromJSON(object.quota);
    } else {
      message.quota = undefined;
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromJSON(object.flow);
    } else {
      message.flow = undefined;
    }
    return message;
  },

  toJSON(message: RateLimit): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path ? Path.toJSON(message.path) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RateLimit>): RateLimit {
    const message = { ...baseRateLimit } as RateLimit;
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromPartial(object.path);
    } else {
      message.path = undefined;
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromPartial(object.quota);
    } else {
      message.quota = undefined;
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromPartial(object.flow);
    } else {
      message.flow = undefined;
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
