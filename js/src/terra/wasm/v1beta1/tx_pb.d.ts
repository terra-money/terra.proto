// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class MsgStoreCode extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getWasmByteCode(): Uint8Array | string;
  getWasmByteCode_asU8(): Uint8Array;
  getWasmByteCode_asB64(): string;
  setWasmByteCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStoreCode.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStoreCode): MsgStoreCode.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgStoreCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStoreCode;
  static deserializeBinaryFromReader(message: MsgStoreCode, reader: jspb.BinaryReader): MsgStoreCode;
}

export namespace MsgStoreCode {
  export type AsObject = {
    sender: string;
    wasmByteCode: Uint8Array | string;
  };
}

export class MsgStoreCodeResponse extends jspb.Message {
  getCodeId(): number;
  setCodeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStoreCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStoreCodeResponse): MsgStoreCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgStoreCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStoreCodeResponse;
  static deserializeBinaryFromReader(
    message: MsgStoreCodeResponse,
    reader: jspb.BinaryReader,
  ): MsgStoreCodeResponse;
}

export namespace MsgStoreCodeResponse {
  export type AsObject = {
    codeId: number;
  };
}

export class MsgMigrateCode extends jspb.Message {
  getCodeId(): number;
  setCodeId(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  getWasmByteCode(): Uint8Array | string;
  getWasmByteCode_asU8(): Uint8Array;
  getWasmByteCode_asB64(): string;
  setWasmByteCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateCode.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMigrateCode): MsgMigrateCode.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgMigrateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateCode;
  static deserializeBinaryFromReader(message: MsgMigrateCode, reader: jspb.BinaryReader): MsgMigrateCode;
}

export namespace MsgMigrateCode {
  export type AsObject = {
    codeId: number;
    sender: string;
    wasmByteCode: Uint8Array | string;
  };
}

export class MsgMigrateCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMigrateCodeResponse): MsgMigrateCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgMigrateCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateCodeResponse;
  static deserializeBinaryFromReader(
    message: MsgMigrateCodeResponse,
    reader: jspb.BinaryReader,
  ): MsgMigrateCodeResponse;
}

export namespace MsgMigrateCodeResponse {
  export type AsObject = {};
}

export class MsgInstantiateContract extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getAdmin(): string;
  setAdmin(value: string): void;

  getCodeId(): number;
  setCodeId(value: number): void;

  getInitMsg(): Uint8Array | string;
  getInitMsg_asU8(): Uint8Array;
  getInitMsg_asB64(): string;
  setInitMsg(value: Uint8Array | string): void;

  clearInitCoinsList(): void;
  getInitCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setInitCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addInitCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantiateContract.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantiateContract): MsgInstantiateContract.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgInstantiateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantiateContract;
  static deserializeBinaryFromReader(
    message: MsgInstantiateContract,
    reader: jspb.BinaryReader,
  ): MsgInstantiateContract;
}

export namespace MsgInstantiateContract {
  export type AsObject = {
    sender: string;
    admin: string;
    codeId: number;
    initMsg: Uint8Array | string;
    initCoinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class MsgInstantiateContractResponse extends jspb.Message {
  getContractAddress(): string;
  setContractAddress(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantiateContractResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgInstantiateContractResponse,
  ): MsgInstantiateContractResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgInstantiateContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantiateContractResponse;
  static deserializeBinaryFromReader(
    message: MsgInstantiateContractResponse,
    reader: jspb.BinaryReader,
  ): MsgInstantiateContractResponse;
}

export namespace MsgInstantiateContractResponse {
  export type AsObject = {
    contractAddress: string;
    data: Uint8Array | string;
  };
}

export class MsgExecuteContract extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  getExecuteMsg(): Uint8Array | string;
  getExecuteMsg_asU8(): Uint8Array;
  getExecuteMsg_asB64(): string;
  setExecuteMsg(value: Uint8Array | string): void;

  clearCoinsList(): void;
  getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecuteContract.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecuteContract): MsgExecuteContract.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgExecuteContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecuteContract;
  static deserializeBinaryFromReader(
    message: MsgExecuteContract,
    reader: jspb.BinaryReader,
  ): MsgExecuteContract;
}

export namespace MsgExecuteContract {
  export type AsObject = {
    sender: string;
    contract: string;
    executeMsg: Uint8Array | string;
    coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class MsgExecuteContractResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecuteContractResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgExecuteContractResponse,
  ): MsgExecuteContractResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgExecuteContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecuteContractResponse;
  static deserializeBinaryFromReader(
    message: MsgExecuteContractResponse,
    reader: jspb.BinaryReader,
  ): MsgExecuteContractResponse;
}

export namespace MsgExecuteContractResponse {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class MsgMigrateContract extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  getNewCodeId(): number;
  setNewCodeId(value: number): void;

  getMigrateMsg(): Uint8Array | string;
  getMigrateMsg_asU8(): Uint8Array;
  getMigrateMsg_asB64(): string;
  setMigrateMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateContract.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMigrateContract): MsgMigrateContract.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgMigrateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateContract;
  static deserializeBinaryFromReader(
    message: MsgMigrateContract,
    reader: jspb.BinaryReader,
  ): MsgMigrateContract;
}

export namespace MsgMigrateContract {
  export type AsObject = {
    admin: string;
    contract: string;
    newCodeId: number;
    migrateMsg: Uint8Array | string;
  };
}

export class MsgMigrateContractResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateContractResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgMigrateContractResponse,
  ): MsgMigrateContractResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgMigrateContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateContractResponse;
  static deserializeBinaryFromReader(
    message: MsgMigrateContractResponse,
    reader: jspb.BinaryReader,
  ): MsgMigrateContractResponse;
}

export namespace MsgMigrateContractResponse {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class MsgUpdateContractAdmin extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  getNewAdmin(): string;
  setNewAdmin(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateContractAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateContractAdmin): MsgUpdateContractAdmin.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgUpdateContractAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateContractAdmin;
  static deserializeBinaryFromReader(
    message: MsgUpdateContractAdmin,
    reader: jspb.BinaryReader,
  ): MsgUpdateContractAdmin;
}

export namespace MsgUpdateContractAdmin {
  export type AsObject = {
    admin: string;
    newAdmin: string;
    contract: string;
  };
}

export class MsgUpdateContractAdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateContractAdminResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgUpdateContractAdminResponse,
  ): MsgUpdateContractAdminResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgUpdateContractAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateContractAdminResponse;
  static deserializeBinaryFromReader(
    message: MsgUpdateContractAdminResponse,
    reader: jspb.BinaryReader,
  ): MsgUpdateContractAdminResponse;
}

export namespace MsgUpdateContractAdminResponse {
  export type AsObject = {};
}

export class MsgClearContractAdmin extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  getContract(): string;
  setContract(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgClearContractAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: MsgClearContractAdmin): MsgClearContractAdmin.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgClearContractAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgClearContractAdmin;
  static deserializeBinaryFromReader(
    message: MsgClearContractAdmin,
    reader: jspb.BinaryReader,
  ): MsgClearContractAdmin;
}

export namespace MsgClearContractAdmin {
  export type AsObject = {
    admin: string;
    contract: string;
  };
}

export class MsgClearContractAdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgClearContractAdminResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MsgClearContractAdminResponse,
  ): MsgClearContractAdminResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgClearContractAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgClearContractAdminResponse;
  static deserializeBinaryFromReader(
    message: MsgClearContractAdminResponse,
    reader: jspb.BinaryReader,
  ): MsgClearContractAdminResponse;
}

export namespace MsgClearContractAdminResponse {
  export type AsObject = {};
}
