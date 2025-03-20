# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://strange-makeover.biz",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-12-20T16:48:26.342Z"),
        modifiedAt: new Date("2023-11-07T11:10:32.200Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 283221,
        clientSecretExpiresAt: 527610,
      },
    ],
    pagination: {
      totalCount: 411210,
      maxPage: 86838,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |