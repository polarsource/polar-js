# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-12-28T22:55:04.311Z"),
      modifiedAt: new Date("2024-03-03T08:45:54.051Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "pending",
      paid: true,
      subtotalAmount: 571158,
      discountAmount: 217338,
      netAmount: 377150,
      amount: 17530,
      taxAmount: 249042,
      totalAmount: 651003,
      refundedAmount: 123137,
      refundedTaxAmount: 661356,
      currency: "Trinidad and Tobago Dollar",
      billingReason: "subscription_update",
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
        createdAt: new Date("2024-05-27T04:43:05.121Z"),
        modifiedAt: new Date("2025-09-07T10:36:08.764Z"),
        metadata: {
          "key": false,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-06-30T22:01:44.842Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Hillard_Kassulke@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-08-24T17:28:28.690Z"),
        modifiedAt: new Date("2024-10-17T13:42:30.603Z"),
        id: "<value>",
        name: "<value>",
        description:
          "weakly before before extremely once ew via svelte acquire under",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-08-14T23:12:22.090Z"),
        modifiedAt: new Date("2023-11-17T08:26:15.219Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "once",
        durationInMonths: 700751,
        type: "fixed",
        basisPoints: 33295,
        createdAt: new Date("2023-03-31T01:33:21.843Z"),
        modifiedAt: new Date("2025-10-15T15:41:01.316Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-08-21T10:14:28.976Z"),
        endsAt: new Date("2023-08-18T13:45:43.796Z"),
        maxRedemptions: 6356,
        redemptionsCount: 772650,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2023-08-23T14:07:24.267Z"),
        modifiedAt: new Date("2023-07-08T20:28:56.674Z"),
        id: "<value>",
        amount: 808797,
        currency: "Cordoba Oro",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2025-09-04T09:52:55.353Z"),
        currentPeriodEnd: new Date("2025-01-15T18:51:08.358Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-11-19T06:51:09.218Z"),
        startedAt: new Date("2023-09-08T22:35:25.287Z"),
        endsAt: new Date("2023-01-22T11:37:01.698Z"),
        endedAt: new Date("2025-10-07T04:34:30.312Z"),
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
          createdAt: new Date("2025-12-02T12:30:01.615Z"),
          modifiedAt: new Date("2023-09-03T13:07:24.254Z"),
          id: "<value>",
          label: "<value>",
          amount: 278459,
          taxAmount: 909450,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 812655,
    maxPage: 97391,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |