//! Registry of type URLs associated with various protobuf types defined in
//! this crate.

// TODO(tarcieri): leverage first-class support for type URLs in prost?
// See: https://github.com/tokio-rs/prost/issues/299

use crate::{cosmos, cosmwasm , ibc, alliance, osmosis, pob, traits::TypeUrl, juno};

// #########
// Alliance
// #########
impl TypeUrl for alliance::alliance::MsgCreateAllianceProposal {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgCreateAllianceProposal";
}

impl TypeUrl for alliance::alliance::MsgUpdateAllianceProposal {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgUpdateAllianceProposal";
}

impl TypeUrl for alliance::alliance::MsgDeleteAllianceProposal {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgDeleteAllianceProposal";
}

impl TypeUrl for alliance::alliance::MsgCreateAlliance {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgCreateAlliance";
}

impl TypeUrl for alliance::alliance::MsgUpdateAlliance {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgUpdateAlliance";
}

impl TypeUrl for alliance::alliance::MsgDeleteAlliance {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgDeleteAlliance";
}

impl TypeUrl for alliance::alliance::MsgUpdateParams {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgUpdateParams";
}

impl TypeUrl for alliance::alliance::MsgDelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgDelegate";
}

impl TypeUrl for alliance::alliance::MsgUndelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgUndelegate";
}

impl TypeUrl for alliance::alliance::MsgRedelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgRedelegate";
}

impl TypeUrl for alliance::alliance::MsgClaimDelegationRewards {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgClaimDelegationRewards";
}

// #########
// Auth
// #########
impl TypeUrl for cosmos::auth::v1beta1::BaseAccount {
    const TYPE_URL: &'static str = "/cosmos.auth.v1beta1.BaseAccount";
}
impl TypeUrl for cosmos::auth::v1beta1::ModuleAccount {
    const TYPE_URL: &'static str = "/cosmos.auth.v1beta1.ModuleAccount";
}

// ######
// Authz
// ######
impl TypeUrl for cosmos::authz::v1beta1::MsgGrant {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.MsgGrant";
}

impl TypeUrl for cosmos::authz::v1beta1::MsgExec {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.MsgExec";
}

impl TypeUrl for cosmos::authz::v1beta1::MsgRevoke {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.MsgRevoke";
}

// ##########
// Consensus
// ##########
impl TypeUrl for cosmos::consensus::v1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.MsgUpdateParams";
}

// #######
// Crisis
// #######
impl TypeUrl for cosmos::crisis::v1beta1::MsgVerifyInvariant {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.MsgVerifyInvariant";
}

impl TypeUrl for cosmos::crisis::v1beta1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.authz.v1beta1.UpdateParams";
}

// #############
// Distribution
// #############
impl TypeUrl for cosmos::distribution::v1beta1::MsgSetWithdrawAddress {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgWithdrawDelegatorReward {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgWithdrawValidatorCommission {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgFundCommunityPool {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgCommunityPoolSpend {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgUpdateParams";
}

// #############
// Evidence
// #############
impl TypeUrl for cosmos::evidence::v1beta1::MsgSubmitEvidence {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgSubmitEvidence";
}

// #############
// Feegrant
// #############
impl TypeUrl for cosmos::feegrant::v1beta1::MsgGrantAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::MsgRevokeAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::BasicAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.BasicAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::PeriodicAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.PeriodicAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::AllowedMsgAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
}


// ####
// GOV
// ####
impl TypeUrl for cosmos::gov::v1::MsgSubmitProposal {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgSubmitProposal";
}
impl TypeUrl for cosmos::gov::v1::MsgExecLegacyContent {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgExecLegacyContent";
}
impl TypeUrl for cosmos::gov::v1::MsgVote {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgVote";
}
impl TypeUrl for cosmos::gov::v1::MsgVoteWeighted {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgVoteWeighted";
}
impl TypeUrl for cosmos::gov::v1::MsgDeposit {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgDeposit";
}
impl TypeUrl for cosmos::gov::v1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.gov.v1.MsgUpdateParams";
}

// #####
// Mint
// #####
impl TypeUrl for cosmos::mint::v1beta1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.mint.v1beta1.MsgUpdateParams";
}

// #########
// Slashing
// #########
impl TypeUrl for cosmos::slashing::v1beta1::MsgUnjail {
    const TYPE_URL: &'static str = "/cosmos.slashing.v1beta1.MsgUnjail";
}

// ########
// Staking
// ########
impl TypeUrl for cosmos::staking::v1beta1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgUpdateParams";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgCreateValidator {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgCreateValidator";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgEditValidator {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgEditValidator";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgDelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgDelegate";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgUndelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgUndelegate";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgBeginRedelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgBeginRedelegate";
}
impl TypeUrl for cosmos::staking::v1beta1::MsgCancelUnbondingDelegation {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
}

// ########
// Vesting
// ########

impl TypeUrl for cosmos::vesting::v1beta1::MsgCreateVestingAccount {
    const TYPE_URL: &'static str = "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
}
impl TypeUrl for cosmos::vesting::v1beta1::MsgCreatePermanentLockedAccount {
    const TYPE_URL: &'static str = "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
}
impl TypeUrl for cosmos::vesting::v1beta1::MsgCreatePeriodicVestingAccount {
    const TYPE_URL: &'static str = "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
}
impl TypeUrl for cosmos::vesting::v1beta1::MsgDonateAllVestingTokens {
    const TYPE_URL: &'static str = "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
}

// #########
// CosmWasm
// #########
impl TypeUrl for cosmwasm::wasm::v1::MsgStoreCode {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreCode";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContract";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContract2 {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContract2";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgExecuteContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgExecuteContract";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgMigrateContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgMigrateContract";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateAdmin {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateAdmin";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgClearAdmin {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgClearAdmin";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateInstantiateConfig {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateParams {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateParams";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgSudoContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgSudoContract";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgPinCodes {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgPinCodes";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUnpinCodes {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUnpinCodes";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgStoreAndInstantiateContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgStoreCodeResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContract2Response {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgExecuteContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgMigrateContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateAdminResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgClearAdminResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgClearAdminResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateInstantiateConfigResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateParamsResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateParamsResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgSudoContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgSudoContractResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgPinCodesResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgPinCodesResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgUnpinCodesResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUnpinCodesResponse";
}
impl TypeUrl for cosmwasm::wasm::v1::MsgStoreAndInstantiateContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse";
}

// #############
// IBC TRANSFER
// #############
impl TypeUrl for ibc::applications::transfer::v1::MsgTransfer {
    const TYPE_URL: &'static str = "/ibc.applications.transfer.v1.MsgTransfer";
}

// ########
// IBC Fee
// ########
impl TypeUrl for ibc::applications::fee::v1::MsgRegisterPayee {
    const TYPE_URL: &'static str = "/ibc.applications.fee.v1.MsgRegisterPayee";
}
impl TypeUrl for ibc::applications::fee::v1::MsgRegisterCounterpartyPayee {
    const TYPE_URL: &'static str = "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
}
impl TypeUrl for ibc::applications::fee::v1::MsgPayPacketFee {
    const TYPE_URL: &'static str = "/ibc.applications.fee.v1.MsgPayPacketFee";
}
impl TypeUrl for ibc::applications::fee::v1::MsgPayPacketFeeAsync {
    const TYPE_URL: &'static str = "/ibc.applications.fee.v1.MsgPayPacketFeeAsync";
}

// ########################
// IBC interchain accounts
// ########################
impl TypeUrl for ibc::applications::interchain_accounts::controller::v1::MsgRegisterInterchainAccount {
    const TYPE_URL: &'static str = "/ibc.applications.interchain_accounts.v1.MsgRegisterInterchainAccount";
}
impl TypeUrl for ibc::applications::interchain_accounts::controller::v1::MsgSendTx {
    const TYPE_URL: &'static str = "/ibc.applications.interchain_accounts.v1.MsgSendTx";
}

// #############
// IBC channels
// #############
impl TypeUrl for ibc::core::channel::v1::MsgChannelCloseConfirm{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelCloseConfirm";
}

impl TypeUrl for ibc::core::channel::v1::MsgChannelOpenInit{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelOpenInit";
}

impl TypeUrl for ibc::core::channel::v1::MsgChannelOpenTry{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelOpenTry";
}

impl TypeUrl for ibc::core::channel::v1::MsgChannelOpenAck{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelOpenAck";
}

impl TypeUrl for ibc::core::channel::v1::MsgChannelOpenConfirm{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelOpenConfirm";
}

impl TypeUrl for ibc::core::channel::v1::MsgChannelCloseInit{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgChannelCloseInit";
}

impl TypeUrl for ibc::core::channel::v1::MsgRecvPacket{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgRecvPacket";
}

impl TypeUrl for ibc::core::channel::v1::MsgTimeout{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgTimeout";
}

impl TypeUrl for ibc::core::channel::v1::MsgTimeoutOnClose{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgTimeoutOnClose";
}

impl TypeUrl for ibc::core::channel::v1::MsgAcknowledgement{
    const TYPE_URL: &'static str = "/ibc.core.channel.v1.MsgAcknowledgement";
}

// #############
// IBC Clients
// #############
impl TypeUrl for ibc::core::client::v1::MsgCreateClient{
    const TYPE_URL: &'static str = "/ibc.core.client.v1.MsgCreateClient";
}

impl TypeUrl for ibc::core::client::v1::MsgUpdateClient{
    const TYPE_URL: &'static str = "/ibc.core.client.v1.MsgUpdateClient";
}

impl TypeUrl for ibc::core::client::v1::MsgUpgradeClient{
    const TYPE_URL: &'static str = "/ibc.core.client.v1.MsgUpgradeClient";
}

impl TypeUrl for ibc::core::client::v1::MsgSubmitMisbehaviour{
    const TYPE_URL: &'static str = "/ibc.core.client.v1.MsgSubmitMisbehaviour";
}

// #############
// IBC connection
// #############
impl TypeUrl for ibc::core::connection::v1::MsgConnectionOpenInit{
    const TYPE_URL: &'static str = "/ibc.core.connection.v1.MsgConnectionOpenInit";
}

impl TypeUrl for ibc::core::connection::v1::MsgConnectionOpenTry{
    const TYPE_URL: &'static str = "/ibc.core.connection.v1.MsgConnectionOpenTry";
}

impl TypeUrl for ibc::core::connection::v1::MsgConnectionOpenAck{
    const TYPE_URL: &'static str = "/ibc.core.connection.v1.MsgConnectionOpenAck";
}

impl TypeUrl for ibc::core::connection::v1::MsgConnectionOpenConfirm{
    const TYPE_URL: &'static str = "/ibc.core.connection.v1.MsgConnectionOpenConfirm";
}

// #############
// TokenFactory
// #############
impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgUpdateParams{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgUpdateParams";
}
impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgCreateDenom{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgCreateDenom";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgMint{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgMint";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgBurn{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgBurn";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgChangeAdmin{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgSetDenomMetadata{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgSetBeforeSendHook{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook";
}

impl TypeUrl for osmosis::tokenfactory::v1beta1::MsgForceTransfer{
    const TYPE_URL: &'static str = "/osmosis.tokenfactory.v1beta1.MsgForceTransfer";
}

// ####
// Pob
// ####

impl TypeUrl for pob::builder::v1::MsgAuctionBid{
    const TYPE_URL: &'static str = "/pob.builder.v1.MsgAuctionBid";
}

impl TypeUrl for pob::builder::v1::MsgUpdateParams{
    const TYPE_URL: &'static str = "/pob.builder.v1.MsgUpdateParams";
}

// ################
// Feeshare Module
// ################

impl TypeUrl for juno::feeshare::v1::MsgRegisterFeeShare{
    const TYPE_URL: &'static str = "/juno.feeshare.v1.MsgRegisterFeeShare";
}

impl TypeUrl for juno::feeshare::v1::MsgUpdateFeeShare{
    const TYPE_URL: &'static str = "/juno.feeshare.v1.MsgUpdateFeeShare";
}

impl TypeUrl for juno::feeshare::v1::MsgCancelFeeShare{
    const TYPE_URL: &'static str = "/juno.feeshare.v1.MsgCancelFeeShare";
}

impl TypeUrl for juno::feeshare::v1::MsgUpdateParams{
    const TYPE_URL: &'static str = "/juno.feeshare.v1.MsgUpdateParams";
}