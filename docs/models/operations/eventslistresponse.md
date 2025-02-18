# EventsListResponse

## Example Usage

```typescript
import { EventsListResponse } from "@polar-sh/sdk/models/operations/eventslist.js";

let value: EventsListResponse = {
  result: {
    items: [
      {
        metadata: {
          "key": 191286,
        },
        id: "<value>",
        timestamp: new Date("2023-01-01T04:22:41.062Z"),
        name: "<value>",
        source: "user",
        organizationId: "<value>",
        customerId: "<value>",
        customer: {
          createdAt: new Date("2023-11-08T02:54:24.733Z"),
          modifiedAt: new Date("2024-12-01T03:37:52.235Z"),
          id: "<value>",
          metadata: {
            "key": 863280,
          },
          email: "Kenton_Padberg95@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Oman",
          },
          taxId: [
            "jp_cn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://hairy-illusion.com/",
        },
        externalCustomerId: "<id>",
      },
    ],
    pagination: {
      totalCount: 318753,
      maxPage: 69708,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceEvent](../../models/components/listresourceevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |