// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

import * as cosmos_base_reflection_v1beta1_reflection_pb from "../../../../cosmos/base/reflection/v1beta1/reflection_pb";
import * as grpc from "@grpc/grpc-js";

interface IReflectionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listAllInterfaces: grpc.MethodDefinition<
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse
  >;
  listImplementations: grpc.MethodDefinition<
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse
  >;
}

export const ReflectionServiceService: IReflectionServiceService;

export interface IReflectionServiceServer extends grpc.UntypedServiceImplementation {
  listAllInterfaces: grpc.handleUnaryCall<
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse
  >;
  listImplementations: grpc.handleUnaryCall<
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse
  >;
}

export class ReflectionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listAllInterfaces(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>,
  ): grpc.ClientUnaryCall;
  listAllInterfaces(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>,
  ): grpc.ClientUnaryCall;
  listAllInterfaces(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>,
  ): grpc.ClientUnaryCall;
  listImplementations(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>,
  ): grpc.ClientUnaryCall;
  listImplementations(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>,
  ): grpc.ClientUnaryCall;
  listImplementations(
    argument: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>,
  ): grpc.ClientUnaryCall;
}
