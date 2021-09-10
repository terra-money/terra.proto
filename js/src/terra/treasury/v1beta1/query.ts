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
import { Params } from "../../../terra/treasury/v1beta1/treasury";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.treasury.v1beta1";

/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {}

/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
  taxRate: string;
}

/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponse {
  taxCap: string;
}

/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequest {}

/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItem {
  denom: string;
  taxCap: string;
}

/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponse {
  taxCaps: QueryTaxCapsResponseItem[];
}

/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequest {}

/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponse {
  rewardWeight: string;
}

/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequest {}

/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponse {
  taxProceeds: Coin[];
}

/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequest {}

/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponse {
  seigniorageProceeds: string;
}

/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequest {}

/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponse {
  trlYear: string;
  trlMonth: string;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQueryTaxRateRequest: object = {};

export const QueryTaxRateRequest = {
  encode(_: QueryTaxRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxRateRequest } as QueryTaxRateRequest;
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

  fromJSON(_: any): QueryTaxRateRequest {
    const message = { ...baseQueryTaxRateRequest } as QueryTaxRateRequest;
    return message;
  },

  toJSON(_: QueryTaxRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTaxRateRequest>): QueryTaxRateRequest {
    const message = { ...baseQueryTaxRateRequest } as QueryTaxRateRequest;
    return message;
  },
};

const baseQueryTaxRateResponse: object = { taxRate: "" };

export const QueryTaxRateResponse = {
  encode(message: QueryTaxRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxRate !== "") {
      writer.uint32(10).string(message.taxRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxRateResponse } as QueryTaxRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTaxRateResponse {
    const message = { ...baseQueryTaxRateResponse } as QueryTaxRateResponse;
    if (object.taxRate !== undefined && object.taxRate !== null) {
      message.taxRate = String(object.taxRate);
    } else {
      message.taxRate = "";
    }
    return message;
  },

  toJSON(message: QueryTaxRateResponse): unknown {
    const obj: any = {};
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxRateResponse>): QueryTaxRateResponse {
    const message = { ...baseQueryTaxRateResponse } as QueryTaxRateResponse;
    if (object.taxRate !== undefined && object.taxRate !== null) {
      message.taxRate = object.taxRate;
    } else {
      message.taxRate = "";
    }
    return message;
  },
};

const baseQueryTaxCapRequest: object = { denom: "" };

export const QueryTaxCapRequest = {
  encode(message: QueryTaxCapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxCapRequest } as QueryTaxCapRequest;
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

  fromJSON(object: any): QueryTaxCapRequest {
    const message = { ...baseQueryTaxCapRequest } as QueryTaxCapRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryTaxCapRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxCapRequest>): QueryTaxCapRequest {
    const message = { ...baseQueryTaxCapRequest } as QueryTaxCapRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryTaxCapResponse: object = { taxCap: "" };

export const QueryTaxCapResponse = {
  encode(message: QueryTaxCapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxCap !== "") {
      writer.uint32(10).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxCapResponse } as QueryTaxCapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTaxCapResponse {
    const message = { ...baseQueryTaxCapResponse } as QueryTaxCapResponse;
    if (object.taxCap !== undefined && object.taxCap !== null) {
      message.taxCap = String(object.taxCap);
    } else {
      message.taxCap = "";
    }
    return message;
  },

  toJSON(message: QueryTaxCapResponse): unknown {
    const obj: any = {};
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxCapResponse>): QueryTaxCapResponse {
    const message = { ...baseQueryTaxCapResponse } as QueryTaxCapResponse;
    if (object.taxCap !== undefined && object.taxCap !== null) {
      message.taxCap = object.taxCap;
    } else {
      message.taxCap = "";
    }
    return message;
  },
};

const baseQueryTaxCapsRequest: object = {};

export const QueryTaxCapsRequest = {
  encode(_: QueryTaxCapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxCapsRequest } as QueryTaxCapsRequest;
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

  fromJSON(_: any): QueryTaxCapsRequest {
    const message = { ...baseQueryTaxCapsRequest } as QueryTaxCapsRequest;
    return message;
  },

  toJSON(_: QueryTaxCapsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTaxCapsRequest>): QueryTaxCapsRequest {
    const message = { ...baseQueryTaxCapsRequest } as QueryTaxCapsRequest;
    return message;
  },
};

const baseQueryTaxCapsResponseItem: object = { denom: "", taxCap: "" };

export const QueryTaxCapsResponseItem = {
  encode(message: QueryTaxCapsResponseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsResponseItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxCapsResponseItem } as QueryTaxCapsResponseItem;
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

  fromJSON(object: any): QueryTaxCapsResponseItem {
    const message = { ...baseQueryTaxCapsResponseItem } as QueryTaxCapsResponseItem;
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

  toJSON(message: QueryTaxCapsResponseItem): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxCapsResponseItem>): QueryTaxCapsResponseItem {
    const message = { ...baseQueryTaxCapsResponseItem } as QueryTaxCapsResponseItem;
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

const baseQueryTaxCapsResponse: object = {};

export const QueryTaxCapsResponse = {
  encode(message: QueryTaxCapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxCaps) {
      QueryTaxCapsResponseItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxCapsResponse } as QueryTaxCapsResponse;
    message.taxCaps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxCaps.push(QueryTaxCapsResponseItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTaxCapsResponse {
    const message = { ...baseQueryTaxCapsResponse } as QueryTaxCapsResponse;
    message.taxCaps = [];
    if (object.taxCaps !== undefined && object.taxCaps !== null) {
      for (const e of object.taxCaps) {
        message.taxCaps.push(QueryTaxCapsResponseItem.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTaxCapsResponse): unknown {
    const obj: any = {};
    if (message.taxCaps) {
      obj.taxCaps = message.taxCaps.map((e) => (e ? QueryTaxCapsResponseItem.toJSON(e) : undefined));
    } else {
      obj.taxCaps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxCapsResponse>): QueryTaxCapsResponse {
    const message = { ...baseQueryTaxCapsResponse } as QueryTaxCapsResponse;
    message.taxCaps = [];
    if (object.taxCaps !== undefined && object.taxCaps !== null) {
      for (const e of object.taxCaps) {
        message.taxCaps.push(QueryTaxCapsResponseItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRewardWeightRequest: object = {};

export const QueryRewardWeightRequest = {
  encode(_: QueryRewardWeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardWeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRewardWeightRequest } as QueryRewardWeightRequest;
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

  fromJSON(_: any): QueryRewardWeightRequest {
    const message = { ...baseQueryRewardWeightRequest } as QueryRewardWeightRequest;
    return message;
  },

  toJSON(_: QueryRewardWeightRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryRewardWeightRequest>): QueryRewardWeightRequest {
    const message = { ...baseQueryRewardWeightRequest } as QueryRewardWeightRequest;
    return message;
  },
};

const baseQueryRewardWeightResponse: object = { rewardWeight: "" };

export const QueryRewardWeightResponse = {
  encode(message: QueryRewardWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardWeight !== "") {
      writer.uint32(10).string(message.rewardWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRewardWeightResponse } as QueryRewardWeightResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardWeightResponse {
    const message = { ...baseQueryRewardWeightResponse } as QueryRewardWeightResponse;
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = String(object.rewardWeight);
    } else {
      message.rewardWeight = "";
    }
    return message;
  },

  toJSON(message: QueryRewardWeightResponse): unknown {
    const obj: any = {};
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRewardWeightResponse>): QueryRewardWeightResponse {
    const message = { ...baseQueryRewardWeightResponse } as QueryRewardWeightResponse;
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = object.rewardWeight;
    } else {
      message.rewardWeight = "";
    }
    return message;
  },
};

const baseQueryTaxProceedsRequest: object = {};

export const QueryTaxProceedsRequest = {
  encode(_: QueryTaxProceedsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxProceedsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxProceedsRequest } as QueryTaxProceedsRequest;
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

  fromJSON(_: any): QueryTaxProceedsRequest {
    const message = { ...baseQueryTaxProceedsRequest } as QueryTaxProceedsRequest;
    return message;
  },

  toJSON(_: QueryTaxProceedsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTaxProceedsRequest>): QueryTaxProceedsRequest {
    const message = { ...baseQueryTaxProceedsRequest } as QueryTaxProceedsRequest;
    return message;
  },
};

const baseQueryTaxProceedsResponse: object = {};

export const QueryTaxProceedsResponse = {
  encode(message: QueryTaxProceedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxProceedsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTaxProceedsResponse } as QueryTaxProceedsResponse;
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

  fromJSON(object: any): QueryTaxProceedsResponse {
    const message = { ...baseQueryTaxProceedsResponse } as QueryTaxProceedsResponse;
    message.taxProceeds = [];
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTaxProceedsResponse): unknown {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxProceeds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTaxProceedsResponse>): QueryTaxProceedsResponse {
    const message = { ...baseQueryTaxProceedsResponse } as QueryTaxProceedsResponse;
    message.taxProceeds = [];
    if (object.taxProceeds !== undefined && object.taxProceeds !== null) {
      for (const e of object.taxProceeds) {
        message.taxProceeds.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQuerySeigniorageProceedsRequest: object = {};

export const QuerySeigniorageProceedsRequest = {
  encode(_: QuerySeigniorageProceedsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySeigniorageProceedsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySeigniorageProceedsRequest } as QuerySeigniorageProceedsRequest;
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

  fromJSON(_: any): QuerySeigniorageProceedsRequest {
    const message = { ...baseQuerySeigniorageProceedsRequest } as QuerySeigniorageProceedsRequest;
    return message;
  },

  toJSON(_: QuerySeigniorageProceedsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QuerySeigniorageProceedsRequest>): QuerySeigniorageProceedsRequest {
    const message = { ...baseQuerySeigniorageProceedsRequest } as QuerySeigniorageProceedsRequest;
    return message;
  },
};

const baseQuerySeigniorageProceedsResponse: object = { seigniorageProceeds: "" };

export const QuerySeigniorageProceedsResponse = {
  encode(message: QuerySeigniorageProceedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seigniorageProceeds !== "") {
      writer.uint32(10).string(message.seigniorageProceeds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySeigniorageProceedsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySeigniorageProceedsResponse } as QuerySeigniorageProceedsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seigniorageProceeds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySeigniorageProceedsResponse {
    const message = { ...baseQuerySeigniorageProceedsResponse } as QuerySeigniorageProceedsResponse;
    if (object.seigniorageProceeds !== undefined && object.seigniorageProceeds !== null) {
      message.seigniorageProceeds = String(object.seigniorageProceeds);
    } else {
      message.seigniorageProceeds = "";
    }
    return message;
  },

  toJSON(message: QuerySeigniorageProceedsResponse): unknown {
    const obj: any = {};
    message.seigniorageProceeds !== undefined && (obj.seigniorageProceeds = message.seigniorageProceeds);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySeigniorageProceedsResponse>): QuerySeigniorageProceedsResponse {
    const message = { ...baseQuerySeigniorageProceedsResponse } as QuerySeigniorageProceedsResponse;
    if (object.seigniorageProceeds !== undefined && object.seigniorageProceeds !== null) {
      message.seigniorageProceeds = object.seigniorageProceeds;
    } else {
      message.seigniorageProceeds = "";
    }
    return message;
  },
};

const baseQueryIndicatorsRequest: object = {};

export const QueryIndicatorsRequest = {
  encode(_: QueryIndicatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndicatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIndicatorsRequest } as QueryIndicatorsRequest;
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

  fromJSON(_: any): QueryIndicatorsRequest {
    const message = { ...baseQueryIndicatorsRequest } as QueryIndicatorsRequest;
    return message;
  },

  toJSON(_: QueryIndicatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryIndicatorsRequest>): QueryIndicatorsRequest {
    const message = { ...baseQueryIndicatorsRequest } as QueryIndicatorsRequest;
    return message;
  },
};

const baseQueryIndicatorsResponse: object = { trlYear: "", trlMonth: "" };

export const QueryIndicatorsResponse = {
  encode(message: QueryIndicatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trlYear !== "") {
      writer.uint32(10).string(message.trlYear);
    }
    if (message.trlMonth !== "") {
      writer.uint32(18).string(message.trlMonth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndicatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIndicatorsResponse } as QueryIndicatorsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trlYear = reader.string();
          break;
        case 2:
          message.trlMonth = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIndicatorsResponse {
    const message = { ...baseQueryIndicatorsResponse } as QueryIndicatorsResponse;
    if (object.trlYear !== undefined && object.trlYear !== null) {
      message.trlYear = String(object.trlYear);
    } else {
      message.trlYear = "";
    }
    if (object.trlMonth !== undefined && object.trlMonth !== null) {
      message.trlMonth = String(object.trlMonth);
    } else {
      message.trlMonth = "";
    }
    return message;
  },

  toJSON(message: QueryIndicatorsResponse): unknown {
    const obj: any = {};
    message.trlYear !== undefined && (obj.trlYear = message.trlYear);
    message.trlMonth !== undefined && (obj.trlMonth = message.trlMonth);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIndicatorsResponse>): QueryIndicatorsResponse {
    const message = { ...baseQueryIndicatorsResponse } as QueryIndicatorsResponse;
    if (object.trlYear !== undefined && object.trlYear !== null) {
      message.trlYear = object.trlYear;
    } else {
      message.trlYear = "";
    }
    if (object.trlMonth !== undefined && object.trlMonth !== null) {
      message.trlMonth = object.trlMonth;
    } else {
      message.trlMonth = "";
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
  /** TaxRate return the current tax rate */
  taxRate: {
    path: "/terra.treasury.v1beta1.Query/TaxRate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTaxRateRequest) => Buffer.from(QueryTaxRateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTaxRateRequest.decode(value),
    responseSerialize: (value: QueryTaxRateResponse) =>
      Buffer.from(QueryTaxRateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTaxRateResponse.decode(value),
  },
  /** TaxCap returns the tax cap of a denom */
  taxCap: {
    path: "/terra.treasury.v1beta1.Query/TaxCap",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTaxCapRequest) => Buffer.from(QueryTaxCapRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTaxCapRequest.decode(value),
    responseSerialize: (value: QueryTaxCapResponse) =>
      Buffer.from(QueryTaxCapResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTaxCapResponse.decode(value),
  },
  /** TaxCaps returns the all tax caps */
  taxCaps: {
    path: "/terra.treasury.v1beta1.Query/TaxCaps",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTaxCapsRequest) => Buffer.from(QueryTaxCapsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTaxCapsRequest.decode(value),
    responseSerialize: (value: QueryTaxCapsResponse) =>
      Buffer.from(QueryTaxCapsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTaxCapsResponse.decode(value),
  },
  /** RewardWeight return the current reward weight */
  rewardWeight: {
    path: "/terra.treasury.v1beta1.Query/RewardWeight",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryRewardWeightRequest) =>
      Buffer.from(QueryRewardWeightRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryRewardWeightRequest.decode(value),
    responseSerialize: (value: QueryRewardWeightResponse) =>
      Buffer.from(QueryRewardWeightResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryRewardWeightResponse.decode(value),
  },
  /** SeigniorageProceeds return the current seigniorage proceeds */
  seigniorageProceeds: {
    path: "/terra.treasury.v1beta1.Query/SeigniorageProceeds",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QuerySeigniorageProceedsRequest) =>
      Buffer.from(QuerySeigniorageProceedsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QuerySeigniorageProceedsRequest.decode(value),
    responseSerialize: (value: QuerySeigniorageProceedsResponse) =>
      Buffer.from(QuerySeigniorageProceedsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QuerySeigniorageProceedsResponse.decode(value),
  },
  /** TaxProceeds return the current tax proceeds */
  taxProceeds: {
    path: "/terra.treasury.v1beta1.Query/TaxProceeds",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryTaxProceedsRequest) =>
      Buffer.from(QueryTaxProceedsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryTaxProceedsRequest.decode(value),
    responseSerialize: (value: QueryTaxProceedsResponse) =>
      Buffer.from(QueryTaxProceedsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryTaxProceedsResponse.decode(value),
  },
  /** Indicators return the current trl informations */
  indicators: {
    path: "/terra.treasury.v1beta1.Query/Indicators",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryIndicatorsRequest) =>
      Buffer.from(QueryIndicatorsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryIndicatorsRequest.decode(value),
    responseSerialize: (value: QueryIndicatorsResponse) =>
      Buffer.from(QueryIndicatorsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryIndicatorsResponse.decode(value),
  },
  /** Params queries all parameters. */
  params: {
    path: "/terra.treasury.v1beta1.Query/Params",
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
  /** TaxRate return the current tax rate */
  taxRate: handleUnaryCall<QueryTaxRateRequest, QueryTaxRateResponse>;
  /** TaxCap returns the tax cap of a denom */
  taxCap: handleUnaryCall<QueryTaxCapRequest, QueryTaxCapResponse>;
  /** TaxCaps returns the all tax caps */
  taxCaps: handleUnaryCall<QueryTaxCapsRequest, QueryTaxCapsResponse>;
  /** RewardWeight return the current reward weight */
  rewardWeight: handleUnaryCall<QueryRewardWeightRequest, QueryRewardWeightResponse>;
  /** SeigniorageProceeds return the current seigniorage proceeds */
  seigniorageProceeds: handleUnaryCall<QuerySeigniorageProceedsRequest, QuerySeigniorageProceedsResponse>;
  /** TaxProceeds return the current tax proceeds */
  taxProceeds: handleUnaryCall<QueryTaxProceedsRequest, QueryTaxProceedsResponse>;
  /** Indicators return the current trl informations */
  indicators: handleUnaryCall<QueryIndicatorsRequest, QueryIndicatorsResponse>;
  /** Params queries all parameters. */
  params: handleUnaryCall<QueryParamsRequest, QueryParamsResponse>;
}

export interface QueryClient extends Client {
  /** TaxRate return the current tax rate */
  taxRate(
    request: QueryTaxRateRequest,
    callback: (error: ServiceError | null, response: QueryTaxRateResponse) => void,
  ): ClientUnaryCall;
  taxRate(
    request: QueryTaxRateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTaxRateResponse) => void,
  ): ClientUnaryCall;
  taxRate(
    request: QueryTaxRateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTaxRateResponse) => void,
  ): ClientUnaryCall;
  /** TaxCap returns the tax cap of a denom */
  taxCap(
    request: QueryTaxCapRequest,
    callback: (error: ServiceError | null, response: QueryTaxCapResponse) => void,
  ): ClientUnaryCall;
  taxCap(
    request: QueryTaxCapRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTaxCapResponse) => void,
  ): ClientUnaryCall;
  taxCap(
    request: QueryTaxCapRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTaxCapResponse) => void,
  ): ClientUnaryCall;
  /** TaxCaps returns the all tax caps */
  taxCaps(
    request: QueryTaxCapsRequest,
    callback: (error: ServiceError | null, response: QueryTaxCapsResponse) => void,
  ): ClientUnaryCall;
  taxCaps(
    request: QueryTaxCapsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTaxCapsResponse) => void,
  ): ClientUnaryCall;
  taxCaps(
    request: QueryTaxCapsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTaxCapsResponse) => void,
  ): ClientUnaryCall;
  /** RewardWeight return the current reward weight */
  rewardWeight(
    request: QueryRewardWeightRequest,
    callback: (error: ServiceError | null, response: QueryRewardWeightResponse) => void,
  ): ClientUnaryCall;
  rewardWeight(
    request: QueryRewardWeightRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryRewardWeightResponse) => void,
  ): ClientUnaryCall;
  rewardWeight(
    request: QueryRewardWeightRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryRewardWeightResponse) => void,
  ): ClientUnaryCall;
  /** SeigniorageProceeds return the current seigniorage proceeds */
  seigniorageProceeds(
    request: QuerySeigniorageProceedsRequest,
    callback: (error: ServiceError | null, response: QuerySeigniorageProceedsResponse) => void,
  ): ClientUnaryCall;
  seigniorageProceeds(
    request: QuerySeigniorageProceedsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QuerySeigniorageProceedsResponse) => void,
  ): ClientUnaryCall;
  seigniorageProceeds(
    request: QuerySeigniorageProceedsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QuerySeigniorageProceedsResponse) => void,
  ): ClientUnaryCall;
  /** TaxProceeds return the current tax proceeds */
  taxProceeds(
    request: QueryTaxProceedsRequest,
    callback: (error: ServiceError | null, response: QueryTaxProceedsResponse) => void,
  ): ClientUnaryCall;
  taxProceeds(
    request: QueryTaxProceedsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryTaxProceedsResponse) => void,
  ): ClientUnaryCall;
  taxProceeds(
    request: QueryTaxProceedsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryTaxProceedsResponse) => void,
  ): ClientUnaryCall;
  /** Indicators return the current trl informations */
  indicators(
    request: QueryIndicatorsRequest,
    callback: (error: ServiceError | null, response: QueryIndicatorsResponse) => void,
  ): ClientUnaryCall;
  indicators(
    request: QueryIndicatorsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryIndicatorsResponse) => void,
  ): ClientUnaryCall;
  indicators(
    request: QueryIndicatorsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryIndicatorsResponse) => void,
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
  "terra.treasury.v1beta1.Query",
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
