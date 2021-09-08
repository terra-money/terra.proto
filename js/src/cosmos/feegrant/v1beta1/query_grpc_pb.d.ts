// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/query.proto

import * as cosmos_feegrant_v1beta1_query_pb from "../../../cosmos/feegrant/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  allowance: grpc.MethodDefinition<
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse
  >;
  allowances: grpc.MethodDefinition<
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  allowance: grpc.handleUnaryCall<
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse
  >;
  allowances: grpc.handleUnaryCall<
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  allowance(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  allowance(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  allowance(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  allowances(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse>,
  ): grpc.ClientUnaryCall;
  allowances(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse>,
  ): grpc.ClientUnaryCall;
  allowances(
    argument: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse>,
  ): grpc.ClientUnaryCall;
}
