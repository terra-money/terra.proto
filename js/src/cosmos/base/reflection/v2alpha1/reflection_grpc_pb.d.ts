// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.base.reflection.v2alpha1
// file: cosmos/base/reflection/v2alpha1/reflection.proto

import * as cosmos_base_reflection_v2alpha1_reflection_pb from "../../../../cosmos/base/reflection/v2alpha1/reflection_pb";
import * as grpc from "@grpc/grpc-js";

interface IReflectionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAuthnDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse
  >;
  getChainDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse
  >;
  getCodecDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse
  >;
  getConfigurationDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse
  >;
  getQueryServicesDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse
  >;
  getTxDescriptor: grpc.MethodDefinition<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse
  >;
}

export const ReflectionServiceService: IReflectionServiceService;

export interface IReflectionServiceServer extends grpc.UntypedServiceImplementation {
  getAuthnDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse
  >;
  getChainDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse
  >;
  getCodecDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse
  >;
  getConfigurationDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse
  >;
  getQueryServicesDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse
  >;
  getTxDescriptor: grpc.handleUnaryCall<
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse
  >;
}

export class ReflectionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAuthnDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getAuthnDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getAuthnDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getChainDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getChainDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getChainDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getCodecDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getCodecDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getCodecDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getConfigurationDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getConfigurationDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getConfigurationDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getQueryServicesDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getQueryServicesDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getQueryServicesDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getTxDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getTxDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse>,
  ): grpc.ClientUnaryCall;
  getTxDescriptor(
    argument: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse>,
  ): grpc.ClientUnaryCall;
}
