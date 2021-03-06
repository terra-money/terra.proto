//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/auth/v1beta1/query.proto

package cosmos.auth.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryAccountsResponse(block: cosmos.auth.v1beta1.QueryAccountsResponseKt.Dsl.() -> Unit): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse =
  cosmos.auth.v1beta1.QueryAccountsResponseKt.Dsl._create(cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse.newBuilder()).apply { block() }._build()
object QueryAccountsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class AccountsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     */
     val accounts: com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAccountsList()
      )
    /**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     * @param value The accounts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAccounts")
    fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.add(value: com.google.protobuf.Any) {
      _builder.addAccounts(value)
    }/**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     * @param value The accounts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAccounts")
    inline operator fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.plusAssign(value: com.google.protobuf.Any) {
      add(value)
    }/**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     * @param values The accounts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAccounts")
    fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.addAll(values: kotlin.collections.Iterable<com.google.protobuf.Any>) {
      _builder.addAllAccounts(values)
    }/**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     * @param values The accounts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAccounts")
    inline operator fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.plusAssign(values: kotlin.collections.Iterable<com.google.protobuf.Any>) {
      addAll(values)
    }/**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     * @param index The index to set the value at.
     * @param value The accounts to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAccounts")
    operator fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.set(index: kotlin.Int, value: com.google.protobuf.Any) {
      _builder.setAccounts(index, value)
    }/**
     * <pre>
     * accounts are the existing accounts
     * </pre>
     *
     * <code>repeated .google.protobuf.Any accounts = 1 [(.cosmos_proto.accepts_interface) = "AccountI"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAccounts")
    fun com.google.protobuf.kotlin.DslList<com.google.protobuf.Any, AccountsProxy>.clear() {
      _builder.clearAccounts()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    var pagination: cosmos.base.query.v1beta1.Pagination.PageResponse
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines the pagination in the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse.copy(block: cosmos.auth.v1beta1.QueryAccountsResponseKt.Dsl.() -> Unit): cosmos.auth.v1beta1.QueryOuterClass.QueryAccountsResponse =
  cosmos.auth.v1beta1.QueryAccountsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
