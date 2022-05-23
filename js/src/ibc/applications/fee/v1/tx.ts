/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Fee, PacketFee } from "../../../../ibc/applications/fee/v1/fee";
import { PacketId } from "../../../../ibc/core/channel/v1/channel";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "ibc.applications.fee.v1";

/** MsgRegisterCounterpartyAddress defines the request type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddress {
  /** the relayer address */
  address: string;
  /** the counterparty relayer address */
  counterpartyAddress: string;
  /** unique channel identifier */
  channelId: string;
}

/** MsgRegisterCounterpartyAddressResponse defines the response type for the RegisterCounterpartyAddress rpc */
export interface MsgRegisterCounterpartyAddressResponse {}

/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}

/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}

/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee?: PacketFee;
}

/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}

const baseMsgRegisterCounterpartyAddress: object = { address: "", counterpartyAddress: "", channelId: "" };

export const MsgRegisterCounterpartyAddress = {
  encode(message: MsgRegisterCounterpartyAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.counterpartyAddress !== "") {
      writer.uint32(18).string(message.counterpartyAddress);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterCounterpartyAddress } as MsgRegisterCounterpartyAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.counterpartyAddress = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCounterpartyAddress {
    const message = { ...baseMsgRegisterCounterpartyAddress } as MsgRegisterCounterpartyAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.counterpartyAddress !== undefined && object.counterpartyAddress !== null) {
      message.counterpartyAddress = String(object.counterpartyAddress);
    } else {
      message.counterpartyAddress = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterCounterpartyAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.counterpartyAddress !== undefined && (obj.counterpartyAddress = message.counterpartyAddress);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterCounterpartyAddress>): MsgRegisterCounterpartyAddress {
    const message = { ...baseMsgRegisterCounterpartyAddress } as MsgRegisterCounterpartyAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.counterpartyAddress !== undefined && object.counterpartyAddress !== null) {
      message.counterpartyAddress = object.counterpartyAddress;
    } else {
      message.counterpartyAddress = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    return message;
  },
};

const baseMsgRegisterCounterpartyAddressResponse: object = {};

export const MsgRegisterCounterpartyAddressResponse = {
  encode(_: MsgRegisterCounterpartyAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCounterpartyAddressResponse,
    } as MsgRegisterCounterpartyAddressResponse;
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

  fromJSON(_: any): MsgRegisterCounterpartyAddressResponse {
    const message = {
      ...baseMsgRegisterCounterpartyAddressResponse,
    } as MsgRegisterCounterpartyAddressResponse;
    return message;
  },

  toJSON(_: MsgRegisterCounterpartyAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterCounterpartyAddressResponse>,
  ): MsgRegisterCounterpartyAddressResponse {
    const message = {
      ...baseMsgRegisterCounterpartyAddressResponse,
    } as MsgRegisterCounterpartyAddressResponse;
    return message;
  },
};

const baseMsgPayPacketFee: object = { sourcePortId: "", sourceChannelId: "", signer: "", relayers: "" };

