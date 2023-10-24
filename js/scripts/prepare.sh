#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="alliance icq amino confio cosmos cosmos_proto cosmwasm gogoproto google ibc jax osmosis juno pob router tendermint proofs.d.ts proofs.js proofs.js.map"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done
