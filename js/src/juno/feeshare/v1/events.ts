/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "juno.feeshare.v1";

/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEvent {
  /** Address of the account that will receive the payout */
  withdrawAddress: string;
  /** Amount of the payout */
  feesPaid: Coin[];
}

const baseFeePayoutEvent: object = { withdrawAddress: "" };

export const FeePayoutEvent = {
  encode(message: FeePayoutEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    for (const v of message.feesPaid) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePayoutEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeePayoutEvent } as FeePayoutEvent;
    message.feesPaid = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        case 2:
          message.feesPaid.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeePayoutEvent {
    const message = { ...baseFeePayoutEvent } as FeePayoutEvent;
    message.feesPaid = [];
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = String(object.withdrawAddress);
    } else {
      message.withdrawAddress = "";
    }
    if (object.feesPaid !== undefined && object.feesPaid !== null) {
      for (const e of object.feesPaid) {
        message.feesPaid.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FeePayoutEvent): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    if (message.feesPaid) {
      obj.feesPaid = message.feesPaid.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.feesPaid = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FeePayoutEvent>): FeePayoutEvent {
    const message = { ...baseFeePayoutEvent } as FeePayoutEvent;
    message.feesPaid = [];
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = object.withdrawAddress;
    } else {
      message.withdrawAddress = "";
    }
    if (object.feesPaid !== undefined && object.feesPaid !== null) {
      for (const e of object.feesPaid) {
        message.feesPaid.push(Coin.fromPartial(e));
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
