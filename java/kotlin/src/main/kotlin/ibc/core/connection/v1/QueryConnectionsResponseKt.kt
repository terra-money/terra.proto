//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/connection/v1/query.proto

package ibc.core.connection.v1;

@kotlin.jvm.JvmSynthetic
inline fun queryConnectionsResponse(block: ibc.core.connection.v1.QueryConnectionsResponseKt.Dsl.() -> Unit): ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse =
  ibc.core.connection.v1.QueryConnectionsResponseKt.Dsl._create(ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse.newBuilder()).apply { block() }._build()
object QueryConnectionsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ConnectionsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     */
     val connections: com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getConnectionsList()
      )
    /**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     * @param value The connections to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addConnections")
    fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.add(value: ibc.core.connection.v1.Connection.IdentifiedConnection) {
      _builder.addConnections(value)
    }/**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     * @param value The connections to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignConnections")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.plusAssign(value: ibc.core.connection.v1.Connection.IdentifiedConnection) {
      add(value)
    }/**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     * @param values The connections to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllConnections")
    fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.addAll(values: kotlin.collections.Iterable<ibc.core.connection.v1.Connection.IdentifiedConnection>) {
      _builder.addAllConnections(values)
    }/**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     * @param values The connections to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllConnections")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.plusAssign(values: kotlin.collections.Iterable<ibc.core.connection.v1.Connection.IdentifiedConnection>) {
      addAll(values)
    }/**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     * @param index The index to set the value at.
     * @param value The connections to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setConnections")
    operator fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.set(index: kotlin.Int, value: ibc.core.connection.v1.Connection.IdentifiedConnection) {
      _builder.setConnections(index, value)
    }/**
     * <pre>
     * list of stored connections of the chain.
     * </pre>
     *
     * <code>repeated .ibc.core.connection.v1.IdentifiedConnection connections = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearConnections")
    fun com.google.protobuf.kotlin.DslList<ibc.core.connection.v1.Connection.IdentifiedConnection, ConnectionsProxy>.clear() {
      _builder.clearConnections()
    }
    /**
     * <pre>
     * pagination response
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
     * pagination response
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination response
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }

    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
     */
    var height: ibc.core.client.v1.Client.Height
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }
    /**
     * <pre>
     * query block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the height field is set.
     */
    fun hasHeight(): kotlin.Boolean {
      return _builder.hasHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse.copy(block: ibc.core.connection.v1.QueryConnectionsResponseKt.Dsl.() -> Unit): ibc.core.connection.v1.QueryOuterClass.QueryConnectionsResponse =
  ibc.core.connection.v1.QueryConnectionsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
