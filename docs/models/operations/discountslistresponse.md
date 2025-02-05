# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        durationInMonths: 53999,
        type: "percentage",
        amount: 365539,
        currency: "CFA Franc BEAC",
        createdAt: new Date("2023-11-14T14:51:03.070Z"),
        modifiedAt: new Date("2025-11-27T23:06:00.390Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-08-20T01:03:14.805Z"),
        endsAt: new Date("2025-09-10T04:35:18.843Z"),
        maxRedemptions: 310675,
        redemptionsCount: 442312,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-04-20T12:22:07.487Z"),
            modifiedAt: new Date("2023-06-28T21:12:27.512Z"),
            id: "<value>",
            name: "<value>",
            description:
              "properly emphasise outdo meh victoriously scared descendant",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 436394,
      maxPage: 29070,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |