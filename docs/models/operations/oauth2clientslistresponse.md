# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://infantile-demur.net",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-09-24T11:14:33.228Z"),
        modifiedAt: new Date("2023-03-11T02:58:08.798Z"),
        clientId: "<value>",
        clientSecret: "<value>",
        clientIdIssuedAt: 592042,
        clientSecretExpiresAt: 896039,
      },
    ],
    pagination: {
      totalCount: 572252,
      maxPage: 638921,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |