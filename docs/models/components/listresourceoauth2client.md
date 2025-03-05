# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://failing-baseboard.info/",
      ],
      clientName: "<value>",
      createdAt: new Date("2024-09-24T20:40:57.193Z"),
      modifiedAt: new Date("2024-06-28T03:53:07.992Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 162787,
      clientSecretExpiresAt: 371545,
    },
  ],
  pagination: {
    totalCount: 917907,
    maxPage: 459294,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |