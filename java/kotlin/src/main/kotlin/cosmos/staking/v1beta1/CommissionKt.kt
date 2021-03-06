//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/staking.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun commission(block: cosmos.staking.v1beta1.CommissionKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.Commission =
  cosmos.staking.v1beta1.CommissionKt.Dsl._create(cosmos.staking.v1beta1.Staking.Commission.newBuilder()).apply { block() }._build()
object CommissionKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Staking.Commission.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Staking.Commission.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Staking.Commission = _builder.build()

    /**
     * <pre>
     * commission_rates defines the initial commission rates to be used for creating a validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.CommissionRates commission_rates = 1 [(.gogoproto.nullable) = false, (.gogoproto.embed) = true];</code>
     */
    var commissionRates: cosmos.staking.v1beta1.Staking.CommissionRates
      @JvmName("getCommissionRates")
      get() = _builder.getCommissionRates()
      @JvmName("setCommissionRates")
      set(value) {
        _builder.setCommissionRates(value)
      }
    /**
     * <pre>
     * commission_rates defines the initial commission rates to be used for creating a validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.CommissionRates commission_rates = 1 [(.gogoproto.nullable) = false, (.gogoproto.embed) = true];</code>
     */
    fun clearCommissionRates() {
      _builder.clearCommissionRates()
    }
    /**
     * <pre>
     * commission_rates defines the initial commission rates to be used for creating a validator.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.CommissionRates commission_rates = 1 [(.gogoproto.nullable) = false, (.gogoproto.embed) = true];</code>
     * @return Whether the commissionRates field is set.
     */
    fun hasCommissionRates(): kotlin.Boolean {
      return _builder.hasCommissionRates()
    }

    /**
     * <pre>
     * update_time is the last time the commission rate was changed.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp update_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"update_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    var updateTime: com.google.protobuf.Timestamp
      @JvmName("getUpdateTime")
      get() = _builder.getUpdateTime()
      @JvmName("setUpdateTime")
      set(value) {
        _builder.setUpdateTime(value)
      }
    /**
     * <pre>
     * update_time is the last time the commission rate was changed.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp update_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"update_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    fun clearUpdateTime() {
      _builder.clearUpdateTime()
    }
    /**
     * <pre>
     * update_time is the last time the commission rate was changed.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp update_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"update_time&#92;"", (.gogoproto.stdtime) = true];</code>
     * @return Whether the updateTime field is set.
     */
    fun hasUpdateTime(): kotlin.Boolean {
      return _builder.hasUpdateTime()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Staking.Commission.copy(block: cosmos.staking.v1beta1.CommissionKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.Commission =
  cosmos.staking.v1beta1.CommissionKt.Dsl._create(this.toBuilder()).apply { block() }._build()
