/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, Metadata, SendEnabled } from "../../../cosmos/bank/v1beta1/bank";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "cosmos.bank.v1beta1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the coin. */
  balance?: Coin;
}

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
  /** balances is the spendable balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponse {
  /** balance is the balance of the coin. */
  balance?: Coin;
}

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
  /**
   * pagination defines an optional pagination for the request.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequest;
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageResponse;
}

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount?: Coin;
}

/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
  /** metadata provides the client information for all the registered tokens. */
  metadatas: Metadata[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
  /** metadata describes and provides all the client information for the requested token. */
  metadata?: Metadata;
}

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */
  balance?: Coin;
}

/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
  denomOwners: DenomOwner[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequest {
  /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
  denoms: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   */
  pagination?: PageRequest;
}

/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponse {
  sendEnabled: SendEnabled[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   */
  pagination?: PageResponse;
}

const baseQueryBalanceRequest: object = { address: "", denom: "" };

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryBalanceResponse: object = {};

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
};

const baseQueryAllBalancesRequest: object = { address: "" };

export const QueryAllBalancesRequest = {
  encode(message: QueryAllBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBalancesRequest {
    const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest {
    const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBalancesResponse: object = {};

export const QueryAllBalancesResponse = {
  encode(message: QueryAllBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
    message.balances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBalancesResponse {
    const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
    message.balances = [];
    if (object.balances !== undefined && object.balances !== null) {
      for (const e of object.balances) {
        message.balances.push(Coin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse {
    const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
    message.balances = [];
    if (object.balances !== undefined && object.balances !== null) {
      for (const e of object.balances) {
        message.balances.push(Coin.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySpendableBalancesRequest: object = { address: "" };

export const QuerySpendableBalancesRequest = {
  encode(message: QuerySpendableBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableBalancesRequest } as QuerySpendableBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpendableBalancesRequest {
    const message = { ...baseQuerySpendableBalancesRequest } as QuerySpendableBalancesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySpendableBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest {
    const message = { ...baseQuerySpendableBalancesRequest } as QuerySpendableBalancesRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySpendableBalancesResponse: object = {};

export const QuerySpendableBalancesResponse = {
  encode(message: QuerySpendableBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableBalancesResponse } as QuerySpendableBalancesResponse;
    message.balances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpendableBalancesResponse {
    const message = { ...baseQuerySpendableBalancesResponse } as QuerySpendableBalancesResponse;
    message.balances = [];
    if (object.balances !== undefined && object.balances !== null) {
      for (const e of object.balances) {
        message.balances.push(Coin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySpendableBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse {
    const message = { ...baseQuerySpendableBalancesResponse } as QuerySpendableBalancesResponse;
    message.balances = [];
    if (object.balances !== undefined && object.balances !== null) {
      for (const e of object.balances) {
        message.balances.push(Coin.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySpendableBalanceByDenomRequest: object = { address: "", denom: "" };

export const QuerySpendableBalanceByDenomRequest = {
  encode(message: QuerySpendableBalanceByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableBalanceByDenomRequest } as QuerySpendableBalanceByDenomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QuerySpendableBalanceByDenomRequest {
    const message = { ...baseQuerySpendableBalanceByDenomRequest } as QuerySpendableBalanceByDenomRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QuerySpendableBalanceByDenomRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomRequest>): QuerySpendableBalanceByDenomRequest {
    const message = { ...baseQuerySpendableBalanceByDenomRequest } as QuerySpendableBalanceByDenomRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQuerySpendableBalanceByDenomResponse: object = {};

export const QuerySpendableBalanceByDenomResponse = {
  encode(
    message: QuerySpendableBalanceByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableBalanceByDenomResponse } as QuerySpendableBalanceByDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpendableBalanceByDenomResponse {
    const message = { ...baseQuerySpendableBalanceByDenomResponse } as QuerySpendableBalanceByDenomResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },

  toJSON(message: QuerySpendableBalanceByDenomResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySpendableBalanceByDenomResponse>,
  ): QuerySpendableBalanceByDenomResponse {
    const message = { ...baseQuerySpendableBalanceByDenomResponse } as QuerySpendableBalanceByDenomResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
};

const baseQueryTotalSupplyRequest: object = {};

export const QueryTotalSupplyRequest = {
  encode(message: QueryTotalSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSupplyRequest {
    const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTotalSupplyResponse: object = {};

export const QueryTotalSupplyResponse = {
  encode(message: QueryTotalSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
    message.supply = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSupplyResponse {
    const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
    message.supply = [];
    if (object.supply !== undefined && object.supply !== null) {
      for (const e of object.supply) {
        message.supply.push(Coin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
    message.supply = [];
    if (object.supply !== undefined && object.supply !== null) {
      for (const e of object.supply) {
        message.supply.push(Coin.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySupplyOfRequest: object = { denom: "" };

export const QuerySupplyOfRequest = {
  encode(message: QuerySupplyOfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyOfRequest {
    const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest {
    const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQuerySupplyOfResponse: object = {};

export const QuerySupplyOfResponse = {
  encode(message: QuerySupplyOfResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyOfResponse {
    const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: QuerySupplyOfResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse {
    const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
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

const baseQueryDenomsMetadataRequest: object = {};

export const QueryDenomsMetadataRequest = {
  encode(message: QueryDenomsMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsMetadataRequest } as QueryDenomsMetadataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsMetadataRequest {
    const message = { ...baseQueryDenomsMetadataRequest } as QueryDenomsMetadataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomsMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest {
    const message = { ...baseQueryDenomsMetadataRequest } as QueryDenomsMetadataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDenomsMetadataResponse: object = {};

export const QueryDenomsMetadataResponse = {
  encode(message: QueryDenomsMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadatas) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsMetadataResponse } as QueryDenomsMetadataResponse;
    message.metadatas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsMetadataResponse {
    const message = { ...baseQueryDenomsMetadataResponse } as QueryDenomsMetadataResponse;
    message.metadatas = [];
    if (object.metadatas !== undefined && object.metadatas !== null) {
      for (const e of object.metadatas) {
        message.metadatas.push(Metadata.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomsMetadataResponse): unknown {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) => (e ? Metadata.toJSON(e) : undefined));
    } else {
      obj.metadatas = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse {
    const message = { ...baseQueryDenomsMetadataResponse } as QueryDenomsMetadataResponse;
    message.metadatas = [];
    if (object.metadatas !== undefined && object.metadatas !== null) {
      for (const e of object.metadatas) {
        message.metadatas.push(Metadata.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDenomMetadataRequest: object = { denom: "" };

export const QueryDenomMetadataRequest = {
  encode(message: QueryDenomMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomMetadataRequest } as QueryDenomMetadataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomMetadataRequest {
    const message = { ...baseQueryDenomMetadataRequest } as QueryDenomMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryDenomMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest {
    const message = { ...baseQueryDenomMetadataRequest } as QueryDenomMetadataRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryDenomMetadataResponse: object = {};

export const QueryDenomMetadataResponse = {
  encode(message: QueryDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomMetadataResponse } as QueryDenomMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomMetadataResponse {
    const message = { ...baseQueryDenomMetadataResponse } as QueryDenomMetadataResponse;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse {
    const message = { ...baseQueryDenomMetadataResponse } as QueryDenomMetadataResponse;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

const baseQueryDenomOwnersRequest: object = { denom: "" };

export const QueryDenomOwnersRequest = {
  encode(message: QueryDenomOwnersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomOwnersRequest } as QueryDenomOwnersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomOwnersRequest {
    const message = { ...baseQueryDenomOwnersRequest } as QueryDenomOwnersRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomOwnersRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest {
    const message = { ...baseQueryDenomOwnersRequest } as QueryDenomOwnersRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseDenomOwner: object = { address: "" };

export const DenomOwner = {
  encode(message: DenomOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomOwner } as DenomOwner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomOwner {
    const message = { ...baseDenomOwner } as DenomOwner;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },

  toJSON(message: DenomOwner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomOwner>): DenomOwner {
    const message = { ...baseDenomOwner } as DenomOwner;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
};

const baseQueryDenomOwnersResponse: object = {};

export const QueryDenomOwnersResponse = {
  encode(message: QueryDenomOwnersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomOwnersResponse } as QueryDenomOwnersResponse;
    message.denomOwners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomOwnersResponse {
    const message = { ...baseQueryDenomOwnersResponse } as QueryDenomOwnersResponse;
    message.denomOwners = [];
    if (object.denomOwners !== undefined && object.denomOwners !== null) {
      for (const e of object.denomOwners) {
        message.denomOwners.push(DenomOwner.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomOwnersResponse): unknown {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map((e) => (e ? DenomOwner.toJSON(e) : undefined));
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse {
    const message = { ...baseQueryDenomOwnersResponse } as QueryDenomOwnersResponse;
    message.denomOwners = [];
    if (object.denomOwners !== undefined && object.denomOwners !== null) {
      for (const e of object.denomOwners) {
        message.denomOwners.push(DenomOwner.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySendEnabledRequest: object = { denoms: "" };

export const QuerySendEnabledRequest = {
  encode(message: QuerySendEnabledRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendEnabledRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySendEnabledRequest } as QuerySendEnabledRequest;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySendEnabledRequest {
    const message = { ...baseQuerySendEnabledRequest } as QuerySendEnabledRequest;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySendEnabledRequest): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySendEnabledRequest>): QuerySendEnabledRequest {
    const message = { ...baseQuerySendEnabledRequest } as QuerySendEnabledRequest;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySendEnabledResponse: object = {};

export const QuerySendEnabledResponse = {
  encode(message: QuerySendEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySendEnabledResponse } as QuerySendEnabledResponse;
    message.sendEnabled = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySendEnabledResponse {
    const message = { ...baseQuerySendEnabledResponse } as QuerySendEnabledResponse;
    message.sendEnabled = [];
    if (object.sendEnabled !== undefined && object.sendEnabled !== null) {
      for (const e of object.sendEnabled) {
        message.sendEnabled.push(SendEnabled.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySendEnabledResponse): unknown {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) => (e ? SendEnabled.toJSON(e) : undefined));
    } else {
      obj.sendEnabled = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySendEnabledResponse>): QuerySendEnabledResponse {
    const message = { ...baseQuerySendEnabledResponse } as QuerySendEnabledResponse;
    message.sendEnabled = [];
    if (object.sendEnabled !== undefined && object.sendEnabled !== null) {
      for (const e of object.sendEnabled) {
        message.sendEnabled.push(SendEnabled.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all coins for a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  AllBalances(
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   */
  SpendableBalances(
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalancesResponse>;
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.47
   */
  SpendableBalanceByDenom(
    request: DeepPartial<QuerySpendableBalanceByDenomRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalanceByDenomResponse>;
  /**
   * TotalSupply queries the total supply of all coins.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  TotalSupply(
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf queries the supply of a single coin.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  SupplyOf(
    request: DeepPartial<QuerySupplyOfRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata(
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  DenomsMetadata(
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   */
  DenomOwners(
    request: DeepPartial<QueryDenomOwnersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomOwnersResponse>;
  /**
   * SendEnabled queries for SendEnabled entries.
   *
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   *
   * Since: cosmos-sdk 0.47
   */
  SendEnabled(
    request: DeepPartial<QuerySendEnabledRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySendEnabledResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.SpendableBalances = this.SpendableBalances.bind(this);
    this.SpendableBalanceByDenom = this.SpendableBalanceByDenom.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomMetadata = this.DenomMetadata.bind(this);
    this.DenomsMetadata = this.DenomsMetadata.bind(this);
    this.DenomOwners = this.DenomOwners.bind(this);
    this.SendEnabled = this.SendEnabled.bind(this);
  }

  Balance(
    request: DeepPartial<QueryBalanceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }

  AllBalances(
    request: DeepPartial<QueryAllBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllBalancesResponse> {
    return this.rpc.unary(QueryAllBalancesDesc, QueryAllBalancesRequest.fromPartial(request), metadata);
  }

  SpendableBalances(
    request: DeepPartial<QuerySpendableBalancesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalancesResponse> {
    return this.rpc.unary(
      QuerySpendableBalancesDesc,
      QuerySpendableBalancesRequest.fromPartial(request),
      metadata,
    );
  }

  SpendableBalanceByDenom(
    request: DeepPartial<QuerySpendableBalanceByDenomRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySpendableBalanceByDenomResponse> {
    return this.rpc.unary(
      QuerySpendableBalanceByDenomDesc,
      QuerySpendableBalanceByDenomRequest.fromPartial(request),
      metadata,
    );
  }

  TotalSupply(
    request: DeepPartial<QueryTotalSupplyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalSupplyResponse> {
    return this.rpc.unary(QueryTotalSupplyDesc, QueryTotalSupplyRequest.fromPartial(request), metadata);
  }

  SupplyOf(
    request: DeepPartial<QuerySupplyOfRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySupplyOfResponse> {
    return this.rpc.unary(QuerySupplyOfDesc, QuerySupplyOfRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  DenomMetadata(
    request: DeepPartial<QueryDenomMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomMetadataResponse> {
    return this.rpc.unary(QueryDenomMetadataDesc, QueryDenomMetadataRequest.fromPartial(request), metadata);
  }

  DenomsMetadata(
    request: DeepPartial<QueryDenomsMetadataRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomsMetadataResponse> {
    return this.rpc.unary(QueryDenomsMetadataDesc, QueryDenomsMetadataRequest.fromPartial(request), metadata);
  }

  DenomOwners(
    request: DeepPartial<QueryDenomOwnersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDenomOwnersResponse> {
    return this.rpc.unary(QueryDenomOwnersDesc, QueryDenomOwnersRequest.fromPartial(request), metadata);
  }

  SendEnabled(
    request: DeepPartial<QuerySendEnabledRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySendEnabledResponse> {
    return this.rpc.unary(QuerySendEnabledDesc, QuerySendEnabledRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "cosmos.bank.v1beta1.Query",
};

export const QueryBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "Balance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryBalanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBalanceResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "AllBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllBalancesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllBalancesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QuerySpendableBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "SpendableBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySpendableBalancesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySpendableBalancesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QuerySpendableBalanceByDenomDesc: UnaryMethodDefinitionish = {
  methodName: "SpendableBalanceByDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySpendableBalanceByDenomRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySpendableBalanceByDenomResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTotalSupplyDesc: UnaryMethodDefinitionish = {
  methodName: "TotalSupply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalSupplyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalSupplyResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QuerySupplyOfDesc: UnaryMethodDefinitionish = {
  methodName: "SupplyOf",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySupplyOfRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySupplyOfResponse.decode(data),
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

export const QueryDenomMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryDenomsMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomsMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomsMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomsMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryDenomOwnersDesc: UnaryMethodDefinitionish = {
  methodName: "DenomOwners",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomOwnersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomOwnersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QuerySendEnabledDesc: UnaryMethodDefinitionish = {
  methodName: "SendEnabled",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySendEnabledRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySendEnabledResponse.decode(data),
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
