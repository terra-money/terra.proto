/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.stakeibc";

/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: Long;
  delegateInterval: Long;
  depositInterval: Long;
  redemptionRateInterval: Long;
  strideCommission: Long;
  /**
   * zone_com_address stores which addresses to
   * send the Stride commission too, as well as what portion
   * of the fee each address is entitled to
   * TODO implement this
   */
  zoneComAddress: { [key: string]: string };
  reinvestInterval: Long;
  validatorRebalancingThreshold: Long;
  icaTimeoutNanos: Long;
  bufferSize: Long;
  ibcTimeoutBlocks: Long;
  feeTransferTimeoutNanos: Long;
  maxStakeIcaCallsPerEpoch: Long;
  safetyMinRedemptionRateThreshold: Long;
  safetyMaxRedemptionRateThreshold: Long;
  ibcTransferTimeoutNanos: Long;
  safetyNumValidators: Long;
}

export interface Params_ZoneComAddressEntry {
  key: string;
  value: string;
}

function createBaseParams(): Params {
  return {
    rewardsInterval: Long.UZERO,
    delegateInterval: Long.UZERO,
    depositInterval: Long.UZERO,
    redemptionRateInterval: Long.UZERO,
    strideCommission: Long.UZERO,
    zoneComAddress: {},
    reinvestInterval: Long.UZERO,
    validatorRebalancingThreshold: Long.UZERO,
    icaTimeoutNanos: Long.UZERO,
    bufferSize: Long.UZERO,
    ibcTimeoutBlocks: Long.UZERO,
    feeTransferTimeoutNanos: Long.UZERO,
    maxStakeIcaCallsPerEpoch: Long.UZERO,
    safetyMinRedemptionRateThreshold: Long.UZERO,
    safetyMaxRedemptionRateThreshold: Long.UZERO,
    ibcTransferTimeoutNanos: Long.UZERO,
    safetyNumValidators: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardsInterval.isZero()) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }
    if (!message.delegateInterval.isZero()) {
      writer.uint32(48).uint64(message.delegateInterval);
    }
    if (!message.depositInterval.isZero()) {
      writer.uint32(16).uint64(message.depositInterval);
    }
    if (!message.redemptionRateInterval.isZero()) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }
    if (!message.strideCommission.isZero()) {
      writer.uint32(32).uint64(message.strideCommission);
    }
    Object.entries(message.zoneComAddress).forEach(([key, value]) => {
      Params_ZoneComAddressEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (!message.reinvestInterval.isZero()) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }
    if (!message.validatorRebalancingThreshold.isZero()) {
      writer.uint32(64).uint64(message.validatorRebalancingThreshold);
    }
    if (!message.icaTimeoutNanos.isZero()) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }
    if (!message.bufferSize.isZero()) {
      writer.uint32(80).uint64(message.bufferSize);
    }
    if (!message.ibcTimeoutBlocks.isZero()) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }
    if (!message.feeTransferTimeoutNanos.isZero()) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }
    if (!message.maxStakeIcaCallsPerEpoch.isZero()) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }
    if (!message.safetyMinRedemptionRateThreshold.isZero()) {
      writer.uint32(112).uint64(message.safetyMinRedemptionRateThreshold);
    }
    if (!message.safetyMaxRedemptionRateThreshold.isZero()) {
      writer.uint32(120).uint64(message.safetyMaxRedemptionRateThreshold);
    }
    if (!message.ibcTransferTimeoutNanos.isZero()) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }
    if (!message.safetyNumValidators.isZero()) {
      writer.uint32(136).uint64(message.safetyNumValidators);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsInterval = reader.uint64() as Long;
          break;
        case 6:
          message.delegateInterval = reader.uint64() as Long;
          break;
        case 2:
          message.depositInterval = reader.uint64() as Long;
          break;
        case 3:
          message.redemptionRateInterval = reader.uint64() as Long;
          break;
        case 4:
          message.strideCommission = reader.uint64() as Long;
          break;
        case 5:
          const entry5 = Params_ZoneComAddressEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.zoneComAddress[entry5.key] = entry5.value;
          }
          break;
        case 7:
          message.reinvestInterval = reader.uint64() as Long;
          break;
        case 8:
          message.validatorRebalancingThreshold = reader.uint64() as Long;
          break;
        case 9:
          message.icaTimeoutNanos = reader.uint64() as Long;
          break;
        case 10:
          message.bufferSize = reader.uint64() as Long;
          break;
        case 11:
          message.ibcTimeoutBlocks = reader.uint64() as Long;
          break;
        case 12:
          message.feeTransferTimeoutNanos = reader.uint64() as Long;
          break;
        case 13:
          message.maxStakeIcaCallsPerEpoch = reader.uint64() as Long;
          break;
        case 14:
          message.safetyMinRedemptionRateThreshold = reader.uint64() as Long;
          break;
        case 15:
          message.safetyMaxRedemptionRateThreshold = reader.uint64() as Long;
          break;
        case 16:
          message.ibcTransferTimeoutNanos = reader.uint64() as Long;
          break;
        case 17:
          message.safetyNumValidators = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewardsInterval: isSet(object.rewardsInterval) ? Long.fromValue(object.rewardsInterval) : Long.UZERO,
      delegateInterval: isSet(object.delegateInterval) ? Long.fromValue(object.delegateInterval) : Long.UZERO,
      depositInterval: isSet(object.depositInterval) ? Long.fromValue(object.depositInterval) : Long.UZERO,
      redemptionRateInterval: isSet(object.redemptionRateInterval)
        ? Long.fromValue(object.redemptionRateInterval)
        : Long.UZERO,
      strideCommission: isSet(object.strideCommission) ? Long.fromValue(object.strideCommission) : Long.UZERO,
      zoneComAddress: isObject(object.zoneComAddress)
        ? Object.entries(object.zoneComAddress).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      reinvestInterval: isSet(object.reinvestInterval) ? Long.fromValue(object.reinvestInterval) : Long.UZERO,
      validatorRebalancingThreshold: isSet(object.validatorRebalancingThreshold)
        ? Long.fromValue(object.validatorRebalancingThreshold)
        : Long.UZERO,
      icaTimeoutNanos: isSet(object.icaTimeoutNanos) ? Long.fromValue(object.icaTimeoutNanos) : Long.UZERO,
      bufferSize: isSet(object.bufferSize) ? Long.fromValue(object.bufferSize) : Long.UZERO,
      ibcTimeoutBlocks: isSet(object.ibcTimeoutBlocks) ? Long.fromValue(object.ibcTimeoutBlocks) : Long.UZERO,
      feeTransferTimeoutNanos: isSet(object.feeTransferTimeoutNanos)
        ? Long.fromValue(object.feeTransferTimeoutNanos)
        : Long.UZERO,
      maxStakeIcaCallsPerEpoch: isSet(object.maxStakeIcaCallsPerEpoch)
        ? Long.fromValue(object.maxStakeIcaCallsPerEpoch)
        : Long.UZERO,
      safetyMinRedemptionRateThreshold: isSet(object.safetyMinRedemptionRateThreshold)
        ? Long.fromValue(object.safetyMinRedemptionRateThreshold)
        : Long.UZERO,
      safetyMaxRedemptionRateThreshold: isSet(object.safetyMaxRedemptionRateThreshold)
        ? Long.fromValue(object.safetyMaxRedemptionRateThreshold)
        : Long.UZERO,
      ibcTransferTimeoutNanos: isSet(object.ibcTransferTimeoutNanos)
        ? Long.fromValue(object.ibcTransferTimeoutNanos)
        : Long.UZERO,
      safetyNumValidators: isSet(object.safetyNumValidators) ? Long.fromValue(object.safetyNumValidators) : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardsInterval !== undefined && (obj.rewardsInterval = (message.rewardsInterval || Long.UZERO).toString());
    message.delegateInterval !== undefined &&
      (obj.delegateInterval = (message.delegateInterval || Long.UZERO).toString());
    message.depositInterval !== undefined && (obj.depositInterval = (message.depositInterval || Long.UZERO).toString());
    message.redemptionRateInterval !== undefined &&
      (obj.redemptionRateInterval = (message.redemptionRateInterval || Long.UZERO).toString());
    message.strideCommission !== undefined &&
      (obj.strideCommission = (message.strideCommission || Long.UZERO).toString());
    obj.zoneComAddress = {};
    if (message.zoneComAddress) {
      Object.entries(message.zoneComAddress).forEach(([k, v]) => {
        obj.zoneComAddress[k] = v;
      });
    }
    message.reinvestInterval !== undefined &&
      (obj.reinvestInterval = (message.reinvestInterval || Long.UZERO).toString());
    message.validatorRebalancingThreshold !== undefined &&
      (obj.validatorRebalancingThreshold = (message.validatorRebalancingThreshold || Long.UZERO).toString());
    message.icaTimeoutNanos !== undefined && (obj.icaTimeoutNanos = (message.icaTimeoutNanos || Long.UZERO).toString());
    message.bufferSize !== undefined && (obj.bufferSize = (message.bufferSize || Long.UZERO).toString());
    message.ibcTimeoutBlocks !== undefined &&
      (obj.ibcTimeoutBlocks = (message.ibcTimeoutBlocks || Long.UZERO).toString());
    message.feeTransferTimeoutNanos !== undefined &&
      (obj.feeTransferTimeoutNanos = (message.feeTransferTimeoutNanos || Long.UZERO).toString());
    message.maxStakeIcaCallsPerEpoch !== undefined &&
      (obj.maxStakeIcaCallsPerEpoch = (message.maxStakeIcaCallsPerEpoch || Long.UZERO).toString());
    message.safetyMinRedemptionRateThreshold !== undefined &&
      (obj.safetyMinRedemptionRateThreshold = (message.safetyMinRedemptionRateThreshold || Long.UZERO).toString());
    message.safetyMaxRedemptionRateThreshold !== undefined &&
      (obj.safetyMaxRedemptionRateThreshold = (message.safetyMaxRedemptionRateThreshold || Long.UZERO).toString());
    message.ibcTransferTimeoutNanos !== undefined &&
      (obj.ibcTransferTimeoutNanos = (message.ibcTransferTimeoutNanos || Long.UZERO).toString());
    message.safetyNumValidators !== undefined &&
      (obj.safetyNumValidators = (message.safetyNumValidators || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.rewardsInterval = (object.rewardsInterval !== undefined && object.rewardsInterval !== null)
      ? Long.fromValue(object.rewardsInterval)
      : Long.UZERO;
    message.delegateInterval = (object.delegateInterval !== undefined && object.delegateInterval !== null)
      ? Long.fromValue(object.delegateInterval)
      : Long.UZERO;
    message.depositInterval = (object.depositInterval !== undefined && object.depositInterval !== null)
      ? Long.fromValue(object.depositInterval)
      : Long.UZERO;
    message.redemptionRateInterval =
      (object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null)
        ? Long.fromValue(object.redemptionRateInterval)
        : Long.UZERO;
    message.strideCommission = (object.strideCommission !== undefined && object.strideCommission !== null)
      ? Long.fromValue(object.strideCommission)
      : Long.UZERO;
    message.zoneComAddress = Object.entries(object.zoneComAddress ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.reinvestInterval = (object.reinvestInterval !== undefined && object.reinvestInterval !== null)
      ? Long.fromValue(object.reinvestInterval)
      : Long.UZERO;
    message.validatorRebalancingThreshold =
      (object.validatorRebalancingThreshold !== undefined && object.validatorRebalancingThreshold !== null)
        ? Long.fromValue(object.validatorRebalancingThreshold)
        : Long.UZERO;
    message.icaTimeoutNanos = (object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null)
      ? Long.fromValue(object.icaTimeoutNanos)
      : Long.UZERO;
    message.bufferSize = (object.bufferSize !== undefined && object.bufferSize !== null)
      ? Long.fromValue(object.bufferSize)
      : Long.UZERO;
    message.ibcTimeoutBlocks = (object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null)
      ? Long.fromValue(object.ibcTimeoutBlocks)
      : Long.UZERO;
    message.feeTransferTimeoutNanos =
      (object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null)
        ? Long.fromValue(object.feeTransferTimeoutNanos)
        : Long.UZERO;
    message.maxStakeIcaCallsPerEpoch =
      (object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null)
        ? Long.fromValue(object.maxStakeIcaCallsPerEpoch)
        : Long.UZERO;
    message.safetyMinRedemptionRateThreshold =
      (object.safetyMinRedemptionRateThreshold !== undefined && object.safetyMinRedemptionRateThreshold !== null)
        ? Long.fromValue(object.safetyMinRedemptionRateThreshold)
        : Long.UZERO;
    message.safetyMaxRedemptionRateThreshold =
      (object.safetyMaxRedemptionRateThreshold !== undefined && object.safetyMaxRedemptionRateThreshold !== null)
        ? Long.fromValue(object.safetyMaxRedemptionRateThreshold)
        : Long.UZERO;
    message.ibcTransferTimeoutNanos =
      (object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null)
        ? Long.fromValue(object.ibcTransferTimeoutNanos)
        : Long.UZERO;
    message.safetyNumValidators = (object.safetyNumValidators !== undefined && object.safetyNumValidators !== null)
      ? Long.fromValue(object.safetyNumValidators)
      : Long.UZERO;
    return message;
  },
};

function createBaseParams_ZoneComAddressEntry(): Params_ZoneComAddressEntry {
  return { key: "", value: "" };
}

export const Params_ZoneComAddressEntry = {
  encode(message: Params_ZoneComAddressEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params_ZoneComAddressEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_ZoneComAddressEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params_ZoneComAddressEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Params_ZoneComAddressEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params_ZoneComAddressEntry>, I>>(base?: I): Params_ZoneComAddressEntry {
    return Params_ZoneComAddressEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params_ZoneComAddressEntry>, I>>(object: I): Params_ZoneComAddressEntry {
    const message = createBaseParams_ZoneComAddressEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
