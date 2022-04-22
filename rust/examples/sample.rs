use terra_proto::generated::cosmos::tx::v1beta1::{GetTxRequest, Tx};
use prost::Message;
use terra_proto::generated::terra::wasm::v1beta1::MsgExecuteContract;

fn main() {
    let request = GetTxRequest {
        hash: String::from("88ACDE66672318BC44780697EF5B8775881B604B641E4D3ABD857F65CD560E68"),
    };

    println!("{}", base64::encode(request.encode_to_vec()));

    let msg_1=  "CsQBCsEBCiYvdGVycmEud2FzbS52MWJldGExLk1zZ0V4ZWN1dGVDb250cmFjdBKWAQosdGVycmExNjRrcnZhaHFlY3p0MDU4djdkODZxcnB3d2EybWcyZDZjaDB2dzUSLHRlcnJhMW44ZXRucWVqdHo2eGg3dG4zdGx2YXJkNDBqNnV6ZWVhZDlybHJsGjh7InN1Ym1pdCI6eyJyb3VuZF9pZCI6MjI4MDMyLCJzdWJtaXNzaW9uIjoiNjkxNjgzNTgxMCJ9fRJpClIKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleRIjCiEDMzHIFQn58OaE+yp7nPkuyOV+1uENOUR7yyah64ADQxkSBAoCCAEY2ZNmEhMKDQoFdWx1bmESBDQ1MDAQ4KcSGkBObdKuGK4//3Rpy1n3VzOQbRykkfUZPy2JIzhFfF1+EDGliR8AWrCmfN4DqIrgYe7Qqew/mIQq2Y8+6pSl7dS0";
    let b64_msg = base64::decode(msg_1).unwrap();
    let tx: Tx = Tx::decode(b64_msg.as_slice()).unwrap();
    if let Some(body) = tx.body {
        //   println!("{:?}", body);
        body.messages.iter().for_each(|msg| {
            let f: MsgExecuteContract = MsgExecuteContract::decode(msg.value.as_slice()).unwrap();
            println!("{:?}", f);
        });
    }
}