# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2022-06-03T21:44:38.598Z"),
      modifiedAt: new Date("2022-07-08T03:01:51.436Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 918413,
      taxAmount: 354705,
      currency: "Czech Koruna",
      billingReason: "subscription_update",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Lowell.Pfeffer@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://frugal-backbone.info",
      },
      product: {
        createdAt: new Date("2022-09-22T09:56:57.217Z"),
        modifiedAt: new Date("2022-03-03T10:36:02.199Z"),
        id: "<value>",
        name: "<value>",
        description: "underneath the plus roughly hmph when",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-06-07T21:29:28.096Z"),
        modifiedAt: new Date("2022-06-16T23:39:25.441Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 414720,
        maximumAmount: 910478,
        presetAmount: 468634,
        recurringInterval: "month",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2023-08-07T10:32:29.203Z"),
        modifiedAt: new Date("2022-03-08T16:23:57.837Z"),
        id: "<value>",
        amount: 294268,
        currency: "Somali Shilling",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2023-09-17T14:01:05.772Z"),
        currentPeriodEnd: new Date("2022-08-27T04:54:48.513Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-12-05T10:07:23.360Z"),
        endedAt: new Date("2024-05-08T22:06:09.845Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 127908,
    maxPage: 385546,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |