# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "http://idiotic-wholesaler.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-08-13T11:27:07.282Z"),
      modifiedAt: new Date("2023-11-13T09:00:35.761Z"),
      clientId: "<value>",
      clientSecret: "<value>",
      clientIdIssuedAt: 502721,
      clientSecretExpiresAt: 379356,
    },
  ],
  pagination: {
    totalCount: 922348,
    maxPage: 542129,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |