use regex::Regex;
use std::{
    ffi::{OsStr, OsString},
    fs::{self, create_dir_all, remove_dir_all},
    io,
    path::{Path, PathBuf},
    process,
};
use walkdir::WalkDir;

/// The directory generated cosmos-sdk proto files go into in this repo
const COSMOS_SDK_PROTO_DIR: &str = "./lib/models/";

/// A temporary directory for proto building
const TMP_BUILD_DIR: &str = "./tmp/";

fn main() {
    let tmp_build_dir: PathBuf = TMP_BUILD_DIR.parse().unwrap();
    let proto_dir: PathBuf = COSMOS_SDK_PROTO_DIR.parse().unwrap();

    if tmp_build_dir.exists() {
        fs::remove_dir_all(tmp_build_dir.clone()).unwrap();
    }

    fs::create_dir_all(&TMP_BUILD_DIR).unwrap();
    compile_protos_and_services();
    copy_generated_files();
    apply_patches(&proto_dir);

    println!("Running rustfmt on prost/tonic-generated code");
    run_rustfmt(&proto_dir);
    fs::remove_dir_all(&TMP_BUILD_DIR).unwrap();
}

fn run_cmd(cmd: impl AsRef<OsStr>, args: impl IntoIterator<Item = impl AsRef<OsStr>>) {
    let stdout = process::Stdio::inherit();

    let exit_status = process::Command::new(&cmd)
        .args(args)
        .stdout(stdout)
        .status()
        .expect("exit status missing");

    if !exit_status.success() {
        panic!(
            "{:?} exited with error code: {:?}",
            cmd.as_ref(),
            exit_status.code()
        );
    }
}

fn run_rustfmt(dir: &Path) {
    let mut args = ["--edition", "2021"]
        .iter()
        .map(Into::into)
        .collect::<Vec<OsString>>();

    args.extend(
        WalkDir::new(dir)
            .into_iter()
            .filter_map(|e| e.ok())
            .filter(|e| e.file_type().is_file() && e.path().extension() == Some(OsStr::new("rs")))
            .map(|e| e.into_path())
            .map(Into::into),
    );

    run_cmd("rustfmt", args);
}

fn compile_protos_and_services() {
    println!("Compiling .proto files to Rust into '{}'...", TMP_BUILD_DIR);

    let cosmos_sdk_dir = fs::canonicalize(PathBuf::from("../cosmos-sdk/proto")).unwrap();
    let alliance_dir = fs::canonicalize(PathBuf::from("../alliance/proto")).unwrap();
    let ibc_dir = fs::canonicalize(PathBuf::from("../ibc-go/proto")).unwrap();
    let pfm_dir = fs::canonicalize(PathBuf::from(
        "../ibc-apps/middleware/packet-forward-middleware/proto",
    ))
    .unwrap();
    let icq = fs::canonicalize(PathBuf::from(
        "../ibc-apps/modules/async-icq/proto",
    ))
    .unwrap();
    let wasmd_dir = fs::canonicalize(PathBuf::from("../wasmd/proto")).unwrap();
    let cosmos_dir = fs::canonicalize(PathBuf::from("../cosmos-proto/proto")).unwrap();
    let terra_dir = fs::canonicalize(PathBuf::from("../terra/proto")).unwrap();
    let pob_dir = fs::canonicalize(PathBuf::from("../pob/proto")).unwrap();

    let proto_dirs = vec![
        cosmos_sdk_dir.clone(),
        alliance_dir.clone(),
        ibc_dir.clone(),
        pfm_dir.clone(),
        icq.clone(),
        wasmd_dir.clone(),
        cosmos_dir.clone(),
        terra_dir.clone(),
        pob_dir.clone(),
    ];
    let include_dirs = vec![
        fs::canonicalize(PathBuf::from("../protobuf/protobuf")).unwrap(),
        fs::canonicalize(PathBuf::from("../protobuf")).unwrap(),
        fs::canonicalize(PathBuf::from("../protobuf/proto")).unwrap(),
        cosmos_sdk_dir,
        alliance_dir,
        ibc_dir,
        pfm_dir,
        icq,
        wasmd_dir,
        fs::canonicalize(PathBuf::from("../grpc-gateway/third_party")).unwrap(),
        fs::canonicalize(PathBuf::from("../grpc-gateway/third_party/googleapis")).unwrap(),
        cosmos_dir,
        terra_dir,
        pob_dir,
    ];

    for proto_path in proto_dirs.iter() {
        let query_file = list_files_in_dir(proto_path);

        if query_file.is_empty() {
            continue;
        }

        println!("Compiling {:?}...", query_file);
        tonic_build::configure()
            .out_dir(TMP_BUILD_DIR)
            .extern_path(".tendermint", "::tendermint_proto")
            .compile(&query_file, &include_dirs)
            .unwrap();
    }
}

fn list_files_in_dir(dir_path: &Path) -> Vec<String> {
    let mut protos_path: Vec<String> = Vec::new();

    if let Ok(entries) = fs::read_dir(dir_path) {
        for entry in entries {
            if let Ok(entry) = entry {
                let path = entry.path();
                let proto_path = path.to_str().unwrap().to_string();

                if path.is_dir() {
                    let list_files = list_files_in_dir(&path);
                    protos_path.extend(list_files);
                } else if proto_path.ends_with("proto")
                    && !proto_path.contains("example")
                    && !proto_path.contains("swagger")
                    && !proto_path.contains("nft")
                    && !proto_path.contains("gov/v1beta1")
                    && !proto_path.contains("group/v1")
                {
                    protos_path.push(proto_path);
                }
            }
        }
    }

    protos_path
}

fn copy_generated_files() {
    println!("Patching generated files...");
    // Remove old compiled files
    remove_dir_all(&COSMOS_SDK_PROTO_DIR).unwrap_or_default();
    create_dir_all(&COSMOS_SDK_PROTO_DIR).unwrap();
    let mut filenames = Vec::new();

    // Copy new compiled files (prost does not use folder structures)
    let errors = WalkDir::new(TMP_BUILD_DIR)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.file_type().is_file())
        .map(|e| {
            let filename = e.file_name().to_os_string().to_str().unwrap().to_string();
            filenames.push(filename.clone());
            copy_and_patch(e.path(), format!("{}/{}", COSMOS_SDK_PROTO_DIR, &filename))
        })
        .filter_map(|e| e.err())
        .collect::<Vec<_>>();

    if !errors.is_empty() {
        for e in errors {
            eprintln!("[error] Error while copying compiled file: {}", e);
        }

        panic!("[error] Aborted.");
    }
}

fn copy_and_patch(src: impl AsRef<Path>, dest: impl AsRef<Path>) -> io::Result<()> {
    /// Regex substitutions to apply to the prost-generated output
    const REPLACEMENTS: &[(&str, &str)] = &[
        // Use `tendermint-proto` proto definitions
        ("(super::)+tendermint", "tendermint_proto"),
        // Feature-gate gRPC client modules
        (
            "/// Generated client implementations.",
            "/// Generated client implementations.\n\
             #[cfg(feature = \"grpc\")]\n\
             #[cfg_attr(docsrs, doc(cfg(feature = \"grpc\")))]",
        ),
        // Feature-gate gRPC impls which use `tonic::transport`
        (
            "impl(.+)tonic::transport(.+)",
            "#[cfg(feature = \"grpc-transport\")]\n    \
             #[cfg_attr(docsrs, doc(cfg(feature = \"grpc-transport\")))]\n    \
             impl${1}tonic::transport${2}",
        ),
        // Feature-gate gRPC server modules
        (
            "/// Generated server implementations.",
            "/// Generated server implementations.\n\
             #[cfg(feature = \"grpc\")]\n\
             #[cfg_attr(docsrs, doc(cfg(feature = \"grpc\")))]",
        ),
    ];

    let mut contents = fs::read_to_string(src)?;

    for &(regex, replacement) in REPLACEMENTS {
        contents = Regex::new(regex)
            .unwrap_or_else(|_| panic!("invalid regex: {}", regex))
            .replace_all(&contents, replacement)
            .to_string();
    }

    fs::write(dest, &contents)
}

fn patch_file(path: impl AsRef<Path>, pattern: &Regex, replacement: &str) -> io::Result<()> {
    let mut contents = fs::read_to_string(&path)?;
    contents = pattern.replace_all(&contents, replacement).to_string();
    fs::write(path, &contents)
}

/// Fix clashing type names in prost-generated code.
/// See cosmos/cosmos-rust#154.
fn apply_patches(proto_dir: &Path) {
    for (pattern, replacement) in [
        ("enum Validators", "enum Policy"),
        (
            "stake_authorization::Validators",
            "stake_authorization::Policy",
        ),
    ] {
        patch_file(
            &proto_dir.join("cosmos.staking.v1beta1.rs"),
            &Regex::new(pattern).unwrap(),
            replacement,
        )
        .expect("error patching cosmos.staking.v1beta1.rs");
    }
}
