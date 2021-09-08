// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_wasm_v1beta1_query_pb = require('../../../terra/wasm/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var terra_wasm_v1beta1_wasm_pb = require('../../../terra/wasm/v1beta1/wasm_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_wasm_v1beta1_QueryByteCodeRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryByteCodeRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryByteCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryByteCodeRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryByteCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryByteCodeResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryByteCodeResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryByteCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryByteCodeResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryByteCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryCodeInfoRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryCodeInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryCodeInfoRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryCodeInfoResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryCodeInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryCodeInfoResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryContractInfoRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryContractInfoRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryContractInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryContractInfoRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryContractInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryContractInfoResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryContractInfoResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryContractInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryContractInfoResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryContractInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryContractStoreRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryContractStoreRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryContractStoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryContractStoreRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryContractStoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryContractStoreResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryContractStoreResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryContractStoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryContractStoreResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryContractStoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryParamsRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryParamsResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryRawStoreRequest(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryRawStoreRequest)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryRawStoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryRawStoreRequest(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryRawStoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_wasm_v1beta1_QueryRawStoreResponse(arg) {
  if (!(arg instanceof terra_wasm_v1beta1_query_pb.QueryRawStoreResponse)) {
    throw new Error('Expected argument of type terra.wasm.v1beta1.QueryRawStoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_wasm_v1beta1_QueryRawStoreResponse(buffer_arg) {
  return terra_wasm_v1beta1_query_pb.QueryRawStoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // CodeInfo returns the stored code info
codeInfo: {
    path: '/terra.wasm.v1beta1.Query/CodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryCodeInfoRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryCodeInfoResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryCodeInfoRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryCodeInfoRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryCodeInfoResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryCodeInfoResponse,
  },
  // ByteCode returns the stored byte code
byteCode: {
    path: '/terra.wasm.v1beta1.Query/ByteCode',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryByteCodeRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryByteCodeResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryByteCodeRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryByteCodeRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryByteCodeResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryByteCodeResponse,
  },
  // ContractInfo returns the stored contract info
contractInfo: {
    path: '/terra.wasm.v1beta1.Query/ContractInfo',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryContractInfoRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryContractInfoResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryContractInfoRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryContractInfoRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryContractInfoResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryContractInfoResponse,
  },
  // ContractStore return smart query result from the contract
contractStore: {
    path: '/terra.wasm.v1beta1.Query/ContractStore',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryContractStoreRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryContractStoreResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryContractStoreRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryContractStoreRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryContractStoreResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryContractStoreResponse,
  },
  // RawStore return single key from the raw store data of a contract
rawStore: {
    path: '/terra.wasm.v1beta1.Query/RawStore',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryRawStoreRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryRawStoreResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryRawStoreRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryRawStoreRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryRawStoreResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryRawStoreResponse,
  },
  // Params queries all parameters.
params: {
    path: '/terra.wasm.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: terra_wasm_v1beta1_query_pb.QueryParamsRequest,
    responseType: terra_wasm_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_terra_wasm_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_terra_wasm_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_terra_wasm_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_terra_wasm_v1beta1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
