// package: terra.tx.v1beta1
// file: terra/tx/v1beta1/service.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_tx_v1beta1_tx_pb from "../../../cosmos/tx/v1beta1/tx_pb";

export class ComputeTaxRequest extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeTaxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeTaxRequest): ComputeTaxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ComputeTaxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeTaxRequest;
  static deserializeBinaryFromReader(
    message: ComputeTaxRequest,
    reader: jspb.BinaryReader,
  ): ComputeTaxRequest;
}

export namespace ComputeTaxRequest {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject;
  };
}

export class ComputeTaxResponse extends jspb.Message {
  clearTaxAmountList(): void;
  getTaxAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTaxAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTaxAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeTaxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeTaxResponse): ComputeTaxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: ComputeTaxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeTaxResponse;
  static deserializeBinaryFromReader(
    message: ComputeTaxResponse,
    reader: jspb.BinaryReader,
  ): ComputeTaxResponse;
}

export namespace ComputeTaxResponse {
  export type AsObject = {
    taxAmountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>;
  };
}
