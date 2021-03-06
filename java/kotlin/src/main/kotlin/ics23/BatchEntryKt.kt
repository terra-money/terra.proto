//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: confio/proofs.proto

package ics23;

@kotlin.jvm.JvmSynthetic
inline fun batchEntry(block: ics23.BatchEntryKt.Dsl.() -> Unit): ics23.Proofs.BatchEntry =
  ics23.BatchEntryKt.Dsl._create(ics23.Proofs.BatchEntry.newBuilder()).apply { block() }._build()
object BatchEntryKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ics23.Proofs.BatchEntry.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ics23.Proofs.BatchEntry.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ics23.Proofs.BatchEntry = _builder.build()

    /**
     * <code>.ics23.ExistenceProof exist = 1;</code>
     */
    var exist: ics23.Proofs.ExistenceProof
      @JvmName("getExist")
      get() = _builder.getExist()
      @JvmName("setExist")
      set(value) {
        _builder.setExist(value)
      }
    /**
     * <code>.ics23.ExistenceProof exist = 1;</code>
     */
    fun clearExist() {
      _builder.clearExist()
    }
    /**
     * <code>.ics23.ExistenceProof exist = 1;</code>
     * @return Whether the exist field is set.
     */
    fun hasExist(): kotlin.Boolean {
      return _builder.hasExist()
    }

    /**
     * <code>.ics23.NonExistenceProof nonexist = 2;</code>
     */
    var nonexist: ics23.Proofs.NonExistenceProof
      @JvmName("getNonexist")
      get() = _builder.getNonexist()
      @JvmName("setNonexist")
      set(value) {
        _builder.setNonexist(value)
      }
    /**
     * <code>.ics23.NonExistenceProof nonexist = 2;</code>
     */
    fun clearNonexist() {
      _builder.clearNonexist()
    }
    /**
     * <code>.ics23.NonExistenceProof nonexist = 2;</code>
     * @return Whether the nonexist field is set.
     */
    fun hasNonexist(): kotlin.Boolean {
      return _builder.hasNonexist()
    }
    val proofCase: ics23.Proofs.BatchEntry.ProofCase
      @JvmName("getProofCase")
      get() = _builder.getProofCase()

    fun clearProof() {
      _builder.clearProof()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ics23.Proofs.BatchEntry.copy(block: ics23.BatchEntryKt.Dsl.() -> Unit): ics23.Proofs.BatchEntry =
  ics23.BatchEntryKt.Dsl._create(this.toBuilder()).apply { block() }._build()
