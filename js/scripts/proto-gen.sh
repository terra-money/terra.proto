#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."
PROTOBUF_DIR="../protobuf"
COSMOS_SDK_DIR="../cosmos-sdk/proto"
ALLIANCE_DIR="../alliance/proto"
IBC_DIR="../ibc-go/proto"
PFM_DIR="../ibc-apps/middleware/packet-forward-middleware/proto"
WASMD_DIR="../wasmd/proto"
GRPC_DIR="../grpc-gateway"
JAX_DIR="../jax/proto"
COSMOS_DIR="../cosmos-proto/proto"
TERRA_DIR="../terra/proto"

protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputClientImpl=grpc-web" \
  --proto_path="$PROTOBUF_DIR" \
  --proto_path="$COSMOS_SDK_DIR" \
  --proto_path="$ALLIANCE_DIR" \
  --proto_path="$IBC_DIR" \
  --proto_path="$PFM_DIR" \
  --proto_path="$WASMD_DIR" \
  --proto_path="$GRPC_DIR" \
  --proto_path="$JAX_DIR" \
  --proto_path="$COSMOS_DIR" \
  --proto_path="$TERRA_DIR" \
  $(find  $PROTOBUF_DIR $COSMOS_SDK_DIR $ALLIANCE_DIR $IBC_DIR $PFM_DIR $WASMD_DIR $GRPC_DIR $JAX_DIR $COSMOS_DIR $TERRA_DIR -path -prune -o -name '*.proto' -print0 | xargs -0)
