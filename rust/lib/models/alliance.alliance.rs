#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(message, optional, tag = "1")]
    pub reward_delay_time: ::core::option::Option<::prost_types::Duration>,
    /// Time interval between consecutive applications of `take_rate`
    #[prost(message, optional, tag = "2")]
    pub take_rate_claim_interval: ::core::option::Option<::prost_types::Duration>,
    /// Last application of `take_rate` on assets
    #[prost(message, optional, tag = "3")]
    pub last_take_rate_claim_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardHistory {
    #[prost(string, tag = "1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub index: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardWeightRange {
    #[prost(string, tag = "1")]
    pub min: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub max: ::prost::alloc::string::String,
}
/// key: denom value: AllianceAsset
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AllianceAsset {
    /// Denom of the asset. It could either be a native token or an IBC token
    #[prost(string, tag = "1")]
    pub denom: ::prost::alloc::string::String,
    /// The reward weight specifies the ratio of rewards that will be given to each alliance asset
    /// It does not need to sum to 1. rate = weight / total_weight
    /// Native asset is always assumed to have a weight of 1.s
    #[prost(string, tag = "2")]
    pub reward_weight: ::prost::alloc::string::String,
    /// A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
    /// that will be redirected to the distribution rewards pool
    #[prost(string, tag = "3")]
    pub take_rate: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub total_tokens: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub total_validator_shares: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "6")]
    pub reward_start_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(string, tag = "7")]
    pub reward_change_rate: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "8")]
    pub reward_change_interval: ::core::option::Option<::prost_types::Duration>,
    #[prost(message, optional, tag = "9")]
    pub last_reward_change_time: ::core::option::Option<::prost_types::Timestamp>,
    /// set a bound of weight range to limit how much reward weights can scale.
    #[prost(message, optional, tag = "10")]
    pub reward_weight_range: ::core::option::Option<RewardWeightRange>,
    /// flag to check if an asset has completed the initialization process after the reward delay
    #[prost(bool, tag = "11")]
    pub is_initialized: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardWeightChangeSnapshot {
    #[prost(string, tag = "1")]
    pub prev_reward_weight: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "2")]
    pub reward_histories: ::prost::alloc::vec::Vec<RewardHistory>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Delegation {
    /// delegator_address is the bech32-encoded address of the delegator.
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    /// validator_address is the bech32-encoded address of the validator.
    #[prost(string, tag = "2")]
    pub validator_address: ::prost::alloc::string::String,
    /// denom of token staked
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    /// shares define the delegation shares received.
    #[prost(string, tag = "4")]
    pub shares: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "5")]
    pub reward_history: ::prost::alloc::vec::Vec<RewardHistory>,
    #[prost(uint64, tag = "6")]
    pub last_reward_claim_height: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Redelegation {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub src_validator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub dst_validator_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub balance: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueuedRedelegation {
    #[prost(message, repeated, tag = "1")]
    pub entries: ::prost::alloc::vec::Vec<Redelegation>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Undelegation {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub balance: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueuedUndelegation {
    #[prost(message, repeated, tag = "1")]
    pub entries: ::prost::alloc::vec::Vec<Undelegation>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AllianceValidatorInfo {
    #[prost(message, repeated, tag = "1")]
    pub global_reward_history: ::prost::alloc::vec::Vec<RewardHistory>,
    #[prost(message, repeated, tag = "2")]
    pub total_delegator_shares:
        ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::DecCoin>,
    #[prost(message, repeated, tag = "3")]
    pub validator_shares: ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::DecCoin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidatorInfoState {
    #[prost(string, tag = "1")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "2")]
    pub validator: ::core::option::Option<AllianceValidatorInfo>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedelegationState {
    #[prost(message, optional, tag = "1")]
    pub completion_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "2")]
    pub redelegation: ::core::option::Option<Redelegation>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UndelegationState {
    #[prost(message, optional, tag = "1")]
    pub completion_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "2")]
    pub undelegation: ::core::option::Option<QueuedUndelegation>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RewardWeightChangeSnapshotState {
    #[prost(uint64, tag = "1")]
    pub height: u64,
    #[prost(string, tag = "2")]
    pub validator: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub snapshot: ::core::option::Option<RewardWeightChangeSnapshot>,
}
/// GenesisState defines the module's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
    #[prost(message, repeated, tag = "2")]
    pub assets: ::prost::alloc::vec::Vec<AllianceAsset>,
    #[prost(message, repeated, tag = "3")]
    pub validator_infos: ::prost::alloc::vec::Vec<ValidatorInfoState>,
    #[prost(message, repeated, tag = "4")]
    pub reward_weight_change_snaphots: ::prost::alloc::vec::Vec<RewardWeightChangeSnapshotState>,
    #[prost(message, repeated, tag = "5")]
    pub delegations: ::prost::alloc::vec::Vec<Delegation>,
    #[prost(message, repeated, tag = "6")]
    pub redelegations: ::prost::alloc::vec::Vec<RedelegationState>,
    #[prost(message, repeated, tag = "7")]
    pub undelegations: ::prost::alloc::vec::Vec<UndelegationState>,
}
/// Params
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
}
/// Alliances
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAlliancesRequest {
    #[prost(message, optional, tag = "1")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAlliancesResponse {
    #[prost(message, repeated, tag = "1")]
    pub alliances: ::prost::alloc::vec::Vec<AllianceAsset>,
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// Alliance
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceRequest {
    #[prost(string, tag = "1")]
    pub denom: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceResponse {
    #[prost(message, optional, tag = "1")]
    pub alliance: ::core::option::Option<AllianceAsset>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryIbcAllianceRequest {
    #[prost(string, tag = "1")]
    pub hash: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceValidatorRequest {
    #[prost(string, tag = "1")]
    pub validator_addr: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllAllianceValidatorsRequest {
    #[prost(message, optional, tag = "1")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllAlliancesDelegationsRequest {
    #[prost(message, optional, tag = "1")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// AlliancesDelegation
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAlliancesDelegationsRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "2")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// AlliancesDelegationByValidator
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAlliancesDelegationByValidatorRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// DelegationResponse is equivalent to Delegation except that it contains a
/// balance in addition to shares which is more suitable for client responses.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DelegationResponse {
    #[prost(message, optional, tag = "1")]
    pub delegation: ::core::option::Option<Delegation>,
    #[prost(message, optional, tag = "2")]
    pub balance: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAlliancesDelegationsResponse {
    #[prost(message, repeated, tag = "1")]
    pub delegations: ::prost::alloc::vec::Vec<DelegationResponse>,
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// AllianceDelegation
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceDelegationRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryIbcAllianceDelegationRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub hash: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceDelegationResponse {
    #[prost(message, optional, tag = "1")]
    pub delegation: ::core::option::Option<DelegationResponse>,
}
/// AllianceDelegation
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceDelegationRewardsRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryIbcAllianceDelegationRewardsRequest {
    #[prost(string, tag = "1")]
    pub delegator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub hash: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceDelegationRewardsResponse {
    #[prost(message, repeated, tag = "1")]
    pub rewards: ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceValidatorResponse {
    #[prost(string, tag = "1")]
    pub validator_addr: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "2")]
    pub total_delegation_shares:
        ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::DecCoin>,
    #[prost(message, repeated, tag = "3")]
    pub validator_shares: ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::DecCoin>,
    #[prost(message, repeated, tag = "4")]
    pub total_staked: ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::DecCoin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllianceValidatorsResponse {
    #[prost(message, repeated, tag = "1")]
    pub validators: ::prost::alloc::vec::Vec<QueryAllianceValidatorResponse>,
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    #[derive(Debug, Clone)]
    pub struct QueryClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    #[cfg(feature = "grpc-transport")]
    #[cfg_attr(docsrs, doc(cfg(feature = "grpc-transport")))]
    impl QueryClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> QueryClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> QueryClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<http::Request<tonic::body::BoxBody>>>::Error:
                Into<StdError> + Send + Sync,
        {
            QueryClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        pub async fn params(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryParamsRequest>,
        ) -> Result<tonic::Response<super::QueryParamsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Query/Params");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query paginated alliances
        pub async fn alliances(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAlliancesRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Query/Alliances");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query a specific alliance by ibc hash
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/ibc%2Falliance
        pub async fn ibc_alliance(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryIbcAllianceRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Query/IBCAlliance");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query all paginated alliance delegations
        pub async fn all_alliances_delegations(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllAlliancesDelegationsRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/AllAlliancesDelegations",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query alliance validator
        pub async fn alliance_validator(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllianceValidatorRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceValidatorResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/alliance.alliance.Query/AllianceValidator");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query all paginated alliance validators
        pub async fn all_alliance_validators(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllAllianceValidatorsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceValidatorsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/AllAllianceValidators",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query all paginated alliance delegations for a delegator addr
        pub async fn alliances_delegation(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAlliancesDelegationsRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/AlliancesDelegation",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query all paginated alliance delegations for a delegator addr and validator_addr
        pub async fn alliances_delegation_by_validator(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAlliancesDelegationByValidatorRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/AlliancesDelegationByValidator",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query a delegation to an alliance by delegator addr, validator_addr and denom
        pub async fn alliance_delegation(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllianceDelegationRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/alliance.alliance.Query/AllianceDelegation");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query a delegation to an alliance by delegator addr, validator_addr and denom
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
        pub async fn ibc_alliance_delegation(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryIbcAllianceDelegationRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/IBCAllianceDelegation",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query for rewards by delegator addr, validator_addr and denom
        pub async fn alliance_delegation_rewards(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllianceDelegationRewardsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationRewardsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/AllianceDelegationRewards",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query for rewards by delegator addr, validator_addr and denom
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
        pub async fn ibc_alliance_delegation_rewards(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryIbcAllianceDelegationRewardsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationRewardsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Query/IBCAllianceDelegationRewards",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Query a specific alliance by denom
        pub async fn alliance(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllianceRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Query/Alliance");
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
}
/// Generated server implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with QueryServer.
    #[async_trait]
    pub trait Query: Send + Sync + 'static {
        async fn params(
            &self,
            request: tonic::Request<super::QueryParamsRequest>,
        ) -> Result<tonic::Response<super::QueryParamsResponse>, tonic::Status>;
        /// Query paginated alliances
        async fn alliances(
            &self,
            request: tonic::Request<super::QueryAlliancesRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesResponse>, tonic::Status>;
        /// Query a specific alliance by ibc hash
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/ibc%2Falliance
        async fn ibc_alliance(
            &self,
            request: tonic::Request<super::QueryIbcAllianceRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceResponse>, tonic::Status>;
        /// Query all paginated alliance delegations
        async fn all_alliances_delegations(
            &self,
            request: tonic::Request<super::QueryAllAlliancesDelegationsRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>;
        /// Query alliance validator
        async fn alliance_validator(
            &self,
            request: tonic::Request<super::QueryAllianceValidatorRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceValidatorResponse>, tonic::Status>;
        /// Query all paginated alliance validators
        async fn all_alliance_validators(
            &self,
            request: tonic::Request<super::QueryAllAllianceValidatorsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceValidatorsResponse>, tonic::Status>;
        /// Query all paginated alliance delegations for a delegator addr
        async fn alliances_delegation(
            &self,
            request: tonic::Request<super::QueryAlliancesDelegationsRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>;
        /// Query all paginated alliance delegations for a delegator addr and validator_addr
        async fn alliances_delegation_by_validator(
            &self,
            request: tonic::Request<super::QueryAlliancesDelegationByValidatorRequest>,
        ) -> Result<tonic::Response<super::QueryAlliancesDelegationsResponse>, tonic::Status>;
        /// Query a delegation to an alliance by delegator addr, validator_addr and denom
        async fn alliance_delegation(
            &self,
            request: tonic::Request<super::QueryAllianceDelegationRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationResponse>, tonic::Status>;
        /// Query a delegation to an alliance by delegator addr, validator_addr and denom
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
        async fn ibc_alliance_delegation(
            &self,
            request: tonic::Request<super::QueryIbcAllianceDelegationRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationResponse>, tonic::Status>;
        /// Query for rewards by delegator addr, validator_addr and denom
        async fn alliance_delegation_rewards(
            &self,
            request: tonic::Request<super::QueryAllianceDelegationRewardsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationRewardsResponse>, tonic::Status>;
        /// Query for rewards by delegator addr, validator_addr and denom
        /// @deprecated: this endpoint will be replaced for by the encoded version
        /// of the denom e.g.: GET:/terra/alliances/terradr1231/terravaloper41234/ibc%2Falliance
        async fn ibc_alliance_delegation_rewards(
            &self,
            request: tonic::Request<super::QueryIbcAllianceDelegationRewardsRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceDelegationRewardsResponse>, tonic::Status>;
        /// Query a specific alliance by denom
        async fn alliance(
            &self,
            request: tonic::Request<super::QueryAllianceRequest>,
        ) -> Result<tonic::Response<super::QueryAllianceResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct QueryServer<T: Query> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: Query> QueryServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for QueryServer<T>
    where
        T: Query,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/alliance.alliance.Query/Params" => {
                    #[allow(non_camel_case_types)]
                    struct ParamsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryParamsRequest> for ParamsSvc<T> {
                        type Response = super::QueryParamsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryParamsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).params(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ParamsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/Alliances" => {
                    #[allow(non_camel_case_types)]
                    struct AlliancesSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAlliancesRequest> for AlliancesSvc<T> {
                        type Response = super::QueryAlliancesResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAlliancesRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).alliances(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AlliancesSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/IBCAlliance" => {
                    #[allow(non_camel_case_types)]
                    struct IBCAllianceSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryIbcAllianceRequest> for IBCAllianceSvc<T> {
                        type Response = super::QueryAllianceResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryIbcAllianceRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).ibc_alliance(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = IBCAllianceSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AllAlliancesDelegations" => {
                    #[allow(non_camel_case_types)]
                    struct AllAlliancesDelegationsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryAllAlliancesDelegationsRequest>
                        for AllAlliancesDelegationsSvc<T>
                    {
                        type Response = super::QueryAlliancesDelegationsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllAlliancesDelegationsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).all_alliances_delegations(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllAlliancesDelegationsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AllianceValidator" => {
                    #[allow(non_camel_case_types)]
                    struct AllianceValidatorSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAllianceValidatorRequest>
                        for AllianceValidatorSvc<T>
                    {
                        type Response = super::QueryAllianceValidatorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllianceValidatorRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).alliance_validator(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllianceValidatorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AllAllianceValidators" => {
                    #[allow(non_camel_case_types)]
                    struct AllAllianceValidatorsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryAllAllianceValidatorsRequest>
                        for AllAllianceValidatorsSvc<T>
                    {
                        type Response = super::QueryAllianceValidatorsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllAllianceValidatorsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).all_alliance_validators(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllAllianceValidatorsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AlliancesDelegation" => {
                    #[allow(non_camel_case_types)]
                    struct AlliancesDelegationSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryAlliancesDelegationsRequest>
                        for AlliancesDelegationSvc<T>
                    {
                        type Response = super::QueryAlliancesDelegationsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAlliancesDelegationsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).alliances_delegation(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AlliancesDelegationSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AlliancesDelegationByValidator" => {
                    #[allow(non_camel_case_types)]
                    struct AlliancesDelegationByValidatorSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<
                            super::QueryAlliancesDelegationByValidatorRequest,
                        > for AlliancesDelegationByValidatorSvc<T>
                    {
                        type Response = super::QueryAlliancesDelegationsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::QueryAlliancesDelegationByValidatorRequest,
                            >,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).alliances_delegation_by_validator(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AlliancesDelegationByValidatorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AllianceDelegation" => {
                    #[allow(non_camel_case_types)]
                    struct AllianceDelegationSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryAllianceDelegationRequest>
                        for AllianceDelegationSvc<T>
                    {
                        type Response = super::QueryAllianceDelegationResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllianceDelegationRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).alliance_delegation(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllianceDelegationSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/IBCAllianceDelegation" => {
                    #[allow(non_camel_case_types)]
                    struct IBCAllianceDelegationSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryIbcAllianceDelegationRequest>
                        for IBCAllianceDelegationSvc<T>
                    {
                        type Response = super::QueryAllianceDelegationResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryIbcAllianceDelegationRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).ibc_alliance_delegation(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = IBCAllianceDelegationSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/AllianceDelegationRewards" => {
                    #[allow(non_camel_case_types)]
                    struct AllianceDelegationRewardsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryAllianceDelegationRewardsRequest>
                        for AllianceDelegationRewardsSvc<T>
                    {
                        type Response = super::QueryAllianceDelegationRewardsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllianceDelegationRewardsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).alliance_delegation_rewards(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllianceDelegationRewardsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/IBCAllianceDelegationRewards" => {
                    #[allow(non_camel_case_types)]
                    struct IBCAllianceDelegationRewardsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryIbcAllianceDelegationRewardsRequest>
                        for IBCAllianceDelegationRewardsSvc<T>
                    {
                        type Response = super::QueryAllianceDelegationRewardsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::QueryIbcAllianceDelegationRewardsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).ibc_alliance_delegation_rewards(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = IBCAllianceDelegationRewardsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Query/Alliance" => {
                    #[allow(non_camel_case_types)]
                    struct AllianceSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAllianceRequest> for AllianceSvc<T> {
                        type Response = super::QueryAllianceResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllianceRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).alliance(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllianceSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .header("content-type", "application/grpc")
                        .body(empty_body())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: Query> Clone for QueryServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: Query> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: Query> tonic::server::NamedService for QueryServer<T> {
        const NAME: &'static str = "alliance.alliance.Query";
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDelegate {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub amount: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDelegateResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUndelegate {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub amount: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUndelegateResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRedelegate {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_src_address: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub validator_dst_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub amount: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRedelegateResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClaimDelegationRewards {
    #[prost(string, tag = "1")]
    pub delegator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClaimDelegationRewardsResponse {}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod msg_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    #[derive(Debug, Clone)]
    pub struct MsgClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    #[cfg(feature = "grpc-transport")]
    #[cfg_attr(docsrs, doc(cfg(feature = "grpc-transport")))]
    impl MsgClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> MsgClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> MsgClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<http::Request<tonic::body::BoxBody>>>::Error:
                Into<StdError> + Send + Sync,
        {
            MsgClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        pub async fn delegate(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgDelegate>,
        ) -> Result<tonic::Response<super::MsgDelegateResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Msg/Delegate");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn redelegate(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgRedelegate>,
        ) -> Result<tonic::Response<super::MsgRedelegateResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Msg/Redelegate");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn undelegate(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUndelegate>,
        ) -> Result<tonic::Response<super::MsgUndelegateResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/alliance.alliance.Msg/Undelegate");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn claim_delegation_rewards(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgClaimDelegationRewards>,
        ) -> Result<tonic::Response<super::MsgClaimDelegationRewardsResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/alliance.alliance.Msg/ClaimDelegationRewards",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
}
/// Generated server implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod msg_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with MsgServer.
    #[async_trait]
    pub trait Msg: Send + Sync + 'static {
        async fn delegate(
            &self,
            request: tonic::Request<super::MsgDelegate>,
        ) -> Result<tonic::Response<super::MsgDelegateResponse>, tonic::Status>;
        async fn redelegate(
            &self,
            request: tonic::Request<super::MsgRedelegate>,
        ) -> Result<tonic::Response<super::MsgRedelegateResponse>, tonic::Status>;
        async fn undelegate(
            &self,
            request: tonic::Request<super::MsgUndelegate>,
        ) -> Result<tonic::Response<super::MsgUndelegateResponse>, tonic::Status>;
        async fn claim_delegation_rewards(
            &self,
            request: tonic::Request<super::MsgClaimDelegationRewards>,
        ) -> Result<tonic::Response<super::MsgClaimDelegationRewardsResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct MsgServer<T: Msg> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: Msg> MsgServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for MsgServer<T>
    where
        T: Msg,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/alliance.alliance.Msg/Delegate" => {
                    #[allow(non_camel_case_types)]
                    struct DelegateSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgDelegate> for DelegateSvc<T> {
                        type Response = super::MsgDelegateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgDelegate>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).delegate(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DelegateSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Msg/Redelegate" => {
                    #[allow(non_camel_case_types)]
                    struct RedelegateSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgRedelegate> for RedelegateSvc<T> {
                        type Response = super::MsgRedelegateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgRedelegate>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).redelegate(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RedelegateSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Msg/Undelegate" => {
                    #[allow(non_camel_case_types)]
                    struct UndelegateSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgUndelegate> for UndelegateSvc<T> {
                        type Response = super::MsgUndelegateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUndelegate>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).undelegate(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UndelegateSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/alliance.alliance.Msg/ClaimDelegationRewards" => {
                    #[allow(non_camel_case_types)]
                    struct ClaimDelegationRewardsSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgClaimDelegationRewards>
                        for ClaimDelegationRewardsSvc<T>
                    {
                        type Response = super::MsgClaimDelegationRewardsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgClaimDelegationRewards>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).claim_delegation_rewards(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ClaimDelegationRewardsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .header("content-type", "application/grpc")
                        .body(empty_body())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: Msg> Clone for MsgServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: Msg> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: Msg> tonic::server::NamedService for MsgServer<T> {
        const NAME: &'static str = "alliance.alliance.Msg";
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DelegateAllianceEvent {
    #[prost(string, tag = "1")]
    pub alliance_sender: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub coin: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
    #[prost(string, tag = "4")]
    pub new_shares: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UndelegateAllianceEvent {
    #[prost(string, tag = "1")]
    pub alliance_sender: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "3")]
    pub coin: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, optional, tag = "4")]
    pub completion_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedelegateAllianceEvent {
    #[prost(string, tag = "1")]
    pub alliance_sender: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub source_validator: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub destination_validator: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub coin: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
    #[prost(message, optional, tag = "5")]
    pub completion_time: ::core::option::Option<::prost_types::Timestamp>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClaimAllianceRewardsEvent {
    #[prost(string, tag = "1")]
    pub alliance_sender: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub validator: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "3")]
    pub coins: ::prost::alloc::vec::Vec<super::super::cosmos::base::v1beta1::Coin>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgCreateAllianceProposal {
    /// the title of the update proposal
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// Denom of the asset. It could either be a native token or an IBC token
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    /// The reward weight specifies the ratio of rewards that will be given to each alliance asset
    /// It does not need to sum to 1. rate = weight / total_weight
    /// Native asset is always assumed to have a weight of 1.
    #[prost(string, tag = "4")]
    pub reward_weight: ::prost::alloc::string::String,
    /// A positive take rate is used for liquid staking derivatives. It defines an annualized reward rate that
    /// will be redirected to the distribution rewards pool
    #[prost(string, tag = "5")]
    pub take_rate: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub reward_change_rate: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "7")]
    pub reward_change_interval: ::core::option::Option<::prost_types::Duration>,
    /// set a bound of weight range to limit how much reward weights can scale.
    #[prost(message, optional, tag = "8")]
    pub reward_weight_range: ::core::option::Option<RewardWeightRange>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateAllianceProposal {
    /// the title of the update proposal
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// Denom of the asset. It could either be a native token or an IBC token
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
    /// The reward weight specifies the ratio of rewards that will be given to each alliance asset
    /// It does not need to sum to 1. rate = weight / total_weight
    /// Native asset is always assumed to have a weight of 1.
    #[prost(string, tag = "4")]
    pub reward_weight: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub take_rate: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub reward_change_rate: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "7")]
    pub reward_change_interval: ::core::option::Option<::prost_types::Duration>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteAllianceProposal {
    /// the title of the update proposal
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub denom: ::prost::alloc::string::String,
}
