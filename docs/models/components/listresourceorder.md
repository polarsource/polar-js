# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-09-20T03:09:49.442Z"),
      modifiedAt: new Date("2023-06-21T01:11:23.657Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 169341,
      taxAmount: 409633,
      currency: "Mexican Peso",
      billingReason: "subscription_cycle",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Larry47@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://musty-poetry.info",
      },
      product: {
        createdAt: new Date("2023-03-11T21:34:54.948Z"),
        modifiedAt: new Date("2023-11-20T02:39:06.531Z"),
        id: "<value>",
        name: "<value>",
        description:
          "briskly pink behest yet huzzah than magnificent chainstay",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2022-02-17T00:20:01.255Z"),
        modifiedAt: new Date("2023-08-06T19:15:57.742Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 224411,
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2022-11-23T04:46:09.251Z"),
        modifiedAt: new Date("2023-11-09T05:04:32.559Z"),
        id: "<value>",
        amount: 351246,
        currency: "Zimbabwe Dollar",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-08-17T05:51:35.005Z"),
        currentPeriodEnd: new Date("2023-04-25T14:16:21.503Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-12-29T01:56:03.510Z"),
        endedAt: new Date("2022-11-06T22:46:44.719Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 91063,
    maxPage: 567195,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |