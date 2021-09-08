// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class MsgAggregateExchangeRatePrevote extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getFeeder(): string;
  setFeeder(value: string): void;

  getValidator(): string;
  setValidator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAggregateExchangeRatePrevote.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAggregateExchangeRatePrevote,
  ): MsgAggregateExchangeRatePrevote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgAggregateExchangeRatePrevote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRatePrevote;
  static deserializeBinaryFromReader(
    message: MsgAggregateExchangeRatePrevote,
    reader: jspb.BinaryReader,
  ): MsgAggregateExchangeRatePrevote;
}

export namespace MsgAggregateExchangeRatePrevote {
  export type AsObject = {
    hash: string;
    feeder: string;
    validator: string;
  };
}

export class MsgAggregateExchangeRatePrevoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAggregateExchangeRatePrevoteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAggregateExchangeRatePrevoteResponse,
  ): MsgAggregateExchangeRatePrevoteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(
    message: MsgAggregateExchangeRatePrevoteResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRatePrevoteResponse;
  static deserializeBinaryFromReader(
    message: MsgAggregateExchangeRatePrevoteResponse,
    reader: jspb.BinaryReader,
  ): MsgAggregateExchangeRatePrevoteResponse;
}

export namespace MsgAggregateExchangeRatePrevoteResponse {
  export type AsObject = {};
}

export class MsgAggregateExchangeRateVote extends jspb.Message {
  getSalt(): string;
  setSalt(value: string): void;

  getExchangeRates(): string;
  setExchangeRates(value: string): void;

  getFeeder(): string;
  setFeeder(value: string): void;

  getValidator(): string;
  setValidator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAggregateExchangeRateVote.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAggregateExchangeRateVote,
  ): MsgAggregateExchangeRateVote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgAggregateExchangeRateVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRateVote;
  static deserializeBinaryFromReader(
    message: MsgAggregateExchangeRateVote,
    reader: jspb.BinaryReader,
  ): MsgAggregateExchangeRateVote;
}

export namespace MsgAggregateExchangeRateVote {
  export type AsObject = {
    salt: string;
    exchangeRates: string;
    feeder: string;
    validator: string;
  };
}

export class MsgAggregateExchangeRateVoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAggregateExchangeRateVoteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgAggregateExchangeRateVoteResponse,
  ): MsgAggregateExchangeRateVoteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(
    message: MsgAggregateExchangeRateVoteResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MsgAggregateExchangeRateVoteResponse;
  static deserializeBinaryFromReader(
    message: MsgAggregateExchangeRateVoteResponse,
    reader: jspb.BinaryReader,
  ): MsgAggregateExchangeRateVoteResponse;
}

export namespace MsgAggregateExchangeRateVoteResponse {
  export type AsObject = {};
}

export class MsgDelegateFeedConsent extends jspb.Message {
  getOperator(): string;
  setOperator(value: string): void;

  getDelegate(): string;
  setDelegate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDelegateFeedConsent.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDelegateFeedConsent): MsgDelegateFeedConsent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgDelegateFeedConsent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDelegateFeedConsent;
  static deserializeBinaryFromReader(
    message: MsgDelegateFeedConsent,
    reader: jspb.BinaryReader,
  ): MsgDelegateFeedConsent;
}

export namespace MsgDelegateFeedConsent {
  export type AsObject = {
    operator: string;
    delegate: string;
  };
}

export class MsgDelegateFeedConsentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDelegateFeedConsentResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgDelegateFeedConsentResponse,
  ): MsgDelegateFeedConsentResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgDelegateFeedConsentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDelegateFeedConsentResponse;
  static deserializeBinaryFromReader(
    message: MsgDelegateFeedConsentResponse,
    reader: jspb.BinaryReader,
  ): MsgDelegateFeedConsentResponse;
}

export namespace MsgDelegateFeedConsentResponse {
  export type AsObject = {};
}
