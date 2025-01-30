# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://meager-unblinking.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-07-22T16:47:45.821Z"),
      modifiedAt: new Date("2023-07-10T22:43:26.452Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 261955,
      clientSecretExpiresAt: 204898,
    },
  ],
  pagination: {
    totalCount: 885320,
    maxPage: 793526,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |