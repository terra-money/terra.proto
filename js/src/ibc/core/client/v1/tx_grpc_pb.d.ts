// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

import * as ibc_core_client_v1_tx_pb from "../../../../ibc/core/client/v1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createClient: grpc.MethodDefinition<
    ibc_core_client_v1_tx_pb.MsgCreateClient,
    ibc_core_client_v1_tx_pb.MsgCreateClientResponse
  >;
  updateClient: grpc.MethodDefinition<
    ibc_core_client_v1_tx_pb.MsgUpdateClient,
    ibc_core_client_v1_tx_pb.MsgUpdateClientResponse
  >;
  upgradeClient: grpc.MethodDefinition<
    ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse
  >;
  submitMisbehaviour: grpc.MethodDefinition<
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  createClient: grpc.handleUnaryCall<
    ibc_core_client_v1_tx_pb.MsgCreateClient,
    ibc_core_client_v1_tx_pb.MsgCreateClientResponse
  >;
  updateClient: grpc.handleUnaryCall<
    ibc_core_client_v1_tx_pb.MsgUpdateClient,
    ibc_core_client_v1_tx_pb.MsgUpdateClientResponse
  >;
  upgradeClient: grpc.handleUnaryCall<
    ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse
  >;
  submitMisbehaviour: grpc.handleUnaryCall<
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createClient(
    argument: ibc_core_client_v1_tx_pb.MsgCreateClient,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>,
  ): grpc.ClientUnaryCall;
  createClient(
    argument: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>,
  ): grpc.ClientUnaryCall;
  createClient(
    argument: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>,
  ): grpc.ClientUnaryCall;
  updateClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>,
  ): grpc.ClientUnaryCall;
  updateClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>,
  ): grpc.ClientUnaryCall;
  updateClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>,
  ): grpc.ClientUnaryCall;
  upgradeClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>,
  ): grpc.ClientUnaryCall;
  upgradeClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>,
  ): grpc.ClientUnaryCall;
  upgradeClient(
    argument: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>,
  ): grpc.ClientUnaryCall;
  submitMisbehaviour(
    argument: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>,
  ): grpc.ClientUnaryCall;
  submitMisbehaviour(
    argument: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>,
  ): grpc.ClientUnaryCall;
  submitMisbehaviour(
    argument: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>,
  ): grpc.ClientUnaryCall;
}
