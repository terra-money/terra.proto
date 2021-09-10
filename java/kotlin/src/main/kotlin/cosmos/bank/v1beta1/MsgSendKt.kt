//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/bank/v1beta1/tx.proto

package cosmos.bank.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgSend(block: cosmos.bank.v1beta1.MsgSendKt.Dsl.() -> Unit): cosmos.bank.v1beta1.Tx.MsgSend =
  cosmos.bank.v1beta1.MsgSendKt.Dsl._create(cosmos.bank.v1beta1.Tx.MsgSend.newBuilder()).apply { block() }._build()
object MsgSendKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.bank.v1beta1.Tx.MsgSend.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.bank.v1beta1.Tx.MsgSend.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.bank.v1beta1.Tx.MsgSend = _builder.build()

    /**
     * <code>string from_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"from_address&#92;""];</code>
     */
    var fromAddress: kotlin.String
      @JvmName("getFromAddress")
      get() = _builder.getFromAddress()
      @JvmName("setFromAddress")
      set(value) {
        _builder.setFromAddress(value)
      }
    /**
     * <code>string from_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"from_address&#92;""];</code>
     */
    fun clearFromAddress() {
      _builder.clearFromAddress()
    }

    /**
     * <code>string to_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"to_address&#92;""];</code>
     */
    var toAddress: kotlin.String
      @JvmName("getToAddress")
      get() = _builder.getToAddress()
      @JvmName("setToAddress")
      set(value) {
        _builder.setToAddress(value)
      }
    /**
     * <code>string to_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"to_address&#92;""];</code>
     */
    fun clearToAddress() {
      _builder.clearToAddress()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class AmountProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     val amount: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAmountList()
      )
    /**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The amount to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAmount")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addAmount(value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The amount to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAmount")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The amount to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAmount")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllAmount(values)
    }/**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The amount to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAmount")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The amount to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAmount")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setAmount(index, value)
    }/**
     * <code>repeated .cosmos.base.v1beta1.Coin amount = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAmount")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, AmountProxy>.clear() {
      _builder.clearAmount()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.bank.v1beta1.Tx.MsgSend.copy(block: cosmos.bank.v1beta1.MsgSendKt.Dsl.() -> Unit): cosmos.bank.v1beta1.Tx.MsgSend =
  cosmos.bank.v1beta1.MsgSendKt.Dsl._create(this.toBuilder()).apply { block() }._build()
