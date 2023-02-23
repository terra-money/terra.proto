/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";

export const protobufPackage = "stride.epochs";

export interface QueryEpochsInfoRequest {
  pagination?: PageRequest;
}

export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination?: PageResponse;
}

export interface QueryCurrentEpochRequest {
  identifier: string;
}

export interface QueryCurrentEpochResponse {
  currentEpoch: Long;
}

export interface QueryEpochInfoRequest {
  identifier: string;
}

export interface QueryEpochInfoResponse {
  epoch?: EpochInfo;
}

function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return { pagination: undefined };
}

export const QueryEpochsInfoRequest = {
  encode(message: QueryEpochsInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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

  fromJSON(object: any): QueryEpochsInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryEpochsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochsInfoRequest>, I>>(base?: I): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochsInfoRequest>, I>>(object: I): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return { epochs: [], pagination: undefined };
}

export const QueryEpochsInfoResponse = {
  encode(message: QueryEpochsInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochsInfoResponse>, I>>(base?: I): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochsInfoResponse>, I>>(object: I): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return { identifier: "" };
}

export const QueryCurrentEpochRequest = {
  encode(message: QueryCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochRequest {
    return { identifier: isSet(object.identifier) ? String(object.identifier) : "" };
  },

  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(base?: I): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(object: I): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return { currentEpoch: Long.ZERO };
}

export const QueryCurrentEpochResponse = {
  encode(message: QueryCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochResponse {
    return { currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.ZERO };
  },

  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(base?: I): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(object: I): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = (object.currentEpoch !== undefined && object.currentEpoch !== null)
      ? Long.fromValue(object.currentEpoch)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryEpochInfoRequest(): QueryEpochInfoRequest {
  return { identifier: "" };
}

export const QueryEpochInfoRequest = {
  encode(message: QueryEpochInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoRequest {
    return { identifier: isSet(object.identifier) ? String(object.identifier) : "" };
  },

  toJSON(message: QueryEpochInfoRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfoRequest>, I>>(base?: I): QueryEpochInfoRequest {
    return QueryEpochInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfoRequest>, I>>(object: I): QueryEpochInfoRequest {
    const message = createBaseQueryEpochInfoRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseQueryEpochInfoResponse(): QueryEpochInfoResponse {
  return { epoch: undefined };
}

export const QueryEpochInfoResponse = {
  encode(message: QueryEpochInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== undefined) {
      EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = EpochInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoResponse {
    return { epoch: isSet(object.epoch) ? EpochInfo.fromJSON(object.epoch) : undefined };
  },

  toJSON(message: QueryEpochInfoResponse): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = message.epoch ? EpochInfo.toJSON(message.epoch) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfoResponse>, I>>(base?: I): QueryEpochInfoResponse {
    return QueryEpochInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfoResponse>, I>>(object: I): QueryEpochInfoResponse {
    const message = createBaseQueryEpochInfoResponse();
    message.epoch = (object.epoch !== undefined && object.epoch !== null)
      ? EpochInfo.fromPartial(object.epoch)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request: DeepPartial<QueryEpochsInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(
    request: DeepPartial<QueryCurrentEpochRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCurrentEpochResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  EpochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EpochInfos = this.EpochInfos.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
    this.EpochInfo = this.EpochInfo.bind(this);
  }

  EpochInfos(request: DeepPartial<QueryEpochsInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse> {
    return this.rpc.unary(QueryEpochInfosDesc, QueryEpochsInfoRequest.fromPartial(request), metadata);
  }

  CurrentEpoch(
    request: DeepPartial<QueryCurrentEpochRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCurrentEpochResponse> {
    return this.rpc.unary(QueryCurrentEpochDesc, QueryCurrentEpochRequest.fromPartial(request), metadata);
  }

  EpochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse> {
    return this.rpc.unary(QueryEpochInfoDesc, QueryEpochInfoRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "stride.epochs.Query" };

export const QueryEpochInfosDesc: UnaryMethodDefinitionish = {
  methodName: "EpochInfos",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEpochsInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryEpochsInfoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryCurrentEpochDesc: UnaryMethodDefinitionish = {
  methodName: "CurrentEpoch",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCurrentEpochRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCurrentEpochResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryEpochInfoDesc: UnaryMethodDefinitionish = {
  methodName: "EpochInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEpochInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryEpochInfoResponse.decode(data);
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
