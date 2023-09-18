/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.tokenfactory.v1beta1";

/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   *
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume: Long;
}

const baseParams: object = { denomCreationGasConsume: Long.UZERO };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.denomCreationGasConsume.isZero()) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.denomCreationFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64() as Long;
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
    message.denomCreationFee = [];
    if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
      for (const e of object.denomCreationFee) {
        message.denomCreationFee.push(Coin.fromJSON(e));
      }
    }
    if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
      message.denomCreationGasConsume = Long.fromString(object.denomCreationGasConsume);
    } else {
      message.denomCreationGasConsume = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.denomCreationFee = [];
    }
    message.denomCreationGasConsume !== undefined &&
      (obj.denomCreationGasConsume = (message.denomCreationGasConsume || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.denomCreationFee = [];
    if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
      for (const e of object.denomCreationFee) {
        message.denomCreationFee.push(Coin.fromPartial(e));
      }
    }
    if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
      message.denomCreationGasConsume = object.denomCreationGasConsume as Long;
    } else {
      message.denomCreationGasConsume = Long.UZERO;
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
