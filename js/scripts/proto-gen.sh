#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."
COSMOS_SDK_DIR="../cosmos-sdk/proto"
COSMOS_SDK_THIRD_PARTY_DIR="../cosmos-sdk/third_party/proto"
IBC_DIR="../ibc-go/proto"
WASMD_DIR="../wasmd/proto"
ALLIANCE_DIR="../alliance/proto"
JAX_DIR="../jax/proto"
THIRD_PARTY="../third_party"

protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputClientImpl=grpc-web" \
  --proto_path="$COSMOS_SDK_DIR" \
  --proto_path="$COSMOS_SDK_THIRD_PARTY_DIR" \
  --proto_path="$WASMD_DIR" \
  --proto_path="$IBC_DIR" \
  --proto_path="$ALLIANCE_DIR" \
  --proto_path="$JAX_DIR" \
  --proto_path="$THIRD_PARTY" \
  $(find ${COSMOS_SDK_DIR} ${COSMOS_SDK_THIRD_PARTY_DIR} ${WASMD_DIR} ${IBC_DIR} ${ALLIANCE_DIR} ${JAX_DIR} ${THIRD_PARTY} -path -prune -o -name '*.proto' -print0 | xargs -0)
