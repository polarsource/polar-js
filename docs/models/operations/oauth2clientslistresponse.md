# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://unsung-monocle.info/",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-08-05T15:41:47.092Z"),
        modifiedAt: new Date("2025-09-27T13:25:44.103Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 204810,
        clientSecretExpiresAt: 65329,
      },
    ],
    pagination: {
      totalCount: 630536,
      maxPage: 277094,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |