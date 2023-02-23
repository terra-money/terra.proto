/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.ratelimit";

export interface AddRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}

export interface UpdateRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}

export interface RemoveRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}

export interface ResetRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}

const baseAddRateLimitProposal: object = {
  title: "",
  description: "",
  denom: "",
  channelId: "",
  maxPercentSend: "",
  maxPercentRecv: "",
  durationHours: Long.UZERO,
  deposit: "",
};

export const AddRateLimitProposal = {
  encode(message: AddRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddRateLimitProposal } as AddRateLimitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        case 5:
          message.maxPercentSend = reader.string();
          break;
        case 6:
          message.maxPercentRecv = reader.string();
          break;
        case 7:
          message.durationHours = reader.uint64() as Long;
          break;
        case 8:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddRateLimitProposal {
    const message = { ...baseAddRateLimitProposal } as AddRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = String(object.deposit);
    } else {
      message.deposit = "";
    }
    return message;
  },

  toJSON(message: AddRateLimitProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.maxPercentSend !== undefined && (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined && (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = (message.durationHours || Long.UZERO).toString());
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<AddRateLimitProposal>): AddRateLimitProposal {
    const message = { ...baseAddRateLimitProposal } as AddRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    } else {
      message.deposit = "";
    }
    return message;
  },
};

const baseUpdateRateLimitProposal: object = {
  title: "",
  description: "",
  denom: "",
  channelId: "",
  maxPercentSend: "",
  maxPercentRecv: "",
  durationHours: Long.UZERO,
  deposit: "",
};

export const UpdateRateLimitProposal = {
  encode(message: UpdateRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateRateLimitProposal } as UpdateRateLimitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        case 5:
          message.maxPercentSend = reader.string();
          break;
        case 6:
          message.maxPercentRecv = reader.string();
          break;
        case 7:
          message.durationHours = reader.uint64() as Long;
          break;
        case 8:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRateLimitProposal {
    const message = { ...baseUpdateRateLimitProposal } as UpdateRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = String(object.deposit);
    } else {
      message.deposit = "";
    }
    return message;
  },

  toJSON(message: UpdateRateLimitProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.maxPercentSend !== undefined && (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined && (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = (message.durationHours || Long.UZERO).toString());
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateRateLimitProposal>): UpdateRateLimitProposal {
    const message = { ...baseUpdateRateLimitProposal } as UpdateRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    } else {
      message.deposit = "";
    }
    return message;
  },
};

const baseRemoveRateLimitProposal: object = {
  title: "",
  description: "",
  denom: "",
  channelId: "",
  deposit: "",
};

export const RemoveRateLimitProposal = {
  encode(message: RemoveRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveRateLimitProposal } as RemoveRateLimitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveRateLimitProposal {
    const message = { ...baseRemoveRateLimitProposal } as RemoveRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = String(object.deposit);
    } else {
      message.deposit = "";
    }
    return message;
  },

  toJSON(message: RemoveRateLimitProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveRateLimitProposal>): RemoveRateLimitProposal {
    const message = { ...baseRemoveRateLimitProposal } as RemoveRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    } else {
      message.deposit = "";
    }
    return message;
  },
};

const baseResetRateLimitProposal: object = {
  title: "",
  description: "",
  denom: "",
  channelId: "",
  deposit: "",
};

export const ResetRateLimitProposal = {
  encode(message: ResetRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResetRateLimitProposal } as ResetRateLimitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResetRateLimitProposal {
    const message = { ...baseResetRateLimitProposal } as ResetRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = String(object.deposit);
    } else {
      message.deposit = "";
    }
    return message;
  },

  toJSON(message: ResetRateLimitProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<ResetRateLimitProposal>): ResetRateLimitProposal {
    const message = { ...baseResetRateLimitProposal } as ResetRateLimitProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    } else {
      message.deposit = "";
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
