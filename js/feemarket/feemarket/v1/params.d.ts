import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "feemarket.feemarket.v1";
/**
 * Params contains the required set of parameters for the EIP1559 fee market
 * plugin implementation.
 */
export interface Params {
    /**
     * Alpha is the amount we additively increase the learning rate
     * when it is above or below the target +/- threshold.
     */
    alpha: string;
    /**
     * Beta is the amount we multiplicatively decrease the learning rate
     * when it is within the target +/- threshold.
     */
    beta: string;
    /**
     * Theta is the threshold for the learning rate. If the learning rate is
     * above or below the target +/- threshold, we additively increase the
     * learning rate by Alpha. Otherwise, we multiplicatively decrease the
     * learning rate by Beta.
     */
    theta: string;
    /** MinLearningRate is the lower bound for the learning rate. */
    minLearningRate: string;
    /** MaxLearningRate is the upper bound for the learning rate. */
    maxLearningRate: string;
    /** TargetBlockUtilization is the target block utilization. */
    targetBlockUtilization: Long;
    /** MaxBlockUtilization is the maximum block utilization. */
    maxBlockUtilization: Long;
    /**
     * Window defines the window size for calculating an adaptive learning rate
     * over a moving window of blocks.
     */
    window: Long;
    /**
     * Enabled is a boolean that determines whether the EIP1559 fee market is
     * enabled.
     */
    enabled: boolean;
    /**
     * DefaultFeeDenom is the default fee denom for the EIP1559 fee market
     * used to simulate transactions if there are no fees specified
     */
    defaultFeeDenom: string;
}
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
