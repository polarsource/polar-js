# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2025-01-29T12:25:01.962Z"),
      modifiedAt: new Date("2025-10-12T17:09:21.424Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "pending",
      paid: true,
      subtotalAmount: 975228,
      discountAmount: 91236,
      netAmount: 42895,
      amount: 531754,
      taxAmount: 224411,
      totalAmount: 297626,
      refundedAmount: 617894,
      refundedTaxAmount: 351246,
      currency: "Zimbabwe Dollar",
      billingReason: "purchase",
      billingAddress: {
        country: "FR",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-08-17T05:51:35.005Z"),
        modifiedAt: new Date("2024-04-24T14:16:21.503Z"),
        metadata: {
          "key": false,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-09-13T15:29:47.794Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Jarod25@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-12-26T18:50:34.690Z"),
        modifiedAt: new Date("2023-06-26T19:08:50.389Z"),
        id: "<value>",
        name: "<value>",
        description: "provided overproduce abnegate bravely swiftly twin",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-02-20T17:29:30.928Z"),
        modifiedAt: new Date("2023-01-05T11:30:43.921Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 383012,
        maximumAmount: 867919,
        presetAmount: 485068,
      },
      discount: {
        duration: "forever",
        durationInMonths: 905516,
        type: "percentage",
        amount: 950080,
        currency: "Riel",
        createdAt: new Date("2024-12-22T16:38:40.411Z"),
        modifiedAt: new Date("2024-11-19T17:15:56.867Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-27T01:18:50.330Z"),
        endsAt: new Date("2023-03-16T12:27:11.675Z"),
        maxRedemptions: 575124,
        redemptionsCount: 178015,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2025-12-09T21:29:20.157Z"),
        modifiedAt: new Date("2024-02-26T10:25:54.049Z"),
        id: "<value>",
        amount: 519611,
        currency: "Kina",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2023-01-29T12:41:56.507Z"),
        currentPeriodEnd: new Date("2025-01-11T15:57:26.932Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-12-22T12:50:47.611Z"),
        startedAt: new Date("2025-08-21T18:47:35.544Z"),
        endsAt: new Date("2023-06-07T04:12:06.961Z"),
        endedAt: new Date("2023-02-03T14:02:44.437Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-07-26T07:33:30.803Z"),
          modifiedAt: new Date("2023-08-24T21:54:03.774Z"),
          id: "<value>",
          label: "<value>",
          amount: 753178,
          taxAmount: 55526,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 234829,
    maxPage: 830242,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |