//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/oracle/v1beta1/query.proto

package terra.oracle.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAggregateVotesRequest(block: terra.oracle.v1beta1.QueryAggregateVotesRequestKt.Dsl.() -> Unit): terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest =
  terra.oracle.v1beta1.QueryAggregateVotesRequestKt.Dsl._create(terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.newBuilder()).apply { block() }._build()
object QueryAggregateVotesRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest.copy(block: terra.oracle.v1beta1.QueryAggregateVotesRequestKt.Dsl.() -> Unit): terra.oracle.v1beta1.QueryOuterClass.QueryAggregateVotesRequest =
  terra.oracle.v1beta1.QueryAggregateVotesRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
