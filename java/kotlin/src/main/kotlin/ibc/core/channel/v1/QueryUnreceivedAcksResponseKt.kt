//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/query.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmSynthetic
inline fun queryUnreceivedAcksResponse(block: ibc.core.channel.v1.QueryUnreceivedAcksResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse =
  ibc.core.channel.v1.QueryUnreceivedAcksResponseKt.Dsl._create(ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse.newBuilder()).apply { block() }._build()
object QueryUnreceivedAcksResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class SequencesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     */
     val sequences: com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getSequencesList()
      )
    /**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     * @param value The sequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.add(value: kotlin.Long) {
      _builder.addSequences(value)
    }/**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     * @param value The sequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignSequences")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.plusAssign(value: kotlin.Long) {
      add(value)
    }/**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     * @param values The sequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.addAll(values: kotlin.collections.Iterable<kotlin.Long>) {
      _builder.addAllSequences(values)
    }/**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     * @param values The sequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllSequences")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.Long>) {
      addAll(values)
    }/**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     * @param index The index to set the value at.
     * @param value The sequences to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setSequences")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.set(index: kotlin.Int, value: kotlin.Long) {
      _builder.setSequences(index, value)
    }/**
     * <pre>
     * list of unreceived acknowledgement sequences
     * </pre>
     *
     * <code>repeated uint64 sequences = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, SequencesProxy>.clear() {
      _builder.clearSequences()
    }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     */
    var height: ibc.core.client.v1.Client.Height
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     * @return Whether the height field is set.
     */
    fun hasHeight(): kotlin.Boolean {
      return _builder.hasHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse.copy(block: ibc.core.channel.v1.QueryUnreceivedAcksResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedAcksResponse =
  ibc.core.channel.v1.QueryUnreceivedAcksResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
