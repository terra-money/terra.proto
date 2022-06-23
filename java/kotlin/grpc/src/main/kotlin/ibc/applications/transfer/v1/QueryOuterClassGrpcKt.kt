package ibc.applications.transfer.v1

import ibc.applications.transfer.v1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for ibc.applications.transfer.v1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val denomTraceMethod:
      MethodDescriptor<QueryOuterClass.QueryDenomTraceRequest, QueryOuterClass.QueryDenomTraceResponse>
    @JvmStatic
    get() = QueryGrpc.getDenomTraceMethod()

  public val denomTracesMethod:
      MethodDescriptor<QueryOuterClass.QueryDenomTracesRequest, QueryOuterClass.QueryDenomTracesResponse>
    @JvmStatic
    get() = QueryGrpc.getDenomTracesMethod()

  public val paramsMethod:
      MethodDescriptor<QueryOuterClass.QueryParamsRequest, QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  public val denomHashMethod:
      MethodDescriptor<QueryOuterClass.QueryDenomHashRequest, QueryOuterClass.QueryDenomHashResponse>
    @JvmStatic
    get() = QueryGrpc.getDenomHashMethod()

  /**
   * A stub for issuing RPCs to a(n) ibc.applications.transfer.v1.Query service as suspending
   * coroutines.
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
    public suspend fun denomTrace(request: QueryOuterClass.QueryDenomTraceRequest, headers: Metadata
        = Metadata()): QueryOuterClass.QueryDenomTraceResponse = unaryRpc(
      channel,
      QueryGrpc.getDenomTraceMethod(),
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
    public suspend fun denomTraces(request: QueryOuterClass.QueryDenomTracesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryDenomTracesResponse = unaryRpc(
      channel,
      QueryGrpc.getDenomTracesMethod(),
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
    public suspend fun params(request: QueryOuterClass.QueryParamsRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryParamsResponse = unaryRpc(
      channel,
      QueryGrpc.getParamsMethod(),
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
    public suspend fun denomHash(request: QueryOuterClass.QueryDenomHashRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryDenomHashResponse = unaryRpc(
      channel,
      QueryGrpc.getDenomHashMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the ibc.applications.transfer.v1.Query service based on Kotlin
   * coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for ibc.applications.transfer.v1.Query.DenomTrace.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun denomTrace(request: QueryOuterClass.QueryDenomTraceRequest):
        QueryOuterClass.QueryDenomTraceResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.transfer.v1.Query.DenomTrace is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.transfer.v1.Query.DenomTraces.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun denomTraces(request: QueryOuterClass.QueryDenomTracesRequest):
        QueryOuterClass.QueryDenomTracesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.transfer.v1.Query.DenomTraces is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.transfer.v1.Query.Params.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun params(request: QueryOuterClass.QueryParamsRequest):
        QueryOuterClass.QueryParamsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.transfer.v1.Query.Params is unimplemented"))

    /**
     * Returns the response to an RPC for ibc.applications.transfer.v1.Query.DenomHash.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun denomHash(request: QueryOuterClass.QueryDenomHashRequest):
        QueryOuterClass.QueryDenomHashResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method ibc.applications.transfer.v1.Query.DenomHash is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getDenomTraceMethod(),
      implementation = ::denomTrace
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getDenomTracesMethod(),
      implementation = ::denomTraces
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getDenomHashMethod(),
      implementation = ::denomHash
    )).build()
  }
}
