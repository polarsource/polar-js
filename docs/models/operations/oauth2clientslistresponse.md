# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://soupy-scenario.biz",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-05-02T07:36:13.592Z"),
        modifiedAt: new Date("2024-07-11T09:17:17.799Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 5266,
        clientSecretExpiresAt: 877291,
      },
    ],
    pagination: {
      totalCount: 497962,
      maxPage: 579119,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |