# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-03-03T12:05:11.807Z"),
      modifiedAt: new Date("2023-11-29T03:56:04.500Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 485731,
      taxAmount: 775537,
      currency: "Syrian Pound",
      billingReason: "subscription_update",
      billingAddress: {
        country: "Thailand",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2023-02-25T14:42:47.207Z"),
        modifiedAt: new Date("2025-12-12T12:13:56.220Z"),
        id: "<value>",
        metadata: {
          "key": 192982,
        },
        email: "Reva_Ledner@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "United States Minor Outlying Islands",
        },
        taxId: [
          "ke_pin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://dark-captain.biz/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Claude_Blick24@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-03-04T09:01:12.508Z"),
        modifiedAt: new Date("2024-11-20T22:00:18.063Z"),
        id: "<value>",
        name: "<value>",
        description: "old-fashioned that or ouch splurge elegantly gerbil",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-11-02T12:08:56.595Z"),
        modifiedAt: new Date("2025-03-03T02:39:25.766Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 663909,
        maximumAmount: 762104,
        presetAmount: 146304,
      },
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 224402,
        currency: "Leone",
        createdAt: new Date("2025-02-27T15:11:58.405Z"),
        modifiedAt: new Date("2025-09-28T06:46:47.521Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-28T10:21:01.587Z"),
        endsAt: new Date("2024-12-29T20:01:25.846Z"),
        maxRedemptions: 412059,
        redemptionsCount: 259615,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": 302190,
        },
        createdAt: new Date("2024-08-04T19:38:41.247Z"),
        modifiedAt: new Date("2024-09-23T06:30:32.920Z"),
        id: "<value>",
        amount: 529067,
        currency: "Afghani",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2024-01-16T04:44:34.885Z"),
        currentPeriodEnd: new Date("2024-07-12T06:43:06.103Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-01-15T21:48:36.807Z"),
        startedAt: new Date("2023-08-07T08:45:14.107Z"),
        endsAt: new Date("2023-08-07T22:18:55.052Z"),
        endedAt: new Date("2025-03-31T18:00:09.052Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 932057,
    maxPage: 421005,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |