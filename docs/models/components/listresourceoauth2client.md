# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://coordinated-stall.name/",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-05-18T09:56:55.181Z"),
      modifiedAt: new Date("2022-10-09T21:53:28.000Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 626341,
      clientSecretExpiresAt: 898908,
    },
  ],
  pagination: {
    totalCount: 533956,
    maxPage: 870734,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |