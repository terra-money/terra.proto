// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_market_v1beta1_tx_pb = require('../../../terra/market/v1beta1/tx_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_market_v1beta1_MsgSwap(arg) {
  if (!(arg instanceof terra_market_v1beta1_tx_pb.MsgSwap)) {
    throw new Error('Expected argument of type terra.market.v1beta1.MsgSwap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_MsgSwap(buffer_arg) {
  return terra_market_v1beta1_tx_pb.MsgSwap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_MsgSwapResponse(arg) {
  if (!(arg instanceof terra_market_v1beta1_tx_pb.MsgSwapResponse)) {
    throw new Error('Expected argument of type terra.market.v1beta1.MsgSwapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_MsgSwapResponse(buffer_arg) {
  return terra_market_v1beta1_tx_pb.MsgSwapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_MsgSwapSend(arg) {
  if (!(arg instanceof terra_market_v1beta1_tx_pb.MsgSwapSend)) {
    throw new Error('Expected argument of type terra.market.v1beta1.MsgSwapSend');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_MsgSwapSend(buffer_arg) {
  return terra_market_v1beta1_tx_pb.MsgSwapSend.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_market_v1beta1_MsgSwapSendResponse(arg) {
  if (!(arg instanceof terra_market_v1beta1_tx_pb.MsgSwapSendResponse)) {
    throw new Error('Expected argument of type terra.market.v1beta1.MsgSwapSendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_market_v1beta1_MsgSwapSendResponse(buffer_arg) {
  return terra_market_v1beta1_tx_pb.MsgSwapSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the market Msg service.
var MsgService = exports.MsgService = {
  // Swap defines a method for swapping coin from one denom to another
// denom.
swap: {
    path: '/terra.market.v1beta1.Msg/Swap',
    requestStream: false,
    responseStream: false,
    requestType: terra_market_v1beta1_tx_pb.MsgSwap,
    responseType: terra_market_v1beta1_tx_pb.MsgSwapResponse,
    requestSerialize: serialize_terra_market_v1beta1_MsgSwap,
    requestDeserialize: deserialize_terra_market_v1beta1_MsgSwap,
    responseSerialize: serialize_terra_market_v1beta1_MsgSwapResponse,
    responseDeserialize: deserialize_terra_market_v1beta1_MsgSwapResponse,
  },
  // SwapSend defines a method for swapping and sending coin from a account to other
// account.
swapSend: {
    path: '/terra.market.v1beta1.Msg/SwapSend',
    requestStream: false,
    responseStream: false,
    requestType: terra_market_v1beta1_tx_pb.MsgSwapSend,
    responseType: terra_market_v1beta1_tx_pb.MsgSwapSendResponse,
    requestSerialize: serialize_terra_market_v1beta1_MsgSwapSend,
    requestDeserialize: deserialize_terra_market_v1beta1_MsgSwapSend,
    responseSerialize: serialize_terra_market_v1beta1_MsgSwapSendResponse,
    responseDeserialize: deserialize_terra_market_v1beta1_MsgSwapSendResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
