# Oauth2RevokeTokenRevokeTokenRequest

## Example Usage

```typescript
import { Oauth2RevokeTokenRevokeTokenRequest } from "@polar-sh/sdk/models/operations";

let value: Oauth2RevokeTokenRevokeTokenRequest = {
  token: "<value>",
  clientId: "<value>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `token`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `tokenTypeHint`                                                      | [operations.TokenTypeHint](../../models/operations/tokentypehint.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `clientId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `clientSecret`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |