# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    id: "<value>",
    createdAt: new Date("2023-10-06T17:04:58.025Z"),
    modifiedAt: new Date("2023-04-27T22:48:08.753Z"),
    status: "refunded",
    paid: true,
    subtotalAmount: 467357,
    discountAmount: 1812,
    netAmount: 693089,
    amount: 893426,
    taxAmount: 334746,
    totalAmount: 866654,
    refundedAmount: 493644,
    refundedTaxAmount: 460641,
    currency: "Tanzanian Shilling",
    billingReason: "subscription_update",
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
    isInvoiceGenerated: true,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {},
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-07-02T05:54:26.991Z"),
      modifiedAt: new Date("2023-12-03T03:44:13.678Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2024-08-18T23:02:56.814Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": 131.87,
      },
      createdAt: new Date("2024-09-10T09:53:33.542Z"),
      modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
      id: "<value>",
      name: "<value>",
      description: null,
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 730131,
      currency: "Argentine Peso",
      createdAt: new Date("2023-09-25T16:35:51.122Z"),
      modifiedAt: new Date("2023-02-17T22:27:48.746Z"),
      id: "<value>",
      metadata: {
        "key": 2446.34,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-01-16T07:39:17.060Z"),
      endsAt: new Date("2024-07-16T03:03:58.095Z"),
      maxRedemptions: 328255,
      redemptionsCount: 466795,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-10-14T15:57:55.645Z"),
      modifiedAt: new Date("2023-05-04T20:55:46.311Z"),
      id: "<value>",
      amount: 602962,
      currency: "CFA Franc BEAC",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2023-02-14T05:20:48.992Z"),
      currentPeriodEnd: new Date("2025-11-22T14:25:51.795Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2023-11-02T20:45:43.683Z"),
      startedAt: new Date("2025-11-30T18:32:35.930Z"),
      endsAt: new Date("2023-06-16T10:04:40.672Z"),
      endedAt: new Date("2025-03-27T15:38:39.644Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "customer_service",
      customerCancellationComment: "<value>",
    },
    items: [],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.paid                                           |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |