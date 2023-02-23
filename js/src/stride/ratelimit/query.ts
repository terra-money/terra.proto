/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { RateLimit } from "../../stride/ratelimit/ratelimit";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "stride.ratelimit";

export interface QueryAllRateLimitsRequest {}

export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}

export interface QueryRateLimitRequest {
  denom: string;
  channelId: string;
}

export interface QueryRateLimitResponse {
  rateLimit?: RateLimit;
}

export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}

export interface QueryRateLimitsByChainIdResponse {
  rateLimits: RateLimit[];
}

export interface QueryRateLimitsByChannelIdRequest {
  channelId: string;
}

export interface QueryRateLimitsByChannelIdResponse {
  rateLimits: RateLimit[];
}

const baseQueryAllRateLimitsRequest: object = {};

export const QueryAllRateLimitsRequest = {
  encode(_: QueryAllRateLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRateLimitsRequest } as QueryAllRateLimitsRequest;
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

  fromJSON(_: any): QueryAllRateLimitsRequest {
    const message = { ...baseQueryAllRateLimitsRequest } as QueryAllRateLimitsRequest;
    return message;
  },

  toJSON(_: QueryAllRateLimitsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = { ...baseQueryAllRateLimitsRequest } as QueryAllRateLimitsRequest;
    return message;
  },
};

const baseQueryAllRateLimitsResponse: object = {};

export const QueryAllRateLimitsResponse = {
  encode(message: QueryAllRateLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRateLimitsResponse } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRateLimitsResponse {
    const message = { ...baseQueryAllRateLimitsResponse } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllRateLimitsResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) => (e ? RateLimit.toJSON(e) : undefined));
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse {
    const message = { ...baseQueryAllRateLimitsResponse } as QueryAllRateLimitsResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRateLimitRequest: object = { denom: "", channelId: "" };

export const QueryRateLimitRequest = {
  encode(message: QueryRateLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitRequest {
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitRequest>): QueryRateLimitRequest {
    const message = { ...baseQueryRateLimitRequest } as QueryRateLimitRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    return message;
  },
};

const baseQueryRateLimitResponse: object = {};

export const QueryRateLimitResponse = {
  encode(message: QueryRateLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitResponse {
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    if (object.rateLimit !== undefined && object.rateLimit !== null) {
      message.rateLimit = RateLimit.fromJSON(object.rateLimit);
    } else {
      message.rateLimit = undefined;
    }
    return message;
  },

  toJSON(message: QueryRateLimitResponse): unknown {
    const obj: any = {};
    message.rateLimit !== undefined &&
      (obj.rateLimit = message.rateLimit ? RateLimit.toJSON(message.rateLimit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitResponse>): QueryRateLimitResponse {
    const message = { ...baseQueryRateLimitResponse } as QueryRateLimitResponse;
    if (object.rateLimit !== undefined && object.rateLimit !== null) {
      message.rateLimit = RateLimit.fromPartial(object.rateLimit);
    } else {
      message.rateLimit = undefined;
    }
    return message;
  },
};

const baseQueryRateLimitsByChainIdRequest: object = { chainId: "" };

export const QueryRateLimitsByChainIdRequest = {
  encode(message: QueryRateLimitsByChainIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitsByChainIdRequest } as QueryRateLimitsByChainIdRequest;
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

  fromJSON(object: any): QueryRateLimitsByChainIdRequest {
    const message = { ...baseQueryRateLimitsByChainIdRequest } as QueryRateLimitsByChainIdRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChainIdRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest {
    const message = { ...baseQueryRateLimitsByChainIdRequest } as QueryRateLimitsByChainIdRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseQueryRateLimitsByChainIdResponse: object = {};

export const QueryRateLimitsByChainIdResponse = {
  encode(message: QueryRateLimitsByChainIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitsByChainIdResponse } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChainIdResponse {
    const message = { ...baseQueryRateLimitsByChainIdResponse } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChainIdResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) => (e ? RateLimit.toJSON(e) : undefined));
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse {
    const message = { ...baseQueryRateLimitsByChainIdResponse } as QueryRateLimitsByChainIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRateLimitsByChannelIdRequest: object = { channelId: "" };

export const QueryRateLimitsByChannelIdRequest = {
  encode(message: QueryRateLimitsByChannelIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitsByChannelIdRequest } as QueryRateLimitsByChannelIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChannelIdRequest {
    const message = { ...baseQueryRateLimitsByChannelIdRequest } as QueryRateLimitsByChannelIdRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChannelIdRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest {
    const message = { ...baseQueryRateLimitsByChannelIdRequest } as QueryRateLimitsByChannelIdRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    return message;
  },
};

const baseQueryRateLimitsByChannelIdResponse: object = {};

export const QueryRateLimitsByChannelIdResponse = {
  encode(message: QueryRateLimitsByChannelIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateLimitsByChannelIdResponse } as QueryRateLimitsByChannelIdResponse;
    message.rateLimits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateLimitsByChannelIdResponse {
    const message = { ...baseQueryRateLimitsByChannelIdResponse } as QueryRateLimitsByChannelIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRateLimitsByChannelIdResponse): unknown {
    const obj: any = {};
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) => (e ? RateLimit.toJSON(e) : undefined));
    } else {
      obj.rateLimits = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse {
    const message = { ...baseQueryRateLimitsByChannelIdResponse } as QueryRateLimitsByChannelIdResponse;
    message.rateLimits = [];
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  AllRateLimits(
    request: DeepPartial<QueryAllRateLimitsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllRateLimitsResponse>;
  RateLimit(
    request: DeepPartial<QueryRateLimitRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitResponse>;
  RateLimitsByChainId(
    request: DeepPartial<QueryRateLimitsByChainIdRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitsByChainIdResponse>;
  RateLimitsByChannelId(
    request: DeepPartial<QueryRateLimitsByChannelIdRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitsByChannelIdResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AllRateLimits = this.AllRateLimits.bind(this);
    this.RateLimit = this.RateLimit.bind(this);
    this.RateLimitsByChainId = this.RateLimitsByChainId.bind(this);
    this.RateLimitsByChannelId = this.RateLimitsByChannelId.bind(this);
  }

  AllRateLimits(
    request: DeepPartial<QueryAllRateLimitsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllRateLimitsResponse> {
    return this.rpc.unary(QueryAllRateLimitsDesc, QueryAllRateLimitsRequest.fromPartial(request), metadata);
  }

  RateLimit(
    request: DeepPartial<QueryRateLimitRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitResponse> {
    return this.rpc.unary(QueryRateLimitDesc, QueryRateLimitRequest.fromPartial(request), metadata);
  }

  RateLimitsByChainId(
    request: DeepPartial<QueryRateLimitsByChainIdRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitsByChainIdResponse> {
    return this.rpc.unary(
      QueryRateLimitsByChainIdDesc,
      QueryRateLimitsByChainIdRequest.fromPartial(request),
      metadata,
    );
  }

  RateLimitsByChannelId(
    request: DeepPartial<QueryRateLimitsByChannelIdRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRateLimitsByChannelIdResponse> {
    return this.rpc.unary(
      QueryRateLimitsByChannelIdDesc,
      QueryRateLimitsByChannelIdRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "stride.ratelimit.Query",
};

export const QueryAllRateLimitsDesc: UnaryMethodDefinitionish = {
  methodName: "AllRateLimits",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllRateLimitsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllRateLimitsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRateLimitDesc: UnaryMethodDefinitionish = {
  methodName: "RateLimit",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRateLimitRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRateLimitResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRateLimitsByChainIdDesc: UnaryMethodDefinitionish = {
  methodName: "RateLimitsByChainId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRateLimitsByChainIdRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRateLimitsByChainIdResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRateLimitsByChannelIdDesc: UnaryMethodDefinitionish = {
  methodName: "RateLimitsByChannelId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRateLimitsByChannelIdRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRateLimitsByChannelIdResponse.decode(data),
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
