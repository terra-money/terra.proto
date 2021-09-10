package terra.treasury.v1beta1

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
import terra.treasury.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.treasury.v1beta1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val taxRateMethod: MethodDescriptor<QueryOuterClass.QueryTaxRateRequest,
      QueryOuterClass.QueryTaxRateResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxRateMethod()

  val taxCapMethod: MethodDescriptor<QueryOuterClass.QueryTaxCapRequest,
      QueryOuterClass.QueryTaxCapResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxCapMethod()

  val taxCapsMethod: MethodDescriptor<QueryOuterClass.QueryTaxCapsRequest,
      QueryOuterClass.QueryTaxCapsResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxCapsMethod()

  val rewardWeightMethod: MethodDescriptor<QueryOuterClass.QueryRewardWeightRequest,
      QueryOuterClass.QueryRewardWeightResponse>
    @JvmStatic
    get() = QueryGrpc.getRewardWeightMethod()

  val seigniorageProceedsMethod: MethodDescriptor<QueryOuterClass.QuerySeigniorageProceedsRequest,
      QueryOuterClass.QuerySeigniorageProceedsResponse>
    @JvmStatic
    get() = QueryGrpc.getSeigniorageProceedsMethod()

  val taxProceedsMethod: MethodDescriptor<QueryOuterClass.QueryTaxProceedsRequest,
      QueryOuterClass.QueryTaxProceedsResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxProceedsMethod()

  val indicatorsMethod: MethodDescriptor<QueryOuterClass.QueryIndicatorsRequest,
      QueryOuterClass.QueryIndicatorsResponse>
    @JvmStatic
    get() = QueryGrpc.getIndicatorsMethod()

  val paramsMethod: MethodDescriptor<QueryOuterClass.QueryParamsRequest,
      QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.treasury.v1beta1.Query service as suspending coroutines.
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
    suspend fun taxRate(request: QueryOuterClass.QueryTaxRateRequest):
        QueryOuterClass.QueryTaxRateResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxRateMethod(),
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
    suspend fun taxCap(request: QueryOuterClass.QueryTaxCapRequest):
        QueryOuterClass.QueryTaxCapResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxCapMethod(),
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
    suspend fun taxCaps(request: QueryOuterClass.QueryTaxCapsRequest):
        QueryOuterClass.QueryTaxCapsResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxCapsMethod(),
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
    suspend fun rewardWeight(request: QueryOuterClass.QueryRewardWeightRequest):
        QueryOuterClass.QueryRewardWeightResponse = unaryRpc(
      channel,
      QueryGrpc.getRewardWeightMethod(),
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
    suspend fun seigniorageProceeds(request: QueryOuterClass.QuerySeigniorageProceedsRequest):
        QueryOuterClass.QuerySeigniorageProceedsResponse = unaryRpc(
      channel,
      QueryGrpc.getSeigniorageProceedsMethod(),
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
    suspend fun taxProceeds(request: QueryOuterClass.QueryTaxProceedsRequest):
        QueryOuterClass.QueryTaxProceedsResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxProceedsMethod(),
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
    suspend fun indicators(request: QueryOuterClass.QueryIndicatorsRequest):
        QueryOuterClass.QueryIndicatorsResponse = unaryRpc(
      channel,
      QueryGrpc.getIndicatorsMethod(),
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
    suspend fun params(request: QueryOuterClass.QueryParamsRequest):
        QueryOuterClass.QueryParamsResponse = unaryRpc(
      channel,
      QueryGrpc.getParamsMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the terra.treasury.v1beta1.Query service based on Kotlin coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxRate.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun taxRate(request: QueryOuterClass.QueryTaxRateRequest):
        QueryOuterClass.QueryTaxRateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxRate is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxCap.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun taxCap(request: QueryOuterClass.QueryTaxCapRequest):
        QueryOuterClass.QueryTaxCapResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxCap is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxCaps.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun taxCaps(request: QueryOuterClass.QueryTaxCapsRequest):
        QueryOuterClass.QueryTaxCapsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxCaps is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.RewardWeight.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun rewardWeight(request: QueryOuterClass.QueryRewardWeightRequest):
        QueryOuterClass.QueryRewardWeightResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.RewardWeight is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.SeigniorageProceeds.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun seigniorageProceeds(request: QueryOuterClass.QuerySeigniorageProceedsRequest):
        QueryOuterClass.QuerySeigniorageProceedsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.SeigniorageProceeds is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxProceeds.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun taxProceeds(request: QueryOuterClass.QueryTaxProceedsRequest):
        QueryOuterClass.QueryTaxProceedsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxProceeds is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.Indicators.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun indicators(request: QueryOuterClass.QueryIndicatorsRequest):
        QueryOuterClass.QueryIndicatorsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.Indicators is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.Params.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun params(request: QueryOuterClass.QueryParamsRequest):
        QueryOuterClass.QueryParamsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.Params is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxRateMethod(),
      implementation = ::taxRate
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxCapMethod(),
      implementation = ::taxCap
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxCapsMethod(),
      implementation = ::taxCaps
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getRewardWeightMethod(),
      implementation = ::rewardWeight
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getSeigniorageProceedsMethod(),
      implementation = ::seigniorageProceeds
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxProceedsMethod(),
      implementation = ::taxProceeds
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getIndicatorsMethod(),
      implementation = ::indicators
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
