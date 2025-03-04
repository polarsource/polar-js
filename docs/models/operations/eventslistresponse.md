# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 507153,
        },
        id: "<value>",
        timestamp: new Date("2024-01-04T12:01:20.971Z"),
        name: "<value>",
        source: "system",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2023-04-02T14:09:43.552Z"),
          modifiedAt: new Date("2025-10-26T14:12:43.692Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Marina.Quigley4@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Pierre and Miquelon",
          },
          taxId: [
            "ru_inn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://gripping-cook.name/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 428508,
      maxPage: 684586,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |