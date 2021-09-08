// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/oracle.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  getVotePeriod(): number;
  setVotePeriod(value: number): void;

  getVoteThreshold(): string;
  setVoteThreshold(value: string): void;

  getRewardBand(): string;
  setRewardBand(value: string): void;

  getRewardDistributionWindow(): number;
  setRewardDistributionWindow(value: number): void;

  clearWhitelistList(): void;
  getWhitelistList(): Array<Denom>;
  setWhitelistList(value: Array<Denom>): void;
  addWhitelist(value?: Denom, index?: number): Denom;

  getSlashFraction(): string;
  setSlashFraction(value: string): void;

  getSlashWindow(): number;
  setSlashWindow(value: number): void;

  getMinValidPerWindow(): string;
  setMinValidPerWindow(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    votePeriod: number;
    voteThreshold: string;
    rewardBand: string;
    rewardDistributionWindow: number;
    whitelistList: Array<Denom.AsObject>;
    slashFraction: string;
    slashWindow: number;
    minValidPerWindow: string;
  };
}

export class Denom extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTobinTax(): string;
  setTobinTax(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Denom.AsObject;
  static toObject(includeInstance: boolean, msg: Denom): Denom.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Denom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Denom;
  static deserializeBinaryFromReader(message: Denom, reader: jspb.BinaryReader): Denom;
}

export namespace Denom {
  export type AsObject = {
    name: string;
    tobinTax: string;
  };
}

export class AggregateExchangeRatePrevote extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getVoter(): string;
  setVoter(value: string): void;

  getSubmitBlock(): number;
  setSubmitBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateExchangeRatePrevote.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AggregateExchangeRatePrevote,
  ): AggregateExchangeRatePrevote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AggregateExchangeRatePrevote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateExchangeRatePrevote;
  static deserializeBinaryFromReader(
    message: AggregateExchangeRatePrevote,
    reader: jspb.BinaryReader,
  ): AggregateExchangeRatePrevote;
}

export namespace AggregateExchangeRatePrevote {
  export type AsObject = {
    hash: string;
    voter: string;
    submitBlock: number;
  };
}

export class AggregateExchangeRateVote extends jspb.Message {
  clearExchangeRateTuplesList(): void;
  getExchangeRateTuplesList(): Array<ExchangeRateTuple>;
  setExchangeRateTuplesList(value: Array<ExchangeRateTuple>): void;
  addExchangeRateTuples(value?: ExchangeRateTuple, index?: number): ExchangeRateTuple;

  getVoter(): string;
  setVoter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregateExchangeRateVote.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AggregateExchangeRateVote,
  ): AggregateExchangeRateVote.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: AggregateExchangeRateVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregateExchangeRateVote;
  static deserializeBinaryFromReader(
    message: AggregateExchangeRateVote,
    reader: jspb.BinaryReader,
  ): AggregateExchangeRateVote;
}

export namespace AggregateExchangeRateVote {
  export type AsObject = {
    exchangeRateTuplesList: Array<ExchangeRateTuple.AsObject>;
    voter: string;
  };
}

export class ExchangeRateTuple extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getExchangeRate(): string;
  setExchangeRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeRateTuple.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeRateTuple): ExchangeRateTuple.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ExchangeRateTuple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeRateTuple;
  static deserializeBinaryFromReader(
    message: ExchangeRateTuple,
    reader: jspb.BinaryReader,
  ): ExchangeRateTuple;
}

export namespace ExchangeRateTuple {
  export type AsObject = {
    denom: string;
    exchangeRate: string;
  };
}
