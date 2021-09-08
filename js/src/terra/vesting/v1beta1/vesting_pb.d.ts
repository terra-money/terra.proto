// package: terra.vesting.v1beta1
// file: terra/vesting/v1beta1/vesting.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_vesting_v1beta1_vesting_pb from "../../../cosmos/vesting/v1beta1/vesting_pb";

export class LazyGradedVestingAccount extends jspb.Message {
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): void;
  getBaseVestingAccount(): cosmos_vesting_v1beta1_vesting_pb.BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: cosmos_vesting_v1beta1_vesting_pb.BaseVestingAccount): void;

  clearVestingSchedulesList(): void;
  getVestingSchedulesList(): Array<VestingSchedule>;
  setVestingSchedulesList(value: Array<VestingSchedule>): void;
  addVestingSchedules(value?: VestingSchedule, index?: number): VestingSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LazyGradedVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: LazyGradedVestingAccount): LazyGradedVestingAccount.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: LazyGradedVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LazyGradedVestingAccount;
  static deserializeBinaryFromReader(
    message: LazyGradedVestingAccount,
    reader: jspb.BinaryReader,
  ): LazyGradedVestingAccount;
}

export namespace LazyGradedVestingAccount {
  export type AsObject = {
    baseVestingAccount?: cosmos_vesting_v1beta1_vesting_pb.BaseVestingAccount.AsObject;
    vestingSchedulesList: Array<VestingSchedule.AsObject>;
  };
}

export class Schedule extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  getRatio(): string;
  setRatio(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    startTime: number;
    endTime: number;
    ratio: string;
  };
}

export class VestingSchedule extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  clearSchedulesList(): void;
  getSchedulesList(): Array<Schedule>;
  setSchedulesList(value: Array<Schedule>): void;
  addSchedules(value?: Schedule, index?: number): Schedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VestingSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: VestingSchedule): VestingSchedule.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: VestingSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VestingSchedule;
  static deserializeBinaryFromReader(message: VestingSchedule, reader: jspb.BinaryReader): VestingSchedule;
}

export namespace VestingSchedule {
  export type AsObject = {
    denom: string;
    schedulesList: Array<Schedule.AsObject>;
  };
}
