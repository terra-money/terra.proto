// GENERATED CODE -- DO NOT EDIT!

// package: terra.market.v1beta1
// file: terra/market/v1beta1/query.proto

import * as terra_market_v1beta1_query_pb from "../../../terra/market/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  swap: grpc.MethodDefinition<
    terra_market_v1beta1_query_pb.QuerySwapRequest,
    terra_market_v1beta1_query_pb.QuerySwapResponse
  >;
  terraPoolDelta: grpc.MethodDefinition<
    terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse
  >;
  params: grpc.MethodDefinition<
    terra_market_v1beta1_query_pb.QueryParamsRequest,
    terra_market_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  swap: grpc.handleUnaryCall<
    terra_market_v1beta1_query_pb.QuerySwapRequest,
    terra_market_v1beta1_query_pb.QuerySwapResponse
  >;
  terraPoolDelta: grpc.handleUnaryCall<
    terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse
  >;
  params: grpc.handleUnaryCall<
    terra_market_v1beta1_query_pb.QueryParamsRequest,
    terra_market_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  swap(
    argument: terra_market_v1beta1_query_pb.QuerySwapRequest,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QuerySwapResponse>,
  ): grpc.ClientUnaryCall;
  swap(
    argument: terra_market_v1beta1_query_pb.QuerySwapRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QuerySwapResponse>,
  ): grpc.ClientUnaryCall;
  swap(
    argument: terra_market_v1beta1_query_pb.QuerySwapRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QuerySwapResponse>,
  ): grpc.ClientUnaryCall;
  terraPoolDelta(
    argument: terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse>,
  ): grpc.ClientUnaryCall;
  terraPoolDelta(
    argument: terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse>,
  ): grpc.ClientUnaryCall;
  terraPoolDelta(
    argument: terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_market_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_market_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_market_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
