# TokenResponse

## Example Usage

```typescript
import { TokenResponse } from "@polar-sh/sdk/models/components";

let value: TokenResponse = {
  accessToken: "<value>",
  expiresIn: 27877,
  refreshToken: "<value>",
  scope: "<value>",
  idToken: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tokenType`                                                  | [components.TokenType](../../models/components/tokentype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `expiresIn`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `refreshToken`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `scope`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `idToken`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |