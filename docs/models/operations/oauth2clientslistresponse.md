# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://gleaming-countess.com/",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-08-10T01:54:29.277Z"),
        modifiedAt: new Date("2024-08-12T05:31:21.644Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 736936,
        clientSecretExpiresAt: 217602,
      },
    ],
    pagination: {
      totalCount: 124657,
      maxPage: 155878,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |