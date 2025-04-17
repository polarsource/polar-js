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
      product: {
        metadata: {
          "key": 7457.81,
        },
        createdAt: new Date("2023-05-16T22:14:53.689Z"),
        modifiedAt: new Date("2024-09-25T16:39:47.501Z"),
        id: "<value>",
        name: "<value>",
        description:
          "yowza phew terribly boss bouncy strong needily fooey oxidise famously",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      discount: {
        duration: "repeating",
        durationInMonths: 563597,
        type: "fixed",
        amount: 831995,
        currency: "CFA Franc BEAC",
        createdAt: new Date("2023-05-09T17:14:55.049Z"),
        modifiedAt: new Date("2024-04-17T17:06:08.126Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-27T10:24:06.343Z"),
        endsAt: new Date("2025-04-11T01:42:11.892Z"),
        maxRedemptions: 263405,
        redemptionsCount: 33006,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": false,
        },
        createdAt: new Date("2025-09-28T22:58:26.788Z"),
        modifiedAt: new Date("2025-03-07T10:56:16.549Z"),
        id: "<value>",
        amount: 393618,
        currency: "Belize Dollar",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-05-01T09:13:40.896Z"),
        currentPeriodEnd: new Date("2025-04-13T10:13:06.820Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-03-12T12:51:44.220Z"),
        startedAt: new Date("2024-01-22T19:47:26.156Z"),
        endsAt: new Date("2024-12-19T01:15:01.022Z"),
        endedAt: new Date("2025-11-28T21:35:19.114Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-01-24T00:21:31.535Z"),
          modifiedAt: new Date("2023-06-26T21:04:57.109Z"),
          id: "<value>",
          label: "<value>",
          amount: 307758,
          taxAmount: 530031,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 294448,
    maxPage: 721884,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |