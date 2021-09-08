// package: terra.treasury.v1beta1
// file: terra/treasury/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as terra_treasury_v1beta1_treasury_pb from "../../../terra/treasury/v1beta1/treasury_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): terra_treasury_v1beta1_treasury_pb.Params | undefined;
  setParams(value?: terra_treasury_v1beta1_treasury_pb.Params): void;

  getTaxRate(): string;
  setTaxRate(value: string): void;

  getRewardWeight(): string;
  setRewardWeight(value: string): void;

  clearTaxCapsList(): void;
  getTaxCapsList(): Array<TaxCap>;
  setTaxCapsList(value: Array<TaxCap>): void;
  addTaxCaps(value?: TaxCap, index?: number): TaxCap;

  clearTaxProceedsList(): void;
  getTaxProceedsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTaxProceedsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTaxProceeds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearEpochInitialIssuanceList(): void;
  getEpochInitialIssuanceList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setEpochInitialIssuanceList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addEpochInitialIssuance(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  clearEpochStatesList(): void;
  getEpochStatesList(): Array<EpochState>;
  setEpochStatesList(value: Array<EpochState>): void;
  addEpochStates(value?: EpochState, index?: number): EpochState;

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
    params?: terra_treasury_v1beta1_treasury_pb.Params.AsObject;
    taxRate: string;
    rewardWeight: string;
    taxCapsList: Array<TaxCap.AsObject>;
    taxProceedsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    epochInitialIssuanceList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    epochStatesList: Array<EpochState.AsObject>;
  };
}

export class TaxCap extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getTaxCap(): string;
  setTaxCap(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaxCap.AsObject;
  static toObject(includeInstance: boolean, msg: TaxCap): TaxCap.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: TaxCap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaxCap;
  static deserializeBinaryFromReader(message: TaxCap, reader: jspb.BinaryReader): TaxCap;
}

export namespace TaxCap {
  export type AsObject = {
    denom: string;
    taxCap: string;
  };
}

export class EpochState extends jspb.Message {
  getEpoch(): number;
  setEpoch(value: number): void;

  getTaxReward(): string;
  setTaxReward(value: string): void;

  getSeigniorageReward(): string;
  setSeigniorageReward(value: string): void;

  getTotalStakedLuna(): string;
  setTotalStakedLuna(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochState.AsObject;
  static toObject(includeInstance: boolean, msg: EpochState): EpochState.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: EpochState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpochState;
  static deserializeBinaryFromReader(message: EpochState, reader: jspb.BinaryReader): EpochState;
}

export namespace EpochState {
  export type AsObject = {
    epoch: number;
    taxReward: string;
    seigniorageReward: string;
    totalStakedLuna: string;
  };
}
