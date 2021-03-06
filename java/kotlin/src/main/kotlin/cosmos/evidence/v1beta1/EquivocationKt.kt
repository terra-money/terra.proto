//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/evidence/v1beta1/evidence.proto

package cosmos.evidence.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun equivocation(block: cosmos.evidence.v1beta1.EquivocationKt.Dsl.() -> Unit): cosmos.evidence.v1beta1.Evidence.Equivocation =
  cosmos.evidence.v1beta1.EquivocationKt.Dsl._create(cosmos.evidence.v1beta1.Evidence.Equivocation.newBuilder()).apply { block() }._build()
object EquivocationKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.evidence.v1beta1.Evidence.Equivocation.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.evidence.v1beta1.Evidence.Equivocation.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.evidence.v1beta1.Evidence.Equivocation = _builder.build()

    /**
     * <code>int64 height = 1;</code>
     */
    var height: kotlin.Long
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <code>int64 height = 1;</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }

    /**
     * <code>.google.protobuf.Timestamp time = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    var time: com.google.protobuf.Timestamp
      @JvmName("getTime")
      get() = _builder.getTime()
      @JvmName("setTime")
      set(value) {
        _builder.setTime(value)
      }
    /**
     * <code>.google.protobuf.Timestamp time = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    fun clearTime() {
      _builder.clearTime()
    }
    /**
     * <code>.google.protobuf.Timestamp time = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     * @return Whether the time field is set.
     */
    fun hasTime(): kotlin.Boolean {
      return _builder.hasTime()
    }

    /**
     * <code>int64 power = 3;</code>
     */
    var power: kotlin.Long
      @JvmName("getPower")
      get() = _builder.getPower()
      @JvmName("setPower")
      set(value) {
        _builder.setPower(value)
      }
    /**
     * <code>int64 power = 3;</code>
     */
    fun clearPower() {
      _builder.clearPower()
    }

    /**
     * <code>string consensus_address = 4 [(.gogoproto.moretags) = "yaml:&#92;"consensus_address&#92;""];</code>
     */
    var consensusAddress: kotlin.String
      @JvmName("getConsensusAddress")
      get() = _builder.getConsensusAddress()
      @JvmName("setConsensusAddress")
      set(value) {
        _builder.setConsensusAddress(value)
      }
    /**
     * <code>string consensus_address = 4 [(.gogoproto.moretags) = "yaml:&#92;"consensus_address&#92;""];</code>
     */
    fun clearConsensusAddress() {
      _builder.clearConsensusAddress()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.evidence.v1beta1.Evidence.Equivocation.copy(block: cosmos.evidence.v1beta1.EquivocationKt.Dsl.() -> Unit): cosmos.evidence.v1beta1.Evidence.Equivocation =
  cosmos.evidence.v1beta1.EquivocationKt.Dsl._create(this.toBuilder()).apply { block() }._build()
