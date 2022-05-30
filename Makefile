all: init

init:
	@echo "Pull External Protofiles"
	git submodule init
	git submodule update --remote

.PHONY: init
