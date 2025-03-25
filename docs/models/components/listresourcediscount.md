# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components/listresourcediscount.js";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      type: "fixed",
      basisPoints: 93512,
      createdAt: new Date("2025-12-13T21:51:57.448Z"),
      modifiedAt: new Date("2023-04-03T22:36:08.417Z"),
      id: "<value>",
      metadata: {
        "key": 51109,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-16T16:45:02.911Z"),
      endsAt: new Date("2023-01-11T21:25:09.426Z"),
      maxRedemptions: 942435,
      redemptionsCount: 462162,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-10-21T19:47:23.356Z"),
          modifiedAt: new Date("2023-06-04T21:18:02.417Z"),
          id: "<value>",
          name: "<value>",
          description:
            "valuable accurate next possession characterization showboat",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 215727,
    maxPage: 965909,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |