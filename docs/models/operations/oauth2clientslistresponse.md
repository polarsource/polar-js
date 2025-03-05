# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://joyful-department.net",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-02-03T09:03:46.147Z"),
        modifiedAt: new Date("2025-01-22T12:24:34.947Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 749167,
        clientSecretExpiresAt: 83514,
      },
    ],
    pagination: {
      totalCount: 279503,
      maxPage: 923960,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |