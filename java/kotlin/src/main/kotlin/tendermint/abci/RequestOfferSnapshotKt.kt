//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/abci/types.proto

package tendermint.abci;

@kotlin.jvm.JvmSynthetic
inline fun requestOfferSnapshot(block: tendermint.abci.RequestOfferSnapshotKt.Dsl.() -> Unit): tendermint.abci.Types.RequestOfferSnapshot =
  tendermint.abci.RequestOfferSnapshotKt.Dsl._create(tendermint.abci.Types.RequestOfferSnapshot.newBuilder()).apply { block() }._build()
object RequestOfferSnapshotKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.abci.Types.RequestOfferSnapshot.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.abci.Types.RequestOfferSnapshot.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.abci.Types.RequestOfferSnapshot = _builder.build()

    /**
     * <pre>
     * snapshot offered by peers
     * </pre>
     *
     * <code>.tendermint.abci.Snapshot snapshot = 1;</code>
     */
    var snapshot: tendermint.abci.Types.Snapshot
      @JvmName("getSnapshot")
      get() = _builder.getSnapshot()
      @JvmName("setSnapshot")
      set(value) {
        _builder.setSnapshot(value)
      }
    /**
     * <pre>
     * snapshot offered by peers
     * </pre>
     *
     * <code>.tendermint.abci.Snapshot snapshot = 1;</code>
     */
    fun clearSnapshot() {
      _builder.clearSnapshot()
    }
    /**
     * <pre>
     * snapshot offered by peers
     * </pre>
     *
     * <code>.tendermint.abci.Snapshot snapshot = 1;</code>
     * @return Whether the snapshot field is set.
     */
    fun hasSnapshot(): kotlin.Boolean {
      return _builder.hasSnapshot()
    }

    /**
     * <pre>
     * light client-verified app hash for snapshot height
     * </pre>
     *
     * <code>bytes app_hash = 2;</code>
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
     * light client-verified app hash for snapshot height
     * </pre>
     *
     * <code>bytes app_hash = 2;</code>
     */
    fun clearAppHash() {
      _builder.clearAppHash()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.abci.Types.RequestOfferSnapshot.copy(block: tendermint.abci.RequestOfferSnapshotKt.Dsl.() -> Unit): tendermint.abci.Types.RequestOfferSnapshot =
  tendermint.abci.RequestOfferSnapshotKt.Dsl._create(this.toBuilder()).apply { block() }._build()
