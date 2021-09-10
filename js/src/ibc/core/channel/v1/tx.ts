/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata as Metadata1,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Channel, Packet } from "../../../../ibc/core/channel/v1/channel";
import { Height } from "../../../../ibc/core/client/v1/client";

export const protobufPackage = "ibc.core.channel.v1";

/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel?: Channel;
  signer: string;
}

/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {}

/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previousChannelId: string;
  channel?: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {}

/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}

/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}

/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}

/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}

/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}

/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet?: Packet;
  proofCommitment: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {}

/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}

/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {}

/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}

/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {}

/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet?: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {}

const baseMsgChannelOpenInit: object = { portId: "", signer: "" };

export const MsgChannelOpenInit = {
  encode(message: MsgChannelOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInit {
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined &&
      (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelOpenInitResponse: object = {};

export const MsgChannelOpenInitResponse = {
  encode(_: MsgChannelOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenInitResponse } as MsgChannelOpenInitResponse;
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

  fromJSON(_: any): MsgChannelOpenInitResponse {
    const message = { ...baseMsgChannelOpenInitResponse } as MsgChannelOpenInitResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = { ...baseMsgChannelOpenInitResponse } as MsgChannelOpenInitResponse;
    return message;
  },
};

const baseMsgChannelOpenTry: object = {
  portId: "",
  previousChannelId: "",
  counterpartyVersion: "",
  signer: "",
};

export const MsgChannelOpenTry = {
  encode(message: MsgChannelOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    message.proofInit = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenTry {
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    message.proofInit = new Uint8Array();
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.previousChannelId !== undefined && object.previousChannelId !== null) {
      message.previousChannelId = String(object.previousChannelId);
    } else {
      message.previousChannelId = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = String(object.counterpartyVersion);
    } else {
      message.counterpartyVersion = "";
    }
    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = bytesFromBase64(object.proofInit);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined &&
      (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.previousChannelId !== undefined && object.previousChannelId !== null) {
      message.previousChannelId = object.previousChannelId;
    } else {
      message.previousChannelId = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }
    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = object.counterpartyVersion;
    } else {
      message.counterpartyVersion = "";
    }
    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = object.proofInit;
    } else {
      message.proofInit = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelOpenTryResponse: object = {};

export const MsgChannelOpenTryResponse = {
  encode(_: MsgChannelOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenTryResponse } as MsgChannelOpenTryResponse;
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

  fromJSON(_: any): MsgChannelOpenTryResponse {
    const message = { ...baseMsgChannelOpenTryResponse } as MsgChannelOpenTryResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = { ...baseMsgChannelOpenTryResponse } as MsgChannelOpenTryResponse;
    return message;
  },
};

const baseMsgChannelOpenAck: object = {
  portId: "",
  channelId: "",
  counterpartyChannelId: "",
  counterpartyVersion: "",
  signer: "",
};

export const MsgChannelOpenAck = {
  encode(message: MsgChannelOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    message.proofTry = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenAck {
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    message.proofTry = new Uint8Array();
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.counterpartyChannelId !== undefined && object.counterpartyChannelId !== null) {
      message.counterpartyChannelId = String(object.counterpartyChannelId);
    } else {
      message.counterpartyChannelId = "";
    }
    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = String(object.counterpartyVersion);
    } else {
      message.counterpartyVersion = "";
    }
    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = bytesFromBase64(object.proofTry);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined &&
      (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined &&
      (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.counterpartyChannelId !== undefined && object.counterpartyChannelId !== null) {
      message.counterpartyChannelId = object.counterpartyChannelId;
    } else {
      message.counterpartyChannelId = "";
    }
    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = object.counterpartyVersion;
    } else {
      message.counterpartyVersion = "";
    }
    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = object.proofTry;
    } else {
      message.proofTry = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelOpenAckResponse: object = {};

export const MsgChannelOpenAckResponse = {
  encode(_: MsgChannelOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenAckResponse } as MsgChannelOpenAckResponse;
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

  fromJSON(_: any): MsgChannelOpenAckResponse {
    const message = { ...baseMsgChannelOpenAckResponse } as MsgChannelOpenAckResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = { ...baseMsgChannelOpenAckResponse } as MsgChannelOpenAckResponse;
    return message;
  },
};

const baseMsgChannelOpenConfirm: object = { portId: "", channelId: "", signer: "" };

export const MsgChannelOpenConfirm = {
  encode(message: MsgChannelOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    message.proofAck = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenConfirm {
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    message.proofAck = new Uint8Array();
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.proofAck !== undefined && object.proofAck !== null) {
      message.proofAck = bytesFromBase64(object.proofAck);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined &&
      (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.proofAck !== undefined && object.proofAck !== null) {
      message.proofAck = object.proofAck;
    } else {
      message.proofAck = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelOpenConfirmResponse: object = {};

export const MsgChannelOpenConfirmResponse = {
  encode(_: MsgChannelOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenConfirmResponse } as MsgChannelOpenConfirmResponse;
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

  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    const message = { ...baseMsgChannelOpenConfirmResponse } as MsgChannelOpenConfirmResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = { ...baseMsgChannelOpenConfirmResponse } as MsgChannelOpenConfirmResponse;
    return message;
  },
};

const baseMsgChannelCloseInit: object = { portId: "", channelId: "", signer: "" };

export const MsgChannelCloseInit = {
  encode(message: MsgChannelCloseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseInit {
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelCloseInitResponse: object = {};

export const MsgChannelCloseInitResponse = {
  encode(_: MsgChannelCloseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseInitResponse } as MsgChannelCloseInitResponse;
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

  fromJSON(_: any): MsgChannelCloseInitResponse {
    const message = { ...baseMsgChannelCloseInitResponse } as MsgChannelCloseInitResponse;
    return message;
  },

  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = { ...baseMsgChannelCloseInitResponse } as MsgChannelCloseInitResponse;
    return message;
  },
};

const baseMsgChannelCloseConfirm: object = { portId: "", channelId: "", signer: "" };

export const MsgChannelCloseConfirm = {
  encode(message: MsgChannelCloseConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    message.proofInit = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseConfirm {
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    message.proofInit = new Uint8Array();
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = bytesFromBase64(object.proofInit);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = object.proofInit;
    } else {
      message.proofInit = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgChannelCloseConfirmResponse: object = {};

export const MsgChannelCloseConfirmResponse = {
  encode(_: MsgChannelCloseConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseConfirmResponse } as MsgChannelCloseConfirmResponse;
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

  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    const message = { ...baseMsgChannelCloseConfirmResponse } as MsgChannelCloseConfirmResponse;
    return message;
  },

  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = { ...baseMsgChannelCloseConfirmResponse } as MsgChannelCloseConfirmResponse;
    return message;
  },
};

const baseMsgRecvPacket: object = { signer: "" };

export const MsgRecvPacket = {
  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    message.proofCommitment = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacket {
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    message.proofCommitment = new Uint8Array();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofCommitment !== undefined && object.proofCommitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proofCommitment);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined &&
      (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofCommitment !== undefined && object.proofCommitment !== null) {
      message.proofCommitment = object.proofCommitment;
    } else {
      message.proofCommitment = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgRecvPacketResponse: object = {};

export const MsgRecvPacketResponse = {
  encode(_: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
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

  fromJSON(_: any): MsgRecvPacketResponse {
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
    return message;
  },

  toJSON(_: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
    return message;
  },
};

const baseMsgTimeout: object = { nextSequenceRecv: Long.UZERO, signer: "" };

export const MsgTimeout = {
  encode(message: MsgTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeout } as MsgTimeout;
    message.proofUnreceived = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeout {
    const message = { ...baseMsgTimeout } as MsgTimeout;
    message.proofUnreceived = new Uint8Array();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = Long.fromString(object.nextSequenceRecv);
    } else {
      message.nextSequenceRecv = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = { ...baseMsgTimeout } as MsgTimeout;
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = object.proofUnreceived;
    } else {
      message.proofUnreceived = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = object.nextSequenceRecv as Long;
    } else {
      message.nextSequenceRecv = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgTimeoutResponse: object = {};

export const MsgTimeoutResponse = {
  encode(_: MsgTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
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

  fromJSON(_: any): MsgTimeoutResponse {
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
    return message;
  },

  toJSON(_: MsgTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
    return message;
  },
};

const baseMsgTimeoutOnClose: object = { nextSequenceRecv: Long.UZERO, signer: "" };

export const MsgTimeoutOnClose = {
  encode(message: MsgTimeoutOnClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    message.proofUnreceived = new Uint8Array();
    message.proofClose = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnClose {
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    message.proofUnreceived = new Uint8Array();
    message.proofClose = new Uint8Array();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    }
    if (object.proofClose !== undefined && object.proofClose !== null) {
      message.proofClose = bytesFromBase64(object.proofClose);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = Long.fromString(object.nextSequenceRecv);
    } else {
      message.nextSequenceRecv = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array(),
      ));
    message.proofClose !== undefined &&
      (obj.proofClose = base64FromBytes(
        message.proofClose !== undefined ? message.proofClose : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = object.proofUnreceived;
    } else {
      message.proofUnreceived = new Uint8Array();
    }
    if (object.proofClose !== undefined && object.proofClose !== null) {
      message.proofClose = object.proofClose;
    } else {
      message.proofClose = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = object.nextSequenceRecv as Long;
    } else {
      message.nextSequenceRecv = Long.UZERO;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgTimeoutOnCloseResponse: object = {};

export const MsgTimeoutOnCloseResponse = {
  encode(_: MsgTimeoutOnCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeoutOnCloseResponse } as MsgTimeoutOnCloseResponse;
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

  fromJSON(_: any): MsgTimeoutOnCloseResponse {
    const message = { ...baseMsgTimeoutOnCloseResponse } as MsgTimeoutOnCloseResponse;
    return message;
  },

  toJSON(_: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = { ...baseMsgTimeoutOnCloseResponse } as MsgTimeoutOnCloseResponse;
    return message;
  },
};

const baseMsgAcknowledgement: object = { signer: "" };

export const MsgAcknowledgement = {
  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    message.acknowledgement = new Uint8Array();
    message.proofAcked = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgement {
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    message.acknowledgement = new Uint8Array();
    message.proofAcked = new Uint8Array();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proofAcked !== undefined && object.proofAcked !== null) {
      message.proofAcked = bytesFromBase64(object.proofAcked);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    return message;
  },

  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array(),
      ));
    message.proofAcked !== undefined &&
      (obj.proofAcked = base64FromBytes(
        message.proofAcked !== undefined ? message.proofAcked : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = object.acknowledgement;
    } else {
      message.acknowledgement = new Uint8Array();
    }
    if (object.proofAcked !== undefined && object.proofAcked !== null) {
      message.proofAcked = object.proofAcked;
    } else {
      message.proofAcked = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    return message;
  },
};

const baseMsgAcknowledgementResponse: object = {};

export const MsgAcknowledgementResponse = {
  encode(_: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcknowledgementResponse } as MsgAcknowledgementResponse;
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

  fromJSON(_: any): MsgAcknowledgementResponse {
    const message = { ...baseMsgAcknowledgementResponse } as MsgAcknowledgementResponse;
    return message;
  },

  toJSON(_: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = { ...baseMsgAcknowledgementResponse } as MsgAcknowledgementResponse;
    return message;
  },
};

/** Msg defines the ibc/channel Msg service. */
export const MsgService = {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit: {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenInit",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelOpenInit) => Buffer.from(MsgChannelOpenInit.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelOpenInit.decode(value),
    responseSerialize: (value: MsgChannelOpenInitResponse) =>
      Buffer.from(MsgChannelOpenInitResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelOpenInitResponse.decode(value),
  },
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry: {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenTry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelOpenTry) => Buffer.from(MsgChannelOpenTry.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelOpenTry.decode(value),
    responseSerialize: (value: MsgChannelOpenTryResponse) =>
      Buffer.from(MsgChannelOpenTryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelOpenTryResponse.decode(value),
  },
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck: {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenAck",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelOpenAck) => Buffer.from(MsgChannelOpenAck.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelOpenAck.decode(value),
    responseSerialize: (value: MsgChannelOpenAckResponse) =>
      Buffer.from(MsgChannelOpenAckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelOpenAckResponse.decode(value),
  },
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm: {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenConfirm",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelOpenConfirm) =>
      Buffer.from(MsgChannelOpenConfirm.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelOpenConfirm.decode(value),
    responseSerialize: (value: MsgChannelOpenConfirmResponse) =>
      Buffer.from(MsgChannelOpenConfirmResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelOpenConfirmResponse.decode(value),
  },
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit: {
    path: "/ibc.core.channel.v1.Msg/ChannelCloseInit",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelCloseInit) => Buffer.from(MsgChannelCloseInit.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelCloseInit.decode(value),
    responseSerialize: (value: MsgChannelCloseInitResponse) =>
      Buffer.from(MsgChannelCloseInitResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelCloseInitResponse.decode(value),
  },
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm: {
    path: "/ibc.core.channel.v1.Msg/ChannelCloseConfirm",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgChannelCloseConfirm) =>
      Buffer.from(MsgChannelCloseConfirm.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgChannelCloseConfirm.decode(value),
    responseSerialize: (value: MsgChannelCloseConfirmResponse) =>
      Buffer.from(MsgChannelCloseConfirmResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgChannelCloseConfirmResponse.decode(value),
  },
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket: {
    path: "/ibc.core.channel.v1.Msg/RecvPacket",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgRecvPacket) => Buffer.from(MsgRecvPacket.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgRecvPacket.decode(value),
    responseSerialize: (value: MsgRecvPacketResponse) =>
      Buffer.from(MsgRecvPacketResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgRecvPacketResponse.decode(value),
  },
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout: {
    path: "/ibc.core.channel.v1.Msg/Timeout",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgTimeout) => Buffer.from(MsgTimeout.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgTimeout.decode(value),
    responseSerialize: (value: MsgTimeoutResponse) => Buffer.from(MsgTimeoutResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgTimeoutResponse.decode(value),
  },
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose: {
    path: "/ibc.core.channel.v1.Msg/TimeoutOnClose",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgTimeoutOnClose) => Buffer.from(MsgTimeoutOnClose.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgTimeoutOnClose.decode(value),
    responseSerialize: (value: MsgTimeoutOnCloseResponse) =>
      Buffer.from(MsgTimeoutOnCloseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgTimeoutOnCloseResponse.decode(value),
  },
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement: {
    path: "/ibc.core.channel.v1.Msg/Acknowledgement",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgAcknowledgement) => Buffer.from(MsgAcknowledgement.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgAcknowledgement.decode(value),
    responseSerialize: (value: MsgAcknowledgementResponse) =>
      Buffer.from(MsgAcknowledgementResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgAcknowledgementResponse.decode(value),
  },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit: handleUnaryCall<MsgChannelOpenInit, MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry: handleUnaryCall<MsgChannelOpenTry, MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck: handleUnaryCall<MsgChannelOpenAck, MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm: handleUnaryCall<MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit: handleUnaryCall<MsgChannelCloseInit, MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm: handleUnaryCall<MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket: handleUnaryCall<MsgRecvPacket, MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout: handleUnaryCall<MsgTimeout, MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose: handleUnaryCall<MsgTimeoutOnClose, MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement: handleUnaryCall<MsgAcknowledgement, MsgAcknowledgementResponse>;
}

export interface MsgClient extends Client {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(
    request: MsgChannelOpenInit,
    callback: (error: ServiceError | null, response: MsgChannelOpenInitResponse) => void,
  ): ClientUnaryCall;
  channelOpenInit(
    request: MsgChannelOpenInit,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelOpenInitResponse) => void,
  ): ClientUnaryCall;
  channelOpenInit(
    request: MsgChannelOpenInit,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelOpenInitResponse) => void,
  ): ClientUnaryCall;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(
    request: MsgChannelOpenTry,
    callback: (error: ServiceError | null, response: MsgChannelOpenTryResponse) => void,
  ): ClientUnaryCall;
  channelOpenTry(
    request: MsgChannelOpenTry,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelOpenTryResponse) => void,
  ): ClientUnaryCall;
  channelOpenTry(
    request: MsgChannelOpenTry,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelOpenTryResponse) => void,
  ): ClientUnaryCall;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(
    request: MsgChannelOpenAck,
    callback: (error: ServiceError | null, response: MsgChannelOpenAckResponse) => void,
  ): ClientUnaryCall;
  channelOpenAck(
    request: MsgChannelOpenAck,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelOpenAckResponse) => void,
  ): ClientUnaryCall;
  channelOpenAck(
    request: MsgChannelOpenAck,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelOpenAckResponse) => void,
  ): ClientUnaryCall;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(
    request: MsgChannelOpenConfirm,
    callback: (error: ServiceError | null, response: MsgChannelOpenConfirmResponse) => void,
  ): ClientUnaryCall;
  channelOpenConfirm(
    request: MsgChannelOpenConfirm,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelOpenConfirmResponse) => void,
  ): ClientUnaryCall;
  channelOpenConfirm(
    request: MsgChannelOpenConfirm,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelOpenConfirmResponse) => void,
  ): ClientUnaryCall;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(
    request: MsgChannelCloseInit,
    callback: (error: ServiceError | null, response: MsgChannelCloseInitResponse) => void,
  ): ClientUnaryCall;
  channelCloseInit(
    request: MsgChannelCloseInit,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelCloseInitResponse) => void,
  ): ClientUnaryCall;
  channelCloseInit(
    request: MsgChannelCloseInit,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelCloseInitResponse) => void,
  ): ClientUnaryCall;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(
    request: MsgChannelCloseConfirm,
    callback: (error: ServiceError | null, response: MsgChannelCloseConfirmResponse) => void,
  ): ClientUnaryCall;
  channelCloseConfirm(
    request: MsgChannelCloseConfirm,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgChannelCloseConfirmResponse) => void,
  ): ClientUnaryCall;
  channelCloseConfirm(
    request: MsgChannelCloseConfirm,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgChannelCloseConfirmResponse) => void,
  ): ClientUnaryCall;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(
    request: MsgRecvPacket,
    callback: (error: ServiceError | null, response: MsgRecvPacketResponse) => void,
  ): ClientUnaryCall;
  recvPacket(
    request: MsgRecvPacket,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgRecvPacketResponse) => void,
  ): ClientUnaryCall;
  recvPacket(
    request: MsgRecvPacket,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgRecvPacketResponse) => void,
  ): ClientUnaryCall;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(
    request: MsgTimeout,
    callback: (error: ServiceError | null, response: MsgTimeoutResponse) => void,
  ): ClientUnaryCall;
  timeout(
    request: MsgTimeout,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgTimeoutResponse) => void,
  ): ClientUnaryCall;
  timeout(
    request: MsgTimeout,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgTimeoutResponse) => void,
  ): ClientUnaryCall;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(
    request: MsgTimeoutOnClose,
    callback: (error: ServiceError | null, response: MsgTimeoutOnCloseResponse) => void,
  ): ClientUnaryCall;
  timeoutOnClose(
    request: MsgTimeoutOnClose,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgTimeoutOnCloseResponse) => void,
  ): ClientUnaryCall;
  timeoutOnClose(
    request: MsgTimeoutOnClose,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgTimeoutOnCloseResponse) => void,
  ): ClientUnaryCall;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(
    request: MsgAcknowledgement,
    callback: (error: ServiceError | null, response: MsgAcknowledgementResponse) => void,
  ): ClientUnaryCall;
  acknowledgement(
    request: MsgAcknowledgement,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgAcknowledgementResponse) => void,
  ): ClientUnaryCall;
  acknowledgement(
    request: MsgAcknowledgement,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgAcknowledgementResponse) => void,
  ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(MsgService, "ibc.core.channel.v1.Msg") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): MsgClient;
};

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
