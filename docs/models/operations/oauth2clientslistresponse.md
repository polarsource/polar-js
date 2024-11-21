# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://quick-witted-molasses.net",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-10-31T15:49:47.989Z"),
        modifiedAt: new Date("2022-02-10T05:07:51.800Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 147400,
        clientSecretExpiresAt: 756287,
      },
    ],
    pagination: {
      totalCount: 83791,
      maxPage: 516124,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |