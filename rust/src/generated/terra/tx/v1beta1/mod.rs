/// ComputeTaxRequest is the request type for the Service.ComputeTax
/// RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ComputeTaxRequest {
    /// tx is the transaction to simulate.
    /// Deprecated. Send raw tx bytes instead.
    #[deprecated]
    #[prost(message, optional, tag="1")]
    pub tx: ::core::option::Option<super::super::super::cosmos::tx::v1beta1::Tx>,
    /// tx_bytes is the raw transaction.
    #[prost(bytes="vec", tag="2")]
    pub tx_bytes: ::prost::alloc::vec::Vec<u8>,
}
/// ComputeTaxResponse is the response type for the Service.ComputeTax
/// RPC method.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ComputeTaxResponse {
    /// amount is the amount of coins to be paid as a fee
    #[prost(message, repeated, tag="1")]
    pub tax_amount: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
