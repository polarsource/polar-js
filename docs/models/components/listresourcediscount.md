# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "forever",
      durationInMonths: 221447,
      type: "percentage",
      basisPoints: 760667,
      createdAt: new Date("2024-02-28T08:38:23.712Z"),
      modifiedAt: new Date("2025-07-10T23:10:00.876Z"),
      id: "<value>",
      metadata: {
        "key": 623460,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-04-24T21:27:44.545Z"),
      endsAt: new Date("2024-03-23T09:25:05.820Z"),
      maxRedemptions: 71414,
      redemptionsCount: 400913,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-03-07T03:43:14.669Z"),
          modifiedAt: new Date("2023-07-31T09:26:01.957Z"),
          id: "<value>",
          name: "<value>",
          description: "where climb satirise infatuated however factorize",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 645782,
    maxPage: 61822,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |