# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://wordy-tectonics.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-10-07T14:53:57.713Z"),
      modifiedAt: new Date("2022-02-07T13:21:36.825Z"),
      clientId: "<value>",
      clientSecret: "<value>",
      clientIdIssuedAt: 998527,
      clientSecretExpiresAt: 131576,
    },
  ],
  pagination: {
    totalCount: 740347,
    maxPage: 821016,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |