/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";

export const protobufPackage = "feemarket.feemarket.v1";

/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /**
   * Params are the parameters for the feemarket module. These parameters
   * can be utilized to implement both the base EIP-1559 fee market and
   * and the AIMD EIP-1559 fee market.
   */
  params?: Params;
  /** States contains the current states of the AIMD fee market for all FeeDenom. */
  state?: State;
  /** FeeDenomParams contains the current state of the fee denom. */
  feeDenomParams: FeeDenomParam[];
}

/**
 * FeeDenomParam is utilized to track the current state of the fee denom. This includes
 * the current base fee, min base fee.
 */
export interface FeeDenomParam {
  /** FeeDenom is the denom that will be used for all fee payments. */
  feeDenom: string;
  /**
   * MinBaseFee determines the initial base fee of the module and the global
   * minimum for the network. This is denominated in fee per gas unit.
   */
  minBaseFee: string;
  /**
   * BaseFee is the current base fee. This is denominated in the fee per gas
   * unit.
   */
  baseFee: string;
}

/**
 * State is utilized to track the current state of the fee market. This includes
 * the current learning rate, and block utilization within the
 * specified AIMD window.
 */
export interface State {
  /** LearningRate is the current learning rate. */
  learningRate: string;
  /**
   * Window contains a list of the last blocks' utilization values. This is used
   * to calculate the next base fee. This stores the number of units of gas
   * consumed per block.
   */
  window: Long[];
  /** Index is the index of the current block in the block utilization window. */
  index: Long;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.feeDenomParams) {
      FeeDenomParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.feeDenomParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = State.decode(reader, reader.uint32());
          break;
        case 3:
          message.feeDenomParams.push(FeeDenomParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeDenomParams = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
      for (const e of object.feeDenomParams) {
        message.feeDenomParams.push(FeeDenomParam.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    if (message.feeDenomParams) {
      obj.feeDenomParams = message.feeDenomParams.map((e) => (e ? FeeDenomParam.toJSON(e) : undefined));
    } else {
      obj.feeDenomParams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeDenomParams = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    if (object.feeDenomParams !== undefined && object.feeDenomParams !== null) {
      for (const e of object.feeDenomParams) {
        message.feeDenomParams.push(FeeDenomParam.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeeDenomParam: object = { feeDenom: "", minBaseFee: "", baseFee: "" };

export const FeeDenomParam = {
  encode(message: FeeDenomParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDenom !== "") {
      writer.uint32(10).string(message.feeDenom);
    }
    if (message.minBaseFee !== "") {
      writer.uint32(18).string(message.minBaseFee);
    }
    if (message.baseFee !== "") {
      writer.uint32(26).string(message.baseFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDenomParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeDenomParam } as FeeDenomParam;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeDenom = reader.string();
          break;
        case 2:
          message.minBaseFee = reader.string();
          break;
        case 3:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeDenomParam {
    const message = { ...baseFeeDenomParam } as FeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = String(object.feeDenom);
    } else {
      message.feeDenom = "";
    }
    if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
      message.minBaseFee = String(object.minBaseFee);
    } else {
      message.minBaseFee = "";
    }
    if (object.baseFee !== undefined && object.baseFee !== null) {
      message.baseFee = String(object.baseFee);
    } else {
      message.baseFee = "";
    }
    return message;
  },

  toJSON(message: FeeDenomParam): unknown {
    const obj: any = {};
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.minBaseFee !== undefined && (obj.minBaseFee = message.minBaseFee);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDenomParam>): FeeDenomParam {
    const message = { ...baseFeeDenomParam } as FeeDenomParam;
    if (object.feeDenom !== undefined && object.feeDenom !== null) {
      message.feeDenom = object.feeDenom;
    } else {
      message.feeDenom = "";
    }
    if (object.minBaseFee !== undefined && object.minBaseFee !== null) {
      message.minBaseFee = object.minBaseFee;
    } else {
      message.minBaseFee = "";
    }
    if (object.baseFee !== undefined && object.baseFee !== null) {
      message.baseFee = object.baseFee;
    } else {
      message.baseFee = "";
    }
    return message;
  },
};

const baseState: object = { learningRate: "", window: Long.UZERO, index: Long.UZERO };

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.learningRate !== "") {
      writer.uint32(10).string(message.learningRate);
    }
    writer.uint32(18).fork();
    for (const v of message.window) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.index.isZero()) {
      writer.uint32(24).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseState } as State;
    message.window = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.learningRate = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.window.push(reader.uint64() as Long);
            }
          } else {
            message.window.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.index = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): State {
    const message = { ...baseState } as State;
    message.window = [];
    if (object.learningRate !== undefined && object.learningRate !== null) {
      message.learningRate = String(object.learningRate);
    } else {
      message.learningRate = "";
    }
    if (object.window !== undefined && object.window !== null) {
      for (const e of object.window) {
        message.window.push(Long.fromString(e));
      }
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromString(object.index);
    } else {
      message.index = Long.UZERO;
    }
    return message;
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.learningRate !== undefined && (obj.learningRate = message.learningRate);
    if (message.window) {
      obj.window = message.window.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.window = [];
    }
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = { ...baseState } as State;
    message.window = [];
    if (object.learningRate !== undefined && object.learningRate !== null) {
      message.learningRate = object.learningRate;
    } else {
      message.learningRate = "";
    }
    if (object.window !== undefined && object.window !== null) {
      for (const e of object.window) {
        message.window.push(e);
      }
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index as Long;
    } else {
      message.index = Long.UZERO;
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
