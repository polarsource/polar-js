# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://square-deed.name/",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-10-23T11:23:07.532Z"),
        modifiedAt: new Date("2022-09-15T04:47:27.045Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 327837,
        clientSecretExpiresAt: 63575,
      },
    ],
    pagination: {
      totalCount: 746386,
      maxPage: 881310,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |