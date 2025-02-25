# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": "<value>",
        },
        id: "<value>",
        timestamp: new Date("2023-12-08T02:02:02.919Z"),
        name: "<value>",
        source: "system",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2025-08-05T09:48:47.610Z"),
          modifiedAt: new Date("2025-10-18T08:58:01.123Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Kenny.Lehner@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Iceland",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://bulky-baseboard.org/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 219152,
      maxPage: 960608,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |