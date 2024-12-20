# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "repeating",
        durationInMonths: 364171,
        type: "fixed",
        basisPoints: 466235,
        createdAt: new Date("2024-11-17T08:36:55.539Z"),
        modifiedAt: new Date("2023-04-23T13:46:31.465Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-09-23T23:11:43.932Z"),
        endsAt: new Date("2024-03-29T05:10:24.186Z"),
        maxRedemptions: 202049,
        redemptionsCount: 425149,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-12-08T23:04:13.096Z"),
            modifiedAt: new Date("2022-10-09T10:28:05.599Z"),
            id: "<value>",
            name: "<value>",
            description: "jovially armchair collaborate pfft",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 171866,
      maxPage: 689614,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |