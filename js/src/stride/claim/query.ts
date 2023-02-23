/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../stride/claim/params";
import { ClaimRecord, Action, actionFromJSON, actionToJSON } from "../../stride/claim/claim";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Period } from "../../stride/vesting/vesting";

export const protobufPackage = "stride.claim";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
  airdropIdentifier: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
  /** params defines the parameters of the module. */
  distributorAccountBalance: Coin[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

export interface QueryClaimRecordRequest {
  airdropIdentifier: string;
  address: string;
}

export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}

export interface QueryClaimableForActionRequest {
  airdropIdentifier: string;
  address: string;
  action: Action;
}

export interface QueryClaimableForActionResponse {
  coins: Coin[];
}

export interface QueryTotalClaimableRequest {
  airdropIdentifier: string;
  address: string;
}

export interface QueryTotalClaimableResponse {
  coins: Coin[];
}

export interface QueryUserVestingsRequest {
  address: string;
}

export interface QueryUserVestingsResponse {
  spendableCoins: Coin[];
  periods: Period[];
}

const baseQueryDistributorAccountBalanceRequest: object = { airdropIdentifier: "" };

export const QueryDistributorAccountBalanceRequest = {
  encode(
    message: QueryDistributorAccountBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDistributorAccountBalanceRequest } as QueryDistributorAccountBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDistributorAccountBalanceRequest {
    const message = { ...baseQueryDistributorAccountBalanceRequest } as QueryDistributorAccountBalanceRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    return message;
  },

  toJSON(message: QueryDistributorAccountBalanceRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDistributorAccountBalanceRequest>,
  ): QueryDistributorAccountBalanceRequest {
    const message = { ...baseQueryDistributorAccountBalanceRequest } as QueryDistributorAccountBalanceRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    return message;
  },
};

const baseQueryDistributorAccountBalanceResponse: object = {};

export const QueryDistributorAccountBalanceResponse = {
  encode(
    message: QueryDistributorAccountBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.distributorAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDistributorAccountBalanceResponse,
    } as QueryDistributorAccountBalanceResponse;
    message.distributorAccountBalance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributorAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDistributorAccountBalanceResponse {
    const message = {
      ...baseQueryDistributorAccountBalanceResponse,
    } as QueryDistributorAccountBalanceResponse;
    message.distributorAccountBalance = [];
    if (object.distributorAccountBalance !== undefined && object.distributorAccountBalance !== null) {
      for (const e of object.distributorAccountBalance) {
        message.distributorAccountBalance.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDistributorAccountBalanceResponse): unknown {
    const obj: any = {};
    if (message.distributorAccountBalance) {
      obj.distributorAccountBalance = message.distributorAccountBalance.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.distributorAccountBalance = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDistributorAccountBalanceResponse>,
  ): QueryDistributorAccountBalanceResponse {
    const message = {
      ...baseQueryDistributorAccountBalanceResponse,
    } as QueryDistributorAccountBalanceResponse;
    message.distributorAccountBalance = [];
    if (object.distributorAccountBalance !== undefined && object.distributorAccountBalance !== null) {
      for (const e of object.distributorAccountBalance) {
        message.distributorAccountBalance.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryClaimRecordRequest: object = { airdropIdentifier: "", address: "" };

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordRequest {
    const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryClaimRecordRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryClaimRecordResponse: object = {};

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordResponse {
    const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
    if (object.claimRecord !== undefined && object.claimRecord !== null) {
      message.claimRecord = ClaimRecord.fromJSON(object.claimRecord);
    } else {
      message.claimRecord = undefined;
    }
    return message;
  },

  toJSON(message: QueryClaimRecordResponse): unknown {
    const obj: any = {};
    message.claimRecord !== undefined &&
      (obj.claimRecord = message.claimRecord ? ClaimRecord.toJSON(message.claimRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
    if (object.claimRecord !== undefined && object.claimRecord !== null) {
      message.claimRecord = ClaimRecord.fromPartial(object.claimRecord);
    } else {
      message.claimRecord = undefined;
    }
    return message;
  },
};

const baseQueryClaimableForActionRequest: object = { airdropIdentifier: "", address: "", action: 0 };

export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableForActionRequest {
    const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = actionFromJSON(object.action);
    } else {
      message.action = 0;
    }
    return message;
  },

  toJSON(message: QueryClaimableForActionRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    return message;
  },
};

const baseQueryClaimableForActionResponse: object = {};

export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableForActionResponse {
    const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
    message.coins = [];
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryClaimableForActionResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
    message.coins = [];
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryTotalClaimableRequest: object = { airdropIdentifier: "", address: "" };

export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalClaimableRequest {
    const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = String(object.airdropIdentifier);
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryTotalClaimableRequest): unknown {
    const obj: any = {};
    message.airdropIdentifier !== undefined && (obj.airdropIdentifier = message.airdropIdentifier);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
    if (object.airdropIdentifier !== undefined && object.airdropIdentifier !== null) {
      message.airdropIdentifier = object.airdropIdentifier;
    } else {
      message.airdropIdentifier = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryTotalClaimableResponse: object = {};

export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalClaimableResponse {
    const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
    message.coins = [];
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTotalClaimableResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
    message.coins = [];
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryUserVestingsRequest: object = { address: "" };

export const QueryUserVestingsRequest = {
  encode(message: QueryUserVestingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserVestingsRequest } as QueryUserVestingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVestingsRequest {
    const message = { ...baseQueryUserVestingsRequest } as QueryUserVestingsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryUserVestingsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserVestingsRequest>): QueryUserVestingsRequest {
    const message = { ...baseQueryUserVestingsRequest } as QueryUserVestingsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryUserVestingsResponse: object = {};

export const QueryUserVestingsResponse = {
  encode(message: QueryUserVestingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserVestingsResponse } as QueryUserVestingsResponse;
    message.spendableCoins = [];
    message.periods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.spendableCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 1:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVestingsResponse {
    const message = { ...baseQueryUserVestingsResponse } as QueryUserVestingsResponse;
    message.spendableCoins = [];
    message.periods = [];
    if (object.spendableCoins !== undefined && object.spendableCoins !== null) {
      for (const e of object.spendableCoins) {
        message.spendableCoins.push(Coin.fromJSON(e));
      }
    }
    if (object.periods !== undefined && object.periods !== null) {
      for (const e of object.periods) {
        message.periods.push(Period.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryUserVestingsResponse): unknown {
    const obj: any = {};
    if (message.spendableCoins) {
      obj.spendableCoins = message.spendableCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.spendableCoins = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.periods = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUserVestingsResponse>): QueryUserVestingsResponse {
    const message = { ...baseQueryUserVestingsResponse } as QueryUserVestingsResponse;
    message.spendableCoins = [];
    message.periods = [];
    if (object.spendableCoins !== undefined && object.spendableCoins !== null) {
      for (const e of object.spendableCoins) {
        message.spendableCoins.push(Coin.fromPartial(e));
      }
    }
    if (object.periods !== undefined && object.periods !== null) {
      for (const e of object.periods) {
        message.periods.push(Period.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  DistributorAccountBalance(
    request: DeepPartial<QueryDistributorAccountBalanceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDistributorAccountBalanceResponse>;
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  ClaimRecord(
    request: DeepPartial<QueryClaimRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimRecordResponse>;
  ClaimableForAction(
    request: DeepPartial<QueryClaimableForActionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimableForActionResponse>;
  TotalClaimable(
    request: DeepPartial<QueryTotalClaimableRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalClaimableResponse>;
  UserVestings(
    request: DeepPartial<QueryUserVestingsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUserVestingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DistributorAccountBalance = this.DistributorAccountBalance.bind(this);
    this.Params = this.Params.bind(this);
    this.ClaimRecord = this.ClaimRecord.bind(this);
    this.ClaimableForAction = this.ClaimableForAction.bind(this);
    this.TotalClaimable = this.TotalClaimable.bind(this);
    this.UserVestings = this.UserVestings.bind(this);
  }

  DistributorAccountBalance(
    request: DeepPartial<QueryDistributorAccountBalanceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDistributorAccountBalanceResponse> {
    return this.rpc.unary(
      QueryDistributorAccountBalanceDesc,
      QueryDistributorAccountBalanceRequest.fromPartial(request),
      metadata,
    );
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  ClaimRecord(
    request: DeepPartial<QueryClaimRecordRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimRecordResponse> {
    return this.rpc.unary(QueryClaimRecordDesc, QueryClaimRecordRequest.fromPartial(request), metadata);
  }

  ClaimableForAction(
    request: DeepPartial<QueryClaimableForActionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClaimableForActionResponse> {
    return this.rpc.unary(
      QueryClaimableForActionDesc,
      QueryClaimableForActionRequest.fromPartial(request),
      metadata,
    );
  }

  TotalClaimable(
    request: DeepPartial<QueryTotalClaimableRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalClaimableResponse> {
    return this.rpc.unary(QueryTotalClaimableDesc, QueryTotalClaimableRequest.fromPartial(request), metadata);
  }

  UserVestings(
    request: DeepPartial<QueryUserVestingsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUserVestingsResponse> {
    return this.rpc.unary(QueryUserVestingsDesc, QueryUserVestingsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "stride.claim.Query",
};

export const QueryDistributorAccountBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "DistributorAccountBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDistributorAccountBalanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDistributorAccountBalanceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClaimRecordDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimRecordResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClaimableForActionDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimableForAction",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimableForActionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimableForActionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTotalClaimableDesc: UnaryMethodDefinitionish = {
  methodName: "TotalClaimable",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalClaimableRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalClaimableResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryUserVestingsDesc: UnaryMethodDefinitionish = {
  methodName: "UserVestings",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUserVestingsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUserVestingsResponse.decode(data),
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
