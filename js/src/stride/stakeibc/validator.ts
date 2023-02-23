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
  delegationAmt: Long;
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
    case Validator_ValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseValidatorExchangeRate(): ValidatorExchangeRate {
  return { internalTokensToSharesRate: "", epochNumber: Long.UZERO };
}

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
    const message = createBaseValidatorExchangeRate();
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
    return {
      internalTokensToSharesRate: isSet(object.internalTokensToSharesRate)
        ? String(object.internalTokensToSharesRate)
        : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
    };
  },

  toJSON(message: ValidatorExchangeRate): unknown {
    const obj: any = {};
    message.internalTokensToSharesRate !== undefined &&
      (obj.internalTokensToSharesRate = message.internalTokensToSharesRate);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorExchangeRate>, I>>(base?: I): ValidatorExchangeRate {
    return ValidatorExchangeRate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorExchangeRate>, I>>(object: I): ValidatorExchangeRate {
    const message = createBaseValidatorExchangeRate();
    message.internalTokensToSharesRate = object.internalTokensToSharesRate ?? "";
    message.epochNumber = (object.epochNumber !== undefined && object.epochNumber !== null)
      ? Long.fromValue(object.epochNumber)
      : Long.UZERO;
    return message;
  },
};

function createBaseValidator(): Validator {
  return {
    name: "",
    address: "",
    status: 0,
    commissionRate: Long.UZERO,
    delegationAmt: Long.UZERO,
    weight: Long.UZERO,
    internalExchangeRate: undefined,
  };
}

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
    if (!message.delegationAmt.isZero()) {
      writer.uint32(40).uint64(message.delegationAmt);
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
    const message = createBaseValidator();
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
          message.delegationAmt = reader.uint64() as Long;
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
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? validator_ValidatorStatusFromJSON(object.status) : 0,
      commissionRate: isSet(object.commissionRate) ? Long.fromValue(object.commissionRate) : Long.UZERO,
      delegationAmt: isSet(object.delegationAmt) ? Long.fromValue(object.delegationAmt) : Long.UZERO,
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO,
      internalExchangeRate: isSet(object.internalExchangeRate)
        ? ValidatorExchangeRate.fromJSON(object.internalExchangeRate)
        : undefined,
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = validator_ValidatorStatusToJSON(message.status));
    message.commissionRate !== undefined && (obj.commissionRate = (message.commissionRate || Long.UZERO).toString());
    message.delegationAmt !== undefined && (obj.delegationAmt = (message.delegationAmt || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    message.internalExchangeRate !== undefined && (obj.internalExchangeRate = message.internalExchangeRate
      ? ValidatorExchangeRate.toJSON(message.internalExchangeRate)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
    return Validator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    message.commissionRate = (object.commissionRate !== undefined && object.commissionRate !== null)
      ? Long.fromValue(object.commissionRate)
      : Long.UZERO;
    message.delegationAmt = (object.delegationAmt !== undefined && object.delegationAmt !== null)
      ? Long.fromValue(object.delegationAmt)
      : Long.UZERO;
    message.weight = (object.weight !== undefined && object.weight !== null)
      ? Long.fromValue(object.weight)
      : Long.UZERO;
    message.internalExchangeRate = (object.internalExchangeRate !== undefined && object.internalExchangeRate !== null)
      ? ValidatorExchangeRate.fromPartial(object.internalExchangeRate)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
