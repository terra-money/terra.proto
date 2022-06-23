package ibc.applications.fee.v1

import ibc.applications.fee.v1.MsgGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.applications.fee.v1.Msg.
 */
public object MsgGrpcKt {
  public const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  public val registerCounterpartyAddressMethod:
      MethodDescriptor<Tx.MsgRegisterCounterpartyAddress, Tx.MsgRegisterCounterpartyAddressResponse>
    @JvmStatic
    get() = MsgGrpc.getRegisterCounterpartyAddressMethod()

  public val payPacketFeeMethod: MethodDescriptor<Tx.MsgPayPacketFee, Tx.MsgPayPacketFeeResponse>
    @JvmStatic
    get() = MsgGrpc.getPayPacketFeeMethod()

  public val payPacketFeeAsyncMethod:
      MethodDescriptor<Tx.MsgPayPacketFeeAsync, Tx.MsgPayPacketFeeAsyncResponse>
    @JvmStatic
    get() = MsgGrpc.getPayPacketFeeAsyncMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.applications.fee.v1.Msg service as suspending coroutines.
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
    public suspend fun registerCounterpartyAddress(request: Tx.MsgRegisterCounterpartyAddress,
        headers: Metadata = Metadata()): Tx.MsgRegisterCounterpartyAddressResponse = unaryRpc(
      channel,
      MsgGrpc.getRegisterCounterpartyAddressMethod(),
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
    public suspend fun payPacketFee(request: Tx.MsgPayPacketFee, headers: Metadata = Metadata()):
        Tx.MsgPayPacketFeeResponse = unaryRpc(
      channel,
      MsgGrpc.getPayPacketFeeMethod(),
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
    public suspend fun payPacketFeeAsync(request: Tx.MsgPayPacketFeeAsync, headers: Metadata =
        Metadata()): Tx.MsgPayPacketFeeAsyncResponse = unaryRpc(
      channel,
      MsgGrpc.getPayPacketFeeAsyncMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the ibc.applications.fee.v1.Msg service based on Kotlin coroutines.
   */
  public abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Msg.RegisterCounterpartyAddress.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun registerCounterpartyAddress(request: Tx.MsgRegisterCounterpartyAddress):
        Tx.MsgRegisterCounterpartyAddressResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Msg.RegisterCounterpartyAddress is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Msg.PayPacketFee.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun payPacketFee(request: Tx.MsgPayPacketFee): Tx.MsgPayPacketFeeResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Msg.PayPacketFee is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.fee.v1.Msg.PayPacketFeeAsync.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun payPacketFeeAsync(request: Tx.MsgPayPacketFeeAsync):
        Tx.MsgPayPacketFeeAsyncResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.fee.v1.Msg.PayPacketFeeAsync is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getRegisterCounterpartyAddressMethod(),
      implementation = ::registerCounterpartyAddress
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getPayPacketFeeMethod(),
      implementation = ::payPacketFee
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getPayPacketFeeAsyncMethod(),
      implementation = ::payPacketFeeAsync
    )).build()
  }
}
