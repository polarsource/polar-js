# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-09-08T21:23:39.240Z"),
      modifiedAt: new Date("2023-04-16T20:05:09.708Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      status: "<value>",
      amount: 191079,
      taxAmount: 742848,
      refundedAmount: 561597,
      refundedTaxAmount: 830216,
      currency: "Zimbabwe Dollar",
      billingReason: "purchase",
      billingAddress: {
        country: "Cambodia",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2024-11-28T07:00:48.205Z"),
        modifiedAt: new Date("2023-02-09T18:57:00.819Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        externalId: "<id>",
        email: "Grayson20@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Saint Vincent and the Grenadines",
        },
        taxId: [
          "ch_vat",
        ],
        organizationId: "<value>",
        avatarUrl: "https://cultivated-swath.info",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Connie_Wyman65@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-12-24T03:11:43.574Z"),
        modifiedAt: new Date("2023-08-04T04:56:14.788Z"),
        id: "<value>",
        name: "<value>",
        description: "considering out scarification optimal fowl boggle bowed",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-05-17T23:11:42.440Z"),
        modifiedAt: new Date("2024-05-28T22:11:49.046Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 776031,
      },
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 808156,
        currency: "Iceland Krona",
        createdAt: new Date("2023-03-18T14:04:55.018Z"),
        modifiedAt: new Date("2025-02-15T09:24:38.615Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-02T12:29:33.565Z"),
        endsAt: new Date("2024-06-30T04:04:20.139Z"),
        maxRedemptions: 741743,
        redemptionsCount: 313064,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2025-06-23T11:32:52.597Z"),
        modifiedAt: new Date("2023-01-11T18:22:31.099Z"),
        id: "<value>",
        amount: 873132,
        currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2023-06-12T14:00:52.276Z"),
        currentPeriodEnd: new Date("2025-05-21T01:52:05.438Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-06-07T20:03:13.719Z"),
        startedAt: new Date("2023-07-05T17:41:09.307Z"),
        endsAt: new Date("2023-05-04T07:39:48.578Z"),
        endedAt: new Date("2024-09-19T10:31:49.778Z"),
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
    totalCount: 559040,
    maxPage: 27689,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |