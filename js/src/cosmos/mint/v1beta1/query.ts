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
import { Params } from "../../../cosmos/mint/v1beta1/mint";

export const protobufPackage = "cosmos.mint.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {}

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
  /** inflation is the current minting inflation value. */
  inflation: Uint8Array;
}

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** annual_provisions is the current minting annual provisions value. */
  annualProvisions: Uint8Array;
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

const baseQueryInflationRequest: object = {};

export const QueryInflationRequest = {
  encode(_: QueryInflationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
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

  fromJSON(_: any): QueryInflationRequest {
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
    return message;
  },

  toJSON(_: QueryInflationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryInflationRequest>): QueryInflationRequest {
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
    return message;
  },
};

const baseQueryInflationResponse: object = {};

export const QueryInflationResponse = {
  encode(message: QueryInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    message.inflation = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInflationResponse {
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    message.inflation = new Uint8Array();
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = bytesFromBase64(object.inflation);
    }
    return message;
  },

  toJSON(message: QueryInflationResponse): unknown {
    const obj: any = {};
    message.inflation !== undefined &&
      (obj.inflation = base64FromBytes(
        message.inflation !== undefined ? message.inflation : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInflationResponse>): QueryInflationResponse {
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    } else {
      message.inflation = new Uint8Array();
    }
    return message;
  },
};

const baseQueryAnnualProvisionsRequest: object = {};

export const QueryAnnualProvisionsRequest = {
  encode(_: QueryAnnualProvisionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAnnualProvisionsRequest } as QueryAnnualProvisionsRequest;
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

  fromJSON(_: any): QueryAnnualProvisionsRequest {
    const message = { ...baseQueryAnnualProvisionsRequest } as QueryAnnualProvisionsRequest;
    return message;
  },

  toJSON(_: QueryAnnualProvisionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = { ...baseQueryAnnualProvisionsRequest } as QueryAnnualProvisionsRequest;
    return message;
  },
};

const baseQueryAnnualProvisionsResponse: object = {};

export const QueryAnnualProvisionsResponse = {
  encode(message: QueryAnnualProvisionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAnnualProvisionsResponse } as QueryAnnualProvisionsResponse;
    message.annualProvisions = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAnnualProvisionsResponse {
    const message = { ...baseQueryAnnualProvisionsResponse } as QueryAnnualProvisionsResponse;
    message.annualProvisions = new Uint8Array();
    if (object.annualProvisions !== undefined && object.annualProvisions !== null) {
      message.annualProvisions = bytesFromBase64(object.annualProvisions);
    }
    return message;
  },

  toJSON(message: QueryAnnualProvisionsResponse): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined &&
      (obj.annualProvisions = base64FromBytes(
        message.annualProvisions !== undefined ? message.annualProvisions : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = { ...baseQueryAnnualProvisionsResponse } as QueryAnnualProvisionsResponse;
    if (object.annualProvisions !== undefined && object.annualProvisions !== null) {
      message.annualProvisions = object.annualProvisions;
    } else {
      message.annualProvisions = new Uint8Array();
    }
    return message;
  },
};

/** Query provides defines the gRPC querier service. */
export const QueryService = {
  /** Params returns the total set of minting parameters. */
  params: {
    path: "/cosmos.mint.v1beta1.Query/Params",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryParamsRequest) => Buffer.from(QueryParamsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryParamsRequest.decode(value),
    responseSerialize: (value: QueryParamsResponse) =>
      Buffer.from(QueryParamsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryParamsResponse.decode(value),
  },
  /** Inflation returns the current minting inflation value. */
  inflation: {
    path: "/cosmos.mint.v1beta1.Query/Inflation",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryInflationRequest) =>
      Buffer.from(QueryInflationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryInflationRequest.decode(value),
    responseSerialize: (value: QueryInflationResponse) =>
      Buffer.from(QueryInflationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryInflationResponse.decode(value),
  },
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions: {
    path: "/cosmos.mint.v1beta1.Query/AnnualProvisions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAnnualProvisionsRequest) =>
      Buffer.from(QueryAnnualProvisionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAnnualProvisionsRequest.decode(value),
    responseSerialize: (value: QueryAnnualProvisionsResponse) =>
      Buffer.from(QueryAnnualProvisionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAnnualProvisionsResponse.decode(value),
  },
} as const;

export interface QueryServer extends UntypedServiceImplementation {
  /** Params returns the total set of minting parameters. */
  params: handleUnaryCall<QueryParamsRequest, QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  inflation: handleUnaryCall<QueryInflationRequest, QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions: handleUnaryCall<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>;
}

export interface QueryClient extends Client {
  /** Params returns the total set of minting parameters. */
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
  /** Inflation returns the current minting inflation value. */
  inflation(
    request: QueryInflationRequest,
    callback: (error: ServiceError | null, response: QueryInflationResponse) => void,
  ): ClientUnaryCall;
  inflation(
    request: QueryInflationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryInflationResponse) => void,
  ): ClientUnaryCall;
  inflation(
    request: QueryInflationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryInflationResponse) => void,
  ): ClientUnaryCall;
  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(
    request: QueryAnnualProvisionsRequest,
    callback: (error: ServiceError | null, response: QueryAnnualProvisionsResponse) => void,
  ): ClientUnaryCall;
  annualProvisions(
    request: QueryAnnualProvisionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAnnualProvisionsResponse) => void,
  ): ClientUnaryCall;
  annualProvisions(
    request: QueryAnnualProvisionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAnnualProvisionsResponse) => void,
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "cosmos.mint.v1beta1.Query",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): QueryClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
