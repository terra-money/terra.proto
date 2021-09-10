/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.oracle.v1beta1";

/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  feeder: string;
  validator: string;
}

/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponse {}

/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}

/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {}

/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {}

const baseMsgAggregateExchangeRatePrevote: object = { hash: "", feeder: "", validator: "" };

export const MsgAggregateExchangeRatePrevote = {
  encode(message: MsgAggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAggregateExchangeRatePrevote } as MsgAggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRatePrevote {
    const message = { ...baseMsgAggregateExchangeRatePrevote } as MsgAggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgAggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote {
    const message = { ...baseMsgAggregateExchangeRatePrevote } as MsgAggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgAggregateExchangeRatePrevoteResponse: object = {};

export const MsgAggregateExchangeRatePrevoteResponse = {
  encode(_: MsgAggregateExchangeRatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
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

  fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
    return message;
  },

  toJSON(_: MsgAggregateExchangeRatePrevoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAggregateExchangeRatePrevoteResponse>,
  ): MsgAggregateExchangeRatePrevoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
    return message;
  },
};

const baseMsgAggregateExchangeRateVote: object = { salt: "", exchangeRates: "", feeder: "", validator: "" };

export const MsgAggregateExchangeRateVote = {
  encode(message: MsgAggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAggregateExchangeRateVote } as MsgAggregateExchangeRateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;
        case 2:
          message.exchangeRates = reader.string();
          break;
        case 3:
          message.feeder = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRateVote {
    const message = { ...baseMsgAggregateExchangeRateVote } as MsgAggregateExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt);
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = String(object.exchangeRates);
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgAggregateExchangeRateVote): unknown {
    const obj: any = {};
    message.salt !== undefined && (obj.salt = message.salt);
    message.exchangeRates !== undefined && (obj.exchangeRates = message.exchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote {
    const message = { ...baseMsgAggregateExchangeRateVote } as MsgAggregateExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = object.exchangeRates;
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgAggregateExchangeRateVoteResponse: object = {};

export const MsgAggregateExchangeRateVoteResponse = {
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAggregateExchangeRateVoteResponse } as MsgAggregateExchangeRateVoteResponse;
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

  fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
    const message = { ...baseMsgAggregateExchangeRateVoteResponse } as MsgAggregateExchangeRateVoteResponse;
    return message;
  },

  toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse {
    const message = { ...baseMsgAggregateExchangeRateVoteResponse } as MsgAggregateExchangeRateVoteResponse;
    return message;
  },
};

const baseMsgDelegateFeedConsent: object = { operator: "", delegate: "" };

export const MsgDelegateFeedConsent = {
  encode(message: MsgDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = String(object.delegate);
    } else {
      message.delegate = "";
    }
    return message;
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    } else {
      message.delegate = "";
    }
    return message;
  },
};

const baseMsgDelegateFeedConsentResponse: object = {};

export const MsgDelegateFeedConsentResponse = {
  encode(_: MsgDelegateFeedConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateFeedConsentResponse } as MsgDelegateFeedConsentResponse;
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

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    const message = { ...baseMsgDelegateFeedConsentResponse } as MsgDelegateFeedConsentResponse;
    return message;
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse {
    const message = { ...baseMsgDelegateFeedConsentResponse } as MsgDelegateFeedConsentResponse;
    return message;
  },
};

/** Msg defines the oracle Msg service. */
export const MsgService = {
  /**
   * AggregateExchangeRatePrevote defines a method for submitting
   * aggregate exchange rate prevote
   */
  aggregateExchangeRatePrevote: {
    path: "/terra.oracle.v1beta1.Msg/AggregateExchangeRatePrevote",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgAggregateExchangeRatePrevote) =>
      Buffer.from(MsgAggregateExchangeRatePrevote.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgAggregateExchangeRatePrevote.decode(value),
    responseSerialize: (value: MsgAggregateExchangeRatePrevoteResponse) =>
      Buffer.from(MsgAggregateExchangeRatePrevoteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgAggregateExchangeRatePrevoteResponse.decode(value),
  },
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  aggregateExchangeRateVote: {
    path: "/terra.oracle.v1beta1.Msg/AggregateExchangeRateVote",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgAggregateExchangeRateVote) =>
      Buffer.from(MsgAggregateExchangeRateVote.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgAggregateExchangeRateVote.decode(value),
    responseSerialize: (value: MsgAggregateExchangeRateVoteResponse) =>
      Buffer.from(MsgAggregateExchangeRateVoteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgAggregateExchangeRateVoteResponse.decode(value),
  },
  /** DelegateFeedConsent defines a method for setting the feeder delegation */
  delegateFeedConsent: {
    path: "/terra.oracle.v1beta1.Msg/DelegateFeedConsent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgDelegateFeedConsent) =>
      Buffer.from(MsgDelegateFeedConsent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgDelegateFeedConsent.decode(value),
    responseSerialize: (value: MsgDelegateFeedConsentResponse) =>
      Buffer.from(MsgDelegateFeedConsentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgDelegateFeedConsentResponse.decode(value),
  },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
  /**
   * AggregateExchangeRatePrevote defines a method for submitting
   * aggregate exchange rate prevote
   */
  aggregateExchangeRatePrevote: handleUnaryCall<
    MsgAggregateExchangeRatePrevote,
    MsgAggregateExchangeRatePrevoteResponse
  >;
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  aggregateExchangeRateVote: handleUnaryCall<
    MsgAggregateExchangeRateVote,
    MsgAggregateExchangeRateVoteResponse
  >;
  /** DelegateFeedConsent defines a method for setting the feeder delegation */
  delegateFeedConsent: handleUnaryCall<MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse>;
}

export interface MsgClient extends Client {
  /**
   * AggregateExchangeRatePrevote defines a method for submitting
   * aggregate exchange rate prevote
   */
  aggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRatePrevoteResponse) => void,
  ): ClientUnaryCall;
  aggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRatePrevoteResponse) => void,
  ): ClientUnaryCall;
  aggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRatePrevoteResponse) => void,
  ): ClientUnaryCall;
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  aggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRateVoteResponse) => void,
  ): ClientUnaryCall;
  aggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRateVoteResponse) => void,
  ): ClientUnaryCall;
  aggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgAggregateExchangeRateVoteResponse) => void,
  ): ClientUnaryCall;
  /** DelegateFeedConsent defines a method for setting the feeder delegation */
  delegateFeedConsent(
    request: MsgDelegateFeedConsent,
    callback: (error: ServiceError | null, response: MsgDelegateFeedConsentResponse) => void,
  ): ClientUnaryCall;
  delegateFeedConsent(
    request: MsgDelegateFeedConsent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgDelegateFeedConsentResponse) => void,
  ): ClientUnaryCall;
  delegateFeedConsent(
    request: MsgDelegateFeedConsent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgDelegateFeedConsentResponse) => void,
  ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(MsgService, "terra.oracle.v1beta1.Msg") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): MsgClient;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
