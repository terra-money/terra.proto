all: init proto-gen format

init:
	@echo "Pull External Protofiles"
	git submodule init
	git submodule update

proto-gen: 
	@echo "Generating Protobuf files"
	./gradlew cleanProto generateProto

publish:
    @echo "Publish Protobuf Artifacts"
    ./gradlew publish
