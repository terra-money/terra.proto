// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

import * as cosmos_auth_v1beta1_query_pb from "../../../cosmos/auth/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  accounts: grpc.MethodDefinition<
    cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountsResponse
  >;
  account: grpc.MethodDefinition<
    cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountResponse
  >;
  params: grpc.MethodDefinition<
    cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    cosmos_auth_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  accounts: grpc.handleUnaryCall<
    cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountsResponse
  >;
  account: grpc.handleUnaryCall<
    cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountResponse
  >;
  params: grpc.handleUnaryCall<
    cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    cosmos_auth_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  accounts(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>,
  ): grpc.ClientUnaryCall;
  accounts(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>,
  ): grpc.ClientUnaryCall;
  accounts(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>,
  ): grpc.ClientUnaryCall;
  account(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>,
  ): grpc.ClientUnaryCall;
  account(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>,
  ): grpc.ClientUnaryCall;
  account(
    argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
