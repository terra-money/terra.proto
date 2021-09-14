/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../terra/treasury/v1beta1/treasury";
import { BrowserHeaders } from "browser-headers";
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
export interface Query {
  /** TaxRate return the current tax rate */
  TaxRate(request: DeepPartial<QueryTaxRateRequest>, metadata?: grpc.Metadata): Promise<QueryTaxRateResponse>;
  /** TaxCap returns the tax cap of a denom */
  TaxCap(request: DeepPartial<QueryTaxCapRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapResponse>;
  /** TaxCaps returns the all tax caps */
  TaxCaps(request: DeepPartial<QueryTaxCapsRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapsResponse>;
  /** RewardWeight return the current reward weight */
  RewardWeight(
    request: DeepPartial<QueryRewardWeightRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRewardWeightResponse>;
  /** SeigniorageProceeds return the current seigniorage proceeds */
  SeigniorageProceeds(
    request: DeepPartial<QuerySeigniorageProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySeigniorageProceedsResponse>;
  /** TaxProceeds return the current tax proceeds */
  TaxProceeds(
    request: DeepPartial<QueryTaxProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxProceedsResponse>;
  /** Indicators return the current trl informations */
  Indicators(
    request: DeepPartial<QueryIndicatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIndicatorsResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TaxRate = this.TaxRate.bind(this);
    this.TaxCap = this.TaxCap.bind(this);
    this.TaxCaps = this.TaxCaps.bind(this);
    this.RewardWeight = this.RewardWeight.bind(this);
    this.SeigniorageProceeds = this.SeigniorageProceeds.bind(this);
    this.TaxProceeds = this.TaxProceeds.bind(this);
    this.Indicators = this.Indicators.bind(this);
    this.Params = this.Params.bind(this);
  }

  TaxRate(
    request: DeepPartial<QueryTaxRateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxRateResponse> {
    return this.rpc.unary(QueryTaxRateDesc, QueryTaxRateRequest.fromPartial(request), metadata);
  }

  TaxCap(request: DeepPartial<QueryTaxCapRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapResponse> {
    return this.rpc.unary(QueryTaxCapDesc, QueryTaxCapRequest.fromPartial(request), metadata);
  }

  TaxCaps(
    request: DeepPartial<QueryTaxCapsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxCapsResponse> {
    return this.rpc.unary(QueryTaxCapsDesc, QueryTaxCapsRequest.fromPartial(request), metadata);
  }

  RewardWeight(
    request: DeepPartial<QueryRewardWeightRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRewardWeightResponse> {
    return this.rpc.unary(QueryRewardWeightDesc, QueryRewardWeightRequest.fromPartial(request), metadata);
  }

  SeigniorageProceeds(
    request: DeepPartial<QuerySeigniorageProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySeigniorageProceedsResponse> {
    return this.rpc.unary(
      QuerySeigniorageProceedsDesc,
      QuerySeigniorageProceedsRequest.fromPartial(request),
      metadata,
    );
  }

  TaxProceeds(
    request: DeepPartial<QueryTaxProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxProceedsResponse> {
    return this.rpc.unary(QueryTaxProceedsDesc, QueryTaxProceedsRequest.fromPartial(request), metadata);
  }

  Indicators(
    request: DeepPartial<QueryIndicatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIndicatorsResponse> {
    return this.rpc.unary(QueryIndicatorsDesc, QueryIndicatorsRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "terra.treasury.v1beta1.Query",
};

export const QueryTaxRateDesc: UnaryMethodDefinitionish = {
  methodName: "TaxRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxRateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTaxRateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTaxCapDesc: UnaryMethodDefinitionish = {
  methodName: "TaxCap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxCapRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTaxCapResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTaxCapsDesc: UnaryMethodDefinitionish = {
  methodName: "TaxCaps",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxCapsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTaxCapsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRewardWeightDesc: UnaryMethodDefinitionish = {
  methodName: "RewardWeight",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRewardWeightRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRewardWeightResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QuerySeigniorageProceedsDesc: UnaryMethodDefinitionish = {
  methodName: "SeigniorageProceeds",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySeigniorageProceedsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySeigniorageProceedsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTaxProceedsDesc: UnaryMethodDefinitionish = {
  methodName: "TaxProceeds",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxProceedsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTaxProceedsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIndicatorsDesc: UnaryMethodDefinitionish = {
  methodName: "Indicators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIndicatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIndicatorsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
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
