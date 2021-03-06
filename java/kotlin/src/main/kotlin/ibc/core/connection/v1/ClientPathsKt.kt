//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/connection/v1/connection.proto

package ibc.core.connection.v1;

@kotlin.jvm.JvmSynthetic
inline fun clientPaths(block: ibc.core.connection.v1.ClientPathsKt.Dsl.() -> Unit): ibc.core.connection.v1.Connection.ClientPaths =
  ibc.core.connection.v1.ClientPathsKt.Dsl._create(ibc.core.connection.v1.Connection.ClientPaths.newBuilder()).apply { block() }._build()
object ClientPathsKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.connection.v1.Connection.ClientPaths.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.connection.v1.Connection.ClientPaths.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.connection.v1.Connection.ClientPaths = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class PathsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @return A list containing the paths.
     */
    val paths: com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>
      @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getPathsList()
      )
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @param value The paths to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addPaths")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.add(value: kotlin.String) {
      _builder.addPaths(value)
    }
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @param value The paths to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignPaths")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.plusAssign(value: kotlin.String) {
      _builder.addPaths(value)
    }
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @param values The paths to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllPaths")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllPaths(values)
    }
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @param values The paths to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllPaths")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllPaths(values)
    }
    /**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     * @param index The index to set the value at.
     * @param value The paths to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setPaths")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setPaths(index, value)
    }/**
     * <pre>
     * list of connection paths
     * </pre>
     *
     * <code>repeated string paths = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearPaths")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, PathsProxy>.clear() {
      _builder.clearPaths()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.connection.v1.Connection.ClientPaths.copy(block: ibc.core.connection.v1.ClientPathsKt.Dsl.() -> Unit): ibc.core.connection.v1.Connection.ClientPaths =
  ibc.core.connection.v1.ClientPathsKt.Dsl._create(this.toBuilder()).apply { block() }._build()
