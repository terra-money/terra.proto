/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BaseVestingAccount } from "../../../cosmos/vesting/v1beta1/vesting";

export const protobufPackage = "terra.vesting.v1beta1";

/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestingSchedules: VestingSchedule[];
}

/** Schedule - represent single schedule data for a vesting schedule */
export interface Schedule {
  startTime: Long;
  endTime: Long;
  ratio: string;
}

/** VestingSchedule defines vesting schedule for a denom */
export interface VestingSchedule {
  denom: string;
  schedules: Schedule[];
}

const baseLazyGradedVestingAccount: object = {};

export const LazyGradedVestingAccount = {
  encode(message: LazyGradedVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LazyGradedVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLazyGradedVestingAccount } as LazyGradedVestingAccount;
    message.vestingSchedules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.vestingSchedules.push(VestingSchedule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LazyGradedVestingAccount {
    const message = { ...baseLazyGradedVestingAccount } as LazyGradedVestingAccount;
    message.vestingSchedules = [];
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    } else {
      message.baseVestingAccount = undefined;
    }
    if (object.vestingSchedules !== undefined && object.vestingSchedules !== null) {
      for (const e of object.vestingSchedules) {
        message.vestingSchedules.push(VestingSchedule.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: LazyGradedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    if (message.vestingSchedules) {
      obj.vestingSchedules = message.vestingSchedules.map((e) => (e ? VestingSchedule.toJSON(e) : undefined));
    } else {
      obj.vestingSchedules = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LazyGradedVestingAccount>): LazyGradedVestingAccount {
    const message = { ...baseLazyGradedVestingAccount } as LazyGradedVestingAccount;
    message.vestingSchedules = [];
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    } else {
      message.baseVestingAccount = undefined;
    }
    if (object.vestingSchedules !== undefined && object.vestingSchedules !== null) {
      for (const e of object.vestingSchedules) {
        message.vestingSchedules.push(VestingSchedule.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSchedule: object = { startTime: Long.ZERO, endTime: Long.ZERO, ratio: "" };

export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startTime.isZero()) {
      writer.uint32(8).int64(message.startTime);
    }
    if (!message.endTime.isZero()) {
      writer.uint32(16).int64(message.endTime);
    }
    if (message.ratio !== "") {
      writer.uint32(26).string(message.ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchedule } as Schedule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int64() as Long;
          break;
        case 2:
          message.endTime = reader.int64() as Long;
          break;
        case 3:
          message.ratio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    const message = { ...baseSchedule } as Schedule;
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Long.fromString(object.startTime);
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Long.fromString(object.endTime);
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = String(object.ratio);
    } else {
      message.ratio = "";
    }
    return message;
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.ratio !== undefined && (obj.ratio = message.ratio);
    return obj;
  },

  fromPartial(object: DeepPartial<Schedule>): Schedule {
    const message = { ...baseSchedule } as Schedule;
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime as Long;
    } else {
      message.startTime = Long.ZERO;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime as Long;
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    } else {
      message.ratio = "";
    }
    return message;
  },
};

const baseVestingSchedule: object = { denom: "" };

export const VestingSchedule = {
  encode(message: VestingSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VestingSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVestingSchedule } as VestingSchedule;
    message.schedules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule;
    message.schedules = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.schedules !== undefined && object.schedules !== null) {
      for (const e of object.schedules) {
        message.schedules.push(Schedule.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VestingSchedule): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.schedules) {
      obj.schedules = message.schedules.map((e) => (e ? Schedule.toJSON(e) : undefined));
    } else {
      obj.schedules = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VestingSchedule>): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule;
    message.schedules = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.schedules !== undefined && object.schedules !== null) {
      for (const e of object.schedules) {
        message.schedules.push(Schedule.fromPartial(e));
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
