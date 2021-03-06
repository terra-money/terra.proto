//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/distribution/v1beta1/query.proto

package cosmos.distribution.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryDelegationTotalRewardsResponse(block: cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponseKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse =
  cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponseKt.Dsl._create(cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse.newBuilder()).apply { block() }._build()
object QueryDelegationTotalRewardsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class RewardsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     */
     val rewards: com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getRewardsList()
      )
    /**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The rewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addRewards")
    fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.add(value: cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward) {
      _builder.addRewards(value)
    }/**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The rewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignRewards")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.plusAssign(value: cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward) {
      add(value)
    }/**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The rewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllRewards")
    fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward>) {
      _builder.addAllRewards(values)
    }/**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The rewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllRewards")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward>) {
      addAll(values)
    }/**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The rewards to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setRewards")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.set(index: kotlin.Int, value: cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward) {
      _builder.setRewards(index, value)
    }/**
     * <pre>
     * rewards defines all the rewards accrued by a delegator.
     * </pre>
     *
     * <code>repeated .cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearRewards")
    fun com.google.protobuf.kotlin.DslList<cosmos.distribution.v1beta1.Distribution.DelegationDelegatorReward, RewardsProxy>.clear() {
      _builder.clearRewards()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class TotalProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
     val total: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getTotalList()
      )
    /**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The total to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addTotal")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.addTotal(value)
    }/**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The total to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignTotal")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      add(value)
    }/**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The total to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllTotal")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      _builder.addAllTotal(values)
    }/**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The total to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllTotal")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      addAll(values)
    }/**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param index The index to set the value at.
     * @param value The total to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setTotal")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.setTotal(index, value)
    }/**
     * <pre>
     * total defines the sum of all the rewards.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin total = 2 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearTotal")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, TotalProxy>.clear() {
      _builder.clearTotal()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse.copy(block: cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponseKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.QueryOuterClass.QueryDelegationTotalRewardsResponse =
  cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
