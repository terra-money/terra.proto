// package: terra.oracle.v1beta1
// file: terra/oracle/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as terra_oracle_v1beta1_oracle_pb from "../../../terra/oracle/v1beta1/oracle_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): terra_oracle_v1beta1_oracle_pb.Params | undefined;
  setParams(value?: terra_oracle_v1beta1_oracle_pb.Params): void;

  clearFeederDelegationsList(): void;
  getFeederDelegationsList(): Array<FeederDelegation>;
  setFeederDelegationsList(value: Array<FeederDelegation>): void;
  addFeederDelegations(value?: FeederDelegation, index?: number): FeederDelegation;

  clearExchangeRatesList(): void;
  getExchangeRatesList(): Array<terra_oracle_v1beta1_oracle_pb.ExchangeRateTuple>;
  setExchangeRatesList(value: Array<terra_oracle_v1beta1_oracle_pb.ExchangeRateTuple>): void;
  addExchangeRates(
    value?: terra_oracle_v1beta1_oracle_pb.ExchangeRateTuple,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.ExchangeRateTuple;

  clearMissCountersList(): void;
  getMissCountersList(): Array<MissCounter>;
  setMissCountersList(value: Array<MissCounter>): void;
  addMissCounters(value?: MissCounter, index?: number): MissCounter;

  clearAggregateExchangeRatePrevotesList(): void;
  getAggregateExchangeRatePrevotesList(): Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote>;
  setAggregateExchangeRatePrevotesList(
    value: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote>,
  ): void;
  addAggregateExchangeRatePrevotes(
    value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote;

  clearAggregateExchangeRateVotesList(): void;
  getAggregateExchangeRateVotesList(): Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote>;
  setAggregateExchangeRateVotesList(
    value: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote>,
  ): void;
  addAggregateExchangeRateVotes(
    value?: terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote,
    index?: number,
  ): terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote;

  clearTobinTaxesList(): void;
  getTobinTaxesList(): Array<TobinTax>;
  setTobinTaxesList(value: Array<TobinTax>): void;
  addTobinTaxes(value?: TobinTax, index?: number): TobinTax;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: terra_oracle_v1beta1_oracle_pb.Params.AsObject;
    feederDelegationsList: Array<FeederDelegation.AsObject>;
    exchangeRatesList: Array<terra_oracle_v1beta1_oracle_pb.ExchangeRateTuple.AsObject>;
    missCountersList: Array<MissCounter.AsObject>;
    aggregateExchangeRatePrevotesList: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRatePrevote.AsObject>;
    aggregateExchangeRateVotesList: Array<terra_oracle_v1beta1_oracle_pb.AggregateExchangeRateVote.AsObject>;
    tobinTaxesList: Array<TobinTax.AsObject>;
  };
}

export class FeederDelegation extends jspb.Message {
  getFeederAddress(): string;
  setFeederAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeederDelegation.AsObject;
  static toObject(includeInstance: boolean, msg: FeederDelegation): FeederDelegation.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: FeederDelegation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeederDelegation;
  static deserializeBinaryFromReader(message: FeederDelegation, reader: jspb.BinaryReader): FeederDelegation;
}

export namespace FeederDelegation {
  export type AsObject = {
    feederAddress: string;
    validatorAddress: string;
  };
}

export class MissCounter extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getMissCounter(): number;
  setMissCounter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissCounter.AsObject;
  static toObject(includeInstance: boolean, msg: MissCounter): MissCounter.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MissCounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissCounter;
  static deserializeBinaryFromReader(message: MissCounter, reader: jspb.BinaryReader): MissCounter;
}

export namespace MissCounter {
  export type AsObject = {
    validatorAddress: string;
    missCounter: number;
  };
}

export class TobinTax extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getTobinTax(): string;
  setTobinTax(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TobinTax.AsObject;
  static toObject(includeInstance: boolean, msg: TobinTax): TobinTax.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TobinTax, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TobinTax;
  static deserializeBinaryFromReader(message: TobinTax, reader: jspb.BinaryReader): TobinTax;
}

export namespace TobinTax {
  export type AsObject = {
    denom: string;
    tobinTax: string;
  };
}
