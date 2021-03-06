//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/upgrade/v1beta1/query.proto

package cosmos.upgrade.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryModuleVersionsResponse(block: cosmos.upgrade.v1beta1.QueryModuleVersionsResponseKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse =
  cosmos.upgrade.v1beta1.QueryModuleVersionsResponseKt.Dsl._create(cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse.newBuilder()).apply { block() }._build()
object QueryModuleVersionsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ModuleVersionsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     */
     val moduleVersions: com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getModuleVersionsList()
      )
    /**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     * @param value The moduleVersions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addModuleVersions")
    fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.add(value: cosmos.upgrade.v1beta1.Upgrade.ModuleVersion) {
      _builder.addModuleVersions(value)
    }/**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     * @param value The moduleVersions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignModuleVersions")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.plusAssign(value: cosmos.upgrade.v1beta1.Upgrade.ModuleVersion) {
      add(value)
    }/**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     * @param values The moduleVersions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllModuleVersions")
    fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion>) {
      _builder.addAllModuleVersions(values)
    }/**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     * @param values The moduleVersions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllModuleVersions")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion>) {
      addAll(values)
    }/**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     * @param index The index to set the value at.
     * @param value The moduleVersions to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setModuleVersions")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.set(index: kotlin.Int, value: cosmos.upgrade.v1beta1.Upgrade.ModuleVersion) {
      _builder.setModuleVersions(index, value)
    }/**
     * <pre>
     * module_versions is a list of module names with their consensus versions.
     * </pre>
     *
     * <code>repeated .cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearModuleVersions")
    fun com.google.protobuf.kotlin.DslList<cosmos.upgrade.v1beta1.Upgrade.ModuleVersion, ModuleVersionsProxy>.clear() {
      _builder.clearModuleVersions()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse.copy(block: cosmos.upgrade.v1beta1.QueryModuleVersionsResponseKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.QueryOuterClass.QueryModuleVersionsResponse =
  cosmos.upgrade.v1beta1.QueryModuleVersionsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
