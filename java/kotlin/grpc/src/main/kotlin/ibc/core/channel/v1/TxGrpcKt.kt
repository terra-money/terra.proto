package ibc.core.channel.v1

import ibc.core.channel.v1.MsgGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.channel.v1.Msg.
 */
object MsgGrpcKt {
  const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  val channelOpenInitMethod: MethodDescriptor<Tx.MsgChannelOpenInit, Tx.MsgChannelOpenInitResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelOpenInitMethod()

  val channelOpenTryMethod: MethodDescriptor<Tx.MsgChannelOpenTry, Tx.MsgChannelOpenTryResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelOpenTryMethod()

  val channelOpenAckMethod: MethodDescriptor<Tx.MsgChannelOpenAck, Tx.MsgChannelOpenAckResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelOpenAckMethod()

  val channelOpenConfirmMethod: MethodDescriptor<Tx.MsgChannelOpenConfirm,
      Tx.MsgChannelOpenConfirmResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelOpenConfirmMethod()

  val channelCloseInitMethod: MethodDescriptor<Tx.MsgChannelCloseInit,
      Tx.MsgChannelCloseInitResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelCloseInitMethod()

  val channelCloseConfirmMethod: MethodDescriptor<Tx.MsgChannelCloseConfirm,
      Tx.MsgChannelCloseConfirmResponse>
    @JvmStatic
    get() = MsgGrpc.getChannelCloseConfirmMethod()

  val recvPacketMethod: MethodDescriptor<Tx.MsgRecvPacket, Tx.MsgRecvPacketResponse>
    @JvmStatic
    get() = MsgGrpc.getRecvPacketMethod()

  val timeoutMethod: MethodDescriptor<Tx.MsgTimeout, Tx.MsgTimeoutResponse>
    @JvmStatic
    get() = MsgGrpc.getTimeoutMethod()

  val timeoutOnCloseMethod: MethodDescriptor<Tx.MsgTimeoutOnClose, Tx.MsgTimeoutOnCloseResponse>
    @JvmStatic
    get() = MsgGrpc.getTimeoutOnCloseMethod()

  val acknowledgementMethod: MethodDescriptor<Tx.MsgAcknowledgement, Tx.MsgAcknowledgementResponse>
    @JvmStatic
    get() = MsgGrpc.getAcknowledgementMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.channel.v1.Msg service as suspending coroutines.
   */
  @StubFor(MsgGrpc::class)
  class MsgCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT
  ) : AbstractCoroutineStub<MsgCoroutineStub>(channel, callOptions) {
    override fun build(channel: Channel, callOptions: CallOptions): MsgCoroutineStub =
        MsgCoroutineStub(channel, callOptions)

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
    suspend fun channelOpenInit(request: Tx.MsgChannelOpenInit): Tx.MsgChannelOpenInitResponse =
        unaryRpc(
      channel,
      MsgGrpc.getChannelOpenInitMethod(),
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
    suspend fun channelOpenTry(request: Tx.MsgChannelOpenTry): Tx.MsgChannelOpenTryResponse =
        unaryRpc(
      channel,
      MsgGrpc.getChannelOpenTryMethod(),
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
    suspend fun channelOpenAck(request: Tx.MsgChannelOpenAck): Tx.MsgChannelOpenAckResponse =
        unaryRpc(
      channel,
      MsgGrpc.getChannelOpenAckMethod(),
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
    suspend fun channelOpenConfirm(request: Tx.MsgChannelOpenConfirm):
        Tx.MsgChannelOpenConfirmResponse = unaryRpc(
      channel,
      MsgGrpc.getChannelOpenConfirmMethod(),
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
    suspend fun channelCloseInit(request: Tx.MsgChannelCloseInit): Tx.MsgChannelCloseInitResponse =
        unaryRpc(
      channel,
      MsgGrpc.getChannelCloseInitMethod(),
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
    suspend fun channelCloseConfirm(request: Tx.MsgChannelCloseConfirm):
        Tx.MsgChannelCloseConfirmResponse = unaryRpc(
      channel,
      MsgGrpc.getChannelCloseConfirmMethod(),
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
    suspend fun recvPacket(request: Tx.MsgRecvPacket): Tx.MsgRecvPacketResponse = unaryRpc(
      channel,
      MsgGrpc.getRecvPacketMethod(),
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
    suspend fun timeout(request: Tx.MsgTimeout): Tx.MsgTimeoutResponse = unaryRpc(
      channel,
      MsgGrpc.getTimeoutMethod(),
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
    suspend fun timeoutOnClose(request: Tx.MsgTimeoutOnClose): Tx.MsgTimeoutOnCloseResponse =
        unaryRpc(
      channel,
      MsgGrpc.getTimeoutOnCloseMethod(),
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
    suspend fun acknowledgement(request: Tx.MsgAcknowledgement): Tx.MsgAcknowledgementResponse =
        unaryRpc(
      channel,
      MsgGrpc.getAcknowledgementMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the ibc.core.channel.v1.Msg service based on Kotlin coroutines.
   */
  abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelOpenInit.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelOpenInit(request: Tx.MsgChannelOpenInit): Tx.MsgChannelOpenInitResponse
        = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelOpenInit is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelOpenTry.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelOpenTry(request: Tx.MsgChannelOpenTry): Tx.MsgChannelOpenTryResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelOpenTry is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelOpenAck.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelOpenAck(request: Tx.MsgChannelOpenAck): Tx.MsgChannelOpenAckResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelOpenAck is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelOpenConfirm.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelOpenConfirm(request: Tx.MsgChannelOpenConfirm):
        Tx.MsgChannelOpenConfirmResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelOpenConfirm is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelCloseInit.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelCloseInit(request: Tx.MsgChannelCloseInit):
        Tx.MsgChannelCloseInitResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelCloseInit is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.ChannelCloseConfirm.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun channelCloseConfirm(request: Tx.MsgChannelCloseConfirm):
        Tx.MsgChannelCloseConfirmResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.ChannelCloseConfirm is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.RecvPacket.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun recvPacket(request: Tx.MsgRecvPacket): Tx.MsgRecvPacketResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.RecvPacket is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.Timeout.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun timeout(request: Tx.MsgTimeout): Tx.MsgTimeoutResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.Timeout is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.TimeoutOnClose.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun timeoutOnClose(request: Tx.MsgTimeoutOnClose): Tx.MsgTimeoutOnCloseResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.TimeoutOnClose is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.channel.v1.Msg.Acknowledgement.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun acknowledgement(request: Tx.MsgAcknowledgement): Tx.MsgAcknowledgementResponse
        = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.channel.v1.Msg.Acknowledgement is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelOpenInitMethod(),
      implementation = ::channelOpenInit
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelOpenTryMethod(),
      implementation = ::channelOpenTry
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelOpenAckMethod(),
      implementation = ::channelOpenAck
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelOpenConfirmMethod(),
      implementation = ::channelOpenConfirm
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelCloseInitMethod(),
      implementation = ::channelCloseInit
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getChannelCloseConfirmMethod(),
      implementation = ::channelCloseConfirm
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getRecvPacketMethod(),
      implementation = ::recvPacket
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getTimeoutMethod(),
      implementation = ::timeout
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getTimeoutOnCloseMethod(),
      implementation = ::timeoutOnClose
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getAcknowledgementMethod(),
      implementation = ::acknowledgement
    )).build()
  }
}
