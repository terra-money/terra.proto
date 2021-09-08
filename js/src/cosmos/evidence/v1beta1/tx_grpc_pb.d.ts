// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/tx.proto

import * as cosmos_evidence_v1beta1_tx_pb from "../../../cosmos/evidence/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitEvidence: grpc.MethodDefinition<
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse
  >;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  submitEvidence: grpc.handleUnaryCall<
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse
  >;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  submitEvidence(
    argument: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  submitEvidence(
    argument: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  submitEvidence(
    argument: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>,
  ): grpc.ClientUnaryCall;
}
