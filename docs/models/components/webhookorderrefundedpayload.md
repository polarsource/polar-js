# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2024-05-16T23:47:00.287Z"),
    modifiedAt: new Date("2024-08-25T03:54:23.094Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 617035,
    discountAmount: 887835,
    netAmount: 701257,
    amount: 68336,
    taxAmount: 500828,
    totalAmount: 286486,
    refundedAmount: 285175,
    refundedTaxAmount: 355927,
    currency: "Dalasi",
    billingReason: "subscription_cycle",
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
      createdAt: new Date("2023-10-22T13:11:01.959Z"),
      modifiedAt: new Date("2023-05-23T05:16:33.686Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2023-01-11T03:15:33.264Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Kale_Spinka44@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-05-09T19:55:42.332Z"),
      modifiedAt: new Date("2024-02-23T07:01:12.546Z"),
      id: "<value>",
      name: "<value>",
      description:
        "than acidly colorless oof oof ugh beneath unruly pupil extroverted",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-07-05T23:12:47.347Z"),
      modifiedAt: new Date("2023-06-24T18:40:30.017Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 426819,
    },
    discount: {
      duration: "once",
      durationInMonths: 39210,
      type: "fixed",
      amount: 271550,
      currency: "Won",
      createdAt: new Date("2025-03-06T23:06:11.778Z"),
      modifiedAt: new Date("2024-06-04T11:01:30.776Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-08T14:25:18.262Z"),
      endsAt: new Date("2023-07-18T00:05:49.160Z"),
      maxRedemptions: 338514,
      redemptionsCount: 577496,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2024-01-19T19:42:43.719Z"),
      modifiedAt: new Date("2023-10-21T17:10:27.496Z"),
      id: "<value>",
      amount: 61889,
      currency: "Baht",
      recurringInterval: "month",
      status: "past_due",
      currentPeriodStart: new Date("2025-12-13T23:26:30.191Z"),
      currentPeriodEnd: new Date("2023-01-02T17:56:36.906Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-06-09T09:55:13.803Z"),
      startedAt: new Date("2025-05-03T21:44:08.112Z"),
      endsAt: new Date("2025-06-01T10:04:24.136Z"),
      endedAt: new Date("2025-04-23T02:16:34.389Z"),
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
        createdAt: new Date("2025-12-08T19:51:14.504Z"),
        modifiedAt: new Date("2024-03-10T05:14:19.198Z"),
        id: "<value>",
        label: "<value>",
        amount: 601944,
        taxAmount: 63369,
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