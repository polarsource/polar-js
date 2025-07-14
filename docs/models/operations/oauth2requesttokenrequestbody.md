# Oauth2RequestTokenRequestBody


## Supported Types

### `components.AuthorizationCodeTokenRequest`

```typescript
const value: components.AuthorizationCodeTokenRequest = {
  grantType: "authorization_code",
  clientId: "<id>",
  clientSecret: "<value>",
  code: "<value>",
  redirectUri: "https://well-to-do-cellar.biz",
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

