//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/wasm/v1beta1/query.proto

package terra.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryContractInfoResponse(block: terra.wasm.v1beta1.QueryContractInfoResponseKt.Dsl.() -> Unit): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse =
  terra.wasm.v1beta1.QueryContractInfoResponseKt.Dsl._create(terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.newBuilder()).apply { block() }._build()
object QueryContractInfoResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse = _builder.build()

    /**
     * <code>.terra.wasm.v1beta1.ContractInfo contract_info = 1 [(.gogoproto.nullable) = false];</code>
     */
    var contractInfo: terra.wasm.v1beta1.Wasm.ContractInfo
      @JvmName("getContractInfo")
      get() = _builder.getContractInfo()
      @JvmName("setContractInfo")
      set(value) {
        _builder.setContractInfo(value)
      }
    /**
     * <code>.terra.wasm.v1beta1.ContractInfo contract_info = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearContractInfo() {
      _builder.clearContractInfo()
    }
    /**
     * <code>.terra.wasm.v1beta1.ContractInfo contract_info = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the contractInfo field is set.
     */
    fun hasContractInfo(): kotlin.Boolean {
      return _builder.hasContractInfo()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse.copy(block: terra.wasm.v1beta1.QueryContractInfoResponseKt.Dsl.() -> Unit): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoResponse =
  terra.wasm.v1beta1.QueryContractInfoResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
