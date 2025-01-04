# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://grim-alert.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-03-19T09:48:42.697Z"),
      modifiedAt: new Date("2025-01-05T08:57:30.703Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 390916,
      clientSecretExpiresAt: 861166,
    },
  ],
  pagination: {
    totalCount: 356508,
    maxPage: 538258,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |