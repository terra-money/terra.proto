/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "feemarket.feemarket.v1";

/**
 * Params contains the required set of parameters for the EIP1559 fee market
 * plugin implementation.
 */
export interface Params {
  /**
   * Alpha is the amount we additively increase the learning rate
   * when it is above or below the target +/- threshold.
   */
  alpha: string;
  /**
   * Beta is the amount we multiplicatively decrease the learning rate
   * when it is within the target +/- threshold.
   */
  beta: string;
  /**
   * Theta is the threshold for the learning rate. If the learning rate is
   * above or below the target +/- threshold, we additively increase the
   * learning rate by Alpha. Otherwise, we multiplicatively decrease the
   * learning rate by Beta.
   */
  theta: string;
  /** MinLearningRate is the lower bound for the learning rate. */
  minLearningRate: string;
  /** MaxLearningRate is the upper bound for the learning rate. */
  maxLearningRate: string;
  /** TargetBlockUtilization is the target block utilization. */
  targetBlockUtilization: Long;
  /** MaxBlockUtilization is the maximum block utilization. */
  maxBlockUtilization: Long;
  /**
   * Window defines the window size for calculating an adaptive learning rate
   * over a moving window of blocks.
   */
  window: Long;
  /**
   * Enabled is a boolean that determines whether the EIP1559 fee market is
   * enabled.
   */
  enabled: boolean;
  /**
   * DefaultFeeDenom is the default fee denom for the EIP1559 fee market
   * used to simulate transactions if there are no fees specified
   */
  defaultFeeDenom: string;
}

const baseParams: object = {
  alpha: "",
  beta: "",
  theta: "",
  minLearningRate: "",
  maxLearningRate: "",
  targetBlockUtilization: Long.UZERO,
  maxBlockUtilization: Long.UZERO,
  window: Long.UZERO,
  enabled: false,
  defaultFeeDenom: "",
};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alpha !== "") {
      writer.uint32(10).string(message.alpha);
    }
    if (message.beta !== "") {
      writer.uint32(18).string(message.beta);
    }
    if (message.theta !== "") {
      writer.uint32(26).string(message.theta);
    }
    if (message.minLearningRate !== "") {
      writer.uint32(34).string(message.minLearningRate);
    }
    if (message.maxLearningRate !== "") {
      writer.uint32(42).string(message.maxLearningRate);
    }
    if (!message.targetBlockUtilization.isZero()) {
      writer.uint32(48).uint64(message.targetBlockUtilization);
    }
    if (!message.maxBlockUtilization.isZero()) {
      writer.uint32(56).uint64(message.maxBlockUtilization);
    }
    if (!message.window.isZero()) {
      writer.uint32(64).uint64(message.window);
    }
    if (message.enabled === true) {
      writer.uint32(72).bool(message.enabled);
    }
    if (message.defaultFeeDenom !== "") {
      writer.uint32(82).string(message.defaultFeeDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alpha = reader.string();
          break;
        case 2:
          message.beta = reader.string();
          break;
        case 3:
          message.theta = reader.string();
          break;
        case 4:
          message.minLearningRate = reader.string();
          break;
        case 5:
          message.maxLearningRate = reader.string();
          break;
        case 6:
          message.targetBlockUtilization = reader.uint64() as Long;
          break;
        case 7:
          message.maxBlockUtilization = reader.uint64() as Long;
          break;
        case 8:
          message.window = reader.uint64() as Long;
          break;
        case 9:
          message.enabled = reader.bool();
          break;
        case 10:
          message.defaultFeeDenom = reader.string();
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
    if (object.alpha !== undefined && object.alpha !== null) {
      message.alpha = String(object.alpha);
    } else {
      message.alpha = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = String(object.beta);
    } else {
      message.beta = "";
    }
    if (object.theta !== undefined && object.theta !== null) {
      message.theta = String(object.theta);
    } else {
      message.theta = "";
    }
    if (object.minLearningRate !== undefined && object.minLearningRate !== null) {
      message.minLearningRate = String(object.minLearningRate);
    } else {
      message.minLearningRate = "";
    }
    if (object.maxLearningRate !== undefined && object.maxLearningRate !== null) {
      message.maxLearningRate = String(object.maxLearningRate);
    } else {
      message.maxLearningRate = "";
    }
    if (object.targetBlockUtilization !== undefined && object.targetBlockUtilization !== null) {
      message.targetBlockUtilization = Long.fromString(object.targetBlockUtilization);
    } else {
      message.targetBlockUtilization = Long.UZERO;
    }
    if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
      message.maxBlockUtilization = Long.fromString(object.maxBlockUtilization);
    } else {
      message.maxBlockUtilization = Long.UZERO;
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = Long.fromString(object.window);
    } else {
      message.window = Long.UZERO;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.defaultFeeDenom !== undefined && object.defaultFeeDenom !== null) {
      message.defaultFeeDenom = String(object.defaultFeeDenom);
    } else {
      message.defaultFeeDenom = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.beta !== undefined && (obj.beta = message.beta);
    message.theta !== undefined && (obj.theta = message.theta);
    message.minLearningRate !== undefined && (obj.minLearningRate = message.minLearningRate);
    message.maxLearningRate !== undefined && (obj.maxLearningRate = message.maxLearningRate);
    message.targetBlockUtilization !== undefined &&
      (obj.targetBlockUtilization = (message.targetBlockUtilization || Long.UZERO).toString());
    message.maxBlockUtilization !== undefined &&
      (obj.maxBlockUtilization = (message.maxBlockUtilization || Long.UZERO).toString());
    message.window !== undefined && (obj.window = (message.window || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.defaultFeeDenom !== undefined && (obj.defaultFeeDenom = message.defaultFeeDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.alpha !== undefined && object.alpha !== null) {
      message.alpha = object.alpha;
    } else {
      message.alpha = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = object.beta;
    } else {
      message.beta = "";
    }
    if (object.theta !== undefined && object.theta !== null) {
      message.theta = object.theta;
    } else {
      message.theta = "";
    }
    if (object.minLearningRate !== undefined && object.minLearningRate !== null) {
      message.minLearningRate = object.minLearningRate;
    } else {
      message.minLearningRate = "";
    }
    if (object.maxLearningRate !== undefined && object.maxLearningRate !== null) {
      message.maxLearningRate = object.maxLearningRate;
    } else {
      message.maxLearningRate = "";
    }
    if (object.targetBlockUtilization !== undefined && object.targetBlockUtilization !== null) {
      message.targetBlockUtilization = object.targetBlockUtilization as Long;
    } else {
      message.targetBlockUtilization = Long.UZERO;
    }
    if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
      message.maxBlockUtilization = object.maxBlockUtilization as Long;
    } else {
      message.maxBlockUtilization = Long.UZERO;
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = object.window as Long;
    } else {
      message.window = Long.UZERO;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.defaultFeeDenom !== undefined && object.defaultFeeDenom !== null) {
      message.defaultFeeDenom = object.defaultFeeDenom;
    } else {
      message.defaultFeeDenom = "";
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
