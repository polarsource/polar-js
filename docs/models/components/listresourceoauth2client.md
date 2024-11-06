# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://unruly-possession.info",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-11-03T20:32:51.033Z"),
      modifiedAt: new Date("2023-11-30T08:31:54.256Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 631429,
      clientSecretExpiresAt: 23910,
    },
  ],
  pagination: {
    totalCount: 747110,
    maxPage: 221874,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |