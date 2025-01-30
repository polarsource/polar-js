# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      type: "fixed",
      amount: 845300,
      currency: "Czech Koruna",
      createdAt: new Date("2024-06-18T16:36:45.826Z"),
      modifiedAt: new Date("2025-03-11T15:36:59.646Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-16T08:24:56.079Z"),
      endsAt: new Date("2024-07-01T09:39:28.718Z"),
      maxRedemptions: 29572,
      redemptionsCount: 344026,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2023-10-14T16:34:12.050Z"),
          modifiedAt: new Date("2024-03-03T12:22:36.931Z"),
          id: "<value>",
          name: "<value>",
          description: "colorless phew spellcheck fisherman tentacle",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 803942,
    maxPage: 517842,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |