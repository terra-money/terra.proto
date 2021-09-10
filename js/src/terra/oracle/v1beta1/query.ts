/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
  Params,
  Denom,
} from "../../../terra/oracle/v1beta1/oracle";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.oracle.v1beta1";

/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
  exchangeRate: string;
}

/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {}

/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  exchangeRates: DecCoin[];
}

/** QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method. */
export interface QueryTobinTaxRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 */
export interface QueryTobinTaxResponse {
  /** tobin_taxe defines the tobin tax of a denom */
  tobinTax: string;
}

/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequest {}

/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 */
export interface QueryTobinTaxesResponse {
  /** tobin_taxes defines a list of the tobin tax of all whitelisted denoms */
  tobinTaxes: Denom[];
}

/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}

/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}

/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {}

/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}

/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}

/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: Long;
}

/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
  aggregatePrevote?: AggregateExchangeRatePrevote;
}

/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {}

/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}

/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
  aggregateVote?: AggregateExchangeRateVote;
}

/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {}

/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
  aggregateVotes: AggregateExchangeRateVote[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQueryExchangeRateRequest: object = { denom: "" };

export const QueryExchangeRateRequest = {
  encode(message: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExchangeRateRequest } as QueryExchangeRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateRequest {
    const message = { ...baseQueryExchangeRateRequest } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = { ...baseQueryExchangeRateRequest } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryExchangeRateResponse: object = { exchangeRate: "" };

export const QueryExchangeRateResponse = {
  encode(message: QueryExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExchangeRateResponse } as QueryExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateResponse {
    const message = { ...baseQueryExchangeRateResponse } as QueryExchangeRateResponse;
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = String(object.exchangeRate);
    } else {
      message.exchangeRate = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = { ...baseQueryExchangeRateResponse } as QueryExchangeRateResponse;
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = object.exchangeRate;
    } else {
      message.exchangeRate = "";
    }
    return message;
  },
};

const baseQueryExchangeRatesRequest: object = {};

export const QueryExchangeRatesRequest = {
  encode(_: QueryExchangeRatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExchangeRatesRequest } as QueryExchangeRatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryExchangeRatesRequest {
    const message = { ...baseQueryExchangeRatesRequest } as QueryExchangeRatesRequest;
    return message;
  },

  toJSON(_: QueryExchangeRatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = { ...baseQueryExchangeRatesRequest } as QueryExchangeRatesRequest;
    return message;
  },
};

const baseQueryExchangeRatesResponse: object = {};

export const QueryExchangeRatesResponse = {
  encode(message: QueryExchangeRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExchangeRatesResponse } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRatesResponse {
    const message = { ...baseQueryExchangeRatesResponse } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryExchangeRatesResponse): unknown {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.exchangeRates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = { ...baseQueryExchangeRatesResponse } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryTobinTaxRequest: object = { denom: "" };

export const QueryTobinTaxRequest = {
  encode(message: QueryTobinTaxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTobinTaxRequest } as QueryTobinTaxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTobinTaxRequest {
    const message = { ...baseQueryTobinTaxRequest } as QueryTobinTaxRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryTobinTaxRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTobinTaxRequest>): QueryTobinTaxRequest {
    const message = { ...baseQueryTobinTaxRequest } as QueryTobinTaxRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryTobinTaxResponse: object = { tobinTax: "" };

export const QueryTobinTaxResponse = {
  encode(message: QueryTobinTaxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tobinTax !== "") {
      writer.uint32(10).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTobinTaxResponse } as QueryTobinTaxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tobinTax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTobinTaxResponse {
    const message = { ...baseQueryTobinTaxResponse } as QueryTobinTaxResponse;
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = String(object.tobinTax);
    } else {
      message.tobinTax = "";
    }
    return message;
  },

  toJSON(message: QueryTobinTaxResponse): unknown {
    const obj: any = {};
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTobinTaxResponse>): QueryTobinTaxResponse {
    const message = { ...baseQueryTobinTaxResponse } as QueryTobinTaxResponse;
    if (object.tobinTax !== undefined && object.tobinTax !== null) {
      message.tobinTax = object.tobinTax;
    } else {
      message.tobinTax = "";
    }
    return message;
  },
};

const baseQueryTobinTaxesRequest: object = {};

export const QueryTobinTaxesRequest = {
  encode(_: QueryTobinTaxesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTobinTaxesRequest } as QueryTobinTaxesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryTobinTaxesRequest {
    const message = { ...baseQueryTobinTaxesRequest } as QueryTobinTaxesRequest;
    return message;
  },

  toJSON(_: QueryTobinTaxesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTobinTaxesRequest>): QueryTobinTaxesRequest {
    const message = { ...baseQueryTobinTaxesRequest } as QueryTobinTaxesRequest;
    return message;
  },
};

const baseQueryTobinTaxesResponse: object = {};

export const QueryTobinTaxesResponse = {
  encode(message: QueryTobinTaxesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tobinTaxes) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTobinTaxesResponse } as QueryTobinTaxesResponse;
    message.tobinTaxes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tobinTaxes.push(Denom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTobinTaxesResponse {
    const message = { ...baseQueryTobinTaxesResponse } as QueryTobinTaxesResponse;
    message.tobinTaxes = [];
    if (object.tobinTaxes !== undefined && object.tobinTaxes !== null) {
      for (const e of object.tobinTaxes) {
        message.tobinTaxes.push(Denom.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTobinTaxesResponse): unknown {
    const obj: any = {};
    if (message.tobinTaxes) {
      obj.tobinTaxes = message.tobinTaxes.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.tobinTaxes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTobinTaxesResponse>): QueryTobinTaxesResponse {
    const message = { ...baseQueryTobinTaxesResponse } as QueryTobinTaxesResponse;
    message.tobinTaxes = [];
    if (object.tobinTaxes !== undefined && object.tobinTaxes !== null) {
      for (const e of object.tobinTaxes) {
        message.tobinTaxes.push(Denom.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryActivesRequest: object = {};

export const QueryActivesRequest = {
  encode(_: QueryActivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },

  toJSON(_: QueryActivesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },
};

const baseQueryActivesResponse: object = { actives: "" };

export const QueryActivesResponse = {
  encode(message: QueryActivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryActivesResponse): unknown {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map((e) => e);
    } else {
      obj.actives = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(e);
      }
    }
    return message;
  },
};

const baseQueryVoteTargetsRequest: object = {};

export const QueryVoteTargetsRequest = {
  encode(_: QueryVoteTargetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVoteTargetsRequest } as QueryVoteTargetsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryVoteTargetsRequest {
    const message = { ...baseQueryVoteTargetsRequest } as QueryVoteTargetsRequest;
    return message;
  },

  toJSON(_: QueryVoteTargetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = { ...baseQueryVoteTargetsRequest } as QueryVoteTargetsRequest;
    return message;
  },
};

const baseQueryVoteTargetsResponse: object = { voteTargets: "" };

export const QueryVoteTargetsResponse = {
  encode(message: QueryVoteTargetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVoteTargetsResponse } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteTargetsResponse {
    const message = { ...baseQueryVoteTargetsResponse } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    if (object.voteTargets !== undefined && object.voteTargets !== null) {
      for (const e of object.voteTargets) {
        message.voteTargets.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryVoteTargetsResponse): unknown {
    const obj: any = {};
    if (message.voteTargets) {
      obj.voteTargets = message.voteTargets.map((e) => e);
    } else {
      obj.voteTargets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = { ...baseQueryVoteTargetsResponse } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    if (object.voteTargets !== undefined && object.voteTargets !== null) {
      for (const e of object.voteTargets) {
        message.voteTargets.push(e);
      }
    }
    return message;
  },
};

const baseQueryFeederDelegationRequest: object = { validatorAddr: "" };

export const QueryFeederDelegationRequest = {
  encode(message: QueryFeederDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeederDelegationRequest } as QueryFeederDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationRequest {
    const message = { ...baseQueryFeederDelegationRequest } as QueryFeederDelegationRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = { ...baseQueryFeederDelegationRequest } as QueryFeederDelegationRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryFeederDelegationResponse: object = { feederAddr: "" };

export const QueryFeederDelegationResponse = {
  encode(message: QueryFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeederDelegationResponse } as QueryFeederDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationResponse {
    const message = { ...baseQueryFeederDelegationResponse } as QueryFeederDelegationResponse;
    if (object.feederAddr !== undefined && object.feederAddr !== null) {
      message.feederAddr = String(object.feederAddr);
    } else {
      message.feederAddr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = { ...baseQueryFeederDelegationResponse } as QueryFeederDelegationResponse;
    if (object.feederAddr !== undefined && object.feederAddr !== null) {
      message.feederAddr = object.feederAddr;
    } else {
      message.feederAddr = "";
    }
    return message;
  },
};

const baseQueryMissCounterRequest: object = { validatorAddr: "" };

export const QueryMissCounterRequest = {
  encode(message: QueryMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMissCounterRequest } as QueryMissCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterRequest {
    const message = { ...baseQueryMissCounterRequest } as QueryMissCounterRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryMissCounterRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMissCounterRequest>): QueryMissCounterRequest {
    const message = { ...baseQueryMissCounterRequest } as QueryMissCounterRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryMissCounterResponse: object = { missCounter: Long.UZERO };

export const QueryMissCounterResponse = {
  encode(message: QueryMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missCounter.isZero()) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMissCounterResponse } as QueryMissCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterResponse {
    const message = { ...baseQueryMissCounterResponse } as QueryMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = Long.fromString(object.missCounter);
    } else {
      message.missCounter = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryMissCounterResponse): unknown {
    const obj: any = {};
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMissCounterResponse>): QueryMissCounterResponse {
    const message = { ...baseQueryMissCounterResponse } as QueryMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = object.missCounter as Long;
    } else {
      message.missCounter = Long.UZERO;
    }
    return message;
  },
};

const baseQueryAggregatePrevoteRequest: object = { validatorAddr: "" };

export const QueryAggregatePrevoteRequest = {
  encode(message: QueryAggregatePrevoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregatePrevoteRequest } as QueryAggregatePrevoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteRequest {
    const message = { ...baseQueryAggregatePrevoteRequest } as QueryAggregatePrevoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest {
    const message = { ...baseQueryAggregatePrevoteRequest } as QueryAggregatePrevoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryAggregatePrevoteResponse: object = {};

export const QueryAggregatePrevoteResponse = {
  encode(message: QueryAggregatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregatePrevoteResponse } as QueryAggregatePrevoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteResponse {
    const message = { ...baseQueryAggregatePrevoteResponse } as QueryAggregatePrevoteResponse;
    if (object.aggregatePrevote !== undefined && object.aggregatePrevote !== null) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote);
    } else {
      message.aggregatePrevote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteResponse): unknown {
    const obj: any = {};
    message.aggregatePrevote !== undefined &&
      (obj.aggregatePrevote = message.aggregatePrevote
        ? AggregateExchangeRatePrevote.toJSON(message.aggregatePrevote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse {
    const message = { ...baseQueryAggregatePrevoteResponse } as QueryAggregatePrevoteResponse;
    if (object.aggregatePrevote !== undefined && object.aggregatePrevote !== null) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote);
    } else {
      message.aggregatePrevote = undefined;
    }
    return message;
  },
};

const baseQueryAggregatePrevotesRequest: object = {};

export const QueryAggregatePrevotesRequest = {
  encode(_: QueryAggregatePrevotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregatePrevotesRequest } as QueryAggregatePrevotesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAggregatePrevotesRequest {
    const message = { ...baseQueryAggregatePrevotesRequest } as QueryAggregatePrevotesRequest;
    return message;
  },

  toJSON(_: QueryAggregatePrevotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest {
    const message = { ...baseQueryAggregatePrevotesRequest } as QueryAggregatePrevotesRequest;
    return message;
  },
};

const baseQueryAggregatePrevotesResponse: object = {};

export const QueryAggregatePrevotesResponse = {
  encode(message: QueryAggregatePrevotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregatePrevotesResponse } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevotesResponse {
    const message = { ...baseQueryAggregatePrevotesResponse } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    if (object.aggregatePrevotes !== undefined && object.aggregatePrevotes !== null) {
      for (const e of object.aggregatePrevotes) {
        message.aggregatePrevotes.push(AggregateExchangeRatePrevote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevotesResponse): unknown {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregatePrevotes = message.aggregatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregatePrevotes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse {
    const message = { ...baseQueryAggregatePrevotesResponse } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    if (object.aggregatePrevotes !== undefined && object.aggregatePrevotes !== null) {
      for (const e of object.aggregatePrevotes) {
        message.aggregatePrevotes.push(AggregateExchangeRatePrevote.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAggregateVoteRequest: object = { validatorAddr: "" };

export const QueryAggregateVoteRequest = {
  encode(message: QueryAggregateVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregateVoteRequest } as QueryAggregateVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteRequest {
    const message = { ...baseQueryAggregateVoteRequest } as QueryAggregateVoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest {
    const message = { ...baseQueryAggregateVoteRequest } as QueryAggregateVoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryAggregateVoteResponse: object = {};

export const QueryAggregateVoteResponse = {
  encode(message: QueryAggregateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregateVoteResponse } as QueryAggregateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVote = AggregateExchangeRateVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteResponse {
    const message = { ...baseQueryAggregateVoteResponse } as QueryAggregateVoteResponse;
    if (object.aggregateVote !== undefined && object.aggregateVote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromJSON(object.aggregateVote);
    } else {
      message.aggregateVote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteResponse): unknown {
    const obj: any = {};
    message.aggregateVote !== undefined &&
      (obj.aggregateVote = message.aggregateVote
        ? AggregateExchangeRateVote.toJSON(message.aggregateVote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse {
    const message = { ...baseQueryAggregateVoteResponse } as QueryAggregateVoteResponse;
    if (object.aggregateVote !== undefined && object.aggregateVote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromPartial(object.aggregateVote);
    } else {
      message.aggregateVote = undefined;
    }
    return message;
  },
};

const baseQueryAggregateVotesRequest: object = {};

export const QueryAggregateVotesRequest = {
  encode(_: QueryAggregateVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregateVotesRequest } as QueryAggregateVotesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAggregateVotesRequest {
    const message = { ...baseQueryAggregateVotesRequest } as QueryAggregateVotesRequest;
    return message;
  },

  toJSON(_: QueryAggregateVotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest {
    const message = { ...baseQueryAggregateVotesRequest } as QueryAggregateVotesRequest;
    return message;
  },
};

const baseQueryAggregateVotesResponse: object = {};

export const QueryAggregateVotesResponse = {
  encode(message: QueryAggregateVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAggregateVotesResponse } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVotesResponse {
    const message = { ...baseQueryAggregateVotesResponse } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    if (object.aggregateVotes !== undefined && object.aggregateVotes !== null) {
      for (const e of object.aggregateVotes) {
        message.aggregateVotes.push(AggregateExchangeRateVote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAggregateVotesResponse): unknown {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregateVotes = message.aggregateVotes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregateVotes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse {
    const message = { ...baseQueryAggregateVotesResponse } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    if (object.aggregateVotes !== undefined && object.aggregateVotes !== null) {
      for (const e of object.aggregateVotes) {
        message.aggregateVotes.push(AggregateExchangeRateVote.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export const QueryService = {
  /** ExchangeRate returns exchange rate of a denom */
  exchangeRate: {
    path: "/terra.oracle.v1beta1.Query/ExchangeRate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryExchangeRateRequest) =>
      Buffer.from(QueryExchangeRateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryExchangeRateRequest.decode(value),
    responseSerialize: (value: QueryExchangeRateResponse) =>
      Buffer.from(QueryExchangeRateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryExchangeRateResponse.decode(value),
  },
  /** ExchangeRates returns exchange rates of all denoms */
  exchangeRates: {
    path: "/terra.oracle.v1beta1.Query/ExchangeRates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryExchangeRatesRequest) =>
      Buffer.from(QueryExchangeRatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryExchangeRatesRequest.decode(value),
    responseSerialize: (value: QueryExchangeRatesResponse) =>
      Buffer.from(QueryExchangeRatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryExchangeRatesResponse.decode(value),
  },
  /** TobinTax returns tobin tax of a denom */
  tobinTax: {
    path: "/terra.oracle.v1beta1.Query/TobinTax",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTobinTaxRequest) =>
      Buffer.from(QueryTobinTaxRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTobinTaxRequest.decode(value),
    responseSerialize: (value: QueryTobinTaxResponse) =>
      Buffer.from(QueryTobinTaxResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTobinTaxResponse.decode(value),
  },
  /** TobinTaxes returns tobin taxes of all denoms */
  tobinTaxes: {
    path: "/terra.oracle.v1beta1.Query/TobinTaxes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTobinTaxesRequest) =>
      Buffer.from(QueryTobinTaxesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTobinTaxesRequest.decode(value),
    responseSerialize: (value: QueryTobinTaxesResponse) =>
      Buffer.from(QueryTobinTaxesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTobinTaxesResponse.decode(value),
  },
  /** Actives returns all active denoms */
  actives: {
    path: "/terra.oracle.v1beta1.Query/Actives",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryActivesRequest) => Buffer.from(QueryActivesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryActivesRequest.decode(value),
    responseSerialize: (value: QueryActivesResponse) =>
      Buffer.from(QueryActivesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryActivesResponse.decode(value),
  },
  /** VoteTargets returns all vote target denoms */
  voteTargets: {
    path: "/terra.oracle.v1beta1.Query/VoteTargets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryVoteTargetsRequest) =>
      Buffer.from(QueryVoteTargetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryVoteTargetsRequest.decode(value),
    responseSerialize: (value: QueryVoteTargetsResponse) =>
      Buffer.from(QueryVoteTargetsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryVoteTargetsResponse.decode(value),
  },
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation: {
    path: "/terra.oracle.v1beta1.Query/FeederDelegation",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryFeederDelegationRequest) =>
      Buffer.from(QueryFeederDelegationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryFeederDelegationRequest.decode(value),
    responseSerialize: (value: QueryFeederDelegationResponse) =>
      Buffer.from(QueryFeederDelegationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryFeederDelegationResponse.decode(value),
  },
  /** MissCounter returns oracle miss counter of a validator */
  missCounter: {
    path: "/terra.oracle.v1beta1.Query/MissCounter",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryMissCounterRequest) =>
      Buffer.from(QueryMissCounterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryMissCounterRequest.decode(value),
    responseSerialize: (value: QueryMissCounterResponse) =>
      Buffer.from(QueryMissCounterResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryMissCounterResponse.decode(value),
  },
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote: {
    path: "/terra.oracle.v1beta1.Query/AggregatePrevote",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAggregatePrevoteRequest) =>
      Buffer.from(QueryAggregatePrevoteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAggregatePrevoteRequest.decode(value),
    responseSerialize: (value: QueryAggregatePrevoteResponse) =>
      Buffer.from(QueryAggregatePrevoteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAggregatePrevoteResponse.decode(value),
  },
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes: {
    path: "/terra.oracle.v1beta1.Query/AggregatePrevotes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAggregatePrevotesRequest) =>
      Buffer.from(QueryAggregatePrevotesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAggregatePrevotesRequest.decode(value),
    responseSerialize: (value: QueryAggregatePrevotesResponse) =>
      Buffer.from(QueryAggregatePrevotesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAggregatePrevotesResponse.decode(value),
  },
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote: {
    path: "/terra.oracle.v1beta1.Query/AggregateVote",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAggregateVoteRequest) =>
      Buffer.from(QueryAggregateVoteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAggregateVoteRequest.decode(value),
    responseSerialize: (value: QueryAggregateVoteResponse) =>
      Buffer.from(QueryAggregateVoteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAggregateVoteResponse.decode(value),
  },
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes: {
    path: "/terra.oracle.v1beta1.Query/AggregateVotes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAggregateVotesRequest) =>
      Buffer.from(QueryAggregateVotesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAggregateVotesRequest.decode(value),
    responseSerialize: (value: QueryAggregateVotesResponse) =>
      Buffer.from(QueryAggregateVotesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAggregateVotesResponse.decode(value),
  },
  /** Params queries all parameters. */
  params: {
    path: "/terra.oracle.v1beta1.Query/Params",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryParamsRequest) => Buffer.from(QueryParamsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryParamsRequest.decode(value),
    responseSerialize: (value: QueryParamsResponse) =>
      Buffer.from(QueryParamsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryParamsResponse.decode(value),
  },
} as const;

export interface QueryServer extends UntypedServiceImplementation {
  /** ExchangeRate returns exchange rate of a denom */
  exchangeRate: handleUnaryCall<QueryExchangeRateRequest, QueryExchangeRateResponse>;
  /** ExchangeRates returns exchange rates of all denoms */
  exchangeRates: handleUnaryCall<QueryExchangeRatesRequest, QueryExchangeRatesResponse>;
  /** TobinTax returns tobin tax of a denom */
  tobinTax: handleUnaryCall<QueryTobinTaxRequest, QueryTobinTaxResponse>;
  /** TobinTaxes returns tobin taxes of all denoms */
  tobinTaxes: handleUnaryCall<QueryTobinTaxesRequest, QueryTobinTaxesResponse>;
  /** Actives returns all active denoms */
  actives: handleUnaryCall<QueryActivesRequest, QueryActivesResponse>;
  /** VoteTargets returns all vote target denoms */
  voteTargets: handleUnaryCall<QueryVoteTargetsRequest, QueryVoteTargetsResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation: handleUnaryCall<QueryFeederDelegationRequest, QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  missCounter: handleUnaryCall<QueryMissCounterRequest, QueryMissCounterResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote: handleUnaryCall<QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes: handleUnaryCall<QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote: handleUnaryCall<QueryAggregateVoteRequest, QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes: handleUnaryCall<QueryAggregateVotesRequest, QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  params: handleUnaryCall<QueryParamsRequest, QueryParamsResponse>;
}

export interface QueryClient extends Client {
  /** ExchangeRate returns exchange rate of a denom */
  exchangeRate(
    request: QueryExchangeRateRequest,
    callback: (error: ServiceError | null, response: QueryExchangeRateResponse) => void,
  ): ClientUnaryCall;
  exchangeRate(
    request: QueryExchangeRateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryExchangeRateResponse) => void,
  ): ClientUnaryCall;
  exchangeRate(
    request: QueryExchangeRateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryExchangeRateResponse) => void,
  ): ClientUnaryCall;
  /** ExchangeRates returns exchange rates of all denoms */
  exchangeRates(
    request: QueryExchangeRatesRequest,
    callback: (error: ServiceError | null, response: QueryExchangeRatesResponse) => void,
  ): ClientUnaryCall;
  exchangeRates(
    request: QueryExchangeRatesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryExchangeRatesResponse) => void,
  ): ClientUnaryCall;
  exchangeRates(
    request: QueryExchangeRatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryExchangeRatesResponse) => void,
  ): ClientUnaryCall;
  /** TobinTax returns tobin tax of a denom */
  tobinTax(
    request: QueryTobinTaxRequest,
    callback: (error: ServiceError | null, response: QueryTobinTaxResponse) => void,
  ): ClientUnaryCall;
  tobinTax(
    request: QueryTobinTaxRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTobinTaxResponse) => void,
  ): ClientUnaryCall;
  tobinTax(
    request: QueryTobinTaxRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTobinTaxResponse) => void,
  ): ClientUnaryCall;
  /** TobinTaxes returns tobin taxes of all denoms */
  tobinTaxes(
    request: QueryTobinTaxesRequest,
    callback: (error: ServiceError | null, response: QueryTobinTaxesResponse) => void,
  ): ClientUnaryCall;
  tobinTaxes(
    request: QueryTobinTaxesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTobinTaxesResponse) => void,
  ): ClientUnaryCall;
  tobinTaxes(
    request: QueryTobinTaxesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTobinTaxesResponse) => void,
  ): ClientUnaryCall;
  /** Actives returns all active denoms */
  actives(
    request: QueryActivesRequest,
    callback: (error: ServiceError | null, response: QueryActivesResponse) => void,
  ): ClientUnaryCall;
  actives(
    request: QueryActivesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryActivesResponse) => void,
  ): ClientUnaryCall;
  actives(
    request: QueryActivesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryActivesResponse) => void,
  ): ClientUnaryCall;
  /** VoteTargets returns all vote target denoms */
  voteTargets(
    request: QueryVoteTargetsRequest,
    callback: (error: ServiceError | null, response: QueryVoteTargetsResponse) => void,
  ): ClientUnaryCall;
  voteTargets(
    request: QueryVoteTargetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryVoteTargetsResponse) => void,
  ): ClientUnaryCall;
  voteTargets(
    request: QueryVoteTargetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryVoteTargetsResponse) => void,
  ): ClientUnaryCall;
  /** FeederDelegation returns feeder delegation of a validator */
  feederDelegation(
    request: QueryFeederDelegationRequest,
    callback: (error: ServiceError | null, response: QueryFeederDelegationResponse) => void,
  ): ClientUnaryCall;
  feederDelegation(
    request: QueryFeederDelegationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryFeederDelegationResponse) => void,
  ): ClientUnaryCall;
  feederDelegation(
    request: QueryFeederDelegationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryFeederDelegationResponse) => void,
  ): ClientUnaryCall;
  /** MissCounter returns oracle miss counter of a validator */
  missCounter(
    request: QueryMissCounterRequest,
    callback: (error: ServiceError | null, response: QueryMissCounterResponse) => void,
  ): ClientUnaryCall;
  missCounter(
    request: QueryMissCounterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryMissCounterResponse) => void,
  ): ClientUnaryCall;
  missCounter(
    request: QueryMissCounterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryMissCounterResponse) => void,
  ): ClientUnaryCall;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  aggregatePrevote(
    request: QueryAggregatePrevoteRequest,
    callback: (error: ServiceError | null, response: QueryAggregatePrevoteResponse) => void,
  ): ClientUnaryCall;
  aggregatePrevote(
    request: QueryAggregatePrevoteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAggregatePrevoteResponse) => void,
  ): ClientUnaryCall;
  aggregatePrevote(
    request: QueryAggregatePrevoteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAggregatePrevoteResponse) => void,
  ): ClientUnaryCall;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  aggregatePrevotes(
    request: QueryAggregatePrevotesRequest,
    callback: (error: ServiceError | null, response: QueryAggregatePrevotesResponse) => void,
  ): ClientUnaryCall;
  aggregatePrevotes(
    request: QueryAggregatePrevotesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAggregatePrevotesResponse) => void,
  ): ClientUnaryCall;
  aggregatePrevotes(
    request: QueryAggregatePrevotesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAggregatePrevotesResponse) => void,
  ): ClientUnaryCall;
  /** AggregateVote returns an aggregate vote of a validator */
  aggregateVote(
    request: QueryAggregateVoteRequest,
    callback: (error: ServiceError | null, response: QueryAggregateVoteResponse) => void,
  ): ClientUnaryCall;
  aggregateVote(
    request: QueryAggregateVoteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAggregateVoteResponse) => void,
  ): ClientUnaryCall;
  aggregateVote(
    request: QueryAggregateVoteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAggregateVoteResponse) => void,
  ): ClientUnaryCall;
  /** AggregateVotes returns aggregate votes of all validators */
  aggregateVotes(
    request: QueryAggregateVotesRequest,
    callback: (error: ServiceError | null, response: QueryAggregateVotesResponse) => void,
  ): ClientUnaryCall;
  aggregateVotes(
    request: QueryAggregateVotesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAggregateVotesResponse) => void,
  ): ClientUnaryCall;
  aggregateVotes(
    request: QueryAggregateVotesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAggregateVotesResponse) => void,
  ): ClientUnaryCall;
  /** Params queries all parameters. */
  params(
    request: QueryParamsRequest,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "terra.oracle.v1beta1.Query",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): QueryClient;
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
