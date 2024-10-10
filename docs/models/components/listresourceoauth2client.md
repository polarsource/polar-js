# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://noxious-intent.name",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-09-12T10:14:23.290Z"),
      modifiedAt: new Date("2023-07-26T10:28:21.576Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 350037,
      clientSecretExpiresAt: 108918,
    },
  ],
  pagination: {
    totalCount: 791499,
    maxPage: 360795,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |