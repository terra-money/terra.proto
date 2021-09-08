// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.crisis.v1beta1
// file: cosmos/crisis/v1beta1/tx.proto

import * as cosmos_crisis_v1beta1_tx_pb from "../../../cosmos/crisis/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  verifyInvariant: grpc.MethodDefinition<
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  verifyInvariant: grpc.handleUnaryCall<
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  verifyInvariant(
    argument: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    callback: grpc.requestCallback<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>,
  ): grpc.ClientUnaryCall;
  verifyInvariant(
    argument: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>,
  ): grpc.ClientUnaryCall;
  verifyInvariant(
    argument: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>,
  ): grpc.ClientUnaryCall;
}
