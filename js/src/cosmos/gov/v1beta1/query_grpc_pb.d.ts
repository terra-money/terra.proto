// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/query.proto

import * as cosmos_gov_v1beta1_query_pb from "../../../cosmos/gov/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  proposal: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    cosmos_gov_v1beta1_query_pb.QueryProposalResponse
  >;
  proposals: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    cosmos_gov_v1beta1_query_pb.QueryProposalsResponse
  >;
  vote: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    cosmos_gov_v1beta1_query_pb.QueryVoteResponse
  >;
  votes: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    cosmos_gov_v1beta1_query_pb.QueryVotesResponse
  >;
  params: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    cosmos_gov_v1beta1_query_pb.QueryParamsResponse
  >;
  deposit: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    cosmos_gov_v1beta1_query_pb.QueryDepositResponse
  >;
  deposits: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    cosmos_gov_v1beta1_query_pb.QueryDepositsResponse
  >;
  tallyResult: grpc.MethodDefinition<
    cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  proposal: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    cosmos_gov_v1beta1_query_pb.QueryProposalResponse
  >;
  proposals: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    cosmos_gov_v1beta1_query_pb.QueryProposalsResponse
  >;
  vote: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    cosmos_gov_v1beta1_query_pb.QueryVoteResponse
  >;
  votes: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    cosmos_gov_v1beta1_query_pb.QueryVotesResponse
  >;
  params: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    cosmos_gov_v1beta1_query_pb.QueryParamsResponse
  >;
  deposit: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    cosmos_gov_v1beta1_query_pb.QueryDepositResponse
  >;
  deposits: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    cosmos_gov_v1beta1_query_pb.QueryDepositsResponse
  >;
  tallyResult: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  proposal(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalResponse>,
  ): grpc.ClientUnaryCall;
  proposal(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalResponse>,
  ): grpc.ClientUnaryCall;
  proposal(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalResponse>,
  ): grpc.ClientUnaryCall;
  proposals(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>,
  ): grpc.ClientUnaryCall;
  proposals(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>,
  ): grpc.ClientUnaryCall;
  proposals(
    argument: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVoteResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVoteResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVoteResponse>,
  ): grpc.ClientUnaryCall;
  votes(
    argument: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVotesResponse>,
  ): grpc.ClientUnaryCall;
  votes(
    argument: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVotesResponse>,
  ): grpc.ClientUnaryCall;
  votes(
    argument: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryVotesResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositResponse>,
  ): grpc.ClientUnaryCall;
  deposits(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>,
  ): grpc.ClientUnaryCall;
  deposits(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>,
  ): grpc.ClientUnaryCall;
  deposits(
    argument: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>,
  ): grpc.ClientUnaryCall;
  tallyResult(
    argument: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>,
  ): grpc.ClientUnaryCall;
  tallyResult(
    argument: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>,
  ): grpc.ClientUnaryCall;
  tallyResult(
    argument: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>,
  ): grpc.ClientUnaryCall;
}
