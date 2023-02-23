/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { DepositRecord, EpochUnbondingRecord, Params, UserRedemptionRecord } from "./genesis";

export const protobufPackage = "stride.records";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetDepositRecordRequest {
  id: Long;
}

export interface QueryGetDepositRecordResponse {
  depositRecord?: DepositRecord;
}

export interface QueryAllDepositRecordRequest {
  pagination?: PageRequest;
}

export interface QueryAllDepositRecordResponse {
  depositRecord: DepositRecord[];
  pagination?: PageResponse;
}

export interface QueryGetUserRedemptionRecordRequest {
  id: string;
}

export interface QueryGetUserRedemptionRecordResponse {
  userRedemptionRecord?: UserRedemptionRecord;
}

export interface QueryAllUserRedemptionRecordRequest {
  pagination?: PageRequest;
}

export interface QueryAllUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}

/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
  chainId: string;
  day: Long;
  address: string;
  limit: Long;
  pagination?: PageRequest;
}

export interface QueryAllUserRedemptionRecordForUserResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}

export interface QueryGetEpochUnbondingRecordRequest {
  epochNumber: Long;
}

export interface QueryGetEpochUnbondingRecordResponse {
  epochUnbondingRecord?: EpochUnbondingRecord;
}

export interface QueryAllEpochUnbondingRecordRequest {
  pagination?: PageRequest;
}

export interface QueryAllEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord[];
  pagination?: PageResponse;
}

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

function createBaseQueryGetDepositRecordRequest(): QueryGetDepositRecordRequest {
  return { id: Long.UZERO };
}

export const QueryGetDepositRecordRequest = {
  encode(message: QueryGetDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositRecordRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryGetDepositRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetDepositRecordRequest>, I>>(base?: I): QueryGetDepositRecordRequest {
    return QueryGetDepositRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDepositRecordRequest>, I>>(object: I): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetDepositRecordResponse(): QueryGetDepositRecordResponse {
  return { depositRecord: undefined };
}

export const QueryGetDepositRecordResponse = {
  encode(message: QueryGetDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositRecord !== undefined) {
      DepositRecord.encode(message.depositRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord = DepositRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositRecordResponse {
    return { depositRecord: isSet(object.depositRecord) ? DepositRecord.fromJSON(object.depositRecord) : undefined };
  },

  toJSON(message: QueryGetDepositRecordResponse): unknown {
    const obj: any = {};
    message.depositRecord !== undefined &&
      (obj.depositRecord = message.depositRecord ? DepositRecord.toJSON(message.depositRecord) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetDepositRecordResponse>, I>>(base?: I): QueryGetDepositRecordResponse {
    return QueryGetDepositRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDepositRecordResponse>, I>>(
    object: I,
  ): QueryGetDepositRecordResponse {
    const message = createBaseQueryGetDepositRecordResponse();
    message.depositRecord = (object.depositRecord !== undefined && object.depositRecord !== null)
      ? DepositRecord.fromPartial(object.depositRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDepositRecordRequest(): QueryAllDepositRecordRequest {
  return { pagination: undefined };
}

export const QueryAllDepositRecordRequest = {
  encode(message: QueryAllDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDepositRecordRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDepositRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllDepositRecordRequest>, I>>(base?: I): QueryAllDepositRecordRequest {
    return QueryAllDepositRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDepositRecordRequest>, I>>(object: I): QueryAllDepositRecordRequest {
    const message = createBaseQueryAllDepositRecordRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDepositRecordResponse(): QueryAllDepositRecordResponse {
  return { depositRecord: [], pagination: undefined };
}

export const QueryAllDepositRecordResponse = {
  encode(message: QueryAllDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDepositRecordResponse {
    return {
      depositRecord: Array.isArray(object?.depositRecord)
        ? object.depositRecord.map((e: any) => DepositRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDepositRecordResponse): unknown {
    const obj: any = {};
    if (message.depositRecord) {
      obj.depositRecord = message.depositRecord.map((e) => e ? DepositRecord.toJSON(e) : undefined);
    } else {
      obj.depositRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllDepositRecordResponse>, I>>(base?: I): QueryAllDepositRecordResponse {
    return QueryAllDepositRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDepositRecordResponse>, I>>(
    object: I,
  ): QueryAllDepositRecordResponse {
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.depositRecord?.map((e) => DepositRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetUserRedemptionRecordRequest(): QueryGetUserRedemptionRecordRequest {
  return { id: "" };
}

export const QueryGetUserRedemptionRecordRequest = {
  encode(message: QueryGetUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRedemptionRecordRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetUserRedemptionRecordRequest>, I>>(
    base?: I,
  ): QueryGetUserRedemptionRecordRequest {
    return QueryGetUserRedemptionRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserRedemptionRecordRequest>, I>>(
    object: I,
  ): QueryGetUserRedemptionRecordRequest {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetUserRedemptionRecordResponse(): QueryGetUserRedemptionRecordResponse {
  return { userRedemptionRecord: undefined };
}

export const QueryGetUserRedemptionRecordResponse = {
  encode(message: QueryGetUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userRedemptionRecord !== undefined) {
      UserRedemptionRecord.encode(message.userRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord = UserRedemptionRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: isSet(object.userRedemptionRecord)
        ? UserRedemptionRecord.fromJSON(object.userRedemptionRecord)
        : undefined,
    };
  },

  toJSON(message: QueryGetUserRedemptionRecordResponse): unknown {
    const obj: any = {};
    message.userRedemptionRecord !== undefined && (obj.userRedemptionRecord = message.userRedemptionRecord
      ? UserRedemptionRecord.toJSON(message.userRedemptionRecord)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetUserRedemptionRecordResponse>, I>>(
    base?: I,
  ): QueryGetUserRedemptionRecordResponse {
    return QueryGetUserRedemptionRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserRedemptionRecordResponse>, I>>(
    object: I,
  ): QueryGetUserRedemptionRecordResponse {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    message.userRedemptionRecord = (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null)
      ? UserRedemptionRecord.fromPartial(object.userRedemptionRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserRedemptionRecordRequest(): QueryAllUserRedemptionRecordRequest {
  return { pagination: undefined };
}

export const QueryAllUserRedemptionRecordRequest = {
  encode(message: QueryAllUserRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordRequest>, I>>(
    base?: I,
  ): QueryAllUserRedemptionRecordRequest {
    return QueryAllUserRedemptionRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordRequest>, I>>(
    object: I,
  ): QueryAllUserRedemptionRecordRequest {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserRedemptionRecordResponse(): QueryAllUserRedemptionRecordResponse {
  return { userRedemptionRecord: [], pagination: undefined };
}

export const QueryAllUserRedemptionRecordResponse = {
  encode(message: QueryAllUserRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.userRedemptionRecord)
        ? object.userRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordResponse): unknown {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.userRedemptionRecord = message.userRedemptionRecord.map((e) =>
        e ? UserRedemptionRecord.toJSON(e) : undefined
      );
    } else {
      obj.userRedemptionRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordResponse>, I>>(
    base?: I,
  ): QueryAllUserRedemptionRecordResponse {
    return QueryAllUserRedemptionRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordResponse>, I>>(
    object: I,
  ): QueryAllUserRedemptionRecordResponse {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map((e) => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserRedemptionRecordForUserRequest(): QueryAllUserRedemptionRecordForUserRequest {
  return { chainId: "", day: Long.UZERO, address: "", limit: Long.UZERO, pagination: undefined };
}

export const QueryAllUserRedemptionRecordForUserRequest = {
  encode(message: QueryAllUserRedemptionRecordForUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.day.isZero()) {
      writer.uint32(16).uint64(message.day);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (!message.limit.isZero()) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.day = reader.uint64() as Long;
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.limit = reader.uint64() as Long;
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordForUserRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      day: isSet(object.day) ? Long.fromValue(object.day) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordForUserRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.day !== undefined && (obj.day = (message.day || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordForUserRequest>, I>>(
    base?: I,
  ): QueryAllUserRedemptionRecordForUserRequest {
    return QueryAllUserRedemptionRecordForUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordForUserRequest>, I>>(
    object: I,
  ): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = (object.day !== undefined && object.day !== null) ? Long.fromValue(object.day) : Long.UZERO;
    message.address = object.address ?? "";
    message.limit = (object.limit !== undefined && object.limit !== null) ? Long.fromValue(object.limit) : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserRedemptionRecordForUserResponse(): QueryAllUserRedemptionRecordForUserResponse {
  return { userRedemptionRecord: [], pagination: undefined };
}

export const QueryAllUserRedemptionRecordForUserResponse = {
  encode(message: QueryAllUserRedemptionRecordForUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRedemptionRecordForUserResponse {
    return {
      userRedemptionRecord: Array.isArray(object?.userRedemptionRecord)
        ? object.userRedemptionRecord.map((e: any) => UserRedemptionRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserRedemptionRecordForUserResponse): unknown {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.userRedemptionRecord = message.userRedemptionRecord.map((e) =>
        e ? UserRedemptionRecord.toJSON(e) : undefined
      );
    } else {
      obj.userRedemptionRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordForUserResponse>, I>>(
    base?: I,
  ): QueryAllUserRedemptionRecordForUserResponse {
    return QueryAllUserRedemptionRecordForUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRedemptionRecordForUserResponse>, I>>(
    object: I,
  ): QueryAllUserRedemptionRecordForUserResponse {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map((e) => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEpochUnbondingRecordRequest(): QueryGetEpochUnbondingRecordRequest {
  return { epochNumber: Long.UZERO };
}

export const QueryGetEpochUnbondingRecordRequest = {
  encode(message: QueryGetEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochUnbondingRecordRequest {
    return { epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO };
  },

  toJSON(message: QueryGetEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochUnbondingRecordRequest>, I>>(
    base?: I,
  ): QueryGetEpochUnbondingRecordRequest {
    return QueryGetEpochUnbondingRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEpochUnbondingRecordRequest>, I>>(
    object: I,
  ): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = (object.epochNumber !== undefined && object.epochNumber !== null)
      ? Long.fromValue(object.epochNumber)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetEpochUnbondingRecordResponse(): QueryGetEpochUnbondingRecordResponse {
  return { epochUnbondingRecord: undefined };
}

export const QueryGetEpochUnbondingRecordResponse = {
  encode(message: QueryGetEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochUnbondingRecord !== undefined) {
      EpochUnbondingRecord.encode(message.epochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord = EpochUnbondingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: isSet(object.epochUnbondingRecord)
        ? EpochUnbondingRecord.fromJSON(object.epochUnbondingRecord)
        : undefined,
    };
  },

  toJSON(message: QueryGetEpochUnbondingRecordResponse): unknown {
    const obj: any = {};
    message.epochUnbondingRecord !== undefined && (obj.epochUnbondingRecord = message.epochUnbondingRecord
      ? EpochUnbondingRecord.toJSON(message.epochUnbondingRecord)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochUnbondingRecordResponse>, I>>(
    base?: I,
  ): QueryGetEpochUnbondingRecordResponse {
    return QueryGetEpochUnbondingRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEpochUnbondingRecordResponse>, I>>(
    object: I,
  ): QueryGetEpochUnbondingRecordResponse {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = (object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null)
      ? EpochUnbondingRecord.fromPartial(object.epochUnbondingRecord)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEpochUnbondingRecordRequest(): QueryAllEpochUnbondingRecordRequest {
  return { pagination: undefined };
}

export const QueryAllEpochUnbondingRecordRequest = {
  encode(message: QueryAllEpochUnbondingRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEpochUnbondingRecordRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochUnbondingRecordRequest>, I>>(
    base?: I,
  ): QueryAllEpochUnbondingRecordRequest {
    return QueryAllEpochUnbondingRecordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochUnbondingRecordRequest>, I>>(
    object: I,
  ): QueryAllEpochUnbondingRecordRequest {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEpochUnbondingRecordResponse(): QueryAllEpochUnbondingRecordResponse {
  return { epochUnbondingRecord: [], pagination: undefined };
}

export const QueryAllEpochUnbondingRecordResponse = {
  encode(message: QueryAllEpochUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochUnbondingRecord) {
      EpochUnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEpochUnbondingRecordResponse {
    return {
      epochUnbondingRecord: Array.isArray(object?.epochUnbondingRecord)
        ? object.epochUnbondingRecord.map((e: any) => EpochUnbondingRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEpochUnbondingRecordResponse): unknown {
    const obj: any = {};
    if (message.epochUnbondingRecord) {
      obj.epochUnbondingRecord = message.epochUnbondingRecord.map((e) =>
        e ? EpochUnbondingRecord.toJSON(e) : undefined
      );
    } else {
      obj.epochUnbondingRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochUnbondingRecordResponse>, I>>(
    base?: I,
  ): QueryAllEpochUnbondingRecordResponse {
    return QueryAllEpochUnbondingRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochUnbondingRecordResponse>, I>>(
    object: I,
  ): QueryAllEpochUnbondingRecordResponse {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord?.map((e) => EpochUnbondingRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a UserRedemptionRecord by id. */
  UserRedemptionRecord(
    request: DeepPartial<QueryGetUserRedemptionRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetUserRedemptionRecordResponse>;
  /** Queries a list of UserRedemptionRecord items. */
  UserRedemptionRecordAll(
    request: DeepPartial<QueryAllUserRedemptionRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllUserRedemptionRecordResponse>;
  /** Queries a list of UserRedemptionRecord items by chainId / userId pair. */
  UserRedemptionRecordForUser(
    request: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllUserRedemptionRecordForUserResponse>;
  /** Queries a EpochUnbondingRecord by id. */
  EpochUnbondingRecord(
    request: DeepPartial<QueryGetEpochUnbondingRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetEpochUnbondingRecordResponse>;
  /** Queries a list of EpochUnbondingRecord items. */
  EpochUnbondingRecordAll(
    request: DeepPartial<QueryAllEpochUnbondingRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllEpochUnbondingRecordResponse>;
  /** Queries a DepositRecord by id. */
  DepositRecord(
    request: DeepPartial<QueryGetDepositRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetDepositRecordResponse>;
  /** Queries a list of DepositRecord items. */
  DepositRecordAll(
    request: DeepPartial<QueryAllDepositRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllDepositRecordResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.UserRedemptionRecord = this.UserRedemptionRecord.bind(this);
    this.UserRedemptionRecordAll = this.UserRedemptionRecordAll.bind(this);
    this.UserRedemptionRecordForUser = this.UserRedemptionRecordForUser.bind(this);
    this.EpochUnbondingRecord = this.EpochUnbondingRecord.bind(this);
    this.EpochUnbondingRecordAll = this.EpochUnbondingRecordAll.bind(this);
    this.DepositRecord = this.DepositRecord.bind(this);
    this.DepositRecordAll = this.DepositRecordAll.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  UserRedemptionRecord(
    request: DeepPartial<QueryGetUserRedemptionRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetUserRedemptionRecordResponse> {
    return this.rpc.unary(
      QueryUserRedemptionRecordDesc,
      QueryGetUserRedemptionRecordRequest.fromPartial(request),
      metadata,
    );
  }

  UserRedemptionRecordAll(
    request: DeepPartial<QueryAllUserRedemptionRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllUserRedemptionRecordResponse> {
    return this.rpc.unary(
      QueryUserRedemptionRecordAllDesc,
      QueryAllUserRedemptionRecordRequest.fromPartial(request),
      metadata,
    );
  }

  UserRedemptionRecordForUser(
    request: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllUserRedemptionRecordForUserResponse> {
    return this.rpc.unary(
      QueryUserRedemptionRecordForUserDesc,
      QueryAllUserRedemptionRecordForUserRequest.fromPartial(request),
      metadata,
    );
  }

  EpochUnbondingRecord(
    request: DeepPartial<QueryGetEpochUnbondingRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetEpochUnbondingRecordResponse> {
    return this.rpc.unary(
      QueryEpochUnbondingRecordDesc,
      QueryGetEpochUnbondingRecordRequest.fromPartial(request),
      metadata,
    );
  }

  EpochUnbondingRecordAll(
    request: DeepPartial<QueryAllEpochUnbondingRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllEpochUnbondingRecordResponse> {
    return this.rpc.unary(
      QueryEpochUnbondingRecordAllDesc,
      QueryAllEpochUnbondingRecordRequest.fromPartial(request),
      metadata,
    );
  }

  DepositRecord(
    request: DeepPartial<QueryGetDepositRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetDepositRecordResponse> {
    return this.rpc.unary(QueryDepositRecordDesc, QueryGetDepositRecordRequest.fromPartial(request), metadata);
  }

  DepositRecordAll(
    request: DeepPartial<QueryAllDepositRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllDepositRecordResponse> {
    return this.rpc.unary(QueryDepositRecordAllDesc, QueryAllDepositRecordRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "stride.records.Query" };

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

export const QueryUserRedemptionRecordDesc: UnaryMethodDefinitionish = {
  methodName: "UserRedemptionRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetUserRedemptionRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetUserRedemptionRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUserRedemptionRecordAllDesc: UnaryMethodDefinitionish = {
  methodName: "UserRedemptionRecordAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllUserRedemptionRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllUserRedemptionRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUserRedemptionRecordForUserDesc: UnaryMethodDefinitionish = {
  methodName: "UserRedemptionRecordForUser",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllUserRedemptionRecordForUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllUserRedemptionRecordForUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryEpochUnbondingRecordDesc: UnaryMethodDefinitionish = {
  methodName: "EpochUnbondingRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetEpochUnbondingRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetEpochUnbondingRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryEpochUnbondingRecordAllDesc: UnaryMethodDefinitionish = {
  methodName: "EpochUnbondingRecordAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllEpochUnbondingRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllEpochUnbondingRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDepositRecordDesc: UnaryMethodDefinitionish = {
  methodName: "DepositRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetDepositRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetDepositRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDepositRecordAllDesc: UnaryMethodDefinitionish = {
  methodName: "DepositRecordAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllDepositRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllDepositRecordResponse.decode(data);
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
