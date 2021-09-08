// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var terra_treasury_v1beta1_query_pb = require('../../../terra/treasury/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var terra_treasury_v1beta1_treasury_pb = require('../../../terra/treasury/v1beta1/treasury_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');

function serialize_terra_treasury_v1beta1_QueryIndicatorsRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryIndicatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryIndicatorsRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryIndicatorsResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryIndicatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryIndicatorsResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryParamsRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryParamsResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryRewardWeightRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryRewardWeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryRewardWeightRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryRewardWeightResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryRewardWeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryRewardWeightResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QuerySeigniorageProceedsRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QuerySeigniorageProceedsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QuerySeigniorageProceedsRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QuerySeigniorageProceedsResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QuerySeigniorageProceedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QuerySeigniorageProceedsResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxCapRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxCapRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxCapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxCapRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxCapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxCapResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxCapResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxCapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxCapResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxCapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxCapsRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxCapsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxCapsRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxCapsResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxCapsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxCapsResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxProceedsRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxProceedsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxProceedsRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxProceedsResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxProceedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxProceedsResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxRateRequest(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxRateRequest)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxRateRequest(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_terra_treasury_v1beta1_QueryTaxRateResponse(arg) {
  if (!(arg instanceof terra_treasury_v1beta1_query_pb.QueryTaxRateResponse)) {
    throw new Error('Expected argument of type terra.treasury.v1beta1.QueryTaxRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_terra_treasury_v1beta1_QueryTaxRateResponse(buffer_arg) {
  return terra_treasury_v1beta1_query_pb.QueryTaxRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // TaxRate return the current tax rate
taxRate: {
    path: '/terra.treasury.v1beta1.Query/TaxRate',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryTaxRateRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryTaxRateResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryTaxRateRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxRateRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryTaxRateResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxRateResponse,
  },
  // TaxCap returns the tax cap of a denom
taxCap: {
    path: '/terra.treasury.v1beta1.Query/TaxCap',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryTaxCapRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryTaxCapResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryTaxCapRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxCapRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryTaxCapResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxCapResponse,
  },
  // TaxCaps returns the all tax caps
taxCaps: {
    path: '/terra.treasury.v1beta1.Query/TaxCaps',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryTaxCapsRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryTaxCapsResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryTaxCapsRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxCapsRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryTaxCapsResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxCapsResponse,
  },
  // RewardWeight return the current reward weight
rewardWeight: {
    path: '/terra.treasury.v1beta1.Query/RewardWeight',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryRewardWeightRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryRewardWeightResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryRewardWeightRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryRewardWeightRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryRewardWeightResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryRewardWeightResponse,
  },
  // SeigniorageProceeds return the current seigniorage proceeds
seigniorageProceeds: {
    path: '/terra.treasury.v1beta1.Query/SeigniorageProceeds',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsRequest,
    responseType: terra_treasury_v1beta1_query_pb.QuerySeigniorageProceedsResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QuerySeigniorageProceedsRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QuerySeigniorageProceedsRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QuerySeigniorageProceedsResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QuerySeigniorageProceedsResponse,
  },
  // TaxProceeds return the current tax proceeds
taxProceeds: {
    path: '/terra.treasury.v1beta1.Query/TaxProceeds',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryTaxProceedsRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryTaxProceedsResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryTaxProceedsRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxProceedsRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryTaxProceedsResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryTaxProceedsResponse,
  },
  // Indicators return the current trl informations
indicators: {
    path: '/terra.treasury.v1beta1.Query/Indicators',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryIndicatorsRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryIndicatorsResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryIndicatorsRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryIndicatorsRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryIndicatorsResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryIndicatorsResponse,
  },
  // Params queries all parameters.
params: {
    path: '/terra.treasury.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: terra_treasury_v1beta1_query_pb.QueryParamsRequest,
    responseType: terra_treasury_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_terra_treasury_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_terra_treasury_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_terra_treasury_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_terra_treasury_v1beta1_QueryParamsResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
