// package: terra.treasury.v1beta1
// file: terra/treasury/v1beta1/treasury.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  hasTaxPolicy(): boolean;
  clearTaxPolicy(): void;
  getTaxPolicy(): PolicyConstraints | undefined;
  setTaxPolicy(value?: PolicyConstraints): void;

  hasRewardPolicy(): boolean;
  clearRewardPolicy(): void;
  getRewardPolicy(): PolicyConstraints | undefined;
  setRewardPolicy(value?: PolicyConstraints): void;

  getSeigniorageBurdenTarget(): string;
  setSeigniorageBurdenTarget(value: string): void;

  getMiningIncrement(): string;
  setMiningIncrement(value: string): void;

  getWindowShort(): number;
  setWindowShort(value: number): void;

  getWindowLong(): number;
  setWindowLong(value: number): void;

  getWindowProbation(): number;
  setWindowProbation(value: number): void;

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
    taxPolicy?: PolicyConstraints.AsObject;
    rewardPolicy?: PolicyConstraints.AsObject;
    seigniorageBurdenTarget: string;
    miningIncrement: string;
    windowShort: number;
    windowLong: number;
    windowProbation: number;
  };
}

export class PolicyConstraints extends jspb.Message {
  getRateMin(): string;
  setRateMin(value: string): void;

  getRateMax(): string;
  setRateMax(value: string): void;

  hasCap(): boolean;
  clearCap(): void;
  getCap(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setCap(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getChangeRateMax(): string;
  setChangeRateMax(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyConstraints): PolicyConstraints.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: PolicyConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyConstraints;
  static deserializeBinaryFromReader(
    message: PolicyConstraints,
    reader: jspb.BinaryReader,
  ): PolicyConstraints;
}

export namespace PolicyConstraints {
  export type AsObject = {
    rateMin: string;
    rateMax: string;
    cap?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
    changeRateMax: string;
  };
}

export class EpochTaxProceeds extends jspb.Message {
  clearTaxProceedsList(): void;
  getTaxProceedsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTaxProceedsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTaxProceeds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochTaxProceeds.AsObject;
  static toObject(includeInstance: boolean, msg: EpochTaxProceeds): EpochTaxProceeds.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: EpochTaxProceeds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpochTaxProceeds;
  static deserializeBinaryFromReader(message: EpochTaxProceeds, reader: jspb.BinaryReader): EpochTaxProceeds;
}

export namespace EpochTaxProceeds {
  export type AsObject = {
    taxProceedsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class EpochInitialIssuance extends jspb.Message {
  clearIssuanceList(): void;
  getIssuanceList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setIssuanceList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addIssuance(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochInitialIssuance.AsObject;
  static toObject(includeInstance: boolean, msg: EpochInitialIssuance): EpochInitialIssuance.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: EpochInitialIssuance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpochInitialIssuance;
  static deserializeBinaryFromReader(
    message: EpochInitialIssuance,
    reader: jspb.BinaryReader,
  ): EpochInitialIssuance;
}

export namespace EpochInitialIssuance {
  export type AsObject = {
    issuanceList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}
