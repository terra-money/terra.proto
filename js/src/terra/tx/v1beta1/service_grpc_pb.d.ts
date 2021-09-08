// GENERATED CODE -- DO NOT EDIT!

// package: terra.tx.v1beta1
// file: terra/tx/v1beta1/service.proto

import * as terra_tx_v1beta1_service_pb from "../../../terra/tx/v1beta1/service_pb";
import * as grpc from "@grpc/grpc-js";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  computeTax: grpc.MethodDefinition<
    terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    terra_tx_v1beta1_service_pb.ComputeTaxResponse
  >;
}

export const ServiceService: IServiceService;

export interface IServiceServer extends grpc.UntypedServiceImplementation {
  computeTax: grpc.handleUnaryCall<
    terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    terra_tx_v1beta1_service_pb.ComputeTaxResponse
  >;
}

export class ServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  computeTax(
    argument: terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    callback: grpc.requestCallback<terra_tx_v1beta1_service_pb.ComputeTaxResponse>,
  ): grpc.ClientUnaryCall;
  computeTax(
    argument: terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_tx_v1beta1_service_pb.ComputeTaxResponse>,
  ): grpc.ClientUnaryCall;
  computeTax(
    argument: terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_tx_v1beta1_service_pb.ComputeTaxResponse>,
  ): grpc.ClientUnaryCall;
}
