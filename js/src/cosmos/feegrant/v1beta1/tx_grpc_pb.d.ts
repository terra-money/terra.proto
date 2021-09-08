// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/tx.proto

import * as cosmos_feegrant_v1beta1_tx_pb from "../../../cosmos/feegrant/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  grantAllowance: grpc.MethodDefinition<
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse
  >;
  revokeAllowance: grpc.MethodDefinition<
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  grantAllowance: grpc.handleUnaryCall<
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse
  >;
  revokeAllowance: grpc.handleUnaryCall<
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  grantAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  grantAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  grantAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  revokeAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  revokeAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse>,
  ): grpc.ClientUnaryCall;
  revokeAllowance(
    argument: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse>,
  ): grpc.ClientUnaryCall;
}
