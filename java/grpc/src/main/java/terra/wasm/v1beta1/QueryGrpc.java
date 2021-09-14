package terra.wasm.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Query defines the gRPC querier service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/wasm/v1beta1/query.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class QueryGrpc {

  private QueryGrpc() {}

  public static final String SERVICE_NAME = "terra.wasm.v1beta1.Query";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> getCodeInfoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CodeInfo",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> getCodeInfoMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest, terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> getCodeInfoMethod;
    if ((getCodeInfoMethod = QueryGrpc.getCodeInfoMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getCodeInfoMethod = QueryGrpc.getCodeInfoMethod) == null) {
          QueryGrpc.getCodeInfoMethod = getCodeInfoMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest, terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CodeInfo"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("CodeInfo"))
              .build();
        }
      }
    }
    return getCodeInfoMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> getByteCodeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ByteCode",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> getByteCodeMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest, terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> getByteCodeMethod;
    if ((getByteCodeMethod = QueryGrpc.getByteCodeMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getByteCodeMethod = QueryGrpc.getByteCodeMethod) == null) {
          QueryGrpc.getByteCodeMethod = getByteCodeMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest, terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ByteCode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("ByteCode"))
              .build();
        }
      }
    }
    return getByteCodeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> getContractInfoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ContractInfo",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> getContractInfoMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest, terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> getContractInfoMethod;
    if ((getContractInfoMethod = QueryGrpc.getContractInfoMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getContractInfoMethod = QueryGrpc.getContractInfoMethod) == null) {
          QueryGrpc.getContractInfoMethod = getContractInfoMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest, terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ContractInfo"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("ContractInfo"))
              .build();
        }
      }
    }
    return getContractInfoMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> getContractStoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ContractStore",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> getContractStoreMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest, terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> getContractStoreMethod;
    if ((getContractStoreMethod = QueryGrpc.getContractStoreMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getContractStoreMethod = QueryGrpc.getContractStoreMethod) == null) {
          QueryGrpc.getContractStoreMethod = getContractStoreMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest, terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ContractStore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("ContractStore"))
              .build();
        }
      }
    }
    return getContractStoreMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> getRawStoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RawStore",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> getRawStoreMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest, terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> getRawStoreMethod;
    if ((getRawStoreMethod = QueryGrpc.getRawStoreMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getRawStoreMethod = QueryGrpc.getRawStoreMethod) == null) {
          QueryGrpc.getRawStoreMethod = getRawStoreMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest, terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RawStore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("RawStore"))
              .build();
        }
      }
    }
    return getRawStoreMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Params",
      requestType = terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest.class,
      responseType = terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest,
      terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest, terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> getParamsMethod;
    if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getParamsMethod = QueryGrpc.getParamsMethod) == null) {
          QueryGrpc.getParamsMethod = getParamsMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest, terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Params"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse.getDefaultInstance()))
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
     * CodeInfo returns the stored code info
     * </pre>
     */
    public void codeInfo(terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCodeInfoMethod(), responseObserver);
    }

    /**
     * <pre>
     * ByteCode returns the stored byte code
     * </pre>
     */
    public void byteCode(terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getByteCodeMethod(), responseObserver);
    }

    /**
     * <pre>
     * ContractInfo returns the stored contract info
     * </pre>
     */
    public void contractInfo(terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getContractInfoMethod(), responseObserver);
    }

    /**
     * <pre>
     * ContractStore return smart query result from the contract
     * </pre>
     */
    public void contractStore(terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getContractStoreMethod(), responseObserver);
    }

    /**
     * <pre>
     * RawStore return single key from the raw store data of a contract
     * </pre>
     */
    public void rawStore(terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRawStoreMethod(), responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getParamsMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCodeInfoMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse>(
                  this, METHODID_CODE_INFO)))
          .addMethod(
            getByteCodeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse>(
                  this, METHODID_BYTE_CODE)))
          .addMethod(
            getContractInfoMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse>(
                  this, METHODID_CONTRACT_INFO)))
          .addMethod(
            getContractStoreMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse>(
                  this, METHODID_CONTRACT_STORE)))
          .addMethod(
            getRawStoreMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse>(
                  this, METHODID_RAW_STORE)))
          .addMethod(
            getParamsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest,
                terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse>(
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
     * CodeInfo returns the stored code info
     * </pre>
     */
    public void codeInfo(terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCodeInfoMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ByteCode returns the stored byte code
     * </pre>
     */
    public void byteCode(terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getByteCodeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ContractInfo returns the stored contract info
     * </pre>
     */
    public void contractInfo(terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getContractInfoMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ContractStore return smart query result from the contract
     * </pre>
     */
    public void contractStore(terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getContractStoreMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * RawStore return single key from the raw store data of a contract
     * </pre>
     */
    public void rawStore(terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRawStoreMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public void params(terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> responseObserver) {
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
     * CodeInfo returns the stored code info
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse codeInfo(terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCodeInfoMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ByteCode returns the stored byte code
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse byteCode(terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getByteCodeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ContractInfo returns the stored contract info
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse contractInfo(terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getContractInfoMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ContractStore return smart query result from the contract
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse contractStore(terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getContractStoreMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * RawStore return single key from the raw store data of a contract
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse rawStore(terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRawStoreMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse params(terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest request) {
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
     * CodeInfo returns the stored code info
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse> codeInfo(
        terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCodeInfoMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ByteCode returns the stored byte code
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse> byteCode(
        terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getByteCodeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ContractInfo returns the stored contract info
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse> contractInfo(
        terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getContractInfoMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ContractStore return smart query result from the contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse> contractStore(
        terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getContractStoreMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * RawStore return single key from the raw store data of a contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse> rawStore(
        terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRawStoreMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Params queries all parameters.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse> params(
        terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getParamsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CODE_INFO = 0;
  private static final int METHODID_BYTE_CODE = 1;
  private static final int METHODID_CONTRACT_INFO = 2;
  private static final int METHODID_CONTRACT_STORE = 3;
  private static final int METHODID_RAW_STORE = 4;
  private static final int METHODID_PARAMS = 5;

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
        case METHODID_CODE_INFO:
          serviceImpl.codeInfo((terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryCodeInfoResponse>) responseObserver);
          break;
        case METHODID_BYTE_CODE:
          serviceImpl.byteCode((terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryByteCodeResponse>) responseObserver);
          break;
        case METHODID_CONTRACT_INFO:
          serviceImpl.contractInfo((terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse>) responseObserver);
          break;
        case METHODID_CONTRACT_STORE:
          serviceImpl.contractStore((terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryContractStoreResponse>) responseObserver);
          break;
        case METHODID_RAW_STORE:
          serviceImpl.rawStore((terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryRawStoreResponse>) responseObserver);
          break;
        case METHODID_PARAMS:
          serviceImpl.params((terra.wasm.v1beta1.QueryOuterClass.QueryParamsRequest) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.QueryOuterClass.QueryParamsResponse>) responseObserver);
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
      return terra.wasm.v1beta1.QueryOuterClass.getDescriptor();
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
              .addMethod(getCodeInfoMethod())
              .addMethod(getByteCodeMethod())
              .addMethod(getContractInfoMethod())
              .addMethod(getContractStoreMethod())
              .addMethod(getRawStoreMethod())
              .addMethod(getParamsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
