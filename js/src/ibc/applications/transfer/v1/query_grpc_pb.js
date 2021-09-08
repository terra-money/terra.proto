// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_applications_transfer_v1_query_pb = require('../../../../ibc/applications/transfer/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js');
var ibc_applications_transfer_v1_transfer_pb = require('../../../../ibc/applications/transfer/v1/transfer_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_ibc_applications_transfer_v1_QueryDenomTraceRequest(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryDenomTraceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryDenomTraceRequest(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_QueryDenomTraceResponse(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryDenomTraceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryDenomTraceResponse(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_QueryDenomTracesRequest(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryDenomTracesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryDenomTracesRequest(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_QueryDenomTracesResponse(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryDenomTracesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryDenomTracesResponse(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_QueryParamsRequest(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryParamsRequest(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_QueryParamsResponse(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_QueryParamsResponse(buffer_arg) {
  return ibc_applications_transfer_v1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query provides defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // DenomTrace queries a denomination trace information.
denomTrace: {
    path: '/ibc.applications.transfer.v1.Query/DenomTrace',
    requestStream: false,
    responseStream: false,
    requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse,
    requestSerialize: serialize_ibc_applications_transfer_v1_QueryDenomTraceRequest,
    requestDeserialize: deserialize_ibc_applications_transfer_v1_QueryDenomTraceRequest,
    responseSerialize: serialize_ibc_applications_transfer_v1_QueryDenomTraceResponse,
    responseDeserialize: deserialize_ibc_applications_transfer_v1_QueryDenomTraceResponse,
  },
  // DenomTraces queries all denomination traces.
denomTraces: {
    path: '/ibc.applications.transfer.v1.Query/DenomTraces',
    requestStream: false,
    responseStream: false,
    requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse,
    requestSerialize: serialize_ibc_applications_transfer_v1_QueryDenomTracesRequest,
    requestDeserialize: deserialize_ibc_applications_transfer_v1_QueryDenomTracesRequest,
    responseSerialize: serialize_ibc_applications_transfer_v1_QueryDenomTracesResponse,
    responseDeserialize: deserialize_ibc_applications_transfer_v1_QueryDenomTracesResponse,
  },
  // Params queries all parameters of the ibc-transfer module.
params: {
    path: '/ibc.applications.transfer.v1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    responseType: ibc_applications_transfer_v1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_ibc_applications_transfer_v1_QueryParamsRequest,
    requestDeserialize: deserialize_ibc_applications_transfer_v1_QueryParamsRequest,
    responseSerialize: serialize_ibc_applications_transfer_v1_QueryParamsResponse,
    responseDeserialize: deserialize_ibc_applications_transfer_v1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
