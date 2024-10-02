# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://liquid-goodwill.org/",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-09-08T12:58:34.282Z"),
      modifiedAt: new Date("2023-06-05T13:12:25.088Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 596194,
      clientSecretExpiresAt: 232141,
    },
  ],
  pagination: {
    totalCount: 521384,
    maxPage: 350037,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |