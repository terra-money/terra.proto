#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."
PROTOBUF_DIR=$(readlink -f "../protobuf")
COSMOS_SDK_DIR=$(readlink -f "../cosmos-sdk/proto")
ALLIANCE_DIR=$(readlink -f "../alliance/proto")
IBC_DIR=$(readlink -f "../ibc-go/proto")
PFM_DIR=$(readlink -f "../ibc-apps/middleware/packet-forward-middleware/proto")
ICQ_DIR=$(readlink -f "../ibc-apps/modules/async-icq/proto")
WASMD_DIR=$(readlink -f "../wasmd/proto")
GRPC_DIR=$(readlink -f "../grpc-gateway")
COSMOS_DIR=$(readlink -f "../cosmos-proto/proto")
TERRA_DIR=$(readlink -f "../terra/proto")
FEEMARKET_DIR=$(readlink -f "../feemarket/proto")


protoc  \
  -I "$PROTOBUF_DIR" \
  -I "$PROTOBUF_DIR/protobuf" \
  -I "$COSMOS_SDK_DIR" \
  -I "$ALLIANCE_DIR" \
  -I "$IBC_DIR" \
  -I "$PFM_DIR" \
  -I "$WASMD_DIR" \
  -I "$GRPC_DIR" \
  -I "$GRPC_DIR/third_party" \
  -I "$GRPC_DIR/third_party/googleapis" \
  -I "$COSMOS_DIR" \
  -I "$ICQ_DIR" \
  -I "$TERRA_DIR" \
  -I "$FEEMARKET_DIR" \
  $(find $COSMOS_SDK_DIR $ALLIANCE_DIR $IBC_DIR $PFM_DIR $WASMD_DIR $COSMOS_DIR $TERRA_DIR $ICQ_DIR $FEEMARKET_DIR -path -prune -o -name '*.proto' -print0 | xargs -0) \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputClientImpl=grpc-web" 
