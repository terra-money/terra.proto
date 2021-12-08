all: init proto-gen

init:
	@echo "Pull External Protofiles"
	git submodule init
	git submodule update

proto-gen:
	@echo "Generating Protobuf files"
	cargo build

publish:
	cargo publish

.PHONY: all proto-gen init
