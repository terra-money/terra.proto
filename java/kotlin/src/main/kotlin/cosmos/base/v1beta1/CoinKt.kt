//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/v1beta1/coin.proto

package cosmos.base.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun coin(block: cosmos.base.v1beta1.CoinKt.Dsl.() -> Unit): cosmos.base.v1beta1.CoinOuterClass.Coin =
  cosmos.base.v1beta1.CoinKt.Dsl._create(cosmos.base.v1beta1.CoinOuterClass.Coin.newBuilder()).apply { block() }._build()
object CoinKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.base.v1beta1.CoinOuterClass.Coin.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.v1beta1.CoinOuterClass.Coin.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.v1beta1.CoinOuterClass.Coin = _builder.build()

    /**
     * <code>string denom = 1;</code>
     */
    var denom: kotlin.String
      @JvmName("getDenom")
      get() = _builder.getDenom()
      @JvmName("setDenom")
      set(value) {
        _builder.setDenom(value)
      }
    /**
     * <code>string denom = 1;</code>
     */
    fun clearDenom() {
      _builder.clearDenom()
    }

    /**
     * <code>string amount = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "Int"];</code>
     */
    var amount: kotlin.String
      @JvmName("getAmount")
      get() = _builder.getAmount()
      @JvmName("setAmount")
      set(value) {
        _builder.setAmount(value)
      }
    /**
     * <code>string amount = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "Int"];</code>
     */
    fun clearAmount() {
      _builder.clearAmount()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.base.v1beta1.CoinOuterClass.Coin.copy(block: cosmos.base.v1beta1.CoinKt.Dsl.() -> Unit): cosmos.base.v1beta1.CoinOuterClass.Coin =
  cosmos.base.v1beta1.CoinKt.Dsl._create(this.toBuilder()).apply { block() }._build()
