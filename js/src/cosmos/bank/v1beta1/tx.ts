/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";

export const protobufPackage = "cosmos.bank.v1beta1";

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}

const baseMsgSend: object = { fromAddress: "", toAddress: "" };

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgSendResponse: object = {};

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
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

  fromJSON(_: any): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
};

const baseMsgMultiSend: object = {};

export const MsgMultiSend = {
  encode(message: MsgMultiSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromJSON(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMultiSend): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => (e ? Input.toJSON(e) : undefined));
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => (e ? Output.toJSON(e) : undefined));
    } else {
      obj.outputs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromPartial(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgMultiSendResponse: object = {};

export const MsgMultiSendResponse = {
  encode(_: MsgMultiSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
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

  fromJSON(_: any): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },

  toJSON(_: MsgMultiSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  Send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  MultiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Send = this.Send.bind(this);
    this.MultiSend = this.MultiSend.bind(this);
  }

  Send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse> {
    return this.rpc.unary(MsgSendDesc, MsgSend.fromPartial(request), metadata);
  }

  MultiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse> {
    return this.rpc.unary(MsgMultiSendDesc, MsgMultiSend.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "cosmos.bank.v1beta1.Msg",
};

export const MsgSendDesc: UnaryMethodDefinitionish = {
  methodName: "Send",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSendResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgMultiSendDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMultiSend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMultiSendResponse.decode(data),
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
