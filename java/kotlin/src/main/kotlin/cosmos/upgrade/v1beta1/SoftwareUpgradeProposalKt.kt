//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/upgrade/v1beta1/upgrade.proto

package cosmos.upgrade.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun softwareUpgradeProposal(block: cosmos.upgrade.v1beta1.SoftwareUpgradeProposalKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal =
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposalKt.Dsl._create(cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal.newBuilder()).apply { block() }._build()
object SoftwareUpgradeProposalKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal = _builder.build()

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
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal.copy(block: cosmos.upgrade.v1beta1.SoftwareUpgradeProposalKt.Dsl.() -> Unit): cosmos.upgrade.v1beta1.Upgrade.SoftwareUpgradeProposal =
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposalKt.Dsl._create(this.toBuilder()).apply { block() }._build()
