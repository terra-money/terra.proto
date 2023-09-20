/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { ModuleOptions } from "../../../cosmos/autocli/v1/options";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "cosmos.autocli.v1";

/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {}

/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  moduleOptions: { [key: string]: ModuleOptions };
}

export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value?: ModuleOptions;
}

const baseAppOptionsRequest: object = {};

export const AppOptionsRequest = {
  encode(_: AppOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
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

  fromJSON(_: any): AppOptionsRequest {
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
    return message;
  },

  toJSON(_: AppOptionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest {
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
    return message;
  },
};

const baseAppOptionsResponse: object = {};

export const AppOptionsResponse = {
  encode(message: AppOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.moduleOptions[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse {
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = {};
    if (object.moduleOptions !== undefined && object.moduleOptions !== null) {
      Object.entries(object.moduleOptions).forEach(([key, value]) => {
        message.moduleOptions[key] = ModuleOptions.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: AppOptionsResponse): unknown {
    const obj: any = {};
    obj.moduleOptions = {};
    if (message.moduleOptions) {
      Object.entries(message.moduleOptions).forEach(([k, v]) => {
        obj.moduleOptions[k] = ModuleOptions.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse {
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = {};
    if (object.moduleOptions !== undefined && object.moduleOptions !== null) {
      Object.entries(object.moduleOptions).forEach(([key, value]) => {
        if (value !== undefined) {
          message.moduleOptions[key] = ModuleOptions.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseAppOptionsResponse_ModuleOptionsEntry: object = { key: "" };

export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(
    message: AppOptionsResponse_ModuleOptionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppOptionsResponse_ModuleOptionsEntry } as AppOptionsResponse_ModuleOptionsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry {
    const message = { ...baseAppOptionsResponse_ModuleOptionsEntry } as AppOptionsResponse_ModuleOptionsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ModuleOptions.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: AppOptionsResponse_ModuleOptionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? ModuleOptions.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>,
  ): AppOptionsResponse_ModuleOptionsEntry {
    const message = { ...baseAppOptionsResponse_ModuleOptionsEntry } as AppOptionsResponse_ModuleOptionsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ModuleOptions.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

/**
 * RemoteInfoService provides clients with the information they need
 * to build dynamically CLI clients for remote chains.
 */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AppOptions = this.AppOptions.bind(this);
  }

  AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse> {
    return this.rpc.unary(QueryAppOptionsDesc, AppOptionsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "cosmos.autocli.v1.Query",
};

export const QueryAppOptionsDesc: UnaryMethodDefinitionish = {
  methodName: "AppOptions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AppOptionsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AppOptionsResponse.decode(data),
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
