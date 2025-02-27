# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2024-04-05T13:49:22.596Z"),
    modifiedAt: new Date("2025-03-09T09:46:45.083Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "<value>",
    amount: 769872,
    taxAmount: 849690,
    refundedAmount: 32945,
    refundedTaxAmount: 310195,
    currency: "Libyan Dinar",
    billingReason: "subscription_create",
    billingAddress: {
      country: "Cyprus",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2023-12-04T10:19:12.982Z"),
      modifiedAt: new Date("2025-11-02T04:36:58.483Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      externalId: "<id>",
      email: "Abel25@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Cook Islands",
      },
      taxId: [
        "ru_kpp",
      ],
      organizationId: "<value>",
      avatarUrl: "https://clean-daddy.net",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Edison.DAmore10@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-04-12T13:07:34.313Z"),
      modifiedAt: new Date("2023-01-27T21:42:49.165Z"),
      id: "<value>",
      name: "<value>",
      description: "till crumble besides even forenenst lazily",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-04-25T16:14:24.819Z"),
      modifiedAt: new Date("2024-08-19T03:18:40.071Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 368599,
      currency: "Czech Koruna",
      createdAt: new Date("2025-05-14T18:51:09.710Z"),
      modifiedAt: new Date("2023-06-08T02:05:29.917Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-12-26T02:08:18.453Z"),
      endsAt: new Date("2023-03-06T16:32:50.796Z"),
      maxRedemptions: 810982,
      redemptionsCount: 627756,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2025-03-31T14:23:29.572Z"),
      modifiedAt: new Date("2024-09-06T23:43:29.550Z"),
      id: "<value>",
      amount: 836548,
      currency: "Fiji Dollar",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2025-11-27T03:38:53.892Z"),
      currentPeriodEnd: new Date("2023-09-05T21:52:02.990Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-01-18T05:58:43.162Z"),
      startedAt: new Date("2023-12-24T03:17:08.750Z"),
      endsAt: new Date("2024-07-04T18:00:25.840Z"),
      endedAt: new Date("2023-02-01T02:03:31.039Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      userId: "<value>",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |