# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-09-26T09:34:22.320Z"),
    modifiedAt: new Date("2023-08-26T05:41:30.450Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 922757,
    taxAmount: 294076,
    currency: "Comoro Franc",
    billingReason: "subscription_create",
    billingAddress: {
      country: "San Marino",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2025-07-14T06:45:23.144Z"),
      modifiedAt: new Date("2023-06-02T10:10:05.991Z"),
      id: "<value>",
      metadata: {
        "key": 842855,
      },
      email: "Bartholome.Gutmann42@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Mauritius",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://clear-cut-waist.org",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Deangelo.Kub@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-02-18T15:18:08.947Z"),
      modifiedAt: new Date("2025-06-06T01:32:10.356Z"),
      id: "<value>",
      name: "<value>",
      description: "formal aw cutover bah hunt during up er",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-10-19T19:59:57.420Z"),
      modifiedAt: new Date("2025-11-21T15:56:29.957Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 147801,
      maximumAmount: 256916,
      presetAmount: 873557,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      durationInMonths: 532669,
      type: "fixed",
      basisPoints: 316542,
      createdAt: new Date("2024-05-04T18:39:05.975Z"),
      modifiedAt: new Date("2024-04-19T15:40:09.196Z"),
      id: "<value>",
      metadata: {
        "key": 914971,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-03-12T23:47:56.593Z"),
      endsAt: new Date("2025-03-08T09:23:45.816Z"),
      maxRedemptions: 289913,
      redemptionsCount: 577710,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2025-05-21T23:12:32.595Z"),
      modifiedAt: new Date("2024-01-13T14:31:45.263Z"),
      id: "<value>",
      amount: 770873,
      currency: "Solomon Islands Dollar",
      recurringInterval: "month",
      status: "unpaid",
      currentPeriodStart: new Date("2024-04-28T16:31:11.826Z"),
      currentPeriodEnd: new Date("2024-06-17T02:32:25.611Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-05-06T09:54:10.374Z"),
      endedAt: new Date("2024-09-14T08:37:16.402Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |