# ListResourceOAuth2Client

## Example Usage

```typescript
import { ListResourceOAuth2Client } from "@polar-sh/sdk/models/components";

let value: ListResourceOAuth2Client = {
    items: [
        {
            redirectUris: ["http://vapid-porthole.net"],
            clientName: "<value>",
            createdAt: new Date("2022-11-11T16:23:05.729Z"),
            modifiedAt: new Date("2024-11-27T05:48:21.062Z"),
            clientId: "<value>",
            clientSecret: "<value>",
            clientIdIssuedAt: 42976,
            clientSecretExpiresAt: 919783,
        },
    ],
    pagination: {
        totalCount: 116098,
        maxPage: 36033,
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.OAuth2Client](../../models/components/oauth2client.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |