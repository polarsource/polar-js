# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://distorted-honesty.name",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-10-09T10:28:05.599Z"),
        modifiedAt: new Date("2023-06-25T19:22:41.992Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 482244,
        clientSecretExpiresAt: 599832,
      },
    ],
    pagination: {
      totalCount: 647345,
      maxPage: 611534,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |