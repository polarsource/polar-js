# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      type: "fixed",
      basisPoints: 794154,
      createdAt: new Date("2024-04-06T00:08:29.443Z"),
      modifiedAt: new Date("2025-10-15T22:27:51.866Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-06-11T07:02:23.326Z"),
      endsAt: new Date("2023-02-05T14:12:40.672Z"),
      maxRedemptions: 125622,
      redemptionsCount: 712690,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2023-01-12T13:17:30.759Z"),
          modifiedAt: new Date("2024-06-08T04:16:09.888Z"),
          id: "<value>",
          name: "<value>",
          description: "procrastinate under on ick lovingly paintwork versus",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 496921,
    maxPage: 485972,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |