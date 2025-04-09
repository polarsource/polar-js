# OAuth2Client

## Example Usage

```typescript
import { OAuth2Client } from "@polar-sh/sdk/models/components/oauth2client.js";

let value: OAuth2Client = {
  redirectUris: [
    "https://familiar-celsius.org",
  ],
  clientName: "<value>",
  createdAt: new Date("2025-10-09T07:54:57.874Z"),
  modifiedAt: new Date("2024-03-22T13:05:00.238Z"),
  clientId: "<id>",
  clientSecret: "<value>",
  clientIdIssuedAt: 973644,
  clientSecretExpiresAt: 814727,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `redirectUris`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokenEndpointAuthMethod`                                                                     | [components.TokenEndpointAuthMethod](../../models/components/tokenendpointauthmethod.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grantTypes`                                                                                  | [components.GrantTypes](../../models/components/granttypes.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `responseTypes`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
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