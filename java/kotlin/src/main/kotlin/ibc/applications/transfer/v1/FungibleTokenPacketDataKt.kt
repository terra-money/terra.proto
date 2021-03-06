//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/applications/transfer/v1/transfer.proto

package ibc.applications.transfer.v1;

@kotlin.jvm.JvmSynthetic
inline fun fungibleTokenPacketData(block: ibc.applications.transfer.v1.FungibleTokenPacketDataKt.Dsl.() -> Unit): ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData =
  ibc.applications.transfer.v1.FungibleTokenPacketDataKt.Dsl._create(ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData.newBuilder()).apply { block() }._build()
object FungibleTokenPacketDataKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData = _builder.build()

    /**
     * <pre>
     * the token denomination to be transferred
     * </pre>
     *
     * <code>string denom = 1;</code>
     */
    var denom: kotlin.String
      @JvmName("getDenom")
      get() = _builder.getDenom()
      @JvmName("setDenom")
      set(value) {
        _builder.setDenom(value)
      }
    /**
     * <pre>
     * the token denomination to be transferred
     * </pre>
     *
     * <code>string denom = 1;</code>
     */
    fun clearDenom() {
      _builder.clearDenom()
    }

    /**
     * <pre>
     * the token amount to be transferred
     * </pre>
     *
     * <code>uint64 amount = 2;</code>
     */
    var amount: kotlin.Long
      @JvmName("getAmount")
      get() = _builder.getAmount()
      @JvmName("setAmount")
      set(value) {
        _builder.setAmount(value)
      }
    /**
     * <pre>
     * the token amount to be transferred
     * </pre>
     *
     * <code>uint64 amount = 2;</code>
     */
    fun clearAmount() {
      _builder.clearAmount()
    }

    /**
     * <pre>
     * the sender address
     * </pre>
     *
     * <code>string sender = 3;</code>
     */
    var sender: kotlin.String
      @JvmName("getSender")
      get() = _builder.getSender()
      @JvmName("setSender")
      set(value) {
        _builder.setSender(value)
      }
    /**
     * <pre>
     * the sender address
     * </pre>
     *
     * <code>string sender = 3;</code>
     */
    fun clearSender() {
      _builder.clearSender()
    }

    /**
     * <pre>
     * the recipient address on the destination chain
     * </pre>
     *
     * <code>string receiver = 4;</code>
     */
    var receiver: kotlin.String
      @JvmName("getReceiver")
      get() = _builder.getReceiver()
      @JvmName("setReceiver")
      set(value) {
        _builder.setReceiver(value)
      }
    /**
     * <pre>
     * the recipient address on the destination chain
     * </pre>
     *
     * <code>string receiver = 4;</code>
     */
    fun clearReceiver() {
      _builder.clearReceiver()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData.copy(block: ibc.applications.transfer.v1.FungibleTokenPacketDataKt.Dsl.() -> Unit): ibc.applications.transfer.v1.Transfer.FungibleTokenPacketData =
  ibc.applications.transfer.v1.FungibleTokenPacketDataKt.Dsl._create(this.toBuilder()).apply { block() }._build()
