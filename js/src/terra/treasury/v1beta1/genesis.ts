/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../terra/treasury/v1beta1/treasury";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.treasury.v1beta1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  taxRate: string;
  rewardWeight: string;
  taxCaps: TaxCap[];
  taxProceeds: Coin[];
  epochInitialIssuance: Coin[];
  epochStates: EpochState[];
}

/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCap {
  denom: string;
  taxCap: string;
}

/** EpochState is the record for each epoch state */
export interface EpochState {
  epoch: Long;
  taxReward: string;
  seigniorageReward: string;
  totalStakedLuna: string;
}

const baseGenesisState: object = { taxRate: "", rewardWeight: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.taxRate !== "") {
      writer.uint32(18).string(message.taxRate);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    for (const v of message.taxCaps) {
      TaxCap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochInitialIssuance) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.epochStates) {
      EpochState.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.taxCaps = [];
    message.taxProceeds = [];
    message.epochInitialIssuance = [];
    message.epochStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.taxRate = reader.string();
          break;
        case 3:
          message.rewardWeight = reader.string();
          break;
        case 4:
          message.taxCaps.push(TaxCap.decode(reader, reader.uint32()));
          break;
        case 5:
          message.taxProceeds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochInitialIssuance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.epochStates.push(EpochState.decode(reader, reader.uint32()));
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
    message.taxCaps = [];
    message.taxProceeds = [];
    message.epochInitialIssuance = [];
    message.epochStates = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.taxRate !== undefined && object.taxRate !== null) {
      message.taxRate = String(object.taxRate);
    } else {
      message.taxRate = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = String(object.rewardWeight);
    } else {
      message.rewardWeight = "";
    }
    if (object.taxCaps !== undefined && object.taxCaps !== null) {
      for (const e of object.taxCaps) {
        message.taxCaps.push(TaxCap.fromJSON(e));
      }
    }
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromJSON(e));
      }
    }
    if (object.epochInitialIssuance !== undefined && object.epochInitialIssuance !== null) {
      for (const e of object.epochInitialIssuance) {
        message.epochInitialIssuance.push(Coin.fromJSON(e));
      }
    }
    if (object.epochStates !== undefined && object.epochStates !== null) {
      for (const e of object.epochStates) {
        message.epochStates.push(EpochState.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    if (message.taxCaps) {
      obj.taxCaps = message.taxCaps.map((e) => (e ? TaxCap.toJSON(e) : undefined));
    } else {
      obj.taxCaps = [];
    }
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxProceeds = [];
    }
    if (message.epochInitialIssuance) {
      obj.epochInitialIssuance = message.epochInitialIssuance.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.epochInitialIssuance = [];
    }
    if (message.epochStates) {
      obj.epochStates = message.epochStates.map((e) => (e ? EpochState.toJSON(e) : undefined));
    } else {
      obj.epochStates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.taxCaps = [];
    message.taxProceeds = [];
    message.epochInitialIssuance = [];
    message.epochStates = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.taxRate !== undefined && object.taxRate !== null) {
      message.taxRate = object.taxRate;
    } else {
      message.taxRate = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = object.rewardWeight;
    } else {
      message.rewardWeight = "";
    }
    if (object.taxCaps !== undefined && object.taxCaps !== null) {
      for (const e of object.taxCaps) {
        message.taxCaps.push(TaxCap.fromPartial(e));
      }
    }
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromPartial(e));
      }
    }
    if (object.epochInitialIssuance !== undefined && object.epochInitialIssuance !== null) {
      for (const e of object.epochInitialIssuance) {
        message.epochInitialIssuance.push(Coin.fromPartial(e));
      }
    }
    if (object.epochStates !== undefined && object.epochStates !== null) {
      for (const e of object.epochStates) {
        message.epochStates.push(EpochState.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTaxCap: object = { denom: "", taxCap: "" };

export const TaxCap = {
  encode(message: TaxCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxCap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTaxCap } as TaxCap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.taxCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TaxCap {
    const message = { ...baseTaxCap } as TaxCap;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.taxCap !== undefined && object.taxCap !== null) {
      message.taxCap = String(object.taxCap);
    } else {
      message.taxCap = "";
    }
    return message;
  },

  toJSON(message: TaxCap): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  fromPartial(object: DeepPartial<TaxCap>): TaxCap {
    const message = { ...baseTaxCap } as TaxCap;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.taxCap !== undefined && object.taxCap !== null) {
      message.taxCap = object.taxCap;
    } else {
      message.taxCap = "";
    }
    return message;
  },
};

const baseEpochState: object = {
  epoch: Long.UZERO,
  taxReward: "",
  seigniorageReward: "",
  totalStakedLuna: "",
};

export const EpochState = {
  encode(message: EpochState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.taxReward !== "") {
      writer.uint32(18).string(message.taxReward);
    }
    if (message.seigniorageReward !== "") {
      writer.uint32(26).string(message.seigniorageReward);
    }
    if (message.totalStakedLuna !== "") {
      writer.uint32(34).string(message.totalStakedLuna);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochState } as EpochState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64() as Long;
          break;
        case 2:
          message.taxReward = reader.string();
          break;
        case 3:
          message.seigniorageReward = reader.string();
          break;
        case 4:
          message.totalStakedLuna = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochState {
    const message = { ...baseEpochState } as EpochState;
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = Long.fromString(object.epoch);
    } else {
      message.epoch = Long.UZERO;
    }
    if (object.taxReward !== undefined && object.taxReward !== null) {
      message.taxReward = String(object.taxReward);
    } else {
      message.taxReward = "";
    }
    if (object.seigniorageReward !== undefined && object.seigniorageReward !== null) {
      message.seigniorageReward = String(object.seigniorageReward);
    } else {
      message.seigniorageReward = "";
    }
    if (object.totalStakedLuna !== undefined && object.totalStakedLuna !== null) {
      message.totalStakedLuna = String(object.totalStakedLuna);
    } else {
      message.totalStakedLuna = "";
    }
    return message;
  },

  toJSON(message: EpochState): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.taxReward !== undefined && (obj.taxReward = message.taxReward);
    message.seigniorageReward !== undefined && (obj.seigniorageReward = message.seigniorageReward);
    message.totalStakedLuna !== undefined && (obj.totalStakedLuna = message.totalStakedLuna);
    return obj;
  },

  fromPartial(object: DeepPartial<EpochState>): EpochState {
    const message = { ...baseEpochState } as EpochState;
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = object.epoch as Long;
    } else {
      message.epoch = Long.UZERO;
    }
    if (object.taxReward !== undefined && object.taxReward !== null) {
      message.taxReward = object.taxReward;
    } else {
      message.taxReward = "";
    }
    if (object.seigniorageReward !== undefined && object.seigniorageReward !== null) {
      message.seigniorageReward = object.seigniorageReward;
    } else {
      message.seigniorageReward = "";
    }
    if (object.totalStakedLuna !== undefined && object.totalStakedLuna !== null) {
      message.totalStakedLuna = object.totalStakedLuna;
    } else {
      message.totalStakedLuna = "";
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
