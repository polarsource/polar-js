# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2024-05-30T11:19:51.638Z"),
    modifiedAt: new Date("2025-11-17T19:50:02.721Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "<value>",
    amount: 763140,
    taxAmount: 870183,
    refundedAmount: 562066,
    refundedTaxAmount: 456222,
    currency: "Mexican Peso",
    billingReason: "subscription_create",
    billingAddress: {
      country: "SE",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-04-01T23:01:50.436Z"),
      modifiedAt: new Date("2024-03-14T21:57:18.934Z"),
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
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Olen_Hodkiewicz@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-08-31T18:04:39.587Z"),
      modifiedAt: new Date("2023-02-18T12:00:13.872Z"),
      id: "<value>",
      name: "<value>",
      description: "elegantly celebrate until furthermore conceal er",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-08-03T19:36:13.826Z"),
      modifiedAt: new Date("2023-11-10T19:36:44.643Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 321697,
      currency: "Yen",
      createdAt: new Date("2023-01-27T21:42:49.165Z"),
      modifiedAt: new Date("2024-03-01T14:42:56.199Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-06-24T23:05:22.860Z"),
      endsAt: new Date("2025-06-24T00:13:02.323Z"),
      maxRedemptions: 818422,
      redemptionsCount: 80448,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 834587,
      },
      createdAt: new Date("2023-09-18T19:37:47.169Z"),
      modifiedAt: new Date("2025-04-15T01:42:53.846Z"),
      id: "<value>",
      amount: 890765,
      currency: "Syrian Pound",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2023-07-30T03:06:39.554Z"),
      currentPeriodEnd: new Date("2023-10-24T10:38:09.514Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-11-06T08:04:38.587Z"),
      startedAt: new Date("2024-02-26T03:55:17.766Z"),
      endsAt: new Date("2025-02-09T22:25:06.724Z"),
      endedAt: new Date("2024-01-22T23:17:01.541Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      userId: "<value>",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.refunded                                       |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |