"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebImpl = exports.MsgForceTransferDesc = exports.MsgSetBeforeSendHookDesc = exports.MsgSetDenomMetadataDesc = exports.MsgChangeAdminDesc = exports.MsgBurnDesc = exports.MsgMintDesc = exports.MsgCreateDenomDesc = exports.MsgUpdateParamsDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgForceTransferResponse = exports.MsgForceTransfer = exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgSetBeforeSendHookResponse = exports.MsgSetBeforeSendHook = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_web_1 = require("@improbable-eng/grpc-web");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../osmosis/tokenfactory/v1beta1/params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const browser_headers_1 = require("browser-headers");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
const baseMsgUpdateParams = { authority: "" };
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateParams);
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = String(object.authority);
        }
        else {
            message.authority = "";
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateParams);
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        else {
            message.authority = "";
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseMsgUpdateParamsResponse = {};
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgUpdateParamsResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateParamsResponse);
        return message;
    },
};
const baseMsgCreateDenom = { sender: "", subdenom: "" };
exports.MsgCreateDenom = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDenom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDenom);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.subdenom !== undefined && object.subdenom !== null) {
            message.subdenom = String(object.subdenom);
        }
        else {
            message.subdenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDenom);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.subdenom !== undefined && object.subdenom !== null) {
            message.subdenom = object.subdenom;
        }
        else {
            message.subdenom = "";
        }
        return message;
    },
};
const baseMsgCreateDenomResponse = { newTokenDenom: "" };
exports.MsgCreateDenomResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.newTokenDenom !== "") {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDenomResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newTokenDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDenomResponse);
        if (object.newTokenDenom !== undefined && object.newTokenDenom !== null) {
            message.newTokenDenom = String(object.newTokenDenom);
        }
        else {
            message.newTokenDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.newTokenDenom !== undefined && (obj.newTokenDenom = message.newTokenDenom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDenomResponse);
        if (object.newTokenDenom !== undefined && object.newTokenDenom !== null) {
            message.newTokenDenom = object.newTokenDenom;
        }
        else {
            message.newTokenDenom = "";
        }
        return message;
    },
};
const baseMsgMint = { sender: "", mintToAddress: "" };
exports.MsgMint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.mintToAddress !== "") {
            writer.uint32(26).string(message.mintToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMint);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mintToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgMint);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.mintToAddress !== undefined && object.mintToAddress !== null) {
            message.mintToAddress = String(object.mintToAddress);
        }
        else {
            message.mintToAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.mintToAddress !== undefined && (obj.mintToAddress = message.mintToAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgMint);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.mintToAddress !== undefined && object.mintToAddress !== null) {
            message.mintToAddress = object.mintToAddress;
        }
        else {
            message.mintToAddress = "";
        }
        return message;
    },
};
const baseMsgMintResponse = {};
exports.MsgMintResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgMintResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgMintResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgMintResponse);
        return message;
    },
};
const baseMsgBurn = { sender: "", burnFromAddress: "" };
exports.MsgBurn = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.burnFromAddress !== "") {
            writer.uint32(26).string(message.burnFromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurn);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.burnFromAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgBurn);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.burnFromAddress !== undefined && object.burnFromAddress !== null) {
            message.burnFromAddress = String(object.burnFromAddress);
        }
        else {
            message.burnFromAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.burnFromAddress !== undefined && (obj.burnFromAddress = message.burnFromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgBurn);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.burnFromAddress !== undefined && object.burnFromAddress !== null) {
            message.burnFromAddress = object.burnFromAddress;
        }
        else {
            message.burnFromAddress = "";
        }
        return message;
    },
};
const baseMsgBurnResponse = {};
exports.MsgBurnResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgBurnResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgBurnResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgBurnResponse);
        return message;
    },
};
const baseMsgChangeAdmin = { sender: "", denom: "", newAdmin: "" };
exports.MsgChangeAdmin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgChangeAdmin);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgChangeAdmin);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = String(object.newAdmin);
        }
        else {
            message.newAdmin = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgChangeAdmin);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = object.newAdmin;
        }
        else {
            message.newAdmin = "";
        }
        return message;
    },
};
const baseMsgChangeAdminResponse = {};
exports.MsgChangeAdminResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgChangeAdminResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgChangeAdminResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgChangeAdminResponse);
        return message;
    },
};
const baseMsgSetBeforeSendHook = { sender: "", denom: "", cosmwasmAddress: "" };
exports.MsgSetBeforeSendHook = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.cosmwasmAddress !== "") {
            writer.uint32(26).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetBeforeSendHook);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.cosmwasmAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSetBeforeSendHook);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.cosmwasmAddress !== undefined && object.cosmwasmAddress !== null) {
            message.cosmwasmAddress = String(object.cosmwasmAddress);
        }
        else {
            message.cosmwasmAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmwasmAddress !== undefined && (obj.cosmwasmAddress = message.cosmwasmAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSetBeforeSendHook);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.cosmwasmAddress !== undefined && object.cosmwasmAddress !== null) {
            message.cosmwasmAddress = object.cosmwasmAddress;
        }
        else {
            message.cosmwasmAddress = "";
        }
        return message;
    },
};
const baseMsgSetBeforeSendHookResponse = {};
exports.MsgSetBeforeSendHookResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetBeforeSendHookResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgSetBeforeSendHookResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSetBeforeSendHookResponse);
        return message;
    },
};
const baseMsgSetDenomMetadata = { sender: "" };
exports.MsgSetDenomMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetDenomMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSetDenomMetadata);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bank_1.Metadata.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? bank_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSetDenomMetadata);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bank_1.Metadata.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
};
const baseMsgSetDenomMetadataResponse = {};
exports.MsgSetDenomMetadataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSetDenomMetadataResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgSetDenomMetadataResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSetDenomMetadataResponse);
        return message;
    },
};
const baseMsgForceTransfer = { sender: "", transferFromAddress: "", transferToAddress: "" };
exports.MsgForceTransfer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.transferFromAddress !== "") {
            writer.uint32(26).string(message.transferFromAddress);
        }
        if (message.transferToAddress !== "") {
            writer.uint32(34).string(message.transferToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgForceTransfer);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transferFromAddress = reader.string();
                    break;
                case 4:
                    message.transferToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgForceTransfer);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.transferFromAddress !== undefined && object.transferFromAddress !== null) {
            message.transferFromAddress = String(object.transferFromAddress);
        }
        else {
            message.transferFromAddress = "";
        }
        if (object.transferToAddress !== undefined && object.transferToAddress !== null) {
            message.transferToAddress = String(object.transferToAddress);
        }
        else {
            message.transferToAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.transferFromAddress !== undefined && (obj.transferFromAddress = message.transferFromAddress);
        message.transferToAddress !== undefined && (obj.transferToAddress = message.transferToAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgForceTransfer);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        if (object.transferFromAddress !== undefined && object.transferFromAddress !== null) {
            message.transferFromAddress = object.transferFromAddress;
        }
        else {
            message.transferFromAddress = "";
        }
        if (object.transferToAddress !== undefined && object.transferToAddress !== null) {
            message.transferToAddress = object.transferToAddress;
        }
        else {
            message.transferToAddress = "";
        }
        return message;
    },
};
const baseMsgForceTransferResponse = {};
exports.MsgForceTransferResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgForceTransferResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseMsgForceTransferResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgForceTransferResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateDenom = this.CreateDenom.bind(this);
        this.Mint = this.Mint.bind(this);
        this.Burn = this.Burn.bind(this);
        this.ChangeAdmin = this.ChangeAdmin.bind(this);
        this.SetDenomMetadata = this.SetDenomMetadata.bind(this);
        this.SetBeforeSendHook = this.SetBeforeSendHook.bind(this);
        this.ForceTransfer = this.ForceTransfer.bind(this);
    }
    UpdateParams(request, metadata) {
        return this.rpc.unary(exports.MsgUpdateParamsDesc, exports.MsgUpdateParams.fromPartial(request), metadata);
    }
    CreateDenom(request, metadata) {
        return this.rpc.unary(exports.MsgCreateDenomDesc, exports.MsgCreateDenom.fromPartial(request), metadata);
    }
    Mint(request, metadata) {
        return this.rpc.unary(exports.MsgMintDesc, exports.MsgMint.fromPartial(request), metadata);
    }
    Burn(request, metadata) {
        return this.rpc.unary(exports.MsgBurnDesc, exports.MsgBurn.fromPartial(request), metadata);
    }
    ChangeAdmin(request, metadata) {
        return this.rpc.unary(exports.MsgChangeAdminDesc, exports.MsgChangeAdmin.fromPartial(request), metadata);
    }
    SetDenomMetadata(request, metadata) {
        return this.rpc.unary(exports.MsgSetDenomMetadataDesc, exports.MsgSetDenomMetadata.fromPartial(request), metadata);
    }
    SetBeforeSendHook(request, metadata) {
        return this.rpc.unary(exports.MsgSetBeforeSendHookDesc, exports.MsgSetBeforeSendHook.fromPartial(request), metadata);
    }
    ForceTransfer(request, metadata) {
        return this.rpc.unary(exports.MsgForceTransferDesc, exports.MsgForceTransfer.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = {
    serviceName: "osmosis.tokenfactory.v1beta1.Msg",
};
exports.MsgUpdateParamsDesc = {
    methodName: "UpdateParams",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgUpdateParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgUpdateParamsResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgCreateDenomDesc = {
    methodName: "CreateDenom",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgCreateDenom.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgCreateDenomResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgMintDesc = {
    methodName: "Mint",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgMint.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgMintResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgBurnDesc = {
    methodName: "Burn",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgBurn.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgBurnResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgChangeAdminDesc = {
    methodName: "ChangeAdmin",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgChangeAdmin.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgChangeAdminResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgSetDenomMetadataDesc = {
    methodName: "SetDenomMetadata",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSetDenomMetadata.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgSetDenomMetadataResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgSetBeforeSendHookDesc = {
    methodName: "SetBeforeSendHook",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgSetBeforeSendHook.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgSetBeforeSendHookResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgForceTransferDesc = {
    methodName: "ForceTransfer",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgForceTransfer.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgForceTransferResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc_web_1.grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc_web_1.grpc.Code.OK) {
                        resolve(response.message);
                    }
                    else {
                        const err = new Error(response.statusMessage);
                        err.code = response.status;
                        err.metadata = response.trailers;
                        reject(err);
                    }
                },
            });
        });
    }
}
exports.GrpcWebImpl = GrpcWebImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=tx.js.map