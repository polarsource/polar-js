# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://confused-coin.net/",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-04-22T00:35:29.397Z"),
        modifiedAt: new Date("2023-06-09T18:37:15.154Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 591293,
        clientSecretExpiresAt: 126505,
      },
    ],
    pagination: {
      totalCount: 53407,
      maxPage: 194029,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |