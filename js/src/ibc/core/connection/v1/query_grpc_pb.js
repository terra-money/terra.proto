// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_connection_v1_query_pb = require('../../../../ibc/core/connection/v1/query_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var ibc_core_connection_v1_connection_pb = require('../../../../ibc/core/connection/v1/connection_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_ibc_core_connection_v1_QueryClientConnectionsRequest(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryClientConnectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryClientConnectionsRequest(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryClientConnectionsResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryClientConnectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryClientConnectionsResponse(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionClientStateRequest(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionClientStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionClientStateRequest(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionClientStateResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionClientStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionClientStateResponse(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionConsensusStateRequest(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionConsensusStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionConsensusStateRequest(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionConsensusStateResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionConsensusStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionConsensusStateResponse(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionRequest(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionRequest)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionRequest(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionResponse(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionsRequest(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionsRequest)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionsRequest(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_QueryConnectionsResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_query_pb.QueryConnectionsResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.QueryConnectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_QueryConnectionsResponse(buffer_arg) {
  return ibc_core_connection_v1_query_pb.QueryConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query provides defines the gRPC querier service
var QueryService = exports.QueryService = {
  // Connection queries an IBC connection end.
connection: {
    path: '/ibc.core.connection.v1.Query/Connection',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    responseType: ibc_core_connection_v1_query_pb.QueryConnectionResponse,
    requestSerialize: serialize_ibc_core_connection_v1_QueryConnectionRequest,
    requestDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionRequest,
    responseSerialize: serialize_ibc_core_connection_v1_QueryConnectionResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionResponse,
  },
  // Connections queries all the IBC connections of a chain.
connections: {
    path: '/ibc.core.connection.v1.Query/Connections',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    responseType: ibc_core_connection_v1_query_pb.QueryConnectionsResponse,
    requestSerialize: serialize_ibc_core_connection_v1_QueryConnectionsRequest,
    requestDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionsRequest,
    responseSerialize: serialize_ibc_core_connection_v1_QueryConnectionsResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionsResponse,
  },
  // ClientConnections queries the connection paths associated with a client
// state.
clientConnections: {
    path: '/ibc.core.connection.v1.Query/ClientConnections',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    responseType: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse,
    requestSerialize: serialize_ibc_core_connection_v1_QueryClientConnectionsRequest,
    requestDeserialize: deserialize_ibc_core_connection_v1_QueryClientConnectionsRequest,
    responseSerialize: serialize_ibc_core_connection_v1_QueryClientConnectionsResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_QueryClientConnectionsResponse,
  },
  // ConnectionClientState queries the client state associated with the
// connection.
connectionClientState: {
    path: '/ibc.core.connection.v1.Query/ConnectionClientState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    responseType: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse,
    requestSerialize: serialize_ibc_core_connection_v1_QueryConnectionClientStateRequest,
    requestDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionClientStateRequest,
    responseSerialize: serialize_ibc_core_connection_v1_QueryConnectionClientStateResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionClientStateResponse,
  },
  // ConnectionConsensusState queries the consensus state associated with the
// connection.
connectionConsensusState: {
    path: '/ibc.core.connection.v1.Query/ConnectionConsensusState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    responseType: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse,
    requestSerialize: serialize_ibc_core_connection_v1_QueryConnectionConsensusStateRequest,
    requestDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionConsensusStateRequest,
    responseSerialize: serialize_ibc_core_connection_v1_QueryConnectionConsensusStateResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_QueryConnectionConsensusStateResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
