/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.records";

/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
  depositRecordId: Long;
}

const baseTransferCallback: object = { depositRecordId: Long.UZERO };

export const TransferCallback = {
  encode(message: TransferCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.depositRecordId.isZero()) {
      writer.uint32(8).uint64(message.depositRecordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransferCallback } as TransferCallback;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecordId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferCallback {
    const message = { ...baseTransferCallback } as TransferCallback;
    if (object.depositRecordId !== undefined && object.depositRecordId !== null) {
      message.depositRecordId = Long.fromString(object.depositRecordId);
    } else {
      message.depositRecordId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: TransferCallback): unknown {
    const obj: any = {};
    message.depositRecordId !== undefined &&
      (obj.depositRecordId = (message.depositRecordId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<TransferCallback>): TransferCallback {
    const message = { ...baseTransferCallback } as TransferCallback;
    if (object.depositRecordId !== undefined && object.depositRecordId !== null) {
      message.depositRecordId = object.depositRecordId as Long;
    } else {
      message.depositRecordId = Long.UZERO;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
