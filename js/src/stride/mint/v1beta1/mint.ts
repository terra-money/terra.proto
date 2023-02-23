/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.mint.v1beta1";

/** Minter represents the minting state. */
export interface Minter {
  /** current epoch provisions */
  epochProvisions: string;
}

/** next id: 5 */
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */
  communityPoolGrowth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */
  communityPoolSecurityBudget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */
  strategicReserve: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** epoch provisions from the first epoch */
  genesisEpochProvisions: string;
  /** mint epoch identifier */
  epochIdentifier: string;
  /** number of epochs take to reduce rewards */
  reductionPeriodInEpochs: Long;
  /** reduction multiplier to execute on each period */
  reductionFactor: string;
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions?: DistributionProportions;
  /** start epoch to distribute minting rewards */
  mintingRewardsDistributionStartEpoch: Long;
}

const baseMinter: object = { epochProvisions: "" };

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinter } as Minter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Minter {
    const message = { ...baseMinter } as Minter;
    if (object.epochProvisions !== undefined && object.epochProvisions !== null) {
      message.epochProvisions = String(object.epochProvisions);
    } else {
      message.epochProvisions = "";
    }
    return message;
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = { ...baseMinter } as Minter;
    if (object.epochProvisions !== undefined && object.epochProvisions !== null) {
      message.epochProvisions = object.epochProvisions;
    } else {
      message.epochProvisions = "";
    }
    return message;
  },
};

const baseDistributionProportions: object = {
  staking: "",
  communityPoolGrowth: "",
  communityPoolSecurityBudget: "",
  strategicReserve: "",
};

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.communityPoolGrowth !== "") {
      writer.uint32(18).string(message.communityPoolGrowth);
    }
    if (message.communityPoolSecurityBudget !== "") {
      writer.uint32(26).string(message.communityPoolSecurityBudget);
    }
    if (message.strategicReserve !== "") {
      writer.uint32(34).string(message.strategicReserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDistributionProportions } as DistributionProportions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;
        case 2:
          message.communityPoolGrowth = reader.string();
          break;
        case 3:
          message.communityPoolSecurityBudget = reader.string();
          break;
        case 4:
          message.strategicReserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DistributionProportions {
    const message = { ...baseDistributionProportions } as DistributionProportions;
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = String(object.staking);
    } else {
      message.staking = "";
    }
    if (object.communityPoolGrowth !== undefined && object.communityPoolGrowth !== null) {
      message.communityPoolGrowth = String(object.communityPoolGrowth);
    } else {
      message.communityPoolGrowth = "";
    }
    if (object.communityPoolSecurityBudget !== undefined && object.communityPoolSecurityBudget !== null) {
      message.communityPoolSecurityBudget = String(object.communityPoolSecurityBudget);
    } else {
      message.communityPoolSecurityBudget = "";
    }
    if (object.strategicReserve !== undefined && object.strategicReserve !== null) {
      message.strategicReserve = String(object.strategicReserve);
    } else {
      message.strategicReserve = "";
    }
    return message;
  },

  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking);
    message.communityPoolGrowth !== undefined && (obj.communityPoolGrowth = message.communityPoolGrowth);
    message.communityPoolSecurityBudget !== undefined &&
      (obj.communityPoolSecurityBudget = message.communityPoolSecurityBudget);
    message.strategicReserve !== undefined && (obj.strategicReserve = message.strategicReserve);
    return obj;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = { ...baseDistributionProportions } as DistributionProportions;
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    } else {
      message.staking = "";
    }
    if (object.communityPoolGrowth !== undefined && object.communityPoolGrowth !== null) {
      message.communityPoolGrowth = object.communityPoolGrowth;
    } else {
      message.communityPoolGrowth = "";
    }
    if (object.communityPoolSecurityBudget !== undefined && object.communityPoolSecurityBudget !== null) {
      message.communityPoolSecurityBudget = object.communityPoolSecurityBudget;
    } else {
      message.communityPoolSecurityBudget = "";
    }
    if (object.strategicReserve !== undefined && object.strategicReserve !== null) {
      message.strategicReserve = object.strategicReserve;
    } else {
      message.strategicReserve = "";
    }
    return message;
  },
};

const baseParams: object = {
  mintDenom: "",
  genesisEpochProvisions: "",
  epochIdentifier: "",
  reductionPeriodInEpochs: Long.ZERO,
  reductionFactor: "",
  mintingRewardsDistributionStartEpoch: Long.ZERO,
};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = reader.string();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64() as Long;
          break;
        case 5:
          message.reductionFactor = reader.string();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.mintingRewardsDistributionStartEpoch = reader.int64() as Long;
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
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = String(object.mintDenom);
    } else {
      message.mintDenom = "";
    }
    if (object.genesisEpochProvisions !== undefined && object.genesisEpochProvisions !== null) {
      message.genesisEpochProvisions = String(object.genesisEpochProvisions);
    } else {
      message.genesisEpochProvisions = "";
    }
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = String(object.epochIdentifier);
    } else {
      message.epochIdentifier = "";
    }
    if (object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null) {
      message.reductionPeriodInEpochs = Long.fromString(object.reductionPeriodInEpochs);
    } else {
      message.reductionPeriodInEpochs = Long.ZERO;
    }
    if (object.reductionFactor !== undefined && object.reductionFactor !== null) {
      message.reductionFactor = String(object.reductionFactor);
    } else {
      message.reductionFactor = "";
    }
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromJSON(object.distributionProportions);
    } else {
      message.distributionProportions = undefined;
    }
    if (
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
    ) {
      message.mintingRewardsDistributionStartEpoch = Long.fromString(
        object.mintingRewardsDistributionStartEpoch,
      );
    } else {
      message.mintingRewardsDistributionStartEpoch = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.genesisEpochProvisions !== undefined &&
      (obj.genesisEpochProvisions = message.genesisEpochProvisions);
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.reductionPeriodInEpochs !== undefined &&
      (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || Long.ZERO).toString());
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined);
    message.mintingRewardsDistributionStartEpoch !== undefined &&
      (obj.mintingRewardsDistributionStartEpoch = (
        message.mintingRewardsDistributionStartEpoch || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = object.mintDenom;
    } else {
      message.mintDenom = "";
    }
    if (object.genesisEpochProvisions !== undefined && object.genesisEpochProvisions !== null) {
      message.genesisEpochProvisions = object.genesisEpochProvisions;
    } else {
      message.genesisEpochProvisions = "";
    }
    if (object.epochIdentifier !== undefined && object.epochIdentifier !== null) {
      message.epochIdentifier = object.epochIdentifier;
    } else {
      message.epochIdentifier = "";
    }
    if (object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null) {
      message.reductionPeriodInEpochs = object.reductionPeriodInEpochs as Long;
    } else {
      message.reductionPeriodInEpochs = Long.ZERO;
    }
    if (object.reductionFactor !== undefined && object.reductionFactor !== null) {
      message.reductionFactor = object.reductionFactor;
    } else {
      message.reductionFactor = "";
    }
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    } else {
      message.distributionProportions = undefined;
    }
    if (
      object.mintingRewardsDistributionStartEpoch !== undefined &&
      object.mintingRewardsDistributionStartEpoch !== null
    ) {
      message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch as Long;
    } else {
      message.mintingRewardsDistributionStartEpoch = Long.ZERO;
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
