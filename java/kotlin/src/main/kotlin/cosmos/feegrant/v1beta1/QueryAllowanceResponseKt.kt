//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/feegrant/v1beta1/query.proto

package cosmos.feegrant.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAllowanceResponse(block: cosmos.feegrant.v1beta1.QueryAllowanceResponseKt.Dsl.() -> Unit): cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse =
  cosmos.feegrant.v1beta1.QueryAllowanceResponseKt.Dsl._create(cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse.newBuilder()).apply { block() }._build()
object QueryAllowanceResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse = _builder.build()

    /**
     * <pre>
     * allowance is a allowance granted for grantee by granter.
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.Grant allowance = 1;</code>
     */
    var allowance: cosmos.feegrant.v1beta1.Feegrant.Grant
      @JvmName("getAllowance")
      get() = _builder.getAllowance()
      @JvmName("setAllowance")
      set(value) {
        _builder.setAllowance(value)
      }
    /**
     * <pre>
     * allowance is a allowance granted for grantee by granter.
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.Grant allowance = 1;</code>
     */
    fun clearAllowance() {
      _builder.clearAllowance()
    }
    /**
     * <pre>
     * allowance is a allowance granted for grantee by granter.
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.Grant allowance = 1;</code>
     * @return Whether the allowance field is set.
     */
    fun hasAllowance(): kotlin.Boolean {
      return _builder.hasAllowance()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse.copy(block: cosmos.feegrant.v1beta1.QueryAllowanceResponseKt.Dsl.() -> Unit): cosmos.feegrant.v1beta1.QueryOuterClass.QueryAllowanceResponse =
  cosmos.feegrant.v1beta1.QueryAllowanceResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
