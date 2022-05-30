/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../../ibc/applications/interchain_accounts/controller/v1/controller";
import { Params as Params1 } from "../../../../ibc/applications/interchain_accounts/host/v1/host";

export const protobufPackage = "ibc.applications.interchain_accounts.v1";

/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
  controllerGenesisState?: ControllerGenesisState;
  hostGenesisState?: HostGenesisState;
}

/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  ports: string[];
  params?: Params;
}

/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
  activeChannels: ActiveChannel[];
  interchainAccounts: RegisteredInterchainAccount[];
  port: string;
  params?: Params1;
}

/** ActiveChannel contains a connection ID, port ID and associated active channel ID */
export interface ActiveChannel {
  connectionId: string;
  portId: string;
  channelId: string;
}

/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
  connectionId: string;
  portId: string;
  accountAddress: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerGenesisState !== undefined) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostGenesisState !== undefined) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
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
    if (object.controllerGenesisState !== undefined && object.controllerGenesisState !== null) {
      message.controllerGenesisState = ControllerGenesisState.fromJSON(object.controllerGenesisState);
    } else {
      message.controllerGenesisState = undefined;
    }
    if (object.hostGenesisState !== undefined && object.hostGenesisState !== null) {
      message.hostGenesisState = HostGenesisState.fromJSON(object.hostGenesisState);
    } else {
      message.hostGenesisState = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.controllerGenesisState !== undefined &&
      (obj.controllerGenesisState = message.controllerGenesisState
        ? ControllerGenesisState.toJSON(message.controllerGenesisState)
        : undefined);
    message.hostGenesisState !== undefined &&
      (obj.hostGenesisState = message.hostGenesisState
        ? HostGenesisState.toJSON(message.hostGenesisState)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.controllerGenesisState !== undefined && object.controllerGenesisState !== null) {
      message.controllerGenesisState = ControllerGenesisState.fromPartial(object.controllerGenesisState);
    } else {
      message.controllerGenesisState = undefined;
    }
    if (object.hostGenesisState !== undefined && object.hostGenesisState !== null) {
      message.hostGenesisState = HostGenesisState.fromPartial(object.hostGenesisState);
    } else {
      message.hostGenesisState = undefined;
    }
    return message;
  },
};

const baseControllerGenesisState: object = { ports: "" };

export const ControllerGenesisState = {
  encode(message: ControllerGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v!);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControllerGenesisState } as ControllerGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    message.ports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(reader.string());
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerGenesisState {
    const message = { ...baseControllerGenesisState } as ControllerGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    message.ports = [];
    if (object.activeChannels !== undefined && object.activeChannels !== null) {
      for (const e of object.activeChannels) {
        message.activeChannels.push(ActiveChannel.fromJSON(e));
      }
    }
    if (object.interchainAccounts !== undefined && object.interchainAccounts !== null) {
      for (const e of object.interchainAccounts) {
        message.interchainAccounts.push(RegisteredInterchainAccount.fromJSON(e));
      }
    }
    if (object.ports !== undefined && object.ports !== null) {
      for (const e of object.ports) {
        message.ports.push(String(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: ControllerGenesisState): unknown {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map((e) => (e ? ActiveChannel.toJSON(e) : undefined));
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toJSON(e) : undefined,
      );
    } else {
      obj.interchainAccounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => e);
    } else {
      obj.ports = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerGenesisState>): ControllerGenesisState {
    const message = { ...baseControllerGenesisState } as ControllerGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    message.ports = [];
    if (object.activeChannels !== undefined && object.activeChannels !== null) {
      for (const e of object.activeChannels) {
        message.activeChannels.push(ActiveChannel.fromPartial(e));
      }
    }
    if (object.interchainAccounts !== undefined && object.interchainAccounts !== null) {
      for (const e of object.interchainAccounts) {
        message.interchainAccounts.push(RegisteredInterchainAccount.fromPartial(e));
      }
    }
    if (object.ports !== undefined && object.ports !== null) {
      for (const e of object.ports) {
        message.ports.push(e);
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseHostGenesisState: object = { port: "" };

export const HostGenesisState = {
  encode(message: HostGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostGenesisState } as HostGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostGenesisState {
    const message = { ...baseHostGenesisState } as HostGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    if (object.activeChannels !== undefined && object.activeChannels !== null) {
      for (const e of object.activeChannels) {
        message.activeChannels.push(ActiveChannel.fromJSON(e));
      }
    }
    if (object.interchainAccounts !== undefined && object.interchainAccounts !== null) {
      for (const e of object.interchainAccounts) {
        message.interchainAccounts.push(RegisteredInterchainAccount.fromJSON(e));
      }
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: HostGenesisState): unknown {
    const obj: any = {};
    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map((e) => (e ? ActiveChannel.toJSON(e) : undefined));
    } else {
      obj.activeChannels = [];
    }
    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map((e) =>
        e ? RegisteredInterchainAccount.toJSON(e) : undefined,
      );
    } else {
      obj.interchainAccounts = [];
    }
    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined &&
      (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<HostGenesisState>): HostGenesisState {
    const message = { ...baseHostGenesisState } as HostGenesisState;
    message.activeChannels = [];
    message.interchainAccounts = [];
    if (object.activeChannels !== undefined && object.activeChannels !== null) {
      for (const e of object.activeChannels) {
        message.activeChannels.push(ActiveChannel.fromPartial(e));
      }
    }
    if (object.interchainAccounts !== undefined && object.interchainAccounts !== null) {
      for (const e of object.interchainAccounts) {
        message.interchainAccounts.push(RegisteredInterchainAccount.fromPartial(e));
      }
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseActiveChannel: object = { connectionId: "", portId: "", channelId: "" };

export const ActiveChannel = {
  encode(message: ActiveChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActiveChannel } as ActiveChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
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

  fromJSON(object: any): ActiveChannel {
    const message = { ...baseActiveChannel } as ActiveChannel;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
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

  toJSON(message: ActiveChannel): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<ActiveChannel>): ActiveChannel {
    const message = { ...baseActiveChannel } as ActiveChannel;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = "";
    }
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

const baseRegisteredInterchainAccount: object = { connectionId: "", portId: "", accountAddress: "" };

export const RegisteredInterchainAccount = {
  encode(message: RegisteredInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisteredInterchainAccount } as RegisteredInterchainAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredInterchainAccount {
    const message = { ...baseRegisteredInterchainAccount } as RegisteredInterchainAccount;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    return message;
  },

  toJSON(message: RegisteredInterchainAccount): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredInterchainAccount>): RegisteredInterchainAccount {
    const message = { ...baseRegisteredInterchainAccount } as RegisteredInterchainAccount;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = "";
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
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
