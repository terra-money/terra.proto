use std::{env, fs, io};
use std::path::{Path, PathBuf};

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
    let output_dir = "./src/generated";

    if Path::new(&output_dir).exists() {
        fs::remove_dir_all(&output_dir)?;
    }
    fs::create_dir(output_dir)?;
    fs::File::create(format!("{}/mod.rs", output_dir))?;

    let mut config = prost_build::Config::new();

    config.retain_enum_prefix();

    let mut proto_files = get_protos("../terrad/third_party/proto");
    proto_files.extend(get_protos("../terrad/proto/terra"));

    let terra_path = format!("{}/", PathBuf::from(String::from("../terrad/proto")).canonicalize().unwrap().to_str().unwrap().to_string());
    let third_party_path = format!("{}/", PathBuf::from(String::from("../terrad/third_party/proto")).canonicalize().unwrap().to_str().unwrap().to_string());

    config.compile_protos(
        proto_files.as_slice(),
        &[third_party_path, terra_path],
    )?;

    package::packaging(env::var_os("OUT_DIR").unwrap().to_str().unwrap(), "./src/generated")?;

    Ok(())
}