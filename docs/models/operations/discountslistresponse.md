# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 811176,
        type: "fixed",
        basisPoints: 112847,
        createdAt: new Date("2024-07-15T05:55:01.936Z"),
        modifiedAt: new Date("2024-07-28T16:45:50.465Z"),
        id: "<value>",
        metadata: {
          "key": 121331,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-02-09T03:52:41.491Z"),
        endsAt: new Date("2023-02-10T01:08:58.558Z"),
        maxRedemptions: 112541,
        redemptionsCount: 28143,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2025-01-24T01:46:25.150Z"),
            modifiedAt: new Date("2025-10-24T05:07:27.834Z"),
            id: "<value>",
            name: "<value>",
            description: "accountability saw drag ravage",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 461339,
      maxPage: 565818,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |