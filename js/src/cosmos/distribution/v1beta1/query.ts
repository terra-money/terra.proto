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
import {
  Params,
  ValidatorOutstandingRewards,
  ValidatorAccumulatedCommission,
  ValidatorSlashEvent,
  DelegationDelegatorReward,
} from "../../../cosmos/distribution/v1beta1/distribution";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.distribution.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards?: ValidatorOutstandingRewards;
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission?: ValidatorAccumulatedCommission;
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: Long;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

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

const baseQueryValidatorOutstandingRewardsRequest: object = { validatorAddress: "" };

export const QueryValidatorOutstandingRewardsRequest = {
  encode(
    message: QueryValidatorOutstandingRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorOutstandingRewardsRequest,
    } as QueryValidatorOutstandingRewardsRequest;
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

  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    const message = {
      ...baseQueryValidatorOutstandingRewardsRequest,
    } as QueryValidatorOutstandingRewardsRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
  ): QueryValidatorOutstandingRewardsRequest {
    const message = {
      ...baseQueryValidatorOutstandingRewardsRequest,
    } as QueryValidatorOutstandingRewardsRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseQueryValidatorOutstandingRewardsResponse: object = {};

export const QueryValidatorOutstandingRewardsResponse = {
  encode(
    message: QueryValidatorOutstandingRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidatorOutstandingRewardsResponse,
    } as QueryValidatorOutstandingRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    const message = {
      ...baseQueryValidatorOutstandingRewardsResponse,
    } as QueryValidatorOutstandingRewardsResponse;
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
    } else {
      message.rewards = undefined;
    }
    return message;
  },

  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidatorOutstandingRewardsResponse>,
  ): QueryValidatorOutstandingRewardsResponse {
    const message = {
      ...baseQueryValidatorOutstandingRewardsResponse,
    } as QueryValidatorOutstandingRewardsResponse;
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
    } else {
      message.rewards = undefined;
    }
    return message;
  },
};

const baseQueryValidatorCommissionRequest: object = { validatorAddress: "" };

export const QueryValidatorCommissionRequest = {
  encode(message: QueryValidatorCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
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

  fromJSON(object: any): QueryValidatorCommissionRequest {
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseQueryValidatorCommissionResponse: object = {};

export const QueryValidatorCommissionResponse = {
  encode(message: QueryValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionResponse {
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
    } else {
      message.commission = undefined;
    }
    return message;
  },

  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? ValidatorAccumulatedCommission.toJSON(message.commission)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
    } else {
      message.commission = undefined;
    }
    return message;
  },
};

const baseQueryValidatorSlashesRequest: object = {
  validatorAddress: "",
  startingHeight: Long.UZERO,
  endingHeight: Long.UZERO,
};

export const QueryValidatorSlashesRequest = {
  encode(message: QueryValidatorSlashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.startingHeight.isZero()) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (!message.endingHeight.isZero()) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64() as Long;
          break;
        case 3:
          message.endingHeight = reader.uint64() as Long;
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSlashesRequest {
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = Long.fromString(object.startingHeight);
    } else {
      message.startingHeight = Long.UZERO;
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = Long.fromString(object.endingHeight);
    } else {
      message.endingHeight = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined &&
      (obj.startingHeight = (message.startingHeight || Long.UZERO).toString());
    message.endingHeight !== undefined &&
      (obj.endingHeight = (message.endingHeight || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = object.startingHeight as Long;
    } else {
      message.startingHeight = Long.UZERO;
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = object.endingHeight as Long;
    } else {
      message.endingHeight = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryValidatorSlashesResponse: object = {};

export const QueryValidatorSlashesResponse = {
  encode(message: QueryValidatorSlashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorSlashesResponse {
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    if (object.slashes !== undefined && object.slashes !== null) {
      for (const e of object.slashes) {
        message.slashes.push(ValidatorSlashEvent.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => (e ? ValidatorSlashEvent.toJSON(e) : undefined));
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    if (object.slashes !== undefined && object.slashes !== null) {
      for (const e of object.slashes) {
        message.slashes.push(ValidatorSlashEvent.fromPartial(e));
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

const baseQueryDelegationRewardsRequest: object = { delegatorAddress: "", validatorAddress: "" };

export const QueryDelegationRewardsRequest = {
  encode(message: QueryDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
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

  fromJSON(object: any): QueryDelegationRewardsRequest {
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
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

  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
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

const baseQueryDelegationRewardsResponse: object = {};

export const QueryDelegationRewardsResponse = {
  encode(message: QueryDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsResponse {
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryDelegationTotalRewardsRequest: object = { delegatorAddress: "" };

export const QueryDelegationTotalRewardsRequest = {
  encode(message: QueryDelegationTotalRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegationTotalRewardsResponse: object = {};

export const QueryDelegationTotalRewardsResponse = {
  encode(message: QueryDelegationTotalRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DelegationDelegatorReward.fromJSON(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DelegationDelegatorReward.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DelegationDelegatorReward.fromPartial(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryDelegatorValidatorsRequest: object = { delegatorAddress: "" };

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegatorValidatorsResponse: object = { validators: "" };

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(e);
      }
    }
    return message;
  },
};

const baseQueryDelegatorWithdrawAddressRequest: object = { delegatorAddress: "" };

export const QueryDelegatorWithdrawAddressRequest = {
  encode(
    message: QueryDelegatorWithdrawAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
  ): QueryDelegatorWithdrawAddressRequest {
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
};

const baseQueryDelegatorWithdrawAddressResponse: object = { withdrawAddress: "" };

export const QueryDelegatorWithdrawAddressResponse = {
  encode(
    message: QueryDelegatorWithdrawAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = String(object.withdrawAddress);
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorWithdrawAddressResponse>,
  ): QueryDelegatorWithdrawAddressResponse {
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = object.withdrawAddress;
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
};

const baseQueryCommunityPoolRequest: object = {};

export const QueryCommunityPoolRequest = {
  encode(_: QueryCommunityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
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

  fromJSON(_: any): QueryCommunityPoolRequest {
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
    return message;
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
    return message;
  },
};

const baseQueryCommunityPoolResponse: object = {};

export const QueryCommunityPoolResponse = {
  encode(message: QueryCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service for distribution module. */
export const QueryService = {
  /** Params queries params of the distribution module. */
  params: {
    path: "/cosmos.distribution.v1beta1.Query/Params",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryParamsRequest) => Buffer.from(QueryParamsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryParamsRequest.decode(value),
    responseSerialize: (value: QueryParamsResponse) =>
      Buffer.from(QueryParamsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryParamsResponse.decode(value),
  },
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards: {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryValidatorOutstandingRewardsRequest) =>
      Buffer.from(QueryValidatorOutstandingRewardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryValidatorOutstandingRewardsRequest.decode(value),
    responseSerialize: (value: QueryValidatorOutstandingRewardsResponse) =>
      Buffer.from(QueryValidatorOutstandingRewardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryValidatorOutstandingRewardsResponse.decode(value),
  },
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission: {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorCommission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryValidatorCommissionRequest) =>
      Buffer.from(QueryValidatorCommissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryValidatorCommissionRequest.decode(value),
    responseSerialize: (value: QueryValidatorCommissionResponse) =>
      Buffer.from(QueryValidatorCommissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryValidatorCommissionResponse.decode(value),
  },
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes: {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorSlashes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryValidatorSlashesRequest) =>
      Buffer.from(QueryValidatorSlashesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryValidatorSlashesRequest.decode(value),
    responseSerialize: (value: QueryValidatorSlashesResponse) =>
      Buffer.from(QueryValidatorSlashesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryValidatorSlashesResponse.decode(value),
  },
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards: {
    path: "/cosmos.distribution.v1beta1.Query/DelegationRewards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDelegationRewardsRequest) =>
      Buffer.from(QueryDelegationRewardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDelegationRewardsRequest.decode(value),
    responseSerialize: (value: QueryDelegationRewardsResponse) =>
      Buffer.from(QueryDelegationRewardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDelegationRewardsResponse.decode(value),
  },
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards: {
    path: "/cosmos.distribution.v1beta1.Query/DelegationTotalRewards",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDelegationTotalRewardsRequest) =>
      Buffer.from(QueryDelegationTotalRewardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDelegationTotalRewardsRequest.decode(value),
    responseSerialize: (value: QueryDelegationTotalRewardsResponse) =>
      Buffer.from(QueryDelegationTotalRewardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDelegationTotalRewardsResponse.decode(value),
  },
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators: {
    path: "/cosmos.distribution.v1beta1.Query/DelegatorValidators",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDelegatorValidatorsRequest) =>
      Buffer.from(QueryDelegatorValidatorsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDelegatorValidatorsRequest.decode(value),
    responseSerialize: (value: QueryDelegatorValidatorsResponse) =>
      Buffer.from(QueryDelegatorValidatorsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDelegatorValidatorsResponse.decode(value),
  },
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress: {
    path: "/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryDelegatorWithdrawAddressRequest) =>
      Buffer.from(QueryDelegatorWithdrawAddressRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryDelegatorWithdrawAddressRequest.decode(value),
    responseSerialize: (value: QueryDelegatorWithdrawAddressResponse) =>
      Buffer.from(QueryDelegatorWithdrawAddressResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryDelegatorWithdrawAddressResponse.decode(value),
  },
  /** CommunityPool queries the community pool coins. */
  communityPool: {
    path: "/cosmos.distribution.v1beta1.Query/CommunityPool",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryCommunityPoolRequest) =>
      Buffer.from(QueryCommunityPoolRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryCommunityPoolRequest.decode(value),
    responseSerialize: (value: QueryCommunityPoolResponse) =>
      Buffer.from(QueryCommunityPoolResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryCommunityPoolResponse.decode(value),
  },
} as const;

export interface QueryServer extends UntypedServiceImplementation {
  /** Params queries params of the distribution module. */
  params: handleUnaryCall<QueryParamsRequest, QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards: handleUnaryCall<
    QueryValidatorOutstandingRewardsRequest,
    QueryValidatorOutstandingRewardsResponse
  >;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission: handleUnaryCall<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes: handleUnaryCall<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards: handleUnaryCall<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards: handleUnaryCall<
    QueryDelegationTotalRewardsRequest,
    QueryDelegationTotalRewardsResponse
  >;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators: handleUnaryCall<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress: handleUnaryCall<
    QueryDelegatorWithdrawAddressRequest,
    QueryDelegatorWithdrawAddressResponse
  >;
  /** CommunityPool queries the community pool coins. */
  communityPool: handleUnaryCall<QueryCommunityPoolRequest, QueryCommunityPoolResponse>;
}

export interface QueryClient extends Client {
  /** Params queries params of the distribution module. */
  params(
    request: QueryParamsRequest,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  params(
    request: QueryParamsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryParamsResponse) => void,
  ): ClientUnaryCall;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
    callback: (error: ServiceError | null, response: QueryValidatorOutstandingRewardsResponse) => void,
  ): ClientUnaryCall;
  validatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryValidatorOutstandingRewardsResponse) => void,
  ): ClientUnaryCall;
  validatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryValidatorOutstandingRewardsResponse) => void,
  ): ClientUnaryCall;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(
    request: QueryValidatorCommissionRequest,
    callback: (error: ServiceError | null, response: QueryValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  validatorCommission(
    request: QueryValidatorCommissionRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  validatorCommission(
    request: QueryValidatorCommissionRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryValidatorCommissionResponse) => void,
  ): ClientUnaryCall;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(
    request: QueryValidatorSlashesRequest,
    callback: (error: ServiceError | null, response: QueryValidatorSlashesResponse) => void,
  ): ClientUnaryCall;
  validatorSlashes(
    request: QueryValidatorSlashesRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryValidatorSlashesResponse) => void,
  ): ClientUnaryCall;
  validatorSlashes(
    request: QueryValidatorSlashesRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryValidatorSlashesResponse) => void,
  ): ClientUnaryCall;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(
    request: QueryDelegationRewardsRequest,
    callback: (error: ServiceError | null, response: QueryDelegationRewardsResponse) => void,
  ): ClientUnaryCall;
  delegationRewards(
    request: QueryDelegationRewardsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDelegationRewardsResponse) => void,
  ): ClientUnaryCall;
  delegationRewards(
    request: QueryDelegationRewardsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDelegationRewardsResponse) => void,
  ): ClientUnaryCall;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
    callback: (error: ServiceError | null, response: QueryDelegationTotalRewardsResponse) => void,
  ): ClientUnaryCall;
  delegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDelegationTotalRewardsResponse) => void,
  ): ClientUnaryCall;
  delegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDelegationTotalRewardsResponse) => void,
  ): ClientUnaryCall;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(
    request: QueryDelegatorValidatorsRequest,
    callback: (error: ServiceError | null, response: QueryDelegatorValidatorsResponse) => void,
  ): ClientUnaryCall;
  delegatorValidators(
    request: QueryDelegatorValidatorsRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDelegatorValidatorsResponse) => void,
  ): ClientUnaryCall;
  delegatorValidators(
    request: QueryDelegatorValidatorsRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDelegatorValidatorsResponse) => void,
  ): ClientUnaryCall;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
    callback: (error: ServiceError | null, response: QueryDelegatorWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  delegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryDelegatorWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  delegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryDelegatorWithdrawAddressResponse) => void,
  ): ClientUnaryCall;
  /** CommunityPool queries the community pool coins. */
  communityPool(
    request: QueryCommunityPoolRequest,
    callback: (error: ServiceError | null, response: QueryCommunityPoolResponse) => void,
  ): ClientUnaryCall;
  communityPool(
    request: QueryCommunityPoolRequest,
    metadata: Metadata1,
    callback: (error: ServiceError | null, response: QueryCommunityPoolResponse) => void,
  ): ClientUnaryCall;
  communityPool(
    request: QueryCommunityPoolRequest,
    metadata: Metadata1,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryCommunityPoolResponse) => void,
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "cosmos.distribution.v1beta1.Query",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): QueryClient;
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
