# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations/discountslist.js";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 448422,
        type: "fixed",
        amount: 386002,
        currency: "Cordoba Oro",
        createdAt: new Date("2025-10-17T12:43:49.669Z"),
        modifiedAt: new Date("2024-06-30T02:59:06.785Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-05-02T11:33:02.978Z"),
        endsAt: new Date("2023-08-24T14:27:21.344Z"),
        maxRedemptions: 908023,
        redemptionsCount: 930780,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-02-27T09:29:12.212Z"),
            modifiedAt: new Date("2025-03-30T03:56:38.360Z"),
            id: "<value>",
            name: "<value>",
            description: "entwine hubris at aching ack ouch",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 745018,
      maxPage: 209409,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |