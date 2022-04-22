use std::{env, fs, io};
use std::path::PathBuf;

use walkdir::WalkDir;

mod package {
    use std::{fs, io};
    use std::io::{BufRead, Write};
    use std::path::Path;

    pub fn create(path: &str) -> io::Result<()> {
        let path_o = Path::new(path);
        if path_o.exists() {
            return Ok(());
        }

        fs::create_dir(path)?;

        let mut f = fs::OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open(format!("{}/mod.rs", path_o.parent().unwrap().to_str().unwrap()))?;

        writeln!(f, "pub mod {};", path_o.file_name().unwrap().to_str().unwrap())?;

        Ok(())
    }

    pub fn normalize(src: &str, path: &[String], out_dir: &str) -> io::Result<()> {
        create(out_dir)?;
        if path.len() > 0 {
            return normalize(src, &path[1..path.len()], format!("{}/{}", out_dir, path.first().unwrap()).as_str());
        }

        let mut f = fs::OpenOptions::new()
            .create(true)
            .write(true)
            .append(true)
            .open(format!("{}/mod.rs", out_dir))?;

        for line in io::BufReader::new(fs::File::open(src)?).lines() {
            writeln!(f, "{}", line?)?;
        }

        Ok(())
    }

    pub fn packaging(in_dir: &str, out_dir: &str) -> io::Result<()> {
        for entry in fs::read_dir(in_dir)? {
            let entry = entry?;
            let path = entry.file_name().to_str().unwrap().split(".").map(String::from).collect::<Vec<String>>();

            normalize(
                entry.path().to_str().unwrap(),
                &path[0..(path.len()-1)],
                out_dir,
            )?;
        }

        Ok(())
    }
}

fn get_protos(dir: &str) -> Vec<String> {
    WalkDir::new(dir)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().extension().unwrap_or_default() == "proto")
        //Ignore staking authz proto file because protoc issue (Conflict StakeAuthorization.Validators with StakeAuthorization.validators)
        .filter(|e| !e.path().canonicalize().unwrap().to_str().unwrap().ends_with("cosmos/staking/v1beta1/authz.proto"))
        .map(|e| e.path().canonicalize().unwrap().to_str().unwrap().to_string())
        .collect()
}

fn main() -> io::Result<()> {
    let project_root = PathBuf::from(env::var("CARGO_MANIFEST_DIR").unwrap());

    let temp_dir = project_root.join("./proto-temp");
    fs::create_dir(&temp_dir)?;

    let output_path = project_root.join("./src/generated");
    if output_path.exists() {
        fs::remove_dir_all(&output_path)?;
    }
    fs::create_dir(&output_path)?;
    fs::File::create(output_path.join("mod.rs"))?;

    let terra_proto_path = project_root.join("../terrad/proto").canonicalize().unwrap();
    let third_party_proto_path = project_root.join("../terrad/third_party/proto").canonicalize().unwrap();

    let mut config = prost_build::Config::new();

    config.out_dir(&temp_dir);
    config.retain_enum_prefix();

    let mut proto_files = get_protos(third_party_proto_path.to_str().unwrap());
    proto_files.extend(get_protos(terra_proto_path.to_str().unwrap()));

    let terra_path = format!("{}/", terra_proto_path.to_str().unwrap().to_string());
    let third_party_path = format!("{}/", third_party_proto_path.to_str().unwrap().to_string());

    config.compile_protos(
        proto_files.as_slice(),
        &[third_party_path, terra_path],
    )?;

    package::packaging(temp_dir.to_str().unwrap(), output_path.to_str().unwrap())?;

    fs::remove_dir_all(&temp_dir)?;

    Ok(())
}