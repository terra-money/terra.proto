// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/vesting.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";

export class BaseVestingAccount extends jspb.Message {
  hasBaseAccount(): boolean;
  clearBaseAccount(): void;
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): void;

  clearOriginalVestingList(): void;
  getOriginalVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setOriginalVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addOriginalVesting(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  clearDelegatedFreeList(): void;
  getDelegatedFreeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedFreeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addDelegatedFree(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  clearDelegatedVestingList(): void;
  getDelegatedVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addDelegatedVesting(
    value?: cosmos_base_v1beta1_coin_pb.Coin,
    index?: number,
  ): cosmos_base_v1beta1_coin_pb.Coin;

  getEndTime(): number;
  setEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BaseVestingAccount): BaseVestingAccount.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: BaseVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseVestingAccount;
  static deserializeBinaryFromReader(
    message: BaseVestingAccount,
    reader: jspb.BinaryReader,
  ): BaseVestingAccount;
}

export namespace BaseVestingAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject;
    originalVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    delegatedFreeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    delegatedVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
    endTime: number;
  };
}
