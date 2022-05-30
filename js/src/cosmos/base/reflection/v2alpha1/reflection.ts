/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "cosmos.base.reflection.v2alpha1";

/** Since: cosmos-sdk 0.43 */

/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;
  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}

/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  /** name defines the unique name of the signing mode */
  name: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}

/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  /** id is the chain id */
  id: string;
}

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}

/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  /** fullname is the name of the interface */
  fullname: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}

/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}

/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {}

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {}

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {}

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {}

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {}

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {}

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;
  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;
  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  /** name is the protobuf name (not fullname) of the method */
  name: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}

const baseAppDescriptor: object = {};

export const AppDescriptor = {
  encode(message: AppDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppDescriptor } as AppDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppDescriptor {
    const message = { ...baseAppDescriptor } as AppDescriptor;
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromJSON(object.authn);
    } else {
      message.authn = undefined;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromJSON(object.chain);
    } else {
      message.chain = undefined;
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromJSON(object.codec);
    } else {
      message.codec = undefined;
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromJSON(object.configuration);
    } else {
      message.configuration = undefined;
    }
    if (object.queryServices !== undefined && object.queryServices !== null) {
      message.queryServices = QueryServicesDescriptor.fromJSON(object.queryServices);
    } else {
      message.queryServices = undefined;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },

  toJSON(message: AppDescriptor): unknown {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    message.chain !== undefined &&
      (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    message.codec !== undefined &&
      (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? ConfigurationDescriptor.toJSON(message.configuration)
        : undefined);
    message.queryServices !== undefined &&
      (obj.queryServices = message.queryServices
        ? QueryServicesDescriptor.toJSON(message.queryServices)
        : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AppDescriptor>): AppDescriptor {
    const message = { ...baseAppDescriptor } as AppDescriptor;
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    } else {
      message.authn = undefined;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    } else {
      message.chain = undefined;
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    } else {
      message.codec = undefined;
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromPartial(object.configuration);
    } else {
      message.configuration = undefined;
    }
    if (object.queryServices !== undefined && object.queryServices !== null) {
      message.queryServices = QueryServicesDescriptor.fromPartial(object.queryServices);
    } else {
      message.queryServices = undefined;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
};

const baseTxDescriptor: object = { fullname: "" };

export const TxDescriptor = {
  encode(message: TxDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxDescriptor } as TxDescriptor;
    message.msgs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDescriptor {
    const message = { ...baseTxDescriptor } as TxDescriptor;
    message.msgs = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = String(object.fullname);
    } else {
      message.fullname = "";
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(MsgDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TxDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? MsgDescriptor.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TxDescriptor>): TxDescriptor {
    const message = { ...baseTxDescriptor } as TxDescriptor;
    message.msgs = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    } else {
      message.fullname = "";
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(MsgDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAuthnDescriptor: object = {};

export const AuthnDescriptor = {
  encode(message: AuthnDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthnDescriptor } as AuthnDescriptor;
    message.signModes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthnDescriptor {
    const message = { ...baseAuthnDescriptor } as AuthnDescriptor;
    message.signModes = [];
    if (object.signModes !== undefined && object.signModes !== null) {
      for (const e of object.signModes) {
        message.signModes.push(SigningModeDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AuthnDescriptor): unknown {
    const obj: any = {};
    if (message.signModes) {
      obj.signModes = message.signModes.map((e) => (e ? SigningModeDescriptor.toJSON(e) : undefined));
    } else {
      obj.signModes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AuthnDescriptor>): AuthnDescriptor {
    const message = { ...baseAuthnDescriptor } as AuthnDescriptor;
    message.signModes = [];
    if (object.signModes !== undefined && object.signModes !== null) {
      for (const e of object.signModes) {
        message.signModes.push(SigningModeDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSigningModeDescriptor: object = { name: "", number: 0, authnInfoProviderMethodFullname: "" };

export const SigningModeDescriptor = {
  encode(message: SigningModeDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningModeDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSigningModeDescriptor } as SigningModeDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningModeDescriptor {
    const message = { ...baseSigningModeDescriptor } as SigningModeDescriptor;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = Number(object.number);
    } else {
      message.number = 0;
    }
    if (
      object.authnInfoProviderMethodFullname !== undefined &&
      object.authnInfoProviderMethodFullname !== null
    ) {
      message.authnInfoProviderMethodFullname = String(object.authnInfoProviderMethodFullname);
    } else {
      message.authnInfoProviderMethodFullname = "";
    }
    return message;
  },

  toJSON(message: SigningModeDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = message.number);
    message.authnInfoProviderMethodFullname !== undefined &&
      (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
    return obj;
  },

  fromPartial(object: DeepPartial<SigningModeDescriptor>): SigningModeDescriptor {
    const message = { ...baseSigningModeDescriptor } as SigningModeDescriptor;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    } else {
      message.number = 0;
    }
    if (
      object.authnInfoProviderMethodFullname !== undefined &&
      object.authnInfoProviderMethodFullname !== null
    ) {
      message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname;
    } else {
      message.authnInfoProviderMethodFullname = "";
    }
    return message;
  },
};

const baseChainDescriptor: object = { id: "" };

export const ChainDescriptor = {
  encode(message: ChainDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChainDescriptor } as ChainDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainDescriptor {
    const message = { ...baseChainDescriptor } as ChainDescriptor;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: ChainDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainDescriptor>): ChainDescriptor {
    const message = { ...baseChainDescriptor } as ChainDescriptor;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseCodecDescriptor: object = {};

export const CodecDescriptor = {
  encode(message: CodecDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCodecDescriptor } as CodecDescriptor;
    message.interfaces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CodecDescriptor {
    const message = { ...baseCodecDescriptor } as CodecDescriptor;
    message.interfaces = [];
    if (object.interfaces !== undefined && object.interfaces !== null) {
      for (const e of object.interfaces) {
        message.interfaces.push(InterfaceDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CodecDescriptor): unknown {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map((e) => (e ? InterfaceDescriptor.toJSON(e) : undefined));
    } else {
      obj.interfaces = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CodecDescriptor>): CodecDescriptor {
    const message = { ...baseCodecDescriptor } as CodecDescriptor;
    message.interfaces = [];
    if (object.interfaces !== undefined && object.interfaces !== null) {
      for (const e of object.interfaces) {
        message.interfaces.push(InterfaceDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInterfaceDescriptor: object = { fullname: "" };

export const InterfaceDescriptor = {
  encode(message: InterfaceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterfaceDescriptor } as InterfaceDescriptor;
    message.interfaceAcceptingMessages = [];
    message.interfaceImplementers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(
            InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceDescriptor {
    const message = { ...baseInterfaceDescriptor } as InterfaceDescriptor;
    message.interfaceAcceptingMessages = [];
    message.interfaceImplementers = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = String(object.fullname);
    } else {
      message.fullname = "";
    }
    if (object.interfaceAcceptingMessages !== undefined && object.interfaceAcceptingMessages !== null) {
      for (const e of object.interfaceAcceptingMessages) {
        message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.fromJSON(e));
      }
    }
    if (object.interfaceImplementers !== undefined && object.interfaceImplementers !== null) {
      for (const e of object.interfaceImplementers) {
        message.interfaceImplementers.push(InterfaceImplementerDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map((e) =>
        e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaceAcceptingMessages = [];
    }
    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map((e) =>
        e ? InterfaceImplementerDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaceImplementers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceDescriptor>): InterfaceDescriptor {
    const message = { ...baseInterfaceDescriptor } as InterfaceDescriptor;
    message.interfaceAcceptingMessages = [];
    message.interfaceImplementers = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    } else {
      message.fullname = "";
    }
    if (object.interfaceAcceptingMessages !== undefined && object.interfaceAcceptingMessages !== null) {
      for (const e of object.interfaceAcceptingMessages) {
        message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.fromPartial(e));
      }
    }
    if (object.interfaceImplementers !== undefined && object.interfaceImplementers !== null) {
      for (const e of object.interfaceImplementers) {
        message.interfaceImplementers.push(InterfaceImplementerDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInterfaceImplementerDescriptor: object = { fullname: "", typeUrl: "" };

export const InterfaceImplementerDescriptor = {
  encode(message: InterfaceImplementerDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceImplementerDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterfaceImplementerDescriptor } as InterfaceImplementerDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceImplementerDescriptor {
    const message = { ...baseInterfaceImplementerDescriptor } as InterfaceImplementerDescriptor;
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = String(object.fullname);
    } else {
      message.fullname = "";
    }
    if (object.typeUrl !== undefined && object.typeUrl !== null) {
      message.typeUrl = String(object.typeUrl);
    } else {
      message.typeUrl = "";
    }
    return message;
  },

  toJSON(message: InterfaceImplementerDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor {
    const message = { ...baseInterfaceImplementerDescriptor } as InterfaceImplementerDescriptor;
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    } else {
      message.fullname = "";
    }
    if (object.typeUrl !== undefined && object.typeUrl !== null) {
      message.typeUrl = object.typeUrl;
    } else {
      message.typeUrl = "";
    }
    return message;
  },
};

const baseInterfaceAcceptingMessageDescriptor: object = { fullname: "", fieldDescriptorNames: "" };

export const InterfaceAcceptingMessageDescriptor = {
  encode(message: InterfaceAcceptingMessageDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterfaceAcceptingMessageDescriptor } as InterfaceAcceptingMessageDescriptor;
    message.fieldDescriptorNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    const message = { ...baseInterfaceAcceptingMessageDescriptor } as InterfaceAcceptingMessageDescriptor;
    message.fieldDescriptorNames = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = String(object.fullname);
    } else {
      message.fullname = "";
    }
    if (object.fieldDescriptorNames !== undefined && object.fieldDescriptorNames !== null) {
      for (const e of object.fieldDescriptorNames) {
        message.fieldDescriptorNames.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: InterfaceAcceptingMessageDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map((e) => e);
    } else {
      obj.fieldDescriptorNames = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor {
    const message = { ...baseInterfaceAcceptingMessageDescriptor } as InterfaceAcceptingMessageDescriptor;
    message.fieldDescriptorNames = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    } else {
      message.fullname = "";
    }
    if (object.fieldDescriptorNames !== undefined && object.fieldDescriptorNames !== null) {
      for (const e of object.fieldDescriptorNames) {
        message.fieldDescriptorNames.push(e);
      }
    }
    return message;
  },
};

const baseConfigurationDescriptor: object = { bech32AccountAddressPrefix: "" };

export const ConfigurationDescriptor = {
  encode(message: ConfigurationDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigurationDescriptor } as ConfigurationDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigurationDescriptor {
    const message = { ...baseConfigurationDescriptor } as ConfigurationDescriptor;
    if (object.bech32AccountAddressPrefix !== undefined && object.bech32AccountAddressPrefix !== null) {
      message.bech32AccountAddressPrefix = String(object.bech32AccountAddressPrefix);
    } else {
      message.bech32AccountAddressPrefix = "";
    }
    return message;
  },

  toJSON(message: ConfigurationDescriptor): unknown {
    const obj: any = {};
    message.bech32AccountAddressPrefix !== undefined &&
      (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigurationDescriptor>): ConfigurationDescriptor {
    const message = { ...baseConfigurationDescriptor } as ConfigurationDescriptor;
    if (object.bech32AccountAddressPrefix !== undefined && object.bech32AccountAddressPrefix !== null) {
      message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix;
    } else {
      message.bech32AccountAddressPrefix = "";
    }
    return message;
  },
};

const baseMsgDescriptor: object = { msgTypeUrl: "" };

export const MsgDescriptor = {
  encode(message: MsgDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDescriptor } as MsgDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDescriptor {
    const message = { ...baseMsgDescriptor } as MsgDescriptor;
    if (object.msgTypeUrl !== undefined && object.msgTypeUrl !== null) {
      message.msgTypeUrl = String(object.msgTypeUrl);
    } else {
      message.msgTypeUrl = "";
    }
    return message;
  },

  toJSON(message: MsgDescriptor): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDescriptor>): MsgDescriptor {
    const message = { ...baseMsgDescriptor } as MsgDescriptor;
    if (object.msgTypeUrl !== undefined && object.msgTypeUrl !== null) {
      message.msgTypeUrl = object.msgTypeUrl;
    } else {
      message.msgTypeUrl = "";
    }
    return message;
  },
};

const baseGetAuthnDescriptorRequest: object = {};

export const GetAuthnDescriptorRequest = {
  encode(_: GetAuthnDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAuthnDescriptorRequest } as GetAuthnDescriptorRequest;
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

  fromJSON(_: any): GetAuthnDescriptorRequest {
    const message = { ...baseGetAuthnDescriptorRequest } as GetAuthnDescriptorRequest;
    return message;
  },

  toJSON(_: GetAuthnDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest {
    const message = { ...baseGetAuthnDescriptorRequest } as GetAuthnDescriptorRequest;
    return message;
  },
};

const baseGetAuthnDescriptorResponse: object = {};

export const GetAuthnDescriptorResponse = {
  encode(message: GetAuthnDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAuthnDescriptorResponse } as GetAuthnDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthnDescriptorResponse {
    const message = { ...baseGetAuthnDescriptorResponse } as GetAuthnDescriptorResponse;
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromJSON(object.authn);
    } else {
      message.authn = undefined;
    }
    return message;
  },

  toJSON(message: GetAuthnDescriptorResponse): unknown {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse {
    const message = { ...baseGetAuthnDescriptorResponse } as GetAuthnDescriptorResponse;
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    } else {
      message.authn = undefined;
    }
    return message;
  },
};

const baseGetChainDescriptorRequest: object = {};

export const GetChainDescriptorRequest = {
  encode(_: GetChainDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetChainDescriptorRequest } as GetChainDescriptorRequest;
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

  fromJSON(_: any): GetChainDescriptorRequest {
    const message = { ...baseGetChainDescriptorRequest } as GetChainDescriptorRequest;
    return message;
  },

  toJSON(_: GetChainDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetChainDescriptorRequest>): GetChainDescriptorRequest {
    const message = { ...baseGetChainDescriptorRequest } as GetChainDescriptorRequest;
    return message;
  },
};

const baseGetChainDescriptorResponse: object = {};

export const GetChainDescriptorResponse = {
  encode(message: GetChainDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetChainDescriptorResponse } as GetChainDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChainDescriptorResponse {
    const message = { ...baseGetChainDescriptorResponse } as GetChainDescriptorResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromJSON(object.chain);
    } else {
      message.chain = undefined;
    }
    return message;
  },

  toJSON(message: GetChainDescriptorResponse): unknown {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetChainDescriptorResponse>): GetChainDescriptorResponse {
    const message = { ...baseGetChainDescriptorResponse } as GetChainDescriptorResponse;
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    } else {
      message.chain = undefined;
    }
    return message;
  },
};

const baseGetCodecDescriptorRequest: object = {};

export const GetCodecDescriptorRequest = {
  encode(_: GetCodecDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCodecDescriptorRequest } as GetCodecDescriptorRequest;
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

  fromJSON(_: any): GetCodecDescriptorRequest {
    const message = { ...baseGetCodecDescriptorRequest } as GetCodecDescriptorRequest;
    return message;
  },

  toJSON(_: GetCodecDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest {
    const message = { ...baseGetCodecDescriptorRequest } as GetCodecDescriptorRequest;
    return message;
  },
};

const baseGetCodecDescriptorResponse: object = {};

export const GetCodecDescriptorResponse = {
  encode(message: GetCodecDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCodecDescriptorResponse } as GetCodecDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCodecDescriptorResponse {
    const message = { ...baseGetCodecDescriptorResponse } as GetCodecDescriptorResponse;
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromJSON(object.codec);
    } else {
      message.codec = undefined;
    }
    return message;
  },

  toJSON(message: GetCodecDescriptorResponse): unknown {
    const obj: any = {};
    message.codec !== undefined &&
      (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse {
    const message = { ...baseGetCodecDescriptorResponse } as GetCodecDescriptorResponse;
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    } else {
      message.codec = undefined;
    }
    return message;
  },
};

const baseGetConfigurationDescriptorRequest: object = {};

export const GetConfigurationDescriptorRequest = {
  encode(_: GetConfigurationDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetConfigurationDescriptorRequest } as GetConfigurationDescriptorRequest;
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

  fromJSON(_: any): GetConfigurationDescriptorRequest {
    const message = { ...baseGetConfigurationDescriptorRequest } as GetConfigurationDescriptorRequest;
    return message;
  },

  toJSON(_: GetConfigurationDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest {
    const message = { ...baseGetConfigurationDescriptorRequest } as GetConfigurationDescriptorRequest;
    return message;
  },
};

const baseGetConfigurationDescriptorResponse: object = {};

export const GetConfigurationDescriptorResponse = {
  encode(message: GetConfigurationDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetConfigurationDescriptorResponse } as GetConfigurationDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetConfigurationDescriptorResponse {
    const message = { ...baseGetConfigurationDescriptorResponse } as GetConfigurationDescriptorResponse;
    if (object.config !== undefined && object.config !== null) {
      message.config = ConfigurationDescriptor.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: GetConfigurationDescriptorResponse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse {
    const message = { ...baseGetConfigurationDescriptorResponse } as GetConfigurationDescriptorResponse;
    if (object.config !== undefined && object.config !== null) {
      message.config = ConfigurationDescriptor.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

const baseGetQueryServicesDescriptorRequest: object = {};

export const GetQueryServicesDescriptorRequest = {
  encode(_: GetQueryServicesDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetQueryServicesDescriptorRequest } as GetQueryServicesDescriptorRequest;
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

  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    const message = { ...baseGetQueryServicesDescriptorRequest } as GetQueryServicesDescriptorRequest;
    return message;
  },

  toJSON(_: GetQueryServicesDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest {
    const message = { ...baseGetQueryServicesDescriptorRequest } as GetQueryServicesDescriptorRequest;
    return message;
  },
};

const baseGetQueryServicesDescriptorResponse: object = {};

export const GetQueryServicesDescriptorResponse = {
  encode(message: GetQueryServicesDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetQueryServicesDescriptorResponse } as GetQueryServicesDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    const message = { ...baseGetQueryServicesDescriptorResponse } as GetQueryServicesDescriptorResponse;
    if (object.queries !== undefined && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromJSON(object.queries);
    } else {
      message.queries = undefined;
    }
    return message;
  },

  toJSON(message: GetQueryServicesDescriptorResponse): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse {
    const message = { ...baseGetQueryServicesDescriptorResponse } as GetQueryServicesDescriptorResponse;
    if (object.queries !== undefined && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromPartial(object.queries);
    } else {
      message.queries = undefined;
    }
    return message;
  },
};

const baseGetTxDescriptorRequest: object = {};

export const GetTxDescriptorRequest = {
  encode(_: GetTxDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxDescriptorRequest } as GetTxDescriptorRequest;
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

  fromJSON(_: any): GetTxDescriptorRequest {
    const message = { ...baseGetTxDescriptorRequest } as GetTxDescriptorRequest;
    return message;
  },

  toJSON(_: GetTxDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetTxDescriptorRequest>): GetTxDescriptorRequest {
    const message = { ...baseGetTxDescriptorRequest } as GetTxDescriptorRequest;
    return message;
  },
};

const baseGetTxDescriptorResponse: object = {};

export const GetTxDescriptorResponse = {
  encode(message: GetTxDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxDescriptorResponse } as GetTxDescriptorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxDescriptorResponse {
    const message = { ...baseGetTxDescriptorResponse } as GetTxDescriptorResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },

  toJSON(message: GetTxDescriptorResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxDescriptorResponse>): GetTxDescriptorResponse {
    const message = { ...baseGetTxDescriptorResponse } as GetTxDescriptorResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
};

const baseQueryServicesDescriptor: object = {};

export const QueryServicesDescriptor = {
  encode(message: QueryServicesDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryServicesDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryServicesDescriptor } as QueryServicesDescriptor;
    message.queryServices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServicesDescriptor {
    const message = { ...baseQueryServicesDescriptor } as QueryServicesDescriptor;
    message.queryServices = [];
    if (object.queryServices !== undefined && object.queryServices !== null) {
      for (const e of object.queryServices) {
        message.queryServices.push(QueryServiceDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryServicesDescriptor): unknown {
    const obj: any = {};
    if (message.queryServices) {
      obj.queryServices = message.queryServices.map((e) =>
        e ? QueryServiceDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.queryServices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryServicesDescriptor>): QueryServicesDescriptor {
    const message = { ...baseQueryServicesDescriptor } as QueryServicesDescriptor;
    message.queryServices = [];
    if (object.queryServices !== undefined && object.queryServices !== null) {
      for (const e of object.queryServices) {
        message.queryServices.push(QueryServiceDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryServiceDescriptor: object = { fullname: "", isModule: false };

export const QueryServiceDescriptor = {
  encode(message: QueryServiceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryServiceDescriptor } as QueryServiceDescriptor;
    message.methods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServiceDescriptor {
    const message = { ...baseQueryServiceDescriptor } as QueryServiceDescriptor;
    message.methods = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = String(object.fullname);
    } else {
      message.fullname = "";
    }
    if (object.isModule !== undefined && object.isModule !== null) {
      message.isModule = Boolean(object.isModule);
    } else {
      message.isModule = false;
    }
    if (object.methods !== undefined && object.methods !== null) {
      for (const e of object.methods) {
        message.methods.push(QueryMethodDescriptor.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryServiceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);
    if (message.methods) {
      obj.methods = message.methods.map((e) => (e ? QueryMethodDescriptor.toJSON(e) : undefined));
    } else {
      obj.methods = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryServiceDescriptor>): QueryServiceDescriptor {
    const message = { ...baseQueryServiceDescriptor } as QueryServiceDescriptor;
    message.methods = [];
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    } else {
      message.fullname = "";
    }
    if (object.isModule !== undefined && object.isModule !== null) {
      message.isModule = object.isModule;
    } else {
      message.isModule = false;
    }
    if (object.methods !== undefined && object.methods !== null) {
      for (const e of object.methods) {
        message.methods.push(QueryMethodDescriptor.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryMethodDescriptor: object = { name: "", fullQueryPath: "" };

export const QueryMethodDescriptor = {
  encode(message: QueryMethodDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMethodDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMethodDescriptor } as QueryMethodDescriptor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMethodDescriptor {
    const message = { ...baseQueryMethodDescriptor } as QueryMethodDescriptor;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.fullQueryPath !== undefined && object.fullQueryPath !== null) {
      message.fullQueryPath = String(object.fullQueryPath);
    } else {
      message.fullQueryPath = "";
    }
    return message;
  },

  toJSON(message: QueryMethodDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMethodDescriptor>): QueryMethodDescriptor {
    const message = { ...baseQueryMethodDescriptor } as QueryMethodDescriptor;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.fullQueryPath !== undefined && object.fullQueryPath !== null) {
      message.fullQueryPath = object.fullQueryPath;
    } else {
      message.fullQueryPath = "";
    }
    return message;
  },
};

/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
  /**
   * GetAuthnDescriptor returns information on how to authenticate transactions in the application
   * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   * future releases of the cosmos-sdk.
   */
  GetAuthnDescriptor(
    request: DeepPartial<GetAuthnDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetAuthnDescriptorResponse>;
  /** GetChainDescriptor returns the description of the chain */
  GetChainDescriptor(
    request: DeepPartial<GetChainDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetChainDescriptorResponse>;
  /** GetCodecDescriptor returns the descriptor of the codec of the application */
  GetCodecDescriptor(
    request: DeepPartial<GetCodecDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetCodecDescriptorResponse>;
  /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  GetConfigurationDescriptor(
    request: DeepPartial<GetConfigurationDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetConfigurationDescriptorResponse>;
  /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  GetQueryServicesDescriptor(
    request: DeepPartial<GetQueryServicesDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetQueryServicesDescriptorResponse>;
  /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  GetTxDescriptor(
    request: DeepPartial<GetTxDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetTxDescriptorResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAuthnDescriptor = this.GetAuthnDescriptor.bind(this);
    this.GetChainDescriptor = this.GetChainDescriptor.bind(this);
    this.GetCodecDescriptor = this.GetCodecDescriptor.bind(this);
    this.GetConfigurationDescriptor = this.GetConfigurationDescriptor.bind(this);
    this.GetQueryServicesDescriptor = this.GetQueryServicesDescriptor.bind(this);
    this.GetTxDescriptor = this.GetTxDescriptor.bind(this);
  }

  GetAuthnDescriptor(
    request: DeepPartial<GetAuthnDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetAuthnDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetAuthnDescriptorDesc,
      GetAuthnDescriptorRequest.fromPartial(request),
      metadata,
    );
  }

  GetChainDescriptor(
    request: DeepPartial<GetChainDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetChainDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetChainDescriptorDesc,
      GetChainDescriptorRequest.fromPartial(request),
      metadata,
    );
  }

  GetCodecDescriptor(
    request: DeepPartial<GetCodecDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetCodecDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetCodecDescriptorDesc,
      GetCodecDescriptorRequest.fromPartial(request),
      metadata,
    );
  }

  GetConfigurationDescriptor(
    request: DeepPartial<GetConfigurationDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetConfigurationDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetConfigurationDescriptorDesc,
      GetConfigurationDescriptorRequest.fromPartial(request),
      metadata,
    );
  }

  GetQueryServicesDescriptor(
    request: DeepPartial<GetQueryServicesDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetQueryServicesDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetQueryServicesDescriptorDesc,
      GetQueryServicesDescriptorRequest.fromPartial(request),
      metadata,
    );
  }

  GetTxDescriptor(
    request: DeepPartial<GetTxDescriptorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetTxDescriptorResponse> {
    return this.rpc.unary(
      ReflectionServiceGetTxDescriptorDesc,
      GetTxDescriptorRequest.fromPartial(request),
      metadata,
    );
  }
}

export const ReflectionServiceDesc = {
  serviceName: "cosmos.base.reflection.v2alpha1.ReflectionService",
};

export const ReflectionServiceGetAuthnDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetAuthnDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetAuthnDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetAuthnDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ReflectionServiceGetChainDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetChainDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetChainDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetChainDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ReflectionServiceGetCodecDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetCodecDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetCodecDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetCodecDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ReflectionServiceGetConfigurationDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetConfigurationDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetConfigurationDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetConfigurationDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ReflectionServiceGetQueryServicesDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetQueryServicesDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetQueryServicesDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetQueryServicesDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const ReflectionServiceGetTxDescriptorDesc: UnaryMethodDefinitionish = {
  methodName: "GetTxDescriptor",
  service: ReflectionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetTxDescriptorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetTxDescriptorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
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
