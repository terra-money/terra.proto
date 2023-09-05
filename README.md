# Terra Proto

This repository contains three diferent native clients ([JS](./js/), [Rust](./rust/), [Python](./python/)) to interact with Terra Core. These clients are automatically generated using protoc compiler and they are individually published to the different code repositories.

## IMPORTANT NOTE

**This is a fork of the official project, found at https://github.com/terra-money/terra.proto**

This version includes the missing market module, and some minor code changes to make it work on the Luna Classic chain.

It is specifically built to work with the Terra Classic SDK: https://pypi.org/project/terra-classic-sdk/

## Development

Each of the libraries have its own `Makefile` that contain 4 main entry commands:

- `init` : initialize the github submoudles,
- `proto-gen` : generate the proto files,
- `build` : build the project abstracting each language peculiarities,
- `publish` : push the build to the the code repository to be used by anyone (abstracting the publish peculiarities).
