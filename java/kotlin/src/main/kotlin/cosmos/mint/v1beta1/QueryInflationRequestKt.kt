//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/mint/v1beta1/query.proto

package cosmos.mint.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryInflationRequest(block: cosmos.mint.v1beta1.QueryInflationRequestKt.Dsl.() -> Unit): cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest =
  cosmos.mint.v1beta1.QueryInflationRequestKt.Dsl._create(cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest.newBuilder()).apply { block() }._build()
object QueryInflationRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest.copy(block: cosmos.mint.v1beta1.QueryInflationRequestKt.Dsl.() -> Unit): cosmos.mint.v1beta1.QueryOuterClass.QueryInflationRequest =
  cosmos.mint.v1beta1.QueryInflationRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
