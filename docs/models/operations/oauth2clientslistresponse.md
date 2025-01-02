# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://wasteful-tool.net/",
        ],
        clientName: "<value>",
        createdAt: new Date("2023-09-02T16:34:40.356Z"),
        modifiedAt: new Date("2023-11-10T10:11:55.405Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 829019,
        clientSecretExpiresAt: 652211,
      },
    ],
    pagination: {
      totalCount: 245939,
      maxPage: 869122,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |