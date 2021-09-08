// package: terra.market.v1beta1
// file: terra/market/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as terra_market_v1beta1_market_pb from "../../../terra/market/v1beta1/market_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QuerySwapRequest extends jspb.Message {
  getOfferCoin(): string;
  setOfferCoin(value: string): void;

  getAskDenom(): string;
  setAskDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySwapRequest): QuerySwapRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QuerySwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySwapRequest;
  static deserializeBinaryFromReader(message: QuerySwapRequest, reader: jspb.BinaryReader): QuerySwapRequest;
}

export namespace QuerySwapRequest {
  export type AsObject = {
    offerCoin: string;
    askDenom: string;
  };
}

export class QuerySwapResponse extends jspb.Message {
  hasReturnCoin(): boolean;
  clearReturnCoin(): void;
  getReturnCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setReturnCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySwapResponse): QuerySwapResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QuerySwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySwapResponse;
  static deserializeBinaryFromReader(
    message: QuerySwapResponse,
    reader: jspb.BinaryReader,
  ): QuerySwapResponse;
}

export namespace QuerySwapResponse {
  export type AsObject = {
    returnCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
  };
}

export class QueryTerraPoolDeltaRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTerraPoolDeltaRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryTerraPoolDeltaRequest,
  ): QueryTerraPoolDeltaRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTerraPoolDeltaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTerraPoolDeltaRequest;
  static deserializeBinaryFromReader(
    message: QueryTerraPoolDeltaRequest,
    reader: jspb.BinaryReader,
  ): QueryTerraPoolDeltaRequest;
}

export namespace QueryTerraPoolDeltaRequest {
  export type AsObject = {};
}

export class QueryTerraPoolDeltaResponse extends jspb.Message {
  getTerraPoolDelta(): Uint8Array | string;
  getTerraPoolDelta_asU8(): Uint8Array;
  getTerraPoolDelta_asB64(): string;
  setTerraPoolDelta(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTerraPoolDeltaResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryTerraPoolDeltaResponse,
  ): QueryTerraPoolDeltaResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTerraPoolDeltaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTerraPoolDeltaResponse;
  static deserializeBinaryFromReader(
    message: QueryTerraPoolDeltaResponse,
    reader: jspb.BinaryReader,
  ): QueryTerraPoolDeltaResponse;
}

export namespace QueryTerraPoolDeltaResponse {
  export type AsObject = {
    terraPoolDelta: Uint8Array | string;
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
  getParams(): terra_market_v1beta1_market_pb.Params | undefined;
  setParams(value?: terra_market_v1beta1_market_pb.Params): void;

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
    params?: terra_market_v1beta1_market_pb.Params.AsObject;
  };
}
