package cosmwasm.wasm.v1

import cosmwasm.wasm.v1.QueryGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for cosmwasm.wasm.v1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val contractInfoMethod:
      MethodDescriptor<QueryOuterClass.QueryContractInfoRequest, QueryOuterClass.QueryContractInfoResponse>
    @JvmStatic
    get() = QueryGrpc.getContractInfoMethod()

  public val contractHistoryMethod:
      MethodDescriptor<QueryOuterClass.QueryContractHistoryRequest, QueryOuterClass.QueryContractHistoryResponse>
    @JvmStatic
    get() = QueryGrpc.getContractHistoryMethod()

  public val contractsByCodeMethod:
      MethodDescriptor<QueryOuterClass.QueryContractsByCodeRequest, QueryOuterClass.QueryContractsByCodeResponse>
    @JvmStatic
    get() = QueryGrpc.getContractsByCodeMethod()

  public val allContractStateMethod:
      MethodDescriptor<QueryOuterClass.QueryAllContractStateRequest, QueryOuterClass.QueryAllContractStateResponse>
    @JvmStatic
    get() = QueryGrpc.getAllContractStateMethod()

  public val rawContractStateMethod:
      MethodDescriptor<QueryOuterClass.QueryRawContractStateRequest, QueryOuterClass.QueryRawContractStateResponse>
    @JvmStatic
    get() = QueryGrpc.getRawContractStateMethod()

  public val smartContractStateMethod:
      MethodDescriptor<QueryOuterClass.QuerySmartContractStateRequest, QueryOuterClass.QuerySmartContractStateResponse>
    @JvmStatic
    get() = QueryGrpc.getSmartContractStateMethod()

  public val codeMethod:
      MethodDescriptor<QueryOuterClass.QueryCodeRequest, QueryOuterClass.QueryCodeResponse>
    @JvmStatic
    get() = QueryGrpc.getCodeMethod()

  public val codesMethod:
      MethodDescriptor<QueryOuterClass.QueryCodesRequest, QueryOuterClass.QueryCodesResponse>
    @JvmStatic
    get() = QueryGrpc.getCodesMethod()

  public val pinnedCodesMethod:
      MethodDescriptor<QueryOuterClass.QueryPinnedCodesRequest, QueryOuterClass.QueryPinnedCodesResponse>
    @JvmStatic
    get() = QueryGrpc.getPinnedCodesMethod()

  /**
   * A stub for issuing RPCs to a(n) cosmwasm.wasm.v1.Query service as suspending coroutines.
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
    public suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryContractInfoResponse = unaryRpc(
      channel,
      QueryGrpc.getContractInfoMethod(),
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
    public suspend fun contractHistory(request: QueryOuterClass.QueryContractHistoryRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryContractHistoryResponse = unaryRpc(
      channel,
      QueryGrpc.getContractHistoryMethod(),
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
    public suspend fun contractsByCode(request: QueryOuterClass.QueryContractsByCodeRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryContractsByCodeResponse = unaryRpc(
      channel,
      QueryGrpc.getContractsByCodeMethod(),
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
    public suspend fun allContractState(request: QueryOuterClass.QueryAllContractStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryAllContractStateResponse = unaryRpc(
      channel,
      QueryGrpc.getAllContractStateMethod(),
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
    public suspend fun rawContractState(request: QueryOuterClass.QueryRawContractStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryRawContractStateResponse = unaryRpc(
      channel,
      QueryGrpc.getRawContractStateMethod(),
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
    public suspend fun smartContractState(request: QueryOuterClass.QuerySmartContractStateRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QuerySmartContractStateResponse = unaryRpc(
      channel,
      QueryGrpc.getSmartContractStateMethod(),
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
    public suspend fun code(request: QueryOuterClass.QueryCodeRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryCodeResponse = unaryRpc(
      channel,
      QueryGrpc.getCodeMethod(),
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
    public suspend fun codes(request: QueryOuterClass.QueryCodesRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryCodesResponse = unaryRpc(
      channel,
      QueryGrpc.getCodesMethod(),
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
    public suspend fun pinnedCodes(request: QueryOuterClass.QueryPinnedCodesRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryPinnedCodesResponse = unaryRpc(
      channel,
      QueryGrpc.getPinnedCodesMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the cosmwasm.wasm.v1.Query service based on Kotlin coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.ContractInfo.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest):
        QueryOuterClass.QueryContractInfoResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.ContractInfo is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.ContractHistory.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun contractHistory(request: QueryOuterClass.QueryContractHistoryRequest):
        QueryOuterClass.QueryContractHistoryResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.ContractHistory is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.ContractsByCode.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun contractsByCode(request: QueryOuterClass.QueryContractsByCodeRequest):
        QueryOuterClass.QueryContractsByCodeResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.ContractsByCode is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.AllContractState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun allContractState(request: QueryOuterClass.QueryAllContractStateRequest):
        QueryOuterClass.QueryAllContractStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.AllContractState is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.RawContractState.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun rawContractState(request: QueryOuterClass.QueryRawContractStateRequest):
        QueryOuterClass.QueryRawContractStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.RawContractState is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.SmartContractState.
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
        fun smartContractState(request: QueryOuterClass.QuerySmartContractStateRequest):
        QueryOuterClass.QuerySmartContractStateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.SmartContractState is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.Code.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun code(request: QueryOuterClass.QueryCodeRequest):
        QueryOuterClass.QueryCodeResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.Code is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.Codes.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun codes(request: QueryOuterClass.QueryCodesRequest):
        QueryOuterClass.QueryCodesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.Codes is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Query.PinnedCodes.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun pinnedCodes(request: QueryOuterClass.QueryPinnedCodesRequest):
        QueryOuterClass.QueryPinnedCodesResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Query.PinnedCodes is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractInfoMethod(),
      implementation = ::contractInfo
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractHistoryMethod(),
      implementation = ::contractHistory
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractsByCodeMethod(),
      implementation = ::contractsByCode
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getAllContractStateMethod(),
      implementation = ::allContractState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getRawContractStateMethod(),
      implementation = ::rawContractState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getSmartContractStateMethod(),
      implementation = ::smartContractState
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getCodeMethod(),
      implementation = ::code
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getCodesMethod(),
      implementation = ::codes
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getPinnedCodesMethod(),
      implementation = ::pinnedCodes
    )).build()
  }
}
