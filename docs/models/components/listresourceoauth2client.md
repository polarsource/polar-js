# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://minor-grandpa.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-06-09T04:26:57.182Z"),
      modifiedAt: new Date("2022-10-18T13:51:15.254Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 306682,
      clientSecretExpiresAt: 515159,
    },
  ],
  pagination: {
    totalCount: 695511,
    maxPage: 287202,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |