//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/distribution/v1beta1/distribution.proto

package cosmos.distribution.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun validatorAccumulatedCommission(block: cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission =
  cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionKt.Dsl._create(cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission.newBuilder()).apply { block() }._build()
object ValidatorAccumulatedCommissionKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class CommissionProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
     val commission: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getCommissionList()
      )
    /**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The commission to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addCommission")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.addCommission(value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The commission to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignCommission")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      add(value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The commission to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllCommission")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      _builder.addAllCommission(values)
    }/**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The commission to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllCommission")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param index The index to set the value at.
     * @param value The commission to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setCommission")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.setCommission(index, value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.DecCoin commission = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearCommission")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, CommissionProxy>.clear() {
      _builder.clearCommission()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission.copy(block: cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.Distribution.ValidatorAccumulatedCommission =
  cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionKt.Dsl._create(this.toBuilder()).apply { block() }._build()
