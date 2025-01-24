# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://colossal-sanity.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-03-14T06:20:25.850Z"),
      modifiedAt: new Date("2024-03-19T14:44:48.293Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 747629,
      clientSecretExpiresAt: 900339,
    },
  ],
  pagination: {
    totalCount: 596143,
    maxPage: 163928,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |