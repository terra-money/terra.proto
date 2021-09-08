// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

import * as cosmos_base_tendermint_v1beta1_query_pb from "../../../../cosmos/base/tendermint/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getNodeInfo: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse
  >;
  getSyncing: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse
  >;
  getLatestBlock: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse
  >;
  getBlockByHeight: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse
  >;
  getLatestValidatorSet: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse
  >;
  getValidatorSetByHeight: grpc.MethodDefinition<
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse
  >;
}

export const ServiceService: IServiceService;

export interface IServiceServer extends grpc.UntypedServiceImplementation {
  getNodeInfo: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse
  >;
  getSyncing: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse
  >;
  getLatestBlock: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse
  >;
  getBlockByHeight: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse
  >;
  getLatestValidatorSet: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse
  >;
  getValidatorSetByHeight: grpc.handleUnaryCall<
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse
  >;
}

export class ServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getNodeInfo(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  getNodeInfo(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  getSyncing(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>,
  ): grpc.ClientUnaryCall;
  getSyncing(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>,
  ): grpc.ClientUnaryCall;
  getSyncing(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>,
  ): grpc.ClientUnaryCall;
  getLatestBlock(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>,
  ): grpc.ClientUnaryCall;
  getLatestBlock(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>,
  ): grpc.ClientUnaryCall;
  getLatestBlock(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>,
  ): grpc.ClientUnaryCall;
  getBlockByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>,
  ): grpc.ClientUnaryCall;
  getBlockByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>,
  ): grpc.ClientUnaryCall;
  getBlockByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>,
  ): grpc.ClientUnaryCall;
  getLatestValidatorSet(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>,
  ): grpc.ClientUnaryCall;
  getLatestValidatorSet(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>,
  ): grpc.ClientUnaryCall;
  getLatestValidatorSet(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>,
  ): grpc.ClientUnaryCall;
  getValidatorSetByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>,
  ): grpc.ClientUnaryCall;
  getValidatorSetByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>,
  ): grpc.ClientUnaryCall;
  getValidatorSetByHeight(
    argument: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>,
  ): grpc.ClientUnaryCall;
}
