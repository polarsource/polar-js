# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        type: "percentage",
        basisPoints: 638267,
        createdAt: new Date("2024-10-09T15:51:16.466Z"),
        modifiedAt: new Date("2023-07-21T19:01:54.916Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-08-22T20:14:42.910Z"),
        endsAt: new Date("2022-05-13T14:09:00.250Z"),
        maxRedemptions: 729195,
        redemptionsCount: 197424,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2022-05-16T03:16:29.831Z"),
            modifiedAt: new Date("2024-11-12T09:37:47.736Z"),
            id: "<value>",
            name: "<value>",
            description: "meh gnaw until",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 426928,
      maxPage: 937611,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |