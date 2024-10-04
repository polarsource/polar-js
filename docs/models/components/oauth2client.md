# OAuth2Client

## Example Usage

```typescript
import { OAuth2Client } from "@polar-sh/sdk/models/components";

let value: OAuth2Client = {
  redirectUris: [
    "https://metallic-quinoa.org/",
  ],
  clientName: "<value>",
  createdAt: new Date("2022-10-20T17:39:45.167Z"),
  modifiedAt: new Date("2022-05-21T01:38:02.928Z"),
  clientId: "<id>",
  clientSecret: "<value>",
  clientIdIssuedAt: 509215,
  clientSecretExpiresAt: 299592,
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