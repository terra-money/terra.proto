//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/gov.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun vote(block: cosmos.gov.v1beta1.VoteKt.Dsl.() -> Unit): cosmos.gov.v1beta1.Gov.Vote =
  cosmos.gov.v1beta1.VoteKt.Dsl._create(cosmos.gov.v1beta1.Gov.Vote.newBuilder()).apply { block() }._build()
object VoteKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.gov.v1beta1.Gov.Vote.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.Gov.Vote.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.Gov.Vote = _builder.build()

    /**
     * <code>uint64 proposal_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"proposal_id&#92;""];</code>
     */
    var proposalId: kotlin.Long
      @JvmName("getProposalId")
      get() = _builder.getProposalId()
      @JvmName("setProposalId")
      set(value) {
        _builder.setProposalId(value)
      }
    /**
     * <code>uint64 proposal_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"proposal_id&#92;""];</code>
     */
    fun clearProposalId() {
      _builder.clearProposalId()
    }

    /**
     * <code>string voter = 2;</code>
     */
    var voter: kotlin.String
      @JvmName("getVoter")
      get() = _builder.getVoter()
      @JvmName("setVoter")
      set(value) {
        _builder.setVoter(value)
      }
    /**
     * <code>string voter = 2;</code>
     */
    fun clearVoter() {
      _builder.clearVoter()
    }

    /**
     * <pre>
     * Deprecated: Prefer to use `options` instead. This field is set in queries
     * if and only if `len(options) == 1` and that option has weight 1. In all
     * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
     * </pre>
     *
     * <code>.cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];</code>
     */
    @kotlin.Deprecated(message = "Field option is deprecated") var option: cosmos.gov.v1beta1.Gov.VoteOption
      @JvmName("getOption")
      get() = _builder.getOption()
      @JvmName("setOption")
      set(value) {
        _builder.setOption(value)
      }
    /**
     * <pre>
     * Deprecated: Prefer to use `options` instead. This field is set in queries
     * if and only if `len(options) == 1` and that option has weight 1. In all
     * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
     * </pre>
     *
     * <code>.cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];</code>
     */
    fun clearOption() {
      _builder.clearOption()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class OptionsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     */
     val options: com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getOptionsList()
      )
    /**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The options to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addOptions")
    fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.add(value: cosmos.gov.v1beta1.Gov.WeightedVoteOption) {
      _builder.addOptions(value)
    }/**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The options to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignOptions")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.plusAssign(value: cosmos.gov.v1beta1.Gov.WeightedVoteOption) {
      add(value)
    }/**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The options to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllOptions")
    fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.gov.v1beta1.Gov.WeightedVoteOption>) {
      _builder.addAllOptions(values)
    }/**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The options to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllOptions")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.gov.v1beta1.Gov.WeightedVoteOption>) {
      addAll(values)
    }/**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The options to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setOptions")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.set(index: kotlin.Int, value: cosmos.gov.v1beta1.Gov.WeightedVoteOption) {
      _builder.setOptions(index, value)
    }/**
     * <pre>
     * Since: cosmos-sdk 0.43
     * </pre>
     *
     * <code>repeated .cosmos.gov.v1beta1.WeightedVoteOption options = 4 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearOptions")
    fun com.google.protobuf.kotlin.DslList<cosmos.gov.v1beta1.Gov.WeightedVoteOption, OptionsProxy>.clear() {
      _builder.clearOptions()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.gov.v1beta1.Gov.Vote.copy(block: cosmos.gov.v1beta1.VoteKt.Dsl.() -> Unit): cosmos.gov.v1beta1.Gov.Vote =
  cosmos.gov.v1beta1.VoteKt.Dsl._create(this.toBuilder()).apply { block() }._build()
