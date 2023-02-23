/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.interchainquery.v1";

export interface Query {
  id: string;
  connectionId: string;
  chainId: string;
  queryType: string;
  request: Uint8Array;
  callbackId: string;
  ttl: Long;
  requestSent: boolean;
}

export interface DataPoint {
  id: string;
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  queries: Query[];
}

const baseQuery: object = {
  id: "",
  connectionId: "",
  chainId: "",
  queryType: "",
  callbackId: "",
  ttl: Long.UZERO,
  requestSent: false,
};

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }
    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }
    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }
    if (!message.ttl.isZero()) {
      writer.uint32(72).uint64(message.ttl);
    }
    if (message.requestSent === true) {
      writer.uint32(88).bool(message.requestSent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuery } as Query;
    message.request = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.queryType = reader.string();
          break;
        case 5:
          message.request = reader.bytes();
          break;
        case 8:
          message.callbackId = reader.string();
          break;
        case 9:
          message.ttl = reader.uint64() as Long;
          break;
        case 11:
          message.requestSent = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    const message = { ...baseQuery } as Query;
    message.request = new Uint8Array();
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.queryType !== undefined && object.queryType !== null) {
      message.queryType = String(object.queryType);
    } else {
      message.queryType = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = bytesFromBase64(object.request);
    }
    if (object.callbackId !== undefined && object.callbackId !== null) {
      message.callbackId = String(object.callbackId);
    } else {
      message.callbackId = "";
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = Long.fromString(object.ttl);
    } else {
      message.ttl = Long.UZERO;
    }
    if (object.requestSent !== undefined && object.requestSent !== null) {
      message.requestSent = Boolean(object.requestSent);
    } else {
      message.requestSent = false;
    }
    return message;
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    message.request !== undefined &&
      (obj.request = base64FromBytes(message.request !== undefined ? message.request : new Uint8Array()));
    message.callbackId !== undefined && (obj.callbackId = message.callbackId);
    message.ttl !== undefined && (obj.ttl = (message.ttl || Long.UZERO).toString());
    message.requestSent !== undefined && (obj.requestSent = message.requestSent);
    return obj;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = { ...baseQuery } as Query;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.queryType !== undefined && object.queryType !== null) {
      message.queryType = object.queryType;
    } else {
      message.queryType = "";
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = object.request;
    } else {
      message.request = new Uint8Array();
    }
    if (object.callbackId !== undefined && object.callbackId !== null) {
      message.callbackId = object.callbackId;
    } else {
      message.callbackId = "";
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = object.ttl as Long;
    } else {
      message.ttl = Long.UZERO;
    }
    if (object.requestSent !== undefined && object.requestSent !== null) {
      message.requestSent = object.requestSent;
    } else {
      message.requestSent = false;
    }
    return message;
  },
};

const baseDataPoint: object = { id: "", remoteHeight: "", localHeight: "" };

export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteHeight !== "") {
      writer.uint32(18).string(message.remoteHeight);
    }
    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataPoint } as DataPoint;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.remoteHeight = reader.string();
          break;
        case 3:
          message.localHeight = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataPoint {
    const message = { ...baseDataPoint } as DataPoint;
    message.value = new Uint8Array();
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.remoteHeight !== undefined && object.remoteHeight !== null) {
      message.remoteHeight = String(object.remoteHeight);
    } else {
      message.remoteHeight = "";
    }
    if (object.localHeight !== undefined && object.localHeight !== null) {
      message.localHeight = String(object.localHeight);
    } else {
      message.localHeight = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: DataPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.remoteHeight !== undefined && (obj.remoteHeight = message.remoteHeight);
    message.localHeight !== undefined && (obj.localHeight = message.localHeight);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<DataPoint>): DataPoint {
    const message = { ...baseDataPoint } as DataPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.remoteHeight !== undefined && object.remoteHeight !== null) {
      message.remoteHeight = object.remoteHeight;
    } else {
      message.remoteHeight = "";
    }
    if (object.localHeight !== undefined && object.localHeight !== null) {
      message.localHeight = object.localHeight;
    } else {
      message.localHeight = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.queries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
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
    message.queries = [];
    if (object.queries !== undefined && object.queries !== null) {
      for (const e of object.queries) {
        message.queries.push(Query.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => (e ? Query.toJSON(e) : undefined));
    } else {
      obj.queries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.queries = [];
    if (object.queries !== undefined && object.queries !== null) {
      for (const e of object.queries) {
        message.queries.push(Query.fromPartial(e));
      }
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
