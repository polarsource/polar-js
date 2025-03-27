# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      durationInMonths: 53834,
      type: "fixed",
      amount: 327988,
      currency: "Djibouti Franc",
      createdAt: new Date("2024-12-31T19:13:04.647Z"),
      modifiedAt: new Date("2023-07-05T21:42:29.568Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-26T15:04:44.401Z"),
      endsAt: new Date("2024-06-04T11:33:54.284Z"),
      maxRedemptions: 51116,
      redemptionsCount: 170634,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2023-10-20T19:46:22.426Z"),
          modifiedAt: new Date("2025-08-18T01:43:29.999Z"),
          id: "<value>",
          name: "<value>",
          description:
            "drat typify brood anenst frantically tribe even zealous under axe",
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