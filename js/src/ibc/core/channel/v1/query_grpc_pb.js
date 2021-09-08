// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_channel_v1_query_pb = require('../../../../ibc/core/channel/v1/query_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js');
var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');

function serialize_ibc_core_channel_v1_QueryChannelClientStateRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelClientStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelClientStateRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelClientStateResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelClientStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelClientStateResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelConsensusStateRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelConsensusStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelConsensusStateRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelConsensusStateResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelConsensusStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelConsensusStateResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelsRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelsRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelsRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryChannelsResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryChannelsResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryChannelsResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryConnectionChannelsRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryConnectionChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryConnectionChannelsRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryConnectionChannelsResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryConnectionChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryConnectionChannelsResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryNextSequenceReceiveRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryNextSequenceReceiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryNextSequenceReceiveRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryNextSequenceReceiveResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryNextSequenceReceiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryNextSequenceReceiveResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketAcknowledgementRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketAcknowledgementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketAcknowledgementResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketAcknowledgementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketAcknowledgementsRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketAcknowledgementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementsRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketAcknowledgementsResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketAcknowledgementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementsResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketCommitmentRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketCommitmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketCommitmentRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketCommitmentResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketCommitmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketCommitmentResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketCommitmentsRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketCommitmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketCommitmentsRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketCommitmentsResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketCommitmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketCommitmentsResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketReceiptRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketReceiptRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryPacketReceiptResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryPacketReceiptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryPacketReceiptResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryUnreceivedAcksRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryUnreceivedAcksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryUnreceivedAcksRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryUnreceivedAcksResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryUnreceivedAcksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryUnreceivedAcksResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryUnreceivedPacketsRequest(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryUnreceivedPacketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryUnreceivedPacketsRequest(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_QueryUnreceivedPacketsResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.QueryUnreceivedPacketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_QueryUnreceivedPacketsResponse(buffer_arg) {
  return ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query provides defines the gRPC querier service
var QueryService = exports.QueryService = {
  // Channel queries an IBC Channel.
channel: {
    path: '/ibc.core.channel.v1.Query/Channel',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryChannelResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryChannelRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryChannelRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryChannelResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryChannelResponse,
  },
  // Channels queries all the IBC channels of a chain.
channels: {
    path: '/ibc.core.channel.v1.Query/Channels',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryChannelsResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryChannelsRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryChannelsRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryChannelsResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryChannelsResponse,
  },
  // ConnectionChannels queries all the channels associated with a connection
// end.
connectionChannels: {
    path: '/ibc.core.channel.v1.Query/ConnectionChannels',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryConnectionChannelsRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryConnectionChannelsRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryConnectionChannelsResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryConnectionChannelsResponse,
  },
  // ChannelClientState queries for the client state for the channel associated
// with the provided channel identifiers.
channelClientState: {
    path: '/ibc.core.channel.v1.Query/ChannelClientState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryChannelClientStateRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryChannelClientStateRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryChannelClientStateResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryChannelClientStateResponse,
  },
  // ChannelConsensusState queries for the consensus state for the channel
// associated with the provided channel identifiers.
channelConsensusState: {
    path: '/ibc.core.channel.v1.Query/ChannelConsensusState',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryChannelConsensusStateRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryChannelConsensusStateRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryChannelConsensusStateResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryChannelConsensusStateResponse,
  },
  // PacketCommitment queries a stored packet commitment hash.
packetCommitment: {
    path: '/ibc.core.channel.v1.Query/PacketCommitment',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryPacketCommitmentRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryPacketCommitmentRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryPacketCommitmentResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryPacketCommitmentResponse,
  },
  // PacketCommitments returns all the packet commitments hashes associated
// with a channel.
packetCommitments: {
    path: '/ibc.core.channel.v1.Query/PacketCommitments',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryPacketCommitmentsRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryPacketCommitmentsRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryPacketCommitmentsResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryPacketCommitmentsResponse,
  },
  // PacketReceipt queries if a given packet sequence has been received on the
// queried chain
packetReceipt: {
    path: '/ibc.core.channel.v1.Query/PacketReceipt',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryPacketReceiptRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryPacketReceiptRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryPacketReceiptResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryPacketReceiptResponse,
  },
  // PacketAcknowledgement queries a stored packet acknowledgement hash.
packetAcknowledgement: {
    path: '/ibc.core.channel.v1.Query/PacketAcknowledgement',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryPacketAcknowledgementRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryPacketAcknowledgementResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementResponse,
  },
  // PacketAcknowledgements returns all the packet acknowledgements associated
// with a channel.
packetAcknowledgements: {
    path: '/ibc.core.channel.v1.Query/PacketAcknowledgements',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryPacketAcknowledgementsRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementsRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryPacketAcknowledgementsResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryPacketAcknowledgementsResponse,
  },
  // UnreceivedPackets returns all the unreceived IBC packets associated with a
// channel and sequences.
unreceivedPackets: {
    path: '/ibc.core.channel.v1.Query/UnreceivedPackets',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryUnreceivedPacketsRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryUnreceivedPacketsRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryUnreceivedPacketsResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryUnreceivedPacketsResponse,
  },
  // UnreceivedAcks returns all the unreceived IBC acknowledgements associated
// with a channel and sequences.
unreceivedAcks: {
    path: '/ibc.core.channel.v1.Query/UnreceivedAcks',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryUnreceivedAcksRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryUnreceivedAcksRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryUnreceivedAcksResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryUnreceivedAcksResponse,
  },
  // NextSequenceReceive returns the next receive sequence for a given channel.
nextSequenceReceive: {
    path: '/ibc.core.channel.v1.Query/NextSequenceReceive',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    responseType: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse,
    requestSerialize: serialize_ibc_core_channel_v1_QueryNextSequenceReceiveRequest,
    requestDeserialize: deserialize_ibc_core_channel_v1_QueryNextSequenceReceiveRequest,
    responseSerialize: serialize_ibc_core_channel_v1_QueryNextSequenceReceiveResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_QueryNextSequenceReceiveResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
