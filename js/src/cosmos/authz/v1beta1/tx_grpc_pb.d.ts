// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/tx.proto

import * as cosmos_authz_v1beta1_tx_pb from "../../../cosmos/authz/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  grant: grpc.MethodDefinition<
    cosmos_authz_v1beta1_tx_pb.MsgGrant,
    cosmos_authz_v1beta1_tx_pb.MsgGrantResponse
  >;
  exec: grpc.MethodDefinition<cosmos_authz_v1beta1_tx_pb.MsgExec, cosmos_authz_v1beta1_tx_pb.MsgExecResponse>;
  revoke: grpc.MethodDefinition<
    cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  grant: grpc.handleUnaryCall<
    cosmos_authz_v1beta1_tx_pb.MsgGrant,
    cosmos_authz_v1beta1_tx_pb.MsgGrantResponse
  >;
  exec: grpc.handleUnaryCall<cosmos_authz_v1beta1_tx_pb.MsgExec, cosmos_authz_v1beta1_tx_pb.MsgExecResponse>;
  revoke: grpc.handleUnaryCall<
    cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  grant(
    argument: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgGrantResponse>,
  ): grpc.ClientUnaryCall;
  grant(
    argument: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgGrantResponse>,
  ): grpc.ClientUnaryCall;
  grant(
    argument: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgGrantResponse>,
  ): grpc.ClientUnaryCall;
  exec(
    argument: cosmos_authz_v1beta1_tx_pb.MsgExec,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgExecResponse>,
  ): grpc.ClientUnaryCall;
  exec(
    argument: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgExecResponse>,
  ): grpc.ClientUnaryCall;
  exec(
    argument: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgExecResponse>,
  ): grpc.ClientUnaryCall;
  revoke(
    argument: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse>,
  ): grpc.ClientUnaryCall;
  revoke(
    argument: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse>,
  ): grpc.ClientUnaryCall;
  revoke(
    argument: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse>,
  ): grpc.ClientUnaryCall;
}
