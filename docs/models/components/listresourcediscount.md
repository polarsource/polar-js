# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      type: "fixed",
      amount: 485972,
      currency: "Lempira",
      createdAt: new Date("2024-11-27T02:55:43.193Z"),
      modifiedAt: new Date("2024-03-16T02:10:36.135Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-08-18T17:37:40.864Z"),
      endsAt: new Date("2024-06-20T17:53:47.217Z"),
      maxRedemptions: 652552,
      redemptionsCount: 295537,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2024-11-16T10:35:42.718Z"),
          modifiedAt: new Date("2024-11-27T05:20:13.228Z"),
          id: "<value>",
          name: "<value>",
          description: "both worth bin needy distorted eek boohoo",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 464473,
    maxPage: 375553,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |