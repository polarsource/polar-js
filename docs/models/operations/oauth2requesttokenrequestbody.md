# Oauth2RequestTokenRequestBody


## Supported Types

### `components.AuthorizationCodeTokenRequest`

```typescript
const value: components.AuthorizationCodeTokenRequest = {
  grantType: "authorization_code",
  clientId: "<id>",
  clientSecret: "<value>",
  code: "<value>",
  redirectUri: "https://bleak-makeover.biz/",
};
```

### `components.RefreshTokenRequest`

```typescript
const value: components.RefreshTokenRequest = {
  grantType: "refresh_token",
  clientId: "<id>",
  clientSecret: "<value>",
  refreshToken: "<value>",
};
```

### `components.WebTokenRequest`

```typescript
const value: components.WebTokenRequest = {
  grantType: "web",
  clientId: "<id>",
  clientSecret: "<value>",
  sessionToken: "<value>",
};
```

