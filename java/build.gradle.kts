import com.google.protobuf.gradle.protobuf

plugins {
    id("java-library")
    id("signing")
    id("maven-publish")
    kotlin("jvm") version "1.5.30" apply false
    id("com.google.protobuf") version "0.8.17"
}

allprojects {
    apply {
        plugin("java-library")
        plugin("com.google.protobuf")
        plugin("signing")
        plugin("maven-publish")
    }

    group = "money.terra"
    version = "0.5.16"

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

        withSourcesJar()
        withJavadocJar()
    }

    tasks.getByName<Test>("test") {
        useJUnitPlatform()
    }

    gradle.taskGraph.whenReady {
        allTasks.filter { it.name.contains("proto", true) }
            .forEach { it.outputs.upToDateWhen { false } }
    }

    publishing {
        publications {
            create<MavenPublication>("lib") {
                groupId = project.group.toString()
                artifactId = project.name
                version = project.version.toString()

                from(components["java"])

                pom {
                    name.set(project.name)
                    description.set("Terra Core Protobuf Builds")
                    url.set("https://github.com/terra-money/terra.proto")
                    licenses {
                        license {
                            name.set("The Apache License, Version 2.0")
                            url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")
                        }
                    }
                    developers {
                        developer {
                            id.set("terraformlabs")
                            name.set("Terraform Labs Korea")
                        }
                    }
                    scm {
                        connection.set("scm:git:git://github.com/terra-money/terra.proto.git")
                        developerConnection.set("scm:git:git://github.com/terra-money/terra.proto.git")
                        url.set("https://github.com/terra-money/terra.proto")
                    }
                }
            }
        }

        repositories {
            val ossrhUsername: String by project
            val ossrhPassword: String by project

            if (version.toString().endsWith("-SNAPSHOT", true)) {
                maven {
                    name = "mavenCentralSnapshot"
                    setUrl("https://s01.oss.sonatype.org/content/repositories/snapshots/")
                    credentials {
                        username = ossrhUsername
                        password = ossrhPassword
                    }
                }
            } else {
                maven {
                    name = "mavenCentral"
                    setUrl("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
                    credentials {
                        username = ossrhUsername
                        password = ossrhPassword
                    }
                }
            }
        }
    }

    signing {
        sign(publishing.publications["lib"])
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
