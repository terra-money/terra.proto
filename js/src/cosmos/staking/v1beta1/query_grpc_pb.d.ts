// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/query.proto

import * as cosmos_staking_v1beta1_query_pb from "../../../cosmos/staking/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  validators: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse
  >;
  validator: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorResponse
  >;
  validatorDelegations: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse
  >;
  validatorUnbondingDelegations: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse
  >;
  delegation: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegationResponse
  >;
  unbondingDelegation: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse
  >;
  delegatorDelegations: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse
  >;
  delegatorUnbondingDelegations: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse
  >;
  redelegations: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse
  >;
  delegatorValidators: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse
  >;
  delegatorValidator: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse
  >;
  historicalInfo: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse
  >;
  pool: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    cosmos_staking_v1beta1_query_pb.QueryPoolResponse
  >;
  params: grpc.MethodDefinition<
    cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    cosmos_staking_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  validators: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse
  >;
  validator: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorResponse
  >;
  validatorDelegations: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse
  >;
  validatorUnbondingDelegations: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse
  >;
  delegation: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegationResponse
  >;
  unbondingDelegation: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse
  >;
  delegatorDelegations: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse
  >;
  delegatorUnbondingDelegations: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse
  >;
  redelegations: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse
  >;
  delegatorValidators: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse
  >;
  delegatorValidator: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse
  >;
  historicalInfo: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse
  >;
  pool: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    cosmos_staking_v1beta1_query_pb.QueryPoolResponse
  >;
  params: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    cosmos_staking_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  validators(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  validators(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  validators(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  validator(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorResponse>,
  ): grpc.ClientUnaryCall;
  validator(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorResponse>,
  ): grpc.ClientUnaryCall;
  validator(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorResponse>,
  ): grpc.ClientUnaryCall;
  validatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  validatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  validatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  validatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  validatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  validatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegationResponse>,
  ): grpc.ClientUnaryCall;
  delegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegationResponse>,
  ): grpc.ClientUnaryCall;
  delegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegationResponse>,
  ): grpc.ClientUnaryCall;
  unbondingDelegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse>,
  ): grpc.ClientUnaryCall;
  unbondingDelegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse>,
  ): grpc.ClientUnaryCall;
  unbondingDelegation(
    argument: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse>,
  ): grpc.ClientUnaryCall;
  delegatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorUnbondingDelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse>,
  ): grpc.ClientUnaryCall;
  redelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse>,
  ): grpc.ClientUnaryCall;
  redelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse>,
  ): grpc.ClientUnaryCall;
  redelegations(
    argument: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidator(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidator(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidator(
    argument: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse>,
  ): grpc.ClientUnaryCall;
  historicalInfo(
    argument: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse>,
  ): grpc.ClientUnaryCall;
  historicalInfo(
    argument: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse>,
  ): grpc.ClientUnaryCall;
  historicalInfo(
    argument: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse>,
  ): grpc.ClientUnaryCall;
  pool(
    argument: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryPoolResponse>,
  ): grpc.ClientUnaryCall;
  pool(
    argument: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryPoolResponse>,
  ): grpc.ClientUnaryCall;
  pool(
    argument: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryPoolResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
