//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/query.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryVoteRequest(block: cosmos.gov.v1beta1.QueryVoteRequestKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest =
  cosmos.gov.v1beta1.QueryVoteRequestKt.Dsl._create(cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest.newBuilder()).apply { block() }._build()
object QueryVoteRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest = _builder.build()

    /**
     * <pre>
     * proposal_id defines the unique id of the proposal.
     * </pre>
     *
     * <code>uint64 proposal_id = 1;</code>
     */
    var proposalId: kotlin.Long
      @JvmName("getProposalId")
      get() = _builder.getProposalId()
      @JvmName("setProposalId")
      set(value) {
        _builder.setProposalId(value)
      }
    /**
     * <pre>
     * proposal_id defines the unique id of the proposal.
     * </pre>
     *
     * <code>uint64 proposal_id = 1;</code>
     */
    fun clearProposalId() {
      _builder.clearProposalId()
    }

    /**
     * <pre>
     * voter defines the oter address for the proposals.
     * </pre>
     *
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
     * <pre>
     * voter defines the oter address for the proposals.
     * </pre>
     *
     * <code>string voter = 2;</code>
     */
    fun clearVoter() {
      _builder.clearVoter()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest.copy(block: cosmos.gov.v1beta1.QueryVoteRequestKt.Dsl.() -> Unit): cosmos.gov.v1beta1.QueryOuterClass.QueryVoteRequest =
  cosmos.gov.v1beta1.QueryVoteRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
