/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "../../../cosmos/group/v1/types";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: Long;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  groupPolicySeq: Long;
  /** group_policies is the list of group policies info. */
  groupPolicies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: Long;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}

const baseGenesisState: object = {
  groupSeq: Long.UZERO,
  groupPolicySeq: Long.UZERO,
  proposalSeq: Long.UZERO,
};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupPolicySeq.isZero()) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64() as Long;
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = reader.uint64() as Long;
          break;
        case 5:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = reader.uint64() as Long;
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = Long.fromString(object.groupSeq);
    } else {
      message.groupSeq = Long.UZERO;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromJSON(e));
      }
    }
    if (object.groupPolicySeq !== undefined && object.groupPolicySeq !== null) {
      message.groupPolicySeq = Long.fromString(object.groupPolicySeq);
    } else {
      message.groupPolicySeq = Long.UZERO;
    }
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromJSON(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = Long.fromString(object.proposalSeq);
    } else {
      message.proposalSeq = Long.UZERO;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined && (obj.groupSeq = (message.groupSeq || Long.UZERO).toString());
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? GroupInfo.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map((e) => (e ? GroupMember.toJSON(e) : undefined));
    } else {
      obj.groupMembers = [];
    }
    message.groupPolicySeq !== undefined &&
      (obj.groupPolicySeq = (message.groupPolicySeq || Long.UZERO).toString());
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => (e ? GroupPolicyInfo.toJSON(e) : undefined));
    } else {
      obj.groupPolicies = [];
    }
    message.proposalSeq !== undefined && (obj.proposalSeq = (message.proposalSeq || Long.UZERO).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = object.groupSeq as Long;
    } else {
      message.groupSeq = Long.UZERO;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromPartial(e));
      }
    }
    if (object.groupPolicySeq !== undefined && object.groupPolicySeq !== null) {
      message.groupPolicySeq = object.groupPolicySeq as Long;
    } else {
      message.groupPolicySeq = Long.UZERO;
    }
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromPartial(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = object.proposalSeq as Long;
    } else {
      message.proposalSeq = Long.UZERO;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
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
