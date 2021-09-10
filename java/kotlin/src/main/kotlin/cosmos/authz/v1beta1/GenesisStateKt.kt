//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/authz/v1beta1/genesis.proto

package cosmos.authz.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun genesisState(block: cosmos.authz.v1beta1.GenesisStateKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Genesis.GenesisState =
  cosmos.authz.v1beta1.GenesisStateKt.Dsl._create(cosmos.authz.v1beta1.Genesis.GenesisState.newBuilder()).apply { block() }._build()
object GenesisStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.authz.v1beta1.Genesis.GenesisState.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.authz.v1beta1.Genesis.GenesisState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.authz.v1beta1.Genesis.GenesisState = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class AuthorizationProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     */
     val authorization: com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAuthorizationList()
      )
    /**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The authorization to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAuthorization")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.add(value: cosmos.authz.v1beta1.Genesis.GrantAuthorization) {
      _builder.addAuthorization(value)
    }/**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     * @param value The authorization to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAuthorization")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.plusAssign(value: cosmos.authz.v1beta1.Genesis.GrantAuthorization) {
      add(value)
    }/**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The authorization to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAuthorization")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.addAll(values: kotlin.collections.Iterable<cosmos.authz.v1beta1.Genesis.GrantAuthorization>) {
      _builder.addAllAuthorization(values)
    }/**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     * @param values The authorization to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAuthorization")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.authz.v1beta1.Genesis.GrantAuthorization>) {
      addAll(values)
    }/**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The authorization to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAuthorization")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.set(index: kotlin.Int, value: cosmos.authz.v1beta1.Genesis.GrantAuthorization) {
      _builder.setAuthorization(index, value)
    }/**
     * <code>repeated .cosmos.authz.v1beta1.GrantAuthorization authorization = 1 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAuthorization")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Genesis.GrantAuthorization, AuthorizationProxy>.clear() {
      _builder.clearAuthorization()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.authz.v1beta1.Genesis.GenesisState.copy(block: cosmos.authz.v1beta1.GenesisStateKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Genesis.GenesisState =
  cosmos.authz.v1beta1.GenesisStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()
