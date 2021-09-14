package ibc.core.channel.v1

import ibc.core.channel.v1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.channel.v1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val channelMethod: MethodDescriptor<QueryOuterClass.QueryChannelRequest,
      QueryOuterClass.QueryChannelResponse>
    @JvmStatic
    get() = QueryGrpc.getChannelMethod()

  val channelsMethod: MethodDescriptor<QueryOuterClass.QueryChannelsRequest,
      QueryOuterClass.QueryChannelsResponse>
    @JvmStatic
    get() = QueryGrpc.getChannelsMethod()

  val connectionChannelsMethod: MethodDescriptor<QueryOuterClass.QueryConnectionChannelsRequest,
      QueryOuterClass.QueryConnectionChannelsResponse>
    @JvmStatic
    get() = QueryGrpc.getConnectionChannelsMethod()

  val channelClientStateMethod: MethodDescriptor<QueryOuterClass.QueryChannelClientStateRequest,
      QueryOuterClass.QueryChannelClientStateResponse>
    @JvmStatic
    get() = QueryGrpc.getChannelClientStateMethod()

  val channelConsensusStateMethod:
      MethodDescriptor<QueryOuterClass.QueryChannelConsensusStateRequest,
      QueryOuterClass.QueryChannelConsensusStateResponse>
    @JvmStatic
    get() = QueryGrpc.getChannelConsensusStateMethod()

  val packetCommitmentMethod: MethodDescriptor<QueryOuterClass.QueryPacketCommitmentRequest,
      QueryOuterClass.QueryPacketCommitmentResponse>
    @JvmStatic
    get() = QueryGrpc.getPacketCommitmentMethod()

  val packetCommitmentsMethod: MethodDescriptor<QueryOuterClass.QueryPacketCommitmentsRequest,
      QueryOuterClass.QueryPacketCommitmentsResponse>
    @JvmStatic
    get() = QueryGrpc.getPacketCommitmentsMethod()

  val packetReceiptMethod: MethodDescriptor<QueryOuterClass.QueryPacketReceiptRequest,
      QueryOuterClass.QueryPacketReceiptResponse>
    @JvmStatic
    get() = QueryGrpc.getPacketReceiptMethod()

  val packetAcknowledgementMethod:
      MethodDescriptor<QueryOuterClass.QueryPacketAcknowledgementRequest,
      QueryOuterClass.QueryPacketAcknowledgementResponse>
    @JvmStatic
    get() = QueryGrpc.getPacketAcknowledgementMethod()

  val packetAcknowledgementsMethod:
      MethodDescriptor<QueryOuterClass.QueryPacketAcknowledgementsRequest,
      QueryOuterClass.QueryPacketAcknowledgementsResponse>
    @JvmStatic
    get() = QueryGrpc.getPacketAcknowledgementsMethod()

  val unreceivedPacketsMethod: MethodDescriptor<QueryOuterClass.QueryUnreceivedPacketsRequest,
      QueryOuterClass.QueryUnreceivedPacketsResponse>
    @JvmStatic
    get() = QueryGrpc.getUnreceivedPacketsMethod()

  val unreceivedAcksMethod: MethodDescriptor<QueryOuterClass.QueryUnreceivedAcksRequest,
      QueryOuterClass.QueryUnreceivedAcksResponse>
    @JvmStatic
    get() = QueryGrpc.getUnreceivedAcksMethod()

  val nextSequenceReceiveMethod: MethodDescriptor<QueryOuterClass.QueryNextSequenceReceiveRequest,
      QueryOuterClass.QueryNextSequenceReceiveResponse>
    @JvmStatic
    get() = QueryGrpc.getNextSequenceReceiveMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.channel.v1.Query service as suspending coroutines.
   */
  @StubFor(QueryGrpc::class)
  class QueryCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT
  ) : AbstractCoroutineStub<QueryCoroutineStub>(channel, callOptions) {
    override fun build(channel: Channel, callOptions: CallOptions): QueryCoroutineStub =
        QueryCoroutineStub(channel, callOptions)

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun channel(request: QueryOuterClass.QueryChannelRequest):
        QueryOuterClass.QueryChannelResponse = unaryRpc(
      channel,
      QueryGrpc.getChannelMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun channels(request: QueryOuterClass.QueryChannelsRequest):
        QueryOuterClass.QueryChannelsResponse = unaryRpc(
      channel,
      QueryGrpc.getChannelsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun connectionChannels(request: QueryOuterClass.QueryConnectionChannelsRequest):
        QueryOuterClass.QueryConnectionChannelsResponse = unaryRpc(
      channel,
      QueryGrpc.getConnectionChannelsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun channelClientState(request: QueryOuterClass.QueryChannelClientStateRequest):
        QueryOuterClass.QueryChannelClientStateResponse = unaryRpc(
      channel,
      QueryGrpc.getChannelClientStateMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun channelConsensusState(request: QueryOuterClass.QueryChannelConsensusStateRequest):
        QueryOuterClass.QueryChannelConsensusStateResponse = unaryRpc(
      channel,
      QueryGrpc.getChannelConsensusStateMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun packetCommitment(request: QueryOuterClass.QueryPacketCommitmentRequest):
        QueryOuterClass.QueryPacketCommitmentResponse = unaryRpc(
      channel,
      QueryGrpc.getPacketCommitmentMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun packetCommitments(request: QueryOuterClass.QueryPacketCommitmentsRequest):
        QueryOuterClass.QueryPacketCommitmentsResponse = unaryRpc(
      channel,
      QueryGrpc.getPacketCommitmentsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun packetReceipt(request: QueryOuterClass.QueryPacketReceiptRequest):
        QueryOuterClass.QueryPacketReceiptResponse = unaryRpc(
      channel,
      QueryGrpc.getPacketReceiptMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun packetAcknowledgement(request: QueryOuterClass.QueryPacketAcknowledgementRequest):
        QueryOuterClass.QueryPacketAcknowledgementResponse = unaryRpc(
      channel,
      QueryGrpc.getPacketAcknowledgementMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun packetAcknowledgements(request: QueryOuterClass.QueryPacketAcknowledgementsRequest):
        QueryOuterClass.QueryPacketAcknowledgementsResponse = unaryRpc(
      channel,
      QueryGrpc.getPacketAcknowledgementsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun unreceivedPackets(request: QueryOuterClass.QueryUnreceivedPacketsRequest):
        QueryOuterClass.QueryUnreceivedPacketsResponse = unaryRpc(
      channel,
      QueryGrpc.getUnreceivedPacketsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun unreceivedAcks(request: QueryOuterClass.QueryUnreceivedAcksRequest):
        QueryOuterClass.QueryUnreceivedAcksResponse = unaryRpc(
      channel,
      QueryGrpc.getUnreceivedAcksMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun nextSequenceReceive(request: QueryOuterClass.QueryNextSequenceReceiveRequest):
        QueryOuterClass.QueryNextSequenceReceiveResponse = unaryRpc(
      channel,
      QueryGrpc.getNextSequenceReceiveMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the ibc.core.channel.v1.Query service based on Kotlin coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.Channel.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channel(request: QueryOuterClass.QueryChannelRequest):
        QueryOuterClass.QueryChannelResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.Channel is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.Channels.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channels(request: QueryOuterClass.QueryChannelsRequest):
        QueryOuterClass.QueryChannelsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.Channels is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.ConnectionChannels.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun connectionChannels(request: QueryOuterClass.QueryConnectionChannelsRequest):
        QueryOuterClass.QueryConnectionChannelsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.ConnectionChannels is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.ChannelClientState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelClientState(request: QueryOuterClass.QueryChannelClientStateRequest):
        QueryOuterClass.QueryChannelClientStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.ChannelClientState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.ChannelConsensusState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend
        fun channelConsensusState(request: QueryOuterClass.QueryChannelConsensusStateRequest):
        QueryOuterClass.QueryChannelConsensusStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.ChannelConsensusState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.PacketCommitment.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun packetCommitment(request: QueryOuterClass.QueryPacketCommitmentRequest):
        QueryOuterClass.QueryPacketCommitmentResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.PacketCommitment is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.PacketCommitments.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun packetCommitments(request: QueryOuterClass.QueryPacketCommitmentsRequest):
        QueryOuterClass.QueryPacketCommitmentsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.PacketCommitments is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.PacketReceipt.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun packetReceipt(request: QueryOuterClass.QueryPacketReceiptRequest):
        QueryOuterClass.QueryPacketReceiptResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.PacketReceipt is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.PacketAcknowledgement.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend
        fun packetAcknowledgement(request: QueryOuterClass.QueryPacketAcknowledgementRequest):
        QueryOuterClass.QueryPacketAcknowledgementResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.PacketAcknowledgement is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.PacketAcknowledgements.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend
        fun packetAcknowledgements(request: QueryOuterClass.QueryPacketAcknowledgementsRequest):
        QueryOuterClass.QueryPacketAcknowledgementsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.PacketAcknowledgements is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.UnreceivedPackets.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun unreceivedPackets(request: QueryOuterClass.QueryUnreceivedPacketsRequest):
        QueryOuterClass.QueryUnreceivedPacketsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.UnreceivedPackets is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.UnreceivedAcks.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun unreceivedAcks(request: QueryOuterClass.QueryUnreceivedAcksRequest):
        QueryOuterClass.QueryUnreceivedAcksResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.UnreceivedAcks is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Query.NextSequenceReceive.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun nextSequenceReceive(request: QueryOuterClass.QueryNextSequenceReceiveRequest):
        QueryOuterClass.QueryNextSequenceReceiveResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Query.NextSequenceReceive is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getChannelMethod(),
      implementation = ::channel
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getChannelsMethod(),
      implementation = ::channels
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConnectionChannelsMethod(),
      implementation = ::connectionChannels
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getChannelClientStateMethod(),
      implementation = ::channelClientState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getChannelConsensusStateMethod(),
      implementation = ::channelConsensusState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPacketCommitmentMethod(),
      implementation = ::packetCommitment
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPacketCommitmentsMethod(),
      implementation = ::packetCommitments
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPacketReceiptMethod(),
      implementation = ::packetReceipt
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPacketAcknowledgementMethod(),
      implementation = ::packetAcknowledgement
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPacketAcknowledgementsMethod(),
      implementation = ::packetAcknowledgements
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getUnreceivedPacketsMethod(),
      implementation = ::unreceivedPackets
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getUnreceivedAcksMethod(),
      implementation = ::unreceivedAcks
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getNextSequenceReceiveMethod(),
      implementation = ::nextSequenceReceive
    )).build()
  }
}
