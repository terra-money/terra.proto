all: init proto-gen build

init:
	@echo "Pull External Protofiles"
	git submodule init
	git submodule update --remote

#@echo "Install dependencies"
#npm i

# do not format. we uses just auto-generated ones.
#format: 
#	npm run format

proto-gen: 
	@echo "Generating Protobuf files"
	./scripts/proto-gen.sh

build: 
	poetry build

publish:
	poetry publish

.PHONY: all proto-gen format init build publish
