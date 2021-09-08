// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/tx.proto

import * as cosmos_distribution_v1beta1_tx_pb from "../../../cosmos/distribution/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setWithdrawAddress: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse
  >;
  withdrawDelegatorReward: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse
  >;
  withdrawValidatorCommission: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse
  >;
  fundCommunityPool: grpc.MethodDefinition<
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  setWithdrawAddress: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse
  >;
  withdrawDelegatorReward: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse
  >;
  withdrawValidatorCommission: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse
  >;
  fundCommunityPool: grpc.handleUnaryCall<
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setWithdrawAddress(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  setWithdrawAddress(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  setWithdrawAddress(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>,
  ): grpc.ClientUnaryCall;
  withdrawDelegatorReward(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>,
  ): grpc.ClientUnaryCall;
  withdrawDelegatorReward(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>,
  ): grpc.ClientUnaryCall;
  withdrawDelegatorReward(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>,
  ): grpc.ClientUnaryCall;
  withdrawValidatorCommission(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  withdrawValidatorCommission(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  withdrawValidatorCommission(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>,
  ): grpc.ClientUnaryCall;
  fundCommunityPool(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
  fundCommunityPool(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
  fundCommunityPool(
    argument: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>,
  ): grpc.ClientUnaryCall;
}
