# terra.proto (Java and Kotlin)
[![Maven Central](https://img.shields.io/maven-central/v/money.terra/proto-java)](https://mvnrepository.com/artifact/money.terra/proto-java)

## How to use
### Gradle
```
repositories {
    mavenCentral()
    
    //If you want snapshot version
    maven("https://s01.oss.sonatype.org/content/repositories/snapshots/")
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
//Add to ~/.gradle/gradle.properties

signing.keyId=[gpg key id]
signing.password=[gpg key password]
signing.secretKeyRingFile=[gpg keyring file path]
```
```
make publish

or

./gradlew publish
```
