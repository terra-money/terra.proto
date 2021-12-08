/// Params defines the parameters for the oracle module.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(message, optional, tag="1")]
    pub tax_policy: ::core::option::Option<PolicyConstraints>,
    #[prost(message, optional, tag="2")]
    pub reward_policy: ::core::option::Option<PolicyConstraints>,
    #[prost(string, tag="3")]
    pub seigniorage_burden_target: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub mining_increment: ::prost::alloc::string::String,
    #[prost(uint64, tag="5")]
    pub window_short: u64,
    #[prost(uint64, tag="6")]
    pub window_long: u64,
    #[prost(uint64, tag="7")]
    pub window_probation: u64,
}
/// PolicyConstraints - defines policy constraints can be applied in tax & reward policies
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PolicyConstraints {
    #[prost(string, tag="1")]
    pub rate_min: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub rate_max: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub cap: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(string, tag="4")]
    pub change_rate_max: ::prost::alloc::string::String,
}
/// EpochTaxProceeds represents the tax amount
/// collected at the current epoch
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EpochTaxProceeds {
    #[prost(message, repeated, tag="1")]
    pub tax_proceeds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// EpochInitialIssuance represents initial issuance
/// of the currrent epoch
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EpochInitialIssuance {
    #[prost(message, repeated, tag="1")]
    pub issuance: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// QueryTaxRateRequest is the request type for the Query/TaxRate RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxRateRequest {
}
/// QueryTaxRateResponse is response type for the
/// Query/TaxRate RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxRateResponse {
    #[prost(string, tag="1")]
    pub tax_rate: ::prost::alloc::string::String,
}
/// QueryTaxCapRequest is the request type for the Query/TaxCap RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxCapRequest {
    /// denom defines the denomination to query for.
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
}
/// QueryTaxCapResponse is response type for the
/// Query/TaxCap RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxCapResponse {
    #[prost(string, tag="1")]
    pub tax_cap: ::prost::alloc::string::String,
}
/// QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxCapsRequest {
}
/// QueryTaxCapsResponseItem is response item type for the
/// Query/TaxCaps RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxCapsResponseItem {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub tax_cap: ::prost::alloc::string::String,
}
/// QueryTaxCapsResponse is response type for the
/// Query/TaxCaps RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxCapsResponse {
    #[prost(message, repeated, tag="1")]
    pub tax_caps: ::prost::alloc::vec::Vec<QueryTaxCapsResponseItem>,
}
/// QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRewardWeightRequest {
}
/// QueryRewardWeightResponse is response type for the
/// Query/RewardWeight RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRewardWeightResponse {
    #[prost(string, tag="1")]
    pub reward_weight: ::prost::alloc::string::String,
}
/// QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxProceedsRequest {
}
/// QueryTaxProceedsResponse is response type for the
/// Query/TaxProceeds RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTaxProceedsResponse {
    #[prost(message, repeated, tag="1")]
    pub tax_proceeds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySeigniorageProceedsRequest {
}
/// QuerySeigniorageProceedsResponse is response type for the
/// Query/SeigniorageProceeds RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySeigniorageProceedsResponse {
    #[prost(string, tag="1")]
    pub seigniorage_proceeds: ::prost::alloc::string::String,
}
/// QueryIndicatorsRequest is the request type for the Query/Indicators RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryIndicatorsRequest {
}
/// QueryIndicatorsResponse is response type for the
/// Query/Indicators RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryIndicatorsResponse {
    #[prost(string, tag="1")]
    pub trl_year: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub trl_month: ::prost::alloc::string::String,
}
/// QueryParamsRequest is the request type for the Query/Params RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {
}
/// QueryParamsResponse is the response type for the Query/Params RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    /// params defines the parameters of the module.
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
}
/// GenesisState defines the oracle module's genesis state.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
    #[prost(string, tag="2")]
    pub tax_rate: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub reward_weight: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="4")]
    pub tax_caps: ::prost::alloc::vec::Vec<TaxCap>,
    #[prost(message, repeated, tag="5")]
    pub tax_proceeds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, repeated, tag="6")]
    pub epoch_initial_issuance: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, repeated, tag="7")]
    pub epoch_states: ::prost::alloc::vec::Vec<EpochState>,
}
/// TaxCap is the max tax amount can be charged for the given denom
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TaxCap {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub tax_cap: ::prost::alloc::string::String,
}
/// EpochState is the record for each epoch state
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EpochState {
    #[prost(uint64, tag="1")]
    pub epoch: u64,
    #[prost(string, tag="2")]
    pub tax_reward: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub seigniorage_reward: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub total_staked_luna: ::prost::alloc::string::String,
}
