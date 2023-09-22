#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

echo "install betterproto... pre-release for now. stable one has some issues"
#pip install --upgrade "avast.betterproto[compiler]"
pip install --upgrade "betterproto[compiler]" --pre
echo "install MarkupSafe==2.0.1 due to dependency"
pip install MarkupSafe==2.0.1

OUT_DIR="./terra_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."
PROTOBUF_DIR=$(readlink -f "../protobuf")
COSMOS_SDK_DIR=$(readlink -f "../cosmos-sdk/proto")
ALLIANCE_DIR=$(readlink -f "../alliance/proto")
IBC_DIR=$(readlink -f "../ibc-go/proto")
PFM_DIR=$(readlink -f "../ibc-apps/middleware/packet-forward-middleware/proto")
WASMD_DIR=$(readlink -f "../wasmd/proto")
GRPC_DIR=$(readlink -f "../grpc-gateway")
COSMOS_DIR=$(readlink -f "../cosmos-proto/proto")
TERRA_DIR=$(readlink -f "../terra/proto")
POB_DIR=$(readlink -f "../pob/proto")

protoc  \
  --python_betterproto_out="${OUT_DIR}" \
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
  -I "$TERRA_DIR" \
  -I "$POB_DIR" \
  $(find $COSMOS_SDK_DIR $ALLIANCE_DIR $IBC_DIR $PFM_DIR $WASMD_DIR $COSMOS_DIR $TERRA_DIR $POB_DIR -path -prune -o -name '*.proto' -print0 | xargs -0) 

