//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/types/types.proto

package tendermint.types;

@kotlin.jvm.JvmSynthetic
inline fun header(block: tendermint.types.HeaderKt.Dsl.() -> Unit): tendermint.types.Types.Header =
  tendermint.types.HeaderKt.Dsl._create(tendermint.types.Types.Header.newBuilder()).apply { block() }._build()
object HeaderKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.types.Types.Header.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.types.Types.Header.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.types.Types.Header = _builder.build()

    /**
     * <pre>
     * basic block info
     * </pre>
     *
     * <code>.tendermint.version.Consensus version = 1 [(.gogoproto.nullable) = false];</code>
     */
    var version: tendermint.version.Types.Consensus
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <pre>
     * basic block info
     * </pre>
     *
     * <code>.tendermint.version.Consensus version = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <pre>
     * basic block info
     * </pre>
     *
     * <code>.tendermint.version.Consensus version = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the version field is set.
     */
    fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * <code>string chain_id = 2 [(.gogoproto.customname) = "ChainID"];</code>
     */
    var chainId: kotlin.String
      @JvmName("getChainId")
      get() = _builder.getChainId()
      @JvmName("setChainId")
      set(value) {
        _builder.setChainId(value)
      }
    /**
     * <code>string chain_id = 2 [(.gogoproto.customname) = "ChainID"];</code>
     */
    fun clearChainId() {
      _builder.clearChainId()
    }

    /**
     * <code>int64 height = 3;</code>
     */
    var height: kotlin.Long
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <code>int64 height = 3;</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }

    /**
     * <code>.google.protobuf.Timestamp time = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    var time: com.google.protobuf.Timestamp
      @JvmName("getTime")
      get() = _builder.getTime()
      @JvmName("setTime")
      set(value) {
        _builder.setTime(value)
      }
    /**
     * <code>.google.protobuf.Timestamp time = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    fun clearTime() {
      _builder.clearTime()
    }
    /**
     * <code>.google.protobuf.Timestamp time = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     * @return Whether the time field is set.
     */
    fun hasTime(): kotlin.Boolean {
      return _builder.hasTime()
    }

    /**
     * <pre>
     * prev block info
     * </pre>
     *
     * <code>.tendermint.types.BlockID last_block_id = 5 [(.gogoproto.nullable) = false];</code>
     */
    var lastBlockId: tendermint.types.Types.BlockID
      @JvmName("getLastBlockId")
      get() = _builder.getLastBlockId()
      @JvmName("setLastBlockId")
      set(value) {
        _builder.setLastBlockId(value)
      }
    /**
     * <pre>
     * prev block info
     * </pre>
     *
     * <code>.tendermint.types.BlockID last_block_id = 5 [(.gogoproto.nullable) = false];</code>
     */
    fun clearLastBlockId() {
      _builder.clearLastBlockId()
    }
    /**
     * <pre>
     * prev block info
     * </pre>
     *
     * <code>.tendermint.types.BlockID last_block_id = 5 [(.gogoproto.nullable) = false];</code>
     * @return Whether the lastBlockId field is set.
     */
    fun hasLastBlockId(): kotlin.Boolean {
      return _builder.hasLastBlockId()
    }

    /**
     * <pre>
     * hashes of block data
     * </pre>
     *
     * <code>bytes last_commit_hash = 6;</code>
     */
    var lastCommitHash: com.google.protobuf.ByteString
      @JvmName("getLastCommitHash")
      get() = _builder.getLastCommitHash()
      @JvmName("setLastCommitHash")
      set(value) {
        _builder.setLastCommitHash(value)
      }
    /**
     * <pre>
     * hashes of block data
     * </pre>
     *
     * <code>bytes last_commit_hash = 6;</code>
     */
    fun clearLastCommitHash() {
      _builder.clearLastCommitHash()
    }

    /**
     * <pre>
     * transactions
     * </pre>
     *
     * <code>bytes data_hash = 7;</code>
     */
    var dataHash: com.google.protobuf.ByteString
      @JvmName("getDataHash")
      get() = _builder.getDataHash()
      @JvmName("setDataHash")
      set(value) {
        _builder.setDataHash(value)
      }
    /**
     * <pre>
     * transactions
     * </pre>
     *
     * <code>bytes data_hash = 7;</code>
     */
    fun clearDataHash() {
      _builder.clearDataHash()
    }

    /**
     * <pre>
     * hashes from the app output from the prev block
     * </pre>
     *
     * <code>bytes validators_hash = 8;</code>
     */
    var validatorsHash: com.google.protobuf.ByteString
      @JvmName("getValidatorsHash")
      get() = _builder.getValidatorsHash()
      @JvmName("setValidatorsHash")
      set(value) {
        _builder.setValidatorsHash(value)
      }
    /**
     * <pre>
     * hashes from the app output from the prev block
     * </pre>
     *
     * <code>bytes validators_hash = 8;</code>
     */
    fun clearValidatorsHash() {
      _builder.clearValidatorsHash()
    }

    /**
     * <pre>
     * validators for the next block
     * </pre>
     *
     * <code>bytes next_validators_hash = 9;</code>
     */
    var nextValidatorsHash: com.google.protobuf.ByteString
      @JvmName("getNextValidatorsHash")
      get() = _builder.getNextValidatorsHash()
      @JvmName("setNextValidatorsHash")
      set(value) {
        _builder.setNextValidatorsHash(value)
      }
    /**
     * <pre>
     * validators for the next block
     * </pre>
     *
     * <code>bytes next_validators_hash = 9;</code>
     */
    fun clearNextValidatorsHash() {
      _builder.clearNextValidatorsHash()
    }

    /**
     * <pre>
     * consensus params for current block
     * </pre>
     *
     * <code>bytes consensus_hash = 10;</code>
     */
    var consensusHash: com.google.protobuf.ByteString
      @JvmName("getConsensusHash")
      get() = _builder.getConsensusHash()
      @JvmName("setConsensusHash")
      set(value) {
        _builder.setConsensusHash(value)
      }
    /**
     * <pre>
     * consensus params for current block
     * </pre>
     *
     * <code>bytes consensus_hash = 10;</code>
     */
    fun clearConsensusHash() {
      _builder.clearConsensusHash()
    }

    /**
     * <pre>
     * state after txs from the previous block
     * </pre>
     *
     * <code>bytes app_hash = 11;</code>
     */
    var appHash: com.google.protobuf.ByteString
      @JvmName("getAppHash")
      get() = _builder.getAppHash()
      @JvmName("setAppHash")
      set(value) {
        _builder.setAppHash(value)
      }
    /**
     * <pre>
     * state after txs from the previous block
     * </pre>
     *
     * <code>bytes app_hash = 11;</code>
     */
    fun clearAppHash() {
      _builder.clearAppHash()
    }

    /**
     * <pre>
     * root hash of all results from the txs from the previous block
     * </pre>
     *
     * <code>bytes last_results_hash = 12;</code>
     */
    var lastResultsHash: com.google.protobuf.ByteString
      @JvmName("getLastResultsHash")
      get() = _builder.getLastResultsHash()
      @JvmName("setLastResultsHash")
      set(value) {
        _builder.setLastResultsHash(value)
      }
    /**
     * <pre>
     * root hash of all results from the txs from the previous block
     * </pre>
     *
     * <code>bytes last_results_hash = 12;</code>
     */
    fun clearLastResultsHash() {
      _builder.clearLastResultsHash()
    }

    /**
     * <pre>
     * consensus info
     * </pre>
     *
     * <code>bytes evidence_hash = 13;</code>
     */
    var evidenceHash: com.google.protobuf.ByteString
      @JvmName("getEvidenceHash")
      get() = _builder.getEvidenceHash()
      @JvmName("setEvidenceHash")
      set(value) {
        _builder.setEvidenceHash(value)
      }
    /**
     * <pre>
     * consensus info
     * </pre>
     *
     * <code>bytes evidence_hash = 13;</code>
     */
    fun clearEvidenceHash() {
      _builder.clearEvidenceHash()
    }

    /**
     * <pre>
     * original proposer of the block
     * </pre>
     *
     * <code>bytes proposer_address = 14;</code>
     */
    var proposerAddress: com.google.protobuf.ByteString
      @JvmName("getProposerAddress")
      get() = _builder.getProposerAddress()
      @JvmName("setProposerAddress")
      set(value) {
        _builder.setProposerAddress(value)
      }
    /**
     * <pre>
     * original proposer of the block
     * </pre>
     *
     * <code>bytes proposer_address = 14;</code>
     */
    fun clearProposerAddress() {
      _builder.clearProposerAddress()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.types.Types.Header.copy(block: tendermint.types.HeaderKt.Dsl.() -> Unit): tendermint.types.Types.Header =
  tendermint.types.HeaderKt.Dsl._create(this.toBuilder()).apply { block() }._build()
