//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/distribution/v1beta1/query.proto

package cosmos.distribution.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryCommunityPoolResponse(block: cosmos.distribution.v1beta1.QueryCommunityPoolResponseKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse =
  cosmos.distribution.v1beta1.QueryCommunityPoolResponseKt.Dsl._create(cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse.newBuilder()).apply { block() }._build()
object QueryCommunityPoolResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class PoolProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
     val pool: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getPoolList()
      )
    /**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The pool to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addPool")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.addPool(value)
    }/**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param value The pool to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignPool")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      add(value)
    }/**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The pool to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllPool")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      _builder.addAllPool(values)
    }/**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param values The pool to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllPool")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.DecCoin>) {
      addAll(values)
    }/**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     * @param index The index to set the value at.
     * @param value The pool to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setPool")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.DecCoin) {
      _builder.setPool(index, value)
    }/**
     * <pre>
     * pool defines community pool's coins.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.DecCoin pool = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.DecCoins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearPool")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.DecCoin, PoolProxy>.clear() {
      _builder.clearPool()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse.copy(block: cosmos.distribution.v1beta1.QueryCommunityPoolResponseKt.Dsl.() -> Unit): cosmos.distribution.v1beta1.QueryOuterClass.QueryCommunityPoolResponse =
  cosmos.distribution.v1beta1.QueryCommunityPoolResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
