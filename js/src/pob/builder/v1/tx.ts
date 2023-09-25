/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "../../../pob/builder/v1/genesis";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "pob.builder.v1";

/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
  /**
   * bidder is the address of the account that is submitting a bid to the
   * auction.
   */
  bidder: string;
  /**
   * bid is the amount of coins that the bidder is bidding to participate in the
   * auction.
   */
  bid?: Coin;
  /**
   * transactions are the bytes of the transactions that the bidder wants to
   * bundle together.
   */
  transactions: Uint8Array[];
}

/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {}

/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the account that is authorized to update the
   * x/builder module parameters.
   */
  authority: string;
  /** params is the new parameters for the x/builder module. */
  params?: Params;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}

const baseMsgAuctionBid: object = { bidder: "" };

export const MsgAuctionBid = {
  encode(message: MsgAuctionBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.transactions) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAuctionBid } as MsgAuctionBid;
    message.transactions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.transactions.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuctionBid {
    const message = { ...baseMsgAuctionBid } as MsgAuctionBid;
    message.transactions = [];
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder);
    } else {
      message.bidder = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromJSON(object.bid);
    } else {
      message.bid = undefined;
    }
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: MsgAuctionBid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined && (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAuctionBid>): MsgAuctionBid {
    const message = { ...baseMsgAuctionBid } as MsgAuctionBid;
    message.transactions = [];
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    } else {
      message.bidder = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromPartial(object.bid);
    } else {
      message.bid = undefined;
    }
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(e);
      }
    }
    return message;
  },
};

const baseMsgAuctionBidResponse: object = {};

export const MsgAuctionBidResponse = {
  encode(_: MsgAuctionBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAuctionBidResponse } as MsgAuctionBidResponse;
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

  fromJSON(_: any): MsgAuctionBidResponse {
    const message = { ...baseMsgAuctionBidResponse } as MsgAuctionBidResponse;
    return message;
  },

  toJSON(_: MsgAuctionBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAuctionBidResponse>): MsgAuctionBidResponse {
    const message = { ...baseMsgAuctionBidResponse } as MsgAuctionBidResponse;
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

/** Msg defines the x/builder Msg service. */
export interface Msg {
  /** AuctionBid defines a method for sending bids to the x/builder module. */
  AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/builder
   * module parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AuctionBid = this.AuctionBid.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }

  AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse> {
    return this.rpc.unary(MsgAuctionBidDesc, MsgAuctionBid.fromPartial(request), metadata);
  }

  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "pob.builder.v1.Msg",
};

export const MsgAuctionBidDesc: UnaryMethodDefinitionish = {
  methodName: "AuctionBid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAuctionBid.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAuctionBidResponse.decode(data),
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
