//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/genesis.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun genesisState(block: cosmos.staking.v1beta1.GenesisStateKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Genesis.GenesisState =
  cosmos.staking.v1beta1.GenesisStateKt.Dsl._create(cosmos.staking.v1beta1.Genesis.GenesisState.newBuilder()).apply { block() }._build()
object GenesisStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Genesis.GenesisState.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Genesis.GenesisState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Genesis.GenesisState = _builder.build()

    /**
     * <pre>
     * params defines all the paramaters of related to deposit.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     */
    var params: cosmos.staking.v1beta1.Staking.Params
      @JvmName("getParams")
      get() = _builder.getParams()
      @JvmName("setParams")
      set(value) {
        _builder.setParams(value)
      }
    /**
     * <pre>
     * params defines all the paramaters of related to deposit.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearParams() {
      _builder.clearParams()
    }
    /**
     * <pre>
     * params defines all the paramaters of related to deposit.
     * </pre>
     *
     * <code>.cosmos.staking.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the params field is set.
     */
    fun hasParams(): kotlin.Boolean {
      return _builder.hasParams()
    }

    /**
     * <pre>
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     * </pre>
     *
     * <code>bytes last_total_power = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"last_total_power&#92;""];</code>
     */
    var lastTotalPower: com.google.protobuf.ByteString
      @JvmName("getLastTotalPower")
      get() = _builder.getLastTotalPower()
      @JvmName("setLastTotalPower")
      set(value) {
        _builder.setLastTotalPower(value)
      }
    /**
     * <pre>
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     * </pre>
     *
     * <code>bytes last_total_power = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int", (.gogoproto.moretags) = "yaml:&#92;"last_total_power&#92;""];</code>
     */
    fun clearLastTotalPower() {
      _builder.clearLastTotalPower()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class LastValidatorPowersProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     */
     val lastValidatorPowers: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getLastValidatorPowersList()
      )
    /**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     * @param value The lastValidatorPowers to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addLastValidatorPowers")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.add(value: cosmos.staking.v1beta1.Genesis.LastValidatorPower) {
      _builder.addLastValidatorPowers(value)
    }/**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     * @param value The lastValidatorPowers to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignLastValidatorPowers")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.plusAssign(value: cosmos.staking.v1beta1.Genesis.LastValidatorPower) {
      add(value)
    }/**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     * @param values The lastValidatorPowers to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllLastValidatorPowers")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Genesis.LastValidatorPower>) {
      _builder.addAllLastValidatorPowers(values)
    }/**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     * @param values The lastValidatorPowers to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllLastValidatorPowers")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Genesis.LastValidatorPower>) {
      addAll(values)
    }/**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The lastValidatorPowers to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setLastValidatorPowers")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Genesis.LastValidatorPower) {
      _builder.setLastValidatorPowers(index, value)
    }/**
     * <pre>
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.LastValidatorPower last_validator_powers = 3 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"last_validator_powers&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearLastValidatorPowers")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Genesis.LastValidatorPower, LastValidatorPowersProxy>.clear() {
      _builder.clearLastValidatorPowers()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ValidatorsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     */
     val validators: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getValidatorsList()
      )
    /**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The validators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addValidators")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.add(value: cosmos.staking.v1beta1.Staking.Validator) {
      _builder.addValidators(value)
    }/**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The validators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignValidators")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.Validator) {
      add(value)
    }/**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The validators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllValidators")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Validator>) {
      _builder.addAllValidators(values)
    }/**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The validators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllValidators")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Validator>) {
      addAll(values)
    }/**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The validators to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setValidators")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.Validator) {
      _builder.setValidators(index, value)
    }/**
     * <pre>
     * delegations defines the validator set at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Validator validators = 4 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearValidators")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Validator, ValidatorsProxy>.clear() {
      _builder.clearValidators()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class DelegationsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     */
     val delegations: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getDelegationsList()
      )
    /**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     * @param value The delegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.add(value: cosmos.staking.v1beta1.Staking.Delegation) {
      _builder.addDelegations(value)
    }/**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     * @param value The delegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignDelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.Delegation) {
      add(value)
    }/**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     * @param values The delegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Delegation>) {
      _builder.addAllDelegations(values)
    }/**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     * @param values The delegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllDelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Delegation>) {
      addAll(values)
    }/**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The delegations to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setDelegations")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.Delegation) {
      _builder.setDelegations(index, value)
    }/**
     * <pre>
     * delegations defines the delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Delegation delegations = 5 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Delegation, DelegationsProxy>.clear() {
      _builder.clearDelegations()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class UnbondingDelegationsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     */
     val unbondingDelegations: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getUnbondingDelegationsList()
      )
    /**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     * @param value The unbondingDelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addUnbondingDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.add(value: cosmos.staking.v1beta1.Staking.UnbondingDelegation) {
      _builder.addUnbondingDelegations(value)
    }/**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     * @param value The unbondingDelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignUnbondingDelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.UnbondingDelegation) {
      add(value)
    }/**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     * @param values The unbondingDelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllUnbondingDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.UnbondingDelegation>) {
      _builder.addAllUnbondingDelegations(values)
    }/**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     * @param values The unbondingDelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllUnbondingDelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.UnbondingDelegation>) {
      addAll(values)
    }/**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The unbondingDelegations to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setUnbondingDelegations")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.UnbondingDelegation) {
      _builder.setUnbondingDelegations(index, value)
    }/**
     * <pre>
     * unbonding_delegations defines the unbonding delegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.UnbondingDelegation unbonding_delegations = 6 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"unbonding_delegations&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearUnbondingDelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.UnbondingDelegation, UnbondingDelegationsProxy>.clear() {
      _builder.clearUnbondingDelegations()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class RedelegationsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     */
     val redelegations: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getRedelegationsList()
      )
    /**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     * @param value The redelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addRedelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.add(value: cosmos.staking.v1beta1.Staking.Redelegation) {
      _builder.addRedelegations(value)
    }/**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     * @param value The redelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignRedelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.Redelegation) {
      add(value)
    }/**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     * @param values The redelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllRedelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Redelegation>) {
      _builder.addAllRedelegations(values)
    }/**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     * @param values The redelegations to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllRedelegations")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.Redelegation>) {
      addAll(values)
    }/**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The redelegations to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setRedelegations")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.Redelegation) {
      _builder.setRedelegations(index, value)
    }/**
     * <pre>
     * redelegations defines the redelegations active at genesis.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.Redelegation redelegations = 7 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearRedelegations")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.Redelegation, RedelegationsProxy>.clear() {
      _builder.clearRedelegations()
    }
    /**
     * <code>bool exported = 8;</code>
     */
    var exported: kotlin.Boolean
      @JvmName("getExported")
      get() = _builder.getExported()
      @JvmName("setExported")
      set(value) {
        _builder.setExported(value)
      }
    /**
     * <code>bool exported = 8;</code>
     */
    fun clearExported() {
      _builder.clearExported()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Genesis.GenesisState.copy(block: cosmos.staking.v1beta1.GenesisStateKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Genesis.GenesisState =
  cosmos.staking.v1beta1.GenesisStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()
