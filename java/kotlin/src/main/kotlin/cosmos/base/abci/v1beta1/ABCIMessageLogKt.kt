//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/abci/v1beta1/abci.proto

package cosmos.base.abci.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun aBCIMessageLog(block: cosmos.base.abci.v1beta1.ABCIMessageLogKt.Dsl.() -> Unit): cosmos.base.abci.v1beta1.Abci.ABCIMessageLog =
  cosmos.base.abci.v1beta1.ABCIMessageLogKt.Dsl._create(cosmos.base.abci.v1beta1.Abci.ABCIMessageLog.newBuilder()).apply { block() }._build()
object ABCIMessageLogKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.base.abci.v1beta1.Abci.ABCIMessageLog.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.abci.v1beta1.Abci.ABCIMessageLog.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.abci.v1beta1.Abci.ABCIMessageLog = _builder.build()

    /**
     * <code>uint32 msg_index = 1;</code>
     */
    var msgIndex: kotlin.Int
      @JvmName("getMsgIndex")
      get() = _builder.getMsgIndex()
      @JvmName("setMsgIndex")
      set(value) {
        _builder.setMsgIndex(value)
      }
    /**
     * <code>uint32 msg_index = 1;</code>
     */
    fun clearMsgIndex() {
      _builder.clearMsgIndex()
    }

    /**
     * <code>string log = 2;</code>
     */
    var log: kotlin.String
      @JvmName("getLog")
      get() = _builder.getLog()
      @JvmName("setLog")
      set(value) {
        _builder.setLog(value)
      }
    /**
     * <code>string log = 2;</code>
     */
    fun clearLog() {
      _builder.clearLog()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class EventsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     */
     val events: com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getEventsList()
      )
    /**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     * @param value The events to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addEvents")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.add(value: cosmos.base.abci.v1beta1.Abci.StringEvent) {
      _builder.addEvents(value)
    }/**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     * @param value The events to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignEvents")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.plusAssign(value: cosmos.base.abci.v1beta1.Abci.StringEvent) {
      add(value)
    }/**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     * @param values The events to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllEvents")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.abci.v1beta1.Abci.StringEvent>) {
      _builder.addAllEvents(values)
    }/**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     * @param values The events to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllEvents")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.abci.v1beta1.Abci.StringEvent>) {
      addAll(values)
    }/**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     * @param index The index to set the value at.
     * @param value The events to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setEvents")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.set(index: kotlin.Int, value: cosmos.base.abci.v1beta1.Abci.StringEvent) {
      _builder.setEvents(index, value)
    }/**
     * <pre>
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     * </pre>
     *
     * <code>repeated .cosmos.base.abci.v1beta1.StringEvent events = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "StringEvents"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearEvents")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.abci.v1beta1.Abci.StringEvent, EventsProxy>.clear() {
      _builder.clearEvents()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.base.abci.v1beta1.Abci.ABCIMessageLog.copy(block: cosmos.base.abci.v1beta1.ABCIMessageLogKt.Dsl.() -> Unit): cosmos.base.abci.v1beta1.Abci.ABCIMessageLog =
  cosmos.base.abci.v1beta1.ABCIMessageLogKt.Dsl._create(this.toBuilder()).apply { block() }._build()
