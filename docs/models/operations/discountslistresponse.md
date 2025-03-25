# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        durationInMonths: 604940,
        type: "percentage",
        basisPoints: 836327,
        createdAt: new Date("2024-07-19T10:51:53.100Z"),
        modifiedAt: new Date("2024-08-04T10:04:31.915Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-02T15:29:27.341Z"),
        endsAt: new Date("2025-05-22T17:40:40.208Z"),
        maxRedemptions: 200282,
        redemptionsCount: 496149,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-12-25T23:29:46.884Z"),
            modifiedAt: new Date("2025-08-07T15:38:56.902Z"),
            id: "<value>",
            name: "<value>",
            description: "boo utterly inject whoever vanish into derby recede",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 880015,
      maxPage: 461339,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |