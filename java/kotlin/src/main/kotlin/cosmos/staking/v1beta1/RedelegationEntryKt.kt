//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/staking.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun redelegationEntry(block: cosmos.staking.v1beta1.RedelegationEntryKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.RedelegationEntry =
  cosmos.staking.v1beta1.RedelegationEntryKt.Dsl._create(cosmos.staking.v1beta1.Staking.RedelegationEntry.newBuilder()).apply { block() }._build()
object RedelegationEntryKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Staking.RedelegationEntry.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Staking.RedelegationEntry.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Staking.RedelegationEntry = _builder.build()

    /**
     * <pre>
     * creation_height  defines the height which the redelegation took place.
     * </pre>
     *
     * <code>int64 creation_height = 1 [(.gogoproto.moretags) = "yaml:&#92;"creation_height&#92;""];</code>
     */
    var creationHeight: kotlin.Long
      @JvmName("getCreationHeight")
      get() = _builder.getCreationHeight()
      @JvmName("setCreationHeight")
      set(value) {
        _builder.setCreationHeight(value)
      }
    /**
     * <pre>
     * creation_height  defines the height which the redelegation took place.
     * </pre>
     *
     * <code>int64 creation_height = 1 [(.gogoproto.moretags) = "yaml:&#92;"creation_height&#92;""];</code>
     */
    fun clearCreationHeight() {
      _builder.clearCreationHeight()
    }

    /**
     * <pre>
     * completion_time defines the unix time for redelegation completion.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp completion_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"completion_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    var completionTime: com.google.protobuf.Timestamp
      @JvmName("getCompletionTime")
      get() = _builder.getCompletionTime()
      @JvmName("setCompletionTime")
      set(value) {
        _builder.setCompletionTime(value)
      }
    /**
     * <pre>
     * completion_time defines the unix time for redelegation completion.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp completion_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"completion_time&#92;"", (.gogoproto.stdtime) = true];</code>
     */
    fun clearCompletionTime() {
      _builder.clearCompletionTime()
    }
    /**
     * <pre>
     * completion_time defines the unix time for redelegation completion.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp completion_time = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"completion_time&#92;"", (.gogoproto.stdtime) = true];</code>
     * @return Whether the completionTime field is set.
     */
    fun hasCompletionTime(): kotlin.Boolean {
      return _builder.hasCompletionTime()
    }

    /**
     * <pre>
     * initial_balance defines the initial balance when redelegation started.
     * </pre>
     *
     * <code>string initial_balance = 3 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"initial_balance&#92;""];</code>
     */
    var initialBalance: kotlin.String
      @JvmName("getInitialBalance")
      get() = _builder.getInitialBalance()
      @JvmName("setInitialBalance")
      set(value) {
        _builder.setInitialBalance(value)
      }
    /**
     * <pre>
     * initial_balance defines the initial balance when redelegation started.
     * </pre>
     *
     * <code>string initial_balance = 3 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"initial_balance&#92;""];</code>
     */
    fun clearInitialBalance() {
      _builder.clearInitialBalance()
    }

    /**
     * <pre>
     * shares_dst is the amount of destination-validator shares created by redelegation.
     * </pre>
     *
     * <code>string shares_dst = 4 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"];</code>
     */
    var sharesDst: kotlin.String
      @JvmName("getSharesDst")
      get() = _builder.getSharesDst()
      @JvmName("setSharesDst")
      set(value) {
        _builder.setSharesDst(value)
      }
    /**
     * <pre>
     * shares_dst is the amount of destination-validator shares created by redelegation.
     * </pre>
     *
     * <code>string shares_dst = 4 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec"];</code>
     */
    fun clearSharesDst() {
      _builder.clearSharesDst()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Staking.RedelegationEntry.copy(block: cosmos.staking.v1beta1.RedelegationEntryKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.RedelegationEntry =
  cosmos.staking.v1beta1.RedelegationEntryKt.Dsl._create(this.toBuilder()).apply { block() }._build()
