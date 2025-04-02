# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://athletic-platypus.org",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-04-16T10:31:47.570Z"),
        modifiedAt: new Date("2024-08-22T14:00:46.508Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 37078,
        clientSecretExpiresAt: 493415,
      },
    ],
    pagination: {
      totalCount: 271066,
      maxPage: 561790,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |