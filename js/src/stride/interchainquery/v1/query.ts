/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Query } from "../../../stride/interchainquery/v1/genesis";

export const protobufPackage = "stride.interchainquery.v1";

export interface QueryPendingQueriesRequest {}

export interface QueryPendingQueriesResponse {
  pendingQueries: Query[];
}

const baseQueryPendingQueriesRequest: object = {};

export const QueryPendingQueriesRequest = {
  encode(_: QueryPendingQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPendingQueriesRequest } as QueryPendingQueriesRequest;
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

  fromJSON(_: any): QueryPendingQueriesRequest {
    const message = { ...baseQueryPendingQueriesRequest } as QueryPendingQueriesRequest;
    return message;
  },

  toJSON(_: QueryPendingQueriesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest {
    const message = { ...baseQueryPendingQueriesRequest } as QueryPendingQueriesRequest;
    return message;
  },
};

const baseQueryPendingQueriesResponse: object = {};

export const QueryPendingQueriesResponse = {
  encode(message: QueryPendingQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingQueries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPendingQueriesResponse } as QueryPendingQueriesResponse;
    message.pendingQueries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingQueries.push(Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingQueriesResponse {
    const message = { ...baseQueryPendingQueriesResponse } as QueryPendingQueriesResponse;
    message.pendingQueries = [];
    if (object.pendingQueries !== undefined && object.pendingQueries !== null) {
      for (const e of object.pendingQueries) {
        message.pendingQueries.push(Query.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryPendingQueriesResponse): unknown {
    const obj: any = {};
    if (message.pendingQueries) {
      obj.pendingQueries = message.pendingQueries.map((e) => (e ? Query.toJSON(e) : undefined));
    } else {
      obj.pendingQueries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse {
    const message = { ...baseQueryPendingQueriesResponse } as QueryPendingQueriesResponse;
    message.pendingQueries = [];
    if (object.pendingQueries !== undefined && object.pendingQueries !== null) {
      for (const e of object.pendingQueries) {
        message.pendingQueries.push(Query.fromPartial(e));
      }
    }
    return message;
  },
};

export interface QueryService {
  PendingQueries(
    request: DeepPartial<QueryPendingQueriesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPendingQueriesResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PendingQueries = this.PendingQueries.bind(this);
  }

  PendingQueries(
    request: DeepPartial<QueryPendingQueriesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPendingQueriesResponse> {
    return this.rpc.unary(
      QueryServicePendingQueriesDesc,
      QueryPendingQueriesRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryServiceDesc = {
  serviceName: "stride.interchainquery.v1.QueryService",
};

export const QueryServicePendingQueriesDesc: UnaryMethodDefinitionish = {
  methodName: "PendingQueries",
  service: QueryServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPendingQueriesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPendingQueriesResponse.decode(data),
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
