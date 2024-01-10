/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
import { State } from "../../../feemarket/feemarket/v1/genesis";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "feemarket.feemarket.v1";

/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the feemarket module.
 */
export interface MsgParams {
  /** Params defines the new parameters for the feemarket module. */
  params?: Params;
  /**
   * Authority defines the authority that is updating the feemarket module
   * parameters.
   */
  authority: string;
}

/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {}

/**
 * MsgState defines the Msg/State request type. It contains the
 * new state of feeDenom for the feemarket module.
 */
export interface MsgState {
  /** State defines the new state for the feemarket module. */
  state?: State;
  /**
   * Authority defines the authority that is updating the feemarket module
   * parameters.
   */
  authority: string;
}

/** MsgStateResponse defines the Msg/State response type. */
export interface MsgStateResponse {}

const baseMsgParams: object = { authority: "" };

export const MsgParams = {
  encode(message: MsgParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParams } as MsgParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgParams {
    const message = { ...baseMsgParams } as MsgParams;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgParams>): MsgParams {
    const message = { ...baseMsgParams } as MsgParams;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgParamsResponse: object = {};

export const MsgParamsResponse = {
  encode(_: MsgParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
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

  fromJSON(_: any): MsgParamsResponse {
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
    return message;
  },

  toJSON(_: MsgParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgParamsResponse>): MsgParamsResponse {
    const message = { ...baseMsgParamsResponse } as MsgParamsResponse;
    return message;
  },
};

const baseMsgState: object = { authority: "" };

export const MsgState = {
  encode(message: MsgState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgState } as MsgState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgState {
    const message = { ...baseMsgState } as MsgState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgState): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgState>): MsgState {
    const message = { ...baseMsgState } as MsgState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgStateResponse: object = {};

export const MsgStateResponse = {
  encode(_: MsgStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStateResponse } as MsgStateResponse;
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

  fromJSON(_: any): MsgStateResponse {
    const message = { ...baseMsgStateResponse } as MsgStateResponse;
    return message;
  },

  toJSON(_: MsgStateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStateResponse>): MsgStateResponse {
    const message = { ...baseMsgStateResponse } as MsgStateResponse;
    return message;
  },
};

/**
 * Message service defines the types of messages supported by the feemarket
 * module.
 */
export interface Msg {
  /** Params defines a method for updating the feemarket module parameters. */
  Params(request: DeepPartial<MsgParams>, metadata?: grpc.Metadata): Promise<MsgParamsResponse>;
  /** State defines a method for updating the feemarket module states. */
  State(request: DeepPartial<MsgState>, metadata?: grpc.Metadata): Promise<MsgStateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.State = this.State.bind(this);
  }

  Params(request: DeepPartial<MsgParams>, metadata?: grpc.Metadata): Promise<MsgParamsResponse> {
    return this.rpc.unary(MsgParamsDesc, MsgParams.fromPartial(request), metadata);
  }

  State(request: DeepPartial<MsgState>, metadata?: grpc.Metadata): Promise<MsgStateResponse> {
    return this.rpc.unary(MsgStateDesc, MsgState.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "feemarket.feemarket.v1.Msg",
};

export const MsgParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgStateDesc: UnaryMethodDefinitionish = {
  methodName: "State",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgState.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStateResponse.decode(data),
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
