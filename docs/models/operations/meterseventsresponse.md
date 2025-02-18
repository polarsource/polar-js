# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 865706,
        },
        id: "<value>",
        timestamp: new Date("2023-08-06T09:59:37.931Z"),
        name: "<value>",
        source: "system",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2023-05-25T12:19:30.904Z"),
          modifiedAt: new Date("2024-06-17T13:04:54.840Z"),
          id: "<value>",
          metadata: {
            "key": 479084,
          },
          email: "Albert.OKeefe71@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Japan",
          },
          taxId: [
            "br_cnpj",
          ],
          organizationId: "<value>",
          avatarUrl: "https://handy-swath.net",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 174206,
      maxPage: 926245,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |