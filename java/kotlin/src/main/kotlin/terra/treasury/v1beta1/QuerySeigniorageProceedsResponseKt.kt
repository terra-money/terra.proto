//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/query.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun querySeigniorageProceedsResponse(block: terra.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl.() -> Unit): terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse =
  terra.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl._create(terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.newBuilder()).apply { block() }._build()
object QuerySeigniorageProceedsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse = _builder.build()

    /**
     * <code>string seigniorage_proceeds = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    var seigniorageProceeds: kotlin.String
      @JvmName("getSeigniorageProceeds")
      get() = _builder.getSeigniorageProceeds()
      @JvmName("setSeigniorageProceeds")
      set(value) {
        _builder.setSeigniorageProceeds(value)
      }
    /**
     * <code>string seigniorage_proceeds = 1 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int"];</code>
     */
    fun clearSeigniorageProceeds() {
      _builder.clearSeigniorageProceeds()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse.copy(block: terra.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl.() -> Unit): terra.treasury.v1beta1.QueryOuterClass.QuerySeigniorageProceedsResponse =
  terra.treasury.v1beta1.QuerySeigniorageProceedsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
