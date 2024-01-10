import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
import { State } from "../../../feemarket/feemarket/v1/genesis";
export declare const protobufPackage = "feemarket.feemarket.v1";
/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the feemarket module.
 */
export interface MsgParams {
    /** Params defines the new parameters for the feemarket module. */
    params?: Params;
    /**
     * Authority defines the authority that is updating the feemarket module
     * parameters.
     */
    authority: string;
}
/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {
}
/**
 * MsgState defines the Msg/State request type. It contains the
 * new state of feeDenom for the feemarket module.
 */
export interface MsgState {
    /** State defines the new state for the feemarket module. */
    state?: State;
    /**
     * Authority defines the authority that is updating the feemarket module
     * parameters.
     */
    authority: string;
}
/** MsgStateResponse defines the Msg/State response type. */
export interface MsgStateResponse {
}
export declare const MsgParams: {
    encode(message: MsgParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgParams;
    fromJSON(object: any): MsgParams;
    toJSON(message: MsgParams): unknown;
    fromPartial(object: DeepPartial<MsgParams>): MsgParams;
};
export declare const MsgParamsResponse: {
    encode(_: MsgParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgParamsResponse;
    fromJSON(_: any): MsgParamsResponse;
    toJSON(_: MsgParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgParamsResponse>): MsgParamsResponse;
};
export declare const MsgState: {
    encode(message: MsgState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgState;
    fromJSON(object: any): MsgState;
    toJSON(message: MsgState): unknown;
    fromPartial(object: DeepPartial<MsgState>): MsgState;
};
export declare const MsgStateResponse: {
    encode(_: MsgStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgStateResponse;
    fromJSON(_: any): MsgStateResponse;
    toJSON(_: MsgStateResponse): unknown;
    fromPartial(_: DeepPartial<MsgStateResponse>): MsgStateResponse;
};
/**
 * Message service defines the types of messages supported by the feemarket
 * module.
 */
export interface Msg {
    /** Params defines a method for updating the feemarket module parameters. */
    Params(request: DeepPartial<MsgParams>, metadata?: grpc.Metadata): Promise<MsgParamsResponse>;
    /** State defines a method for updating the feemarket module states. */
    State(request: DeepPartial<MsgState>, metadata?: grpc.Metadata): Promise<MsgStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<MsgParams>, metadata?: grpc.Metadata): Promise<MsgParamsResponse>;
    State(request: DeepPartial<MsgState>, metadata?: grpc.Metadata): Promise<MsgStateResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgParamsDesc: UnaryMethodDefinitionish;
export declare const MsgStateDesc: UnaryMethodDefinitionish;
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
