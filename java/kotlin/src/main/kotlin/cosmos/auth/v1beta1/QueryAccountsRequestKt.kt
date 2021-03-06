//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/auth/v1beta1/query.proto

package cosmos.auth.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAccountsRequest(block: cosmos.auth.v1beta1.QueryAccountsRequestKt.Dsl.() -> Unit): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest =
  cosmos.auth.v1beta1.QueryAccountsRequestKt.Dsl._create(cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest.newBuilder()).apply { block() }._build()
object QueryAccountsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest = _builder.build()

    /**
     * <pre>
     * pagination defines an optional pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 1;</code>
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
     * pagination defines an optional pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 1;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines an optional pagination for the request.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 1;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest.copy(block: cosmos.auth.v1beta1.QueryAccountsRequestKt.Dsl.() -> Unit): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsRequest =
  cosmos.auth.v1beta1.QueryAccountsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
