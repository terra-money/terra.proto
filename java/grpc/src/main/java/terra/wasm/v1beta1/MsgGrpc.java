package terra.wasm.v1beta1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Msg defines the oracle Msg service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: terra/wasm/v1beta1/tx.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MsgGrpc {

  private MsgGrpc() {}

  public static final String SERVICE_NAME = "terra.wasm.v1beta1.Msg";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgStoreCode,
      terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> getStoreCodeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StoreCode",
      requestType = terra.wasm.v1beta1.Tx.MsgStoreCode.class,
      responseType = terra.wasm.v1beta1.Tx.MsgStoreCodeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgStoreCode,
      terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> getStoreCodeMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgStoreCode, terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> getStoreCodeMethod;
    if ((getStoreCodeMethod = MsgGrpc.getStoreCodeMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getStoreCodeMethod = MsgGrpc.getStoreCodeMethod) == null) {
          MsgGrpc.getStoreCodeMethod = getStoreCodeMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgStoreCode, terra.wasm.v1beta1.Tx.MsgStoreCodeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StoreCode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgStoreCode.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgStoreCodeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("StoreCode"))
              .build();
        }
      }
    }
    return getStoreCodeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateCode,
      terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> getMigrateCodeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MigrateCode",
      requestType = terra.wasm.v1beta1.Tx.MsgMigrateCode.class,
      responseType = terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateCode,
      terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> getMigrateCodeMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateCode, terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> getMigrateCodeMethod;
    if ((getMigrateCodeMethod = MsgGrpc.getMigrateCodeMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getMigrateCodeMethod = MsgGrpc.getMigrateCodeMethod) == null) {
          MsgGrpc.getMigrateCodeMethod = getMigrateCodeMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgMigrateCode, terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MigrateCode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgMigrateCode.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("MigrateCode"))
              .build();
        }
      }
    }
    return getMigrateCodeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgInstantiateContract,
      terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> getInstantiateContractMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "InstantiateContract",
      requestType = terra.wasm.v1beta1.Tx.MsgInstantiateContract.class,
      responseType = terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgInstantiateContract,
      terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> getInstantiateContractMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgInstantiateContract, terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> getInstantiateContractMethod;
    if ((getInstantiateContractMethod = MsgGrpc.getInstantiateContractMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getInstantiateContractMethod = MsgGrpc.getInstantiateContractMethod) == null) {
          MsgGrpc.getInstantiateContractMethod = getInstantiateContractMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgInstantiateContract, terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "InstantiateContract"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgInstantiateContract.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("InstantiateContract"))
              .build();
        }
      }
    }
    return getInstantiateContractMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgExecuteContract,
      terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> getExecuteContractMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ExecuteContract",
      requestType = terra.wasm.v1beta1.Tx.MsgExecuteContract.class,
      responseType = terra.wasm.v1beta1.Tx.MsgExecuteContractResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgExecuteContract,
      terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> getExecuteContractMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgExecuteContract, terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> getExecuteContractMethod;
    if ((getExecuteContractMethod = MsgGrpc.getExecuteContractMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getExecuteContractMethod = MsgGrpc.getExecuteContractMethod) == null) {
          MsgGrpc.getExecuteContractMethod = getExecuteContractMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgExecuteContract, terra.wasm.v1beta1.Tx.MsgExecuteContractResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ExecuteContract"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgExecuteContract.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgExecuteContractResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("ExecuteContract"))
              .build();
        }
      }
    }
    return getExecuteContractMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateContract,
      terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> getMigrateContractMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MigrateContract",
      requestType = terra.wasm.v1beta1.Tx.MsgMigrateContract.class,
      responseType = terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateContract,
      terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> getMigrateContractMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgMigrateContract, terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> getMigrateContractMethod;
    if ((getMigrateContractMethod = MsgGrpc.getMigrateContractMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getMigrateContractMethod = MsgGrpc.getMigrateContractMethod) == null) {
          MsgGrpc.getMigrateContractMethod = getMigrateContractMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgMigrateContract, terra.wasm.v1beta1.Tx.MsgMigrateContractResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MigrateContract"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgMigrateContract.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("MigrateContract"))
              .build();
        }
      }
    }
    return getMigrateContractMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin,
      terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> getUpdateContractAdminMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateContractAdmin",
      requestType = terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin.class,
      responseType = terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin,
      terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> getUpdateContractAdminMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin, terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> getUpdateContractAdminMethod;
    if ((getUpdateContractAdminMethod = MsgGrpc.getUpdateContractAdminMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getUpdateContractAdminMethod = MsgGrpc.getUpdateContractAdminMethod) == null) {
          MsgGrpc.getUpdateContractAdminMethod = getUpdateContractAdminMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin, terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateContractAdmin"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("UpdateContractAdmin"))
              .build();
        }
      }
    }
    return getUpdateContractAdminMethod;
  }

  private static volatile io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgClearContractAdmin,
      terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> getClearContractAdminMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ClearContractAdmin",
      requestType = terra.wasm.v1beta1.Tx.MsgClearContractAdmin.class,
      responseType = terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgClearContractAdmin,
      terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> getClearContractAdminMethod() {
    io.grpc.MethodDescriptor<terra.wasm.v1beta1.Tx.MsgClearContractAdmin, terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> getClearContractAdminMethod;
    if ((getClearContractAdminMethod = MsgGrpc.getClearContractAdminMethod) == null) {
      synchronized (MsgGrpc.class) {
        if ((getClearContractAdminMethod = MsgGrpc.getClearContractAdminMethod) == null) {
          MsgGrpc.getClearContractAdminMethod = getClearContractAdminMethod =
              io.grpc.MethodDescriptor.<terra.wasm.v1beta1.Tx.MsgClearContractAdmin, terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ClearContractAdmin"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgClearContractAdmin.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MsgMethodDescriptorSupplier("ClearContractAdmin"))
              .build();
        }
      }
    }
    return getClearContractAdminMethod;
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
     * StoreCode to submit Wasm code to the system
     * </pre>
     */
    public void storeCode(terra.wasm.v1beta1.Tx.MsgStoreCode request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStoreCodeMethod(), responseObserver);
    }

    /**
     * <pre>
     * MigrateCode to submit new version Wasm code to the system
     * </pre>
     */
    public void migrateCode(terra.wasm.v1beta1.Tx.MsgMigrateCode request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMigrateCodeMethod(), responseObserver);
    }

    /**
     * <pre>
     *  Instantiate creates a new smart contract instance for the given code id.
     * </pre>
     */
    public void instantiateContract(terra.wasm.v1beta1.Tx.MsgInstantiateContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInstantiateContractMethod(), responseObserver);
    }

    /**
     * <pre>
     * Execute submits the given message data to a smart contract
     * </pre>
     */
    public void executeContract(terra.wasm.v1beta1.Tx.MsgExecuteContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getExecuteContractMethod(), responseObserver);
    }

    /**
     * <pre>
     * Migrate runs a code upgrade/ downgrade for a smart contract
     * </pre>
     */
    public void migrateContract(terra.wasm.v1beta1.Tx.MsgMigrateContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMigrateContractMethod(), responseObserver);
    }

    /**
     * <pre>
     * UpdateContractAdmin sets a new admin for a smart contract
     * </pre>
     */
    public void updateContractAdmin(terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateContractAdminMethod(), responseObserver);
    }

    /**
     * <pre>
     * ClearContractAdmin remove admin flag from a smart contract
     * </pre>
     */
    public void clearContractAdmin(terra.wasm.v1beta1.Tx.MsgClearContractAdmin request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getClearContractAdminMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getStoreCodeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgStoreCode,
                terra.wasm.v1beta1.Tx.MsgStoreCodeResponse>(
                  this, METHODID_STORE_CODE)))
          .addMethod(
            getMigrateCodeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgMigrateCode,
                terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse>(
                  this, METHODID_MIGRATE_CODE)))
          .addMethod(
            getInstantiateContractMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgInstantiateContract,
                terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse>(
                  this, METHODID_INSTANTIATE_CONTRACT)))
          .addMethod(
            getExecuteContractMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgExecuteContract,
                terra.wasm.v1beta1.Tx.MsgExecuteContractResponse>(
                  this, METHODID_EXECUTE_CONTRACT)))
          .addMethod(
            getMigrateContractMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgMigrateContract,
                terra.wasm.v1beta1.Tx.MsgMigrateContractResponse>(
                  this, METHODID_MIGRATE_CONTRACT)))
          .addMethod(
            getUpdateContractAdminMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin,
                terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse>(
                  this, METHODID_UPDATE_CONTRACT_ADMIN)))
          .addMethod(
            getClearContractAdminMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                terra.wasm.v1beta1.Tx.MsgClearContractAdmin,
                terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse>(
                  this, METHODID_CLEAR_CONTRACT_ADMIN)))
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
     * StoreCode to submit Wasm code to the system
     * </pre>
     */
    public void storeCode(terra.wasm.v1beta1.Tx.MsgStoreCode request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStoreCodeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * MigrateCode to submit new version Wasm code to the system
     * </pre>
     */
    public void migrateCode(terra.wasm.v1beta1.Tx.MsgMigrateCode request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMigrateCodeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *  Instantiate creates a new smart contract instance for the given code id.
     * </pre>
     */
    public void instantiateContract(terra.wasm.v1beta1.Tx.MsgInstantiateContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getInstantiateContractMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Execute submits the given message data to a smart contract
     * </pre>
     */
    public void executeContract(terra.wasm.v1beta1.Tx.MsgExecuteContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getExecuteContractMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Migrate runs a code upgrade/ downgrade for a smart contract
     * </pre>
     */
    public void migrateContract(terra.wasm.v1beta1.Tx.MsgMigrateContract request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMigrateContractMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * UpdateContractAdmin sets a new admin for a smart contract
     * </pre>
     */
    public void updateContractAdmin(terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateContractAdminMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ClearContractAdmin remove admin flag from a smart contract
     * </pre>
     */
    public void clearContractAdmin(terra.wasm.v1beta1.Tx.MsgClearContractAdmin request,
        io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getClearContractAdminMethod(), getCallOptions()), request, responseObserver);
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
     * StoreCode to submit Wasm code to the system
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgStoreCodeResponse storeCode(terra.wasm.v1beta1.Tx.MsgStoreCode request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStoreCodeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * MigrateCode to submit new version Wasm code to the system
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse migrateCode(terra.wasm.v1beta1.Tx.MsgMigrateCode request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMigrateCodeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *  Instantiate creates a new smart contract instance for the given code id.
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse instantiateContract(terra.wasm.v1beta1.Tx.MsgInstantiateContract request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getInstantiateContractMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Execute submits the given message data to a smart contract
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgExecuteContractResponse executeContract(terra.wasm.v1beta1.Tx.MsgExecuteContract request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getExecuteContractMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Migrate runs a code upgrade/ downgrade for a smart contract
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgMigrateContractResponse migrateContract(terra.wasm.v1beta1.Tx.MsgMigrateContract request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMigrateContractMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * UpdateContractAdmin sets a new admin for a smart contract
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse updateContractAdmin(terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateContractAdminMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ClearContractAdmin remove admin flag from a smart contract
     * </pre>
     */
    public terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse clearContractAdmin(terra.wasm.v1beta1.Tx.MsgClearContractAdmin request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getClearContractAdminMethod(), getCallOptions(), request);
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
     * StoreCode to submit Wasm code to the system
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgStoreCodeResponse> storeCode(
        terra.wasm.v1beta1.Tx.MsgStoreCode request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStoreCodeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * MigrateCode to submit new version Wasm code to the system
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse> migrateCode(
        terra.wasm.v1beta1.Tx.MsgMigrateCode request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMigrateCodeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *  Instantiate creates a new smart contract instance for the given code id.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse> instantiateContract(
        terra.wasm.v1beta1.Tx.MsgInstantiateContract request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getInstantiateContractMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Execute submits the given message data to a smart contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgExecuteContractResponse> executeContract(
        terra.wasm.v1beta1.Tx.MsgExecuteContract request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getExecuteContractMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Migrate runs a code upgrade/ downgrade for a smart contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgMigrateContractResponse> migrateContract(
        terra.wasm.v1beta1.Tx.MsgMigrateContract request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMigrateContractMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * UpdateContractAdmin sets a new admin for a smart contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse> updateContractAdmin(
        terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateContractAdminMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ClearContractAdmin remove admin flag from a smart contract
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse> clearContractAdmin(
        terra.wasm.v1beta1.Tx.MsgClearContractAdmin request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getClearContractAdminMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_STORE_CODE = 0;
  private static final int METHODID_MIGRATE_CODE = 1;
  private static final int METHODID_INSTANTIATE_CONTRACT = 2;
  private static final int METHODID_EXECUTE_CONTRACT = 3;
  private static final int METHODID_MIGRATE_CONTRACT = 4;
  private static final int METHODID_UPDATE_CONTRACT_ADMIN = 5;
  private static final int METHODID_CLEAR_CONTRACT_ADMIN = 6;

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
        case METHODID_STORE_CODE:
          serviceImpl.storeCode((terra.wasm.v1beta1.Tx.MsgStoreCode) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgStoreCodeResponse>) responseObserver);
          break;
        case METHODID_MIGRATE_CODE:
          serviceImpl.migrateCode((terra.wasm.v1beta1.Tx.MsgMigrateCode) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateCodeResponse>) responseObserver);
          break;
        case METHODID_INSTANTIATE_CONTRACT:
          serviceImpl.instantiateContract((terra.wasm.v1beta1.Tx.MsgInstantiateContract) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgInstantiateContractResponse>) responseObserver);
          break;
        case METHODID_EXECUTE_CONTRACT:
          serviceImpl.executeContract((terra.wasm.v1beta1.Tx.MsgExecuteContract) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgExecuteContractResponse>) responseObserver);
          break;
        case METHODID_MIGRATE_CONTRACT:
          serviceImpl.migrateContract((terra.wasm.v1beta1.Tx.MsgMigrateContract) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgMigrateContractResponse>) responseObserver);
          break;
        case METHODID_UPDATE_CONTRACT_ADMIN:
          serviceImpl.updateContractAdmin((terra.wasm.v1beta1.Tx.MsgUpdateContractAdmin) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgUpdateContractAdminResponse>) responseObserver);
          break;
        case METHODID_CLEAR_CONTRACT_ADMIN:
          serviceImpl.clearContractAdmin((terra.wasm.v1beta1.Tx.MsgClearContractAdmin) request,
              (io.grpc.stub.StreamObserver<terra.wasm.v1beta1.Tx.MsgClearContractAdminResponse>) responseObserver);
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
      return terra.wasm.v1beta1.Tx.getDescriptor();
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
              .addMethod(getStoreCodeMethod())
              .addMethod(getMigrateCodeMethod())
              .addMethod(getInstantiateContractMethod())
              .addMethod(getExecuteContractMethod())
              .addMethod(getMigrateContractMethod())
              .addMethod(getUpdateContractAdminMethod())
              .addMethod(getClearContractAdminMethod())
              .build();
        }
      }
    }
    return result;
  }
}
