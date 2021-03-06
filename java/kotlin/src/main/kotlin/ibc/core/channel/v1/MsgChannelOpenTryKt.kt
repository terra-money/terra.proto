//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/tx.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmSynthetic
inline fun msgChannelOpenTry(block: ibc.core.channel.v1.MsgChannelOpenTryKt.Dsl.() -> Unit): ibc.core.channel.v1.Tx.MsgChannelOpenTry =
  ibc.core.channel.v1.MsgChannelOpenTryKt.Dsl._create(ibc.core.channel.v1.Tx.MsgChannelOpenTry.newBuilder()).apply { block() }._build()
object MsgChannelOpenTryKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.channel.v1.Tx.MsgChannelOpenTry.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.Tx.MsgChannelOpenTry.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.Tx.MsgChannelOpenTry = _builder.build()

    /**
     * <code>string port_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"port_id&#92;""];</code>
     */
    var portId: kotlin.String
      @JvmName("getPortId")
      get() = _builder.getPortId()
      @JvmName("setPortId")
      set(value) {
        _builder.setPortId(value)
      }
    /**
     * <code>string port_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"port_id&#92;""];</code>
     */
    fun clearPortId() {
      _builder.clearPortId()
    }

    /**
     * <pre>
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     * </pre>
     *
     * <code>string previous_channel_id = 2 [(.gogoproto.moretags) = "yaml:&#92;"previous_channel_id&#92;""];</code>
     */
    var previousChannelId: kotlin.String
      @JvmName("getPreviousChannelId")
      get() = _builder.getPreviousChannelId()
      @JvmName("setPreviousChannelId")
      set(value) {
        _builder.setPreviousChannelId(value)
      }
    /**
     * <pre>
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     * </pre>
     *
     * <code>string previous_channel_id = 2 [(.gogoproto.moretags) = "yaml:&#92;"previous_channel_id&#92;""];</code>
     */
    fun clearPreviousChannelId() {
      _builder.clearPreviousChannelId()
    }

    /**
     * <code>.ibc.core.channel.v1.Channel channel = 3 [(.gogoproto.nullable) = false];</code>
     */
    var channel: ibc.core.channel.v1.ChannelOuterClass.Channel
      @JvmName("getChannel")
      get() = _builder.getChannel()
      @JvmName("setChannel")
      set(value) {
        _builder.setChannel(value)
      }
    /**
     * <code>.ibc.core.channel.v1.Channel channel = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearChannel() {
      _builder.clearChannel()
    }
    /**
     * <code>.ibc.core.channel.v1.Channel channel = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the channel field is set.
     */
    fun hasChannel(): kotlin.Boolean {
      return _builder.hasChannel()
    }

    /**
     * <code>string counterparty_version = 4 [(.gogoproto.moretags) = "yaml:&#92;"counterparty_version&#92;""];</code>
     */
    var counterpartyVersion: kotlin.String
      @JvmName("getCounterpartyVersion")
      get() = _builder.getCounterpartyVersion()
      @JvmName("setCounterpartyVersion")
      set(value) {
        _builder.setCounterpartyVersion(value)
      }
    /**
     * <code>string counterparty_version = 4 [(.gogoproto.moretags) = "yaml:&#92;"counterparty_version&#92;""];</code>
     */
    fun clearCounterpartyVersion() {
      _builder.clearCounterpartyVersion()
    }

    /**
     * <code>bytes proof_init = 5 [(.gogoproto.moretags) = "yaml:&#92;"proof_init&#92;""];</code>
     */
    var proofInit: com.google.protobuf.ByteString
      @JvmName("getProofInit")
      get() = _builder.getProofInit()
      @JvmName("setProofInit")
      set(value) {
        _builder.setProofInit(value)
      }
    /**
     * <code>bytes proof_init = 5 [(.gogoproto.moretags) = "yaml:&#92;"proof_init&#92;""];</code>
     */
    fun clearProofInit() {
      _builder.clearProofInit()
    }

    /**
     * <code>.ibc.core.client.v1.Height proof_height = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     */
    var proofHeight: ibc.core.client.v1.Client.Height
      @JvmName("getProofHeight")
      get() = _builder.getProofHeight()
      @JvmName("setProofHeight")
      set(value) {
        _builder.setProofHeight(value)
      }
    /**
     * <code>.ibc.core.client.v1.Height proof_height = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     */
    fun clearProofHeight() {
      _builder.clearProofHeight()
    }
    /**
     * <code>.ibc.core.client.v1.Height proof_height = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     * @return Whether the proofHeight field is set.
     */
    fun hasProofHeight(): kotlin.Boolean {
      return _builder.hasProofHeight()
    }

    /**
     * <code>string signer = 7;</code>
     */
    var signer: kotlin.String
      @JvmName("getSigner")
      get() = _builder.getSigner()
      @JvmName("setSigner")
      set(value) {
        _builder.setSigner(value)
      }
    /**
     * <code>string signer = 7;</code>
     */
    fun clearSigner() {
      _builder.clearSigner()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.channel.v1.Tx.MsgChannelOpenTry.copy(block: ibc.core.channel.v1.MsgChannelOpenTryKt.Dsl.() -> Unit): ibc.core.channel.v1.Tx.MsgChannelOpenTry =
  ibc.core.channel.v1.MsgChannelOpenTryKt.Dsl._create(this.toBuilder()).apply { block() }._build()
