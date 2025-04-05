# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://deficient-sock.info",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-12-22T15:43:02.670Z"),
      modifiedAt: new Date("2024-04-03T03:09:37.954Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 643766,
      clientSecretExpiresAt: 384365,
    },
  ],
  pagination: {
    totalCount: 146552,
    maxPage: 237437,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |