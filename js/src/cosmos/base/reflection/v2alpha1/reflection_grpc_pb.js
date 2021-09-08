// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_base_reflection_v2alpha1_reflection_pb = require('../../../../cosmos/base/reflection/v2alpha1/reflection_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorRequest(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorRequest(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorResponse(arg) {
  if (!(arg instanceof cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse)) {
    throw new Error('Expected argument of type cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorResponse(buffer_arg) {
  return cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ReflectionService defines a service for application reflection.
var ReflectionServiceService = exports.ReflectionServiceService = {
  // GetAuthnDescriptor returns information on how to authenticate transactions in the application
// NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
// future releases of the cosmos-sdk.
getAuthnDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetAuthnDescriptorResponse,
  },
  // GetChainDescriptor returns the description of the chain
getChainDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetChainDescriptorResponse,
  },
  // GetCodecDescriptor returns the descriptor of the codec of the application
getCodecDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetCodecDescriptorResponse,
  },
  // GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application
getConfigurationDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetConfigurationDescriptorResponse,
  },
  // GetQueryServicesDescriptor returns the available gRPC queryable services of the application
getQueryServicesDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetQueryServicesDescriptorResponse,
  },
  // GetTxDescriptor returns information on the used transaction object and available msgs that can be used
getTxDescriptor: {
    path: '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    responseType: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse,
    requestSerialize: serialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorRequest,
    requestDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorRequest,
    responseSerialize: serialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorResponse,
    responseDeserialize: deserialize_cosmos_base_reflection_v2alpha1_GetTxDescriptorResponse,
  },
};

exports.ReflectionServiceClient = grpc.makeGenericClientConstructor(ReflectionServiceService);
