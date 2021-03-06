//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/authz/v1beta1/genesis.proto

package cosmos.authz.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun grantAuthorization(block: cosmos.authz.v1beta1.GrantAuthorizationKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Genesis.GrantAuthorization =
  cosmos.authz.v1beta1.GrantAuthorizationKt.Dsl._create(cosmos.authz.v1beta1.Genesis.GrantAuthorization.newBuilder()).apply { block() }._build()
object GrantAuthorizationKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.authz.v1beta1.Genesis.GrantAuthorization.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.authz.v1beta1.Genesis.GrantAuthorization.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.authz.v1beta1.Genesis.GrantAuthorization = _builder.build()

    /**
     * <code>string granter = 1;</code>
     */
    var granter: kotlin.String
      @JvmName("getGranter")
      get() = _builder.getGranter()
      @JvmName("setGranter")
      set(value) {
        _builder.setGranter(value)
      }
    /**
     * <code>string granter = 1;</code>
     */
    fun clearGranter() {
      _builder.clearGranter()
    }

    /**
     * <code>string grantee = 2;</code>
     */
    var grantee: kotlin.String
      @JvmName("getGrantee")
      get() = _builder.getGrantee()
      @JvmName("setGrantee")
      set(value) {
        _builder.setGrantee(value)
      }
    /**
     * <code>string grantee = 2;</code>
     */
    fun clearGrantee() {
      _builder.clearGrantee()
    }

    /**
     * <code>.google.protobuf.Any authorization = 3 [(.cosmos_proto.accepts_interface) = "Authorization"];</code>
     */
    var authorization: com.google.protobuf.Any
      @JvmName("getAuthorization")
      get() = _builder.getAuthorization()
      @JvmName("setAuthorization")
      set(value) {
        _builder.setAuthorization(value)
      }
    /**
     * <code>.google.protobuf.Any authorization = 3 [(.cosmos_proto.accepts_interface) = "Authorization"];</code>
     */
    fun clearAuthorization() {
      _builder.clearAuthorization()
    }
    /**
     * <code>.google.protobuf.Any authorization = 3 [(.cosmos_proto.accepts_interface) = "Authorization"];</code>
     * @return Whether the authorization field is set.
     */
    fun hasAuthorization(): kotlin.Boolean {
      return _builder.hasAuthorization()
    }

    /**
     * <code>.google.protobuf.Timestamp expiration = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    var expiration: com.google.protobuf.Timestamp
      @JvmName("getExpiration")
      get() = _builder.getExpiration()
      @JvmName("setExpiration")
      set(value) {
        _builder.setExpiration(value)
      }
    /**
     * <code>.google.protobuf.Timestamp expiration = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    fun clearExpiration() {
      _builder.clearExpiration()
    }
    /**
     * <code>.google.protobuf.Timestamp expiration = 4 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     * @return Whether the expiration field is set.
     */
    fun hasExpiration(): kotlin.Boolean {
      return _builder.hasExpiration()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.authz.v1beta1.Genesis.GrantAuthorization.copy(block: cosmos.authz.v1beta1.GrantAuthorizationKt.Dsl.() -> Unit): cosmos.authz.v1beta1.Genesis.GrantAuthorization =
  cosmos.authz.v1beta1.GrantAuthorizationKt.Dsl._create(this.toBuilder()).apply { block() }._build()
