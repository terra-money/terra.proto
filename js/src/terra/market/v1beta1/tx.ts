/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "terra.market.v1beta1";

/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwap {
  trader: string;
  offerCoin?: Coin;
  askDenom: string;
}

/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
  swapCoin?: Coin;
  swapFee?: Coin;
}

/** MsgSwapSend represents a message to swap coin and send all result coin to recipient */
export interface MsgSwapSend {
  fromAddress: string;
  toAddress: string;
  offerCoin?: Coin;
  askDenom: string;
}

/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponse {
  swapCoin?: Coin;
  swapFee?: Coin;
}

const baseMsgSwap: object = { trader: "", askDenom: "" };

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(26).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwap } as MsgSwap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string();
          break;
        case 2:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwap {
    const message = { ...baseMsgSwap } as MsgSwap;
    if (object.trader !== undefined && object.trader !== null) {
      message.trader = String(object.trader);
    } else {
      message.trader = "";
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromJSON(object.offerCoin);
    } else {
      message.offerCoin = undefined;
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = String(object.askDenom);
    } else {
      message.askDenom = "";
    }
    return message;
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.trader !== undefined && (obj.trader = message.trader);
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin ? Coin.toJSON(message.offerCoin) : undefined);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
    const message = { ...baseMsgSwap } as MsgSwap;
    if (object.trader !== undefined && object.trader !== null) {
      message.trader = object.trader;
    } else {
      message.trader = "";
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromPartial(object.offerCoin);
    } else {
      message.offerCoin = undefined;
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = object.askDenom;
    } else {
      message.askDenom = "";
    }
    return message;
  },
};

const baseMsgSwapResponse: object = {};

export const MsgSwapResponse = {
  encode(message: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapResponse {
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
    if (object.swapCoin !== undefined && object.swapCoin !== null) {
      message.swapCoin = Coin.fromJSON(object.swapCoin);
    } else {
      message.swapCoin = undefined;
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = Coin.fromJSON(object.swapFee);
    } else {
      message.swapFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgSwapResponse): unknown {
    const obj: any = {};
    message.swapCoin !== undefined &&
      (obj.swapCoin = message.swapCoin ? Coin.toJSON(message.swapCoin) : undefined);
    message.swapFee !== undefined &&
      (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
    if (object.swapCoin !== undefined && object.swapCoin !== null) {
      message.swapCoin = Coin.fromPartial(object.swapCoin);
    } else {
      message.swapCoin = undefined;
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = Coin.fromPartial(object.swapFee);
    } else {
      message.swapFee = undefined;
    }
    return message;
  },
};

const baseMsgSwapSend: object = { fromAddress: "", toAddress: "", askDenom: "" };

export const MsgSwapSend = {
  encode(message: MsgSwapSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(34).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwapSend } as MsgSwapSend;
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
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapSend {
    const message = { ...baseMsgSwapSend } as MsgSwapSend;
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
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromJSON(object.offerCoin);
    } else {
      message.offerCoin = undefined;
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = String(object.askDenom);
    } else {
      message.askDenom = "";
    }
    return message;
  },

  toJSON(message: MsgSwapSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin ? Coin.toJSON(message.offerCoin) : undefined);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwapSend>): MsgSwapSend {
    const message = { ...baseMsgSwapSend } as MsgSwapSend;
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
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromPartial(object.offerCoin);
    } else {
      message.offerCoin = undefined;
    }
    if (object.askDenom !== undefined && object.askDenom !== null) {
      message.askDenom = object.askDenom;
    } else {
      message.askDenom = "";
    }
    return message;
  },
};

const baseMsgSwapSendResponse: object = {};

export const MsgSwapSendResponse = {
  encode(message: MsgSwapSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSwapSendResponse } as MsgSwapSendResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapSendResponse {
    const message = { ...baseMsgSwapSendResponse } as MsgSwapSendResponse;
    if (object.swapCoin !== undefined && object.swapCoin !== null) {
      message.swapCoin = Coin.fromJSON(object.swapCoin);
    } else {
      message.swapCoin = undefined;
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = Coin.fromJSON(object.swapFee);
    } else {
      message.swapFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgSwapSendResponse): unknown {
    const obj: any = {};
    message.swapCoin !== undefined &&
      (obj.swapCoin = message.swapCoin ? Coin.toJSON(message.swapCoin) : undefined);
    message.swapFee !== undefined &&
      (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwapSendResponse>): MsgSwapSendResponse {
    const message = { ...baseMsgSwapSendResponse } as MsgSwapSendResponse;
    if (object.swapCoin !== undefined && object.swapCoin !== null) {
      message.swapCoin = Coin.fromPartial(object.swapCoin);
    } else {
      message.swapCoin = undefined;
    }
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = Coin.fromPartial(object.swapFee);
    } else {
      message.swapFee = undefined;
    }
    return message;
  },
};

/** Msg defines the market Msg service. */
export interface Msg {
  /**
   * Swap defines a method for swapping coin from one denom to another
   * denom.
   */
  Swap(request: DeepPartial<MsgSwap>, metadata?: grpc.Metadata): Promise<MsgSwapResponse>;
  /**
   * SwapSend defines a method for swapping and sending coin from a account to other
   * account.
   */
  SwapSend(request: DeepPartial<MsgSwapSend>, metadata?: grpc.Metadata): Promise<MsgSwapSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.SwapSend = this.SwapSend.bind(this);
  }

  Swap(request: DeepPartial<MsgSwap>, metadata?: grpc.Metadata): Promise<MsgSwapResponse> {
    return this.rpc.unary(MsgSwapDesc, MsgSwap.fromPartial(request), metadata);
  }

  SwapSend(request: DeepPartial<MsgSwapSend>, metadata?: grpc.Metadata): Promise<MsgSwapSendResponse> {
    return this.rpc.unary(MsgSwapSendDesc, MsgSwapSend.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "terra.market.v1beta1.Msg",
};

export const MsgSwapDesc: UnaryMethodDefinitionish = {
  methodName: "Swap",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwap.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSwapSendDesc: UnaryMethodDefinitionish = {
  methodName: "SwapSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapSend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapSendResponse.decode(data),
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
