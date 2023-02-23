/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochTracker } from "./epoch_tracker";
import { HostZone } from "./host_zone";
import { ICAAccount } from "./ica_account";
import { Params } from "./params";
import { Validator } from "./validator";

export const protobufPackage = "stride.stakeibc";

/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
  owner: string;
  connectionId: string;
}

/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponse {
  interchainAccountAddress: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetValidatorsRequest {
  chainId: string;
}

export interface QueryGetValidatorsResponse {
  validators: Validator[];
}

export interface QueryGetICAAccountRequest {
}

export interface QueryGetICAAccountResponse {
  icaAccount?: ICAAccount;
}

export interface QueryGetHostZoneRequest {
  chainId: string;
}

export interface QueryGetHostZoneResponse {
  hostZone?: HostZone;
}

export interface QueryAllHostZoneRequest {
  pagination?: PageRequest;
}

export interface QueryAllHostZoneResponse {
  hostZone: HostZone[];
  pagination?: PageResponse;
}

export interface QueryModuleAddressRequest {
  name: string;
}

export interface QueryModuleAddressResponse {
  addr: string;
}

export interface QueryGetEpochTrackerRequest {
  epochIdentifier: string;
}

export interface QueryGetEpochTrackerResponse {
  epochTracker?: EpochTracker;
}

export interface QueryAllEpochTrackerRequest {
  pagination?: PageRequest;
}

export interface QueryAllEpochTrackerResponse {
  epochTracker: EpochTracker[];
  pagination?: PageResponse;
}

function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return { owner: "", connectionId: "" };
}

export const QueryInterchainAccountFromAddressRequest = {
  encode(message: QueryInterchainAccountFromAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromAddressRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: QueryInterchainAccountFromAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInterchainAccountFromAddressRequest>, I>>(
    base?: I,
  ): QueryInterchainAccountFromAddressRequest {
    return QueryInterchainAccountFromAddressRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountFromAddressRequest>, I>>(
    object: I,
  ): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return { interchainAccountAddress: "" };
}

export const QueryInterchainAccountFromAddressResponse = {
  encode(message: QueryInterchainAccountFromAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : "",
    };
  },

  toJSON(message: QueryInterchainAccountFromAddressResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInterchainAccountFromAddressResponse>, I>>(
    base?: I,
  ): QueryInterchainAccountFromAddressResponse {
    return QueryInterchainAccountFromAddressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountFromAddressResponse>, I>>(
    object: I,
  ): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
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

function createBaseQueryGetValidatorsRequest(): QueryGetValidatorsRequest {
  return { chainId: "" };
}

export const QueryGetValidatorsRequest = {
  encode(message: QueryGetValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorsRequest {
    return { chainId: isSet(object.chainId) ? String(object.chainId) : "" };
  },

  toJSON(message: QueryGetValidatorsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetValidatorsRequest>, I>>(base?: I): QueryGetValidatorsRequest {
    return QueryGetValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetValidatorsRequest>, I>>(object: I): QueryGetValidatorsRequest {
    const message = createBaseQueryGetValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseQueryGetValidatorsResponse(): QueryGetValidatorsResponse {
  return { validators: [] };
}

export const QueryGetValidatorsResponse = {
  encode(message: QueryGetValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryGetValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetValidatorsResponse>, I>>(base?: I): QueryGetValidatorsResponse {
    return QueryGetValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetValidatorsResponse>, I>>(object: I): QueryGetValidatorsResponse {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetICAAccountRequest(): QueryGetICAAccountRequest {
  return {};
}

export const QueryGetICAAccountRequest = {
  encode(_: QueryGetICAAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetICAAccountRequest();
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

  fromJSON(_: any): QueryGetICAAccountRequest {
    return {};
  },

  toJSON(_: QueryGetICAAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetICAAccountRequest>, I>>(base?: I): QueryGetICAAccountRequest {
    return QueryGetICAAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetICAAccountRequest>, I>>(_: I): QueryGetICAAccountRequest {
    const message = createBaseQueryGetICAAccountRequest();
    return message;
  },
};

function createBaseQueryGetICAAccountResponse(): QueryGetICAAccountResponse {
  return { icaAccount: undefined };
}

export const QueryGetICAAccountResponse = {
  encode(message: QueryGetICAAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.icaAccount !== undefined) {
      ICAAccount.encode(message.icaAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetICAAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icaAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetICAAccountResponse {
    return { icaAccount: isSet(object.icaAccount) ? ICAAccount.fromJSON(object.icaAccount) : undefined };
  },

  toJSON(message: QueryGetICAAccountResponse): unknown {
    const obj: any = {};
    message.icaAccount !== undefined &&
      (obj.icaAccount = message.icaAccount ? ICAAccount.toJSON(message.icaAccount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetICAAccountResponse>, I>>(base?: I): QueryGetICAAccountResponse {
    return QueryGetICAAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetICAAccountResponse>, I>>(object: I): QueryGetICAAccountResponse {
    const message = createBaseQueryGetICAAccountResponse();
    message.icaAccount = (object.icaAccount !== undefined && object.icaAccount !== null)
      ? ICAAccount.fromPartial(object.icaAccount)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHostZoneRequest(): QueryGetHostZoneRequest {
  return { chainId: "" };
}

export const QueryGetHostZoneRequest = {
  encode(message: QueryGetHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostZoneRequest {
    return { chainId: isSet(object.chainId) ? String(object.chainId) : "" };
  },

  toJSON(message: QueryGetHostZoneRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHostZoneRequest>, I>>(base?: I): QueryGetHostZoneRequest {
    return QueryGetHostZoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostZoneRequest>, I>>(object: I): QueryGetHostZoneRequest {
    const message = createBaseQueryGetHostZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseQueryGetHostZoneResponse(): QueryGetHostZoneResponse {
  return { hostZone: undefined };
}

export const QueryGetHostZoneResponse = {
  encode(message: QueryGetHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone = HostZone.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHostZoneResponse {
    return { hostZone: isSet(object.hostZone) ? HostZone.fromJSON(object.hostZone) : undefined };
  },

  toJSON(message: QueryGetHostZoneResponse): unknown {
    const obj: any = {};
    message.hostZone !== undefined && (obj.hostZone = message.hostZone ? HostZone.toJSON(message.hostZone) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHostZoneResponse>, I>>(base?: I): QueryGetHostZoneResponse {
    return QueryGetHostZoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHostZoneResponse>, I>>(object: I): QueryGetHostZoneResponse {
    const message = createBaseQueryGetHostZoneResponse();
    message.hostZone = (object.hostZone !== undefined && object.hostZone !== null)
      ? HostZone.fromPartial(object.hostZone)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostZoneRequest(): QueryAllHostZoneRequest {
  return { pagination: undefined };
}

export const QueryAllHostZoneRequest = {
  encode(message: QueryAllHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneRequest();
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

  fromJSON(object: any): QueryAllHostZoneRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHostZoneRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllHostZoneRequest>, I>>(base?: I): QueryAllHostZoneRequest {
    return QueryAllHostZoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostZoneRequest>, I>>(object: I): QueryAllHostZoneRequest {
    const message = createBaseQueryAllHostZoneRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHostZoneResponse(): QueryAllHostZoneResponse {
  return { hostZone: [], pagination: undefined };
}

export const QueryAllHostZoneResponse = {
  encode(message: QueryAllHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostZone) {
      HostZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone.push(HostZone.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHostZoneResponse {
    return {
      hostZone: Array.isArray(object?.hostZone) ? object.hostZone.map((e: any) => HostZone.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHostZoneResponse): unknown {
    const obj: any = {};
    if (message.hostZone) {
      obj.hostZone = message.hostZone.map((e) => e ? HostZone.toJSON(e) : undefined);
    } else {
      obj.hostZone = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllHostZoneResponse>, I>>(base?: I): QueryAllHostZoneResponse {
    return QueryAllHostZoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHostZoneResponse>, I>>(object: I): QueryAllHostZoneResponse {
    const message = createBaseQueryAllHostZoneResponse();
    message.hostZone = object.hostZone?.map((e) => HostZone.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryModuleAddressRequest(): QueryModuleAddressRequest {
  return { name: "" };
}

export const QueryModuleAddressRequest = {
  encode(message: QueryModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAddressRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryModuleAddressRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryModuleAddressRequest>, I>>(base?: I): QueryModuleAddressRequest {
    return QueryModuleAddressRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAddressRequest>, I>>(object: I): QueryModuleAddressRequest {
    const message = createBaseQueryModuleAddressRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryModuleAddressResponse(): QueryModuleAddressResponse {
  return { addr: "" };
}

export const QueryModuleAddressResponse = {
  encode(message: QueryModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAddressResponse {
    return { addr: isSet(object.addr) ? String(object.addr) : "" };
  },

  toJSON(message: QueryModuleAddressResponse): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryModuleAddressResponse>, I>>(base?: I): QueryModuleAddressResponse {
    return QueryModuleAddressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAddressResponse>, I>>(object: I): QueryModuleAddressResponse {
    const message = createBaseQueryModuleAddressResponse();
    message.addr = object.addr ?? "";
    return message;
  },
};

function createBaseQueryGetEpochTrackerRequest(): QueryGetEpochTrackerRequest {
  return { epochIdentifier: "" };
}

export const QueryGetEpochTrackerRequest = {
  encode(message: QueryGetEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochTrackerRequest {
    return { epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "" };
  },

  toJSON(message: QueryGetEpochTrackerRequest): unknown {
    const obj: any = {};
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochTrackerRequest>, I>>(base?: I): QueryGetEpochTrackerRequest {
    return QueryGetEpochTrackerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEpochTrackerRequest>, I>>(object: I): QueryGetEpochTrackerRequest {
    const message = createBaseQueryGetEpochTrackerRequest();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  },
};

function createBaseQueryGetEpochTrackerResponse(): QueryGetEpochTrackerResponse {
  return { epochTracker: undefined };
}

export const QueryGetEpochTrackerResponse = {
  encode(message: QueryGetEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochTracker !== undefined) {
      EpochTracker.encode(message.epochTracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTracker = EpochTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochTrackerResponse {
    return { epochTracker: isSet(object.epochTracker) ? EpochTracker.fromJSON(object.epochTracker) : undefined };
  },

  toJSON(message: QueryGetEpochTrackerResponse): unknown {
    const obj: any = {};
    message.epochTracker !== undefined &&
      (obj.epochTracker = message.epochTracker ? EpochTracker.toJSON(message.epochTracker) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochTrackerResponse>, I>>(base?: I): QueryGetEpochTrackerResponse {
    return QueryGetEpochTrackerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEpochTrackerResponse>, I>>(object: I): QueryGetEpochTrackerResponse {
    const message = createBaseQueryGetEpochTrackerResponse();
    message.epochTracker = (object.epochTracker !== undefined && object.epochTracker !== null)
      ? EpochTracker.fromPartial(object.epochTracker)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEpochTrackerRequest(): QueryAllEpochTrackerRequest {
  return { pagination: undefined };
}

export const QueryAllEpochTrackerRequest = {
  encode(message: QueryAllEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerRequest();
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

  fromJSON(object: any): QueryAllEpochTrackerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllEpochTrackerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochTrackerRequest>, I>>(base?: I): QueryAllEpochTrackerRequest {
    return QueryAllEpochTrackerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochTrackerRequest>, I>>(object: I): QueryAllEpochTrackerRequest {
    const message = createBaseQueryAllEpochTrackerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEpochTrackerResponse(): QueryAllEpochTrackerResponse {
  return { epochTracker: [], pagination: undefined };
}

export const QueryAllEpochTrackerResponse = {
  encode(message: QueryAllEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochTracker) {
      EpochTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTracker.push(EpochTracker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllEpochTrackerResponse {
    return {
      epochTracker: Array.isArray(object?.epochTracker)
        ? object.epochTracker.map((e: any) => EpochTracker.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEpochTrackerResponse): unknown {
    const obj: any = {};
    if (message.epochTracker) {
      obj.epochTracker = message.epochTracker.map((e) => e ? EpochTracker.toJSON(e) : undefined);
    } else {
      obj.epochTracker = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochTrackerResponse>, I>>(base?: I): QueryAllEpochTrackerResponse {
    return QueryAllEpochTrackerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochTrackerResponse>, I>>(object: I): QueryAllEpochTrackerResponse {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epochTracker?.map((e) => EpochTracker.fromPartial(e)) || [];
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
  /** Queries a Validator by host zone. */
  Validators(
    request: DeepPartial<QueryGetValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetValidatorsResponse>;
  /** Queries a ICAAccount by index. */
  ICAAccount(
    request: DeepPartial<QueryGetICAAccountRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetICAAccountResponse>;
  /** Queries a HostZone by id. */
  HostZone(request: DeepPartial<QueryGetHostZoneRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostZoneResponse>;
  /** Queries a list of HostZone items. */
  HostZoneAll(
    request: DeepPartial<QueryAllHostZoneRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllHostZoneResponse>;
  /** Queries a list of ModuleAddress items. */
  ModuleAddress(
    request: DeepPartial<QueryModuleAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryModuleAddressResponse>;
  /**
   * QueryInterchainAccountFromAddress returns the interchain account for given
   * owner address on a given connection pair
   */
  InterchainAccountFromAddress(
    request: DeepPartial<QueryInterchainAccountFromAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryInterchainAccountFromAddressResponse>;
  /** Queries a EpochTracker by index. */
  EpochTracker(
    request: DeepPartial<QueryGetEpochTrackerRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetEpochTrackerResponse>;
  /** Queries a list of EpochTracker items. */
  EpochTrackerAll(
    request: DeepPartial<QueryAllEpochTrackerRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllEpochTrackerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Validators = this.Validators.bind(this);
    this.ICAAccount = this.ICAAccount.bind(this);
    this.HostZone = this.HostZone.bind(this);
    this.HostZoneAll = this.HostZoneAll.bind(this);
    this.ModuleAddress = this.ModuleAddress.bind(this);
    this.InterchainAccountFromAddress = this.InterchainAccountFromAddress.bind(this);
    this.EpochTracker = this.EpochTracker.bind(this);
    this.EpochTrackerAll = this.EpochTrackerAll.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  Validators(
    request: DeepPartial<QueryGetValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetValidatorsResponse> {
    return this.rpc.unary(QueryValidatorsDesc, QueryGetValidatorsRequest.fromPartial(request), metadata);
  }

  ICAAccount(
    request: DeepPartial<QueryGetICAAccountRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetICAAccountResponse> {
    return this.rpc.unary(QueryICAAccountDesc, QueryGetICAAccountRequest.fromPartial(request), metadata);
  }

  HostZone(request: DeepPartial<QueryGetHostZoneRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostZoneResponse> {
    return this.rpc.unary(QueryHostZoneDesc, QueryGetHostZoneRequest.fromPartial(request), metadata);
  }

  HostZoneAll(
    request: DeepPartial<QueryAllHostZoneRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllHostZoneResponse> {
    return this.rpc.unary(QueryHostZoneAllDesc, QueryAllHostZoneRequest.fromPartial(request), metadata);
  }

  ModuleAddress(
    request: DeepPartial<QueryModuleAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryModuleAddressResponse> {
    return this.rpc.unary(QueryModuleAddressDesc, QueryModuleAddressRequest.fromPartial(request), metadata);
  }

  InterchainAccountFromAddress(
    request: DeepPartial<QueryInterchainAccountFromAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryInterchainAccountFromAddressResponse> {
    return this.rpc.unary(
      QueryInterchainAccountFromAddressDesc,
      QueryInterchainAccountFromAddressRequest.fromPartial(request),
      metadata,
    );
  }

  EpochTracker(
    request: DeepPartial<QueryGetEpochTrackerRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetEpochTrackerResponse> {
    return this.rpc.unary(QueryEpochTrackerDesc, QueryGetEpochTrackerRequest.fromPartial(request), metadata);
  }

  EpochTrackerAll(
    request: DeepPartial<QueryAllEpochTrackerRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllEpochTrackerResponse> {
    return this.rpc.unary(QueryEpochTrackerAllDesc, QueryAllEpochTrackerRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "stride.stakeibc.Query" };

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

export const QueryValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "Validators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetValidatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetValidatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryICAAccountDesc: UnaryMethodDefinitionish = {
  methodName: "ICAAccount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetICAAccountRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetICAAccountResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryHostZoneDesc: UnaryMethodDefinitionish = {
  methodName: "HostZone",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetHostZoneRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetHostZoneResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryHostZoneAllDesc: UnaryMethodDefinitionish = {
  methodName: "HostZoneAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllHostZoneRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllHostZoneResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryModuleAddressDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryModuleAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryModuleAddressResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryInterchainAccountFromAddressDesc: UnaryMethodDefinitionish = {
  methodName: "InterchainAccountFromAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryInterchainAccountFromAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryInterchainAccountFromAddressResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryEpochTrackerDesc: UnaryMethodDefinitionish = {
  methodName: "EpochTracker",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetEpochTrackerRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGetEpochTrackerResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryEpochTrackerAllDesc: UnaryMethodDefinitionish = {
  methodName: "EpochTrackerAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllEpochTrackerRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllEpochTrackerResponse.decode(data);
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
