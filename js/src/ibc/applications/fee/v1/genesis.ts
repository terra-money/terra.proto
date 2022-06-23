/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../../ibc/core/channel/v1/channel";
import { IdentifiedPacketFees } from "../../../../ibc/applications/fee/v1/fee";

export const protobufPackage = "ibc.applications.fee.v1";

/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered relayer addresses */
  registeredRelayers: RegisteredRelayerAddress[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}

/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** RegisteredRelayerAddress contains the address and counterparty address for a specific relayer (for distributing fees) */
export interface RegisteredRelayerAddress {
  /** the relayer address */
  address: string;
  /** the counterparty relayer address */
  counterpartyAddress: string;
  /** unique channel identifier */
  channelId: string;
}

/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredRelayers) {
      RegisteredRelayerAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.identifiedFees = [];
    message.feeEnabledChannels = [];
    message.registeredRelayers = [];
    message.forwardRelayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredRelayers.push(RegisteredRelayerAddress.decode(reader, reader.uint32()));
          break;
        case 4:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.identifiedFees = [];
    message.feeEnabledChannels = [];
    message.registeredRelayers = [];
    message.forwardRelayers = [];
    if (object.identifiedFees !== undefined && object.identifiedFees !== null) {
      for (const e of object.identifiedFees) {
        message.identifiedFees.push(IdentifiedPacketFees.fromJSON(e));
      }
    }
    if (object.feeEnabledChannels !== undefined && object.feeEnabledChannels !== null) {
      for (const e of object.feeEnabledChannels) {
        message.feeEnabledChannels.push(FeeEnabledChannel.fromJSON(e));
      }
    }
    if (object.registeredRelayers !== undefined && object.registeredRelayers !== null) {
      for (const e of object.registeredRelayers) {
        message.registeredRelayers.push(RegisteredRelayerAddress.fromJSON(e));
      }
    }
    if (object.forwardRelayers !== undefined && object.forwardRelayers !== null) {
      for (const e of object.forwardRelayers) {
        message.forwardRelayers.push(ForwardRelayerAddress.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined,
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredRelayers) {
      obj.registeredRelayers = message.registeredRelayers.map((e) =>
        e ? RegisteredRelayerAddress.toJSON(e) : undefined,
      );
    } else {
      obj.registeredRelayers = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map((e) =>
        e ? ForwardRelayerAddress.toJSON(e) : undefined,
      );
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.identifiedFees = [];
    message.feeEnabledChannels = [];
    message.registeredRelayers = [];
    message.forwardRelayers = [];
    if (object.identifiedFees !== undefined && object.identifiedFees !== null) {
      for (const e of object.identifiedFees) {
        message.identifiedFees.push(IdentifiedPacketFees.fromPartial(e));
      }
    }
    if (object.feeEnabledChannels !== undefined && object.feeEnabledChannels !== null) {
      for (const e of object.feeEnabledChannels) {
        message.feeEnabledChannels.push(FeeEnabledChannel.fromPartial(e));
      }
    }
    if (object.registeredRelayers !== undefined && object.registeredRelayers !== null) {
      for (const e of object.registeredRelayers) {
        message.registeredRelayers.push(RegisteredRelayerAddress.fromPartial(e));
      }
    }
    if (object.forwardRelayers !== undefined && object.forwardRelayers !== null) {
      for (const e of object.forwardRelayers) {
        message.forwardRelayers.push(ForwardRelayerAddress.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeeEnabledChannel: object = { portId: "", channelId: "" };

export const FeeEnabledChannel = {
  encode(message: FeeEnabledChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeEnabledChannel } as FeeEnabledChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeEnabledChannel {
    const message = { ...baseFeeEnabledChannel } as FeeEnabledChannel;
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
    return message;
  },

  toJSON(message: FeeEnabledChannel): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = { ...baseFeeEnabledChannel } as FeeEnabledChannel;
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
    return message;
  },
};

const baseRegisteredRelayerAddress: object = { address: "", counterpartyAddress: "", channelId: "" };

export const RegisteredRelayerAddress = {
  encode(message: RegisteredRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisteredRelayerAddress } as RegisteredRelayerAddress;
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

  fromJSON(object: any): RegisteredRelayerAddress {
    const message = { ...baseRegisteredRelayerAddress } as RegisteredRelayerAddress;
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

  toJSON(message: RegisteredRelayerAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.counterpartyAddress !== undefined && (obj.counterpartyAddress = message.counterpartyAddress);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredRelayerAddress>): RegisteredRelayerAddress {
    const message = { ...baseRegisteredRelayerAddress } as RegisteredRelayerAddress;
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

const baseForwardRelayerAddress: object = { address: "" };

export const ForwardRelayerAddress = {
  encode(message: ForwardRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseForwardRelayerAddress } as ForwardRelayerAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardRelayerAddress {
    const message = { ...baseForwardRelayerAddress } as ForwardRelayerAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },

  toJSON(message: ForwardRelayerAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = { ...baseForwardRelayerAddress } as ForwardRelayerAddress;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },
};

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
