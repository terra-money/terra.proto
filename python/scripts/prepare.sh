#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="alliance amino confio cosmos cosmos_proto cosmwasm gogoproto google ibc jax osmosis pob router tendermint "

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done
