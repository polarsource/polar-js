# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        type: "percentage",
        amount: 96967,
        currency: "Pound Sterling",
        createdAt: new Date("2024-12-31T00:45:57.025Z"),
        modifiedAt: new Date("2023-03-19T16:43:42.877Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-16T12:30:01.164Z"),
        endsAt: new Date("2024-10-18T05:20:57.644Z"),
        maxRedemptions: 542484,
        redemptionsCount: 634857,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2025-05-15T15:55:20.769Z"),
            modifiedAt: new Date("2023-05-19T17:15:57.061Z"),
            id: "<value>",
            name: "<value>",
            description:
              "healthily heavy after unexpectedly the plain viability",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 607654,
      maxPage: 952308,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |