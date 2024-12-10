# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        type: "fixed",
        amount: 607380,
        currency: "Afghani",
        createdAt: new Date("2024-03-23T21:42:53.607Z"),
        modifiedAt: new Date("2023-03-01T07:38:44.572Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-30T05:20:19.928Z"),
        endsAt: new Date("2023-06-08T11:50:26.753Z"),
        maxRedemptions: 508633,
        redemptionsCount: 90205,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-12-12T14:27:58.846Z"),
            modifiedAt: new Date("2023-12-04T06:25:18.097Z"),
            id: "<value>",
            name: "<value>",
            description:
              "soybean very into what sundae broken within absent opposite",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 413273,
      maxPage: 133898,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |