//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/query.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryValidatorDelegationsResponse(block: cosmos.staking.v1beta1.QueryValidatorDelegationsResponseKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse =
  cosmos.staking.v1beta1.QueryValidatorDelegationsResponseKt.Dsl._create(cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse.newBuilder()).apply { block() }._build()
object QueryValidatorDelegationsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class DelegationResponsesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     */
     val delegationResponses: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getDelegationResponsesList()
      )
    /**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     * @param value The delegationResponses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addDelegationResponses")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.add(value: cosmos.staking.v1beta1.Staking.DelegationResponse) {
      _builder.addDelegationResponses(value)
    }/**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     * @param value The delegationResponses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignDelegationResponses")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.DelegationResponse) {
      add(value)
    }/**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     * @param values The delegationResponses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllDelegationResponses")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.DelegationResponse>) {
      _builder.addAllDelegationResponses(values)
    }/**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     * @param values The delegationResponses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllDelegationResponses")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.DelegationResponse>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     * @param index The index to set the value at.
     * @param value The delegationResponses to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setDelegationResponses")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.DelegationResponse) {
      _builder.setDelegationResponses(index, value)
    }/**
     * <code>repeated .cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "DelegationResponses"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearDelegationResponses")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.DelegationResponse, DelegationResponsesProxy>.clear() {
      _builder.clearDelegationResponses()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    var pagination: cosmos.base.query.v1beta1.Pagination.PageResponse
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse.copy(block: cosmos.staking.v1beta1.QueryValidatorDelegationsResponseKt.Dsl.() -> Unit): cosmos.staking.v1beta1.QueryOuterClass.QueryValidatorDelegationsResponse =
  cosmos.staking.v1beta1.QueryValidatorDelegationsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
