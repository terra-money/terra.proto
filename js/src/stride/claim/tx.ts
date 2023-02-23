/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "stride.claim";

export interface MsgSetAirdropAllocations {
  allocator: string;
  airdropIdentifier: string;
  users: string[];
  weights: string[];
}

export interface MsgSetAirdropAllocationsResponse {}

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

export interface MsgCreateAirdropResponse {}

export interface MsgDeleteAirdrop {
  distributor: string;
  identifier: string;
}

export interface MsgDeleteAirdropResponse {}

const baseMsgSetAirdropAllocations: object = { allocator: "", airdropIdentifier: "", users: "", weights: "" };

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
    const message = { ...baseMsgSetAirdropAllocations } as MsgSetAirdropAllocations;
    message.users = [];
    message.weights = [];
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
    const message = { ...baseMsgSetAirdropAllocations } as MsgSetAirdropAllocations;
    message.users = [];
    message.weights = [];
    if (object.allocator !== undefined && object.allocator !== null) {
      message.allocator = String(object.allocator);
    } else {
      message.allocator = "";
    }
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(String(e));
      }
    }
    if (object.weights !== undefined && object.weights !== null) {
      for (const e of object.weights) {
        message.weights.push(String(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations {
    const message = { ...baseMsgSetAirdropAllocations } as MsgSetAirdropAllocations;
    message.users = [];
    message.weights = [];
    if (object.allocator !== undefined && object.allocator !== null) {
      message.allocator = object.allocator;
    } else {
      message.allocator = "";
    }
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(e);
      }
    }
    if (object.weights !== undefined && object.weights !== null) {
      for (const e of object.weights) {
        message.weights.push(e);
      }
    }
    return message;
  },
};

const baseMsgSetAirdropAllocationsResponse: object = {};

export const MsgSetAirdropAllocationsResponse = {
  encode(_: MsgSetAirdropAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetAirdropAllocationsResponse } as MsgSetAirdropAllocationsResponse;
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
    const message = { ...baseMsgSetAirdropAllocationsResponse } as MsgSetAirdropAllocationsResponse;
    return message;
  },

  toJSON(_: MsgSetAirdropAllocationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse {
    const message = { ...baseMsgSetAirdropAllocationsResponse } as MsgSetAirdropAllocationsResponse;
    return message;
  },
};

const baseMsgClaimFreeAmount: object = { user: "" };

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
    const message = { ...baseMsgClaimFreeAmount } as MsgClaimFreeAmount;
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
    const message = { ...baseMsgClaimFreeAmount } as MsgClaimFreeAmount;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: MsgClaimFreeAmount): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimFreeAmount>): MsgClaimFreeAmount {
    const message = { ...baseMsgClaimFreeAmount } as MsgClaimFreeAmount;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseMsgClaimFreeAmountResponse: object = {};

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
    const message = { ...baseMsgClaimFreeAmountResponse } as MsgClaimFreeAmountResponse;
    message.claimedAmount = [];
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
    const message = { ...baseMsgClaimFreeAmountResponse } as MsgClaimFreeAmountResponse;
    message.claimedAmount = [];
    if (object.claimedAmount !== undefined && object.claimedAmount !== null) {
      for (const e of object.claimedAmount) {
        message.claimedAmount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgClaimFreeAmountResponse): unknown {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse {
    const message = { ...baseMsgClaimFreeAmountResponse } as MsgClaimFreeAmountResponse;
    message.claimedAmount = [];
    if (object.claimedAmount !== undefined && object.claimedAmount !== null) {
      for (const e of object.claimedAmount) {
        message.claimedAmount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateAirdrop: object = {
  distributor: "",
  identifier: "",
  startTime: Long.UZERO,
  duration: Long.UZERO,
  denom: "",
};

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
    const message = { ...baseMsgCreateAirdrop } as MsgCreateAirdrop;
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
    const message = { ...baseMsgCreateAirdrop } as MsgCreateAirdrop;
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = String(object.distributor);
    } else {
      message.distributor = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Long.fromString(object.startTime);
    } else {
      message.startTime = Long.UZERO;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Long.fromString(object.duration);
    } else {
      message.duration = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
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

  fromPartial(object: DeepPartial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = { ...baseMsgCreateAirdrop } as MsgCreateAirdrop;
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = object.distributor;
    } else {
      message.distributor = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime as Long;
    } else {
      message.startTime = Long.UZERO;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration as Long;
    } else {
      message.duration = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgCreateAirdropResponse: object = {};

export const MsgCreateAirdropResponse = {
  encode(_: MsgCreateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAirdropResponse } as MsgCreateAirdropResponse;
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
    const message = { ...baseMsgCreateAirdropResponse } as MsgCreateAirdropResponse;
    return message;
  },

  toJSON(_: MsgCreateAirdropResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = { ...baseMsgCreateAirdropResponse } as MsgCreateAirdropResponse;
    return message;
  },
};

const baseMsgDeleteAirdrop: object = { distributor: "", identifier: "" };

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
    const message = { ...baseMsgDeleteAirdrop } as MsgDeleteAirdrop;
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
    const message = { ...baseMsgDeleteAirdrop } as MsgDeleteAirdrop;
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = String(object.distributor);
    } else {
      message.distributor = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAirdrop): unknown {
    const obj: any = {};
    message.distributor !== undefined && (obj.distributor = message.distributor);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAirdrop>): MsgDeleteAirdrop {
    const message = { ...baseMsgDeleteAirdrop } as MsgDeleteAirdrop;
    if (object.distributor !== undefined && object.distributor !== null) {
      message.distributor = object.distributor;
    } else {
      message.distributor = "";
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    return message;
  },
};

const baseMsgDeleteAirdropResponse: object = {};

export const MsgDeleteAirdropResponse = {
  encode(_: MsgDeleteAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAirdropResponse } as MsgDeleteAirdropResponse;
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
    const message = { ...baseMsgDeleteAirdropResponse } as MsgDeleteAirdropResponse;
    return message;
  },

  toJSON(_: MsgDeleteAirdropResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = { ...baseMsgDeleteAirdropResponse } as MsgDeleteAirdropResponse;
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
  CreateAirdrop(
    request: DeepPartial<MsgCreateAirdrop>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateAirdropResponse>;
  DeleteAirdrop(
    request: DeepPartial<MsgDeleteAirdrop>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteAirdropResponse>;
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
    return this.rpc.unary(
      MsgSetAirdropAllocationsDesc,
      MsgSetAirdropAllocations.fromPartial(request),
      metadata,
    );
  }

  ClaimFreeAmount(
    request: DeepPartial<MsgClaimFreeAmount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimFreeAmountResponse> {
    return this.rpc.unary(MsgClaimFreeAmountDesc, MsgClaimFreeAmount.fromPartial(request), metadata);
  }

  CreateAirdrop(
    request: DeepPartial<MsgCreateAirdrop>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateAirdropResponse> {
    return this.rpc.unary(MsgCreateAirdropDesc, MsgCreateAirdrop.fromPartial(request), metadata);
  }

  DeleteAirdrop(
    request: DeepPartial<MsgDeleteAirdrop>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteAirdropResponse> {
    return this.rpc.unary(MsgDeleteAirdropDesc, MsgDeleteAirdrop.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "stride.claim.Msg",
};

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
      return {
        ...MsgSetAirdropAllocationsResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...MsgClaimFreeAmountResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...MsgCreateAirdropResponse.decode(data),
        toObject() {
          return this;
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
      return {
        ...MsgDeleteAirdropResponse.decode(data),
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
