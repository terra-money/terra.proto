//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/store/v1beta1/listening.proto

package cosmos.base.store.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun storeKVPair(block: cosmos.base.store.v1beta1.StoreKVPairKt.Dsl.() -> Unit): cosmos.base.store.v1beta1.Listening.StoreKVPair =
  cosmos.base.store.v1beta1.StoreKVPairKt.Dsl._create(cosmos.base.store.v1beta1.Listening.StoreKVPair.newBuilder()).apply { block() }._build()
object StoreKVPairKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.base.store.v1beta1.Listening.StoreKVPair.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.store.v1beta1.Listening.StoreKVPair.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.store.v1beta1.Listening.StoreKVPair = _builder.build()

    /**
     * <pre>
     * the store key for the KVStore this pair originates from
     * </pre>
     *
     * <code>string store_key = 1;</code>
     */
    var storeKey: kotlin.String
      @JvmName("getStoreKey")
      get() = _builder.getStoreKey()
      @JvmName("setStoreKey")
      set(value) {
        _builder.setStoreKey(value)
      }
    /**
     * <pre>
     * the store key for the KVStore this pair originates from
     * </pre>
     *
     * <code>string store_key = 1;</code>
     */
    fun clearStoreKey() {
      _builder.clearStoreKey()
    }

    /**
     * <pre>
     * true indicates a delete operation, false indicates a set operation
     * </pre>
     *
     * <code>bool delete = 2;</code>
     */
    var delete: kotlin.Boolean
      @JvmName("getDelete")
      get() = _builder.getDelete()
      @JvmName("setDelete")
      set(value) {
        _builder.setDelete(value)
      }
    /**
     * <pre>
     * true indicates a delete operation, false indicates a set operation
     * </pre>
     *
     * <code>bool delete = 2;</code>
     */
    fun clearDelete() {
      _builder.clearDelete()
    }

    /**
     * <code>bytes key = 3;</code>
     */
    var key: com.google.protobuf.ByteString
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <code>bytes key = 3;</code>
     */
    fun clearKey() {
      _builder.clearKey()
    }

    /**
     * <code>bytes value = 4;</code>
     */
    var value: com.google.protobuf.ByteString
      @JvmName("getValue")
      get() = _builder.getValue()
      @JvmName("setValue")
      set(value) {
        _builder.setValue(value)
      }
    /**
     * <code>bytes value = 4;</code>
     */
    fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.base.store.v1beta1.Listening.StoreKVPair.copy(block: cosmos.base.store.v1beta1.StoreKVPairKt.Dsl.() -> Unit): cosmos.base.store.v1beta1.Listening.StoreKVPair =
  cosmos.base.store.v1beta1.StoreKVPairKt.Dsl._create(this.toBuilder()).apply { block() }._build()
