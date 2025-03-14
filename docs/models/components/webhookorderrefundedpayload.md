# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2025-09-03T06:39:55.329Z"),
    modifiedAt: new Date("2025-06-02T12:17:22.846Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "<value>",
    subtotalAmount: 9060,
    discountAmount: 191724,
    netAmount: 270477,
    amount: 616183,
    taxAmount: 384273,
    totalAmount: 703407,
    refundedAmount: 353075,
    refundedTaxAmount: 154425,
    currency: "Dalasi",
    billingReason: "subscription_update",
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
      createdAt: new Date("2023-08-16T10:24:53.845Z"),
      modifiedAt: new Date("2025-05-14T03:52:20.829Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2024-12-30T21:24:34.925Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Wayne_Spinka@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-02T12:01:00.206Z"),
      modifiedAt: new Date("2024-05-29T10:41:09.880Z"),
      id: "<value>",
      name: "<value>",
      description: "safe excitedly gee beneath since phony daintily now nephew",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-02-03T17:02:52.370Z"),
      modifiedAt: new Date("2025-11-29T12:45:09.445Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 693724,
    },
    discount: {
      duration: "forever",
      durationInMonths: 609687,
      type: "fixed",
      basisPoints: 476614,
      createdAt: new Date("2023-05-03T19:56:19.516Z"),
      modifiedAt: new Date("2023-12-19T06:40:56.361Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-05-02T07:25:31.700Z"),
      endsAt: new Date("2025-10-16T10:02:37.797Z"),
      maxRedemptions: 181267,
      redemptionsCount: 401388,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 946558,
      },
      createdAt: new Date("2023-05-26T22:19:48.108Z"),
      modifiedAt: new Date("2025-10-02T23:49:35.521Z"),
      id: "<value>",
      amount: 81053,
      currency: "Tenge",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-01-16T19:34:44.796Z"),
      currentPeriodEnd: new Date("2024-05-12T18:21:47.587Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-08-06T06:31:20.354Z"),
      startedAt: new Date("2025-11-12T18:00:26.208Z"),
      endsAt: new Date("2024-07-22T17:49:15.783Z"),
      endedAt: new Date("2025-08-11T15:06:17.582Z"),
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
        createdAt: new Date("2024-01-18T14:23:36.397Z"),
        modifiedAt: new Date("2023-08-01T20:05:03.973Z"),
        id: "<value>",
        label: "<value>",
        amount: 413135,
        taxAmount: 522824,
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