package ibc.applications.fee.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Query defines the ICS29 gRPC querier service.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.47.0)",
    comments = "Source: ibc/applications/fee/v1/query.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class QueryGrpc {

  private QueryGrpc() {}

  public static final String SERVICE_NAME = "ibc.applications.fee.v1.Query";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> getIncentivizedPacketsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IncentivizedPackets",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> getIncentivizedPacketsMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> getIncentivizedPacketsMethod;
    if ((getIncentivizedPacketsMethod = QueryGrpc.getIncentivizedPacketsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getIncentivizedPacketsMethod = QueryGrpc.getIncentivizedPacketsMethod) == null) {
          QueryGrpc.getIncentivizedPacketsMethod = getIncentivizedPacketsMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "IncentivizedPackets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("IncentivizedPackets"))
              .build();
        }
      }
    }
    return getIncentivizedPacketsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> getIncentivizedPacketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IncentivizedPacket",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> getIncentivizedPacketMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> getIncentivizedPacketMethod;
    if ((getIncentivizedPacketMethod = QueryGrpc.getIncentivizedPacketMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getIncentivizedPacketMethod = QueryGrpc.getIncentivizedPacketMethod) == null) {
          QueryGrpc.getIncentivizedPacketMethod = getIncentivizedPacketMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "IncentivizedPacket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("IncentivizedPacket"))
              .build();
        }
      }
    }
    return getIncentivizedPacketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> getIncentivizedPacketsForChannelMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IncentivizedPacketsForChannel",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> getIncentivizedPacketsForChannelMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> getIncentivizedPacketsForChannelMethod;
    if ((getIncentivizedPacketsForChannelMethod = QueryGrpc.getIncentivizedPacketsForChannelMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getIncentivizedPacketsForChannelMethod = QueryGrpc.getIncentivizedPacketsForChannelMethod) == null) {
          QueryGrpc.getIncentivizedPacketsForChannelMethod = getIncentivizedPacketsForChannelMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest, ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "IncentivizedPacketsForChannel"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("IncentivizedPacketsForChannel"))
              .build();
        }
      }
    }
    return getIncentivizedPacketsForChannelMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> getTotalRecvFeesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TotalRecvFees",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> getTotalRecvFeesMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> getTotalRecvFeesMethod;
    if ((getTotalRecvFeesMethod = QueryGrpc.getTotalRecvFeesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTotalRecvFeesMethod = QueryGrpc.getTotalRecvFeesMethod) == null) {
          QueryGrpc.getTotalRecvFeesMethod = getTotalRecvFeesMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TotalRecvFees"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TotalRecvFees"))
              .build();
        }
      }
    }
    return getTotalRecvFeesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> getTotalAckFeesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TotalAckFees",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> getTotalAckFeesMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> getTotalAckFeesMethod;
    if ((getTotalAckFeesMethod = QueryGrpc.getTotalAckFeesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTotalAckFeesMethod = QueryGrpc.getTotalAckFeesMethod) == null) {
          QueryGrpc.getTotalAckFeesMethod = getTotalAckFeesMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TotalAckFees"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TotalAckFees"))
              .build();
        }
      }
    }
    return getTotalAckFeesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> getTotalTimeoutFeesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TotalTimeoutFees",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> getTotalTimeoutFeesMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> getTotalTimeoutFeesMethod;
    if ((getTotalTimeoutFeesMethod = QueryGrpc.getTotalTimeoutFeesMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getTotalTimeoutFeesMethod = QueryGrpc.getTotalTimeoutFeesMethod) == null) {
          QueryGrpc.getTotalTimeoutFeesMethod = getTotalTimeoutFeesMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest, ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TotalTimeoutFees"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("TotalTimeoutFees"))
              .build();
        }
      }
    }
    return getTotalTimeoutFeesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> getCounterpartyAddressMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CounterpartyAddress",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> getCounterpartyAddressMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest, ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> getCounterpartyAddressMethod;
    if ((getCounterpartyAddressMethod = QueryGrpc.getCounterpartyAddressMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getCounterpartyAddressMethod = QueryGrpc.getCounterpartyAddressMethod) == null) {
          QueryGrpc.getCounterpartyAddressMethod = getCounterpartyAddressMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest, ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CounterpartyAddress"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("CounterpartyAddress"))
              .build();
        }
      }
    }
    return getCounterpartyAddressMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> getFeeEnabledChannelsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeeEnabledChannels",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> getFeeEnabledChannelsMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest, ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> getFeeEnabledChannelsMethod;
    if ((getFeeEnabledChannelsMethod = QueryGrpc.getFeeEnabledChannelsMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getFeeEnabledChannelsMethod = QueryGrpc.getFeeEnabledChannelsMethod) == null) {
          QueryGrpc.getFeeEnabledChannelsMethod = getFeeEnabledChannelsMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest, ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeeEnabledChannels"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("FeeEnabledChannels"))
              .build();
        }
      }
    }
    return getFeeEnabledChannelsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> getFeeEnabledChannelMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeeEnabledChannel",
      requestType = ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest.class,
      responseType = ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest,
      ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> getFeeEnabledChannelMethod() {
    io.grpc.MethodDescriptor<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest, ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> getFeeEnabledChannelMethod;
    if ((getFeeEnabledChannelMethod = QueryGrpc.getFeeEnabledChannelMethod) == null) {
      synchronized (QueryGrpc.class) {
        if ((getFeeEnabledChannelMethod = QueryGrpc.getFeeEnabledChannelMethod) == null) {
          QueryGrpc.getFeeEnabledChannelMethod = getFeeEnabledChannelMethod =
              io.grpc.MethodDescriptor.<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest, ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeeEnabledChannel"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse.getDefaultInstance()))
              .setSchemaDescriptor(new QueryMethodDescriptorSupplier("FeeEnabledChannel"))
              .build();
        }
      }
    }
    return getFeeEnabledChannelMethod;
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
   * Query defines the ICS29 gRPC querier service.
   * </pre>
   */
  public static abstract class QueryImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * IncentivizedPackets returns all incentivized packets and their associated fees
     * </pre>
     */
    public void incentivizedPackets(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIncentivizedPacketsMethod(), responseObserver);
    }

    /**
     * <pre>
     * IncentivizedPacket returns all packet fees for a packet given its identifier
     * </pre>
     */
    public void incentivizedPacket(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIncentivizedPacketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Gets all incentivized packets for a specific channel
     * </pre>
     */
    public void incentivizedPacketsForChannel(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getIncentivizedPacketsForChannelMethod(), responseObserver);
    }

    /**
     * <pre>
     * TotalRecvFees returns the total receive fees for a packet given its identifier
     * </pre>
     */
    public void totalRecvFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTotalRecvFeesMethod(), responseObserver);
    }

    /**
     * <pre>
     * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
     * </pre>
     */
    public void totalAckFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTotalAckFeesMethod(), responseObserver);
    }

    /**
     * <pre>
     * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
     * </pre>
     */
    public void totalTimeoutFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTotalTimeoutFeesMethod(), responseObserver);
    }

    /**
     * <pre>
     * CounterpartyAddress returns the registered counterparty address for forward relaying
     * </pre>
     */
    public void counterpartyAddress(ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCounterpartyAddressMethod(), responseObserver);
    }

    /**
     * <pre>
     * FeeEnabledChannels returns a list of all fee enabled channels
     * </pre>
     */
    public void feeEnabledChannels(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeeEnabledChannelsMethod(), responseObserver);
    }

    /**
     * <pre>
     * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
     * </pre>
     */
    public void feeEnabledChannel(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeeEnabledChannelMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getIncentivizedPacketsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse>(
                  this, METHODID_INCENTIVIZED_PACKETS)))
          .addMethod(
            getIncentivizedPacketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse>(
                  this, METHODID_INCENTIVIZED_PACKET)))
          .addMethod(
            getIncentivizedPacketsForChannelMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse>(
                  this, METHODID_INCENTIVIZED_PACKETS_FOR_CHANNEL)))
          .addMethod(
            getTotalRecvFeesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse>(
                  this, METHODID_TOTAL_RECV_FEES)))
          .addMethod(
            getTotalAckFeesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse>(
                  this, METHODID_TOTAL_ACK_FEES)))
          .addMethod(
            getTotalTimeoutFeesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse>(
                  this, METHODID_TOTAL_TIMEOUT_FEES)))
          .addMethod(
            getCounterpartyAddressMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse>(
                  this, METHODID_COUNTERPARTY_ADDRESS)))
          .addMethod(
            getFeeEnabledChannelsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse>(
                  this, METHODID_FEE_ENABLED_CHANNELS)))
          .addMethod(
            getFeeEnabledChannelMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest,
                ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse>(
                  this, METHODID_FEE_ENABLED_CHANNEL)))
          .build();
    }
  }

  /**
   * <pre>
   * Query defines the ICS29 gRPC querier service.
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
     * IncentivizedPackets returns all incentivized packets and their associated fees
     * </pre>
     */
    public void incentivizedPackets(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIncentivizedPacketsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * IncentivizedPacket returns all packet fees for a packet given its identifier
     * </pre>
     */
    public void incentivizedPacket(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIncentivizedPacketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Gets all incentivized packets for a specific channel
     * </pre>
     */
    public void incentivizedPacketsForChannel(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getIncentivizedPacketsForChannelMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TotalRecvFees returns the total receive fees for a packet given its identifier
     * </pre>
     */
    public void totalRecvFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTotalRecvFeesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
     * </pre>
     */
    public void totalAckFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTotalAckFeesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
     * </pre>
     */
    public void totalTimeoutFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTotalTimeoutFeesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * CounterpartyAddress returns the registered counterparty address for forward relaying
     * </pre>
     */
    public void counterpartyAddress(ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCounterpartyAddressMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * FeeEnabledChannels returns a list of all fee enabled channels
     * </pre>
     */
    public void feeEnabledChannels(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeeEnabledChannelsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
     * </pre>
     */
    public void feeEnabledChannel(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest request,
        io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeeEnabledChannelMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Query defines the ICS29 gRPC querier service.
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
     * IncentivizedPackets returns all incentivized packets and their associated fees
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse incentivizedPackets(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIncentivizedPacketsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * IncentivizedPacket returns all packet fees for a packet given its identifier
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse incentivizedPacket(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIncentivizedPacketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Gets all incentivized packets for a specific channel
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse incentivizedPacketsForChannel(ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getIncentivizedPacketsForChannelMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TotalRecvFees returns the total receive fees for a packet given its identifier
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse totalRecvFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTotalRecvFeesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse totalAckFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTotalAckFeesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse totalTimeoutFees(ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTotalTimeoutFeesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * CounterpartyAddress returns the registered counterparty address for forward relaying
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse counterpartyAddress(ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCounterpartyAddressMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * FeeEnabledChannels returns a list of all fee enabled channels
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse feeEnabledChannels(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeeEnabledChannelsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
     * </pre>
     */
    public ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse feeEnabledChannel(ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeeEnabledChannelMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Query defines the ICS29 gRPC querier service.
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
     * IncentivizedPackets returns all incentivized packets and their associated fees
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse> incentivizedPackets(
        ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIncentivizedPacketsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * IncentivizedPacket returns all packet fees for a packet given its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse> incentivizedPacket(
        ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIncentivizedPacketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Gets all incentivized packets for a specific channel
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse> incentivizedPacketsForChannel(
        ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getIncentivizedPacketsForChannelMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TotalRecvFees returns the total receive fees for a packet given its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse> totalRecvFees(
        ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTotalRecvFeesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse> totalAckFees(
        ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTotalAckFeesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse> totalTimeoutFees(
        ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTotalTimeoutFeesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * CounterpartyAddress returns the registered counterparty address for forward relaying
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse> counterpartyAddress(
        ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCounterpartyAddressMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * FeeEnabledChannels returns a list of all fee enabled channels
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse> feeEnabledChannels(
        ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeeEnabledChannelsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse> feeEnabledChannel(
        ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeeEnabledChannelMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_INCENTIVIZED_PACKETS = 0;
  private static final int METHODID_INCENTIVIZED_PACKET = 1;
  private static final int METHODID_INCENTIVIZED_PACKETS_FOR_CHANNEL = 2;
  private static final int METHODID_TOTAL_RECV_FEES = 3;
  private static final int METHODID_TOTAL_ACK_FEES = 4;
  private static final int METHODID_TOTAL_TIMEOUT_FEES = 5;
  private static final int METHODID_COUNTERPARTY_ADDRESS = 6;
  private static final int METHODID_FEE_ENABLED_CHANNELS = 7;
  private static final int METHODID_FEE_ENABLED_CHANNEL = 8;

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
        case METHODID_INCENTIVIZED_PACKETS:
          serviceImpl.incentivizedPackets((ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsResponse>) responseObserver);
          break;
        case METHODID_INCENTIVIZED_PACKET:
          serviceImpl.incentivizedPacket((ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketResponse>) responseObserver);
          break;
        case METHODID_INCENTIVIZED_PACKETS_FOR_CHANNEL:
          serviceImpl.incentivizedPacketsForChannel((ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryIncentivizedPacketsForChannelResponse>) responseObserver);
          break;
        case METHODID_TOTAL_RECV_FEES:
          serviceImpl.totalRecvFees((ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalRecvFeesResponse>) responseObserver);
          break;
        case METHODID_TOTAL_ACK_FEES:
          serviceImpl.totalAckFees((ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalAckFeesResponse>) responseObserver);
          break;
        case METHODID_TOTAL_TIMEOUT_FEES:
          serviceImpl.totalTimeoutFees((ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryTotalTimeoutFeesResponse>) responseObserver);
          break;
        case METHODID_COUNTERPARTY_ADDRESS:
          serviceImpl.counterpartyAddress((ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryCounterpartyAddressResponse>) responseObserver);
          break;
        case METHODID_FEE_ENABLED_CHANNELS:
          serviceImpl.feeEnabledChannels((ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelsResponse>) responseObserver);
          break;
        case METHODID_FEE_ENABLED_CHANNEL:
          serviceImpl.feeEnabledChannel((ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelRequest) request,
              (io.grpc.stub.StreamObserver<ibc.applications.fee.v1.QueryOuterClass.QueryFeeEnabledChannelResponse>) responseObserver);
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
      return ibc.applications.fee.v1.QueryOuterClass.getDescriptor();
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
              .addMethod(getIncentivizedPacketsMethod())
              .addMethod(getIncentivizedPacketMethod())
              .addMethod(getIncentivizedPacketsForChannelMethod())
              .addMethod(getTotalRecvFeesMethod())
              .addMethod(getTotalAckFeesMethod())
              .addMethod(getTotalTimeoutFeesMethod())
              .addMethod(getCounterpartyAddressMethod())
              .addMethod(getFeeEnabledChannelsMethod())
              .addMethod(getFeeEnabledChannelMethod())
              .build();
        }
      }
    }
    return result;
  }
}
