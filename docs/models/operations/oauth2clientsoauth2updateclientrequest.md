# Oauth2ClientsOauth2UpdateClientRequest

## Example Usage

```typescript
import { Oauth2ClientsOauth2UpdateClientRequest } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsOauth2UpdateClientRequest = {
  clientId: "<id>",
  oAuth2ClientConfigurationUpdate: {
    redirectUris: [
      "https://present-yogurt.org/",
    ],
    clientName: "<value>",
    clientId: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `oAuth2ClientConfigurationUpdate`                                                                        | [components.OAuth2ClientConfigurationUpdate](../../models/components/oauth2clientconfigurationupdate.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |