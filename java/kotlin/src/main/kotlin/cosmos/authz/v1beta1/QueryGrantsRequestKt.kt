//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/authz/v1beta1/query.proto

package cosmos.authz.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryGrantsRequest(block: cosmos.authz.v1beta1.QueryGrantsRequestKt.Dsl.() -> Unit): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest =
  cosmos.authz.v1beta1.QueryGrantsRequestKt.Dsl._create(cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest.newBuilder()).apply { block() }._build()
object QueryGrantsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest = _builder.build()

    /**
     * <code>string granter = 1;</code>
     */
    var granter: kotlin.String
      @JvmName("getGranter")
      get() = _builder.getGranter()
      @JvmName("setGranter")
      set(value) {
        _builder.setGranter(value)
      }
    /**
     * <code>string granter = 1;</code>
     */
    fun clearGranter() {
      _builder.clearGranter()
    }

    /**
     * <code>string grantee = 2;</code>
     */
    var grantee: kotlin.String
      @JvmName("getGrantee")
      get() = _builder.getGrantee()
      @JvmName("setGrantee")
      set(value) {
        _builder.setGrantee(value)
      }
    /**
     * <code>string grantee = 2;</code>
     */
    fun clearGrantee() {
      _builder.clearGrantee()
    }

    /**
     * <pre>
     * Optional, msg_type_url, when set, will query only grants matching given msg type.
     * </pre>
     *
     * <code>string msg_type_url = 3;</code>
     */
    var msgTypeUrl: kotlin.String
      @JvmName("getMsgTypeUrl")
      get() = _builder.getMsgTypeUrl()
      @JvmName("setMsgTypeUrl")
      set(value) {
        _builder.setMsgTypeUrl(value)
      }
    /**
     * <pre>
     * Optional, msg_type_url, when set, will query only grants matching given msg type.
     * </pre>
     *
     * <code>string msg_type_url = 3;</code>
     */
    fun clearMsgTypeUrl() {
      _builder.clearMsgTypeUrl()
    }

    /**
     * <pre>
     * pagination defines an pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 4;</code>
     */
    var pagination: cosmos.base.query.v1beta1.Pagination.PageRequest
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <pre>
     * pagination defines an pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 4;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines an pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 4;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest.copy(block: cosmos.authz.v1beta1.QueryGrantsRequestKt.Dsl.() -> Unit): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsRequest =
  cosmos.authz.v1beta1.QueryGrantsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
