//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/staking.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun valAddresses(block: cosmos.staking.v1beta1.ValAddressesKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.ValAddresses =
  cosmos.staking.v1beta1.ValAddressesKt.Dsl._create(cosmos.staking.v1beta1.Staking.ValAddresses.newBuilder()).apply { block() }._build()
object ValAddressesKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Staking.ValAddresses.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Staking.ValAddresses.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Staking.ValAddresses = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class AddressesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated string addresses = 1;</code>
     * @return A list containing the addresses.
     */
    val addresses: com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>
      @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAddressesList()
      )
    /**
     * <code>repeated string addresses = 1;</code>
     * @param value The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAddresses")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.add(value: kotlin.String) {
      _builder.addAddresses(value)
    }
    /**
     * <code>repeated string addresses = 1;</code>
     * @param value The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAddresses")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.plusAssign(value: kotlin.String) {
      _builder.addAddresses(value)
    }
    /**
     * <code>repeated string addresses = 1;</code>
     * @param values The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAddresses")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllAddresses(values)
    }
    /**
     * <code>repeated string addresses = 1;</code>
     * @param values The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAddresses")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllAddresses(values)
    }
    /**
     * <code>repeated string addresses = 1;</code>
     * @param index The index to set the value at.
     * @param value The addresses to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAddresses")
    operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setAddresses(index, value)
    }/**
     * <code>repeated string addresses = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAddresses")
    fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.clear() {
      _builder.clearAddresses()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Staking.ValAddresses.copy(block: cosmos.staking.v1beta1.ValAddressesKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.ValAddresses =
  cosmos.staking.v1beta1.ValAddressesKt.Dsl._create(this.toBuilder()).apply { block() }._build()
