# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://fuzzy-jump.net/",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-04-11T12:08:48.566Z"),
      modifiedAt: new Date("2023-03-17T08:26:48.837Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 755607,
      clientSecretExpiresAt: 727604,
    },
  ],
  pagination: {
    totalCount: 632474,
    maxPage: 141629,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |