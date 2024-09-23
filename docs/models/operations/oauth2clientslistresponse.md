# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://elegant-disappointment.com/",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-01-14T04:36:02.905Z"),
        modifiedAt: new Date("2022-05-07T13:41:56.227Z"),
        clientId: "<value>",
        clientSecret: "<value>",
        clientIdIssuedAt: 618480,
        clientSecretExpiresAt: 974257,
      },
    ],
    pagination: {
      totalCount: 990345,
      maxPage: 409054,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |