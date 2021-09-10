/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.vesting.v1beta1";

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

const baseBaseVestingAccount: object = { endTime: Long.ZERO };

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
    const message = { ...baseBaseVestingAccount } as BaseVestingAccount;
    message.originalVesting = [];
    message.delegatedFree = [];
    message.delegatedVesting = [];
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
    const message = { ...baseBaseVestingAccount } as BaseVestingAccount;
    message.originalVesting = [];
    message.delegatedFree = [];
    message.delegatedVesting = [];
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    } else {
      message.baseAccount = undefined;
    }
    if (object.originalVesting !== undefined && object.originalVesting !== null) {
      for (const e of object.originalVesting) {
        message.originalVesting.push(Coin.fromJSON(e));
      }
    }
    if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
      for (const e of object.delegatedFree) {
        message.delegatedFree.push(Coin.fromJSON(e));
      }
    }
    if (object.delegatedVesting !== undefined && object.delegatedVesting !== null) {
      for (const e of object.delegatedVesting) {
        message.delegatedVesting.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Long.fromString(object.endTime);
    } else {
      message.endTime = Long.ZERO;
    }
    return message;
  },

  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount {
    const message = { ...baseBaseVestingAccount } as BaseVestingAccount;
    message.originalVesting = [];
    message.delegatedFree = [];
    message.delegatedVesting = [];
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    } else {
      message.baseAccount = undefined;
    }
    if (object.originalVesting !== undefined && object.originalVesting !== null) {
      for (const e of object.originalVesting) {
        message.originalVesting.push(Coin.fromPartial(e));
      }
    }
    if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
      for (const e of object.delegatedFree) {
        message.delegatedFree.push(Coin.fromPartial(e));
      }
    }
    if (object.delegatedVesting !== undefined && object.delegatedVesting !== null) {
      for (const e of object.delegatedVesting) {
        message.delegatedVesting.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime as Long;
    } else {
      message.endTime = Long.ZERO;
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
