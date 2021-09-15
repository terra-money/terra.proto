package terra.oracle.v1beta1

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
import terra.oracle.v1beta1.MsgGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.oracle.v1beta1.Msg.
 */
object MsgGrpcKt {
  const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  val aggregateExchangeRatePrevoteMethod: MethodDescriptor<Tx.MsgAggregateExchangeRatePrevote,
      Tx.MsgAggregateExchangeRatePrevoteResponse>
    @JvmStatic
    get() = MsgGrpc.getAggregateExchangeRatePrevoteMethod()

  val aggregateExchangeRateVoteMethod: MethodDescriptor<Tx.MsgAggregateExchangeRateVote,
      Tx.MsgAggregateExchangeRateVoteResponse>
    @JvmStatic
    get() = MsgGrpc.getAggregateExchangeRateVoteMethod()

  val delegateFeedConsentMethod: MethodDescriptor<Tx.MsgDelegateFeedConsent,
      Tx.MsgDelegateFeedConsentResponse>
    @JvmStatic
    get() = MsgGrpc.getDelegateFeedConsentMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.oracle.v1beta1.Msg service as suspending coroutines.
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
    suspend fun aggregateExchangeRatePrevote(request: Tx.MsgAggregateExchangeRatePrevote):
        Tx.MsgAggregateExchangeRatePrevoteResponse = unaryRpc(
      channel,
      MsgGrpc.getAggregateExchangeRatePrevoteMethod(),
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
    suspend fun aggregateExchangeRateVote(request: Tx.MsgAggregateExchangeRateVote):
        Tx.MsgAggregateExchangeRateVoteResponse = unaryRpc(
      channel,
      MsgGrpc.getAggregateExchangeRateVoteMethod(),
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
    suspend fun delegateFeedConsent(request: Tx.MsgDelegateFeedConsent):
        Tx.MsgDelegateFeedConsentResponse = unaryRpc(
      channel,
      MsgGrpc.getDelegateFeedConsentMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the terra.oracle.v1beta1.Msg service based on Kotlin coroutines.
   */
  abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Msg.AggregateExchangeRatePrevote.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregateExchangeRatePrevote(request: Tx.MsgAggregateExchangeRatePrevote):
        Tx.MsgAggregateExchangeRatePrevoteResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Msg.AggregateExchangeRatePrevote is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Msg.AggregateExchangeRateVote.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregateExchangeRateVote(request: Tx.MsgAggregateExchangeRateVote):
        Tx.MsgAggregateExchangeRateVoteResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Msg.AggregateExchangeRateVote is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Msg.DelegateFeedConsent.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun delegateFeedConsent(request: Tx.MsgDelegateFeedConsent):
        Tx.MsgDelegateFeedConsentResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Msg.DelegateFeedConsent is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getAggregateExchangeRatePrevoteMethod(),
      implementation = ::aggregateExchangeRatePrevote
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getAggregateExchangeRateVoteMethod(),
      implementation = ::aggregateExchangeRateVote
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getDelegateFeedConsentMethod(),
      implementation = ::delegateFeedConsent
    )).build()
  }
}
