// GENERATED CODE -- DO NOT EDIT!

// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/tx.proto

import * as terra_oracle_v1beta1_tx_pb from "../../../terra/oracle/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  aggregateExchangeRatePrevote: grpc.MethodDefinition<
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse
  >;
  aggregateExchangeRateVote: grpc.MethodDefinition<
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse
  >;
  delegateFeedConsent: grpc.MethodDefinition<
    terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  aggregateExchangeRatePrevote: grpc.handleUnaryCall<
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse
  >;
  aggregateExchangeRateVote: grpc.handleUnaryCall<
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse
  >;
  delegateFeedConsent: grpc.handleUnaryCall<
    terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  aggregateExchangeRatePrevote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateExchangeRatePrevote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateExchangeRatePrevote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateExchangeRateVote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateExchangeRateVote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse>,
  ): grpc.ClientUnaryCall;
  aggregateExchangeRateVote(
    argument: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse>,
  ): grpc.ClientUnaryCall;
  delegateFeedConsent(
    argument: terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse>,
  ): grpc.ClientUnaryCall;
  delegateFeedConsent(
    argument: terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse>,
  ): grpc.ClientUnaryCall;
  delegateFeedConsent(
    argument: terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse>,
  ): grpc.ClientUnaryCall;
}
