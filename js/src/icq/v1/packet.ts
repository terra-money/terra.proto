/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RequestQuery, ResponseQuery } from "../../tendermint/abci/types";

export const protobufPackage = "icq.v1";

/** InterchainQueryPacketData is comprised of raw query. */
export interface InterchainQueryPacketData {
  data: Uint8Array;
  /** optional memo */
  memo: string;
}

/** InterchainQueryPacketAck is comprised of an ABCI query response with non-deterministic fields left empty (e.g. Codespace, Log, Info and ...). */
export interface InterchainQueryPacketAck {
  data: Uint8Array;
}

/** CosmosQuery contains a list of tendermint ABCI query requests. It should be used when sending queries to an SDK host chain. */
export interface CosmosQuery {
  requests: RequestQuery[];
}

/** CosmosResponse contains a list of tendermint ABCI query responses. It should be used when receiving responses from an SDK host chain. */
export interface CosmosResponse {
  responses: ResponseQuery[];
}

const baseInterchainQueryPacketData: object = { memo: "" };

export const InterchainQueryPacketData = {
  encode(message: InterchainQueryPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterchainQueryPacketData } as InterchainQueryPacketData;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryPacketData {
    const message = { ...baseInterchainQueryPacketData } as InterchainQueryPacketData;
    message.data = new Uint8Array();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = String(object.memo);
    } else {
      message.memo = "";
    }
    return message;
  },

  toJSON(message: InterchainQueryPacketData): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  fromPartial(object: DeepPartial<InterchainQueryPacketData>): InterchainQueryPacketData {
    const message = { ...baseInterchainQueryPacketData } as InterchainQueryPacketData;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    } else {
      message.memo = "";
    }
    return message;
  },
};

const baseInterchainQueryPacketAck: object = {};

export const InterchainQueryPacketAck = {
  encode(message: InterchainQueryPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterchainQueryPacketAck } as InterchainQueryPacketAck;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryPacketAck {
    const message = { ...baseInterchainQueryPacketAck } as InterchainQueryPacketAck;
    message.data = new Uint8Array();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: InterchainQueryPacketAck): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<InterchainQueryPacketAck>): InterchainQueryPacketAck {
    const message = { ...baseInterchainQueryPacketAck } as InterchainQueryPacketAck;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseCosmosQuery: object = {};

export const CosmosQuery = {
  encode(message: CosmosQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      RequestQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCosmosQuery } as CosmosQuery;
    message.requests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(RequestQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CosmosQuery {
    const message = { ...baseCosmosQuery } as CosmosQuery;
    message.requests = [];
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(RequestQuery.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CosmosQuery): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => (e ? RequestQuery.toJSON(e) : undefined));
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CosmosQuery>): CosmosQuery {
    const message = { ...baseCosmosQuery } as CosmosQuery;
    message.requests = [];
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(RequestQuery.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCosmosResponse: object = {};

export const CosmosResponse = {
  encode(message: CosmosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      ResponseQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCosmosResponse } as CosmosResponse;
    message.responses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responses.push(ResponseQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CosmosResponse {
    const message = { ...baseCosmosResponse } as CosmosResponse;
    message.responses = [];
    if (object.responses !== undefined && object.responses !== null) {
      for (const e of object.responses) {
        message.responses.push(ResponseQuery.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CosmosResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => (e ? ResponseQuery.toJSON(e) : undefined));
    } else {
      obj.responses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CosmosResponse>): CosmosResponse {
    const message = { ...baseCosmosResponse } as CosmosResponse;
    message.responses = [];
    if (object.responses !== undefined && object.responses !== null) {
      for (const e of object.responses) {
        message.responses.push(ResponseQuery.fromPartial(e));
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
