import com.google.protobuf.gradle.*

plugins {
    kotlin("jvm")
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}

kotlin {
    sourceSets {
        all {
            languageSettings {
                optIn("kotlin.RequiresOptIn")
            }
        }
    }
}

protobuf {
    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                id("kotlin")

                remove(id = "java")
            }
        }
    }
}

dependencies {
    val protobufVersion: String by project

    api(project(":"))
    api("com.google.protobuf:protobuf-kotlin:$protobufVersion")

    compileOnly("org.apache.tomcat:annotations-api:6.0.53")
}

tasks.create("cleanProto") {
    group = "other"

    doLast {
        delete("${project.projectDir.absolutePath}/src/main/kotlin")
    }

    finalizedBy(tasks.getByName("clean"))
}
