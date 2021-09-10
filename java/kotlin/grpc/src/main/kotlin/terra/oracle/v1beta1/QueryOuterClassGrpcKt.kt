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
import terra.oracle.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.oracle.v1beta1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val exchangeRateMethod: MethodDescriptor<QueryOuterClass.QueryExchangeRateRequest,
      QueryOuterClass.QueryExchangeRateResponse>
    @JvmStatic
    get() = QueryGrpc.getExchangeRateMethod()

  val exchangeRatesMethod: MethodDescriptor<QueryOuterClass.QueryExchangeRatesRequest,
      QueryOuterClass.QueryExchangeRatesResponse>
    @JvmStatic
    get() = QueryGrpc.getExchangeRatesMethod()

  val tobinTaxMethod: MethodDescriptor<QueryOuterClass.QueryTobinTaxRequest,
      QueryOuterClass.QueryTobinTaxResponse>
    @JvmStatic
    get() = QueryGrpc.getTobinTaxMethod()

  val tobinTaxesMethod: MethodDescriptor<QueryOuterClass.QueryTobinTaxesRequest,
      QueryOuterClass.QueryTobinTaxesResponse>
    @JvmStatic
    get() = QueryGrpc.getTobinTaxesMethod()

  val activesMethod: MethodDescriptor<QueryOuterClass.QueryActivesRequest,
      QueryOuterClass.QueryActivesResponse>
    @JvmStatic
    get() = QueryGrpc.getActivesMethod()

  val voteTargetsMethod: MethodDescriptor<QueryOuterClass.QueryVoteTargetsRequest,
      QueryOuterClass.QueryVoteTargetsResponse>
    @JvmStatic
    get() = QueryGrpc.getVoteTargetsMethod()

  val feederDelegationMethod: MethodDescriptor<QueryOuterClass.QueryFeederDelegationRequest,
      QueryOuterClass.QueryFeederDelegationResponse>
    @JvmStatic
    get() = QueryGrpc.getFeederDelegationMethod()

  val missCounterMethod: MethodDescriptor<QueryOuterClass.QueryMissCounterRequest,
      QueryOuterClass.QueryMissCounterResponse>
    @JvmStatic
    get() = QueryGrpc.getMissCounterMethod()

  val aggregatePrevoteMethod: MethodDescriptor<QueryOuterClass.QueryAggregatePrevoteRequest,
      QueryOuterClass.QueryAggregatePrevoteResponse>
    @JvmStatic
    get() = QueryGrpc.getAggregatePrevoteMethod()

  val aggregatePrevotesMethod: MethodDescriptor<QueryOuterClass.QueryAggregatePrevotesRequest,
      QueryOuterClass.QueryAggregatePrevotesResponse>
    @JvmStatic
    get() = QueryGrpc.getAggregatePrevotesMethod()

  val aggregateVoteMethod: MethodDescriptor<QueryOuterClass.QueryAggregateVoteRequest,
      QueryOuterClass.QueryAggregateVoteResponse>
    @JvmStatic
    get() = QueryGrpc.getAggregateVoteMethod()

  val aggregateVotesMethod: MethodDescriptor<QueryOuterClass.QueryAggregateVotesRequest,
      QueryOuterClass.QueryAggregateVotesResponse>
    @JvmStatic
    get() = QueryGrpc.getAggregateVotesMethod()

  val paramsMethod: MethodDescriptor<QueryOuterClass.QueryParamsRequest,
      QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.oracle.v1beta1.Query service as suspending coroutines.
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
    suspend fun exchangeRate(request: QueryOuterClass.QueryExchangeRateRequest):
        QueryOuterClass.QueryExchangeRateResponse = unaryRpc(
      channel,
      QueryGrpc.getExchangeRateMethod(),
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
    suspend fun exchangeRates(request: QueryOuterClass.QueryExchangeRatesRequest):
        QueryOuterClass.QueryExchangeRatesResponse = unaryRpc(
      channel,
      QueryGrpc.getExchangeRatesMethod(),
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
    suspend fun tobinTax(request: QueryOuterClass.QueryTobinTaxRequest):
        QueryOuterClass.QueryTobinTaxResponse = unaryRpc(
      channel,
      QueryGrpc.getTobinTaxMethod(),
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
    suspend fun tobinTaxes(request: QueryOuterClass.QueryTobinTaxesRequest):
        QueryOuterClass.QueryTobinTaxesResponse = unaryRpc(
      channel,
      QueryGrpc.getTobinTaxesMethod(),
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
    suspend fun actives(request: QueryOuterClass.QueryActivesRequest):
        QueryOuterClass.QueryActivesResponse = unaryRpc(
      channel,
      QueryGrpc.getActivesMethod(),
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
    suspend fun voteTargets(request: QueryOuterClass.QueryVoteTargetsRequest):
        QueryOuterClass.QueryVoteTargetsResponse = unaryRpc(
      channel,
      QueryGrpc.getVoteTargetsMethod(),
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
    suspend fun feederDelegation(request: QueryOuterClass.QueryFeederDelegationRequest):
        QueryOuterClass.QueryFeederDelegationResponse = unaryRpc(
      channel,
      QueryGrpc.getFeederDelegationMethod(),
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
    suspend fun missCounter(request: QueryOuterClass.QueryMissCounterRequest):
        QueryOuterClass.QueryMissCounterResponse = unaryRpc(
      channel,
      QueryGrpc.getMissCounterMethod(),
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
    suspend fun aggregatePrevote(request: QueryOuterClass.QueryAggregatePrevoteRequest):
        QueryOuterClass.QueryAggregatePrevoteResponse = unaryRpc(
      channel,
      QueryGrpc.getAggregatePrevoteMethod(),
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
    suspend fun aggregatePrevotes(request: QueryOuterClass.QueryAggregatePrevotesRequest):
        QueryOuterClass.QueryAggregatePrevotesResponse = unaryRpc(
      channel,
      QueryGrpc.getAggregatePrevotesMethod(),
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
    suspend fun aggregateVote(request: QueryOuterClass.QueryAggregateVoteRequest):
        QueryOuterClass.QueryAggregateVoteResponse = unaryRpc(
      channel,
      QueryGrpc.getAggregateVoteMethod(),
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
    suspend fun aggregateVotes(request: QueryOuterClass.QueryAggregateVotesRequest):
        QueryOuterClass.QueryAggregateVotesResponse = unaryRpc(
      channel,
      QueryGrpc.getAggregateVotesMethod(),
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
   * Skeletal implementation of the terra.oracle.v1beta1.Query service based on Kotlin coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.ExchangeRate.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun exchangeRate(request: QueryOuterClass.QueryExchangeRateRequest):
        QueryOuterClass.QueryExchangeRateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.ExchangeRate is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.ExchangeRates.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun exchangeRates(request: QueryOuterClass.QueryExchangeRatesRequest):
        QueryOuterClass.QueryExchangeRatesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.ExchangeRates is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.TobinTax.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun tobinTax(request: QueryOuterClass.QueryTobinTaxRequest):
        QueryOuterClass.QueryTobinTaxResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.TobinTax is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.TobinTaxes.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun tobinTaxes(request: QueryOuterClass.QueryTobinTaxesRequest):
        QueryOuterClass.QueryTobinTaxesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.TobinTaxes is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.Actives.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun actives(request: QueryOuterClass.QueryActivesRequest):
        QueryOuterClass.QueryActivesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.Actives is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.VoteTargets.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun voteTargets(request: QueryOuterClass.QueryVoteTargetsRequest):
        QueryOuterClass.QueryVoteTargetsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.VoteTargets is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.FeederDelegation.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun feederDelegation(request: QueryOuterClass.QueryFeederDelegationRequest):
        QueryOuterClass.QueryFeederDelegationResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.FeederDelegation is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.MissCounter.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun missCounter(request: QueryOuterClass.QueryMissCounterRequest):
        QueryOuterClass.QueryMissCounterResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.MissCounter is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.AggregatePrevote.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregatePrevote(request: QueryOuterClass.QueryAggregatePrevoteRequest):
        QueryOuterClass.QueryAggregatePrevoteResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.AggregatePrevote is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.AggregatePrevotes.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregatePrevotes(request: QueryOuterClass.QueryAggregatePrevotesRequest):
        QueryOuterClass.QueryAggregatePrevotesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.AggregatePrevotes is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.AggregateVote.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregateVote(request: QueryOuterClass.QueryAggregateVoteRequest):
        QueryOuterClass.QueryAggregateVoteResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.AggregateVote is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.AggregateVotes.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun aggregateVotes(request: QueryOuterClass.QueryAggregateVotesRequest):
        QueryOuterClass.QueryAggregateVotesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.AggregateVotes is unimplemented"))

    /**
     * Returns the response to an RPC for terra.oracle.v1beta1.Query.Params.
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
        StatusException(UNIMPLEMENTED.withDescription("Method terra.oracle.v1beta1.Query.Params is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getExchangeRateMethod(),
      implementation = ::exchangeRate
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getExchangeRatesMethod(),
      implementation = ::exchangeRates
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTobinTaxMethod(),
      implementation = ::tobinTax
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTobinTaxesMethod(),
      implementation = ::tobinTaxes
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getActivesMethod(),
      implementation = ::actives
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getVoteTargetsMethod(),
      implementation = ::voteTargets
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getFeederDelegationMethod(),
      implementation = ::feederDelegation
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getMissCounterMethod(),
      implementation = ::missCounter
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAggregatePrevoteMethod(),
      implementation = ::aggregatePrevote
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAggregatePrevotesMethod(),
      implementation = ::aggregatePrevotes
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAggregateVoteMethod(),
      implementation = ::aggregateVote
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAggregateVotesMethod(),
      implementation = ::aggregateVotes
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
