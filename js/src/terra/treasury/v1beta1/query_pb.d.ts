// package: terra.treasury.v1beta1
// file: terra/treasury/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as terra_treasury_v1beta1_treasury_pb from "../../../terra/treasury/v1beta1/treasury_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QueryTaxRateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxRateRequest): QueryTaxRateRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxRateRequest;
  static deserializeBinaryFromReader(
    message: QueryTaxRateRequest,
    reader: jspb.BinaryReader,
  ): QueryTaxRateRequest;
}

export namespace QueryTaxRateRequest {
  export type AsObject = {};
}

export class QueryTaxRateResponse extends jspb.Message {
  getTaxRate(): string;
  setTaxRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxRateResponse): QueryTaxRateResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxRateResponse;
  static deserializeBinaryFromReader(
    message: QueryTaxRateResponse,
    reader: jspb.BinaryReader,
  ): QueryTaxRateResponse;
}

export namespace QueryTaxRateResponse {
  export type AsObject = {
    taxRate: string;
  };
}

export class QueryTaxCapRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxCapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxCapRequest): QueryTaxCapRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxCapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxCapRequest;
  static deserializeBinaryFromReader(
    message: QueryTaxCapRequest,
    reader: jspb.BinaryReader,
  ): QueryTaxCapRequest;
}

export namespace QueryTaxCapRequest {
  export type AsObject = {
    denom: string;
  };
}

export class QueryTaxCapResponse extends jspb.Message {
  getTaxCap(): string;
  setTaxCap(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxCapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxCapResponse): QueryTaxCapResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxCapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxCapResponse;
  static deserializeBinaryFromReader(
    message: QueryTaxCapResponse,
    reader: jspb.BinaryReader,
  ): QueryTaxCapResponse;
}

export namespace QueryTaxCapResponse {
  export type AsObject = {
    taxCap: string;
  };
}

export class QueryTaxCapsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxCapsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxCapsRequest): QueryTaxCapsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxCapsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxCapsRequest;
  static deserializeBinaryFromReader(
    message: QueryTaxCapsRequest,
    reader: jspb.BinaryReader,
  ): QueryTaxCapsRequest;
}

export namespace QueryTaxCapsRequest {
  export type AsObject = {};
}

export class QueryTaxCapsResponseItem extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getTaxCap(): string;
  setTaxCap(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxCapsResponseItem.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxCapsResponseItem): QueryTaxCapsResponseItem.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxCapsResponseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxCapsResponseItem;
  static deserializeBinaryFromReader(
    message: QueryTaxCapsResponseItem,
    reader: jspb.BinaryReader,
  ): QueryTaxCapsResponseItem;
}

export namespace QueryTaxCapsResponseItem {
  export type AsObject = {
    denom: string;
    taxCap: string;
  };
}

export class QueryTaxCapsResponse extends jspb.Message {
  clearTaxCapsList(): void;
  getTaxCapsList(): Array<QueryTaxCapsResponseItem>;
  setTaxCapsList(value: Array<QueryTaxCapsResponseItem>): void;
  addTaxCaps(value?: QueryTaxCapsResponseItem, index?: number): QueryTaxCapsResponseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxCapsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxCapsResponse): QueryTaxCapsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxCapsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxCapsResponse;
  static deserializeBinaryFromReader(
    message: QueryTaxCapsResponse,
    reader: jspb.BinaryReader,
  ): QueryTaxCapsResponse;
}

export namespace QueryTaxCapsResponse {
  export type AsObject = {
    taxCapsList: Array<QueryTaxCapsResponseItem.AsObject>;
  };
}

export class QueryRewardWeightRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRewardWeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRewardWeightRequest): QueryRewardWeightRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryRewardWeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRewardWeightRequest;
  static deserializeBinaryFromReader(
    message: QueryRewardWeightRequest,
    reader: jspb.BinaryReader,
  ): QueryRewardWeightRequest;
}

export namespace QueryRewardWeightRequest {
  export type AsObject = {};
}

export class QueryRewardWeightResponse extends jspb.Message {
  getRewardWeight(): string;
  setRewardWeight(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRewardWeightResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QueryRewardWeightResponse,
  ): QueryRewardWeightResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryRewardWeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRewardWeightResponse;
  static deserializeBinaryFromReader(
    message: QueryRewardWeightResponse,
    reader: jspb.BinaryReader,
  ): QueryRewardWeightResponse;
}

export namespace QueryRewardWeightResponse {
  export type AsObject = {
    rewardWeight: string;
  };
}

export class QueryTaxProceedsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxProceedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxProceedsRequest): QueryTaxProceedsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxProceedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxProceedsRequest;
  static deserializeBinaryFromReader(
    message: QueryTaxProceedsRequest,
    reader: jspb.BinaryReader,
  ): QueryTaxProceedsRequest;
}

export namespace QueryTaxProceedsRequest {
  export type AsObject = {};
}

export class QueryTaxProceedsResponse extends jspb.Message {
  clearTaxProceedsList(): void;
  getTaxProceedsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTaxProceedsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTaxProceeds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTaxProceedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTaxProceedsResponse): QueryTaxProceedsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryTaxProceedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTaxProceedsResponse;
  static deserializeBinaryFromReader(
    message: QueryTaxProceedsResponse,
    reader: jspb.BinaryReader,
  ): QueryTaxProceedsResponse;
}

export namespace QueryTaxProceedsResponse {
  export type AsObject = {
    taxProceedsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}

export class QuerySeigniorageProceedsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySeigniorageProceedsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySeigniorageProceedsRequest,
  ): QuerySeigniorageProceedsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QuerySeigniorageProceedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySeigniorageProceedsRequest;
  static deserializeBinaryFromReader(
    message: QuerySeigniorageProceedsRequest,
    reader: jspb.BinaryReader,
  ): QuerySeigniorageProceedsRequest;
}

export namespace QuerySeigniorageProceedsRequest {
  export type AsObject = {};
}

export class QuerySeigniorageProceedsResponse extends jspb.Message {
  getSeigniorageProceeds(): string;
  setSeigniorageProceeds(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySeigniorageProceedsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: QuerySeigniorageProceedsResponse,
  ): QuerySeigniorageProceedsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QuerySeigniorageProceedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySeigniorageProceedsResponse;
  static deserializeBinaryFromReader(
    message: QuerySeigniorageProceedsResponse,
    reader: jspb.BinaryReader,
  ): QuerySeigniorageProceedsResponse;
}

export namespace QuerySeigniorageProceedsResponse {
  export type AsObject = {
    seigniorageProceeds: string;
  };
}

export class QueryIndicatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIndicatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIndicatorsRequest): QueryIndicatorsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryIndicatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIndicatorsRequest;
  static deserializeBinaryFromReader(
    message: QueryIndicatorsRequest,
    reader: jspb.BinaryReader,
  ): QueryIndicatorsRequest;
}

export namespace QueryIndicatorsRequest {
  export type AsObject = {};
}

export class QueryIndicatorsResponse extends jspb.Message {
  getTrlYear(): string;
  setTrlYear(value: string): void;

  getTrlMonth(): string;
  setTrlMonth(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIndicatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIndicatorsResponse): QueryIndicatorsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: QueryIndicatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIndicatorsResponse;
  static deserializeBinaryFromReader(
    message: QueryIndicatorsResponse,
    reader: jspb.BinaryReader,
  ): QueryIndicatorsResponse;
}

export namespace QueryIndicatorsResponse {
  export type AsObject = {
    trlYear: string;
    trlMonth: string;
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
  getParams(): terra_treasury_v1beta1_treasury_pb.Params | undefined;
  setParams(value?: terra_treasury_v1beta1_treasury_pb.Params): void;

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
    params?: terra_treasury_v1beta1_treasury_pb.Params.AsObject;
  };
}
