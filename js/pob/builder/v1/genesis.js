"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "pob.builder.v1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseParams = { maxBundleSize: 0, frontRunningProtection: false, proposerFee: "" };
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxBundleSize !== 0) {
            writer.uint32(8).uint32(message.maxBundleSize);
        }
        if (message.escrowAccountAddress.length !== 0) {
            writer.uint32(18).bytes(message.escrowAccountAddress);
        }
        if (message.reserveFee !== undefined) {
            coin_1.Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
        }
        if (message.minBidIncrement !== undefined) {
            coin_1.Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
        }
        if (message.frontRunningProtection === true) {
            writer.uint32(40).bool(message.frontRunningProtection);
        }
        if (message.proposerFee !== "") {
            writer.uint32(50).string(message.proposerFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.escrowAccountAddress = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBundleSize = reader.uint32();
                    break;
                case 2:
                    message.escrowAccountAddress = reader.bytes();
                    break;
                case 3:
                    message.reserveFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.minBidIncrement = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.frontRunningProtection = reader.bool();
                    break;
                case 6:
                    message.proposerFee = reader.string();
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
        message.escrowAccountAddress = new Uint8Array();
        if (object.maxBundleSize !== undefined && object.maxBundleSize !== null) {
            message.maxBundleSize = Number(object.maxBundleSize);
        }
        else {
            message.maxBundleSize = 0;
        }
        if (object.escrowAccountAddress !== undefined && object.escrowAccountAddress !== null) {
            message.escrowAccountAddress = bytesFromBase64(object.escrowAccountAddress);
        }
        if (object.reserveFee !== undefined && object.reserveFee !== null) {
            message.reserveFee = coin_1.Coin.fromJSON(object.reserveFee);
        }
        else {
            message.reserveFee = undefined;
        }
        if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
            message.minBidIncrement = coin_1.Coin.fromJSON(object.minBidIncrement);
        }
        else {
            message.minBidIncrement = undefined;
        }
        if (object.frontRunningProtection !== undefined && object.frontRunningProtection !== null) {
            message.frontRunningProtection = Boolean(object.frontRunningProtection);
        }
        else {
            message.frontRunningProtection = false;
        }
        if (object.proposerFee !== undefined && object.proposerFee !== null) {
            message.proposerFee = String(object.proposerFee);
        }
        else {
            message.proposerFee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxBundleSize !== undefined && (obj.maxBundleSize = message.maxBundleSize);
        message.escrowAccountAddress !== undefined &&
            (obj.escrowAccountAddress = base64FromBytes(message.escrowAccountAddress !== undefined ? message.escrowAccountAddress : new Uint8Array()));
        message.reserveFee !== undefined &&
            (obj.reserveFee = message.reserveFee ? coin_1.Coin.toJSON(message.reserveFee) : undefined);
        message.minBidIncrement !== undefined &&
            (obj.minBidIncrement = message.minBidIncrement ? coin_1.Coin.toJSON(message.minBidIncrement) : undefined);
        message.frontRunningProtection !== undefined &&
            (obj.frontRunningProtection = message.frontRunningProtection);
        message.proposerFee !== undefined && (obj.proposerFee = message.proposerFee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.maxBundleSize !== undefined && object.maxBundleSize !== null) {
            message.maxBundleSize = object.maxBundleSize;
        }
        else {
            message.maxBundleSize = 0;
        }
        if (object.escrowAccountAddress !== undefined && object.escrowAccountAddress !== null) {
            message.escrowAccountAddress = object.escrowAccountAddress;
        }
        else {
            message.escrowAccountAddress = new Uint8Array();
        }
        if (object.reserveFee !== undefined && object.reserveFee !== null) {
            message.reserveFee = coin_1.Coin.fromPartial(object.reserveFee);
        }
        else {
            message.reserveFee = undefined;
        }
        if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
            message.minBidIncrement = coin_1.Coin.fromPartial(object.minBidIncrement);
        }
        else {
            message.minBidIncrement = undefined;
        }
        if (object.frontRunningProtection !== undefined && object.frontRunningProtection !== null) {
            message.frontRunningProtection = object.frontRunningProtection;
        }
        else {
            message.frontRunningProtection = false;
        }
        if (object.proposerFee !== undefined && object.proposerFee !== null) {
            message.proposerFee = object.proposerFee;
        }
        else {
            message.proposerFee = "";
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