import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { State } from "../../../feemarket/feemarket/v1/genesis";
export declare const protobufPackage = "feemarket.feemarket.v1";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    params?: Params;
}
/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {
    feeDenom: string;
}
/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
    states: State[];
}
/** BaseFeeRequest is the request type for the Query/BaseFee RPC method. */
export interface BaseFeeRequest {
    feeDenom: string;
}
/** StateResponse is the response type for the Query/BaseFee RPC method. */
export interface BaseFeeResponse {
    fee?: DecCoin;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse;
};
export declare const StateRequest: {
    encode(message: StateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StateRequest;
    fromJSON(object: any): StateRequest;
    toJSON(message: StateRequest): unknown;
    fromPartial(object: DeepPartial<StateRequest>): StateRequest;
};
export declare const StateResponse: {
    encode(message: StateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StateResponse;
    fromJSON(object: any): StateResponse;
    toJSON(message: StateResponse): unknown;
    fromPartial(object: DeepPartial<StateResponse>): StateResponse;
};
export declare const BaseFeeRequest: {
    encode(message: BaseFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BaseFeeRequest;
    fromJSON(object: any): BaseFeeRequest;
    toJSON(message: BaseFeeRequest): unknown;
    fromPartial(object: DeepPartial<BaseFeeRequest>): BaseFeeRequest;
};
export declare const BaseFeeResponse: {
    encode(message: BaseFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BaseFeeResponse;
    fromJSON(object: any): BaseFeeResponse;
    toJSON(message: BaseFeeResponse): unknown;
    fromPartial(object: DeepPartial<BaseFeeResponse>): BaseFeeResponse;
};
/** Query Service for the feemarket module. */
export interface Query {
    /** Params returns the current feemarket module parameters. */
    Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
    /** State returns the current feemarket module state. */
    State(request: DeepPartial<StateRequest>, metadata?: grpc.Metadata): Promise<StateResponse>;
    /** BaseFee returns the current feemarket module base fee. */
    BaseFee(request: DeepPartial<BaseFeeRequest>, metadata?: grpc.Metadata): Promise<BaseFeeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
    State(request: DeepPartial<StateRequest>, metadata?: grpc.Metadata): Promise<StateResponse>;
    BaseFee(request: DeepPartial<BaseFeeRequest>, metadata?: grpc.Metadata): Promise<BaseFeeResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryStateDesc: UnaryMethodDefinitionish;
export declare const QueryBaseFeeDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
declare type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
