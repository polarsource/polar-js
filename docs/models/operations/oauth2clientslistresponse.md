# Oauth2ClientsListResponse

## Example Usage

```typescript
import { Oauth2ClientsListResponse } from "@polar-sh/sdk/models/operations";

let value: Oauth2ClientsListResponse = {
  result: {
    items: [
      {
        redirectUris: [
          "https://snoopy-polarisation.net/",
        ],
        clientName: "<value>",
        createdAt: new Date("2024-04-20T20:41:36.879Z"),
        modifiedAt: new Date("2022-11-11T17:15:53.855Z"),
        clientId: "<id>",
        clientSecret: "<value>",
        clientIdIssuedAt: 548256,
        clientSecretExpiresAt: 543353,
      },
    ],
    pagination: {
      totalCount: 739633,
      maxPage: 956871,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOAuth2Client](../../models/components/listresourceoauth2client.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |