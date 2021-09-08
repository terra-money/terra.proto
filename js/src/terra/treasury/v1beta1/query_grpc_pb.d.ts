// GENERATED CODE -- DO NOT EDIT!

// package: terra.treasury.v1beta1
// file: terra/treasury/v1beta1/query.proto

import * as terra_treasury_v1beta1_query_pb from "../../../terra/treasury/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  taxRate: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxRateResponse
  >;
  taxCap: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxCapResponse
  >;
  taxCaps: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse
  >;
  rewardWeight: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse
  >;
  seigniorageProceeds: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse
  >;
  taxProceeds: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse
  >;
  indicators: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse
  >;
  params: grpc.MethodDefinition<
    terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    terra_treasury_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  taxRate: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxRateResponse
  >;
  taxCap: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxCapResponse
  >;
  taxCaps: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse
  >;
  rewardWeight: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse
  >;
  seigniorageProceeds: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse
  >;
  taxProceeds: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse
  >;
  indicators: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse
  >;
  params: grpc.handleUnaryCall<
    terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    terra_treasury_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  taxRate(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxRateResponse>,
  ): grpc.ClientUnaryCall;
  taxRate(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxRateResponse>,
  ): grpc.ClientUnaryCall;
  taxRate(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxRateResponse>,
  ): grpc.ClientUnaryCall;
  taxCap(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapResponse>,
  ): grpc.ClientUnaryCall;
  taxCap(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapResponse>,
  ): grpc.ClientUnaryCall;
  taxCap(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapResponse>,
  ): grpc.ClientUnaryCall;
  taxCaps(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse>,
  ): grpc.ClientUnaryCall;
  taxCaps(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse>,
  ): grpc.ClientUnaryCall;
  taxCaps(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse>,
  ): grpc.ClientUnaryCall;
  rewardWeight(
    argument: terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse>,
  ): grpc.ClientUnaryCall;
  rewardWeight(
    argument: terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse>,
  ): grpc.ClientUnaryCall;
  rewardWeight(
    argument: terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse>,
  ): grpc.ClientUnaryCall;
  seigniorageProceeds(
    argument: terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse>,
  ): grpc.ClientUnaryCall;
  seigniorageProceeds(
    argument: terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse>,
  ): grpc.ClientUnaryCall;
  seigniorageProceeds(
    argument: terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse>,
  ): grpc.ClientUnaryCall;
  taxProceeds(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse>,
  ): grpc.ClientUnaryCall;
  taxProceeds(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse>,
  ): grpc.ClientUnaryCall;
  taxProceeds(
    argument: terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse>,
  ): grpc.ClientUnaryCall;
  indicators(
    argument: terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse>,
  ): grpc.ClientUnaryCall;
  indicators(
    argument: terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse>,
  ): grpc.ClientUnaryCall;
  indicators(
    argument: terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_treasury_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
