# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations/oauth2clientslist.js";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://authentic-status.info/",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-02-07T00:32:11.404Z"),
        modifiedAt: new Date("2024-10-02T10:27:02.030Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 614836,
        clientSecretExpiresAt: 180315,
      },
    ],
    pagination: {
      totalCount: 294636,
      maxPage: 289623,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |