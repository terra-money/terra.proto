// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

import * as ibc_core_client_v1_query_pb from "../../../../ibc/core/client/v1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  clientState: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryClientStateRequest,
    ibc_core_client_v1_query_pb.QueryClientStateResponse
  >;
  clientStates: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    ibc_core_client_v1_query_pb.QueryClientStatesResponse
  >;
  consensusState: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStateResponse
  >;
  consensusStates: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStatesResponse
  >;
  clientStatus: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    ibc_core_client_v1_query_pb.QueryClientStatusResponse
  >;
  clientParams: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    ibc_core_client_v1_query_pb.QueryClientParamsResponse
  >;
  upgradedClientState: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse
  >;
  upgradedConsensusState: grpc.MethodDefinition<
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  clientState: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryClientStateRequest,
    ibc_core_client_v1_query_pb.QueryClientStateResponse
  >;
  clientStates: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    ibc_core_client_v1_query_pb.QueryClientStatesResponse
  >;
  consensusState: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStateResponse
  >;
  consensusStates: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStatesResponse
  >;
  clientStatus: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    ibc_core_client_v1_query_pb.QueryClientStatusResponse
  >;
  clientParams: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    ibc_core_client_v1_query_pb.QueryClientParamsResponse
  >;
  upgradedClientState: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse
  >;
  upgradedConsensusState: grpc.handleUnaryCall<
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  clientState(
    argument: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStateResponse>,
  ): grpc.ClientUnaryCall;
  clientState(
    argument: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStateResponse>,
  ): grpc.ClientUnaryCall;
  clientState(
    argument: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStateResponse>,
  ): grpc.ClientUnaryCall;
  clientStates(
    argument: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatesResponse>,
  ): grpc.ClientUnaryCall;
  clientStates(
    argument: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatesResponse>,
  ): grpc.ClientUnaryCall;
  clientStates(
    argument: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatesResponse>,
  ): grpc.ClientUnaryCall;
  consensusState(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  consensusState(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  consensusState(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  consensusStates(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>,
  ): grpc.ClientUnaryCall;
  consensusStates(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>,
  ): grpc.ClientUnaryCall;
  consensusStates(
    argument: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>,
  ): grpc.ClientUnaryCall;
  clientStatus(
    argument: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatusResponse>,
  ): grpc.ClientUnaryCall;
  clientStatus(
    argument: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatusResponse>,
  ): grpc.ClientUnaryCall;
  clientStatus(
    argument: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientStatusResponse>,
  ): grpc.ClientUnaryCall;
  clientParams(
    argument: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientParamsResponse>,
  ): grpc.ClientUnaryCall;
  clientParams(
    argument: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientParamsResponse>,
  ): grpc.ClientUnaryCall;
  clientParams(
    argument: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryClientParamsResponse>,
  ): grpc.ClientUnaryCall;
  upgradedClientState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedClientState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedClientState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  upgradedConsensusState(
    argument: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
}
