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
    subtotalAmount: 1812,
    discountAmount: 693089,
    netAmount: 893426,
    taxAmount: 334746,
    totalAmount: 866654,
    appliedBalanceAmount: 493644,
    dueAmount: 460641,
    refundedAmount: 875596,
    refundedTaxAmount: 984341,
    currency: "Kenyan Shilling",
    billingReason: "subscription_cycle",
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
      "key": 765700,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-09-28T13:54:31.917Z"),
      modifiedAt: new Date("2025-11-14T07:33:56.379Z"),
      metadata: {
        "key": 5274.55,
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
      deletedAt: null,
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": 25688,
      },
      id: "<value>",
      createdAt: new Date("2023-04-15T23:46:14.322Z"),
      modifiedAt: new Date("2023-08-21T23:53:48.706Z"),
      trialInterval: "month",
      trialIntervalCount: 68538,
      name: "<value>",
      description: "mmm judicious fortunately",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: null,
    subscription: null,
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