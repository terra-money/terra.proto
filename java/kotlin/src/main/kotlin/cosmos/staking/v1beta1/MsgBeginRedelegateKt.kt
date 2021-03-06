//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/tx.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgBeginRedelegate(block: cosmos.staking.v1beta1.MsgBeginRedelegateKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Tx.MsgBeginRedelegate =
  cosmos.staking.v1beta1.MsgBeginRedelegateKt.Dsl._create(cosmos.staking.v1beta1.Tx.MsgBeginRedelegate.newBuilder()).apply { block() }._build()
object MsgBeginRedelegateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Tx.MsgBeginRedelegate.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Tx.MsgBeginRedelegate.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Tx.MsgBeginRedelegate = _builder.build()

    /**
     * <code>string delegator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"delegator_address&#92;""];</code>
     */
    var delegatorAddress: kotlin.String
      @JvmName("getDelegatorAddress")
      get() = _builder.getDelegatorAddress()
      @JvmName("setDelegatorAddress")
      set(value) {
        _builder.setDelegatorAddress(value)
      }
    /**
     * <code>string delegator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"delegator_address&#92;""];</code>
     */
    fun clearDelegatorAddress() {
      _builder.clearDelegatorAddress()
    }

    /**
     * <code>string validator_src_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"validator_src_address&#92;""];</code>
     */
    var validatorSrcAddress: kotlin.String
      @JvmName("getValidatorSrcAddress")
      get() = _builder.getValidatorSrcAddress()
      @JvmName("setValidatorSrcAddress")
      set(value) {
        _builder.setValidatorSrcAddress(value)
      }
    /**
     * <code>string validator_src_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"validator_src_address&#92;""];</code>
     */
    fun clearValidatorSrcAddress() {
      _builder.clearValidatorSrcAddress()
    }

    /**
     * <code>string validator_dst_address = 3 [(.gogoproto.moretags) = "yaml:&#92;"validator_dst_address&#92;""];</code>
     */
    var validatorDstAddress: kotlin.String
      @JvmName("getValidatorDstAddress")
      get() = _builder.getValidatorDstAddress()
      @JvmName("setValidatorDstAddress")
      set(value) {
        _builder.setValidatorDstAddress(value)
      }
    /**
     * <code>string validator_dst_address = 3 [(.gogoproto.moretags) = "yaml:&#92;"validator_dst_address&#92;""];</code>
     */
    fun clearValidatorDstAddress() {
      _builder.clearValidatorDstAddress()
    }

    /**
     * <code>.cosmos.base.v1beta1.Coin amount = 4 [(.gogoproto.nullable) = false];</code>
     */
    var amount: cosmos.base.v1beta1.CoinOuterClass.Coin
      @JvmName("getAmount")
      get() = _builder.getAmount()
      @JvmName("setAmount")
      set(value) {
        _builder.setAmount(value)
      }
    /**
     * <code>.cosmos.base.v1beta1.Coin amount = 4 [(.gogoproto.nullable) = false];</code>
     */
    fun clearAmount() {
      _builder.clearAmount()
    }
    /**
     * <code>.cosmos.base.v1beta1.Coin amount = 4 [(.gogoproto.nullable) = false];</code>
     * @return Whether the amount field is set.
     */
    fun hasAmount(): kotlin.Boolean {
      return _builder.hasAmount()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Tx.MsgBeginRedelegate.copy(block: cosmos.staking.v1beta1.MsgBeginRedelegateKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Tx.MsgBeginRedelegate =
  cosmos.staking.v1beta1.MsgBeginRedelegateKt.Dsl._create(this.toBuilder()).apply { block() }._build()
