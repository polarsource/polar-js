# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2025-02-25T13:18:01.458Z"),
      modifiedAt: new Date("2023-06-27T11:59:02.381Z"),
      id: "<value>",
      metadata: {
        "key": 120388,
      },
      status: "<value>",
      amount: 365518,
      taxAmount: 397468,
      refundedAmount: 912986,
      refundedTaxAmount: 705317,
      currency: "Uzbekistan Sum",
      billingReason: "subscription_create",
      billingAddress: {
        country: "Central African Republic",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2024-03-24T22:59:34.235Z"),
        modifiedAt: new Date("2024-10-12T16:07:08.214Z"),
        id: "<value>",
        metadata: {
          "key": 896306,
        },
        email: "Deshawn_Daniel-Kreiger@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Panama",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://powerless-reconsideration.org/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Vicky.Zboncak@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-01-08T03:24:34.628Z"),
        modifiedAt: new Date("2025-12-03T07:25:14.463Z"),
        id: "<value>",
        name: "<value>",
        description:
          "reassemble traduce onto certification excluding safely not subsidy a",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-08-12T13:48:54.990Z"),
        modifiedAt: new Date("2023-10-08T04:45:48.967Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 161312,
        maximumAmount: 463193,
        presetAmount: 614594,
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 281064,
        createdAt: new Date("2024-09-21T18:02:02.726Z"),
        modifiedAt: new Date("2024-08-13T15:13:08.843Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-07-12T00:53:04.419Z"),
        endsAt: new Date("2025-04-05T05:49:34.506Z"),
        maxRedemptions: 534786,
        redemptionsCount: 639968,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": false,
        },
        createdAt: new Date("2024-10-01T20:58:37.340Z"),
        modifiedAt: new Date("2023-12-11T02:07:31.634Z"),
        id: "<value>",
        amount: 523250,
        currency: "Bahamian Dollar",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2023-02-15T01:23:01.586Z"),
        currentPeriodEnd: new Date("2023-01-01T22:22:58.693Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-08-30T05:33:10.904Z"),
        startedAt: new Date("2025-11-22T21:42:18.565Z"),
        endsAt: new Date("2025-09-19T13:14:07.711Z"),
        endedAt: new Date("2023-08-25T03:30:03.482Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 456468,
    maxPage: 70943,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |