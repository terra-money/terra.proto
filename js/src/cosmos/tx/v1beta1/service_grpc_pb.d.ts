// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

import * as cosmos_tx_v1beta1_service_pb from "../../../cosmos/tx/v1beta1/service_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  simulate: grpc.MethodDefinition<
    cosmos_tx_v1beta1_service_pb.SimulateRequest,
    cosmos_tx_v1beta1_service_pb.SimulateResponse
  >;
  getTx: grpc.MethodDefinition<
    cosmos_tx_v1beta1_service_pb.GetTxRequest,
    cosmos_tx_v1beta1_service_pb.GetTxResponse
  >;
  broadcastTx: grpc.MethodDefinition<
    cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    cosmos_tx_v1beta1_service_pb.BroadcastTxResponse
  >;
  getTxsEvent: grpc.MethodDefinition<
    cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    cosmos_tx_v1beta1_service_pb.GetTxsEventResponse
  >;
}

export const ServiceService: IServiceService;

export interface IServiceServer extends grpc.UntypedServiceImplementation {
  simulate: grpc.handleUnaryCall<
    cosmos_tx_v1beta1_service_pb.SimulateRequest,
    cosmos_tx_v1beta1_service_pb.SimulateResponse
  >;
  getTx: grpc.handleUnaryCall<
    cosmos_tx_v1beta1_service_pb.GetTxRequest,
    cosmos_tx_v1beta1_service_pb.GetTxResponse
  >;
  broadcastTx: grpc.handleUnaryCall<
    cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    cosmos_tx_v1beta1_service_pb.BroadcastTxResponse
  >;
  getTxsEvent: grpc.handleUnaryCall<
    cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    cosmos_tx_v1beta1_service_pb.GetTxsEventResponse
  >;
}

export class ServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  simulate(
    argument: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.SimulateResponse>,
  ): grpc.ClientUnaryCall;
  simulate(
    argument: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.SimulateResponse>,
  ): grpc.ClientUnaryCall;
  simulate(
    argument: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.SimulateResponse>,
  ): grpc.ClientUnaryCall;
  getTx(
    argument: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxResponse>,
  ): grpc.ClientUnaryCall;
  getTx(
    argument: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxResponse>,
  ): grpc.ClientUnaryCall;
  getTx(
    argument: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxResponse>,
  ): grpc.ClientUnaryCall;
  broadcastTx(
    argument: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>,
  ): grpc.ClientUnaryCall;
  broadcastTx(
    argument: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>,
  ): grpc.ClientUnaryCall;
  broadcastTx(
    argument: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>,
  ): grpc.ClientUnaryCall;
  getTxsEvent(
    argument: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>,
  ): grpc.ClientUnaryCall;
  getTxsEvent(
    argument: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>,
  ): grpc.ClientUnaryCall;
  getTxsEvent(
    argument: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>,
  ): grpc.ClientUnaryCall;
}
