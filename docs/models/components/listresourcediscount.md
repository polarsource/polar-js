# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      type: "fixed",
      amount: 696024,
      currency: "Somoni",
      createdAt: new Date("2023-07-18T04:09:50.300Z"),
      modifiedAt: new Date("2024-11-16T06:19:22.427Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-05-03T20:47:05.431Z"),
      endsAt: new Date("2024-05-31T04:27:17.611Z"),
      maxRedemptions: 861044,
      redemptionsCount: 627706,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2025-01-16T23:19:27.050Z"),
          modifiedAt: new Date("2024-03-06T21:50:32.713Z"),
          id: "<value>",
          name: "<value>",
          description: "tribe even zealous under axe",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 869340,
    maxPage: 275420,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |