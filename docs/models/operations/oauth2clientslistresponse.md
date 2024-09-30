# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://jubilant-diversity.name/",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-02-08T12:51:00.758Z"),
        modifiedAt: new Date("2024-09-20T05:30:40.558Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 816365,
        clientSecretExpiresAt: 552581,
      },
    ],
    pagination: {
      totalCount: 851809,
      maxPage: 962396,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |