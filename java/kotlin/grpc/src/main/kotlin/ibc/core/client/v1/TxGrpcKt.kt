package ibc.core.client.v1

import ibc.core.client.v1.MsgGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.client.v1.Msg.
 */
object MsgGrpcKt {
  const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  val createClientMethod: MethodDescriptor<Tx.MsgCreateClient, Tx.MsgCreateClientResponse>
    @JvmStatic
    get() = MsgGrpc.getCreateClientMethod()

  val updateClientMethod: MethodDescriptor<Tx.MsgUpdateClient, Tx.MsgUpdateClientResponse>
    @JvmStatic
    get() = MsgGrpc.getUpdateClientMethod()

  val upgradeClientMethod: MethodDescriptor<Tx.MsgUpgradeClient, Tx.MsgUpgradeClientResponse>
    @JvmStatic
    get() = MsgGrpc.getUpgradeClientMethod()

  val submitMisbehaviourMethod: MethodDescriptor<Tx.MsgSubmitMisbehaviour,
      Tx.MsgSubmitMisbehaviourResponse>
    @JvmStatic
    get() = MsgGrpc.getSubmitMisbehaviourMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.client.v1.Msg service as suspending coroutines.
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
    suspend fun createClient(request: Tx.MsgCreateClient): Tx.MsgCreateClientResponse = unaryRpc(
      channel,
      MsgGrpc.getCreateClientMethod(),
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
    suspend fun updateClient(request: Tx.MsgUpdateClient): Tx.MsgUpdateClientResponse = unaryRpc(
      channel,
      MsgGrpc.getUpdateClientMethod(),
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
    suspend fun upgradeClient(request: Tx.MsgUpgradeClient): Tx.MsgUpgradeClientResponse = unaryRpc(
      channel,
      MsgGrpc.getUpgradeClientMethod(),
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
    suspend fun submitMisbehaviour(request: Tx.MsgSubmitMisbehaviour):
        Tx.MsgSubmitMisbehaviourResponse = unaryRpc(
      channel,
      MsgGrpc.getSubmitMisbehaviourMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the ibc.core.client.v1.Msg service based on Kotlin coroutines.
   */
  abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.client.v1.Msg.CreateClient.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun createClient(request: Tx.MsgCreateClient): Tx.MsgCreateClientResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Msg.CreateClient is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Msg.UpdateClient.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun updateClient(request: Tx.MsgUpdateClient): Tx.MsgUpdateClientResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Msg.UpdateClient is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Msg.UpgradeClient.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun upgradeClient(request: Tx.MsgUpgradeClient): Tx.MsgUpgradeClientResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Msg.UpgradeClient is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Msg.SubmitMisbehaviour.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun submitMisbehaviour(request: Tx.MsgSubmitMisbehaviour):
        Tx.MsgSubmitMisbehaviourResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Msg.SubmitMisbehaviour is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getCreateClientMethod(),
      implementation = ::createClient
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getUpdateClientMethod(),
      implementation = ::updateClient
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getUpgradeClientMethod(),
      implementation = ::upgradeClient
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getSubmitMisbehaviourMethod(),
      implementation = ::submitMisbehaviour
    )).build()
  }
}