export const MsgPayPacketFee = {
  encode(message: MsgPayPacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.relayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFee {
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.relayers = [];
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromJSON(object.fee);
    } else {
      message.fee = undefined;
    }
    if (object.sourcePortId !== undefined && object.sourcePortId !== null) {
      message.sourcePortId = String(object.sourcePortId);
    } else {
      message.sourcePortId = "";
    }
    if (object.sourceChannelId !== undefined && object.sourceChannelId !== null) {
      message.sourceChannelId = String(object.sourceChannelId);
    } else {
      message.sourceChannelId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    if (object.relayers !== undefined && object.relayers !== null) {
      for (const e of object.relayers) {
        message.relayers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgPayPacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = { ...baseMsgPayPacketFee } as MsgPayPacketFee;
    message.relayers = [];
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    } else {
      message.fee = undefined;
    }
    if (object.sourcePortId !== undefined && object.sourcePortId !== null) {
      message.sourcePortId = object.sourcePortId;
    } else {
      message.sourcePortId = "";
    }
    if (object.sourceChannelId !== undefined && object.sourceChannelId !== null) {
      message.sourceChannelId = object.sourceChannelId;
    } else {
      message.sourceChannelId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    if (object.relayers !== undefined && object.relayers !== null) {
      for (const e of object.relayers) {
        message.relayers.push(e);
      }
    }
    return message;
  },
};

const baseMsgPayPacketFeeResponse: object = {};

export const MsgPayPacketFeeResponse = {
  encode(_: MsgPayPacketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFeeResponse } as MsgPayPacketFeeResponse;
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

  fromJSON(_: any): MsgPayPacketFeeResponse {
    const message = { ...baseMsgPayPacketFeeResponse } as MsgPayPacketFeeResponse;
    return message;
  },

  toJSON(_: MsgPayPacketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    const message = { ...baseMsgPayPacketFeeResponse } as MsgPayPacketFeeResponse;
    return message;
  },
};

const baseMsgPayPacketFeeAsync: object = {};

export const MsgPayPacketFeeAsync = {
  encode(message: MsgPayPacketFeeAsync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPayPacketFeeAsync {
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    if (object.packetFee !== undefined && object.packetFee !== null) {
      message.packetFee = PacketFee.fromJSON(object.packetFee);
    } else {
      message.packetFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgPayPacketFeeAsync): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.packetFee !== undefined &&
      (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = { ...baseMsgPayPacketFeeAsync } as MsgPayPacketFeeAsync;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    if (object.packetFee !== undefined && object.packetFee !== null) {
      message.packetFee = PacketFee.fromPartial(object.packetFee);
    } else {
      message.packetFee = undefined;
    }
    return message;
  },
};

const baseMsgPayPacketFeeAsyncResponse: object = {};

export const MsgPayPacketFeeAsyncResponse = {
  encode(_: MsgPayPacketFeeAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPayPacketFeeAsyncResponse } as MsgPayPacketFeeAsyncResponse;
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

  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    const message = { ...baseMsgPayPacketFeeAsyncResponse } as MsgPayPacketFeeAsyncResponse;
    return message;
  },

  toJSON(_: MsgPayPacketFeeAsyncResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    const message = { ...baseMsgPayPacketFeeAsyncResponse } as MsgPayPacketFeeAsyncResponse;
    return message;
  },
};

/** Msg defines the ICS29 Msg service. */
export interface Msg {
  /**
   * RegisterCounterpartyAddress defines a rpc handler method for MsgRegisterCounterpartyAddress
   * RegisterCounterpartyAddress is called by the relayer on each channelEnd and allows them to specify their
   * counterparty address before relaying. This ensures they will be properly compensated for forward relaying since
   * destination chain must send back relayer's source address (counterparty address) in acknowledgement. This function
   * may be called more than once by a relayer, in which case, latest counterparty address is always used.
   */
  RegisterCounterpartyAddress(
    request: DeepPartial<MsgRegisterCounterpartyAddress>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterCounterpartyAddressResponse>;
  /**
   * PayPacketFee defines a rpc handler method for MsgPayPacketFee
   * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of the packet at the next sequence
   * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   * initiates the lifecycle of the incentivized packet
   */
  PayPacketFee(
    request: DeepPartial<MsgPayPacketFee>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPayPacketFeeResponse>;
  /**
   * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of a known packet (i.e. at a particular sequence)
   */
  PayPacketFeeAsync(
    request: DeepPartial<MsgPayPacketFeeAsync>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPayPacketFeeAsyncResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterCounterpartyAddress = this.RegisterCounterpartyAddress.bind(this);
    this.PayPacketFee = this.PayPacketFee.bind(this);
    this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
  }

  RegisterCounterpartyAddress(
    request: DeepPartial<MsgRegisterCounterpartyAddress>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterCounterpartyAddressResponse> {
    return this.rpc.unary(
      MsgRegisterCounterpartyAddressDesc,
      MsgRegisterCounterpartyAddress.fromPartial(request),
      metadata,
    );
  }

  PayPacketFee(
    request: DeepPartial<MsgPayPacketFee>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPayPacketFeeResponse> {
    return this.rpc.unary(MsgPayPacketFeeDesc, MsgPayPacketFee.fromPartial(request), metadata);
  }

  PayPacketFeeAsync(
    request: DeepPartial<MsgPayPacketFeeAsync>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPayPacketFeeAsyncResponse> {
    return this.rpc.unary(MsgPayPacketFeeAsyncDesc, MsgPayPacketFeeAsync.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "ibc.applications.fee.v1.Msg",
};

export const MsgRegisterCounterpartyAddressDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterCounterpartyAddress",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterCounterpartyAddress.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterCounterpartyAddressResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgPayPacketFeeDesc: UnaryMethodDefinitionish = {
  methodName: "PayPacketFee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPayPacketFee.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPayPacketFeeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgPayPacketFeeAsyncDesc: UnaryMethodDefinitionish = {
  methodName: "PayPacketFeeAsync",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPayPacketFeeAsync.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPayPacketFeeAsyncResponse.decode(data),
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
