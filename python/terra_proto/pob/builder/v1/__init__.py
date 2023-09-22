# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: pob/builder/v1/genesis.proto, pob/builder/v1/query.proto, pob/builder/v1/tx.proto
# plugin: python-betterproto
# This file has been @generated

from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    Dict,
    List,
    Optional,
)

import betterproto
import grpclib
from betterproto.grpc.grpclib_server import ServiceBase

from ....cosmos.base import v1beta1 as ___cosmos_base_v1_beta1__


if TYPE_CHECKING:
    import grpclib.server
    from betterproto.grpc.grpclib_client import MetadataLike
    from grpclib.metadata import Deadline


@dataclass(eq=False, repr=False)
class GenesisState(betterproto.Message):
    """GenesisState defines the genesis state of the x/builder module."""

    params: "Params" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class Params(betterproto.Message):
    """Params defines the parameters of the x/builder module."""

    max_bundle_size: int = betterproto.uint32_field(1)
    """
    max_bundle_size is the maximum number of transactions that can be bundled
    in a single bundle.
    """

    escrow_account_address: bytes = betterproto.bytes_field(2)
    """
    escrow_account_address is the address of the account that will receive a
    portion of the bid proceeds.
    """

    reserve_fee: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(3)
    """reserve_fee specifies the bid floor for the auction."""

    min_bid_increment: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(4)
    """
    min_bid_increment specifies the minimum amount that the next bid must be
    greater than the previous bid.
    """

    front_running_protection: bool = betterproto.bool_field(5)
    """
    front_running_protection specifies whether front running and sandwich
    attack protection is enabled.
    """

    proposer_fee: str = betterproto.string_field(6)
    """
    proposer_fee defines the portion of the winning bid that goes to the block
    proposer that proposed the block.
    """


@dataclass(eq=False, repr=False)
class MsgAuctionBid(betterproto.Message):
    """
    MsgAuctionBid defines a request type for sending bids to the x/builder
    module.
    """

    bidder: str = betterproto.string_field(1)
    """
    bidder is the address of the account that is submitting a bid to the
    auction.
    """

    bid: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(2)
    """
    bid is the amount of coins that the bidder is bidding to participate in the
    auction.
    """

    transactions: List[bytes] = betterproto.bytes_field(3)
    """
    transactions are the bytes of the transactions that the bidder wants to
    bundle together.
    """


@dataclass(eq=False, repr=False)
class MsgAuctionBidResponse(betterproto.Message):
    """MsgAuctionBidResponse defines the Msg/AuctionBid response type."""

    pass


@dataclass(eq=False, repr=False)
class MsgUpdateParams(betterproto.Message):
    """
    MsgUpdateParams defines a request type for updating the x/builder module
    parameters.
    """

    authority: str = betterproto.string_field(1)
    """
    authority is the address of the account that is authorized to update the
    x/builder module parameters.
    """

    params: "Params" = betterproto.message_field(2)
    """params is the new parameters for the x/builder module."""


@dataclass(eq=False, repr=False)
class MsgUpdateParamsResponse(betterproto.Message):
    """MsgUpdateParamsResponse defines the Msg/UpdateParams response type."""

    pass


@dataclass(eq=False, repr=False)
class QueryParamsRequest(betterproto.Message):
    """
    QueryParamsRequest is the request type for the Query/Params RPC method.
    """

    pass


@dataclass(eq=False, repr=False)
class QueryParamsResponse(betterproto.Message):
    """
    QueryParamsResponse is the response type for the Query/Params RPC method.
    """

    params: "Params" = betterproto.message_field(1)
    """params defines the parameters of the module."""


class MsgStub(betterproto.ServiceStub):
    async def auction_bid(
        self,
        msg_auction_bid: "MsgAuctionBid",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgAuctionBidResponse":
        return await self._unary_unary(
            "/pob.builder.v1.Msg/AuctionBid",
            msg_auction_bid,
            MsgAuctionBidResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def update_params(
        self,
        msg_update_params: "MsgUpdateParams",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgUpdateParamsResponse":
        return await self._unary_unary(
            "/pob.builder.v1.Msg/UpdateParams",
            msg_update_params,
            MsgUpdateParamsResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class QueryStub(betterproto.ServiceStub):
    async def params(
        self,
        query_params_request: "QueryParamsRequest",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "QueryParamsResponse":
        return await self._unary_unary(
            "/pob.builder.v1.Query/Params",
            query_params_request,
            QueryParamsResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class MsgBase(ServiceBase):
    async def auction_bid(
        self, msg_auction_bid: "MsgAuctionBid"
    ) -> "MsgAuctionBidResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def update_params(
        self, msg_update_params: "MsgUpdateParams"
    ) -> "MsgUpdateParamsResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_auction_bid(
        self, stream: "grpclib.server.Stream[MsgAuctionBid, MsgAuctionBidResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.auction_bid(request)
        await stream.send_message(response)

    async def __rpc_update_params(
        self, stream: "grpclib.server.Stream[MsgUpdateParams, MsgUpdateParamsResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.update_params(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/pob.builder.v1.Msg/AuctionBid": grpclib.const.Handler(
                self.__rpc_auction_bid,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgAuctionBid,
                MsgAuctionBidResponse,
            ),
            "/pob.builder.v1.Msg/UpdateParams": grpclib.const.Handler(
                self.__rpc_update_params,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgUpdateParams,
                MsgUpdateParamsResponse,
            ),
        }


class QueryBase(ServiceBase):
    async def params(
        self, query_params_request: "QueryParamsRequest"
    ) -> "QueryParamsResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_params(
        self, stream: "grpclib.server.Stream[QueryParamsRequest, QueryParamsResponse]"
    ) -> None:
        request = await stream.recv_message()
        response = await self.params(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/pob.builder.v1.Query/Params": grpclib.const.Handler(
                self.__rpc_params,
                grpclib.const.Cardinality.UNARY_UNARY,
                QueryParamsRequest,
                QueryParamsResponse,
            ),
        }