# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-10-16T01:37:14.449Z"),
      modifiedAt: new Date("2025-09-30T14:09:22.071Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      amount: 686314,
      taxAmount: 691711,
      currency: "UAE Dirham",
      billingReason: "subscription_update",
      billingAddress: {
        country: "Turkmenistan",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2023-01-22T06:14:40.431Z"),
        modifiedAt: new Date("2024-10-17T17:31:30.443Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Rodrigo21@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Kiribati",
        },
        taxId: [
          "bo_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://downright-daughter.name",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Ima_Feil90@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-04-27T14:10:19.519Z"),
        modifiedAt: new Date("2023-02-01T17:24:49.733Z"),
        id: "<value>",
        name: "<value>",
        description: "fishery blah cooperative",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-01-24T18:09:07.037Z"),
        modifiedAt: new Date("2023-08-26T19:56:08.017Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      discount: {
        duration: "forever",
        durationInMonths: 388338,
        type: "percentage",
        basisPoints: 15557,
        createdAt: new Date("2023-06-08T14:30:43.169Z"),
        modifiedAt: new Date("2024-02-09T02:39:53.057Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-11-30T12:43:32.164Z"),
        endsAt: new Date("2023-03-05T10:15:44.066Z"),
        maxRedemptions: 378735,
        redemptionsCount: 241254,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-03-13T05:18:13.214Z"),
        modifiedAt: new Date("2024-01-21T03:47:17.857Z"),
        id: "<value>",
        amount: 733840,
        currency: "Azerbaijanian Manat",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2024-12-09T21:59:36.211Z"),
        currentPeriodEnd: new Date("2025-08-31T03:52:04.662Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-06-06T17:12:12.382Z"),
        endedAt: new Date("2025-06-13T14:44:19.237Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 609724,
    maxPage: 29242,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |