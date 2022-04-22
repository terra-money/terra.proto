/// BaseVestingAccount implements the VestingAccount interface. It contains all
/// the necessary fields needed for any vesting account implementation.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BaseVestingAccount {
    #[prost(message, optional, tag="1")]
    pub base_account: ::core::option::Option<super::super::auth::v1beta1::BaseAccount>,
    #[prost(message, repeated, tag="2")]
    pub original_vesting: ::prost::alloc::vec::Vec<super::super::base::v1beta1::Coin>,
    #[prost(message, repeated, tag="3")]
    pub delegated_free: ::prost::alloc::vec::Vec<super::super::base::v1beta1::Coin>,
    #[prost(message, repeated, tag="4")]
    pub delegated_vesting: ::prost::alloc::vec::Vec<super::super::base::v1beta1::Coin>,
    #[prost(int64, tag="5")]
    pub end_time: i64,
}
