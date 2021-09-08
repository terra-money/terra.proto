// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_market_v1beta1_query_pb = require('../../../terra/market/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var terra_market_v1beta1_market_pb = require('../../../terra/market/v1beta1/market_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_market_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QueryParamsRequest(buffer_arg) {
  return terra_market_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QueryParamsResponse(buffer_arg) {
  return terra_market_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_QuerySwapRequest(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QuerySwapRequest)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QuerySwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QuerySwapRequest(buffer_arg) {
  return terra_market_v1beta1_query_pb.QuerySwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_QuerySwapResponse(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QuerySwapResponse)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QuerySwapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QuerySwapResponse(buffer_arg) {
  return terra_market_v1beta1_query_pb.QuerySwapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_QueryTerraPoolDeltaRequest(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QueryTerraPoolDeltaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QueryTerraPoolDeltaRequest(buffer_arg) {
  return terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_QueryTerraPoolDeltaResponse(arg) {
  if (!(arg instanceof terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse)) {
    throw new Error('Expected argument of type terra.market.v1beta1.QueryTerraPoolDeltaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_QueryTerraPoolDeltaResponse(buffer_arg) {
  return terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Swap returns simulated swap amount.
swap: {
    path: '/terra.market.v1beta1.Query/Swap',
    requestStream: false,
    responseStream: false,
    requestType: terra_market_v1beta1_query_pb.QuerySwapRequest,
    responseType: terra_market_v1beta1_query_pb.QuerySwapResponse,
    requestSerialize: serialize_terra_market_v1beta1_QuerySwapRequest,
    requestDeserialize: deserialize_terra_market_v1beta1_QuerySwapRequest,
    responseSerialize: serialize_terra_market_v1beta1_QuerySwapResponse,
    responseDeserialize: deserialize_terra_market_v1beta1_QuerySwapResponse,
  },
  // TerraPoolDelta returns terra_pool_delta amount.
terraPoolDelta: {
    path: '/terra.market.v1beta1.Query/TerraPoolDelta',
    requestStream: false,
    responseStream: false,
    requestType: terra_market_v1beta1_query_pb.QueryTerraPoolDeltaRequest,
    responseType: terra_market_v1beta1_query_pb.QueryTerraPoolDeltaResponse,
    requestSerialize: serialize_terra_market_v1beta1_QueryTerraPoolDeltaRequest,
    requestDeserialize: deserialize_terra_market_v1beta1_QueryTerraPoolDeltaRequest,
    responseSerialize: serialize_terra_market_v1beta1_QueryTerraPoolDeltaResponse,
    responseDeserialize: deserialize_terra_market_v1beta1_QueryTerraPoolDeltaResponse,
  },
  // Params queries all parameters.
params: {
    path: '/terra.market.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: terra_market_v1beta1_query_pb.QueryParamsRequest,
    responseType: terra_market_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_terra_market_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_terra_market_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_terra_market_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_terra_market_v1beta1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
