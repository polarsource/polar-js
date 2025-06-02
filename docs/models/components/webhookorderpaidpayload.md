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
    createdAt: new Date("2024-02-23T07:46:28.441Z"),
    modifiedAt: new Date("2023-01-22T20:00:27.076Z"),
    status: "refunded",
    paid: true,
    subtotalAmount: 374100,
    discountAmount: 928846,
    netAmount: 77223,
    amount: 484286,
    taxAmount: 655121,
    totalAmount: 346420,
    refundedAmount: 908161,
    refundedTaxAmount: 816520,
    currency: "Iranian Rial",
    billingReason: "subscription_create",
    billingName: "<value>",
    billingAddress: {
      country: "SE",
    },
    isInvoiceGenerated: false,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 1874.51,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-04-04T17:18:47.144Z"),
      modifiedAt: new Date("2023-01-30T03:47:49.583Z"),
      metadata: {
        "key": 180004,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-01-03T11:51:10.381Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2023-07-05T14:22:19.889Z"),
      modifiedAt: new Date("2025-08-28T14:11:32.620Z"),
      id: "<value>",
      name: "<value>",
      description:
        "slowly gadzooks of blah bulky pace quickly successfully down",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 203923,
      createdAt: new Date("2023-08-04T19:53:41.037Z"),
      modifiedAt: new Date("2025-02-17T08:11:49.014Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-21T07:24:08.898Z"),
      endsAt: new Date("2023-03-25T11:11:13.715Z"),
      maxRedemptions: 704940,
      redemptionsCount: 431575,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 443998,
      },
      createdAt: new Date("2025-10-16T06:56:41.439Z"),
      modifiedAt: new Date("2023-11-12T16:00:39.109Z"),
      id: "<value>",
      amount: 531447,
      currency: "Tugrik",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2023-03-15T04:31:40.969Z"),
      currentPeriodEnd: new Date("2024-07-04T20:01:06.232Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-02-08T20:00:20.071Z"),
      startedAt: new Date("2025-10-09T02:31:41.815Z"),
      endsAt: new Date("2024-04-18T03:33:40.234Z"),
      endedAt: new Date("2025-04-30T12:18:04.253Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-10-25T14:30:26.971Z"),
        modifiedAt: new Date("2023-07-18T20:30:09.480Z"),
        id: "<value>",
        label: "<value>",
        amount: 832715,
        taxAmount: 82488,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.paid                                           |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |