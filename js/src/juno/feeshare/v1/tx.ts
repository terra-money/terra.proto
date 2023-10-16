/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../juno/feeshare/v1/genesis";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "juno.feeshare.v1";

/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string;
}

/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponse {}

/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string;
}

/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponse {}

/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string;
}

/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponse {}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/feeshare parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}

const baseMsgRegisterFeeShare: object = { contractAddress: "", deployerAddress: "", withdrawerAddress: "" };

export const MsgRegisterFeeShare = {
  encode(message: MsgRegisterFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterFeeShare } as MsgRegisterFeeShare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterFeeShare {
    const message = { ...baseMsgRegisterFeeShare } as MsgRegisterFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = String(object.deployerAddress);
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = String(object.withdrawerAddress);
    } else {
      message.withdrawerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterFeeShare): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterFeeShare>): MsgRegisterFeeShare {
    const message = { ...baseMsgRegisterFeeShare } as MsgRegisterFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = object.deployerAddress;
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = object.withdrawerAddress;
    } else {
      message.withdrawerAddress = "";
    }
    return message;
  },
};

const baseMsgRegisterFeeShareResponse: object = {};

export const MsgRegisterFeeShareResponse = {
  encode(_: MsgRegisterFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
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

  fromJSON(_: any): MsgRegisterFeeShareResponse {
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
    return message;
  },

  toJSON(_: MsgRegisterFeeShareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse {
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
    return message;
  },
};

const baseMsgUpdateFeeShare: object = { contractAddress: "", deployerAddress: "", withdrawerAddress: "" };

export const MsgUpdateFeeShare = {
  encode(message: MsgUpdateFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFeeShare } as MsgUpdateFeeShare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeShare {
    const message = { ...baseMsgUpdateFeeShare } as MsgUpdateFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = String(object.deployerAddress);
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = String(object.withdrawerAddress);
    } else {
      message.withdrawerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateFeeShare): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeShare>): MsgUpdateFeeShare {
    const message = { ...baseMsgUpdateFeeShare } as MsgUpdateFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = object.deployerAddress;
    } else {
      message.deployerAddress = "";
    }
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = object.withdrawerAddress;
    } else {
      message.withdrawerAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateFeeShareResponse: object = {};

export const MsgUpdateFeeShareResponse = {
  encode(_: MsgUpdateFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFeeShareResponse } as MsgUpdateFeeShareResponse;
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

  fromJSON(_: any): MsgUpdateFeeShareResponse {
    const message = { ...baseMsgUpdateFeeShareResponse } as MsgUpdateFeeShareResponse;
    return message;
  },

  toJSON(_: MsgUpdateFeeShareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateFeeShareResponse>): MsgUpdateFeeShareResponse {
    const message = { ...baseMsgUpdateFeeShareResponse } as MsgUpdateFeeShareResponse;
    return message;
  },
};

const baseMsgCancelFeeShare: object = { contractAddress: "", deployerAddress: "" };

export const MsgCancelFeeShare = {
  encode(message: MsgCancelFeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelFeeShare } as MsgCancelFeeShare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelFeeShare {
    const message = { ...baseMsgCancelFeeShare } as MsgCancelFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = String(object.deployerAddress);
    } else {
      message.deployerAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCancelFeeShare): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelFeeShare>): MsgCancelFeeShare {
    const message = { ...baseMsgCancelFeeShare } as MsgCancelFeeShare;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = object.deployerAddress;
    } else {
      message.deployerAddress = "";
    }
    return message;
  },
};

const baseMsgCancelFeeShareResponse: object = {};

export const MsgCancelFeeShareResponse = {
  encode(_: MsgCancelFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelFeeShareResponse } as MsgCancelFeeShareResponse;
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

  fromJSON(_: any): MsgCancelFeeShareResponse {
    const message = { ...baseMsgCancelFeeShareResponse } as MsgCancelFeeShareResponse;
    return message;
  },

  toJSON(_: MsgCancelFeeShareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelFeeShareResponse>): MsgCancelFeeShareResponse {
    const message = { ...baseMsgCancelFeeShareResponse } as MsgCancelFeeShareResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the fees Msg service. */
export interface Msg {
  /** RegisterFeeShare registers a new contract for receiving transaction fees */
  RegisterFeeShare(
    request: DeepPartial<MsgRegisterFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterFeeShareResponse>;
  /** UpdateFeeShare updates the withdrawer address of a FeeShare */
  UpdateFeeShare(
    request: DeepPartial<MsgUpdateFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateFeeShareResponse>;
  /**
   * CancelFeeShare cancels a contract's fee registration and further receival
   * of transaction fees
   */
  CancelFeeShare(
    request: DeepPartial<MsgCancelFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCancelFeeShareResponse>;
  /** Update the params of the module through gov v1 type. */
  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterFeeShare = this.RegisterFeeShare.bind(this);
    this.UpdateFeeShare = this.UpdateFeeShare.bind(this);
    this.CancelFeeShare = this.CancelFeeShare.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }

  RegisterFeeShare(
    request: DeepPartial<MsgRegisterFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterFeeShareResponse> {
    return this.rpc.unary(MsgRegisterFeeShareDesc, MsgRegisterFeeShare.fromPartial(request), metadata);
  }

  UpdateFeeShare(
    request: DeepPartial<MsgUpdateFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateFeeShareResponse> {
    return this.rpc.unary(MsgUpdateFeeShareDesc, MsgUpdateFeeShare.fromPartial(request), metadata);
  }

  CancelFeeShare(
    request: DeepPartial<MsgCancelFeeShare>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCancelFeeShareResponse> {
    return this.rpc.unary(MsgCancelFeeShareDesc, MsgCancelFeeShare.fromPartial(request), metadata);
  }

  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "juno.feeshare.v1.Msg",
};

export const MsgRegisterFeeShareDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterFeeShare",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterFeeShare.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterFeeShareResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateFeeShareDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateFeeShare",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateFeeShare.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateFeeShareResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCancelFeeShareDesc: UnaryMethodDefinitionish = {
  methodName: "CancelFeeShare",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelFeeShare.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelFeeShareResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
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
