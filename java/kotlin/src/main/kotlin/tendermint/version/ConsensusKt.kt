//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/version/types.proto

package tendermint.version;

@kotlin.jvm.JvmSynthetic
inline fun consensus(block: tendermint.version.ConsensusKt.Dsl.() -> Unit): tendermint.version.Types.Consensus =
  tendermint.version.ConsensusKt.Dsl._create(tendermint.version.Types.Consensus.newBuilder()).apply { block() }._build()
object ConsensusKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.version.Types.Consensus.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.version.Types.Consensus.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.version.Types.Consensus = _builder.build()

    /**
     * <code>uint64 block = 1;</code>
     */
    var block: kotlin.Long
      @JvmName("getBlock")
      get() = _builder.getBlock()
      @JvmName("setBlock")
      set(value) {
        _builder.setBlock(value)
      }
    /**
     * <code>uint64 block = 1;</code>
     */
    fun clearBlock() {
      _builder.clearBlock()
    }

    /**
     * <code>uint64 app = 2;</code>
     */
    var app: kotlin.Long
      @JvmName("getApp")
      get() = _builder.getApp()
      @JvmName("setApp")
      set(value) {
        _builder.setApp(value)
      }
    /**
     * <code>uint64 app = 2;</code>
     */
    fun clearApp() {
      _builder.clearApp()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.version.Types.Consensus.copy(block: tendermint.version.ConsensusKt.Dsl.() -> Unit): tendermint.version.Types.Consensus =
  tendermint.version.ConsensusKt.Dsl._create(this.toBuilder()).apply { block() }._build()
