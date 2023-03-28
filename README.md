# Terra Proto

This repository contains three diferent native clients ([JS](./js/), [Rust](./rust/), [Python](./python/)) to interact with Terra Core. These clients are automatically generated using protoc compiler and they are individually published to the different code repositories.

## Development

Each of the libraries have its own `Makefile` that contain 4 main entry commands:

- `init` : initialize the github submoudles,
- `proto-gen` : generate the proto files,
- `build` : build the project abstracting each language peculiarities,
- `publish` : push the build to the the code repository to be used by anyone (abstracting the publish peculiarities).
