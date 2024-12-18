# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        type: "fixed",
        amount: 245022,
        currency: "CFA Franc BEAC",
        createdAt: new Date("2024-01-03T03:27:45.938Z"),
        modifiedAt: new Date("2022-09-12T11:37:04.367Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2022-02-22T23:07:25.713Z"),
        endsAt: new Date("2022-11-07T04:20:42.318Z"),
        maxRedemptions: 336707,
        redemptionsCount: 280695,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-02-28T22:07:34.332Z"),
            modifiedAt: new Date("2023-09-14T10:04:23.587Z"),
            id: "<value>",
            name: "<value>",
            description: "neck crowded westernize",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 272159,
      maxPage: 791870,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |