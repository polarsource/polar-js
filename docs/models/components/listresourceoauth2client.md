# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
  items: [
    {
      redirectUris: [
        "https://each-decryption.net/",
      ],
      clientName: "<value>",
      createdAt: new Date("2022-06-16T02:33:31.041Z"),
      modifiedAt: new Date("2022-11-06T01:22:31.085Z"),
      clientId: "<id>",
      clientSecret: "<value>",
      clientIdIssuedAt: 63025,
      clientSecretExpiresAt: 218108,
    },
  ],
  pagination: {
    totalCount: 37808,
    maxPage: 698339,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |