# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 744339,
        type: "fixed",
        basisPoints: 71891,
        createdAt: new Date("2024-05-08T15:09:48.730Z"),
        modifiedAt: new Date("2023-01-21T09:04:47.376Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-09-29T18:10:57.735Z"),
        endsAt: new Date("2025-09-11T17:55:19.118Z"),
        maxRedemptions: 24887,
        redemptionsCount: 387290,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-03-27T10:33:34.110Z"),
            modifiedAt: new Date("2025-12-20T07:26:20.116Z"),
            id: "<value>",
            name: "<value>",
            description: "pish untimely sans sleet suspiciously certainly",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 690674,
      maxPage: 731439,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |