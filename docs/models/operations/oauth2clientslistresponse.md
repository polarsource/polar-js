# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://thin-individual.net/",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-10-03T13:35:00.562Z"),
        modifiedAt: new Date("2025-12-05T10:23:47.414Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 557090,
        clientSecretExpiresAt: 782690,
      },
    ],
    pagination: {
      totalCount: 384705,
      maxPage: 449095,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |