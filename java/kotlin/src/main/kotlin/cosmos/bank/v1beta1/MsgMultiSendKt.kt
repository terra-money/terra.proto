//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/bank/v1beta1/tx.proto

package cosmos.bank.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgMultiSend(block: cosmos.bank.v1beta1.MsgMultiSendKt.Dsl.() -> Unit): cosmos.bank.v1beta1.Tx.MsgMultiSend =
  cosmos.bank.v1beta1.MsgMultiSendKt.Dsl._create(cosmos.bank.v1beta1.Tx.MsgMultiSend.newBuilder()).apply { block() }._build()
object MsgMultiSendKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.bank.v1beta1.Tx.MsgMultiSend.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.bank.v1beta1.Tx.MsgMultiSend.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.bank.v1beta1.Tx.MsgMultiSend = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class InputsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     */
     val inputs: com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getInputsList()
      )
    /**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The inputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addInputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.add(value: cosmos.bank.v1beta1.Bank.Input) {
      _builder.addInputs(value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The inputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignInputs")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.plusAssign(value: cosmos.bank.v1beta1.Bank.Input) {
      add(value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The inputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllInputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.bank.v1beta1.Bank.Input>) {
      _builder.addAllInputs(values)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The inputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllInputs")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.bank.v1beta1.Bank.Input>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The inputs to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setInputs")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.set(index: kotlin.Int, value: cosmos.bank.v1beta1.Bank.Input) {
      _builder.setInputs(index, value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Input inputs = 1 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearInputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Input, InputsProxy>.clear() {
      _builder.clearInputs()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class OutputsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     */
     val outputs: com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getOutputsList()
      )
    /**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     * @param value The outputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addOutputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.add(value: cosmos.bank.v1beta1.Bank.Output) {
      _builder.addOutputs(value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     * @param value The outputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignOutputs")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.plusAssign(value: cosmos.bank.v1beta1.Bank.Output) {
      add(value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     * @param values The outputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllOutputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.bank.v1beta1.Bank.Output>) {
      _builder.addAllOutputs(values)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     * @param values The outputs to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllOutputs")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.bank.v1beta1.Bank.Output>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The outputs to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setOutputs")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.set(index: kotlin.Int, value: cosmos.bank.v1beta1.Bank.Output) {
      _builder.setOutputs(index, value)
    }/**
     * <code>repeated .cosmos.bank.v1beta1.Output outputs = 2 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearOutputs")
    fun com.google.protobuf.kotlin.DslList<cosmos.bank.v1beta1.Bank.Output, OutputsProxy>.clear() {
      _builder.clearOutputs()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.bank.v1beta1.Tx.MsgMultiSend.copy(block: cosmos.bank.v1beta1.MsgMultiSendKt.Dsl.() -> Unit): cosmos.bank.v1beta1.Tx.MsgMultiSend =
  cosmos.bank.v1beta1.MsgMultiSendKt.Dsl._create(this.toBuilder()).apply { block() }._build()
