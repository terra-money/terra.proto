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
COSMOS_SDK_DIR="../cosmos-sdk/proto"
COSMOS_SDK_THIRD_PARTY_DIR="../cosmos-sdk/third_party/proto"
IBC_DIR="../ibc-go/proto"
WASMD_DIR="../wasmd/proto"
ALLIANCE_DIR="../alliance/proto"
THIRD_PARTY="../third_party"

protoc \
  --python_betterproto_out="${OUT_DIR}" \
  --proto_path="$COSMOS_SDK_DIR" \
  --proto_path="$COSMOS_SDK_THIRD_PARTY_DIR" \
  --proto_path="$IBC_DIR" \
  --proto_path="$WASMD_DIR" \
  --proto_path="$ALLIANCE_DIR" \
  --proto_path="$THIRD_PARTY" \
  $(find ${COSMOS_SDK_DIR} ${COSMOS_SDK_THIRD_PARTY_DIR} ${WASMD_DIR} ${IBC_DIR} ${ALLIANCE_DIR} ${THIRD_PARTY} -path -prune -o -name '*.proto' -print0 | xargs -0)
