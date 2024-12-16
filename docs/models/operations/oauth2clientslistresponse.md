# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://each-scarification.info",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-02-09T15:36:42.368Z"),
        modifiedAt: new Date("2024-07-14T10:56:14.102Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 412664,
        clientSecretExpiresAt: 982407,
      },
    ],
    pagination: {
      totalCount: 198849,
      maxPage: 879491,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |