# DiscountsListResponse

## Example Usage

```typescript
import { DiscountsListResponse } from "@polar-sh/sdk/models/operations";

let value: DiscountsListResponse = {
  result: {
    items: [
      {
        duration: "once",
        durationInMonths: 645688,
        type: "percentage",
        basisPoints: 414709,
        createdAt: new Date("2024-11-18T08:24:51.450Z"),
        modifiedAt: new Date("2024-03-03T07:12:01.015Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-06-09T22:32:28.707Z"),
        endsAt: new Date("2025-06-23T02:08:54.250Z"),
        maxRedemptions: 929707,
        redemptionsCount: 741205,
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2025-01-09T21:14:51.292Z"),
            modifiedAt: new Date("2025-02-10T10:40:30.475Z"),
            id: "<value>",
            name: "<value>",
            description: "availability dutiful attraction save",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 328423,
      maxPage: 736389,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceDiscount](../../models/components/listresourcediscount.md) | :heavy_check_mark:                                                                 | N/A                                                                                |