# Oauth2ClientsOauth2UpdateClientRequest

## Example Usage

```typescript
import { Oauth2ClientsOauth2UpdateClientRequest } from "@polar-sh/sdk/models/operations/oauth2clientsoauth2updateclient.js";

let value: Oauth2ClientsOauth2UpdateClientRequest = {
  clientId: "<id>",
  oAuth2ClientConfigurationUpdate: {
    redirectUris: [
      "https://unkempt-vibraphone.name/",
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