/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../stride/stakeibc/params";
import { ICAAccount } from "../../stride/stakeibc/ica_account";
import { HostZone } from "../../stride/stakeibc/host_zone";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochTracker } from "../../stride/stakeibc/epoch_tracker";
import { BrowserHeaders } from "browser-headers";
import { Validator } from "../../stride/stakeibc/validator";

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
export interface QueryParamsRequest {}

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

export interface QueryGetICAAccountRequest {}

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

const baseQueryInterchainAccountFromAddressRequest: object = { owner: "", connectionId: "" };

export const QueryInterchainAccountFromAddressRequest = {
  encode(
    message: QueryInterchainAccountFromAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    const message = {
      ...baseQueryInterchainAccountFromAddressRequest,
    } as QueryInterchainAccountFromAddressRequest;
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
    const message = {
      ...baseQueryInterchainAccountFromAddressRequest,
    } as QueryInterchainAccountFromAddressRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    return message;
  },

  toJSON(message: QueryInterchainAccountFromAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInterchainAccountFromAddressRequest>,
  ): QueryInterchainAccountFromAddressRequest {
    const message = {
      ...baseQueryInterchainAccountFromAddressRequest,
    } as QueryInterchainAccountFromAddressRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = "";
    }
    return message;
  },
};

const baseQueryInterchainAccountFromAddressResponse: object = { interchainAccountAddress: "" };

export const QueryInterchainAccountFromAddressResponse = {
  encode(
    message: QueryInterchainAccountFromAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInterchainAccountFromAddressResponse,
    } as QueryInterchainAccountFromAddressResponse;
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
    const message = {
      ...baseQueryInterchainAccountFromAddressResponse,
    } as QueryInterchainAccountFromAddressResponse;
    if (object.interchainAccountAddress !== undefined && object.interchainAccountAddress !== null) {
      message.interchainAccountAddress = String(object.interchainAccountAddress);
    } else {
      message.interchainAccountAddress = "";
    }
    return message;
  },

  toJSON(message: QueryInterchainAccountFromAddressResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined &&
      (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInterchainAccountFromAddressResponse>,
  ): QueryInterchainAccountFromAddressResponse {
    const message = {
      ...baseQueryInterchainAccountFromAddressResponse,
    } as QueryInterchainAccountFromAddressResponse;
    if (object.interchainAccountAddress !== undefined && object.interchainAccountAddress !== null) {
      message.interchainAccountAddress = object.interchainAccountAddress;
    } else {
      message.interchainAccountAddress = "";
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

const baseQueryGetValidatorsRequest: object = { chainId: "" };

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
    const message = { ...baseQueryGetValidatorsRequest } as QueryGetValidatorsRequest;
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
    const message = { ...baseQueryGetValidatorsRequest } as QueryGetValidatorsRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: QueryGetValidatorsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest {
    const message = { ...baseQueryGetValidatorsRequest } as QueryGetValidatorsRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseQueryGetValidatorsResponse: object = {};

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
    const message = { ...baseQueryGetValidatorsResponse } as QueryGetValidatorsResponse;
    message.validators = [];
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
    const message = { ...baseQueryGetValidatorsResponse } as QueryGetValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse {
    const message = { ...baseQueryGetValidatorsResponse } as QueryGetValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetICAAccountRequest: object = {};

export const QueryGetICAAccountRequest = {
  encode(_: QueryGetICAAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetICAAccountRequest } as QueryGetICAAccountRequest;
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
    const message = { ...baseQueryGetICAAccountRequest } as QueryGetICAAccountRequest;
    return message;
  },

  toJSON(_: QueryGetICAAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetICAAccountRequest>): QueryGetICAAccountRequest {
    const message = { ...baseQueryGetICAAccountRequest } as QueryGetICAAccountRequest;
    return message;
  },
};

const baseQueryGetICAAccountResponse: object = {};

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
    const message = { ...baseQueryGetICAAccountResponse } as QueryGetICAAccountResponse;
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
    const message = { ...baseQueryGetICAAccountResponse } as QueryGetICAAccountResponse;
    if (object.icaAccount !== undefined && object.icaAccount !== null) {
      message.icaAccount = ICAAccount.fromJSON(object.icaAccount);
    } else {
      message.icaAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetICAAccountResponse): unknown {
    const obj: any = {};
    message.icaAccount !== undefined &&
      (obj.icaAccount = message.icaAccount ? ICAAccount.toJSON(message.icaAccount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetICAAccountResponse>): QueryGetICAAccountResponse {
    const message = { ...baseQueryGetICAAccountResponse } as QueryGetICAAccountResponse;
    if (object.icaAccount !== undefined && object.icaAccount !== null) {
      message.icaAccount = ICAAccount.fromPartial(object.icaAccount);
    } else {
      message.icaAccount = undefined;
    }
    return message;
  },
};

const baseQueryGetHostZoneRequest: object = { chainId: "" };

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
    const message = { ...baseQueryGetHostZoneRequest } as QueryGetHostZoneRequest;
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
    const message = { ...baseQueryGetHostZoneRequest } as QueryGetHostZoneRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: QueryGetHostZoneRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest {
    const message = { ...baseQueryGetHostZoneRequest } as QueryGetHostZoneRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseQueryGetHostZoneResponse: object = {};

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
    const message = { ...baseQueryGetHostZoneResponse } as QueryGetHostZoneResponse;
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
    const message = { ...baseQueryGetHostZoneResponse } as QueryGetHostZoneResponse;
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = HostZone.fromJSON(object.hostZone);
    } else {
      message.hostZone = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHostZoneResponse): unknown {
    const obj: any = {};
    message.hostZone !== undefined &&
      (obj.hostZone = message.hostZone ? HostZone.toJSON(message.hostZone) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse {
    const message = { ...baseQueryGetHostZoneResponse } as QueryGetHostZoneResponse;
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = HostZone.fromPartial(object.hostZone);
    } else {
      message.hostZone = undefined;
    }
    return message;
  },
};

const baseQueryAllHostZoneRequest: object = {};

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
    const message = { ...baseQueryAllHostZoneRequest } as QueryAllHostZoneRequest;
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
    const message = { ...baseQueryAllHostZoneRequest } as QueryAllHostZoneRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHostZoneRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest {
    const message = { ...baseQueryAllHostZoneRequest } as QueryAllHostZoneRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHostZoneResponse: object = {};

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
    const message = { ...baseQueryAllHostZoneResponse } as QueryAllHostZoneResponse;
    message.hostZone = [];
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
    const message = { ...baseQueryAllHostZoneResponse } as QueryAllHostZoneResponse;
    message.hostZone = [];
    if (object.hostZone !== undefined && object.hostZone !== null) {
      for (const e of object.hostZone) {
        message.hostZone.push(HostZone.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHostZoneResponse): unknown {
    const obj: any = {};
    if (message.hostZone) {
      obj.hostZone = message.hostZone.map((e) => (e ? HostZone.toJSON(e) : undefined));
    } else {
      obj.hostZone = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse {
    const message = { ...baseQueryAllHostZoneResponse } as QueryAllHostZoneResponse;
    message.hostZone = [];
    if (object.hostZone !== undefined && object.hostZone !== null) {
      for (const e of object.hostZone) {
        message.hostZone.push(HostZone.fromPartial(e));
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

const baseQueryModuleAddressRequest: object = { name: "" };

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
    const message = { ...baseQueryModuleAddressRequest } as QueryModuleAddressRequest;
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
    const message = { ...baseQueryModuleAddressRequest } as QueryModuleAddressRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryModuleAddressRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    const message = { ...baseQueryModuleAddressRequest } as QueryModuleAddressRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryModuleAddressResponse: object = { addr: "" };

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
    const message = { ...baseQueryModuleAddressResponse } as QueryModuleAddressResponse;
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
    const message = { ...baseQueryModuleAddressResponse } as QueryModuleAddressResponse;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: QueryModuleAddressResponse): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    const message = { ...baseQueryModuleAddressResponse } as QueryModuleAddressResponse;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseQueryGetEpochTrackerRequest: object = { epochIdentifier: "" };

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
    const message = { ...baseQueryGetEpochTrackerRequest } as QueryGetEpochTrackerRequest;
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
    const message = { ...baseQueryGetEpochTrackerRequest } as QueryGetEpochTrackerRequest;
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = String(object.epochIdentifier);
    } else {
      message.epochIdentifier = "";
    }
    return message;
  },

  toJSON(message: QueryGetEpochTrackerRequest): unknown {
    const obj: any = {};
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest {
    const message = { ...baseQueryGetEpochTrackerRequest } as QueryGetEpochTrackerRequest;
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = object.epochIdentifier;
    } else {
      message.epochIdentifier = "";
    }
    return message;
  },
};

const baseQueryGetEpochTrackerResponse: object = {};

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
    const message = { ...baseQueryGetEpochTrackerResponse } as QueryGetEpochTrackerResponse;
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
    const message = { ...baseQueryGetEpochTrackerResponse } as QueryGetEpochTrackerResponse;
    if (object.epochTracker !== undefined && object.epochTracker !== null) {
      message.epochTracker = EpochTracker.fromJSON(object.epochTracker);
    } else {
      message.epochTracker = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetEpochTrackerResponse): unknown {
    const obj: any = {};
    message.epochTracker !== undefined &&
      (obj.epochTracker = message.epochTracker ? EpochTracker.toJSON(message.epochTracker) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse {
    const message = { ...baseQueryGetEpochTrackerResponse } as QueryGetEpochTrackerResponse;
    if (object.epochTracker !== undefined && object.epochTracker !== null) {
      message.epochTracker = EpochTracker.fromPartial(object.epochTracker);
    } else {
      message.epochTracker = undefined;
    }
    return message;
  },
};

const baseQueryAllEpochTrackerRequest: object = {};

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
    const message = { ...baseQueryAllEpochTrackerRequest } as QueryAllEpochTrackerRequest;
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
    const message = { ...baseQueryAllEpochTrackerRequest } as QueryAllEpochTrackerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEpochTrackerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest {
    const message = { ...baseQueryAllEpochTrackerRequest } as QueryAllEpochTrackerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllEpochTrackerResponse: object = {};

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
    const message = { ...baseQueryAllEpochTrackerResponse } as QueryAllEpochTrackerResponse;
    message.epochTracker = [];
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
    const message = { ...baseQueryAllEpochTrackerResponse } as QueryAllEpochTrackerResponse;
    message.epochTracker = [];
    if (object.epochTracker !== undefined && object.epochTracker !== null) {
      for (const e of object.epochTracker) {
        message.epochTracker.push(EpochTracker.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEpochTrackerResponse): unknown {
    const obj: any = {};
    if (message.epochTracker) {
      obj.epochTracker = message.epochTracker.map((e) => (e ? EpochTracker.toJSON(e) : undefined));
    } else {
      obj.epochTracker = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse {
    const message = { ...baseQueryAllEpochTrackerResponse } as QueryAllEpochTrackerResponse;
    message.epochTracker = [];
    if (object.epochTracker !== undefined && object.epochTracker !== null) {
      for (const e of object.epochTracker) {
        message.epochTracker.push(EpochTracker.fromPartial(e));
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
  HostZone(
    request: DeepPartial<QueryGetHostZoneRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetHostZoneResponse>;
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

  HostZone(
    request: DeepPartial<QueryGetHostZoneRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryGetHostZoneResponse> {
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
    return this.rpc.unary(
      QueryEpochTrackerAllDesc,
      QueryAllEpochTrackerRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "stride.stakeibc.Query",
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
      return {
        ...QueryGetValidatorsResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryGetICAAccountResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryGetHostZoneResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllHostZoneResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryModuleAddressResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryInterchainAccountFromAddressResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryGetEpochTrackerResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...QueryAllEpochTrackerResponse.decode(data),
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
