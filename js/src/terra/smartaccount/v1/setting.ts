/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Initialization } from "../../../terra/smartaccount/v1/wasm";

export const protobufPackage = "terra.smartaccount.v1";

export interface Setting {
  /**
   * Owner that can do priviledged operations on the Smart Account
   * Defaults to the Smart Account Addr
   */
  owner: string;
  /** List of contract addresses to perform auth instead of SigVerify */
  authorization: AuthorizationMsg[];
  /** List of contract addresses to perform pre-txn logic */
  preTransaction: string[];
  /** List of contract addresses to perform post-txn logic */
  postTransaction: string[];
  /** Fallback to default SigVerify if custom authorization fails */
  fallback: boolean;
}

export interface AuthorizationMsg {
  contractAddress: string;
  initMsg?: Initialization;
}

const baseSetting: object = { owner: "", preTransaction: "", postTransaction: "", fallback: false };

export const Setting = {
  encode(message: Setting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.authorization) {
      AuthorizationMsg.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.preTransaction) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.postTransaction) {
      writer.uint32(34).string(v!);
    }
    if (message.fallback === true) {
      writer.uint32(40).bool(message.fallback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Setting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetting } as Setting;
    message.authorization = [];
    message.preTransaction = [];
    message.postTransaction = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.authorization.push(AuthorizationMsg.decode(reader, reader.uint32()));
          break;
        case 3:
          message.preTransaction.push(reader.string());
          break;
        case 4:
          message.postTransaction.push(reader.string());
          break;
        case 5:
          message.fallback = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Setting {
    const message = { ...baseSetting } as Setting;
    message.authorization = [];
    message.preTransaction = [];
    message.postTransaction = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      for (const e of object.authorization) {
        message.authorization.push(AuthorizationMsg.fromJSON(e));
      }
    }
    if (object.preTransaction !== undefined && object.preTransaction !== null) {
      for (const e of object.preTransaction) {
        message.preTransaction.push(String(e));
      }
    }
    if (object.postTransaction !== undefined && object.postTransaction !== null) {
      for (const e of object.postTransaction) {
        message.postTransaction.push(String(e));
      }
    }
    if (object.fallback !== undefined && object.fallback !== null) {
      message.fallback = Boolean(object.fallback);
    } else {
      message.fallback = false;
    }
    return message;
  },

  toJSON(message: Setting): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.authorization) {
      obj.authorization = message.authorization.map((e) => (e ? AuthorizationMsg.toJSON(e) : undefined));
    } else {
      obj.authorization = [];
    }
    if (message.preTransaction) {
      obj.preTransaction = message.preTransaction.map((e) => e);
    } else {
      obj.preTransaction = [];
    }
    if (message.postTransaction) {
      obj.postTransaction = message.postTransaction.map((e) => e);
    } else {
      obj.postTransaction = [];
    }
    message.fallback !== undefined && (obj.fallback = message.fallback);
    return obj;
  },

  fromPartial(object: DeepPartial<Setting>): Setting {
    const message = { ...baseSetting } as Setting;
    message.authorization = [];
    message.preTransaction = [];
    message.postTransaction = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      for (const e of object.authorization) {
        message.authorization.push(AuthorizationMsg.fromPartial(e));
      }
    }
    if (object.preTransaction !== undefined && object.preTransaction !== null) {
      for (const e of object.preTransaction) {
        message.preTransaction.push(e);
      }
    }
    if (object.postTransaction !== undefined && object.postTransaction !== null) {
      for (const e of object.postTransaction) {
        message.postTransaction.push(e);
      }
    }
    if (object.fallback !== undefined && object.fallback !== null) {
      message.fallback = object.fallback;
    } else {
      message.fallback = false;
    }
    return message;
  },
};

const baseAuthorizationMsg: object = { contractAddress: "" };

export const AuthorizationMsg = {
  encode(message: AuthorizationMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.initMsg !== undefined) {
      Initialization.encode(message.initMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthorizationMsg } as AuthorizationMsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.initMsg = Initialization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizationMsg {
    const message = { ...baseAuthorizationMsg } as AuthorizationMsg;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.initMsg !== undefined && object.initMsg !== null) {
      message.initMsg = Initialization.fromJSON(object.initMsg);
    } else {
      message.initMsg = undefined;
    }
    return message;
  },

  toJSON(message: AuthorizationMsg): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.initMsg !== undefined &&
      (obj.initMsg = message.initMsg ? Initialization.toJSON(message.initMsg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizationMsg>): AuthorizationMsg {
    const message = { ...baseAuthorizationMsg } as AuthorizationMsg;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.initMsg !== undefined && object.initMsg !== null) {
      message.initMsg = Initialization.fromPartial(object.initMsg);
    } else {
      message.initMsg = undefined;
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
