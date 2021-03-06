//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/query.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmSynthetic
inline fun queryUnreceivedPacketsRequest(block: ibc.core.channel.v1.QueryUnreceivedPacketsRequestKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest =
  ibc.core.channel.v1.QueryUnreceivedPacketsRequestKt.Dsl._create(ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest.newBuilder()).apply { block() }._build()
object QueryUnreceivedPacketsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest = _builder.build()

    /**
     * <pre>
     * port unique identifier
     * </pre>
     *
     * <code>string port_id = 1;</code>
     */
    var portId: kotlin.String
      @JvmName("getPortId")
      get() = _builder.getPortId()
      @JvmName("setPortId")
      set(value) {
        _builder.setPortId(value)
      }
    /**
     * <pre>
     * port unique identifier
     * </pre>
     *
     * <code>string port_id = 1;</code>
     */
    fun clearPortId() {
      _builder.clearPortId()
    }

    /**
     * <pre>
     * channel unique identifier
     * </pre>
     *
     * <code>string channel_id = 2;</code>
     */
    var channelId: kotlin.String
      @JvmName("getChannelId")
      get() = _builder.getChannelId()
      @JvmName("setChannelId")
      set(value) {
        _builder.setChannelId(value)
      }
    /**
     * <pre>
     * channel unique identifier
     * </pre>
     *
     * <code>string channel_id = 2;</code>
     */
    fun clearChannelId() {
      _builder.clearChannelId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class PacketCommitmentSequencesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     */
     val packetCommitmentSequences: com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getPacketCommitmentSequencesList()
      )
    /**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     * @param value The packetCommitmentSequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addPacketCommitmentSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.add(value: kotlin.Long) {
      _builder.addPacketCommitmentSequences(value)
    }/**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     * @param value The packetCommitmentSequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignPacketCommitmentSequences")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.plusAssign(value: kotlin.Long) {
      add(value)
    }/**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     * @param values The packetCommitmentSequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllPacketCommitmentSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.addAll(values: kotlin.collections.Iterable<kotlin.Long>) {
      _builder.addAllPacketCommitmentSequences(values)
    }/**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     * @param values The packetCommitmentSequences to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllPacketCommitmentSequences")
    inline operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.Long>) {
      addAll(values)
    }/**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     * @param index The index to set the value at.
     * @param value The packetCommitmentSequences to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setPacketCommitmentSequences")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.set(index: kotlin.Int, value: kotlin.Long) {
      _builder.setPacketCommitmentSequences(index, value)
    }/**
     * <pre>
     * list of packet sequences
     * </pre>
     *
     * <code>repeated uint64 packet_commitment_sequences = 3;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearPacketCommitmentSequences")
    fun com.google.protobuf.kotlin.DslList<kotlin.Long, PacketCommitmentSequencesProxy>.clear() {
      _builder.clearPacketCommitmentSequences()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest.copy(block: ibc.core.channel.v1.QueryUnreceivedPacketsRequestKt.Dsl.() -> Unit): ibc.core.channel.v1.QueryOuterClass.QueryUnreceivedPacketsRequest =
  ibc.core.channel.v1.QueryUnreceivedPacketsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
