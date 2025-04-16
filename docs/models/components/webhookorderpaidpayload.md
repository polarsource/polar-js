# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    createdAt: new Date("2024-02-23T07:46:28.441Z"),
    modifiedAt: new Date("2023-01-22T20:00:27.076Z"),
    id: "<value>",
    metadata: {
      "key": 3741,
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 77223,
    discountAmount: 484286,
    netAmount: 655121,
    amount: 346420,
    taxAmount: 908161,
    totalAmount: 816520,
    refundedAmount: 402450,
    refundedTaxAmount: 311886,
    currency: "Kip",
    billingReason: "subscription_cycle",
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
    user: {
      id: "<value>",
      email: "Cayla87@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-10-05T23:06:11.563Z"),
      modifiedAt: new Date("2023-06-18T06:18:35.781Z"),
      id: "<value>",
      name: "<value>",
      description: "whoever extremely shyly uh-huh down likewise",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-11-18T12:36:34.663Z"),
      modifiedAt: new Date("2023-09-14T18:26:14.325Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 596384,
      currency: "Guinea Franc",
      createdAt: new Date("2023-08-25T10:08:49.137Z"),
      modifiedAt: new Date("2024-05-22T16:08:41.026Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-08T11:49:28.845Z"),
      endsAt: new Date("2023-06-28T10:35:28.549Z"),
      maxRedemptions: 713262,
      redemptionsCount: 21191,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2023-08-12T11:59:28.231Z"),
      modifiedAt: new Date("2023-08-04T19:53:41.037Z"),
      id: "<value>",
      amount: 710166,
      currency: "Costa Rican Colon",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2025-02-11T14:43:38.177Z"),
      currentPeriodEnd: new Date("2024-04-18T00:09:17.602Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-12-25T11:42:37.854Z"),
      startedAt: new Date("2024-05-01T14:56:00.496Z"),
      endsAt: new Date("2025-10-16T06:56:41.439Z"),
      endedAt: new Date("2023-11-12T16:00:39.109Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-09-03T10:13:57.361Z"),
        modifiedAt: new Date("2025-04-23T07:43:32.179Z"),
        id: "<value>",
        label: "<value>",
        amount: 160257,
        taxAmount: 66778,
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