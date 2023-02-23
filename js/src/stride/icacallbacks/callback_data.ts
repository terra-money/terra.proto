/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.icacallbacks";

export interface CallbackData {
  callbackKey: string;
  portId: string;
  channelId: string;
  sequence: Long;
  callbackId: string;
  callbackArgs: Uint8Array;
}

const baseCallbackData: object = {
  callbackKey: "",
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
  callbackId: "",
};

export const CallbackData = {
  encode(message: CallbackData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.callbackId !== "") {
      writer.uint32(42).string(message.callbackId);
    }
    if (message.callbackArgs.length !== 0) {
      writer.uint32(50).bytes(message.callbackArgs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallbackData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCallbackData } as CallbackData;
    message.callbackArgs = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackKey = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        case 5:
          message.callbackId = reader.string();
          break;
        case 6:
          message.callbackArgs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CallbackData {
    const message = { ...baseCallbackData } as CallbackData;
    message.callbackArgs = new Uint8Array();
    if (object.callbackKey !== undefined && object.callbackKey !== null) {
      message.callbackKey = String(object.callbackKey);
    } else {
      message.callbackKey = "";
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
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    } else {
      message.sequence = Long.UZERO;
    }
    if (object.callbackId !== undefined && object.callbackId !== null) {
      message.callbackId = String(object.callbackId);
    } else {
      message.callbackId = "";
    }
    if (object.callbackArgs !== undefined && object.callbackArgs !== null) {
      message.callbackArgs = bytesFromBase64(object.callbackArgs);
    }
    return message;
  },

  toJSON(message: CallbackData): unknown {
    const obj: any = {};
    message.callbackKey !== undefined && (obj.callbackKey = message.callbackKey);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.callbackId !== undefined && (obj.callbackId = message.callbackId);
    message.callbackArgs !== undefined &&
      (obj.callbackArgs = base64FromBytes(
        message.callbackArgs !== undefined ? message.callbackArgs : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<CallbackData>): CallbackData {
    const message = { ...baseCallbackData } as CallbackData;
    if (object.callbackKey !== undefined && object.callbackKey !== null) {
      message.callbackKey = object.callbackKey;
    } else {
      message.callbackKey = "";
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
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence as Long;
    } else {
      message.sequence = Long.UZERO;
    }
    if (object.callbackId !== undefined && object.callbackId !== null) {
      message.callbackId = object.callbackId;
    } else {
      message.callbackId = "";
    }
    if (object.callbackArgs !== undefined && object.callbackArgs !== null) {
      message.callbackArgs = object.callbackArgs;
    } else {
      message.callbackArgs = new Uint8Array();
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
