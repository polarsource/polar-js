# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-04-11T08:26:08.401Z"),
      modifiedAt: new Date("2024-02-15T23:24:08.849Z"),
      id: "<value>",
      amount: 613225,
      taxAmount: 441603,
      currency: "Kyat",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      user: {
        id: "<value>",
        email: "Shana_Ratke6@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://webbed-deed.name/",
      },
      product: {
        createdAt: new Date("2022-05-10T01:35:19.593Z"),
        modifiedAt: new Date("2022-10-24T15:37:48.458Z"),
        id: "<value>",
        name: "<value>",
        description: "impact annually amongst hence or",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-11-12T20:48:39.104Z"),
        modifiedAt: new Date("2023-01-28T12:53:11.672Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2023-12-30T23:25:04.720Z"),
        modifiedAt: new Date("2024-10-05T11:03:56.983Z"),
        id: "<value>",
        amount: 627113,
        currency: "Somoni",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2023-03-23T07:13:23.038Z"),
        currentPeriodEnd: new Date("2024-04-26T21:45:53.740Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-07-13T01:37:39.797Z"),
        endedAt: new Date("2022-02-24T05:49:24.787Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 13262,
    maxPage: 425123,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |