package ibc.applications.fee.v1

import ibc.applications.fee.v1.QueryGrpc.getServiceDescriptor
import io.grpc.CallOptions
import io.grpc.CallOptions.DEFAULT
import io.grpc.Channel
import io.grpc.Metadata
import io.grpc.MethodDescriptor
import io.grpc.ServerServiceDefinition
import io.grpc.ServerServiceDefinition.builder
import io.grpc.ServiceDescriptor
import io.grpc.Status
import io.grpc.Status.UNIMPLEMENTED
import io.grpc.StatusException
import io.grpc.kotlin.AbstractCoroutineServerImpl
import io.grpc.kotlin.AbstractCoroutineStub
import io.grpc.kotlin.ClientCalls
import io.grpc.kotlin.ClientCalls.unaryRpc
import io.grpc.kotlin.ServerCalls
import io.grpc.kotlin.ServerCalls.unaryServerMethodDefinition
import io.grpc.kotlin.StubFor
import kotlin.String
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

/**
 * Holder for Kotlin coroutine-based client and server APIs for ibc.applications.fee.v1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val incentivizedPacketsMethod:
      MethodDescriptor<QueryOuterClass.QueryIncentivizedPacketsRequest, QueryOuterClass.QueryIncentivizedPacketsResponse>
    @JvmStatic
    get() = QueryGrpc.getIncentivizedPacketsMethod()

  public val incentivizedPacketMethod:
      MethodDescriptor<QueryOuterClass.QueryIncentivizedPacketRequest, QueryOuterClass.QueryIncentivizedPacketResponse>
    @JvmStatic
    get() = QueryGrpc.getIncentivizedPacketMethod()

  public val incentivizedPacketsForChannelMethod:
      MethodDescriptor<QueryOuterClass.QueryIncentivizedPacketsForChannelRequest, QueryOuterClass.QueryIncentivizedPacketsForChannelResponse>
    @JvmStatic
    get() = QueryGrpc.getIncentivizedPacketsForChannelMethod()

  public val totalRecvFeesMethod:
      MethodDescriptor<QueryOuterClass.QueryTotalRecvFeesRequest, QueryOuterClass.QueryTotalRecvFeesResponse>
    @JvmStatic
    get() = QueryGrpc.getTotalRecvFeesMethod()

  public val totalAckFeesMethod:
      MethodDescriptor<QueryOuterClass.QueryTotalAckFeesRequest, QueryOuterClass.QueryTotalAckFeesResponse>
    @JvmStatic
    get() = QueryGrpc.getTotalAckFeesMethod()

  public val totalTimeoutFeesMethod:
      MethodDescriptor<QueryOuterClass.QueryTotalTimeoutFeesRequest, QueryOuterClass.QueryTotalTimeoutFeesResponse>
    @JvmStatic
    get() = QueryGrpc.getTotalTimeoutFeesMethod()

  public val counterpartyAddressMethod:
      MethodDescriptor<QueryOuterClass.QueryCounterpartyAddressRequest, QueryOuterClass.QueryCounterpartyAddressResponse>
    @JvmStatic
    get() = QueryGrpc.getCounterpartyAddressMethod()

  public val feeEnabledChannelsMethod:
      MethodDescriptor<QueryOuterClass.QueryFeeEnabledChannelsRequest, QueryOuterClass.QueryFeeEnabledChannelsResponse>
    @JvmStatic
    get() = QueryGrpc.getFeeEnabledChannelsMethod()

  public val feeEnabledChannelMethod:
      MethodDescriptor<QueryOuterClass.QueryFeeEnabledChannelRequest, QueryOuterClass.QueryFeeEnabledChannelResponse>
    @JvmStatic
    get() = QueryGrpc.getFeeEnabledChannelMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.applications.fee.v1.Query service as suspending coroutines.
   */
  @StubFor(QueryGrpc::class)
  public class QueryCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT,
  ) : AbstractCoroutineStub<QueryCoroutineStub>(channel, callOptions) {
    public override fun build(channel: Channel, callOptions: CallOptions): QueryCoroutineStub =
        QueryCoroutineStub(channel, callOptions)

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun incentivizedPackets(request: QueryOuterClass.QueryIncentivizedPacketsRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryIncentivizedPacketsResponse =
        unaryRpc(
      channel,
      QueryGrpc.getIncentivizedPacketsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun incentivizedPacket(request: QueryOuterClass.QueryIncentivizedPacketRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryIncentivizedPacketResponse = unaryRpc(
      channel,
      QueryGrpc.getIncentivizedPacketMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend
        fun incentivizedPacketsForChannel(request: QueryOuterClass.QueryIncentivizedPacketsForChannelRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryIncentivizedPacketsForChannelResponse
        = unaryRpc(
      channel,
      QueryGrpc.getIncentivizedPacketsForChannelMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun totalRecvFees(request: QueryOuterClass.QueryTotalRecvFeesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryTotalRecvFeesResponse = unaryRpc(
      channel,
      QueryGrpc.getTotalRecvFeesMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun totalAckFees(request: QueryOuterClass.QueryTotalAckFeesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryTotalAckFeesResponse = unaryRpc(
      channel,
      QueryGrpc.getTotalAckFeesMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun totalTimeoutFees(request: QueryOuterClass.QueryTotalTimeoutFeesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryTotalTimeoutFeesResponse = unaryRpc(
      channel,
      QueryGrpc.getTotalTimeoutFeesMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun counterpartyAddress(request: QueryOuterClass.QueryCounterpartyAddressRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryCounterpartyAddressResponse =
        unaryRpc(
      channel,
      QueryGrpc.getCounterpartyAddressMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun feeEnabledChannels(request: QueryOuterClass.QueryFeeEnabledChannelsRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryFeeEnabledChannelsResponse = unaryRpc(
      channel,
      QueryGrpc.getFeeEnabledChannelsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun feeEnabledChannel(request: QueryOuterClass.QueryFeeEnabledChannelRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryFeeEnabledChannelResponse = unaryRpc(
      channel,
      QueryGrpc.getFeeEnabledChannelMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the ibc.applications.fee.v1.Query service based on Kotlin
   * coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.IncentivizedPackets.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun incentivizedPackets(request: QueryOuterClass.QueryIncentivizedPacketsRequest):
        QueryOuterClass.QueryIncentivizedPacketsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.IncentivizedPackets is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.IncentivizedPacket.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun incentivizedPacket(request: QueryOuterClass.QueryIncentivizedPacketRequest):
        QueryOuterClass.QueryIncentivizedPacketResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.IncentivizedPacket is unimplemented"))

    /**
     * Returns the response to an RPC for
     * ibc.applications.fee.v1.Query.IncentivizedPacketsForChannel.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun incentivizedPacketsForChannel(request: QueryOuterClass.QueryIncentivizedPacketsForChannelRequest):
        QueryOuterClass.QueryIncentivizedPacketsForChannelResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.IncentivizedPacketsForChannel is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.TotalRecvFees.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun totalRecvFees(request: QueryOuterClass.QueryTotalRecvFeesRequest):
        QueryOuterClass.QueryTotalRecvFeesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.TotalRecvFees is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.TotalAckFees.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun totalAckFees(request: QueryOuterClass.QueryTotalAckFeesRequest):
        QueryOuterClass.QueryTotalAckFeesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.TotalAckFees is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.TotalTimeoutFees.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun totalTimeoutFees(request: QueryOuterClass.QueryTotalTimeoutFeesRequest):
        QueryOuterClass.QueryTotalTimeoutFeesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.TotalTimeoutFees is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.CounterpartyAddress.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun counterpartyAddress(request: QueryOuterClass.QueryCounterpartyAddressRequest):
        QueryOuterClass.QueryCounterpartyAddressResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.CounterpartyAddress is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.FeeEnabledChannels.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun feeEnabledChannels(request: QueryOuterClass.QueryFeeEnabledChannelsRequest):
        QueryOuterClass.QueryFeeEnabledChannelsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.FeeEnabledChannels is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Query.FeeEnabledChannel.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun feeEnabledChannel(request: QueryOuterClass.QueryFeeEnabledChannelRequest):
        QueryOuterClass.QueryFeeEnabledChannelResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Query.FeeEnabledChannel is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getIncentivizedPacketsMethod(),
      implementation = ::incentivizedPackets
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getIncentivizedPacketMethod(),
      implementation = ::incentivizedPacket
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getIncentivizedPacketsForChannelMethod(),
      implementation = ::incentivizedPacketsForChannel
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTotalRecvFeesMethod(),
      implementation = ::totalRecvFees
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTotalAckFeesMethod(),
      implementation = ::totalAckFees
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTotalTimeoutFeesMethod(),
      implementation = ::totalTimeoutFees
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getCounterpartyAddressMethod(),
      implementation = ::counterpartyAddress
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getFeeEnabledChannelsMethod(),
      implementation = ::feeEnabledChannels
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getFeeEnabledChannelMethod(),
      implementation = ::feeEnabledChannel
    )).build()
  }
}
