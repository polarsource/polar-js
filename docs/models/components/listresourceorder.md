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
        "key": 6430.92,
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
          "key": 2074,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-02-07T12:58:43.718Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Nathen_Mayert@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-10-27T23:38:06.860Z"),
        modifiedAt: new Date("2024-01-06T22:13:41.239Z"),
        id: "<value>",
        name: "<value>",
        description: "whose hence fooey yahoo including",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-04-18T08:43:25.839Z"),
        modifiedAt: new Date("2023-05-01T21:52:54.059Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 468710,
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 14668,
        createdAt: new Date("2023-11-06T09:50:35.469Z"),
        modifiedAt: new Date("2023-04-19T16:29:13.852Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-08-06T23:17:08.936Z"),
        endsAt: new Date("2025-05-18T20:03:37.998Z"),
        maxRedemptions: 451678,
        redemptionsCount: 755445,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-08-17T01:59:18.311Z"),
        modifiedAt: new Date("2023-01-09T06:19:13.784Z"),
        id: "<value>",
        amount: 592349,
        currency: "Hong Kong Dollar",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2024-09-30T13:10:51.970Z"),
        currentPeriodEnd: new Date("2023-02-19T18:08:03.773Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-03-18T14:01:47.756Z"),
        startedAt: new Date("2023-09-14T02:33:56.610Z"),
        endsAt: new Date("2023-01-29T13:52:04.272Z"),
        endedAt: new Date("2023-10-21T19:30:29.762Z"),
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
          createdAt: new Date("2024-09-09T16:50:46.141Z"),
          modifiedAt: new Date("2024-01-31T03:55:01.039Z"),
          id: "<value>",
          label: "<value>",
          amount: 831995,
          taxAmount: 938401,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 117444,
    maxPage: 431307,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |