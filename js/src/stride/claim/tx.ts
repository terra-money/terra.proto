/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "stride.claim";

export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}

export interface MsgSetAirdropAllocationsResponse {
}

export interface MsgClaimFreeAmount {
  user: string;
}

export interface MsgClaimFreeAmountResponse {
  claimedAmount: Coin[];
}

export interface MsgCreateAirdrop {
  distributor: string;
  identifier: string;
  startTime: Long;
  duration: Long;
  denom: string;
}

export interface MsgCreateAirdropResponse {
}

export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}

export interface MsgDeleteAirdropResponse {
}

function createBaseMsgSetAirdropAllocations(): MsgSetAirdropAllocations {
  return { allocator: "", airdropIdentifier: "", users: [], weights: [] };
}

export const MsgSetAirdropAllocations = {
  encode(message: MsgSetAirdropAllocations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocator !== "") {
      writer.uint32(10).string(message.allocator);
    }
    if (message.airdropIdentifier !== "") {
      writer.uint32(18).string(message.airdropIdentifier);
    }
    for (const v of message.users) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.weights) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocator = reader.string();
          break;
        case 2:
          message.airdropIdentifier = reader.string();
          break;
        case 3:
          message.users.push(reader.string());
          break;
        case 4:
          message.weights.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAirdropAllocations {
    return {
      allocator: isSet(object.allocator) ? String(object.allocator) : "",
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      users: Array.isArray(object?.users) ? object.users.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgSetAirdropAllocations): unknown {
    const obj: any = {};
    message.allocator !== undefined && (obj.allocator = message.allocator);
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    if (message.users) {
      obj.users = message.users.map((e) => e);
    } else {
      obj.users = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => e);
    } else {
      obj.weights = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetAirdropAllocations>, I>>(base?: I): MsgSetAirdropAllocations {
    return MsgSetAirdropAllocations.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAirdropAllocations>, I>>(object: I): MsgSetAirdropAllocations {
    const message = createBaseMsgSetAirdropAllocations();
    message.allocator = object.allocator ?? "";
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.users = object.users?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSetAirdropAllocationsResponse(): MsgSetAirdropAllocationsResponse {
  return {};
}

export const MsgSetAirdropAllocationsResponse = {
  encode(_: MsgSetAirdropAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocationsResponse();
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

  fromJSON(_: any): MsgSetAirdropAllocationsResponse {
    return {};
  },

  toJSON(_: MsgSetAirdropAllocationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetAirdropAllocationsResponse>, I>>(
    base?: I,
  ): MsgSetAirdropAllocationsResponse {
    return MsgSetAirdropAllocationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAirdropAllocationsResponse>, I>>(
    _: I,
  ): MsgSetAirdropAllocationsResponse {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
};

function createBaseMsgClaimFreeAmount(): MsgClaimFreeAmount {
  return { user: "" };
}

export const MsgClaimFreeAmount = {
  encode(message: MsgClaimFreeAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimFreeAmount {
    return { user: isSet(object.user) ? String(object.user) : "" };
  },

  toJSON(message: MsgClaimFreeAmount): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimFreeAmount>, I>>(base?: I): MsgClaimFreeAmount {
    return MsgClaimFreeAmount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimFreeAmount>, I>>(object: I): MsgClaimFreeAmount {
    const message = createBaseMsgClaimFreeAmount();
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgClaimFreeAmountResponse(): MsgClaimFreeAmountResponse {
  return { claimedAmount: [] };
}

export const MsgClaimFreeAmountResponse = {
  encode(message: MsgClaimFreeAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimFreeAmountResponse {
    return {
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgClaimFreeAmountResponse): unknown {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimFreeAmountResponse>, I>>(base?: I): MsgClaimFreeAmountResponse {
    return MsgClaimFreeAmountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimFreeAmountResponse>, I>>(object: I): MsgClaimFreeAmountResponse {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimedAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return { distributor: "", identifier: "", startTime: Long.UZERO, duration: Long.UZERO, denom: "" };
}

export const MsgCreateAirdrop = {
  encode(message: MsgCreateAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).uint64(message.startTime);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 3:
          message.startTime = reader.uint64() as Long;
          break;
        case 4:
          message.duration = reader.uint64() as Long;
          break;
        case 5:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAirdrop {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgCreateAirdrop): unknown {
    const obj: any = {};
    message.distributor !== undefined && (obj.distributor = message.distributor);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateAirdrop>, I>>(base?: I): MsgCreateAirdrop {
    return MsgCreateAirdrop.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAirdrop>, I>>(object: I): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? Long.fromValue(object.startTime)
      : Long.UZERO;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}

export const MsgCreateAirdropResponse = {
  encode(_: MsgCreateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdropResponse();
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

  fromJSON(_: any): MsgCreateAirdropResponse {
    return {};
  },

  toJSON(_: MsgCreateAirdropResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateAirdropResponse>, I>>(base?: I): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAirdropResponse>, I>>(_: I): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
};

function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return { distributor: "", identifier: "" };
}

export const MsgDeleteAirdrop = {
  encode(message: MsgDeleteAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAirdrop {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
    };
  },

  toJSON(message: MsgDeleteAirdrop): unknown {
    const obj: any = {};
    message.distributor !== undefined && (obj.distributor = message.distributor);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteAirdrop>, I>>(base?: I): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAirdrop>, I>>(object: I): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}

export const MsgDeleteAirdropResponse = {
  encode(_: MsgDeleteAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdropResponse();
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

  fromJSON(_: any): MsgDeleteAirdropResponse {
    return {};
  },

  toJSON(_: MsgDeleteAirdropResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteAirdropResponse>, I>>(base?: I): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAirdropResponse>, I>>(_: I): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetAirdropAllocations(
    request: DeepPartial<MsgSetAirdropAllocations>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetAirdropAllocationsResponse>;
  ClaimFreeAmount(
    request: DeepPartial<MsgClaimFreeAmount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimFreeAmountResponse>;
  CreateAirdrop(request: DeepPartial<MsgCreateAirdrop>, metadata?: grpc.Metadata): Promise<MsgCreateAirdropResponse>;
  DeleteAirdrop(request: DeepPartial<MsgDeleteAirdrop>, metadata?: grpc.Metadata): Promise<MsgDeleteAirdropResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetAirdropAllocations = this.SetAirdropAllocations.bind(this);
    this.ClaimFreeAmount = this.ClaimFreeAmount.bind(this);
    this.CreateAirdrop = this.CreateAirdrop.bind(this);
    this.DeleteAirdrop = this.DeleteAirdrop.bind(this);
  }

  SetAirdropAllocations(
    request: DeepPartial<MsgSetAirdropAllocations>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSetAirdropAllocationsResponse> {
    return this.rpc.unary(MsgSetAirdropAllocationsDesc, MsgSetAirdropAllocations.fromPartial(request), metadata);
  }

  ClaimFreeAmount(
    request: DeepPartial<MsgClaimFreeAmount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimFreeAmountResponse> {
    return this.rpc.unary(MsgClaimFreeAmountDesc, MsgClaimFreeAmount.fromPartial(request), metadata);
  }

  CreateAirdrop(request: DeepPartial<MsgCreateAirdrop>, metadata?: grpc.Metadata): Promise<MsgCreateAirdropResponse> {
    return this.rpc.unary(MsgCreateAirdropDesc, MsgCreateAirdrop.fromPartial(request), metadata);
  }

  DeleteAirdrop(request: DeepPartial<MsgDeleteAirdrop>, metadata?: grpc.Metadata): Promise<MsgDeleteAirdropResponse> {
    return this.rpc.unary(MsgDeleteAirdropDesc, MsgDeleteAirdrop.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "stride.claim.Msg" };

export const MsgSetAirdropAllocationsDesc: UnaryMethodDefinitionish = {
  methodName: "SetAirdropAllocations",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetAirdropAllocations.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSetAirdropAllocationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgClaimFreeAmountDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimFreeAmount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimFreeAmount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgClaimFreeAmountResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgCreateAirdropDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAirdrop",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateAirdrop.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateAirdropResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgDeleteAirdropDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteAirdrop",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteAirdrop.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgDeleteAirdropResponse.decode(data);
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
