/// MsgAggregateExchangeRatePrevote represents a message to submit
/// aggregate exchange rate prevote.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAggregateExchangeRatePrevote {
    #[prost(string, tag="1")]
    pub hash: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub feeder: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub validator: ::prost::alloc::string::String,
}
/// MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAggregateExchangeRatePrevoteResponse {
}
/// MsgAggregateExchangeRateVote represents a message to submit
/// aggregate exchange rate vote.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAggregateExchangeRateVote {
    #[prost(string, tag="1")]
    pub salt: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub exchange_rates: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub feeder: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub validator: ::prost::alloc::string::String,
}
/// MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAggregateExchangeRateVoteResponse {
}
/// MsgDelegateFeedConsent represents a message to
/// delegate oracle voting rights to another address.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDelegateFeedConsent {
    #[prost(string, tag="1")]
    pub operator: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub delegate: ::prost::alloc::string::String,
}
/// MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDelegateFeedConsentResponse {
}
/// Params defines the parameters for the oracle module.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(uint64, tag="1")]
    pub vote_period: u64,
    #[prost(string, tag="2")]
    pub vote_threshold: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub reward_band: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub reward_distribution_window: u64,
    #[prost(message, repeated, tag="5")]
    pub whitelist: ::prost::alloc::vec::Vec<Denom>,
    #[prost(string, tag="6")]
    pub slash_fraction: ::prost::alloc::string::String,
    #[prost(uint64, tag="7")]
    pub slash_window: u64,
    #[prost(string, tag="8")]
    pub min_valid_per_window: ::prost::alloc::string::String,
}
/// Denom - the object to hold configurations of each denom
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Denom {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub tobin_tax: ::prost::alloc::string::String,
}
/// struct for aggregate prevoting on the ExchangeRateVote.
/// The purpose of aggregate prevote is to hide vote exchange rates with hash
/// which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AggregateExchangeRatePrevote {
    #[prost(string, tag="1")]
    pub hash: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub voter: ::prost::alloc::string::String,
    #[prost(uint64, tag="3")]
    pub submit_block: u64,
}
/// MsgAggregateExchangeRateVote - struct for voting on
/// the exchange rates of Luna denominated in various Terra assets.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AggregateExchangeRateVote {
    #[prost(message, repeated, tag="1")]
    pub exchange_rate_tuples: ::prost::alloc::vec::Vec<ExchangeRateTuple>,
    #[prost(string, tag="2")]
    pub voter: ::prost::alloc::string::String,
}
/// ExchangeRateTuple - struct to store interpreted exchange rates data to store
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExchangeRateTuple {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub exchange_rate: ::prost::alloc::string::String,
}
/// QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryExchangeRateRequest {
    /// denom defines the denomination to query for.
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
}
/// QueryExchangeRateResponse is response type for the
/// Query/ExchangeRate RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryExchangeRateResponse {
    /// exchange_rate defines the exchange rate of Luna denominated in various Terra
    #[prost(string, tag="1")]
    pub exchange_rate: ::prost::alloc::string::String,
}
/// QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryExchangeRatesRequest {
}
/// QueryExchangeRatesResponse is response type for the
/// Query/ExchangeRates RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryExchangeRatesResponse {
    /// exchange_rates defines a list of the exchange rate for all whitelisted denoms.
    #[prost(message, repeated, tag="1")]
    pub exchange_rates: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::DecCoin>,
}
/// QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTobinTaxRequest {
    /// denom defines the denomination to query for.
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
}
/// QueryTobinTaxResponse is response type for the
/// Query/TobinTax RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTobinTaxResponse {
    /// tobin_taxe defines the tobin tax of a denom
    #[prost(string, tag="1")]
    pub tobin_tax: ::prost::alloc::string::String,
}
/// QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTobinTaxesRequest {
}
/// QueryTobinTaxesResponse is response type for the
/// Query/TobinTaxes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTobinTaxesResponse {
    /// tobin_taxes defines a list of the tobin tax of all whitelisted denoms
    #[prost(message, repeated, tag="1")]
    pub tobin_taxes: ::prost::alloc::vec::Vec<Denom>,
}
/// QueryActivesRequest is the request type for the Query/Actives RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryActivesRequest {
}
/// QueryActivesResponse is response type for the
/// Query/Actives RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryActivesResponse {
    /// actives defines a list of the denomination which oracle prices aggreed upon.
    #[prost(string, repeated, tag="1")]
    pub actives: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
/// QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryVoteTargetsRequest {
}
/// QueryVoteTargetsResponse is response type for the
/// Query/VoteTargets RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryVoteTargetsResponse {
    /// vote_targets defines a list of the denomination in which everyone
    /// should vote in the current vote period.
    #[prost(string, repeated, tag="1")]
    pub vote_targets: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
/// QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFeederDelegationRequest {
    /// validator defines the validator address to query for.
    #[prost(string, tag="1")]
    pub validator_addr: ::prost::alloc::string::String,
}
/// QueryFeederDelegationResponse is response type for the
/// Query/FeederDelegation RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFeederDelegationResponse {
    /// feeder_addr defines the feeder delegation of a validator
    #[prost(string, tag="1")]
    pub feeder_addr: ::prost::alloc::string::String,
}
/// QueryMissCounterRequest is the request type for the Query/MissCounter RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryMissCounterRequest {
    /// validator defines the validator address to query for.
    #[prost(string, tag="1")]
    pub validator_addr: ::prost::alloc::string::String,
}
/// QueryMissCounterResponse is response type for the
/// Query/MissCounter RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryMissCounterResponse {
    /// miss_counter defines the oracle miss counter of a validator
    #[prost(uint64, tag="1")]
    pub miss_counter: u64,
}
/// QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregatePrevoteRequest {
    /// validator defines the validator address to query for.
    #[prost(string, tag="1")]
    pub validator_addr: ::prost::alloc::string::String,
}
/// QueryAggregatePrevoteResponse is response type for the
/// Query/AggregatePrevote RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregatePrevoteResponse {
    /// aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period
    #[prost(message, optional, tag="1")]
    pub aggregate_prevote: ::core::option::Option<AggregateExchangeRatePrevote>,
}
/// QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregatePrevotesRequest {
}
/// QueryAggregatePrevotesResponse is response type for the
/// Query/AggregatePrevotes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregatePrevotesResponse {
    /// aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period
    #[prost(message, repeated, tag="1")]
    pub aggregate_prevotes: ::prost::alloc::vec::Vec<AggregateExchangeRatePrevote>,
}
/// QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregateVoteRequest {
    /// validator defines the validator address to query for.
    #[prost(string, tag="1")]
    pub validator_addr: ::prost::alloc::string::String,
}
/// QueryAggregateVoteResponse is response type for the
/// Query/AggregateVote RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregateVoteResponse {
    /// aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period
    #[prost(message, optional, tag="1")]
    pub aggregate_vote: ::core::option::Option<AggregateExchangeRateVote>,
}
/// QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregateVotesRequest {
}
/// QueryAggregateVotesResponse is response type for the
/// Query/AggregateVotes RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAggregateVotesResponse {
    /// aggregate_votes defines all oracle aggregate votes submitted in the current vote period
    #[prost(message, repeated, tag="1")]
    pub aggregate_votes: ::prost::alloc::vec::Vec<AggregateExchangeRateVote>,
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
    #[prost(message, repeated, tag="2")]
    pub feeder_delegations: ::prost::alloc::vec::Vec<FeederDelegation>,
    #[prost(message, repeated, tag="3")]
    pub exchange_rates: ::prost::alloc::vec::Vec<ExchangeRateTuple>,
    #[prost(message, repeated, tag="4")]
    pub miss_counters: ::prost::alloc::vec::Vec<MissCounter>,
    #[prost(message, repeated, tag="5")]
    pub aggregate_exchange_rate_prevotes: ::prost::alloc::vec::Vec<AggregateExchangeRatePrevote>,
    #[prost(message, repeated, tag="6")]
    pub aggregate_exchange_rate_votes: ::prost::alloc::vec::Vec<AggregateExchangeRateVote>,
    #[prost(message, repeated, tag="7")]
    pub tobin_taxes: ::prost::alloc::vec::Vec<TobinTax>,
}
/// FeederDelegation is the address for where oracle feeder authority are
/// delegated to. By default this struct is only used at genesis to feed in
/// default feeder addresses.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FeederDelegation {
    #[prost(string, tag="1")]
    pub feeder_address: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub validator_address: ::prost::alloc::string::String,
}
/// MissCounter defines an miss counter and validator address pair used in
/// oracle module's genesis state
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MissCounter {
    #[prost(string, tag="1")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub miss_counter: u64,
}
/// TobinTax defines an denom and tobin_tax pair used in
/// oracle module's genesis state
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TobinTax {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub tobin_tax: ::prost::alloc::string::String,
}
