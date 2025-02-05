# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://illustrious-accountability.net/",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-05-10T03:17:43.418Z"),
        modifiedAt: new Date("2025-03-13T12:34:38.744Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 497744,
        clientSecretExpiresAt: 14894,
      },
    ],
    pagination: {
      totalCount: 872126,
      maxPage: 920533,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |