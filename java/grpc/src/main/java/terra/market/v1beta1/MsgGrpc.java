package terra.market.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Msg defines the market Msg service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/market/v1beta1/tx.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MsgGrpc {

  private MsgGrpc() {}

  public static final String SERVICE_NAME = "terra.market.v1beta1.Msg";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwap,
      terra.market.v1beta1.Tx.MsgSwapResponse> getSwapMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Swap",
      requestType = terra.market.v1beta1.Tx.MsgSwap.class,
      responseType = terra.market.v1beta1.Tx.MsgSwapResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwap,
      terra.market.v1beta1.Tx.MsgSwapResponse> getSwapMethod() {
    io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwap, terra.market.v1beta1.Tx.MsgSwapResponse> getSwapMethod;
    if ((getSwapMethod = MsgGrpc.getSwapMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getSwapMethod = MsgGrpc.getSwapMethod) == null) {
          MsgGrpc.getSwapMethod = getSwapMethod =
              io.grpc.MethodDescriptor.<terra.market.v1beta1.Tx.MsgSwap, terra.market.v1beta1.Tx.MsgSwapResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Swap"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.market.v1beta1.Tx.MsgSwap.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.market.v1beta1.Tx.MsgSwapResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("Swap"))
              .build();
        }
      }
    }
    return getSwapMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwapSend,
      terra.market.v1beta1.Tx.MsgSwapSendResponse> getSwapSendMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SwapSend",
      requestType = terra.market.v1beta1.Tx.MsgSwapSend.class,
      responseType = terra.market.v1beta1.Tx.MsgSwapSendResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwapSend,
      terra.market.v1beta1.Tx.MsgSwapSendResponse> getSwapSendMethod() {
    io.grpc.MethodDescriptor<terra.market.v1beta1.Tx.MsgSwapSend, terra.market.v1beta1.Tx.MsgSwapSendResponse> getSwapSendMethod;
    if ((getSwapSendMethod = MsgGrpc.getSwapSendMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getSwapSendMethod = MsgGrpc.getSwapSendMethod) == null) {
          MsgGrpc.getSwapSendMethod = getSwapSendMethod =
              io.grpc.MethodDescriptor.<terra.market.v1beta1.Tx.MsgSwapSend, terra.market.v1beta1.Tx.MsgSwapSendResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SwapSend"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.market.v1beta1.Tx.MsgSwapSend.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.market.v1beta1.Tx.MsgSwapSendResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("SwapSend"))
              .build();
        }
      }
    }
    return getSwapSendMethod;
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
   * Msg defines the market Msg service.
   * </pre>
   */
  public static abstract class MsgImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Swap defines a method for swapping coin from one denom to another
     * denom.
     * </pre>
     */
    public void swap(terra.market.v1beta1.Tx.MsgSwap request,
        io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSwapMethod(), responseObserver);
    }

    /**
     * <pre>
     * SwapSend defines a method for swapping and sending coin from a account to other
     * account.
     * </pre>
     */
    public void swapSend(terra.market.v1beta1.Tx.MsgSwapSend request,
        io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapSendResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSwapSendMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSwapMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.market.v1beta1.Tx.MsgSwap,
                terra.market.v1beta1.Tx.MsgSwapResponse>(
                  this, METHODID_SWAP)))
          .addMethod(
            getSwapSendMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.market.v1beta1.Tx.MsgSwapSend,
                terra.market.v1beta1.Tx.MsgSwapSendResponse>(
                  this, METHODID_SWAP_SEND)))
          .build();
    }
  }

  /**
   * <pre>
   * Msg defines the market Msg service.
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
     * Swap defines a method for swapping coin from one denom to another
     * denom.
     * </pre>
     */
    public void swap(terra.market.v1beta1.Tx.MsgSwap request,
        io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSwapMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * SwapSend defines a method for swapping and sending coin from a account to other
     * account.
     * </pre>
     */
    public void swapSend(terra.market.v1beta1.Tx.MsgSwapSend request,
        io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapSendResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSwapSendMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Msg defines the market Msg service.
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
     * Swap defines a method for swapping coin from one denom to another
     * denom.
     * </pre>
     */
    public terra.market.v1beta1.Tx.MsgSwapResponse swap(terra.market.v1beta1.Tx.MsgSwap request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSwapMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * SwapSend defines a method for swapping and sending coin from a account to other
     * account.
     * </pre>
     */
    public terra.market.v1beta1.Tx.MsgSwapSendResponse swapSend(terra.market.v1beta1.Tx.MsgSwapSend request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSwapSendMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Msg defines the market Msg service.
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
     * Swap defines a method for swapping coin from one denom to another
     * denom.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.market.v1beta1.Tx.MsgSwapResponse> swap(
        terra.market.v1beta1.Tx.MsgSwap request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSwapMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * SwapSend defines a method for swapping and sending coin from a account to other
     * account.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.market.v1beta1.Tx.MsgSwapSendResponse> swapSend(
        terra.market.v1beta1.Tx.MsgSwapSend request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSwapSendMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SWAP = 0;
  private static final int METHODID_SWAP_SEND = 1;

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
        case METHODID_SWAP:
          serviceImpl.swap((terra.market.v1beta1.Tx.MsgSwap) request,
              (io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapResponse>) responseObserver);
          break;
        case METHODID_SWAP_SEND:
          serviceImpl.swapSend((terra.market.v1beta1.Tx.MsgSwapSend) request,
              (io.grpc.stub.StreamObserver<terra.market.v1beta1.Tx.MsgSwapSendResponse>) responseObserver);
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
      return terra.market.v1beta1.Tx.getDescriptor();
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
              .addMethod(getSwapMethod())
              .addMethod(getSwapSendMethod())
              .build();
        }
      }
    }
    return result;
  }
}
