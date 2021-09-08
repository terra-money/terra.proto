// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_authz_v1beta1_tx_pb = require('../../../cosmos/authz/v1beta1/tx_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var cosmos_base_abci_v1beta1_abci_pb = require('../../../cosmos/base/abci/v1beta1/abci_pb.js');
var cosmos_authz_v1beta1_authz_pb = require('../../../cosmos/authz/v1beta1/authz_pb.js');

function serialize_cosmos_authz_v1beta1_MsgExec(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgExec)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgExec');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgExec(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgExec.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_MsgExecResponse(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgExecResponse)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgExecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgExecResponse(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgExecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_MsgGrant(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgGrant)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgGrant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgGrant(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgGrant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_MsgGrantResponse(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgGrantResponse)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgGrantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgGrantResponse(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgGrantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_MsgRevoke(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgRevoke)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgRevoke');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgRevoke(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgRevoke.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_authz_v1beta1_MsgRevokeResponse(arg) {
  if (!(arg instanceof cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse)) {
    throw new Error('Expected argument of type cosmos.authz.v1beta1.MsgRevokeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_authz_v1beta1_MsgRevokeResponse(buffer_arg) {
  return cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the authz Msg service.
var MsgService = exports.MsgService = {
  // Grant grants the provided authorization to the grantee on the granter's
// account with the provided expiration time. If there is already a grant
// for the given (granter, grantee, Authorization) triple, then the grant
// will be overwritten.
grant: {
    path: '/cosmos.authz.v1beta1.Msg/Grant',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    responseType: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse,
    requestSerialize: serialize_cosmos_authz_v1beta1_MsgGrant,
    requestDeserialize: deserialize_cosmos_authz_v1beta1_MsgGrant,
    responseSerialize: serialize_cosmos_authz_v1beta1_MsgGrantResponse,
    responseDeserialize: deserialize_cosmos_authz_v1beta1_MsgGrantResponse,
  },
  // Exec attempts to execute the provided messages using
// authorizations granted to the grantee. Each message should have only
// one signer corresponding to the granter of the authorization.
exec: {
    path: '/cosmos.authz.v1beta1.Msg/Exec',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_authz_v1beta1_tx_pb.MsgExec,
    responseType: cosmos_authz_v1beta1_tx_pb.MsgExecResponse,
    requestSerialize: serialize_cosmos_authz_v1beta1_MsgExec,
    requestDeserialize: deserialize_cosmos_authz_v1beta1_MsgExec,
    responseSerialize: serialize_cosmos_authz_v1beta1_MsgExecResponse,
    responseDeserialize: deserialize_cosmos_authz_v1beta1_MsgExecResponse,
  },
  // Revoke revokes any authorization corresponding to the provided method name on the
// granter's account that has been granted to the grantee.
revoke: {
    path: '/cosmos.authz.v1beta1.Msg/Revoke',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    responseType: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse,
    requestSerialize: serialize_cosmos_authz_v1beta1_MsgRevoke,
    requestDeserialize: deserialize_cosmos_authz_v1beta1_MsgRevoke,
    responseSerialize: serialize_cosmos_authz_v1beta1_MsgRevokeResponse,
    responseDeserialize: deserialize_cosmos_authz_v1beta1_MsgRevokeResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
