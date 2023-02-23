/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Validator } from "../../stride/stakeibc/validator";

export const protobufPackage = "stride.stakeibc";

export interface Delegation {
  delegateAcctAddress: string;
  validator?: Validator;
  amt: Long;
}

const baseDelegation: object = { delegateAcctAddress: "", amt: Long.ZERO };

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegateAcctAddress !== "") {
      writer.uint32(10).string(message.delegateAcctAddress);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.amt.isZero()) {
      writer.uint32(24).int64(message.amt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegation } as Delegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegateAcctAddress = reader.string();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.amt = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (object.delegateAcctAddress !== undefined && object.delegateAcctAddress !== null) {
      message.delegateAcctAddress = String(object.delegateAcctAddress);
    } else {
      message.delegateAcctAddress = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = Long.fromString(object.amt);
    } else {
      message.amt = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegateAcctAddress !== undefined && (obj.delegateAcctAddress = message.delegateAcctAddress);
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.amt !== undefined && (obj.amt = (message.amt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (object.delegateAcctAddress !== undefined && object.delegateAcctAddress !== null) {
      message.delegateAcctAddress = object.delegateAcctAddress;
    } else {
      message.delegateAcctAddress = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = object.amt as Long;
    } else {
      message.amt = Long.ZERO;
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
