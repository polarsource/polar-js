# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://frozen-disclosure.info/",
      ],
      clientName: "<value>",
      createdAt: new Date("2025-04-29T23:43:18.801Z"),
      modifiedAt: new Date("2025-06-01T15:17:38.399Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 790570,
      clientSecretExpiresAt: 885646,
    },
  ],
  pagination: {
    totalCount: 50741,
    maxPage: 982217,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |