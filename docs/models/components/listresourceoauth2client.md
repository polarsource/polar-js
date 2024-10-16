# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://urban-mobility.info/",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-05-27T05:53:52.720Z"),
      modifiedAt: new Date("2024-10-10T06:09:21.767Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 673493,
      clientSecretExpiresAt: 230903,
    },
  ],
  pagination: {
    totalCount: 819261,
    maxPage: 420526,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |