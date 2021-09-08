// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as terra_oracle_v1beta1_oracle_pb from "../../../terra/oracle/v1beta1/oracle_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QueryExchangeRateRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExchangeRateRequest): QueryExchangeRateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryExchangeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeRateRequest;
  static deserializeBinaryFromReader(
    message: QueryExchangeRateRequest,
    reader: jspb.BinaryReader,
  ): QueryExchangeRateRequest;
}

export namespace QueryExchangeRateRequest {
  export type AsObject = {
    denom: string;
  };
}

export class QueryExchangeRateResponse extends jspb.Message {
  getExchangeRate(): string;
  setExchangeRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeRateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryExchangeRateResponse,
  ): QueryExchangeRateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryExchangeRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeRateResponse;
  static deserializeBinaryFromReader(
    message: QueryExchangeRateResponse,
    reader: jspb.BinaryReader,
  ): QueryExchangeRateResponse;
}

export namespace QueryExchangeRateResponse {
  export type AsObject = {
    exchangeRate: string;
  };
}

export class QueryExchangeRatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeRatesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryExchangeRatesRequest,
  ): QueryExchangeRatesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryExchangeRatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeRatesRequest;
  static deserializeBinaryFromReader(
    message: QueryExchangeRatesRequest,
    reader: jspb.BinaryReader,
  ): QueryExchangeRatesRequest;
}

export namespace QueryExchangeRatesRequest {
  export type AsObject = {};
}

export class QueryExchangeRatesResponse extends jspb.Message {
  clearExchangeRatesList(): void;
  getExchangeRatesList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setExchangeRatesList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): void;
  addExchangeRates(
    value?: cosmos_base_v1beta1_coin_pb.DecCoin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeRatesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryExchangeRatesResponse,
  ): QueryExchangeRatesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryExchangeRatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeRatesResponse;
  static deserializeBinaryFromReader(
    message: QueryExchangeRatesResponse,
    reader: jspb.BinaryReader,
  ): QueryExchangeRatesResponse;
}

export namespace QueryExchangeRatesResponse {
  export type AsObject = {
    exchangeRatesList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>;
  };
}

export class QueryTobinTaxRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTobinTaxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTobinTaxRequest): QueryTobinTaxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTobinTaxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTobinTaxRequest;
  static deserializeBinaryFromReader(
    message: QueryTobinTaxRequest,
    reader: jspb.BinaryReader,
  ): QueryTobinTaxRequest;
}

export namespace QueryTobinTaxRequest {
  export type AsObject = {
    denom: string;
  };
}

export class QueryTobinTaxResponse extends jspb.Message {
  getTobinTax(): string;
  setTobinTax(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTobinTaxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTobinTaxResponse): QueryTobinTaxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTobinTaxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTobinTaxResponse;
  static deserializeBinaryFromReader(
    message: QueryTobinTaxResponse,
    reader: jspb.BinaryReader,
  ): QueryTobinTaxResponse;
}

export namespace QueryTobinTaxResponse {
  export type AsObject = {
    tobinTax: string;
  };
}

export class QueryTobinTaxesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTobinTaxesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTobinTaxesRequest): QueryTobinTaxesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTobinTaxesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTobinTaxesRequest;
  static deserializeBinaryFromReader(
    message: QueryTobinTaxesRequest,
    reader: jspb.BinaryReader,
  ): QueryTobinTaxesRequest;
}

export namespace QueryTobinTaxesRequest {
  export type AsObject = {};
}

export class QueryTobinTaxesResponse extends jspb.Message {
  clearTobinTaxesList(): void;
  getTobinTaxesList(): Array<terra_oracle_v1beta1_oracle_pb.Denom>;
  setTobinTaxesList(value: Array<terra_oracle_v1beta1_oracle_pb.Denom>): void;
  addTobinTaxes(
    value?: terra_oracle_v1beta1_oracle_pb.Denom,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.Denom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTobinTaxesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTobinTaxesResponse): QueryTobinTaxesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTobinTaxesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTobinTaxesResponse;
  static deserializeBinaryFromReader(
    message: QueryTobinTaxesResponse,
    reader: jspb.BinaryReader,
  ): QueryTobinTaxesResponse;
}

export namespace QueryTobinTaxesResponse {
  export type AsObject = {
    tobinTaxesList: Array<terra_oracle_v1beta1_oracle_pb.Denom.AsObject>;
  };
}

