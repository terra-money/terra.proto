// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/query.proto

import * as cosmos_slashing_v1beta1_query_pb from "../../../cosmos/slashing/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  params: grpc.MethodDefinition<
    cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    cosmos_slashing_v1beta1_query_pb.QueryParamsResponse
  >;
  signingInfo: grpc.MethodDefinition<
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse
  >;
  signingInfos: grpc.MethodDefinition<
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  params: grpc.handleUnaryCall<
    cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    cosmos_slashing_v1beta1_query_pb.QueryParamsResponse
  >;
  signingInfo: grpc.handleUnaryCall<
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse
  >;
  signingInfos: grpc.handleUnaryCall<
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  params(
    argument: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  signingInfo(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>,
  ): grpc.ClientUnaryCall;
  signingInfo(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>,
  ): grpc.ClientUnaryCall;
  signingInfo(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>,
  ): grpc.ClientUnaryCall;
  signingInfos(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>,
  ): grpc.ClientUnaryCall;
  signingInfos(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>,
  ): grpc.ClientUnaryCall;
  signingInfos(
    argument: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>,
  ): grpc.ClientUnaryCall;
}
