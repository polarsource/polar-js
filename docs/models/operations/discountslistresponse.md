# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 528108,
        type: "fixed",
        amount: 367298,
        currency: "Riel",
        createdAt: new Date("2025-06-13T11:58:48.863Z"),
        modifiedAt: new Date("2024-08-23T04:03:13.198Z"),
        id: "<value>",
        metadata: {
          "key": 299340,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-01-05T02:33:00.885Z"),
        endsAt: new Date("2024-12-10T09:55:11.143Z"),
        maxRedemptions: 331733,
        redemptionsCount: 197517,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            metadata: {
              "key": 97928,
            },
            createdAt: new Date("2025-03-23T20:22:01.205Z"),
            modifiedAt: new Date("2023-04-10T11:34:38.771Z"),
            id: "<value>",
            name: "<value>",
            description: "kit opposite simplistic wisely",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 657387,
      maxPage: 168983,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |