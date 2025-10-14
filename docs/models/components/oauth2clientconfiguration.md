# OAuth2ClientConfiguration

## Example Usage

```typescript
import { OAuth2ClientConfiguration } from "@polar-sh/sdk/models/components/oauth2clientconfiguration.js";

let value: OAuth2ClientConfiguration = {
  redirectUris: [
    "https://whimsical-charm.com",
    "https://paltry-deer.com",
  ],
  clientName: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `redirectUris`                                                                           | *string*[]                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tokenEndpointAuthMethod`                                                                | [components.TokenEndpointAuthMethod](../../models/components/tokenendpointauthmethod.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `grantTypes`                                                                             | [components.GrantTypes](../../models/components/granttypes.md)[]                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `responseTypes`                                                                          | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `scope`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `clientName`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `clientUri`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `logoUri`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `tosUri`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `policyUri`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |