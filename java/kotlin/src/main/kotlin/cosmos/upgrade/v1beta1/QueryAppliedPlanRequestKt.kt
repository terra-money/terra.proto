//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/upgrade/v1beta1/query.proto

package cosmos.upgrade.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAppliedPlanRequest(block: cosmos.upgrade.v1beta1.QueryAppliedPlanRequestKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest =
  cosmos.upgrade.v1beta1.QueryAppliedPlanRequestKt.Dsl._create(cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest.newBuilder()).apply { block() }._build()
object QueryAppliedPlanRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest = _builder.build()

    /**
     * <pre>
     * name is the name of the applied plan to query for.
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    var name: kotlin.String
      @JvmName("getName")
      get() = _builder.getName()
      @JvmName("setName")
      set(value) {
        _builder.setName(value)
      }
    /**
     * <pre>
     * name is the name of the applied plan to query for.
     * </pre>
     *
     * <code>string name = 1;</code>
     */
    fun clearName() {
      _builder.clearName()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest.copy(block: cosmos.upgrade.v1beta1.QueryAppliedPlanRequestKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.QueryOuterClass.QueryAppliedPlanRequest =
  cosmos.upgrade.v1beta1.QueryAppliedPlanRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
