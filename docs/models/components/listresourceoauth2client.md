# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://possible-alb.net/",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-02-16T06:35:54.024Z"),
      modifiedAt: new Date("2025-01-08T18:59:17.756Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 212369,
      clientSecretExpiresAt: 591191,
    },
  ],
  pagination: {
    totalCount: 275974,
    maxPage: 22402,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |