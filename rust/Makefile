all: init build proto-gen 

init:
	@echo "Pull External Protofiles"
	git submodule init
	git submodule update --remote

proto-gen: 
	@echo "Generating Protobuf files"
	cargo run --bin terra_proto_generator

build: 
	cargo build

publish:
	cargo publish -p terra-proto-rs

.PHONY: all proto-gen format init build publish
