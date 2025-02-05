# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 432668,
        type: "fixed",
        amount: 524576,
        currency: "Saint Helena Pound",
        createdAt: new Date("2025-04-27T00:34:32.428Z"),
        modifiedAt: new Date("2025-03-15T09:53:44.348Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-03-22T05:40:31.125Z"),
        endsAt: new Date("2023-07-05T06:38:06.989Z"),
        maxRedemptions: 9914,
        redemptionsCount: 755787,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-08-13T04:54:32.640Z"),
            modifiedAt: new Date("2024-04-22T05:47:56.110Z"),
            id: "<value>",
            name: "<value>",
            description: "with vice mount",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 200628,
      maxPage: 638376,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |