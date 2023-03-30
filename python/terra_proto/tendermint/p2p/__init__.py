# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: tendermint/p2p/types.proto
# plugin: python-betterproto
from dataclasses import dataclass

import betterproto


@dataclass(eq=False, repr=False)
class NetAddress(betterproto.Message):
    id: str = betterproto.string_field(1)
    ip: str = betterproto.string_field(2)
    port: int = betterproto.uint32_field(3)


@dataclass(eq=False, repr=False)
class ProtocolVersion(betterproto.Message):
    p2_p: int = betterproto.uint64_field(1)
    block: int = betterproto.uint64_field(2)
    app: int = betterproto.uint64_field(3)


@dataclass(eq=False, repr=False)
class DefaultNodeInfo(betterproto.Message):
    protocol_version: "ProtocolVersion" = betterproto.message_field(1)
    default_node_id: str = betterproto.string_field(2)
    listen_addr: str = betterproto.string_field(3)
    network: str = betterproto.string_field(4)
    version: str = betterproto.string_field(5)
    channels: bytes = betterproto.bytes_field(6)
    moniker: str = betterproto.string_field(7)
    other: "DefaultNodeInfoOther" = betterproto.message_field(8)


@dataclass(eq=False, repr=False)
class DefaultNodeInfoOther(betterproto.Message):
    tx_index: str = betterproto.string_field(1)
    rpc_address: str = betterproto.string_field(2)
