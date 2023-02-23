/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import {
  ICAAccountType,
  iCAAccountTypeFromJSON,
  iCAAccountTypeToJSON,
} from "../../stride/stakeibc/ica_account";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "stride.stakeibc";

export interface MsgLiquidStake {
  creator: string;
  amount: string;
  /** TODO(TEST-86): Update Denom -> HostDenom */
  hostDenom: string;
}

export interface MsgLiquidStakeResponse {}

export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: string;
  channel: string;
}

export interface MsgClearBalanceResponse {}

export interface MsgRedeemStake {
  creator: string;
  amount: string;
  hostZone: string;
  receiver: string;
}

export interface MsgRedeemStakeResponse {}

/** next: 13 */
export interface MsgRegisterHostZone {
  connectionId: string;
  bech32prefix: string;
  hostDenom: string;
  ibcDenom: string;
  creator: string;
  transferChannelId: string;
  unbondingFrequency: Long;
}

/**
 * TODO(TEST-53): Remove this pre-launch (no need for clients to create /
 * interact with ICAs)
 */
export interface MsgRegisterHostZoneResponse {}

export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  hostZoneId: string;
  epoch: Long;
  sender: string;
}

export interface MsgClaimUndelegatedTokensResponse {}

export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: Long;
}

export interface MsgRebalanceValidatorsResponse {}

export interface MsgAddValidator {
  creator: string;
  hostZone: string;
  name: string;
  address: string;
  commission: Long;
  weight: Long;
}

export interface MsgAddValidatorResponse {}

export interface MsgChangeValidatorWeight {
  creator: string;
  hostZone: string;
  valAddr: string;
  weight: Long;
}

export interface MsgChangeValidatorWeightResponse {}

export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}

export interface MsgDeleteValidatorResponse {}

export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  accountType: ICAAccountType;
}

export interface MsgRestoreInterchainAccountResponse {}

export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}

export interface MsgUpdateValidatorSharesExchRateResponse {}

const baseMsgLiquidStake: object = { creator: "", amount: "", hostDenom: "" };

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidStake } as MsgLiquidStake;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.hostDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidStake {
    const message = { ...baseMsgLiquidStake } as MsgLiquidStake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = String(object.hostDenom);
    } else {
      message.hostDenom = "";
    }
    return message;
  },

  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake {
    const message = { ...baseMsgLiquidStake } as MsgLiquidStake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = object.hostDenom;
    } else {
      message.hostDenom = "";
    }
    return message;
  },
};

const baseMsgLiquidStakeResponse: object = {};

export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidStakeResponse } as MsgLiquidStakeResponse;
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

  fromJSON(_: any): MsgLiquidStakeResponse {
    const message = { ...baseMsgLiquidStakeResponse } as MsgLiquidStakeResponse;
    return message;
  },

  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = { ...baseMsgLiquidStakeResponse } as MsgLiquidStakeResponse;
    return message;
  },
};

const baseMsgClearBalance: object = { creator: "", chainId: "", amount: "", channel: "" };

export const MsgClearBalance = {
  encode(message: MsgClearBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClearBalance } as MsgClearBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClearBalance {
    const message = { ...baseMsgClearBalance } as MsgClearBalance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgClearBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance {
    const message = { ...baseMsgClearBalance } as MsgClearBalance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseMsgClearBalanceResponse: object = {};

export const MsgClearBalanceResponse = {
  encode(_: MsgClearBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClearBalanceResponse } as MsgClearBalanceResponse;
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

  fromJSON(_: any): MsgClearBalanceResponse {
    const message = { ...baseMsgClearBalanceResponse } as MsgClearBalanceResponse;
    return message;
  },

  toJSON(_: MsgClearBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = { ...baseMsgClearBalanceResponse } as MsgClearBalanceResponse;
    return message;
  },
};

const baseMsgRedeemStake: object = { creator: "", amount: "", hostZone: "", receiver: "" };

export const MsgRedeemStake = {
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemStake } as MsgRedeemStake;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.hostZone = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemStake {
    const message = { ...baseMsgRedeemStake } as MsgRedeemStake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = String(object.hostZone);
    } else {
      message.hostZone = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgRedeemStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake {
    const message = { ...baseMsgRedeemStake } as MsgRedeemStake;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = object.hostZone;
    } else {
      message.hostZone = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgRedeemStakeResponse: object = {};

export const MsgRedeemStakeResponse = {
  encode(_: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemStakeResponse } as MsgRedeemStakeResponse;
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

  fromJSON(_: any): MsgRedeemStakeResponse {
    const message = { ...baseMsgRedeemStakeResponse } as MsgRedeemStakeResponse;
    return message;
  },

  toJSON(_: MsgRedeemStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = { ...baseMsgRedeemStakeResponse } as MsgRedeemStakeResponse;
    return message;
  },
};

const baseMsgRegisterHostZone: object = {
  connectionId: "",
  bech32prefix: "",
  hostDenom: "",
  ibcDenom: "",
  creator: "",
  transferChannelId: "",
  unbondingFrequency: Long.UZERO,
};

export const MsgRegisterHostZone = {
  encode(message: MsgRegisterHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }
    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(82).string(message.transferChannelId);
    }
    if (!message.unbondingFrequency.isZero()) {
      writer.uint32(88).uint64(message.unbondingFrequency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterHostZone } as MsgRegisterHostZone;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.connectionId = reader.string();
          break;
        case 12:
          message.bech32prefix = reader.string();
          break;
        case 4:
          message.hostDenom = reader.string();
          break;
        case 5:
          message.ibcDenom = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 10:
          message.transferChannelId = reader.string();
          break;
        case 11:
          message.unbondingFrequency = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterHostZone {
    const message = { ...baseMsgRegisterHostZone } as MsgRegisterHostZone;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    if (object.bech32prefix !== undefined && object.bech32prefix !== null) {
      message.bech32prefix = String(object.bech32prefix);
    } else {
      message.bech32prefix = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = String(object.hostDenom);
    } else {
      message.hostDenom = "";
    }
    if (object.ibcDenom !== undefined && object.ibcDenom !== null) {
      message.ibcDenom = String(object.ibcDenom);
    } else {
      message.ibcDenom = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transferChannelId !== undefined && object.transferChannelId !== null) {
      message.transferChannelId = String(object.transferChannelId);
    } else {
      message.transferChannelId = "";
    }
    if (object.unbondingFrequency !== undefined && object.unbondingFrequency !== null) {
      message.unbondingFrequency = Long.fromString(object.unbondingFrequency);
    } else {
      message.unbondingFrequency = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgRegisterHostZone): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.bech32prefix !== undefined && (obj.bech32prefix = message.bech32prefix);
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
    message.creator !== undefined && (obj.creator = message.creator);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    message.unbondingFrequency !== undefined &&
      (obj.unbondingFrequency = (message.unbondingFrequency || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone {
    const message = { ...baseMsgRegisterHostZone } as MsgRegisterHostZone;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = "";
    }
    if (object.bech32prefix !== undefined && object.bech32prefix !== null) {
      message.bech32prefix = object.bech32prefix;
    } else {
      message.bech32prefix = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = object.hostDenom;
    } else {
      message.hostDenom = "";
    }
    if (object.ibcDenom !== undefined && object.ibcDenom !== null) {
      message.ibcDenom = object.ibcDenom;
    } else {
      message.ibcDenom = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transferChannelId !== undefined && object.transferChannelId !== null) {
      message.transferChannelId = object.transferChannelId;
    } else {
      message.transferChannelId = "";
    }
    if (object.unbondingFrequency !== undefined && object.unbondingFrequency !== null) {
      message.unbondingFrequency = object.unbondingFrequency as Long;
    } else {
      message.unbondingFrequency = Long.UZERO;
    }
    return message;
  },
};

const baseMsgRegisterHostZoneResponse: object = {};

export const MsgRegisterHostZoneResponse = {
  encode(_: MsgRegisterHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterHostZoneResponse } as MsgRegisterHostZoneResponse;
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

  fromJSON(_: any): MsgRegisterHostZoneResponse {
    const message = { ...baseMsgRegisterHostZoneResponse } as MsgRegisterHostZoneResponse;
    return message;
  },

  toJSON(_: MsgRegisterHostZoneResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = { ...baseMsgRegisterHostZoneResponse } as MsgRegisterHostZoneResponse;
    return message;
  },
};

const baseMsgClaimUndelegatedTokens: object = { creator: "", hostZoneId: "", epoch: Long.UZERO, sender: "" };

export const MsgClaimUndelegatedTokens = {
  encode(message: MsgClaimUndelegatedTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimUndelegatedTokens } as MsgClaimUndelegatedTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZoneId = reader.string();
          break;
        case 3:
          message.epoch = reader.uint64() as Long;
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimUndelegatedTokens {
    const message = { ...baseMsgClaimUndelegatedTokens } as MsgClaimUndelegatedTokens;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = Long.fromString(object.epoch);
    } else {
      message.epoch = Long.UZERO;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgClaimUndelegatedTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = { ...baseMsgClaimUndelegatedTokens } as MsgClaimUndelegatedTokens;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = object.epoch as Long;
    } else {
      message.epoch = Long.UZERO;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgClaimUndelegatedTokensResponse: object = {};

export const MsgClaimUndelegatedTokensResponse = {
  encode(_: MsgClaimUndelegatedTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimUndelegatedTokensResponse } as MsgClaimUndelegatedTokensResponse;
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

  fromJSON(_: any): MsgClaimUndelegatedTokensResponse {
    const message = { ...baseMsgClaimUndelegatedTokensResponse } as MsgClaimUndelegatedTokensResponse;
    return message;
  },

  toJSON(_: MsgClaimUndelegatedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = { ...baseMsgClaimUndelegatedTokensResponse } as MsgClaimUndelegatedTokensResponse;
    return message;
  },
};

const baseMsgRebalanceValidators: object = { creator: "", hostZone: "", numRebalance: Long.UZERO };

export const MsgRebalanceValidators = {
  encode(message: MsgRebalanceValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (!message.numRebalance.isZero()) {
      writer.uint32(24).uint64(message.numRebalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRebalanceValidators } as MsgRebalanceValidators;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.numRebalance = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRebalanceValidators {
    const message = { ...baseMsgRebalanceValidators } as MsgRebalanceValidators;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = String(object.hostZone);
    } else {
      message.hostZone = "";
    }
    if (object.numRebalance !== undefined && object.numRebalance !== null) {
      message.numRebalance = Long.fromString(object.numRebalance);
    } else {
      message.numRebalance = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgRebalanceValidators): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.numRebalance !== undefined &&
      (obj.numRebalance = (message.numRebalance || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = { ...baseMsgRebalanceValidators } as MsgRebalanceValidators;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = object.hostZone;
    } else {
      message.hostZone = "";
    }
    if (object.numRebalance !== undefined && object.numRebalance !== null) {
      message.numRebalance = object.numRebalance as Long;
    } else {
      message.numRebalance = Long.UZERO;
    }
    return message;
  },
};

const baseMsgRebalanceValidatorsResponse: object = {};

export const MsgRebalanceValidatorsResponse = {
  encode(_: MsgRebalanceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRebalanceValidatorsResponse } as MsgRebalanceValidatorsResponse;
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

  fromJSON(_: any): MsgRebalanceValidatorsResponse {
    const message = { ...baseMsgRebalanceValidatorsResponse } as MsgRebalanceValidatorsResponse;
    return message;
  },

  toJSON(_: MsgRebalanceValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = { ...baseMsgRebalanceValidatorsResponse } as MsgRebalanceValidatorsResponse;
    return message;
  },
};

const baseMsgAddValidator: object = {
  creator: "",
  hostZone: "",
  name: "",
  address: "",
  commission: Long.UZERO,
  weight: Long.UZERO,
};

export const MsgAddValidator = {
  encode(message: MsgAddValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (!message.commission.isZero()) {
      writer.uint32(40).uint64(message.commission);
    }
    if (!message.weight.isZero()) {
      writer.uint32(48).uint64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddValidator } as MsgAddValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.commission = reader.uint64() as Long;
          break;
        case 6:
          message.weight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddValidator {
    const message = { ...baseMsgAddValidator } as MsgAddValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = String(object.hostZone);
    } else {
      message.hostZone = "";
    }
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
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Long.fromString(object.commission);
    } else {
      message.commission = Long.UZERO;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Long.fromString(object.weight);
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgAddValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.commission !== undefined && (obj.commission = (message.commission || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddValidator>): MsgAddValidator {
    const message = { ...baseMsgAddValidator } as MsgAddValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = object.hostZone;
    } else {
      message.hostZone = "";
    }
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
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = object.commission as Long;
    } else {
      message.commission = Long.UZERO;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight as Long;
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },
};

const baseMsgAddValidatorResponse: object = {};

export const MsgAddValidatorResponse = {
  encode(_: MsgAddValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddValidatorResponse } as MsgAddValidatorResponse;
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

  fromJSON(_: any): MsgAddValidatorResponse {
    const message = { ...baseMsgAddValidatorResponse } as MsgAddValidatorResponse;
    return message;
  },

  toJSON(_: MsgAddValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddValidatorResponse>): MsgAddValidatorResponse {
    const message = { ...baseMsgAddValidatorResponse } as MsgAddValidatorResponse;
    return message;
  },
};

const baseMsgChangeValidatorWeight: object = { creator: "", hostZone: "", valAddr: "", weight: Long.UZERO };

export const MsgChangeValidatorWeight = {
  encode(message: MsgChangeValidatorWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (!message.weight.isZero()) {
      writer.uint32(32).uint64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeValidatorWeight } as MsgChangeValidatorWeight;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        case 4:
          message.weight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeValidatorWeight {
    const message = { ...baseMsgChangeValidatorWeight } as MsgChangeValidatorWeight;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = String(object.hostZone);
    } else {
      message.hostZone = "";
    }
    if (object.valAddr !== undefined && object.valAddr !== null) {
      message.valAddr = String(object.valAddr);
    } else {
      message.valAddr = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = Long.fromString(object.weight);
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgChangeValidatorWeight): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight {
    const message = { ...baseMsgChangeValidatorWeight } as MsgChangeValidatorWeight;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = object.hostZone;
    } else {
      message.hostZone = "";
    }
    if (object.valAddr !== undefined && object.valAddr !== null) {
      message.valAddr = object.valAddr;
    } else {
      message.valAddr = "";
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight as Long;
    } else {
      message.weight = Long.UZERO;
    }
    return message;
  },
};

const baseMsgChangeValidatorWeightResponse: object = {};

export const MsgChangeValidatorWeightResponse = {
  encode(_: MsgChangeValidatorWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeValidatorWeightResponse } as MsgChangeValidatorWeightResponse;
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

  fromJSON(_: any): MsgChangeValidatorWeightResponse {
    const message = { ...baseMsgChangeValidatorWeightResponse } as MsgChangeValidatorWeightResponse;
    return message;
  },

  toJSON(_: MsgChangeValidatorWeightResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse {
    const message = { ...baseMsgChangeValidatorWeightResponse } as MsgChangeValidatorWeightResponse;
    return message;
  },
};

const baseMsgDeleteValidator: object = { creator: "", hostZone: "", valAddr: "" };

export const MsgDeleteValidator = {
  encode(message: MsgDeleteValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = String(object.hostZone);
    } else {
      message.hostZone = "";
    }
    if (object.valAddr !== undefined && object.valAddr !== null) {
      message.valAddr = String(object.valAddr);
    } else {
      message.valAddr = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hostZone !== undefined && object.hostZone !== null) {
      message.hostZone = object.hostZone;
    } else {
      message.hostZone = "";
    }
    if (object.valAddr !== undefined && object.valAddr !== null) {
      message.valAddr = object.valAddr;
    } else {
      message.valAddr = "";
    }
    return message;
  },
};

const baseMsgDeleteValidatorResponse: object = {};

export const MsgDeleteValidatorResponse = {
  encode(_: MsgDeleteValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidatorResponse } as MsgDeleteValidatorResponse;
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

  fromJSON(_: any): MsgDeleteValidatorResponse {
    const message = { ...baseMsgDeleteValidatorResponse } as MsgDeleteValidatorResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = { ...baseMsgDeleteValidatorResponse } as MsgDeleteValidatorResponse;
    return message;
  },
};

const baseMsgRestoreInterchainAccount: object = { creator: "", chainId: "", accountType: 0 };

export const MsgRestoreInterchainAccount = {
  encode(message: MsgRestoreInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.accountType !== 0) {
      writer.uint32(24).int32(message.accountType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRestoreInterchainAccount } as MsgRestoreInterchainAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.accountType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRestoreInterchainAccount {
    const message = { ...baseMsgRestoreInterchainAccount } as MsgRestoreInterchainAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.accountType !== undefined && object.accountType !== null) {
      message.accountType = iCAAccountTypeFromJSON(object.accountType);
    } else {
      message.accountType = 0;
    }
    return message;
  },

  toJSON(message: MsgRestoreInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountType !== undefined && (obj.accountType = iCAAccountTypeToJSON(message.accountType));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = { ...baseMsgRestoreInterchainAccount } as MsgRestoreInterchainAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.accountType !== undefined && object.accountType !== null) {
      message.accountType = object.accountType;
    } else {
      message.accountType = 0;
    }
    return message;
  },
};

const baseMsgRestoreInterchainAccountResponse: object = {};

export const MsgRestoreInterchainAccountResponse = {
  encode(_: MsgRestoreInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRestoreInterchainAccountResponse } as MsgRestoreInterchainAccountResponse;
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

  fromJSON(_: any): MsgRestoreInterchainAccountResponse {
    const message = { ...baseMsgRestoreInterchainAccountResponse } as MsgRestoreInterchainAccountResponse;
    return message;
  },

  toJSON(_: MsgRestoreInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = { ...baseMsgRestoreInterchainAccountResponse } as MsgRestoreInterchainAccountResponse;
    return message;
  },
};

const baseMsgUpdateValidatorSharesExchRate: object = { creator: "", chainId: "", valoper: "" };

export const MsgUpdateValidatorSharesExchRate = {
  encode(message: MsgUpdateValidatorSharesExchRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidatorSharesExchRate } as MsgUpdateValidatorSharesExchRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.valoper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidatorSharesExchRate {
    const message = { ...baseMsgUpdateValidatorSharesExchRate } as MsgUpdateValidatorSharesExchRate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.valoper !== undefined && object.valoper !== null) {
      message.valoper = String(object.valoper);
    } else {
      message.valoper = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateValidatorSharesExchRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.valoper !== undefined && (obj.valoper = message.valoper);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate {
    const message = { ...baseMsgUpdateValidatorSharesExchRate } as MsgUpdateValidatorSharesExchRate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.valoper !== undefined && object.valoper !== null) {
      message.valoper = object.valoper;
    } else {
      message.valoper = "";
    }
    return message;
  },
};

const baseMsgUpdateValidatorSharesExchRateResponse: object = {};

export const MsgUpdateValidatorSharesExchRateResponse = {
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidatorSharesExchRateResponse,
    } as MsgUpdateValidatorSharesExchRateResponse;
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

  fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse {
    const message = {
      ...baseMsgUpdateValidatorSharesExchRateResponse,
    } as MsgUpdateValidatorSharesExchRateResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidatorSharesExchRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>,
  ): MsgUpdateValidatorSharesExchRateResponse {
    const message = {
      ...baseMsgUpdateValidatorSharesExchRateResponse,
    } as MsgUpdateValidatorSharesExchRateResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  LiquidStake(
    request: DeepPartial<MsgLiquidStake>,
    metadata?: grpc.Metadata,
  ): Promise<MsgLiquidStakeResponse>;
  RedeemStake(
    request: DeepPartial<MsgRedeemStake>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRedeemStakeResponse>;
  /**
   * TODO(TEST-53): Remove this pre-launch (no need for clients to create /
   * interact with ICAs)
   */
  RegisterHostZone(
    request: DeepPartial<MsgRegisterHostZone>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterHostZoneResponse>;
  ClaimUndelegatedTokens(
    request: DeepPartial<MsgClaimUndelegatedTokens>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimUndelegatedTokensResponse>;
  RebalanceValidators(
    request: DeepPartial<MsgRebalanceValidators>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRebalanceValidatorsResponse>;
  AddValidator(
    request: DeepPartial<MsgAddValidator>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAddValidatorResponse>;
  ChangeValidatorWeight(
    request: DeepPartial<MsgChangeValidatorWeight>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChangeValidatorWeightResponse>;
  DeleteValidator(
    request: DeepPartial<MsgDeleteValidator>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteValidatorResponse>;
  RestoreInterchainAccount(
    request: DeepPartial<MsgRestoreInterchainAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRestoreInterchainAccountResponse>;
  UpdateValidatorSharesExchRate(
    request: DeepPartial<MsgUpdateValidatorSharesExchRate>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateValidatorSharesExchRateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ClearBalance(
    request: DeepPartial<MsgClearBalance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClearBalanceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidStake = this.LiquidStake.bind(this);
    this.RedeemStake = this.RedeemStake.bind(this);
    this.RegisterHostZone = this.RegisterHostZone.bind(this);
    this.ClaimUndelegatedTokens = this.ClaimUndelegatedTokens.bind(this);
    this.RebalanceValidators = this.RebalanceValidators.bind(this);
    this.AddValidator = this.AddValidator.bind(this);
    this.ChangeValidatorWeight = this.ChangeValidatorWeight.bind(this);
    this.DeleteValidator = this.DeleteValidator.bind(this);
    this.RestoreInterchainAccount = this.RestoreInterchainAccount.bind(this);
    this.UpdateValidatorSharesExchRate = this.UpdateValidatorSharesExchRate.bind(this);
    this.ClearBalance = this.ClearBalance.bind(this);
  }

  LiquidStake(
    request: DeepPartial<MsgLiquidStake>,
    metadata?: grpc.Metadata,
  ): Promise<MsgLiquidStakeResponse> {
    return this.rpc.unary(MsgLiquidStakeDesc, MsgLiquidStake.fromPartial(request), metadata);
  }

  RedeemStake(
    request: DeepPartial<MsgRedeemStake>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRedeemStakeResponse> {
    return this.rpc.unary(MsgRedeemStakeDesc, MsgRedeemStake.fromPartial(request), metadata);
  }

  RegisterHostZone(
    request: DeepPartial<MsgRegisterHostZone>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRegisterHostZoneResponse> {
    return this.rpc.unary(MsgRegisterHostZoneDesc, MsgRegisterHostZone.fromPartial(request), metadata);
  }

  ClaimUndelegatedTokens(
    request: DeepPartial<MsgClaimUndelegatedTokens>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimUndelegatedTokensResponse> {
    return this.rpc.unary(
      MsgClaimUndelegatedTokensDesc,
      MsgClaimUndelegatedTokens.fromPartial(request),
      metadata,
    );
  }

  RebalanceValidators(
    request: DeepPartial<MsgRebalanceValidators>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRebalanceValidatorsResponse> {
    return this.rpc.unary(MsgRebalanceValidatorsDesc, MsgRebalanceValidators.fromPartial(request), metadata);
  }

  AddValidator(
    request: DeepPartial<MsgAddValidator>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAddValidatorResponse> {
    return this.rpc.unary(MsgAddValidatorDesc, MsgAddValidator.fromPartial(request), metadata);
  }

  ChangeValidatorWeight(
    request: DeepPartial<MsgChangeValidatorWeight>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChangeValidatorWeightResponse> {
    return this.rpc.unary(
      MsgChangeValidatorWeightDesc,
      MsgChangeValidatorWeight.fromPartial(request),
      metadata,
    );
  }

  DeleteValidator(
    request: DeepPartial<MsgDeleteValidator>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDeleteValidatorResponse> {
    return this.rpc.unary(MsgDeleteValidatorDesc, MsgDeleteValidator.fromPartial(request), metadata);
  }

  RestoreInterchainAccount(
    request: DeepPartial<MsgRestoreInterchainAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRestoreInterchainAccountResponse> {
    return this.rpc.unary(
      MsgRestoreInterchainAccountDesc,
      MsgRestoreInterchainAccount.fromPartial(request),
      metadata,
    );
  }

  UpdateValidatorSharesExchRate(
    request: DeepPartial<MsgUpdateValidatorSharesExchRate>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateValidatorSharesExchRateResponse> {
    return this.rpc.unary(
      MsgUpdateValidatorSharesExchRateDesc,
      MsgUpdateValidatorSharesExchRate.fromPartial(request),
      metadata,
    );
  }

  ClearBalance(
    request: DeepPartial<MsgClearBalance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClearBalanceResponse> {
    return this.rpc.unary(MsgClearBalanceDesc, MsgClearBalance.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "stride.stakeibc.Msg",
};

export const MsgLiquidStakeDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidStake",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgLiquidStake.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgLiquidStakeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRedeemStakeDesc: UnaryMethodDefinitionish = {
  methodName: "RedeemStake",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRedeemStake.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedeemStakeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRegisterHostZoneDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterHostZone",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterHostZone.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterHostZoneResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgClaimUndelegatedTokensDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimUndelegatedTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimUndelegatedTokens.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimUndelegatedTokensResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRebalanceValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "RebalanceValidators",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRebalanceValidators.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRebalanceValidatorsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgAddValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "AddValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddValidator.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddValidatorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChangeValidatorWeightDesc: UnaryMethodDefinitionish = {
  methodName: "ChangeValidatorWeight",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChangeValidatorWeight.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChangeValidatorWeightResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDeleteValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteValidator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteValidator.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteValidatorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRestoreInterchainAccountDesc: UnaryMethodDefinitionish = {
  methodName: "RestoreInterchainAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRestoreInterchainAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRestoreInterchainAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateValidatorSharesExchRateDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateValidatorSharesExchRate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateValidatorSharesExchRate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateValidatorSharesExchRateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgClearBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "ClearBalance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClearBalance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClearBalanceResponse.decode(data),
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
