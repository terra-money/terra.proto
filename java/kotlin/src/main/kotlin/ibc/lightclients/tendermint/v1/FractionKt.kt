//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/lightclients/tendermint/v1/tendermint.proto

package ibc.lightclients.tendermint.v1;

@kotlin.jvm.JvmSynthetic
inline fun fraction(block: ibc.lightclients.tendermint.v1.FractionKt.Dsl.() -> Unit): ibc.lightclients.tendermint.v1.Tendermint.Fraction =
  ibc.lightclients.tendermint.v1.FractionKt.Dsl._create(ibc.lightclients.tendermint.v1.Tendermint.Fraction.newBuilder()).apply { block() }._build()
object FractionKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.lightclients.tendermint.v1.Tendermint.Fraction.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.lightclients.tendermint.v1.Tendermint.Fraction.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.lightclients.tendermint.v1.Tendermint.Fraction = _builder.build()

    /**
     * <code>uint64 numerator = 1;</code>
     */
    var numerator: kotlin.Long
      @JvmName("getNumerator")
      get() = _builder.getNumerator()
      @JvmName("setNumerator")
      set(value) {
        _builder.setNumerator(value)
      }
    /**
     * <code>uint64 numerator = 1;</code>
     */
    fun clearNumerator() {
      _builder.clearNumerator()
    }

    /**
     * <code>uint64 denominator = 2;</code>
     */
    var denominator: kotlin.Long
      @JvmName("getDenominator")
      get() = _builder.getDenominator()
      @JvmName("setDenominator")
      set(value) {
        _builder.setDenominator(value)
      }
    /**
     * <code>uint64 denominator = 2;</code>
     */
    fun clearDenominator() {
      _builder.clearDenominator()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.lightclients.tendermint.v1.Tendermint.Fraction.copy(block: ibc.lightclients.tendermint.v1.FractionKt.Dsl.() -> Unit): ibc.lightclients.tendermint.v1.Tendermint.Fraction =
  ibc.lightclients.tendermint.v1.FractionKt.Dsl._create(this.toBuilder()).apply { block() }._build()
