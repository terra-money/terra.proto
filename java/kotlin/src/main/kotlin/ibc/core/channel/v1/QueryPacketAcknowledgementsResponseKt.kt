//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/query.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmSynthetic
inline fun queryPacketAcknowledgementsResponse(block: ibc.core.channel.v1.QueryPacketAcknowledgementsResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse =
  ibc.core.channel.v1.QueryPacketAcknowledgementsResponseKt.Dsl._create(ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse.newBuilder()).apply { block() }._build()
object QueryPacketAcknowledgementsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class AcknowledgementsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     */
     val acknowledgements: com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAcknowledgementsList()
      )
    /**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     * @param value The acknowledgements to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAcknowledgements")
    fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.add(value: ibc.core.channel.v1.ChannelOuterClass.PacketState) {
      _builder.addAcknowledgements(value)
    }/**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     * @param value The acknowledgements to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAcknowledgements")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.plusAssign(value: ibc.core.channel.v1.ChannelOuterClass.PacketState) {
      add(value)
    }/**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     * @param values The acknowledgements to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAcknowledgements")
    fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.addAll(values: kotlin.collections.Iterable<ibc.core.channel.v1.ChannelOuterClass.PacketState>) {
      _builder.addAllAcknowledgements(values)
    }/**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     * @param values The acknowledgements to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAcknowledgements")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.plusAssign(values: kotlin.collections.Iterable<ibc.core.channel.v1.ChannelOuterClass.PacketState>) {
      addAll(values)
    }/**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     * @param index The index to set the value at.
     * @param value The acknowledgements to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAcknowledgements")
    operator fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.set(index: kotlin.Int, value: ibc.core.channel.v1.ChannelOuterClass.PacketState) {
      _builder.setAcknowledgements(index, value)
    }/**
     * <code>repeated .ibc.core.channel.v1.PacketState acknowledgements = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAcknowledgements")
    fun com.google.protobuf.kotlin.DslList<ibc.core.channel.v1.ChannelOuterClass.PacketState, AcknowledgementsProxy>.clear() {
      _builder.clearAcknowledgements()
    }
    /**
     * <pre>
     * pagination response
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
     * pagination response
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination response
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }

    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
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
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the height field is set.
     */
    fun hasHeight(): kotlin.Boolean {
      return _builder.hasHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse.copy(block: ibc.core.channel.v1.QueryPacketAcknowledgementsResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryPacketAcknowledgementsResponse =
  ibc.core.channel.v1.QueryPacketAcknowledgementsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
