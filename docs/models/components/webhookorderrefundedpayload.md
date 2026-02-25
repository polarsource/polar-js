# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  type: "order.refunded",
  timestamp: new Date("2026-12-02T13:09:55.292Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2025-12-27T21:37:16.242Z"),
    modifiedAt: new Date("2026-01-02T09:32:03.168Z"),
    status: "refunded",
    paid: true,
    subtotalAmount: 10000,
    discountAmount: 1000,
    netAmount: 9000,
    taxAmount: 720,
    totalAmount: 9720,
    appliedBalanceAmount: 0,
    dueAmount: 0,
    refundedAmount: 0,
    refundedTaxAmount: 0,
    currency: "usd",
    billingReason: "purchase",
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
    invoiceNumber: "<value>",
    isInvoiceGenerated: true,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 734218,
    },
    platformFeeAmount: 500,
    platformFeeCurrency: "usd",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-03-24T08:16:45.004Z"),
      modifiedAt: new Date("2026-06-03T00:19:30.299Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "individual",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-10-31T02:47:18.612Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      metadata: {
        "key": 948.58,
      },
      id: "<value>",
      createdAt: new Date("2025-08-02T16:31:19.549Z"),
      modifiedAt: new Date("2024-04-19T20:07:27.928Z"),
      trialInterval: "day",
      trialIntervalCount: 893240,
      name: "<value>",
      description: "supposing tall alongside but apropos horst bah until",
      visibility: "draft",
      recurringInterval: "day",
      recurringIntervalCount: 883573,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 424288,
      type: "percentage",
      amount: 1000,
      currency: "usd",
      createdAt: new Date("2024-04-24T03:43:50.210Z"),
      modifiedAt: new Date("2026-12-03T13:13:09.933Z"),
      id: "<value>",
      metadata: {
        "key": 97979,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2026-03-20T02:25:31.650Z"),
      endsAt: new Date("2025-06-05T08:55:27.030Z"),
      maxRedemptions: 174869,
      redemptionsCount: 624711,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {},
      createdAt: new Date("2026-05-21T17:10:25.414Z"),
      modifiedAt: new Date("2025-07-05T19:43:41.790Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "day",
      recurringIntervalCount: 387537,
      status: "active",
      currentPeriodStart: new Date("2024-06-05T22:13:20.253Z"),
      currentPeriodEnd: new Date("2025-10-21T00:56:37.822Z"),
      trialStart: new Date("2026-06-29T10:52:26.601Z"),
      trialEnd: new Date("2025-01-05T10:23:32.832Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2024-11-20T14:04:25.809Z"),
      startedAt: new Date("2026-03-13T07:31:02.223Z"),
      endsAt: new Date("2026-09-14T14:43:50.641Z"),
      endedAt: new Date("2024-10-20T06:20:10.555Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: null,
      customerCancellationComment: "<value>",
    },
    items: [],
    description: "Pro Plan",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"order.refunded"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | order.refunded                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |