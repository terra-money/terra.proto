// package: terra.market.v1beta1
// file: terra/market/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as terra_market_v1beta1_market_pb from "../../../terra/market/v1beta1/market_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): terra_market_v1beta1_market_pb.Params | undefined;
  setParams(value?: terra_market_v1beta1_market_pb.Params): void;

  getTerraPoolDelta(): Uint8Array | string;
  getTerraPoolDelta_asU8(): Uint8Array;
  getTerraPoolDelta_asB64(): string;
  setTerraPoolDelta(value: Uint8Array | string): void;

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
    params?: terra_market_v1beta1_market_pb.Params.AsObject;
    terraPoolDelta: Uint8Array | string;
  };
}
