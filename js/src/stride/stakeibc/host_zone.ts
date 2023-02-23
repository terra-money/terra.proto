/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ICAAccount } from "../../stride/stakeibc/ica_account";
import { Validator } from "../../stride/stakeibc/validator";

export const protobufPackage = "stride.stakeibc";

/** next id: 19 */
export interface HostZone {
  chainId: string;
  connectionId: string;
  bech32prefix: string;
  transferChannelId: string;
  validators: Validator[];
  blacklistedValidators: Validator[];
  withdrawalAccount?: ICAAccount;
  feeAccount?: ICAAccount;
  delegationAccount?: ICAAccount;
  redemptionAccount?: ICAAccount;
  /** ibc denom on stride */
  ibcDenom: string;
  /** native denom on host zone */
  hostDenom: string;
  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption
   * rates then calculate a TWARR?
   */
  lastRedemptionRate: string;
  redemptionRate: string;
  /** stores how many days we should wait before issuing unbondings */
  unbondingFrequency: Long;
  /** TODO(TEST-101) int to dec */
  stakedBal: Long;
  address: string;
}

const baseHostZone: object = {
  chainId: "",
  connectionId: "",
  bech32prefix: "",
  transferChannelId: "",
  ibcDenom: "",
  hostDenom: "",
  lastRedemptionRate: "",
  redemptionRate: "",
  unbondingFrequency: Long.UZERO,
  stakedBal: Long.UZERO,
  address: "",
};

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.blacklistedValidators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.withdrawalAccount !== undefined) {
      ICAAccount.encode(message.withdrawalAccount, writer.uint32(42).fork()).ldelim();
    }
    if (message.feeAccount !== undefined) {
      ICAAccount.encode(message.feeAccount, writer.uint32(50).fork()).ldelim();
    }
    if (message.delegationAccount !== undefined) {
      ICAAccount.encode(message.delegationAccount, writer.uint32(58).fork()).ldelim();
    }
    if (message.redemptionAccount !== undefined) {
      ICAAccount.encode(message.redemptionAccount, writer.uint32(130).fork()).ldelim();
    }
    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(message.lastRedemptionRate);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(90).string(message.redemptionRate);
    }
    if (!message.unbondingFrequency.isZero()) {
      writer.uint32(112).uint64(message.unbondingFrequency);
    }
    if (!message.stakedBal.isZero()) {
      writer.uint32(104).uint64(message.stakedBal);
    }
    if (message.address !== "") {
      writer.uint32(146).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostZone } as HostZone;
    message.validators = [];
    message.blacklistedValidators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 17:
          message.bech32prefix = reader.string();
          break;
        case 12:
          message.transferChannelId = reader.string();
          break;
        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.blacklistedValidators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.withdrawalAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 6:
          message.feeAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 7:
          message.delegationAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 16:
          message.redemptionAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 8:
          message.ibcDenom = reader.string();
          break;
        case 9:
          message.hostDenom = reader.string();
          break;
        case 10:
          message.lastRedemptionRate = reader.string();
          break;
        case 11:
          message.redemptionRate = reader.string();
          break;
        case 14:
          message.unbondingFrequency = reader.uint64() as Long;
          break;
        case 13:
          message.stakedBal = reader.uint64() as Long;
          break;
        case 18:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostZone {
    const message = { ...baseHostZone } as HostZone;
    message.validators = [];
    message.blacklistedValidators = [];
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
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
    if (object.transferChannelId !== undefined && object.transferChannelId !== null) {
      message.transferChannelId = String(object.transferChannelId);
    } else {
      message.transferChannelId = "";
    }
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    if (object.blacklistedValidators !== undefined && object.blacklistedValidators !== null) {
      for (const e of object.blacklistedValidators) {
        message.blacklistedValidators.push(Validator.fromJSON(e));
      }
    }
    if (object.withdrawalAccount !== undefined && object.withdrawalAccount !== null) {
      message.withdrawalAccount = ICAAccount.fromJSON(object.withdrawalAccount);
    } else {
      message.withdrawalAccount = undefined;
    }
    if (object.feeAccount !== undefined && object.feeAccount !== null) {
      message.feeAccount = ICAAccount.fromJSON(object.feeAccount);
    } else {
      message.feeAccount = undefined;
    }
    if (object.delegationAccount !== undefined && object.delegationAccount !== null) {
      message.delegationAccount = ICAAccount.fromJSON(object.delegationAccount);
    } else {
      message.delegationAccount = undefined;
    }
    if (object.redemptionAccount !== undefined && object.redemptionAccount !== null) {
      message.redemptionAccount = ICAAccount.fromJSON(object.redemptionAccount);
    } else {
      message.redemptionAccount = undefined;
    }
    if (object.ibcDenom !== undefined && object.ibcDenom !== null) {
      message.ibcDenom = String(object.ibcDenom);
    } else {
      message.ibcDenom = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = String(object.hostDenom);
    } else {
      message.hostDenom = "";
    }
    if (object.lastRedemptionRate !== undefined && object.lastRedemptionRate !== null) {
      message.lastRedemptionRate = String(object.lastRedemptionRate);
    } else {
      message.lastRedemptionRate = "";
    }
    if (object.redemptionRate !== undefined && object.redemptionRate !== null) {
      message.redemptionRate = String(object.redemptionRate);
    } else {
      message.redemptionRate = "";
    }
    if (object.unbondingFrequency !== undefined && object.unbondingFrequency !== null) {
      message.unbondingFrequency = Long.fromString(object.unbondingFrequency);
    } else {
      message.unbondingFrequency = Long.UZERO;
    }
    if (object.stakedBal !== undefined && object.stakedBal !== null) {
      message.stakedBal = Long.fromString(object.stakedBal);
    } else {
      message.stakedBal = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: HostZone): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.bech32prefix !== undefined && (obj.bech32prefix = message.bech32prefix);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    if (message.blacklistedValidators) {
      obj.blacklistedValidators = message.blacklistedValidators.map((e) =>
        e ? Validator.toJSON(e) : undefined,
      );
    } else {
      obj.blacklistedValidators = [];
    }
    message.withdrawalAccount !== undefined &&
      (obj.withdrawalAccount = message.withdrawalAccount
        ? ICAAccount.toJSON(message.withdrawalAccount)
        : undefined);
    message.feeAccount !== undefined &&
      (obj.feeAccount = message.feeAccount ? ICAAccount.toJSON(message.feeAccount) : undefined);
    message.delegationAccount !== undefined &&
      (obj.delegationAccount = message.delegationAccount
        ? ICAAccount.toJSON(message.delegationAccount)
        : undefined);
    message.redemptionAccount !== undefined &&
      (obj.redemptionAccount = message.redemptionAccount
        ? ICAAccount.toJSON(message.redemptionAccount)
        : undefined);
    message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    message.lastRedemptionRate !== undefined && (obj.lastRedemptionRate = message.lastRedemptionRate);
    message.redemptionRate !== undefined && (obj.redemptionRate = message.redemptionRate);
    message.unbondingFrequency !== undefined &&
      (obj.unbondingFrequency = (message.unbondingFrequency || Long.UZERO).toString());
    message.stakedBal !== undefined && (obj.stakedBal = (message.stakedBal || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<HostZone>): HostZone {
    const message = { ...baseHostZone } as HostZone;
    message.validators = [];
    message.blacklistedValidators = [];
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
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
    if (object.transferChannelId !== undefined && object.transferChannelId !== null) {
      message.transferChannelId = object.transferChannelId;
    } else {
      message.transferChannelId = "";
    }
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    if (object.blacklistedValidators !== undefined && object.blacklistedValidators !== null) {
      for (const e of object.blacklistedValidators) {
        message.blacklistedValidators.push(Validator.fromPartial(e));
      }
    }
    if (object.withdrawalAccount !== undefined && object.withdrawalAccount !== null) {
      message.withdrawalAccount = ICAAccount.fromPartial(object.withdrawalAccount);
    } else {
      message.withdrawalAccount = undefined;
    }
    if (object.feeAccount !== undefined && object.feeAccount !== null) {
      message.feeAccount = ICAAccount.fromPartial(object.feeAccount);
    } else {
      message.feeAccount = undefined;
    }
    if (object.delegationAccount !== undefined && object.delegationAccount !== null) {
      message.delegationAccount = ICAAccount.fromPartial(object.delegationAccount);
    } else {
      message.delegationAccount = undefined;
    }
    if (object.redemptionAccount !== undefined && object.redemptionAccount !== null) {
      message.redemptionAccount = ICAAccount.fromPartial(object.redemptionAccount);
    } else {
      message.redemptionAccount = undefined;
    }
    if (object.ibcDenom !== undefined && object.ibcDenom !== null) {
      message.ibcDenom = object.ibcDenom;
    } else {
      message.ibcDenom = "";
    }
    if (object.hostDenom !== undefined && object.hostDenom !== null) {
      message.hostDenom = object.hostDenom;
    } else {
      message.hostDenom = "";
    }
    if (object.lastRedemptionRate !== undefined && object.lastRedemptionRate !== null) {
      message.lastRedemptionRate = object.lastRedemptionRate;
    } else {
      message.lastRedemptionRate = "";
    }
    if (object.redemptionRate !== undefined && object.redemptionRate !== null) {
      message.redemptionRate = object.redemptionRate;
    } else {
      message.redemptionRate = "";
    }
    if (object.unbondingFrequency !== undefined && object.unbondingFrequency !== null) {
      message.unbondingFrequency = object.unbondingFrequency as Long;
    } else {
      message.unbondingFrequency = Long.UZERO;
    }
    if (object.stakedBal !== undefined && object.stakedBal !== null) {
      message.stakedBal = object.stakedBal as Long;
    } else {
      message.stakedBal = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
