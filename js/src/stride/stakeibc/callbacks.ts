/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "stride.stakeibc";

/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
  validator: string;
  amount: Long;
}

export interface DelegateCallback {
  hostZoneId: string;
  depositRecordId: Long;
  splitDelegations: SplitDelegation[];
}

export interface ClaimCallback {
  userRedemptionRecordId: string;
  chainId: string;
  epochNumber: Long;
}

/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
  reinvestAmount?: Coin;
  hostZoneId: string;
}

/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
  hostZoneId: string;
  splitDelegations: SplitDelegation[];
  epochUnbondingRecordIds: Long[];
}

/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
  hostZoneId: string;
  epochUnbondingRecordIds: Long[];
}

export interface Rebalancing {
  srcValidator: string;
  dstValidator: string;
  amt: Long;
}

export interface RebalanceCallback {
  hostZoneId: string;
  rebalancings: Rebalancing[];
}

const baseSplitDelegation: object = { validator: "", amount: Long.UZERO };

export const SplitDelegation = {
  encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSplitDelegation } as SplitDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SplitDelegation {
    const message = { ...baseSplitDelegation } as SplitDelegation;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    } else {
      message.amount = Long.UZERO;
    }
    return message;
  },

  toJSON(message: SplitDelegation): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation {
    const message = { ...baseSplitDelegation } as SplitDelegation;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount as Long;
    } else {
      message.amount = Long.UZERO;
    }
    return message;
  },
};

const baseDelegateCallback: object = { hostZoneId: "", depositRecordId: Long.UZERO };

export const DelegateCallback = {
  encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    if (!message.depositRecordId.isZero()) {
      writer.uint32(16).uint64(message.depositRecordId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegateCallback } as DelegateCallback;
    message.splitDelegations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.depositRecordId = reader.uint64() as Long;
          break;
        case 3:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateCallback {
    const message = { ...baseDelegateCallback } as DelegateCallback;
    message.splitDelegations = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.depositRecordId !== undefined && object.depositRecordId !== null) {
      message.depositRecordId = Long.fromString(object.depositRecordId);
    } else {
      message.depositRecordId = Long.UZERO;
    }
    if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
      for (const e of object.splitDelegations) {
        message.splitDelegations.push(SplitDelegation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: DelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.depositRecordId !== undefined &&
      (obj.depositRecordId = (message.depositRecordId || Long.UZERO).toString());
    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map((e) => (e ? SplitDelegation.toJSON(e) : undefined));
    } else {
      obj.splitDelegations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback {
    const message = { ...baseDelegateCallback } as DelegateCallback;
    message.splitDelegations = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.depositRecordId !== undefined && object.depositRecordId !== null) {
      message.depositRecordId = object.depositRecordId as Long;
    } else {
      message.depositRecordId = Long.UZERO;
    }
    if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
      for (const e of object.splitDelegations) {
        message.splitDelegations.push(SplitDelegation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseClaimCallback: object = { userRedemptionRecordId: "", chainId: "", epochNumber: Long.UZERO };

export const ClaimCallback = {
  encode(message: ClaimCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimCallback } as ClaimCallback;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecordId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.epochNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimCallback {
    const message = { ...baseClaimCallback } as ClaimCallback;
    if (object.userRedemptionRecordId !== undefined && object.userRedemptionRecordId !== null) {
      message.userRedemptionRecordId = String(object.userRedemptionRecordId);
    } else {
      message.userRedemptionRecordId = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },

  toJSON(message: ClaimCallback): unknown {
    const obj: any = {};
    message.userRedemptionRecordId !== undefined &&
      (obj.userRedemptionRecordId = message.userRedemptionRecordId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimCallback>): ClaimCallback {
    const message = { ...baseClaimCallback } as ClaimCallback;
    if (object.userRedemptionRecordId !== undefined && object.userRedemptionRecordId !== null) {
      message.userRedemptionRecordId = object.userRedemptionRecordId;
    } else {
      message.userRedemptionRecordId = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },
};

const baseReinvestCallback: object = { hostZoneId: "" };

export const ReinvestCallback = {
  encode(message: ReinvestCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reinvestAmount !== undefined) {
      Coin.encode(message.reinvestAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZoneId !== "") {
      writer.uint32(26).string(message.hostZoneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReinvestCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReinvestCallback } as ReinvestCallback;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reinvestAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReinvestCallback {
    const message = { ...baseReinvestCallback } as ReinvestCallback;
    if (object.reinvestAmount !== undefined && object.reinvestAmount !== null) {
      message.reinvestAmount = Coin.fromJSON(object.reinvestAmount);
    } else {
      message.reinvestAmount = undefined;
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    return message;
  },

  toJSON(message: ReinvestCallback): unknown {
    const obj: any = {};
    message.reinvestAmount !== undefined &&
      (obj.reinvestAmount = message.reinvestAmount ? Coin.toJSON(message.reinvestAmount) : undefined);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    return obj;
  },

  fromPartial(object: DeepPartial<ReinvestCallback>): ReinvestCallback {
    const message = { ...baseReinvestCallback } as ReinvestCallback;
    if (object.reinvestAmount !== undefined && object.reinvestAmount !== null) {
      message.reinvestAmount = Coin.fromPartial(object.reinvestAmount);
    } else {
      message.reinvestAmount = undefined;
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    return message;
  },
};

const baseUndelegateCallback: object = { hostZoneId: "", epochUnbondingRecordIds: Long.UZERO };

export const UndelegateCallback = {
  encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUndelegateCallback } as UndelegateCallback;
    message.splitDelegations = [];
    message.epochUnbondingRecordIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push(reader.uint64() as Long);
            }
          } else {
            message.epochUnbondingRecordIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegateCallback {
    const message = { ...baseUndelegateCallback } as UndelegateCallback;
    message.splitDelegations = [];
    message.epochUnbondingRecordIds = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
      for (const e of object.splitDelegations) {
        message.splitDelegations.push(SplitDelegation.fromJSON(e));
      }
    }
    if (object.epochUnbondingRecordIds !== undefined && object.epochUnbondingRecordIds !== null) {
      for (const e of object.epochUnbondingRecordIds) {
        message.epochUnbondingRecordIds.push(Long.fromString(e));
      }
    }
    return message;
  },

  toJSON(message: UndelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map((e) => (e ? SplitDelegation.toJSON(e) : undefined));
    } else {
      obj.splitDelegations = [];
    }
    if (message.epochUnbondingRecordIds) {
      obj.epochUnbondingRecordIds = message.epochUnbondingRecordIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.epochUnbondingRecordIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback {
    const message = { ...baseUndelegateCallback } as UndelegateCallback;
    message.splitDelegations = [];
    message.epochUnbondingRecordIds = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
      for (const e of object.splitDelegations) {
        message.splitDelegations.push(SplitDelegation.fromPartial(e));
      }
    }
    if (object.epochUnbondingRecordIds !== undefined && object.epochUnbondingRecordIds !== null) {
      for (const e of object.epochUnbondingRecordIds) {
        message.epochUnbondingRecordIds.push(e);
      }
    }
    return message;
  },
};

const baseRedemptionCallback: object = { hostZoneId: "", epochUnbondingRecordIds: Long.UZERO };

export const RedemptionCallback = {
  encode(message: RedemptionCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    writer.uint32(18).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedemptionCallback } as RedemptionCallback;
    message.epochUnbondingRecordIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push(reader.uint64() as Long);
            }
          } else {
            message.epochUnbondingRecordIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedemptionCallback {
    const message = { ...baseRedemptionCallback } as RedemptionCallback;
    message.epochUnbondingRecordIds = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.epochUnbondingRecordIds !== undefined && object.epochUnbondingRecordIds !== null) {
      for (const e of object.epochUnbondingRecordIds) {
        message.epochUnbondingRecordIds.push(Long.fromString(e));
      }
    }
    return message;
  },

  toJSON(message: RedemptionCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    if (message.epochUnbondingRecordIds) {
      obj.epochUnbondingRecordIds = message.epochUnbondingRecordIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.epochUnbondingRecordIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RedemptionCallback>): RedemptionCallback {
    const message = { ...baseRedemptionCallback } as RedemptionCallback;
    message.epochUnbondingRecordIds = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.epochUnbondingRecordIds !== undefined && object.epochUnbondingRecordIds !== null) {
      for (const e of object.epochUnbondingRecordIds) {
        message.epochUnbondingRecordIds.push(e);
      }
    }
    return message;
  },
};

const baseRebalancing: object = { srcValidator: "", dstValidator: "", amt: Long.UZERO };

export const Rebalancing = {
  encode(message: Rebalancing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcValidator !== "") {
      writer.uint32(10).string(message.srcValidator);
    }
    if (message.dstValidator !== "") {
      writer.uint32(18).string(message.dstValidator);
    }
    if (!message.amt.isZero()) {
      writer.uint32(24).uint64(message.amt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rebalancing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRebalancing } as Rebalancing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcValidator = reader.string();
          break;
        case 2:
          message.dstValidator = reader.string();
          break;
        case 3:
          message.amt = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rebalancing {
    const message = { ...baseRebalancing } as Rebalancing;
    if (object.srcValidator !== undefined && object.srcValidator !== null) {
      message.srcValidator = String(object.srcValidator);
    } else {
      message.srcValidator = "";
    }
    if (object.dstValidator !== undefined && object.dstValidator !== null) {
      message.dstValidator = String(object.dstValidator);
    } else {
      message.dstValidator = "";
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = Long.fromString(object.amt);
    } else {
      message.amt = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Rebalancing): unknown {
    const obj: any = {};
    message.srcValidator !== undefined && (obj.srcValidator = message.srcValidator);
    message.dstValidator !== undefined && (obj.dstValidator = message.dstValidator);
    message.amt !== undefined && (obj.amt = (message.amt || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Rebalancing>): Rebalancing {
    const message = { ...baseRebalancing } as Rebalancing;
    if (object.srcValidator !== undefined && object.srcValidator !== null) {
      message.srcValidator = object.srcValidator;
    } else {
      message.srcValidator = "";
    }
    if (object.dstValidator !== undefined && object.dstValidator !== null) {
      message.dstValidator = object.dstValidator;
    } else {
      message.dstValidator = "";
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = object.amt as Long;
    } else {
      message.amt = Long.UZERO;
    }
    return message;
  },
};

const baseRebalanceCallback: object = { hostZoneId: "" };

export const RebalanceCallback = {
  encode(message: RebalanceCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.rebalancings) {
      Rebalancing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RebalanceCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRebalanceCallback } as RebalanceCallback;
    message.rebalancings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.rebalancings.push(Rebalancing.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RebalanceCallback {
    const message = { ...baseRebalanceCallback } as RebalanceCallback;
    message.rebalancings = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.rebalancings !== undefined && object.rebalancings !== null) {
      for (const e of object.rebalancings) {
        message.rebalancings.push(Rebalancing.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RebalanceCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    if (message.rebalancings) {
      obj.rebalancings = message.rebalancings.map((e) => (e ? Rebalancing.toJSON(e) : undefined));
    } else {
      obj.rebalancings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RebalanceCallback>): RebalanceCallback {
    const message = { ...baseRebalanceCallback } as RebalanceCallback;
    message.rebalancings = [];
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.rebalancings !== undefined && object.rebalancings !== null) {
      for (const e of object.rebalancings) {
        message.rebalancings.push(Rebalancing.fromPartial(e));
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
