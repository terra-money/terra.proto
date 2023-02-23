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
  safetyMaxSlashPercent: Long;
}

export interface Params_ZoneComAddressEntry {
  key: string;
  value: string;
}

const baseParams: object = {
  rewardsInterval: Long.UZERO,
  delegateInterval: Long.UZERO,
  depositInterval: Long.UZERO,
  redemptionRateInterval: Long.UZERO,
  strideCommission: Long.UZERO,
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
  safetyMaxSlashPercent: Long.UZERO,
};

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
    if (!message.safetyMaxSlashPercent.isZero()) {
      writer.uint32(144).uint64(message.safetyMaxSlashPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.zoneComAddress = {};
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
        case 18:
          message.safetyMaxSlashPercent = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.zoneComAddress = {};
    if (object.rewardsInterval !== undefined && object.rewardsInterval !== null) {
      message.rewardsInterval = Long.fromString(object.rewardsInterval);
    } else {
      message.rewardsInterval = Long.UZERO;
    }
    if (object.delegateInterval !== undefined && object.delegateInterval !== null) {
      message.delegateInterval = Long.fromString(object.delegateInterval);
    } else {
      message.delegateInterval = Long.UZERO;
    }
    if (object.depositInterval !== undefined && object.depositInterval !== null) {
      message.depositInterval = Long.fromString(object.depositInterval);
    } else {
      message.depositInterval = Long.UZERO;
    }
    if (object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null) {
      message.redemptionRateInterval = Long.fromString(object.redemptionRateInterval);
    } else {
      message.redemptionRateInterval = Long.UZERO;
    }
    if (object.strideCommission !== undefined && object.strideCommission !== null) {
      message.strideCommission = Long.fromString(object.strideCommission);
    } else {
      message.strideCommission = Long.UZERO;
    }
    if (object.zoneComAddress !== undefined && object.zoneComAddress !== null) {
      Object.entries(object.zoneComAddress).forEach(([key, value]) => {
        message.zoneComAddress[key] = String(value);
      });
    }
    if (object.reinvestInterval !== undefined && object.reinvestInterval !== null) {
      message.reinvestInterval = Long.fromString(object.reinvestInterval);
    } else {
      message.reinvestInterval = Long.UZERO;
    }
    if (object.validatorRebalancingThreshold !== undefined && object.validatorRebalancingThreshold !== null) {
      message.validatorRebalancingThreshold = Long.fromString(object.validatorRebalancingThreshold);
    } else {
      message.validatorRebalancingThreshold = Long.UZERO;
    }
    if (object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null) {
      message.icaTimeoutNanos = Long.fromString(object.icaTimeoutNanos);
    } else {
      message.icaTimeoutNanos = Long.UZERO;
    }
    if (object.bufferSize !== undefined && object.bufferSize !== null) {
      message.bufferSize = Long.fromString(object.bufferSize);
    } else {
      message.bufferSize = Long.UZERO;
    }
    if (object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null) {
      message.ibcTimeoutBlocks = Long.fromString(object.ibcTimeoutBlocks);
    } else {
      message.ibcTimeoutBlocks = Long.UZERO;
    }
    if (object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null) {
      message.feeTransferTimeoutNanos = Long.fromString(object.feeTransferTimeoutNanos);
    } else {
      message.feeTransferTimeoutNanos = Long.UZERO;
    }
    if (object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null) {
      message.maxStakeIcaCallsPerEpoch = Long.fromString(object.maxStakeIcaCallsPerEpoch);
    } else {
      message.maxStakeIcaCallsPerEpoch = Long.UZERO;
    }
    if (
      object.safetyMinRedemptionRateThreshold !== undefined &&
      object.safetyMinRedemptionRateThreshold !== null
    ) {
      message.safetyMinRedemptionRateThreshold = Long.fromString(object.safetyMinRedemptionRateThreshold);
    } else {
      message.safetyMinRedemptionRateThreshold = Long.UZERO;
    }
    if (
      object.safetyMaxRedemptionRateThreshold !== undefined &&
      object.safetyMaxRedemptionRateThreshold !== null
    ) {
      message.safetyMaxRedemptionRateThreshold = Long.fromString(object.safetyMaxRedemptionRateThreshold);
    } else {
      message.safetyMaxRedemptionRateThreshold = Long.UZERO;
    }
    if (object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null) {
      message.ibcTransferTimeoutNanos = Long.fromString(object.ibcTransferTimeoutNanos);
    } else {
      message.ibcTransferTimeoutNanos = Long.UZERO;
    }
    if (object.safetyNumValidators !== undefined && object.safetyNumValidators !== null) {
      message.safetyNumValidators = Long.fromString(object.safetyNumValidators);
    } else {
      message.safetyNumValidators = Long.UZERO;
    }
    if (object.safetyMaxSlashPercent !== undefined && object.safetyMaxSlashPercent !== null) {
      message.safetyMaxSlashPercent = Long.fromString(object.safetyMaxSlashPercent);
    } else {
      message.safetyMaxSlashPercent = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardsInterval !== undefined &&
      (obj.rewardsInterval = (message.rewardsInterval || Long.UZERO).toString());
    message.delegateInterval !== undefined &&
      (obj.delegateInterval = (message.delegateInterval || Long.UZERO).toString());
    message.depositInterval !== undefined &&
      (obj.depositInterval = (message.depositInterval || Long.UZERO).toString());
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
    message.icaTimeoutNanos !== undefined &&
      (obj.icaTimeoutNanos = (message.icaTimeoutNanos || Long.UZERO).toString());
    message.bufferSize !== undefined && (obj.bufferSize = (message.bufferSize || Long.UZERO).toString());
    message.ibcTimeoutBlocks !== undefined &&
      (obj.ibcTimeoutBlocks = (message.ibcTimeoutBlocks || Long.UZERO).toString());
    message.feeTransferTimeoutNanos !== undefined &&
      (obj.feeTransferTimeoutNanos = (message.feeTransferTimeoutNanos || Long.UZERO).toString());
    message.maxStakeIcaCallsPerEpoch !== undefined &&
      (obj.maxStakeIcaCallsPerEpoch = (message.maxStakeIcaCallsPerEpoch || Long.UZERO).toString());
    message.safetyMinRedemptionRateThreshold !== undefined &&
      (obj.safetyMinRedemptionRateThreshold = (
        message.safetyMinRedemptionRateThreshold || Long.UZERO
      ).toString());
    message.safetyMaxRedemptionRateThreshold !== undefined &&
      (obj.safetyMaxRedemptionRateThreshold = (
        message.safetyMaxRedemptionRateThreshold || Long.UZERO
      ).toString());
    message.ibcTransferTimeoutNanos !== undefined &&
      (obj.ibcTransferTimeoutNanos = (message.ibcTransferTimeoutNanos || Long.UZERO).toString());
    message.safetyNumValidators !== undefined &&
      (obj.safetyNumValidators = (message.safetyNumValidators || Long.UZERO).toString());
    message.safetyMaxSlashPercent !== undefined &&
      (obj.safetyMaxSlashPercent = (message.safetyMaxSlashPercent || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.zoneComAddress = {};
    if (object.rewardsInterval !== undefined && object.rewardsInterval !== null) {
      message.rewardsInterval = object.rewardsInterval as Long;
    } else {
      message.rewardsInterval = Long.UZERO;
    }
    if (object.delegateInterval !== undefined && object.delegateInterval !== null) {
      message.delegateInterval = object.delegateInterval as Long;
    } else {
      message.delegateInterval = Long.UZERO;
    }
    if (object.depositInterval !== undefined && object.depositInterval !== null) {
      message.depositInterval = object.depositInterval as Long;
    } else {
      message.depositInterval = Long.UZERO;
    }
    if (object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null) {
      message.redemptionRateInterval = object.redemptionRateInterval as Long;
    } else {
      message.redemptionRateInterval = Long.UZERO;
    }
    if (object.strideCommission !== undefined && object.strideCommission !== null) {
      message.strideCommission = object.strideCommission as Long;
    } else {
      message.strideCommission = Long.UZERO;
    }
    if (object.zoneComAddress !== undefined && object.zoneComAddress !== null) {
      Object.entries(object.zoneComAddress).forEach(([key, value]) => {
        if (value !== undefined) {
          message.zoneComAddress[key] = String(value);
        }
      });
    }
    if (object.reinvestInterval !== undefined && object.reinvestInterval !== null) {
      message.reinvestInterval = object.reinvestInterval as Long;
    } else {
      message.reinvestInterval = Long.UZERO;
    }
    if (object.validatorRebalancingThreshold !== undefined && object.validatorRebalancingThreshold !== null) {
      message.validatorRebalancingThreshold = object.validatorRebalancingThreshold as Long;
    } else {
      message.validatorRebalancingThreshold = Long.UZERO;
    }
    if (object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null) {
      message.icaTimeoutNanos = object.icaTimeoutNanos as Long;
    } else {
      message.icaTimeoutNanos = Long.UZERO;
    }
    if (object.bufferSize !== undefined && object.bufferSize !== null) {
      message.bufferSize = object.bufferSize as Long;
    } else {
      message.bufferSize = Long.UZERO;
    }
    if (object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null) {
      message.ibcTimeoutBlocks = object.ibcTimeoutBlocks as Long;
    } else {
      message.ibcTimeoutBlocks = Long.UZERO;
    }
    if (object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null) {
      message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos as Long;
    } else {
      message.feeTransferTimeoutNanos = Long.UZERO;
    }
    if (object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null) {
      message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch as Long;
    } else {
      message.maxStakeIcaCallsPerEpoch = Long.UZERO;
    }
    if (
      object.safetyMinRedemptionRateThreshold !== undefined &&
      object.safetyMinRedemptionRateThreshold !== null
    ) {
      message.safetyMinRedemptionRateThreshold = object.safetyMinRedemptionRateThreshold as Long;
    } else {
      message.safetyMinRedemptionRateThreshold = Long.UZERO;
    }
    if (
      object.safetyMaxRedemptionRateThreshold !== undefined &&
      object.safetyMaxRedemptionRateThreshold !== null
    ) {
      message.safetyMaxRedemptionRateThreshold = object.safetyMaxRedemptionRateThreshold as Long;
    } else {
      message.safetyMaxRedemptionRateThreshold = Long.UZERO;
    }
    if (object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null) {
      message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos as Long;
    } else {
      message.ibcTransferTimeoutNanos = Long.UZERO;
    }
    if (object.safetyNumValidators !== undefined && object.safetyNumValidators !== null) {
      message.safetyNumValidators = object.safetyNumValidators as Long;
    } else {
      message.safetyNumValidators = Long.UZERO;
    }
    if (object.safetyMaxSlashPercent !== undefined && object.safetyMaxSlashPercent !== null) {
      message.safetyMaxSlashPercent = object.safetyMaxSlashPercent as Long;
    } else {
      message.safetyMaxSlashPercent = Long.UZERO;
    }
    return message;
  },
};

const baseParams_ZoneComAddressEntry: object = { key: "", value: "" };

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
    const message = { ...baseParams_ZoneComAddressEntry } as Params_ZoneComAddressEntry;
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
    const message = { ...baseParams_ZoneComAddressEntry } as Params_ZoneComAddressEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Params_ZoneComAddressEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Params_ZoneComAddressEntry>): Params_ZoneComAddressEntry {
    const message = { ...baseParams_ZoneComAddressEntry } as Params_ZoneComAddressEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
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
