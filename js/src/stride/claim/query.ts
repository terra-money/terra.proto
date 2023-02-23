/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Period } from "../vesting/vesting";
import { Action, actionFromJSON, actionToJSON, ClaimRecord } from "./claim";
import { Params } from "./params";

export const protobufPackage = "stride.claim";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
  airdropIdentifier: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
  /** params defines the parameters of the module. */
  distributorAccountBalance: Coin[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

export interface QueryClaimRecordRequest {
  airdropIdentifier: string;
  address: string;
}

export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}

export interface QueryClaimableForActionRequest {
  airdropIdentifier: string;
  address: string;
  action: Action;
}

export interface QueryClaimableForActionResponse {
  coins: Coin[];
}

export interface QueryTotalClaimableRequest {
  airdropIdentifier: string;
  address: string;
}

export interface QueryTotalClaimableResponse {
  coins: Coin[];
}

export interface QueryUserVestingsRequest {
  address: string;
}

export interface QueryUserVestingsResponse {
  spendableCoins: Coin[];
  periods: Period[];
}

function createBaseQueryDistributorAccountBalanceRequest(): QueryDistributorAccountBalanceRequest {
  return { airdropIdentifier: "" };
}

export const QueryDistributorAccountBalanceRequest = {
  encode(message: QueryDistributorAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDistributorAccountBalanceRequest {
    return { airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "" };
  },

  toJSON(message: QueryDistributorAccountBalanceRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDistributorAccountBalanceRequest>, I>>(
    base?: I,
  ): QueryDistributorAccountBalanceRequest {
    return QueryDistributorAccountBalanceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDistributorAccountBalanceRequest>, I>>(
    object: I,
  ): QueryDistributorAccountBalanceRequest {
    const message = createBaseQueryDistributorAccountBalanceRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    return message;
  },
};

function createBaseQueryDistributorAccountBalanceResponse(): QueryDistributorAccountBalanceResponse {
  return { distributorAccountBalance: [] };
}

export const QueryDistributorAccountBalanceResponse = {
  encode(message: QueryDistributorAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributorAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistributorAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributorAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDistributorAccountBalanceResponse {
    return {
      distributorAccountBalance: Array.isArray(object?.distributorAccountBalance)
        ? object.distributorAccountBalance.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDistributorAccountBalanceResponse): unknown {
    const obj: any = {};
    if (message.distributorAccountBalance) {
      obj.distributorAccountBalance = message.distributorAccountBalance.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.distributorAccountBalance = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDistributorAccountBalanceResponse>, I>>(
    base?: I,
  ): QueryDistributorAccountBalanceResponse {
    return QueryDistributorAccountBalanceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDistributorAccountBalanceResponse>, I>>(
    object: I,
  ): QueryDistributorAccountBalanceResponse {
    const message = createBaseQueryDistributorAccountBalanceResponse();
    message.distributorAccountBalance = object.distributorAccountBalance?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

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
    const message = createBaseQueryParamsResponse();
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return { airdropIdentifier: "", address: "" };
}

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryClaimRecordRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClaimRecordRequest>, I>>(base?: I): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimRecordRequest>, I>>(object: I): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return { claimRecord: undefined };
}

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordResponse {
    return { claimRecord: isSet(object.claimRecord) ? ClaimRecord.fromJSON(object.claimRecord) : undefined };
  },

  toJSON(message: QueryClaimRecordResponse): unknown {
    const obj: any = {};
    message.claimRecord !== undefined &&
      (obj.claimRecord = message.claimRecord ? ClaimRecord.toJSON(message.claimRecord) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClaimRecordResponse>, I>>(base?: I): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimRecordResponse>, I>>(object: I): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = (object.claimRecord !== undefined && object.claimRecord !== null)
      ? ClaimRecord.fromPartial(object.claimRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return { airdropIdentifier: "", address: "", action: 0 };
}

export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableForActionRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0,
    };
  },

  toJSON(message: QueryClaimableForActionRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClaimableForActionRequest>, I>>(base?: I): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimableForActionRequest>, I>>(
    object: I,
  ): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return { coins: [] };
}

export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableForActionResponse {
    return { coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryClaimableForActionResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryClaimableForActionResponse>, I>>(base?: I): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimableForActionResponse>, I>>(
    object: I,
  ): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return { airdropIdentifier: "", address: "" };
}

export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalClaimableRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryTotalClaimableRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTotalClaimableRequest>, I>>(base?: I): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalClaimableRequest>, I>>(object: I): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return { coins: [] };
}

export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalClaimableResponse {
    return { coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalClaimableResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTotalClaimableResponse>, I>>(base?: I): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalClaimableResponse>, I>>(object: I): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryUserVestingsRequest(): QueryUserVestingsRequest {
  return { address: "" };
}

export const QueryUserVestingsRequest = {
  encode(message: QueryUserVestingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVestingsRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryUserVestingsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUserVestingsRequest>, I>>(base?: I): QueryUserVestingsRequest {
    return QueryUserVestingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserVestingsRequest>, I>>(object: I): QueryUserVestingsRequest {
    const message = createBaseQueryUserVestingsRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryUserVestingsResponse(): QueryUserVestingsResponse {
  return { spendableCoins: [], periods: [] };
}

export const QueryUserVestingsResponse = {
  encode(message: QueryUserVestingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVestingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.spendableCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 1:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVestingsResponse {
    return {
      spendableCoins: Array.isArray(object?.spendableCoins)
        ? object.spendableCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryUserVestingsResponse): unknown {
    const obj: any = {};
    if (message.spendableCoins) {
      obj.spendableCoins = message.spendableCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spendableCoins = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map((e) => e ? Period.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUserVestingsResponse>, I>>(base?: I): QueryUserVestingsResponse {
    return QueryUserVestingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserVestingsResponse>, I>>(object: I): QueryUserVestingsResponse {
    const message = createBaseQueryUserVestingsResponse();
    message.spendableCoins = object.spendableCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  DistributorAccountBalance(
    request: DeepPartial<QueryDistributorAccountBalanceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDistributorAccountBalanceResponse>;
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  ClaimRecord(
    request: DeepPartial<QueryClaimRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimRecordResponse>;
  ClaimableForAction(
    request: DeepPartial<QueryClaimableForActionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimableForActionResponse>;
  TotalClaimable(
    request: DeepPartial<QueryTotalClaimableRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalClaimableResponse>;
  UserVestings(
    request: DeepPartial<QueryUserVestingsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUserVestingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DistributorAccountBalance = this.DistributorAccountBalance.bind(this);
    this.Params = this.Params.bind(this);
    this.ClaimRecord = this.ClaimRecord.bind(this);
    this.ClaimableForAction = this.ClaimableForAction.bind(this);
    this.TotalClaimable = this.TotalClaimable.bind(this);
    this.UserVestings = this.UserVestings.bind(this);
  }

  DistributorAccountBalance(
    request: DeepPartial<QueryDistributorAccountBalanceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDistributorAccountBalanceResponse> {
    return this.rpc.unary(
      QueryDistributorAccountBalanceDesc,
      QueryDistributorAccountBalanceRequest.fromPartial(request),
      metadata,
    );
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  ClaimRecord(
    request: DeepPartial<QueryClaimRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimRecordResponse> {
    return this.rpc.unary(QueryClaimRecordDesc, QueryClaimRecordRequest.fromPartial(request), metadata);
  }

  ClaimableForAction(
    request: DeepPartial<QueryClaimableForActionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimableForActionResponse> {
    return this.rpc.unary(QueryClaimableForActionDesc, QueryClaimableForActionRequest.fromPartial(request), metadata);
  }

  TotalClaimable(
    request: DeepPartial<QueryTotalClaimableRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalClaimableResponse> {
    return this.rpc.unary(QueryTotalClaimableDesc, QueryTotalClaimableRequest.fromPartial(request), metadata);
  }

  UserVestings(
    request: DeepPartial<QueryUserVestingsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUserVestingsResponse> {
    return this.rpc.unary(QueryUserVestingsDesc, QueryUserVestingsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "stride.claim.Query" };

export const QueryDistributorAccountBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "DistributorAccountBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDistributorAccountBalanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDistributorAccountBalanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = QueryParamsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryClaimRecordDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryClaimRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryClaimableForActionDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimableForAction",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimableForActionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryClaimableForActionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTotalClaimableDesc: UnaryMethodDefinitionish = {
  methodName: "TotalClaimable",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalClaimableRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTotalClaimableResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUserVestingsDesc: UnaryMethodDefinitionish = {
  methodName: "UserVestings",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUserVestingsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryUserVestingsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
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
    const maybeCombinedMetadata = metadata && this.options.metadata
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
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
