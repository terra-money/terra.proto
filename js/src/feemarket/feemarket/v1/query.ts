/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
import { State, FeeDenomParam } from "../../../feemarket/feemarket/v1/genesis";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "feemarket.feemarket.v1";

/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}

/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params?: Params;
}

/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {}

/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
  state?: State;
}

/** FeeDenomParamRequest is the request type for the Query/State RPC method. */
export interface FeeDenomParamRequest {
  feeDenom: string;
}

/** FeeDenomParamResponse is the response type for the Query/State RPC method. */
export interface FeeDenomParamResponse {
  feeDenomParams: FeeDenomParam[];
}

/** BaseFeeRequest is the request type for the Query/BaseFee RPC method. */
export interface BaseFeeRequest {
  feeDenom: string;
}

/** StateResponse is the response type for the Query/BaseFee RPC method. */
export interface BaseFeeResponse {
  fee?: DecCoin;
}

const baseParamsRequest: object = {};

export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsRequest } as ParamsRequest;
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

  fromJSON(_: any): ParamsRequest {
    const message = { ...baseParamsRequest } as ParamsRequest;
    return message;
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = { ...baseParamsRequest } as ParamsRequest;
    return message;
  },
};

const baseParamsResponse: object = {};

export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsResponse } as ParamsResponse;
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

  fromJSON(object: any): ParamsResponse {
    const message = { ...baseParamsResponse } as ParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = { ...baseParamsResponse } as ParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseStateRequest: object = {};

export const StateRequest = {
  encode(_: StateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateRequest } as StateRequest;
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

  fromJSON(_: any): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    return message;
  },

  toJSON(_: StateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StateRequest>): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    return message;
  },
};

const baseStateResponse: object = {};

export const StateResponse = {
  encode(message: StateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateResponse } as StateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateResponse {
    const message = { ...baseStateResponse } as StateResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },

  toJSON(message: StateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StateResponse>): StateResponse {
    const message = { ...baseStateResponse } as StateResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },
};

const baseFeeDenomParamRequest: object = { feeDenom: "" };

export const FeeDenomParamRequest = {
  encode(message: FeeDenomParamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDenom !== "") {
      writer.uint32(10).string(message.feeDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDenomParamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeDenomParamRequest } as FeeDenomParamRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeDenomParamRequest {
    const message = { ...baseFeeDenomParamRequest } as FeeDenomParamRequest;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    return message;
  },

  toJSON(message: FeeDenomParamRequest): unknown {
    const obj: any = {};
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDenomParamRequest>): FeeDenomParamRequest {
    const message = { ...baseFeeDenomParamRequest } as FeeDenomParamRequest;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    return message;
  },
};

const baseFeeDenomParamResponse: object = {};

export const FeeDenomParamResponse = {
  encode(message: FeeDenomParamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeDenomParams) {
      FeeDenomParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDenomParamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeDenomParamResponse } as FeeDenomParamResponse;
    message.feeDenomParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenomParams.push(FeeDenomParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeDenomParamResponse {
    const message = { ...baseFeeDenomParamResponse } as FeeDenomParamResponse;
    message.feeDenomParams = [];
    if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
      for (const e of object.feeDenomParams) {
        message.feeDenomParams.push(FeeDenomParam.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FeeDenomParamResponse): unknown {
    const obj: any = {};
    if (message.feeDenomParams) {
      obj.feeDenomParams = message.feeDenomParams.map((e) => (e ? FeeDenomParam.toJSON(e) : undefined));
    } else {
      obj.feeDenomParams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDenomParamResponse>): FeeDenomParamResponse {
    const message = { ...baseFeeDenomParamResponse } as FeeDenomParamResponse;
    message.feeDenomParams = [];
    if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
      for (const e of object.feeDenomParams) {
        message.feeDenomParams.push(FeeDenomParam.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBaseFeeRequest: object = { feeDenom: "" };

export const BaseFeeRequest = {
  encode(message: BaseFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDenom !== "") {
      writer.uint32(10).string(message.feeDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseFeeRequest } as BaseFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseFeeRequest {
    const message = { ...baseBaseFeeRequest } as BaseFeeRequest;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    return message;
  },

  toJSON(message: BaseFeeRequest): unknown {
    const obj: any = {};
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<BaseFeeRequest>): BaseFeeRequest {
    const message = { ...baseBaseFeeRequest } as BaseFeeRequest;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    return message;
  },
};

const baseBaseFeeResponse: object = {};

export const BaseFeeResponse = {
  encode(message: BaseFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseFeeResponse } as BaseFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseFeeResponse {
    const message = { ...baseBaseFeeResponse } as BaseFeeResponse;
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DecCoin.fromJSON(object.fee);
    } else {
      message.fee = undefined;
    }
    return message;
  },

  toJSON(message: BaseFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BaseFeeResponse>): BaseFeeResponse {
    const message = { ...baseBaseFeeResponse } as BaseFeeResponse;
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DecCoin.fromPartial(object.fee);
    } else {
      message.fee = undefined;
    }
    return message;
  },
};

/** Query Service for the feemarket module. */
export interface Query {
  /** Params returns the current feemarket module parameters. */
  Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
  /** State returns the current feemarket module state. */
  State(request: DeepPartial<StateRequest>, metadata?: grpc.Metadata): Promise<StateResponse>;
  /** State returns the feeDenomParam of feeDenom. */
  FeeDenomParam(
    request: DeepPartial<FeeDenomParamRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FeeDenomParamResponse>;
  /** BaseFee returns the current feemarket module base fee. */
  BaseFee(request: DeepPartial<BaseFeeRequest>, metadata?: grpc.Metadata): Promise<BaseFeeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.State = this.State.bind(this);
    this.FeeDenomParam = this.FeeDenomParam.bind(this);
    this.BaseFee = this.BaseFee.bind(this);
  }

  Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, ParamsRequest.fromPartial(request), metadata);
  }

  State(request: DeepPartial<StateRequest>, metadata?: grpc.Metadata): Promise<StateResponse> {
    return this.rpc.unary(QueryStateDesc, StateRequest.fromPartial(request), metadata);
  }

  FeeDenomParam(
    request: DeepPartial<FeeDenomParamRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FeeDenomParamResponse> {
    return this.rpc.unary(QueryFeeDenomParamDesc, FeeDenomParamRequest.fromPartial(request), metadata);
  }

  BaseFee(request: DeepPartial<BaseFeeRequest>, metadata?: grpc.Metadata): Promise<BaseFeeResponse> {
    return this.rpc.unary(QueryBaseFeeDesc, BaseFeeRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = {
  serviceName: "feemarket.feemarket.v1.Query",
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryStateDesc: UnaryMethodDefinitionish = {
  methodName: "State",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return StateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...StateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryFeeDenomParamDesc: UnaryMethodDefinitionish = {
  methodName: "FeeDenomParam",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeeDenomParamRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeeDenomParamResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryBaseFeeDesc: UnaryMethodDefinitionish = {
  methodName: "BaseFee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BaseFeeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BaseFeeResponse.decode(data),
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
