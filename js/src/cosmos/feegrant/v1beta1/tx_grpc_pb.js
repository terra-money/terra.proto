// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_feegrant_v1beta1_tx_pb = require('../../../cosmos/feegrant/v1beta1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');

function serialize_cosmos_feegrant_v1beta1_MsgGrantAllowance(arg) {
  if (!(arg instanceof cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance)) {
    throw new Error('Expected argument of type cosmos.feegrant.v1beta1.MsgGrantAllowance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_feegrant_v1beta1_MsgGrantAllowance(buffer_arg) {
  return cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_feegrant_v1beta1_MsgGrantAllowanceResponse(arg) {
  if (!(arg instanceof cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse)) {
    throw new Error('Expected argument of type cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_feegrant_v1beta1_MsgGrantAllowanceResponse(buffer_arg) {
  return cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_feegrant_v1beta1_MsgRevokeAllowance(arg) {
  if (!(arg instanceof cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance)) {
    throw new Error('Expected argument of type cosmos.feegrant.v1beta1.MsgRevokeAllowance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_feegrant_v1beta1_MsgRevokeAllowance(buffer_arg) {
  return cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_feegrant_v1beta1_MsgRevokeAllowanceResponse(arg) {
  if (!(arg instanceof cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse)) {
    throw new Error('Expected argument of type cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_feegrant_v1beta1_MsgRevokeAllowanceResponse(buffer_arg) {
  return cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the feegrant msg service.
var MsgService = exports.MsgService = {
  // GrantAllowance grants fee allowance to the grantee on the granter's
// account with the provided expiration time.
grantAllowance: {
    path: '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    responseType: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse,
    requestSerialize: serialize_cosmos_feegrant_v1beta1_MsgGrantAllowance,
    requestDeserialize: deserialize_cosmos_feegrant_v1beta1_MsgGrantAllowance,
    responseSerialize: serialize_cosmos_feegrant_v1beta1_MsgGrantAllowanceResponse,
    responseDeserialize: deserialize_cosmos_feegrant_v1beta1_MsgGrantAllowanceResponse,
  },
  // RevokeAllowance revokes any fee allowance of granter's account that
// has been granted to the grantee.
revokeAllowance: {
    path: '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    responseType: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse,
    requestSerialize: serialize_cosmos_feegrant_v1beta1_MsgRevokeAllowance,
    requestDeserialize: deserialize_cosmos_feegrant_v1beta1_MsgRevokeAllowance,
    responseSerialize: serialize_cosmos_feegrant_v1beta1_MsgRevokeAllowanceResponse,
    responseDeserialize: deserialize_cosmos_feegrant_v1beta1_MsgRevokeAllowanceResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
