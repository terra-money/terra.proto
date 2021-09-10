/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.treasury.v1beta1";

/** Params defines the parameters for the oracle module. */
export interface Params {
  taxPolicy?: PolicyConstraints;
  rewardPolicy?: PolicyConstraints;
  seigniorageBurdenTarget: string;
  miningIncrement: string;
  windowShort: Long;
  windowLong: Long;
  windowProbation: Long;
}

/** PolicyConstraints - defines policy constraints can be applied in tax & reward policies */
export interface PolicyConstraints {
  rateMin: string;
  rateMax: string;
  cap?: Coin;
  changeRateMax: string;
}

/**
 * EpochTaxProceeds represents the tax amount
 * collected at the current epoch
 */
export interface EpochTaxProceeds {
  taxProceeds: Coin[];
}

/**
 * EpochInitialIssuance represents initial issuance
 * of the currrent epoch
 */
export interface EpochInitialIssuance {
  issuance: Coin[];
}

const baseParams: object = {
  seigniorageBurdenTarget: "",
  miningIncrement: "",
  windowShort: Long.UZERO,
  windowLong: Long.UZERO,
  windowProbation: Long.UZERO,
};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxPolicy !== undefined) {
      PolicyConstraints.encode(message.taxPolicy, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardPolicy !== undefined) {
      PolicyConstraints.encode(message.rewardPolicy, writer.uint32(18).fork()).ldelim();
    }
    if (message.seigniorageBurdenTarget !== "") {
      writer.uint32(26).string(message.seigniorageBurdenTarget);
    }
    if (message.miningIncrement !== "") {
      writer.uint32(34).string(message.miningIncrement);
    }
    if (!message.windowShort.isZero()) {
      writer.uint32(40).uint64(message.windowShort);
    }
    if (!message.windowLong.isZero()) {
      writer.uint32(48).uint64(message.windowLong);
    }
    if (!message.windowProbation.isZero()) {
      writer.uint32(56).uint64(message.windowProbation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxPolicy = PolicyConstraints.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewardPolicy = PolicyConstraints.decode(reader, reader.uint32());
          break;
        case 3:
          message.seigniorageBurdenTarget = reader.string();
          break;
        case 4:
          message.miningIncrement = reader.string();
          break;
        case 5:
          message.windowShort = reader.uint64() as Long;
          break;
        case 6:
          message.windowLong = reader.uint64() as Long;
          break;
        case 7:
          message.windowProbation = reader.uint64() as Long;
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
    if (object.taxPolicy !== undefined && object.taxPolicy !== null) {
      message.taxPolicy = PolicyConstraints.fromJSON(object.taxPolicy);
    } else {
      message.taxPolicy = undefined;
    }
    if (object.rewardPolicy !== undefined && object.rewardPolicy !== null) {
      message.rewardPolicy = PolicyConstraints.fromJSON(object.rewardPolicy);
    } else {
      message.rewardPolicy = undefined;
    }
    if (object.seigniorageBurdenTarget !== undefined && object.seigniorageBurdenTarget !== null) {
      message.seigniorageBurdenTarget = String(object.seigniorageBurdenTarget);
    } else {
      message.seigniorageBurdenTarget = "";
    }
    if (object.miningIncrement !== undefined && object.miningIncrement !== null) {
      message.miningIncrement = String(object.miningIncrement);
    } else {
      message.miningIncrement = "";
    }
    if (object.windowShort !== undefined && object.windowShort !== null) {
      message.windowShort = Long.fromString(object.windowShort);
    } else {
      message.windowShort = Long.UZERO;
    }
    if (object.windowLong !== undefined && object.windowLong !== null) {
      message.windowLong = Long.fromString(object.windowLong);
    } else {
      message.windowLong = Long.UZERO;
    }
    if (object.windowProbation !== undefined && object.windowProbation !== null) {
      message.windowProbation = Long.fromString(object.windowProbation);
    } else {
      message.windowProbation = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.taxPolicy !== undefined &&
      (obj.taxPolicy = message.taxPolicy ? PolicyConstraints.toJSON(message.taxPolicy) : undefined);
    message.rewardPolicy !== undefined &&
      (obj.rewardPolicy = message.rewardPolicy ? PolicyConstraints.toJSON(message.rewardPolicy) : undefined);
    message.seigniorageBurdenTarget !== undefined &&
      (obj.seigniorageBurdenTarget = message.seigniorageBurdenTarget);
    message.miningIncrement !== undefined && (obj.miningIncrement = message.miningIncrement);
    message.windowShort !== undefined && (obj.windowShort = (message.windowShort || Long.UZERO).toString());
    message.windowLong !== undefined && (obj.windowLong = (message.windowLong || Long.UZERO).toString());
    message.windowProbation !== undefined &&
      (obj.windowProbation = (message.windowProbation || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.taxPolicy !== undefined && object.taxPolicy !== null) {
      message.taxPolicy = PolicyConstraints.fromPartial(object.taxPolicy);
    } else {
      message.taxPolicy = undefined;
    }
    if (object.rewardPolicy !== undefined && object.rewardPolicy !== null) {
      message.rewardPolicy = PolicyConstraints.fromPartial(object.rewardPolicy);
    } else {
      message.rewardPolicy = undefined;
    }
    if (object.seigniorageBurdenTarget !== undefined && object.seigniorageBurdenTarget !== null) {
      message.seigniorageBurdenTarget = object.seigniorageBurdenTarget;
    } else {
      message.seigniorageBurdenTarget = "";
    }
    if (object.miningIncrement !== undefined && object.miningIncrement !== null) {
      message.miningIncrement = object.miningIncrement;
    } else {
      message.miningIncrement = "";
    }
    if (object.windowShort !== undefined && object.windowShort !== null) {
      message.windowShort = object.windowShort as Long;
    } else {
      message.windowShort = Long.UZERO;
    }
    if (object.windowLong !== undefined && object.windowLong !== null) {
      message.windowLong = object.windowLong as Long;
    } else {
      message.windowLong = Long.UZERO;
    }
    if (object.windowProbation !== undefined && object.windowProbation !== null) {
      message.windowProbation = object.windowProbation as Long;
    } else {
      message.windowProbation = Long.UZERO;
    }
    return message;
  },
};

const basePolicyConstraints: object = { rateMin: "", rateMax: "", changeRateMax: "" };

export const PolicyConstraints = {
  encode(message: PolicyConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateMin !== "") {
      writer.uint32(10).string(message.rateMin);
    }
    if (message.rateMax !== "") {
      writer.uint32(18).string(message.rateMax);
    }
    if (message.cap !== undefined) {
      Coin.encode(message.cap, writer.uint32(26).fork()).ldelim();
    }
    if (message.changeRateMax !== "") {
      writer.uint32(34).string(message.changeRateMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PolicyConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicyConstraints } as PolicyConstraints;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateMin = reader.string();
          break;
        case 2:
          message.rateMax = reader.string();
          break;
        case 3:
          message.cap = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.changeRateMax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PolicyConstraints {
    const message = { ...basePolicyConstraints } as PolicyConstraints;
    if (object.rateMin !== undefined && object.rateMin !== null) {
      message.rateMin = String(object.rateMin);
    } else {
      message.rateMin = "";
    }
    if (object.rateMax !== undefined && object.rateMax !== null) {
      message.rateMax = String(object.rateMax);
    } else {
      message.rateMax = "";
    }
    if (object.cap !== undefined && object.cap !== null) {
      message.cap = Coin.fromJSON(object.cap);
    } else {
      message.cap = undefined;
    }
    if (object.changeRateMax !== undefined && object.changeRateMax !== null) {
      message.changeRateMax = String(object.changeRateMax);
    } else {
      message.changeRateMax = "";
    }
    return message;
  },

  toJSON(message: PolicyConstraints): unknown {
    const obj: any = {};
    message.rateMin !== undefined && (obj.rateMin = message.rateMin);
    message.rateMax !== undefined && (obj.rateMax = message.rateMax);
    message.cap !== undefined && (obj.cap = message.cap ? Coin.toJSON(message.cap) : undefined);
    message.changeRateMax !== undefined && (obj.changeRateMax = message.changeRateMax);
    return obj;
  },

  fromPartial(object: DeepPartial<PolicyConstraints>): PolicyConstraints {
    const message = { ...basePolicyConstraints } as PolicyConstraints;
    if (object.rateMin !== undefined && object.rateMin !== null) {
      message.rateMin = object.rateMin;
    } else {
      message.rateMin = "";
    }
    if (object.rateMax !== undefined && object.rateMax !== null) {
      message.rateMax = object.rateMax;
    } else {
      message.rateMax = "";
    }
    if (object.cap !== undefined && object.cap !== null) {
      message.cap = Coin.fromPartial(object.cap);
    } else {
      message.cap = undefined;
    }
    if (object.changeRateMax !== undefined && object.changeRateMax !== null) {
      message.changeRateMax = object.changeRateMax;
    } else {
      message.changeRateMax = "";
    }
    return message;
  },
};

const baseEpochTaxProceeds: object = {};

export const EpochTaxProceeds = {
  encode(message: EpochTaxProceeds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTaxProceeds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochTaxProceeds } as EpochTaxProceeds;
    message.taxProceeds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxProceeds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochTaxProceeds {
    const message = { ...baseEpochTaxProceeds } as EpochTaxProceeds;
    message.taxProceeds = [];
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: EpochTaxProceeds): unknown {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxProceeds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EpochTaxProceeds>): EpochTaxProceeds {
    const message = { ...baseEpochTaxProceeds } as EpochTaxProceeds;
    message.taxProceeds = [];
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEpochInitialIssuance: object = {};

export const EpochInitialIssuance = {
  encode(message: EpochInitialIssuance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInitialIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochInitialIssuance } as EpochInitialIssuance;
    message.issuance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochInitialIssuance {
    const message = { ...baseEpochInitialIssuance } as EpochInitialIssuance;
    message.issuance = [];
    if (object.issuance !== undefined && object.issuance !== null) {
      for (const e of object.issuance) {
        message.issuance.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: EpochInitialIssuance): unknown {
    const obj: any = {};
    if (message.issuance) {
      obj.issuance = message.issuance.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.issuance = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EpochInitialIssuance>): EpochInitialIssuance {
    const message = { ...baseEpochInitialIssuance } as EpochInitialIssuance;
    message.issuance = [];
    if (object.issuance !== undefined && object.issuance !== null) {
      for (const e of object.issuance) {
        message.issuance.push(Coin.fromPartial(e));
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
