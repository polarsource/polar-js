# MetersEventsResponse

## Example Usage

```typescript
import { MetersEventsResponse } from "@polar-sh/sdk/models/operations/metersevents.js";

let value: MetersEventsResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": "<value>",
        },
        id: "<value>",
        timestamp: new Date("2023-04-28T18:33:29.815Z"),
        name: "<value>",
        source: "system",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2023-08-06T05:23:24.419Z"),
          modifiedAt: new Date("2023-03-07T06:53:48.572Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Jeanie.Swift@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Seychelles",
          },
          taxId: [
            "ua_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://realistic-follower.biz",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 857155,
      maxPage: 569425,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |