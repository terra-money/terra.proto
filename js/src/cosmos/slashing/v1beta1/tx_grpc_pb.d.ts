// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/tx.proto

import * as cosmos_slashing_v1beta1_tx_pb from "../../../cosmos/slashing/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unjail: grpc.MethodDefinition<
    cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  unjail: grpc.handleUnaryCall<
    cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unjail(
    argument: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>,
  ): grpc.ClientUnaryCall;
  unjail(
    argument: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>,
  ): grpc.ClientUnaryCall;
  unjail(
    argument: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>,
  ): grpc.ClientUnaryCall;
}
