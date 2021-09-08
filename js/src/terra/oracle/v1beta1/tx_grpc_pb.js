// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_oracle_v1beta1_tx_pb = require('../../../terra/oracle/v1beta1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

function serialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevote(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevote(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevoteResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevoteResponse(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVote(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgAggregateExchangeRateVote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVote(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVoteResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVoteResponse(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_MsgDelegateFeedConsent(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgDelegateFeedConsent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgDelegateFeedConsent(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_MsgDelegateFeedConsentResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.MsgDelegateFeedConsentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_MsgDelegateFeedConsentResponse(buffer_arg) {
  return terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the oracle Msg service.
var MsgService = exports.MsgService = {
  // AggregateExchangeRatePrevote defines a method for submitting
// aggregate exchange rate prevote
aggregateExchangeRatePrevote: {
    path: '/terra.oracle.v1beta1.Msg/AggregateExchangeRatePrevote',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevote,
    responseType: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRatePrevoteResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevote,
    requestDeserialize: deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevote,
    responseSerialize: serialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevoteResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRatePrevoteResponse,
  },
  // AggregateExchangeRateVote defines a method for submitting
// aggregate exchange rate vote
aggregateExchangeRateVote: {
    path: '/terra.oracle.v1beta1.Msg/AggregateExchangeRateVote',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVote,
    responseType: terra_oracle_v1beta1_tx_pb.MsgAggregateExchangeRateVoteResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVote,
    requestDeserialize: deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVote,
    responseSerialize: serialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVoteResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_MsgAggregateExchangeRateVoteResponse,
  },
  // DelegateFeedConsent defines a method for setting the feeder delegation
delegateFeedConsent: {
    path: '/terra.oracle.v1beta1.Msg/DelegateFeedConsent',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsent,
    responseType: terra_oracle_v1beta1_tx_pb.MsgDelegateFeedConsentResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_MsgDelegateFeedConsent,
    requestDeserialize: deserialize_terra_oracle_v1beta1_MsgDelegateFeedConsent,
    responseSerialize: serialize_terra_oracle_v1beta1_MsgDelegateFeedConsentResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_MsgDelegateFeedConsentResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
