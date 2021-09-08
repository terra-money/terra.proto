// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_client_v1_tx_pb = require('../../../../ibc/core/client/v1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');

function serialize_ibc_core_client_v1_MsgCreateClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgCreateClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgCreateClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgCreateClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgCreateClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgCreateClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgCreateClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgCreateClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgCreateClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgCreateClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgSubmitMisbehaviour(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgSubmitMisbehaviour');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgSubmitMisbehaviour(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgSubmitMisbehaviourResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpgradeClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpgradeClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpgradeClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpgradeClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpgradeClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpgradeClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpgradeClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpgradeClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the ibc/client Msg service.
var MsgService = exports.MsgService = {
  // CreateClient defines a rpc handler method for MsgCreateClient.
createClient: {
    path: '/ibc.core.client.v1.Msg/CreateClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgCreateClient,
    responseType: ibc_core_client_v1_tx_pb.MsgCreateClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgCreateClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgCreateClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgCreateClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgCreateClientResponse,
  },
  // UpdateClient defines a rpc handler method for MsgUpdateClient.
updateClient: {
    path: '/ibc.core.client.v1.Msg/UpdateClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    responseType: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgUpdateClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgUpdateClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgUpdateClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgUpdateClientResponse,
  },
  // UpgradeClient defines a rpc handler method for MsgUpgradeClient.
upgradeClient: {
    path: '/ibc.core.client.v1.Msg/UpgradeClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    responseType: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgUpgradeClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgUpgradeClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgUpgradeClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgUpgradeClientResponse,
  },
  // SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
submitMisbehaviour: {
    path: '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    responseType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgSubmitMisbehaviour,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgSubmitMisbehaviour,
    responseSerialize: serialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
