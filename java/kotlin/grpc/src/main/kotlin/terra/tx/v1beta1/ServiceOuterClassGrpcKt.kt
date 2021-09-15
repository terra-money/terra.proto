package terra.tx.v1beta1

import io.grpc.CallOptions
import io.grpc.CallOptions.DEFAULT
import io.grpc.Channel
import io.grpc.Metadata
import io.grpc.MethodDescriptor
import io.grpc.ServerServiceDefinition
import io.grpc.ServerServiceDefinition.builder
import io.grpc.ServiceDescriptor
import io.grpc.Status.UNIMPLEMENTED
import io.grpc.StatusException
import io.grpc.kotlin.AbstractCoroutineServerImpl
import io.grpc.kotlin.AbstractCoroutineStub
import io.grpc.kotlin.ClientCalls.unaryRpc
import io.grpc.kotlin.ServerCalls.unaryServerMethodDefinition
import io.grpc.kotlin.StubFor
import kotlin.String
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import terra.tx.v1beta1.ServiceGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.tx.v1beta1.Service.
 */
object ServiceGrpcKt {
  const val SERVICE_NAME: String = ServiceGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = ServiceGrpc.getServiceDescriptor()

  val computeTaxMethod: MethodDescriptor<ServiceOuterClass.ComputeTaxRequest,
      ServiceOuterClass.ComputeTaxResponse>
    @JvmStatic
    get() = ServiceGrpc.getComputeTaxMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.tx.v1beta1.Service service as suspending coroutines.
   */
  @StubFor(ServiceGrpc::class)
  class ServiceCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT
  ) : AbstractCoroutineStub<ServiceCoroutineStub>(channel, callOptions) {
    override fun build(channel: Channel, callOptions: CallOptions): ServiceCoroutineStub =
        ServiceCoroutineStub(channel, callOptions)

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][io.grpc.Status].  If the RPC completes with another status, a
     * corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun computeTax(request: ServiceOuterClass.ComputeTaxRequest):
        ServiceOuterClass.ComputeTaxResponse = unaryRpc(
      channel,
      ServiceGrpc.getComputeTaxMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the terra.tx.v1beta1.Service service based on Kotlin coroutines.
   */
  abstract class ServiceCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.tx.v1beta1.Service.ComputeTax.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [io.grpc.Status].  If this method fails with a [java.util.concurrent.CancellationException],
     * the RPC will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun computeTax(request: ServiceOuterClass.ComputeTaxRequest):
        ServiceOuterClass.ComputeTaxResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.tx.v1beta1.Service.ComputeTax is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = ServiceGrpc.getComputeTaxMethod(),
      implementation = ::computeTax
    )).build()
  }
}
