/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "cosmos.tx.v1beta1";

/** OrderBy defines the sorting order */
export enum OrderBy {
  /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
  ORDER_BY_UNSPECIFIED = 0,
  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,
  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}

export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}

export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    default:
      return "UNKNOWN";
  }
}

/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,
  /**
   * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
   * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
   *
   * @deprecated
   */
  BROADCAST_MODE_BLOCK = 1,
  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,
  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}

export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}

export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    default:
      return "UNKNOWN";
  }
}

/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
  /** events is the list of transaction event type. */
  events: string[];
  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   *
   * @deprecated
   */
  pagination?: PageRequest;
  orderBy: OrderBy;
  /** page is the page number to query, starts at 1. If not provided, will default to first page. */
  page: Long;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: Long;
}

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs: Tx[];
  /** tx_responses is the list of queried TxResponses. */
  txResponses: TxResponse[];
  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   *
   * @deprecated
   */
  pagination?: PageResponse;
  /** total is total number of results available */
  total: Long;
}

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
  mode: BroadcastMode;
}

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   *
   * @deprecated
   */
  tx?: Tx;
  /**
   * tx_bytes is the raw transaction.
   *
   * Since: cosmos-sdk 0.43
   */
  txBytes: Uint8Array;
}

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo?: GasInfo;
  /** result is the result of the simulation. */
  result?: Result;
}

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}

/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
  /** tx is the queried transaction. */
  tx?: Tx;
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
  /** height is the height of the block to query. */
  height: Long;
  /** pagination defines a pagination for the request. */
  pagination?: PageRequest;
}

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
  /** txs are the transactions in the block. */
  txs: Tx[];
  blockId?: BlockID;
  block?: Block;
  /** pagination defines a pagination for the response. */
  pagination?: PageResponse;
}

/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
}

/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponse {
  /** tx is the decoded transaction. */
  tx?: Tx;
}

/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequest {
  /** tx is the transaction to encode. */
  tx?: Tx;
}

/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponse {
  /** tx_bytes is the encoded transaction bytes. */
  txBytes: Uint8Array;
}

/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequest {
  aminoJson: string;
}

/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponse {
  aminoBinary: Uint8Array;
}

/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequest {
  aminoBinary: Uint8Array;
}

/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponse {
  aminoJson: string;
}

const baseGetTxsEventRequest: object = { events: "", orderBy: 0, page: Long.UZERO, limit: Long.UZERO };

export const GetTxsEventRequest = {
  encode(message: GetTxsEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (!message.page.isZero()) {
      writer.uint32(32).uint64(message.page);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32() as any;
          break;
        case 4:
          message.page = reader.uint64() as Long;
          break;
        case 5:
          message.limit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxsEventRequest {
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(String(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.orderBy !== undefined && object.orderBy !== null) {
      message.orderBy = orderByFromJSON(object.orderBy);
    } else {
      message.orderBy = 0;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = Long.fromString(object.page);
    } else {
      message.page = Long.UZERO;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromString(object.limit);
    } else {
      message.limit = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GetTxsEventRequest): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e);
    } else {
      obj.events = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
    message.page !== undefined && (obj.page = (message.page || Long.UZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(e);
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.orderBy !== undefined && object.orderBy !== null) {
      message.orderBy = object.orderBy;
    } else {
      message.orderBy = 0;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page as Long;
    } else {
      message.page = Long.UZERO;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit as Long;
    } else {
      message.limit = Long.UZERO;
    }
    return message;
  },
};

const baseGetTxsEventResponse: object = { total: Long.UZERO };

export const GetTxsEventResponse = {
  encode(message: GetTxsEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxsEventResponse {
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromJSON(e));
      }
    }
    if (object.txResponses !== undefined && object.txResponses !== null) {
      for (const e of object.txResponses) {
        message.txResponses.push(TxResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Long.fromString(object.total);
    } else {
      message.total = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GetTxsEventResponse): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? Tx.toJSON(e) : undefined));
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map((e) => (e ? TxResponse.toJSON(e) : undefined));
    } else {
      obj.txResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.total !== undefined && (obj.total = (message.total || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromPartial(e));
      }
    }
    if (object.txResponses !== undefined && object.txResponses !== null) {
      for (const e of object.txResponses) {
        message.txResponses.push(TxResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total as Long;
    } else {
      message.total = Long.UZERO;
    }
    return message;
  },
};

const baseBroadcastTxRequest: object = { mode: 0 };

export const BroadcastTxRequest = {
  encode(message: BroadcastTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBroadcastTxRequest } as BroadcastTxRequest;
    message.txBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BroadcastTxRequest {
    const message = { ...baseBroadcastTxRequest } as BroadcastTxRequest;
    message.txBytes = new Uint8Array();
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = bytesFromBase64(object.txBytes);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = broadcastModeFromJSON(object.mode);
    } else {
      message.mode = 0;
    }
    return message;
  },

  toJSON(message: BroadcastTxRequest): unknown {
    const obj: any = {};
    message.txBytes !== undefined &&
      (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },

  fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = { ...baseBroadcastTxRequest } as BroadcastTxRequest;
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = object.txBytes;
    } else {
      message.txBytes = new Uint8Array();
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = 0;
    }
    return message;
  },
};

const baseBroadcastTxResponse: object = {};

export const BroadcastTxResponse = {
  encode(message: BroadcastTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBroadcastTxResponse } as BroadcastTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BroadcastTxResponse {
    const message = { ...baseBroadcastTxResponse } as BroadcastTxResponse;
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromJSON(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },

  toJSON(message: BroadcastTxResponse): unknown {
    const obj: any = {};
    message.txResponse !== undefined &&
      (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = { ...baseBroadcastTxResponse } as BroadcastTxResponse;
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },
};

const baseSimulateRequest: object = {};

export const SimulateRequest = {
  encode(message: SimulateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSimulateRequest } as SimulateRequest;
    message.txBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimulateRequest {
    const message = { ...baseSimulateRequest } as SimulateRequest;
    message.txBytes = new Uint8Array();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = bytesFromBase64(object.txBytes);
    }
    return message;
  },

  toJSON(message: SimulateRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txBytes !== undefined &&
      (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = { ...baseSimulateRequest } as SimulateRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = object.txBytes;
    } else {
      message.txBytes = new Uint8Array();
    }
    return message;
  },
};

const baseSimulateResponse: object = {};

export const SimulateResponse = {
  encode(message: SimulateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSimulateResponse } as SimulateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimulateResponse {
    const message = { ...baseSimulateResponse } as SimulateResponse;
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromJSON(object.gasInfo);
    } else {
      message.gasInfo = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },

  toJSON(message: SimulateResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined &&
      (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = { ...baseSimulateResponse } as SimulateResponse;
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromPartial(object.gasInfo);
    } else {
      message.gasInfo = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
};

const baseGetTxRequest: object = { hash: "" };

export const GetTxRequest = {
  encode(message: GetTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxRequest } as GetTxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxRequest {
    const message = { ...baseGetTxRequest } as GetTxRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: GetTxRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = { ...baseGetTxRequest } as GetTxRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseGetTxResponse: object = {};

export const GetTxResponse = {
  encode(message: GetTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxResponse } as GetTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxResponse {
    const message = { ...baseGetTxResponse } as GetTxResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromJSON(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },

  toJSON(message: GetTxResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txResponse !== undefined &&
      (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = { ...baseGetTxResponse } as GetTxResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },
};

const baseGetBlockWithTxsRequest: object = { height: Long.ZERO };

export const GetBlockWithTxsRequest = {
  encode(message: GetBlockWithTxsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockWithTxsRequest } as GetBlockWithTxsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockWithTxsRequest {
    const message = { ...baseGetBlockWithTxsRequest } as GetBlockWithTxsRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    } else {
      message.height = Long.ZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: GetBlockWithTxsRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest {
    const message = { ...baseGetBlockWithTxsRequest } as GetBlockWithTxsRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height as Long;
    } else {
      message.height = Long.ZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseGetBlockWithTxsResponse: object = {};

export const GetBlockWithTxsResponse = {
  encode(message: GetBlockWithTxsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockWithTxsResponse } as GetBlockWithTxsResponse;
    message.txs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockWithTxsResponse {
    const message = { ...baseGetBlockWithTxsResponse } as GetBlockWithTxsResponse;
    message.txs = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromJSON(e));
      }
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: GetBlockWithTxsResponse): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? Tx.toJSON(e) : undefined));
    } else {
      obj.txs = [];
    }
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse {
    const message = { ...baseGetBlockWithTxsResponse } as GetBlockWithTxsResponse;
    message.txs = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromPartial(e));
      }
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseTxDecodeRequest: object = {};

export const TxDecodeRequest = {
  encode(message: TxDecodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxDecodeRequest } as TxDecodeRequest;
    message.txBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDecodeRequest {
    const message = { ...baseTxDecodeRequest } as TxDecodeRequest;
    message.txBytes = new Uint8Array();
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = bytesFromBase64(object.txBytes);
    }
    return message;
  },

  toJSON(message: TxDecodeRequest): unknown {
    const obj: any = {};
    message.txBytes !== undefined &&
      (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<TxDecodeRequest>): TxDecodeRequest {
    const message = { ...baseTxDecodeRequest } as TxDecodeRequest;
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = object.txBytes;
    } else {
      message.txBytes = new Uint8Array();
    }
    return message;
  },
};

const baseTxDecodeResponse: object = {};

export const TxDecodeResponse = {
  encode(message: TxDecodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxDecodeResponse } as TxDecodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDecodeResponse {
    const message = { ...baseTxDecodeResponse } as TxDecodeResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },

  toJSON(message: TxDecodeResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TxDecodeResponse>): TxDecodeResponse {
    const message = { ...baseTxDecodeResponse } as TxDecodeResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
};

const baseTxEncodeRequest: object = {};

export const TxEncodeRequest = {
  encode(message: TxEncodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxEncodeRequest } as TxEncodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxEncodeRequest {
    const message = { ...baseTxEncodeRequest } as TxEncodeRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },

  toJSON(message: TxEncodeRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TxEncodeRequest>): TxEncodeRequest {
    const message = { ...baseTxEncodeRequest } as TxEncodeRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
};

const baseTxEncodeResponse: object = {};

export const TxEncodeResponse = {
  encode(message: TxEncodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxEncodeResponse } as TxEncodeResponse;
    message.txBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxEncodeResponse {
    const message = { ...baseTxEncodeResponse } as TxEncodeResponse;
    message.txBytes = new Uint8Array();
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = bytesFromBase64(object.txBytes);
    }
    return message;
  },

  toJSON(message: TxEncodeResponse): unknown {
    const obj: any = {};
    message.txBytes !== undefined &&
      (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<TxEncodeResponse>): TxEncodeResponse {
    const message = { ...baseTxEncodeResponse } as TxEncodeResponse;
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = object.txBytes;
    } else {
      message.txBytes = new Uint8Array();
    }
    return message;
  },
};

const baseTxEncodeAminoRequest: object = { aminoJson: "" };

export const TxEncodeAminoRequest = {
  encode(message: TxEncodeAminoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeAminoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxEncodeAminoRequest } as TxEncodeAminoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxEncodeAminoRequest {
    const message = { ...baseTxEncodeAminoRequest } as TxEncodeAminoRequest;
    if (object.aminoJson !== undefined && object.aminoJson !== null) {
      message.aminoJson = String(object.aminoJson);
    } else {
      message.aminoJson = "";
    }
    return message;
  },

  toJSON(message: TxEncodeAminoRequest): unknown {
    const obj: any = {};
    message.aminoJson !== undefined && (obj.aminoJson = message.aminoJson);
    return obj;
  },

  fromPartial(object: DeepPartial<TxEncodeAminoRequest>): TxEncodeAminoRequest {
    const message = { ...baseTxEncodeAminoRequest } as TxEncodeAminoRequest;
    if (object.aminoJson !== undefined && object.aminoJson !== null) {
      message.aminoJson = object.aminoJson;
    } else {
      message.aminoJson = "";
    }
    return message;
  },
};

const baseTxEncodeAminoResponse: object = {};

export const TxEncodeAminoResponse = {
  encode(message: TxEncodeAminoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxEncodeAminoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxEncodeAminoResponse } as TxEncodeAminoResponse;
    message.aminoBinary = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxEncodeAminoResponse {
    const message = { ...baseTxEncodeAminoResponse } as TxEncodeAminoResponse;
    message.aminoBinary = new Uint8Array();
    if (object.aminoBinary !== undefined && object.aminoBinary !== null) {
      message.aminoBinary = bytesFromBase64(object.aminoBinary);
    }
    return message;
  },

  toJSON(message: TxEncodeAminoResponse): unknown {
    const obj: any = {};
    message.aminoBinary !== undefined &&
      (obj.aminoBinary = base64FromBytes(
        message.aminoBinary !== undefined ? message.aminoBinary : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<TxEncodeAminoResponse>): TxEncodeAminoResponse {
    const message = { ...baseTxEncodeAminoResponse } as TxEncodeAminoResponse;
    if (object.aminoBinary !== undefined && object.aminoBinary !== null) {
      message.aminoBinary = object.aminoBinary;
    } else {
      message.aminoBinary = new Uint8Array();
    }
    return message;
  },
};

const baseTxDecodeAminoRequest: object = {};

export const TxDecodeAminoRequest = {
  encode(message: TxDecodeAminoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeAminoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxDecodeAminoRequest } as TxDecodeAminoRequest;
    message.aminoBinary = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDecodeAminoRequest {
    const message = { ...baseTxDecodeAminoRequest } as TxDecodeAminoRequest;
    message.aminoBinary = new Uint8Array();
    if (object.aminoBinary !== undefined && object.aminoBinary !== null) {
      message.aminoBinary = bytesFromBase64(object.aminoBinary);
    }
    return message;
  },

  toJSON(message: TxDecodeAminoRequest): unknown {
    const obj: any = {};
    message.aminoBinary !== undefined &&
      (obj.aminoBinary = base64FromBytes(
        message.aminoBinary !== undefined ? message.aminoBinary : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<TxDecodeAminoRequest>): TxDecodeAminoRequest {
    const message = { ...baseTxDecodeAminoRequest } as TxDecodeAminoRequest;
    if (object.aminoBinary !== undefined && object.aminoBinary !== null) {
      message.aminoBinary = object.aminoBinary;
    } else {
      message.aminoBinary = new Uint8Array();
    }
    return message;
  },
};

const baseTxDecodeAminoResponse: object = { aminoJson: "" };

export const TxDecodeAminoResponse = {
  encode(message: TxDecodeAminoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeAminoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxDecodeAminoResponse } as TxDecodeAminoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDecodeAminoResponse {
    const message = { ...baseTxDecodeAminoResponse } as TxDecodeAminoResponse;
    if (object.aminoJson !== undefined && object.aminoJson !== null) {
      message.aminoJson = String(object.aminoJson);
    } else {
      message.aminoJson = "";
    }
    return message;
  },

  toJSON(message: TxDecodeAminoResponse): unknown {
    const obj: any = {};
    message.aminoJson !== undefined && (obj.aminoJson = message.aminoJson);
    return obj;
  },

  fromPartial(object: DeepPartial<TxDecodeAminoResponse>): TxDecodeAminoResponse {
    const message = { ...baseTxDecodeAminoResponse } as TxDecodeAminoResponse;
    if (object.aminoJson !== undefined && object.aminoJson !== null) {
      message.aminoJson = object.aminoJson;
    } else {
      message.aminoJson = "";
    }
    return message;
  },
};

/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  Simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  GetTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  BroadcastTx(
    request: DeepPartial<BroadcastTxRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  GetTxsEvent(
    request: DeepPartial<GetTxsEventRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   *
   * Since: cosmos-sdk 0.45.2
   */
  GetBlockWithTxs(
    request: DeepPartial<GetBlockWithTxsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetBlockWithTxsResponse>;
  /**
   * TxDecode decodes the transaction.
   *
   * Since: cosmos-sdk 0.47
   */
  TxDecode(request: DeepPartial<TxDecodeRequest>, metadata?: grpc.Metadata): Promise<TxDecodeResponse>;
  /**
   * TxEncode encodes the transaction.
   *
   * Since: cosmos-sdk 0.47
   */
  TxEncode(request: DeepPartial<TxEncodeRequest>, metadata?: grpc.Metadata): Promise<TxEncodeResponse>;
  /**
   * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
   *
   * Since: cosmos-sdk 0.47
   */
  TxEncodeAmino(
    request: DeepPartial<TxEncodeAminoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<TxEncodeAminoResponse>;
  /**
   * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
   *
   * Since: cosmos-sdk 0.47
   */
  TxDecodeAmino(
    request: DeepPartial<TxDecodeAminoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<TxDecodeAminoResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Simulate = this.Simulate.bind(this);
    this.GetTx = this.GetTx.bind(this);
    this.BroadcastTx = this.BroadcastTx.bind(this);
    this.GetTxsEvent = this.GetTxsEvent.bind(this);
    this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
    this.TxDecode = this.TxDecode.bind(this);
    this.TxEncode = this.TxEncode.bind(this);
    this.TxEncodeAmino = this.TxEncodeAmino.bind(this);
    this.TxDecodeAmino = this.TxDecodeAmino.bind(this);
  }

  Simulate(request: DeepPartial<SimulateRequest>, metadata?: grpc.Metadata): Promise<SimulateResponse> {
    return this.rpc.unary(ServiceSimulateDesc, SimulateRequest.fromPartial(request), metadata);
  }

  GetTx(request: DeepPartial<GetTxRequest>, metadata?: grpc.Metadata): Promise<GetTxResponse> {
    return this.rpc.unary(ServiceGetTxDesc, GetTxRequest.fromPartial(request), metadata);
  }

  BroadcastTx(
    request: DeepPartial<BroadcastTxRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BroadcastTxResponse> {
    return this.rpc.unary(ServiceBroadcastTxDesc, BroadcastTxRequest.fromPartial(request), metadata);
  }

  GetTxsEvent(
    request: DeepPartial<GetTxsEventRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetTxsEventResponse> {
    return this.rpc.unary(ServiceGetTxsEventDesc, GetTxsEventRequest.fromPartial(request), metadata);
  }

  GetBlockWithTxs(
    request: DeepPartial<GetBlockWithTxsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetBlockWithTxsResponse> {
    return this.rpc.unary(ServiceGetBlockWithTxsDesc, GetBlockWithTxsRequest.fromPartial(request), metadata);
  }

  TxDecode(request: DeepPartial<TxDecodeRequest>, metadata?: grpc.Metadata): Promise<TxDecodeResponse> {
    return this.rpc.unary(ServiceTxDecodeDesc, TxDecodeRequest.fromPartial(request), metadata);
  }

  TxEncode(request: DeepPartial<TxEncodeRequest>, metadata?: grpc.Metadata): Promise<TxEncodeResponse> {
    return this.rpc.unary(ServiceTxEncodeDesc, TxEncodeRequest.fromPartial(request), metadata);
  }

  TxEncodeAmino(
    request: DeepPartial<TxEncodeAminoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<TxEncodeAminoResponse> {
    return this.rpc.unary(ServiceTxEncodeAminoDesc, TxEncodeAminoRequest.fromPartial(request), metadata);
  }

  TxDecodeAmino(
    request: DeepPartial<TxDecodeAminoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<TxDecodeAminoResponse> {
    return this.rpc.unary(ServiceTxDecodeAminoDesc, TxDecodeAminoRequest.fromPartial(request), metadata);
  }
}

export const ServiceDesc = {
  serviceName: "cosmos.tx.v1beta1.Service",
};

export const ServiceSimulateDesc: UnaryMethodDefinitionish = {
  methodName: "Simulate",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SimulateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SimulateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceGetTxDesc: UnaryMethodDefinitionish = {
  methodName: "GetTx",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetTxRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetTxResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceBroadcastTxDesc: UnaryMethodDefinitionish = {
  methodName: "BroadcastTx",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BroadcastTxRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BroadcastTxResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceGetTxsEventDesc: UnaryMethodDefinitionish = {
  methodName: "GetTxsEvent",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetTxsEventRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetTxsEventResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceGetBlockWithTxsDesc: UnaryMethodDefinitionish = {
  methodName: "GetBlockWithTxs",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetBlockWithTxsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetBlockWithTxsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceTxDecodeDesc: UnaryMethodDefinitionish = {
  methodName: "TxDecode",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TxDecodeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TxDecodeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceTxEncodeDesc: UnaryMethodDefinitionish = {
  methodName: "TxEncode",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TxEncodeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TxEncodeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceTxEncodeAminoDesc: UnaryMethodDefinitionish = {
  methodName: "TxEncodeAmino",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TxEncodeAminoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TxEncodeAminoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ServiceTxDecodeAminoDesc: UnaryMethodDefinitionish = {
  methodName: "TxDecodeAmino",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return TxDecodeAminoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...TxDecodeAminoResponse.decode(data),
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
