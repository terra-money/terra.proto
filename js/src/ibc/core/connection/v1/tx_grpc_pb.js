// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_connection_v1_tx_pb = require('../../../../ibc/core/connection/v1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var ibc_core_connection_v1_connection_pb = require('../../../../ibc/core/connection/v1/connection_pb.js');

function serialize_ibc_core_connection_v1_MsgConnectionOpenAck(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenAck');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenAck(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenAckResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenAckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenAckResponse(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenConfirm(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenConfirm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenConfirm(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenConfirmResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenConfirmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenConfirmResponse(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenInit(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenInit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenInit(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenInitResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenInitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenInitResponse(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenTry(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenTry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenTry(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_connection_v1_MsgConnectionOpenTryResponse(arg) {
  if (!(arg instanceof ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse)) {
    throw new Error('Expected argument of type ibc.core.connection.v1.MsgConnectionOpenTryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_connection_v1_MsgConnectionOpenTryResponse(buffer_arg) {
  return ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the ibc/connection Msg service.
var MsgService = exports.MsgService = {
  // ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
connectionOpenInit: {
    path: '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse,
    requestSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenInit,
    requestDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenInit,
    responseSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenInitResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenInitResponse,
  },
  // ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
connectionOpenTry: {
    path: '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse,
    requestSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenTry,
    requestDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenTry,
    responseSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenTryResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenTryResponse,
  },
  // ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
connectionOpenAck: {
    path: '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse,
    requestSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenAck,
    requestDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenAck,
    responseSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenAckResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenAckResponse,
  },
  // ConnectionOpenConfirm defines a rpc handler method for
// MsgConnectionOpenConfirm.
connectionOpenConfirm: {
    path: '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse,
    requestSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenConfirm,
    requestDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenConfirm,
    responseSerialize: serialize_ibc_core_connection_v1_MsgConnectionOpenConfirmResponse,
    responseDeserialize: deserialize_ibc_core_connection_v1_MsgConnectionOpenConfirmResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
