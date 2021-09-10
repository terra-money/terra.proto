//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/slashing/v1beta1/genesis.proto

package cosmos.slashing.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun missedBlock(block: cosmos.slashing.v1beta1.MissedBlockKt.Dsl.() -> Unit): cosmos.slashing.v1beta1.Genesis.MissedBlock =
  cosmos.slashing.v1beta1.MissedBlockKt.Dsl._create(cosmos.slashing.v1beta1.Genesis.MissedBlock.newBuilder()).apply { block() }._build()
object MissedBlockKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.slashing.v1beta1.Genesis.MissedBlock.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.slashing.v1beta1.Genesis.MissedBlock.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.slashing.v1beta1.Genesis.MissedBlock = _builder.build()

    /**
     * <pre>
     * index is the height at which the block was missed.
     * </pre>
     *
     * <code>int64 index = 1;</code>
     */
    var index: kotlin.Long
      @JvmName("getIndex")
      get() = _builder.getIndex()
      @JvmName("setIndex")
      set(value) {
        _builder.setIndex(value)
      }
    /**
     * <pre>
     * index is the height at which the block was missed.
     * </pre>
     *
     * <code>int64 index = 1;</code>
     */
    fun clearIndex() {
      _builder.clearIndex()
    }

    /**
     * <pre>
     * missed is the missed status.
     * </pre>
     *
     * <code>bool missed = 2;</code>
     */
    var missed: kotlin.Boolean
      @JvmName("getMissed")
      get() = _builder.getMissed()
      @JvmName("setMissed")
      set(value) {
        _builder.setMissed(value)
      }
    /**
     * <pre>
     * missed is the missed status.
     * </pre>
     *
     * <code>bool missed = 2;</code>
     */
    fun clearMissed() {
      _builder.clearMissed()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.slashing.v1beta1.Genesis.MissedBlock.copy(block: cosmos.slashing.v1beta1.MissedBlockKt.Dsl.() -> Unit): cosmos.slashing.v1beta1.Genesis.MissedBlock =
  cosmos.slashing.v1beta1.MissedBlockKt.Dsl._create(this.toBuilder()).apply { block() }._build()
