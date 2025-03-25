# WebhookOrderUpdatedPayload

Sent when an order is updated.

An order is updated when:

* Its status changes, e.g. from `pending` to `paid`.
* It's refunded, partially or fully.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorderupdatedpayload.js";

let value: WebhookOrderUpdatedPayload = {
  data: {
    createdAt: new Date("2024-08-02T00:48:03.968Z"),
    modifiedAt: new Date("2025-01-06T04:07:48.053Z"),
    id: "<value>",
    metadata: {
      "key": 959696,
    },
    status: "pending",
    paid: true,
    subtotalAmount: 763140,
    discountAmount: 870183,
    netAmount: 562066,
    amount: 456222,
    taxAmount: 596185,
    totalAmount: 428810,
    refundedAmount: 555194,
    refundedTaxAmount: 416934,
    currency: "Iranian Rial",
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
      createdAt: new Date("2023-07-02T12:43:21.651Z"),
      modifiedAt: new Date("2025-07-21T21:55:28.560Z"),
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
      deletedAt: new Date("2025-10-11T22:12:04.430Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Leta67@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-07-23T13:07:53.786Z"),
      modifiedAt: new Date("2023-02-05T22:08:14.307Z"),
      id: "<value>",
      name: "<value>",
      description: "courageous woot needily academics",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-10-07T18:28:40.287Z"),
      modifiedAt: new Date("2025-08-27T13:05:54.900Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 797527,
      maximumAmount: 808050,
      presetAmount: 927021,
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 196000,
      currency: "Pound Sterling",
      createdAt: new Date("2023-07-02T17:58:13.883Z"),
      modifiedAt: new Date("2023-07-09T06:36:49.077Z"),
      id: "<value>",
      metadata: {
        "key": 109683,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-19T13:56:02.962Z"),
      endsAt: new Date("2024-04-12T13:07:34.313Z"),
      maxRedemptions: 24548,
      redemptionsCount: 388333,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-06-24T23:05:22.860Z"),
      modifiedAt: new Date("2025-06-24T00:13:02.323Z"),
      id: "<value>",
      amount: 818422,
      currency: "Taka",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2023-09-18T19:37:47.169Z"),
      currentPeriodEnd: new Date("2025-04-15T01:42:53.846Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-09-03T06:39:55.329Z"),
      startedAt: new Date("2025-06-02T12:17:22.846Z"),
      endsAt: new Date("2023-04-28T14:26:46.798Z"),
      endedAt: new Date("2023-01-10T22:18:51.218Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2023-10-24T10:38:09.514Z"),
        modifiedAt: new Date("2024-11-06T08:04:38.587Z"),
        id: "<value>",
        label: "<value>",
        amount: 384273,
        taxAmount: 703407,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.updated                                        |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |