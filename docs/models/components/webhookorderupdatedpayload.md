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
    createdAt: new Date("2024-02-18T11:40:55.217Z"),
    modifiedAt: new Date("2025-10-11T22:12:04.430Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "refunded",
    paid: true,
    subtotalAmount: 221490,
    discountAmount: 44252,
    netAmount: 431258,
    amount: 672627,
    taxAmount: 828481,
    totalAmount: 852689,
    refundedAmount: 32775,
    refundedTaxAmount: 244157,
    currency: "Hong Kong Dollar",
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
      createdAt: new Date("2025-04-21T03:25:09.956Z"),
      modifiedAt: new Date("2024-07-20T10:46:34.659Z"),
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
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-05-08T15:26:57.975Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Maurine72@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-04-23T18:42:01.159Z"),
      modifiedAt: new Date("2025-07-20T06:14:33.034Z"),
      id: "<value>",
      name: "<value>",
      description: "emergent upward rival",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-07-09T06:36:49.077Z"),
      modifiedAt: new Date("2024-06-11T18:46:45.984Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 321697,
      maximumAmount: 426594,
      presetAmount: 24548,
    },
    discount: {
      duration: "once",
      durationInMonths: 493579,
      type: "percentage",
      amount: 818422,
      currency: "Taka",
      createdAt: new Date("2024-10-20T22:41:41.776Z"),
      modifiedAt: new Date("2025-07-03T16:57:36.689Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-04-15T01:42:53.846Z"),
      endsAt: new Date("2025-09-03T06:39:55.329Z"),
      maxRedemptions: 806124,
      redemptionsCount: 107301,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-07-30T03:06:39.554Z"),
      modifiedAt: new Date("2023-10-24T10:38:09.514Z"),
      id: "<value>",
      amount: 616183,
      currency: "Indian Rupee",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2023-06-19T06:00:22.932Z"),
      currentPeriodEnd: new Date("2023-12-09T16:59:37.115Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-08-27T05:15:52.024Z"),
      startedAt: new Date("2025-11-16T13:14:05.219Z"),
      endsAt: new Date("2023-08-16T10:24:53.845Z"),
      endedAt: new Date("2025-05-14T03:52:20.829Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "missing_features",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-08-30T07:06:29.227Z"),
        modifiedAt: new Date("2023-07-01T10:30:42.476Z"),
        id: "<value>",
        label: "<value>",
        amount: 665960,
        taxAmount: 84211,
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