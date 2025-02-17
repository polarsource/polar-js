# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        type: "percentage",
        amount: 594788,
        currency: "Dong",
        createdAt: new Date("2024-03-09T08:42:18.565Z"),
        modifiedAt: new Date("2023-01-06T23:31:21.587Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-04T12:35:03.563Z"),
        endsAt: new Date("2023-10-12T06:28:55.012Z"),
        maxRedemptions: 585158,
        redemptionsCount: 439622,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-09-12T10:08:53.512Z"),
            modifiedAt: new Date("2025-03-25T20:12:46.170Z"),
            id: "<value>",
            name: "<value>",
            description: "yippee ick yet",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 479872,
      maxPage: 824900,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |