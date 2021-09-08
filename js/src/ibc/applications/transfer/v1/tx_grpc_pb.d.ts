// GENERATED CODE -- DO NOT EDIT!

// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

import * as ibc_applications_transfer_v1_tx_pb from "../../../../ibc/applications/transfer/v1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transfer: grpc.MethodDefinition<
    ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    ibc_applications_transfer_v1_tx_pb.MsgTransferResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  transfer: grpc.handleUnaryCall<
    ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    ibc_applications_transfer_v1_tx_pb.MsgTransferResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transfer(
    argument: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>,
  ): grpc.ClientUnaryCall;
  transfer(
    argument: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>,
  ): grpc.ClientUnaryCall;
  transfer(
    argument: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>,
  ): grpc.ClientUnaryCall;
}
