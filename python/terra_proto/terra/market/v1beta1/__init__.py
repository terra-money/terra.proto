# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: terra/market/v1beta1/genesis.proto, terra/market/v1beta1/market.proto, terra/market/v1beta1/query.proto, terra/market/v1beta1/tx.proto
# plugin: python-betterproto
from dataclasses import dataclass
from typing import Dict

import betterproto
from betterproto.grpc.grpclib_server import ServiceBase
import grpclib


@dataclass(eq=False, repr=False)
class MsgSwap(betterproto.Message):
    """MsgSwap represents a message to swap coin to another denom."""

    trader: str = betterproto.string_field(1)
    offer_coin: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(2)
    ask_denom: str = betterproto.string_field(3)


@dataclass(eq=False, repr=False)
class MsgSwapResponse(betterproto.Message):
    """MsgSwapResponse defines the Msg/Swap response type."""

    swap_coin: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(1)
    swap_fee: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class MsgSwapSend(betterproto.Message):
    """
    MsgSwapSend represents a message to swap coin and send all result coin to
    recipient
    """

    from_address: str = betterproto.string_field(1)
    to_address: str = betterproto.string_field(2)
    offer_coin: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(3)
    ask_denom: str = betterproto.string_field(4)


@dataclass(eq=False, repr=False)
class MsgSwapSendResponse(betterproto.Message):
    """MsgSwapSendResponse defines the Msg/SwapSend response type."""

    swap_coin: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(1)
    swap_fee: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class Params(betterproto.Message):
    """Params defines the parameters for the market module."""

    base_pool: bytes = betterproto.bytes_field(1)
    pool_recovery_period: int = betterproto.uint64_field(2)
    min_stability_spread: bytes = betterproto.bytes_field(3)


@dataclass(eq=False, repr=False)
class QuerySwapRequest(betterproto.Message):
    """QuerySwapRequest is the request type for the Query/Swap RPC method."""

    # offer_coin defines the coin being offered (i.e. 1000000uluna)
    offer_coin: str = betterproto.string_field(1)
    # ask_denom defines the denom of the coin to swap to
    ask_denom: str = betterproto.string_field(2)


@dataclass(eq=False, repr=False)
class QuerySwapResponse(betterproto.Message):
    """
    QuerySwapResponse is the response type for the Query/Swap RPC method.
    """

    # return_coin defines the coin returned as a result of the swap simulation.
    return_coin: "___cosmos_base_v1_beta1__.Coin" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class QueryTerraPoolDeltaRequest(betterproto.Message):
    """
    QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta
    RPC method.
    """

    pass


@dataclass(eq=False, repr=False)
class QueryTerraPoolDeltaResponse(betterproto.Message):
    """
    QueryTerraPoolDeltaResponse is the response type for the
    Query/TerraPoolDelta RPC method.
    """

    # terra_pool_delta defines the gap between the TerraPool and the
    # TerraBasePool
    terra_pool_delta: bytes = betterproto.bytes_field(1)


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

    # params defines the parameters of the module.
    params: "Params" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class GenesisState(betterproto.Message):
    """GenesisState defines the market module's genesis state."""

    # params defines all the paramaters of the module.
    params: "Params" = betterproto.message_field(1)
    # the gap between the TerraPool and the BasePool
    terra_pool_delta: bytes = betterproto.bytes_field(2)


class MsgStub(betterproto.ServiceStub):
    async def swap(
        self,
        *,
        trader: str = "",
        offer_coin: "___cosmos_base_v1_beta1__.Coin" = None,
        ask_denom: str = "",
    ) -> "MsgSwapResponse":

        request = MsgSwap()
        request.trader = trader
        if offer_coin is not None:
            request.offer_coin = offer_coin
        request.ask_denom = ask_denom

        return await self._unary_unary(
            "/terra.market.v1beta1.Msg/Swap", request, MsgSwapResponse
        )

    async def swap_send(
        self,
        *,
        from_address: str = "",
        to_address: str = "",
        offer_coin: "___cosmos_base_v1_beta1__.Coin" = None,
        ask_denom: str = "",
    ) -> "MsgSwapSendResponse":

        request = MsgSwapSend()
        request.from_address = from_address
        request.to_address = to_address
        if offer_coin is not None:
            request.offer_coin = offer_coin
        request.ask_denom = ask_denom

        return await self._unary_unary(
            "/terra.market.v1beta1.Msg/SwapSend", request, MsgSwapSendResponse
        )


class QueryStub(betterproto.ServiceStub):
    async def swap(
        self, *, offer_coin: str = "", ask_denom: str = ""
    ) -> "QuerySwapResponse":

        request = QuerySwapRequest()
        request.offer_coin = offer_coin
        request.ask_denom = ask_denom

        return await self._unary_unary(
            "/terra.market.v1beta1.Query/Swap", request, QuerySwapResponse
        )

    async def terra_pool_delta(self) -> "QueryTerraPoolDeltaResponse":

        request = QueryTerraPoolDeltaRequest()

        return await self._unary_unary(
            "/terra.market.v1beta1.Query/TerraPoolDelta",
            request,
            QueryTerraPoolDeltaResponse,
        )

    async def params(self) -> "QueryParamsResponse":

        request = QueryParamsRequest()

        return await self._unary_unary(
            "/terra.market.v1beta1.Query/Params", request, QueryParamsResponse
        )


class MsgBase(ServiceBase):
    async def swap(
        self, trader: str, offer_coin: "___cosmos_base_v1_beta1__.Coin", ask_denom: str
    ) -> "MsgSwapResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def swap_send(
        self,
        from_address: str,
        to_address: str,
        offer_coin: "___cosmos_base_v1_beta1__.Coin",
        ask_denom: str,
    ) -> "MsgSwapSendResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_swap(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {
            "trader": request.trader,
            "offer_coin": request.offer_coin,
            "ask_denom": request.ask_denom,
        }

        response = await self.swap(**request_kwargs)
        await stream.send_message(response)

    async def __rpc_swap_send(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {
            "from_address": request.from_address,
            "to_address": request.to_address,
            "offer_coin": request.offer_coin,
            "ask_denom": request.ask_denom,
        }

        response = await self.swap_send(**request_kwargs)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/terra.market.v1beta1.Msg/Swap": grpclib.const.Handler(
                self.__rpc_swap,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgSwap,
                MsgSwapResponse,
            ),
            "/terra.market.v1beta1.Msg/SwapSend": grpclib.const.Handler(
                self.__rpc_swap_send,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgSwapSend,
                MsgSwapSendResponse,
            ),
        }


class QueryBase(ServiceBase):
    async def swap(self, offer_coin: str, ask_denom: str) -> "QuerySwapResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def terra_pool_delta(self) -> "QueryTerraPoolDeltaResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def params(self) -> "QueryParamsResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_swap(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {
            "offer_coin": request.offer_coin,
            "ask_denom": request.ask_denom,
        }

        response = await self.swap(**request_kwargs)
        await stream.send_message(response)

    async def __rpc_terra_pool_delta(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {}

        response = await self.terra_pool_delta(**request_kwargs)
        await stream.send_message(response)

    async def __rpc_params(self, stream: grpclib.server.Stream) -> None:
        request = await stream.recv_message()

        request_kwargs = {}

        response = await self.params(**request_kwargs)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/terra.market.v1beta1.Query/Swap": grpclib.const.Handler(
                self.__rpc_swap,
                grpclib.const.Cardinality.UNARY_UNARY,
                QuerySwapRequest,
                QuerySwapResponse,
            ),
            "/terra.market.v1beta1.Query/TerraPoolDelta": grpclib.const.Handler(
                self.__rpc_terra_pool_delta,
                grpclib.const.Cardinality.UNARY_UNARY,
                QueryTerraPoolDeltaRequest,
                QueryTerraPoolDeltaResponse,
            ),
            "/terra.market.v1beta1.Query/Params": grpclib.const.Handler(
                self.__rpc_params,
                grpclib.const.Cardinality.UNARY_UNARY,
                QueryParamsRequest,
                QueryParamsResponse,
            ),
        }


from ....cosmos.base import v1beta1 as ___cosmos_base_v1_beta1__
