import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../jax/params";
export declare const protobufPackage = "jax";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetContractStorageRequest {
    contract: string;
    key: string;
    field: string;
}
export interface QueryGetContractStorageResponse {
    data: string;
}
export interface QueryGetContractInfoRequest {
    contract: string;
}
export interface QueryGetContractInfoResponse {
    creator: string;
    code: string;
    compiledCode: string;
}
export interface QueryGetContractStorageFieldsRequest {
    contract: string;
    key: string;
}
export interface QueryGetContractStorageFieldsResponse {
    keys: string[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetContractStorageRequest: {
    encode(message: QueryGetContractStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractStorageRequest;
    fromJSON(object: any): QueryGetContractStorageRequest;
    toJSON(message: QueryGetContractStorageRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetContractStorageRequest>): QueryGetContractStorageRequest;
};
export declare const QueryGetContractStorageResponse: {
    encode(message: QueryGetContractStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractStorageResponse;
    fromJSON(object: any): QueryGetContractStorageResponse;
    toJSON(message: QueryGetContractStorageResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetContractStorageResponse>): QueryGetContractStorageResponse;
};
export declare const QueryGetContractInfoRequest: {
    encode(message: QueryGetContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractInfoRequest;
    fromJSON(object: any): QueryGetContractInfoRequest;
    toJSON(message: QueryGetContractInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetContractInfoRequest>): QueryGetContractInfoRequest;
};
export declare const QueryGetContractInfoResponse: {
    encode(message: QueryGetContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractInfoResponse;
    fromJSON(object: any): QueryGetContractInfoResponse;
    toJSON(message: QueryGetContractInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetContractInfoResponse>): QueryGetContractInfoResponse;
};
export declare const QueryGetContractStorageFieldsRequest: {
    encode(message: QueryGetContractStorageFieldsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractStorageFieldsRequest;
    fromJSON(object: any): QueryGetContractStorageFieldsRequest;
    toJSON(message: QueryGetContractStorageFieldsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetContractStorageFieldsRequest>): QueryGetContractStorageFieldsRequest;
};
export declare const QueryGetContractStorageFieldsResponse: {
    encode(message: QueryGetContractStorageFieldsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGetContractStorageFieldsResponse;
    fromJSON(object: any): QueryGetContractStorageFieldsResponse;
    toJSON(message: QueryGetContractStorageFieldsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetContractStorageFieldsResponse>): QueryGetContractStorageFieldsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** Queries smart contract state */
    GetContractStorage(request: DeepPartial<QueryGetContractStorageRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractStorageResponse>;
    /** Queries a list of GetContractInfo items. */
    GetContractInfo(request: DeepPartial<QueryGetContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractInfoResponse>;
    /** Queries a list of GetContractStorageFields items. */
    GetContractStorageFields(request: DeepPartial<QueryGetContractStorageFieldsRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractStorageFieldsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    GetContractStorage(request: DeepPartial<QueryGetContractStorageRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractStorageResponse>;
    GetContractInfo(request: DeepPartial<QueryGetContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractInfoResponse>;
    GetContractStorageFields(request: DeepPartial<QueryGetContractStorageFieldsRequest>, metadata?: grpc.Metadata): Promise<QueryGetContractStorageFieldsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryGetContractStorageDesc: UnaryMethodDefinitionish;
export declare const QueryGetContractInfoDesc: UnaryMethodDefinitionish;
export declare const QueryGetContractStorageFieldsDesc: UnaryMethodDefinitionish;
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
