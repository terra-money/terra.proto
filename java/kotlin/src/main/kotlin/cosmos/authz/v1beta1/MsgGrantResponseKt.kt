//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/authz/v1beta1/tx.proto

package cosmos.authz.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgGrantResponse(block: cosmos.authz.v1beta1.MsgGrantResponseKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Tx.MsgGrantResponse =
  cosmos.authz.v1beta1.MsgGrantResponseKt.Dsl._create(cosmos.authz.v1beta1.Tx.MsgGrantResponse.newBuilder()).apply { block() }._build()
object MsgGrantResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.authz.v1beta1.Tx.MsgGrantResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.authz.v1beta1.Tx.MsgGrantResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.authz.v1beta1.Tx.MsgGrantResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.authz.v1beta1.Tx.MsgGrantResponse.copy(block: cosmos.authz.v1beta1.MsgGrantResponseKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Tx.MsgGrantResponse =
  cosmos.authz.v1beta1.MsgGrantResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
