# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://ignorant-meatloaf.net",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-12-31T21:10:10.994Z"),
      modifiedAt: new Date("2024-10-23T11:48:21.731Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 681824,
      clientSecretExpiresAt: 64244,
    },
  ],
  pagination: {
    totalCount: 97799,
    maxPage: 607549,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |