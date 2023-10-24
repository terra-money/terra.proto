#![doc = include_str!("README.md")]
#![cfg_attr(docsrs, feature(doc_cfg))]
#![allow(
    rustdoc::bare_urls,
    rustdoc::broken_intra_doc_links,
    clippy::derive_partial_eq_without_eq
)]
#![forbid(unsafe_code)]
#![warn(trivial_casts, trivial_numeric_casts, unused_import_braces)]

pub mod traits;
mod type_urls;


pub use prost;

/// Alliance protobuf definitions.
pub mod alliance {
    /// Alliance clients and models
    pub mod alliance {
        include!("models/alliance.alliance.rs");
    }
}

/// Cosmos protobuf definitions.
pub mod cosmos {
    /// Authentication of accounts and transactions.
    pub mod auth {
        pub mod v1beta1 {
            include!("models/cosmos.auth.v1beta1.rs");
        }
    }

    /// Granting of arbitrary privileges from one account to another.
    pub mod authz {
        pub mod v1beta1 {
            include!("models/cosmos.authz.v1beta1.rs");
        }
    }

    /// Balances.
    pub mod bank {
        pub mod v1beta1 {
            include!("models/cosmos.bank.v1beta1.rs");
        }
    }

    /// Consensus.
    pub mod consensus {
        pub mod v1 {
            include!("models/cosmos.consensus.v1.rs");
        }
    }

    /// Base functionality.
    pub mod base {
        /// Application BlockChain Interface (ABCI).
        ///
        /// Interface that defines the boundary between the replication engine
        /// (the blockchain), and the state machine (the application).
        pub mod abci {
            pub mod v1beta1 {
                include!("models/cosmos.base.abci.v1beta1.rs");
            }
        }

        /// Key-value pairs.
        pub mod kv {
            pub mod v1beta1 {
                include!("models/cosmos.base.kv.v1beta1.rs");
            }
        }

        /// Query support.
        pub mod query {
            pub mod v1beta1 {
                include!("models/cosmos.base.query.v1beta1.rs");
            }
        }

        /// Reflection support.
        pub mod reflection {
            pub mod v1beta1 {
                include!("models/cosmos.base.reflection.v1beta1.rs");
            }

            pub mod v2alpha1 {
                include!("models/cosmos.base.reflection.v2alpha1.rs");
            }
        }

        /// Snapshots containing Tendermint state sync info.
        pub mod snapshots {
            pub mod v1beta1 {
                include!("models/cosmos.base.snapshots.v1beta1.rs");
            }
        }

        /// Data structure that holds the state of the application.
        pub mod store {
            pub mod v1beta1 {
                include!("models/cosmos.base.store.v1beta1.rs");
            }
        }

        pub mod v1beta1 {
            include!("models/cosmos.base.v1beta1.rs");
        }

        pub mod tendermint {
            pub mod v1beta1 {
                include!("models/cosmos.base.tendermint.v1beta1.rs");
            }
        }
    }

    /// Crisis handling
    pub mod crisis {
        pub mod v1beta1 {
            include!("models/cosmos.crisis.v1beta1.rs");
        }
    }

    /// Cryptographic primitives.
    pub mod crypto {
        /// Multi-signature support.
        pub mod multisig {
            include!("models/cosmos.crypto.multisig.rs");
            pub mod v1beta1 {
                include!("models/cosmos.crypto.multisig.v1beta1.rs");
            }
        }
        pub mod ed25519 {
            include!("models/cosmos.crypto.ed25519.rs");
        }
        pub mod secp256k1 {
            include!("models/cosmos.crypto.secp256k1.rs");
        }
        pub mod secp256r1 {
            include!("models/cosmos.crypto.secp256r1.rs");
        }
    }

    /// Messages and services handling token distribution
    pub mod distribution {
        pub mod v1beta1 {
            include!("models/cosmos.distribution.v1beta1.rs");
        }
    }

    /// Messages and services handling evidence
    pub mod evidence {
        pub mod v1beta1 {
            include!("models/cosmos.evidence.v1beta1.rs");
        }
    }

    /// Allows accounts to grant fee allowances and to use fees from their accounts.
    pub mod feegrant {
        pub mod v1beta1 {
            include!("models/cosmos.feegrant.v1beta1.rs");
        }
    }

    /// Messages and services handling gentx's
    pub mod genutil {
        pub mod v1beta1 {
            include!("models/cosmos.genutil.v1beta1.rs");
        }
    }

    /// Messages and services handling governance
    pub mod gov {
        pub mod v1 {
            include!("models/cosmos.gov.v1.rs");
        }
    }

    /// Messages and services handling minting
    pub mod mint {
        pub mod v1beta1 {
            include!("models/cosmos.mint.v1beta1.rs");
        }
    }

    /// Messages and services handling chain parameters
    pub mod params {
        pub mod v1beta1 {
            include!("models/cosmos.params.v1beta1.rs");
        }
    }

    /// Handling slashing parameters and unjailing
    pub mod slashing {
        pub mod v1beta1 {
            include!("models/cosmos.slashing.v1beta1.rs");
        }
    }

    /// Proof-of-Stake layer for public blockchains.
    pub mod staking {
        pub mod v1beta1 {
            include!("models/cosmos.staking.v1beta1.rs");
        }
    }

    /// Transactions.
    pub mod tx {
        /// Transaction signing support.
        pub mod signing {
            pub mod v1beta1 {
                include!("models/cosmos.tx.signing.v1beta1.rs");
            }
        }

        pub mod v1beta1 {
            include!("models/cosmos.tx.v1beta1.rs");
        }
    }

    /// Services for the upgrade module.
    pub mod upgrade {
        pub mod v1beta1 {
            include!("models/cosmos.upgrade.v1beta1.rs");
        }
    }

    /// Services and tx's for the vesting module.
    pub mod vesting {
        pub mod v1beta1 {
            include!("models/cosmos.vesting.v1beta1.rs");
        }
    }
    /// ICS23 protobuf definitions.
    pub mod ics23 {
        pub mod v1 {
            include!("models/cosmos.ics23.v1.rs");
        }
    }
}

/// CosmWasm protobuf definitions.
pub mod cosmwasm {
    /// Messages and services handling CosmWasm.
    pub mod wasm {
        pub mod v1 {
            include!("models/cosmwasm.wasm.v1.rs");
        }
    }
}

/// TokenFactory definitions.
pub mod osmosis {
    pub mod tokenfactory {
        pub mod v1beta1 {
            include!("models/osmosis.tokenfactory.v1beta1.rs");
        }
    }
}

/// IBC protobuf definitions.
pub mod ibc {
    /// IBC applications.
    pub mod applications {

        pub mod icq {
            pub mod v1 {
                include!("models/icq.v1.rs");
            }
        }

        /// Interchain accounts support.
        pub mod interchain_accounts {
            pub mod controller {
                pub mod v1 {
                    include!("models/ibc.applications.interchain_accounts.controller.v1.rs");
                }
            }

            pub mod host {
                pub mod v1 {
                    include!("models/ibc.applications.interchain_accounts.host.v1.rs");
                }
            }

            pub mod v1 {
                include!("models/ibc.applications.interchain_accounts.v1.rs");
            }
        }

        pub mod fee {
            pub mod v1 {
                include!("models/ibc.applications.fee.v1.rs");
            }
        }

        /// Transfer support.
        pub mod transfer {
            pub mod v1 {
                include!("models/ibc.applications.transfer.v1.rs");
            }

            pub mod v2 {
                include!("models/ibc.applications.transfer.v2.rs");
            }
        }
    }

    /// IBC core.
    pub mod core {
        /// IBC channels.
        pub mod channel {
            pub mod v1 {
                include!("models/ibc.core.channel.v1.rs");
            }
        }

        /// IBC client.
        pub mod client {
            pub mod v1 {
                include!("models/ibc.core.client.v1.rs");
            }
        }

        /// IBC commitments.
        pub mod commitment {
            pub mod v1 {
                include!("models/ibc.core.commitment.v1.rs");
            }
        }

        /// IBC connections.
        pub mod connection {
            pub mod v1 {
                include!("models/ibc.core.connection.v1.rs");
            }
        }

        /// IBC types.
        pub mod types {
            pub mod v1 {
                include!("models/ibc.core.types.v1.rs");
            }
        }
    }

    /// IBC light clients.
    pub mod lightclients {
        pub mod solomachine {
            pub mod v2 {
                include!("models/ibc.lightclients.solomachine.v2.rs");
            }
        }
        pub mod tendermint {
            pub mod v1 {
                include!("models/ibc.lightclients.tendermint.v1.rs");
            }
        }
    }
}


pub mod pob {
    pub mod builder {
        pub mod v1 {
            include!("models/pob.builder.v1.rs");
        }
    }
}


pub mod juno {
    pub mod feeshare {
        pub mod v1 {
            include!("models/juno.feeshare.v1.rs");
        }
    }
}