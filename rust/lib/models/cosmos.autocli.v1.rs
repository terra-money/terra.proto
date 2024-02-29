/// ModuleOptions describes the CLI options for a Cosmos SDK module.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ModuleOptions {
    /// tx describes the tx command for the module.
    #[prost(message, optional, tag = "1")]
    pub tx: ::core::option::Option<ServiceCommandDescriptor>,
    /// query describes the tx command for the module.
    #[prost(message, optional, tag = "2")]
    pub query: ::core::option::Option<ServiceCommandDescriptor>,
}
/// ServiceCommandDescriptor describes a CLI command based on a protobuf service.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ServiceCommandDescriptor {
    /// service is the fully qualified name of the protobuf service to build
    /// the command from. It can be left empty if sub_commands are used instead
    /// which may be the case if a module provides multiple tx and/or query services.
    #[prost(string, tag = "1")]
    pub service: ::prost::alloc::string::String,
    /// rpc_command_options are options for commands generated from rpc methods.
    /// If no options are specified for a given rpc method on the service, a
    /// command will be generated for that method with the default options.
    #[prost(message, repeated, tag = "2")]
    pub rpc_command_options: ::prost::alloc::vec::Vec<RpcCommandOptions>,
    /// sub_commands is a map of optional sub-commands for this command based on
    /// different protobuf services. The map key is used as the name of the
    /// sub-command.
    #[prost(map = "string, message", tag = "3")]
    pub sub_commands:
        ::std::collections::HashMap<::prost::alloc::string::String, ServiceCommandDescriptor>,
}
/// RpcCommandOptions specifies options for commands generated from protobuf
/// rpc methods.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RpcCommandOptions {
    /// rpc_method is short name of the protobuf rpc method that this command is
    /// generated from.
    #[prost(string, tag = "1")]
    pub rpc_method: ::prost::alloc::string::String,
    /// use is the one-line usage method. It also allows specifying an alternate
    /// name for the command as the first word of the usage text.
    ///
    /// By default the name of an rpc command is the kebab-case short name of the
    /// rpc method.
    #[prost(string, tag = "2")]
    pub r#use: ::prost::alloc::string::String,
    /// long is the long message shown in the 'help <this-command>' output.
    #[prost(string, tag = "3")]
    pub long: ::prost::alloc::string::String,
    /// short is the short description shown in the 'help' output.
    #[prost(string, tag = "4")]
    pub short: ::prost::alloc::string::String,
    /// example is examples of how to use the command.
    #[prost(string, tag = "5")]
    pub example: ::prost::alloc::string::String,
    /// alias is an array of aliases that can be used instead of the first word in Use.
    #[prost(string, repeated, tag = "6")]
    pub alias: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// suggest_for is an array of command names for which this command will be suggested -
    /// similar to aliases but only suggests.
    #[prost(string, repeated, tag = "7")]
    pub suggest_for: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// deprecated defines, if this command is deprecated and should print this string when used.
    #[prost(string, tag = "8")]
    pub deprecated: ::prost::alloc::string::String,
    /// version defines the version for this command. If this value is non-empty and the command does not
    /// define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
    /// will print content of the "Version" variable. A shorthand "v" flag will also be added if the
    /// command does not define one.
    #[prost(string, tag = "9")]
    pub version: ::prost::alloc::string::String,
    /// flag_options are options for flags generated from rpc request fields.
    /// By default all request fields are configured as flags. They can
    /// also be configured as positional args instead using positional_args.
    #[prost(map = "string, message", tag = "10")]
    pub flag_options: ::std::collections::HashMap<::prost::alloc::string::String, FlagOptions>,
    /// positional_args specifies positional arguments for the command.
    #[prost(message, repeated, tag = "11")]
    pub positional_args: ::prost::alloc::vec::Vec<PositionalArgDescriptor>,
    /// skip specifies whether to skip this rpc method when generating commands.
    #[prost(bool, tag = "12")]
    pub skip: bool,
}
/// FlagOptions are options for flags generated from rpc request fields.
/// By default, all request fields are configured as flags based on the
/// kebab-case name of the field. Fields can be turned into positional arguments
/// instead by using RpcCommandOptions.positional_args.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FlagOptions {
    /// name is an alternate name to use for the field flag.
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
    /// shorthand is a one-letter abbreviated flag.
    #[prost(string, tag = "2")]
    pub shorthand: ::prost::alloc::string::String,
    /// usage is the help message.
    #[prost(string, tag = "3")]
    pub usage: ::prost::alloc::string::String,
    /// default_value is the default value as text.
    #[prost(string, tag = "4")]
    pub default_value: ::prost::alloc::string::String,
    /// default value is the default value as text if the flag is used without any value.
    #[prost(string, tag = "5")]
    pub no_opt_default_value: ::prost::alloc::string::String,
    /// deprecated is the usage text to show if this flag is deprecated.
    #[prost(string, tag = "6")]
    pub deprecated: ::prost::alloc::string::String,
    /// shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated.
    #[prost(string, tag = "7")]
    pub shorthand_deprecated: ::prost::alloc::string::String,
    /// hidden hides the flag from help/usage text
    #[prost(bool, tag = "8")]
    pub hidden: bool,
}
/// PositionalArgDescriptor describes a positional argument.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PositionalArgDescriptor {
    /// proto_field specifies the proto field to use as the positional arg. Any
    /// fields used as positional args will not have a flag generated.
    #[prost(string, tag = "1")]
    pub proto_field: ::prost::alloc::string::String,
    /// varargs makes a positional parameter a varargs parameter. This can only be
    /// applied to last positional parameter and the proto_field must a repeated
    /// field.
    #[prost(bool, tag = "2")]
    pub varargs: bool,
}
/// AppOptionsRequest is the RemoteInfoService/AppOptions request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AppOptionsRequest {}
/// AppOptionsResponse is the RemoteInfoService/AppOptions response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AppOptionsResponse {
    /// module_options is a map of module name to autocli module options.
    #[prost(map = "string, message", tag = "1")]
    pub module_options: ::std::collections::HashMap<::prost::alloc::string::String, ModuleOptions>,
}
/// Generated client implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::http::Uri;
    use tonic::codegen::*;
    /// RemoteInfoService provides clients with the information they need
    /// to build dynamically CLI clients for remote chains.
    #[derive(Debug, Clone)]
    pub struct QueryClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    #[cfg(feature = "grpc-transport")]
    #[cfg_attr(docsrs, doc(cfg(feature = "grpc-transport")))]
    impl QueryClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> QueryClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> QueryClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<http::Request<tonic::body::BoxBody>>>::Error:
                Into<StdError> + Send + Sync,
        {
            QueryClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// AppOptions returns the autocli options for all of the modules in an app.
        pub async fn app_options(
            &mut self,
            request: impl tonic::IntoRequest<super::AppOptionsRequest>,
        ) -> Result<tonic::Response<super::AppOptionsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static("/cosmos.autocli.v1.Query/AppOptions");
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
}
/// Generated server implementations.
#[cfg(feature = "grpc")]
#[cfg_attr(docsrs, doc(cfg(feature = "grpc")))]
pub mod query_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with QueryServer.
    #[async_trait]
    pub trait Query: Send + Sync + 'static {
        /// AppOptions returns the autocli options for all of the modules in an app.
        async fn app_options(
            &self,
            request: tonic::Request<super::AppOptionsRequest>,
        ) -> Result<tonic::Response<super::AppOptionsResponse>, tonic::Status>;
    }
    /// RemoteInfoService provides clients with the information they need
    /// to build dynamically CLI clients for remote chains.
    #[derive(Debug)]
    pub struct QueryServer<T: Query> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: Query> QueryServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for QueryServer<T>
    where
        T: Query,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/cosmos.autocli.v1.Query/AppOptions" => {
                    #[allow(non_camel_case_types)]
                    struct AppOptionsSvc<T: Query>(pub Arc<T>);
                    impl<T: Query> tonic::server::UnaryService<super::AppOptionsRequest> for AppOptionsSvc<T> {
                        type Response = super::AppOptionsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AppOptionsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).app_options(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AppOptionsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .header("content-type", "application/grpc")
                        .body(empty_body())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: Query> Clone for QueryServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: Query> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: Query> tonic::server::NamedService for QueryServer<T> {
        const NAME: &'static str = "cosmos.autocli.v1.Query";
    }
}
