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
      "key": true,
    },
    platformFeeAmount: 500,
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-03-15T16:51:44.459Z"),
      modifiedAt: new Date("2024-05-14T04:26:31.780Z"),
      metadata: {},
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
      deletedAt: new Date("2023-07-02T05:54:26.991Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": 765700,
      },
      id: "<value>",
      createdAt: new Date("2025-09-28T13:54:31.917Z"),
      modifiedAt: new Date("2025-11-14T07:33:56.379Z"),
      trialInterval: "month",
      trialIntervalCount: 709592,
      name: "<value>",
      description: null,
      recurringInterval: "week",
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 1000,
      currency: "usd",
      createdAt: new Date("2024-09-03T13:37:44.614Z"),
      modifiedAt: null,
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: null,
      startsAt: new Date("2023-02-14T18:58:15.064Z"),
      endsAt: new Date("2024-09-18T21:55:24.536Z"),
      maxRedemptions: null,
      redemptionsCount: 516035,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {},
      createdAt: new Date("2024-06-27T07:56:50.097Z"),
      modifiedAt: new Date("2024-01-16T07:39:17.060Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2024-04-29T10:34:50.731Z"),
      currentPeriodEnd: new Date("2024-05-26T14:35:18.792Z"),
      trialStart: new Date("2025-03-17T04:48:05.046Z"),
      trialEnd: null,
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2023-05-04T20:55:46.311Z"),
      startedAt: new Date("2025-10-27T14:16:47.398Z"),
      endsAt: new Date("2023-01-05T15:34:29.499Z"),
      endedAt: null,
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "switched_service",
      customerCancellationComment: "<value>",
    },
    items: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | order.created                                                                                 |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |