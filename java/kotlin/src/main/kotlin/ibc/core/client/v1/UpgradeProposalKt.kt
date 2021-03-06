//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/client.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmSynthetic
inline fun upgradeProposal(block: ibc.core.client.v1.UpgradeProposalKt.Dsl.() -> Unit): ibc.core.client.v1.Client.UpgradeProposal =
  ibc.core.client.v1.UpgradeProposalKt.Dsl._create(ibc.core.client.v1.Client.UpgradeProposal.newBuilder()).apply { block() }._build()
object UpgradeProposalKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.client.v1.Client.UpgradeProposal.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Client.UpgradeProposal.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Client.UpgradeProposal = _builder.build()

    /**
     * <code>string title = 1;</code>
     */
    var title: kotlin.String
      @JvmName("getTitle")
      get() = _builder.getTitle()
      @JvmName("setTitle")
      set(value) {
        _builder.setTitle(value)
      }
    /**
     * <code>string title = 1;</code>
     */
    fun clearTitle() {
      _builder.clearTitle()
    }

    /**
     * <code>string description = 2;</code>
     */
    var description: kotlin.String
      @JvmName("getDescription")
      get() = _builder.getDescription()
      @JvmName("setDescription")
      set(value) {
        _builder.setDescription(value)
      }
    /**
     * <code>string description = 2;</code>
     */
    fun clearDescription() {
      _builder.clearDescription()
    }

    /**
     * <code>.cosmos.upgrade.v1beta1.Plan plan = 3 [(.gogoproto.nullable) = false];</code>
     */
    var plan: cosmos.upgrade.v1beta1.Upgrade.Plan
      @JvmName("getPlan")
      get() = _builder.getPlan()
      @JvmName("setPlan")
      set(value) {
        _builder.setPlan(value)
      }
    /**
     * <code>.cosmos.upgrade.v1beta1.Plan plan = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearPlan() {
      _builder.clearPlan()
    }
    /**
     * <code>.cosmos.upgrade.v1beta1.Plan plan = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the plan field is set.
     */
    fun hasPlan(): kotlin.Boolean {
      return _builder.hasPlan()
    }

    /**
     * <pre>
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     * </pre>
     *
     * <code>.google.protobuf.Any upgraded_client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"upgraded_client_state&#92;""];</code>
     */
    var upgradedClientState: com.google.protobuf.Any
      @JvmName("getUpgradedClientState")
      get() = _builder.getUpgradedClientState()
      @JvmName("setUpgradedClientState")
      set(value) {
        _builder.setUpgradedClientState(value)
      }
    /**
     * <pre>
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     * </pre>
     *
     * <code>.google.protobuf.Any upgraded_client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"upgraded_client_state&#92;""];</code>
     */
    fun clearUpgradedClientState() {
      _builder.clearUpgradedClientState()
    }
    /**
     * <pre>
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     * </pre>
     *
     * <code>.google.protobuf.Any upgraded_client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"upgraded_client_state&#92;""];</code>
     * @return Whether the upgradedClientState field is set.
     */
    fun hasUpgradedClientState(): kotlin.Boolean {
      return _builder.hasUpgradedClientState()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.client.v1.Client.UpgradeProposal.copy(block: ibc.core.client.v1.UpgradeProposalKt.Dsl.() -> Unit): ibc.core.client.v1.Client.UpgradeProposal =
  ibc.core.client.v1.UpgradeProposalKt.Dsl._create(this.toBuilder()).apply { block() }._build()
