// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

import * as cosmos_evidence_v1beta1_query_pb from "../../../cosmos/evidence/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  evidence: grpc.MethodDefinition<
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse
  >;
  allEvidence: grpc.MethodDefinition<
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse
  >;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  evidence: grpc.handleUnaryCall<
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse
  >;
  allEvidence: grpc.handleUnaryCall<
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse
  >;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  evidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  evidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  evidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  allEvidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  allEvidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>,
  ): grpc.ClientUnaryCall;
  allEvidence(
    argument: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>,
  ): grpc.ClientUnaryCall;
}
