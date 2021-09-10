/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata as Metadata1,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.distribution.v1beta1";

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}

const baseMsgSetWithdrawAddress: object = { delegatorAddress: "", withdrawAddress: "" };

export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWithdrawAddress {
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = String(object.withdrawAddress);
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },

  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = object.withdrawAddress;
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
};

const baseMsgSetWithdrawAddressResponse: object = {};

export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
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

  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
    return message;
  },

  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
    return message;
  },
};

const baseMsgWithdrawDelegatorReward: object = { delegatorAddress: "", validatorAddress: "" };

export const MsgWithdrawDelegatorReward = {
  encode(message: MsgWithdrawDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegatorReward {
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
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
    return message;
  },

  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
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
    return message;
  },
};

const baseMsgWithdrawDelegatorRewardResponse: object = {};

export const MsgWithdrawDelegatorRewardResponse = {
  encode(_: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
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

  fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
    return message;
  },

  toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
    return message;
  },
};

const baseMsgWithdrawValidatorCommission: object = { validatorAddress: "" };

export const MsgWithdrawValidatorCommission = {
  encode(message: MsgWithdrawValidatorCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommission {
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseMsgWithdrawValidatorCommissionResponse: object = {};

export const MsgWithdrawValidatorCommissionResponse = {
  encode(_: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawValidatorCommissionResponse,
    } as MsgWithdrawValidatorCommissionResponse;
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

  fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
    const message = {
      ...baseMsgWithdrawValidatorCommissionResponse,
    } as MsgWithdrawValidatorCommissionResponse;
    return message;
  },

  toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawValidatorCommissionResponse>,
  ): MsgWithdrawValidatorCommissionResponse {
    const message = {
      ...baseMsgWithdrawValidatorCommissionResponse,
    } as MsgWithdrawValidatorCommissionResponse;
    return message;
  },
};

const baseMsgFundCommunityPool: object = { depositor: "" };

export const MsgFundCommunityPool = {
  encode(message: MsgFundCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    return message;
  },

  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    return message;
  },
};

const baseMsgFundCommunityPoolResponse: object = {};

export const MsgFundCommunityPoolResponse = {
  encode(_: MsgFundCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
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

  fromJSON(_: any): MsgFundCommunityPoolResponse {
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
    return message;
  },

  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
    return message;
  },
};

/** Msg defines the distribution Msg service. */
export const MsgService = {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress: {
    path: "/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgSetWithdrawAddress) =>
      Buffer.from(MsgSetWithdrawAddress.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgSetWithdrawAddress.decode(value),
    responseSerialize: (value: MsgSetWithdrawAddressResponse) =>
      Buffer.from(MsgSetWithdrawAddressResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgSetWithdrawAddressResponse.decode(value),
  },
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward: {
    path: "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgWithdrawDelegatorReward) =>
      Buffer.from(MsgWithdrawDelegatorReward.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgWithdrawDelegatorReward.decode(value),
    responseSerialize: (value: MsgWithdrawDelegatorRewardResponse) =>
      Buffer.from(MsgWithdrawDelegatorRewardResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgWithdrawDelegatorRewardResponse.decode(value),
  },
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission: {
    path: "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgWithdrawValidatorCommission) =>
      Buffer.from(MsgWithdrawValidatorCommission.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgWithdrawValidatorCommission.decode(value),
    responseSerialize: (value: MsgWithdrawValidatorCommissionResponse) =>
      Buffer.from(MsgWithdrawValidatorCommissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgWithdrawValidatorCommissionResponse.decode(value),
  },
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool: {
    path: "/cosmos.distribution.v1beta1.Msg/FundCommunityPool",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgFundCommunityPool) =>
      Buffer.from(MsgFundCommunityPool.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgFundCommunityPool.decode(value),
    responseSerialize: (value: MsgFundCommunityPoolResponse) =>
      Buffer.from(MsgFundCommunityPoolResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgFundCommunityPoolResponse.decode(value),
  },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress: handleUnaryCall<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward: handleUnaryCall<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission: handleUnaryCall<
    MsgWithdrawValidatorCommission,
    MsgWithdrawValidatorCommissionResponse
  >;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool: handleUnaryCall<MsgFundCommunityPool, MsgFundCommunityPoolResponse>;
}

export interface MsgClient extends Client {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(
    request: MsgSetWithdrawAddress,
    callback: (error: ServiceError | null, response: MsgSetWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  setWithdrawAddress(
    request: MsgSetWithdrawAddress,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgSetWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  setWithdrawAddress(
    request: MsgSetWithdrawAddress,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgSetWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(
    request: MsgWithdrawDelegatorReward,
    callback: (error: ServiceError | null, response: MsgWithdrawDelegatorRewardResponse) => void,
  ): ClientUnaryCall;
  withdrawDelegatorReward(
    request: MsgWithdrawDelegatorReward,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgWithdrawDelegatorRewardResponse) => void,
  ): ClientUnaryCall;
  withdrawDelegatorReward(
    request: MsgWithdrawDelegatorReward,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgWithdrawDelegatorRewardResponse) => void,
  ): ClientUnaryCall;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
    callback: (error: ServiceError | null, response: MsgWithdrawValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  withdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgWithdrawValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  withdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgWithdrawValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(
    request: MsgFundCommunityPool,
    callback: (error: ServiceError | null, response: MsgFundCommunityPoolResponse) => void,
  ): ClientUnaryCall;
  fundCommunityPool(
    request: MsgFundCommunityPool,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: MsgFundCommunityPoolResponse) => void,
  ): ClientUnaryCall;
  fundCommunityPool(
    request: MsgFundCommunityPool,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgFundCommunityPoolResponse) => void,
  ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(
  MsgService,
  "cosmos.distribution.v1beta1.Msg",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): MsgClient;
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
