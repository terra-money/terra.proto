package terra.wasm.v1beta1

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
import terra.wasm.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.wasm.v1beta1.Query.
 */
object QueryGrpcKt {
  const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  val codeInfoMethod: MethodDescriptor<QueryOuterClass.QueryCodeInfoRequest,
      QueryOuterClass.QueryCodeInfoResponse>
    @JvmStatic
    get() = QueryGrpc.getCodeInfoMethod()

  val byteCodeMethod: MethodDescriptor<QueryOuterClass.QueryByteCodeRequest,
      QueryOuterClass.QueryByteCodeResponse>
    @JvmStatic
    get() = QueryGrpc.getByteCodeMethod()

  val contractInfoMethod: MethodDescriptor<QueryOuterClass.QueryContractInfoRequest,
      QueryOuterClass.QueryContractInfoResponse>
    @JvmStatic
    get() = QueryGrpc.getContractInfoMethod()

  val contractStoreMethod: MethodDescriptor<QueryOuterClass.QueryContractStoreRequest,
      QueryOuterClass.QueryContractStoreResponse>
    @JvmStatic
    get() = QueryGrpc.getContractStoreMethod()

  val rawStoreMethod: MethodDescriptor<QueryOuterClass.QueryRawStoreRequest,
      QueryOuterClass.QueryRawStoreResponse>
    @JvmStatic
    get() = QueryGrpc.getRawStoreMethod()

  val paramsMethod: MethodDescriptor<QueryOuterClass.QueryParamsRequest,
      QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.wasm.v1beta1.Query service as suspending coroutines.
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
    suspend fun codeInfo(request: QueryOuterClass.QueryCodeInfoRequest):
        QueryOuterClass.QueryCodeInfoResponse = unaryRpc(
      channel,
      QueryGrpc.getCodeInfoMethod(),
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
    suspend fun byteCode(request: QueryOuterClass.QueryByteCodeRequest):
        QueryOuterClass.QueryByteCodeResponse = unaryRpc(
      channel,
      QueryGrpc.getByteCodeMethod(),
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
    suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest):
        QueryOuterClass.QueryContractInfoResponse = unaryRpc(
      channel,
      QueryGrpc.getContractInfoMethod(),
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
    suspend fun contractStore(request: QueryOuterClass.QueryContractStoreRequest):
        QueryOuterClass.QueryContractStoreResponse = unaryRpc(
      channel,
      QueryGrpc.getContractStoreMethod(),
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
    suspend fun rawStore(request: QueryOuterClass.QueryRawStoreRequest):
        QueryOuterClass.QueryRawStoreResponse = unaryRpc(
      channel,
      QueryGrpc.getRawStoreMethod(),
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
   * Skeletal implementation of the terra.wasm.v1beta1.Query service based on Kotlin coroutines.
   */
  abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.CodeInfo.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun codeInfo(request: QueryOuterClass.QueryCodeInfoRequest):
        QueryOuterClass.QueryCodeInfoResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.CodeInfo is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ByteCode.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun byteCode(request: QueryOuterClass.QueryByteCodeRequest):
        QueryOuterClass.QueryByteCodeResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ByteCode is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ContractInfo.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest):
        QueryOuterClass.QueryContractInfoResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ContractInfo is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ContractStore.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun contractStore(request: QueryOuterClass.QueryContractStoreRequest):
        QueryOuterClass.QueryContractStoreResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ContractStore is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.RawStore.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun rawStore(request: QueryOuterClass.QueryRawStoreRequest):
        QueryOuterClass.QueryRawStoreResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.RawStore is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.Params.
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
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.Params is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getCodeInfoMethod(),
      implementation = ::codeInfo
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getByteCodeMethod(),
      implementation = ::byteCode
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractInfoMethod(),
      implementation = ::contractInfo
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractStoreMethod(),
      implementation = ::contractStore
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getRawStoreMethod(),
      implementation = ::rawStore
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
