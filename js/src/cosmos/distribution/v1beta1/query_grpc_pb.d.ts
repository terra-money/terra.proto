// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/query.proto

import * as cosmos_distribution_v1beta1_query_pb from "../../../cosmos/distribution/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  params: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryParamsResponse
  >;
  validatorOutstandingRewards: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse
  >;
  validatorCommission: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse
  >;
  validatorSlashes: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse
  >;
  delegationRewards: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse
  >;
  delegationTotalRewards: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse
  >;
  delegatorValidators: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse
  >;
  delegatorWithdrawAddress: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse
  >;
  communityPool: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  params: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryParamsResponse
  >;
  validatorOutstandingRewards: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse
  >;
  validatorCommission: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse
  >;
  validatorSlashes: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse
  >;
  delegationRewards: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse
  >;
  delegationTotalRewards: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse
  >;
  delegatorValidators: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse
  >;
  delegatorWithdrawAddress: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse
  >;
  communityPool: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  params(
    argument: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  validatorOutstandingRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>,
  ): grpc.ClientUnaryCall;
  validatorOutstandingRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>,
  ): grpc.ClientUnaryCall;
  validatorOutstandingRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>,
  ): grpc.ClientUnaryCall;
  validatorCommission(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  validatorCommission(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  validatorCommission(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  validatorSlashes(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>,
  ): grpc.ClientUnaryCall;
  validatorSlashes(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>,
  ): grpc.ClientUnaryCall;
  validatorSlashes(
    argument: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>,
  ): grpc.ClientUnaryCall;
  delegationRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegationRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegationRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegationTotalRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegationTotalRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegationTotalRewards(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorValidators(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>,
  ): grpc.ClientUnaryCall;
  delegatorWithdrawAddress(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  delegatorWithdrawAddress(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  delegatorWithdrawAddress(
    argument: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  communityPool(
    argument: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
  communityPool(
    argument: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
  communityPool(
    argument: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
}
