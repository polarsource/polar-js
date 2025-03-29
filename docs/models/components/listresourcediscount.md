# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      type: "percentage",
      basisPoints: 857502,
      createdAt: new Date("2024-05-16T11:26:11.280Z"),
      modifiedAt: new Date("2025-05-17T20:32:17.192Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-14T18:42:51.260Z"),
      endsAt: new Date("2025-10-01T16:38:34.857Z"),
      maxRedemptions: 416975,
      redemptionsCount: 811865,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2025-05-05T14:38:18.417Z"),
          modifiedAt: new Date("2025-02-26T22:43:52.910Z"),
          id: "<value>",
          name: "<value>",
          description: "portray state hm what seemingly idolized",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 944955,
    maxPage: 989504,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |