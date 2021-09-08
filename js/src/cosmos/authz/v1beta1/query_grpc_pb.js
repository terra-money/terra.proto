// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_authz_v1beta1_query_pb = require('../../../cosmos/authz/v1beta1/query_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var cosmos_authz_v1beta1_authz_pb = require('../../../cosmos/authz/v1beta1/authz_pb.js');

function serialize_cosmos_authz_v1beta1_QueryGrantsRequest(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_query_pb.QueryGrantsRequest)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.QueryGrantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_QueryGrantsRequest(buffer_arg) {
  return cosmos_authz_v1beta1_query_pb.QueryGrantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_QueryGrantsResponse(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_query_pb.QueryGrantsResponse)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.QueryGrantsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_QueryGrantsResponse(buffer_arg) {
  return cosmos_authz_v1beta1_query_pb.QueryGrantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Returns list of `Authorization`, granted to the grantee by the granter.
grants: {
    path: '/cosmos.authz.v1beta1.Query/Grants',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    responseType: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse,
    requestSerialize: serialize_cosmos_authz_v1beta1_QueryGrantsRequest,
    requestDeserialize: deserialize_cosmos_authz_v1beta1_QueryGrantsRequest,
    responseSerialize: serialize_cosmos_authz_v1beta1_QueryGrantsResponse,
    responseDeserialize: deserialize_cosmos_authz_v1beta1_QueryGrantsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
