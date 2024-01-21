"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebImpl = exports.QueryBaseFeeDesc = exports.QueryStateDesc = exports.QueryParamsDesc = exports.QueryDesc = exports.QueryClientImpl = exports.BaseFeeResponse = exports.BaseFeeRequest = exports.StateResponse = exports.StateRequest = exports.ParamsResponse = exports.ParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_web_1 = require("@improbable-eng/grpc-web");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../feemarket/feemarket/v1/params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const browser_headers_1 = require("browser-headers");
const genesis_1 = require("../../../feemarket/feemarket/v1/genesis");
exports.protobufPackage = "feemarket.feemarket.v1";
const baseParamsRequest = {};
exports.ParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParamsRequest);
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
        const message = Object.assign({}, baseParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseParamsRequest);
        return message;
    },
};
const baseParamsResponse = {};
exports.ParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParamsResponse);
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
        const message = Object.assign({}, baseParamsResponse);
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
        const message = Object.assign({}, baseParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseStateRequest = { feeDenom: "" };
exports.StateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feeDenom !== "") {
            writer.uint32(10).string(message.feeDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStateRequest);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = String(object.feeDenom);
        }
        else {
            message.feeDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStateRequest);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = object.feeDenom;
        }
        else {
            message.feeDenom = "";
        }
        return message;
    },
};
const baseStateResponse = {};
exports.StateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.states) {
            genesis_1.State.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStateResponse);
        message.states = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.states.push(genesis_1.State.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStateResponse);
        message.states = [];
        if (object.states !== undefined && object.states !== null) {
            for (const e of object.states) {
                message.states.push(genesis_1.State.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.states) {
            obj.states = message.states.map((e) => (e ? genesis_1.State.toJSON(e) : undefined));
        }
        else {
            obj.states = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStateResponse);
        message.states = [];
        if (object.states !== undefined && object.states !== null) {
            for (const e of object.states) {
                message.states.push(genesis_1.State.fromPartial(e));
            }
        }
        return message;
    },
};
const baseBaseFeeRequest = { feeDenom: "" };
exports.BaseFeeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feeDenom !== "") {
            writer.uint32(10).string(message.feeDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBaseFeeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBaseFeeRequest);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = String(object.feeDenom);
        }
        else {
            message.feeDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBaseFeeRequest);
        if (object.feeDenom !== undefined && object.feeDenom !== null) {
            message.feeDenom = object.feeDenom;
        }
        else {
            message.feeDenom = "";
        }
        return message;
    },
};
const baseBaseFeeResponse = {};
exports.BaseFeeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fee !== undefined) {
            coin_1.DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBaseFeeResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBaseFeeResponse);
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = coin_1.DecCoin.fromJSON(object.fee);
        }
        else {
            message.fee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee ? coin_1.DecCoin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBaseFeeResponse);
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = coin_1.DecCoin.fromPartial(object.fee);
        }
        else {
            message.fee = undefined;
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.State = this.State.bind(this);
        this.BaseFee = this.BaseFee.bind(this);
    }
    Params(request, metadata) {
        return this.rpc.unary(exports.QueryParamsDesc, exports.ParamsRequest.fromPartial(request), metadata);
    }
    State(request, metadata) {
        return this.rpc.unary(exports.QueryStateDesc, exports.StateRequest.fromPartial(request), metadata);
    }
    BaseFee(request, metadata) {
        return this.rpc.unary(exports.QueryBaseFeeDesc, exports.BaseFeeRequest.fromPartial(request), metadata);
    }
}
exports.QueryClientImpl = QueryClientImpl;
exports.QueryDesc = {
    serviceName: "feemarket.feemarket.v1.Query",
};
exports.QueryParamsDesc = {
    methodName: "Params",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ParamsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.ParamsResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.QueryStateDesc = {
    methodName: "State",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.StateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.StateResponse.decode(data)), { toObject() {
                    return this;
                } });
        },
    },
};
exports.QueryBaseFeeDesc = {
    methodName: "BaseFee",
    service: exports.QueryDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.BaseFeeRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            return Object.assign(Object.assign({}, exports.BaseFeeResponse.decode(data)), { toObject() {
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