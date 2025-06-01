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
  data: {
    id: "<value>",
    createdAt: new Date("2023-10-06T17:04:58.025Z"),
    modifiedAt: new Date("2024-12-27T21:37:16.242Z"),
    status: "pending",
    paid: true,
    subtotalAmount: 668246,
    discountAmount: 467357,
    netAmount: 1812,
    amount: 693089,
    taxAmount: 893426,
    totalAmount: 334746,
    refundedAmount: 866654,
    refundedTaxAmount: 493644,
    currency: "North Korean Won",
    billingReason: "subscription_update",
    billingName: "<value>",
    billingAddress: {
      country: "FR",
    },
    isInvoiceGenerated: false,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 734218,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-10-23T16:50:39.580Z"),
      modifiedAt: new Date("2024-05-14T04:26:31.780Z"),
      metadata: {
        "key": 752999,
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
      deletedAt: new Date("2025-11-29T23:08:09.503Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": 765700,
      },
      createdAt: new Date("2025-09-28T13:54:31.917Z"),
      modifiedAt: new Date("2025-01-25T07:39:50.630Z"),
      id: "<value>",
      name: "<value>",
      description:
        "headline ugh partially folklore receptor gosh dwell furthermore for midst",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      durationInMonths: 129675,
      type: "fixed",
      basisPoints: 226,
      createdAt: new Date("2024-02-05T14:53:34.516Z"),
      modifiedAt: new Date("2024-11-11T13:37:40.112Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-04-14T22:42:42.414Z"),
      endsAt: new Date("2023-01-08T01:56:34.831Z"),
      maxRedemptions: 804001,
      redemptionsCount: 165046,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2024-12-15T00:51:13.984Z"),
      modifiedAt: new Date("2023-05-14T10:13:47.010Z"),
      id: "<value>",
      amount: 97005,
      currency: "CFA Franc BEAC",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2023-12-16T11:47:17.463Z"),
      currentPeriodEnd: new Date("2025-01-07T07:56:21.338Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-04-21T10:31:24.947Z"),
      startedAt: new Date("2025-05-31T03:16:55.449Z"),
      endsAt: new Date("2025-01-09T12:56:54.240Z"),
      endedAt: new Date("2023-05-31T11:36:17.716Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-06-21T05:50:28.209Z"),
        modifiedAt: new Date("2023-06-21T16:47:17.985Z"),
        id: "<value>",
        label: "<value>",
        amount: 74671,
        taxAmount: 888993,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.created                                        |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |