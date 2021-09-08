// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/tx.proto

import * as cosmos_bank_v1beta1_tx_pb from "../../../cosmos/bank/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<cosmos_bank_v1beta1_tx_pb.MsgSend, cosmos_bank_v1beta1_tx_pb.MsgSendResponse>;
  multiSend: grpc.MethodDefinition<
    cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<cosmos_bank_v1beta1_tx_pb.MsgSend, cosmos_bank_v1beta1_tx_pb.MsgSendResponse>;
  multiSend: grpc.handleUnaryCall<
    cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(
    argument: cosmos_bank_v1beta1_tx_pb.MsgSend,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgSendResponse>,
  ): grpc.ClientUnaryCall;
  send(
    argument: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgSendResponse>,
  ): grpc.ClientUnaryCall;
  send(
    argument: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgSendResponse>,
  ): grpc.ClientUnaryCall;
  multiSend(
    argument: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse>,
  ): grpc.ClientUnaryCall;
  multiSend(
    argument: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse>,
  ): grpc.ClientUnaryCall;
  multiSend(
    argument: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse>,
  ): grpc.ClientUnaryCall;
}
