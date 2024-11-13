# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://shy-cafe.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-12-02T04:42:08.759Z"),
      modifiedAt: new Date("2023-02-22T02:38:09.369Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 765245,
      clientSecretExpiresAt: 536042,
    },
  ],
  pagination: {
    totalCount: 856997,
    maxPage: 111026,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |