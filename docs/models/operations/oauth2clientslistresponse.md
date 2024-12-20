# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://quarrelsome-spirit.name",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-12-11T12:44:47.120Z"),
        modifiedAt: new Date("2024-12-06T12:57:36.581Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 720296,
        clientSecretExpiresAt: 78474,
      },
    ],
    pagination: {
      totalCount: 716805,
      maxPage: 973876,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |