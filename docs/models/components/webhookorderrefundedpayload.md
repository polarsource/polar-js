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
    status: "paid",
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
    isInvoiceGenerated: false,
    receiptNumber: "<value>",
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 455461,
    },
    platformFeeAmount: 500,
    platformFeeCurrency: "usd",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-09-15T15:31:44.390Z"),
      modifiedAt: new Date("2026-06-24T21:12:20.594Z"),
      metadata: {
        "key": 6072.74,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "team",
      name: "John Doe",
      billingName: "John Doe",
      billingAddress: null,
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-06-13T12:26:18.091Z"),
      firstUserEventAt: new Date("2025-10-02T10:08:37.346Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      metadata: {},
      id: "<value>",
      createdAt: new Date("2025-04-19T13:47:00.983Z"),
      modifiedAt: new Date("2024-02-17T21:35:57.188Z"),
      trialInterval: "day",
      trialIntervalCount: 696951,
      name: "<value>",
      description: "onto gladly exaggerate",
      visibility: "private",
      recurringInterval: "month",
      recurringIntervalCount: 350112,
      meterInterval: "day",
      meterIntervalCount: 134683,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 832052,
      type: "percentage",
      amount: 1000,
      currency: "usd",
      amounts: {
        "eur": 900,
        "usd": 1000,
      },
      createdAt: new Date("2025-06-25T13:41:11.193Z"),
      modifiedAt: new Date("2024-03-10T20:38:31.600Z"),
      id: "<value>",
      metadata: {
        "key": 1984.38,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-08-06T08:10:45.405Z"),
      endsAt: new Date("2024-02-21T14:45:53.075Z"),
      maxRedemptions: 844036,
      maxRedemptionsPerCustomer: 891168,
      redemptionsCount: 515748,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 937.97,
      },
      createdAt: new Date("2026-07-30T00:47:59.212Z"),
      modifiedAt: new Date("2024-10-02T18:21:25.457Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "year",
      recurringIntervalCount: 306180,
      status: "incomplete",
      currentPeriodStart: new Date("2025-04-30T04:55:43.054Z"),
      currentPeriodEnd: new Date("2024-08-11T08:44:58.861Z"),
      currentMeterPeriodStart: new Date("2025-07-14T11:06:57.535Z"),
      currentMeterPeriodEnd: new Date("2025-12-28T03:40:43.738Z"),
      trialStart: new Date("2026-07-14T05:29:25.216Z"),
      trialEnd: new Date("2024-07-15T19:35:20.571Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2024-02-05T19:38:49.892Z"),
      startedAt: new Date("2026-07-27T17:43:41.871Z"),
      endsAt: new Date("2025-04-16T19:39:05.792Z"),
      endedAt: new Date("2024-11-11T19:17:09.365Z"),
      pauseAtPeriodEnd: false,
      pausedAt: new Date("2024-02-18T07:41:25.454Z"),
      resumesAt: null,
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-10-13T17:44:56.945Z"),
        modifiedAt: new Date("2024-06-03T11:45:58.378Z"),
        id: "<value>",
        label: "Pro Plan",
        amount: 10000,
        taxAmount: 720,
        proration: false,
        productPriceId: "<value>",
      },
    ],
    description: "Pro Plan",
    refundableAmount: 9000,
    refundableTaxAmount: 720,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"order.refunded"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | order.refunded                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |