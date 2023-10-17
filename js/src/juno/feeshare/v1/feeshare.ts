/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "juno.feeshare.v1";

/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShare {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */
  withdrawerAddress: string;
}

const baseFeeShare: object = { contractAddress: "", deployerAddress: "", withdrawerAddress: "" };

export const FeeShare = {
  encode(message: FeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeShare } as FeeShare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeShare {
    const message = { ...baseFeeShare } as FeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = String(object.deployerAddress);
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = String(object.withdrawerAddress);
    } else {
      message.withdrawerAddress = "";
    }
    return message;
  },

  toJSON(message: FeeShare): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeShare>): FeeShare {
    const message = { ...baseFeeShare } as FeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = object.deployerAddress;
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = object.withdrawerAddress;
    } else {
      message.withdrawerAddress = "";
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
