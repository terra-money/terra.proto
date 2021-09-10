/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.oracle.v1beta1";

/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: Long;
  whitelist: Denom[];
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
}

/** Denom - the object to hold configurations of each denom */
export interface Denom {
  name: string;
  tobinTax: string;
}

/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}

/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}

const baseParams: object = {
  votePeriod: Long.UZERO,
  voteThreshold: "",
  rewardBand: "",
  rewardDistributionWindow: Long.UZERO,
  slashFraction: "",
  slashWindow: Long.UZERO,
  minValidPerWindow: "",
};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    if (!message.rewardDistributionWindow.isZero()) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(message.minValidPerWindow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.whitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePeriod = reader.uint64() as Long;
          break;
        case 2:
          message.voteThreshold = reader.string();
          break;
        case 3:
          message.rewardBand = reader.string();
          break;
        case 4:
          message.rewardDistributionWindow = reader.uint64() as Long;
          break;
        case 5:
          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slashFraction = reader.string();
          break;
        case 7:
          message.slashWindow = reader.uint64() as Long;
          break;
        case 8:
          message.minValidPerWindow = reader.string();
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
    message.whitelist = [];
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = Long.fromString(object.votePeriod);
    } else {
      message.votePeriod = Long.UZERO;
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = String(object.voteThreshold);
    } else {
      message.voteThreshold = "";
    }
    if (object.rewardBand !== undefined && object.rewardBand !== null) {
      message.rewardBand = String(object.rewardBand);
    } else {
      message.rewardBand = "";
    }
    if (object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null) {
      message.rewardDistributionWindow = Long.fromString(object.rewardDistributionWindow);
    } else {
      message.rewardDistributionWindow = Long.UZERO;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(Denom.fromJSON(e));
      }
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = String(object.slashFraction);
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = Long.fromString(object.slashWindow);
    } else {
      message.slashWindow = Long.UZERO;
    }
    if (object.minValidPerWindow !== undefined && object.minValidPerWindow !== null) {
      message.minValidPerWindow = String(object.minValidPerWindow);
    } else {
      message.minValidPerWindow = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    message.rewardDistributionWindow !== undefined &&
      (obj.rewardDistributionWindow = (message.rewardDistributionWindow || Long.UZERO).toString());
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.whitelist = [];
    }
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
    message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.whitelist = [];
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = object.votePeriod as Long;
    } else {
      message.votePeriod = Long.UZERO;
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = object.voteThreshold;
    } else {
      message.voteThreshold = "";
    }
    if (object.rewardBand !== undefined && object.rewardBand !== null) {
      message.rewardBand = object.rewardBand;
    } else {
      message.rewardBand = "";
    }
    if (object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null) {
      message.rewardDistributionWindow = object.rewardDistributionWindow as Long;
    } else {
      message.rewardDistributionWindow = Long.UZERO;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(Denom.fromPartial(e));
      }
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = object.slashFraction;
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = object.slashWindow as Long;
    } else {
      message.slashWindow = Long.UZERO;
    }
    if (object.minValidPerWindow !== undefined && object.minValidPerWindow !== null) {
      message.minValidPerWindow = object.minValidPerWindow;
    } else {
      message.minValidPerWindow = "";
    }
    return message;
  },
};

const baseDenom: object = { name: "", tobinTax: "" };

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenom } as Denom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.tobinTax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = String(object.tobinTax);
    } else {
      message.tobinTax = "";
    }
    return message;
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = { ...baseDenom } as Denom;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = object.tobinTax;
    } else {
      message.tobinTax = "";
    }
    return message;
  },
};

const baseAggregateExchangeRatePrevote: object = { hash: "", voter: "", submitBlock: Long.UZERO };

export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAggregateExchangeRatePrevote } as AggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitBlock = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    const message = { ...baseAggregateExchangeRatePrevote } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = Long.fromString(object.submitBlock);
    } else {
      message.submitBlock = Long.UZERO;
    }
    return message;
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<AggregateExchangeRatePrevote>): AggregateExchangeRatePrevote {
    const message = { ...baseAggregateExchangeRatePrevote } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = object.submitBlock as Long;
    } else {
      message.submitBlock = Long.UZERO;
    }
    return message;
  },
};

const baseAggregateExchangeRateVote: object = { voter: "" };

export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAggregateExchangeRateVote } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    const message = { ...baseAggregateExchangeRateVote } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    if (object.exchangeRateTuples !== undefined && object.exchangeRateTuples !== null) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    return message;
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined,
      );
    } else {
      obj.exchangeRateTuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(object: DeepPartial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = { ...baseAggregateExchangeRateVote } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    if (object.exchangeRateTuples !== undefined && object.exchangeRateTuples !== null) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseExchangeRateTuple: object = { denom: "", exchangeRate: "" };

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = String(object.exchangeRate);
    } else {
      message.exchangeRate = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = object.exchangeRate;
    } else {
      message.exchangeRate = "";
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
