// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

import * as cosmos_upgrade_v1beta1_query_pb from "../../../cosmos/upgrade/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  currentPlan: grpc.MethodDefinition<
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse
  >;
  appliedPlan: grpc.MethodDefinition<
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse
  >;
  upgradedConsensusState: grpc.MethodDefinition<
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse
  >;
  moduleVersions: grpc.MethodDefinition<
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  currentPlan: grpc.handleUnaryCall<
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse
  >;
  appliedPlan: grpc.handleUnaryCall<
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse
  >;
  upgradedConsensusState: grpc.handleUnaryCall<
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse
  >;
  moduleVersions: grpc.handleUnaryCall<
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  currentPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>,
  ): grpc.ClientUnaryCall;
  currentPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>,
  ): grpc.ClientUnaryCall;
  currentPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>,
  ): grpc.ClientUnaryCall;
  appliedPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>,
  ): grpc.ClientUnaryCall;
  appliedPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>,
  ): grpc.ClientUnaryCall;
  appliedPlan(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  moduleVersions(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse>,
  ): grpc.ClientUnaryCall;
  moduleVersions(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse>,
  ): grpc.ClientUnaryCall;
  moduleVersions(
    argument: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse>,
  ): grpc.ClientUnaryCall;
}
