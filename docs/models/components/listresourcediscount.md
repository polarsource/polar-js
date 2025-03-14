# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      durationInMonths: 861729,
      type: "percentage",
      basisPoints: 31323,
      createdAt: new Date("2025-04-06T09:07:29.092Z"),
      modifiedAt: new Date("2025-07-28T19:44:04.336Z"),
      id: "<value>",
      metadata: {
        "key": 791839,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-09-24T21:01:28.984Z"),
      endsAt: new Date("2024-09-14T18:42:51.260Z"),
      maxRedemptions: 916692,
      redemptionsCount: 416975,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2025-06-08T19:18:02.881Z"),
          modifiedAt: new Date("2025-05-05T14:38:18.417Z"),
          id: "<value>",
          name: "<value>",
          description: "mmm besmirch so voluntarily and duh intently amid",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 144952,
    maxPage: 278706,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |