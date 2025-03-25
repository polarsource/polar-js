# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-02-29T21:55:30.875Z"),
      modifiedAt: new Date("2023-08-07T18:10:01.757Z"),
      id: "<value>",
      metadata: {
        "key": 125811,
      },
      status: "refunded",
      paid: true,
      subtotalAmount: 559232,
      discountAmount: 623373,
      netAmount: 230352,
      amount: 432356,
      taxAmount: 41429,
      totalAmount: 40256,
      refundedAmount: 309463,
      refundedTaxAmount: 489143,
      currency: "Guarani",
      billingReason: "subscription_update",
      billingAddress: {
        country: "SE",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-04-08T03:28:16.729Z"),
        modifiedAt: new Date("2025-03-08T10:53:45.227Z"),
        metadata: {
          "key": 141629,
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
        deletedAt: new Date("2025-06-11T01:39:56.107Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Viva37@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-02-22T23:43:28.527Z"),
        modifiedAt: new Date("2023-09-08T21:23:39.240Z"),
        id: "<value>",
        name: "<value>",
        description: "cruel so ethical",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-05-04T04:09:38.309Z"),
        modifiedAt: new Date("2024-06-05T13:03:17.818Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 652345,
        createdAt: new Date("2023-11-13T04:25:08.475Z"),
        modifiedAt: new Date("2023-12-24T03:11:43.574Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-07-18T00:04:56.566Z"),
        endsAt: new Date("2023-06-12T04:19:23.752Z"),
        maxRedemptions: 618481,
        redemptionsCount: 465310,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": 70720,
        },
        createdAt: new Date("2025-08-26T22:14:14.011Z"),
        modifiedAt: new Date("2024-02-19T22:12:16.458Z"),
        id: "<value>",
        amount: 206931,
        currency: "Sri Lanka Rupee",
        recurringInterval: "year",
        status: "past_due",
        currentPeriodStart: new Date("2024-01-08T17:38:27.920Z"),
        currentPeriodEnd: new Date("2023-11-30T00:18:02.410Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-12-25T18:28:53.746Z"),
        startedAt: new Date("2023-04-08T07:55:03.665Z"),
        endsAt: new Date("2024-02-05T11:44:57.983Z"),
        endedAt: new Date("2024-06-08T15:08:25.512Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-12-23T18:24:26.701Z"),
          modifiedAt: new Date("2025-05-18T04:45:42.115Z"),
          id: "<value>",
          label: "<value>",
          amount: 782688,
          taxAmount: 19463,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 190413,
    maxPage: 653394,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |