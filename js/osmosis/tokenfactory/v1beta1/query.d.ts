import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../osmosis/tokenfactory/v1beta1/params";
import { DenomAuthorityMetadata } from "../../../osmosis/tokenfactory/v1beta1/authorityMetadata";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata?: DenomAuthorityMetadata;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
export interface QueryBeforeSendHookAddressRequest {
    denom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
    cosmwasmAddress: string;
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
export declare const QueryDenomAuthorityMetadataRequest: {
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomAuthorityMetadataRequest;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    toJSON(message: QueryDenomAuthorityMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomAuthorityMetadataResponse;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    toJSON(message: QueryDenomAuthorityMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    encode(message: QueryDenomsFromCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomsFromCreatorRequest;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    toJSON(message: QueryDenomsFromCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    encode(message: QueryDenomsFromCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomsFromCreatorResponse;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    toJSON(message: QueryDenomsFromCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
};
export declare const QueryBeforeSendHookAddressRequest: {
    encode(message: QueryBeforeSendHookAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBeforeSendHookAddressRequest;
    fromJSON(object: any): QueryBeforeSendHookAddressRequest;
    toJSON(message: QueryBeforeSendHookAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryBeforeSendHookAddressRequest>): QueryBeforeSendHookAddressRequest;
};
export declare const QueryBeforeSendHookAddressResponse: {
    encode(message: QueryBeforeSendHookAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBeforeSendHookAddressResponse;
    fromJSON(object: any): QueryBeforeSendHookAddressResponse;
    toJSON(message: QueryBeforeSendHookAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryBeforeSendHookAddressResponse>): QueryBeforeSendHookAddressResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    DenomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    DenomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
    /**
     * BeforeSendHookAddress defines a gRPC query method for
     * getting the address registered for the before send hook.
     */
    BeforeSendHookAddress(request: DeepPartial<QueryBeforeSendHookAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    DenomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;
    DenomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
    BeforeSendHookAddress(request: DeepPartial<QueryBeforeSendHookAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryDenomAuthorityMetadataDesc: UnaryMethodDefinitionish;
export declare const QueryDenomsFromCreatorDesc: UnaryMethodDefinitionish;
export declare const QueryBeforeSendHookAddressDesc: UnaryMethodDefinitionish;
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
