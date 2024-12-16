# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://handsome-department.net/",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-05-03T08:16:14.878Z"),
      modifiedAt: new Date("2022-06-07T11:23:10.059Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 278510,
      clientSecretExpiresAt: 288027,
    },
  ],
  pagination: {
    totalCount: 846305,
    maxPage: 791284,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |