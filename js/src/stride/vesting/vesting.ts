/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../cosmos/auth/v1beta1/auth";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "stride.vesting";

/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: Long;
}

/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  startTime: Long;
  length: Long;
  amount: Coin[];
  actionType: number;
}

/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestingPeriods: Period[];
}

function createBaseBaseVestingAccount(): BaseVestingAccount {
  return { baseAccount: undefined, originalVesting: [], delegatedFree: [], delegatedVesting: [], endTime: Long.ZERO };
}

export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseVestingAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      originalVesting: Array.isArray(object?.originalVesting)
        ? object.originalVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      delegatedFree: Array.isArray(object?.delegatedFree) ? object.delegatedFree.map((e: any) => Coin.fromJSON(e)) : [],
      delegatedVesting: Array.isArray(object?.delegatedVesting)
        ? object.delegatedVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
    };
  },

  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(base?: I): BaseVestingAccount {
    return BaseVestingAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(object: I): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount = (object.baseAccount !== undefined && object.baseAccount !== null)
      ? BaseAccount.fromPartial(object.baseAccount)
      : undefined;
    message.originalVesting = object.originalVesting?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map((e) => Coin.fromPartial(e)) || [];
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? Long.fromValue(object.endTime)
      : Long.ZERO;
    return message;
  },
};

function createBasePeriod(): Period {
  return { startTime: Long.ZERO, length: Long.ZERO, amount: [], actionType: 0 };
}

export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startTime.isZero()) {
      writer.uint32(8).int64(message.startTime);
    }
    if (!message.length.isZero()) {
      writer.uint32(16).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int64() as Long;
          break;
        case 2:
          message.length = reader.int64() as Long;
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Period {
    return {
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      length: isSet(object.length) ? Long.fromValue(object.length) : Long.ZERO,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      actionType: isSet(object.actionType) ? Number(object.actionType) : 0,
    };
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    message.length !== undefined && (obj.length = (message.length || Long.ZERO).toString());
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.actionType !== undefined && (obj.actionType = Math.round(message.actionType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Period>, I>>(base?: I): Period {
    return Period.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
    const message = createBasePeriod();
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? Long.fromValue(object.startTime)
      : Long.ZERO;
    message.length = (object.length !== undefined && object.length !== null)
      ? Long.fromValue(object.length)
      : Long.ZERO;
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.actionType = object.actionType ?? 0;
    return message;
  },
};

function createBaseStridePeriodicVestingAccount(): StridePeriodicVestingAccount {
  return { baseVestingAccount: undefined, vestingPeriods: [] };
}

export const StridePeriodicVestingAccount = {
  encode(message: StridePeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StridePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStridePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StridePeriodicVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      vestingPeriods: Array.isArray(object?.vestingPeriods)
        ? object.vestingPeriods.map((e: any) => Period.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StridePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount
      ? BaseVestingAccount.toJSON(message.baseVestingAccount)
      : undefined);
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StridePeriodicVestingAccount>, I>>(base?: I): StridePeriodicVestingAccount {
    return StridePeriodicVestingAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StridePeriodicVestingAccount>, I>>(object: I): StridePeriodicVestingAccount {
    const message = createBaseStridePeriodicVestingAccount();
    message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
      ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
      : undefined;
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
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