# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 960433,
        },
        id: "<value>",
        timestamp: new Date("2024-03-03T05:31:49.356Z"),
        name: "<value>",
        source: "user",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2025-10-26T07:59:26.802Z"),
          modifiedAt: new Date("2023-02-10T22:13:56.169Z"),
          id: "<value>",
          metadata: {
            "key": 259862,
          },
          email: "Johnson80@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Aruba",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://important-comparison.com/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 646967,
      maxPage: 533996,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |