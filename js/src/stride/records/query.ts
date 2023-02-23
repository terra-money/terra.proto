/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import {
  Params,
  DepositRecord,
  UserRedemptionRecord,
  EpochUnbondingRecord,
} from "../../stride/records/genesis";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "stride.records";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryGetDepositRecordRequest: object = { id: Long.UZERO };

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
    const message = { ...baseQueryGetDepositRecordRequest } as QueryGetDepositRecordRequest;
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
    const message = { ...baseQueryGetDepositRecordRequest } as QueryGetDepositRecordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryGetDepositRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest {
    const message = { ...baseQueryGetDepositRecordRequest } as QueryGetDepositRecordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGetDepositRecordResponse: object = {};

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
    const message = { ...baseQueryGetDepositRecordResponse } as QueryGetDepositRecordResponse;
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
    const message = { ...baseQueryGetDepositRecordResponse } as QueryGetDepositRecordResponse;
    if (object.depositRecord !== undefined && object.depositRecord !== null) {
      message.depositRecord = DepositRecord.fromJSON(object.depositRecord);
    } else {
      message.depositRecord = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDepositRecordResponse): unknown {
    const obj: any = {};
    message.depositRecord !== undefined &&
      (obj.depositRecord = message.depositRecord ? DepositRecord.toJSON(message.depositRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse {
    const message = { ...baseQueryGetDepositRecordResponse } as QueryGetDepositRecordResponse;
    if (object.depositRecord !== undefined && object.depositRecord !== null) {
      message.depositRecord = DepositRecord.fromPartial(object.depositRecord);
    } else {
      message.depositRecord = undefined;
    }
    return message;
  },
};

const baseQueryAllDepositRecordRequest: object = {};

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
    const message = { ...baseQueryAllDepositRecordRequest } as QueryAllDepositRecordRequest;
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
    const message = { ...baseQueryAllDepositRecordRequest } as QueryAllDepositRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDepositRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest {
    const message = { ...baseQueryAllDepositRecordRequest } as QueryAllDepositRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDepositRecordResponse: object = {};

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
    const message = { ...baseQueryAllDepositRecordResponse } as QueryAllDepositRecordResponse;
    message.depositRecord = [];
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
    const message = { ...baseQueryAllDepositRecordResponse } as QueryAllDepositRecordResponse;
    message.depositRecord = [];
    if (object.depositRecord !== undefined && object.depositRecord !== null) {
      for (const e of object.depositRecord) {
        message.depositRecord.push(DepositRecord.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDepositRecordResponse): unknown {
    const obj: any = {};
    if (message.depositRecord) {
      obj.depositRecord = message.depositRecord.map((e) => (e ? DepositRecord.toJSON(e) : undefined));
    } else {
      obj.depositRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse {
    const message = { ...baseQueryAllDepositRecordResponse } as QueryAllDepositRecordResponse;
    message.depositRecord = [];
    if (object.depositRecord !== undefined && object.depositRecord !== null) {
      for (const e of object.depositRecord) {
        message.depositRecord.push(DepositRecord.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetUserRedemptionRecordRequest: object = { id: "" };

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
    const message = { ...baseQueryGetUserRedemptionRecordRequest } as QueryGetUserRedemptionRecordRequest;
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
    const message = { ...baseQueryGetUserRedemptionRecordRequest } as QueryGetUserRedemptionRecordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryGetUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest {
    const message = { ...baseQueryGetUserRedemptionRecordRequest } as QueryGetUserRedemptionRecordRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseQueryGetUserRedemptionRecordResponse: object = {};

export const QueryGetUserRedemptionRecordResponse = {
  encode(
    message: QueryGetUserRedemptionRecordResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.userRedemptionRecord !== undefined) {
      UserRedemptionRecord.encode(message.userRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserRedemptionRecordResponse } as QueryGetUserRedemptionRecordResponse;
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
    const message = { ...baseQueryGetUserRedemptionRecordResponse } as QueryGetUserRedemptionRecordResponse;
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      message.userRedemptionRecord = UserRedemptionRecord.fromJSON(object.userRedemptionRecord);
    } else {
      message.userRedemptionRecord = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUserRedemptionRecordResponse): unknown {
    const obj: any = {};
    message.userRedemptionRecord !== undefined &&
      (obj.userRedemptionRecord = message.userRedemptionRecord
        ? UserRedemptionRecord.toJSON(message.userRedemptionRecord)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUserRedemptionRecordResponse>,
  ): QueryGetUserRedemptionRecordResponse {
    const message = { ...baseQueryGetUserRedemptionRecordResponse } as QueryGetUserRedemptionRecordResponse;
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      message.userRedemptionRecord = UserRedemptionRecord.fromPartial(object.userRedemptionRecord);
    } else {
      message.userRedemptionRecord = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRedemptionRecordRequest: object = {};

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
    const message = { ...baseQueryAllUserRedemptionRecordRequest } as QueryAllUserRedemptionRecordRequest;
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
    const message = { ...baseQueryAllUserRedemptionRecordRequest } as QueryAllUserRedemptionRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRedemptionRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest {
    const message = { ...baseQueryAllUserRedemptionRecordRequest } as QueryAllUserRedemptionRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRedemptionRecordResponse: object = {};

export const QueryAllUserRedemptionRecordResponse = {
  encode(
    message: QueryAllUserRedemptionRecordResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const message = { ...baseQueryAllUserRedemptionRecordResponse } as QueryAllUserRedemptionRecordResponse;
    message.userRedemptionRecord = [];
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
    const message = { ...baseQueryAllUserRedemptionRecordResponse } as QueryAllUserRedemptionRecordResponse;
    message.userRedemptionRecord = [];
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      for (const e of object.userRedemptionRecord) {
        message.userRedemptionRecord.push(UserRedemptionRecord.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRedemptionRecordResponse): unknown {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.userRedemptionRecord = message.userRedemptionRecord.map((e) =>
        e ? UserRedemptionRecord.toJSON(e) : undefined,
      );
    } else {
      obj.userRedemptionRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserRedemptionRecordResponse>,
  ): QueryAllUserRedemptionRecordResponse {
    const message = { ...baseQueryAllUserRedemptionRecordResponse } as QueryAllUserRedemptionRecordResponse;
    message.userRedemptionRecord = [];
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      for (const e of object.userRedemptionRecord) {
        message.userRedemptionRecord.push(UserRedemptionRecord.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRedemptionRecordForUserRequest: object = {
  chainId: "",
  day: Long.UZERO,
  address: "",
  limit: Long.UZERO,
};

export const QueryAllUserRedemptionRecordForUserRequest = {
  encode(
    message: QueryAllUserRedemptionRecordForUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserRequest,
    } as QueryAllUserRedemptionRecordForUserRequest;
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
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserRequest,
    } as QueryAllUserRedemptionRecordForUserRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = Long.fromString(object.day);
    } else {
      message.day = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromString(object.limit);
    } else {
      message.limit = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>,
  ): QueryAllUserRedemptionRecordForUserRequest {
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserRequest,
    } as QueryAllUserRedemptionRecordForUserRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = object.day as Long;
    } else {
      message.day = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit as Long;
    } else {
      message.limit = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRedemptionRecordForUserResponse: object = {};

export const QueryAllUserRedemptionRecordForUserResponse = {
  encode(
    message: QueryAllUserRedemptionRecordForUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserResponse,
    } as QueryAllUserRedemptionRecordForUserResponse;
    message.userRedemptionRecord = [];
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
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserResponse,
    } as QueryAllUserRedemptionRecordForUserResponse;
    message.userRedemptionRecord = [];
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      for (const e of object.userRedemptionRecord) {
        message.userRedemptionRecord.push(UserRedemptionRecord.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRedemptionRecordForUserResponse): unknown {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.userRedemptionRecord = message.userRedemptionRecord.map((e) =>
        e ? UserRedemptionRecord.toJSON(e) : undefined,
      );
    } else {
      obj.userRedemptionRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserRedemptionRecordForUserResponse>,
  ): QueryAllUserRedemptionRecordForUserResponse {
    const message = {
      ...baseQueryAllUserRedemptionRecordForUserResponse,
    } as QueryAllUserRedemptionRecordForUserResponse;
    message.userRedemptionRecord = [];
    if (object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null) {
      for (const e of object.userRedemptionRecord) {
        message.userRedemptionRecord.push(UserRedemptionRecord.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetEpochUnbondingRecordRequest: object = { epochNumber: Long.UZERO };

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
    const message = { ...baseQueryGetEpochUnbondingRecordRequest } as QueryGetEpochUnbondingRecordRequest;
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
    const message = { ...baseQueryGetEpochUnbondingRecordRequest } as QueryGetEpochUnbondingRecordRequest;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryGetEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest {
    const message = { ...baseQueryGetEpochUnbondingRecordRequest } as QueryGetEpochUnbondingRecordRequest;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGetEpochUnbondingRecordResponse: object = {};

export const QueryGetEpochUnbondingRecordResponse = {
  encode(
    message: QueryGetEpochUnbondingRecordResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.epochUnbondingRecord !== undefined) {
      EpochUnbondingRecord.encode(message.epochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetEpochUnbondingRecordResponse } as QueryGetEpochUnbondingRecordResponse;
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
    const message = { ...baseQueryGetEpochUnbondingRecordResponse } as QueryGetEpochUnbondingRecordResponse;
    if (object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null) {
      message.epochUnbondingRecord = EpochUnbondingRecord.fromJSON(object.epochUnbondingRecord);
    } else {
      message.epochUnbondingRecord = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetEpochUnbondingRecordResponse): unknown {
    const obj: any = {};
    message.epochUnbondingRecord !== undefined &&
      (obj.epochUnbondingRecord = message.epochUnbondingRecord
        ? EpochUnbondingRecord.toJSON(message.epochUnbondingRecord)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEpochUnbondingRecordResponse>,
  ): QueryGetEpochUnbondingRecordResponse {
    const message = { ...baseQueryGetEpochUnbondingRecordResponse } as QueryGetEpochUnbondingRecordResponse;
    if (object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null) {
      message.epochUnbondingRecord = EpochUnbondingRecord.fromPartial(object.epochUnbondingRecord);
    } else {
      message.epochUnbondingRecord = undefined;
    }
    return message;
  },
};

const baseQueryAllEpochUnbondingRecordRequest: object = {};

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
    const message = { ...baseQueryAllEpochUnbondingRecordRequest } as QueryAllEpochUnbondingRecordRequest;
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
    const message = { ...baseQueryAllEpochUnbondingRecordRequest } as QueryAllEpochUnbondingRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEpochUnbondingRecordRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest {
    const message = { ...baseQueryAllEpochUnbondingRecordRequest } as QueryAllEpochUnbondingRecordRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllEpochUnbondingRecordResponse: object = {};

export const QueryAllEpochUnbondingRecordResponse = {
  encode(
    message: QueryAllEpochUnbondingRecordResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const message = { ...baseQueryAllEpochUnbondingRecordResponse } as QueryAllEpochUnbondingRecordResponse;
    message.epochUnbondingRecord = [];
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
    const message = { ...baseQueryAllEpochUnbondingRecordResponse } as QueryAllEpochUnbondingRecordResponse;
    message.epochUnbondingRecord = [];
    if (object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null) {
      for (const e of object.epochUnbondingRecord) {
        message.epochUnbondingRecord.push(EpochUnbondingRecord.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEpochUnbondingRecordResponse): unknown {
    const obj: any = {};
    if (message.epochUnbondingRecord) {
      obj.epochUnbondingRecord = message.epochUnbondingRecord.map((e) =>
        e ? EpochUnbondingRecord.toJSON(e) : undefined,
      );
    } else {
      obj.epochUnbondingRecord = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllEpochUnbondingRecordResponse>,
  ): QueryAllEpochUnbondingRecordResponse {
    const message = { ...baseQueryAllEpochUnbondingRecordResponse } as QueryAllEpochUnbondingRecordResponse;
    message.epochUnbondingRecord = [];
    if (object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null) {
      for (const e of object.epochUnbondingRecord) {
        message.epochUnbondingRecord.push(EpochUnbondingRecord.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    return this.rpc.unary(
      QueryDepositRecordDesc,
      QueryGetDepositRecordRequest.fromPartial(request),
      metadata,
    );
  }

  DepositRecordAll(
    request: DeepPartial<QueryAllDepositRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllDepositRecordResponse> {
    return this.rpc.unary(
      QueryDepositRecordAllDesc,
      QueryAllDepositRecordRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "stride.records.Query",
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
      return {
        ...QueryGetUserRedemptionRecordResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllUserRedemptionRecordResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllUserRedemptionRecordForUserResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryGetEpochUnbondingRecordResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllEpochUnbondingRecordResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryGetDepositRecordResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllDepositRecordResponse.decode(data),
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
