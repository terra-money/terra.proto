// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/tx.proto

import * as cosmos_staking_v1beta1_tx_pb from "../../../cosmos/staking/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createValidator: grpc.MethodDefinition<
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse
  >;
  editValidator: grpc.MethodDefinition<
    cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse
  >;
  delegate: grpc.MethodDefinition<
    cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse
  >;
  beginRedelegate: grpc.MethodDefinition<
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse
  >;
  undelegate: grpc.MethodDefinition<
    cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  createValidator: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse
  >;
  editValidator: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse
  >;
  delegate: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse
  >;
  beginRedelegate: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse
  >;
  undelegate: grpc.handleUnaryCall<
    cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse>,
  ): grpc.ClientUnaryCall;
  createValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse>,
  ): grpc.ClientUnaryCall;
  createValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse>,
  ): grpc.ClientUnaryCall;
  editValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse>,
  ): grpc.ClientUnaryCall;
  editValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse>,
  ): grpc.ClientUnaryCall;
  editValidator(
    argument: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse>,
  ): grpc.ClientUnaryCall;
  delegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse>,
  ): grpc.ClientUnaryCall;
  delegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse>,
  ): grpc.ClientUnaryCall;
  delegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse>,
  ): grpc.ClientUnaryCall;
  beginRedelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse>,
  ): grpc.ClientUnaryCall;
  beginRedelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse>,
  ): grpc.ClientUnaryCall;
  beginRedelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse>,
  ): grpc.ClientUnaryCall;
  undelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse>,
  ): grpc.ClientUnaryCall;
  undelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse>,
  ): grpc.ClientUnaryCall;
  undelegate(
    argument: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse>,
  ): grpc.ClientUnaryCall;
}
