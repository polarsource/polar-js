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
    createdAt: new Date("2024-12-24T22:44:36.973Z"),
    modifiedAt: new Date("2023-06-16T23:47:43.360Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "pending",
    paid: true,
    subtotalAmount: 867115,
    discountAmount: 294266,
    netAmount: 435353,
    amount: 795457,
    taxAmount: 677509,
    totalAmount: 937865,
    refundedAmount: 621140,
    refundedTaxAmount: 97810,
    currency: "Uganda Shilling",
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
      createdAt: new Date("2023-02-28T21:24:26.026Z"),
      modifiedAt: new Date("2024-03-10T06:14:35.072Z"),
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
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-08-25T20:28:23.232Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Opal34@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-08-07T06:48:26.335Z"),
      modifiedAt: new Date("2025-11-19T01:12:45.930Z"),
      id: "<value>",
      name: "<value>",
      description: "pick obediently kissingly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-01-26T01:18:29.965Z"),
      modifiedAt: new Date("2025-06-07T02:11:09.431Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 75277,
      maximumAmount: 78246,
      presetAmount: 371287,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 707983,
      type: "percentage",
      basisPoints: 287153,
      createdAt: new Date("2024-08-23T21:19:59.665Z"),
      modifiedAt: new Date("2024-08-18T12:20:52.263Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-14T17:31:24.420Z"),
      endsAt: new Date("2023-11-01T16:14:51.028Z"),
      maxRedemptions: 793282,
      redemptionsCount: 659971,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 774880,
      },
      createdAt: new Date("2025-10-31T15:49:47.989Z"),
      modifiedAt: new Date("2023-02-10T05:07:51.800Z"),
      id: "<value>",
      amount: 147400,
      currency: "Swedish Krona",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2023-08-29T23:13:04.327Z"),
      currentPeriodEnd: new Date("2023-10-28T15:04:27.098Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-02-08T05:12:43.428Z"),
      startedAt: new Date("2023-02-03T02:11:26.549Z"),
      endsAt: new Date("2025-08-15T03:47:39.234Z"),
      endedAt: new Date("2024-05-02T03:34:27.990Z"),
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
        createdAt: new Date("2024-08-14T21:25:17.893Z"),
        modifiedAt: new Date("2024-12-08T12:23:49.649Z"),
        id: "<value>",
        label: "<value>",
        amount: 344856,
        taxAmount: 101107,
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