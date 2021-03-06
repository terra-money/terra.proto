//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/abci/types.proto

package tendermint.abci;

@kotlin.jvm.JvmSynthetic
inline fun requestBeginBlock(block: tendermint.abci.RequestBeginBlockKt.Dsl.() -> Unit): tendermint.abci.Types.RequestBeginBlock =
  tendermint.abci.RequestBeginBlockKt.Dsl._create(tendermint.abci.Types.RequestBeginBlock.newBuilder()).apply { block() }._build()
object RequestBeginBlockKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.abci.Types.RequestBeginBlock.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.abci.Types.RequestBeginBlock.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.abci.Types.RequestBeginBlock = _builder.build()

    /**
     * <code>bytes hash = 1;</code>
     */
    var hash: com.google.protobuf.ByteString
      @JvmName("getHash")
      get() = _builder.getHash()
      @JvmName("setHash")
      set(value) {
        _builder.setHash(value)
      }
    /**
     * <code>bytes hash = 1;</code>
     */
    fun clearHash() {
      _builder.clearHash()
    }

    /**
     * <code>.tendermint.types.Header header = 2 [(.gogoproto.nullable) = false];</code>
     */
    var header: tendermint.types.Types.Header
      @JvmName("getHeader")
      get() = _builder.getHeader()
      @JvmName("setHeader")
      set(value) {
        _builder.setHeader(value)
      }
    /**
     * <code>.tendermint.types.Header header = 2 [(.gogoproto.nullable) = false];</code>
     */
    fun clearHeader() {
      _builder.clearHeader()
    }
    /**
     * <code>.tendermint.types.Header header = 2 [(.gogoproto.nullable) = false];</code>
     * @return Whether the header field is set.
     */
    fun hasHeader(): kotlin.Boolean {
      return _builder.hasHeader()
    }

    /**
     * <code>.tendermint.abci.LastCommitInfo last_commit_info = 3 [(.gogoproto.nullable) = false];</code>
     */
    var lastCommitInfo: tendermint.abci.Types.LastCommitInfo
      @JvmName("getLastCommitInfo")
      get() = _builder.getLastCommitInfo()
      @JvmName("setLastCommitInfo")
      set(value) {
        _builder.setLastCommitInfo(value)
      }
    /**
     * <code>.tendermint.abci.LastCommitInfo last_commit_info = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearLastCommitInfo() {
      _builder.clearLastCommitInfo()
    }
    /**
     * <code>.tendermint.abci.LastCommitInfo last_commit_info = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the lastCommitInfo field is set.
     */
    fun hasLastCommitInfo(): kotlin.Boolean {
      return _builder.hasLastCommitInfo()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ByzantineValidatorsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     */
     val byzantineValidators: com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getByzantineValidatorsList()
      )
    /**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The byzantineValidators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addByzantineValidators")
    fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.add(value: tendermint.abci.Types.Evidence) {
      _builder.addByzantineValidators(value)
    }/**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The byzantineValidators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignByzantineValidators")
    inline operator fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.plusAssign(value: tendermint.abci.Types.Evidence) {
      add(value)
    }/**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The byzantineValidators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllByzantineValidators")
    fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.addAll(values: kotlin.collections.Iterable<tendermint.abci.Types.Evidence>) {
      _builder.addAllByzantineValidators(values)
    }/**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The byzantineValidators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllByzantineValidators")
    inline operator fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.plusAssign(values: kotlin.collections.Iterable<tendermint.abci.Types.Evidence>) {
      addAll(values)
    }/**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The byzantineValidators to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setByzantineValidators")
    operator fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.set(index: kotlin.Int, value: tendermint.abci.Types.Evidence) {
      _builder.setByzantineValidators(index, value)
    }/**
     * <code>repeated .tendermint.abci.Evidence byzantine_validators = 4 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearByzantineValidators")
    fun com.google.protobuf.kotlin.DslList<tendermint.abci.Types.Evidence, ByzantineValidatorsProxy>.clear() {
      _builder.clearByzantineValidators()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.abci.Types.RequestBeginBlock.copy(block: tendermint.abci.RequestBeginBlockKt.Dsl.() -> Unit): tendermint.abci.Types.RequestBeginBlock =
  tendermint.abci.RequestBeginBlockKt.Dsl._create(this.toBuilder()).apply { block() }._build()
