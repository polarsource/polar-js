# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 520827,
        type: "fixed",
        basisPoints: 455552,
        createdAt: new Date("2023-04-27T09:03:53.602Z"),
        modifiedAt: new Date("2025-06-30T12:04:58.293Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-03-18T10:16:47.345Z"),
        endsAt: new Date("2023-03-05T21:56:17.705Z"),
        maxRedemptions: 422171,
        redemptionsCount: 644867,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-06-28T14:36:58.925Z"),
            modifiedAt: new Date("2025-06-21T07:10:54.065Z"),
            id: "<value>",
            name: "<value>",
            description: "doubtfully kiss catalyst between ornery compete",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 147559,
      maxPage: 591309,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |