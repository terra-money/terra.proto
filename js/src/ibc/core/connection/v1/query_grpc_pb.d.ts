// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/query.proto

import * as ibc_core_connection_v1_query_pb from "../../../../ibc/core/connection/v1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connection: grpc.MethodDefinition<
    ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionResponse
  >;
  connections: grpc.MethodDefinition<
    ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionsResponse
  >;
  clientConnections: grpc.MethodDefinition<
    ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse
  >;
  connectionClientState: grpc.MethodDefinition<
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse
  >;
  connectionConsensusState: grpc.MethodDefinition<
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  connection: grpc.handleUnaryCall<
    ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionResponse
  >;
  connections: grpc.handleUnaryCall<
    ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionsResponse
  >;
  clientConnections: grpc.handleUnaryCall<
    ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse
  >;
  connectionClientState: grpc.handleUnaryCall<
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse
  >;
  connectionConsensusState: grpc.handleUnaryCall<
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connection(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionResponse>,
  ): grpc.ClientUnaryCall;
  connection(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionResponse>,
  ): grpc.ClientUnaryCall;
  connection(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionResponse>,
  ): grpc.ClientUnaryCall;
  connections(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  connections(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  connections(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  clientConnections(
    argument: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  clientConnections(
    argument: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  clientConnections(
    argument: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>,
  ): grpc.ClientUnaryCall;
  connectionClientState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>,
  ): grpc.ClientUnaryCall;
  connectionClientState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>,
  ): grpc.ClientUnaryCall;
  connectionClientState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>,
  ): grpc.ClientUnaryCall;
  connectionConsensusState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  connectionConsensusState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  connectionConsensusState(
    argument: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
}
