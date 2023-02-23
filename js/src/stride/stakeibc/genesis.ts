/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../stride/stakeibc/params";
import { HostZone } from "../../stride/stakeibc/host_zone";
import { EpochTracker } from "../../stride/stakeibc/epoch_tracker";

export const protobufPackage = "stride.stakeibc";

/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
  params?: Params;
  portId: string;
  /** list of zones that are registered by the protocol */
  hostZoneList: HostZone[];
  epochTrackerList: EpochTracker[];
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostZoneList) {
      HostZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }
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
        case 5:
          message.hostZoneList.push(HostZone.decode(reader, reader.uint32()));
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
    if (object.hostZoneList !== undefined && object.hostZoneList !== null) {
      for (const e of object.hostZoneList) {
        message.hostZoneList.push(HostZone.fromJSON(e));
      }
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
    if (message.hostZoneList) {
      obj.hostZoneList = message.hostZoneList.map((e) => (e ? HostZone.toJSON(e) : undefined));
    } else {
      obj.hostZoneList = [];
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
    if (object.hostZoneList !== undefined && object.hostZoneList !== null) {
      for (const e of object.hostZoneList) {
        message.hostZoneList.push(HostZone.fromPartial(e));
      }
    }
    if (object.epochTrackerList !== undefined && object.epochTrackerList !== null) {
      for (const e of object.epochTrackerList) {
        message.epochTrackerList.push(EpochTracker.fromPartial(e));
      }
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
