# WebhookOrderUpdatedPayload

Sent when an order is updated.

An order is updated when:

* Its status changes, e.g. from `pending` to `paid`.
* It's refunded, partially or fully.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorderupdatedpayload.js";

let value: WebhookOrderUpdatedPayload = {
  type: "order.updated",
  timestamp: new Date("2025-02-16T15:02:37.628Z"),
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
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      metadata: {
        "key": "<value>",
      },
      id: "<value>",
      createdAt: new Date("2024-08-24T11:57:23.137Z"),
      modifiedAt: new Date("2026-02-17T20:12:35.643Z"),
      trialInterval: "day",
      trialIntervalCount: 360581,
      name: "<value>",
      description: "unrealistic bulky hutch",
      visibility: "draft",
      recurringInterval: "month",
      recurringIntervalCount: 663461,
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      durationInMonths: 43704,
      type: "fixed",
      amount: 1000,
      currency: "usd",
      amounts: {
        "eur": 900,
        "usd": 1000,
      },
      createdAt: new Date("2024-03-01T02:03:14.124Z"),
      modifiedAt: new Date("2026-02-02T20:35:02.495Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2026-09-22T08:07:10.457Z"),
      endsAt: new Date("2024-04-06T15:22:31.660Z"),
      maxRedemptions: 649644,
      redemptionsCount: 370324,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {},
      createdAt: new Date("2026-06-20T09:54:03.220Z"),
      modifiedAt: new Date("2024-08-23T08:31:41.560Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "year",
      recurringIntervalCount: 717014,
      status: "incomplete",
      currentPeriodStart: new Date("2026-08-19T01:28:11.741Z"),
      currentPeriodEnd: new Date("2024-06-29T04:52:24.272Z"),
      trialStart: new Date("2026-08-26T09:30:03.796Z"),
      trialEnd: new Date("2024-12-05T02:57:13.562Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2026-05-30T04:39:36.747Z"),
      startedAt: new Date("2025-04-10T20:35:43.034Z"),
      endsAt: new Date("2026-08-17T04:59:53.663Z"),
      endedAt: new Date("2024-08-26T04:01:26.686Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-02-25T16:09:23.428Z"),
        modifiedAt: new Date("2025-06-05T12:32:13.509Z"),
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
| `type`                                                                                        | *"order.updated"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           | order.updated                                                                                 |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |