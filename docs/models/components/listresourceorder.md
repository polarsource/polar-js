# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-04-09T15:43:12.475Z"),
      modifiedAt: new Date("2022-11-29T16:28:43.939Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 733471,
      taxAmount: 366561,
      currency: "Yen",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Benny.Nienow13@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://elementary-pomelo.com/",
      },
      product: {
        createdAt: new Date("2024-01-24T09:32:26.939Z"),
        modifiedAt: new Date("2023-03-21T08:23:26.056Z"),
        id: "<value>",
        name: "<value>",
        description: "hence or tighten memorable",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-04-11T22:26:51.446Z"),
        modifiedAt: new Date("2023-12-25T07:57:58.923Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 863273,
        recurringInterval: "month",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-10-29T06:16:02.069Z"),
        modifiedAt: new Date("2024-08-27T16:44:25.827Z"),
        id: "<value>",
        amount: 873618,
        currency: "New Zealand Dollar",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2022-08-14T23:12:22.090Z"),
        currentPeriodEnd: new Date("2022-11-17T08:26:15.219Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-07-09T06:31:28.422Z"),
        endedAt: new Date("2024-12-29T18:54:48.908Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 192181,
    maxPage: 700751,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |