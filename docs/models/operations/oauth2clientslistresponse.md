# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://svelte-amendment.info",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-04-04T07:16:34.900Z"),
        modifiedAt: new Date("2023-11-26T22:09:52.331Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 993026,
        clientSecretExpiresAt: 57238,
      },
    ],
    pagination: {
      totalCount: 161742,
      maxPage: 319680,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |