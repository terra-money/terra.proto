/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../osmosis/tokenfactory/v1beta1/params";
import { DenomAuthorityMetadata } from "../../../osmosis/tokenfactory/v1beta1/authorityMetadata";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "osmosis.tokenfactory.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}

/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata?: DenomAuthorityMetadata;
}

/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}

/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}

export interface QueryBeforeSendHookAddressRequest {
  denom: string;
}

/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
  cosmwasmAddress: string;
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

const baseQueryDenomAuthorityMetadataRequest: object = { denom: "" };

export const QueryDenomAuthorityMetadataRequest = {
  encode(message: QueryDenomAuthorityMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomAuthorityMetadataRequest } as QueryDenomAuthorityMetadataRequest;
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

  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    const message = { ...baseQueryDenomAuthorityMetadataRequest } as QueryDenomAuthorityMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomAuthorityMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = { ...baseQueryDenomAuthorityMetadataRequest } as QueryDenomAuthorityMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomAuthorityMetadataResponse: object = {};

export const QueryDenomAuthorityMetadataResponse = {
  encode(message: QueryDenomAuthorityMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomAuthorityMetadataResponse } as QueryDenomAuthorityMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    const message = { ...baseQueryDenomAuthorityMetadataResponse } as QueryDenomAuthorityMetadataResponse;
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    } else {
      message.authorityMetadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomAuthorityMetadataResponse): unknown {
    const obj: any = {};
    message.authorityMetadata !== undefined &&
      (obj.authorityMetadata = message.authorityMetadata
        ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = { ...baseQueryDenomAuthorityMetadataResponse } as QueryDenomAuthorityMetadataResponse;
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    } else {
      message.authorityMetadata = undefined;
    }
    return message;
  },
};

const baseQueryDenomsFromCreatorRequest: object = { creator: "" };

export const QueryDenomsFromCreatorRequest = {
  encode(message: QueryDenomsFromCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsFromCreatorRequest } as QueryDenomsFromCreatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    const message = { ...baseQueryDenomsFromCreatorRequest } as QueryDenomsFromCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryDenomsFromCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = { ...baseQueryDenomsFromCreatorRequest } as QueryDenomsFromCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryDenomsFromCreatorResponse: object = { denoms: "" };

export const QueryDenomsFromCreatorResponse = {
  encode(message: QueryDenomsFromCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsFromCreatorResponse } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    const message = { ...baseQueryDenomsFromCreatorResponse } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDenomsFromCreatorResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = { ...baseQueryDenomsFromCreatorResponse } as QueryDenomsFromCreatorResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};

const baseQueryBeforeSendHookAddressRequest: object = { denom: "" };

export const QueryBeforeSendHookAddressRequest = {
  encode(message: QueryBeforeSendHookAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBeforeSendHookAddressRequest } as QueryBeforeSendHookAddressRequest;
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

  fromJSON(object: any): QueryBeforeSendHookAddressRequest {
    const message = { ...baseQueryBeforeSendHookAddressRequest } as QueryBeforeSendHookAddressRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryBeforeSendHookAddressRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBeforeSendHookAddressRequest>): QueryBeforeSendHookAddressRequest {
    const message = { ...baseQueryBeforeSendHookAddressRequest } as QueryBeforeSendHookAddressRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryBeforeSendHookAddressResponse: object = { cosmwasmAddress: "" };

export const QueryBeforeSendHookAddressResponse = {
  encode(message: QueryBeforeSendHookAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmwasmAddress !== "") {
      writer.uint32(10).string(message.cosmwasmAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBeforeSendHookAddressResponse } as QueryBeforeSendHookAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmwasmAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBeforeSendHookAddressResponse {
    const message = { ...baseQueryBeforeSendHookAddressResponse } as QueryBeforeSendHookAddressResponse;
    if (object.cosmwasmAddress !== undefined && object.cosmwasmAddress !== null) {
      message.cosmwasmAddress = String(object.cosmwasmAddress);
    } else {
      message.cosmwasmAddress = "";
    }
    return message;
  },

  toJSON(message: QueryBeforeSendHookAddressResponse): unknown {
    const obj: any = {};
    message.cosmwasmAddress !== undefined && (obj.cosmwasmAddress = message.cosmwasmAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBeforeSendHookAddressResponse>): QueryBeforeSendHookAddressResponse {
    const message = { ...baseQueryBeforeSendHookAddressResponse } as QueryBeforeSendHookAddressResponse;
    if (object.cosmwasmAddress !== undefined && object.cosmwasmAddress !== null) {
      message.cosmwasmAddress = object.cosmwasmAddress;
    } else {
      message.cosmwasmAddress = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  DenomAuthorityMetadata(
    request: DeepPartial<QueryDenomAuthorityMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomAuthorityMetadataResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  DenomsFromCreator(
    request: DeepPartial<QueryDenomsFromCreatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsFromCreatorResponse>;
  /**
   * BeforeSendHookAddress defines a gRPC query method for
   * getting the address registered for the before send hook.
   */
  BeforeSendHookAddress(
    request: DeepPartial<QueryBeforeSendHookAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryBeforeSendHookAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.DenomAuthorityMetadata = this.DenomAuthorityMetadata.bind(this);
    this.DenomsFromCreator = this.DenomsFromCreator.bind(this);
    this.BeforeSendHookAddress = this.BeforeSendHookAddress.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  DenomAuthorityMetadata(
    request: DeepPartial<QueryDenomAuthorityMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomAuthorityMetadataResponse> {
    return this.rpc.unary(
      QueryDenomAuthorityMetadataDesc,
      QueryDenomAuthorityMetadataRequest.fromPartial(request),
      metadata,
    );
  }

  DenomsFromCreator(
    request: DeepPartial<QueryDenomsFromCreatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsFromCreatorResponse> {
    return this.rpc.unary(
      QueryDenomsFromCreatorDesc,
      QueryDenomsFromCreatorRequest.fromPartial(request),
      metadata,
    );
  }

  BeforeSendHookAddress(
    request: DeepPartial<QueryBeforeSendHookAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryBeforeSendHookAddressResponse> {
    return this.rpc.unary(
      QueryBeforeSendHookAddressDesc,
      QueryBeforeSendHookAddressRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "osmosis.tokenfactory.v1beta1.Query",
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

export const QueryDenomAuthorityMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomAuthorityMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomAuthorityMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomAuthorityMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryDenomsFromCreatorDesc: UnaryMethodDefinitionish = {
  methodName: "DenomsFromCreator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomsFromCreatorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomsFromCreatorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryBeforeSendHookAddressDesc: UnaryMethodDefinitionish = {
  methodName: "BeforeSendHookAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryBeforeSendHookAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBeforeSendHookAddressResponse.decode(data),
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
