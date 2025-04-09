# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2025-12-02T13:09:55.292Z"),
    modifiedAt: new Date("2024-06-08T06:31:37.268Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 691867,
    discountAmount: 813163,
    netAmount: 80093,
    amount: 124836,
    taxAmount: 870409,
    totalAmount: 607202,
    refundedAmount: 274984,
    refundedTaxAmount: 925178,
    currency: "Tenge",
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
      createdAt: new Date("2024-02-07T05:22:03.794Z"),
      modifiedAt: new Date("2023-03-02T08:02:47.952Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2025-01-04T13:12:40.817Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Crawford_Mann59@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-01-03T01:10:09.010Z"),
      modifiedAt: new Date("2023-09-20T09:34:50.363Z"),
      id: "<value>",
      name: "<value>",
      description: "amongst obedience brr male oh magnificent unabashedly",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-11-11T17:27:37.323Z"),
      modifiedAt: new Date("2025-07-27T02:58:28.772Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 39421,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 362879,
      createdAt: new Date("2025-12-29T13:48:23.726Z"),
      modifiedAt: new Date("2025-03-31T04:42:37.083Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-07-31T17:14:02.255Z"),
      endsAt: new Date("2023-01-11T00:34:07.344Z"),
      maxRedemptions: 35814,
      redemptionsCount: 505017,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-06-13T11:42:14.423Z"),
      modifiedAt: new Date("2023-02-04T11:13:38.578Z"),
      id: "<value>",
      amount: 262520,
      currency: "Metical",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2024-12-06T03:02:48.494Z"),
      currentPeriodEnd: new Date("2025-07-19T18:42:44.445Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-08-22T02:30:26.195Z"),
      startedAt: new Date("2025-02-04T08:09:36.758Z"),
      endsAt: new Date("2025-09-06T09:48:15.576Z"),
      endedAt: new Date("2025-11-09T02:28:42.839Z"),
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
        createdAt: new Date("2024-06-08T10:11:45.954Z"),
        modifiedAt: new Date("2025-02-19T06:15:30.269Z"),
        id: "<value>",
        label: "<value>",
        amount: 915670,
        taxAmount: 134513,
        proration: false,
        productPriceId: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.refunded                                       |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |