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
  Metadata as Metadata1,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DenomTrace, Params } from "../../../../ibc/applications/transfer/v1/transfer";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "ibc.applications.transfer.v1";

/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
  /** denom_trace returns the requested denomination trace information. */
  denomTrace?: DenomTrace;
}

/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denomTraces: DenomTrace[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQueryDenomTraceRequest: object = { hash: "" };

export const QueryDenomTraceRequest = {
  encode(message: QueryDenomTraceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomTraceRequest } as QueryDenomTraceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomTraceRequest {
    const message = { ...baseQueryDenomTraceRequest } as QueryDenomTraceRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryDenomTraceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest {
    const message = { ...baseQueryDenomTraceRequest } as QueryDenomTraceRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryDenomTraceResponse: object = {};

export const QueryDenomTraceResponse = {
  encode(message: QueryDenomTraceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomTraceResponse } as QueryDenomTraceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomTraceResponse {
    const message = { ...baseQueryDenomTraceResponse } as QueryDenomTraceResponse;
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromJSON(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomTraceResponse): unknown {
    const obj: any = {};
    message.denomTrace !== undefined &&
      (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse {
    const message = { ...baseQueryDenomTraceResponse } as QueryDenomTraceResponse;
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromPartial(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }
    return message;
  },
};

const baseQueryDenomTracesRequest: object = {};

export const QueryDenomTracesRequest = {
  encode(message: QueryDenomTracesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomTracesRequest } as QueryDenomTracesRequest;
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

  fromJSON(object: any): QueryDenomTracesRequest {
    const message = { ...baseQueryDenomTracesRequest } as QueryDenomTracesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomTracesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest {
    const message = { ...baseQueryDenomTracesRequest } as QueryDenomTracesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDenomTracesResponse: object = {};

export const QueryDenomTracesResponse = {
  encode(message: QueryDenomTracesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomTracesResponse } as QueryDenomTracesResponse;
    message.denomTraces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomTracesResponse {
    const message = { ...baseQueryDenomTracesResponse } as QueryDenomTracesResponse;
    message.denomTraces = [];
    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      for (const e of object.denomTraces) {
        message.denomTraces.push(DenomTrace.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomTracesResponse): unknown {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map((e) => (e ? DenomTrace.toJSON(e) : undefined));
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse {
    const message = { ...baseQueryDenomTracesResponse } as QueryDenomTracesResponse;
    message.denomTraces = [];
    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      for (const e of object.denomTraces) {
        message.denomTraces.push(DenomTrace.fromPartial(e));
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

/** Query provides defines the gRPC querier service. */
export const QueryService = {
  /** DenomTrace queries a denomination trace information. */
  denomTrace: {
    path: "/ibc.applications.transfer.v1.Query/DenomTrace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDenomTraceRequest) =>
      Buffer.from(QueryDenomTraceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDenomTraceRequest.decode(value),
    responseSerialize: (value: QueryDenomTraceResponse) =>
      Buffer.from(QueryDenomTraceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDenomTraceResponse.decode(value),
  },
  /** DenomTraces queries all denomination traces. */
  denomTraces: {
    path: "/ibc.applications.transfer.v1.Query/DenomTraces",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDenomTracesRequest) =>
      Buffer.from(QueryDenomTracesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDenomTracesRequest.decode(value),
    responseSerialize: (value: QueryDenomTracesResponse) =>
      Buffer.from(QueryDenomTracesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDenomTracesResponse.decode(value),
  },
  /** Params queries all parameters of the ibc-transfer module. */
  params: {
    path: "/ibc.applications.transfer.v1.Query/Params",
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
  /** DenomTrace queries a denomination trace information. */
  denomTrace: handleUnaryCall<QueryDenomTraceRequest, QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  denomTraces: handleUnaryCall<QueryDenomTracesRequest, QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params: handleUnaryCall<QueryParamsRequest, QueryParamsResponse>;
}

export interface QueryClient extends Client {
  /** DenomTrace queries a denomination trace information. */
  denomTrace(
    request: QueryDenomTraceRequest,
    callback: (error: ServiceError | null, response: QueryDenomTraceResponse) => void,
  ): ClientUnaryCall;
  denomTrace(
    request: QueryDenomTraceRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDenomTraceResponse) => void,
  ): ClientUnaryCall;
  denomTrace(
    request: QueryDenomTraceRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDenomTraceResponse) => void,
  ): ClientUnaryCall;
  /** DenomTraces queries all denomination traces. */
  denomTraces(
    request: QueryDenomTracesRequest,
    callback: (error: ServiceError | null, response: QueryDenomTracesResponse) => void,
  ): ClientUnaryCall;
  denomTraces(
    request: QueryDenomTracesRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDenomTracesResponse) => void,
  ): ClientUnaryCall;
  denomTraces(
    request: QueryDenomTracesRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDenomTracesResponse) => void,
  ): ClientUnaryCall;
  /** Params queries all parameters of the ibc-transfer module. */
  params(
    request: QueryParamsRequest,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "ibc.applications.transfer.v1.Query",
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
