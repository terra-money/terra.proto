/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "cosmos.base.node.v1beta1";

/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}

/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
}

const baseConfigRequest: object = {};

export const ConfigRequest = {
  encode(_: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigRequest } as ConfigRequest;
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

  fromJSON(_: any): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    return message;
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    return message;
  },
};

const baseConfigResponse: object = { minimumGasPrice: "" };

export const ConfigResponse = {
  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigResponse } as ConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    if (object.minimumGasPrice !== undefined && object.minimumGasPrice !== null) {
      message.minimumGasPrice = String(object.minimumGasPrice);
    } else {
      message.minimumGasPrice = "";
    }
    return message;
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    if (object.minimumGasPrice !== undefined && object.minimumGasPrice !== null) {
      message.minimumGasPrice = object.minimumGasPrice;
    } else {
      message.minimumGasPrice = "";
    }
    return message;
  },
};

/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request: DeepPartial<ConfigRequest>, metadata?: grpc.Metadata): Promise<ConfigResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }

  Config(request: DeepPartial<ConfigRequest>, metadata?: grpc.Metadata): Promise<ConfigResponse> {
    return this.rpc.unary(ServiceConfigDesc, ConfigRequest.fromPartial(request), metadata);
  }
}

export const ServiceDesc = {
  serviceName: "cosmos.base.node.v1beta1.Service",
};

export const ServiceConfigDesc: UnaryMethodDefinitionish = {
  methodName: "Config",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ConfigRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ConfigResponse.decode(data),
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
