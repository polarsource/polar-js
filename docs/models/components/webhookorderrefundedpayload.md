# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2023-03-16T21:31:12.259Z"),
    modifiedAt: new Date("2024-07-02T21:47:04.955Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "paid",
    paid: true,
    subtotalAmount: 355927,
    discountAmount: 314733,
    netAmount: 578610,
    amount: 683602,
    taxAmount: 268749,
    totalAmount: 129762,
    refundedAmount: 58808,
    refundedTaxAmount: 575753,
    currency: "Yuan Renminbi",
    billingReason: "purchase",
    billingAddress: {
      country: "FR",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-08-11T16:56:29.701Z"),
      modifiedAt: new Date("2023-04-12T07:45:24.959Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2023-02-16T13:38:47.958Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Georgiana_Cormier@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-12-07T06:13:20.624Z"),
      modifiedAt: new Date("2023-03-08T04:13:18.822Z"),
      id: "<value>",
      name: "<value>",
      description: "acidly colorless oof oof ugh beneath unruly",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-12-24T17:32:47.143Z"),
      modifiedAt: new Date("2024-03-30T05:24:00.433Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 480108,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 476084,
      createdAt: new Date("2024-07-27T09:05:42.579Z"),
      modifiedAt: new Date("2023-10-02T13:41:36.618Z"),
      id: "<value>",
      metadata: {
        "key": 302905,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-24T16:52:43.387Z"),
      endsAt: new Date("2023-07-05T23:12:47.347Z"),
      maxRedemptions: 159469,
      redemptionsCount: 417030,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 268109,
      },
      createdAt: new Date("2023-05-25T05:31:24.787Z"),
      modifiedAt: new Date("2023-02-12T23:23:38.484Z"),
      id: "<value>",
      amount: 25231,
      currency: "Euro",
      recurringInterval: "month",
      status: "canceled",
      currentPeriodStart: new Date("2024-06-04T11:01:30.776Z"),
      currentPeriodEnd: new Date("2025-09-17T20:09:09.916Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-02-08T14:25:18.262Z"),
      startedAt: new Date("2023-07-18T00:05:49.160Z"),
      endsAt: new Date("2024-01-07T00:17:06.784Z"),
      endedAt: new Date("2024-09-24T22:27:35.031Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-01-19T19:42:43.719Z"),
        modifiedAt: new Date("2023-10-21T17:10:27.496Z"),
        id: "<value>",
        label: "<value>",
        amount: 61889,
        taxAmount: 821304,
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