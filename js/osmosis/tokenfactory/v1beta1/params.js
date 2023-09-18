"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
const baseParams = { denomCreationGasConsume: long_1.default.UZERO };
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.denomCreationGasConsume.isZero()) {
            writer.uint32(16).uint64(message.denomCreationGasConsume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.denomCreationFee = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.denomCreationGasConsume = reader.uint64();
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
        message.denomCreationFee = [];
        if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
            for (const e of object.denomCreationFee) {
                message.denomCreationFee.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
            message.denomCreationGasConsume = long_1.default.fromString(object.denomCreationGasConsume);
        }
        else {
            message.denomCreationGasConsume = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.denomCreationFee = [];
        }
        message.denomCreationGasConsume !== undefined &&
            (obj.denomCreationGasConsume = (message.denomCreationGasConsume || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        message.denomCreationFee = [];
        if (object.denomCreationFee !== undefined && object.denomCreationFee !== null) {
            for (const e of object.denomCreationFee) {
                message.denomCreationFee.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
            message.denomCreationGasConsume = object.denomCreationGasConsume;
        }
        else {
            message.denomCreationGasConsume = long_1.default.UZERO;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=params.js.map