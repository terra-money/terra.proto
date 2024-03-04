/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { AuthorizationMsg } from "../../../terra/smartaccount/v1/setting";

export const protobufPackage = "terra.smartaccount.v1";

export interface MsgCreateSmartAccount {
  account: string;
}

export interface MsgCreateSmartAccountResponse {}

export interface MsgUpdateAuthorization {
  account: string;
  fallback: boolean;
  authorizationMsgs: AuthorizationMsg[];
}

export interface MsgUpdateAuthorizationResponse {}

export interface MsgUpdateTransactionHooks {
  account: string;
  preTransactionHooks: string[];
  postTransactionHooks: string[];
}

export interface MsgUpdateTransactionHooksResponse {}

export interface MsgDisableSmartAccount {
  account: string;
}

export interface MsgDisableSmartAccountResponse {}

const baseMsgCreateSmartAccount: object = { account: "" };

export const MsgCreateSmartAccount = {
  encode(message: MsgCreateSmartAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSmartAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSmartAccount } as MsgCreateSmartAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSmartAccount {
    const message = { ...baseMsgCreateSmartAccount } as MsgCreateSmartAccount;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSmartAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSmartAccount>): MsgCreateSmartAccount {
    const message = { ...baseMsgCreateSmartAccount } as MsgCreateSmartAccount;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    return message;
  },
};

const baseMsgCreateSmartAccountResponse: object = {};

export const MsgCreateSmartAccountResponse = {
  encode(_: MsgCreateSmartAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSmartAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSmartAccountResponse } as MsgCreateSmartAccountResponse;
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

  fromJSON(_: any): MsgCreateSmartAccountResponse {
    const message = { ...baseMsgCreateSmartAccountResponse } as MsgCreateSmartAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateSmartAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateSmartAccountResponse>): MsgCreateSmartAccountResponse {
    const message = { ...baseMsgCreateSmartAccountResponse } as MsgCreateSmartAccountResponse;
    return message;
  },
};

const baseMsgUpdateAuthorization: object = { account: "", fallback: false };

export const MsgUpdateAuthorization = {
  encode(message: MsgUpdateAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.fallback === true) {
      writer.uint32(16).bool(message.fallback);
    }
    for (const v of message.authorizationMsgs) {
      AuthorizationMsg.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAuthorization } as MsgUpdateAuthorization;
    message.authorizationMsgs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.fallback = reader.bool();
          break;
        case 3:
          message.authorizationMsgs.push(AuthorizationMsg.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAuthorization {
    const message = { ...baseMsgUpdateAuthorization } as MsgUpdateAuthorization;
    message.authorizationMsgs = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.fallback !== undefined && object.fallback !== null) {
      message.fallback = Boolean(object.fallback);
    } else {
      message.fallback = false;
    }
    if (object.authorizationMsgs !== undefined && object.authorizationMsgs !== null) {
      for (const e of object.authorizationMsgs) {
        message.authorizationMsgs.push(AuthorizationMsg.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateAuthorization): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.fallback !== undefined && (obj.fallback = message.fallback);
    if (message.authorizationMsgs) {
      obj.authorizationMsgs = message.authorizationMsgs.map((e) =>
        e ? AuthorizationMsg.toJSON(e) : undefined,
      );
    } else {
      obj.authorizationMsgs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAuthorization>): MsgUpdateAuthorization {
    const message = { ...baseMsgUpdateAuthorization } as MsgUpdateAuthorization;
    message.authorizationMsgs = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.fallback !== undefined && object.fallback !== null) {
      message.fallback = object.fallback;
    } else {
      message.fallback = false;
    }
    if (object.authorizationMsgs !== undefined && object.authorizationMsgs !== null) {
      for (const e of object.authorizationMsgs) {
        message.authorizationMsgs.push(AuthorizationMsg.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateAuthorizationResponse: object = {};

export const MsgUpdateAuthorizationResponse = {
  encode(_: MsgUpdateAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAuthorizationResponse } as MsgUpdateAuthorizationResponse;
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

  fromJSON(_: any): MsgUpdateAuthorizationResponse {
    const message = { ...baseMsgUpdateAuthorizationResponse } as MsgUpdateAuthorizationResponse;
    return message;
  },

  toJSON(_: MsgUpdateAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateAuthorizationResponse>): MsgUpdateAuthorizationResponse {
    const message = { ...baseMsgUpdateAuthorizationResponse } as MsgUpdateAuthorizationResponse;
    return message;
  },
};

const baseMsgUpdateTransactionHooks: object = {
  account: "",
  preTransactionHooks: "",
  postTransactionHooks: "",
};

export const MsgUpdateTransactionHooks = {
  encode(message: MsgUpdateTransactionHooks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.preTransactionHooks) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.postTransactionHooks) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransactionHooks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTransactionHooks } as MsgUpdateTransactionHooks;
    message.preTransactionHooks = [];
    message.postTransactionHooks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.preTransactionHooks.push(reader.string());
          break;
        case 3:
          message.postTransactionHooks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTransactionHooks {
    const message = { ...baseMsgUpdateTransactionHooks } as MsgUpdateTransactionHooks;
    message.preTransactionHooks = [];
    message.postTransactionHooks = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.preTransactionHooks !== undefined && object.preTransactionHooks !== null) {
      for (const e of object.preTransactionHooks) {
        message.preTransactionHooks.push(String(e));
      }
    }
    if (object.postTransactionHooks !== undefined && object.postTransactionHooks !== null) {
      for (const e of object.postTransactionHooks) {
        message.postTransactionHooks.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateTransactionHooks): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.preTransactionHooks) {
      obj.preTransactionHooks = message.preTransactionHooks.map((e) => e);
    } else {
      obj.preTransactionHooks = [];
    }
    if (message.postTransactionHooks) {
      obj.postTransactionHooks = message.postTransactionHooks.map((e) => e);
    } else {
      obj.postTransactionHooks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTransactionHooks>): MsgUpdateTransactionHooks {
    const message = { ...baseMsgUpdateTransactionHooks } as MsgUpdateTransactionHooks;
    message.preTransactionHooks = [];
    message.postTransactionHooks = [];
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.preTransactionHooks !== undefined && object.preTransactionHooks !== null) {
      for (const e of object.preTransactionHooks) {
        message.preTransactionHooks.push(e);
      }
    }
    if (object.postTransactionHooks !== undefined && object.postTransactionHooks !== null) {
      for (const e of object.postTransactionHooks) {
        message.postTransactionHooks.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateTransactionHooksResponse: object = {};

export const MsgUpdateTransactionHooksResponse = {
  encode(_: MsgUpdateTransactionHooksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransactionHooksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTransactionHooksResponse } as MsgUpdateTransactionHooksResponse;
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

  fromJSON(_: any): MsgUpdateTransactionHooksResponse {
    const message = { ...baseMsgUpdateTransactionHooksResponse } as MsgUpdateTransactionHooksResponse;
    return message;
  },

  toJSON(_: MsgUpdateTransactionHooksResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTransactionHooksResponse>): MsgUpdateTransactionHooksResponse {
    const message = { ...baseMsgUpdateTransactionHooksResponse } as MsgUpdateTransactionHooksResponse;
    return message;
  },
};

const baseMsgDisableSmartAccount: object = { account: "" };

export const MsgDisableSmartAccount = {
  encode(message: MsgDisableSmartAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableSmartAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSmartAccount } as MsgDisableSmartAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableSmartAccount {
    const message = { ...baseMsgDisableSmartAccount } as MsgDisableSmartAccount;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    return message;
  },

  toJSON(message: MsgDisableSmartAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDisableSmartAccount>): MsgDisableSmartAccount {
    const message = { ...baseMsgDisableSmartAccount } as MsgDisableSmartAccount;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    return message;
  },
};

const baseMsgDisableSmartAccountResponse: object = {};

export const MsgDisableSmartAccountResponse = {
  encode(_: MsgDisableSmartAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableSmartAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSmartAccountResponse } as MsgDisableSmartAccountResponse;
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

  fromJSON(_: any): MsgDisableSmartAccountResponse {
    const message = { ...baseMsgDisableSmartAccountResponse } as MsgDisableSmartAccountResponse;
    return message;
  },

  toJSON(_: MsgDisableSmartAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDisableSmartAccountResponse>): MsgDisableSmartAccountResponse {
    const message = { ...baseMsgDisableSmartAccountResponse } as MsgDisableSmartAccountResponse;
    return message;
  },
};

/** Msg defines the fees Msg service. */
export interface Msg {
  /** CreateSmartAccount defines a method for creating a smart account. */
  CreateSmartAccount(
    request: DeepPartial<MsgCreateSmartAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateSmartAccountResponse>;
  /** UpdateAuthorization defines a method for updating the wasm authentication contract. */
  UpdateAuthorization(
    request: DeepPartial<MsgUpdateAuthorization>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateAuthorizationResponse>;
  /** UpdateTransactionHooks defines a method for updating the wasm transaction hooks contract. */
  UpdateTransactionHooks(
    request: DeepPartial<MsgUpdateTransactionHooks>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateTransactionHooksResponse>;
  /** DisableSmartAccountMsg defines a method for converting smart account to basic account. */
  DisableSmartAccount(
    request: DeepPartial<MsgDisableSmartAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDisableSmartAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSmartAccount = this.CreateSmartAccount.bind(this);
    this.UpdateAuthorization = this.UpdateAuthorization.bind(this);
    this.UpdateTransactionHooks = this.UpdateTransactionHooks.bind(this);
    this.DisableSmartAccount = this.DisableSmartAccount.bind(this);
  }

  CreateSmartAccount(
    request: DeepPartial<MsgCreateSmartAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateSmartAccountResponse> {
    return this.rpc.unary(MsgCreateSmartAccountDesc, MsgCreateSmartAccount.fromPartial(request), metadata);
  }

  UpdateAuthorization(
    request: DeepPartial<MsgUpdateAuthorization>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateAuthorizationResponse> {
    return this.rpc.unary(MsgUpdateAuthorizationDesc, MsgUpdateAuthorization.fromPartial(request), metadata);
  }

  UpdateTransactionHooks(
    request: DeepPartial<MsgUpdateTransactionHooks>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateTransactionHooksResponse> {
    return this.rpc.unary(
      MsgUpdateTransactionHooksDesc,
      MsgUpdateTransactionHooks.fromPartial(request),
      metadata,
    );
  }

  DisableSmartAccount(
    request: DeepPartial<MsgDisableSmartAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDisableSmartAccountResponse> {
    return this.rpc.unary(MsgDisableSmartAccountDesc, MsgDisableSmartAccount.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "terra.smartaccount.v1.Msg",
};

export const MsgCreateSmartAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreateSmartAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateSmartAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateSmartAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateAuthorizationDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateAuthorization",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateAuthorization.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateAuthorizationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateTransactionHooksDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateTransactionHooks",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateTransactionHooks.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateTransactionHooksResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDisableSmartAccountDesc: UnaryMethodDefinitionish = {
  methodName: "DisableSmartAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDisableSmartAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDisableSmartAccountResponse.decode(data),
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
