# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 927366,
        type: "percentage",
        basisPoints: 1017,
        createdAt: new Date("2024-02-29T11:38:51.783Z"),
        modifiedAt: new Date("2023-10-29T02:06:17.083Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-07-18T01:48:24.710Z"),
        endsAt: new Date("2023-11-01T16:55:02.649Z"),
        maxRedemptions: 65863,
        redemptionsCount: 261627,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2023-07-31T07:22:42.631Z"),
            modifiedAt: new Date("2025-10-16T06:12:38.743Z"),
            id: "<value>",
            name: "<value>",
            description:
              "poor meh ouch furthermore which deform confound the what",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 164203,
      maxPage: 432046,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |