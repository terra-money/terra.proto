// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/query.proto

import * as ibc_core_channel_v1_query_pb from "../../../../ibc/core/channel/v1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  channel: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryChannelRequest,
    ibc_core_channel_v1_query_pb.QueryChannelResponse
  >;
  channels: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryChannelsResponse
  >;
  connectionChannels: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse
  >;
  channelClientState: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse
  >;
  channelConsensusState: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse
  >;
  packetCommitment: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse
  >;
  packetCommitments: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse
  >;
  packetReceipt: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse
  >;
  packetAcknowledgement: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse
  >;
  packetAcknowledgements: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse
  >;
  unreceivedPackets: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse
  >;
  unreceivedAcks: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse
  >;
  nextSequenceReceive: grpc.MethodDefinition<
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  channel: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryChannelRequest,
    ibc_core_channel_v1_query_pb.QueryChannelResponse
  >;
  channels: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryChannelsResponse
  >;
  connectionChannels: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse
  >;
  channelClientState: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse
  >;
  channelConsensusState: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse
  >;
  packetCommitment: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse
  >;
  packetCommitments: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse
  >;
  packetReceipt: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse
  >;
  packetAcknowledgement: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse
  >;
  packetAcknowledgements: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse
  >;
  unreceivedPackets: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse
  >;
  unreceivedAcks: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse
  >;
  nextSequenceReceive: grpc.handleUnaryCall<
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  channel(
    argument: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelResponse>,
  ): grpc.ClientUnaryCall;
  channel(
    argument: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelResponse>,
  ): grpc.ClientUnaryCall;
  channel(
    argument: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelResponse>,
  ): grpc.ClientUnaryCall;
  channels(
    argument: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelsResponse>,
  ): grpc.ClientUnaryCall;
  channels(
    argument: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelsResponse>,
  ): grpc.ClientUnaryCall;
  channels(
    argument: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelsResponse>,
  ): grpc.ClientUnaryCall;
  connectionChannels(
    argument: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>,
  ): grpc.ClientUnaryCall;
  connectionChannels(
    argument: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>,
  ): grpc.ClientUnaryCall;
  connectionChannels(
    argument: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>,
  ): grpc.ClientUnaryCall;
  channelClientState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>,
  ): grpc.ClientUnaryCall;
  channelClientState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>,
  ): grpc.ClientUnaryCall;
  channelClientState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>,
  ): grpc.ClientUnaryCall;
  channelConsensusState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  channelConsensusState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  channelConsensusState(
    argument: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitment(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitment(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitment(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitments(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitments(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>,
  ): grpc.ClientUnaryCall;
  packetCommitments(
    argument: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>,
  ): grpc.ClientUnaryCall;
  packetReceipt(
    argument: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>,
  ): grpc.ClientUnaryCall;
  packetReceipt(
    argument: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>,
  ): grpc.ClientUnaryCall;
  packetReceipt(
    argument: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgement(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgement(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgement(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgements(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgements(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>,
  ): grpc.ClientUnaryCall;
  packetAcknowledgements(
    argument: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedPackets(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedPackets(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedPackets(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedAcks(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedAcks(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>,
  ): grpc.ClientUnaryCall;
  unreceivedAcks(
    argument: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>,
  ): grpc.ClientUnaryCall;
  nextSequenceReceive(
    argument: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>,
  ): grpc.ClientUnaryCall;
  nextSequenceReceive(
    argument: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>,
  ): grpc.ClientUnaryCall;
  nextSequenceReceive(
    argument: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>,
  ): grpc.ClientUnaryCall;
}
