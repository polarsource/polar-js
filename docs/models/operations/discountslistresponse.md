# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        type: "percentage",
        basisPoints: 479872,
        createdAt: new Date("2025-06-23T02:08:54.250Z"),
        modifiedAt: new Date("2025-10-15T23:00:41.227Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-01-09T21:14:51.292Z"),
        endsAt: new Date("2025-02-10T10:40:30.475Z"),
        maxRedemptions: 129275,
        redemptionsCount: 272187,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-05-16T08:55:14.295Z"),
            modifiedAt: new Date("2024-04-09T14:14:15.442Z"),
            id: "<value>",
            name: "<value>",
            description: "below hovel exhaust bench",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 89722,
      maxPage: 282358,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |