package cosmos.feegrant.v1beta1

import cosmos.feegrant.v1beta1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for cosmos.feegrant.v1beta1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val allowanceMethod: MethodDescriptor<QueryOuterClass.QueryAllowanceRequest,
      QueryOuterClass.QueryAllowanceResponse>
    @JvmStatic
    get() = QueryGrpc.getAllowanceMethod()

  val allowancesMethod: MethodDescriptor<QueryOuterClass.QueryAllowancesRequest,
      QueryOuterClass.QueryAllowancesResponse>
    @JvmStatic
    get() = QueryGrpc.getAllowancesMethod()

  /**
   * A stub for issuing RPCs to a(n) cosmos.feegrant.v1beta1.Query service as suspending coroutines.
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
    suspend fun allowance(request: QueryOuterClass.QueryAllowanceRequest):
        QueryOuterClass.QueryAllowanceResponse = unaryRpc(
      channel,
      QueryGrpc.getAllowanceMethod(),
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
    suspend fun allowances(request: QueryOuterClass.QueryAllowancesRequest):
        QueryOuterClass.QueryAllowancesResponse = unaryRpc(
      channel,
      QueryGrpc.getAllowancesMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the cosmos.feegrant.v1beta1.Query service based on Kotlin
   * coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for cosmos.feegrant.v1beta1.Query.Allowance.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun allowance(request: QueryOuterClass.QueryAllowanceRequest):
        QueryOuterClass.QueryAllowanceResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmos.feegrant.v1beta1.Query.Allowance is unimplemented"))

    /**
     * Returns the response to an RPC for cosmos.feegrant.v1beta1.Query.Allowances.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun allowances(request: QueryOuterClass.QueryAllowancesRequest):
        QueryOuterClass.QueryAllowancesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmos.feegrant.v1beta1.Query.Allowances is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAllowanceMethod(),
      implementation = ::allowance
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAllowancesMethod(),
      implementation = ::allowances
    )).build()
  }
}
