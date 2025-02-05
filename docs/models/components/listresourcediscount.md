# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      type: "fixed",
      amount: 314769,
      currency: "Hryvnia",
      createdAt: new Date("2023-12-12T21:18:05.566Z"),
      modifiedAt: new Date("2025-06-20T13:02:49.294Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-06T07:58:52.676Z"),
      endsAt: new Date("2023-03-01T13:04:14.388Z"),
      maxRedemptions: 262883,
      redemptionsCount: 24886,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2025-11-17T10:52:20.252Z"),
          modifiedAt: new Date("2023-02-26T15:31:31.267Z"),
          id: "<value>",
          name: "<value>",
          description: "throughout supposing scrabble queasily haversack",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 840168,
    maxPage: 390200,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |