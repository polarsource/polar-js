# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-06-30T04:04:20.139Z"),
      modifiedAt: new Date("2025-03-23T22:47:32.575Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "pending",
      paid: true,
      subtotalAmount: 825257,
      discountAmount: 9822,
      netAmount: 873132,
      amount: 106497,
      taxAmount: 125701,
      totalAmount: 166229,
      refundedAmount: 148343,
      refundedTaxAmount: 794779,
      currency: "Syrian Pound",
      billingReason: "purchase",
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
        createdAt: new Date("2024-09-19T10:31:49.778Z"),
        modifiedAt: new Date("2025-02-05T21:05:30.503Z"),
        metadata: {
          "key": 27689,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-02-25T02:47:45.118Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Antoinette.Kreiger-Reinger@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-05-15T15:39:25.865Z"),
        modifiedAt: new Date("2024-01-21T08:41:14.953Z"),
        id: "<value>",
        name: "<value>",
        description:
          "yippee joyous viciously barracks searchingly well-made apricot yum phooey following",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-09-27T15:10:59.185Z"),
        modifiedAt: new Date("2025-02-12T00:39:06.977Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 489096,
      },
      discount: {
        duration: "forever",
        type: "percentage",
        amount: 541245,
        currency: "Peso Uruguayo",
        createdAt: new Date("2024-10-11T05:54:19.987Z"),
        modifiedAt: new Date("2023-10-09T06:25:01.644Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-07-10T14:57:14.146Z"),
        endsAt: new Date("2024-06-06T04:13:55.600Z"),
        maxRedemptions: 887651,
        redemptionsCount: 709922,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": 687828,
        },
        createdAt: new Date("2024-04-24T19:43:12.777Z"),
        modifiedAt: new Date("2024-03-10T21:34:54.948Z"),
        id: "<value>",
        amount: 627838,
        currency: "Solomon Islands Dollar",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2025-11-18T22:03:20.474Z"),
        currentPeriodEnd: new Date("2023-05-08T00:16:06.920Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-12-20T11:06:36.165Z"),
        startedAt: new Date("2023-08-08T12:44:17.507Z"),
        endsAt: new Date("2023-03-30T16:05:48.461Z"),
        endedAt: new Date("2024-12-20T20:44:36.481Z"),
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
          createdAt: new Date("2025-12-03T07:25:14.463Z"),
          modifiedAt: new Date("2025-04-25T01:00:25.310Z"),
          id: "<value>",
          label: "<value>",
          amount: 392658,
          taxAmount: 600106,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 609454,
    maxPage: 765419,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |