package terra.treasury.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Query defines the gRPC querier service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/treasury/v1beta1/query.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class QueryGrpc {

  private QueryGrpc() {}

  public static final String SERVICE_NAME = "terra.treasury.v1beta1.Query";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> getTaxRateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TaxRate",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> getTaxRateMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> getTaxRateMethod;
    if ((getTaxRateMethod = QueryGrpc.getTaxRateMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTaxRateMethod = QueryGrpc.getTaxRateMethod) == null) {
          QueryGrpc.getTaxRateMethod = getTaxRateMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TaxRate"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TaxRate"))
              .build();
        }
      }
    }
    return getTaxRateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> getTaxCapMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TaxCap",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> getTaxCapMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> getTaxCapMethod;
    if ((getTaxCapMethod = QueryGrpc.getTaxCapMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTaxCapMethod = QueryGrpc.getTaxCapMethod) == null) {
          QueryGrpc.getTaxCapMethod = getTaxCapMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TaxCap"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TaxCap"))
              .build();
        }
      }
    }
    return getTaxCapMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> getTaxCapsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TaxCaps",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> getTaxCapsMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> getTaxCapsMethod;
    if ((getTaxCapsMethod = QueryGrpc.getTaxCapsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTaxCapsMethod = QueryGrpc.getTaxCapsMethod) == null) {
          QueryGrpc.getTaxCapsMethod = getTaxCapsMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TaxCaps"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TaxCaps"))
              .build();
        }
      }
    }
    return getTaxCapsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> getRewardWeightMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RewardWeight",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> getRewardWeightMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest, terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> getRewardWeightMethod;
    if ((getRewardWeightMethod = QueryGrpc.getRewardWeightMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getRewardWeightMethod = QueryGrpc.getRewardWeightMethod) == null) {
          QueryGrpc.getRewardWeightMethod = getRewardWeightMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest, terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RewardWeight"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("RewardWeight"))
              .build();
        }
      }
    }
    return getRewardWeightMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> getSeigniorageProceedsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SeigniorageProceeds",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> getSeigniorageProceedsMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest, terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> getSeigniorageProceedsMethod;
    if ((getSeigniorageProceedsMethod = QueryGrpc.getSeigniorageProceedsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getSeigniorageProceedsMethod = QueryGrpc.getSeigniorageProceedsMethod) == null) {
          QueryGrpc.getSeigniorageProceedsMethod = getSeigniorageProceedsMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest, terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SeigniorageProceeds"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("SeigniorageProceeds"))
              .build();
        }
      }
    }
    return getSeigniorageProceedsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> getTaxProceedsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TaxProceeds",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> getTaxProceedsMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> getTaxProceedsMethod;
    if ((getTaxProceedsMethod = QueryGrpc.getTaxProceedsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTaxProceedsMethod = QueryGrpc.getTaxProceedsMethod) == null) {
          QueryGrpc.getTaxProceedsMethod = getTaxProceedsMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TaxProceeds"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TaxProceeds"))
              .build();
        }
      }
    }
    return getTaxProceedsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> getIndicatorsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Indicators",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> getIndicatorsMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> getIndicatorsMethod;
    if ((getIndicatorsMethod = QueryGrpc.getIndicatorsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getIndicatorsMethod = QueryGrpc.getIndicatorsMethod) == null) {
          QueryGrpc.getIndicatorsMethod = getIndicatorsMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Indicators"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("Indicators"))
              .build();
        }
      }
    }
    return getIndicatorsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Params",
      requestType = terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest.class,
      responseType = terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod() {
    io.grpc.MethodDescriptor<terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;
    if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
          QueryGrpc.getParamsMethod = getParamsMethod =
              io.grpc.MethodDescriptor.<terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest, terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Params"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse.getDefaultInstance()))
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
     * TaxRate return the current tax rate
     * </pre>
     */
    public void taxRate(terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTaxRateMethod(), responseObserver);
    }

    /**
     * <pre>
     * TaxCap returns the tax cap of a denom
     * </pre>
     */
    public void taxCap(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTaxCapMethod(), responseObserver);
    }

    /**
     * <pre>
     * TaxCaps returns the all tax caps
     * </pre>
     */
    public void taxCaps(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTaxCapsMethod(), responseObserver);
    }

    /**
     * <pre>
     * RewardWeight return the current reward weight
     * </pre>
     */
    public void rewardWeight(terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRewardWeightMethod(), responseObserver);
    }

    /**
     * <pre>
     * SeigniorageProceeds return the current seigniorage proceeds
     * </pre>
     */
    public void seigniorageProceeds(terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSeigniorageProceedsMethod(), responseObserver);
    }

    /**
     * <pre>
     * TaxProceeds return the current tax proceeds
     * </pre>
     */
    public void taxProceeds(terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTaxProceedsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Indicators return the current trl informations
     * </pre>
     */
    public void indicators(terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIndicatorsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getParamsMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getTaxRateMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse>(
                  this, METHODID_TAX_RATE)))
          .addMethod(
            getTaxCapMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse>(
                  this, METHODID_TAX_CAP)))
          .addMethod(
            getTaxCapsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse>(
                  this, METHODID_TAX_CAPS)))
          .addMethod(
            getRewardWeightMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse>(
                  this, METHODID_REWARD_WEIGHT)))
          .addMethod(
            getSeigniorageProceedsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest,
                terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse>(
                  this, METHODID_SEIGNIORAGE_PROCEEDS)))
          .addMethod(
            getTaxProceedsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse>(
                  this, METHODID_TAX_PROCEEDS)))
          .addMethod(
            getIndicatorsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse>(
                  this, METHODID_INDICATORS)))
          .addMethod(
            getParamsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest,
                terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse>(
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
     * TaxRate return the current tax rate
     * </pre>
     */
    public void taxRate(terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTaxRateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TaxCap returns the tax cap of a denom
     * </pre>
     */
    public void taxCap(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTaxCapMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TaxCaps returns the all tax caps
     * </pre>
     */
    public void taxCaps(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTaxCapsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * RewardWeight return the current reward weight
     * </pre>
     */
    public void rewardWeight(terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRewardWeightMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * SeigniorageProceeds return the current seigniorage proceeds
     * </pre>
     */
    public void seigniorageProceeds(terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSeigniorageProceedsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TaxProceeds return the current tax proceeds
     * </pre>
     */
    public void taxProceeds(terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTaxProceedsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Indicators return the current trl informations
     * </pre>
     */
    public void indicators(terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIndicatorsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
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
     * TaxRate return the current tax rate
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse taxRate(terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTaxRateMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TaxCap returns the tax cap of a denom
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse taxCap(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTaxCapMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TaxCaps returns the all tax caps
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse taxCaps(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTaxCapsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * RewardWeight return the current reward weight
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse rewardWeight(terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRewardWeightMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * SeigniorageProceeds return the current seigniorage proceeds
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse seigniorageProceeds(terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSeigniorageProceedsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TaxProceeds return the current tax proceeds
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse taxProceeds(terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTaxProceedsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Indicators return the current trl informations
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse indicators(terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIndicatorsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse params(terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest request) {
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
     * TaxRate return the current tax rate
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse> taxRate(
        terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTaxRateMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TaxCap returns the tax cap of a denom
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse> taxCap(
        terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTaxCapMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TaxCaps returns the all tax caps
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse> taxCaps(
        terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTaxCapsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * RewardWeight return the current reward weight
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse> rewardWeight(
        terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRewardWeightMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * SeigniorageProceeds return the current seigniorage proceeds
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse> seigniorageProceeds(
        terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSeigniorageProceedsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TaxProceeds return the current tax proceeds
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse> taxProceeds(
        terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTaxProceedsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Indicators return the current trl informations
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse> indicators(
        terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIndicatorsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse> params(
        terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getParamsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_TAX_RATE = 0;
  private static final int METHODID_TAX_CAP = 1;
  private static final int METHODID_TAX_CAPS = 2;
  private static final int METHODID_REWARD_WEIGHT = 3;
  private static final int METHODID_SEIGNIORAGE_PROCEEDS = 4;
  private static final int METHODID_TAX_PROCEEDS = 5;
  private static final int METHODID_INDICATORS = 6;
  private static final int METHODID_PARAMS = 7;

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
        case METHODID_TAX_RATE:
          serviceImpl.taxRate((terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateResponse>) responseObserver);
          break;
        case METHODID_TAX_CAP:
          serviceImpl.taxCap((terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapResponse>) responseObserver);
          break;
        case METHODID_TAX_CAPS:
          serviceImpl.taxCaps((terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapsResponse>) responseObserver);
          break;
        case METHODID_REWARD_WEIGHT:
          serviceImpl.rewardWeight((terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightResponse>) responseObserver);
          break;
        case METHODID_SEIGNIORAGE_PROCEEDS:
          serviceImpl.seigniorageProceeds((terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse>) responseObserver);
          break;
        case METHODID_TAX_PROCEEDS:
          serviceImpl.taxProceeds((terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryTaxProceedsResponse>) responseObserver);
          break;
        case METHODID_INDICATORS:
          serviceImpl.indicators((terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryIndicatorsResponse>) responseObserver);
          break;
        case METHODID_PARAMS:
          serviceImpl.params((terra.treasury.v1beta1.QueryOuterClass.QueryParamsRequest) request,
              (io.grpc.stub.StreamObserver<terra.treasury.v1beta1.QueryOuterClass.QueryParamsResponse>) responseObserver);
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
      return terra.treasury.v1beta1.QueryOuterClass.getDescriptor();
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
              .addMethod(getTaxRateMethod())
              .addMethod(getTaxCapMethod())
              .addMethod(getTaxCapsMethod())
              .addMethod(getRewardWeightMethod())
              .addMethod(getSeigniorageProceedsMethod())
              .addMethod(getTaxProceedsMethod())
              .addMethod(getIndicatorsMethod())
              .addMethod(getParamsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
