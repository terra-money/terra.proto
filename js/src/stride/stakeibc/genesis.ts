/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../stride/stakeibc/params";
import { ICAAccount } from "../../stride/stakeibc/ica_account";
import { HostZone } from "../../stride/stakeibc/host_zone";
import { EpochTracker } from "../../stride/stakeibc/epoch_tracker";

export const protobufPackage = "stride.stakeibc";

/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
  params?: Params;
  portId: string;
  /** list of zones that are registered by the protocol */
  icaAccount?: ICAAccount;
  hostZoneList: HostZone[];
  hostZoneCount: Long;
  /** stores a map from hostZone base denom to hostZone */
  denomToHostZone: { [key: string]: string };
  epochTrackerList: EpochTracker[];
}

export interface GenesisState_DenomToHostZoneEntry {
  key: string;
  value: string;
}

const baseGenesisState: object = { portId: "", hostZoneCount: Long.UZERO };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.icaAccount !== undefined) {
      ICAAccount.encode(message.icaAccount, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.hostZoneList) {
      HostZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.hostZoneCount.isZero()) {
      writer.uint32(48).uint64(message.hostZoneCount);
    }
    Object.entries(message.denomToHostZone).forEach(([key, value]) => {
      GenesisState_DenomToHostZoneEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    for (const v of message.epochTrackerList) {
      EpochTracker.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.hostZoneList = [];
    message.denomToHostZone = {};
    message.epochTrackerList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 4:
          message.icaAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 5:
          message.hostZoneList.push(HostZone.decode(reader, reader.uint32()));
          break;
        case 6:
          message.hostZoneCount = reader.uint64() as Long;
          break;
        case 9:
          const entry9 = GenesisState_DenomToHostZoneEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.denomToHostZone[entry9.key] = entry9.value;
          }
          break;
        case 10:
          message.epochTrackerList.push(EpochTracker.decode(reader, reader.uint32()));
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
    message.hostZoneList = [];
    message.denomToHostZone = {};
    message.epochTrackerList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.icaAccount !== undefined && object.icaAccount !== null) {
      message.icaAccount = ICAAccount.fromJSON(object.icaAccount);
    } else {
      message.icaAccount = undefined;
    }
    if (object.hostZoneList !== undefined && object.hostZoneList !== null) {
      for (const e of object.hostZoneList) {
        message.hostZoneList.push(HostZone.fromJSON(e));
      }
    }
    if (object.hostZoneCount !== undefined && object.hostZoneCount !== null) {
      message.hostZoneCount = Long.fromString(object.hostZoneCount);
    } else {
      message.hostZoneCount = Long.UZERO;
    }
    if (object.denomToHostZone !== undefined && object.denomToHostZone !== null) {
      Object.entries(object.denomToHostZone).forEach(([key, value]) => {
        message.denomToHostZone[key] = String(value);
      });
    }
    if (object.epochTrackerList !== undefined && object.epochTrackerList !== null) {
      for (const e of object.epochTrackerList) {
        message.epochTrackerList.push(EpochTracker.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.icaAccount !== undefined &&
      (obj.icaAccount = message.icaAccount ? ICAAccount.toJSON(message.icaAccount) : undefined);
    if (message.hostZoneList) {
      obj.hostZoneList = message.hostZoneList.map((e) => (e ? HostZone.toJSON(e) : undefined));
    } else {
      obj.hostZoneList = [];
    }
    message.hostZoneCount !== undefined &&
      (obj.hostZoneCount = (message.hostZoneCount || Long.UZERO).toString());
    obj.denomToHostZone = {};
    if (message.denomToHostZone) {
      Object.entries(message.denomToHostZone).forEach(([k, v]) => {
        obj.denomToHostZone[k] = v;
      });
    }
    if (message.epochTrackerList) {
      obj.epochTrackerList = message.epochTrackerList.map((e) => (e ? EpochTracker.toJSON(e) : undefined));
    } else {
      obj.epochTrackerList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.hostZoneList = [];
    message.denomToHostZone = {};
    message.epochTrackerList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.icaAccount !== undefined && object.icaAccount !== null) {
      message.icaAccount = ICAAccount.fromPartial(object.icaAccount);
    } else {
      message.icaAccount = undefined;
    }
    if (object.hostZoneList !== undefined && object.hostZoneList !== null) {
      for (const e of object.hostZoneList) {
        message.hostZoneList.push(HostZone.fromPartial(e));
      }
    }
    if (object.hostZoneCount !== undefined && object.hostZoneCount !== null) {
      message.hostZoneCount = object.hostZoneCount as Long;
    } else {
      message.hostZoneCount = Long.UZERO;
    }
    if (object.denomToHostZone !== undefined && object.denomToHostZone !== null) {
      Object.entries(object.denomToHostZone).forEach(([key, value]) => {
        if (value !== undefined) {
          message.denomToHostZone[key] = String(value);
        }
      });
    }
    if (object.epochTrackerList !== undefined && object.epochTrackerList !== null) {
      for (const e of object.epochTrackerList) {
        message.epochTrackerList.push(EpochTracker.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisState_DenomToHostZoneEntry: object = { key: "", value: "" };

export const GenesisState_DenomToHostZoneEntry = {
  encode(message: GenesisState_DenomToHostZoneEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_DenomToHostZoneEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState_DenomToHostZoneEntry } as GenesisState_DenomToHostZoneEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_DenomToHostZoneEntry {
    const message = { ...baseGenesisState_DenomToHostZoneEntry } as GenesisState_DenomToHostZoneEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: GenesisState_DenomToHostZoneEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_DenomToHostZoneEntry>): GenesisState_DenomToHostZoneEntry {
    const message = { ...baseGenesisState_DenomToHostZoneEntry } as GenesisState_DenomToHostZoneEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
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
