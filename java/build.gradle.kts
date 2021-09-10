import com.google.protobuf.gradle.*
import org.gradle.kotlin.dsl.proto

plugins {
    id("java-library")
    id("maven-publish")
    kotlin("jvm") version "1.5.30" apply false
    id("com.google.protobuf") version "0.8.17"
}

allprojects {
    apply {
        plugin("java-library")
        plugin("com.google.protobuf")
        plugin("maven-publish")
    }

    group = "money.terra"
    version = "1.5.2-SNAPSHOT"

    repositories {
        mavenCentral()
    }

    protobuf {
        generatedFilesBaseDir = "${projectDir.absolutePath}/src"
    }

    sourceSets {
        main {
            proto {
                srcDir("${rootProject.rootDir.parent}/terrad/third_party/proto")
                srcDir("${rootProject.rootDir.parent}/terrad/proto")
            }
        }
    }

    java {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    tasks.getByName<Test>("test") {
        useJUnitPlatform()
    }

    gradle.taskGraph.whenReady {
        allTasks.filter { it.name.contains("proto", true) }
            .forEach { it.outputs.upToDateWhen { false } }
    }
}

dependencies {
    val protobufVersion: String by project

    api("com.google.protobuf:protobuf-java:$protobufVersion")
    api("com.google.protobuf:protobuf-java-util:$protobufVersion")

    compileOnly("org.apache.tomcat:annotations-api:6.0.53")
}

tasks.create("cleanProto") {
    group = "other"

    doLast {
        delete("${project.projectDir.absolutePath}/src/main/java")
    }

    finalizedBy(tasks.getByName("clean"))
}
