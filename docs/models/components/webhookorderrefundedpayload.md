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
    product: {
      metadata: {
        "key": 213172,
      },
      createdAt: new Date("2025-07-12T01:10:54.918Z"),
      modifiedAt: new Date("2024-09-12T22:40:16.807Z"),
      id: "<value>",
      name: "<value>",
      description:
        "that less dereference enormously turbulent ick polished account",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 39421,
      createdAt: new Date("2024-10-04T00:09:28.667Z"),
      modifiedAt: new Date("2024-06-15T13:59:38.373Z"),
      id: "<value>",
      metadata: {
        "key": 3628.79,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-29T13:48:23.726Z"),
      endsAt: new Date("2025-03-31T04:42:37.083Z"),
      maxRedemptions: 897848,
      redemptionsCount: 527115,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-02-09T06:03:41.396Z"),
      modifiedAt: new Date("2024-07-07T11:57:21.325Z"),
      id: "<value>",
      amount: 161995,
      currency: "Belarusian Ruble",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-10-28T11:07:53.631Z"),
      currentPeriodEnd: new Date("2024-12-15T14:19:46.440Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-04-03T00:13:39.249Z"),
      startedAt: new Date("2024-12-06T03:02:48.494Z"),
      endsAt: new Date("2025-07-19T18:42:44.445Z"),
      endedAt: new Date("2024-08-22T02:30:26.195Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-09-06T09:48:15.576Z"),
        modifiedAt: new Date("2025-11-09T02:28:42.839Z"),
        id: "<value>",
        label: "<value>",
        amount: 721201,
        taxAmount: 478490,
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