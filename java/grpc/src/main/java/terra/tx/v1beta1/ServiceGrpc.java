package terra.tx.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Service defines a gRPC service for interacting with transactions.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/tx/v1beta1/service.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ServiceGrpc {

  private ServiceGrpc() {}

  public static final String SERVICE_NAME = "terra.tx.v1beta1.Service";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest,
      terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> getComputeTaxMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ComputeTax",
      requestType = terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest.class,
      responseType = terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest,
      terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> getComputeTaxMethod() {
    io.grpc.MethodDescriptor<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest, terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> getComputeTaxMethod;
    if ((getComputeTaxMethod = ServiceGrpc.getComputeTaxMethod) == null) {
      synchronized (ServiceGrpc.class) {
        if ((getComputeTaxMethod = ServiceGrpc.getComputeTaxMethod) == null) {
          ServiceGrpc.getComputeTaxMethod = getComputeTaxMethod =
              io.grpc.MethodDescriptor.<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest, terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ComputeTax"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ServiceMethodDescriptorSupplier("ComputeTax"))
              .build();
        }
      }
    }
    return getComputeTaxMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ServiceStub>() {
        @java.lang.Override
        public ServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ServiceStub(channel, callOptions);
        }
      };
    return ServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ServiceBlockingStub>() {
        @java.lang.Override
        public ServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ServiceBlockingStub(channel, callOptions);
        }
      };
    return ServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ServiceFutureStub>() {
        @java.lang.Override
        public ServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ServiceFutureStub(channel, callOptions);
        }
      };
    return ServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Service defines a gRPC service for interacting with transactions.
   * </pre>
   */
  public static abstract class ServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * EstimateFee simulates executing a transaction for estimating gas usage.
     * </pre>
     */
    public void computeTax(terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest request,
        io.grpc.stub.StreamObserver<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getComputeTaxMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getComputeTaxMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest,
                terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse>(
                  this, METHODID_COMPUTE_TAX)))
          .build();
    }
  }

  /**
   * <pre>
   * Service defines a gRPC service for interacting with transactions.
   * </pre>
   */
  public static final class ServiceStub extends io.grpc.stub.AbstractAsyncStub<ServiceStub> {
    private ServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * EstimateFee simulates executing a transaction for estimating gas usage.
     * </pre>
     */
    public void computeTax(terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest request,
        io.grpc.stub.StreamObserver<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getComputeTaxMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Service defines a gRPC service for interacting with transactions.
   * </pre>
   */
  public static final class ServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<ServiceBlockingStub> {
    private ServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * EstimateFee simulates executing a transaction for estimating gas usage.
     * </pre>
     */
    public terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse computeTax(terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getComputeTaxMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Service defines a gRPC service for interacting with transactions.
   * </pre>
   */
  public static final class ServiceFutureStub extends io.grpc.stub.AbstractFutureStub<ServiceFutureStub> {
    private ServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * EstimateFee simulates executing a transaction for estimating gas usage.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse> computeTax(
        terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getComputeTaxMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_COMPUTE_TAX = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_COMPUTE_TAX:
          serviceImpl.computeTax((terra.tx.v1beta1.ServiceOuterClass.ComputeTaxRequest) request,
              (io.grpc.stub.StreamObserver<terra.tx.v1beta1.ServiceOuterClass.ComputeTaxResponse>) responseObserver);
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

  private static abstract class ServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return terra.tx.v1beta1.ServiceOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Service");
    }
  }

  private static final class ServiceFileDescriptorSupplier
      extends ServiceBaseDescriptorSupplier {
    ServiceFileDescriptorSupplier() {}
  }

  private static final class ServiceMethodDescriptorSupplier
      extends ServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (ServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ServiceFileDescriptorSupplier())
              .addMethod(getComputeTaxMethod())
              .build();
        }
      }
    }
    return result;
  }
}
