// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_channel_v1_tx_pb = require('../../../../ibc/core/channel/v1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js');

function serialize_ibc_core_channel_v1_MsgAcknowledgement(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgAcknowledgement)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgAcknowledgement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgAcknowledgement(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgAcknowledgement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgAcknowledgementResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgAcknowledgementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgAcknowledgementResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelCloseConfirm(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelCloseConfirm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelCloseConfirm(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelCloseConfirmResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelCloseConfirmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelCloseConfirmResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelCloseInit(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelCloseInit)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelCloseInit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelCloseInit(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelCloseInit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelCloseInitResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelCloseInitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelCloseInitResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenAck(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenAck)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenAck');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenAck(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenAck.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenAckResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenAckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenAckResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenConfirm(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenConfirm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenConfirm(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenConfirmResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenConfirmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenConfirmResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenInit(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenInit)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenInit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenInit(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenInit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenInitResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenInitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenInitResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenTry(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenTry)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenTry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenTry(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenTry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgChannelOpenTryResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgChannelOpenTryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgChannelOpenTryResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgRecvPacket(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgRecvPacket)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgRecvPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgRecvPacket(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgRecvPacket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgRecvPacketResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgRecvPacketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgRecvPacketResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgTimeout(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgTimeout)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgTimeout');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgTimeout(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgTimeout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgTimeoutOnClose(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgTimeoutOnClose');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgTimeoutOnClose(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgTimeoutOnCloseResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgTimeoutOnCloseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgTimeoutOnCloseResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_channel_v1_MsgTimeoutResponse(arg) {
  if (!(arg instanceof ibc_core_channel_v1_tx_pb.MsgTimeoutResponse)) {
    throw new Error('Expected argument of type ibc.core.channel.v1.MsgTimeoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_channel_v1_MsgTimeoutResponse(buffer_arg) {
  return ibc_core_channel_v1_tx_pb.MsgTimeoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the ibc/channel Msg service.
var MsgService = exports.MsgService = {
  // ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
channelOpenInit: {
    path: '/ibc.core.channel.v1.Msg/ChannelOpenInit',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenInit,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenInit,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenInitResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenInitResponse,
  },
  // ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
channelOpenTry: {
    path: '/ibc.core.channel.v1.Msg/ChannelOpenTry',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenTry,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenTry,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenTryResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenTryResponse,
  },
  // ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
channelOpenAck: {
    path: '/ibc.core.channel.v1.Msg/ChannelOpenAck',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenAck,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenAck,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenAckResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenAckResponse,
  },
  // ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
channelOpenConfirm: {
    path: '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenConfirm,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenConfirm,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelOpenConfirmResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelOpenConfirmResponse,
  },
  // ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
channelCloseInit: {
    path: '/ibc.core.channel.v1.Msg/ChannelCloseInit',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelCloseInit,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelCloseInit,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelCloseInitResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelCloseInitResponse,
  },
  // ChannelCloseConfirm defines a rpc handler method for
// MsgChannelCloseConfirm.
channelCloseConfirm: {
    path: '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    responseType: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgChannelCloseConfirm,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgChannelCloseConfirm,
    responseSerialize: serialize_ibc_core_channel_v1_MsgChannelCloseConfirmResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgChannelCloseConfirmResponse,
  },
  // RecvPacket defines a rpc handler method for MsgRecvPacket.
recvPacket: {
    path: '/ibc.core.channel.v1.Msg/RecvPacket',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    responseType: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgRecvPacket,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgRecvPacket,
    responseSerialize: serialize_ibc_core_channel_v1_MsgRecvPacketResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgRecvPacketResponse,
  },
  // Timeout defines a rpc handler method for MsgTimeout.
timeout: {
    path: '/ibc.core.channel.v1.Msg/Timeout',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgTimeout,
    responseType: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgTimeout,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgTimeout,
    responseSerialize: serialize_ibc_core_channel_v1_MsgTimeoutResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgTimeoutResponse,
  },
  // TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
timeoutOnClose: {
    path: '/ibc.core.channel.v1.Msg/TimeoutOnClose',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    responseType: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgTimeoutOnClose,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgTimeoutOnClose,
    responseSerialize: serialize_ibc_core_channel_v1_MsgTimeoutOnCloseResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgTimeoutOnCloseResponse,
  },
  // Acknowledgement defines a rpc handler method for MsgAcknowledgement.
acknowledgement: {
    path: '/ibc.core.channel.v1.Msg/Acknowledgement',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    responseType: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse,
    requestSerialize: serialize_ibc_core_channel_v1_MsgAcknowledgement,
    requestDeserialize: deserialize_ibc_core_channel_v1_MsgAcknowledgement,
    responseSerialize: serialize_ibc_core_channel_v1_MsgAcknowledgementResponse,
    responseDeserialize: deserialize_ibc_core_channel_v1_MsgAcknowledgementResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
