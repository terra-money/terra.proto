import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "../../../pob/builder/v1/genesis";
export declare const protobufPackage = "pob.builder.v1";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid?: Coin;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {
}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
    /**
     * authority is the address of the account that is authorized to update the
     * x/builder module parameters.
     */
    authority: string;
    /** params is the new parameters for the x/builder module. */
    params?: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgAuctionBid: {
    encode(message: MsgAuctionBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAuctionBid;
    fromJSON(object: any): MsgAuctionBid;
    toJSON(message: MsgAuctionBid): unknown;
    fromPartial(object: DeepPartial<MsgAuctionBid>): MsgAuctionBid;
};
export declare const MsgAuctionBidResponse: {
    encode(_: MsgAuctionBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAuctionBidResponse;
    fromJSON(_: any): MsgAuctionBidResponse;
    toJSON(_: MsgAuctionBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgAuctionBidResponse>): MsgAuctionBidResponse;
};
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
/** Msg defines the x/builder Msg service. */
export interface Msg {
    /** AuctionBid defines a method for sending bids to the x/builder module. */
    AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/builder
     * module parameters. The authority is hard-coded to the x/gov module account.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgAuctionBidDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
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
