# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://ajar-venom.info",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-11-08T16:45:59.461Z"),
        modifiedAt: new Date("2023-06-21T14:53:55.894Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 940297,
        clientSecretExpiresAt: 918904,
      },
    ],
    pagination: {
      totalCount: 817719,
      maxPage: 223258,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |