// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.params.v1beta1
// file: cosmos/params/v1beta1/query.proto

import * as cosmos_params_v1beta1_query_pb from "../../../cosmos/params/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  params: grpc.MethodDefinition<
    cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    cosmos_params_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  params: grpc.handleUnaryCall<
    cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    cosmos_params_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  params(
    argument: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_params_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_params_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_params_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
