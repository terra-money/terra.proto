//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/bank/v1beta1/query.proto

package cosmos.bank.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryTotalSupplyResponse(block: cosmos.bank.v1beta1.QueryTotalSupplyResponseKt.Dsl.() -> Unit): cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse =
  cosmos.bank.v1beta1.QueryTotalSupplyResponseKt.Dsl._create(cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse.newBuilder()).apply { block() }._build()
object QueryTotalSupplyResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class SupplyProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     val supply: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getSupplyList()
      )
    /**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The supply to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addSupply")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addSupply(value)
    }/**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The supply to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignSupply")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }/**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The supply to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllSupply")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllSupply(values)
    }/**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The supply to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllSupply")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }/**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The supply to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setSupply")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setSupply(index, value)
    }/**
     * <pre>
     * supply is the supply of the coins
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin supply = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearSupply")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, SupplyProxy>.clear() {
      _builder.clearSupply()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    var pagination: cosmos.base.query.v1beta1.Pagination.PageResponse
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse.copy(block: cosmos.bank.v1beta1.QueryTotalSupplyResponseKt.Dsl.() -> Unit): cosmos.bank.v1beta1.QueryOuterClass.QueryTotalSupplyResponse =
  cosmos.bank.v1beta1.QueryTotalSupplyResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
