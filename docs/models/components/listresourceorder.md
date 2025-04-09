# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-10-09T14:30:26.451Z"),
      modifiedAt: new Date("2024-08-26T12:56:04.119Z"),
      id: "<value>",
      metadata: {
        "key": 643092,
      },
      status: "refunded",
      paid: true,
      subtotalAmount: 781506,
      discountAmount: 260528,
      netAmount: 406538,
      amount: 241123,
      taxAmount: 226489,
      totalAmount: 541848,
      refundedAmount: 15913,
      refundedTaxAmount: 538708,
      currency: "Pataca",
      billingReason: "subscription_create",
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
        createdAt: new Date("2024-02-17T21:15:58.875Z"),
        modifiedAt: new Date("2024-08-09T10:54:47.875Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-06-08T05:54:14.205Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Kiley_Casper@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-03-24T02:22:36.352Z"),
        modifiedAt: new Date("2023-10-27T23:38:06.860Z"),
        id: "<value>",
        name: "<value>",
        description: "yuck since whose how unlike",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-04-06T11:49:30.977Z"),
        modifiedAt: new Date("2025-04-18T08:43:25.839Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 872853,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      discount: {
        duration: "forever",
        durationInMonths: 749688,
        type: "percentage",
        amount: 14668,
        currency: "Falkland Islands Pound",
        createdAt: new Date("2023-04-19T16:29:13.852Z"),
        modifiedAt: new Date("2023-03-19T02:56:23.253Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-05-18T20:03:37.998Z"),
        endsAt: new Date("2024-05-10T00:56:22.923Z"),
        maxRedemptions: 755445,
        redemptionsCount: 231093,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": 7539,
        },
        createdAt: new Date("2024-10-11T05:08:52.960Z"),
        modifiedAt: new Date("2024-01-10T12:13:15.900Z"),
        id: "<value>",
        amount: 32486,
        currency: "Kenyan Shilling",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2024-03-18T14:01:47.756Z"),
        currentPeriodEnd: new Date("2023-09-14T02:33:56.610Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-01-29T13:52:04.272Z"),
        startedAt: new Date("2023-10-21T19:30:29.762Z"),
        endsAt: new Date("2025-01-13T01:02:12.866Z"),
        endedAt: new Date("2024-09-09T16:50:46.141Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2025-06-30T20:47:17.644Z"),
          modifiedAt: new Date("2025-10-25T11:41:03.967Z"),
          id: "<value>",
          label: "<value>",
          amount: 117444,
          taxAmount: 431307,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 874732,
    maxPage: 968462,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |