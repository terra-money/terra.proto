//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/lightclients/solomachine/v2/solomachine.proto

package ibc.lightclients.solomachine.v2;

@kotlin.jvm.JvmSynthetic
inline fun channelStateData(block: ibc.lightclients.solomachine.v2.ChannelStateDataKt.Dsl.() -> Unit): ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData =
  ibc.lightclients.solomachine.v2.ChannelStateDataKt.Dsl._create(ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData.newBuilder()).apply { block() }._build()
object ChannelStateDataKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData = _builder.build()

    /**
     * <code>bytes path = 1;</code>
     */
    var path: com.google.protobuf.ByteString
      @JvmName("getPath")
      get() = _builder.getPath()
      @JvmName("setPath")
      set(value) {
        _builder.setPath(value)
      }
    /**
     * <code>bytes path = 1;</code>
     */
    fun clearPath() {
      _builder.clearPath()
    }

    /**
     * <code>.ibc.core.channel.v1.Channel channel = 2;</code>
     */
    var channel: ibc.core.channel.v1.ChannelOuterClass.Channel
      @JvmName("getChannel")
      get() = _builder.getChannel()
      @JvmName("setChannel")
      set(value) {
        _builder.setChannel(value)
      }
    /**
     * <code>.ibc.core.channel.v1.Channel channel = 2;</code>
     */
    fun clearChannel() {
      _builder.clearChannel()
    }
    /**
     * <code>.ibc.core.channel.v1.Channel channel = 2;</code>
     * @return Whether the channel field is set.
     */
    fun hasChannel(): kotlin.Boolean {
      return _builder.hasChannel()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData.copy(block: ibc.lightclients.solomachine.v2.ChannelStateDataKt.Dsl.() -> Unit): ibc.lightclients.solomachine.v2.Solomachine.ChannelStateData =
  ibc.lightclients.solomachine.v2.ChannelStateDataKt.Dsl._create(this.toBuilder()).apply { block() }._build()
