# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "repeating",
      type: "fixed",
      amount: 873613,
      currency: "Cordoba Oro",
      createdAt: new Date("2024-01-14T07:42:06.849Z"),
      modifiedAt: new Date("2023-05-17T03:56:32.810Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-06-04T03:56:34.081Z"),
      endsAt: new Date("2024-04-19T22:51:54.283Z"),
      maxRedemptions: 912095,
      redemptionsCount: 495291,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2023-08-05T19:48:44.616Z"),
          modifiedAt: new Date("2024-03-13T18:34:45.687Z"),
          id: "<value>",
          name: "<value>",
          description:
            "upward baptise clueless ack quaintly unlined encode always mindless underneath",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 744045,
    maxPage: 441348,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |