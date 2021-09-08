// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_tx_v1beta1_service_pb = require('../../../terra/tx/v1beta1/service_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
var cosmos_tx_v1beta1_tx_pb = require('../../../cosmos/tx/v1beta1/tx_pb.js');

function serialize_terra_tx_v1beta1_ComputeTaxRequest(arg) {
  if (!(arg instanceof terra_tx_v1beta1_service_pb.ComputeTaxRequest)) {
    throw new Error('Expected argument of type terra.tx.v1beta1.ComputeTaxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_tx_v1beta1_ComputeTaxRequest(buffer_arg) {
  return terra_tx_v1beta1_service_pb.ComputeTaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_tx_v1beta1_ComputeTaxResponse(arg) {
  if (!(arg instanceof terra_tx_v1beta1_service_pb.ComputeTaxResponse)) {
    throw new Error('Expected argument of type terra.tx.v1beta1.ComputeTaxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_tx_v1beta1_ComputeTaxResponse(buffer_arg) {
  return terra_tx_v1beta1_service_pb.ComputeTaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service defines a gRPC service for interacting with transactions.
var ServiceService = exports.ServiceService = {
  // EstimateFee simulates executing a transaction for estimating gas usage.
computeTax: {
    path: '/terra.tx.v1beta1.Service/ComputeTax',
    requestStream: false,
    responseStream: false,
    requestType: terra_tx_v1beta1_service_pb.ComputeTaxRequest,
    responseType: terra_tx_v1beta1_service_pb.ComputeTaxResponse,
    requestSerialize: serialize_terra_tx_v1beta1_ComputeTaxRequest,
    requestDeserialize: deserialize_terra_tx_v1beta1_ComputeTaxRequest,
    responseSerialize: serialize_terra_tx_v1beta1_ComputeTaxResponse,
    responseDeserialize: deserialize_terra_tx_v1beta1_ComputeTaxResponse,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
