// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as terra_wasm_v1beta1_wasm_pb from "../../../terra/wasm/v1beta1/wasm_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): terra_wasm_v1beta1_wasm_pb.Params | undefined;
  setParams(value?: terra_wasm_v1beta1_wasm_pb.Params): void;

  getLastCodeId(): number;
  setLastCodeId(value: number): void;

  getLastInstanceId(): number;
  setLastInstanceId(value: number): void;

  clearCodesList(): void;
  getCodesList(): Array<Code>;
  setCodesList(value: Array<Code>): void;
  addCodes(value?: Code, index?: number): Code;

  clearContractsList(): void;
  getContractsList(): Array<Contract>;
  setContractsList(value: Array<Contract>): void;
  addContracts(value?: Contract, index?: number): Contract;

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
    params?: terra_wasm_v1beta1_wasm_pb.Params.AsObject;
    lastCodeId: number;
    lastInstanceId: number;
    codesList: Array<Code.AsObject>;
    contractsList: Array<Contract.AsObject>;
  };
}

export class Model extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    key: Uint8Array | string;
    value: Uint8Array | string;
  };
}

export class Code extends jspb.Message {
  hasCodeInfo(): boolean;
  clearCodeInfo(): void;
  getCodeInfo(): terra_wasm_v1beta1_wasm_pb.CodeInfo | undefined;
  setCodeInfo(value?: terra_wasm_v1beta1_wasm_pb.CodeInfo): void;

  getCodeBytes(): Uint8Array | string;
  getCodeBytes_asU8(): Uint8Array;
  getCodeBytes_asB64(): string;
  setCodeBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Code.AsObject;
  static toObject(includeInstance: boolean, msg: Code): Code.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Code;
  static deserializeBinaryFromReader(message: Code, reader: jspb.BinaryReader): Code;
}

export namespace Code {
  export type AsObject = {
    codeInfo?: terra_wasm_v1beta1_wasm_pb.CodeInfo.AsObject;
    codeBytes: Uint8Array | string;
  };
}

export class Contract extends jspb.Message {
  hasContractInfo(): boolean;
  clearContractInfo(): void;
  getContractInfo(): terra_wasm_v1beta1_wasm_pb.ContractInfo | undefined;
  setContractInfo(value?: terra_wasm_v1beta1_wasm_pb.ContractInfo): void;

  clearContractStoreList(): void;
  getContractStoreList(): Array<Model>;
  setContractStoreList(value: Array<Model>): void;
  addContractStore(value?: Model, index?: number): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    contractInfo?: terra_wasm_v1beta1_wasm_pb.ContractInfo.AsObject;
    contractStoreList: Array<Model.AsObject>;
  };
}
