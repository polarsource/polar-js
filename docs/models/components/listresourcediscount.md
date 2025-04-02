# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      type: "percentage",
      amount: 577775,
      currency: "Turkish Lira",
      createdAt: new Date("2025-01-31T20:33:50.648Z"),
      modifiedAt: new Date("2023-02-20T20:35:50.646Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-05-09T19:43:06.838Z"),
      endsAt: new Date("2024-06-11T11:40:46.522Z"),
      maxRedemptions: 816410,
      redemptionsCount: 718185,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-08-16T00:35:17.530Z"),
          modifiedAt: new Date("2024-04-01T19:40:29.875Z"),
          id: "<value>",
          name: "<value>",
          description:
            "winged mid contravene correctly regarding far-flung handle amongst",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 875785,
    maxPage: 815754,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |