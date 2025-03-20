# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      durationInMonths: 107772,
      type: "percentage",
      basisPoints: 893477,
      createdAt: new Date("2024-04-09T18:38:17.654Z"),
      modifiedAt: new Date("2023-09-01T12:05:57.701Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-09-07T19:46:48.651Z"),
      endsAt: new Date("2025-09-22T02:49:31.119Z"),
      maxRedemptions: 418821,
      redemptionsCount: 487785,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2025-01-31T04:16:30.064Z"),
          modifiedAt: new Date("2024-01-30T00:42:04.756Z"),
          id: "<value>",
          name: "<value>",
          description:
            "stupendous inasmuch transparency oddly yahoo before needily phooey as gosh",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 495257,
    maxPage: 72741,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |