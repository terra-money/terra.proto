// package: terra.market.v1beta1
// file: terra/market/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class MsgSwap extends jspb.Message {
  getTrader(): string;
  setTrader(value: string): void;

  hasOfferCoin(): boolean;
  clearOfferCoin(): void;
  getOfferCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setOfferCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getAskDenom(): string;
  setAskDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSwap.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSwap): MsgSwap.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgSwap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSwap;
  static deserializeBinaryFromReader(message: MsgSwap, reader: jspb.BinaryReader): MsgSwap;
}

export namespace MsgSwap {
  export type AsObject = {
    trader: string;
    offerCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
    askDenom: string;
  };
}

export class MsgSwapResponse extends jspb.Message {
  hasSwapCoin(): boolean;
  clearSwapCoin(): void;
  getSwapCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setSwapCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  hasSwapFee(): boolean;
  clearSwapFee(): void;
  getSwapFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setSwapFee(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSwapResponse): MsgSwapResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSwapResponse;
  static deserializeBinaryFromReader(message: MsgSwapResponse, reader: jspb.BinaryReader): MsgSwapResponse;
}

export namespace MsgSwapResponse {
  export type AsObject = {
    swapCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
    swapFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
  };
}

export class MsgSwapSend extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  hasOfferCoin(): boolean;
  clearOfferCoin(): void;
  getOfferCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setOfferCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getAskDenom(): string;
  setAskDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSwapSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSwapSend): MsgSwapSend.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgSwapSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSwapSend;
  static deserializeBinaryFromReader(message: MsgSwapSend, reader: jspb.BinaryReader): MsgSwapSend;
}

export namespace MsgSwapSend {
  export type AsObject = {
    fromAddress: string;
    toAddress: string;
    offerCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
    askDenom: string;
  };
}

export class MsgSwapSendResponse extends jspb.Message {
  hasSwapCoin(): boolean;
  clearSwapCoin(): void;
  getSwapCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setSwapCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  hasSwapFee(): boolean;
  clearSwapFee(): void;
  getSwapFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setSwapFee(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSwapSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSwapSendResponse): MsgSwapSendResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: MsgSwapSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSwapSendResponse;
  static deserializeBinaryFromReader(
    message: MsgSwapSendResponse,
    reader: jspb.BinaryReader,
  ): MsgSwapSendResponse;
}

export namespace MsgSwapSendResponse {
  export type AsObject = {
    swapCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
    swapFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject;
  };
}
