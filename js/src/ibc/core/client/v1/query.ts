/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import {
  Height,
  Params,
  IdentifiedClientState,
  ConsensusStateWithHeight,
} from "../../../../ibc/core/client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "ibc.core.client.v1";

/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
  /** client state unique identifier */
  clientId: string;
}

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
  /** client state associated with the request identifier */
  clientState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  clientStates: IdentifiedClientState[];
  /** pagination response */
  pagination?: PageResponse;
}

/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
  /** client identifier */
  clientId: string;
  /** consensus state revision number */
  revisionNumber: Long;
  /** consensus state revision height */
  revisionHeight: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
  /** consensus state associated with the client identifier at the given height */
  consensusState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensusStates: ConsensusStateWithHeight[];
  /** pagination response */
  pagination?: PageResponse;
}

/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
  /** client unique identifier */
  clientId: string;
}

/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
  status: string;
}

/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {}

/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {}

/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
  /** client state associated with the request identifier */
  upgradedClientState?: Any;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  /** Consensus state associated with the request identifier */
  upgradedConsensusState?: Any;
}

const baseQueryClientStateRequest: object = { clientId: "" };

export const QueryClientStateRequest = {
  encode(message: QueryClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStateRequest } as QueryClientStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStateRequest {
    const message = { ...baseQueryClientStateRequest } as QueryClientStateRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: QueryClientStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest {
    const message = { ...baseQueryClientStateRequest } as QueryClientStateRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    return message;
  },
};

const baseQueryClientStateResponse: object = {};

export const QueryClientStateResponse = {
  encode(message: QueryClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStateResponse } as QueryClientStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStateResponse {
    const message = { ...baseQueryClientStateResponse } as QueryClientStateResponse;
    message.proof = new Uint8Array();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryClientStateResponse): unknown {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse {
    const message = { ...baseQueryClientStateResponse } as QueryClientStateResponse;
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

const baseQueryClientStatesRequest: object = {};

export const QueryClientStatesRequest = {
  encode(message: QueryClientStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStatesRequest } as QueryClientStatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatesRequest {
    const message = { ...baseQueryClientStatesRequest } as QueryClientStatesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClientStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest {
    const message = { ...baseQueryClientStatesRequest } as QueryClientStatesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClientStatesResponse: object = {};

export const QueryClientStatesResponse = {
  encode(message: QueryClientStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStatesResponse } as QueryClientStatesResponse;
    message.clientStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatesResponse {
    const message = { ...baseQueryClientStatesResponse } as QueryClientStatesResponse;
    message.clientStates = [];
    if (object.clientStates !== undefined && object.clientStates !== null) {
      for (const e of object.clientStates) {
        message.clientStates.push(IdentifiedClientState.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryClientStatesResponse): unknown {
    const obj: any = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map((e) => (e ? IdentifiedClientState.toJSON(e) : undefined));
    } else {
      obj.clientStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse {
    const message = { ...baseQueryClientStatesResponse } as QueryClientStatesResponse;
    message.clientStates = [];
    if (object.clientStates !== undefined && object.clientStates !== null) {
      for (const e of object.clientStates) {
        message.clientStates.push(IdentifiedClientState.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryConsensusStateRequest: object = {
  clientId: "",
  revisionNumber: Long.UZERO,
  revisionHeight: Long.UZERO,
  latestHeight: false,
};

export const QueryConsensusStateRequest = {
  encode(message: QueryConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConsensusStateRequest } as QueryConsensusStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64() as Long;
          break;
        case 3:
          message.revisionHeight = reader.uint64() as Long;
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConsensusStateRequest {
    const message = { ...baseQueryConsensusStateRequest } as QueryConsensusStateRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = Long.fromString(object.revisionNumber);
    } else {
      message.revisionNumber = Long.UZERO;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = Long.fromString(object.revisionHeight);
    } else {
      message.revisionHeight = Long.UZERO;
    }
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Boolean(object.latestHeight);
    } else {
      message.latestHeight = false;
    }
    return message;
  },

  toJSON(message: QueryConsensusStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest {
    const message = { ...baseQueryConsensusStateRequest } as QueryConsensusStateRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = object.revisionNumber as Long;
    } else {
      message.revisionNumber = Long.UZERO;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = object.revisionHeight as Long;
    } else {
      message.revisionHeight = Long.UZERO;
    }
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = object.latestHeight;
    } else {
      message.latestHeight = false;
    }
    return message;
  },
};

const baseQueryConsensusStateResponse: object = {};

export const QueryConsensusStateResponse = {
  encode(message: QueryConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConsensusStateResponse } as QueryConsensusStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConsensusStateResponse {
    const message = { ...baseQueryConsensusStateResponse } as QueryConsensusStateResponse;
    message.proof = new Uint8Array();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse {
    const message = { ...baseQueryConsensusStateResponse } as QueryConsensusStateResponse;
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = new Uint8Array();
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

const baseQueryConsensusStatesRequest: object = { clientId: "" };

export const QueryConsensusStatesRequest = {
  encode(message: QueryConsensusStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConsensusStatesRequest } as QueryConsensusStatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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

  fromJSON(object: any): QueryConsensusStatesRequest {
    const message = { ...baseQueryConsensusStatesRequest } as QueryConsensusStatesRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryConsensusStatesRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest {
    const message = { ...baseQueryConsensusStatesRequest } as QueryConsensusStatesRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryConsensusStatesResponse: object = {};

export const QueryConsensusStatesResponse = {
  encode(message: QueryConsensusStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConsensusStatesResponse } as QueryConsensusStatesResponse;
    message.consensusStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConsensusStatesResponse {
    const message = { ...baseQueryConsensusStatesResponse } as QueryConsensusStatesResponse;
    message.consensusStates = [];
    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      for (const e of object.consensusStates) {
        message.consensusStates.push(ConsensusStateWithHeight.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryConsensusStatesResponse): unknown {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) =>
        e ? ConsensusStateWithHeight.toJSON(e) : undefined,
      );
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse {
    const message = { ...baseQueryConsensusStatesResponse } as QueryConsensusStatesResponse;
    message.consensusStates = [];
    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      for (const e of object.consensusStates) {
        message.consensusStates.push(ConsensusStateWithHeight.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryClientStatusRequest: object = { clientId: "" };

export const QueryClientStatusRequest = {
  encode(message: QueryClientStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStatusRequest } as QueryClientStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatusRequest {
    const message = { ...baseQueryClientStatusRequest } as QueryClientStatusRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: QueryClientStatusRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest {
    const message = { ...baseQueryClientStatusRequest } as QueryClientStatusRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    return message;
  },
};

const baseQueryClientStatusResponse: object = { status: "" };

export const QueryClientStatusResponse = {
  encode(message: QueryClientStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientStatusResponse } as QueryClientStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatusResponse {
    const message = { ...baseQueryClientStatusResponse } as QueryClientStatusResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: QueryClientStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse {
    const message = { ...baseQueryClientStatusResponse } as QueryClientStatusResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseQueryClientParamsRequest: object = {};

export const QueryClientParamsRequest = {
  encode(_: QueryClientParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientParamsRequest } as QueryClientParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryClientParamsRequest {
    const message = { ...baseQueryClientParamsRequest } as QueryClientParamsRequest;
    return message;
  },

  toJSON(_: QueryClientParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest {
    const message = { ...baseQueryClientParamsRequest } as QueryClientParamsRequest;
    return message;
  },
};

const baseQueryClientParamsResponse: object = {};

export const QueryClientParamsResponse = {
  encode(message: QueryClientParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientParamsResponse } as QueryClientParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientParamsResponse {
    const message = { ...baseQueryClientParamsResponse } as QueryClientParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryClientParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse {
    const message = { ...baseQueryClientParamsResponse } as QueryClientParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryUpgradedClientStateRequest: object = {};

export const QueryUpgradedClientStateRequest = {
  encode(_: QueryUpgradedClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradedClientStateRequest } as QueryUpgradedClientStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryUpgradedClientStateRequest {
    const message = { ...baseQueryUpgradedClientStateRequest } as QueryUpgradedClientStateRequest;
    return message;
  },

  toJSON(_: QueryUpgradedClientStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest {
    const message = { ...baseQueryUpgradedClientStateRequest } as QueryUpgradedClientStateRequest;
    return message;
  },
};

const baseQueryUpgradedClientStateResponse: object = {};

export const QueryUpgradedClientStateResponse = {
  encode(message: QueryUpgradedClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradedClientStateResponse } as QueryUpgradedClientStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedClientStateResponse {
    const message = { ...baseQueryUpgradedClientStateResponse } as QueryUpgradedClientStateResponse;
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },

  toJSON(message: QueryUpgradedClientStateResponse): unknown {
    const obj: any = {};
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse {
    const message = { ...baseQueryUpgradedClientStateResponse } as QueryUpgradedClientStateResponse;
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },
};

const baseQueryUpgradedConsensusStateRequest: object = {};

export const QueryUpgradedConsensusStateRequest = {
  encode(_: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradedConsensusStateRequest } as QueryUpgradedConsensusStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    const message = { ...baseQueryUpgradedConsensusStateRequest } as QueryUpgradedConsensusStateRequest;
    return message;
  },

  toJSON(_: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = { ...baseQueryUpgradedConsensusStateRequest } as QueryUpgradedConsensusStateRequest;
    return message;
  },
};

const baseQueryUpgradedConsensusStateResponse: object = {};

export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradedConsensusStateResponse } as QueryUpgradedConsensusStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const message = { ...baseQueryUpgradedConsensusStateResponse } as QueryUpgradedConsensusStateResponse;
    if (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null) {
      message.upgradedConsensusState = Any.fromJSON(object.upgradedConsensusState);
    } else {
      message.upgradedConsensusState = undefined;
    }
    return message;
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = message.upgradedConsensusState
        ? Any.toJSON(message.upgradedConsensusState)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = { ...baseQueryUpgradedConsensusStateResponse } as QueryUpgradedConsensusStateResponse;
    if (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null) {
      message.upgradedConsensusState = Any.fromPartial(object.upgradedConsensusState);
    } else {
      message.upgradedConsensusState = undefined;
    }
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(
    request: DeepPartial<QueryClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(
    request: DeepPartial<QueryClientStatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(
    request: DeepPartial<QueryConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(
    request: DeepPartial<QueryConsensusStatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConsensusStatesResponse>;
  /** Status queries the status of an IBC client. */
  ClientStatus(
    request: DeepPartial<QueryClientStatusRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client. */
  ClientParams(
    request: DeepPartial<QueryClientParamsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientParamsResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(
    request: DeepPartial<QueryUpgradedClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedConsensusStateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ClientState = this.ClientState.bind(this);
    this.ClientStates = this.ClientStates.bind(this);
    this.ConsensusState = this.ConsensusState.bind(this);
    this.ConsensusStates = this.ConsensusStates.bind(this);
    this.ClientStatus = this.ClientStatus.bind(this);
    this.ClientParams = this.ClientParams.bind(this);
    this.UpgradedClientState = this.UpgradedClientState.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
  }

  ClientState(
    request: DeepPartial<QueryClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStateResponse> {
    return this.rpc.unary(QueryClientStateDesc, QueryClientStateRequest.fromPartial(request), metadata);
  }

  ClientStates(
    request: DeepPartial<QueryClientStatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStatesResponse> {
    return this.rpc.unary(QueryClientStatesDesc, QueryClientStatesRequest.fromPartial(request), metadata);
  }

  ConsensusState(
    request: DeepPartial<QueryConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConsensusStateResponse> {
    return this.rpc.unary(QueryConsensusStateDesc, QueryConsensusStateRequest.fromPartial(request), metadata);
  }

  ConsensusStates(
    request: DeepPartial<QueryConsensusStatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConsensusStatesResponse> {
    return this.rpc.unary(
      QueryConsensusStatesDesc,
      QueryConsensusStatesRequest.fromPartial(request),
      metadata,
    );
  }

  ClientStatus(
    request: DeepPartial<QueryClientStatusRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientStatusResponse> {
    return this.rpc.unary(QueryClientStatusDesc, QueryClientStatusRequest.fromPartial(request), metadata);
  }

  ClientParams(
    request: DeepPartial<QueryClientParamsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryClientParamsResponse> {
    return this.rpc.unary(QueryClientParamsDesc, QueryClientParamsRequest.fromPartial(request), metadata);
  }

  UpgradedClientState(
    request: DeepPartial<QueryUpgradedClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedClientStateResponse> {
    return this.rpc.unary(
      QueryUpgradedClientStateDesc,
      QueryUpgradedClientStateRequest.fromPartial(request),
      metadata,
    );
  }

  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(
      QueryUpgradedConsensusStateDesc,
      QueryUpgradedConsensusStateRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "ibc.core.client.v1.Query",
};

export const QueryClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "ClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClientStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClientStatesDesc: UnaryMethodDefinitionish = {
  methodName: "ClientStates",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClientStatesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStatesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "ConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryConsensusStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConsensusStateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryConsensusStatesDesc: UnaryMethodDefinitionish = {
  methodName: "ConsensusStates",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryConsensusStatesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConsensusStatesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClientStatusDesc: UnaryMethodDefinitionish = {
  methodName: "ClientStatus",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClientStatusRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStatusResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClientParamsDesc: UnaryMethodDefinitionish = {
  methodName: "ClientParams",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClientParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryUpgradedClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradedClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUpgradedClientStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUpgradedClientStateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradedConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUpgradedConsensusStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUpgradedConsensusStateResponse.decode(data),
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
