# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [],
      clientName: "<value>",
      createdAt: new Date("2025-06-24T01:39:24.374Z"),
      modifiedAt: new Date("2024-12-22T15:43:02.670Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 418003,
      clientSecretExpiresAt: 643766,
    },
  ],
  pagination: {
    totalCount: 47105,
    maxPage: 607201,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |