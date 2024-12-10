# OAuth2Client

## Example Usage

```typescript
import { OAuth2Client } from "@polar-sh/sdk/models/components";

let value: OAuth2Client = {
  redirectUris: [
    "https://fat-fowl.name/",
  ],
  clientName: "<value>",
  createdAt: new Date("2022-09-04T01:52:32.823Z"),
  modifiedAt: new Date("2023-05-22T07:36:17.577Z"),
  clientId: "<id>",
  clientSecret: "<value>",
  clientIdIssuedAt: 574923,
  clientSecretExpiresAt: 138094,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `redirectUris`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokenEndpointAuthMethod`                                                                     | [components.TokenEndpointAuthMethod](../../models/components/tokenendpointauthmethod.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grantTypes`                                                                                  | [components.GrantTypes](../../models/components/granttypes.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `responseTypes`                                                                               | [components.ResponseTypes](../../models/components/responsetypes.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `clientName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientUri`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `logoUri`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tosUri`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `policyUri`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientSecret`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientIdIssuedAt`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientSecretExpiresAt`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |