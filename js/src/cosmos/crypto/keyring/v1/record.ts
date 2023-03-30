/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../../../cosmos/crypto/hd/v1/hd";

export const protobufPackage = "cosmos.crypto.keyring.v1";

/** Since: cosmos-sdk 0.46 */

/** Record is used for representing a key in the keyring. */
export interface Record {
  /** name represents a name of Record */
  name: string;
  /** pub_key represents a public key in any format */
  pubKey?: Any;
  /** local stores the private key locally. */
  local?: Record_Local | undefined;
  /** ledger stores the information about a Ledger key. */
  ledger?: Record_Ledger | undefined;
  /** Multi does not store any other information. */
  multi?: Record_Multi | undefined;
  /** Offline does not store any other information. */
  offline?: Record_Offline | undefined;
}

/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
  privKey?: Any;
}

/** Ledger item */
export interface Record_Ledger {
  path?: BIP44Params;
}

/** Multi item */
export interface Record_Multi {}

/** Offline item */
export interface Record_Offline {}

const baseRecord: object = { name: "" };

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecord } as Record;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.local = Record_Local.decode(reader, reader.uint32());
          break;
        case 4:
          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          break;
        case 5:
          message.multi = Record_Multi.decode(reader, reader.uint32());
          break;
        case 6:
          message.offline = Record_Offline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record {
    const message = { ...baseRecord } as Record;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.local !== undefined && object.local !== null) {
      message.local = Record_Local.fromJSON(object.local);
    } else {
      message.local = undefined;
    }
    if (object.ledger !== undefined && object.ledger !== null) {
      message.ledger = Record_Ledger.fromJSON(object.ledger);
    } else {
      message.ledger = undefined;
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = Record_Multi.fromJSON(object.multi);
    } else {
      message.multi = undefined;
    }
    if (object.offline !== undefined && object.offline !== null) {
      message.offline = Record_Offline.fromJSON(object.offline);
    } else {
      message.offline = undefined;
    }
    return message;
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.local !== undefined &&
      (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
    message.ledger !== undefined &&
      (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
    message.multi !== undefined &&
      (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
    message.offline !== undefined &&
      (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Record>): Record {
    const message = { ...baseRecord } as Record;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.local !== undefined && object.local !== null) {
      message.local = Record_Local.fromPartial(object.local);
    } else {
      message.local = undefined;
    }
    if (object.ledger !== undefined && object.ledger !== null) {
      message.ledger = Record_Ledger.fromPartial(object.ledger);
    } else {
      message.ledger = undefined;
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = Record_Multi.fromPartial(object.multi);
    } else {
      message.multi = undefined;
    }
    if (object.offline !== undefined && object.offline !== null) {
      message.offline = Record_Offline.fromPartial(object.offline);
    } else {
      message.offline = undefined;
    }
    return message;
  },
};

const baseRecord_Local: object = {};

export const Record_Local = {
  encode(message: Record_Local, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecord_Local } as Record_Local;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record_Local {
    const message = { ...baseRecord_Local } as Record_Local;
    if (object.privKey !== undefined && object.privKey !== null) {
      message.privKey = Any.fromJSON(object.privKey);
    } else {
      message.privKey = undefined;
    }
    return message;
  },

  toJSON(message: Record_Local): unknown {
    const obj: any = {};
    message.privKey !== undefined &&
      (obj.privKey = message.privKey ? Any.toJSON(message.privKey) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Record_Local>): Record_Local {
    const message = { ...baseRecord_Local } as Record_Local;
    if (object.privKey !== undefined && object.privKey !== null) {
      message.privKey = Any.fromPartial(object.privKey);
    } else {
      message.privKey = undefined;
    }
    return message;
  },
};

const baseRecord_Ledger: object = {};

export const Record_Ledger = {
  encode(message: Record_Ledger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecord_Ledger } as Record_Ledger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record_Ledger {
    const message = { ...baseRecord_Ledger } as Record_Ledger;
    if (object.path !== undefined && object.path !== null) {
      message.path = BIP44Params.fromJSON(object.path);
    } else {
      message.path = undefined;
    }
    return message;
  },

  toJSON(message: Record_Ledger): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path ? BIP44Params.toJSON(message.path) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Record_Ledger>): Record_Ledger {
    const message = { ...baseRecord_Ledger } as Record_Ledger;
    if (object.path !== undefined && object.path !== null) {
      message.path = BIP44Params.fromPartial(object.path);
    } else {
      message.path = undefined;
    }
    return message;
  },
};

const baseRecord_Multi: object = {};

export const Record_Multi = {
  encode(_: Record_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecord_Multi } as Record_Multi;
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

  fromJSON(_: any): Record_Multi {
    const message = { ...baseRecord_Multi } as Record_Multi;
    return message;
  },

  toJSON(_: Record_Multi): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Record_Multi>): Record_Multi {
    const message = { ...baseRecord_Multi } as Record_Multi;
    return message;
  },
};

const baseRecord_Offline: object = {};

export const Record_Offline = {
  encode(_: Record_Offline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecord_Offline } as Record_Offline;
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

  fromJSON(_: any): Record_Offline {
    const message = { ...baseRecord_Offline } as Record_Offline;
    return message;
  },

  toJSON(_: Record_Offline): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Record_Offline>): Record_Offline {
    const message = { ...baseRecord_Offline } as Record_Offline;
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
