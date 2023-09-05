# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: cosmos/vesting/v1beta1/tx.proto, cosmos/vesting/v1beta1/vesting.proto
# plugin: python-betterproto
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

from ...auth import v1beta1 as __auth_v1_beta1__
from ...base import v1beta1 as __base_v1_beta1__


if TYPE_CHECKING:
    import grpclib.server
    from betterproto.grpc.grpclib_client import MetadataLike
    from grpclib.metadata import Deadline


@dataclass(eq=False, repr=False)
class BaseVestingAccount(betterproto.Message):
    """
    BaseVestingAccount implements the VestingAccount interface. It contains all
    the necessary fields needed for any vesting account implementation.
    """

    base_account: "__auth_v1_beta1__.BaseAccount" = betterproto.message_field(1)
    original_vesting: List["__base_v1_beta1__.Coin"] = betterproto.message_field(2)
    delegated_free: List["__base_v1_beta1__.Coin"] = betterproto.message_field(3)
    delegated_vesting: List["__base_v1_beta1__.Coin"] = betterproto.message_field(4)
    end_time: int = betterproto.int64_field(5)


@dataclass(eq=False, repr=False)
class ContinuousVestingAccount(betterproto.Message):
    """
    ContinuousVestingAccount implements the VestingAccount interface. It
    continuously vests by unlocking coins linearly with respect to time.
    """

    base_vesting_account: "BaseVestingAccount" = betterproto.message_field(1)
    start_time: int = betterproto.int64_field(2)


@dataclass(eq=False, repr=False)
class DelayedVestingAccount(betterproto.Message):
    """
    DelayedVestingAccount implements the VestingAccount interface. It vests all
    coins after a specific time, but non prior. In other words, it keeps them
    locked until a specified time.
    """

    base_vesting_account: "BaseVestingAccount" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class Period(betterproto.Message):
    """Period defines a length of time and amount of coins that will vest."""

    length: int = betterproto.int64_field(1)
    amount: List["__base_v1_beta1__.Coin"] = betterproto.message_field(2)


@dataclass(eq=False, repr=False)
class PeriodicVestingAccount(betterproto.Message):
    """
    PeriodicVestingAccount implements the VestingAccount interface. It
    periodically vests by unlocking coins during each specified period.
    """

    base_vesting_account: "BaseVestingAccount" = betterproto.message_field(1)
    start_time: int = betterproto.int64_field(2)
    vesting_periods: List["Period"] = betterproto.message_field(3)


@dataclass(eq=False, repr=False)
class PermanentLockedAccount(betterproto.Message):
    """
    PermanentLockedAccount implements the VestingAccount interface. It does not
    ever release coins, locking them indefinitely. Coins in this account can
    still be used for delegating and for governance votes even while locked.
    Since: cosmos-sdk 0.43
    """

    base_vesting_account: "BaseVestingAccount" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class MsgCreateVestingAccount(betterproto.Message):
    """
    MsgCreateVestingAccount defines a message that enables creating a vesting
    account.
    """

    from_address: str = betterproto.string_field(1)
    to_address: str = betterproto.string_field(2)
    amount: List["__base_v1_beta1__.Coin"] = betterproto.message_field(3)
    end_time: int = betterproto.int64_field(4)
    delayed: bool = betterproto.bool_field(5)


@dataclass(eq=False, repr=False)
class MsgCreateVestingAccountResponse(betterproto.Message):
    """
    MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount
    response type.
    """

    pass


@dataclass(eq=False, repr=False)
class MsgCreatePermanentLockedAccount(betterproto.Message):
    """
    MsgCreatePermanentLockedAccount defines a message that enables creating a
    permanent locked account. Since: cosmos-sdk 0.46
    """

    from_address: str = betterproto.string_field(1)
    to_address: str = betterproto.string_field(2)
    amount: List["__base_v1_beta1__.Coin"] = betterproto.message_field(3)


@dataclass(eq=False, repr=False)
class MsgCreatePermanentLockedAccountResponse(betterproto.Message):
    """
    MsgCreatePermanentLockedAccountResponse defines the
    Msg/CreatePermanentLockedAccount response type. Since: cosmos-sdk 0.46
    """

    pass


@dataclass(eq=False, repr=False)
class MsgCreatePeriodicVestingAccount(betterproto.Message):
    """
    MsgCreatePeriodicVestingAccount defines a message that enables creating a
    vesting account. Since: cosmos-sdk 0.46
    """

    from_address: str = betterproto.string_field(1)
    to_address: str = betterproto.string_field(2)
    start_time: int = betterproto.int64_field(3)
    vesting_periods: List["Period"] = betterproto.message_field(4)


@dataclass(eq=False, repr=False)
class MsgCreatePeriodicVestingAccountResponse(betterproto.Message):
    """
    MsgCreatePeriodicVestingAccountResponse defines the
    Msg/CreatePeriodicVestingAccount response type. Since: cosmos-sdk 0.46
    """

    pass

@dataclass(eq=False, repr=False)
class MsgDonateAllVestingTokens(betterproto.Message):
    """
    MsgDonateAllVestingTokens defines a message that enables donating all
    vesting token to community pool.
    """

    from_address: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class MsgDonateAllVestingTokensResponse(betterproto.Message):
    """
    MsgDonateAllVestingTokensResponse defines the Msg/MsgDonateAllVestingTokens
    response type.
    """

    pass

@dataclass(eq=False, repr=False)
class MsgDonateAllVestingTokens(betterproto.Message):
    """
    MsgDonateAllVestingTokens defines a message that enables donating all
    vesting token to community pool.
    """

    from_address: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class MsgDonateAllVestingTokensResponse(betterproto.Message):
    """
    MsgDonateAllVestingTokensResponse defines the Msg/MsgDonateAllVestingTokens
    response type.
    """

    pass


class MsgStub(betterproto.ServiceStub):
    async def create_vesting_account(
        self,
        msg_create_vesting_account: "MsgCreateVestingAccount",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgCreateVestingAccountResponse":
        return await self._unary_unary(
            "/cosmos.vesting.v1beta1.Msg/CreateVestingAccount",
            msg_create_vesting_account,
            MsgCreateVestingAccountResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def create_permanent_locked_account(
        self,
        msg_create_permanent_locked_account: "MsgCreatePermanentLockedAccount",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgCreatePermanentLockedAccountResponse":
        return await self._unary_unary(
            "/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount",
            msg_create_permanent_locked_account,
            MsgCreatePermanentLockedAccountResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def create_periodic_vesting_account(
        self,
        msg_create_periodic_vesting_account: "MsgCreatePeriodicVestingAccount",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgCreatePeriodicVestingAccountResponse":
        return await self._unary_unary(
            "/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount",
            msg_create_periodic_vesting_account,
            MsgCreatePeriodicVestingAccountResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )

    async def donate_all_vesting_tokens(
        self,
        msg_donate_all_vesting_tokens: "MsgDonateAllVestingTokens",
        *,
        timeout: Optional[float] = None,
        deadline: Optional["Deadline"] = None,
        metadata: Optional["MetadataLike"] = None
    ) -> "MsgDonateAllVestingTokensResponse":
        return await self._unary_unary(
            "/cosmos.vesting.v1beta1.Msg/DonateAllVestingTokens",
            msg_donate_all_vesting_tokens,
            MsgDonateAllVestingTokensResponse,
            timeout=timeout,
            deadline=deadline,
            metadata=metadata,
        )


class MsgBase(ServiceBase):
    async def create_vesting_account(
        self, msg_create_vesting_account: "MsgCreateVestingAccount"
    ) -> "MsgCreateVestingAccountResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def create_permanent_locked_account(
        self, msg_create_permanent_locked_account: "MsgCreatePermanentLockedAccount"
    ) -> "MsgCreatePermanentLockedAccountResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def create_periodic_vesting_account(
        self, msg_create_periodic_vesting_account: "MsgCreatePeriodicVestingAccount"
    ) -> "MsgCreatePeriodicVestingAccountResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def donate_all_vesting_tokens(
        self, msg_donate_all_vesting_tokens: "MsgDonateAllVestingTokens"
    ) -> "MsgDonateAllVestingTokensResponse":
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def __rpc_create_vesting_account(
        self,
        stream: "grpclib.server.Stream[MsgCreateVestingAccount, MsgCreateVestingAccountResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.create_vesting_account(request)
        await stream.send_message(response)

    async def __rpc_create_permanent_locked_account(
        self,
        stream: "grpclib.server.Stream[MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.create_permanent_locked_account(request)
        await stream.send_message(response)

    async def __rpc_create_periodic_vesting_account(
        self,
        stream: "grpclib.server.Stream[MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.create_periodic_vesting_account(request)
        await stream.send_message(response)

    async def __rpc_donate_all_vesting_tokens(
        self,
        stream: "grpclib.server.Stream[MsgDonateAllVestingTokens, MsgDonateAllVestingTokensResponse]",
    ) -> None:
        request = await stream.recv_message()
        response = await self.donate_all_vesting_tokens(request)
        await stream.send_message(response)

    def __mapping__(self) -> Dict[str, grpclib.const.Handler]:
        return {
            "/cosmos.vesting.v1beta1.Msg/CreateVestingAccount": grpclib.const.Handler(
                self.__rpc_create_vesting_account,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgCreateVestingAccount,
                MsgCreateVestingAccountResponse,
            ),
            "/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount": grpclib.const.Handler(
                self.__rpc_create_permanent_locked_account,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgCreatePermanentLockedAccount,
                MsgCreatePermanentLockedAccountResponse,
            ),
            "/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount": grpclib.const.Handler(
                self.__rpc_create_periodic_vesting_account,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgCreatePeriodicVestingAccount,
                MsgCreatePeriodicVestingAccountResponse,
            ),
            "/cosmos.vesting.v1beta1.Msg/DonateAllVestingTokens": grpclib.const.Handler(
                self.__rpc_donate_all_vesting_tokens,
                grpclib.const.Cardinality.UNARY_UNARY,
                MsgDonateAllVestingTokens,
                MsgDonateAllVestingTokensResponse,
            ),
        }
