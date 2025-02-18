# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 885829,
        type: "fixed",
        basisPoints: 435040,
        createdAt: new Date("2025-08-01T12:48:52.738Z"),
        modifiedAt: new Date("2023-11-28T03:21:01.284Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-12-23T02:23:53.289Z"),
        endsAt: new Date("2025-11-06T19:30:28.000Z"),
        maxRedemptions: 628304,
        redemptionsCount: 90307,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2025-04-01T00:05:10.720Z"),
            modifiedAt: new Date("2023-01-07T12:06:56.751Z"),
            id: "<value>",
            name: "<value>",
            description:
              "incandescence grandson gah after moralise enthusiastically worldly",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 521909,
      maxPage: 944272,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |