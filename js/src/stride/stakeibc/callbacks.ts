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

function createBaseSplitDelegation(): SplitDelegation {
  return { validator: "", amount: Long.UZERO };
}

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
    const message = createBaseSplitDelegation();
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
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
    };
  },

  toJSON(message: SplitDelegation): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<SplitDelegation>, I>>(base?: I): SplitDelegation {
    return SplitDelegation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SplitDelegation>, I>>(object: I): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validator = object.validator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
    return message;
  },
};

function createBaseDelegateCallback(): DelegateCallback {
  return { hostZoneId: "", depositRecordId: Long.UZERO, splitDelegations: [] };
}

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
    const message = createBaseDelegateCallback();
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
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      depositRecordId: isSet(object.depositRecordId) ? Long.fromValue(object.depositRecordId) : Long.UZERO,
      splitDelegations: Array.isArray(object?.splitDelegations)
        ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.depositRecordId !== undefined && (obj.depositRecordId = (message.depositRecordId || Long.UZERO).toString());
    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map((e) => e ? SplitDelegation.toJSON(e) : undefined);
    } else {
      obj.splitDelegations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelegateCallback>, I>>(base?: I): DelegateCallback {
    return DelegateCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DelegateCallback>, I>>(object: I): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = (object.depositRecordId !== undefined && object.depositRecordId !== null)
      ? Long.fromValue(object.depositRecordId)
      : Long.UZERO;
    message.splitDelegations = object.splitDelegations?.map((e) => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClaimCallback(): ClaimCallback {
  return { userRedemptionRecordId: "", chainId: "", epochNumber: Long.UZERO };
}

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
    const message = createBaseClaimCallback();
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
    return {
      userRedemptionRecordId: isSet(object.userRedemptionRecordId) ? String(object.userRedemptionRecordId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
    };
  },

  toJSON(message: ClaimCallback): unknown {
    const obj: any = {};
    message.userRedemptionRecordId !== undefined && (obj.userRedemptionRecordId = message.userRedemptionRecordId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<ClaimCallback>, I>>(base?: I): ClaimCallback {
    return ClaimCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClaimCallback>, I>>(object: I): ClaimCallback {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = (object.epochNumber !== undefined && object.epochNumber !== null)
      ? Long.fromValue(object.epochNumber)
      : Long.UZERO;
    return message;
  },
};

function createBaseReinvestCallback(): ReinvestCallback {
  return { reinvestAmount: undefined, hostZoneId: "" };
}

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
    const message = createBaseReinvestCallback();
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
    return {
      reinvestAmount: isSet(object.reinvestAmount) ? Coin.fromJSON(object.reinvestAmount) : undefined,
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
    };
  },

  toJSON(message: ReinvestCallback): unknown {
    const obj: any = {};
    message.reinvestAmount !== undefined &&
      (obj.reinvestAmount = message.reinvestAmount ? Coin.toJSON(message.reinvestAmount) : undefined);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReinvestCallback>, I>>(base?: I): ReinvestCallback {
    return ReinvestCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReinvestCallback>, I>>(object: I): ReinvestCallback {
    const message = createBaseReinvestCallback();
    message.reinvestAmount = (object.reinvestAmount !== undefined && object.reinvestAmount !== null)
      ? Coin.fromPartial(object.reinvestAmount)
      : undefined;
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
};

function createBaseUndelegateCallback(): UndelegateCallback {
  return { hostZoneId: "", splitDelegations: [], epochUnbondingRecordIds: [] };
}

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
    const message = createBaseUndelegateCallback();
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
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      splitDelegations: Array.isArray(object?.splitDelegations)
        ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e))
        : [],
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds)
        ? object.epochUnbondingRecordIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: UndelegateCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    if (message.splitDelegations) {
      obj.splitDelegations = message.splitDelegations.map((e) => e ? SplitDelegation.toJSON(e) : undefined);
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

  create<I extends Exact<DeepPartial<UndelegateCallback>, I>>(base?: I): UndelegateCallback {
    return UndelegateCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UndelegateCallback>, I>>(object: I): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitDelegations = object.splitDelegations?.map((e) => SplitDelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseRedemptionCallback(): RedemptionCallback {
  return { hostZoneId: "", epochUnbondingRecordIds: [] };
}

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
    const message = createBaseRedemptionCallback();
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
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epochUnbondingRecordIds: Array.isArray(object?.epochUnbondingRecordIds)
        ? object.epochUnbondingRecordIds.map((e: any) => Long.fromValue(e))
        : [],
    };
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

  create<I extends Exact<DeepPartial<RedemptionCallback>, I>>(base?: I): RedemptionCallback {
    return RedemptionCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RedemptionCallback>, I>>(object: I): RedemptionCallback {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseRebalancing(): Rebalancing {
  return { srcValidator: "", dstValidator: "", amt: Long.UZERO };
}

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
    const message = createBaseRebalancing();
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
    return {
      srcValidator: isSet(object.srcValidator) ? String(object.srcValidator) : "",
      dstValidator: isSet(object.dstValidator) ? String(object.dstValidator) : "",
      amt: isSet(object.amt) ? Long.fromValue(object.amt) : Long.UZERO,
    };
  },

  toJSON(message: Rebalancing): unknown {
    const obj: any = {};
    message.srcValidator !== undefined && (obj.srcValidator = message.srcValidator);
    message.dstValidator !== undefined && (obj.dstValidator = message.dstValidator);
    message.amt !== undefined && (obj.amt = (message.amt || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Rebalancing>, I>>(base?: I): Rebalancing {
    return Rebalancing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Rebalancing>, I>>(object: I): Rebalancing {
    const message = createBaseRebalancing();
    message.srcValidator = object.srcValidator ?? "";
    message.dstValidator = object.dstValidator ?? "";
    message.amt = (object.amt !== undefined && object.amt !== null) ? Long.fromValue(object.amt) : Long.UZERO;
    return message;
  },
};

function createBaseRebalanceCallback(): RebalanceCallback {
  return { hostZoneId: "", rebalancings: [] };
}

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
    const message = createBaseRebalanceCallback();
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
    return {
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      rebalancings: Array.isArray(object?.rebalancings)
        ? object.rebalancings.map((e: any) => Rebalancing.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RebalanceCallback): unknown {
    const obj: any = {};
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    if (message.rebalancings) {
      obj.rebalancings = message.rebalancings.map((e) => e ? Rebalancing.toJSON(e) : undefined);
    } else {
      obj.rebalancings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RebalanceCallback>, I>>(base?: I): RebalanceCallback {
    return RebalanceCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RebalanceCallback>, I>>(object: I): RebalanceCallback {
    const message = createBaseRebalanceCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.rebalancings = object.rebalancings?.map((e) => Rebalancing.fromPartial(e)) || [];
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
