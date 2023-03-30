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
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
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

/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}

/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
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
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.identifiedFees = [];
    message.feeEnabledChannels = [];
    message.registeredPayees = [];
    message.registeredCounterpartyPayees = [];
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
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(
            RegisteredCounterpartyPayee.decode(reader, reader.uint32()),
          );
          break;
        case 5:
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
    message.registeredPayees = [];
    message.registeredCounterpartyPayees = [];
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
    if (object.registeredPayees !== undefined && object.registeredPayees !== null) {
      for (const e of object.registeredPayees) {
        message.registeredPayees.push(RegisteredPayee.fromJSON(e));
      }
    }
    if (object.registeredCounterpartyPayees !== undefined && object.registeredCounterpartyPayees !== null) {
      for (const e of object.registeredCounterpartyPayees) {
        message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.fromJSON(e));
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
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map((e) => (e ? RegisteredPayee.toJSON(e) : undefined));
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map((e) =>
        e ? RegisteredCounterpartyPayee.toJSON(e) : undefined,
      );
    } else {
      obj.registeredCounterpartyPayees = [];
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
    message.registeredPayees = [];
    message.registeredCounterpartyPayees = [];
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
    if (object.registeredPayees !== undefined && object.registeredPayees !== null) {
      for (const e of object.registeredPayees) {
        message.registeredPayees.push(RegisteredPayee.fromPartial(e));
      }
    }
    if (object.registeredCounterpartyPayees !== undefined && object.registeredCounterpartyPayees !== null) {
      for (const e of object.registeredCounterpartyPayees) {
        message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.fromPartial(e));
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

const baseRegisteredPayee: object = { channelId: "", relayer: "", payee: "" };

export const RegisteredPayee = {
  encode(message: RegisteredPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisteredPayee } as RegisteredPayee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredPayee {
    const message = { ...baseRegisteredPayee } as RegisteredPayee;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = String(object.relayer);
    } else {
      message.relayer = "";
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = String(object.payee);
    } else {
      message.payee = "";
    }
    return message;
  },

  toJSON(message: RegisteredPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredPayee>): RegisteredPayee {
    const message = { ...baseRegisteredPayee } as RegisteredPayee;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    } else {
      message.relayer = "";
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    } else {
      message.payee = "";
    }
    return message;
  },
};

const baseRegisteredCounterpartyPayee: object = { channelId: "", relayer: "", counterpartyPayee: "" };

export const RegisteredCounterpartyPayee = {
  encode(message: RegisteredCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisteredCounterpartyPayee } as RegisteredCounterpartyPayee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredCounterpartyPayee {
    const message = { ...baseRegisteredCounterpartyPayee } as RegisteredCounterpartyPayee;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = String(object.relayer);
    } else {
      message.relayer = "";
    }
    if (object.counterpartyPayee !== undefined && object.counterpartyPayee !== null) {
      message.counterpartyPayee = String(object.counterpartyPayee);
    } else {
      message.counterpartyPayee = "";
    }
    return message;
  },

  toJSON(message: RegisteredCounterpartyPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = { ...baseRegisteredCounterpartyPayee } as RegisteredCounterpartyPayee;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    } else {
      message.relayer = "";
    }
    if (object.counterpartyPayee !== undefined && object.counterpartyPayee !== null) {
      message.counterpartyPayee = object.counterpartyPayee;
    } else {
      message.counterpartyPayee = "";
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
