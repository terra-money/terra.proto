//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/tx.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgVoteResponse(block: cosmos.gov.v1beta1.MsgVoteResponseKt.Dsl.() -> Unit): cosmos.gov.v1beta1.Tx.MsgVoteResponse =
  cosmos.gov.v1beta1.MsgVoteResponseKt.Dsl._create(cosmos.gov.v1beta1.Tx.MsgVoteResponse.newBuilder()).apply { block() }._build()
object MsgVoteResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.gov.v1beta1.Tx.MsgVoteResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.Tx.MsgVoteResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.Tx.MsgVoteResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.gov.v1beta1.Tx.MsgVoteResponse.copy(block: cosmos.gov.v1beta1.MsgVoteResponseKt.Dsl.() -> Unit): cosmos.gov.v1beta1.Tx.MsgVoteResponse =
  cosmos.gov.v1beta1.MsgVoteResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
