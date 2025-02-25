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
        basisPoints: 402291,
        createdAt: new Date("2024-02-04T12:54:22.276Z"),
        modifiedAt: new Date("2023-02-07T16:34:11.417Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-08T08:57:15.102Z"),
        endsAt: new Date("2024-05-20T16:38:15.015Z"),
        maxRedemptions: 507153,
        redemptionsCount: 336223,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-07-25T17:38:37.851Z"),
            modifiedAt: new Date("2023-04-02T14:09:43.552Z"),
            id: "<value>",
            name: "<value>",
            description:
              "bashfully finally cheerfully below upon frivolous lucky outset questionably afore",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 905109,
      maxPage: 300946,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |