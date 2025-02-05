# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://far-flung-heartache.info/",
        ],
        clientName: "<value>",
        createdAt: new Date("2025-10-02T16:17:12.780Z"),
        modifiedAt: new Date("2025-01-12T12:44:08.199Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 319975,
        clientSecretExpiresAt: 765552,
      },
    ],
    pagination: {
      totalCount: 442657,
      maxPage: 589402,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |