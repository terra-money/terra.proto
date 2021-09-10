/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.tx.v1beta1";

/**
 * ComputeTaxRequest is the request type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxRequest {
  /** tx is the transaction to simulate. */
  tx?: Tx;
}

/**
 * ComputeTaxResponse is the response type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxResponse {
  /** amount is the amount of coins to be paid as a fee */
  taxAmount: Coin[];
}

const baseComputeTaxRequest: object = {};

export const ComputeTaxRequest = {
  encode(message: ComputeTaxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputeTaxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
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

  fromJSON(object: any): ComputeTaxRequest {
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },

  toJSON(message: ComputeTaxRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ComputeTaxRequest>): ComputeTaxRequest {
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
};

const baseComputeTaxResponse: object = {};

export const ComputeTaxResponse = {
  encode(message: ComputeTaxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputeTaxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComputeTaxResponse {
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    if (object.taxAmount !== undefined && object.taxAmount !== null) {
      for (const e of object.taxAmount) {
        message.taxAmount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ComputeTaxResponse): unknown {
    const obj: any = {};
    if (message.taxAmount) {
      obj.taxAmount = message.taxAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxAmount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ComputeTaxResponse>): ComputeTaxResponse {
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    if (object.taxAmount !== undefined && object.taxAmount !== null) {
      for (const e of object.taxAmount) {
        message.taxAmount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Service defines a gRPC service for interacting with transactions. */
export const ServiceService = {
  /** EstimateFee simulates executing a transaction for estimating gas usage. */
  computeTax: {
    path: "/terra.tx.v1beta1.Service/ComputeTax",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ComputeTaxRequest) => Buffer.from(ComputeTaxRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ComputeTaxRequest.decode(value),
    responseSerialize: (value: ComputeTaxResponse) => Buffer.from(ComputeTaxResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ComputeTaxResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  /** EstimateFee simulates executing a transaction for estimating gas usage. */
  computeTax: handleUnaryCall<ComputeTaxRequest, ComputeTaxResponse>;
}

export interface ServiceClient extends Client {
  /** EstimateFee simulates executing a transaction for estimating gas usage. */
  computeTax(
    request: ComputeTaxRequest,
    callback: (error: ServiceError | null, response: ComputeTaxResponse) => void,
  ): ClientUnaryCall;
  computeTax(
    request: ComputeTaxRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ComputeTaxResponse) => void,
  ): ClientUnaryCall;
  computeTax(
    request: ComputeTaxRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ComputeTaxResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(
  ServiceService,
  "terra.tx.v1beta1.Service",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
};

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
