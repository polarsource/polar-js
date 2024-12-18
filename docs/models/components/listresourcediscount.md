# ListResourceDiscount

## Example Usage

```typescript
import { ListResourceDiscount } from "@polar-sh/sdk/models/components";

let value: ListResourceDiscount = {
  items: [
    {
      duration: "forever",
      type: "fixed",
      basisPoints: 617530,
      createdAt: new Date("2022-05-25T23:19:35.845Z"),
      modifiedAt: new Date("2023-04-19T06:24:50.359Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-05-27T16:26:09.723Z"),
      endsAt: new Date("2022-08-17T19:12:36.222Z"),
      maxRedemptions: 423019,
      redemptionsCount: 60393,
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2022-11-10T18:13:12.189Z"),
          modifiedAt: new Date("2022-03-26T21:44:52.578Z"),
          id: "<value>",
          name: "<value>",
          description: "now after over round despite consequently",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 99113,
    maxPage: 764666,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Discount*[]                                        | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |