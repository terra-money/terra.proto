#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Path to the grpc_node_plugin
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

mkdir -p "$OUT_DIR"

echo "Processing terrad proto files ..."
TERRAD_DIR="../terrad/proto"
TERRAD_THIRD_PARTY_DIR="../terrad/third_party/proto"

protoc \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
  --grpc_out="grpc_js:${OUT_DIR}" \
  --proto_path="$TERRAD_DIR" \
  --proto_path="$TERRAD_THIRD_PARTY_DIR" \
  $(find ${TERRAD_DIR} ${TERRAD_THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)
