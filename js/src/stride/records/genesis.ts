/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "stride.records";

export interface UserRedemptionRecord {
  /** {chain_id}.{epoch}.{sender} */
  id: string;
  sender: string;
  receiver: string;
  amount: Long;
  denom: string;
  hostZoneId: string;
  epochNumber: Long;
  claimIsPending: boolean;
}

/** Params defines the parameters for the module. */
export interface Params {}

export interface RecordsPacketData {
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  noData?: NoData | undefined;
}

export interface NoData {}

export interface DepositRecord {
  id: Long;
  amount: Long;
  denom: string;
  hostZoneId: string;
  status: DepositRecord_Status;
  depositEpochNumber: Long;
  source: DepositRecord_Source;
}

export enum DepositRecord_Status {
  /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
  TRANSFER_QUEUE = 0,
  /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
  TRANSFER_IN_PROGRESS = 2,
  /** DELEGATION_QUEUE - in staking queue on delegation ICA */
  DELEGATION_QUEUE = 1,
  /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
  DELEGATION_IN_PROGRESS = 3,
  UNRECOGNIZED = -1,
}

export function depositRecord_StatusFromJSON(object: any): DepositRecord_Status {
  switch (object) {
    case 0:
    case "TRANSFER_QUEUE":
      return DepositRecord_Status.TRANSFER_QUEUE;
    case 2:
    case "TRANSFER_IN_PROGRESS":
      return DepositRecord_Status.TRANSFER_IN_PROGRESS;
    case 1:
    case "DELEGATION_QUEUE":
      return DepositRecord_Status.DELEGATION_QUEUE;
    case 3:
    case "DELEGATION_IN_PROGRESS":
      return DepositRecord_Status.DELEGATION_IN_PROGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Status.UNRECOGNIZED;
  }
}

export function depositRecord_StatusToJSON(object: DepositRecord_Status): string {
  switch (object) {
    case DepositRecord_Status.TRANSFER_QUEUE:
      return "TRANSFER_QUEUE";
    case DepositRecord_Status.TRANSFER_IN_PROGRESS:
      return "TRANSFER_IN_PROGRESS";
    case DepositRecord_Status.DELEGATION_QUEUE:
      return "DELEGATION_QUEUE";
    case DepositRecord_Status.DELEGATION_IN_PROGRESS:
      return "DELEGATION_IN_PROGRESS";
    default:
      return "UNKNOWN";
  }
}

export enum DepositRecord_Source {
  STRIDE = 0,
  WITHDRAWAL_ICA = 1,
  UNRECOGNIZED = -1,
}

export function depositRecord_SourceFromJSON(object: any): DepositRecord_Source {
  switch (object) {
    case 0:
    case "STRIDE":
      return DepositRecord_Source.STRIDE;
    case 1:
    case "WITHDRAWAL_ICA":
      return DepositRecord_Source.WITHDRAWAL_ICA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Source.UNRECOGNIZED;
  }
}

export function depositRecord_SourceToJSON(object: DepositRecord_Source): string {
  switch (object) {
    case DepositRecord_Source.STRIDE:
      return "STRIDE";
    case DepositRecord_Source.WITHDRAWAL_ICA:
      return "WITHDRAWAL_ICA";
    default:
      return "UNKNOWN";
  }
}

export interface HostZoneUnbonding {
  stTokenAmount: Long;
  nativeTokenAmount: Long;
  denom: string;
  hostZoneId: string;
  unbondingTime: Long;
  status: HostZoneUnbonding_Status;
  userRedemptionRecords: string[];
}

export enum HostZoneUnbonding_Status {
  /** UNBONDING_QUEUE - tokens bonded on delegate account */
  UNBONDING_QUEUE = 0,
  UNBONDING_IN_PROGRESS = 3,
  /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
  EXIT_TRANSFER_QUEUE = 1,
  EXIT_TRANSFER_IN_PROGRESS = 4,
  /** CLAIMABLE - transfer success */
  CLAIMABLE = 2,
  UNRECOGNIZED = -1,
}

export function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status {
  switch (object) {
    case 0:
    case "UNBONDING_QUEUE":
      return HostZoneUnbonding_Status.UNBONDING_QUEUE;
    case 3:
    case "UNBONDING_IN_PROGRESS":
      return HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS;
    case 1:
    case "EXIT_TRANSFER_QUEUE":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE;
    case 4:
    case "EXIT_TRANSFER_IN_PROGRESS":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS;
    case 2:
    case "CLAIMABLE":
      return HostZoneUnbonding_Status.CLAIMABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HostZoneUnbonding_Status.UNRECOGNIZED;
  }
}

export function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string {
  switch (object) {
    case HostZoneUnbonding_Status.UNBONDING_QUEUE:
      return "UNBONDING_QUEUE";
    case HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS:
      return "UNBONDING_IN_PROGRESS";
    case HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE:
      return "EXIT_TRANSFER_QUEUE";
    case HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS:
      return "EXIT_TRANSFER_IN_PROGRESS";
    case HostZoneUnbonding_Status.CLAIMABLE:
      return "CLAIMABLE";
    default:
      return "UNKNOWN";
  }
}

export interface EpochUnbondingRecord {
  epochNumber: Long;
  hostZoneUnbondings: HostZoneUnbonding[];
}

/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
  params?: Params;
  portId: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: Long;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  depositRecordCount: Long;
}

const baseUserRedemptionRecord: object = {
  id: "",
  sender: "",
  receiver: "",
  amount: Long.UZERO,
  denom: "",
  hostZoneId: "",
  epochNumber: Long.UZERO,
  claimIsPending: false,
};

export const UserRedemptionRecord = {
  encode(message: UserRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(50).string(message.hostZoneId);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(56).uint64(message.epochNumber);
    }
    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserRedemptionRecord } as UserRedemptionRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.uint64() as Long;
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 6:
          message.hostZoneId = reader.string();
          break;
        case 7:
          message.epochNumber = reader.uint64() as Long;
          break;
        case 8:
          message.claimIsPending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserRedemptionRecord {
    const message = { ...baseUserRedemptionRecord } as UserRedemptionRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    } else {
      message.amount = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.claimIsPending !== undefined && object.claimIsPending !== null) {
      message.claimIsPending = Boolean(object.claimIsPending);
    } else {
      message.claimIsPending = false;
    }
    return message;
  },

  toJSON(message: UserRedemptionRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    message.claimIsPending !== undefined && (obj.claimIsPending = message.claimIsPending);
    return obj;
  },

  fromPartial(object: DeepPartial<UserRedemptionRecord>): UserRedemptionRecord {
    const message = { ...baseUserRedemptionRecord } as UserRedemptionRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount as Long;
    } else {
      message.amount = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.claimIsPending !== undefined && object.claimIsPending !== null) {
      message.claimIsPending = object.claimIsPending;
    } else {
      message.claimIsPending = false;
    }
    return message;
  },
};

const baseParams: object = {};

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Params {
    const message = { ...baseParams } as Params;
    return message;
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    return message;
  },
};

const baseRecordsPacketData: object = {};

export const RecordsPacketData = {
  encode(message: RecordsPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordsPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordsPacketData } as RecordsPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordsPacketData {
    const message = { ...baseRecordsPacketData } as RecordsPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    return message;
  },

  toJSON(message: RecordsPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordsPacketData>): RecordsPacketData {
    const message = { ...baseRecordsPacketData } as RecordsPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseDepositRecord: object = {
  id: Long.UZERO,
  amount: Long.ZERO,
  denom: "",
  hostZoneId: "",
  status: 0,
  depositEpochNumber: Long.UZERO,
  source: 0,
};

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (!message.depositEpochNumber.isZero()) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositRecord } as DepositRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.amount = reader.int64() as Long;
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.hostZoneId = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.depositEpochNumber = reader.uint64() as Long;
          break;
        case 8:
          message.source = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositRecord {
    const message = { ...baseDepositRecord } as DepositRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Long.fromString(object.amount);
    } else {
      message.amount = Long.ZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = depositRecord_StatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.depositEpochNumber !== undefined && object.depositEpochNumber !== null) {
      message.depositEpochNumber = Long.fromString(object.depositEpochNumber);
    } else {
      message.depositEpochNumber = Long.UZERO;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = depositRecord_SourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    return message;
  },

  toJSON(message: DepositRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.status !== undefined && (obj.status = depositRecord_StatusToJSON(message.status));
    message.depositEpochNumber !== undefined &&
      (obj.depositEpochNumber = (message.depositEpochNumber || Long.UZERO).toString());
    message.source !== undefined && (obj.source = depositRecord_SourceToJSON(message.source));
    return obj;
  },

  fromPartial(object: DeepPartial<DepositRecord>): DepositRecord {
    const message = { ...baseDepositRecord } as DepositRecord;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount as Long;
    } else {
      message.amount = Long.ZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.depositEpochNumber !== undefined && object.depositEpochNumber !== null) {
      message.depositEpochNumber = object.depositEpochNumber as Long;
    } else {
      message.depositEpochNumber = Long.UZERO;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    return message;
  },
};

const baseHostZoneUnbonding: object = {
  stTokenAmount: Long.UZERO,
  nativeTokenAmount: Long.UZERO,
  denom: "",
  hostZoneId: "",
  unbondingTime: Long.UZERO,
  status: 0,
  userRedemptionRecords: "",
};

export const HostZoneUnbonding = {
  encode(message: HostZoneUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.stTokenAmount.isZero()) {
      writer.uint32(8).uint64(message.stTokenAmount);
    }
    if (!message.nativeTokenAmount.isZero()) {
      writer.uint32(16).uint64(message.nativeTokenAmount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (!message.unbondingTime.isZero()) {
      writer.uint32(40).uint64(message.unbondingTime);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    for (const v of message.userRedemptionRecords) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZoneUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostZoneUnbonding } as HostZoneUnbonding;
    message.userRedemptionRecords = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stTokenAmount = reader.uint64() as Long;
          break;
        case 2:
          message.nativeTokenAmount = reader.uint64() as Long;
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.hostZoneId = reader.string();
          break;
        case 5:
          message.unbondingTime = reader.uint64() as Long;
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.userRedemptionRecords.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostZoneUnbonding {
    const message = { ...baseHostZoneUnbonding } as HostZoneUnbonding;
    message.userRedemptionRecords = [];
    if (object.stTokenAmount !== undefined && object.stTokenAmount !== null) {
      message.stTokenAmount = Long.fromString(object.stTokenAmount);
    } else {
      message.stTokenAmount = Long.UZERO;
    }
    if (object.nativeTokenAmount !== undefined && object.nativeTokenAmount !== null) {
      message.nativeTokenAmount = Long.fromString(object.nativeTokenAmount);
    } else {
      message.nativeTokenAmount = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = String(object.hostZoneId);
    } else {
      message.hostZoneId = "";
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Long.fromString(object.unbondingTime);
    } else {
      message.unbondingTime = Long.UZERO;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = hostZoneUnbonding_StatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.userRedemptionRecords !== undefined && object.userRedemptionRecords !== null) {
      for (const e of object.userRedemptionRecords) {
        message.userRedemptionRecords.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: HostZoneUnbonding): unknown {
    const obj: any = {};
    message.stTokenAmount !== undefined &&
      (obj.stTokenAmount = (message.stTokenAmount || Long.UZERO).toString());
    message.nativeTokenAmount !== undefined &&
      (obj.nativeTokenAmount = (message.nativeTokenAmount || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.hostZoneId !== undefined && (obj.hostZoneId = message.hostZoneId);
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = (message.unbondingTime || Long.UZERO).toString());
    message.status !== undefined && (obj.status = hostZoneUnbonding_StatusToJSON(message.status));
    if (message.userRedemptionRecords) {
      obj.userRedemptionRecords = message.userRedemptionRecords.map((e) => e);
    } else {
      obj.userRedemptionRecords = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<HostZoneUnbonding>): HostZoneUnbonding {
    const message = { ...baseHostZoneUnbonding } as HostZoneUnbonding;
    message.userRedemptionRecords = [];
    if (object.stTokenAmount !== undefined && object.stTokenAmount !== null) {
      message.stTokenAmount = object.stTokenAmount as Long;
    } else {
      message.stTokenAmount = Long.UZERO;
    }
    if (object.nativeTokenAmount !== undefined && object.nativeTokenAmount !== null) {
      message.nativeTokenAmount = object.nativeTokenAmount as Long;
    } else {
      message.nativeTokenAmount = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.hostZoneId !== undefined && object.hostZoneId !== null) {
      message.hostZoneId = object.hostZoneId;
    } else {
      message.hostZoneId = "";
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = object.unbondingTime as Long;
    } else {
      message.unbondingTime = Long.UZERO;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.userRedemptionRecords !== undefined && object.userRedemptionRecords !== null) {
      for (const e of object.userRedemptionRecords) {
        message.userRedemptionRecords.push(e);
      }
    }
    return message;
  },
};

const baseEpochUnbondingRecord: object = { epochNumber: Long.UZERO };

export const EpochUnbondingRecord = {
  encode(message: EpochUnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochUnbondingRecord } as EpochUnbondingRecord;
    message.hostZoneUnbondings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64() as Long;
          break;
        case 3:
          message.hostZoneUnbondings.push(HostZoneUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochUnbondingRecord {
    const message = { ...baseEpochUnbondingRecord } as EpochUnbondingRecord;
    message.hostZoneUnbondings = [];
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromString(object.epochNumber);
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.hostZoneUnbondings !== undefined && object.hostZoneUnbondings !== null) {
      for (const e of object.hostZoneUnbondings) {
        message.hostZoneUnbondings.push(HostZoneUnbonding.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: EpochUnbondingRecord): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.UZERO).toString());
    if (message.hostZoneUnbondings) {
      obj.hostZoneUnbondings = message.hostZoneUnbondings.map((e) =>
        e ? HostZoneUnbonding.toJSON(e) : undefined,
      );
    } else {
      obj.hostZoneUnbondings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EpochUnbondingRecord>): EpochUnbondingRecord {
    const message = { ...baseEpochUnbondingRecord } as EpochUnbondingRecord;
    message.hostZoneUnbondings = [];
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber as Long;
    } else {
      message.epochNumber = Long.UZERO;
    }
    if (object.hostZoneUnbondings !== undefined && object.hostZoneUnbondings !== null) {
      for (const e of object.hostZoneUnbondings) {
        message.hostZoneUnbondings.push(HostZoneUnbonding.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisState: object = {
  portId: "",
  userRedemptionRecordCount: Long.UZERO,
  depositRecordCount: Long.UZERO,
};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.userRedemptionRecordCount.isZero()) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.depositRecordCount.isZero()) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.userRedemptionRecordList = [];
    message.epochUnbondingRecordList = [];
    message.depositRecordList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.userRedemptionRecordList.push(UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.userRedemptionRecordCount = reader.uint64() as Long;
          break;
        case 5:
          message.epochUnbondingRecordList.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.depositRecordList.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.depositRecordCount = reader.uint64() as Long;
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
    message.userRedemptionRecordList = [];
    message.epochUnbondingRecordList = [];
    message.depositRecordList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.userRedemptionRecordList !== undefined && object.userRedemptionRecordList !== null) {
      for (const e of object.userRedemptionRecordList) {
        message.userRedemptionRecordList.push(UserRedemptionRecord.fromJSON(e));
      }
    }
    if (object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null) {
      message.userRedemptionRecordCount = Long.fromString(object.userRedemptionRecordCount);
    } else {
      message.userRedemptionRecordCount = Long.UZERO;
    }
    if (object.epochUnbondingRecordList !== undefined && object.epochUnbondingRecordList !== null) {
      for (const e of object.epochUnbondingRecordList) {
        message.epochUnbondingRecordList.push(EpochUnbondingRecord.fromJSON(e));
      }
    }
    if (object.depositRecordList !== undefined && object.depositRecordList !== null) {
      for (const e of object.depositRecordList) {
        message.depositRecordList.push(DepositRecord.fromJSON(e));
      }
    }
    if (object.depositRecordCount !== undefined && object.depositRecordCount !== null) {
      message.depositRecordCount = Long.fromString(object.depositRecordCount);
    } else {
      message.depositRecordCount = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.userRedemptionRecordList) {
      obj.userRedemptionRecordList = message.userRedemptionRecordList.map((e) =>
        e ? UserRedemptionRecord.toJSON(e) : undefined,
      );
    } else {
      obj.userRedemptionRecordList = [];
    }
    message.userRedemptionRecordCount !== undefined &&
      (obj.userRedemptionRecordCount = (message.userRedemptionRecordCount || Long.UZERO).toString());
    if (message.epochUnbondingRecordList) {
      obj.epochUnbondingRecordList = message.epochUnbondingRecordList.map((e) =>
        e ? EpochUnbondingRecord.toJSON(e) : undefined,
      );
    } else {
      obj.epochUnbondingRecordList = [];
    }
    if (message.depositRecordList) {
      obj.depositRecordList = message.depositRecordList.map((e) => (e ? DepositRecord.toJSON(e) : undefined));
    } else {
      obj.depositRecordList = [];
    }
    message.depositRecordCount !== undefined &&
      (obj.depositRecordCount = (message.depositRecordCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userRedemptionRecordList = [];
    message.epochUnbondingRecordList = [];
    message.depositRecordList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    if (object.userRedemptionRecordList !== undefined && object.userRedemptionRecordList !== null) {
      for (const e of object.userRedemptionRecordList) {
        message.userRedemptionRecordList.push(UserRedemptionRecord.fromPartial(e));
      }
    }
    if (object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null) {
      message.userRedemptionRecordCount = object.userRedemptionRecordCount as Long;
    } else {
      message.userRedemptionRecordCount = Long.UZERO;
    }
    if (object.epochUnbondingRecordList !== undefined && object.epochUnbondingRecordList !== null) {
      for (const e of object.epochUnbondingRecordList) {
        message.epochUnbondingRecordList.push(EpochUnbondingRecord.fromPartial(e));
      }
    }
    if (object.depositRecordList !== undefined && object.depositRecordList !== null) {
      for (const e of object.depositRecordList) {
        message.depositRecordList.push(DepositRecord.fromPartial(e));
      }
    }
    if (object.depositRecordCount !== undefined && object.depositRecordCount !== null) {
      message.depositRecordCount = object.depositRecordCount as Long;
    } else {
      message.depositRecordCount = Long.UZERO;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

export const MsgDesc = {
  serviceName: "stride.records.Msg",
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

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
