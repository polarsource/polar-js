# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://pointed-disk.info",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-03-31T16:33:43.233Z"),
      modifiedAt: new Date("2024-02-07T00:53:43.703Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 8073,
      clientSecretExpiresAt: 105518,
    },
  ],
  pagination: {
    totalCount: 285340,
    maxPage: 393170,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |