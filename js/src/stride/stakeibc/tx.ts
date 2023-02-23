/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ICAAccountType, iCAAccountTypeFromJSON, iCAAccountTypeToJSON } from "./ica_account";

export const protobufPackage = "stride.stakeibc";

export interface MsgLiquidStake {
  creator: string;
  amount: Long;
  /** TODO(TEST-86): Update Denom -> HostDenom */
  hostDenom: string;
}

export interface MsgLiquidStakeResponse {
}

export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: Long;
  channel: string;
}

export interface MsgClearBalanceResponse {
}

export interface MsgRedeemStake {
  creator: string;
  amount: Long;
  hostZone: string;
  receiver: string;
}

export interface MsgRedeemStakeResponse {
}

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
export interface MsgRegisterHostZoneResponse {
}

export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  hostZoneId: string;
  epoch: Long;
  sender: string;
}

export interface MsgClaimUndelegatedTokensResponse {
}

export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: Long;
}

export interface MsgRebalanceValidatorsResponse {
}

export interface MsgAddValidator {
  creator: string;
  hostZone: string;
  name: string;
  address: string;
  commission: Long;
  weight: Long;
}

export interface MsgAddValidatorResponse {
}

export interface MsgChangeValidatorWeight {
  creator: string;
  hostZone: string;
  valAddr: string;
  weight: Long;
}

export interface MsgChangeValidatorWeightResponse {
}

export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}

export interface MsgDeleteValidatorResponse {
}

export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  accountType: ICAAccountType;
}

export interface MsgRestoreInterchainAccountResponse {
}

export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}

export interface MsgUpdateValidatorSharesExchRateResponse {
}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return { creator: "", amount: Long.UZERO, hostDenom: "" };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
    };
  },

  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(base?: I): MsgLiquidStake {
    return MsgLiquidStake.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(object: I): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}

export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
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
    return {};
  },

  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidStakeResponse>, I>>(base?: I): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeResponse>, I>>(_: I): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  },
};

function createBaseMsgClearBalance(): MsgClearBalance {
  return { creator: "", chainId: "", amount: Long.UZERO, channel: "" };
}

export const MsgClearBalance = {
  encode(message: MsgClearBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalance();
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
          message.amount = reader.uint64() as Long;
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      channel: isSet(object.channel) ? String(object.channel) : "",
    };
  },

  toJSON(message: MsgClearBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClearBalance>, I>>(base?: I): MsgClearBalance {
    return MsgClearBalance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearBalance>, I>>(object: I): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
    message.channel = object.channel ?? "";
    return message;
  },
};

function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}

export const MsgClearBalanceResponse = {
  encode(_: MsgClearBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalanceResponse();
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
    return {};
  },

  toJSON(_: MsgClearBalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClearBalanceResponse>, I>>(base?: I): MsgClearBalanceResponse {
    return MsgClearBalanceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearBalanceResponse>, I>>(_: I): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
};

function createBaseMsgRedeemStake(): MsgRedeemStake {
  return { creator: "", amount: Long.UZERO, hostZone: "", receiver: "" };
}

export const MsgRedeemStake = {
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
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
    const message = createBaseMsgRedeemStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.uint64() as Long;
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: MsgRedeemStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRedeemStake>, I>>(base?: I): MsgRedeemStake {
    return MsgRedeemStake.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemStake>, I>>(object: I): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}

export const MsgRedeemStakeResponse = {
  encode(_: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();
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
    return {};
  },

  toJSON(_: MsgRedeemStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRedeemStakeResponse>, I>>(base?: I): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemStakeResponse>, I>>(_: I): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
};

function createBaseMsgRegisterHostZone(): MsgRegisterHostZone {
  return {
    connectionId: "",
    bech32prefix: "",
    hostDenom: "",
    ibcDenom: "",
    creator: "",
    transferChannelId: "",
    unbondingFrequency: Long.UZERO,
  };
}

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
    const message = createBaseMsgRegisterHostZone();
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
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      unbondingFrequency: isSet(object.unbondingFrequency) ? Long.fromValue(object.unbondingFrequency) : Long.UZERO,
    };
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

  create<I extends Exact<DeepPartial<MsgRegisterHostZone>, I>>(base?: I): MsgRegisterHostZone {
    return MsgRegisterHostZone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostZone>, I>>(object: I): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.creator = object.creator ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingFrequency = (object.unbondingFrequency !== undefined && object.unbondingFrequency !== null)
      ? Long.fromValue(object.unbondingFrequency)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}

export const MsgRegisterHostZoneResponse = {
  encode(_: MsgRegisterHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZoneResponse();
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
    return {};
  },

  toJSON(_: MsgRegisterHostZoneResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterHostZoneResponse>, I>>(base?: I): MsgRegisterHostZoneResponse {
    return MsgRegisterHostZoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostZoneResponse>, I>>(_: I): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
};

function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return { creator: "", hostZoneId: "", epoch: Long.UZERO, sender: "" };
}

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
    const message = createBaseMsgClaimUndelegatedTokens();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgClaimUndelegatedTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimUndelegatedTokens>, I>>(base?: I): MsgClaimUndelegatedTokens {
    return MsgClaimUndelegatedTokens.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUndelegatedTokens>, I>>(object: I): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = (object.epoch !== undefined && object.epoch !== null) ? Long.fromValue(object.epoch) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}

export const MsgClaimUndelegatedTokensResponse = {
  encode(_: MsgClaimUndelegatedTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokensResponse();
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
    return {};
  },

  toJSON(_: MsgClaimUndelegatedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimUndelegatedTokensResponse>, I>>(
    base?: I,
  ): MsgClaimUndelegatedTokensResponse {
    return MsgClaimUndelegatedTokensResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUndelegatedTokensResponse>, I>>(
    _: I,
  ): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
};

function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return { creator: "", hostZone: "", numRebalance: Long.UZERO };
}

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
    const message = createBaseMsgRebalanceValidators();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      numRebalance: isSet(object.numRebalance) ? Long.fromValue(object.numRebalance) : Long.UZERO,
    };
  },

  toJSON(message: MsgRebalanceValidators): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.numRebalance !== undefined && (obj.numRebalance = (message.numRebalance || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRebalanceValidators>, I>>(base?: I): MsgRebalanceValidators {
    return MsgRebalanceValidators.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRebalanceValidators>, I>>(object: I): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = (object.numRebalance !== undefined && object.numRebalance !== null)
      ? Long.fromValue(object.numRebalance)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}

export const MsgRebalanceValidatorsResponse = {
  encode(_: MsgRebalanceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidatorsResponse();
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
    return {};
  },

  toJSON(_: MsgRebalanceValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRebalanceValidatorsResponse>, I>>(base?: I): MsgRebalanceValidatorsResponse {
    return MsgRebalanceValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRebalanceValidatorsResponse>, I>>(_: I): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
};

function createBaseMsgAddValidator(): MsgAddValidator {
  return { creator: "", hostZone: "", name: "", address: "", commission: Long.UZERO, weight: Long.UZERO };
}

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
    const message = createBaseMsgAddValidator();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      commission: isSet(object.commission) ? Long.fromValue(object.commission) : Long.UZERO,
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO,
    };
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

  create<I extends Exact<DeepPartial<MsgAddValidator>, I>>(base?: I): MsgAddValidator {
    return MsgAddValidator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddValidator>, I>>(object: I): MsgAddValidator {
    const message = createBaseMsgAddValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.commission = (object.commission !== undefined && object.commission !== null)
      ? Long.fromValue(object.commission)
      : Long.UZERO;
    message.weight = (object.weight !== undefined && object.weight !== null)
      ? Long.fromValue(object.weight)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgAddValidatorResponse(): MsgAddValidatorResponse {
  return {};
}

export const MsgAddValidatorResponse = {
  encode(_: MsgAddValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidatorResponse();
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
    return {};
  },

  toJSON(_: MsgAddValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddValidatorResponse>, I>>(base?: I): MsgAddValidatorResponse {
    return MsgAddValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddValidatorResponse>, I>>(_: I): MsgAddValidatorResponse {
    const message = createBaseMsgAddValidatorResponse();
    return message;
  },
};

function createBaseMsgChangeValidatorWeight(): MsgChangeValidatorWeight {
  return { creator: "", hostZone: "", valAddr: "", weight: Long.UZERO };
}

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
    const message = createBaseMsgChangeValidatorWeight();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO,
    };
  },

  toJSON(message: MsgChangeValidatorWeight): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeValidatorWeight>, I>>(base?: I): MsgChangeValidatorWeight {
    return MsgChangeValidatorWeight.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeValidatorWeight>, I>>(object: I): MsgChangeValidatorWeight {
    const message = createBaseMsgChangeValidatorWeight();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    message.weight = (object.weight !== undefined && object.weight !== null)
      ? Long.fromValue(object.weight)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgChangeValidatorWeightResponse(): MsgChangeValidatorWeightResponse {
  return {};
}

export const MsgChangeValidatorWeightResponse = {
  encode(_: MsgChangeValidatorWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeightResponse();
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
    return {};
  },

  toJSON(_: MsgChangeValidatorWeightResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeValidatorWeightResponse>, I>>(
    base?: I,
  ): MsgChangeValidatorWeightResponse {
    return MsgChangeValidatorWeightResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeValidatorWeightResponse>, I>>(
    _: I,
  ): MsgChangeValidatorWeightResponse {
    const message = createBaseMsgChangeValidatorWeightResponse();
    return message;
  },
};

function createBaseMsgDeleteValidator(): MsgDeleteValidator {
  return { creator: "", hostZone: "", valAddr: "" };
}

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
    const message = createBaseMsgDeleteValidator();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
    };
  },

  toJSON(message: MsgDeleteValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostZone !== undefined && (obj.hostZone = message.hostZone);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteValidator>, I>>(base?: I): MsgDeleteValidator {
    return MsgDeleteValidator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteValidator>, I>>(object: I): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  },
};

function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}

export const MsgDeleteValidatorResponse = {
  encode(_: MsgDeleteValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidatorResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteValidatorResponse>, I>>(base?: I): MsgDeleteValidatorResponse {
    return MsgDeleteValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteValidatorResponse>, I>>(_: I): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
};

function createBaseMsgRestoreInterchainAccount(): MsgRestoreInterchainAccount {
  return { creator: "", chainId: "", accountType: 0 };
}

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
    const message = createBaseMsgRestoreInterchainAccount();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      accountType: isSet(object.accountType) ? iCAAccountTypeFromJSON(object.accountType) : 0,
    };
  },

  toJSON(message: MsgRestoreInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountType !== undefined && (obj.accountType = iCAAccountTypeToJSON(message.accountType));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRestoreInterchainAccount>, I>>(base?: I): MsgRestoreInterchainAccount {
    return MsgRestoreInterchainAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRestoreInterchainAccount>, I>>(object: I): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.accountType = object.accountType ?? 0;
    return message;
  },
};

function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}

export const MsgRestoreInterchainAccountResponse = {
  encode(_: MsgRestoreInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccountResponse();
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
    return {};
  },

  toJSON(_: MsgRestoreInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRestoreInterchainAccountResponse>, I>>(
    base?: I,
  ): MsgRestoreInterchainAccountResponse {
    return MsgRestoreInterchainAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRestoreInterchainAccountResponse>, I>>(
    _: I,
  ): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
};

function createBaseMsgUpdateValidatorSharesExchRate(): MsgUpdateValidatorSharesExchRate {
  return { creator: "", chainId: "", valoper: "" };
}

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
    const message = createBaseMsgUpdateValidatorSharesExchRate();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      valoper: isSet(object.valoper) ? String(object.valoper) : "",
    };
  },

  toJSON(message: MsgUpdateValidatorSharesExchRate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.valoper !== undefined && (obj.valoper = message.valoper);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateValidatorSharesExchRate>, I>>(
    base?: I,
  ): MsgUpdateValidatorSharesExchRate {
    return MsgUpdateValidatorSharesExchRate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateValidatorSharesExchRate>, I>>(
    object: I,
  ): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
};

function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}

export const MsgUpdateValidatorSharesExchRateResponse = {
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateValidatorSharesExchRateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateValidatorSharesExchRateResponse>, I>>(
    base?: I,
  ): MsgUpdateValidatorSharesExchRateResponse {
    return MsgUpdateValidatorSharesExchRateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateValidatorSharesExchRateResponse>, I>>(
    _: I,
  ): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  LiquidStake(request: DeepPartial<MsgLiquidStake>, metadata?: grpc.Metadata): Promise<MsgLiquidStakeResponse>;
  RedeemStake(request: DeepPartial<MsgRedeemStake>, metadata?: grpc.Metadata): Promise<MsgRedeemStakeResponse>;
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
  AddValidator(request: DeepPartial<MsgAddValidator>, metadata?: grpc.Metadata): Promise<MsgAddValidatorResponse>;
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
  ClearBalance(request: DeepPartial<MsgClearBalance>, metadata?: grpc.Metadata): Promise<MsgClearBalanceResponse>;
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

  LiquidStake(request: DeepPartial<MsgLiquidStake>, metadata?: grpc.Metadata): Promise<MsgLiquidStakeResponse> {
    return this.rpc.unary(MsgLiquidStakeDesc, MsgLiquidStake.fromPartial(request), metadata);
  }

  RedeemStake(request: DeepPartial<MsgRedeemStake>, metadata?: grpc.Metadata): Promise<MsgRedeemStakeResponse> {
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
    return this.rpc.unary(MsgClaimUndelegatedTokensDesc, MsgClaimUndelegatedTokens.fromPartial(request), metadata);
  }

  RebalanceValidators(
    request: DeepPartial<MsgRebalanceValidators>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRebalanceValidatorsResponse> {
    return this.rpc.unary(MsgRebalanceValidatorsDesc, MsgRebalanceValidators.fromPartial(request), metadata);
  }

  AddValidator(request: DeepPartial<MsgAddValidator>, metadata?: grpc.Metadata): Promise<MsgAddValidatorResponse> {
    return this.rpc.unary(MsgAddValidatorDesc, MsgAddValidator.fromPartial(request), metadata);
  }

  ChangeValidatorWeight(
    request: DeepPartial<MsgChangeValidatorWeight>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChangeValidatorWeightResponse> {
    return this.rpc.unary(MsgChangeValidatorWeightDesc, MsgChangeValidatorWeight.fromPartial(request), metadata);
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
    return this.rpc.unary(MsgRestoreInterchainAccountDesc, MsgRestoreInterchainAccount.fromPartial(request), metadata);
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

  ClearBalance(request: DeepPartial<MsgClearBalance>, metadata?: grpc.Metadata): Promise<MsgClearBalanceResponse> {
    return this.rpc.unary(MsgClearBalanceDesc, MsgClearBalance.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "stride.stakeibc.Msg" };

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
      const value = MsgLiquidStakeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgRedeemStakeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgRegisterHostZoneResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgClaimUndelegatedTokensResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgRebalanceValidatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgAddValidatorResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgChangeValidatorWeightResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgDeleteValidatorResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgRestoreInterchainAccountResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgUpdateValidatorSharesExchRateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = MsgClearBalanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
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
    const maybeCombinedMetadata = metadata && this.options.metadata
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
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
