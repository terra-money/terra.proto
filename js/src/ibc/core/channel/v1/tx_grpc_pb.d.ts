// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

import * as ibc_core_channel_v1_tx_pb from "../../../../ibc/core/channel/v1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  channelOpenInit: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse
  >;
  channelOpenTry: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse
  >;
  channelOpenAck: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse
  >;
  channelOpenConfirm: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse
  >;
  channelCloseInit: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse
  >;
  channelCloseConfirm: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse
  >;
  recvPacket: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse
  >;
  timeout: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgTimeout,
    ibc_core_channel_v1_tx_pb.MsgTimeoutResponse
  >;
  timeoutOnClose: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse
  >;
  acknowledgement: grpc.MethodDefinition<
    ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  channelOpenInit: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse
  >;
  channelOpenTry: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse
  >;
  channelOpenAck: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse
  >;
  channelOpenConfirm: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse
  >;
  channelCloseInit: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse
  >;
  channelCloseConfirm: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse
  >;
  recvPacket: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse
  >;
  timeout: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgTimeout,
    ibc_core_channel_v1_tx_pb.MsgTimeoutResponse
  >;
  timeoutOnClose: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse
  >;
  acknowledgement: grpc.handleUnaryCall<
    ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  channelOpenInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenTry(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenTry(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenTry(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenAck(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenAck(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenAck(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
  channelOpenConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseInit(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>,
  ): grpc.ClientUnaryCall;
  channelCloseConfirm(
    argument: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>,
  ): grpc.ClientUnaryCall;
  recvPacket(
    argument: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>,
  ): grpc.ClientUnaryCall;
  recvPacket(
    argument: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>,
  ): grpc.ClientUnaryCall;
  recvPacket(
    argument: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>,
  ): grpc.ClientUnaryCall;
  timeout(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeout,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>,
  ): grpc.ClientUnaryCall;
  timeout(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>,
  ): grpc.ClientUnaryCall;
  timeout(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>,
  ): grpc.ClientUnaryCall;
  timeoutOnClose(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>,
  ): grpc.ClientUnaryCall;
  timeoutOnClose(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>,
  ): grpc.ClientUnaryCall;
  timeoutOnClose(
    argument: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>,
  ): grpc.ClientUnaryCall;
  acknowledgement(
    argument: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
  acknowledgement(
    argument: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
  acknowledgement(
    argument: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>,
  ): grpc.ClientUnaryCall;
}
