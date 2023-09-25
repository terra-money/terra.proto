/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";

export const protobufPackage = "cosmos.vesting.v1beta1";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  /** end of vesting as unix time (in seconds). */
  endTime: Long;
  delayed: boolean;
}

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponse {}

/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccount {
  fromAddress: string;
  toAddress: string;
  /** start of vesting as unix time (in seconds). */
  startTime: Long;
  vestingPeriods: Period[];
}

/**
 * MsgCreatePeriodicVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponse {}

/**
 * MsgDonateAllVestingTokens defines a message that enables donating all vesting
 * token to community pool.
 */
export interface MsgDonateAllVestingTokens {
  fromAddress: string;
}

/**
 * MsgDonateAllVestingTokensResponse defines the Msg/MsgDonateAllVestingTokens
 * response type.
 */
export interface MsgDonateAllVestingTokensResponse {}

const baseMsgCreateVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  endTime: Long.ZERO,
  delayed: false,
};

export const MsgCreateVestingAccount = {
  encode(message: MsgCreateVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64() as Long;
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVestingAccount {
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Long.fromString(object.endTime);
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = Boolean(object.delayed);
    } else {
      message.delayed = false;
    }
    return message;
  },

  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime as Long;
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = object.delayed;
    } else {
      message.delayed = false;
    }
    return message;
  },
};

const baseMsgCreateVestingAccountResponse: object = {};

export const MsgCreateVestingAccountResponse = {
  encode(_: MsgCreateVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
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

  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
    return message;
  },
};

const baseMsgCreatePermanentLockedAccount: object = { fromAddress: "", toAddress: "" };

export const MsgCreatePermanentLockedAccount = {
  encode(message: MsgCreatePermanentLockedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePermanentLockedAccount } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePermanentLockedAccount {
    const message = { ...baseMsgCreatePermanentLockedAccount } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreatePermanentLockedAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount {
    const message = { ...baseMsgCreatePermanentLockedAccount } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreatePermanentLockedAccountResponse: object = {};

export const MsgCreatePermanentLockedAccountResponse = {
  encode(_: MsgCreatePermanentLockedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
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

  fromJSON(_: any): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePermanentLockedAccountResponse>,
  ): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccount: object = { fromAddress: "", toAddress: "", startTime: Long.ZERO };

export const MsgCreatePeriodicVestingAccount = {
  encode(message: MsgCreatePeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePeriodicVestingAccount } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64() as Long;
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    const message = { ...baseMsgCreatePeriodicVestingAccount } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Long.fromString(object.startTime);
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
      for (const e of object.vestingPeriods) {
        message.vestingPeriods.push(Period.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount {
    const message = { ...baseMsgCreatePeriodicVestingAccount } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime as Long;
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
      for (const e of object.vestingPeriods) {
        message.vestingPeriods.push(Period.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccountResponse: object = {};

export const MsgCreatePeriodicVestingAccountResponse = {
  encode(_: MsgCreatePeriodicVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
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

  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePeriodicVestingAccountResponse>,
  ): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },
};

const baseMsgDonateAllVestingTokens: object = { fromAddress: "" };

export const MsgDonateAllVestingTokens = {
  encode(message: MsgDonateAllVestingTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateAllVestingTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDonateAllVestingTokens } as MsgDonateAllVestingTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDonateAllVestingTokens {
    const message = { ...baseMsgDonateAllVestingTokens } as MsgDonateAllVestingTokens;
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDonateAllVestingTokens): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDonateAllVestingTokens>): MsgDonateAllVestingTokens {
    const message = { ...baseMsgDonateAllVestingTokens } as MsgDonateAllVestingTokens;
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    return message;
  },
};

const baseMsgDonateAllVestingTokensResponse: object = {};

export const MsgDonateAllVestingTokensResponse = {
  encode(_: MsgDonateAllVestingTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonateAllVestingTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDonateAllVestingTokensResponse } as MsgDonateAllVestingTokensResponse;
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

  fromJSON(_: any): MsgDonateAllVestingTokensResponse {
    const message = { ...baseMsgDonateAllVestingTokensResponse } as MsgDonateAllVestingTokensResponse;
    return message;
  },

  toJSON(_: MsgDonateAllVestingTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDonateAllVestingTokensResponse>): MsgDonateAllVestingTokensResponse {
    const message = { ...baseMsgDonateAllVestingTokensResponse } as MsgDonateAllVestingTokensResponse;
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(
    request: DeepPartial<MsgCreateVestingAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePermanentLockedAccount(
    request: DeepPartial<MsgCreatePermanentLockedAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreatePermanentLockedAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePeriodicVestingAccount(
    request: DeepPartial<MsgCreatePeriodicVestingAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreatePeriodicVestingAccountResponse>;
  /**
   * DonateAllVestingTokens defines a method that enables donating all vesting
   * tokens to community pool
   */
  DonateAllVestingTokens(
    request: DeepPartial<MsgDonateAllVestingTokens>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDonateAllVestingTokensResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
    this.CreatePermanentLockedAccount = this.CreatePermanentLockedAccount.bind(this);
    this.CreatePeriodicVestingAccount = this.CreatePeriodicVestingAccount.bind(this);
    this.DonateAllVestingTokens = this.DonateAllVestingTokens.bind(this);
  }

  CreateVestingAccount(
    request: DeepPartial<MsgCreateVestingAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateVestingAccountResponse> {
    return this.rpc.unary(
      MsgCreateVestingAccountDesc,
      MsgCreateVestingAccount.fromPartial(request),
      metadata,
    );
  }

  CreatePermanentLockedAccount(
    request: DeepPartial<MsgCreatePermanentLockedAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreatePermanentLockedAccountResponse> {
    return this.rpc.unary(
      MsgCreatePermanentLockedAccountDesc,
      MsgCreatePermanentLockedAccount.fromPartial(request),
      metadata,
    );
  }

  CreatePeriodicVestingAccount(
    request: DeepPartial<MsgCreatePeriodicVestingAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return this.rpc.unary(
      MsgCreatePeriodicVestingAccountDesc,
      MsgCreatePeriodicVestingAccount.fromPartial(request),
      metadata,
    );
  }

  DonateAllVestingTokens(
    request: DeepPartial<MsgDonateAllVestingTokens>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDonateAllVestingTokensResponse> {
    return this.rpc.unary(
      MsgDonateAllVestingTokensDesc,
      MsgDonateAllVestingTokens.fromPartial(request),
      metadata,
    );
  }
}

export const MsgDesc = {
  serviceName: "cosmos.vesting.v1beta1.Msg",
};

export const MsgCreateVestingAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreateVestingAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateVestingAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateVestingAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCreatePermanentLockedAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePermanentLockedAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreatePermanentLockedAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePermanentLockedAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCreatePeriodicVestingAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePeriodicVestingAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreatePeriodicVestingAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePeriodicVestingAccountResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDonateAllVestingTokensDesc: UnaryMethodDefinitionish = {
  methodName: "DonateAllVestingTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDonateAllVestingTokens.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDonateAllVestingTokensResponse.decode(data),
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
