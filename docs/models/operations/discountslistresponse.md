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
            createdAt: new Date("2024-02-04T08:24:53.797Z"),
            modifiedAt: new Date("2023-04-18T07:54:33.216Z"),
            id: "<value>",
            name: "<value>",
            description: "gallery ick govern rally cruelty whenever ape anenst",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 755838,
      maxPage: 151562,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |