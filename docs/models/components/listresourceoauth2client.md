# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://serpentine-teriyaki.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-05-21T01:38:02.928Z"),
      modifiedAt: new Date("2024-07-12T02:22:41.507Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 299592,
      clientSecretExpiresAt: 984493,
    },
  ],
  pagination: {
    totalCount: 39842,
    maxPage: 190895,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |