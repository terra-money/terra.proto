"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InFlightPacket = exports.Params = exports.GenesisState_InFlightPacketsEntry = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "router.v1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.inFlightPackets).forEach(([key, value]) => {
            exports.GenesisState_InFlightPacketsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.inFlightPackets = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = exports.GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.inFlightPackets[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.inFlightPackets = {};
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.inFlightPackets !== undefined && object.inFlightPackets !== null) {
            Object.entries(object.inFlightPackets).forEach(([key, value]) => {
                message.inFlightPackets[key] = exports.InFlightPacket.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        obj.inFlightPackets = {};
        if (message.inFlightPackets) {
            Object.entries(message.inFlightPackets).forEach(([k, v]) => {
                obj.inFlightPackets[k] = exports.InFlightPacket.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.inFlightPackets = {};
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.inFlightPackets !== undefined && object.inFlightPackets !== null) {
            Object.entries(object.inFlightPackets).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.inFlightPackets[key] = exports.InFlightPacket.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseGenesisState_InFlightPacketsEntry = { key: "" };
exports.GenesisState_InFlightPacketsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState_InFlightPacketsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.InFlightPacket.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState_InFlightPacketsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.InFlightPacket.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.InFlightPacket.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState_InFlightPacketsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.InFlightPacket.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseParams = { feePercentage: "" };
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feePercentage !== "") {
            writer.uint32(10).string(message.feePercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feePercentage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParams);
        if (object.feePercentage !== undefined && object.feePercentage !== null) {
            message.feePercentage = String(object.feePercentage);
        }
        else {
            message.feePercentage = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.feePercentage !== undefined && object.feePercentage !== null) {
            message.feePercentage = object.feePercentage;
        }
        else {
            message.feePercentage = "";
        }
        return message;
    },
};
const baseInFlightPacket = {
    originalSenderAddress: "",
    refundChannelId: "",
    refundPortId: "",
    packetSrcChannelId: "",
    packetSrcPortId: "",
    packetTimeoutTimestamp: long_1.default.UZERO,
    packetTimeoutHeight: "",
    refundSequence: long_1.default.UZERO,
    retriesRemaining: 0,
    timeout: long_1.default.UZERO,
    nonrefundable: false,
};
exports.InFlightPacket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originalSenderAddress !== "") {
            writer.uint32(10).string(message.originalSenderAddress);
        }
        if (message.refundChannelId !== "") {
            writer.uint32(18).string(message.refundChannelId);
        }
        if (message.refundPortId !== "") {
            writer.uint32(26).string(message.refundPortId);
        }
        if (message.packetSrcChannelId !== "") {
            writer.uint32(34).string(message.packetSrcChannelId);
        }
        if (message.packetSrcPortId !== "") {
            writer.uint32(42).string(message.packetSrcPortId);
        }
        if (!message.packetTimeoutTimestamp.isZero()) {
            writer.uint32(48).uint64(message.packetTimeoutTimestamp);
        }
        if (message.packetTimeoutHeight !== "") {
            writer.uint32(58).string(message.packetTimeoutHeight);
        }
        if (message.packetData.length !== 0) {
            writer.uint32(66).bytes(message.packetData);
        }
        if (!message.refundSequence.isZero()) {
            writer.uint32(72).uint64(message.refundSequence);
        }
        if (message.retriesRemaining !== 0) {
            writer.uint32(80).int32(message.retriesRemaining);
        }
        if (!message.timeout.isZero()) {
            writer.uint32(88).uint64(message.timeout);
        }
        if (message.nonrefundable === true) {
            writer.uint32(96).bool(message.nonrefundable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInFlightPacket);
        message.packetData = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originalSenderAddress = reader.string();
                    break;
                case 2:
                    message.refundChannelId = reader.string();
                    break;
                case 3:
                    message.refundPortId = reader.string();
                    break;
                case 4:
                    message.packetSrcChannelId = reader.string();
                    break;
                case 5:
                    message.packetSrcPortId = reader.string();
                    break;
                case 6:
                    message.packetTimeoutTimestamp = reader.uint64();
                    break;
                case 7:
                    message.packetTimeoutHeight = reader.string();
                    break;
                case 8:
                    message.packetData = reader.bytes();
                    break;
                case 9:
                    message.refundSequence = reader.uint64();
                    break;
                case 10:
                    message.retriesRemaining = reader.int32();
                    break;
                case 11:
                    message.timeout = reader.uint64();
                    break;
                case 12:
                    message.nonrefundable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInFlightPacket);
        message.packetData = new Uint8Array();
        if (object.originalSenderAddress !== undefined && object.originalSenderAddress !== null) {
            message.originalSenderAddress = String(object.originalSenderAddress);
        }
        else {
            message.originalSenderAddress = "";
        }
        if (object.refundChannelId !== undefined && object.refundChannelId !== null) {
            message.refundChannelId = String(object.refundChannelId);
        }
        else {
            message.refundChannelId = "";
        }
        if (object.refundPortId !== undefined && object.refundPortId !== null) {
            message.refundPortId = String(object.refundPortId);
        }
        else {
            message.refundPortId = "";
        }
        if (object.packetSrcChannelId !== undefined && object.packetSrcChannelId !== null) {
            message.packetSrcChannelId = String(object.packetSrcChannelId);
        }
        else {
            message.packetSrcChannelId = "";
        }
        if (object.packetSrcPortId !== undefined && object.packetSrcPortId !== null) {
            message.packetSrcPortId = String(object.packetSrcPortId);
        }
        else {
            message.packetSrcPortId = "";
        }
        if (object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null) {
            message.packetTimeoutTimestamp = long_1.default.fromString(object.packetTimeoutTimestamp);
        }
        else {
            message.packetTimeoutTimestamp = long_1.default.UZERO;
        }
        if (object.packetTimeoutHeight !== undefined && object.packetTimeoutHeight !== null) {
            message.packetTimeoutHeight = String(object.packetTimeoutHeight);
        }
        else {
            message.packetTimeoutHeight = "";
        }
        if (object.packetData !== undefined && object.packetData !== null) {
            message.packetData = bytesFromBase64(object.packetData);
        }
        if (object.refundSequence !== undefined && object.refundSequence !== null) {
            message.refundSequence = long_1.default.fromString(object.refundSequence);
        }
        else {
            message.refundSequence = long_1.default.UZERO;
        }
        if (object.retriesRemaining !== undefined && object.retriesRemaining !== null) {
            message.retriesRemaining = Number(object.retriesRemaining);
        }
        else {
            message.retriesRemaining = 0;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = long_1.default.fromString(object.timeout);
        }
        else {
            message.timeout = long_1.default.UZERO;
        }
        if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
            message.nonrefundable = Boolean(object.nonrefundable);
        }
        else {
            message.nonrefundable = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originalSenderAddress !== undefined &&
            (obj.originalSenderAddress = message.originalSenderAddress);
        message.refundChannelId !== undefined && (obj.refundChannelId = message.refundChannelId);
        message.refundPortId !== undefined && (obj.refundPortId = message.refundPortId);
        message.packetSrcChannelId !== undefined && (obj.packetSrcChannelId = message.packetSrcChannelId);
        message.packetSrcPortId !== undefined && (obj.packetSrcPortId = message.packetSrcPortId);
        message.packetTimeoutTimestamp !== undefined &&
            (obj.packetTimeoutTimestamp = (message.packetTimeoutTimestamp || long_1.default.UZERO).toString());
        message.packetTimeoutHeight !== undefined && (obj.packetTimeoutHeight = message.packetTimeoutHeight);
        message.packetData !== undefined &&
            (obj.packetData = base64FromBytes(message.packetData !== undefined ? message.packetData : new Uint8Array()));
        message.refundSequence !== undefined &&
            (obj.refundSequence = (message.refundSequence || long_1.default.UZERO).toString());
        message.retriesRemaining !== undefined && (obj.retriesRemaining = message.retriesRemaining);
        message.timeout !== undefined && (obj.timeout = (message.timeout || long_1.default.UZERO).toString());
        message.nonrefundable !== undefined && (obj.nonrefundable = message.nonrefundable);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseInFlightPacket);
        if (object.originalSenderAddress !== undefined && object.originalSenderAddress !== null) {
            message.originalSenderAddress = object.originalSenderAddress;
        }
        else {
            message.originalSenderAddress = "";
        }
        if (object.refundChannelId !== undefined && object.refundChannelId !== null) {
            message.refundChannelId = object.refundChannelId;
        }
        else {
            message.refundChannelId = "";
        }
        if (object.refundPortId !== undefined && object.refundPortId !== null) {
            message.refundPortId = object.refundPortId;
        }
        else {
            message.refundPortId = "";
        }
        if (object.packetSrcChannelId !== undefined && object.packetSrcChannelId !== null) {
            message.packetSrcChannelId = object.packetSrcChannelId;
        }
        else {
            message.packetSrcChannelId = "";
        }
        if (object.packetSrcPortId !== undefined && object.packetSrcPortId !== null) {
            message.packetSrcPortId = object.packetSrcPortId;
        }
        else {
            message.packetSrcPortId = "";
        }
        if (object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null) {
            message.packetTimeoutTimestamp = object.packetTimeoutTimestamp;
        }
        else {
            message.packetTimeoutTimestamp = long_1.default.UZERO;
        }
        if (object.packetTimeoutHeight !== undefined && object.packetTimeoutHeight !== null) {
            message.packetTimeoutHeight = object.packetTimeoutHeight;
        }
        else {
            message.packetTimeoutHeight = "";
        }
        if (object.packetData !== undefined && object.packetData !== null) {
            message.packetData = object.packetData;
        }
        else {
            message.packetData = new Uint8Array();
        }
        if (object.refundSequence !== undefined && object.refundSequence !== null) {
            message.refundSequence = object.refundSequence;
        }
        else {
            message.refundSequence = long_1.default.UZERO;
        }
        if (object.retriesRemaining !== undefined && object.retriesRemaining !== null) {
            message.retriesRemaining = object.retriesRemaining;
        }
        else {
            message.retriesRemaining = 0;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        else {
            message.timeout = long_1.default.UZERO;
        }
        if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
            message.nonrefundable = object.nonrefundable;
        }
        else {
            message.nonrefundable = false;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map