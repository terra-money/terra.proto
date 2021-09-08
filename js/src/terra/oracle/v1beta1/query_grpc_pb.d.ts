// GENERATED CODE -- DO NOT EDIT!

// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/query.proto

import * as terra_oracle_v1beta1_query_pb from "../../../terra/oracle/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exchangeRate: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse
  >;
  exchangeRates: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse
  >;
  tobinTax: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse
  >;
  tobinTaxes: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse
  >;
  actives: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    terra_oracle_v1beta1_query_pb.QueryActivesResponse
  >;
  voteTargets: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse
  >;
  feederDelegation: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse
  >;
  missCounter: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    terra_oracle_v1beta1_query_pb.QueryMissCounterResponse
  >;
  aggregatePrevote: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse
  >;
  aggregatePrevotes: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse
  >;
  aggregateVote: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse
  >;
  aggregateVotes: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse
  >;
  params: grpc.MethodDefinition<
    terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    terra_oracle_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  exchangeRate: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse
  >;
  exchangeRates: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse
  >;
  tobinTax: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse
  >;
  tobinTaxes: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse
  >;
  actives: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    terra_oracle_v1beta1_query_pb.QueryActivesResponse
  >;
  voteTargets: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse
  >;
  feederDelegation: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse
  >;
  missCounter: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    terra_oracle_v1beta1_query_pb.QueryMissCounterResponse
  >;
  aggregatePrevote: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse
  >;
  aggregatePrevotes: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse
  >;
  aggregateVote: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse
  >;
  aggregateVotes: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse
  >;
  params: grpc.handleUnaryCall<
    terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    terra_oracle_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exchangeRate(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse>,
  ): grpc.ClientUnaryCall;
  exchangeRate(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse>,
  ): grpc.ClientUnaryCall;
  exchangeRate(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse>,
  ): grpc.ClientUnaryCall;
  exchangeRates(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse>,
  ): grpc.ClientUnaryCall;
  exchangeRates(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse>,
  ): grpc.ClientUnaryCall;
  exchangeRates(
    argument: terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse>,
  ): grpc.ClientUnaryCall;
  tobinTax(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse>,
  ): grpc.ClientUnaryCall;
  tobinTax(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse>,
  ): grpc.ClientUnaryCall;
  tobinTax(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse>,
  ): grpc.ClientUnaryCall;
  tobinTaxes(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse>,
  ): grpc.ClientUnaryCall;
  tobinTaxes(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse>,
  ): grpc.ClientUnaryCall;
  tobinTaxes(
    argument: terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse>,
  ): grpc.ClientUnaryCall;
  actives(
    argument: terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryActivesResponse>,
  ): grpc.ClientUnaryCall;
  actives(
    argument: terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryActivesResponse>,
  ): grpc.ClientUnaryCall;
  actives(
    argument: terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryActivesResponse>,
  ): grpc.ClientUnaryCall;
  voteTargets(
    argument: terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse>,
  ): grpc.ClientUnaryCall;
  voteTargets(
    argument: terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse>,
  ): grpc.ClientUnaryCall;
  voteTargets(
    argument: terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse>,
  ): grpc.ClientUnaryCall;
  feederDelegation(
    argument: terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse>,
  ): grpc.ClientUnaryCall;
  feederDelegation(
    argument: terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse>,
  ): grpc.ClientUnaryCall;
  feederDelegation(
    argument: terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse>,
  ): grpc.ClientUnaryCall;
  missCounter(
    argument: terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryMissCounterResponse>,
  ): grpc.ClientUnaryCall;
  missCounter(
    argument: terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryMissCounterResponse>,
  ): grpc.ClientUnaryCall;
  missCounter(
    argument: terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryMissCounterResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse>,
  ): grpc.ClientUnaryCall;
  aggregatePrevotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVote(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse>,
  ): grpc.ClientUnaryCall;
  aggregateVotes(
    argument: terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
