// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_wasm_v1beta1_tx_pb = require('../../../terra/wasm/v1beta1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_wasm_v1beta1_MsgClearContractAdmin(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgClearContractAdmin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgClearContractAdmin(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgClearContractAdminResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgClearContractAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgClearContractAdminResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgExecuteContract(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgExecuteContract)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgExecuteContract');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgExecuteContract(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgExecuteContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgExecuteContractResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgExecuteContractResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgExecuteContractResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgInstantiateContract(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgInstantiateContract)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgInstantiateContract');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgInstantiateContract(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgInstantiateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgInstantiateContractResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgInstantiateContractResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgInstantiateContractResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgMigrateCode(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgMigrateCode)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgMigrateCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgMigrateCode(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgMigrateCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgMigrateCodeResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgMigrateCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgMigrateCodeResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgMigrateContract(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgMigrateContract)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgMigrateContract');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgMigrateContract(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgMigrateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgMigrateContractResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgMigrateContractResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgMigrateContractResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgStoreCode(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgStoreCode)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgStoreCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgStoreCode(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgStoreCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgStoreCodeResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgStoreCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgStoreCodeResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgUpdateContractAdmin(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgUpdateContractAdmin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgUpdateContractAdmin(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_MsgUpdateContractAdminResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.MsgUpdateContractAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_MsgUpdateContractAdminResponse(buffer_arg) {
  return terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the oracle Msg service.
var MsgService = exports.MsgService = {
  // StoreCode to submit Wasm code to the system
storeCode: {
    path: '/terra.wasm.v1beta1.Msg/StoreCode',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgStoreCode,
    responseType: terra_wasm_v1beta1_tx_pb.MsgStoreCodeResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgStoreCode,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgStoreCode,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgStoreCodeResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgStoreCodeResponse,
  },
  // MigrateCode to submit new version Wasm code to the system
migrateCode: {
    path: '/terra.wasm.v1beta1.Msg/MigrateCode',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgMigrateCode,
    responseType: terra_wasm_v1beta1_tx_pb.MsgMigrateCodeResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgMigrateCode,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgMigrateCode,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgMigrateCodeResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgMigrateCodeResponse,
  },
  //  Instantiate creates a new smart contract instance for the given code id.
instantiateContract: {
    path: '/terra.wasm.v1beta1.Msg/InstantiateContract',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgInstantiateContract,
    responseType: terra_wasm_v1beta1_tx_pb.MsgInstantiateContractResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgInstantiateContract,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgInstantiateContract,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgInstantiateContractResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgInstantiateContractResponse,
  },
  // Execute submits the given message data to a smart contract
executeContract: {
    path: '/terra.wasm.v1beta1.Msg/ExecuteContract',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgExecuteContract,
    responseType: terra_wasm_v1beta1_tx_pb.MsgExecuteContractResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgExecuteContract,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgExecuteContract,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgExecuteContractResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgExecuteContractResponse,
  },
  // Migrate runs a code upgrade/ downgrade for a smart contract
migrateContract: {
    path: '/terra.wasm.v1beta1.Msg/MigrateContract',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgMigrateContract,
    responseType: terra_wasm_v1beta1_tx_pb.MsgMigrateContractResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgMigrateContract,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgMigrateContract,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgMigrateContractResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgMigrateContractResponse,
  },
  // UpdateContractAdmin sets a new admin for a smart contract
updateContractAdmin: {
    path: '/terra.wasm.v1beta1.Msg/UpdateContractAdmin',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdmin,
    responseType: terra_wasm_v1beta1_tx_pb.MsgUpdateContractAdminResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgUpdateContractAdmin,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgUpdateContractAdmin,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgUpdateContractAdminResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgUpdateContractAdminResponse,
  },
  // ClearContractAdmin remove admin flag from a smart contract
clearContractAdmin: {
    path: '/terra.wasm.v1beta1.Msg/ClearContractAdmin',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_tx_pb.MsgClearContractAdmin,
    responseType: terra_wasm_v1beta1_tx_pb.MsgClearContractAdminResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_MsgClearContractAdmin,
    requestDeserialize: deserialize_terra_wasm_v1beta1_MsgClearContractAdmin,
    responseSerialize: serialize_terra_wasm_v1beta1_MsgClearContractAdminResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_MsgClearContractAdminResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
