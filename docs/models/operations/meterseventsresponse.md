# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 399766,
        },
        id: "<value>",
        timestamp: new Date("2024-07-14T04:52:17.411Z"),
        name: "<value>",
        source: "user",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2023-06-11T19:43:11.675Z"),
          modifiedAt: new Date("2024-05-08T20:20:50.781Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          externalId: "<id>",
          email: "Yolanda.Corwin63@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Netherlands",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://judicious-integer.info/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 532954,
      maxPage: 417755,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |