// GENERATED CODE -- DO NOT EDIT!

// package: terra.market.v1beta1
// file: terra/market/v1beta1/tx.proto

import * as terra_market_v1beta1_tx_pb from "../../../terra/market/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  swap: grpc.MethodDefinition<terra_market_v1beta1_tx_pb.MsgSwap, terra_market_v1beta1_tx_pb.MsgSwapResponse>;
  swapSend: grpc.MethodDefinition<
    terra_market_v1beta1_tx_pb.MsgSwapSend,
    terra_market_v1beta1_tx_pb.MsgSwapSendResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  swap: grpc.handleUnaryCall<terra_market_v1beta1_tx_pb.MsgSwap, terra_market_v1beta1_tx_pb.MsgSwapResponse>;
  swapSend: grpc.handleUnaryCall<
    terra_market_v1beta1_tx_pb.MsgSwapSend,
    terra_market_v1beta1_tx_pb.MsgSwapSendResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  swap(
    argument: terra_market_v1beta1_tx_pb.MsgSwap,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapResponse>,
  ): grpc.ClientUnaryCall;
  swap(
    argument: terra_market_v1beta1_tx_pb.MsgSwap,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapResponse>,
  ): grpc.ClientUnaryCall;
  swap(
    argument: terra_market_v1beta1_tx_pb.MsgSwap,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapResponse>,
  ): grpc.ClientUnaryCall;
  swapSend(
    argument: terra_market_v1beta1_tx_pb.MsgSwapSend,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapSendResponse>,
  ): grpc.ClientUnaryCall;
  swapSend(
    argument: terra_market_v1beta1_tx_pb.MsgSwapSend,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapSendResponse>,
  ): grpc.ClientUnaryCall;
  swapSend(
    argument: terra_market_v1beta1_tx_pb.MsgSwapSend,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_market_v1beta1_tx_pb.MsgSwapSendResponse>,
  ): grpc.ClientUnaryCall;
}
