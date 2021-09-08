// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_oracle_v1beta1_query_pb = require('../../../terra/oracle/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var terra_oracle_v1beta1_oracle_pb = require('../../../terra/oracle/v1beta1/oracle_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_oracle_v1beta1_QueryActivesRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryActivesRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryActivesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryActivesRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryActivesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryActivesResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryActivesResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryActivesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryActivesResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryActivesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregatePrevoteRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregatePrevoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregatePrevoteRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregatePrevoteResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregatePrevoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregatePrevoteResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregatePrevotesRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregatePrevotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregatePrevotesRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregatePrevotesResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregatePrevotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregatePrevotesResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregateVoteRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregateVoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregateVoteRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregateVoteResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregateVoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregateVoteResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregateVotesRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregateVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregateVotesRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryAggregateVotesResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryAggregateVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryAggregateVotesResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryExchangeRateRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryExchangeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryExchangeRateRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryExchangeRateResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryExchangeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryExchangeRateResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryExchangeRatesRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryExchangeRatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryExchangeRatesRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryExchangeRatesResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryExchangeRatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryExchangeRatesResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryFeederDelegationRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryFeederDelegationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryFeederDelegationRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryFeederDelegationResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryFeederDelegationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryFeederDelegationResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryMissCounterRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryMissCounterRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryMissCounterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryMissCounterRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryMissCounterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryMissCounterResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryMissCounterResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryMissCounterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryMissCounterResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryMissCounterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryParamsRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryParamsResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryTobinTaxRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryTobinTaxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryTobinTaxRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryTobinTaxResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryTobinTaxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryTobinTaxResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryTobinTaxesRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryTobinTaxesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryTobinTaxesRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryTobinTaxesResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryTobinTaxesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryTobinTaxesResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryVoteTargetsRequest(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryVoteTargetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryVoteTargetsRequest(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_oracle_v1beta1_QueryVoteTargetsResponse(arg) {
  if (!(arg instanceof terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse)) {
    throw new Error('Expected argument of type terra.oracle.v1beta1.QueryVoteTargetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_oracle_v1beta1_QueryVoteTargetsResponse(buffer_arg) {
  return terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // ExchangeRate returns exchange rate of a denom
exchangeRate: {
    path: '/terra.oracle.v1beta1.Query/ExchangeRate',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryExchangeRateRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryExchangeRateResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryExchangeRateRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryExchangeRateRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryExchangeRateResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryExchangeRateResponse,
  },
  // ExchangeRates returns exchange rates of all denoms
exchangeRates: {
    path: '/terra.oracle.v1beta1.Query/ExchangeRates',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryExchangeRatesRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryExchangeRatesResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryExchangeRatesRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryExchangeRatesRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryExchangeRatesResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryExchangeRatesResponse,
  },
  // TobinTax returns tobin tax of a denom
tobinTax: {
    path: '/terra.oracle.v1beta1.Query/TobinTax',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryTobinTaxRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryTobinTaxResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryTobinTaxRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryTobinTaxRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryTobinTaxResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryTobinTaxResponse,
  },
  // TobinTaxes returns tobin taxes of all denoms
tobinTaxes: {
    path: '/terra.oracle.v1beta1.Query/TobinTaxes',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryTobinTaxesRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryTobinTaxesResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryTobinTaxesRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryTobinTaxesRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryTobinTaxesResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryTobinTaxesResponse,
  },
  // Actives returns all active denoms
actives: {
    path: '/terra.oracle.v1beta1.Query/Actives',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryActivesRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryActivesResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryActivesRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryActivesRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryActivesResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryActivesResponse,
  },
  // VoteTargets returns all vote target denoms
voteTargets: {
    path: '/terra.oracle.v1beta1.Query/VoteTargets',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryVoteTargetsRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryVoteTargetsResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryVoteTargetsRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryVoteTargetsRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryVoteTargetsResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryVoteTargetsResponse,
  },
  // FeederDelegation returns feeder delegation of a validator
feederDelegation: {
    path: '/terra.oracle.v1beta1.Query/FeederDelegation',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryFeederDelegationRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryFeederDelegationResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryFeederDelegationRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryFeederDelegationRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryFeederDelegationResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryFeederDelegationResponse,
  },
  // MissCounter returns oracle miss counter of a validator
missCounter: {
    path: '/terra.oracle.v1beta1.Query/MissCounter',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryMissCounterRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryMissCounterResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryMissCounterRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryMissCounterRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryMissCounterResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryMissCounterResponse,
  },
  // AggregatePrevote returns an aggregate prevote of a validator
aggregatePrevote: {
    path: '/terra.oracle.v1beta1.Query/AggregatePrevote',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryAggregatePrevoteResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryAggregatePrevoteRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregatePrevoteRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryAggregatePrevoteResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregatePrevoteResponse,
  },
  // AggregatePrevotes returns aggregate prevotes of all validators
aggregatePrevotes: {
    path: '/terra.oracle.v1beta1.Query/AggregatePrevotes',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryAggregatePrevotesResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryAggregatePrevotesRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregatePrevotesRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryAggregatePrevotesResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregatePrevotesResponse,
  },
  // AggregateVote returns an aggregate vote of a validator
aggregateVote: {
    path: '/terra.oracle.v1beta1.Query/AggregateVote',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryAggregateVoteRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryAggregateVoteResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryAggregateVoteRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregateVoteRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryAggregateVoteResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregateVoteResponse,
  },
  // AggregateVotes returns aggregate votes of all validators
aggregateVotes: {
    path: '/terra.oracle.v1beta1.Query/AggregateVotes',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryAggregateVotesRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryAggregateVotesResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryAggregateVotesRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregateVotesRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryAggregateVotesResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryAggregateVotesResponse,
  },
  // Params queries all parameters.
params: {
    path: '/terra.oracle.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: terra_oracle_v1beta1_query_pb.QueryParamsRequest,
    responseType: terra_oracle_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_terra_oracle_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_terra_oracle_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_terra_oracle_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_terra_oracle_v1beta1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
