# Rust Terra Proto

Clients used to interact with Terra Blockchain from Rust. It can be used directly with CosmWasm smart contracts [as for example on Alliance Hub](https://github.com/terra-money/alliance-protocol) or from an external blockchain API.

## Usage in CosmWasm

Add terra-proto-rs into the Cargo.toml from your smart contract with default-features to false that way you avoid importing libraries that will make your smart contract fail:
```Cargo.toml
terra-proto-rs = {version = "4.0.0", default-features = false}
```
## Available models for CosmWasm

When building a smart contract you can use the following messages natively without having to parse the structs, just import and use them:

#### Alliance Module
- `/alliance.alliance.MsgCreateAllianceProposal`
- `/alliance.alliance.MsgUpdateAllianceProposal`
- `/alliance.alliance.MsgDeleteAllianceProposal`
- `/alliance.alliance.MsgCreateAlliance`
- `/alliance.alliance.MsgUpdateAlliance`
- `/alliance.alliance.MsgDeleteAlliance`
- `/alliance.alliance.MsgUpdateParams`
- `/alliance.alliance.MsgDelegate`
- `/alliance.alliance.MsgUndelegate`
- `/alliance.alliance.MsgRedelegate`
- `/alliance.alliance.MsgClaimDelegationRewards`

#### Cosmos SDK Base modules 
- `/cosmos.auth.v1beta1.BaseAccount`
- `/cosmos.auth.v1beta1.ModuleAccount`
- `/cosmos.authz.v1beta1.MsgGrant`
- `/cosmos.authz.v1beta1.MsgExec`
- `/cosmos.authz.v1beta1.MsgRevoke`
- `/cosmos.authz.v1beta1.MsgUpdateParams`
- `/cosmos.authz.v1beta1.MsgVerifyInvariant`
- `/cosmos.authz.v1beta1.UpdateParams`
- `/cosmos.distribution.v1beta1.MsgSetWithdrawAddress`
- `/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward`
- `/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission`
- `/cosmos.distribution.v1beta1.MsgFundCommunityPool`
- `/cosmos.distribution.v1beta1.MsgCommunityPoolSpend`
- `/cosmos.distribution.v1beta1.MsgUpdateParams`
- `/cosmos.distribution.v1beta1.MsgSubmitEvidence`
- `/cosmos.feegrant.v1beta1.MsgGrantAllowance`
- `/cosmos.feegrant.v1beta1.MsgRevokeAllowance`
- `/cosmos.feegrant.v1beta1.BasicAllowance`
- `/cosmos.feegrant.v1beta1.PeriodicAllowance`
- `/cosmos.feegrant.v1beta1.AllowedMsgAllowance`
- `/cosmos.gov.v1.MsgSubmitProposal`
- `/cosmos.gov.v1.MsgExecLegacyContent`
- `/cosmos.gov.v1.MsgVote`
- `/cosmos.gov.v1.MsgVoteWeighted`
- `/cosmos.gov.v1.MsgDeposit`
- `/cosmos.gov.v1.MsgUpdateParams`
- `/cosmos.mint.v1beta1.MsgUpdateParams`
- `/cosmos.slashing.v1beta1.MsgUnjail`
- `/cosmos.staking.v1beta1.MsgUpdateParams`
- `/cosmos.staking.v1beta1.MsgCreateValidator`
- `/cosmos.staking.v1beta1.MsgEditValidator`
- `/cosmos.staking.v1beta1.MsgDelegate`
- `/cosmos.staking.v1beta1.MsgUndelegate`
- `/cosmos.staking.v1beta1.MsgBeginRedelegate`
- `/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation`
- `/cosmos.vesting.v1beta1.MsgCreateVestingAccount`
- `/cosmos.vesting.v1beta1.MsgCreateVestingAccount`
- `/cosmos.vesting.v1beta1.MsgCreateVestingAccount`
- `/cosmos.vesting.v1beta1.MsgCreateVestingAccount`


#### CosmWasm
- `/cosmwasm.wasm.v1.MsgStoreCode`
- `/cosmwasm.wasm.v1.MsgInstantiateContract`
- `/cosmwasm.wasm.v1.MsgInstantiateContract2`
- `/cosmwasm.wasm.v1.MsgExecuteContract`
- `/cosmwasm.wasm.v1.MsgMigrateContract`
- `/cosmwasm.wasm.v1.MsgUpdateAdmin`
- `/cosmwasm.wasm.v1.MsgClearAdmin`
- `/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig`
- `/cosmwasm.wasm.v1.MsgUpdateParams`
- `/cosmwasm.wasm.v1.MsgSudoContract`
- `/cosmwasm.wasm.v1.MsgPinCodes`
- `/cosmwasm.wasm.v1.MsgUnpinCodes`
- `/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract`

#### IBC 
- `/ibc.applications.transfer.v1.MsgTransfer`
- `/ibc.applications.fee.v1.MsgRegisterPayee`
- `/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee`
- `/ibc.applications.fee.v1.MsgPayPacketFee`
- `/ibc.applications.fee.v1.MsgPayPacketFeeAsync`
- `/ibc.applications.interchain_accounts.v1.MsgRegisterInterchainAccount`
- `/ibc.applications.interchain_accounts.v1.MsgSendTx`
- `/ibc.core.channel.v1.MsgChannelCloseConfirm`
- `/ibc.core.channel.v1.MsgChannelOpenInit`
- `/ibc.core.channel.v1.MsgChannelOpenTry`
- `/ibc.core.channel.v1.MsgChannelOpenAck`
- `/ibc.core.channel.v1.MsgChannelOpenConfirm`
- `/ibc.core.channel.v1.MsgChannelCloseInit`
- `/ibc.core.channel.v1.MsgRecvPacket`
- `/ibc.core.channel.v1.MsgTimeout`
- `/ibc.core.channel.v1.MsgTimeoutOnClose`
- `/ibc.core.channel.v1.MsgAcknowledgement`
- `/ibc.core.client.v1.MsgCreateClient`
- `/ibc.core.client.v1.MsgUpdateClient`
- `/ibc.core.client.v1.MsgUpgradeClient`
- `/ibc.core.client.v1.MsgSubmitMisbehaviour`
- `/ibc.core.connection.v1.MsgConnectionOpenInit`
- `/ibc.core.connection.v1.MsgConnectionOpenTry`
- `/ibc.core.connection.v1.MsgConnectionOpenAck`
- `/ibc.core.connection.v1.MsgConnectionOpenConfirm`

#### Token Factory Module
- `/osmosis.tokenfactory.v1beta1.MsgUpdateParams`
- `/osmosis.tokenfactory.v1beta1.MsgCreateDenom`
- `/osmosis.tokenfactory.v1beta1.MsgMint`
- `/osmosis.tokenfactory.v1beta1.MsgBurn`
- `/osmosis.tokenfactory.v1beta1.MsgChangeAdmin`
- `/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata`
- `/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook`
- `/osmosis.tokenfactory.v1beta1.MsgForceTransfer`

#### POB Module
- `/pob.builder.v1.MsgAuctionBid`
- `/pob.builder.v1.MsgUpdateParams`

#### POB Module
- `/juno.feeshare.v1.MsgRegisterFeeShare`
- `/juno.feeshare.v1.MsgUpdateFeeShare`
- `/juno.feeshare.v1.MsgCancelFeeShare`
- `/juno.feeshare.v1.MsgUpdateParams`


### Example

Extracting and simplifying a code snippet the delegate function in [Alliance Hub](https://github.com/terra-money/alliance-protocol/blob/main/contracts/alliance-hub/src/contract.rs#L329-L361) smart contract from Alliance Protocol:

```rs
fn alliance_delegate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: AllianceDelegateMsg,
) -> Result<Response, ContractError> {
    let mut msgs: Vec<CosmosMsg<Empty>> = vec![];
    
    for delegation in msg.delegations {
        ///
        /// Using MsgDelegate from alliance
        ///
        let delegate_msg = MsgDelegate {
            amount: Some(Coin {
                denom: config.alliance_token_denom.clone(),
                amount: delegation.amount.to_string(),
            }),
            delegator_address: env.contract.address.to_string(),
            validator_address: delegation.validator.to_string(),
        };
        ///
        // Creating the Stargate message to be routed on the alliance module
        // from terras blockchain on Response::message
        ///
        msgs.push(CosmosMsg::Stargate {
            type_url: "/alliance.alliance.MsgDelegate".to_string(),
            value: Binary::from(delegate_msg.encode_to_vec()),
        });
    }

    Ok(Response::new()
        .add_attributes(vec![("action", "alliance_delegate")])
        .add_messages(msgs))
}
```