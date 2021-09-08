// GENERATED CODE -- DO NOT EDIT!

// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/tx.proto

import * as ibc_core_connection_v1_tx_pb from "../../../../ibc/core/connection/v1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connectionOpenInit: grpc.MethodDefinition<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse
  >;
  connectionOpenTry: grpc.MethodDefinition<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse
  >;
  connectionOpenAck: grpc.MethodDefinition<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse
  >;
  connectionOpenConfirm: grpc.MethodDefinition<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  connectionOpenInit: grpc.handleUnaryCall<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse
  >;
  connectionOpenTry: grpc.handleUnaryCall<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse
  >;
  connectionOpenAck: grpc.handleUnaryCall<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse
  >;
  connectionOpenConfirm: grpc.handleUnaryCall<
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connectionOpenInit(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenInit(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenInit(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenTry(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenTry(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenTry(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenAck(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenAck(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenAck(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenConfirm(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenConfirm(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
  connectionOpenConfirm(
    argument: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>,
  ): grpc.ClientUnaryCall;
}
