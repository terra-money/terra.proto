//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/query.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryRewardWeightRequest(block: terra.treasury.v1beta1.QueryRewardWeightRequestKt.Dsl.() -> Unit): terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest =
  terra.treasury.v1beta1.QueryRewardWeightRequestKt.Dsl._create(terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.newBuilder()).apply { block() }._build()
object QueryRewardWeightRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest.copy(block: terra.treasury.v1beta1.QueryRewardWeightRequestKt.Dsl.() -> Unit): terra.treasury.v1beta1.QueryOuterClass.QueryRewardWeightRequest =
  terra.treasury.v1beta1.QueryRewardWeightRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
