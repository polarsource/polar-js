# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-03-03T12:05:11.807Z"),
      modifiedAt: new Date("2023-11-29T03:56:04.500Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "<value>",
      amount: 485731,
      taxAmount: 775537,
      refundedAmount: 805326,
      refundedTaxAmount: 790570,
      currency: "Uganda Shilling",
      billingReason: "purchase",
      billingAddress: {
        country: "Wallis and Futuna",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2024-04-12T09:38:35.088Z"),
        modifiedAt: new Date("2023-07-31T12:12:04.922Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Toby53@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Russian Federation",
        },
        taxId: [
          "gb_vat",
        ],
        organizationId: "<value>",
        avatarUrl: "https://clean-essence.net/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Brenden.Stamm@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-11-20T22:00:18.063Z"),
        modifiedAt: new Date("2024-10-04T12:58:35.956Z"),
        id: "<value>",
        name: "<value>",
        description:
          "strident alienated gosh alongside chilly yahoo yippee carefully shadowy lobster",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-01-12T17:05:53.623Z"),
        modifiedAt: new Date("2024-01-18T05:13:42.234Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 790463,
        maximumAmount: 346895,
        presetAmount: 509380,
      },
      discount: {
        duration: "once",
        durationInMonths: 199753,
        type: "percentage",
        amount: 627953,
        currency: "Tala",
        createdAt: new Date("2024-04-06T10:06:23.670Z"),
        modifiedAt: new Date("2024-11-28T16:15:54.686Z"),
        id: "<value>",
        metadata: {
          "key": 473938,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-07-25T01:54:51.580Z"),
        endsAt: new Date("2024-05-12T21:58:45.738Z"),
        maxRedemptions: 928167,
        redemptionsCount: 620507,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2023-03-16T12:13:21.445Z"),
        modifiedAt: new Date("2025-12-12T14:47:34.950Z"),
        id: "<value>",
        amount: 399359,
        currency: "Kwacha",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2023-05-18T14:30:43.189Z"),
        currentPeriodEnd: new Date("2023-08-22T02:45:34.555Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-10-25T10:48:20.832Z"),
        startedAt: new Date("2024-08-22T00:01:10.136Z"),
        endsAt: new Date("2023-12-27T03:11:24.442Z"),
        endedAt: new Date("2023-02-18T09:57:33.124Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 398303,
    maxPage: 756424,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |