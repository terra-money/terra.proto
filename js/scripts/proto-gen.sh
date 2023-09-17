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
WASMD_DIR=$(readlink -f "../wasmd/proto")
GRPC_DIR=$(readlink -f "../grpc-gateway")
JAX_DIR=$(readlink -f "../jax/proto")
COSMOS_DIR=$(readlink -f "../cosmos-proto/proto")
TERRA_DIR=$(readlink -f "../terra/proto")

proto_dirs=$(find $PROTOBUF_DIR $COSMOS_SDK_DIR $ALLIANCE_DIR $IBC_DIR $PFM_DIR $WASMD_DIR $GRPC_DIR $JAX_DIR $COSMOS_DIR $TERRA_DIR -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  # generate swagger files (filter query files)
  query_file=$(find "${dir}" -maxdepth 1 \( -name 'query.proto' -o -name 'service.proto' \))
  
  if [[ ! -z "$query_file" ]]; then
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
    -I "$JAX_DIR" \
    -I "$COSMOS_DIR" \
    -I "$TERRA_DIR" \
      "$query_file" \
    --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
    --ts_proto_out="${OUT_DIR}" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputClientImpl=grpc-web" 
  fi
done

