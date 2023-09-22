import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../osmosis/tokenfactory/v1beta1/params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
export interface MsgUpdateParams {
    authority: string;
    params?: Params;
}
export interface MsgUpdateParamsResponse {
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount?: Coin;
    mintToAddress: string;
}
export interface MsgMintResponse {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount?: Coin;
    burnFromAddress: string;
}
export interface MsgBurnResponse {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
/**
 * MsgSetBeforeSendHook is the sdk.Msg type for allowing an admin account to
 * assign a CosmWasm contract to call with a BeforeSend hook
 */
export interface MsgSetBeforeSendHook {
    sender: string;
    denom: string;
    cosmwasmAddress: string;
}
/**
 * MsgSetBeforeSendHookResponse defines the response structure for an executed
 * MsgSetBeforeSendHook message.
 */
export interface MsgSetBeforeSendHookResponse {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata?: Metadata;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
export interface MsgForceTransfer {
    sender: string;
    amount?: Coin;
    transferFromAddress: string;
    transferToAddress: string;
}
export interface MsgForceTransferResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
};
export declare const MsgSetBeforeSendHook: {
    encode(message: MsgSetBeforeSendHook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetBeforeSendHook;
    fromJSON(object: any): MsgSetBeforeSendHook;
    toJSON(message: MsgSetBeforeSendHook): unknown;
    fromPartial(object: DeepPartial<MsgSetBeforeSendHook>): MsgSetBeforeSendHook;
};
export declare const MsgSetBeforeSendHookResponse: {
    encode(_: MsgSetBeforeSendHookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetBeforeSendHookResponse;
    fromJSON(_: any): MsgSetBeforeSendHookResponse;
    toJSON(_: MsgSetBeforeSendHookResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetBeforeSendHookResponse>): MsgSetBeforeSendHookResponse;
};
export declare const MsgSetDenomMetadata: {
    encode(message: MsgSetDenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetDenomMetadata;
    fromJSON(object: any): MsgSetDenomMetadata;
    toJSON(message: MsgSetDenomMetadata): unknown;
    fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
};
export declare const MsgSetDenomMetadataResponse: {
    encode(_: MsgSetDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetDenomMetadataResponse;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    toJSON(_: MsgSetDenomMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
};
export declare const MsgForceTransfer: {
    encode(message: MsgForceTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgForceTransfer;
    fromJSON(object: any): MsgForceTransfer;
    toJSON(message: MsgForceTransfer): unknown;
    fromPartial(object: DeepPartial<MsgForceTransfer>): MsgForceTransfer;
};
export declare const MsgForceTransferResponse: {
    encode(_: MsgForceTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgForceTransferResponse;
    fromJSON(_: any): MsgForceTransferResponse;
    toJSON(_: MsgForceTransferResponse): unknown;
    fromPartial(_: DeepPartial<MsgForceTransferResponse>): MsgForceTransferResponse;
};
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    CreateDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
    Mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
    Burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
    ChangeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
    SetBeforeSendHook(request: DeepPartial<MsgSetBeforeSendHook>, metadata?: grpc.Metadata): Promise<MsgSetBeforeSendHookResponse>;
    ForceTransfer(request: DeepPartial<MsgForceTransfer>, metadata?: grpc.Metadata): Promise<MsgForceTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    CreateDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
    Mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
    Burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
    ChangeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
    SetBeforeSendHook(request: DeepPartial<MsgSetBeforeSendHook>, metadata?: grpc.Metadata): Promise<MsgSetBeforeSendHookResponse>;
    ForceTransfer(request: DeepPartial<MsgForceTransfer>, metadata?: grpc.Metadata): Promise<MsgForceTransferResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgCreateDenomDesc: UnaryMethodDefinitionish;
export declare const MsgMintDesc: UnaryMethodDefinitionish;
export declare const MsgBurnDesc: UnaryMethodDefinitionish;
export declare const MsgChangeAdminDesc: UnaryMethodDefinitionish;
export declare const MsgSetDenomMetadataDesc: UnaryMethodDefinitionish;
export declare const MsgSetBeforeSendHookDesc: UnaryMethodDefinitionish;
export declare const MsgForceTransferDesc: UnaryMethodDefinitionish;
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
