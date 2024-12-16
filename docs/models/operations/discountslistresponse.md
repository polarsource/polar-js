# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "forever",
        durationInMonths: 701492,
        type: "percentage",
        amount: 418356,
        currency: "Moldovan Leu",
        createdAt: new Date("2023-05-26T08:30:10.056Z"),
        modifiedAt: new Date("2024-04-19T02:14:13.396Z"),
        id: "<value>",
        metadata: {
          "key": 678035,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-06-21T03:34:01.976Z"),
        endsAt: new Date("2024-01-14T09:28:29.148Z"),
        maxRedemptions: 364171,
        redemptionsCount: 478443,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-05-26T23:50:00.815Z"),
            modifiedAt: new Date("2024-11-17T08:36:55.539Z"),
            id: "<value>",
            name: "<value>",
            description: "discourse hm psst off whose circa",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 465424,
      maxPage: 262400,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |