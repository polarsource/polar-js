# RevokeTokenRequest

## Example Usage

```typescript
import { RevokeTokenRequest } from "@polar-sh/sdk/models/components/revoketokenrequest.js";

let value: RevokeTokenRequest = {
  token: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `token`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `tokenTypeHint`                                                      | [components.TokenTypeHint](../../models/components/tokentypehint.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `clientId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `clientSecret`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |