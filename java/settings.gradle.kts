rootProject.name = "proto-java"

include(
    "grpc",
    "kotlin",
    "kotlin:grpc"
)

project(":grpc").name = "grpc-java"
project(":kotlin").name = "proto-kotlin"
project(":kotlin:grpc").name = "grpc-kotlin"
