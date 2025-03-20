# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://svelte-character.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-10-03T13:54:59.592Z"),
      modifiedAt: new Date("2024-01-24T18:09:07.037Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 216998,
      clientSecretExpiresAt: 912070,
    },
  ],
  pagination: {
    totalCount: 970105,
    maxPage: 637770,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |