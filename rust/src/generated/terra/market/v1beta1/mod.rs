/// MsgSwap represents a message to swap coin to another denom.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwap {
    #[prost(string, tag="1")]
    pub trader: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub offer_coin: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(string, tag="3")]
    pub ask_denom: ::prost::alloc::string::String,
}
/// MsgSwapResponse defines the Msg/Swap response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwapResponse {
    #[prost(message, optional, tag="1")]
    pub swap_coin: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, optional, tag="2")]
    pub swap_fee: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// MsgSwapSend represents a message to swap coin and send all result coin to recipient
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwapSend {
    #[prost(string, tag="1")]
    pub from_address: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub to_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub offer_coin: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(string, tag="4")]
    pub ask_denom: ::prost::alloc::string::String,
}
/// MsgSwapSendResponse defines the Msg/SwapSend response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwapSendResponse {
    #[prost(message, optional, tag="1")]
    pub swap_coin: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, optional, tag="2")]
    pub swap_fee: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// Params defines the parameters for the market module.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(bytes="vec", tag="1")]
    pub base_pool: ::prost::alloc::vec::Vec<u8>,
    #[prost(uint64, tag="2")]
    pub pool_recovery_period: u64,
    #[prost(bytes="vec", tag="3")]
    pub min_stability_spread: ::prost::alloc::vec::Vec<u8>,
}
/// QuerySwapRequest is the request type for the Query/Swap RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySwapRequest {
    /// offer_coin defines the coin being offered (i.e. 1000000uluna)
    #[prost(string, tag="1")]
    pub offer_coin: ::prost::alloc::string::String,
    /// ask_denom defines the denom of the coin to swap to
    #[prost(string, tag="2")]
    pub ask_denom: ::prost::alloc::string::String,
}
/// QuerySwapResponse is the response type for the Query/Swap RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySwapResponse {
    /// return_coin defines the coin returned as a result of the swap simulation.
    #[prost(message, optional, tag="1")]
    pub return_coin: ::core::option::Option<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTerraPoolDeltaRequest {
}
/// QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTerraPoolDeltaResponse {
    /// terra_pool_delta defines the gap between the TerraPool and the TerraBasePool
    #[prost(bytes="vec", tag="1")]
    pub terra_pool_delta: ::prost::alloc::vec::Vec<u8>,
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
/// GenesisState defines the market module's genesis state.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    /// params defines all the paramaters of the module.
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
    /// the gap between the TerraPool and the BasePool
    #[prost(bytes="vec", tag="2")]
    pub terra_pool_delta: ::prost::alloc::vec::Vec<u8>,
}
