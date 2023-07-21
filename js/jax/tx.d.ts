import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "jax";
export interface MsgStoreCode {
    creator: string;
    admin: string;
    code: string;
    params: string;
    /** Coins that are transferred to the contract on deploy */
    coins: Coin[];
}
export interface MsgStoreCodeResponse {
    address: string;
    result: string;
}
export interface MsgExecuteContract {
    sender: string;
    contract: string;
    method: string;
    params: string;
    /** Coins that are transferred to the contract on execution */
    coins: Coin[];
}
export interface MsgExecuteContractResponse {
    result: string;
}
export interface MsgUpdateContract {
    sender: string;
    contract: string;
    code: string;
}
export interface MsgUpdateContractResponse {
    result: string;
}
export interface MsgUpdateContractAdmin {
    creator: string;
    contract: string;
    admin: string;
}
export interface MsgUpdateContractAdminResponse {
    admin: string;
}
export interface MsgValidateCode {
    creator: string;
    code: string;
}
export interface MsgValidateCodeResponse {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
};
export declare const MsgUpdateContract: {
    encode(message: MsgUpdateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateContract;
    fromJSON(object: any): MsgUpdateContract;
    toJSON(message: MsgUpdateContract): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContract>): MsgUpdateContract;
};
export declare const MsgUpdateContractResponse: {
    encode(message: MsgUpdateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateContractResponse;
    fromJSON(object: any): MsgUpdateContractResponse;
    toJSON(message: MsgUpdateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContractResponse>): MsgUpdateContractResponse;
};
export declare const MsgUpdateContractAdmin: {
    encode(message: MsgUpdateContractAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateContractAdmin;
    fromJSON(object: any): MsgUpdateContractAdmin;
    toJSON(message: MsgUpdateContractAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContractAdmin>): MsgUpdateContractAdmin;
};
export declare const MsgUpdateContractAdminResponse: {
    encode(message: MsgUpdateContractAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateContractAdminResponse;
    fromJSON(object: any): MsgUpdateContractAdminResponse;
    toJSON(message: MsgUpdateContractAdminResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContractAdminResponse>): MsgUpdateContractAdminResponse;
};
export declare const MsgValidateCode: {
    encode(message: MsgValidateCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgValidateCode;
    fromJSON(object: any): MsgValidateCode;
    toJSON(message: MsgValidateCode): unknown;
    fromPartial(object: DeepPartial<MsgValidateCode>): MsgValidateCode;
};
export declare const MsgValidateCodeResponse: {
    encode(_: MsgValidateCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgValidateCodeResponse;
    fromJSON(_: any): MsgValidateCodeResponse;
    toJSON(_: MsgValidateCodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgValidateCodeResponse>): MsgValidateCodeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    ExecuteContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse>;
    UpdateContract(request: DeepPartial<MsgUpdateContract>, metadata?: grpc.Metadata): Promise<MsgUpdateContractResponse>;
    UpdateContractAdmin(request: DeepPartial<MsgUpdateContractAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateContractAdminResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    ValidateCode(request: DeepPartial<MsgValidateCode>, metadata?: grpc.Metadata): Promise<MsgValidateCodeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    ExecuteContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse>;
    UpdateContract(request: DeepPartial<MsgUpdateContract>, metadata?: grpc.Metadata): Promise<MsgUpdateContractResponse>;
    UpdateContractAdmin(request: DeepPartial<MsgUpdateContractAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateContractAdminResponse>;
    ValidateCode(request: DeepPartial<MsgValidateCode>, metadata?: grpc.Metadata): Promise<MsgValidateCodeResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgStoreCodeDesc: UnaryMethodDefinitionish;
export declare const MsgExecuteContractDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateContractDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateContractAdminDesc: UnaryMethodDefinitionish;
export declare const MsgValidateCodeDesc: UnaryMethodDefinitionish;
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
