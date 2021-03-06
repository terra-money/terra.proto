//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/query.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryDelegationResponse(block: cosmos.staking.v1beta1.QueryDelegationResponseKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse =
  cosmos.staking.v1beta1.QueryDelegationResponseKt.Dsl._create(cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse.newBuilder()).apply { block() }._build()
object QueryDelegationResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse = _builder.build()

    /**
     * <pre>
     * delegation_responses defines the delegation info of a delegation.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.DelegationResponse delegation_response = 1;</code>
     */
    var delegationResponse: cosmos.staking.v1beta1.Staking.DelegationResponse
      @JvmName("getDelegationResponse")
      get() = _builder.getDelegationResponse()
      @JvmName("setDelegationResponse")
      set(value) {
        _builder.setDelegationResponse(value)
      }
    /**
     * <pre>
     * delegation_responses defines the delegation info of a delegation.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.DelegationResponse delegation_response = 1;</code>
     */
    fun clearDelegationResponse() {
      _builder.clearDelegationResponse()
    }
    /**
     * <pre>
     * delegation_responses defines the delegation info of a delegation.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.DelegationResponse delegation_response = 1;</code>
     * @return Whether the delegationResponse field is set.
     */
    fun hasDelegationResponse(): kotlin.Boolean {
      return _builder.hasDelegationResponse()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse.copy(block: cosmos.staking.v1beta1.QueryDelegationResponseKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryDelegationResponse =
  cosmos.staking.v1beta1.QueryDelegationResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
