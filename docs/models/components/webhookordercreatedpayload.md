# WebhookOrderCreatedPayload

Sent when a new order is created.

A new order is created when:

* A customer purchases a one-time product. In this case, `billing_reason` is set to `purchase`.
* A customer starts a subscription. In this case, `billing_reason` is set to `subscription_create`.
* A subscription is renewed. In this case, `billing_reason` is set to `subscription_cycle`.
* A subscription is upgraded or downgraded with an immediate proration invoice. In this case, `billing_reason` is set to `subscription_update`.

<Warning>The order might not be paid yet, so the `status` field might be `pending`.</Warning>

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components/webhookordercreatedpayload.js";

let value: WebhookOrderCreatedPayload = {
  type: "order.created",
  timestamp: new Date("2023-10-06T17:04:58.025Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2024-12-27T21:37:16.242Z"),
    modifiedAt: new Date("2025-01-02T09:32:03.168Z"),
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
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-10-23T16:50:39.580Z"),
      modifiedAt: new Date("2023-12-12T00:57:39.847Z"),
      metadata: {
        "key": 166283,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-04-19T04:57:52.293Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": false,
      },
      id: "<value>",
      createdAt: new Date("2024-08-18T23:02:56.814Z"),
      modifiedAt: new Date("2025-02-16T17:05:48.519Z"),
      trialInterval: null,
      trialIntervalCount: 397442,
      name: "<value>",
      description: null,
      recurringInterval: null,
      recurringIntervalCount: 212587,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 1000,
      currency: "usd",
      createdAt: new Date("2025-03-11T05:21:51.572Z"),
      modifiedAt: null,
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: "<value>",
      startsAt: null,
      endsAt: new Date("2025-03-06T23:30:57.183Z"),
      maxRedemptions: 495740,
      redemptionsCount: 775225,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 4420.08,
      },
      createdAt: new Date("2023-12-26T18:24:48.736Z"),
      modifiedAt: new Date("2024-05-24T18:24:21.591Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "month",
      recurringIntervalCount: 960,
      status: "incomplete_expired",
      currentPeriodStart: new Date("2023-10-11T14:34:45.147Z"),
      currentPeriodEnd: new Date("2024-10-22T20:19:14.907Z"),
      trialStart: new Date("2025-07-09T10:12:20.525Z"),
      trialEnd: null,
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2025-11-22T14:25:51.795Z"),
      startedAt: new Date("2024-04-30T15:21:57.777Z"),
      endsAt: new Date("2023-11-02T13:05:04.577Z"),
      endedAt: new Date("2025-03-15T06:28:35.975Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
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
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | order.created                                                                                 |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |