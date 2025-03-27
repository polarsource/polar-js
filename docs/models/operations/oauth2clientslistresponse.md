# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://raw-interchange.name",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-04-06T23:00:54.390Z"),
        modifiedAt: new Date("2025-12-30T04:19:31.943Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 47602,
        clientSecretExpiresAt: 546829,
      },
    ],
    pagination: {
      totalCount: 409380,
      maxPage: 929452,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |