"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.FeeDenomParam = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../feemarket/feemarket/v1/params");
exports.protobufPackage = "feemarket.feemarket.v1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== undefined) {
            exports.State.encode(message.state, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.feeDenomParams) {
            exports.FeeDenomParam.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.feeDenomParams = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = exports.State.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.feeDenomParams.push(exports.FeeDenomParam.decode(reader, reader.uint32()));
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
        message.feeDenomParams = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = exports.State.fromJSON(object.state);
        }
        else {
            message.state = undefined;
        }
        if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
            for (const e of object.feeDenomParams) {
                message.feeDenomParams.push(exports.FeeDenomParam.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.state !== undefined && (obj.state = message.state ? exports.State.toJSON(message.state) : undefined);
        if (message.feeDenomParams) {
            obj.feeDenomParams = message.feeDenomParams.map((e) => (e ? exports.FeeDenomParam.toJSON(e) : undefined));
        }
        else {
            obj.feeDenomParams = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.feeDenomParams = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = exports.State.fromPartial(object.state);
        }
        else {
            message.state = undefined;
        }
        if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
            for (const e of object.feeDenomParams) {
                message.feeDenomParams.push(exports.FeeDenomParam.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFeeDenomParam = { feeDenom: "", minBaseFee: "", baseFee: "" };
exports.FeeDenomParam = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feeDenom !== "") {
            writer.uint32(10).string(message.feeDenom);
        }
        if (message.minBaseFee !== "") {
            writer.uint32(18).string(message.minBaseFee);
        }
        if (message.baseFee !== "") {
            writer.uint32(26).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFeeDenomParam);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeDenom = reader.string();
                    break;
                case 2:
                    message.minBaseFee = reader.string();
                    break;
                case 3:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFeeDenomParam);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = String(object.feeDenom);
        }
        else {
            message.feeDenom = "";
        }
        if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
            message.minBaseFee = String(object.minBaseFee);
        }
        else {
            message.minBaseFee = "";
        }
        if (object.baseFee !== undefined && object.baseFee !== null) {
            message.baseFee = String(object.baseFee);
        }
        else {
            message.baseFee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
        message.minBaseFee !== undefined && (obj.minBaseFee = message.minBaseFee);
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseFeeDenomParam);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = object.feeDenom;
        }
        else {
            message.feeDenom = "";
        }
        if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
            message.minBaseFee = object.minBaseFee;
        }
        else {
            message.minBaseFee = "";
        }
        if (object.baseFee !== undefined && object.baseFee !== null) {
            message.baseFee = object.baseFee;
        }
        else {
            message.baseFee = "";
        }
        return message;
    },
};
const baseState = { learningRate: "", window: long_1.default.UZERO, index: long_1.default.UZERO };
exports.State = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.learningRate !== "") {
            writer.uint32(10).string(message.learningRate);
        }
        writer.uint32(18).fork();
        for (const v of message.window) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.index.isZero()) {
            writer.uint32(24).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseState);
        message.window = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.learningRate = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.window.push(reader.uint64());
                        }
                    }
                    else {
                        message.window.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.index = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseState);
        message.window = [];
        if (object.learningRate !== undefined && object.learningRate !== null) {
            message.learningRate = String(object.learningRate);
        }
        else {
            message.learningRate = "";
        }
        if (object.window !== undefined && object.window !== null) {
            for (const e of object.window) {
                message.window.push(long_1.default.fromString(e));
            }
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = long_1.default.fromString(object.index);
        }
        else {
            message.index = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.learningRate !== undefined && (obj.learningRate = message.learningRate);
        if (message.window) {
            obj.window = message.window.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.window = [];
        }
        message.index !== undefined && (obj.index = (message.index || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseState);
        message.window = [];
        if (object.learningRate !== undefined && object.learningRate !== null) {
            message.learningRate = object.learningRate;
        }
        else {
            message.learningRate = "";
        }
        if (object.window !== undefined && object.window !== null) {
            for (const e of object.window) {
                message.window.push(e);
            }
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = long_1.default.UZERO;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map