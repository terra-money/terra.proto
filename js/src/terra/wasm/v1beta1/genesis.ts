/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo } from "../../../terra/wasm/v1beta1/wasm";

export const protobufPackage = "terra.wasm.v1beta1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  lastCodeId: Long;
  lastInstanceId: Long;
  codes: Code[];
  contracts: Contract[];
}

/** Model is a struct that holds a KV pair */
export interface Model {
  key: Uint8Array;
  value: Uint8Array;
}

/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractInfo?: ContractInfo;
  contractStore: Model[];
}

const baseGenesisState: object = { lastCodeId: Long.UZERO, lastInstanceId: Long.UZERO };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastCodeId.isZero()) {
      writer.uint32(16).uint64(message.lastCodeId);
    }
    if (!message.lastInstanceId.isZero()) {
      writer.uint32(24).uint64(message.lastInstanceId);
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.codes = [];
    message.contracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastCodeId = reader.uint64() as Long;
          break;
        case 3:
          message.lastInstanceId = reader.uint64() as Long;
          break;
        case 4:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 5:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
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
    message.codes = [];
    message.contracts = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.lastCodeId !== undefined && object.lastCodeId !== null) {
      message.lastCodeId = Long.fromString(object.lastCodeId);
    } else {
      message.lastCodeId = Long.UZERO;
    }
    if (object.lastInstanceId !== undefined && object.lastInstanceId !== null) {
      message.lastInstanceId = Long.fromString(object.lastInstanceId);
    } else {
      message.lastInstanceId = Long.UZERO;
    }
    if (object.codes !== undefined && object.codes !== null) {
      for (const e of object.codes) {
        message.codes.push(Code.fromJSON(e));
      }
    }
    if (object.contracts !== undefined && object.contracts !== null) {
      for (const e of object.contracts) {
        message.contracts.push(Contract.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastCodeId !== undefined && (obj.lastCodeId = (message.lastCodeId || Long.UZERO).toString());
    message.lastInstanceId !== undefined &&
      (obj.lastInstanceId = (message.lastInstanceId || Long.UZERO).toString());
    if (message.codes) {
      obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => (e ? Contract.toJSON(e) : undefined));
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.codes = [];
    message.contracts = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.lastCodeId !== undefined && object.lastCodeId !== null) {
      message.lastCodeId = object.lastCodeId as Long;
    } else {
      message.lastCodeId = Long.UZERO;
    }
    if (object.lastInstanceId !== undefined && object.lastInstanceId !== null) {
      message.lastInstanceId = object.lastInstanceId as Long;
    } else {
      message.lastInstanceId = Long.UZERO;
    }
    if (object.codes !== undefined && object.codes !== null) {
      for (const e of object.codes) {
        message.codes.push(Code.fromPartial(e));
      }
    }
    if (object.contracts !== undefined && object.contracts !== null) {
      for (const e of object.contracts) {
        message.contracts.push(Contract.fromPartial(e));
      }
    }
    return message;
  },
};

const baseModel: object = {};

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModel } as Model;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Model {
    const message = { ...baseModel } as Model;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Model>): Model {
    const message = { ...baseModel } as Model;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    return message;
  },
};

const baseCode: object = {};

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(18).bytes(message.codeBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCode } as Code;
    message.codeBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.codeBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Code {
    const message = { ...baseCode } as Code;
    message.codeBytes = new Uint8Array();
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromJSON(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    if (object.codeBytes !== undefined && object.codeBytes !== null) {
      message.codeBytes = bytesFromBase64(object.codeBytes);
    }
    return message;
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(
        message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = { ...baseCode } as Code;
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    if (object.codeBytes !== undefined && object.codeBytes !== null) {
      message.codeBytes = object.codeBytes;
    } else {
      message.codeBytes = new Uint8Array();
    }
    return message;
  },
};

const baseContract: object = {};

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractStore) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContract } as Contract;
    message.contractStore = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractStore.push(Model.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contract {
    const message = { ...baseContract } as Contract;
    message.contractStore = [];
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    if (object.contractStore !== undefined && object.contractStore !== null) {
      for (const e of object.contractStore) {
        message.contractStore.push(Model.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractStore) {
      obj.contractStore = message.contractStore.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.contractStore = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = { ...baseContract } as Contract;
    message.contractStore = [];
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    if (object.contractStore !== undefined && object.contractStore !== null) {
      for (const e of object.contractStore) {
        message.contractStore.push(Model.fromPartial(e));
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
