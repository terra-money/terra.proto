/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "router.v1";

/** GenesisState defines the router genesis state */
export interface GenesisState {
  params?: Params;
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */
  inFlightPackets: { [key: string]: InFlightPacket };
}

export interface GenesisState_InFlightPacketsEntry {
  key: string;
  value?: InFlightPacket;
}

/** Params defines the set of IBC router parameters. */
export interface Params {
  feePercentage: string;
}

/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacket {
  originalSenderAddress: string;
  refundChannelId: string;
  refundPortId: string;
  packetSrcChannelId: string;
  packetSrcPortId: string;
  packetTimeoutTimestamp: Long;
  packetTimeoutHeight: string;
  packetData: Uint8Array;
  refundSequence: Long;
  retriesRemaining: number;
  timeout: Long;
  nonrefundable: boolean;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.inFlightPackets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.inFlightPackets = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.inFlightPackets[entry2.key] = entry2.value;
          }
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
    message.inFlightPackets = {};
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.inFlightPackets !== undefined && object.inFlightPackets !== null) {
      Object.entries(object.inFlightPackets).forEach(([key, value]) => {
        message.inFlightPackets[key] = InFlightPacket.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    obj.inFlightPackets = {};
    if (message.inFlightPackets) {
      Object.entries(message.inFlightPackets).forEach(([k, v]) => {
        obj.inFlightPackets[k] = InFlightPacket.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.inFlightPackets = {};
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.inFlightPackets !== undefined && object.inFlightPackets !== null) {
      Object.entries(object.inFlightPackets).forEach(([key, value]) => {
        if (value !== undefined) {
          message.inFlightPackets[key] = InFlightPacket.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseGenesisState_InFlightPacketsEntry: object = { key: "" };

export const GenesisState_InFlightPacketsEntry = {
  encode(message: GenesisState_InFlightPacketsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_InFlightPacketsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState_InFlightPacketsEntry } as GenesisState_InFlightPacketsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = InFlightPacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_InFlightPacketsEntry {
    const message = { ...baseGenesisState_InFlightPacketsEntry } as GenesisState_InFlightPacketsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = InFlightPacket.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState_InFlightPacketsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? InFlightPacket.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry {
    const message = { ...baseGenesisState_InFlightPacketsEntry } as GenesisState_InFlightPacketsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = InFlightPacket.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseParams: object = { feePercentage: "" };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feePercentage !== "") {
      writer.uint32(10).string(message.feePercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feePercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = String(object.feePercentage);
    } else {
      message.feePercentage = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = object.feePercentage;
    } else {
      message.feePercentage = "";
    }
    return message;
  },
};

const baseInFlightPacket: object = {
  originalSenderAddress: "",
  refundChannelId: "",
  refundPortId: "",
  packetSrcChannelId: "",
  packetSrcPortId: "",
  packetTimeoutTimestamp: Long.UZERO,
  packetTimeoutHeight: "",
  refundSequence: Long.UZERO,
  retriesRemaining: 0,
  timeout: Long.UZERO,
  nonrefundable: false,
};

export const InFlightPacket = {
  encode(message: InFlightPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalSenderAddress !== "") {
      writer.uint32(10).string(message.originalSenderAddress);
    }
    if (message.refundChannelId !== "") {
      writer.uint32(18).string(message.refundChannelId);
    }
    if (message.refundPortId !== "") {
      writer.uint32(26).string(message.refundPortId);
    }
    if (message.packetSrcChannelId !== "") {
      writer.uint32(34).string(message.packetSrcChannelId);
    }
    if (message.packetSrcPortId !== "") {
      writer.uint32(42).string(message.packetSrcPortId);
    }
    if (!message.packetTimeoutTimestamp.isZero()) {
      writer.uint32(48).uint64(message.packetTimeoutTimestamp);
    }
    if (message.packetTimeoutHeight !== "") {
      writer.uint32(58).string(message.packetTimeoutHeight);
    }
    if (message.packetData.length !== 0) {
      writer.uint32(66).bytes(message.packetData);
    }
    if (!message.refundSequence.isZero()) {
      writer.uint32(72).uint64(message.refundSequence);
    }
    if (message.retriesRemaining !== 0) {
      writer.uint32(80).int32(message.retriesRemaining);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(88).uint64(message.timeout);
    }
    if (message.nonrefundable === true) {
      writer.uint32(96).bool(message.nonrefundable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InFlightPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInFlightPacket } as InFlightPacket;
    message.packetData = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalSenderAddress = reader.string();
          break;
        case 2:
          message.refundChannelId = reader.string();
          break;
        case 3:
          message.refundPortId = reader.string();
          break;
        case 4:
          message.packetSrcChannelId = reader.string();
          break;
        case 5:
          message.packetSrcPortId = reader.string();
          break;
        case 6:
          message.packetTimeoutTimestamp = reader.uint64() as Long;
          break;
        case 7:
          message.packetTimeoutHeight = reader.string();
          break;
        case 8:
          message.packetData = reader.bytes();
          break;
        case 9:
          message.refundSequence = reader.uint64() as Long;
          break;
        case 10:
          message.retriesRemaining = reader.int32();
          break;
        case 11:
          message.timeout = reader.uint64() as Long;
          break;
        case 12:
          message.nonrefundable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InFlightPacket {
    const message = { ...baseInFlightPacket } as InFlightPacket;
    message.packetData = new Uint8Array();
    if (object.originalSenderAddress !== undefined && object.originalSenderAddress !== null) {
      message.originalSenderAddress = String(object.originalSenderAddress);
    } else {
      message.originalSenderAddress = "";
    }
    if (object.refundChannelId !== undefined && object.refundChannelId !== null) {
      message.refundChannelId = String(object.refundChannelId);
    } else {
      message.refundChannelId = "";
    }
    if (object.refundPortId !== undefined && object.refundPortId !== null) {
      message.refundPortId = String(object.refundPortId);
    } else {
      message.refundPortId = "";
    }
    if (object.packetSrcChannelId !== undefined && object.packetSrcChannelId !== null) {
      message.packetSrcChannelId = String(object.packetSrcChannelId);
    } else {
      message.packetSrcChannelId = "";
    }
    if (object.packetSrcPortId !== undefined && object.packetSrcPortId !== null) {
      message.packetSrcPortId = String(object.packetSrcPortId);
    } else {
      message.packetSrcPortId = "";
    }
    if (object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null) {
      message.packetTimeoutTimestamp = Long.fromString(object.packetTimeoutTimestamp);
    } else {
      message.packetTimeoutTimestamp = Long.UZERO;
    }
    if (object.packetTimeoutHeight !== undefined && object.packetTimeoutHeight !== null) {
      message.packetTimeoutHeight = String(object.packetTimeoutHeight);
    } else {
      message.packetTimeoutHeight = "";
    }
    if (object.packetData !== undefined && object.packetData !== null) {
      message.packetData = bytesFromBase64(object.packetData);
    }
    if (object.refundSequence !== undefined && object.refundSequence !== null) {
      message.refundSequence = Long.fromString(object.refundSequence);
    } else {
      message.refundSequence = Long.UZERO;
    }
    if (object.retriesRemaining !== undefined && object.retriesRemaining !== null) {
      message.retriesRemaining = Number(object.retriesRemaining);
    } else {
      message.retriesRemaining = 0;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Long.fromString(object.timeout);
    } else {
      message.timeout = Long.UZERO;
    }
    if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
      message.nonrefundable = Boolean(object.nonrefundable);
    } else {
      message.nonrefundable = false;
    }
    return message;
  },

  toJSON(message: InFlightPacket): unknown {
    const obj: any = {};
    message.originalSenderAddress !== undefined &&
      (obj.originalSenderAddress = message.originalSenderAddress);
    message.refundChannelId !== undefined && (obj.refundChannelId = message.refundChannelId);
    message.refundPortId !== undefined && (obj.refundPortId = message.refundPortId);
    message.packetSrcChannelId !== undefined && (obj.packetSrcChannelId = message.packetSrcChannelId);
    message.packetSrcPortId !== undefined && (obj.packetSrcPortId = message.packetSrcPortId);
    message.packetTimeoutTimestamp !== undefined &&
      (obj.packetTimeoutTimestamp = (message.packetTimeoutTimestamp || Long.UZERO).toString());
    message.packetTimeoutHeight !== undefined && (obj.packetTimeoutHeight = message.packetTimeoutHeight);
    message.packetData !== undefined &&
      (obj.packetData = base64FromBytes(
        message.packetData !== undefined ? message.packetData : new Uint8Array(),
      ));
    message.refundSequence !== undefined &&
      (obj.refundSequence = (message.refundSequence || Long.UZERO).toString());
    message.retriesRemaining !== undefined && (obj.retriesRemaining = message.retriesRemaining);
    message.timeout !== undefined && (obj.timeout = (message.timeout || Long.UZERO).toString());
    message.nonrefundable !== undefined && (obj.nonrefundable = message.nonrefundable);
    return obj;
  },

  fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket {
    const message = { ...baseInFlightPacket } as InFlightPacket;
    if (object.originalSenderAddress !== undefined && object.originalSenderAddress !== null) {
      message.originalSenderAddress = object.originalSenderAddress;
    } else {
      message.originalSenderAddress = "";
    }
    if (object.refundChannelId !== undefined && object.refundChannelId !== null) {
      message.refundChannelId = object.refundChannelId;
    } else {
      message.refundChannelId = "";
    }
    if (object.refundPortId !== undefined && object.refundPortId !== null) {
      message.refundPortId = object.refundPortId;
    } else {
      message.refundPortId = "";
    }
    if (object.packetSrcChannelId !== undefined && object.packetSrcChannelId !== null) {
      message.packetSrcChannelId = object.packetSrcChannelId;
    } else {
      message.packetSrcChannelId = "";
    }
    if (object.packetSrcPortId !== undefined && object.packetSrcPortId !== null) {
      message.packetSrcPortId = object.packetSrcPortId;
    } else {
      message.packetSrcPortId = "";
    }
    if (object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null) {
      message.packetTimeoutTimestamp = object.packetTimeoutTimestamp as Long;
    } else {
      message.packetTimeoutTimestamp = Long.UZERO;
    }
    if (object.packetTimeoutHeight !== undefined && object.packetTimeoutHeight !== null) {
      message.packetTimeoutHeight = object.packetTimeoutHeight;
    } else {
      message.packetTimeoutHeight = "";
    }
    if (object.packetData !== undefined && object.packetData !== null) {
      message.packetData = object.packetData;
    } else {
      message.packetData = new Uint8Array();
    }
    if (object.refundSequence !== undefined && object.refundSequence !== null) {
      message.refundSequence = object.refundSequence as Long;
    } else {
      message.refundSequence = Long.UZERO;
    }
    if (object.retriesRemaining !== undefined && object.retriesRemaining !== null) {
      message.retriesRemaining = object.retriesRemaining;
    } else {
      message.retriesRemaining = 0;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout as Long;
    } else {
      message.timeout = Long.UZERO;
    }
    if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
      message.nonrefundable = object.nonrefundable;
    } else {
      message.nonrefundable = false;
    }
    return message;
  },
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
