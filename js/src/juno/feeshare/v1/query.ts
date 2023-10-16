/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeShare } from "../../../juno/feeshare/v1/feeshare";
import { Params } from "../../../juno/feeshare/v1/genesis";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "juno.feeshare.v1";

/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponse {
  /** FeeShare is a slice of all stored Reveneue */
  feeshare: FeeShare[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequest {
  /** contract_address of a registered contract in bech32 format */
  contractAddress: string;
}

/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShare;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned FeeShare parameter */
  params?: Params;
}

/**
 * QueryDeployerFeeSharesRequest is the request type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesRequest {
  /** deployer_address in bech32 format */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDeployerFeeSharesResponse is the response type for the
 * Query/DeployerFeeShares RPC method.
 */
export interface QueryDeployerFeeSharesResponse {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * deployer
   */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryWithdrawerFeeSharesRequest is the request type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesRequest {
  /** withdrawer_address in bech32 format */
  withdrawerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryWithdrawerFeeSharesResponse is the response type for the
 * Query/WithdrawerFeeShares RPC method.
 */
export interface QueryWithdrawerFeeSharesResponse {
  /**
   * contract_addresses is the slice of registered contract addresses for a
   * withdrawer
   */
  contractAddresses: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

const baseQueryFeeSharesRequest: object = {};

export const QueryFeeSharesRequest = {
  encode(message: QueryFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeSharesRequest } as QueryFeeSharesRequest;
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

  fromJSON(object: any): QueryFeeSharesRequest {
    const message = { ...baseQueryFeeSharesRequest } as QueryFeeSharesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFeeSharesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSharesRequest>): QueryFeeSharesRequest {
    const message = { ...baseQueryFeeSharesRequest } as QueryFeeSharesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFeeSharesResponse: object = {};

export const QueryFeeSharesResponse = {
  encode(message: QueryFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeSharesResponse } as QueryFeeSharesResponse;
    message.feeshare = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeshare.push(FeeShare.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryFeeSharesResponse {
    const message = { ...baseQueryFeeSharesResponse } as QueryFeeSharesResponse;
    message.feeshare = [];
    if (object.feeshare !== undefined && object.feeshare !== null) {
      for (const e of object.feeshare) {
        message.feeshare.push(FeeShare.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFeeSharesResponse): unknown {
    const obj: any = {};
    if (message.feeshare) {
      obj.feeshare = message.feeshare.map((e) => (e ? FeeShare.toJSON(e) : undefined));
    } else {
      obj.feeshare = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSharesResponse>): QueryFeeSharesResponse {
    const message = { ...baseQueryFeeSharesResponse } as QueryFeeSharesResponse;
    message.feeshare = [];
    if (object.feeshare !== undefined && object.feeshare !== null) {
      for (const e of object.feeshare) {
        message.feeshare.push(FeeShare.fromPartial(e));
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

const baseQueryFeeShareRequest: object = { contractAddress: "" };

export const QueryFeeShareRequest = {
  encode(message: QueryFeeShareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeShareRequest } as QueryFeeShareRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeShareRequest {
    const message = { ...baseQueryFeeShareRequest } as QueryFeeShareRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryFeeShareRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeShareRequest>): QueryFeeShareRequest {
    const message = { ...baseQueryFeeShareRequest } as QueryFeeShareRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    return message;
  },
};

const baseQueryFeeShareResponse: object = {};

export const QueryFeeShareResponse = {
  encode(message: QueryFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeshare !== undefined) {
      FeeShare.encode(message.feeshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeShareResponse } as QueryFeeShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeshare = FeeShare.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeShareResponse {
    const message = { ...baseQueryFeeShareResponse } as QueryFeeShareResponse;
    if (object.feeshare !== undefined && object.feeshare !== null) {
      message.feeshare = FeeShare.fromJSON(object.feeshare);
    } else {
      message.feeshare = undefined;
    }
    return message;
  },

  toJSON(message: QueryFeeShareResponse): unknown {
    const obj: any = {};
    message.feeshare !== undefined &&
      (obj.feeshare = message.feeshare ? FeeShare.toJSON(message.feeshare) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeShareResponse>): QueryFeeShareResponse {
    const message = { ...baseQueryFeeShareResponse } as QueryFeeShareResponse;
    if (object.feeshare !== undefined && object.feeshare !== null) {
      message.feeshare = FeeShare.fromPartial(object.feeshare);
    } else {
      message.feeshare = undefined;
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

const baseQueryDeployerFeeSharesRequest: object = { deployerAddress: "" };

export const QueryDeployerFeeSharesRequest = {
  encode(message: QueryDeployerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDeployerFeeSharesRequest } as QueryDeployerFeeSharesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
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

  fromJSON(object: any): QueryDeployerFeeSharesRequest {
    const message = { ...baseQueryDeployerFeeSharesRequest } as QueryDeployerFeeSharesRequest;
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = String(object.deployerAddress);
    } else {
      message.deployerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDeployerFeeSharesRequest): unknown {
    const obj: any = {};
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSharesRequest>): QueryDeployerFeeSharesRequest {
    const message = { ...baseQueryDeployerFeeSharesRequest } as QueryDeployerFeeSharesRequest;
    if (object.deployerAddress !== undefined && object.deployerAddress !== null) {
      message.deployerAddress = object.deployerAddress;
    } else {
      message.deployerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDeployerFeeSharesResponse: object = { contractAddresses: "" };

export const QueryDeployerFeeSharesResponse = {
  encode(message: QueryDeployerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDeployerFeeSharesResponse } as QueryDeployerFeeSharesResponse;
    message.contractAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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

  fromJSON(object: any): QueryDeployerFeeSharesResponse {
    const message = { ...baseQueryDeployerFeeSharesResponse } as QueryDeployerFeeSharesResponse;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDeployerFeeSharesResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSharesResponse>): QueryDeployerFeeSharesResponse {
    const message = { ...baseQueryDeployerFeeSharesResponse } as QueryDeployerFeeSharesResponse;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(e);
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

const baseQueryWithdrawerFeeSharesRequest: object = { withdrawerAddress: "" };

export const QueryWithdrawerFeeSharesRequest = {
  encode(message: QueryWithdrawerFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryWithdrawerFeeSharesRequest } as QueryWithdrawerFeeSharesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawerAddress = reader.string();
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

  fromJSON(object: any): QueryWithdrawerFeeSharesRequest {
    const message = { ...baseQueryWithdrawerFeeSharesRequest } as QueryWithdrawerFeeSharesRequest;
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = String(object.withdrawerAddress);
    } else {
      message.withdrawerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryWithdrawerFeeSharesRequest): unknown {
    const obj: any = {};
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesRequest>): QueryWithdrawerFeeSharesRequest {
    const message = { ...baseQueryWithdrawerFeeSharesRequest } as QueryWithdrawerFeeSharesRequest;
    if (object.withdrawerAddress !== undefined && object.withdrawerAddress !== null) {
      message.withdrawerAddress = object.withdrawerAddress;
    } else {
      message.withdrawerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryWithdrawerFeeSharesResponse: object = { contractAddresses: "" };

export const QueryWithdrawerFeeSharesResponse = {
  encode(message: QueryWithdrawerFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryWithdrawerFeeSharesResponse } as QueryWithdrawerFeeSharesResponse;
    message.contractAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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

  fromJSON(object: any): QueryWithdrawerFeeSharesResponse {
    const message = { ...baseQueryWithdrawerFeeSharesResponse } as QueryWithdrawerFeeSharesResponse;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryWithdrawerFeeSharesResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSharesResponse>): QueryWithdrawerFeeSharesResponse {
    const message = { ...baseQueryWithdrawerFeeSharesResponse } as QueryWithdrawerFeeSharesResponse;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(e);
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
  /** FeeShares retrieves all registered FeeShares */
  FeeShares(
    request: DeepPartial<QueryFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeSharesResponse>;
  /** FeeShare retrieves a registered FeeShare for a given contract address */
  FeeShare(
    request: DeepPartial<QueryFeeShareRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeShareResponse>;
  /** Params retrieves the FeeShare module params */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * DeployerFeeShares retrieves all FeeShares that a given deployer has
   * registered
   */
  DeployerFeeShares(
    request: DeepPartial<QueryDeployerFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDeployerFeeSharesResponse>;
  /**
   * WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
   * address
   */
  WithdrawerFeeShares(
    request: DeepPartial<QueryWithdrawerFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryWithdrawerFeeSharesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FeeShares = this.FeeShares.bind(this);
    this.FeeShare = this.FeeShare.bind(this);
    this.Params = this.Params.bind(this);
    this.DeployerFeeShares = this.DeployerFeeShares.bind(this);
    this.WithdrawerFeeShares = this.WithdrawerFeeShares.bind(this);
  }

  FeeShares(
    request: DeepPartial<QueryFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeSharesResponse> {
    return this.rpc.unary(QueryFeeSharesDesc, QueryFeeSharesRequest.fromPartial(request), metadata);
  }

  FeeShare(
    request: DeepPartial<QueryFeeShareRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeShareResponse> {
    return this.rpc.unary(QueryFeeShareDesc, QueryFeeShareRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  DeployerFeeShares(
    request: DeepPartial<QueryDeployerFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDeployerFeeSharesResponse> {
    return this.rpc.unary(
      QueryDeployerFeeSharesDesc,
      QueryDeployerFeeSharesRequest.fromPartial(request),
      metadata,
    );
  }

  WithdrawerFeeShares(
    request: DeepPartial<QueryWithdrawerFeeSharesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryWithdrawerFeeSharesResponse> {
    return this.rpc.unary(
      QueryWithdrawerFeeSharesDesc,
      QueryWithdrawerFeeSharesRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "juno.feeshare.v1.Query",
};

export const QueryFeeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "FeeShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeSharesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeSharesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFeeShareDesc: UnaryMethodDefinitionish = {
  methodName: "FeeShare",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeShareRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeShareResponse.decode(data),
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

export const QueryDeployerFeeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "DeployerFeeShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDeployerFeeSharesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDeployerFeeSharesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryWithdrawerFeeSharesDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawerFeeShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryWithdrawerFeeSharesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryWithdrawerFeeSharesResponse.decode(data),
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
