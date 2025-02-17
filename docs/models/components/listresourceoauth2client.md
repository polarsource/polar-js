# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components/listresourceoauth2client.js";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://far-flung-step-mother.biz",
      ],
      clientName: "<value>",
      createdAt: new Date("2023-10-15T02:28:08.072Z"),
      modifiedAt: new Date("2023-08-13T13:39:26.566Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 885320,
      clientSecretExpiresAt: 793526,
    },
  ],
  pagination: {
    totalCount: 450484,
    maxPage: 378023,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |