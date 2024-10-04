# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://spherical-legend.com",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-06-02T18:22:20.317Z"),
        modifiedAt: new Date("2023-04-26T07:53:03.945Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 202796,
        clientSecretExpiresAt: 423588,
      },
    ],
    pagination: {
      totalCount: 357758,
      maxPage: 163684,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |