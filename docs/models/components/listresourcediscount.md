# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "once",
      durationInMonths: 762643,
      type: "percentage",
      basisPoints: 563181,
      createdAt: new Date("2023-01-05T14:54:34.065Z"),
      modifiedAt: new Date("2022-06-26T03:55:13.180Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-03-05T03:05:50.686Z"),
      endsAt: new Date("2024-06-01T15:55:18.464Z"),
      maxRedemptions: 743949,
      redemptionsCount: 856729,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2024-02-11T17:46:51.214Z"),
          modifiedAt: new Date("2022-07-03T21:26:34.888Z"),
          id: "<value>",
          name: "<value>",
          description: "hence likewise highlight ouch thyme override bah zowie",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 218987,
    maxPage: 718028,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |