//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/query.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryParamsRequest(block: cosmos.staking.v1beta1.QueryParamsRequestKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest =
  cosmos.staking.v1beta1.QueryParamsRequestKt.Dsl._create(cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest.newBuilder()).apply { block() }._build()
object QueryParamsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest.copy(block: cosmos.staking.v1beta1.QueryParamsRequestKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryParamsRequest =
  cosmos.staking.v1beta1.QueryParamsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
