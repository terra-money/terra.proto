/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { CodeInfo, ContractInfo, Params } from "../../../terra/wasm/v1beta1/wasm";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "terra.wasm.v1beta1";

/** QueryCodeInfoRequest is the request type for the QueryyCodeInfo RPC method. */
export interface QueryCodeInfoRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}

/**
 * QueryCodeInfoResponse is response type for the
 * QueryyCodeInfo RPC method.
 */
export interface QueryCodeInfoResponse {
  codeInfo?: CodeInfo;
}

/** QueryByteCodeRequest is the request type for the QueryyByteCode RPC method. */
export interface QueryByteCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}

/**
 * QueryByteCodeResponse is response type for the
 * QueryyByteCode RPC method.
 */
export interface QueryByteCodeResponse {
  byteCode: Uint8Array;
}

/** QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method. */
export interface QueryContractInfoRequest {
  contractAddress: string;
}

/**
 * QueryContractInfoResponse is response type for the
 * Query/ContractInfo RPC method.
 */
export interface QueryContractInfoResponse {
  contractInfo?: ContractInfo;
}

/** QueryContractStoreRequest is the request type for the Query/ContractStore RPC method. */
export interface QueryContractStoreRequest {
  contractAddress: string;
  queryMsg: Uint8Array;
}

/**
 * QueryContractStoreResponse is response type for the
 * Query/ContractStore RPC method.
 */
export interface QueryContractStoreResponse {
  queryResult: Uint8Array;
}

/** QueryRawStoreRequest is the request type for the Query/RawStore RPC method. */
export interface QueryRawStoreRequest {
  contractAddress: string;
  key: Uint8Array;
}

/**
 * QueryRawStoreResponse is response type for the
 * Query/RawStore RPC method.
 */
export interface QueryRawStoreResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQueryCodeInfoRequest: object = { codeId: Long.UZERO };

export const QueryCodeInfoRequest = {
  encode(message: QueryCodeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeInfoRequest {
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    } else {
      message.codeId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryCodeInfoRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeInfoRequest>): QueryCodeInfoRequest {
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId as Long;
    } else {
      message.codeId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryCodeInfoResponse: object = {};

export const QueryCodeInfoResponse = {
  encode(message: QueryCodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeInfoResponse {
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromJSON(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryCodeInfoResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeInfoResponse>): QueryCodeInfoResponse {
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    return message;
  },
};

const baseQueryByteCodeRequest: object = { codeId: Long.UZERO };

export const QueryByteCodeRequest = {
  encode(message: QueryByteCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByteCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByteCodeRequest {
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    } else {
      message.codeId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryByteCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByteCodeRequest>): QueryByteCodeRequest {
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId as Long;
    } else {
      message.codeId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryByteCodeResponse: object = {};

export const QueryByteCodeResponse = {
  encode(message: QueryByteCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.byteCode.length !== 0) {
      writer.uint32(10).bytes(message.byteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByteCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    message.byteCode = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByteCodeResponse {
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    message.byteCode = new Uint8Array();
    if (object.byteCode !== undefined && object.byteCode !== null) {
      message.byteCode = bytesFromBase64(object.byteCode);
    }
    return message;
  },

  toJSON(message: QueryByteCodeResponse): unknown {
    const obj: any = {};
    message.byteCode !== undefined &&
      (obj.byteCode = base64FromBytes(message.byteCode !== undefined ? message.byteCode : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByteCodeResponse>): QueryByteCodeResponse {
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    if (object.byteCode !== undefined && object.byteCode !== null) {
      message.byteCode = object.byteCode;
    } else {
      message.byteCode = new Uint8Array();
    }
    return message;
  },
};

const baseQueryContractInfoRequest: object = { contractAddress: "" };

export const QueryContractInfoRequest = {
  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractInfoRequest } as QueryContractInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractInfoRequest {
    const message = { ...baseQueryContractInfoRequest } as QueryContractInfoRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = { ...baseQueryContractInfoRequest } as QueryContractInfoRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    return message;
  },
};

const baseQueryContractInfoResponse: object = {};

export const QueryContractInfoResponse = {
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractInfoResponse } as QueryContractInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    const message = { ...baseQueryContractInfoResponse } as QueryContractInfoResponse;
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = { ...baseQueryContractInfoResponse } as QueryContractInfoResponse;
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    return message;
  },
};

const baseQueryContractStoreRequest: object = { contractAddress: "" };

export const QueryContractStoreRequest = {
  encode(message: QueryContractStoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.queryMsg.length !== 0) {
      writer.uint32(18).bytes(message.queryMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractStoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractStoreRequest } as QueryContractStoreRequest;
    message.queryMsg = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.queryMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractStoreRequest {
    const message = { ...baseQueryContractStoreRequest } as QueryContractStoreRequest;
    message.queryMsg = new Uint8Array();
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.queryMsg !== undefined && object.queryMsg !== null) {
      message.queryMsg = bytesFromBase64(object.queryMsg);
    }
    return message;
  },

  toJSON(message: QueryContractStoreRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.queryMsg !== undefined &&
      (obj.queryMsg = base64FromBytes(message.queryMsg !== undefined ? message.queryMsg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractStoreRequest>): QueryContractStoreRequest {
    const message = { ...baseQueryContractStoreRequest } as QueryContractStoreRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.queryMsg !== undefined && object.queryMsg !== null) {
      message.queryMsg = object.queryMsg;
    } else {
      message.queryMsg = new Uint8Array();
    }
    return message;
  },
};

const baseQueryContractStoreResponse: object = {};

export const QueryContractStoreResponse = {
  encode(message: QueryContractStoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryResult.length !== 0) {
      writer.uint32(10).bytes(message.queryResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractStoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractStoreResponse } as QueryContractStoreResponse;
    message.queryResult = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryResult = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractStoreResponse {
    const message = { ...baseQueryContractStoreResponse } as QueryContractStoreResponse;
    message.queryResult = new Uint8Array();
    if (object.queryResult !== undefined && object.queryResult !== null) {
      message.queryResult = bytesFromBase64(object.queryResult);
    }
    return message;
  },

  toJSON(message: QueryContractStoreResponse): unknown {
    const obj: any = {};
    message.queryResult !== undefined &&
      (obj.queryResult = base64FromBytes(
        message.queryResult !== undefined ? message.queryResult : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractStoreResponse>): QueryContractStoreResponse {
    const message = { ...baseQueryContractStoreResponse } as QueryContractStoreResponse;
    if (object.queryResult !== undefined && object.queryResult !== null) {
      message.queryResult = object.queryResult;
    } else {
      message.queryResult = new Uint8Array();
    }
    return message;
  },
};

const baseQueryRawStoreRequest: object = { contractAddress: "" };

export const QueryRawStoreRequest = {
  encode(message: QueryRawStoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawStoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawStoreRequest {
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    message.key = new Uint8Array();
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },

  toJSON(message: QueryRawStoreRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRawStoreRequest>): QueryRawStoreRequest {
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    return message;
  },
};

const baseQueryRawStoreResponse: object = {};

export const QueryRawStoreResponse = {
  encode(message: QueryRawStoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawStoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawStoreResponse {
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    message.data = new Uint8Array();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: QueryRawStoreResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRawStoreResponse>): QueryRawStoreResponse {
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** CodeInfo returns the stored code info */
  CodeInfo(
    request: DeepPartial<QueryCodeInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCodeInfoResponse>;
  /** ByteCode returns the stored byte code */
  ByteCode(
    request: DeepPartial<QueryByteCodeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryByteCodeResponse>;
  /** ContractInfo returns the stored contract info */
  ContractInfo(
    request: DeepPartial<QueryContractInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractInfoResponse>;
  /** ContractStore return smart query result from the contract */
  ContractStore(
    request: DeepPartial<QueryContractStoreRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractStoreResponse>;
  /** RawStore return single key from the raw store data of a contract */
  RawStore(
    request: DeepPartial<QueryRawStoreRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRawStoreResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CodeInfo = this.CodeInfo.bind(this);
    this.ByteCode = this.ByteCode.bind(this);
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractStore = this.ContractStore.bind(this);
    this.RawStore = this.RawStore.bind(this);
    this.Params = this.Params.bind(this);
  }

  CodeInfo(
    request: DeepPartial<QueryCodeInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCodeInfoResponse> {
    return this.rpc.unary(QueryCodeInfoDesc, QueryCodeInfoRequest.fromPartial(request), metadata);
  }

  ByteCode(
    request: DeepPartial<QueryByteCodeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryByteCodeResponse> {
    return this.rpc.unary(QueryByteCodeDesc, QueryByteCodeRequest.fromPartial(request), metadata);
  }

  ContractInfo(
    request: DeepPartial<QueryContractInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractInfoResponse> {
    return this.rpc.unary(QueryContractInfoDesc, QueryContractInfoRequest.fromPartial(request), metadata);
  }

  ContractStore(
    request: DeepPartial<QueryContractStoreRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractStoreResponse> {
    return this.rpc.unary(QueryContractStoreDesc, QueryContractStoreRequest.fromPartial(request), metadata);
  }

  RawStore(
    request: DeepPartial<QueryRawStoreRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRawStoreResponse> {
    return this.rpc.unary(QueryRawStoreDesc, QueryRawStoreRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "terra.wasm.v1beta1.Query",
};

export const QueryCodeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "CodeInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCodeInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCodeInfoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryByteCodeDesc: UnaryMethodDefinitionish = {
  methodName: "ByteCode",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryByteCodeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryByteCodeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryContractInfoDesc: UnaryMethodDefinitionish = {
  methodName: "ContractInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractInfoResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryContractStoreDesc: UnaryMethodDefinitionish = {
  methodName: "ContractStore",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractStoreRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractStoreResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRawStoreDesc: UnaryMethodDefinitionish = {
  methodName: "RawStore",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRawStoreRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRawStoreResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
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
