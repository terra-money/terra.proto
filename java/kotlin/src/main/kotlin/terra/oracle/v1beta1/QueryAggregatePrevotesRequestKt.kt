//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/oracle/v1beta1/query.proto

package terra.oracle.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAggregatePrevotesRequest(block: terra.oracle.v1beta1.QueryAggregatePrevotesRequestKt.Dsl.() -> Unit): terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest =
  terra.oracle.v1beta1.QueryAggregatePrevotesRequestKt.Dsl._create(terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.newBuilder()).apply { block() }._build()
object QueryAggregatePrevotesRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest.copy(block: terra.oracle.v1beta1.QueryAggregatePrevotesRequestKt.Dsl.() -> Unit): terra.oracle.v1beta1.QueryOuterClass.QueryAggregatePrevotesRequest =
  terra.oracle.v1beta1.QueryAggregatePrevotesRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
