# Oauth2RequestTokenRequestBody


## Supported Types

### `components.AuthorizationCodeTokenRequest`

```typescript
const value: components.AuthorizationCodeTokenRequest = {
  clientId: "<id>",
  clientSecret: "<value>",
  code: "<value>",
  redirectUri: "https://bleak-makeover.biz/",
};
```

### `components.RefreshTokenRequest`

```typescript
const value: components.RefreshTokenRequest = {
  clientId: "<id>",
  clientSecret: "<value>",
  refreshToken: "<value>",
};
```

