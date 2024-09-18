# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "http://pretty-inch.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-12-01T09:39:29.562Z"),
      modifiedAt: new Date("2023-10-08T06:12:24.107Z"),
      clientId: "<value>",
      clientSecret: "<value>",
      clientIdIssuedAt: 833819,
      clientSecretExpiresAt: 962771,
    },
  ],
  pagination: {
    totalCount: 914791,
    maxPage: 16871,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |