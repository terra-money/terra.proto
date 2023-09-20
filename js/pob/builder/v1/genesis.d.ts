import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "pob.builder.v1";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
    params?: Params;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    maxBundleSize: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrowAccountAddress: Uint8Array;
    /** reserve_fee specifies the bid floor for the auction. */
    reserveFee?: Coin;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    minBidIncrement?: Coin;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    frontRunningProtection: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposerFee: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
