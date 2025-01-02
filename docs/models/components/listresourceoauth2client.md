# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://sniveling-pepper.net/",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-01-02T03:01:54.888Z"),
      modifiedAt: new Date("2024-05-10T08:04:00.367Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 277082,
      clientSecretExpiresAt: 55600,
    },
  ],
  pagination: {
    totalCount: 307936,
    maxPage: 46258,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |