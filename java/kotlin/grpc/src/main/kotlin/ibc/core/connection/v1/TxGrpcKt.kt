package ibc.core.connection.v1

import ibc.core.connection.v1.MsgGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.connection.v1.Msg.
 */
public object MsgGrpcKt {
  public const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  public val connectionOpenInitMethod:
      MethodDescriptor<Tx.MsgConnectionOpenInit, Tx.MsgConnectionOpenInitResponse>
    @JvmStatic
    get() = MsgGrpc.getConnectionOpenInitMethod()

  public val connectionOpenTryMethod:
      MethodDescriptor<Tx.MsgConnectionOpenTry, Tx.MsgConnectionOpenTryResponse>
    @JvmStatic
    get() = MsgGrpc.getConnectionOpenTryMethod()

  public val connectionOpenAckMethod:
      MethodDescriptor<Tx.MsgConnectionOpenAck, Tx.MsgConnectionOpenAckResponse>
    @JvmStatic
    get() = MsgGrpc.getConnectionOpenAckMethod()

  public val connectionOpenConfirmMethod:
      MethodDescriptor<Tx.MsgConnectionOpenConfirm, Tx.MsgConnectionOpenConfirmResponse>
    @JvmStatic
    get() = MsgGrpc.getConnectionOpenConfirmMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.connection.v1.Msg service as suspending coroutines.
   */
  @StubFor(MsgGrpc::class)
  public class MsgCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT,
  ) : AbstractCoroutineStub<MsgCoroutineStub>(channel, callOptions) {
    public override fun build(channel: Channel, callOptions: CallOptions): MsgCoroutineStub =
        MsgCoroutineStub(channel, callOptions)

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
    public suspend fun connectionOpenInit(request: Tx.MsgConnectionOpenInit, headers: Metadata =
        Metadata()): Tx.MsgConnectionOpenInitResponse = unaryRpc(
      channel,
      MsgGrpc.getConnectionOpenInitMethod(),
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
    public suspend fun connectionOpenTry(request: Tx.MsgConnectionOpenTry, headers: Metadata =
        Metadata()): Tx.MsgConnectionOpenTryResponse = unaryRpc(
      channel,
      MsgGrpc.getConnectionOpenTryMethod(),
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
    public suspend fun connectionOpenAck(request: Tx.MsgConnectionOpenAck, headers: Metadata =
        Metadata()): Tx.MsgConnectionOpenAckResponse = unaryRpc(
      channel,
      MsgGrpc.getConnectionOpenAckMethod(),
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
    public suspend fun connectionOpenConfirm(request: Tx.MsgConnectionOpenConfirm, headers: Metadata
        = Metadata()): Tx.MsgConnectionOpenConfirmResponse = unaryRpc(
      channel,
      MsgGrpc.getConnectionOpenConfirmMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the ibc.core.connection.v1.Msg service based on Kotlin coroutines.
   */
  public abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Msg.ConnectionOpenInit.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun connectionOpenInit(request: Tx.MsgConnectionOpenInit):
        Tx.MsgConnectionOpenInitResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Msg.ConnectionOpenInit is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Msg.ConnectionOpenTry.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun connectionOpenTry(request: Tx.MsgConnectionOpenTry):
        Tx.MsgConnectionOpenTryResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Msg.ConnectionOpenTry is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Msg.ConnectionOpenAck.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun connectionOpenAck(request: Tx.MsgConnectionOpenAck):
        Tx.MsgConnectionOpenAckResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Msg.ConnectionOpenAck is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Msg.ConnectionOpenConfirm.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun connectionOpenConfirm(request: Tx.MsgConnectionOpenConfirm):
        Tx.MsgConnectionOpenConfirmResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Msg.ConnectionOpenConfirm is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getConnectionOpenInitMethod(),
      implementation = ::connectionOpenInit
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getConnectionOpenTryMethod(),
      implementation = ::connectionOpenTry
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getConnectionOpenAckMethod(),
      implementation = ::connectionOpenAck
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getConnectionOpenConfirmMethod(),
      implementation = ::connectionOpenConfirm
    )).build()
  }
}
