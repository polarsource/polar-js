# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        type: "fixed",
        amount: 677727,
        currency: "Brunei Dollar",
        createdAt: new Date("2025-05-08T04:24:50.830Z"),
        modifiedAt: new Date("2025-01-12T04:38:06.746Z"),
        id: "<value>",
        metadata: {
          "key": 174769,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-03-18T13:54:17.453Z"),
        endsAt: new Date("2024-06-22T07:27:55.882Z"),
        maxRedemptions: 141530,
        redemptionsCount: 288155,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2023-01-08T08:46:22.557Z"),
            modifiedAt: new Date("2023-01-09T09:10:09.167Z"),
            id: "<value>",
            name: "<value>",
            description:
              "plus tomography internalize meh manipulate technologist till mash",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 722848,
      maxPage: 709673,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |