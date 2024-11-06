# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://carefree-embarrassment.org/",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-06-03T03:52:22.682Z"),
        modifiedAt: new Date("2022-12-29T08:00:18.342Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 51053,
        clientSecretExpiresAt: 331269,
      },
    ],
    pagination: {
      totalCount: 320326,
      maxPage: 946808,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |