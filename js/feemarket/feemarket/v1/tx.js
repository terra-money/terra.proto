"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebImpl = exports.MsgStateDesc = exports.MsgParamsDesc = exports.MsgDesc = exports.MsgClientImpl = exports.MsgStateResponse = exports.MsgState = exports.MsgParamsResponse = exports.MsgParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_web_1 = require("@improbable-eng/grpc-web");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../feemarket/feemarket/v1/params");
const genesis_1 = require("../../../feemarket/feemarket/v1/genesis");
const browser_headers_1 = require("browser-headers");
exports.protobufPackage = "feemarket.feemarket.v1";
const baseMsgParams = { authority: "" };
exports.MsgParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgParams);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = String(object.authority);
        }
        else {
            message.authority = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgParams);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        else {
            message.authority = "";
        }
        return message;
    },
};
const baseMsgParamsResponse = {};
exports.MsgParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgParamsResponse);
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
        const message = Object.assign({}, baseMsgParamsResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgParamsResponse);
        return message;
    },
};
const baseMsgState = { authority: "" };
exports.MsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== undefined) {
            genesis_1.State.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.State.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgState);
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.State.fromJSON(object.state);
        }
        else {
            message.state = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = String(object.authority);
        }
        else {
            message.authority = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_1.State.toJSON(message.state) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgState);
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.State.fromPartial(object.state);
        }
        else {
            message.state = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        else {
            message.authority = "";
        }
        return message;
    },
};
const baseMsgStateResponse = {};
exports.MsgStateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgStateResponse);
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
        const message = Object.assign({}, baseMsgStateResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgStateResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.State = this.State.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.MsgParamsDesc, exports.MsgParams.fromPartial(request), metadata);
    }
    State(request, metadata) {
        return this.rpc.unary(exports.MsgStateDesc, exports.MsgState.fromPartial(request), metadata);
    }
}
exports.MsgClientImpl = MsgClientImpl;
exports.MsgDesc = {
    serviceName: "feemarket.feemarket.v1.Msg",
};
exports.MsgParamsDesc = {
    methodName: "Params",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgParams.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgParamsResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.MsgStateDesc = {
    methodName: "State",
    service: exports.MsgDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.MsgState.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.MsgStateResponse.decode(data)), { toObject() {
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