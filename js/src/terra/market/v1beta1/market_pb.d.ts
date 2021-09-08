// package: terra.market.v1beta1
// file: terra/market/v1beta1/market.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class Params extends jspb.Message {
  getBasePool(): Uint8Array | string;
  getBasePool_asU8(): Uint8Array;
  getBasePool_asB64(): string;
  setBasePool(value: Uint8Array | string): void;

  getPoolRecoveryPeriod(): number;
  setPoolRecoveryPeriod(value: number): void;

  getMinStabilitySpread(): Uint8Array | string;
  getMinStabilitySpread_asU8(): Uint8Array;
  getMinStabilitySpread_asB64(): string;
  setMinStabilitySpread(value: Uint8Array | string): void;

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
    basePool: Uint8Array | string;
    poolRecoveryPeriod: number;
    minStabilitySpread: Uint8Array | string;
  };
}
