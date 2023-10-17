/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeShare } from "../../../juno/feeshare/v1/feeshare";

export const protobufPackage = "juno.feeshare.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the feeshare module parameters */
  params?: Params;
  /** FeeShare is a slice of active registered contracts for fee distribution */
  feeShare: FeeShare[];
}

/** Params defines the feeshare module params */
export interface Params {
  /** enable_feeshare defines a parameter to enable the feeshare module */
  enableFeeShare: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * allowed_denoms defines the list of denoms that are allowed to be paid to
   * the contract withdraw addresses. If said denom is not in the list, the fees
   * will ONLY be sent to the community pool.
   * If this list is empty, all denoms are allowed.
   */
  allowedDenoms: string[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeShare) {
      FeeShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.feeShare = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeShare.push(FeeShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeShare = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feeShare !== undefined && object.feeShare !== null) {
      for (const e of object.feeShare) {
        message.feeShare.push(FeeShare.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feeShare) {
      obj.feeShare = message.feeShare.map((e) => (e ? FeeShare.toJSON(e) : undefined));
    } else {
      obj.feeShare = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeShare = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feeShare !== undefined && object.feeShare !== null) {
      for (const e of object.feeShare) {
        message.feeShare.push(FeeShare.fromPartial(e));
      }
    }
    return message;
  },
};

const baseParams: object = { enableFeeShare: false, developerShares: "", allowedDenoms: "" };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFeeShare === true) {
      writer.uint32(8).bool(message.enableFeeShare);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.allowedDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableFeeShare = reader.bool();
          break;
        case 2:
          message.developerShares = reader.string();
          break;
        case 3:
          message.allowedDenoms.push(reader.string());
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
    message.allowedDenoms = [];
    if (object.enableFeeShare !== undefined && object.enableFeeShare !== null) {
      message.enableFeeShare = Boolean(object.enableFeeShare);
    } else {
      message.enableFeeShare = false;
    }
    if (object.developerShares !== undefined && object.developerShares !== null) {
      message.developerShares = String(object.developerShares);
    } else {
      message.developerShares = "";
    }
    if (object.allowedDenoms !== undefined && object.allowedDenoms !== null) {
      for (const e of object.allowedDenoms) {
        message.allowedDenoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableFeeShare !== undefined && (obj.enableFeeShare = message.enableFeeShare);
    message.developerShares !== undefined && (obj.developerShares = message.developerShares);
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map((e) => e);
    } else {
      obj.allowedDenoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.allowedDenoms = [];
    if (object.enableFeeShare !== undefined && object.enableFeeShare !== null) {
      message.enableFeeShare = object.enableFeeShare;
    } else {
      message.enableFeeShare = false;
    }
    if (object.developerShares !== undefined && object.developerShares !== null) {
      message.developerShares = object.developerShares;
    } else {
      message.developerShares = "";
    }
    if (object.allowedDenoms !== undefined && object.allowedDenoms !== null) {
      for (const e of object.allowedDenoms) {
        message.allowedDenoms.push(e);
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
