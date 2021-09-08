// GENERATED CODE -- DO NOT EDIT!

// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/query.proto

import * as terra_wasm_v1beta1_query_pb from "../../../terra/wasm/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  codeInfo: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse
  >;
  byteCode: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    terra_wasm_v1beta1_query_pb.QueryByteCodeResponse
  >;
  contractInfo: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    terra_wasm_v1beta1_query_pb.QueryContractInfoResponse
  >;
  contractStore: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    terra_wasm_v1beta1_query_pb.QueryContractStoreResponse
  >;
  rawStore: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    terra_wasm_v1beta1_query_pb.QueryRawStoreResponse
  >;
  params: grpc.MethodDefinition<
    terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    terra_wasm_v1beta1_query_pb.QueryParamsResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  codeInfo: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse
  >;
  byteCode: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    terra_wasm_v1beta1_query_pb.QueryByteCodeResponse
  >;
  contractInfo: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    terra_wasm_v1beta1_query_pb.QueryContractInfoResponse
  >;
  contractStore: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    terra_wasm_v1beta1_query_pb.QueryContractStoreResponse
  >;
  rawStore: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    terra_wasm_v1beta1_query_pb.QueryRawStoreResponse
  >;
  params: grpc.handleUnaryCall<
    terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    terra_wasm_v1beta1_query_pb.QueryParamsResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  codeInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  codeInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  codeInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse>,
  ): grpc.ClientUnaryCall;
  byteCode(
    argument: terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryByteCodeResponse>,
  ): grpc.ClientUnaryCall;
  byteCode(
    argument: terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryByteCodeResponse>,
  ): grpc.ClientUnaryCall;
  byteCode(
    argument: terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryByteCodeResponse>,
  ): grpc.ClientUnaryCall;
  contractInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractInfoResponse>,
  ): grpc.ClientUnaryCall;
  contractInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractInfoResponse>,
  ): grpc.ClientUnaryCall;
  contractInfo(
    argument: terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractInfoResponse>,
  ): grpc.ClientUnaryCall;
  contractStore(
    argument: terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractStoreResponse>,
  ): grpc.ClientUnaryCall;
  contractStore(
    argument: terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractStoreResponse>,
  ): grpc.ClientUnaryCall;
  contractStore(
    argument: terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryContractStoreResponse>,
  ): grpc.ClientUnaryCall;
  rawStore(
    argument: terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryRawStoreResponse>,
  ): grpc.ClientUnaryCall;
  rawStore(
    argument: terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryRawStoreResponse>,
  ): grpc.ClientUnaryCall;
  rawStore(
    argument: terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryRawStoreResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
  params(
    argument: terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_query_pb.QueryParamsResponse>,
  ): grpc.ClientUnaryCall;
}
