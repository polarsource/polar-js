# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        type: "percentage",
        basisPoints: 435130,
        createdAt: new Date("2023-03-21T03:17:26.002Z"),
        modifiedAt: new Date("2025-02-18T11:59:52.074Z"),
        id: "<value>",
        metadata: {
          "key": 385407,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-08-28T00:26:15.207Z"),
        endsAt: new Date("2023-12-25T03:14:41.243Z"),
        maxRedemptions: 238315,
        redemptionsCount: 907673,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2025-05-31T19:26:40.800Z"),
            modifiedAt: new Date("2023-12-31T22:04:58.038Z"),
            id: "<value>",
            name: "<value>",
            description: "than generously bonnet rag wilt",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 946912,
      maxPage: 712252,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |