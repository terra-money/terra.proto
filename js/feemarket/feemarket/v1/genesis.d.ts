import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
export declare const protobufPackage = "feemarket.feemarket.v1";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /**
     * Params are the parameters for the feemarket module. These parameters
     * can be utilized to implement both the base EIP-1559 fee market and
     * and the AIMD EIP-1559 fee market.
     */
    params?: Params;
    /** States contains the current states of the AIMD fee market for all FeeDenom. */
    states: State[];
}
/**
 * State is utilized to track the current state of the fee market. This includes
 * the current base fee, learning rate, and block utilization within the
 * specified AIMD window.
 */
export interface State {
    /** FeeDenom is the denom that will be used for all fee payments. */
    feeDenom: string;
    /**
     * MinBaseFee determines the initial base fee of the module and the global
     * minimum for the network. This is denominated in fee per gas unit.
     */
    minBaseFee: string;
    /**
     * BaseFee is the current base fee. This is denominated in the fee per gas
     * unit.
     */
    baseFee: string;
    /** LearningRate is the current learning rate. */
    learningRate: string;
    /**
     * Window contains a list of the last blocks' utilization values. This is used
     * to calculate the next base fee. This stores the number of units of gas
     * consumed per block.
     */
    window: Long[];
    /** Index is the index of the current block in the block utilization window. */
    index: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial(object: DeepPartial<State>): State;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
