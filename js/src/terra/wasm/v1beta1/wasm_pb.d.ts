// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/wasm.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  getMaxContractSize(): number;
  setMaxContractSize(value: number): void;

  getMaxContractGas(): number;
  setMaxContractGas(value: number): void;

  getMaxContractMsgSize(): number;
  setMaxContractMsgSize(value: number): void;

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
    maxContractSize: number;
    maxContractGas: number;
    maxContractMsgSize: number;
  };
}

export class CodeInfo extends jspb.Message {
  getCodeId(): number;
  setCodeId(value: number): void;

  getCodeHash(): Uint8Array | string;
  getCodeHash_asU8(): Uint8Array;
  getCodeHash_asB64(): string;
  setCodeHash(value: Uint8Array | string): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CodeInfo): CodeInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: CodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeInfo;
  static deserializeBinaryFromReader(message: CodeInfo, reader: jspb.BinaryReader): CodeInfo;
}

export namespace CodeInfo {
  export type AsObject = {
    codeId: number;
    codeHash: Uint8Array | string;
    creator: string;
  };
}

export class ContractInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getCreator(): string;
  setCreator(value: string): void;

  getAdmin(): string;
  setAdmin(value: string): void;

  getCodeId(): number;
  setCodeId(value: number): void;

  getInitMsg(): Uint8Array | string;
  getInitMsg_asU8(): Uint8Array;
  getInitMsg_asB64(): string;
  setInitMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractInfo;
  static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
  export type AsObject = {
    address: string;
    creator: string;
    admin: string;
    codeId: number;
    initMsg: Uint8Array | string;
  };
}
