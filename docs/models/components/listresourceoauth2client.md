# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://standard-morning.info/",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-06-22T12:10:56.971Z"),
      modifiedAt: new Date("2022-01-02T12:01:15.395Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 383114,
      clientSecretExpiresAt: 406720,
    },
  ],
  pagination: {
    totalCount: 363891,
    maxPage: 802404,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |