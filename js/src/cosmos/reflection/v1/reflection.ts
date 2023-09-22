/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";

export const protobufPackage = "cosmos.reflection.v1";

/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}

/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}

const baseFileDescriptorsRequest: object = {};

export const FileDescriptorsRequest = {
  encode(_: FileDescriptorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
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

  fromJSON(_: any): FileDescriptorsRequest {
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
    return message;
  },

  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
    return message;
  },
};

const baseFileDescriptorsResponse: object = {};

export const FileDescriptorsResponse = {
  encode(message: FileDescriptorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorsResponse } as FileDescriptorsResponse;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorsResponse {
    const message = { ...baseFileDescriptorsResponse } as FileDescriptorsResponse;
    message.files = [];
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(FileDescriptorProto.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => (e ? FileDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FileDescriptorsResponse>): FileDescriptorsResponse {
    const message = { ...baseFileDescriptorsResponse } as FileDescriptorsResponse;
    message.files = [];
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(FileDescriptorProto.fromPartial(e));
      }
    }
    return message;
  },
};

/**
 * Package cosmos.reflection.v1 provides support for inspecting protobuf
 * file descriptors.
 */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  FileDescriptors(
    request: DeepPartial<FileDescriptorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FileDescriptorsResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FileDescriptors = this.FileDescriptors.bind(this);
  }

  FileDescriptors(
    request: DeepPartial<FileDescriptorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FileDescriptorsResponse> {
    return this.rpc.unary(
      ReflectionServiceFileDescriptorsDesc,
      FileDescriptorsRequest.fromPartial(request),
      metadata,
    );
  }
}

export const ReflectionServiceDesc = {
  serviceName: "cosmos.reflection.v1.ReflectionService",
};

export const ReflectionServiceFileDescriptorsDesc: UnaryMethodDefinitionish = {
  methodName: "FileDescriptors",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FileDescriptorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FileDescriptorsResponse.decode(data),
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
