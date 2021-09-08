// GENERATED CODE -- DO NOT EDIT!

// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/tx.proto

import * as terra_wasm_v1beta1_tx_pb from "../../../terra/wasm/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  storeCode: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse
  >;
  migrateCode: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse
  >;
  instantiateContract: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse
  >;
  executeContract: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse
  >;
  migrateContract: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse
  >;
  updateContractAdmin: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse
  >;
  clearContractAdmin: grpc.MethodDefinition<
    terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  storeCode: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse
  >;
  migrateCode: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse
  >;
  instantiateContract: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse
  >;
  executeContract: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse
  >;
  migrateContract: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse
  >;
  updateContractAdmin: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse
  >;
  clearContractAdmin: grpc.handleUnaryCall<
    terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  storeCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse>,
  ): grpc.ClientUnaryCall;
  storeCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse>,
  ): grpc.ClientUnaryCall;
  storeCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse>,
  ): grpc.ClientUnaryCall;
  migrateCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse>,
  ): grpc.ClientUnaryCall;
  migrateCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse>,
  ): grpc.ClientUnaryCall;
  migrateCode(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse>,
  ): grpc.ClientUnaryCall;
  instantiateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse>,
  ): grpc.ClientUnaryCall;
  instantiateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse>,
  ): grpc.ClientUnaryCall;
  instantiateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse>,
  ): grpc.ClientUnaryCall;
  executeContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse>,
  ): grpc.ClientUnaryCall;
  executeContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse>,
  ): grpc.ClientUnaryCall;
  executeContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse>,
  ): grpc.ClientUnaryCall;
  migrateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse>,
  ): grpc.ClientUnaryCall;
  migrateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse>,
  ): grpc.ClientUnaryCall;
  migrateContract(
    argument: terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse>,
  ): grpc.ClientUnaryCall;
  updateContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse>,
  ): grpc.ClientUnaryCall;
  updateContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse>,
  ): grpc.ClientUnaryCall;
  updateContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse>,
  ): grpc.ClientUnaryCall;
  clearContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse>,
  ): grpc.ClientUnaryCall;
  clearContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse>,
  ): grpc.ClientUnaryCall;
  clearContractAdmin(
    argument: terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse>,
  ): grpc.ClientUnaryCall;
}
