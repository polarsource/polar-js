# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      durationInMonths: 484547,
      type: "fixed",
      basisPoints: 370141,
      createdAt: new Date("2024-04-14T18:31:17.553Z"),
      modifiedAt: new Date("2023-12-13T12:05:42.154Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-13T00:40:25.139Z"),
      endsAt: new Date("2025-12-23T14:09:59.555Z"),
      maxRedemptions: 642928,
      redemptionsCount: 809794,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2025-03-01T08:59:39.201Z"),
          modifiedAt: new Date("2025-01-17T14:16:00.694Z"),
          id: "<value>",
          name: "<value>",
          description: "chasuble via feline yet",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 455069,
    maxPage: 492918,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |