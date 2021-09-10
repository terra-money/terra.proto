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

export const protobufPackage = "cosmos.base.reflection.v1beta1";

/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {}

/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}

const baseListAllInterfacesRequest: object = {};

export const ListAllInterfacesRequest = {
  encode(_: ListAllInterfacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
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

  fromJSON(_: any): ListAllInterfacesRequest {
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
    return message;
  },

  toJSON(_: ListAllInterfacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
    return message;
  },
};

const baseListAllInterfacesResponse: object = { interfaceNames: "" };

export const ListAllInterfacesResponse = {
  encode(message: ListAllInterfacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAllInterfacesResponse {
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
    if (object.interfaceNames !== undefined && object.interfaceNames !== null) {
      for (const e of object.interfaceNames) {
        message.interfaceNames.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ListAllInterfacesResponse): unknown {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map((e) => e);
    } else {
      obj.interfaceNames = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
    if (object.interfaceNames !== undefined && object.interfaceNames !== null) {
      for (const e of object.interfaceNames) {
        message.interfaceNames.push(e);
      }
    }
    return message;
  },
};

const baseListImplementationsRequest: object = { interfaceName: "" };

export const ListImplementationsRequest = {
  encode(message: ListImplementationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsRequest {
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
    if (object.interfaceName !== undefined && object.interfaceName !== null) {
      message.interfaceName = String(object.interfaceName);
    } else {
      message.interfaceName = "";
    }
    return message;
  },

  toJSON(message: ListImplementationsRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },

  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
    if (object.interfaceName !== undefined && object.interfaceName !== null) {
      message.interfaceName = object.interfaceName;
    } else {
      message.interfaceName = "";
    }
    return message;
  },
};

const baseListImplementationsResponse: object = { implementationMessageNames: "" };

export const ListImplementationsResponse = {
  encode(message: ListImplementationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsResponse {
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
    if (object.implementationMessageNames !== undefined && object.implementationMessageNames !== null) {
      for (const e of object.implementationMessageNames) {
        message.implementationMessageNames.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ListImplementationsResponse): unknown {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map((e) => e);
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
    if (object.implementationMessageNames !== undefined && object.implementationMessageNames !== null) {
      for (const e of object.implementationMessageNames) {
        message.implementationMessageNames.push(e);
      }
    }
    return message;
  },
};

/** ReflectionService defines a service for interface reflection. */
export const ReflectionServiceService = {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  listAllInterfaces: {
    path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAllInterfacesRequest) =>
      Buffer.from(ListAllInterfacesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListAllInterfacesRequest.decode(value),
    responseSerialize: (value: ListAllInterfacesResponse) =>
      Buffer.from(ListAllInterfacesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListAllInterfacesResponse.decode(value),
  },
  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  listImplementations: {
    path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListImplementationsRequest) =>
      Buffer.from(ListImplementationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListImplementationsRequest.decode(value),
    responseSerialize: (value: ListImplementationsResponse) =>
      Buffer.from(ListImplementationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListImplementationsResponse.decode(value),
  },
} as const;

export interface ReflectionServiceServer extends UntypedServiceImplementation {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  listAllInterfaces: handleUnaryCall<ListAllInterfacesRequest, ListAllInterfacesResponse>;
  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  listImplementations: handleUnaryCall<ListImplementationsRequest, ListImplementationsResponse>;
}

export interface ReflectionServiceClient extends Client {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  listAllInterfaces(
    request: ListAllInterfacesRequest,
    callback: (error: ServiceError | null, response: ListAllInterfacesResponse) => void,
  ): ClientUnaryCall;
  listAllInterfaces(
    request: ListAllInterfacesRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: ListAllInterfacesResponse) => void,
  ): ClientUnaryCall;
  listAllInterfaces(
    request: ListAllInterfacesRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListAllInterfacesResponse) => void,
  ): ClientUnaryCall;
  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  listImplementations(
    request: ListImplementationsRequest,
    callback: (error: ServiceError | null, response: ListImplementationsResponse) => void,
  ): ClientUnaryCall;
  listImplementations(
    request: ListImplementationsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: ListImplementationsResponse) => void,
  ): ClientUnaryCall;
  listImplementations(
    request: ListImplementationsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListImplementationsResponse) => void,
  ): ClientUnaryCall;
}

export const ReflectionServiceClient = makeGenericClientConstructor(
  ReflectionServiceService,
  "cosmos.base.reflection.v1beta1.ReflectionService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>,
  ): ReflectionServiceClient;
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
