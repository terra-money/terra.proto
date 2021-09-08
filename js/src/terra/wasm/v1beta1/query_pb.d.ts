// package: terra.wasm.v1beta1
// file: terra/wasm/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as terra_wasm_v1beta1_wasm_pb from "../../../terra/wasm/v1beta1/wasm_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QueryCodeInfoRequest extends jspb.Message {
  getCodeId(): number;
  setCodeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCodeInfoRequest): QueryCodeInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryCodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCodeInfoRequest;
  static deserializeBinaryFromReader(
    message: QueryCodeInfoRequest,
    reader: jspb.BinaryReader,
  ): QueryCodeInfoRequest;
}

export namespace QueryCodeInfoRequest {
  export type AsObject = {
    codeId: number;
  };
}

export class QueryCodeInfoResponse extends jspb.Message {
  hasCodeInfo(): boolean;
  clearCodeInfo(): void;
  getCodeInfo(): terra_wasm_v1beta1_wasm_pb.CodeInfo | undefined;
  setCodeInfo(value?: terra_wasm_v1beta1_wasm_pb.CodeInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCodeInfoResponse): QueryCodeInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryCodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCodeInfoResponse;
  static deserializeBinaryFromReader(
    message: QueryCodeInfoResponse,
    reader: jspb.BinaryReader,
  ): QueryCodeInfoResponse;
}

export namespace QueryCodeInfoResponse {
  export type AsObject = {
    codeInfo?: terra_wasm_v1beta1_wasm_pb.CodeInfo.AsObject;
  };
}

export class QueryByteCodeRequest extends jspb.Message {
  getCodeId(): number;
  setCodeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryByteCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryByteCodeRequest): QueryByteCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryByteCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryByteCodeRequest;
  static deserializeBinaryFromReader(
    message: QueryByteCodeRequest,
    reader: jspb.BinaryReader,
  ): QueryByteCodeRequest;
}

export namespace QueryByteCodeRequest {
  export type AsObject = {
    codeId: number;
  };
}

export class QueryByteCodeResponse extends jspb.Message {
  getByteCode(): Uint8Array | string;
  getByteCode_asU8(): Uint8Array;
  getByteCode_asB64(): string;
  setByteCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryByteCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryByteCodeResponse): QueryByteCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryByteCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryByteCodeResponse;
  static deserializeBinaryFromReader(
    message: QueryByteCodeResponse,
    reader: jspb.BinaryReader,
  ): QueryByteCodeResponse;
}

export namespace QueryByteCodeResponse {
  export type AsObject = {
    byteCode: Uint8Array | string;
  };
}

export class QueryContractInfoRequest extends jspb.Message {
  getContractAddress(): string;
  setContractAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryContractInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryContractInfoRequest): QueryContractInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryContractInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryContractInfoRequest;
  static deserializeBinaryFromReader(
    message: QueryContractInfoRequest,
    reader: jspb.BinaryReader,
  ): QueryContractInfoRequest;
}

export namespace QueryContractInfoRequest {
  export type AsObject = {
    contractAddress: string;
  };
}

export class QueryContractInfoResponse extends jspb.Message {
  hasContractInfo(): boolean;
  clearContractInfo(): void;
  getContractInfo(): terra_wasm_v1beta1_wasm_pb.ContractInfo | undefined;
  setContractInfo(value?: terra_wasm_v1beta1_wasm_pb.ContractInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryContractInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryContractInfoResponse,
  ): QueryContractInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryContractInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryContractInfoResponse;
  static deserializeBinaryFromReader(
    message: QueryContractInfoResponse,
    reader: jspb.BinaryReader,
  ): QueryContractInfoResponse;
}

export namespace QueryContractInfoResponse {
  export type AsObject = {
    contractInfo?: terra_wasm_v1beta1_wasm_pb.ContractInfo.AsObject;
  };
}

export class QueryContractStoreRequest extends jspb.Message {
  getContractAddress(): string;
  setContractAddress(value: string): void;

  getQueryMsg(): Uint8Array | string;
  getQueryMsg_asU8(): Uint8Array;
  getQueryMsg_asB64(): string;
  setQueryMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryContractStoreRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryContractStoreRequest,
  ): QueryContractStoreRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryContractStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryContractStoreRequest;
  static deserializeBinaryFromReader(
    message: QueryContractStoreRequest,
    reader: jspb.BinaryReader,
  ): QueryContractStoreRequest;
}

export namespace QueryContractStoreRequest {
  export type AsObject = {
    contractAddress: string;
    queryMsg: Uint8Array | string;
  };
}

export class QueryContractStoreResponse extends jspb.Message {
  getQueryResult(): Uint8Array | string;
  getQueryResult_asU8(): Uint8Array;
  getQueryResult_asB64(): string;
  setQueryResult(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryContractStoreResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryContractStoreResponse,
  ): QueryContractStoreResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryContractStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryContractStoreResponse;
  static deserializeBinaryFromReader(
    message: QueryContractStoreResponse,
    reader: jspb.BinaryReader,
  ): QueryContractStoreResponse;
}

export namespace QueryContractStoreResponse {
  export type AsObject = {
    queryResult: Uint8Array | string;
  };
}

export class QueryRawStoreRequest extends jspb.Message {
  getContractAddress(): string;
  setContractAddress(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRawStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRawStoreRequest): QueryRawStoreRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryRawStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRawStoreRequest;
  static deserializeBinaryFromReader(
    message: QueryRawStoreRequest,
    reader: jspb.BinaryReader,
  ): QueryRawStoreRequest;
}

export namespace QueryRawStoreRequest {
  export type AsObject = {
    contractAddress: string;
    key: Uint8Array | string;
  };
}

export class QueryRawStoreResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRawStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRawStoreResponse): QueryRawStoreResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryRawStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRawStoreResponse;
  static deserializeBinaryFromReader(
    message: QueryRawStoreResponse,
    reader: jspb.BinaryReader,
  ): QueryRawStoreResponse;
}

export namespace QueryRawStoreResponse {
  export type AsObject = {
    data: Uint8Array | string;
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
  getParams(): terra_wasm_v1beta1_wasm_pb.Params | undefined;
  setParams(value?: terra_wasm_v1beta1_wasm_pb.Params): void;

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
    params?: terra_wasm_v1beta1_wasm_pb.Params.AsObject;
  };
}
