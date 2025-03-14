# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-06-05T13:03:17.818Z"),
      modifiedAt: new Date("2023-08-12T17:54:50.405Z"),
      id: "<value>",
      metadata: {
        "key": 985049,
      },
      status: "<value>",
      subtotalAmount: 589101,
      discountAmount: 652345,
      netAmount: 288489,
      amount: 325851,
      taxAmount: 196355,
      totalAmount: 514602,
      refundedAmount: 147974,
      refundedTaxAmount: 618481,
      currency: "Won",
      billingReason: "subscription_cycle",
      billingAddress: {
        country: "US",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-08-26T22:14:14.011Z"),
        modifiedAt: new Date("2024-02-19T22:12:16.458Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-01-30T22:30:10.094Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Elliot47@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-12-23T18:24:26.701Z"),
        modifiedAt: new Date("2025-05-18T04:45:42.115Z"),
        id: "<value>",
        name: "<value>",
        description: "optimal fowl boggle bowed elevator blah boo daily ugh",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-02-25T02:47:45.118Z"),
        modifiedAt: new Date("2023-08-16T02:32:12.389Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        durationInMonths: 96417,
        type: "percentage",
        amount: 504097,
        currency: "Boliviano boliviano",
        createdAt: new Date("2024-01-21T08:41:14.953Z"),
        modifiedAt: new Date("2025-09-04T01:03:05.967Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-12T21:52:07.391Z"),
        endsAt: new Date("2025-08-20T14:30:30.151Z"),
        maxRedemptions: 310285,
        redemptionsCount: 789945,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-09-24T23:50:30.634Z"),
        modifiedAt: new Date("2024-08-08T10:13:51.600Z"),
        id: "<value>",
        amount: 431192,
        currency: "Cape Verde Escudo",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2025-03-11T20:25:17.588Z"),
        currentPeriodEnd: new Date("2024-04-27T21:37:38.772Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-11-26T11:27:09.590Z"),
        startedAt: new Date("2025-05-10T16:19:06.783Z"),
        endsAt: new Date("2023-02-18T12:13:52.647Z"),
        endedAt: new Date("2025-04-02T19:22:24.658Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-02-23T22:42:00.409Z"),
          modifiedAt: new Date("2025-10-12T12:09:44.335Z"),
          id: "<value>",
          label: "<value>",
          amount: 467039,
          taxAmount: 239127,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 448226,
    maxPage: 833781,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |