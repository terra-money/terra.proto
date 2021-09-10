/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Params,
  ExchangeRateTuple,
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
} from "../../../terra/oracle/v1beta1/oracle";

export const protobufPackage = "terra.oracle.v1beta1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  feederDelegations: FeederDelegation[];
  exchangeRates: ExchangeRateTuple[];
  missCounters: MissCounter[];
  aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
  aggregateExchangeRateVotes: AggregateExchangeRateVote[];
  tobinTaxes: TobinTax[];
}

/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
  feederAddress: string;
  validatorAddress: string;
}

/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
  validatorAddress: string;
  missCounter: Long;
}

/**
 * TobinTax defines an denom and tobin_tax pair used in
 * oracle module's genesis state
 */
export interface TobinTax {
  denom: string;
  tobinTax: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feederDelegations) {
      FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.exchangeRates) {
      ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.missCounters) {
      MissCounter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tobinTaxes) {
      TobinTax.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.feederDelegations = [];
    message.exchangeRates = [];
    message.missCounters = [];
    message.aggregateExchangeRatePrevotes = [];
    message.aggregateExchangeRateVotes = [];
    message.tobinTaxes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 4:
          message.missCounters.push(MissCounter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.aggregateExchangeRatePrevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          break;
        case 7:
          message.tobinTaxes.push(TobinTax.decode(reader, reader.uint32()));
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
    message.feederDelegations = [];
    message.exchangeRates = [];
    message.missCounters = [];
    message.aggregateExchangeRatePrevotes = [];
    message.aggregateExchangeRateVotes = [];
    message.tobinTaxes = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feederDelegations !== undefined && object.feederDelegations !== null) {
      for (const e of object.feederDelegations) {
        message.feederDelegations.push(FeederDelegation.fromJSON(e));
      }
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.missCounters !== undefined && object.missCounters !== null) {
      for (const e of object.missCounters) {
        message.missCounters.push(MissCounter.fromJSON(e));
      }
    }
    if (object.aggregateExchangeRatePrevotes !== undefined && object.aggregateExchangeRatePrevotes !== null) {
      for (const e of object.aggregateExchangeRatePrevotes) {
        message.aggregateExchangeRatePrevotes.push(AggregateExchangeRatePrevote.fromJSON(e));
      }
    }
    if (object.aggregateExchangeRateVotes !== undefined && object.aggregateExchangeRateVotes !== null) {
      for (const e of object.aggregateExchangeRateVotes) {
        message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.fromJSON(e));
      }
    }
    if (object.tobinTaxes !== undefined && object.tobinTaxes !== null) {
      for (const e of object.tobinTaxes) {
        message.tobinTaxes.push(TobinTax.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feederDelegations) {
      obj.feederDelegations = message.feederDelegations.map((e) =>
        e ? FeederDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.feederDelegations = [];
    }
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) => (e ? ExchangeRateTuple.toJSON(e) : undefined));
    } else {
      obj.exchangeRates = [];
    }
    if (message.missCounters) {
      obj.missCounters = message.missCounters.map((e) => (e ? MissCounter.toJSON(e) : undefined));
    } else {
      obj.missCounters = [];
    }
    if (message.aggregateExchangeRatePrevotes) {
      obj.aggregateExchangeRatePrevotes = message.aggregateExchangeRatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregateExchangeRatePrevotes = [];
    }
    if (message.aggregateExchangeRateVotes) {
      obj.aggregateExchangeRateVotes = message.aggregateExchangeRateVotes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregateExchangeRateVotes = [];
    }
    if (message.tobinTaxes) {
      obj.tobinTaxes = message.tobinTaxes.map((e) => (e ? TobinTax.toJSON(e) : undefined));
    } else {
      obj.tobinTaxes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feederDelegations = [];
    message.exchangeRates = [];
    message.missCounters = [];
    message.aggregateExchangeRatePrevotes = [];
    message.aggregateExchangeRateVotes = [];
    message.tobinTaxes = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feederDelegations !== undefined && object.feederDelegations !== null) {
      for (const e of object.feederDelegations) {
        message.feederDelegations.push(FeederDelegation.fromPartial(e));
      }
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.missCounters !== undefined && object.missCounters !== null) {
      for (const e of object.missCounters) {
        message.missCounters.push(MissCounter.fromPartial(e));
      }
    }
    if (object.aggregateExchangeRatePrevotes !== undefined && object.aggregateExchangeRatePrevotes !== null) {
      for (const e of object.aggregateExchangeRatePrevotes) {
        message.aggregateExchangeRatePrevotes.push(AggregateExchangeRatePrevote.fromPartial(e));
      }
    }
    if (object.aggregateExchangeRateVotes !== undefined && object.aggregateExchangeRateVotes !== null) {
      for (const e of object.aggregateExchangeRateVotes) {
        message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.fromPartial(e));
      }
    }
    if (object.tobinTaxes !== undefined && object.tobinTaxes !== null) {
      for (const e of object.tobinTaxes) {
        message.tobinTaxes.push(TobinTax.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeederDelegation: object = { feederAddress: "", validatorAddress: "" };

export const FeederDelegation = {
  encode(message: FeederDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddress !== "") {
      writer.uint32(10).string(message.feederAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeederDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeederDelegation } as FeederDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeederDelegation {
    const message = { ...baseFeederDelegation } as FeederDelegation;
    if (object.feederAddress !== undefined && object.feederAddress !== null) {
      message.feederAddress = String(object.feederAddress);
    } else {
      message.feederAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: FeederDelegation): unknown {
    const obj: any = {};
    message.feederAddress !== undefined && (obj.feederAddress = message.feederAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation {
    const message = { ...baseFeederDelegation } as FeederDelegation;
    if (object.feederAddress !== undefined && object.feederAddress !== null) {
      message.feederAddress = object.feederAddress;
    } else {
      message.feederAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseMissCounter: object = { validatorAddress: "", missCounter: Long.UZERO };

export const MissCounter = {
  encode(message: MissCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.missCounter.isZero()) {
      writer.uint32(16).uint64(message.missCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMissCounter } as MissCounter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.missCounter = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MissCounter {
    const message = { ...baseMissCounter } as MissCounter;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = Long.fromString(object.missCounter);
    } else {
      message.missCounter = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MissCounter): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MissCounter>): MissCounter {
    const message = { ...baseMissCounter } as MissCounter;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = object.missCounter as Long;
    } else {
      message.missCounter = Long.UZERO;
    }
    return message;
  },
};

const baseTobinTax: object = { denom: "", tobinTax: "" };

export const TobinTax = {
  encode(message: TobinTax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TobinTax {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTobinTax } as TobinTax;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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

  fromJSON(object: any): TobinTax {
    const message = { ...baseTobinTax } as TobinTax;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = String(object.tobinTax);
    } else {
      message.tobinTax = "";
    }
    return message;
  },

  toJSON(message: TobinTax): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  fromPartial(object: DeepPartial<TobinTax>): TobinTax {
    const message = { ...baseTobinTax } as TobinTax;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = object.tobinTax;
    } else {
      message.tobinTax = "";
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
