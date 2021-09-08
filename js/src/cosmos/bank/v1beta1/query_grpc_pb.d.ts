// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/query.proto

import * as cosmos_bank_v1beta1_query_pb from "../../../cosmos/bank/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  balance: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    cosmos_bank_v1beta1_query_pb.QueryBalanceResponse
  >;
  allBalances: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse
  >;
  totalSupply: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse
  >;
  supplyOf: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse
  >;
  params: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    cosmos_bank_v1beta1_query_pb.QueryParamsResponse
  >;
  denomMetadata: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse
  >;
  denomsMetadata: grpc.MethodDefinition<
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  balance: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    cosmos_bank_v1beta1_query_pb.QueryBalanceResponse
  >;
  allBalances: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse
  >;
  totalSupply: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse
  >;
  supplyOf: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse
  >;
  params: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    cosmos_bank_v1beta1_query_pb.QueryParamsResponse
  >;
  denomMetadata: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse
  >;
  denomsMetadata: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  balance(
    argument: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryBalanceResponse>,
  ): grpc.ClientUnaryCall;
  balance(
    argument: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryBalanceResponse>,
  ): grpc.ClientUnaryCall;
  balance(
    argument: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryBalanceResponse>,
  ): grpc.ClientUnaryCall;
  allBalances(
    argument: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse>,
  ): grpc.ClientUnaryCall;
  allBalances(
    argument: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse>,
  ): grpc.ClientUnaryCall;
  allBalances(
    argument: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse>,
  ): grpc.ClientUnaryCall;
  totalSupply(
    argument: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse>,
  ): grpc.ClientUnaryCall;
  totalSupply(
    argument: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse>,
  ): grpc.ClientUnaryCall;
  totalSupply(
    argument: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse>,
  ): grpc.ClientUnaryCall;
  supplyOf(
    argument: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse>,
  ): grpc.ClientUnaryCall;
  supplyOf(
    argument: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse>,
  ): grpc.ClientUnaryCall;
  supplyOf(
    argument: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  denomMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse>,
  ): grpc.ClientUnaryCall;
  denomMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse>,
  ): grpc.ClientUnaryCall;
  denomMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse>,
  ): grpc.ClientUnaryCall;
  denomsMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse>,
  ): grpc.ClientUnaryCall;
  denomsMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse>,
  ): grpc.ClientUnaryCall;
  denomsMetadata(
    argument: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse>,
  ): grpc.ClientUnaryCall;
}