export class QueryActivesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryActivesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryActivesRequest): QueryActivesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryActivesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryActivesRequest;
  static deserializeBinaryFromReader(
    message: QueryActivesRequest,
    reader: jspb.BinaryReader,
  ): QueryActivesRequest;
}

export namespace QueryActivesRequest {
  export type AsObject = {};
}

export class QueryActivesResponse extends jspb.Message {
  clearActivesList(): void;
  getActivesList(): Array<string>;
  setActivesList(value: Array<string>): void;
  addActives(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryActivesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryActivesResponse): QueryActivesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryActivesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryActivesResponse;
  static deserializeBinaryFromReader(
    message: QueryActivesResponse,
    reader: jspb.BinaryReader,
  ): QueryActivesResponse;
}

export namespace QueryActivesResponse {
  export type AsObject = {
    activesList: Array<string>;
  };
}

export class QueryVoteTargetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteTargetsRequest): QueryVoteTargetsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryVoteTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteTargetsRequest;
  static deserializeBinaryFromReader(
    message: QueryVoteTargetsRequest,
    reader: jspb.BinaryReader,
  ): QueryVoteTargetsRequest;
}

export namespace QueryVoteTargetsRequest {
  export type AsObject = {};
}

export class QueryVoteTargetsResponse extends jspb.Message {
  clearVoteTargetsList(): void;
  getVoteTargetsList(): Array<string>;
  setVoteTargetsList(value: Array<string>): void;
  addVoteTargets(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteTargetsResponse): QueryVoteTargetsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryVoteTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteTargetsResponse;
  static deserializeBinaryFromReader(
    message: QueryVoteTargetsResponse,
    reader: jspb.BinaryReader,
  ): QueryVoteTargetsResponse;
}

export namespace QueryVoteTargetsResponse {
  export type AsObject = {
    voteTargetsList: Array<string>;
  };
}

export class QueryFeederDelegationRequest extends jspb.Message {
  getValidatorAddr(): string;
  setValidatorAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeederDelegationRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryFeederDelegationRequest,
  ): QueryFeederDelegationRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryFeederDelegationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeederDelegationRequest;
  static deserializeBinaryFromReader(
    message: QueryFeederDelegationRequest,
    reader: jspb.BinaryReader,
  ): QueryFeederDelegationRequest;
}

export namespace QueryFeederDelegationRequest {
  export type AsObject = {
    validatorAddr: string;
  };
}

export class QueryFeederDelegationResponse extends jspb.Message {
  getFeederAddr(): string;
  setFeederAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeederDelegationResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryFeederDelegationResponse,
  ): QueryFeederDelegationResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryFeederDelegationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeederDelegationResponse;
  static deserializeBinaryFromReader(
    message: QueryFeederDelegationResponse,
    reader: jspb.BinaryReader,
  ): QueryFeederDelegationResponse;
}

export namespace QueryFeederDelegationResponse {
  export type AsObject = {
    feederAddr: string;
  };
}

export class QueryMissCounterRequest extends jspb.Message {
  getValidatorAddr(): string;
  setValidatorAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMissCounterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMissCounterRequest): QueryMissCounterRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryMissCounterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMissCounterRequest;
  static deserializeBinaryFromReader(
    message: QueryMissCounterRequest,
    reader: jspb.BinaryReader,
  ): QueryMissCounterRequest;
}

export namespace QueryMissCounterRequest {
  export type AsObject = {
    validatorAddr: string;
  };
}

export class QueryMissCounterResponse extends jspb.Message {
  getMissCounter(): number;
  setMissCounter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMissCounterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMissCounterResponse): QueryMissCounterResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryMissCounterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMissCounterResponse;
  static deserializeBinaryFromReader(
    message: QueryMissCounterResponse,
    reader: jspb.BinaryReader,
  ): QueryMissCounterResponse;
}

export namespace QueryMissCounterResponse {
  export type AsObject = {
    missCounter: number;
  };
}

export class QueryAggregatePrevoteRequest extends jspb.Message {
  getValidatorAddr(): string;
  setValidatorAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregatePrevoteRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregatePrevoteRequest,
  ): QueryAggregatePrevoteRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregatePrevoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregatePrevoteRequest;
  static deserializeBinaryFromReader(
    message: QueryAggregatePrevoteRequest,
    reader: jspb.BinaryReader,
  ): QueryAggregatePrevoteRequest;
}

export namespace QueryAggregatePrevoteRequest {
  export type AsObject = {
    validatorAddr: string;
  };
}

export class QueryAggregatePrevoteResponse extends jspb.Message {
  hasAggregatePrevote(): boolean;
  clearAggregatePrevote(): void;
  getAggregatePrevote(): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote | undefined;
  setAggregatePrevote(value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregatePrevoteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregatePrevoteResponse,
  ): QueryAggregatePrevoteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregatePrevoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregatePrevoteResponse;
  static deserializeBinaryFromReader(
    message: QueryAggregatePrevoteResponse,
    reader: jspb.BinaryReader,
  ): QueryAggregatePrevoteResponse;
}

export namespace QueryAggregatePrevoteResponse {
  export type AsObject = {
    aggregatePrevote?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote.AsObject;
  };
}

export class QueryAggregatePrevotesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregatePrevotesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregatePrevotesRequest,
  ): QueryAggregatePrevotesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregatePrevotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregatePrevotesRequest;
  static deserializeBinaryFromReader(
    message: QueryAggregatePrevotesRequest,
    reader: jspb.BinaryReader,
  ): QueryAggregatePrevotesRequest;
}

export namespace QueryAggregatePrevotesRequest {
  export type AsObject = {};
}

export class QueryAggregatePrevotesResponse extends jspb.Message {
  clearAggregatePrevotesList(): void;
  getAggregatePrevotesList(): Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote>;
  setAggregatePrevotesList(value: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote>): void;
  addAggregatePrevotes(
    value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregatePrevotesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregatePrevotesResponse,
  ): QueryAggregatePrevotesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregatePrevotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregatePrevotesResponse;
  static deserializeBinaryFromReader(
    message: QueryAggregatePrevotesResponse,
    reader: jspb.BinaryReader,
  ): QueryAggregatePrevotesResponse;
}

export namespace QueryAggregatePrevotesResponse {
  export type AsObject = {
    aggregatePrevotesList: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote.AsObject>;
  };
}

export class QueryAggregateVoteRequest extends jspb.Message {
  getValidatorAddr(): string;
  setValidatorAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregateVoteRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregateVoteRequest,
  ): QueryAggregateVoteRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregateVoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregateVoteRequest;
  static deserializeBinaryFromReader(
    message: QueryAggregateVoteRequest,
    reader: jspb.BinaryReader,
  ): QueryAggregateVoteRequest;
}

export namespace QueryAggregateVoteRequest {
  export type AsObject = {
    validatorAddr: string;
  };
}

export class QueryAggregateVoteResponse extends jspb.Message {
  hasAggregateVote(): boolean;
  clearAggregateVote(): void;
  getAggregateVote(): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote | undefined;
  setAggregateVote(value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregateVoteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregateVoteResponse,
  ): QueryAggregateVoteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregateVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregateVoteResponse;
  static deserializeBinaryFromReader(
    message: QueryAggregateVoteResponse,
    reader: jspb.BinaryReader,
  ): QueryAggregateVoteResponse;
}

export namespace QueryAggregateVoteResponse {
  export type AsObject = {
    aggregateVote?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote.AsObject;
  };
}

export class QueryAggregateVotesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregateVotesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregateVotesRequest,
  ): QueryAggregateVotesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregateVotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregateVotesRequest;
  static deserializeBinaryFromReader(
    message: QueryAggregateVotesRequest,
    reader: jspb.BinaryReader,
  ): QueryAggregateVotesRequest;
}

export namespace QueryAggregateVotesRequest {
  export type AsObject = {};
}

export class QueryAggregateVotesResponse extends jspb.Message {
  clearAggregateVotesList(): void;
  getAggregateVotesList(): Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote>;
  setAggregateVotesList(value: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote>): void;
  addAggregateVotes(
    value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAggregateVotesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryAggregateVotesResponse,
  ): QueryAggregateVotesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryAggregateVotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAggregateVotesResponse;
  static deserializeBinaryFromReader(
    message: QueryAggregateVotesResponse,
    reader: jspb.BinaryReader,
  ): QueryAggregateVotesResponse;
}

export namespace QueryAggregateVotesResponse {
  export type AsObject = {
    aggregateVotesList: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote.AsObject>;
  };
}

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(
    message: QueryParamsRequest,
    reader: jspb.BinaryReader,
  ): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {};
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): terra_oracle_v1beta1_oracle_pb.Params | undefined;
  setParams(value?: terra_oracle_v1beta1_oracle_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(
    message: QueryParamsResponse,
    reader: jspb.BinaryReader,
  ): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: terra_oracle_v1beta1_oracle_pb.Params.AsObject;
  };
}
