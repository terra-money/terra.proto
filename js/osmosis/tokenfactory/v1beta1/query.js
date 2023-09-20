"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebImpl = exports.QueryBeforeSendHookAddressDesc = exports.QueryDenomsFromCreatorDesc = exports.QueryDenomAuthorityMetadataDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.QueryBeforeSendHookAddressResponse = exports.QueryBeforeSendHookAddressRequest = exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_web_1 = require("@improbable-eng/grpc-web");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../osmosis/tokenfactory/v1beta1/params");
const authorityMetadata_1 = require("../../../osmosis/tokenfactory/v1beta1/authorityMetadata");
const browser_headers_1 = require("browser-headers");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseQueryParamsResponse);
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
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryDenomAuthorityMetadataRequest = { denom: "" };
exports.QueryDenomAuthorityMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseQueryDenomAuthorityMetadataResponse = {};
exports.QueryDenomAuthorityMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
        }
        else {
            message.authorityMetadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.authorityMetadata !== undefined &&
            (obj.authorityMetadata = message.authorityMetadata
                ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
        }
        else {
            message.authorityMetadata = undefined;
        }
        return message;
    },
};
const baseQueryDenomsFromCreatorRequest = { creator: "" };
exports.QueryDenomsFromCreatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQueryDenomsFromCreatorResponse = { denoms: "" };
exports.QueryDenomsFromCreatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms) {
                message.denoms.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms) {
                message.denoms.push(e);
            }
        }
        return message;
    },
};
const baseQueryBeforeSendHookAddressRequest = { denom: "" };
exports.QueryBeforeSendHookAddressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBeforeSendHookAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryBeforeSendHookAddressRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBeforeSendHookAddressRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseQueryBeforeSendHookAddressResponse = { cosmwasmAddress: "" };
exports.QueryBeforeSendHookAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cosmwasmAddress !== "") {
            writer.uint32(10).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryBeforeSendHookAddressResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseQueryBeforeSendHookAddressResponse);
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
        message.cosmwasmAddress !== undefined && (obj.cosmwasmAddress = message.cosmwasmAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryBeforeSendHookAddressResponse);
        if (object.cosmwasmAddress !== undefined && object.cosmwasmAddress !== null) {
            message.cosmwasmAddress = object.cosmwasmAddress;
        }
        else {
            message.cosmwasmAddress = "";
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.DenomAuthorityMetadata = this.DenomAuthorityMetadata.bind(this);
        this.DenomsFromCreator = this.DenomsFromCreator.bind(this);
        this.BeforeSendHookAddress = this.BeforeSendHookAddress.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.QueryParamsRequest.fromPartial(request), metadata);
    }
    DenomAuthorityMetadata(request, metadata) {
        return this.rpc.unary(exports.QueryDenomAuthorityMetadataDesc, exports.QueryDenomAuthorityMetadataRequest.fromPartial(request), metadata);
    }
    DenomsFromCreator(request, metadata) {
        return this.rpc.unary(exports.QueryDenomsFromCreatorDesc, exports.QueryDenomsFromCreatorRequest.fromPartial(request), metadata);
    }
    BeforeSendHookAddress(request, metadata) {
        return this.rpc.unary(exports.QueryBeforeSendHookAddressDesc, exports.QueryBeforeSendHookAddressRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = {
    serviceName: "osmosis.tokenfactory.v1beta1.Query",
};
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.QueryParamsResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.QueryDenomAuthorityMetadataDesc = {
    methodName: "DenomAuthorityMetadata",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDenomAuthorityMetadataRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.QueryDenomAuthorityMetadataResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.QueryDenomsFromCreatorDesc = {
    methodName: "DenomsFromCreator",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryDenomsFromCreatorRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.QueryDenomsFromCreatorResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.QueryBeforeSendHookAddressDesc = {
    methodName: "BeforeSendHookAddress",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.QueryBeforeSendHookAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.QueryBeforeSendHookAddressResponse.decode(data)), { toObject() {
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
//# sourceMappingURL=query.js.map