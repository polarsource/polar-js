# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://biodegradable-integer.info",
        ],
        clientName: "<value>",
        createdAt: new Date("2022-08-11T06:20:49.442Z"),
        modifiedAt: new Date("2023-04-10T06:02:57.106Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 357758,
        clientSecretExpiresAt: 163684,
      },
    ],
    pagination: {
      totalCount: 441374,
      maxPage: 262800,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |