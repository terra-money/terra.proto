//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/abci/types.proto

package tendermint.abci;

@kotlin.jvm.JvmSynthetic
inline fun requestFlush(block: tendermint.abci.RequestFlushKt.Dsl.() -> Unit): tendermint.abci.Types.RequestFlush =
  tendermint.abci.RequestFlushKt.Dsl._create(tendermint.abci.Types.RequestFlush.newBuilder()).apply { block() }._build()
object RequestFlushKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: tendermint.abci.Types.RequestFlush.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.abci.Types.RequestFlush.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.abci.Types.RequestFlush = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun tendermint.abci.Types.RequestFlush.copy(block: tendermint.abci.RequestFlushKt.Dsl.() -> Unit): tendermint.abci.Types.RequestFlush =
  tendermint.abci.RequestFlushKt.Dsl._create(this.toBuilder()).apply { block() }._build()
