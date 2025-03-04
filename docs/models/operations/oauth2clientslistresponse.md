# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://important-comparison.com/",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-12-10T01:49:15.356Z"),
        modifiedAt: new Date("2024-08-08T06:13:11.927Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 881954,
        clientSecretExpiresAt: 156040,
      },
    ],
    pagination: {
      totalCount: 347877,
      maxPage: 582725,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |