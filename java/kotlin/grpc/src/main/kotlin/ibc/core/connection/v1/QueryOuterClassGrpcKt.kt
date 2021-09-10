package ibc.core.connection.v1

import ibc.core.connection.v1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.core.connection.v1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val connectionMethod: MethodDescriptor<QueryOuterClass.QueryConnectionRequest,
      QueryOuterClass.QueryConnectionResponse>
    @JvmStatic
    get() = QueryGrpc.getConnectionMethod()

  val connectionsMethod: MethodDescriptor<QueryOuterClass.QueryConnectionsRequest,
      QueryOuterClass.QueryConnectionsResponse>
    @JvmStatic
    get() = QueryGrpc.getConnectionsMethod()

  val clientConnectionsMethod: MethodDescriptor<QueryOuterClass.QueryClientConnectionsRequest,
      QueryOuterClass.QueryClientConnectionsResponse>
    @JvmStatic
    get() = QueryGrpc.getClientConnectionsMethod()

  val connectionClientStateMethod:
      MethodDescriptor<QueryOuterClass.QueryConnectionClientStateRequest,
      QueryOuterClass.QueryConnectionClientStateResponse>
    @JvmStatic
    get() = QueryGrpc.getConnectionClientStateMethod()

  val connectionConsensusStateMethod:
      MethodDescriptor<QueryOuterClass.QueryConnectionConsensusStateRequest,
      QueryOuterClass.QueryConnectionConsensusStateResponse>
    @JvmStatic
    get() = QueryGrpc.getConnectionConsensusStateMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.core.connection.v1.Query service as suspending coroutines.
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
    suspend fun connection(request: QueryOuterClass.QueryConnectionRequest):
        QueryOuterClass.QueryConnectionResponse = unaryRpc(
      channel,
      QueryGrpc.getConnectionMethod(),
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
    suspend fun connections(request: QueryOuterClass.QueryConnectionsRequest):
        QueryOuterClass.QueryConnectionsResponse = unaryRpc(
      channel,
      QueryGrpc.getConnectionsMethod(),
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
    suspend fun clientConnections(request: QueryOuterClass.QueryClientConnectionsRequest):
        QueryOuterClass.QueryClientConnectionsResponse = unaryRpc(
      channel,
      QueryGrpc.getClientConnectionsMethod(),
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
    suspend fun connectionClientState(request: QueryOuterClass.QueryConnectionClientStateRequest):
        QueryOuterClass.QueryConnectionClientStateResponse = unaryRpc(
      channel,
      QueryGrpc.getConnectionClientStateMethod(),
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
    suspend
        fun connectionConsensusState(request: QueryOuterClass.QueryConnectionConsensusStateRequest):
        QueryOuterClass.QueryConnectionConsensusStateResponse = unaryRpc(
      channel,
      QueryGrpc.getConnectionConsensusStateMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the ibc.core.connection.v1.Query service based on Kotlin coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Query.Connection.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun connection(request: QueryOuterClass.QueryConnectionRequest):
        QueryOuterClass.QueryConnectionResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Query.Connection is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Query.Connections.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun connections(request: QueryOuterClass.QueryConnectionsRequest):
        QueryOuterClass.QueryConnectionsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Query.Connections is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Query.ClientConnections.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun clientConnections(request: QueryOuterClass.QueryClientConnectionsRequest):
        QueryOuterClass.QueryClientConnectionsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Query.ClientConnections is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Query.ConnectionClientState.
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
        fun connectionClientState(request: QueryOuterClass.QueryConnectionClientStateRequest):
        QueryOuterClass.QueryConnectionClientStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Query.ConnectionClientState is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.core.connection.v1.Query.ConnectionConsensusState.
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
        fun connectionConsensusState(request: QueryOuterClass.QueryConnectionConsensusStateRequest):
        QueryOuterClass.QueryConnectionConsensusStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.core.connection.v1.Query.ConnectionConsensusState is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConnectionMethod(),
      implementation = ::connection
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConnectionsMethod(),
      implementation = ::connections
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getClientConnectionsMethod(),
      implementation = ::clientConnections
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConnectionClientStateMethod(),
      implementation = ::connectionClientState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getConnectionConsensusStateMethod(),
      implementation = ::connectionConsensusState
    )).build()
  }
}
