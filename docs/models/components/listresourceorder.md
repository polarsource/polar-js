# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2025-05-08T20:46:51.073Z"),
      modifiedAt: new Date("2024-12-04T12:54:44.779Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      status: "<value>",
      amount: 569876,
      taxAmount: 217340,
      refundedAmount: 975750,
      refundedTaxAmount: 783687,
      currency: "Brazilian Real",
      billingReason: "subscription_create",
      billingAddress: {
        country: "Lao People's Democratic Republic",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2023-07-19T21:06:20.014Z"),
        modifiedAt: new Date("2025-02-10T21:28:56.934Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Brent.Wyman17@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Tonga",
        },
        taxId: [
          "mx_rfc",
        ],
        organizationId: "<value>",
        avatarUrl: "https://sour-farmer.name",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Kip_Yost@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-04-13T01:02:19.891Z"),
        modifiedAt: new Date("2024-05-17T14:37:28.815Z"),
        id: "<value>",
        name: "<value>",
        description:
          "backburn quizzically squeaky wherever short-term apud quickly sociable",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-09-13T11:06:26.457Z"),
        modifiedAt: new Date("2025-02-02T08:07:35.476Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "once",
        durationInMonths: 637186,
        type: "percentage",
        amount: 23910,
        currency: "Sudanese Pound",
        createdAt: new Date("2023-09-01T04:11:11.405Z"),
        modifiedAt: new Date("2023-03-01T17:18:33.209Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-12-20T19:57:52.166Z"),
        endsAt: new Date("2024-07-27T06:25:49.857Z"),
        maxRedemptions: 846938,
        redemptionsCount: 106252,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": false,
        },
        createdAt: new Date("2024-12-14T09:44:39.987Z"),
        modifiedAt: new Date("2023-08-24T13:30:24.202Z"),
        id: "<value>",
        amount: 736906,
        currency: "Seychelles Rupee",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-12-01T04:42:08.759Z"),
        currentPeriodEnd: new Date("2024-02-22T02:38:09.369Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-04-18T17:00:11.017Z"),
        startedAt: new Date("2024-08-10T12:03:37.307Z"),
        endsAt: new Date("2025-07-28T06:27:03.803Z"),
        endedAt: new Date("2023-05-02T16:25:41.913Z"),
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
    totalCount: 464640,
    maxPage: 519391,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |