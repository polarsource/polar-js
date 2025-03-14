# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://those-mousse.com",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-02-15T22:56:46.437Z"),
        modifiedAt: new Date("2024-01-06T12:13:28.450Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 880185,
        clientSecretExpiresAt: 153538,
      },
    ],
    pagination: {
      totalCount: 263528,
      maxPage: 47284,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |