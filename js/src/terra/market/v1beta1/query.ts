/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "../../../terra/market/v1beta1/market";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "terra.market.v1beta1";

/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offerCoin: string;
  /** ask_denom defines the denom of the coin to swap to */
  askDenom: string;
}

/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  returnCoin?: Coin;
}

/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequest {}

/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponse {
  /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
  terraPoolDelta: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQuerySwapRequest: object = { offerCoin: "", askDenom: "" };

export const QuerySwapRequest = {
  encode(message: QuerySwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerCoin !== "") {
      writer.uint32(10).string(message.offerCoin);
    }
    if (message.askDenom !== "") {
      writer.uint32(18).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySwapRequest } as QuerySwapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerCoin = reader.string();
          break;
        case 2:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapRequest {
    const message = { ...baseQuerySwapRequest } as QuerySwapRequest;
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = String(object.offerCoin);
    } else {
      message.offerCoin = "";
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = String(object.askDenom);
    } else {
      message.askDenom = "";
    }
    return message;
  },

  toJSON(message: QuerySwapRequest): unknown {
    const obj: any = {};
    message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySwapRequest>): QuerySwapRequest {
    const message = { ...baseQuerySwapRequest } as QuerySwapRequest;
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = object.offerCoin;
    } else {
      message.offerCoin = "";
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = object.askDenom;
    } else {
      message.askDenom = "";
    }
    return message;
  },
};

const baseQuerySwapResponse: object = {};

export const QuerySwapResponse = {
  encode(message: QuerySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnCoin !== undefined) {
      Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySwapResponse } as QuerySwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapResponse {
    const message = { ...baseQuerySwapResponse } as QuerySwapResponse;
    if (object.returnCoin !== undefined && object.returnCoin !== null) {
      message.returnCoin = Coin.fromJSON(object.returnCoin);
    } else {
      message.returnCoin = undefined;
    }
    return message;
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    message.returnCoin !== undefined &&
      (obj.returnCoin = message.returnCoin ? Coin.toJSON(message.returnCoin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySwapResponse>): QuerySwapResponse {
    const message = { ...baseQuerySwapResponse } as QuerySwapResponse;
    if (object.returnCoin !== undefined && object.returnCoin !== null) {
      message.returnCoin = Coin.fromPartial(object.returnCoin);
    } else {
      message.returnCoin = undefined;
    }
    return message;
  },
};

const baseQueryTerraPoolDeltaRequest: object = {};

export const QueryTerraPoolDeltaRequest = {
  encode(_: QueryTerraPoolDeltaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTerraPoolDeltaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTerraPoolDeltaRequest } as QueryTerraPoolDeltaRequest;
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

  fromJSON(_: any): QueryTerraPoolDeltaRequest {
    const message = { ...baseQueryTerraPoolDeltaRequest } as QueryTerraPoolDeltaRequest;
    return message;
  },

  toJSON(_: QueryTerraPoolDeltaRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTerraPoolDeltaRequest>): QueryTerraPoolDeltaRequest {
    const message = { ...baseQueryTerraPoolDeltaRequest } as QueryTerraPoolDeltaRequest;
    return message;
  },
};

const baseQueryTerraPoolDeltaResponse: object = {};

export const QueryTerraPoolDeltaResponse = {
  encode(message: QueryTerraPoolDeltaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.terraPoolDelta.length !== 0) {
      writer.uint32(10).bytes(message.terraPoolDelta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTerraPoolDeltaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTerraPoolDeltaResponse } as QueryTerraPoolDeltaResponse;
    message.terraPoolDelta = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.terraPoolDelta = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTerraPoolDeltaResponse {
    const message = { ...baseQueryTerraPoolDeltaResponse } as QueryTerraPoolDeltaResponse;
    message.terraPoolDelta = new Uint8Array();
    if (object.terraPoolDelta !== undefined && object.terraPoolDelta !== null) {
      message.terraPoolDelta = bytesFromBase64(object.terraPoolDelta);
    }
    return message;
  },

  toJSON(message: QueryTerraPoolDeltaResponse): unknown {
    const obj: any = {};
    message.terraPoolDelta !== undefined &&
      (obj.terraPoolDelta = base64FromBytes(
        message.terraPoolDelta !== undefined ? message.terraPoolDelta : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTerraPoolDeltaResponse>): QueryTerraPoolDeltaResponse {
    const message = { ...baseQueryTerraPoolDeltaResponse } as QueryTerraPoolDeltaResponse;
    if (object.terraPoolDelta !== undefined && object.terraPoolDelta !== null) {
      message.terraPoolDelta = object.terraPoolDelta;
    } else {
      message.terraPoolDelta = new Uint8Array();
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
  /** Swap returns simulated swap amount. */
  Swap(request: DeepPartial<QuerySwapRequest>, metadata?: grpc.Metadata): Promise<QuerySwapResponse>;
  /** TerraPoolDelta returns terra_pool_delta amount. */
  TerraPoolDelta(
    request: DeepPartial<QueryTerraPoolDeltaRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTerraPoolDeltaResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.TerraPoolDelta = this.TerraPoolDelta.bind(this);
    this.Params = this.Params.bind(this);
  }

  Swap(request: DeepPartial<QuerySwapRequest>, metadata?: grpc.Metadata): Promise<QuerySwapResponse> {
    return this.rpc.unary(QuerySwapDesc, QuerySwapRequest.fromPartial(request), metadata);
  }

  TerraPoolDelta(
    request: DeepPartial<QueryTerraPoolDeltaRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTerraPoolDeltaResponse> {
    return this.rpc.unary(QueryTerraPoolDeltaDesc, QueryTerraPoolDeltaRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "terra.market.v1beta1.Query",
};

export const QuerySwapDesc: UnaryMethodDefinitionish = {
  methodName: "Swap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySwapRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySwapResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTerraPoolDeltaDesc: UnaryMethodDefinitionish = {
  methodName: "TerraPoolDelta",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTerraPoolDeltaRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTerraPoolDeltaResponse.decode(data),
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
