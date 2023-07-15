# Rust Terra Proto

Clients used to interact with Terra Blockchain from Rust. It can be used directly in [CosmWasm smart contracts](https://github.com/emidev98/cw-alliance) or from an external blockchain API.

## Usage in CosmWasm

Add terra-proto-rs into the Cargo.toml from your smart contract with default-features to false that way you avoid importing libraries that will make your smart contract fail:
```Cargo.toml
terra-proto-rs = {version = "3.0.3", default-features = false}
```