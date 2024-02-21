/// AccessTypeParam
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AccessTypeParam {
    #[prost(enumeration = "AccessType", tag = "1")]
    pub value: i32,
}
/// AccessConfig access control type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AccessConfig {
    #[prost(enumeration = "AccessType", tag = "1")]
    pub permission: i32,
    /// Address
    /// Deprecated: replaced by addresses
    #[prost(string, tag = "2")]
    pub address: ::prost::alloc::string::String,
    #[prost(string, repeated, tag = "3")]
    pub addresses: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
/// Params defines the set of wasm parameters.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(message, optional, tag = "1")]
    pub code_upload_access: ::core::option::Option<AccessConfig>,
    #[prost(enumeration = "AccessType", tag = "2")]
    pub instantiate_default_permission: i32,
}
/// CodeInfo is data for the uploaded contract WASM code
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CodeInfo {
    /// CodeHash is the unique identifier created by wasmvm
    #[prost(bytes = "vec", tag = "1")]
    pub code_hash: ::prost::alloc::vec::Vec<u8>,
    /// Creator address who initially stored the code
    #[prost(string, tag = "2")]
    pub creator: ::prost::alloc::string::String,
    /// InstantiateConfig access control to apply on contract creation, optional
    #[prost(message, optional, tag = "5")]
    pub instantiate_config: ::core::option::Option<AccessConfig>,
}
/// ContractInfo stores a WASM contract instance
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractInfo {
    /// CodeID is the reference to the stored Wasm code
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    /// Creator address who initially instantiated the contract
    #[prost(string, tag = "2")]
    pub creator: ::prost::alloc::string::String,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "3")]
    pub admin: ::prost::alloc::string::String,
    /// Label is optional metadata to be stored with a contract instance.
    #[prost(string, tag = "4")]
    pub label: ::prost::alloc::string::String,
    /// Created Tx position when the contract was instantiated.
    #[prost(message, optional, tag = "5")]
    pub created: ::core::option::Option<AbsoluteTxPosition>,
    #[prost(string, tag = "6")]
    pub ibc_port_id: ::prost::alloc::string::String,
    /// Extension is an extension point to store custom metadata within the
    /// persistence model.
    #[prost(message, optional, tag = "7")]
    pub extension: ::core::option::Option<::prost_types::Any>,
}
/// ContractCodeHistoryEntry metadata to a contract.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractCodeHistoryEntry {
    #[prost(enumeration = "ContractCodeHistoryOperationType", tag = "1")]
    pub operation: i32,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "2")]
    pub code_id: u64,
    /// Updated Tx position when the operation was executed.
    #[prost(message, optional, tag = "3")]
    pub updated: ::core::option::Option<AbsoluteTxPosition>,
    #[prost(bytes = "vec", tag = "4")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
}
/// AbsoluteTxPosition is a unique transaction position that allows for global
/// ordering of transactions.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AbsoluteTxPosition {
    /// BlockHeight is the block the contract was created at
    #[prost(uint64, tag = "1")]
    pub block_height: u64,
    /// TxIndex is a monotonic counter within the block (actual transaction index,
    /// or gas consumed)
    #[prost(uint64, tag = "2")]
    pub tx_index: u64,
}
/// Model is a struct that holds a KV pair
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Model {
    /// hex-encode key to read it better (this is often ascii)
    #[prost(bytes = "vec", tag = "1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
    /// base64-encode raw value
    #[prost(bytes = "vec", tag = "2")]
    pub value: ::prost::alloc::vec::Vec<u8>,
}
/// AccessType permission types
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum AccessType {
    /// AccessTypeUnspecified placeholder for empty value
    Unspecified = 0,
    /// AccessTypeNobody forbidden
    Nobody = 1,
    /// AccessTypeOnlyAddress restricted to a single address
    /// Deprecated: use AccessTypeAnyOfAddresses instead
    OnlyAddress = 2,
    /// AccessTypeEverybody unrestricted
    Everybody = 3,
    /// AccessTypeAnyOfAddresses allow any of the addresses
    AnyOfAddresses = 4,
}
impl AccessType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            AccessType::Unspecified => "ACCESS_TYPE_UNSPECIFIED",
            AccessType::Nobody => "ACCESS_TYPE_NOBODY",
            AccessType::OnlyAddress => "ACCESS_TYPE_ONLY_ADDRESS",
            AccessType::Everybody => "ACCESS_TYPE_EVERYBODY",
            AccessType::AnyOfAddresses => "ACCESS_TYPE_ANY_OF_ADDRESSES",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "ACCESS_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "ACCESS_TYPE_NOBODY" => Some(Self::Nobody),
            "ACCESS_TYPE_ONLY_ADDRESS" => Some(Self::OnlyAddress),
            "ACCESS_TYPE_EVERYBODY" => Some(Self::Everybody),
            "ACCESS_TYPE_ANY_OF_ADDRESSES" => Some(Self::AnyOfAddresses),
            _ => None,
        }
    }
}
/// ContractCodeHistoryOperationType actions that caused a code change
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ContractCodeHistoryOperationType {
    /// ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
    Unspecified = 0,
    /// ContractCodeHistoryOperationTypeInit on chain contract instantiation
    Init = 1,
    /// ContractCodeHistoryOperationTypeMigrate code migration
    Migrate = 2,
    /// ContractCodeHistoryOperationTypeGenesis based on genesis data
    Genesis = 3,
}
impl ContractCodeHistoryOperationType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ContractCodeHistoryOperationType::Unspecified => {
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"
            }
            ContractCodeHistoryOperationType::Init => "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT",
            ContractCodeHistoryOperationType::Migrate => {
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"
            }
            ContractCodeHistoryOperationType::Genesis => {
                "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"
            }
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT" => Some(Self::Init),
            "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE" => Some(Self::Migrate),
            "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS" => Some(Self::Genesis),
            _ => None,
        }
    }
}
/// MsgStoreCode submit Wasm code to the system
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreCode {
    /// Sender is the actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes = "vec", tag = "2")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
    /// InstantiatePermission access control to apply on contract creation,
    /// optional
    #[prost(message, optional, tag = "5")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
}
/// MsgStoreCodeResponse returns store result data.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreCodeResponse {
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    /// Checksum is the sha256 hash of the stored code
    #[prost(bytes = "vec", tag = "2")]
    pub checksum: ::prost::alloc::vec::Vec<u8>,
}
/// MsgInstantiateContract create a new smart contract instance for the given
/// code id.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContract {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "2")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "3")]
    pub code_id: u64,
    /// Label is optional metadata to be stored with a contract instance.
    #[prost(string, tag = "4")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "5")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "6")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// MsgInstantiateContractResponse return instantiation result data
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContractResponse {
    /// Address is the bech32 address of the new contract instance.
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// Data contains bytes to returned from the contract
    #[prost(bytes = "vec", tag = "2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgInstantiateContract2 create a new smart contract instance for the given
/// code id with a predicable address.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContract2 {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "2")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "3")]
    pub code_id: u64,
    /// Label is optional metadata to be stored with a contract instance.
    #[prost(string, tag = "4")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "5")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "6")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    /// Salt is an arbitrary value provided by the sender. Size can be 1 to 64.
    #[prost(bytes = "vec", tag = "7")]
    pub salt: ::prost::alloc::vec::Vec<u8>,
    /// FixMsg include the msg value into the hash for the predictable address.
    /// Default is false
    #[prost(bool, tag = "8")]
    pub fix_msg: bool,
}
/// MsgInstantiateContract2Response return instantiation result data
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContract2Response {
    /// Address is the bech32 address of the new contract instance.
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// Data contains bytes to returned from the contract
    #[prost(bytes = "vec", tag = "2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgExecuteContract submits the given message data to a smart contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgExecuteContract {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "2")]
    pub contract: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract
    #[prost(bytes = "vec", tag = "3")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on execution
    #[prost(message, repeated, tag = "5")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// MsgExecuteContractResponse returns execution result data.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgExecuteContractResponse {
    /// Data contains bytes to returned from the contract
    #[prost(bytes = "vec", tag = "1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgMigrateContract runs a code upgrade/ downgrade for a smart contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateContract {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "2")]
    pub contract: ::prost::alloc::string::String,
    /// CodeID references the new WASM code
    #[prost(uint64, tag = "3")]
    pub code_id: u64,
    /// Msg json encoded message to be passed to the contract on migration
    #[prost(bytes = "vec", tag = "4")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
}
/// MsgMigrateContractResponse returns contract migration result data.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateContractResponse {
    /// Data contains same raw bytes returned as data from the wasm contract.
    /// (May be empty)
    #[prost(bytes = "vec", tag = "1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgUpdateAdmin sets a new admin for a smart contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateAdmin {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// NewAdmin address to be set
    #[prost(string, tag = "2")]
    pub new_admin: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "3")]
    pub contract: ::prost::alloc::string::String,
}
/// MsgUpdateAdminResponse returns empty data
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateAdminResponse {}
/// MsgClearAdmin removes any admin stored for a smart contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearAdmin {
    /// Sender is the actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "3")]
    pub contract: ::prost::alloc::string::String,
}
/// MsgClearAdminResponse returns empty data
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearAdminResponse {}
/// MsgUpdateInstantiateConfig updates instantiate config for a smart contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateInstantiateConfig {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag = "1")]
    pub sender: ::prost::alloc::string::String,
    /// CodeID references the stored WASM code
    #[prost(uint64, tag = "2")]
    pub code_id: u64,
    /// NewInstantiatePermission is the new access control
    #[prost(message, optional, tag = "3")]
    pub new_instantiate_permission: ::core::option::Option<AccessConfig>,
}
/// MsgUpdateInstantiateConfigResponse returns empty data
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateInstantiateConfigResponse {}
/// MsgUpdateParams is the MsgUpdateParams request type.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParams {
    /// Authority is the address of the governance account.
    #[prost(string, tag = "1")]
    pub authority: ::prost::alloc::string::String,
    /// params defines the x/wasm parameters to update.
    ///
    /// NOTE: All parameters must be supplied.
    #[prost(message, optional, tag = "2")]
    pub params: ::core::option::Option<Params>,
}
/// MsgUpdateParamsResponse defines the response structure for executing a
/// MsgUpdateParams message.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParamsResponse {}
/// MsgSudoContract is the MsgSudoContract request type.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSudoContract {
    /// Authority is the address of the governance account.
    #[prost(string, tag = "1")]
    pub authority: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "2")]
    pub contract: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract as sudo
    #[prost(bytes = "vec", tag = "3")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
}
/// MsgSudoContractResponse defines the response structure for executing a
/// MsgSudoContract message.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSudoContractResponse {
    /// Data contains bytes to returned from the contract
    #[prost(bytes = "vec", tag = "1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgPinCodes is the MsgPinCodes request type.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgPinCodes {
    /// Authority is the address of the governance account.
    #[prost(string, tag = "1")]
    pub authority: ::prost::alloc::string::String,
    /// CodeIDs references the new WASM codes
    #[prost(uint64, repeated, packed = "false", tag = "2")]
    pub code_ids: ::prost::alloc::vec::Vec<u64>,
}
/// MsgPinCodesResponse defines the response structure for executing a
/// MsgPinCodes message.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgPinCodesResponse {}
/// MsgUnpinCodes is the MsgUnpinCodes request type.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUnpinCodes {
    /// Authority is the address of the governance account.
    #[prost(string, tag = "1")]
    pub authority: ::prost::alloc::string::String,
    /// CodeIDs references the WASM codes
    #[prost(uint64, repeated, packed = "false", tag = "2")]
    pub code_ids: ::prost::alloc::vec::Vec<u64>,
}
/// MsgUnpinCodesResponse defines the response structure for executing a
/// MsgUnpinCodes message.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUnpinCodesResponse {}
/// MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
/// request type.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreAndInstantiateContract {
    /// Authority is the address of the governance account.
    #[prost(string, tag = "1")]
    pub authority: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes = "vec", tag = "3")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
    /// InstantiatePermission to apply on contract creation, optional
    #[prost(message, optional, tag = "4")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
    /// UnpinCode code on upload, optional. As default the uploaded contract is
    /// pinned to cache.
    #[prost(bool, tag = "5")]
    pub unpin_code: bool,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "6")]
    pub admin: ::prost::alloc::string::String,
    /// Label is optional metadata to be stored with a constract instance.
    #[prost(string, tag = "7")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "8")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred from the authority account to the contract
    /// on instantiation
    #[prost(message, repeated, tag = "9")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    /// Source is the URL where the code is hosted
    #[prost(string, tag = "10")]
    pub source: ::prost::alloc::string::String,
    /// Builder is the docker image used to build the code deterministically, used
    /// for smart contract verification
    #[prost(string, tag = "11")]
    pub builder: ::prost::alloc::string::String,
    /// CodeHash is the SHA256 sum of the code outputted by builder, used for smart
    /// contract verification
    #[prost(bytes = "vec", tag = "12")]
    pub code_hash: ::prost::alloc::vec::Vec<u8>,
}
/// MsgStoreAndInstantiateContractResponse defines the response structure
/// for executing a MsgStoreAndInstantiateContract message.
///
/// Since: 0.40
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreAndInstantiateContractResponse {
    /// Address is the bech32 address of the new contract instance.
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// Data contains bytes to returned from the contract
    #[prost(bytes = "vec", tag = "2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod msg_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    /// Msg defines the wasm Msg service.
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
            T:
                tonic::codegen::Service<
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
        /// StoreCode to submit Wasm code to the system
        pub async fn store_code(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgStoreCode>,
        ) -> Result<tonic::Response<super::MsgStoreCodeResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/StoreCode");
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///  InstantiateContract creates a new smart contract instance for the given
        ///  code id.
        pub async fn instantiate_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgInstantiateContract>,
        ) -> Result<tonic::Response<super::MsgInstantiateContractResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/InstantiateContract");
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///  InstantiateContract2 creates a new smart contract instance for the given
        ///  code id with a predictable address
        pub async fn instantiate_contract2(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgInstantiateContract2>,
        ) -> Result<tonic::Response<super::MsgInstantiateContract2Response>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/InstantiateContract2");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Execute submits the given message data to a smart contract
        pub async fn execute_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgExecuteContract>,
        ) -> Result<tonic::Response<super::MsgExecuteContractResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/ExecuteContract");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Migrate runs a code upgrade/ downgrade for a smart contract
        pub async fn migrate_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgMigrateContract>,
        ) -> Result<tonic::Response<super::MsgMigrateContractResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/MigrateContract");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// UpdateAdmin sets a new   admin for a smart contract
        pub async fn update_admin(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUpdateAdmin>,
        ) -> Result<tonic::Response<super::MsgUpdateAdminResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/UpdateAdmin");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// ClearAdmin removes any admin stored for a smart contract
        pub async fn clear_admin(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgClearAdmin>,
        ) -> Result<tonic::Response<super::MsgClearAdminResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/ClearAdmin");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// UpdateInstantiateConfig updates instantiate config for a smart contract
        pub async fn update_instantiate_config(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUpdateInstantiateConfig>,
        ) -> Result<tonic::Response<super::MsgUpdateInstantiateConfigResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/cosmwasm.wasm.v1.Msg/UpdateInstantiateConfig",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// UpdateParams defines a governance operation for updating the x/wasm
        /// module parameters. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        pub async fn update_params(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUpdateParams>,
        ) -> Result<tonic::Response<super::MsgUpdateParamsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/UpdateParams");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// SudoContract defines a governance operation for calling sudo
        /// on a contract. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        pub async fn sudo_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgSudoContract>,
        ) -> Result<tonic::Response<super::MsgSudoContractResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/SudoContract");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// PinCodes defines a governance operation for pinning a set of
        /// code ids in the wasmvm cache. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        pub async fn pin_codes(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgPinCodes>,
        ) -> Result<tonic::Response<super::MsgPinCodesResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/PinCodes");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// UnpinCodes defines a governance operation for unpinning a set of
        /// code ids in the wasmvm cache. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        pub async fn unpin_codes(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgUnpinCodes>,
        ) -> Result<tonic::Response<super::MsgUnpinCodesResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Msg/UnpinCodes");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// StoreAndInstantiateContract defines a governance operation for storing
        /// and instantiating the contract. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        pub async fn store_and_instantiate_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::MsgStoreAndInstantiateContract>,
        ) -> Result<tonic::Response<super::MsgStoreAndInstantiateContractResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/cosmwasm.wasm.v1.Msg/StoreAndInstantiateContract",
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
        /// StoreCode to submit Wasm code to the system
        async fn store_code(
            &self,
            request: tonic::Request<super::MsgStoreCode>,
        ) -> Result<tonic::Response<super::MsgStoreCodeResponse>, tonic::Status>;
        ///  InstantiateContract creates a new smart contract instance for the given
        ///  code id.
        async fn instantiate_contract(
            &self,
            request: tonic::Request<super::MsgInstantiateContract>,
        ) -> Result<tonic::Response<super::MsgInstantiateContractResponse>, tonic::Status>;
        ///  InstantiateContract2 creates a new smart contract instance for the given
        ///  code id with a predictable address
        async fn instantiate_contract2(
            &self,
            request: tonic::Request<super::MsgInstantiateContract2>,
        ) -> Result<tonic::Response<super::MsgInstantiateContract2Response>, tonic::Status>;
        /// Execute submits the given message data to a smart contract
        async fn execute_contract(
            &self,
            request: tonic::Request<super::MsgExecuteContract>,
        ) -> Result<tonic::Response<super::MsgExecuteContractResponse>, tonic::Status>;
        /// Migrate runs a code upgrade/ downgrade for a smart contract
        async fn migrate_contract(
            &self,
            request: tonic::Request<super::MsgMigrateContract>,
        ) -> Result<tonic::Response<super::MsgMigrateContractResponse>, tonic::Status>;
        /// UpdateAdmin sets a new   admin for a smart contract
        async fn update_admin(
            &self,
            request: tonic::Request<super::MsgUpdateAdmin>,
        ) -> Result<tonic::Response<super::MsgUpdateAdminResponse>, tonic::Status>;
        /// ClearAdmin removes any admin stored for a smart contract
        async fn clear_admin(
            &self,
            request: tonic::Request<super::MsgClearAdmin>,
        ) -> Result<tonic::Response<super::MsgClearAdminResponse>, tonic::Status>;
        /// UpdateInstantiateConfig updates instantiate config for a smart contract
        async fn update_instantiate_config(
            &self,
            request: tonic::Request<super::MsgUpdateInstantiateConfig>,
        ) -> Result<tonic::Response<super::MsgUpdateInstantiateConfigResponse>, tonic::Status>;
        /// UpdateParams defines a governance operation for updating the x/wasm
        /// module parameters. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        async fn update_params(
            &self,
            request: tonic::Request<super::MsgUpdateParams>,
        ) -> Result<tonic::Response<super::MsgUpdateParamsResponse>, tonic::Status>;
        /// SudoContract defines a governance operation for calling sudo
        /// on a contract. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        async fn sudo_contract(
            &self,
            request: tonic::Request<super::MsgSudoContract>,
        ) -> Result<tonic::Response<super::MsgSudoContractResponse>, tonic::Status>;
        /// PinCodes defines a governance operation for pinning a set of
        /// code ids in the wasmvm cache. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        async fn pin_codes(
            &self,
            request: tonic::Request<super::MsgPinCodes>,
        ) -> Result<tonic::Response<super::MsgPinCodesResponse>, tonic::Status>;
        /// UnpinCodes defines a governance operation for unpinning a set of
        /// code ids in the wasmvm cache. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        async fn unpin_codes(
            &self,
            request: tonic::Request<super::MsgUnpinCodes>,
        ) -> Result<tonic::Response<super::MsgUnpinCodesResponse>, tonic::Status>;
        /// StoreAndInstantiateContract defines a governance operation for storing
        /// and instantiating the contract. The authority is defined in the keeper.
        ///
        /// Since: 0.40
        async fn store_and_instantiate_contract(
            &self,
            request: tonic::Request<super::MsgStoreAndInstantiateContract>,
        ) -> Result<tonic::Response<super::MsgStoreAndInstantiateContractResponse>, tonic::Status>;
    }
    /// Msg defines the wasm Msg service.
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
                "/cosmwasm.wasm.v1.Msg/StoreCode" => {
                    #[allow(non_camel_case_types)]
                    struct StoreCodeSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgStoreCode> for StoreCodeSvc<T> {
                        type Response = super::MsgStoreCodeResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgStoreCode>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).store_code(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = StoreCodeSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/InstantiateContract" => {
                    #[allow(non_camel_case_types)]
                    struct InstantiateContractSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgInstantiateContract>
                        for InstantiateContractSvc<T>
                    {
                        type Response = super::MsgInstantiateContractResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgInstantiateContract>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).instantiate_contract(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = InstantiateContractSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/InstantiateContract2" => {
                    #[allow(non_camel_case_types)]
                    struct InstantiateContract2Svc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgInstantiateContract2>
                        for InstantiateContract2Svc<T>
                    {
                        type Response = super::MsgInstantiateContract2Response;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgInstantiateContract2>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).instantiate_contract2(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = InstantiateContract2Svc(inner);
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
                "/cosmwasm.wasm.v1.Msg/ExecuteContract" => {
                    #[allow(non_camel_case_types)]
                    struct ExecuteContractSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgExecuteContract> for ExecuteContractSvc<T> {
                        type Response = super::MsgExecuteContractResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgExecuteContract>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).execute_contract(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ExecuteContractSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/MigrateContract" => {
                    #[allow(non_camel_case_types)]
                    struct MigrateContractSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgMigrateContract> for MigrateContractSvc<T> {
                        type Response = super::MsgMigrateContractResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgMigrateContract>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).migrate_contract(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = MigrateContractSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/UpdateAdmin" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateAdminSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgUpdateAdmin> for UpdateAdminSvc<T> {
                        type Response = super::MsgUpdateAdminResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUpdateAdmin>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).update_admin(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateAdminSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/ClearAdmin" => {
                    #[allow(non_camel_case_types)]
                    struct ClearAdminSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgClearAdmin> for ClearAdminSvc<T> {
                        type Response = super::MsgClearAdminResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgClearAdmin>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).clear_admin(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ClearAdminSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/UpdateInstantiateConfig" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateInstantiateConfigSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgUpdateInstantiateConfig>
                        for UpdateInstantiateConfigSvc<T>
                    {
                        type Response = super::MsgUpdateInstantiateConfigResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUpdateInstantiateConfig>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut =
                                async move { (*inner).update_instantiate_config(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateInstantiateConfigSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/UpdateParams" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateParamsSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgUpdateParams> for UpdateParamsSvc<T> {
                        type Response = super::MsgUpdateParamsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUpdateParams>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).update_params(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateParamsSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/SudoContract" => {
                    #[allow(non_camel_case_types)]
                    struct SudoContractSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgSudoContract> for SudoContractSvc<T> {
                        type Response = super::MsgSudoContractResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgSudoContract>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).sudo_contract(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = SudoContractSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/PinCodes" => {
                    #[allow(non_camel_case_types)]
                    struct PinCodesSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgPinCodes> for PinCodesSvc<T> {
                        type Response = super::MsgPinCodesResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgPinCodes>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).pin_codes(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = PinCodesSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/UnpinCodes" => {
                    #[allow(non_camel_case_types)]
                    struct UnpinCodesSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgUnpinCodes> for UnpinCodesSvc<T> {
                        type Response = super::MsgUnpinCodesResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgUnpinCodes>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).unpin_codes(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UnpinCodesSvc(inner);
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
                "/cosmwasm.wasm.v1.Msg/StoreAndInstantiateContract" => {
                    #[allow(non_camel_case_types)]
                    struct StoreAndInstantiateContractSvc<T: Msg>(pub Arc<T>);
                    impl<T: Msg> tonic::server::UnaryService<super::MsgStoreAndInstantiateContract>
                        for StoreAndInstantiateContractSvc<T>
                    {
                        type Response = super::MsgStoreAndInstantiateContractResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::MsgStoreAndInstantiateContract>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).store_and_instantiate_contract(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = StoreAndInstantiateContractSvc(inner);
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
        const NAME: &'static str = "cosmwasm.wasm.v1.Msg";
    }
}
/// QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractInfoRequest {
    /// address is the address of the contract to query
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
}
/// QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractInfoResponse {
    /// address is the address of the contract
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "2")]
    pub contract_info: ::core::option::Option<ContractInfo>,
}
/// QueryContractHistoryRequest is the request type for the Query/ContractHistory
/// RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractHistoryRequest {
    /// address is the address of the contract to query
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryContractHistoryResponse is the response type for the
/// Query/ContractHistory RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractHistoryResponse {
    #[prost(message, repeated, tag = "1")]
    pub entries: ::prost::alloc::vec::Vec<ContractCodeHistoryEntry>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
/// RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractsByCodeRequest {
    /// grpc-gateway_out does not support Go style CodID
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryContractsByCodeResponse is the response type for the
/// Query/ContractsByCode RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractsByCodeResponse {
    /// contracts are a set of contract addresses
    #[prost(string, repeated, tag = "1")]
    pub contracts: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// QueryAllContractStateRequest is the request type for the
/// Query/AllContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllContractStateRequest {
    /// address is the address of the contract
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryAllContractStateResponse is the response type for the
/// Query/AllContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllContractStateResponse {
    #[prost(message, repeated, tag = "1")]
    pub models: ::prost::alloc::vec::Vec<Model>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// QueryRawContractStateRequest is the request type for the
/// Query/RawContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRawContractStateRequest {
    /// address is the address of the contract
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "2")]
    pub query_data: ::prost::alloc::vec::Vec<u8>,
}
/// QueryRawContractStateResponse is the response type for the
/// Query/RawContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRawContractStateResponse {
    /// Data contains the raw store data
    #[prost(bytes = "vec", tag = "1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// QuerySmartContractStateRequest is the request type for the
/// Query/SmartContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySmartContractStateRequest {
    /// address is the address of the contract
    #[prost(string, tag = "1")]
    pub address: ::prost::alloc::string::String,
    /// QueryData contains the query data passed to the contract
    #[prost(bytes = "vec", tag = "2")]
    pub query_data: ::prost::alloc::vec::Vec<u8>,
}
/// QuerySmartContractStateResponse is the response type for the
/// Query/SmartContractState RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QuerySmartContractStateResponse {
    /// Data contains the json data returned from the smart contract
    #[prost(bytes = "vec", tag = "1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// QueryCodeRequest is the request type for the Query/Code RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodeRequest {
    /// grpc-gateway_out does not support Go style CodID
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
}
/// CodeInfoResponse contains code meta data from CodeInfo
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CodeInfoResponse {
    /// id for legacy support
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    #[prost(string, tag = "2")]
    pub creator: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "3")]
    pub data_hash: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag = "6")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
}
/// QueryCodeResponse is the response type for the Query/Code RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodeResponse {
    #[prost(message, optional, tag = "1")]
    pub code_info: ::core::option::Option<CodeInfoResponse>,
    #[prost(bytes = "vec", tag = "2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// QueryCodesRequest is the request type for the Query/Codes RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodesRequest {
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "1")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryCodesResponse is the response type for the Query/Codes RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodesResponse {
    #[prost(message, repeated, tag = "1")]
    pub code_infos: ::prost::alloc::vec::Vec<CodeInfoResponse>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
/// RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPinnedCodesRequest {
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryPinnedCodesResponse is the response type for the
/// Query/PinnedCodes RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPinnedCodesResponse {
    #[prost(uint64, repeated, packed = "false", tag = "1")]
    pub code_ids: ::prost::alloc::vec::Vec<u64>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// QueryParamsRequest is the request type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {}
/// QueryParamsResponse is the response type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    /// params defines the parameters of the module.
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
}
/// QueryContractsByCreatorRequest is the request type for the
/// Query/ContractsByCreator RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractsByCreatorRequest {
    /// CreatorAddress is the address of contract creator
    #[prost(string, tag = "1")]
    pub creator_address: ::prost::alloc::string::String,
    /// Pagination defines an optional pagination for the request.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
/// QueryContractsByCreatorResponse is the response type for the
/// Query/ContractsByCreator RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractsByCreatorResponse {
    /// ContractAddresses result set
    #[prost(string, repeated, tag = "1")]
    pub contract_addresses: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// Pagination defines the pagination in the response.
    #[prost(message, optional, tag = "2")]
    pub pagination:
        ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    /// Query provides defines the gRPC querier service
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
            T:
                tonic::codegen::Service<
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
        /// ContractInfo gets the contract meta data
        pub async fn contract_info(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryContractInfoRequest>,
        ) -> Result<tonic::Response<super::QueryContractInfoResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/ContractInfo");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// ContractHistory gets the contract code history
        pub async fn contract_history(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryContractHistoryRequest>,
        ) -> Result<tonic::Response<super::QueryContractHistoryResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/ContractHistory");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// ContractsByCode lists all smart contracts for a code id
        pub async fn contracts_by_code(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryContractsByCodeRequest>,
        ) -> Result<tonic::Response<super::QueryContractsByCodeResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/ContractsByCode");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// AllContractState gets all raw store data for a single contract
        pub async fn all_contract_state(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryAllContractStateRequest>,
        ) -> Result<tonic::Response<super::QueryAllContractStateResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/AllContractState");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// RawContractState gets single key from the raw store data of a contract
        pub async fn raw_contract_state(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryRawContractStateRequest>,
        ) -> Result<tonic::Response<super::QueryRawContractStateResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/RawContractState");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// SmartContractState get smart query result from the contract
        pub async fn smart_contract_state(
            &mut self,
            request: impl tonic::IntoRequest<super::QuerySmartContractStateRequest>,
        ) -> Result<tonic::Response<super::QuerySmartContractStateResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/SmartContractState");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Code gets the binary code and metadata for a singe wasm code
        pub async fn code(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryCodeRequest>,
        ) -> Result<tonic::Response<super::QueryCodeResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/Code");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Codes gets the metadata for all stored wasm codes
        pub async fn codes(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryCodesRequest>,
        ) -> Result<tonic::Response<super::QueryCodesResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/Codes");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// PinnedCodes gets the pinned code ids
        pub async fn pinned_codes(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryPinnedCodesRequest>,
        ) -> Result<tonic::Response<super::QueryPinnedCodesResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/PinnedCodes");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// Params gets the module params
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
            let path = http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/Params");
            self.inner.unary(request.into_request(), path, codec).await
        }
        /// ContractsByCreator gets the contracts by creator
        pub async fn contracts_by_creator(
            &mut self,
            request: impl tonic::IntoRequest<super::QueryContractsByCreatorRequest>,
        ) -> Result<tonic::Response<super::QueryContractsByCreatorResponse>, tonic::Status>
        {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/cosmwasm.wasm.v1.Query/ContractsByCreator");
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
        /// ContractInfo gets the contract meta data
        async fn contract_info(
            &self,
            request: tonic::Request<super::QueryContractInfoRequest>,
        ) -> Result<tonic::Response<super::QueryContractInfoResponse>, tonic::Status>;
        /// ContractHistory gets the contract code history
        async fn contract_history(
            &self,
            request: tonic::Request<super::QueryContractHistoryRequest>,
        ) -> Result<tonic::Response<super::QueryContractHistoryResponse>, tonic::Status>;
        /// ContractsByCode lists all smart contracts for a code id
        async fn contracts_by_code(
            &self,
            request: tonic::Request<super::QueryContractsByCodeRequest>,
        ) -> Result<tonic::Response<super::QueryContractsByCodeResponse>, tonic::Status>;
        /// AllContractState gets all raw store data for a single contract
        async fn all_contract_state(
            &self,
            request: tonic::Request<super::QueryAllContractStateRequest>,
        ) -> Result<tonic::Response<super::QueryAllContractStateResponse>, tonic::Status>;
        /// RawContractState gets single key from the raw store data of a contract
        async fn raw_contract_state(
            &self,
            request: tonic::Request<super::QueryRawContractStateRequest>,
        ) -> Result<tonic::Response<super::QueryRawContractStateResponse>, tonic::Status>;
        /// SmartContractState get smart query result from the contract
        async fn smart_contract_state(
            &self,
            request: tonic::Request<super::QuerySmartContractStateRequest>,
        ) -> Result<tonic::Response<super::QuerySmartContractStateResponse>, tonic::Status>;
        /// Code gets the binary code and metadata for a singe wasm code
        async fn code(
            &self,
            request: tonic::Request<super::QueryCodeRequest>,
        ) -> Result<tonic::Response<super::QueryCodeResponse>, tonic::Status>;
        /// Codes gets the metadata for all stored wasm codes
        async fn codes(
            &self,
            request: tonic::Request<super::QueryCodesRequest>,
        ) -> Result<tonic::Response<super::QueryCodesResponse>, tonic::Status>;
        /// PinnedCodes gets the pinned code ids
        async fn pinned_codes(
            &self,
            request: tonic::Request<super::QueryPinnedCodesRequest>,
        ) -> Result<tonic::Response<super::QueryPinnedCodesResponse>, tonic::Status>;
        /// Params gets the module params
        async fn params(
            &self,
            request: tonic::Request<super::QueryParamsRequest>,
        ) -> Result<tonic::Response<super::QueryParamsResponse>, tonic::Status>;
        /// ContractsByCreator gets the contracts by creator
        async fn contracts_by_creator(
            &self,
            request: tonic::Request<super::QueryContractsByCreatorRequest>,
        ) -> Result<tonic::Response<super::QueryContractsByCreatorResponse>, tonic::Status>;
    }
    /// Query provides defines the gRPC querier service
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
                "/cosmwasm.wasm.v1.Query/ContractInfo" => {
                    #[allow(non_camel_case_types)]
                    struct ContractInfoSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryContractInfoRequest> for ContractInfoSvc<T> {
                        type Response = super::QueryContractInfoResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryContractInfoRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).contract_info(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ContractInfoSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/ContractHistory" => {
                    #[allow(non_camel_case_types)]
                    struct ContractHistorySvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryContractHistoryRequest>
                        for ContractHistorySvc<T>
                    {
                        type Response = super::QueryContractHistoryResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryContractHistoryRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).contract_history(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ContractHistorySvc(inner);
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
                "/cosmwasm.wasm.v1.Query/ContractsByCode" => {
                    #[allow(non_camel_case_types)]
                    struct ContractsByCodeSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryContractsByCodeRequest>
                        for ContractsByCodeSvc<T>
                    {
                        type Response = super::QueryContractsByCodeResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryContractsByCodeRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).contracts_by_code(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ContractsByCodeSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/AllContractState" => {
                    #[allow(non_camel_case_types)]
                    struct AllContractStateSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryAllContractStateRequest>
                        for AllContractStateSvc<T>
                    {
                        type Response = super::QueryAllContractStateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryAllContractStateRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).all_contract_state(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AllContractStateSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/RawContractState" => {
                    #[allow(non_camel_case_types)]
                    struct RawContractStateSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryRawContractStateRequest>
                        for RawContractStateSvc<T>
                    {
                        type Response = super::QueryRawContractStateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryRawContractStateRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).raw_contract_state(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RawContractStateSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/SmartContractState" => {
                    #[allow(non_camel_case_types)]
                    struct SmartContractStateSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QuerySmartContractStateRequest>
                        for SmartContractStateSvc<T>
                    {
                        type Response = super::QuerySmartContractStateResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QuerySmartContractStateRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).smart_contract_state(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = SmartContractStateSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/Code" => {
                    #[allow(non_camel_case_types)]
                    struct CodeSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryCodeRequest> for CodeSvc<T> {
                        type Response = super::QueryCodeResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryCodeRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).code(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CodeSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/Codes" => {
                    #[allow(non_camel_case_types)]
                    struct CodesSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryCodesRequest> for CodesSvc<T> {
                        type Response = super::QueryCodesResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryCodesRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).codes(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CodesSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/PinnedCodes" => {
                    #[allow(non_camel_case_types)]
                    struct PinnedCodesSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::QueryPinnedCodesRequest> for PinnedCodesSvc<T> {
                        type Response = super::QueryPinnedCodesResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryPinnedCodesRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).pinned_codes(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = PinnedCodesSvc(inner);
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
                "/cosmwasm.wasm.v1.Query/Params" => {
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
                "/cosmwasm.wasm.v1.Query/ContractsByCreator" => {
                    #[allow(non_camel_case_types)]
                    struct ContractsByCreatorSvc<T: Query>(pub Arc<T>);
                    impl<T: Query>
                        tonic::server::UnaryService<super::QueryContractsByCreatorRequest>
                        for ContractsByCreatorSvc<T>
                    {
                        type Response = super::QueryContractsByCreatorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::QueryContractsByCreatorRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).contracts_by_creator(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ContractsByCreatorSvc(inner);
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
        const NAME: &'static str = "cosmwasm.wasm.v1.Query";
    }
}
/// ContractExecutionAuthorization defines authorization for wasm execute.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractExecutionAuthorization {
    /// Grants for contract executions
    #[prost(message, repeated, tag = "1")]
    pub grants: ::prost::alloc::vec::Vec<ContractGrant>,
}
/// ContractMigrationAuthorization defines authorization for wasm contract
/// migration. Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractMigrationAuthorization {
    /// Grants for contract migrations
    #[prost(message, repeated, tag = "1")]
    pub grants: ::prost::alloc::vec::Vec<ContractGrant>,
}
/// ContractGrant a granted permission for a single contract
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractGrant {
    /// Contract is the bech32 address of the smart contract
    #[prost(string, tag = "1")]
    pub contract: ::prost::alloc::string::String,
    /// Limit defines execution limits that are enforced and updated when the grant
    /// is applied. When the limit lapsed the grant is removed.
    #[prost(message, optional, tag = "2")]
    pub limit: ::core::option::Option<::prost_types::Any>,
    /// Filter define more fine-grained control on the message payload passed
    /// to the contract in the operation. When no filter applies on execution, the
    /// operation is prohibited.
    #[prost(message, optional, tag = "3")]
    pub filter: ::core::option::Option<::prost_types::Any>,
}
/// MaxCallsLimit limited number of calls to the contract. No funds transferable.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MaxCallsLimit {
    /// Remaining number that is decremented on each execution
    #[prost(uint64, tag = "1")]
    pub remaining: u64,
}
/// MaxFundsLimit defines the maximal amounts that can be sent to the contract.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MaxFundsLimit {
    /// Amounts is the maximal amount of tokens transferable to the contract.
    #[prost(message, repeated, tag = "1")]
    pub amounts: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// CombinedLimit defines the maximal amounts that can be sent to a contract and
/// the maximal number of calls executable. Both need to remain >0 to be valid.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CombinedLimit {
    /// Remaining number that is decremented on each execution
    #[prost(uint64, tag = "1")]
    pub calls_remaining: u64,
    /// Amounts is the maximal amount of tokens transferable to the contract.
    #[prost(message, repeated, tag = "2")]
    pub amounts: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// AllowAllMessagesFilter is a wildcard to allow any type of contract payload
/// message.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AllowAllMessagesFilter {}
/// AcceptedMessageKeysFilter accept only the specific contract message keys in
/// the json object to be executed.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AcceptedMessageKeysFilter {
    /// Messages is the list of unique keys
    #[prost(string, repeated, tag = "1")]
    pub keys: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
/// AcceptedMessagesFilter accept only the specific raw contract messages to be
/// executed.
/// Since: wasmd 0.30
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AcceptedMessagesFilter {
    /// Messages is the list of raw contract messages
    #[prost(bytes = "vec", repeated, tag = "1")]
    pub messages: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
}
/// GenesisState - genesis state of x/wasm
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, optional, tag = "1")]
    pub params: ::core::option::Option<Params>,
    #[prost(message, repeated, tag = "2")]
    pub codes: ::prost::alloc::vec::Vec<Code>,
    #[prost(message, repeated, tag = "3")]
    pub contracts: ::prost::alloc::vec::Vec<Contract>,
    #[prost(message, repeated, tag = "4")]
    pub sequences: ::prost::alloc::vec::Vec<Sequence>,
}
/// Code struct encompasses CodeInfo and CodeBytes
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Code {
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    #[prost(message, optional, tag = "2")]
    pub code_info: ::core::option::Option<CodeInfo>,
    #[prost(bytes = "vec", tag = "3")]
    pub code_bytes: ::prost::alloc::vec::Vec<u8>,
    /// Pinned to wasmvm cache
    #[prost(bool, tag = "4")]
    pub pinned: bool,
}
/// Contract struct encompasses ContractAddress, ContractInfo, and ContractState
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Contract {
    #[prost(string, tag = "1")]
    pub contract_address: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "2")]
    pub contract_info: ::core::option::Option<ContractInfo>,
    #[prost(message, repeated, tag = "3")]
    pub contract_state: ::prost::alloc::vec::Vec<Model>,
    #[prost(message, repeated, tag = "4")]
    pub contract_code_history: ::prost::alloc::vec::Vec<ContractCodeHistoryEntry>,
}
/// Sequence key and value of an id generation counter
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Sequence {
    #[prost(bytes = "vec", tag = "1")]
    pub id_key: ::prost::alloc::vec::Vec<u8>,
    #[prost(uint64, tag = "2")]
    pub value: u64,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit StoreCodeProposal. To submit WASM code to the system,
/// a simple MsgStoreCode can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StoreCodeProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// RunAs is the address that is passed to the contract's environment as sender
    #[prost(string, tag = "3")]
    pub run_as: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes = "vec", tag = "4")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
    /// InstantiatePermission to apply on contract creation, optional
    #[prost(message, optional, tag = "7")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
    /// UnpinCode code on upload, optional
    #[prost(bool, tag = "8")]
    pub unpin_code: bool,
    /// Source is the URL where the code is hosted
    #[prost(string, tag = "9")]
    pub source: ::prost::alloc::string::String,
    /// Builder is the docker image used to build the code deterministically, used
    /// for smart contract verification
    #[prost(string, tag = "10")]
    pub builder: ::prost::alloc::string::String,
    /// CodeHash is the SHA256 sum of the code outputted by builder, used for smart
    /// contract verification
    #[prost(bytes = "vec", tag = "11")]
    pub code_hash: ::prost::alloc::vec::Vec<u8>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit InstantiateContractProposal. To instantiate a contract,
/// a simple MsgInstantiateContract can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InstantiateContractProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// RunAs is the address that is passed to the contract's environment as sender
    #[prost(string, tag = "3")]
    pub run_as: ::prost::alloc::string::String,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "4")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "5")]
    pub code_id: u64,
    /// Label is optional metadata to be stored with a constract instance.
    #[prost(string, tag = "6")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "7")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "8")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit InstantiateContract2Proposal. To instantiate contract 2,
/// a simple MsgInstantiateContract2 can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InstantiateContract2Proposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// RunAs is the address that is passed to the contract's enviroment as sender
    #[prost(string, tag = "3")]
    pub run_as: ::prost::alloc::string::String,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "4")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag = "5")]
    pub code_id: u64,
    /// Label is optional metadata to be stored with a constract instance.
    #[prost(string, tag = "6")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encode message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "7")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "8")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    /// Salt is an arbitrary value provided by the sender. Size can be 1 to 64.
    #[prost(bytes = "vec", tag = "9")]
    pub salt: ::prost::alloc::vec::Vec<u8>,
    /// FixMsg include the msg value into the hash for the predictable address.
    /// Default is false
    #[prost(bool, tag = "10")]
    pub fix_msg: bool,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit MigrateContractProposal. To migrate a contract,
/// a simple MsgMigrateContract can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MigrateContractProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    ///
    /// Note: skipping 3 as this was previously used for unneeded run_as
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "4")]
    pub contract: ::prost::alloc::string::String,
    /// CodeID references the new WASM code
    #[prost(uint64, tag = "5")]
    pub code_id: u64,
    /// Msg json encoded message to be passed to the contract on migration
    #[prost(bytes = "vec", tag = "6")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit SudoContractProposal. To call sudo on a contract,
/// a simple MsgSudoContract can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SudoContractProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "3")]
    pub contract: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract as sudo
    #[prost(bytes = "vec", tag = "4")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit ExecuteContractProposal. To call execute on a contract,
/// a simple MsgExecuteContract can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExecuteContractProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// RunAs is the address that is passed to the contract's environment as sender
    #[prost(string, tag = "3")]
    pub run_as: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "4")]
    pub contract: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract as execute
    #[prost(bytes = "vec", tag = "5")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "6")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit UpdateAdminProposal. To set an admin for a contract,
/// a simple MsgUpdateAdmin can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateAdminProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// NewAdmin address to be set
    #[prost(string, tag = "3")]
    pub new_admin: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "4")]
    pub contract: ::prost::alloc::string::String,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit ClearAdminProposal. To clear the admin of a contract,
/// a simple MsgClearAdmin can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ClearAdminProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag = "3")]
    pub contract: ::prost::alloc::string::String,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
/// cache, a simple MsgPinCodes can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PinCodesProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// CodeIDs references the new WASM codes
    #[prost(uint64, repeated, packed = "false", tag = "3")]
    pub code_ids: ::prost::alloc::vec::Vec<u64>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
/// cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
/// a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UnpinCodesProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// CodeIDs references the WASM codes
    #[prost(uint64, repeated, packed = "false", tag = "3")]
    pub code_ids: ::prost::alloc::vec::Vec<u64>,
}
/// AccessConfigUpdate contains the code id and the access config to be
/// applied.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AccessConfigUpdate {
    /// CodeID is the reference to the stored WASM code to be updated
    #[prost(uint64, tag = "1")]
    pub code_id: u64,
    /// InstantiatePermission to apply to the set of code ids
    #[prost(message, optional, tag = "2")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit UpdateInstantiateConfigProposal. To update instantiate config
/// to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
/// the x/gov module via a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateInstantiateConfigProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// AccessConfigUpdate contains the list of code ids and the access config
    /// to be applied.
    #[prost(message, repeated, tag = "3")]
    pub access_config_updates: ::prost::alloc::vec::Vec<AccessConfigUpdate>,
}
/// Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
/// an explicit StoreAndInstantiateContractProposal. To store and instantiate
/// the contract, a simple MsgStoreAndInstantiateContract can be invoked from
/// the x/gov module via a v1 governance proposal.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StoreAndInstantiateContractProposal {
    /// Title is a short summary
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    /// Description is a human readable text
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    /// RunAs is the address that is passed to the contract's environment as sender
    #[prost(string, tag = "3")]
    pub run_as: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes = "vec", tag = "4")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
    /// InstantiatePermission to apply on contract creation, optional
    #[prost(message, optional, tag = "5")]
    pub instantiate_permission: ::core::option::Option<AccessConfig>,
    /// UnpinCode code on upload, optional
    #[prost(bool, tag = "6")]
    pub unpin_code: bool,
    /// Admin is an optional address that can execute migrations
    #[prost(string, tag = "7")]
    pub admin: ::prost::alloc::string::String,
    /// Label is optional metadata to be stored with a constract instance.
    #[prost(string, tag = "8")]
    pub label: ::prost::alloc::string::String,
    /// Msg json encoded message to be passed to the contract on instantiation
    #[prost(bytes = "vec", tag = "9")]
    pub msg: ::prost::alloc::vec::Vec<u8>,
    /// Funds coins that are transferred to the contract on instantiation
    #[prost(message, repeated, tag = "10")]
    pub funds: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    /// Source is the URL where the code is hosted
    #[prost(string, tag = "11")]
    pub source: ::prost::alloc::string::String,
    /// Builder is the docker image used to build the code deterministically, used
    /// for smart contract verification
    #[prost(string, tag = "12")]
    pub builder: ::prost::alloc::string::String,
    /// CodeHash is the SHA256 sum of the code outputted by builder, used for smart
    /// contract verification
    #[prost(bytes = "vec", tag = "13")]
    pub code_hash: ::prost::alloc::vec::Vec<u8>,
}
/// MsgIBCSend
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgIbcSend {
    /// the channel by which the packet will be sent
    #[prost(string, tag = "2")]
    pub channel: ::prost::alloc::string::String,
    /// Timeout height relative to the current block height.
    /// The timeout is disabled when set to 0.
    #[prost(uint64, tag = "4")]
    pub timeout_height: u64,
    /// Timeout timestamp (in nanoseconds) relative to the current block timestamp.
    /// The timeout is disabled when set to 0.
    #[prost(uint64, tag = "5")]
    pub timeout_timestamp: u64,
    /// Data is the payload to transfer. We must not make assumption what format or
    /// content is in here.
    #[prost(bytes = "vec", tag = "6")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgIBCSendResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgIbcSendResponse {
    /// Sequence number of the IBC packet sent
    #[prost(uint64, tag = "1")]
    pub sequence: u64,
}
/// MsgIBCCloseChannel port and channel need to be owned by the contract
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgIbcCloseChannel {
    #[prost(string, tag = "2")]
    pub channel: ::prost::alloc::string::String,
}
