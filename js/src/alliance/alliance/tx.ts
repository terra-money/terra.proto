/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "../../alliance/alliance/params";
import { Duration } from "../../google/protobuf/duration";
import { RewardWeightRange } from "../../alliance/alliance/alliance";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "alliance.alliance";

export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

export interface MsgDelegateResponse {}

export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

export interface MsgUndelegateResponse {}

export interface MsgRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount?: Coin;
}

export interface MsgRedelegateResponse {}

export interface MsgClaimDelegationRewards {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}

export interface MsgClaimDelegationRewardsResponse {}

export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

export interface MsgCreateAlliance {
  authority: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
   * will be redirected to the distribution rewards pool
   */
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange?: RewardWeightRange;
}

export interface MsgCreateAllianceResponse {}

export interface MsgUpdateAlliance {
  authority: string;
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.
   */
  rewardWeight: string;
  takeRate: string;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
}

export interface MsgUpdateAllianceResponse {}

export interface MsgDeleteAlliance {
  authority: string;
  denom: string;
}

export interface MsgDeleteAllianceResponse {}

const baseMsgDelegate: object = { delegatorAddress: "", validatorAddress: "" };

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegate } as MsgDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = { ...baseMsgDelegate } as MsgDelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgDelegateResponse: object = {};

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = { ...baseMsgDelegateResponse } as MsgDelegateResponse;
    return message;
  },
};

const baseMsgUndelegate: object = { delegatorAddress: "", validatorAddress: "" };

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = { ...baseMsgUndelegate } as MsgUndelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgUndelegateResponse: object = {};

export const MsgUndelegateResponse = {
  encode(_: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUndelegateResponse {
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
    return message;
  },

  toJSON(_: MsgUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = { ...baseMsgUndelegateResponse } as MsgUndelegateResponse;
    return message;
  },
};

const baseMsgRedelegate: object = { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "" };

export const MsgRedelegate = {
  encode(message: MsgRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegate {
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = String(object.validatorSrcAddress);
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = String(object.validatorDstAddress);
    } else {
      message.validatorDstAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedelegate>): MsgRedelegate {
    const message = { ...baseMsgRedelegate } as MsgRedelegate;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = object.validatorSrcAddress;
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = object.validatorDstAddress;
    } else {
      message.validatorDstAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgRedelegateResponse: object = {};

export const MsgRedelegateResponse = {
  encode(_: MsgRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRedelegateResponse {
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
    return message;
  },

  toJSON(_: MsgRedelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedelegateResponse>): MsgRedelegateResponse {
    const message = { ...baseMsgRedelegateResponse } as MsgRedelegateResponse;
    return message;
  },
};

const baseMsgClaimDelegationRewards: object = { delegatorAddress: "", validatorAddress: "", denom: "" };

export const MsgClaimDelegationRewards = {
  encode(message: MsgClaimDelegationRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegationRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimDelegationRewards } as MsgClaimDelegationRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimDelegationRewards {
    const message = { ...baseMsgClaimDelegationRewards } as MsgClaimDelegationRewards;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgClaimDelegationRewards): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimDelegationRewards>): MsgClaimDelegationRewards {
    const message = { ...baseMsgClaimDelegationRewards } as MsgClaimDelegationRewards;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgClaimDelegationRewardsResponse: object = {};

export const MsgClaimDelegationRewardsResponse = {
  encode(_: MsgClaimDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimDelegationRewardsResponse } as MsgClaimDelegationRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimDelegationRewardsResponse {
    const message = { ...baseMsgClaimDelegationRewardsResponse } as MsgClaimDelegationRewardsResponse;
    return message;
  },

  toJSON(_: MsgClaimDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimDelegationRewardsResponse>): MsgClaimDelegationRewardsResponse {
    const message = { ...baseMsgClaimDelegationRewardsResponse } as MsgClaimDelegationRewardsResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgCreateAlliance: object = {
  authority: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgCreateAlliance = {
  encode(message: MsgCreateAlliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = reader.string();
          break;
        case 4:
          message.takeRate = reader.string();
          break;
        case 5:
          message.rewardChangeRate = reader.string();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAlliance {
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = String(object.rewardWeight);
    } else {
      message.rewardWeight = "";
    }
    if (object.takeRate !== undefined && object.takeRate !== null) {
      message.takeRate = String(object.takeRate);
    } else {
      message.takeRate = "";
    }
    if (object.rewardChangeRate !== undefined && object.rewardChangeRate !== null) {
      message.rewardChangeRate = String(object.rewardChangeRate);
    } else {
      message.rewardChangeRate = "";
    }
    if (object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null) {
      message.rewardChangeInterval = Duration.fromJSON(object.rewardChangeInterval);
    } else {
      message.rewardChangeInterval = undefined;
    }
    if (object.rewardWeightRange !== undefined && object.rewardWeightRange !== null) {
      message.rewardWeightRange = RewardWeightRange.fromJSON(object.rewardWeightRange);
    } else {
      message.rewardWeightRange = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    message.rewardWeightRange !== undefined &&
      (obj.rewardWeightRange = message.rewardWeightRange
        ? RewardWeightRange.toJSON(message.rewardWeightRange)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAlliance>): MsgCreateAlliance {
    const message = { ...baseMsgCreateAlliance } as MsgCreateAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = object.rewardWeight;
    } else {
      message.rewardWeight = "";
    }
    if (object.takeRate !== undefined && object.takeRate !== null) {
      message.takeRate = object.takeRate;
    } else {
      message.takeRate = "";
    }
    if (object.rewardChangeRate !== undefined && object.rewardChangeRate !== null) {
      message.rewardChangeRate = object.rewardChangeRate;
    } else {
      message.rewardChangeRate = "";
    }
    if (object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null) {
      message.rewardChangeInterval = Duration.fromPartial(object.rewardChangeInterval);
    } else {
      message.rewardChangeInterval = undefined;
    }
    if (object.rewardWeightRange !== undefined && object.rewardWeightRange !== null) {
      message.rewardWeightRange = RewardWeightRange.fromPartial(object.rewardWeightRange);
    } else {
      message.rewardWeightRange = undefined;
    }
    return message;
  },
};

const baseMsgCreateAllianceResponse: object = {};

export const MsgCreateAllianceResponse = {
  encode(_: MsgCreateAllianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAllianceResponse } as MsgCreateAllianceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateAllianceResponse {
    const message = { ...baseMsgCreateAllianceResponse } as MsgCreateAllianceResponse;
    return message;
  },

  toJSON(_: MsgCreateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateAllianceResponse>): MsgCreateAllianceResponse {
    const message = { ...baseMsgCreateAllianceResponse } as MsgCreateAllianceResponse;
    return message;
  },
};

const baseMsgUpdateAlliance: object = {
  authority: "",
  denom: "",
  rewardWeight: "",
  takeRate: "",
  rewardChangeRate: "",
};

export const MsgUpdateAlliance = {
  encode(message: MsgUpdateAlliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(34).string(message.takeRate);
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(42).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.rewardWeight = reader.string();
          break;
        case 4:
          message.takeRate = reader.string();
          break;
        case 5:
          message.rewardChangeRate = reader.string();
          break;
        case 6:
          message.rewardChangeInterval = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAlliance {
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = String(object.rewardWeight);
    } else {
      message.rewardWeight = "";
    }
    if (object.takeRate !== undefined && object.takeRate !== null) {
      message.takeRate = String(object.takeRate);
    } else {
      message.takeRate = "";
    }
    if (object.rewardChangeRate !== undefined && object.rewardChangeRate !== null) {
      message.rewardChangeRate = String(object.rewardChangeRate);
    } else {
      message.rewardChangeRate = "";
    }
    if (object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null) {
      message.rewardChangeInterval = Duration.fromJSON(object.rewardChangeInterval);
    } else {
      message.rewardChangeInterval = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined &&
      (obj.rewardChangeInterval = message.rewardChangeInterval
        ? Duration.toJSON(message.rewardChangeInterval)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAlliance>): MsgUpdateAlliance {
    const message = { ...baseMsgUpdateAlliance } as MsgUpdateAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.rewardWeight !== undefined && object.rewardWeight !== null) {
      message.rewardWeight = object.rewardWeight;
    } else {
      message.rewardWeight = "";
    }
    if (object.takeRate !== undefined && object.takeRate !== null) {
      message.takeRate = object.takeRate;
    } else {
      message.takeRate = "";
    }
    if (object.rewardChangeRate !== undefined && object.rewardChangeRate !== null) {
      message.rewardChangeRate = object.rewardChangeRate;
    } else {
      message.rewardChangeRate = "";
    }
    if (object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null) {
      message.rewardChangeInterval = Duration.fromPartial(object.rewardChangeInterval);
    } else {
      message.rewardChangeInterval = undefined;
    }
    return message;
  },
};

const baseMsgUpdateAllianceResponse: object = {};

export const MsgUpdateAllianceResponse = {
  encode(_: MsgUpdateAllianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAllianceResponse } as MsgUpdateAllianceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAllianceResponse {
    const message = { ...baseMsgUpdateAllianceResponse } as MsgUpdateAllianceResponse;
    return message;
  },

  toJSON(_: MsgUpdateAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateAllianceResponse>): MsgUpdateAllianceResponse {
    const message = { ...baseMsgUpdateAllianceResponse } as MsgUpdateAllianceResponse;
    return message;
  },
};

const baseMsgDeleteAlliance: object = { authority: "", denom: "" };

export const MsgDeleteAlliance = {
  encode(message: MsgDeleteAlliance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAlliance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAlliance {
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAlliance): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAlliance>): MsgDeleteAlliance {
    const message = { ...baseMsgDeleteAlliance } as MsgDeleteAlliance;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgDeleteAllianceResponse: object = {};

export const MsgDeleteAllianceResponse = {
  encode(_: MsgDeleteAllianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAllianceResponse } as MsgDeleteAllianceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAllianceResponse {
    const message = { ...baseMsgDeleteAllianceResponse } as MsgDeleteAllianceResponse;
    return message;
  },

  toJSON(_: MsgDeleteAllianceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteAllianceResponse>): MsgDeleteAllianceResponse {
    const message = { ...baseMsgDeleteAllianceResponse } as MsgDeleteAllianceResponse;
    return message;
  },
};

export interface Msg {
  Delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
  Redelegate(request: DeepPartial<MsgRedelegate>, metadata?: grpc.Metadata): Promise<MsgRedelegateResponse>;
  Undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
  ClaimDelegationRewards(
    request: DeepPartial<MsgClaimDelegationRewards>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimDelegationRewardsResponse>;
  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse>;
  CreateAlliance(
    request: DeepPartial<MsgCreateAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateAllianceResponse>;
  UpdateAlliance(
    request: DeepPartial<MsgUpdateAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateAllianceResponse>;
  DeleteAlliance(
    request: DeepPartial<MsgDeleteAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteAllianceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Delegate = this.Delegate.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.ClaimDelegationRewards = this.ClaimDelegationRewards.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateAlliance = this.CreateAlliance.bind(this);
    this.UpdateAlliance = this.UpdateAlliance.bind(this);
    this.DeleteAlliance = this.DeleteAlliance.bind(this);
  }

  Delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegateDesc, MsgDelegate.fromPartial(request), metadata);
  }

  Redelegate(request: DeepPartial<MsgRedelegate>, metadata?: grpc.Metadata): Promise<MsgRedelegateResponse> {
    return this.rpc.unary(MsgRedelegateDesc, MsgRedelegate.fromPartial(request), metadata);
  }

  Undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegateDesc, MsgUndelegate.fromPartial(request), metadata);
  }

  ClaimDelegationRewards(
    request: DeepPartial<MsgClaimDelegationRewards>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimDelegationRewardsResponse> {
    return this.rpc.unary(
      MsgClaimDelegationRewardsDesc,
      MsgClaimDelegationRewards.fromPartial(request),
      metadata,
    );
  }

  UpdateParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }

  CreateAlliance(
    request: DeepPartial<MsgCreateAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateAllianceResponse> {
    return this.rpc.unary(MsgCreateAllianceDesc, MsgCreateAlliance.fromPartial(request), metadata);
  }

  UpdateAlliance(
    request: DeepPartial<MsgUpdateAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateAllianceResponse> {
    return this.rpc.unary(MsgUpdateAllianceDesc, MsgUpdateAlliance.fromPartial(request), metadata);
  }

  DeleteAlliance(
    request: DeepPartial<MsgDeleteAlliance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteAllianceResponse> {
    return this.rpc.unary(MsgDeleteAllianceDesc, MsgDeleteAlliance.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "alliance.alliance.Msg",
};

export const MsgDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Delegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDelegate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDelegateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRedelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Redelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRedelegate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedelegateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUndelegate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUndelegateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgClaimDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimDelegationRewards",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimDelegationRewards.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCreateAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAlliance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateAlliance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateAllianceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateAlliance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateAlliance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateAllianceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDeleteAllianceDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteAlliance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteAlliance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteAllianceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
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
