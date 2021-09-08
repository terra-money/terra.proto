// GENERATED CODE -- DO NOT EDIT!

// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

import * as ibc_applications_transfer_v1_query_pb from "../../../../ibc/applications/transfer/v1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  denomTrace: grpc.MethodDefinition<
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse
  >;
  denomTraces: grpc.MethodDefinition<
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse
  >;
  params: grpc.MethodDefinition<
    ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    ibc_applications_transfer_v1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  denomTrace: grpc.handleUnaryCall<
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse
  >;
  denomTraces: grpc.handleUnaryCall<
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse
  >;
  params: grpc.handleUnaryCall<
    ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    ibc_applications_transfer_v1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  denomTrace(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>,
  ): grpc.ClientUnaryCall;
  denomTrace(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>,
  ): grpc.ClientUnaryCall;
  denomTrace(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>,
  ): grpc.ClientUnaryCall;
  denomTraces(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>,
  ): grpc.ClientUnaryCall;
  denomTraces(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>,
  ): grpc.ClientUnaryCall;
  denomTraces(
    argument: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
