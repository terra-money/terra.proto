/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
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
 * MsgFeeDenomParam defines the Msg/FeeDenomParam request type. It contains the
 * new feeDenomParam of feeDenom for the feemarket module.
 */
export interface MsgFeeDenomParam {
  /** FeeDenom is the denom that will be used for all fee payments. */
  feeDenom: string;
  /**
   * MinBaseFee determines the initial base fee of the fee denom.
   * This is denominated in fee per gas unit.
   */
  minBaseFee: string;
  /**
   * Authority defines the authority that is updating the feemarket module
   * parameters.
   */
  authority: string;
}

/** MsgFeeDenomParamResponse defines the Msg/State response type. */
export interface MsgFeeDenomParamResponse {}

/**
 * MsgRemoveFeeDenomParam defines the Msg/RemoveFeeDenomParam request type. It
 * contains the feeDenom to be removed from the feemarket module.
 */
export interface MsgRemoveFeeDenomParam {
  /** FeeDenom is the denom that will be removed from the feemarket module. */
  feeDenom: string;
  /**
   * Authority defines the authority that is updating the feemarket module
   * parameters.
   */
  authority: string;
}

/**
 * MsgRemoveFeeDenomParamResponse defines the Msg/RemoveFeeDenomParam response
 * type.
 */
export interface MsgRemoveFeeDenomParamResponse {}

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

const baseMsgFeeDenomParam: object = { feeDenom: "", minBaseFee: "", authority: "" };

export const MsgFeeDenomParam = {
  encode(message: MsgFeeDenomParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDenom !== "") {
      writer.uint32(10).string(message.feeDenom);
    }
    if (message.minBaseFee !== "") {
      writer.uint32(18).string(message.minBaseFee);
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeeDenomParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFeeDenomParam } as MsgFeeDenomParam;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenom = reader.string();
          break;
        case 2:
          message.minBaseFee = reader.string();
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFeeDenomParam {
    const message = { ...baseMsgFeeDenomParam } as MsgFeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
      message.minBaseFee = String(object.minBaseFee);
    } else {
      message.minBaseFee = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgFeeDenomParam): unknown {
    const obj: any = {};
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.minBaseFee !== undefined && (obj.minBaseFee = message.minBaseFee);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFeeDenomParam>): MsgFeeDenomParam {
    const message = { ...baseMsgFeeDenomParam } as MsgFeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
      message.minBaseFee = object.minBaseFee;
    } else {
      message.minBaseFee = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgFeeDenomParamResponse: object = {};

export const MsgFeeDenomParamResponse = {
  encode(_: MsgFeeDenomParamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeeDenomParamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFeeDenomParamResponse } as MsgFeeDenomParamResponse;
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

  fromJSON(_: any): MsgFeeDenomParamResponse {
    const message = { ...baseMsgFeeDenomParamResponse } as MsgFeeDenomParamResponse;
    return message;
  },

  toJSON(_: MsgFeeDenomParamResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFeeDenomParamResponse>): MsgFeeDenomParamResponse {
    const message = { ...baseMsgFeeDenomParamResponse } as MsgFeeDenomParamResponse;
    return message;
  },
};

const baseMsgRemoveFeeDenomParam: object = { feeDenom: "", authority: "" };

export const MsgRemoveFeeDenomParam = {
  encode(message: MsgRemoveFeeDenomParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDenom !== "") {
      writer.uint32(10).string(message.feeDenom);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFeeDenomParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveFeeDenomParam } as MsgRemoveFeeDenomParam;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenom = reader.string();
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

  fromJSON(object: any): MsgRemoveFeeDenomParam {
    const message = { ...baseMsgRemoveFeeDenomParam } as MsgRemoveFeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveFeeDenomParam): unknown {
    const obj: any = {};
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveFeeDenomParam>): MsgRemoveFeeDenomParam {
    const message = { ...baseMsgRemoveFeeDenomParam } as MsgRemoveFeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgRemoveFeeDenomParamResponse: object = {};

export const MsgRemoveFeeDenomParamResponse = {
  encode(_: MsgRemoveFeeDenomParamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFeeDenomParamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveFeeDenomParamResponse } as MsgRemoveFeeDenomParamResponse;
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

  fromJSON(_: any): MsgRemoveFeeDenomParamResponse {
    const message = { ...baseMsgRemoveFeeDenomParamResponse } as MsgRemoveFeeDenomParamResponse;
    return message;
  },

  toJSON(_: MsgRemoveFeeDenomParamResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveFeeDenomParamResponse>): MsgRemoveFeeDenomParamResponse {
    const message = { ...baseMsgRemoveFeeDenomParamResponse } as MsgRemoveFeeDenomParamResponse;
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
  /** State defines a method for adding/updating the feedenomparam. */
  FeeDenomParam(
    request: DeepPartial<MsgFeeDenomParam>,
    metadata?: grpc.Metadata,
  ): Promise<MsgFeeDenomParamResponse>;
  /** RemoveFeeDenomParam defines a method for removing the feedenomparam. */
  RemoveFeeDenomParam(
    request: DeepPartial<MsgRemoveFeeDenomParam>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRemoveFeeDenomParamResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.FeeDenomParam = this.FeeDenomParam.bind(this);
    this.RemoveFeeDenomParam = this.RemoveFeeDenomParam.bind(this);
  }

  Params(request: DeepPartial<MsgParams>, metadata?: grpc.Metadata): Promise<MsgParamsResponse> {
    return this.rpc.unary(MsgParamsDesc, MsgParams.fromPartial(request), metadata);
  }

  FeeDenomParam(
    request: DeepPartial<MsgFeeDenomParam>,
    metadata?: grpc.Metadata,
  ): Promise<MsgFeeDenomParamResponse> {
    return this.rpc.unary(MsgFeeDenomParamDesc, MsgFeeDenomParam.fromPartial(request), metadata);
  }

  RemoveFeeDenomParam(
    request: DeepPartial<MsgRemoveFeeDenomParam>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRemoveFeeDenomParamResponse> {
    return this.rpc.unary(MsgRemoveFeeDenomParamDesc, MsgRemoveFeeDenomParam.fromPartial(request), metadata);
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

export const MsgFeeDenomParamDesc: UnaryMethodDefinitionish = {
  methodName: "FeeDenomParam",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgFeeDenomParam.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgFeeDenomParamResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRemoveFeeDenomParamDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveFeeDenomParam",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveFeeDenomParam.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveFeeDenomParamResponse.decode(data),
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
