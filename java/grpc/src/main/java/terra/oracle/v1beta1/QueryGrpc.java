package terra.oracle.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Query defines the gRPC querier service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/oracle/v1beta1/query.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class QueryGrpc {

  private QueryGrpc() {}

  public static final String SERVICE_NAME = "terra.oracle.v1beta1.Query";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> getExchangeRateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ExchangeRate",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> getExchangeRateMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest, terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> getExchangeRateMethod;
    if ((getExchangeRateMethod = QueryGrpc.getExchangeRateMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getExchangeRateMethod = QueryGrpc.getExchangeRateMethod) == null) {
          QueryGrpc.getExchangeRateMethod = getExchangeRateMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest, terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ExchangeRate"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("ExchangeRate"))
              .build();
        }
      }
    }
    return getExchangeRateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> getExchangeRatesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ExchangeRates",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> getExchangeRatesMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> getExchangeRatesMethod;
    if ((getExchangeRatesMethod = QueryGrpc.getExchangeRatesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getExchangeRatesMethod = QueryGrpc.getExchangeRatesMethod) == null) {
          QueryGrpc.getExchangeRatesMethod = getExchangeRatesMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ExchangeRates"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("ExchangeRates"))
              .build();
        }
      }
    }
    return getExchangeRatesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> getTobinTaxMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TobinTax",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> getTobinTaxMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest, terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> getTobinTaxMethod;
    if ((getTobinTaxMethod = QueryGrpc.getTobinTaxMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTobinTaxMethod = QueryGrpc.getTobinTaxMethod) == null) {
          QueryGrpc.getTobinTaxMethod = getTobinTaxMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest, terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TobinTax"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TobinTax"))
              .build();
        }
      }
    }
    return getTobinTaxMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> getTobinTaxesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TobinTaxes",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> getTobinTaxesMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> getTobinTaxesMethod;
    if ((getTobinTaxesMethod = QueryGrpc.getTobinTaxesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTobinTaxesMethod = QueryGrpc.getTobinTaxesMethod) == null) {
          QueryGrpc.getTobinTaxesMethod = getTobinTaxesMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TobinTaxes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TobinTaxes"))
              .build();
        }
      }
    }
    return getTobinTaxesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> getActivesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Actives",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> getActivesMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> getActivesMethod;
    if ((getActivesMethod = QueryGrpc.getActivesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getActivesMethod = QueryGrpc.getActivesMethod) == null) {
          QueryGrpc.getActivesMethod = getActivesMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Actives"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("Actives"))
              .build();
        }
      }
    }
    return getActivesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> getVoteTargetsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "VoteTargets",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> getVoteTargetsMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest, terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> getVoteTargetsMethod;
    if ((getVoteTargetsMethod = QueryGrpc.getVoteTargetsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getVoteTargetsMethod = QueryGrpc.getVoteTargetsMethod) == null) {
          QueryGrpc.getVoteTargetsMethod = getVoteTargetsMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest, terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "VoteTargets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("VoteTargets"))
              .build();
        }
      }
    }
    return getVoteTargetsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> getFeederDelegationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeederDelegation",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> getFeederDelegationMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest, terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> getFeederDelegationMethod;
    if ((getFeederDelegationMethod = QueryGrpc.getFeederDelegationMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getFeederDelegationMethod = QueryGrpc.getFeederDelegationMethod) == null) {
          QueryGrpc.getFeederDelegationMethod = getFeederDelegationMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest, terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeederDelegation"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("FeederDelegation"))
              .build();
        }
      }
    }
    return getFeederDelegationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> getMissCounterMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MissCounter",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> getMissCounterMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest, terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> getMissCounterMethod;
    if ((getMissCounterMethod = QueryGrpc.getMissCounterMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getMissCounterMethod = QueryGrpc.getMissCounterMethod) == null) {
          QueryGrpc.getMissCounterMethod = getMissCounterMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest, terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MissCounter"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("MissCounter"))
              .build();
        }
      }
    }
    return getMissCounterMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> getAggregatePrevoteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregatePrevote",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> getAggregatePrevoteMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> getAggregatePrevoteMethod;
    if ((getAggregatePrevoteMethod = QueryGrpc.getAggregatePrevoteMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getAggregatePrevoteMethod = QueryGrpc.getAggregatePrevoteMethod) == null) {
          QueryGrpc.getAggregatePrevoteMethod = getAggregatePrevoteMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregatePrevote"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("AggregatePrevote"))
              .build();
        }
      }
    }
    return getAggregatePrevoteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> getAggregatePrevotesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregatePrevotes",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> getAggregatePrevotesMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> getAggregatePrevotesMethod;
    if ((getAggregatePrevotesMethod = QueryGrpc.getAggregatePrevotesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getAggregatePrevotesMethod = QueryGrpc.getAggregatePrevotesMethod) == null) {
          QueryGrpc.getAggregatePrevotesMethod = getAggregatePrevotesMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregatePrevotes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("AggregatePrevotes"))
              .build();
        }
      }
    }
    return getAggregatePrevotesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> getAggregateVoteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregateVote",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> getAggregateVoteMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> getAggregateVoteMethod;
    if ((getAggregateVoteMethod = QueryGrpc.getAggregateVoteMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getAggregateVoteMethod = QueryGrpc.getAggregateVoteMethod) == null) {
          QueryGrpc.getAggregateVoteMethod = getAggregateVoteMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregateVote"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("AggregateVote"))
              .build();
        }
      }
    }
    return getAggregateVoteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> getAggregateVotesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregateVotes",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> getAggregateVotesMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> getAggregateVotesMethod;
    if ((getAggregateVotesMethod = QueryGrpc.getAggregateVotesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getAggregateVotesMethod = QueryGrpc.getAggregateVotesMethod) == null) {
          QueryGrpc.getAggregateVotesMethod = getAggregateVotesMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest, terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregateVotes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("AggregateVotes"))
              .build();
        }
      }
    }
    return getAggregateVotesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Params",
      requestType = terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest.class,
      responseType = terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest, terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;
    if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
          QueryGrpc.getParamsMethod = getParamsMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest, terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Params"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("Params"))
              .build();
        }
      }
    }
    return getParamsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static QueryStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<QueryStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<QueryStub>() {
        @java.lang.Override
        public QueryStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new QueryStub(channel, callOptions);
        }
      };
    return QueryStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static QueryBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<QueryBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<QueryBlockingStub>() {
        @java.lang.Override
        public QueryBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new QueryBlockingStub(channel, callOptions);
        }
      };
    return QueryBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static QueryFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<QueryFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<QueryFutureStub>() {
        @java.lang.Override
        public QueryFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new QueryFutureStub(channel, callOptions);
        }
      };
    return QueryFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Query defines the gRPC querier service.
   * </pre>
   */
  public static abstract class QueryImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * ExchangeRate returns exchange rate of a denom
     * </pre>
     */
    public void exchangeRate(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getExchangeRateMethod(), responseObserver);
    }

    /**
     * <pre>
     * ExchangeRates returns exchange rates of all denoms
     * </pre>
     */
    public void exchangeRates(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getExchangeRatesMethod(), responseObserver);
    }

    /**
     * <pre>
     * TobinTax returns tobin tax of a denom
     * </pre>
     */
    public void tobinTax(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTobinTaxMethod(), responseObserver);
    }

    /**
     * <pre>
     * TobinTaxes returns tobin taxes of all denoms
     * </pre>
     */
    public void tobinTaxes(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTobinTaxesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Actives returns all active denoms
     * </pre>
     */
    public void actives(terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getActivesMethod(), responseObserver);
    }

    /**
     * <pre>
     * VoteTargets returns all vote target denoms
     * </pre>
     */
    public void voteTargets(terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getVoteTargetsMethod(), responseObserver);
    }

    /**
     * <pre>
     * FeederDelegation returns feeder delegation of a validator
     * </pre>
     */
    public void feederDelegation(terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeederDelegationMethod(), responseObserver);
    }

    /**
     * <pre>
     * MissCounter returns oracle miss counter of a validator
     * </pre>
     */
    public void missCounter(terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMissCounterMethod(), responseObserver);
    }

    /**
     * <pre>
     * AggregatePrevote returns an aggregate prevote of a validator
     * </pre>
     */
    public void aggregatePrevote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregatePrevoteMethod(), responseObserver);
    }

    /**
     * <pre>
     * AggregatePrevotes returns aggregate prevotes of all validators
     * </pre>
     */
    public void aggregatePrevotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregatePrevotesMethod(), responseObserver);
    }

    /**
     * <pre>
     * AggregateVote returns an aggregate vote of a validator
     * </pre>
     */
    public void aggregateVote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregateVoteMethod(), responseObserver);
    }

    /**
     * <pre>
     * AggregateVotes returns aggregate votes of all validators
     * </pre>
     */
    public void aggregateVotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregateVotesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getParamsMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getExchangeRateMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse>(
                  this, METHODID_EXCHANGE_RATE)))
          .addMethod(
            getExchangeRatesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse>(
                  this, METHODID_EXCHANGE_RATES)))
          .addMethod(
            getTobinTaxMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse>(
                  this, METHODID_TOBIN_TAX)))
          .addMethod(
            getTobinTaxesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse>(
                  this, METHODID_TOBIN_TAXES)))
          .addMethod(
            getActivesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse>(
                  this, METHODID_ACTIVES)))
          .addMethod(
            getVoteTargetsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse>(
                  this, METHODID_VOTE_TARGETS)))
          .addMethod(
            getFeederDelegationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse>(
                  this, METHODID_FEEDER_DELEGATION)))
          .addMethod(
            getMissCounterMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse>(
                  this, METHODID_MISS_COUNTER)))
          .addMethod(
            getAggregatePrevoteMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse>(
                  this, METHODID_AGGREGATE_PREVOTE)))
          .addMethod(
            getAggregatePrevotesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse>(
                  this, METHODID_AGGREGATE_PREVOTES)))
          .addMethod(
            getAggregateVoteMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse>(
                  this, METHODID_AGGREGATE_VOTE)))
          .addMethod(
            getAggregateVotesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse>(
                  this, METHODID_AGGREGATE_VOTES)))
          .addMethod(
            getParamsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest,
                terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse>(
                  this, METHODID_PARAMS)))
          .build();
    }
  }

  /**
   * <pre>
   * Query defines the gRPC querier service.
   * </pre>
   */
  public static final class QueryStub extends io.grpc.stub.AbstractAsyncStub<QueryStub> {
    private QueryStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected QueryStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new QueryStub(channel, callOptions);
    }

    /**
     * <pre>
     * ExchangeRate returns exchange rate of a denom
     * </pre>
     */
    public void exchangeRate(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getExchangeRateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ExchangeRates returns exchange rates of all denoms
     * </pre>
     */
    public void exchangeRates(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getExchangeRatesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TobinTax returns tobin tax of a denom
     * </pre>
     */
    public void tobinTax(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTobinTaxMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TobinTaxes returns tobin taxes of all denoms
     * </pre>
     */
    public void tobinTaxes(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTobinTaxesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Actives returns all active denoms
     * </pre>
     */
    public void actives(terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getActivesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * VoteTargets returns all vote target denoms
     * </pre>
     */
    public void voteTargets(terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getVoteTargetsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * FeederDelegation returns feeder delegation of a validator
     * </pre>
     */
    public void feederDelegation(terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeederDelegationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * MissCounter returns oracle miss counter of a validator
     * </pre>
     */
    public void missCounter(terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMissCounterMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AggregatePrevote returns an aggregate prevote of a validator
     * </pre>
     */
    public void aggregatePrevote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregatePrevoteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AggregatePrevotes returns aggregate prevotes of all validators
     * </pre>
     */
    public void aggregatePrevotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregatePrevotesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AggregateVote returns an aggregate vote of a validator
     * </pre>
     */
    public void aggregateVote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregateVoteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AggregateVotes returns aggregate votes of all validators
     * </pre>
     */
    public void aggregateVotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregateVotesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getParamsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Query defines the gRPC querier service.
   * </pre>
   */
  public static final class QueryBlockingStub extends io.grpc.stub.AbstractBlockingStub<QueryBlockingStub> {
    private QueryBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected QueryBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new QueryBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * ExchangeRate returns exchange rate of a denom
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse exchangeRate(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getExchangeRateMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ExchangeRates returns exchange rates of all denoms
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse exchangeRates(terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getExchangeRatesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TobinTax returns tobin tax of a denom
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse tobinTax(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTobinTaxMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TobinTaxes returns tobin taxes of all denoms
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse tobinTaxes(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTobinTaxesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Actives returns all active denoms
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse actives(terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getActivesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * VoteTargets returns all vote target denoms
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse voteTargets(terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getVoteTargetsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * FeederDelegation returns feeder delegation of a validator
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse feederDelegation(terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeederDelegationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * MissCounter returns oracle miss counter of a validator
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse missCounter(terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMissCounterMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AggregatePrevote returns an aggregate prevote of a validator
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse aggregatePrevote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregatePrevoteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AggregatePrevotes returns aggregate prevotes of all validators
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse aggregatePrevotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregatePrevotesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AggregateVote returns an aggregate vote of a validator
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse aggregateVote(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregateVoteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AggregateVotes returns aggregate votes of all validators
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse aggregateVotes(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregateVotesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse params(terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getParamsMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Query defines the gRPC querier service.
   * </pre>
   */
  public static final class QueryFutureStub extends io.grpc.stub.AbstractFutureStub<QueryFutureStub> {
    private QueryFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected QueryFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new QueryFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * ExchangeRate returns exchange rate of a denom
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse> exchangeRate(
        terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getExchangeRateMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ExchangeRates returns exchange rates of all denoms
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse> exchangeRates(
        terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getExchangeRatesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TobinTax returns tobin tax of a denom
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse> tobinTax(
        terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTobinTaxMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TobinTaxes returns tobin taxes of all denoms
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse> tobinTaxes(
        terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTobinTaxesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Actives returns all active denoms
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse> actives(
        terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getActivesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * VoteTargets returns all vote target denoms
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse> voteTargets(
        terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getVoteTargetsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * FeederDelegation returns feeder delegation of a validator
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse> feederDelegation(
        terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeederDelegationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * MissCounter returns oracle miss counter of a validator
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse> missCounter(
        terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMissCounterMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AggregatePrevote returns an aggregate prevote of a validator
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse> aggregatePrevote(
        terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregatePrevoteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AggregatePrevotes returns aggregate prevotes of all validators
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse> aggregatePrevotes(
        terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregatePrevotesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AggregateVote returns an aggregate vote of a validator
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse> aggregateVote(
        terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregateVoteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AggregateVotes returns aggregate votes of all validators
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse> aggregateVotes(
        terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregateVotesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse> params(
        terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getParamsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_EXCHANGE_RATE = 0;
  private static final int METHODID_EXCHANGE_RATES = 1;
  private static final int METHODID_TOBIN_TAX = 2;
  private static final int METHODID_TOBIN_TAXES = 3;
  private static final int METHODID_ACTIVES = 4;
  private static final int METHODID_VOTE_TARGETS = 5;
  private static final int METHODID_FEEDER_DELEGATION = 6;
  private static final int METHODID_MISS_COUNTER = 7;
  private static final int METHODID_AGGREGATE_PREVOTE = 8;
  private static final int METHODID_AGGREGATE_PREVOTES = 9;
  private static final int METHODID_AGGREGATE_VOTE = 10;
  private static final int METHODID_AGGREGATE_VOTES = 11;
  private static final int METHODID_PARAMS = 12;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final QueryImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(QueryImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_EXCHANGE_RATE:
          serviceImpl.exchangeRate((terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRateResponse>) responseObserver);
          break;
        case METHODID_EXCHANGE_RATES:
          serviceImpl.exchangeRates((terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryExchangeRatesResponse>) responseObserver);
          break;
        case METHODID_TOBIN_TAX:
          serviceImpl.tobinTax((terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxResponse>) responseObserver);
          break;
        case METHODID_TOBIN_TAXES:
          serviceImpl.tobinTaxes((terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxesResponse>) responseObserver);
          break;
        case METHODID_ACTIVES:
          serviceImpl.actives((terra.oracle.v1beta1.QueryOuterClass.QueryActivesRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryActivesResponse>) responseObserver);
          break;
        case METHODID_VOTE_TARGETS:
          serviceImpl.voteTargets((terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryVoteTargetsResponse>) responseObserver);
          break;
        case METHODID_FEEDER_DELEGATION:
          serviceImpl.feederDelegation((terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryFeederDelegationResponse>) responseObserver);
          break;
        case METHODID_MISS_COUNTER:
          serviceImpl.missCounter((terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryMissCounterResponse>) responseObserver);
          break;
        case METHODID_AGGREGATE_PREVOTE:
          serviceImpl.aggregatePrevote((terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevoteResponse>) responseObserver);
          break;
        case METHODID_AGGREGATE_PREVOTES:
          serviceImpl.aggregatePrevotes((terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesResponse>) responseObserver);
          break;
        case METHODID_AGGREGATE_VOTE:
          serviceImpl.aggregateVote((terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVoteResponse>) responseObserver);
          break;
        case METHODID_AGGREGATE_VOTES:
          serviceImpl.aggregateVotes((terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesResponse>) responseObserver);
          break;
        case METHODID_PARAMS:
          serviceImpl.params((terra.oracle.v1beta1.QueryOuterClass.QueryParamsRequest) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.QueryOuterClass.QueryParamsResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class QueryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    QueryBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return terra.oracle.v1beta1.QueryOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Query");
    }
  }

  private static final class QueryFileDescriptorSupplier
      extends QueryBaseDescriptorSupplier {
    QueryFileDescriptorSupplier() {}
  }

  private static final class QueryMethodDescriptorSupplier
      extends QueryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    QueryMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (QueryGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new QueryFileDescriptorSupplier())
              .addMethod(getExchangeRateMethod())
              .addMethod(getExchangeRatesMethod())
              .addMethod(getTobinTaxMethod())
              .addMethod(getTobinTaxesMethod())
              .addMethod(getActivesMethod())
              .addMethod(getVoteTargetsMethod())
              .addMethod(getFeederDelegationMethod())
              .addMethod(getMissCounterMethod())
              .addMethod(getAggregatePrevoteMethod())
              .addMethod(getAggregatePrevotesMethod())
              .addMethod(getAggregateVoteMethod())
              .addMethod(getAggregateVotesMethod())
              .addMethod(getParamsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
