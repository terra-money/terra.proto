//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/query.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryParamsRequest(block: cosmos.gov.v1beta1.QueryParamsRequestKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest =
  cosmos.gov.v1beta1.QueryParamsRequestKt.Dsl._create(cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest.newBuilder()).apply { block() }._build()
object QueryParamsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest = _builder.build()

    /**
     * <pre>
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     * </pre>
     *
     * <code>string params_type = 1;</code>
     */
    var paramsType: kotlin.String
      @JvmName("getParamsType")
      get() = _builder.getParamsType()
      @JvmName("setParamsType")
      set(value) {
        _builder.setParamsType(value)
      }
    /**
     * <pre>
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     * </pre>
     *
     * <code>string params_type = 1;</code>
     */
    fun clearParamsType() {
      _builder.clearParamsType()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest.copy(block: cosmos.gov.v1beta1.QueryParamsRequestKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryParamsRequest =
  cosmos.gov.v1beta1.QueryParamsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
