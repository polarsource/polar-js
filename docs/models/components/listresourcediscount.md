# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      durationInMonths: 294426,
      type: "fixed",
      basisPoints: 782277,
      createdAt: new Date("2022-06-16T18:55:28.891Z"),
      modifiedAt: new Date("2023-04-28T16:00:32.884Z"),
      id: "<value>",
      metadata: {
        "key": 769331,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-04-27T14:18:23.756Z"),
      endsAt: new Date("2022-09-30T19:12:28.413Z"),
      maxRedemptions: 80616,
      redemptionsCount: 485819,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2022-09-30T22:08:25.999Z"),
          modifiedAt: new Date("2024-01-22T07:34:15.679Z"),
          id: "<value>",
          name: "<value>",
          description: "blindly mixture yieldingly phooey",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 327988,
    maxPage: 223877,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |