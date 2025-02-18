# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://better-confusion.name",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-02-17T16:18:20.036Z"),
        modifiedAt: new Date("2025-06-06T21:50:54.193Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 392352,
        clientSecretExpiresAt: 75613,
      },
    ],
    pagination: {
      totalCount: 841363,
      maxPage: 68594,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |