/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.stakeibc";

export interface ValidatorExchangeRate {
  internalTokensToSharesRate: string;
  epochNumber: Long;
}

export interface Validator {
  name: string;
  address: string;
  status: Validator_ValidatorStatus;
  commissionRate: Long;
  delegationAmt: string;
  weight: Long;
  internalExchangeRate?: ValidatorExchangeRate;
}

export enum Validator_ValidatorStatus {
  ACTIVE = 0,
  INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function validator_ValidatorStatusFromJSON(object: any): Validator_ValidatorStatus {
  switch (object) {
    case 0:
    case "ACTIVE":
      return Validator_ValidatorStatus.ACTIVE;
    case 1:
    case "INACTIVE":
      return Validator_ValidatorStatus.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Validator_ValidatorStatus.UNRECOGNIZED;
  }
}

export function validator_ValidatorStatusToJSON(object: Validator_ValidatorStatus): string {
  switch (object) {
    case Validator_ValidatorStatus.ACTIVE:
      return "ACTIVE";
    case Validator_ValidatorStatus.INACTIVE:
      return "INACTIVE";
    default:
      return "UNKNOWN";
  }
}

const baseValidatorExchangeRate: object = { internalTokensToSharesRate: "", epochNumber: Long.UZERO };

export const ValidatorExchangeRate = {
  encode(message: ValidatorExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.internalTokensToSharesRate !== "") {
      writer.uint32(10).string(message.internalTokensToSharesRate);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorExchangeRate } as ValidatorExchangeRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.internalTokensToSharesRate = reader.string();
          break;
        case 2:
          message.epochNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorExchangeRate {
    const message = { ...baseValidatorExchangeRate } as ValidatorExchangeRate;
    if (object.internalTokensToSharesRate !== undefined && object.internalTokensToSharesRate !== null) {
      message.internalTokensToSharesRate = String(object.internalTokensToSharesRate);
    } else {
      message.internalTokensToSharesRate = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },

  toJSON(message: ValidatorExchangeRate): unknown {
    const obj: any = {};
    message.internalTokensToSharesRate !== undefined &&
      (obj.internalTokensToSharesRate = message.internalTokensToSharesRate);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorExchangeRate>): ValidatorExchangeRate {
    const message = { ...baseValidatorExchangeRate } as ValidatorExchangeRate;
    if (object.internalTokensToSharesRate !== undefined && object.internalTokensToSharesRate !== null) {
      message.internalTokensToSharesRate = object.internalTokensToSharesRate;
    } else {
      message.internalTokensToSharesRate = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    return message;
  },
};

const baseValidator: object = {
  name: "",
  address: "",
  status: 0,
  commissionRate: Long.UZERO,
  delegationAmt: "",
  weight: Long.UZERO,
};

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (!message.commissionRate.isZero()) {
      writer.uint32(32).uint64(message.commissionRate);
    }
    if (message.delegationAmt !== "") {
      writer.uint32(42).string(message.delegationAmt);
    }
    if (!message.weight.isZero()) {
      writer.uint32(48).uint64(message.weight);
    }
    if (message.internalExchangeRate !== undefined) {
      ValidatorExchangeRate.encode(message.internalExchangeRate, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.commissionRate = reader.uint64() as Long;
          break;
        case 5:
          message.delegationAmt = reader.string();
          break;
        case 6:
          message.weight = reader.uint64() as Long;
          break;
        case 7:
          message.internalExchangeRate = ValidatorExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = validator_ValidatorStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.commissionRate !== undefined && object.commissionRate !== null) {
      message.commissionRate = Long.fromString(object.commissionRate);
    } else {
      message.commissionRate = Long.UZERO;
    }
    if (object.delegationAmt !== undefined && object.delegationAmt !== null) {
      message.delegationAmt = String(object.delegationAmt);
    } else {
      message.delegationAmt = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Long.fromString(object.weight);
    } else {
      message.weight = Long.UZERO;
    }
    if (object.internalExchangeRate !== undefined && object.internalExchangeRate !== null) {
      message.internalExchangeRate = ValidatorExchangeRate.fromJSON(object.internalExchangeRate);
    } else {
      message.internalExchangeRate = undefined;
    }
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = validator_ValidatorStatusToJSON(message.status));
    message.commissionRate !== undefined &&
      (obj.commissionRate = (message.commissionRate || Long.UZERO).toString());
    message.delegationAmt !== undefined && (obj.delegationAmt = message.delegationAmt);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    message.internalExchangeRate !== undefined &&
      (obj.internalExchangeRate = message.internalExchangeRate
        ? ValidatorExchangeRate.toJSON(message.internalExchangeRate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.commissionRate !== undefined && object.commissionRate !== null) {
      message.commissionRate = object.commissionRate as Long;
    } else {
      message.commissionRate = Long.UZERO;
    }
    if (object.delegationAmt !== undefined && object.delegationAmt !== null) {
      message.delegationAmt = object.delegationAmt;
    } else {
      message.delegationAmt = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight as Long;
    } else {
      message.weight = Long.UZERO;
    }
    if (object.internalExchangeRate !== undefined && object.internalExchangeRate !== null) {
      message.internalExchangeRate = ValidatorExchangeRate.fromPartial(object.internalExchangeRate);
    } else {
      message.internalExchangeRate = undefined;
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
