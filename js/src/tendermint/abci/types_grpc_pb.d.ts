// GENERATED CODE -- DO NOT EDIT!

// package: tendermint.abci
// file: tendermint/abci/types.proto

import * as tendermint_abci_types_pb from "../../tendermint/abci/types_pb";
import * as grpc from "@grpc/grpc-js";

interface IABCIApplicationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: grpc.MethodDefinition<tendermint_abci_types_pb.RequestEcho, tendermint_abci_types_pb.ResponseEcho>;
  flush: grpc.MethodDefinition<tendermint_abci_types_pb.RequestFlush, tendermint_abci_types_pb.ResponseFlush>;
  info: grpc.MethodDefinition<tendermint_abci_types_pb.RequestInfo, tendermint_abci_types_pb.ResponseInfo>;
  setOption: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestSetOption,
    tendermint_abci_types_pb.ResponseSetOption
  >;
  deliverTx: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestDeliverTx,
    tendermint_abci_types_pb.ResponseDeliverTx
  >;
  checkTx: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestCheckTx,
    tendermint_abci_types_pb.ResponseCheckTx
  >;
  query: grpc.MethodDefinition<tendermint_abci_types_pb.RequestQuery, tendermint_abci_types_pb.ResponseQuery>;
  commit: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestCommit,
    tendermint_abci_types_pb.ResponseCommit
  >;
  initChain: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestInitChain,
    tendermint_abci_types_pb.ResponseInitChain
  >;
  beginBlock: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestBeginBlock,
    tendermint_abci_types_pb.ResponseBeginBlock
  >;
  endBlock: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestEndBlock,
    tendermint_abci_types_pb.ResponseEndBlock
  >;
  listSnapshots: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestListSnapshots,
    tendermint_abci_types_pb.ResponseListSnapshots
  >;
  offerSnapshot: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestOfferSnapshot,
    tendermint_abci_types_pb.ResponseOfferSnapshot
  >;
  loadSnapshotChunk: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    tendermint_abci_types_pb.ResponseLoadSnapshotChunk
  >;
  applySnapshotChunk: grpc.MethodDefinition<
    tendermint_abci_types_pb.RequestApplySnapshotChunk,
    tendermint_abci_types_pb.ResponseApplySnapshotChunk
  >;
}

export const ABCIApplicationService: IABCIApplicationService;

export interface IABCIApplicationServer extends grpc.UntypedServiceImplementation {
  echo: grpc.handleUnaryCall<tendermint_abci_types_pb.RequestEcho, tendermint_abci_types_pb.ResponseEcho>;
  flush: grpc.handleUnaryCall<tendermint_abci_types_pb.RequestFlush, tendermint_abci_types_pb.ResponseFlush>;
  info: grpc.handleUnaryCall<tendermint_abci_types_pb.RequestInfo, tendermint_abci_types_pb.ResponseInfo>;
  setOption: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestSetOption,
    tendermint_abci_types_pb.ResponseSetOption
  >;
  deliverTx: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestDeliverTx,
    tendermint_abci_types_pb.ResponseDeliverTx
  >;
  checkTx: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestCheckTx,
    tendermint_abci_types_pb.ResponseCheckTx
  >;
  query: grpc.handleUnaryCall<tendermint_abci_types_pb.RequestQuery, tendermint_abci_types_pb.ResponseQuery>;
  commit: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestCommit,
    tendermint_abci_types_pb.ResponseCommit
  >;
  initChain: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestInitChain,
    tendermint_abci_types_pb.ResponseInitChain
  >;
  beginBlock: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestBeginBlock,
    tendermint_abci_types_pb.ResponseBeginBlock
  >;
  endBlock: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestEndBlock,
    tendermint_abci_types_pb.ResponseEndBlock
  >;
  listSnapshots: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestListSnapshots,
    tendermint_abci_types_pb.ResponseListSnapshots
  >;
  offerSnapshot: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestOfferSnapshot,
    tendermint_abci_types_pb.ResponseOfferSnapshot
  >;
  loadSnapshotChunk: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    tendermint_abci_types_pb.ResponseLoadSnapshotChunk
  >;
  applySnapshotChunk: grpc.handleUnaryCall<
    tendermint_abci_types_pb.RequestApplySnapshotChunk,
    tendermint_abci_types_pb.ResponseApplySnapshotChunk
  >;
}

export class ABCIApplicationClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo(
    argument: tendermint_abci_types_pb.RequestEcho,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEcho>,
  ): grpc.ClientUnaryCall;
  echo(
    argument: tendermint_abci_types_pb.RequestEcho,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEcho>,
  ): grpc.ClientUnaryCall;
  echo(
    argument: tendermint_abci_types_pb.RequestEcho,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEcho>,
  ): grpc.ClientUnaryCall;
  flush(
    argument: tendermint_abci_types_pb.RequestFlush,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseFlush>,
  ): grpc.ClientUnaryCall;
  flush(
    argument: tendermint_abci_types_pb.RequestFlush,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseFlush>,
  ): grpc.ClientUnaryCall;
  flush(
    argument: tendermint_abci_types_pb.RequestFlush,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseFlush>,
  ): grpc.ClientUnaryCall;
  info(
    argument: tendermint_abci_types_pb.RequestInfo,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInfo>,
  ): grpc.ClientUnaryCall;
  info(
    argument: tendermint_abci_types_pb.RequestInfo,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInfo>,
  ): grpc.ClientUnaryCall;
  info(
    argument: tendermint_abci_types_pb.RequestInfo,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInfo>,
  ): grpc.ClientUnaryCall;
  setOption(
    argument: tendermint_abci_types_pb.RequestSetOption,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseSetOption>,
  ): grpc.ClientUnaryCall;
  setOption(
    argument: tendermint_abci_types_pb.RequestSetOption,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseSetOption>,
  ): grpc.ClientUnaryCall;
  setOption(
    argument: tendermint_abci_types_pb.RequestSetOption,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseSetOption>,
  ): grpc.ClientUnaryCall;
  deliverTx(
    argument: tendermint_abci_types_pb.RequestDeliverTx,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseDeliverTx>,
  ): grpc.ClientUnaryCall;
  deliverTx(
    argument: tendermint_abci_types_pb.RequestDeliverTx,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseDeliverTx>,
  ): grpc.ClientUnaryCall;
  deliverTx(
    argument: tendermint_abci_types_pb.RequestDeliverTx,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseDeliverTx>,
  ): grpc.ClientUnaryCall;
  checkTx(
    argument: tendermint_abci_types_pb.RequestCheckTx,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCheckTx>,
  ): grpc.ClientUnaryCall;
  checkTx(
    argument: tendermint_abci_types_pb.RequestCheckTx,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCheckTx>,
  ): grpc.ClientUnaryCall;
  checkTx(
    argument: tendermint_abci_types_pb.RequestCheckTx,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCheckTx>,
  ): grpc.ClientUnaryCall;
  query(
    argument: tendermint_abci_types_pb.RequestQuery,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseQuery>,
  ): grpc.ClientUnaryCall;
  query(
    argument: tendermint_abci_types_pb.RequestQuery,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseQuery>,
  ): grpc.ClientUnaryCall;
  query(
    argument: tendermint_abci_types_pb.RequestQuery,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseQuery>,
  ): grpc.ClientUnaryCall;
  commit(
    argument: tendermint_abci_types_pb.RequestCommit,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCommit>,
  ): grpc.ClientUnaryCall;
  commit(
    argument: tendermint_abci_types_pb.RequestCommit,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCommit>,
  ): grpc.ClientUnaryCall;
  commit(
    argument: tendermint_abci_types_pb.RequestCommit,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseCommit>,
  ): grpc.ClientUnaryCall;
  initChain(
    argument: tendermint_abci_types_pb.RequestInitChain,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInitChain>,
  ): grpc.ClientUnaryCall;
  initChain(
    argument: tendermint_abci_types_pb.RequestInitChain,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInitChain>,
  ): grpc.ClientUnaryCall;
  initChain(
    argument: tendermint_abci_types_pb.RequestInitChain,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseInitChain>,
  ): grpc.ClientUnaryCall;
  beginBlock(
    argument: tendermint_abci_types_pb.RequestBeginBlock,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseBeginBlock>,
  ): grpc.ClientUnaryCall;
  beginBlock(
    argument: tendermint_abci_types_pb.RequestBeginBlock,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseBeginBlock>,
  ): grpc.ClientUnaryCall;
  beginBlock(
    argument: tendermint_abci_types_pb.RequestBeginBlock,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseBeginBlock>,
  ): grpc.ClientUnaryCall;
  endBlock(
    argument: tendermint_abci_types_pb.RequestEndBlock,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEndBlock>,
  ): grpc.ClientUnaryCall;
  endBlock(
    argument: tendermint_abci_types_pb.RequestEndBlock,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEndBlock>,
  ): grpc.ClientUnaryCall;
  endBlock(
    argument: tendermint_abci_types_pb.RequestEndBlock,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseEndBlock>,
  ): grpc.ClientUnaryCall;
  listSnapshots(
    argument: tendermint_abci_types_pb.RequestListSnapshots,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseListSnapshots>,
  ): grpc.ClientUnaryCall;
  listSnapshots(
    argument: tendermint_abci_types_pb.RequestListSnapshots,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseListSnapshots>,
  ): grpc.ClientUnaryCall;
  listSnapshots(
    argument: tendermint_abci_types_pb.RequestListSnapshots,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseListSnapshots>,
  ): grpc.ClientUnaryCall;
  offerSnapshot(
    argument: tendermint_abci_types_pb.RequestOfferSnapshot,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseOfferSnapshot>,
  ): grpc.ClientUnaryCall;
  offerSnapshot(
    argument: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseOfferSnapshot>,
  ): grpc.ClientUnaryCall;
  offerSnapshot(
    argument: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseOfferSnapshot>,
  ): grpc.ClientUnaryCall;
  loadSnapshotChunk(
    argument: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseLoadSnapshotChunk>,
  ): grpc.ClientUnaryCall;
  loadSnapshotChunk(
    argument: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseLoadSnapshotChunk>,
  ): grpc.ClientUnaryCall;
  loadSnapshotChunk(
    argument: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseLoadSnapshotChunk>,
  ): grpc.ClientUnaryCall;
  applySnapshotChunk(
    argument: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseApplySnapshotChunk>,
  ): grpc.ClientUnaryCall;
  applySnapshotChunk(
    argument: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseApplySnapshotChunk>,
  ): grpc.ClientUnaryCall;
  applySnapshotChunk(
    argument: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<tendermint_abci_types_pb.ResponseApplySnapshotChunk>,
  ): grpc.ClientUnaryCall;
}
