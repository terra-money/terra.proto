// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.mint.v1beta1
// file: cosmos/mint/v1beta1/query.proto

import * as cosmos_mint_v1beta1_query_pb from "../../../cosmos/mint/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  params: grpc.MethodDefinition<
    cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    cosmos_mint_v1beta1_query_pb.QueryParamsResponse
  >;
  inflation: grpc.MethodDefinition<
    cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    cosmos_mint_v1beta1_query_pb.QueryInflationResponse
  >;
  annualProvisions: grpc.MethodDefinition<
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  params: grpc.handleUnaryCall<
    cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    cosmos_mint_v1beta1_query_pb.QueryParamsResponse
  >;
  inflation: grpc.handleUnaryCall<
    cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    cosmos_mint_v1beta1_query_pb.QueryInflationResponse
  >;
  annualProvisions: grpc.handleUnaryCall<
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  params(
    argument: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  inflation(
    argument: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>,
  ): grpc.ClientUnaryCall;
  inflation(
    argument: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>,
  ): grpc.ClientUnaryCall;
  inflation(
    argument: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>,
  ): grpc.ClientUnaryCall;
  annualProvisions(
    argument: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>,
  ): grpc.ClientUnaryCall;
  annualProvisions(
    argument: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>,
  ): grpc.ClientUnaryCall;
  annualProvisions(
    argument: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>,
  ): grpc.ClientUnaryCall;
}
