# terra.proto (Java and Kotlin)

## How to use
### Gradle
```
repositories {
    mavenCentral()
}

dependencies {
    implementation("money.terra:proto-java:$terraCoreVersion")
    implementation("money.terra:proto-kotlin:$terraCoreVersion")
    implementation("money.terra:grpc-java:$terraCoreVersion")
    implementation("money.terra:grpc-kotlin:$terraCoreVersion")
    implementation("io.grpc:grpc-okhttp:1.40.1")
}
```

## Maintenance
This section is for maintainers of this repo, not users.

### Requirements
* JDK 8+
* protoc v3.17.3

### Getting started
```sh
make init
```

### Rebuilding types
```sh
make proto-gen

or 

./gradlew cleanProto generateProto
```

### Publish to Maven
```
make publish

or

./gradlew publish
```
