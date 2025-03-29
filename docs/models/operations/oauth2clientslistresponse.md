# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://grumpy-moment.com/",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-09-04T21:49:33.036Z"),
        modifiedAt: new Date("2025-11-24T15:40:34.778Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 538184,
        clientSecretExpiresAt: 827911,
      },
    ],
    pagination: {
      totalCount: 491684,
      maxPage: 95666,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |