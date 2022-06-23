package ibc.core.client.v1

import ibc.core.client.v1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.client.v1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val clientStateMethod:
      MethodDescriptor<QueryOuterClass.QueryClientStateRequest, QueryOuterClass.QueryClientStateResponse>
    @JvmStatic
    get() = QueryGrpc.getClientStateMethod()

  public val clientStatesMethod:
      MethodDescriptor<QueryOuterClass.QueryClientStatesRequest, QueryOuterClass.QueryClientStatesResponse>
    @JvmStatic
    get() = QueryGrpc.getClientStatesMethod()

  public val consensusStateMethod:
      MethodDescriptor<QueryOuterClass.QueryConsensusStateRequest, QueryOuterClass.QueryConsensusStateResponse>
    @JvmStatic
    get() = QueryGrpc.getConsensusStateMethod()

  public val consensusStatesMethod:
      MethodDescriptor<QueryOuterClass.QueryConsensusStatesRequest, QueryOuterClass.QueryConsensusStatesResponse>
    @JvmStatic
    get() = QueryGrpc.getConsensusStatesMethod()

  public val clientStatusMethod:
      MethodDescriptor<QueryOuterClass.QueryClientStatusRequest, QueryOuterClass.QueryClientStatusResponse>
    @JvmStatic
    get() = QueryGrpc.getClientStatusMethod()

  public val clientParamsMethod:
      MethodDescriptor<QueryOuterClass.QueryClientParamsRequest, QueryOuterClass.QueryClientParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getClientParamsMethod()

  public val upgradedClientStateMethod:
      MethodDescriptor<QueryOuterClass.QueryUpgradedClientStateRequest, QueryOuterClass.QueryUpgradedClientStateResponse>
    @JvmStatic
    get() = QueryGrpc.getUpgradedClientStateMethod()

  public val upgradedConsensusStateMethod:
      MethodDescriptor<QueryOuterClass.QueryUpgradedConsensusStateRequest, QueryOuterClass.QueryUpgradedConsensusStateResponse>
    @JvmStatic
    get() = QueryGrpc.getUpgradedConsensusStateMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.client.v1.Query service as suspending coroutines.
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
    public suspend fun clientState(request: QueryOuterClass.QueryClientStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryClientStateResponse = unaryRpc(
      channel,
      QueryGrpc.getClientStateMethod(),
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
    public suspend fun clientStates(request: QueryOuterClass.QueryClientStatesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryClientStatesResponse = unaryRpc(
      channel,
      QueryGrpc.getClientStatesMethod(),
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
    public suspend fun consensusState(request: QueryOuterClass.QueryConsensusStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryConsensusStateResponse = unaryRpc(
      channel,
      QueryGrpc.getConsensusStateMethod(),
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
    public suspend fun consensusStates(request: QueryOuterClass.QueryConsensusStatesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryConsensusStatesResponse = unaryRpc(
      channel,
      QueryGrpc.getConsensusStatesMethod(),
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
    public suspend fun clientStatus(request: QueryOuterClass.QueryClientStatusRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryClientStatusResponse = unaryRpc(
      channel,
      QueryGrpc.getClientStatusMethod(),
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
    public suspend fun clientParams(request: QueryOuterClass.QueryClientParamsRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryClientParamsResponse = unaryRpc(
      channel,
      QueryGrpc.getClientParamsMethod(),
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
    public suspend fun upgradedClientState(request: QueryOuterClass.QueryUpgradedClientStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryUpgradedClientStateResponse =
        unaryRpc(
      channel,
      QueryGrpc.getUpgradedClientStateMethod(),
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
        fun upgradedConsensusState(request: QueryOuterClass.QueryUpgradedConsensusStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryUpgradedConsensusStateResponse =
        unaryRpc(
      channel,
      QueryGrpc.getUpgradedConsensusStateMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the ibc.core.client.v1.Query service based on Kotlin coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ClientState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun clientState(request: QueryOuterClass.QueryClientStateRequest):
        QueryOuterClass.QueryClientStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ClientState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ClientStates.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun clientStates(request: QueryOuterClass.QueryClientStatesRequest):
        QueryOuterClass.QueryClientStatesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ClientStates is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ConsensusState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun consensusState(request: QueryOuterClass.QueryConsensusStateRequest):
        QueryOuterClass.QueryConsensusStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ConsensusState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ConsensusStates.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun consensusStates(request: QueryOuterClass.QueryConsensusStatesRequest):
        QueryOuterClass.QueryConsensusStatesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ConsensusStates is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ClientStatus.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun clientStatus(request: QueryOuterClass.QueryClientStatusRequest):
        QueryOuterClass.QueryClientStatusResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ClientStatus is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.ClientParams.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun clientParams(request: QueryOuterClass.QueryClientParamsRequest):
        QueryOuterClass.QueryClientParamsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.ClientParams is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.UpgradedClientState.
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
        fun upgradedClientState(request: QueryOuterClass.QueryUpgradedClientStateRequest):
        QueryOuterClass.QueryUpgradedClientStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.UpgradedClientState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.client.v1.Query.UpgradedConsensusState.
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
        fun upgradedConsensusState(request: QueryOuterClass.QueryUpgradedConsensusStateRequest):
        QueryOuterClass.QueryUpgradedConsensusStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.client.v1.Query.UpgradedConsensusState is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getClientStateMethod(),
      implementation = ::clientState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getClientStatesMethod(),
      implementation = ::clientStates
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConsensusStateMethod(),
      implementation = ::consensusState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConsensusStatesMethod(),
      implementation = ::consensusStates
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getClientStatusMethod(),
      implementation = ::clientStatus
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getClientParamsMethod(),
      implementation = ::clientParams
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getUpgradedClientStateMethod(),
      implementation = ::upgradedClientState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getUpgradedConsensusStateMethod(),
      implementation = ::upgradedConsensusState
    )).build()
  }
}
