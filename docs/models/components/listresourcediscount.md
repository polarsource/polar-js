# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      type: "percentage",
      basisPoints: 425759,
      createdAt: new Date("2023-04-27T00:40:26.962Z"),
      modifiedAt: new Date("2024-01-14T14:31:56.581Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-26T11:21:16.585Z"),
      endsAt: new Date("2023-04-29T17:12:43.686Z"),
      maxRedemptions: 462378,
      redemptionsCount: 278355,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2022-03-05T23:56:33.777Z"),
          modifiedAt: new Date("2024-10-26T21:27:50.253Z"),
          id: "<value>",
          name: "<value>",
          description: "come scarcely winged",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 498055,
    maxPage: 537614,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |