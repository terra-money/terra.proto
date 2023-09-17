import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "router.v1";
/** GenesisState defines the router genesis state */
export interface GenesisState {
    params?: Params;
    /**
     * key - information about forwarded packet: src_channel
     * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
     * information about original packet for refunding if necessary: retries,
     * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
     */
    inFlightPackets: {
        [key: string]: InFlightPacket;
    };
}
export interface GenesisState_InFlightPacketsEntry {
    key: string;
    value?: InFlightPacket;
}
/** Params defines the set of IBC router parameters. */
export interface Params {
    feePercentage: string;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacket {
    originalSenderAddress: string;
    refundChannelId: string;
    refundPortId: string;
    packetSrcChannelId: string;
    packetSrcPortId: string;
    packetTimeoutTimestamp: Long;
    packetTimeoutHeight: string;
    packetData: Uint8Array;
    refundSequence: Long;
    retriesRemaining: number;
    timeout: Long;
    nonrefundable: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisState_InFlightPacketsEntry: {
    encode(message: GenesisState_InFlightPacketsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_InFlightPacketsEntry;
    fromJSON(object: any): GenesisState_InFlightPacketsEntry;
    toJSON(message: GenesisState_InFlightPacketsEntry): unknown;
    fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const InFlightPacket: {
    encode(message: InFlightPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InFlightPacket;
    fromJSON(object: any): InFlightPacket;
    toJSON(message: InFlightPacket): unknown;
    fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
