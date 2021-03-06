//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/types/params.proto

package tendermint.types;

@kotlin.jvm.JvmSynthetic
inline fun hashedParams(block: tendermint.types.HashedParamsKt.Dsl.() -> Unit): tendermint.types.Params.HashedParams =
  tendermint.types.HashedParamsKt.Dsl._create(tendermint.types.Params.HashedParams.newBuilder()).apply { block() }._build()
object HashedParamsKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.types.Params.HashedParams.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.types.Params.HashedParams.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.types.Params.HashedParams = _builder.build()

    /**
     * <code>int64 block_max_bytes = 1;</code>
     */
    var blockMaxBytes: kotlin.Long
      @JvmName("getBlockMaxBytes")
      get() = _builder.getBlockMaxBytes()
      @JvmName("setBlockMaxBytes")
      set(value) {
        _builder.setBlockMaxBytes(value)
      }
    /**
     * <code>int64 block_max_bytes = 1;</code>
     */
    fun clearBlockMaxBytes() {
      _builder.clearBlockMaxBytes()
    }

    /**
     * <code>int64 block_max_gas = 2;</code>
     */
    var blockMaxGas: kotlin.Long
      @JvmName("getBlockMaxGas")
      get() = _builder.getBlockMaxGas()
      @JvmName("setBlockMaxGas")
      set(value) {
        _builder.setBlockMaxGas(value)
      }
    /**
     * <code>int64 block_max_gas = 2;</code>
     */
    fun clearBlockMaxGas() {
      _builder.clearBlockMaxGas()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.types.Params.HashedParams.copy(block: tendermint.types.HashedParamsKt.Dsl.() -> Unit): tendermint.types.Params.HashedParams =
  tendermint.types.HashedParamsKt.Dsl._create(this.toBuilder()).apply { block() }._build()
