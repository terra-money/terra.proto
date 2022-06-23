/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../../ibc/core/channel/v1/channel";
import { IdentifiedPacketFees } from "../../../../ibc/applications/fee/v1/fee";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "../../../../ibc/applications/fee/v1/genesis";

export const protobufPackage = "ibc.applications.fee.v1";

/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
}

/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId?: PacketId;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket?: IdentifiedPacketFees;
}

/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
}

/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}

/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}

/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}

/** QueryCounterpartyAddressRequest defines the request type for the CounterpartyAddress rpc */
export interface QueryCounterpartyAddressRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayerAddress: string;
}

/** QueryCounterpartyAddressResponse defines the response type for the CounterpartyAddress rpc */
export interface QueryCounterpartyAddressResponse {
  /** the counterparty address used to compensate forward relaying */
  counterpartyAddress: string;
}

/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
}

/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}

const baseQueryIncentivizedPacketsRequest: object = { queryHeight: Long.UZERO };

export const QueryIncentivizedPacketsRequest = {
  encode(message: QueryIncentivizedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIncentivizedPacketsRequest } as QueryIncentivizedPacketsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    const message = { ...baseQueryIncentivizedPacketsRequest } as QueryIncentivizedPacketsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = Long.fromString(object.queryHeight);
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = { ...baseQueryIncentivizedPacketsRequest } as QueryIncentivizedPacketsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = object.queryHeight as Long;
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },
};

const baseQueryIncentivizedPacketsResponse: object = {};

export const QueryIncentivizedPacketsResponse = {
  encode(message: QueryIncentivizedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIncentivizedPacketsResponse } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    const message = { ...baseQueryIncentivizedPacketsResponse } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = [];
    if (object.incentivizedPackets !== undefined && object.incentivizedPackets !== null) {
      for (const e of object.incentivizedPackets) {
        message.incentivizedPackets.push(IdentifiedPacketFees.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = { ...baseQueryIncentivizedPacketsResponse } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = [];
    if (object.incentivizedPackets !== undefined && object.incentivizedPackets !== null) {
      for (const e of object.incentivizedPackets) {
        message.incentivizedPackets.push(IdentifiedPacketFees.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryIncentivizedPacketRequest: object = { queryHeight: Long.UZERO };

export const QueryIncentivizedPacketRequest = {
  encode(message: QueryIncentivizedPacketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIncentivizedPacketRequest } as QueryIncentivizedPacketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketRequest {
    const message = { ...baseQueryIncentivizedPacketRequest } as QueryIncentivizedPacketRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = Long.fromString(object.queryHeight);
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = { ...baseQueryIncentivizedPacketRequest } as QueryIncentivizedPacketRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = object.queryHeight as Long;
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },
};

const baseQueryIncentivizedPacketResponse: object = {};

export const QueryIncentivizedPacketResponse = {
  encode(message: QueryIncentivizedPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIncentivizedPacketResponse } as QueryIncentivizedPacketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketResponse {
    const message = { ...baseQueryIncentivizedPacketResponse } as QueryIncentivizedPacketResponse;
    if (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null) {
      message.incentivizedPacket = IdentifiedPacketFees.fromJSON(object.incentivizedPacket);
    } else {
      message.incentivizedPacket = undefined;
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined &&
      (obj.incentivizedPacket = message.incentivizedPacket
        ? IdentifiedPacketFees.toJSON(message.incentivizedPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = { ...baseQueryIncentivizedPacketResponse } as QueryIncentivizedPacketResponse;
    if (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null) {
      message.incentivizedPacket = IdentifiedPacketFees.fromPartial(object.incentivizedPacket);
    } else {
      message.incentivizedPacket = undefined;
    }
    return message;
  },
};

const baseQueryIncentivizedPacketsForChannelRequest: object = {
  portId: "",
  channelId: "",
  queryHeight: Long.UZERO,
};

export const QueryIncentivizedPacketsForChannelRequest = {
  encode(
    message: QueryIncentivizedPacketsForChannelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = Long.fromString(object.queryHeight);
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = object.queryHeight as Long;
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },
};

const baseQueryIncentivizedPacketsForChannelResponse: object = {};

export const QueryIncentivizedPacketsForChannelResponse = {
  encode(
    message: QueryIncentivizedPacketsForChannelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = [];
    if (object.incentivizedPackets !== undefined && object.incentivizedPackets !== null) {
      for (const e of object.incentivizedPackets) {
        message.incentivizedPackets.push(IdentifiedPacketFees.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>,
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = [];
    if (object.incentivizedPackets !== undefined && object.incentivizedPackets !== null) {
      for (const e of object.incentivizedPackets) {
        message.incentivizedPackets.push(IdentifiedPacketFees.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryTotalRecvFeesRequest: object = {};

export const QueryTotalRecvFeesRequest = {
  encode(message: QueryTotalRecvFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalRecvFeesRequest } as QueryTotalRecvFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesRequest {
    const message = { ...baseQueryTotalRecvFeesRequest } as QueryTotalRecvFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = { ...baseQueryTotalRecvFeesRequest } as QueryTotalRecvFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },
};

const baseQueryTotalRecvFeesResponse: object = {};

export const QueryTotalRecvFeesResponse = {
  encode(message: QueryTotalRecvFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalRecvFeesResponse } as QueryTotalRecvFeesResponse;
    message.recvFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesResponse {
    const message = { ...baseQueryTotalRecvFeesResponse } as QueryTotalRecvFeesResponse;
    message.recvFees = [];
    if (object.recvFees !== undefined && object.recvFees !== null) {
      for (const e of object.recvFees) {
        message.recvFees.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.recvFees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = { ...baseQueryTotalRecvFeesResponse } as QueryTotalRecvFeesResponse;
    message.recvFees = [];
    if (object.recvFees !== undefined && object.recvFees !== null) {
      for (const e of object.recvFees) {
        message.recvFees.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryTotalAckFeesRequest: object = {};

export const QueryTotalAckFeesRequest = {
  encode(message: QueryTotalAckFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalAckFeesRequest } as QueryTotalAckFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesRequest {
    const message = { ...baseQueryTotalAckFeesRequest } as QueryTotalAckFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = { ...baseQueryTotalAckFeesRequest } as QueryTotalAckFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },
};

const baseQueryTotalAckFeesResponse: object = {};

export const QueryTotalAckFeesResponse = {
  encode(message: QueryTotalAckFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalAckFeesResponse } as QueryTotalAckFeesResponse;
    message.ackFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesResponse {
    const message = { ...baseQueryTotalAckFeesResponse } as QueryTotalAckFeesResponse;
    message.ackFees = [];
    if (object.ackFees !== undefined && object.ackFees !== null) {
      for (const e of object.ackFees) {
        message.ackFees.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.ackFees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = { ...baseQueryTotalAckFeesResponse } as QueryTotalAckFeesResponse;
    message.ackFees = [];
    if (object.ackFees !== undefined && object.ackFees !== null) {
      for (const e of object.ackFees) {
        message.ackFees.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryTotalTimeoutFeesRequest: object = {};

export const QueryTotalTimeoutFeesRequest = {
  encode(message: QueryTotalTimeoutFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalTimeoutFeesRequest } as QueryTotalTimeoutFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    const message = { ...baseQueryTotalTimeoutFeesRequest } as QueryTotalTimeoutFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromJSON(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = { ...baseQueryTotalTimeoutFeesRequest } as QueryTotalTimeoutFeesRequest;
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    } else {
      message.packetId = undefined;
    }
    return message;
  },
};

const baseQueryTotalTimeoutFeesResponse: object = {};

export const QueryTotalTimeoutFeesResponse = {
  encode(message: QueryTotalTimeoutFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTotalTimeoutFeesResponse } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    const message = { ...baseQueryTotalTimeoutFeesResponse } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = [];
    if (object.timeoutFees !== undefined && object.timeoutFees !== null) {
      for (const e of object.timeoutFees) {
        message.timeoutFees.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = { ...baseQueryTotalTimeoutFeesResponse } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = [];
    if (object.timeoutFees !== undefined && object.timeoutFees !== null) {
      for (const e of object.timeoutFees) {
        message.timeoutFees.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryCounterpartyAddressRequest: object = { channelId: "", relayerAddress: "" };

export const QueryCounterpartyAddressRequest = {
  encode(message: QueryCounterpartyAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayerAddress !== "") {
      writer.uint32(18).string(message.relayerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCounterpartyAddressRequest } as QueryCounterpartyAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyAddressRequest {
    const message = { ...baseQueryCounterpartyAddressRequest } as QueryCounterpartyAddressRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.relayerAddress !== undefined && object.relayerAddress !== null) {
      message.relayerAddress = String(object.relayerAddress);
    } else {
      message.relayerAddress = "";
    }
    return message;
  },

  toJSON(message: QueryCounterpartyAddressRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayerAddress !== undefined && (obj.relayerAddress = message.relayerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCounterpartyAddressRequest>): QueryCounterpartyAddressRequest {
    const message = { ...baseQueryCounterpartyAddressRequest } as QueryCounterpartyAddressRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    if (object.relayerAddress !== undefined && object.relayerAddress !== null) {
      message.relayerAddress = object.relayerAddress;
    } else {
      message.relayerAddress = "";
    }
    return message;
  },
};

const baseQueryCounterpartyAddressResponse: object = { counterpartyAddress: "" };

export const QueryCounterpartyAddressResponse = {
  encode(message: QueryCounterpartyAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counterpartyAddress !== "") {
      writer.uint32(10).string(message.counterpartyAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCounterpartyAddressResponse } as QueryCounterpartyAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyAddressResponse {
    const message = { ...baseQueryCounterpartyAddressResponse } as QueryCounterpartyAddressResponse;
    if (object.counterpartyAddress !== undefined && object.counterpartyAddress !== null) {
      message.counterpartyAddress = String(object.counterpartyAddress);
    } else {
      message.counterpartyAddress = "";
    }
    return message;
  },

  toJSON(message: QueryCounterpartyAddressResponse): unknown {
    const obj: any = {};
    message.counterpartyAddress !== undefined && (obj.counterpartyAddress = message.counterpartyAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCounterpartyAddressResponse>): QueryCounterpartyAddressResponse {
    const message = { ...baseQueryCounterpartyAddressResponse } as QueryCounterpartyAddressResponse;
    if (object.counterpartyAddress !== undefined && object.counterpartyAddress !== null) {
      message.counterpartyAddress = object.counterpartyAddress;
    } else {
      message.counterpartyAddress = "";
    }
    return message;
  },
};

const baseQueryFeeEnabledChannelsRequest: object = { queryHeight: Long.UZERO };

export const QueryFeeEnabledChannelsRequest = {
  encode(message: QueryFeeEnabledChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeEnabledChannelsRequest } as QueryFeeEnabledChannelsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    const message = { ...baseQueryFeeEnabledChannelsRequest } as QueryFeeEnabledChannelsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = Long.fromString(object.queryHeight);
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = { ...baseQueryFeeEnabledChannelsRequest } as QueryFeeEnabledChannelsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = object.queryHeight as Long;
    } else {
      message.queryHeight = Long.UZERO;
    }
    return message;
  },
};

const baseQueryFeeEnabledChannelsResponse: object = {};

export const QueryFeeEnabledChannelsResponse = {
  encode(message: QueryFeeEnabledChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeEnabledChannelsResponse } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    const message = { ...baseQueryFeeEnabledChannelsResponse } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = [];
    if (object.feeEnabledChannels !== undefined && object.feeEnabledChannels !== null) {
      for (const e of object.feeEnabledChannels) {
        message.feeEnabledChannels.push(FeeEnabledChannel.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined,
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = { ...baseQueryFeeEnabledChannelsResponse } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = [];
    if (object.feeEnabledChannels !== undefined && object.feeEnabledChannels !== null) {
      for (const e of object.feeEnabledChannels) {
        message.feeEnabledChannels.push(FeeEnabledChannel.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryFeeEnabledChannelRequest: object = { portId: "", channelId: "" };

export const QueryFeeEnabledChannelRequest = {
  encode(message: QueryFeeEnabledChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeEnabledChannelRequest } as QueryFeeEnabledChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    const message = { ...baseQueryFeeEnabledChannelRequest } as QueryFeeEnabledChannelRequest;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = { ...baseQueryFeeEnabledChannelRequest } as QueryFeeEnabledChannelRequest;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = "";
    }
    return message;
  },
};

const baseQueryFeeEnabledChannelResponse: object = { feeEnabled: false };

export const QueryFeeEnabledChannelResponse = {
  encode(message: QueryFeeEnabledChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFeeEnabledChannelResponse } as QueryFeeEnabledChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    const message = { ...baseQueryFeeEnabledChannelResponse } as QueryFeeEnabledChannelResponse;
    if (object.feeEnabled !== undefined && object.feeEnabled !== null) {
      message.feeEnabled = Boolean(object.feeEnabled);
    } else {
      message.feeEnabled = false;
    }
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = { ...baseQueryFeeEnabledChannelResponse } as QueryFeeEnabledChannelResponse;
    if (object.feeEnabled !== undefined && object.feeEnabled !== null) {
      message.feeEnabled = object.feeEnabled;
    } else {
      message.feeEnabled = false;
    }
    return message;
  },
};

/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets(
    request: DeepPartial<QueryIncentivizedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket(
    request: DeepPartial<QueryIncentivizedPacketRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel(
    request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees(
    request: DeepPartial<QueryTotalRecvFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees(
    request: DeepPartial<QueryTotalAckFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees(
    request: DeepPartial<QueryTotalTimeoutFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalTimeoutFeesResponse>;
  /** CounterpartyAddress returns the registered counterparty address for forward relaying */
  CounterpartyAddress(
    request: DeepPartial<QueryCounterpartyAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCounterpartyAddressResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels(
    request: DeepPartial<QueryFeeEnabledChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel(
    request: DeepPartial<QueryFeeEnabledChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
    this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
    this.IncentivizedPacketsForChannel = this.IncentivizedPacketsForChannel.bind(this);
    this.TotalRecvFees = this.TotalRecvFees.bind(this);
    this.TotalAckFees = this.TotalAckFees.bind(this);
    this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
    this.CounterpartyAddress = this.CounterpartyAddress.bind(this);
    this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
    this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
  }

  IncentivizedPackets(
    request: DeepPartial<QueryIncentivizedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsResponse> {
    return this.rpc.unary(
      QueryIncentivizedPacketsDesc,
      QueryIncentivizedPacketsRequest.fromPartial(request),
      metadata,
    );
  }

  IncentivizedPacket(
    request: DeepPartial<QueryIncentivizedPacketRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketResponse> {
    return this.rpc.unary(
      QueryIncentivizedPacketDesc,
      QueryIncentivizedPacketRequest.fromPartial(request),
      metadata,
    );
  }

  IncentivizedPacketsForChannel(
    request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsForChannelResponse> {
    return this.rpc.unary(
      QueryIncentivizedPacketsForChannelDesc,
      QueryIncentivizedPacketsForChannelRequest.fromPartial(request),
      metadata,
    );
  }

  TotalRecvFees(
    request: DeepPartial<QueryTotalRecvFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalRecvFeesResponse> {
    return this.rpc.unary(QueryTotalRecvFeesDesc, QueryTotalRecvFeesRequest.fromPartial(request), metadata);
  }

  TotalAckFees(
    request: DeepPartial<QueryTotalAckFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalAckFeesResponse> {
    return this.rpc.unary(QueryTotalAckFeesDesc, QueryTotalAckFeesRequest.fromPartial(request), metadata);
  }

  TotalTimeoutFees(
    request: DeepPartial<QueryTotalTimeoutFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalTimeoutFeesResponse> {
    return this.rpc.unary(
      QueryTotalTimeoutFeesDesc,
      QueryTotalTimeoutFeesRequest.fromPartial(request),
      metadata,
    );
  }

  CounterpartyAddress(
    request: DeepPartial<QueryCounterpartyAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCounterpartyAddressResponse> {
    return this.rpc.unary(
      QueryCounterpartyAddressDesc,
      QueryCounterpartyAddressRequest.fromPartial(request),
      metadata,
    );
  }

  FeeEnabledChannels(
    request: DeepPartial<QueryFeeEnabledChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelsResponse> {
    return this.rpc.unary(
      QueryFeeEnabledChannelsDesc,
      QueryFeeEnabledChannelsRequest.fromPartial(request),
      metadata,
    );
  }

  FeeEnabledChannel(
    request: DeepPartial<QueryFeeEnabledChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelResponse> {
    return this.rpc.unary(
      QueryFeeEnabledChannelDesc,
      QueryFeeEnabledChannelRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "ibc.applications.fee.v1.Query",
};

export const QueryIncentivizedPacketsDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPackets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIncentivizedPacketDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacket",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIncentivizedPacketsForChannelDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacketsForChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketsForChannelRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivizedPacketsForChannelResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTotalRecvFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalRecvFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalRecvFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalRecvFeesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTotalAckFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalAckFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalAckFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalAckFeesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTotalTimeoutFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalTimeoutFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalTimeoutFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalTimeoutFeesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryCounterpartyAddressDesc: UnaryMethodDefinitionish = {
  methodName: "CounterpartyAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCounterpartyAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCounterpartyAddressResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFeeEnabledChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeEnabledChannelsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeEnabledChannelsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFeeEnabledChannelDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeEnabledChannelRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeEnabledChannelResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
