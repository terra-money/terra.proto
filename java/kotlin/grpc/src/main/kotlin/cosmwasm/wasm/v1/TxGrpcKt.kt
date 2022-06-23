package cosmwasm.wasm.v1

import cosmwasm.wasm.v1.MsgGrpc.getServiceDescriptor
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
 * Holder for Kotlin coroutine-based client and server APIs for cosmwasm.wasm.v1.Msg.
 */
public object MsgGrpcKt {
  public const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  public val storeCodeMethod: MethodDescriptor<Tx.MsgStoreCode, Tx.MsgStoreCodeResponse>
    @JvmStatic
    get() = MsgGrpc.getStoreCodeMethod()

  public val instantiateContractMethod:
      MethodDescriptor<Tx.MsgInstantiateContract, Tx.MsgInstantiateContractResponse>
    @JvmStatic
    get() = MsgGrpc.getInstantiateContractMethod()

  public val executeContractMethod:
      MethodDescriptor<Tx.MsgExecuteContract, Tx.MsgExecuteContractResponse>
    @JvmStatic
    get() = MsgGrpc.getExecuteContractMethod()

  public val migrateContractMethod:
      MethodDescriptor<Tx.MsgMigrateContract, Tx.MsgMigrateContractResponse>
    @JvmStatic
    get() = MsgGrpc.getMigrateContractMethod()

  public val updateAdminMethod: MethodDescriptor<Tx.MsgUpdateAdmin, Tx.MsgUpdateAdminResponse>
    @JvmStatic
    get() = MsgGrpc.getUpdateAdminMethod()

  public val clearAdminMethod: MethodDescriptor<Tx.MsgClearAdmin, Tx.MsgClearAdminResponse>
    @JvmStatic
    get() = MsgGrpc.getClearAdminMethod()

  /**
   * A stub for issuing RPCs to a(n) cosmwasm.wasm.v1.Msg service as suspending coroutines.
   */
  @StubFor(MsgGrpc::class)
  public class MsgCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT,
  ) : AbstractCoroutineStub<MsgCoroutineStub>(channel, callOptions) {
    public override fun build(channel: Channel, callOptions: CallOptions): MsgCoroutineStub =
        MsgCoroutineStub(channel, callOptions)

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
    public suspend fun storeCode(request: Tx.MsgStoreCode, headers: Metadata = Metadata()):
        Tx.MsgStoreCodeResponse = unaryRpc(
      channel,
      MsgGrpc.getStoreCodeMethod(),
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
    public suspend fun instantiateContract(request: Tx.MsgInstantiateContract, headers: Metadata =
        Metadata()): Tx.MsgInstantiateContractResponse = unaryRpc(
      channel,
      MsgGrpc.getInstantiateContractMethod(),
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
    public suspend fun executeContract(request: Tx.MsgExecuteContract, headers: Metadata =
        Metadata()): Tx.MsgExecuteContractResponse = unaryRpc(
      channel,
      MsgGrpc.getExecuteContractMethod(),
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
    public suspend fun migrateContract(request: Tx.MsgMigrateContract, headers: Metadata =
        Metadata()): Tx.MsgMigrateContractResponse = unaryRpc(
      channel,
      MsgGrpc.getMigrateContractMethod(),
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
    public suspend fun updateAdmin(request: Tx.MsgUpdateAdmin, headers: Metadata = Metadata()):
        Tx.MsgUpdateAdminResponse = unaryRpc(
      channel,
      MsgGrpc.getUpdateAdminMethod(),
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
    public suspend fun clearAdmin(request: Tx.MsgClearAdmin, headers: Metadata = Metadata()):
        Tx.MsgClearAdminResponse = unaryRpc(
      channel,
      MsgGrpc.getClearAdminMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the cosmwasm.wasm.v1.Msg service based on Kotlin coroutines.
   */
  public abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.StoreCode.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun storeCode(request: Tx.MsgStoreCode): Tx.MsgStoreCodeResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.StoreCode is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.InstantiateContract.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun instantiateContract(request: Tx.MsgInstantiateContract):
        Tx.MsgInstantiateContractResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.InstantiateContract is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.ExecuteContract.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun executeContract(request: Tx.MsgExecuteContract):
        Tx.MsgExecuteContractResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.ExecuteContract is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.MigrateContract.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun migrateContract(request: Tx.MsgMigrateContract):
        Tx.MsgMigrateContractResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.MigrateContract is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.UpdateAdmin.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun updateAdmin(request: Tx.MsgUpdateAdmin): Tx.MsgUpdateAdminResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.UpdateAdmin is unimplemented"))

    /**
     * Returns the response to an RPC for cosmwasm.wasm.v1.Msg.ClearAdmin.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun clearAdmin(request: Tx.MsgClearAdmin): Tx.MsgClearAdminResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method cosmwasm.wasm.v1.Msg.ClearAdmin is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getStoreCodeMethod(),
      implementation = ::storeCode
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getInstantiateContractMethod(),
      implementation = ::instantiateContract
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getExecuteContractMethod(),
      implementation = ::executeContract
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getMigrateContractMethod(),
      implementation = ::migrateContract
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getUpdateAdminMethod(),
      implementation = ::updateAdmin
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getClearAdminMethod(),
      implementation = ::clearAdmin
    )).build()
  }
}
