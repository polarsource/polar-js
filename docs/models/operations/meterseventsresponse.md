# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 582725,
        },
        id: "<value>",
        timestamp: new Date("2023-03-30T17:49:29.666Z"),
        name: "<value>",
        source: "user",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2025-11-24T15:40:34.778Z"),
          modifiedAt: new Date("2024-08-12T20:22:46.865Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Austin_Leffler@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Paraguay",
          },
          taxId: [
            "bh_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://austere-chow.biz/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 415183,
      maxPage: 500841,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |