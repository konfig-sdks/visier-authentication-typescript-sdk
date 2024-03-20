<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for generating authentication tokens

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierauthentication.authentication.aSIDTokenAuthentication`](#visierauthenticationauthenticationasidtokenauthentication)
  * [`visierauthentication.authentication.oAuth2Authorize`](#visierauthenticationauthenticationoauth2authorize)
  * [`visierauthentication.authentication.oAuth2Token`](#visierauthenticationauthenticationoauth2token)
  * [`visierauthentication.authentication.ticketAuthentication`](#visierauthenticationauthenticationticketauthentication)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=Authentication&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierAuthentication } from "visier-authentication-typescript-sdk";

const visierauthentication = new VisierAuthentication({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKey: "API_KEY",
});

const aSIDTokenAuthenticationResponse =
  await visierauthentication.authentication.aSIDTokenAuthentication({});

console.log(aSIDTokenAuthenticationResponse);
```

## Reference<a id="reference"></a>


### `visierauthentication.authentication.aSIDTokenAuthentication`<a id="visierauthenticationauthenticationasidtokenauthentication"></a>

Generate a Visier authentication token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const aSIDTokenAuthenticationResponse =
  await visierauthentication.authentication.aSIDTokenAuthentication({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

##### password: `string`<a id="password-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/visierSecureToken` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierauthentication.authentication.oAuth2Authorize`<a id="visierauthenticationauthenticationoauth2authorize"></a>

Initiate an OAuth2 authorization code flow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const oAuth2AuthorizeResponse =
  await visierauthentication.authentication.oAuth2Authorize({
    responseType: "responseType_example",
    clientId: "clientId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### responseType: `string`<a id="responsetype-string"></a>

The response type. Must be `code`.

##### clientId: `string`<a id="clientid-string"></a>

The ID of the pre-registered client application.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The optional URI to redirect to after authorization.

##### scope: `string`<a id="scope-string"></a>

The OAuth 2.0 scope of the authorization request. Defaults to `read`.

#### 🔄 Return<a id="🔄-return"></a>

[Status](./models/status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/auth/oauth2/authorize` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierauthentication.authentication.oAuth2Token`<a id="visierauthenticationauthenticationoauth2token"></a>

Generate a JSON Web Token (JWT) for the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const oAuth2TokenResponse =
  await visierauthentication.authentication.oAuth2Token({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

The grant type. Supported values: - `authorization_code`: The authorization code grant type. - `password`: The password grant type. - `urn:visier:params:oauth:grant-type:asid-token`: The ASID token grant type.

##### clientId: `string`<a id="clientid-string"></a>

The ID of the pre-registered client application.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The optional URI to redirect to after authorization.

##### code: `string`<a id="code-string"></a>

The authorization code. Applicable only for authorization code grant type.

##### username: `string`<a id="username-string"></a>

The username of the user to authenticate. Applicable only for password grant type.

##### password: `string`<a id="password-string"></a>

The password of the user to authenticate. Applicable only for password grant type.

##### asidToken: `string`<a id="asidtoken-string"></a>

The ASID token. Applicable only for ASID token grant type.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/auth/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierauthentication.authentication.ticketAuthentication`<a id="visierauthenticationauthenticationticketauthentication"></a>

Generate a legacy Visier secure ticket

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ticketAuthenticationResponse =
  await visierauthentication.authentication.ticketAuthentication({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

##### password: `string`<a id="password-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/visierSecureTicket` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
