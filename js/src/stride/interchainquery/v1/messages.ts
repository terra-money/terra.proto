/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ProofOps } from "../../../tendermint/crypto/proof";

export const protobufPackage = "stride.interchainquery.v1";

/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
  chainId: string;
  queryId: string;
  result: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  fromAddress: string;
}

/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {
}

function createBaseMsgSubmitQueryResponse(): MsgSubmitQueryResponse {
  return {
    chainId: "",
    queryId: "",
    result: new Uint8Array(),
    proofOps: undefined,
    height: Long.ZERO,
    fromAddress: "",
  };
}

export const MsgSubmitQueryResponse = {
  encode(message: MsgSubmitQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.queryId !== "") {
      writer.uint32(18).string(message.queryId);
    }
    if (message.result.length !== 0) {
      writer.uint32(26).bytes(message.result);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.fromAddress !== "") {
      writer.uint32(50).string(message.fromAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.queryId = reader.string();
          break;
        case 3:
          message.result = reader.bytes();
          break;
        case 4:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int64() as Long;
          break;
        case 6:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitQueryResponse {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
    };
  },

  toJSON(message: MsgSubmitQueryResponse): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.result !== undefined &&
      (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitQueryResponse>, I>>(base?: I): MsgSubmitQueryResponse {
    return MsgSubmitQueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResponse>, I>>(object: I): MsgSubmitQueryResponse {
    const message = createBaseMsgSubmitQueryResponse();
    message.chainId = object.chainId ?? "";
    message.queryId = object.queryId ?? "";
    message.result = object.result ?? new Uint8Array();
    message.proofOps = (object.proofOps !== undefined && object.proofOps !== null)
      ? ProofOps.fromPartial(object.proofOps)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
};

function createBaseMsgSubmitQueryResponseResponse(): MsgSubmitQueryResponseResponse {
  return {};
}

export const MsgSubmitQueryResponseResponse = {
  encode(_: MsgSubmitQueryResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponseResponse();
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

  fromJSON(_: any): MsgSubmitQueryResponseResponse {
    return {};
  },

  toJSON(_: MsgSubmitQueryResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitQueryResponseResponse>, I>>(base?: I): MsgSubmitQueryResponseResponse {
    return MsgSubmitQueryResponseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResponseResponse>, I>>(_: I): MsgSubmitQueryResponseResponse {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
};

/** Msg defines the interchainquery Msg service. */
export interface Msg {
  /** SubmitQueryResponse defines a method for submit query responses. */
  SubmitQueryResponse(
    request: DeepPartial<MsgSubmitQueryResponse>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitQueryResponseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitQueryResponse = this.SubmitQueryResponse.bind(this);
  }

  SubmitQueryResponse(
    request: DeepPartial<MsgSubmitQueryResponse>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitQueryResponseResponse> {
    return this.rpc.unary(MsgSubmitQueryResponseDesc, MsgSubmitQueryResponse.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "stride.interchainquery.v1.Msg" };

export const MsgSubmitQueryResponseDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitQueryResponse",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitQueryResponse.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSubmitQueryResponseResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
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
    const maybeCombinedMetadata = metadata && this.options.metadata
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
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
