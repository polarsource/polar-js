# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      durationInMonths: 35453,
      type: "percentage",
      amount: 718704,
      currency: "Iraqi Dinar",
      createdAt: new Date("2024-02-16T02:45:40.769Z"),
      modifiedAt: new Date("2024-10-28T04:42:36.139Z"),
      id: "<value>",
      metadata: {
        "key": 587397,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-09-04T21:50:43.396Z"),
      endsAt: new Date("2024-09-30T00:34:11.283Z"),
      maxRedemptions: 189863,
      redemptionsCount: 1712,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2025-11-14T07:21:36.206Z"),
          modifiedAt: new Date("2024-08-19T06:24:57.447Z"),
          id: "<value>",
          name: "<value>",
          description:
            "spanish mismatch possible opposite depot overconfidently",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 447113,
    maxPage: 973403,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |