// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_client_v1_query_pb = require('../../../../ibc/core/client/v1/query_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');

function serialize_ibc_core_client_v1_QueryClientParamsRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientParamsRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientParamsRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientParamsResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientParamsResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientParamsResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStateRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStateRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStateRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStateResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStateResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStateResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStatesRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStatesRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStatesRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStatesResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStatesResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStatesResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStatusRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStatusRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStatusRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryClientStatusResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryClientStatusResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryClientStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryClientStatusResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryClientStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryConsensusStateRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryConsensusStateRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryConsensusStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryConsensusStateRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryConsensusStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryConsensusStateResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryConsensusStateResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryConsensusStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryConsensusStateResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryConsensusStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryConsensusStatesRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryConsensusStatesRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryConsensusStatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryConsensusStatesRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryConsensusStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryConsensusStatesResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryConsensusStatesResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryConsensusStatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryConsensusStatesResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryConsensusStatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryUpgradedClientStateRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryUpgradedClientStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryUpgradedClientStateRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryUpgradedClientStateResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryUpgradedClientStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryUpgradedClientStateResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryUpgradedConsensusStateRequest(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryUpgradedConsensusStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryUpgradedConsensusStateRequest(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_QueryUpgradedConsensusStateResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.QueryUpgradedConsensusStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_QueryUpgradedConsensusStateResponse(buffer_arg) {
  return ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query provides defines the gRPC querier service
var QueryService = exports.QueryService = {
  // ClientState queries an IBC light client.
clientState: {
    path: '/ibc.core.client.v1.Query/ClientState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    responseType: ibc_core_client_v1_query_pb.QueryClientStateResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryClientStateRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryClientStateRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryClientStateResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryClientStateResponse,
  },
  // ClientStates queries all the IBC light clients of a chain.
clientStates: {
    path: '/ibc.core.client.v1.Query/ClientStates',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    responseType: ibc_core_client_v1_query_pb.QueryClientStatesResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryClientStatesRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryClientStatesRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryClientStatesResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryClientStatesResponse,
  },
  // ConsensusState queries a consensus state associated with a client state at
// a given height.
consensusState: {
    path: '/ibc.core.client.v1.Query/ConsensusState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    responseType: ibc_core_client_v1_query_pb.QueryConsensusStateResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryConsensusStateRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryConsensusStateRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryConsensusStateResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryConsensusStateResponse,
  },
  // ConsensusStates queries all the consensus state associated with a given
// client.
consensusStates: {
    path: '/ibc.core.client.v1.Query/ConsensusStates',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    responseType: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryConsensusStatesRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryConsensusStatesRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryConsensusStatesResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryConsensusStatesResponse,
  },
  // Status queries the status of an IBC client.
clientStatus: {
    path: '/ibc.core.client.v1.Query/ClientStatus',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    responseType: ibc_core_client_v1_query_pb.QueryClientStatusResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryClientStatusRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryClientStatusRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryClientStatusResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryClientStatusResponse,
  },
  // ClientParams queries all parameters of the ibc client.
clientParams: {
    path: '/ibc.core.client.v1.Query/ClientParams',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    responseType: ibc_core_client_v1_query_pb.QueryClientParamsResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryClientParamsRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryClientParamsRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryClientParamsResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryClientParamsResponse,
  },
  // UpgradedClientState queries an Upgraded IBC light client.
upgradedClientState: {
    path: '/ibc.core.client.v1.Query/UpgradedClientState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    responseType: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryUpgradedClientStateRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryUpgradedClientStateRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryUpgradedClientStateResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryUpgradedClientStateResponse,
  },
  // UpgradedConsensusState queries an Upgraded IBC consensus state.
upgradedConsensusState: {
    path: '/ibc.core.client.v1.Query/UpgradedConsensusState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    responseType: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse,
    requestSerialize: serialize_ibc_core_client_v1_QueryUpgradedConsensusStateRequest,
    requestDeserialize: deserialize_ibc_core_client_v1_QueryUpgradedConsensusStateRequest,
    responseSerialize: serialize_ibc_core_client_v1_QueryUpgradedConsensusStateResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_QueryUpgradedConsensusStateResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
