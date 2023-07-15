#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ValidatorExchangeRate {
    #[prost(string, tag = "1")]
    pub internal_tokens_to_shares_rate: ::prost::alloc::string::String,
    #[prost(uint64, tag = "2")]
    pub epoch_number: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Validator {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub address: ::prost::alloc::string::String,
    #[prost(enumeration = "validator::ValidatorStatus", tag = "3")]
    pub status: i32,
    #[prost(uint64, tag = "4")]
    pub commission_rate: u64,
    #[prost(string, tag = "5")]
    pub delegation_amt: ::prost::alloc::string::String,
    #[prost(uint64, tag = "6")]
    pub weight: u64,
    #[prost(message, optional, tag = "7")]
    pub internal_exchange_rate: ::core::option::Option<ValidatorExchangeRate>,
}
/// Nested message and enum types in `Validator`.
pub mod validator {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum ValidatorStatus {
        Active = 0,
        Inactive = 1,
    }
    impl ValidatorStatus {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                ValidatorStatus::Active => "ACTIVE",
                ValidatorStatus::Inactive => "INACTIVE",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "ACTIVE" => Some(Self::Active),
                "INACTIVE" => Some(Self::Inactive),
                _ => None,
            }
        }
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddValidatorProposal {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub validator_name: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub validator_address: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub deposit: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IcaAccount {
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    #[prost(enumeration = "IcaAccountType", tag = "3")]
    pub target: i32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum IcaAccountType {
    Delegation = 0,
    Fee = 1,
    Withdrawal = 2,
    Redemption = 3,
}
impl IcaAccountType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            IcaAccountType::Delegation => "DELEGATION",
            IcaAccountType::Fee => "FEE",
            IcaAccountType::Withdrawal => "WITHDRAWAL",
            IcaAccountType::Redemption => "REDEMPTION",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "DELEGATION" => Some(Self::Delegation),
            "FEE" => Some(Self::Fee),
            "WITHDRAWAL" => Some(Self::Withdrawal),
            "REDEMPTION" => Some(Self::Redemption),
            _ => None,
        }
    }
}
/// next id: 19
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HostZone {
    #[prost(string, tag = "1")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub connection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "17")]
    pub bech32prefix: ::prost::alloc::string::String,
    #[prost(string, tag = "12")]
    pub transfer_channel_id: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "3")]
    pub validators: ::prost::alloc::vec::Vec<Validator>,
    #[prost(message, repeated, tag = "4")]
    pub blacklisted_validators: ::prost::alloc::vec::Vec<Validator>,
    #[prost(message, optional, tag = "5")]
    pub withdrawal_account: ::core::option::Option<IcaAccount>,
    #[prost(message, optional, tag = "6")]
    pub fee_account: ::core::option::Option<IcaAccount>,
    #[prost(message, optional, tag = "7")]
    pub delegation_account: ::core::option::Option<IcaAccount>,
    #[prost(message, optional, tag = "16")]
    pub redemption_account: ::core::option::Option<IcaAccount>,
    /// ibc denom on stride
    #[prost(string, tag = "8")]
    pub ibc_denom: ::prost::alloc::string::String,
    /// native denom on host zone
    #[prost(string, tag = "9")]
    pub host_denom: ::prost::alloc::string::String,
    /// TODO(TEST-68): Should we make this an array and store the last n redemption
    /// rates then calculate a TWARR?
    #[prost(string, tag = "10")]
    pub last_redemption_rate: ::prost::alloc::string::String,
    #[prost(string, tag = "11")]
    pub redemption_rate: ::prost::alloc::string::String,
    /// stores how many days we should wait before issuing unbondings
    #[prost(uint64, tag = "14")]
    pub unbonding_frequency: u64,
    /// TODO(TEST-101) int to dec
    #[prost(string, tag = "13")]
    pub staked_bal: ::prost::alloc::string::String,
    #[prost(string, tag = "18")]
    pub address: ::prost::alloc::string::String,
}
/// ---------------------- Delegation Callbacks ---------------------- //
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SplitDelegation {
    #[prost(string, tag = "1")]
    pub validator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub amount: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DelegateCallback {
    #[prost(string, tag = "1")]
    pub host_zone_id: ::prost::alloc::string::String,
    #[prost(uint64, tag = "2")]
    pub deposit_record_id: u64,
    #[prost(message, repeated, tag = "3")]
    pub split_delegations: ::prost::alloc::vec::Vec<SplitDelegation>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClaimCallback {
    #[prost(string, tag = "1")]
    pub user_redemption_record_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(uint64, tag = "3")]
    pub epoch_number: u64,
}
/// ---------------------- Reinvest Callback ---------------------- //
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReinvestCallback {
    #[prost(message, optional, tag = "1")]
    pub reinvest_amount: ::core::option::Option<super::super::cosmos::base::v1beta1::Coin>,
    #[prost(string, tag = "3")]
    pub host_zone_id: ::prost::alloc::string::String,
}
/// ---------------------- Undelegation Callbacks ---------------------- //
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UndelegateCallback {
    #[prost(string, tag = "1")]
    pub host_zone_id: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "2")]
    pub split_delegations: ::prost::alloc::vec::Vec<SplitDelegation>,
    #[prost(uint64, repeated, tag = "3")]
    pub epoch_unbonding_record_ids: ::prost::alloc::vec::Vec<u64>,
}
/// ---------------------- Redemption Callbacks ---------------------- //
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RedemptionCallback {
    #[prost(string, tag = "1")]
    pub host_zone_id: ::prost::alloc::string::String,
    #[prost(uint64, repeated, tag = "2")]
    pub epoch_unbonding_record_ids: ::prost::alloc::vec::Vec<u64>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Rebalancing {
    #[prost(string, tag = "1")]
    pub src_validator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub dst_validator: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub amt: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RebalanceCallback {
    #[prost(string, tag = "1")]
    pub host_zone_id: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "2")]
    pub rebalancings: ::prost::alloc::vec::Vec<Rebalancing>,
}
/// Params defines the parameters for the module.
/// next id: 18
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    /// define epoch lengths, in stride_epochs
    #[prost(uint64, tag = "1")]
    pub rewards_interval: u64,
    #[prost(uint64, tag = "6")]
    pub delegate_interval: u64,
    #[prost(uint64, tag = "2")]
    pub deposit_interval: u64,
    #[prost(uint64, tag = "3")]
    pub redemption_rate_interval: u64,
    #[prost(uint64, tag = "4")]
    pub stride_commission: u64,
    /// zone_com_address stores which addresses to
    /// send the Stride commission too, as well as what portion
    /// of the fee each address is entitled to
    /// TODO implement this
    #[prost(map = "string, string", tag = "5")]
    pub zone_com_address:
        ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
    #[prost(uint64, tag = "7")]
    pub reinvest_interval: u64,
    #[prost(uint64, tag = "8")]
    pub validator_rebalancing_threshold: u64,
    #[prost(uint64, tag = "9")]
    pub ica_timeout_nanos: u64,
    #[prost(uint64, tag = "10")]
    pub buffer_size: u64,
    #[prost(uint64, tag = "11")]
    pub ibc_timeout_blocks: u64,
    #[prost(uint64, tag = "12")]
    pub fee_transfer_timeout_nanos: u64,
    #[prost(uint64, tag = "13")]
    pub max_stake_ica_calls_per_epoch: u64,
    #[prost(uint64, tag = "14")]
    pub safety_min_redemption_rate_threshold: u64,
    #[prost(uint64, tag = "15")]
    pub safety_max_redemption_rate_threshold: u64,
    #[prost(uint64, tag = "16")]
    pub ibc_transfer_timeout_nanos: u64,
    #[prost(uint64, tag = "17")]
    pub safety_num_validators: u64,
    #[prost(uint64, tag = "18")]
    pub safety_max_slash_percent: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EpochTracker {
    #[prost(string, tag = "1")]
    pub epoch_identifier: ::prost::alloc::string::String,
    #[prost(uint64, tag = "2")]
    pub epoch_number: u64,
    #[prost(uint64, tag = "3")]
    pub next_epoch_start_time: u64,
    #[prost(uint64, tag = "4")]
    pub duration: u64,
}
/// QueryInterchainAccountFromAddressRequest is the request type for the
/// Query/InterchainAccountAddress RPC
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryInterchainAccountFromAddressRequest {
    #[prost(string, tag = "1")]
    pub owner: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub connection_id: ::prost::alloc::string::String,
}
/// QueryInterchainAccountFromAddressResponse the response type for the
/// Query/InterchainAccountAddress RPC
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryInterchainAccountFromAddressResponse {
    #[prost(string, tag = "1")]
    pub interchain_account_address: ::prost::alloc::string::String,
}
/// QueryParamsRequest is request type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {}
/// QueryParamsResponse is response type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    /// params holds all the parameters of this module.
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetValidatorsRequest {
    #[prost(string, tag = "1")]
    pub chain_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetValidatorsResponse {
    #[prost(message, repeated, tag = "1")]
    pub validators: ::prost::alloc::vec::Vec<Validator>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetHostZoneRequest {
    #[prost(string, tag = "1")]
    pub chain_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetHostZoneResponse {
    #[prost(message, optional, tag = "1")]
    pub host_zone: ::core::option::Option<HostZone>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllHostZoneRequest {
    #[prost(message, optional, tag = "1")]
    pub pagination: ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageRequest>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllHostZoneResponse {
    #[prost(message, repeated, tag = "1")]
    pub host_zone: ::prost::alloc::vec::Vec<HostZone>,
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::cosmos::base::query::v1beta1::PageResponse>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryModuleAddressRequest {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryModuleAddressResponse {
    #[prost(string, tag = "1")]
    pub addr: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetEpochTrackerRequest {
    #[prost(string, tag = "1")]
    pub epoch_identifier: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetEpochTrackerResponse {
    #[prost(message, optional, tag = "1")]
    pub epoch_tracker: ::core::option::Option<EpochTracker>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllEpochTrackerRequest {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllEpochTrackerResponse {
    #[prost(message, repeated, tag = "1")]
    pub epoch_tracker: ::prost::alloc::vec::Vec<EpochTracker>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetNextPacketSequenceRequest {
    #[prost(string, tag = "1")]
    pub channel_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub port_id: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetNextPacketSequenceResponse {
    #[prost(uint64, tag = "1")]
    pub sequence: u64,
}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    /// Query defines the gRPC querier service.
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
        /// Parameters queries the parameters of the module.
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
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/Params");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a Validator by host zone.
        pub async fn validators(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryGetValidatorsRequest>,
        ) -> Result<tonic::Response<super::QueryGetValidatorsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/Validators");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a HostZone by id.
        pub async fn host_zone(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryGetHostZoneRequest>,
        ) -> Result<tonic::Response<super::QueryGetHostZoneResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/HostZone");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a list of HostZone items.
        pub async fn host_zone_all(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllHostZoneRequest>,
        ) -> Result<tonic::Response<super::QueryAllHostZoneResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/HostZoneAll");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a list of ModuleAddress items.
        pub async fn module_address(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryModuleAddressRequest>,
        ) -> Result<tonic::Response<super::QueryModuleAddressResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/ModuleAddress");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// QueryInterchainAccountFromAddress returns the interchain account for given
        /// owner address on a given connection pair
        pub async fn interchain_account_from_address(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryInterchainAccountFromAddressRequest>,
        ) -> Result<tonic::Response<super::QueryInterchainAccountFromAddressResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/stride.stakeibc.Query/InterchainAccountFromAddress",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a EpochTracker by index.
        pub async fn epoch_tracker(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryGetEpochTrackerRequest>,
        ) -> Result<tonic::Response<super::QueryGetEpochTrackerResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/EpochTracker");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries a list of EpochTracker items.
        pub async fn epoch_tracker_all(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllEpochTrackerRequest>,
        ) -> Result<tonic::Response<super::QueryAllEpochTrackerResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/EpochTrackerAll");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Queries the next packet sequence for one for a given channel
        pub async fn next_packet_sequence(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryGetNextPacketSequenceRequest>,
        ) -> Result<tonic::Response<super::QueryGetNextPacketSequenceResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Query/NextPacketSequence");
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
        /// Parameters queries the parameters of the module.
        async fn params(
            &self,
            request: tonic::Request<super::QueryParamsRequest>,
        ) -> Result<tonic::Response<super::QueryParamsResponse>, tonic::Status>;
        /// Queries a Validator by host zone.
        async fn validators(
            &self,
            request: tonic::Request<super::QueryGetValidatorsRequest>,
        ) -> Result<tonic::Response<super::QueryGetValidatorsResponse>, tonic::Status>;
        /// Queries a HostZone by id.
        async fn host_zone(
            &self,
            request: tonic::Request<super::QueryGetHostZoneRequest>,
        ) -> Result<tonic::Response<super::QueryGetHostZoneResponse>, tonic::Status>;
        /// Queries a list of HostZone items.
        async fn host_zone_all(
            &self,
            request: tonic::Request<super::QueryAllHostZoneRequest>,
        ) -> Result<tonic::Response<super::QueryAllHostZoneResponse>, tonic::Status>;
        /// Queries a list of ModuleAddress items.
        async fn module_address(
            &self,
            request: tonic::Request<super::QueryModuleAddressRequest>,
        ) -> Result<tonic::Response<super::QueryModuleAddressResponse>, tonic::Status>;
        /// QueryInterchainAccountFromAddress returns the interchain account for given
        /// owner address on a given connection pair
        async fn interchain_account_from_address(
            &self,
            request: tonic::Request<super::QueryInterchainAccountFromAddressRequest>,
        ) -> Result<tonic::Response<super::QueryInterchainAccountFromAddressResponse>, tonic::Status>;
        /// Queries a EpochTracker by index.
        async fn epoch_tracker(
            &self,
            request: tonic::Request<super::QueryGetEpochTrackerRequest>,
        ) -> Result<tonic::Response<super::QueryGetEpochTrackerResponse>, tonic::Status>;
        /// Queries a list of EpochTracker items.
        async fn epoch_tracker_all(
            &self,
            request: tonic::Request<super::QueryAllEpochTrackerRequest>,
        ) -> Result<tonic::Response<super::QueryAllEpochTrackerResponse>, tonic::Status>;
        /// Queries the next packet sequence for one for a given channel
        async fn next_packet_sequence(
            &self,
            request: tonic::Request<super::QueryGetNextPacketSequenceRequest>,
        ) -> Result<tonic::Response<super::QueryGetNextPacketSequenceResponse>, tonic::Status>;
    }
    /// Query defines the gRPC querier service.
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
                "/stride.stakeibc.Query/Params" => {
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
                "/stride.stakeibc.Query/Validators" => {
                    #[allow(non_camel_case_types)]
                    struct ValidatorsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryGetValidatorsRequest> for ValidatorsSvc<T> {
                        type Response = super::QueryGetValidatorsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryGetValidatorsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).validators(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ValidatorsSvc(inner);
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
                "/stride.stakeibc.Query/HostZone" => {
                    #[allow(non_camel_case_types)]
                    struct HostZoneSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryGetHostZoneRequest> for HostZoneSvc<T> {
                        type Response = super::QueryGetHostZoneResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryGetHostZoneRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).host_zone(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = HostZoneSvc(inner);
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
                "/stride.stakeibc.Query/HostZoneAll" => {
                    #[allow(non_camel_case_types)]
                    struct HostZoneAllSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAllHostZoneRequest> for HostZoneAllSvc<T> {
                        type Response = super::QueryAllHostZoneResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllHostZoneRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).host_zone_all(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = HostZoneAllSvc(inner);
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
                "/stride.stakeibc.Query/ModuleAddress" => {
                    #[allow(non_camel_case_types)]
                    struct ModuleAddressSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryModuleAddressRequest>
                        for ModuleAddressSvc<T>
                    {
                        type Response = super::QueryModuleAddressResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryModuleAddressRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).module_address(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ModuleAddressSvc(inner);
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
                "/stride.stakeibc.Query/InterchainAccountFromAddress" => {
                    #[allow(non_camel_case_types)]
                    struct InterchainAccountFromAddressSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryInterchainAccountFromAddressRequest>
                        for InterchainAccountFromAddressSvc<T>
                    {
                        type Response = super::QueryInterchainAccountFromAddressResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::QueryInterchainAccountFromAddressRequest,
                            >,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).interchain_account_from_address(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = InterchainAccountFromAddressSvc(inner);
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
                "/stride.stakeibc.Query/EpochTracker" => {
                    #[allow(non_camel_case_types)]
                    struct EpochTrackerSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryGetEpochTrackerRequest>
                        for EpochTrackerSvc<T>
                    {
                        type Response = super::QueryGetEpochTrackerResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryGetEpochTrackerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).epoch_tracker(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = EpochTrackerSvc(inner);
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
                "/stride.stakeibc.Query/EpochTrackerAll" => {
                    #[allow(non_camel_case_types)]
                    struct EpochTrackerAllSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAllEpochTrackerRequest>
                        for EpochTrackerAllSvc<T>
                    {
                        type Response = super::QueryAllEpochTrackerResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllEpochTrackerRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).epoch_tracker_all(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = EpochTrackerAllSvc(inner);
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
                "/stride.stakeibc.Query/NextPacketSequence" => {
                    #[allow(non_camel_case_types)]
                    struct NextPacketSequenceSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryGetNextPacketSequenceRequest>
                        for NextPacketSequenceSvc<T>
                    {
                        type Response = super::QueryGetNextPacketSequenceResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryGetNextPacketSequenceRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).next_packet_sequence(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = NextPacketSequenceSvc(inner);
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
        const NAME: &'static str = "stride.stakeibc.Query";
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StakeibcPacketData {
    #[prost(oneof = "stakeibc_packet_data::Packet", tags = "1")]
    pub packet: ::core::option::Option<stakeibc_packet_data::Packet>,
}
/// Nested message and enum types in `StakeibcPacketData`.
pub mod stakeibc_packet_data {
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Packet {
        /// this line is used by starport scaffolding # ibc/packet/proto/field
        #[prost(message, tag = "1")]
        NoData(super::NoData),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NoData {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgLiquidStake {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub amount: ::prost::alloc::string::String,
    /// TODO(TEST-86): Update Denom -> HostDenom
    #[prost(string, tag = "3")]
    pub host_denom: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgLiquidStakeResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearBalance {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub amount: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub channel: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearBalanceResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRedeemStake {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub amount: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub receiver: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRedeemStakeResponse {}
/// next: 13
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRegisterHostZone {
    #[prost(string, tag = "2")]
    pub connection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "12")]
    pub bech32prefix: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub host_denom: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub ibc_denom: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "10")]
    pub transfer_channel_id: ::prost::alloc::string::String,
    #[prost(uint64, tag = "11")]
    pub unbonding_frequency: u64,
}
/// TODO(TEST-53): Remove this pre-launch (no need for clients to create /
/// interact with ICAs)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRegisterHostZoneResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClaimUndelegatedTokens {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    /// UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender}
    #[prost(string, tag = "2")]
    pub host_zone_id: ::prost::alloc::string::String,
    #[prost(uint64, tag = "3")]
    pub epoch: u64,
    #[prost(string, tag = "4")]
    pub sender: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClaimUndelegatedTokensResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRebalanceValidators {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(uint64, tag = "3")]
    pub num_rebalance: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRebalanceValidatorsResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddValidator {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub address: ::prost::alloc::string::String,
    #[prost(uint64, tag = "5")]
    pub commission: u64,
    #[prost(uint64, tag = "6")]
    pub weight: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddValidatorResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgChangeValidatorWeight {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub val_addr: ::prost::alloc::string::String,
    #[prost(uint64, tag = "4")]
    pub weight: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgChangeValidatorWeightResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteValidator {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub host_zone: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub val_addr: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteValidatorResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRestoreInterchainAccount {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(enumeration = "IcaAccountType", tag = "3")]
    pub account_type: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRestoreInterchainAccountResponse {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateValidatorSharesExchRate {
    #[prost(string, tag = "1")]
    pub creator: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub valoper: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateValidatorSharesExchRateResponse {}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod msg_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    /// Msg defines the Msg service.
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
        pub async fn liquid_stake(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgLiquidStake>,
        ) -> Result<tonic::Response<super::MsgLiquidStakeResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/LiquidStake");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn redeem_stake(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgRedeemStake>,
        ) -> Result<tonic::Response<super::MsgRedeemStakeResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/RedeemStake");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// TODO(TEST-53): Remove this pre-launch (no need for clients to create /
        /// interact with ICAs)
        pub async fn register_host_zone(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgRegisterHostZone>,
        ) -> Result<tonic::Response<super::MsgRegisterHostZoneResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/RegisterHostZone");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn claim_undelegated_tokens(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgClaimUndelegatedTokens>,
        ) -> Result<tonic::Response<super::MsgClaimUndelegatedTokensResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/ClaimUndelegatedTokens");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn rebalance_validators(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgRebalanceValidators>,
        ) -> Result<tonic::Response<super::MsgRebalanceValidatorsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/RebalanceValidators");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn add_validator(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgAddValidator>,
        ) -> Result<tonic::Response<super::MsgAddValidatorResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/AddValidator");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn change_validator_weight(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgChangeValidatorWeight>,
        ) -> Result<tonic::Response<super::MsgChangeValidatorWeightResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/ChangeValidatorWeight");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn delete_validator(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgDeleteValidator>,
        ) -> Result<tonic::Response<super::MsgDeleteValidatorResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/DeleteValidator");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn restore_interchain_account(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgRestoreInterchainAccount>,
        ) -> Result<tonic::Response<super::MsgRestoreInterchainAccountResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/stride.stakeibc.Msg/RestoreInterchainAccount",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn update_validator_shares_exch_rate(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUpdateValidatorSharesExchRate>,
        ) -> Result<tonic::Response<super::MsgUpdateValidatorSharesExchRateResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/stride.stakeibc.Msg/UpdateValidatorSharesExchRate",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn clear_balance(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgClearBalance>,
        ) -> Result<tonic::Response<super::MsgClearBalanceResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/stride.stakeibc.Msg/ClearBalance");
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
        async fn liquid_stake(
            &self,
            request: tonic::Request<super::MsgLiquidStake>,
        ) -> Result<tonic::Response<super::MsgLiquidStakeResponse>, tonic::Status>;
        async fn redeem_stake(
            &self,
            request: tonic::Request<super::MsgRedeemStake>,
        ) -> Result<tonic::Response<super::MsgRedeemStakeResponse>, tonic::Status>;
        /// TODO(TEST-53): Remove this pre-launch (no need for clients to create /
        /// interact with ICAs)
        async fn register_host_zone(
            &self,
            request: tonic::Request<super::MsgRegisterHostZone>,
        ) -> Result<tonic::Response<super::MsgRegisterHostZoneResponse>, tonic::Status>;
        async fn claim_undelegated_tokens(
            &self,
            request: tonic::Request<super::MsgClaimUndelegatedTokens>,
        ) -> Result<tonic::Response<super::MsgClaimUndelegatedTokensResponse>, tonic::Status>;
        async fn rebalance_validators(
            &self,
            request: tonic::Request<super::MsgRebalanceValidators>,
        ) -> Result<tonic::Response<super::MsgRebalanceValidatorsResponse>, tonic::Status>;
        async fn add_validator(
            &self,
            request: tonic::Request<super::MsgAddValidator>,
        ) -> Result<tonic::Response<super::MsgAddValidatorResponse>, tonic::Status>;
        async fn change_validator_weight(
            &self,
            request: tonic::Request<super::MsgChangeValidatorWeight>,
        ) -> Result<tonic::Response<super::MsgChangeValidatorWeightResponse>, tonic::Status>;
        async fn delete_validator(
            &self,
            request: tonic::Request<super::MsgDeleteValidator>,
        ) -> Result<tonic::Response<super::MsgDeleteValidatorResponse>, tonic::Status>;
        async fn restore_interchain_account(
            &self,
            request: tonic::Request<super::MsgRestoreInterchainAccount>,
        ) -> Result<tonic::Response<super::MsgRestoreInterchainAccountResponse>, tonic::Status>;
        async fn update_validator_shares_exch_rate(
            &self,
            request: tonic::Request<super::MsgUpdateValidatorSharesExchRate>,
        ) -> Result<tonic::Response<super::MsgUpdateValidatorSharesExchRateResponse>, tonic::Status>;
        async fn clear_balance(
            &self,
            request: tonic::Request<super::MsgClearBalance>,
        ) -> Result<tonic::Response<super::MsgClearBalanceResponse>, tonic::Status>;
    }
    /// Msg defines the Msg service.
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
                "/stride.stakeibc.Msg/LiquidStake" => {
                    #[allow(non_camel_case_types)]
                    struct LiquidStakeSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgLiquidStake> for LiquidStakeSvc<T> {
                        type Response = super::MsgLiquidStakeResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgLiquidStake>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).liquid_stake(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = LiquidStakeSvc(inner);
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
                "/stride.stakeibc.Msg/RedeemStake" => {
                    #[allow(non_camel_case_types)]
                    struct RedeemStakeSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgRedeemStake> for RedeemStakeSvc<T> {
                        type Response = super::MsgRedeemStakeResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgRedeemStake>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).redeem_stake(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RedeemStakeSvc(inner);
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
                "/stride.stakeibc.Msg/RegisterHostZone" => {
                    #[allow(non_camel_case_types)]
                    struct RegisterHostZoneSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgRegisterHostZone> for RegisterHostZoneSvc<T> {
                        type Response = super::MsgRegisterHostZoneResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgRegisterHostZone>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).register_host_zone(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RegisterHostZoneSvc(inner);
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
                "/stride.stakeibc.Msg/ClaimUndelegatedTokens" => {
                    #[allow(non_camel_case_types)]
                    struct ClaimUndelegatedTokensSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgClaimUndelegatedTokens>
                        for ClaimUndelegatedTokensSvc<T>
                    {
                        type Response = super::MsgClaimUndelegatedTokensResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgClaimUndelegatedTokens>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).claim_undelegated_tokens(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ClaimUndelegatedTokensSvc(inner);
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
                "/stride.stakeibc.Msg/RebalanceValidators" => {
                    #[allow(non_camel_case_types)]
                    struct RebalanceValidatorsSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgRebalanceValidators>
                        for RebalanceValidatorsSvc<T>
                    {
                        type Response = super::MsgRebalanceValidatorsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgRebalanceValidators>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).rebalance_validators(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RebalanceValidatorsSvc(inner);
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
                "/stride.stakeibc.Msg/AddValidator" => {
                    #[allow(non_camel_case_types)]
                    struct AddValidatorSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgAddValidator> for AddValidatorSvc<T> {
                        type Response = super::MsgAddValidatorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgAddValidator>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).add_validator(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AddValidatorSvc(inner);
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
                "/stride.stakeibc.Msg/ChangeValidatorWeight" => {
                    #[allow(non_camel_case_types)]
                    struct ChangeValidatorWeightSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgChangeValidatorWeight>
                        for ChangeValidatorWeightSvc<T>
                    {
                        type Response = super::MsgChangeValidatorWeightResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgChangeValidatorWeight>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).change_validator_weight(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ChangeValidatorWeightSvc(inner);
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
                "/stride.stakeibc.Msg/DeleteValidator" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteValidatorSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgDeleteValidator> for DeleteValidatorSvc<T> {
                        type Response = super::MsgDeleteValidatorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgDeleteValidator>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).delete_validator(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DeleteValidatorSvc(inner);
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
                "/stride.stakeibc.Msg/RestoreInterchainAccount" => {
                    #[allow(non_camel_case_types)]
                    struct RestoreInterchainAccountSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgRestoreInterchainAccount>
                        for RestoreInterchainAccountSvc<T>
                    {
                        type Response = super::MsgRestoreInterchainAccountResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgRestoreInterchainAccount>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).restore_interchain_account(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RestoreInterchainAccountSvc(inner);
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
                "/stride.stakeibc.Msg/UpdateValidatorSharesExchRate" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateValidatorSharesExchRateSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg>
                        tonic::server::UnaryService<super::MsgUpdateValidatorSharesExchRate>
                        for UpdateValidatorSharesExchRateSvc<T>
                    {
                        type Response = super::MsgUpdateValidatorSharesExchRateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUpdateValidatorSharesExchRate>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).update_validator_shares_exch_rate(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateValidatorSharesExchRateSvc(inner);
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
                "/stride.stakeibc.Msg/ClearBalance" => {
                    #[allow(non_camel_case_types)]
                    struct ClearBalanceSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgClearBalance> for ClearBalanceSvc<T> {
                        type Response = super::MsgClearBalanceResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgClearBalance>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).clear_balance(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ClearBalanceSvc(inner);
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
        const NAME: &'static str = "stride.stakeibc.Msg";
    }
}
/// GenesisState defines the stakeibc module's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
    #[prost(string, tag = "2")]
    pub port_id: ::prost::alloc::string::String,
    /// list of zones that are registered by the protocol
    #[prost(message, repeated, tag = "5")]
    pub host_zone_list: ::prost::alloc::vec::Vec<HostZone>,
    #[prost(message, repeated, tag = "10")]
    pub epoch_tracker_list: ::prost::alloc::vec::Vec<EpochTracker>,
}
