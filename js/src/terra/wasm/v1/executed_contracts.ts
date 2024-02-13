/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.wasm.v1";

/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContracts {
  contractAddresses: string[];
}

const baseExecutedContracts: object = { contractAddresses: "" };

export const ExecutedContracts = {
  encode(message: ExecutedContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutedContracts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecutedContracts } as ExecutedContracts;
    message.contractAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutedContracts {
    const message = { ...baseExecutedContracts } as ExecutedContracts;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ExecutedContracts): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExecutedContracts>): ExecutedContracts {
    const message = { ...baseExecutedContracts } as ExecutedContracts;
    message.contractAddresses = [];
    if (object.contractAddresses !== undefined && object.contractAddresses !== null) {
      for (const e of object.contractAddresses) {
        message.contractAddresses.push(e);
      }
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
