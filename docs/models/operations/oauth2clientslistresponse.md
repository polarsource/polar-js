# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://enlightened-draft.net",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-11-13T07:16:15.727Z"),
        modifiedAt: new Date("2022-12-13T22:32:12.208Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 826806,
        clientSecretExpiresAt: 103990,
      },
    ],
    pagination: {
      totalCount: 633982,
      maxPage: 751033,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |