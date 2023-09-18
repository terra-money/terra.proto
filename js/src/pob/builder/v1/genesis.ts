/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "pob.builder.v1";

/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
  params?: Params;
}

/** Params defines the parameters of the x/builder module. */
export interface Params {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  maxBundleSize: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrowAccountAddress: Uint8Array;
  /** reserve_fee specifies the bid floor for the auction. */
  reserveFee?: Coin;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  minBidIncrement?: Coin;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  frontRunningProtection: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposerFee: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseParams: object = { maxBundleSize: 0, frontRunningProtection: false, proposerFee: "" };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxBundleSize !== 0) {
      writer.uint32(8).uint32(message.maxBundleSize);
    }
    if (message.escrowAccountAddress.length !== 0) {
      writer.uint32(18).bytes(message.escrowAccountAddress);
    }
    if (message.reserveFee !== undefined) {
      Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.minBidIncrement !== undefined) {
      Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
    }
    if (message.frontRunningProtection === true) {
      writer.uint32(40).bool(message.frontRunningProtection);
    }
    if (message.proposerFee !== "") {
      writer.uint32(50).string(message.proposerFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.escrowAccountAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBundleSize = reader.uint32();
          break;
        case 2:
          message.escrowAccountAddress = reader.bytes();
          break;
        case 3:
          message.reserveFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minBidIncrement = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.frontRunningProtection = reader.bool();
          break;
        case 6:
          message.proposerFee = reader.string();
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
    message.escrowAccountAddress = new Uint8Array();
    if (object.maxBundleSize !== undefined && object.maxBundleSize !== null) {
      message.maxBundleSize = Number(object.maxBundleSize);
    } else {
      message.maxBundleSize = 0;
    }
    if (object.escrowAccountAddress !== undefined && object.escrowAccountAddress !== null) {
      message.escrowAccountAddress = bytesFromBase64(object.escrowAccountAddress);
    }
    if (object.reserveFee !== undefined && object.reserveFee !== null) {
      message.reserveFee = Coin.fromJSON(object.reserveFee);
    } else {
      message.reserveFee = undefined;
    }
    if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
      message.minBidIncrement = Coin.fromJSON(object.minBidIncrement);
    } else {
      message.minBidIncrement = undefined;
    }
    if (object.frontRunningProtection !== undefined && object.frontRunningProtection !== null) {
      message.frontRunningProtection = Boolean(object.frontRunningProtection);
    } else {
      message.frontRunningProtection = false;
    }
    if (object.proposerFee !== undefined && object.proposerFee !== null) {
      message.proposerFee = String(object.proposerFee);
    } else {
      message.proposerFee = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxBundleSize !== undefined && (obj.maxBundleSize = message.maxBundleSize);
    message.escrowAccountAddress !== undefined &&
      (obj.escrowAccountAddress = base64FromBytes(
        message.escrowAccountAddress !== undefined ? message.escrowAccountAddress : new Uint8Array(),
      ));
    message.reserveFee !== undefined &&
      (obj.reserveFee = message.reserveFee ? Coin.toJSON(message.reserveFee) : undefined);
    message.minBidIncrement !== undefined &&
      (obj.minBidIncrement = message.minBidIncrement ? Coin.toJSON(message.minBidIncrement) : undefined);
    message.frontRunningProtection !== undefined &&
      (obj.frontRunningProtection = message.frontRunningProtection);
    message.proposerFee !== undefined && (obj.proposerFee = message.proposerFee);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.maxBundleSize !== undefined && object.maxBundleSize !== null) {
      message.maxBundleSize = object.maxBundleSize;
    } else {
      message.maxBundleSize = 0;
    }
    if (object.escrowAccountAddress !== undefined && object.escrowAccountAddress !== null) {
      message.escrowAccountAddress = object.escrowAccountAddress;
    } else {
      message.escrowAccountAddress = new Uint8Array();
    }
    if (object.reserveFee !== undefined && object.reserveFee !== null) {
      message.reserveFee = Coin.fromPartial(object.reserveFee);
    } else {
      message.reserveFee = undefined;
    }
    if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
      message.minBidIncrement = Coin.fromPartial(object.minBidIncrement);
    } else {
      message.minBidIncrement = undefined;
    }
    if (object.frontRunningProtection !== undefined && object.frontRunningProtection !== null) {
      message.frontRunningProtection = object.frontRunningProtection;
    } else {
      message.frontRunningProtection = false;
    }
    if (object.proposerFee !== undefined && object.proposerFee !== null) {
      message.proposerFee = object.proposerFee;
    } else {
      message.proposerFee = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
