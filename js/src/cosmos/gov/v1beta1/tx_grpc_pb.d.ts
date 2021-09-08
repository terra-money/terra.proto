// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/tx.proto

import * as cosmos_gov_v1beta1_tx_pb from "../../../cosmos/gov/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitProposal: grpc.MethodDefinition<
    cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse
  >;
  vote: grpc.MethodDefinition<cosmos_gov_v1beta1_tx_pb.MsgVote, cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>;
  voteWeighted: grpc.MethodDefinition<
    cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse
  >;
  deposit: grpc.MethodDefinition<
    cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    cosmos_gov_v1beta1_tx_pb.MsgDepositResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  submitProposal: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse
  >;
  vote: grpc.handleUnaryCall<cosmos_gov_v1beta1_tx_pb.MsgVote, cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>;
  voteWeighted: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse
  >;
  deposit: grpc.handleUnaryCall<
    cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    cosmos_gov_v1beta1_tx_pb.MsgDepositResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  submitProposal(
    argument: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>,
  ): grpc.ClientUnaryCall;
  submitProposal(
    argument: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>,
  ): grpc.ClientUnaryCall;
  submitProposal(
    argument: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVote,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVote,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>,
  ): grpc.ClientUnaryCall;
  vote(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVote,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>,
  ): grpc.ClientUnaryCall;
  voteWeighted(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse>,
  ): grpc.ClientUnaryCall;
  voteWeighted(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse>,
  ): grpc.ClientUnaryCall;
  voteWeighted(
    argument: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>,
  ): grpc.ClientUnaryCall;
  deposit(
    argument: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>,
  ): grpc.ClientUnaryCall;
}
