/// MsgStoreCode represents a message to submit
/// Wasm code to the system
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreCode {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes="vec", tag="2")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
}
/// MsgStoreCodeResponse defines the Msg/StoreCode response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgStoreCodeResponse {
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag="1")]
    pub code_id: u64,
}
/// MsgMigrateCode represents a message to submit
/// Wasm code to the system
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateCode {
    /// CodeID is the migration target code id
    #[prost(uint64, tag="1")]
    pub code_id: u64,
    /// Sender is the that actor that signed the messages
    #[prost(string, tag="2")]
    pub sender: ::prost::alloc::string::String,
    /// WASMByteCode can be raw or gzip compressed
    #[prost(bytes="vec", tag="3")]
    pub wasm_byte_code: ::prost::alloc::vec::Vec<u8>,
}
/// MsgMigrateCodeResponse defines the Msg/MigrateCode response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateCodeResponse {
}
/// MsgInstantiateContract represents a message to create
/// a new smart contract instance for the given
/// code id.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContract {
    /// Sender is an sender address
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    /// Admin is an optional admin address who can migrate the contract
    #[prost(string, tag="2")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored WASM code
    #[prost(uint64, tag="3")]
    pub code_id: u64,
    /// InitMsg json encoded message to be passed to the contract on instantiation
    #[prost(bytes="vec", tag="4")]
    pub init_msg: ::prost::alloc::vec::Vec<u8>,
    /// InitCoins that are transferred to the contract on execution
    #[prost(message, repeated, tag="5")]
    pub init_coins: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// MsgInstantiateContractResponse defines the Msg/InstantiateContract response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgInstantiateContractResponse {
    /// ContractAddress is the bech32 address of the new contract instance.
    #[prost(string, tag="1")]
    pub contract_address: ::prost::alloc::string::String,
    /// Data contains base64-encoded bytes to returned from the contract
    #[prost(bytes="vec", tag="2")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgExecuteContract represents a message to
/// submits the given message data to a smart contract.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgExecuteContract {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag="2")]
    pub contract: ::prost::alloc::string::String,
    /// ExecuteMsg json encoded message to be passed to the contract
    #[prost(bytes="vec", tag="3")]
    pub execute_msg: ::prost::alloc::vec::Vec<u8>,
    /// Coins that are transferred to the contract on execution
    #[prost(message, repeated, tag="5")]
    pub coins: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
/// MsgExecuteContractResponse defines the Msg/ExecuteContract response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgExecuteContractResponse {
    /// Data contains base64-encoded bytes to returned from the contract
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgMigrateContract represents a message to
/// runs a code upgrade/ downgrade for a smart contract
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateContract {
    /// Admin is the current contract admin
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag="2")]
    pub contract: ::prost::alloc::string::String,
    /// NewCodeID references the new WASM code
    #[prost(uint64, tag="3")]
    pub new_code_id: u64,
    /// MigrateMsg is json encoded message to be passed to the contract on migration
    #[prost(bytes="vec", tag="4")]
    pub migrate_msg: ::prost::alloc::vec::Vec<u8>,
}
/// MsgMigrateContractResponse defines the Msg/MigrateContract response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgMigrateContractResponse {
    /// Data contains base64-encoded bytes to returned from the contract
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
/// MsgUpdateContractAdmin represents a message to
/// sets a new admin for a smart contract
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateContractAdmin {
    /// Admin is the current contract admin
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// NewAdmin is the new contract admin
    #[prost(string, tag="2")]
    pub new_admin: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag="3")]
    pub contract: ::prost::alloc::string::String,
}
/// MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateContractAdminResponse {
}
/// MsgClearContractAdmin represents a message to
/// clear admin address from a smart contract
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearContractAdmin {
    /// Admin is the current contract admin
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// Contract is the address of the smart contract
    #[prost(string, tag="2")]
    pub contract: ::prost::alloc::string::String,
}
/// MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgClearContractAdminResponse {
}
/// Params defines the parameters for the wasm module.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    #[prost(uint64, tag="1")]
    pub max_contract_size: u64,
    #[prost(uint64, tag="2")]
    pub max_contract_gas: u64,
    #[prost(uint64, tag="3")]
    pub max_contract_msg_size: u64,
}
/// CodeInfo is data for the uploaded contract WASM code
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CodeInfo {
    /// CodeID is the sequentially increasing unique identifier
    #[prost(uint64, tag="1")]
    pub code_id: u64,
    /// CodeHash is the unique identifier created by wasmvm
    #[prost(bytes="vec", tag="2")]
    pub code_hash: ::prost::alloc::vec::Vec<u8>,
    /// Creator address who initially stored the code
    #[prost(string, tag="3")]
    pub creator: ::prost::alloc::string::String,
}
/// ContractInfo stores a WASM contract instance
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ContractInfo {
    /// Address is the address of the contract
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    /// Creator is the contract creator address
    #[prost(string, tag="2")]
    pub creator: ::prost::alloc::string::String,
    /// Admin is who can execute the contract migration
    #[prost(string, tag="3")]
    pub admin: ::prost::alloc::string::String,
    /// CodeID is the reference to the stored Wasm code
    #[prost(uint64, tag="4")]
    pub code_id: u64,
    /// InitMsg is the raw message used when instantiating a contract
    #[prost(bytes="vec", tag="5")]
    pub init_msg: ::prost::alloc::vec::Vec<u8>,
}
/// QueryCodeInfoRequest is the request type for the QueryyCodeInfo RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodeInfoRequest {
    /// grpc-gateway_out does not support Go style CodID
    #[prost(uint64, tag="1")]
    pub code_id: u64,
}
/// QueryCodeInfoResponse is response type for the
/// QueryyCodeInfo RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCodeInfoResponse {
    #[prost(message, optional, tag="1")]
    pub code_info: ::core::option::Option<CodeInfo>,
}
/// QueryByteCodeRequest is the request type for the QueryyByteCode RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryByteCodeRequest {
    /// grpc-gateway_out does not support Go style CodID
    #[prost(uint64, tag="1")]
    pub code_id: u64,
}
/// QueryByteCodeResponse is response type for the
/// QueryyByteCode RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryByteCodeResponse {
    #[prost(bytes="vec", tag="1")]
    pub byte_code: ::prost::alloc::vec::Vec<u8>,
}
/// QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractInfoRequest {
    #[prost(string, tag="1")]
    pub contract_address: ::prost::alloc::string::String,
}
/// QueryContractInfoResponse is response type for the
/// Query/ContractInfo RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractInfoResponse {
    #[prost(message, optional, tag="1")]
    pub contract_info: ::core::option::Option<ContractInfo>,
}
/// QueryContractStoreRequest is the request type for the Query/ContractStore RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractStoreRequest {
    #[prost(string, tag="1")]
    pub contract_address: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="2")]
    pub query_msg: ::prost::alloc::vec::Vec<u8>,
}
/// QueryContractStoreResponse is response type for the
/// Query/ContractStore RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryContractStoreResponse {
    #[prost(bytes="vec", tag="1")]
    pub query_result: ::prost::alloc::vec::Vec<u8>,
}
/// QueryRawStoreRequest is the request type for the Query/RawStore RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRawStoreRequest {
    #[prost(string, tag="1")]
    pub contract_address: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="2")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
/// QueryRawStoreResponse is response type for the
/// Query/RawStore RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRawStoreResponse {
    /// Data contains the raw store data
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
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
    #[prost(uint64, tag="2")]
    pub last_code_id: u64,
    #[prost(uint64, tag="3")]
    pub last_instance_id: u64,
    #[prost(message, repeated, tag="4")]
    pub codes: ::prost::alloc::vec::Vec<Code>,
    #[prost(message, repeated, tag="5")]
    pub contracts: ::prost::alloc::vec::Vec<Contract>,
}
/// Model is a struct that holds a KV pair
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Model {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes="vec", tag="2")]
    pub value: ::prost::alloc::vec::Vec<u8>,
}
/// Code struct encompasses CodeInfo and CodeBytes
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Code {
    #[prost(message, optional, tag="1")]
    pub code_info: ::core::option::Option<CodeInfo>,
    #[prost(bytes="vec", tag="2")]
    pub code_bytes: ::prost::alloc::vec::Vec<u8>,
}
/// Contract struct encompasses ContractAddress, ContractInfo, and ContractState
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Contract {
    #[prost(message, optional, tag="1")]
    pub contract_info: ::core::option::Option<ContractInfo>,
    #[prost(message, repeated, tag="2")]
    pub contract_store: ::prost::alloc::vec::Vec<Model>,
}
