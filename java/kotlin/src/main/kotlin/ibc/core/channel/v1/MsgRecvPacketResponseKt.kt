//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/tx.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmSynthetic
inline fun msgRecvPacketResponse(block: ibc.core.channel.v1.MsgRecvPacketResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.Tx.MsgRecvPacketResponse =
  ibc.core.channel.v1.MsgRecvPacketResponseKt.Dsl._create(ibc.core.channel.v1.Tx.MsgRecvPacketResponse.newBuilder()).apply { block() }._build()
object MsgRecvPacketResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.channel.v1.Tx.MsgRecvPacketResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.Tx.MsgRecvPacketResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.Tx.MsgRecvPacketResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.channel.v1.Tx.MsgRecvPacketResponse.copy(block: ibc.core.channel.v1.MsgRecvPacketResponseKt.Dsl.() -> Unit): ibc.core.channel.v1.Tx.MsgRecvPacketResponse =
  ibc.core.channel.v1.MsgRecvPacketResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
