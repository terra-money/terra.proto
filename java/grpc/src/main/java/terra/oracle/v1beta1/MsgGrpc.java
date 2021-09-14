package terra.oracle.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Msg defines the oracle Msg service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/oracle/v1beta1/tx.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MsgGrpc {

  private MsgGrpc() {}

  public static final String SERVICE_NAME = "terra.oracle.v1beta1.Msg";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote,
      terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> getAggregateExchangeRatePrevoteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregateExchangeRatePrevote",
      requestType = terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote.class,
      responseType = terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote,
      terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> getAggregateExchangeRatePrevoteMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote, terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> getAggregateExchangeRatePrevoteMethod;
    if ((getAggregateExchangeRatePrevoteMethod = MsgGrpc.getAggregateExchangeRatePrevoteMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getAggregateExchangeRatePrevoteMethod = MsgGrpc.getAggregateExchangeRatePrevoteMethod) == null) {
          MsgGrpc.getAggregateExchangeRatePrevoteMethod = getAggregateExchangeRatePrevoteMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote, terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregateExchangeRatePrevote"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("AggregateExchangeRatePrevote"))
              .build();
        }
      }
    }
    return getAggregateExchangeRatePrevoteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote,
      terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> getAggregateExchangeRateVoteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AggregateExchangeRateVote",
      requestType = terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote.class,
      responseType = terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote,
      terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> getAggregateExchangeRateVoteMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote, terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> getAggregateExchangeRateVoteMethod;
    if ((getAggregateExchangeRateVoteMethod = MsgGrpc.getAggregateExchangeRateVoteMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getAggregateExchangeRateVoteMethod = MsgGrpc.getAggregateExchangeRateVoteMethod) == null) {
          MsgGrpc.getAggregateExchangeRateVoteMethod = getAggregateExchangeRateVoteMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote, terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AggregateExchangeRateVote"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("AggregateExchangeRateVote"))
              .build();
        }
      }
    }
    return getAggregateExchangeRateVoteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent,
      terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> getDelegateFeedConsentMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DelegateFeedConsent",
      requestType = terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent.class,
      responseType = terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent,
      terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> getDelegateFeedConsentMethod() {
    io.grpc.MethodDescriptor<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent, terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> getDelegateFeedConsentMethod;
    if ((getDelegateFeedConsentMethod = MsgGrpc.getDelegateFeedConsentMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getDelegateFeedConsentMethod = MsgGrpc.getDelegateFeedConsentMethod) == null) {
          MsgGrpc.getDelegateFeedConsentMethod = getDelegateFeedConsentMethod =
              io.grpc.MethodDescriptor.<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent, terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DelegateFeedConsent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("DelegateFeedConsent"))
              .build();
        }
      }
    }
    return getDelegateFeedConsentMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MsgStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MsgStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MsgStub>() {
        @java.lang.Override
        public MsgStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MsgStub(channel, callOptions);
        }
      };
    return MsgStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MsgBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MsgBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MsgBlockingStub>() {
        @java.lang.Override
        public MsgBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MsgBlockingStub(channel, callOptions);
        }
      };
    return MsgBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MsgFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MsgFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MsgFutureStub>() {
        @java.lang.Override
        public MsgFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MsgFutureStub(channel, callOptions);
        }
      };
    return MsgFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Msg defines the oracle Msg service.
   * </pre>
   */
  public static abstract class MsgImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * AggregateExchangeRatePrevote defines a method for submitting
     * aggregate exchange rate prevote
     * </pre>
     */
    public void aggregateExchangeRatePrevote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregateExchangeRatePrevoteMethod(), responseObserver);
    }

    /**
     * <pre>
     * AggregateExchangeRateVote defines a method for submitting
     * aggregate exchange rate vote
     * </pre>
     */
    public void aggregateExchangeRateVote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAggregateExchangeRateVoteMethod(), responseObserver);
    }

    /**
     * <pre>
     * DelegateFeedConsent defines a method for setting the feeder delegation
     * </pre>
     */
    public void delegateFeedConsent(terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDelegateFeedConsentMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAggregateExchangeRatePrevoteMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote,
                terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse>(
                  this, METHODID_AGGREGATE_EXCHANGE_RATE_PREVOTE)))
          .addMethod(
            getAggregateExchangeRateVoteMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote,
                terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse>(
                  this, METHODID_AGGREGATE_EXCHANGE_RATE_VOTE)))
          .addMethod(
            getDelegateFeedConsentMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent,
                terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse>(
                  this, METHODID_DELEGATE_FEED_CONSENT)))
          .build();
    }
  }

  /**
   * <pre>
   * Msg defines the oracle Msg service.
   * </pre>
   */
  public static final class MsgStub extends io.grpc.stub.AbstractAsyncStub<MsgStub> {
    private MsgStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MsgStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MsgStub(channel, callOptions);
    }

    /**
     * <pre>
     * AggregateExchangeRatePrevote defines a method for submitting
     * aggregate exchange rate prevote
     * </pre>
     */
    public void aggregateExchangeRatePrevote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregateExchangeRatePrevoteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AggregateExchangeRateVote defines a method for submitting
     * aggregate exchange rate vote
     * </pre>
     */
    public void aggregateExchangeRateVote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAggregateExchangeRateVoteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DelegateFeedConsent defines a method for setting the feeder delegation
     * </pre>
     */
    public void delegateFeedConsent(terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent request,
        io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDelegateFeedConsentMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Msg defines the oracle Msg service.
   * </pre>
   */
  public static final class MsgBlockingStub extends io.grpc.stub.AbstractBlockingStub<MsgBlockingStub> {
    private MsgBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MsgBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MsgBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * AggregateExchangeRatePrevote defines a method for submitting
     * aggregate exchange rate prevote
     * </pre>
     */
    public terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse aggregateExchangeRatePrevote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregateExchangeRatePrevoteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AggregateExchangeRateVote defines a method for submitting
     * aggregate exchange rate vote
     * </pre>
     */
    public terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse aggregateExchangeRateVote(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAggregateExchangeRateVoteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * DelegateFeedConsent defines a method for setting the feeder delegation
     * </pre>
     */
    public terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse delegateFeedConsent(terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDelegateFeedConsentMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Msg defines the oracle Msg service.
   * </pre>
   */
  public static final class MsgFutureStub extends io.grpc.stub.AbstractFutureStub<MsgFutureStub> {
    private MsgFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MsgFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MsgFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * AggregateExchangeRatePrevote defines a method for submitting
     * aggregate exchange rate prevote
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse> aggregateExchangeRatePrevote(
        terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregateExchangeRatePrevoteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AggregateExchangeRateVote defines a method for submitting
     * aggregate exchange rate vote
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse> aggregateExchangeRateVote(
        terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAggregateExchangeRateVoteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * DelegateFeedConsent defines a method for setting the feeder delegation
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse> delegateFeedConsent(
        terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDelegateFeedConsentMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_AGGREGATE_EXCHANGE_RATE_PREVOTE = 0;
  private static final int METHODID_AGGREGATE_EXCHANGE_RATE_VOTE = 1;
  private static final int METHODID_DELEGATE_FEED_CONSENT = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final MsgImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(MsgImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_AGGREGATE_EXCHANGE_RATE_PREVOTE:
          serviceImpl.aggregateExchangeRatePrevote((terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevote) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse>) responseObserver);
          break;
        case METHODID_AGGREGATE_EXCHANGE_RATE_VOTE:
          serviceImpl.aggregateExchangeRateVote((terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVote) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgAggregateExchangeRateVoteResponse>) responseObserver);
          break;
        case METHODID_DELEGATE_FEED_CONSENT:
          serviceImpl.delegateFeedConsent((terra.oracle.v1beta1.Tx.MsgDelegateFeedConsent) request,
              (io.grpc.stub.StreamObserver<terra.oracle.v1beta1.Tx.MsgDelegateFeedConsentResponse>) responseObserver);
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

  private static abstract class MsgBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MsgBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return terra.oracle.v1beta1.Tx.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Msg");
    }
  }

  private static final class MsgFileDescriptorSupplier
      extends MsgBaseDescriptorSupplier {
    MsgFileDescriptorSupplier() {}
  }

  private static final class MsgMethodDescriptorSupplier
      extends MsgBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    MsgMethodDescriptorSupplier(String methodName) {
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
      synchronized (MsgGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MsgFileDescriptorSupplier())
              .addMethod(getAggregateExchangeRatePrevoteMethod())
              .addMethod(getAggregateExchangeRateVoteMethod())
              .addMethod(getDelegateFeedConsentMethod())
              .build();
        }
      }
    }
    return result;
  }
}
