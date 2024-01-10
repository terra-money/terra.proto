"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "feemarket.feemarket.v1";
const baseParams = {
    alpha: "",
    beta: "",
    theta: "",
    delta: "",
    minLearningRate: "",
    maxLearningRate: "",
    targetBlockUtilization: long_1.default.UZERO,
    maxBlockUtilization: long_1.default.UZERO,
    window: long_1.default.UZERO,
    enabled: false,
};
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alpha !== "") {
            writer.uint32(10).string(message.alpha);
        }
        if (message.beta !== "") {
            writer.uint32(18).string(message.beta);
        }
        if (message.theta !== "") {
            writer.uint32(26).string(message.theta);
        }
        if (message.delta !== "") {
            writer.uint32(34).string(message.delta);
        }
        if (message.minLearningRate !== "") {
            writer.uint32(42).string(message.minLearningRate);
        }
        if (message.maxLearningRate !== "") {
            writer.uint32(50).string(message.maxLearningRate);
        }
        if (!message.targetBlockUtilization.isZero()) {
            writer.uint32(56).uint64(message.targetBlockUtilization);
        }
        if (!message.maxBlockUtilization.isZero()) {
            writer.uint32(64).uint64(message.maxBlockUtilization);
        }
        if (!message.window.isZero()) {
            writer.uint32(72).uint64(message.window);
        }
        if (message.enabled === true) {
            writer.uint32(80).bool(message.enabled);
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
                    message.alpha = reader.string();
                    break;
                case 2:
                    message.beta = reader.string();
                    break;
                case 3:
                    message.theta = reader.string();
                    break;
                case 4:
                    message.delta = reader.string();
                    break;
                case 5:
                    message.minLearningRate = reader.string();
                    break;
                case 6:
                    message.maxLearningRate = reader.string();
                    break;
                case 7:
                    message.targetBlockUtilization = reader.uint64();
                    break;
                case 8:
                    message.maxBlockUtilization = reader.uint64();
                    break;
                case 9:
                    message.window = reader.uint64();
                    break;
                case 10:
                    message.enabled = reader.bool();
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
        if (object.alpha !== undefined && object.alpha !== null) {
            message.alpha = String(object.alpha);
        }
        else {
            message.alpha = "";
        }
        if (object.beta !== undefined && object.beta !== null) {
            message.beta = String(object.beta);
        }
        else {
            message.beta = "";
        }
        if (object.theta !== undefined && object.theta !== null) {
            message.theta = String(object.theta);
        }
        else {
            message.theta = "";
        }
        if (object.delta !== undefined && object.delta !== null) {
            message.delta = String(object.delta);
        }
        else {
            message.delta = "";
        }
        if (object.minLearningRate !== undefined && object.minLearningRate !== null) {
            message.minLearningRate = String(object.minLearningRate);
        }
        else {
            message.minLearningRate = "";
        }
        if (object.maxLearningRate !== undefined && object.maxLearningRate !== null) {
            message.maxLearningRate = String(object.maxLearningRate);
        }
        else {
            message.maxLearningRate = "";
        }
        if (object.targetBlockUtilization !== undefined && object.targetBlockUtilization !== null) {
            message.targetBlockUtilization = long_1.default.fromString(object.targetBlockUtilization);
        }
        else {
            message.targetBlockUtilization = long_1.default.UZERO;
        }
        if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
            message.maxBlockUtilization = long_1.default.fromString(object.maxBlockUtilization);
        }
        else {
            message.maxBlockUtilization = long_1.default.UZERO;
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = long_1.default.fromString(object.window);
        }
        else {
            message.window = long_1.default.UZERO;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.beta !== undefined && (obj.beta = message.beta);
        message.theta !== undefined && (obj.theta = message.theta);
        message.delta !== undefined && (obj.delta = message.delta);
        message.minLearningRate !== undefined && (obj.minLearningRate = message.minLearningRate);
        message.maxLearningRate !== undefined && (obj.maxLearningRate = message.maxLearningRate);
        message.targetBlockUtilization !== undefined &&
            (obj.targetBlockUtilization = (message.targetBlockUtilization || long_1.default.UZERO).toString());
        message.maxBlockUtilization !== undefined &&
            (obj.maxBlockUtilization = (message.maxBlockUtilization || long_1.default.UZERO).toString());
        message.window !== undefined && (obj.window = (message.window || long_1.default.UZERO).toString());
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParams);
        if (object.alpha !== undefined && object.alpha !== null) {
            message.alpha = object.alpha;
        }
        else {
            message.alpha = "";
        }
        if (object.beta !== undefined && object.beta !== null) {
            message.beta = object.beta;
        }
        else {
            message.beta = "";
        }
        if (object.theta !== undefined && object.theta !== null) {
            message.theta = object.theta;
        }
        else {
            message.theta = "";
        }
        if (object.delta !== undefined && object.delta !== null) {
            message.delta = object.delta;
        }
        else {
            message.delta = "";
        }
        if (object.minLearningRate !== undefined && object.minLearningRate !== null) {
            message.minLearningRate = object.minLearningRate;
        }
        else {
            message.minLearningRate = "";
        }
        if (object.maxLearningRate !== undefined && object.maxLearningRate !== null) {
            message.maxLearningRate = object.maxLearningRate;
        }
        else {
            message.maxLearningRate = "";
        }
        if (object.targetBlockUtilization !== undefined && object.targetBlockUtilization !== null) {
            message.targetBlockUtilization = object.targetBlockUtilization;
        }
        else {
            message.targetBlockUtilization = long_1.default.UZERO;
        }
        if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
            message.maxBlockUtilization = object.maxBlockUtilization;
        }
        else {
            message.maxBlockUtilization = long_1.default.UZERO;
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = object.window;
        }
        else {
            message.window = long_1.default.UZERO;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=params.js.map